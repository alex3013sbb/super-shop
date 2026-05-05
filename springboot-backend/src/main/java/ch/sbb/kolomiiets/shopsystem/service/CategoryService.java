package ch.sbb.kolomiiets.shopsystem.service;

import ch.sbb.kolomiiets.shopsystem.persistance.CategoryRepository;
import ch.sbb.kolomiiets.shopsystem.persistance.entity.CategoryEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.CategoryDTO;
import ch.sbb.kolomiiets.shopsystem.service.mapper.CategoryMapper;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public CategoryService(CategoryRepository categoryRepository, CategoryMapper categoryMapper) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    @Transactional
    public List<CategoryDTO> getCategories() {
        List<CategoryDTO> categoryDTOS = new ArrayList<>();
        for (CategoryEntity cE : categoryRepository.findAll()) {
            categoryDTOS.add(categoryMapper.fromEntityToDTO(cE));
        }

        return categoryDTOS;
    }

    @Transactional
    public Optional<CategoryDTO> addCategory(CategoryDTO newCategoryDTO) {
        if(!existsCategory(newCategoryDTO)) {
            CategoryEntity savedEntity = categoryRepository.save(categoryMapper.fromDTOToEntity(newCategoryDTO));
            return Optional.of(categoryMapper.fromEntityToDTO(savedEntity));//sending orderDTO with ID, which we got from DB by INSERT
        }
        return Optional.empty();
    }

    @Transactional
    public boolean deleteCategoryById(Integer id) {
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public Optional<CategoryDTO> updateCategory(CategoryDTO updatedCategory) {
        if (updatedCategory.getId() != null && categoryRepository.existsById(updatedCategory.getId())) {
            CategoryEntity existingEntity = categoryRepository.findById(updatedCategory.getId()).get();

            existingEntity.setName(updatedCategory.getName());

            categoryRepository.save(existingEntity);

            return Optional.of(updatedCategory);
        }
        return Optional.empty();
    }


    private boolean existsCategory(CategoryDTO categoryDTO) {
        return categoryDTO.getId() != null && categoryRepository.existsById(categoryDTO.getId()) ||
                categoryRepository.existsByName(categoryDTO.getName());
    }

}