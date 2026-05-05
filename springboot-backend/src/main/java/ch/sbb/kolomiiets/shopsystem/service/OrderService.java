package ch.sbb.kolomiiets.shopsystem.service;

import ch.sbb.kolomiiets.shopsystem.persistance.OrderRepository;
import ch.sbb.kolomiiets.shopsystem.persistance.entity.OrderEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.OrderDTO;
import ch.sbb.kolomiiets.shopsystem.service.mapper.OrderMapper;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    public OrderService(OrderRepository orderRepository, OrderMapper orderMapper) {
        this.orderRepository = orderRepository;
        this.orderMapper = orderMapper;
    }

    @Transactional
    public List<OrderDTO> getOrders(){
        List<OrderDTO> orders = new ArrayList<>();

        for(OrderEntity oE: orderRepository.findAll()){
            orders.add(orderMapper.fromEntityToDTO(oE));
        }

        return orders;
    }

    @Transactional
    public Optional<OrderDTO> getOrderById(Integer id){
        if(orderRepository.existsById(id)){
            return orderMapper.getOptionalDTOFromOptionalEntity(orderRepository.findById(id));
        }
        return Optional.empty();
    }

    @Transactional
    public Optional<OrderDTO> addOrder(OrderDTO orderDTO){
        if(orderDTO.getId() != null && orderRepository.existsById(orderDTO.getId())){
            return Optional.empty();
        }

        OrderEntity orderEntity = orderRepository.save(orderMapper.fromDTOToEntity(orderDTO));
        return Optional.of(orderMapper.fromEntityToDTO(orderEntity));
    }

    @Transactional
    public Optional<OrderDTO> updateOrder(OrderDTO orderDTO){
        if(orderRepository.existsById(orderDTO.getId())){
            OrderEntity orderEntity = orderMapper.fromDTOToEntity(orderDTO);
            return Optional.of(orderMapper.fromEntityToDTO(orderRepository.save(orderEntity)));
        }
        return Optional.empty();
    }

    @Transactional
    public boolean deleteOrderById(Integer id){
        if(orderRepository.existsById(id)){
            orderRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public List<OrderDTO> getOrdersByCustomerId(Integer id){
        List<OrderDTO> orders = new ArrayList<>();
        for (OrderEntity oE : orderRepository.findOrderEntitiesByCustomer_Id(id)){
            OrderDTO orderDTO = orderMapper.fromEntityToDTO(oE);
            orders.add(orderDTO);
        }

        return orders;
    }
}