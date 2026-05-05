package ch.sbb.kolomiiets.shopsystem.persistance;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<StatusEntity, Integer> {

    boolean existsByName(String name);
}
