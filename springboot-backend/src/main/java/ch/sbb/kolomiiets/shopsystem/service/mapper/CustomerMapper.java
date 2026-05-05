package ch.sbb.kolomiiets.shopsystem.service.mapper;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.CustomerEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.CustomerDTO;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CustomerMapper {

    public CustomerDTO fromEntityToDTO(CustomerEntity customerEntity){
        CustomerDTO customerDTO = new CustomerDTO();

        customerDTO.setId(customerEntity.getId());
        customerDTO.setName(customerEntity.getName());
        customerDTO.setEmail(customerEntity.getEmail());
        customerDTO.setAddress(customerEntity.getAddress());

        return customerDTO;
    }

    public CustomerEntity fromDTOToEntity(CustomerDTO customerDTO){
        CustomerEntity customerEntity = new CustomerEntity();

        customerEntity.setId(customerDTO.getId());
        customerEntity.setName(customerDTO.getName());
        customerEntity.setEmail(customerDTO.getEmail());
        customerEntity.setAddress(customerDTO.getAddress());

        return customerEntity;
    }

    public Optional<CustomerDTO> getOptionalDTOFromOptionalEntity(Optional<CustomerEntity> customerEntityOpt){
        if(customerEntityOpt.isPresent()){
            return Optional.of(fromEntityToDTO(customerEntityOpt.get()));
        }
        return Optional.empty();
    }

}
