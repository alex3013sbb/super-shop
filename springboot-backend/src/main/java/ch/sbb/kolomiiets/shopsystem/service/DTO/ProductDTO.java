package ch.sbb.kolomiiets.shopsystem.service.DTO;

import java.math.BigDecimal;

public class ProductDTO {

    private Integer id;
    private String name;
    private BigDecimal price;
    private CategoryDTO category;

    public ProductDTO(){}

    public ProductDTO(Integer id, String name, BigDecimal price, CategoryDTO category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public CategoryDTO getCategory() {
        return category;
    }

    public void setCategory(CategoryDTO category) {
        this.category = category;
    }

}