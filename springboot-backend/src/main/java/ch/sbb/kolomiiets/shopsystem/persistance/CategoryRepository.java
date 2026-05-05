package ch.sbb.kolomiiets.shopsystem.persistance;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {

    boolean existsByName(String name);
}
