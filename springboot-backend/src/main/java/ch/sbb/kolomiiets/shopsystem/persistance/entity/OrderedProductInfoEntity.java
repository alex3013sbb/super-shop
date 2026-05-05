package ch.sbb.kolomiiets.shopsystem.persistance.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "ordered_product_info")
public class OrderedProductInfoEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private ProductEntity product;

    @Column(name = "amount")
    private int amount;

    @Column(name = "price_in_order_moment")
    private BigDecimal priceInOrderMoment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private OrderEntity order;

    public OrderedProductInfoEntity() {
    }

    public OrderEntity getOrder() {
        return order;
    }

    public void setOrder(OrderEntity order) {
        this.order = order;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ProductEntity getProduct() {
        return product;
    }

    public void setProduct(ProductEntity product) {
        this.product = product;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public BigDecimal getPriceInOrderMoment() {
        return priceInOrderMoment;
    }

    public void setPriceInOrderMoment(BigDecimal priceInOrderMoment) {
        this.priceInOrderMoment = priceInOrderMoment;
    }

    @Override
    public String toString() {
        return "OrderedProductInfoEntity{" +
                "id=" + id +
                ", product=" + product +
                ", amount=" + amount +
                ", priceInOrderMoment=" + priceInOrderMoment +
                ", order=" + order +
                '}';
    }
}