package ch.sbb.kolomiiets.shopsystem.service.DTO;

import java.math.BigDecimal;

public class OrderedProductInfoDTO {

    private Integer id;
    private ProductDTO product;
    private int amount;
    private BigDecimal priceInOrderMoment;

    public OrderedProductInfoDTO() {
    }

    public OrderedProductInfoDTO(Integer id, ProductDTO product, int amount, BigDecimal priceInOrderMoment) {
        this.id = id;
        this.product = product;
        this.amount = amount;
        this.priceInOrderMoment = priceInOrderMoment;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ProductDTO getProduct() {
        return product;
    }

    public void setProduct(ProductDTO product) {
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
        return "OrderedProductInfoDTO{" +
                "id=" + id +
                ", product=" + product +
                ", amount=" + amount +
                ", priceInOrderMoment=" + priceInOrderMoment +
                '}';
    }
}