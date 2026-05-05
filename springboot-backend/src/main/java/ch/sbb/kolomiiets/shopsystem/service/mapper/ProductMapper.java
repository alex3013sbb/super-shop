package ch.sbb.kolomiiets.shopsystem.service.mapper;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.CategoryEntity;
import ch.sbb.kolomiiets.shopsystem.persistance.entity.ProductEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.CategoryDTO;
import ch.sbb.kolomiiets.shopsystem.service.DTO.ProductDTO;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class ProductMapper {

    public ProductDTO fromEntityToDTO(ProductEntity productEntity){
        ProductDTO productDTO = new ProductDTO();

        productDTO.setId(productEntity.getId());
        productDTO.setName(productEntity.getName());
        productDTO.setPrice(productEntity.getPrice());
        if(productEntity.getCategory() != null){
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(productEntity.getCategory().getId());
            categoryDTO.setName(productEntity.getCategory().getName());

            productDTO.setCategory(categoryDTO);
        } else{
            productDTO.setCategory(null);
        }

        return productDTO;
    }

    public ProductEntity fromDTOToEntity(ProductDTO productDTO){
        ProductEntity productEntity = new ProductEntity();

        productEntity.setId(productDTO.getId());
        productEntity.setName(productDTO.getName());
        productEntity.setPrice(productDTO.getPrice());
        if(productDTO.getCategory() != null){
            CategoryEntity categoryEntity = new CategoryEntity();
            categoryEntity.setId(productDTO.getCategory().getId());
            categoryEntity.setName(productDTO.getCategory().getName());

            productEntity.setCategory(categoryEntity);
        } else{
            productEntity.setCategory(null);
        }

        return productEntity;
    }

    public Optional<ProductDTO> getOptionalDTOFromOptionalEntity(Optional<ProductEntity> productEntityOpt){
        if(productEntityOpt.isPresent()){
            return Optional.of(fromEntityToDTO(productEntityOpt.get()));
        }
        return Optional.empty();
    }

}
