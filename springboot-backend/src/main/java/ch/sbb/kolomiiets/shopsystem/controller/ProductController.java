package ch.sbb.kolomiiets.shopsystem.controller;

import ch.sbb.kolomiiets.shopsystem.service.DTO.ProductDTO;
import ch.sbb.kolomiiets.shopsystem.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/alexshop/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<ProductDTO>> getProducts(){
        if(productService.getProducts().isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(productService.getProducts());
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<ProductDTO> getProductByID(@PathVariable int id){
        Optional<ProductDTO> productById = productService.getProductById(id);
        if(productById.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productById.get());
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<ProductDTO> getProductByName(@PathVariable String name){
        name = URLDecoder.decode(name, StandardCharsets.UTF_8);
        Optional<ProductDTO> productByName = productService.getProductByName(name);
        if(productByName.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productByName.get());
    }

    @PostMapping
    public ResponseEntity<ProductDTO> addProduct(@RequestBody ProductDTO newProduct){
        Optional<ProductDTO> addedProduct = productService.addProduct(newProduct);
        if(addedProduct.isEmpty()){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
        return ResponseEntity.accepted().body(addedProduct.get());
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity deleteProductById(@PathVariable int id){
        boolean operationResult = productService.deleteProductById(id);
        return operationResult ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/name/{name}")
    public ResponseEntity deleteProductByName(@PathVariable String name){
        name = URLDecoder.decode(name, StandardCharsets.UTF_8);
        boolean operationResult = productService.deleteProductByName(name);
        return operationResult ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @PutMapping
    public ResponseEntity<ProductDTO> updateProduct(@RequestBody ProductDTO updatedProduct){
        Optional<ProductDTO> productAfterUpdate = productService.updateProduct(updatedProduct);
        if(productAfterUpdate.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productAfterUpdate.get());
    }

    @GetMapping("/bycategory/{id}")
    public ResponseEntity<List<ProductDTO>> getProductsByCategoryId(@PathVariable Integer id){
        List<ProductDTO> productsByCategoryId = productService.getProductsByCategoryId(id);
        if(productsByCategoryId.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productsByCategoryId);
    }

}