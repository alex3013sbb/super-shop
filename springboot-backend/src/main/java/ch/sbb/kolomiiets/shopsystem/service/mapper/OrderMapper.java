package ch.sbb.kolomiiets.shopsystem.service.mapper;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.OrderEntity;
import ch.sbb.kolomiiets.shopsystem.persistance.entity.OrderedProductInfoEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.OrderDTO;
import ch.sbb.kolomiiets.shopsystem.service.DTO.OrderedProductInfoDTO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class OrderMapper {

    private final OrderedProductInfoMapper orderedProductInfoMapper;
    private final CustomerMapper customerMapper;
    private final StatusMapper statusMapper;

    public OrderMapper(OrderedProductInfoMapper orderedProductInfoMapper, CustomerMapper customerMapper, StatusMapper statusMapper) {
        this.orderedProductInfoMapper = orderedProductInfoMapper;
        this.customerMapper = customerMapper;
        this.statusMapper = statusMapper;
    }

    public OrderDTO fromEntityToDTO(OrderEntity orderEntity) {
        OrderDTO orderDTO = new OrderDTO();

        orderDTO.setId(orderEntity.getId());

        if(!orderEntity.getOrderedProductInfos().isEmpty()){
            List<OrderedProductInfoDTO> orderedProductInfoDTOS = new ArrayList<>();

            for(OrderedProductInfoEntity oE : orderEntity.getOrderedProductInfos()){
                orderedProductInfoDTOS.add(orderedProductInfoMapper.fromEntityToDTO(oE));
            }
            orderDTO.setOrderedProductInfos(orderedProductInfoDTOS);
        }

        orderDTO.setCustomer(customerMapper.fromEntityToDTO(orderEntity.getCustomer()));
        orderDTO.setStatus(statusMapper.fromEntityToDTO(orderEntity.getStatus()));

        return orderDTO;
    }

    public OrderEntity fromDTOToEntity(OrderDTO orderDTO){
        OrderEntity orderEntity = new OrderEntity();

        orderEntity.setId(orderDTO.getId());

        List<OrderedProductInfoEntity> orderedProductInfoEntities = new ArrayList<>();
        if(!orderDTO.getOrderedProductInfos().isEmpty()){
            for(OrderedProductInfoDTO orderedProductInfoDTO : orderDTO.getOrderedProductInfos()){
                OrderedProductInfoEntity newOPIE = orderedProductInfoMapper.fromDTOToEntity(orderedProductInfoDTO);
                newOPIE.setOrder(orderEntity);
                orderedProductInfoEntities.add(newOPIE);
            }
            orderEntity.setOrderedProductInfos(orderedProductInfoEntities);
        }

        orderEntity.setCustomer(customerMapper.fromDTOToEntity(orderDTO.getCustomer()));
        orderEntity.setStatus(statusMapper.fromDTOToEntity(orderDTO.getStatus()));

        return orderEntity;
    }

    public Optional<OrderDTO> getOptionalDTOFromOptionalEntity(Optional<OrderEntity> orderEntity){
        return orderEntity.map(this::fromEntityToDTO);
    }
}