CREATE TABLE IF NOT EXISTS category (
    id INT PRIMARY KEY generated always as identity,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS status (
    id INT PRIMARY KEY generated always as identity,
    name VARCHAR(100) NOT NULL UNIQUE
    );

CREATE TABLE IF NOT EXISTS product (
       id INT PRIMARY KEY generated always as identity,
       name VARCHAR(1024) NOT NULL UNIQUE,
       price NUMERIC NOT NULL,
       category_id INT,

        CONSTRAINT fk_product_category
            FOREIGN KEY (category_id)
            REFERENCES category(id)
            ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS customer (
    id INT PRIMARY KEY generated always as identity,
    name VARCHAR(1024) NOT NULL,
    email VARCHAR(120) NOT NULL,
    address VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS "order" (
    id INT PRIMARY KEY generated always as identity,
    customer_id INT,
    status_id INT,

    CONSTRAINT fk_order_customer
    FOREIGN KEY (customer_id)
    REFERENCES customer(id),

    CONSTRAINT fk_order_status
    FOREIGN KEY (status_id)
    REFERENCES status(id)
);

CREATE TABLE IF NOT EXISTS ordered_product_info (
    id INT PRIMARY KEY generated always as identity,
    product_id INT,
    amount INT NOT NULL,
    price_in_order_moment NUMERIC NOT NULL,
    order_id INT,

    CONSTRAINT fk_ordered_product_info_product
    FOREIGN KEY (product_id)
    REFERENCES product(id)
    ON DELETE NO ACTION,

    CONSTRAINT fk_ordered_product_info_order
    FOREIGN KEY (order_id)
    REFERENCES "order"(id)
);