package ch.sbb.kolomiiets.shopsystem.persistance;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {

    Optional<ProductEntity> findByName(String name);

    boolean existsByName(String name);

    void deleteByName(String name);

    List<ProductEntity> findByCategory_Id(Integer categoryId);
}
