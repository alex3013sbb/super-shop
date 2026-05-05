INSERT INTO status (name)
VALUES ('NEW'),
       ('PAID'),
       ('SHIPPED'),
       ('DELIVERED'),
       ('CANCELLED');


INSERT INTO category (name)
VALUES ('phones'),
       ('watches'),
       ('laptops');


INSERT INTO customer (name, email, address)
VALUES ('Alex TAFY', 'alex@sbb.ch', 'HS1 Bern Wankdorf'),
       ('Roman TAFY', 'roman@sbb.ch', 'HS1 Bern Wankdorf');


INSERT INTO product (name, price, category_id)
VALUES ('iphone 17 pro', 1050.00, (SELECT id FROM category WHERE name = 'phones')),
       ('apple watch ultra 2', 640.00, (SELECT id FROM category WHERE name = 'watches')),
       ('macbook pro 16', 2500.00, (SELECT id FROM category WHERE name = 'laptops'));


INSERT INTO "order" (customer_id, status_id)
VALUES ((SELECT id FROM customer WHERE email = 'alex@sbb.ch'), (SELECT id FROM status WHERE name = 'NEW')),
       ((SELECT id FROM customer WHERE email = 'roman@sbb.ch'), (SELECT id FROM status WHERE name = 'NEW'));


INSERT INTO ordered_product_info (product_id, amount, price_in_order_moment, order_id)
VALUES (
        (SELECT id FROM product WHERE name = 'iphone 17 pro'),
        2,
        1050.00,
        (SELECT id
         FROM "order"
         WHERE customer_id = (SELECT id FROM customer WHERE email = 'alex@sbb.ch')
         ORDER BY id DESC LIMIT 1)
        ),
(
    (SELECT id FROM product WHERE name = 'macbook pro 16'),
    13,
    2500.00,
    (SELECT id FROM "order" WHERE customer_id = (SELECT id FROM customer WHERE email = 'roman@sbb.ch') ORDER BY id DESC LIMIT 1)
);