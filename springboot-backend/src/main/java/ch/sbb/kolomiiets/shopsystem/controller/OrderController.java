package ch.sbb.kolomiiets.shopsystem.controller;

import ch.sbb.kolomiiets.shopsystem.service.DTO.OrderDTO;
import ch.sbb.kolomiiets.shopsystem.service.OrderService;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/alexshop/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<OrderDTO>> getOrders(){
        List<OrderDTO> orders = orderService.getOrders();
        if(orders.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<OrderDTO> getOrderById(@PathVariable Integer id){
        Optional<OrderDTO> orderById = orderService.getOrderById(id);
        if(orderById.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(orderById.get());
    }

    @PostMapping
    public ResponseEntity<OrderDTO> addOrder(@RequestBody OrderDTO newOrder){
        Optional<OrderDTO> addedOrder = orderService.addOrder(newOrder);
        if(addedOrder.isEmpty()){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.accepted().body(addedOrder.get());
    }

    @PutMapping
    public ResponseEntity<OrderDTO> updateOrder(@RequestBody OrderDTO updatedOrder){
        Optional<OrderDTO> updOrder = orderService.updateOrder(updatedOrder);
        if(updOrder.isEmpty()){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.accepted().body(updOrder.get());
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity deleteOrderById(@PathVariable Integer id){
        boolean operationResult = orderService.deleteOrderById(id);
        if(operationResult){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }


    @GetMapping("/bycustomer/{id}")
    public ResponseEntity<List<OrderDTO>> getOrdersByCustomerId(@PathVariable Integer id){
        List<OrderDTO> ordersByCustomerId = orderService.getOrdersByCustomerId(id);
        if(ordersByCustomerId.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(ordersByCustomerId);
    }

}