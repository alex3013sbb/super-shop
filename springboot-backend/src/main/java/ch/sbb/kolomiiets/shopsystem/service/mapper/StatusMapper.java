package ch.sbb.kolomiiets.shopsystem.service.mapper;

import ch.sbb.kolomiiets.shopsystem.persistance.entity.StatusEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.StatusDTO;
import org.springframework.stereotype.Component;

@Component
public class StatusMapper {

    public StatusDTO fromEntityToDTO(StatusEntity statusEntity){
        StatusDTO statusDTO = new StatusDTO();

        statusDTO.setId(statusEntity.getId());
        statusDTO.setName(statusEntity.getName());

        return statusDTO;
    }

    public StatusEntity fromDTOToEntity(StatusDTO statusDTO){
        StatusEntity statusEntity = new StatusEntity();

        statusEntity.setId(statusDTO.getId());
        statusEntity.setName(statusDTO.getName());

        return statusEntity;
    }
}
