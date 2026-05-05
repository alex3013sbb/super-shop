package ch.sbb.kolomiiets.shopsystem.service.mapper;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.CategoryEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.CategoryDTO;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {

    public CategoryDTO fromEntityToDTO(CategoryEntity categoryEntity){
        CategoryDTO categoryDTO = new CategoryDTO();

        categoryDTO.setId(categoryEntity.getId());
        categoryDTO.setName(categoryEntity.getName());

        return categoryDTO;
    }

    public CategoryEntity fromDTOToEntity(CategoryDTO categoryDTO){
        CategoryEntity categoryEntity = new CategoryEntity();

        categoryEntity.setId(categoryDTO.getId());
        categoryEntity.setName(categoryDTO.getName());

        return categoryEntity;
    }

}