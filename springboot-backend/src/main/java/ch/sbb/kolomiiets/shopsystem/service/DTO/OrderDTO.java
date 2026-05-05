package ch.sbb.kolomiiets.shopsystem.service.DTO;

import java.util.ArrayList;
import java.util.List;

public class OrderDTO {

    private Integer id;
    private List<OrderedProductInfoDTO> orderedProductInfos = new ArrayList<>();
    private CustomerDTO customer;
    private StatusDTO status;

    public OrderDTO() {
    }

    public OrderDTO(Integer id, List<OrderedProductInfoDTO> orderedProductInfoS, CustomerDTO customer, StatusDTO status) {
        this.id = id;
        this.orderedProductInfos = orderedProductInfoS;
        this.customer = customer;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<OrderedProductInfoDTO> getOrderedProductInfos() {
        return orderedProductInfos;
    }

    public void setOrderedProductInfos(List<OrderedProductInfoDTO> orderedProductInfos) {
        this.orderedProductInfos = orderedProductInfos;
    }

    public CustomerDTO getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerDTO customer) {
        this.customer = customer;
    }

    public StatusDTO getStatus() {
        return status;
    }

    public void setStatus(StatusDTO status) {
        this.status = status;
    }
}
