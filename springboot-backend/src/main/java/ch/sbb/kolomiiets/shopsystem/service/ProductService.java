package ch.sbb.kolomiiets.shopsystem.service;

import ch.sbb.kolomiiets.shopsystem.persistance.ProductRepository;
import ch.sbb.kolomiiets.shopsystem.persistance.entity.OrderEntity;
import ch.sbb.kolomiiets.shopsystem.persistance.entity.ProductEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.OrderDTO;
import ch.sbb.kolomiiets.shopsystem.service.DTO.ProductDTO;
import ch.sbb.kolomiiets.shopsystem.service.mapper.ProductMapper;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public ProductService(ProductRepository productRepository, ProductMapper productMapper) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

    @Transactional
    public List<ProductDTO> getProducts() {
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(ProductEntity pE : productRepository.findAll()){
            productDTOS.add(productMapper.fromEntityToDTO(pE));
        }

        return productDTOS;
    }

    @Transactional
    public Optional<ProductDTO> getProductById(Integer id){
        Optional<ProductEntity> productEntityOpt = productRepository.findById(id);
        return productMapper.getOptionalDTOFromOptionalEntity(productEntityOpt);
    }

    @Transactional
    public Optional<ProductDTO> getProductByName(String name){
        Optional<ProductEntity> productEntityOpt = productRepository.findByName(name);
        return productMapper.getOptionalDTOFromOptionalEntity(productEntityOpt);
    }

    @Transactional
    public Optional<ProductDTO> addProduct(ProductDTO newProduct){
        if(!existsProduct(newProduct)){
            ProductEntity newProductEntity = productRepository.save(productMapper.fromDTOToEntity(newProduct));
            return Optional.of(productMapper.fromEntityToDTO(newProductEntity));
        }
        return Optional.empty();
    }

    @Transactional
    public boolean deleteProductById(Integer id){
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean deleteProductByName(String name){
        if(productRepository.existsByName(name)){
            productRepository.deleteByName(name);
            return true;
        }
        return false;
    }

    @Transactional
    public Optional<ProductDTO> updateProduct(ProductDTO updatedProduct){
        if(productRepository.existsById(updatedProduct.getId())){
            productRepository.save(productMapper.fromDTOToEntity(updatedProduct));
            return Optional.of(updatedProduct);
        }
        return Optional.empty();
    }

    @Transactional
    public List<ProductDTO> getProductsByCategoryId(Integer id){
        List<ProductDTO> products = new ArrayList<>();
        for (ProductEntity pE : productRepository.findByCategory_Id(id)){
            ProductDTO productDTO = productMapper.fromEntityToDTO(pE);
            products.add(productDTO);
        }
        return products;
    }

    private boolean existsProduct(ProductDTO productDTO){
        return productDTO.getId() != null && productRepository.existsById(productDTO.getId()) ||
                productRepository.existsByName(productDTO.getName());
    }
}