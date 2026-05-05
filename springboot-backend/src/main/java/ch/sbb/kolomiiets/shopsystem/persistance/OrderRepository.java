package ch.sbb.kolomiiets.shopsystem.persistance;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {

    List<OrderEntity> findOrderEntitiesByCustomer_Id(Integer customerId);
}
