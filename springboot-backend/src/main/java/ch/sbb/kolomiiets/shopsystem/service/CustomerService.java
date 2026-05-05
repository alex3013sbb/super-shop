package ch.sbb.kolomiiets.shopsystem.service;

import ch.sbb.kolomiiets.shopsystem.persistance.CustomerRepository;
import ch.sbb.kolomiiets.shopsystem.persistance.entity.CustomerEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.CustomerDTO;
import ch.sbb.kolomiiets.shopsystem.service.mapper.CustomerMapper;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;

    public CustomerService(CustomerRepository customerRepository, CustomerMapper customerMapper) {
        this.customerRepository = customerRepository;
        this.customerMapper = customerMapper;
    }

    @Transactional
    public List<CustomerDTO> getCustomers(){
        List<CustomerEntity> customerEntities = customerRepository.findAll();

        List<CustomerDTO> customers = new ArrayList<>();
        for(CustomerEntity cE : customerEntities) {
            customers.add(customerMapper.fromEntityToDTO(cE));
        }

        return customers;
    }

    @Transactional
    public Optional<CustomerDTO> getCustomerById(Integer id){
        Optional<CustomerEntity> customerEntity = customerRepository.findById(id);
        return customerMapper.getOptionalDTOFromOptionalEntity(customerEntity);
    }

    @Transactional
    public Optional<CustomerDTO> getCustomerByName(String name){
        Optional<CustomerEntity> customerEntity = customerRepository.findByName(name);
        return customerMapper.getOptionalDTOFromOptionalEntity(customerEntity);
    }

    @Transactional
    public Optional<CustomerDTO> addCustomer(CustomerDTO newCustomer){
        if(!existsCustomer(newCustomer)){
            CustomerEntity savedEntity = customerRepository.save(customerMapper.fromDTOToEntity(newCustomer));
            return Optional.of(customerMapper.fromEntityToDTO(savedEntity));
        }
        return Optional.empty();
    }

    @Transactional
    public boolean deleteCustomerById(Integer id){
        if(customerRepository.existsById(id)){
            customerRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean deleteCustomerByName(String name){
        if(customerRepository.existsByName(name)){
            customerRepository.deleteByName(name);
            return true;
        }
        return false;
    }

    @Transactional
    public Optional<CustomerDTO> updateCustomer(CustomerDTO updatedCustomer){
        if(customerRepository.existsById(updatedCustomer.getId())){
            CustomerEntity existingEntity = customerRepository.findById(updatedCustomer.getId()).get();

            existingEntity.setName(updatedCustomer.getName());
            existingEntity.setEmail(updatedCustomer.getEmail());
            existingEntity.setAddress(updatedCustomer.getAddress());

            customerRepository.save(existingEntity);

            return Optional.of(updatedCustomer);
        }
        return Optional.empty();
    }

    private boolean existsCustomer(CustomerDTO customerDTO){
        return customerDTO.getId() != null && customerRepository.existsById(customerDTO.getId()) ||
                customerRepository.existsByName(customerDTO.getName());
    }
}