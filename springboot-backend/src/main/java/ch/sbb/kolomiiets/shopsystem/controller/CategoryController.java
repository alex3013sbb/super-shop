package ch.sbb.kolomiiets.shopsystem.controller;

import ch.sbb.kolomiiets.shopsystem.service.CategoryService;
import ch.sbb.kolomiiets.shopsystem.service.DTO.CategoryDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/alexshop/categories")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> getCategories(){
        List<CategoryDTO> categories = categoryService.getCategories();
        if(categories.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(categories);
    }

    @PostMapping
    public ResponseEntity<CategoryDTO> addCategory(@RequestBody CategoryDTO newCategory){
        Optional<CategoryDTO> addedCategory = categoryService.addCategory(newCategory);
        if(addedCategory.isEmpty()){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.ok(addedCategory.get());
    }

    @PutMapping
    public ResponseEntity<CategoryDTO> updateCategory(@RequestBody CategoryDTO updatedCategory){
        Optional<CategoryDTO> updCategory = categoryService.updateCategory(updatedCategory);
        if(updCategory.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updCategory.get());
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity deleteCategoryById(@PathVariable Integer id){
        boolean operationResult = categoryService.deleteCategoryById(id);
        return operationResult ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}