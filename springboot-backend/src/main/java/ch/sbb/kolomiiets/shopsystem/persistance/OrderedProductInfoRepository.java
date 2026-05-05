package ch.sbb.kolomiiets.shopsystem.persistance;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.OrderedProductInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderedProductInfoRepository extends JpaRepository<OrderedProductInfoEntity, Integer> {

    List<OrderedProductInfoEntity> getOrderedProductInfoEntityByProduct_Id(Integer productId);


    boolean getOrderedProductInfoEntityById(Integer id);
}
