package ch.sbb.kolomiiets.shopsystem.service.mapper;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.OrderedProductInfoEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.OrderedProductInfoDTO;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class OrderedProductInfoMapper {

    private ProductMapper productMapper;

    public OrderedProductInfoMapper(ProductMapper productMapper) {
        this.productMapper = productMapper;
    }

    public OrderedProductInfoDTO fromEntityToDTO(OrderedProductInfoEntity orderedProductInfoEntity){
        OrderedProductInfoDTO orderedProductInfoDTO = new OrderedProductInfoDTO();

        orderedProductInfoDTO.setId(orderedProductInfoEntity.getId());
        if(orderedProductInfoEntity.getProduct() != null){
            orderedProductInfoDTO.setProduct(
                    productMapper.fromEntityToDTO(orderedProductInfoEntity.getProduct()));
        } else{
            orderedProductInfoDTO.setProduct(null);
        }
        orderedProductInfoDTO.setAmount(orderedProductInfoEntity.getAmount());
        orderedProductInfoDTO.setPriceInOrderMoment(orderedProductInfoEntity.getPriceInOrderMoment());

        return orderedProductInfoDTO;
    }

    public OrderedProductInfoEntity fromDTOToEntity(OrderedProductInfoDTO orderedProductInfoDTO){
        OrderedProductInfoEntity orderedProductInfoEntity = new OrderedProductInfoEntity();

        orderedProductInfoEntity.setId(orderedProductInfoDTO.getId());
        if(orderedProductInfoDTO.getProduct() != null){
            orderedProductInfoEntity.setProduct(
                    productMapper.fromDTOToEntity(orderedProductInfoDTO.getProduct()));
        } else{
            orderedProductInfoEntity.setProduct(null);
        }
        orderedProductInfoEntity.setAmount(orderedProductInfoDTO.getAmount());
        orderedProductInfoEntity.setPriceInOrderMoment(orderedProductInfoDTO.getPriceInOrderMoment());

        return orderedProductInfoEntity;
    }

    public Optional<OrderedProductInfoDTO> getOptionalDTOFromOptionalEntity(Optional<OrderedProductInfoEntity> orderedProductInfoOpt){
        if(orderedProductInfoOpt.isPresent()){
            return Optional.of(fromEntityToDTO(orderedProductInfoOpt.get()));
        }
        return Optional.empty();
    }

}