package ch.sbb.kolomiiets.shopsystem.controller;

import ch.sbb.kolomiiets.shopsystem.service.DTO.CustomerDTO;
import ch.sbb.kolomiiets.shopsystem.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/alexshop/customers")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService){
        this.customerService = customerService;

    }

    @GetMapping
    public ResponseEntity<List<CustomerDTO>> getCustomers(){
        if(customerService.getCustomers().isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(customerService.getCustomers());
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<CustomerDTO> getCustomerById(@PathVariable int id){
        Optional<CustomerDTO> customerById = customerService.getCustomerById(id);
        if(customerById.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(customerById.get());
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<CustomerDTO> getCustomerByName(@PathVariable String name){
        name = URLDecoder.decode(name, StandardCharsets.UTF_8);
        Optional<CustomerDTO> customerByName = customerService.getCustomerByName(name);
        if(customerByName.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(customerByName.get());
    }

    @PostMapping
    public ResponseEntity<CustomerDTO> addCustomer(@RequestBody CustomerDTO newCustomer){
        Optional<CustomerDTO> addedCustomer = customerService.addCustomer(newCustomer);
        if(addedCustomer.isEmpty()){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
        return ResponseEntity.accepted().body(addedCustomer.get());
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity deleteCustomerById(@PathVariable int id){
        boolean operationResult = customerService.deleteCustomerById(id);
        return operationResult ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/name/{name}")
    public ResponseEntity deleteCustomerByName(@PathVariable String name){
        name = URLDecoder.decode(name, StandardCharsets.UTF_8);
        boolean operationResult = customerService.deleteCustomerByName(name);
        return operationResult ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @PutMapping
    public ResponseEntity<CustomerDTO> updateCustomer(@RequestBody CustomerDTO updatedCustomer){
        Optional<CustomerDTO> customerAfterUpdate = customerService.updateCustomer(updatedCustomer);
        if(customerAfterUpdate.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(customerAfterUpdate.get());
    }

}