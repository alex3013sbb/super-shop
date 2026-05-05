package ch.sbb.kolomiiets.shopsystem.service;

import ch.sbb.kolomiiets.shopsystem.persistance.StatusRepository;
import ch.sbb.kolomiiets.shopsystem.persistance.entity.StatusEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.StatusDTO;
import ch.sbb.kolomiiets.shopsystem.service.mapper.StatusMapper;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StatusService {

    private final StatusRepository statusRepository;
    private final StatusMapper statusMapper;

    public StatusService(StatusRepository statusRepository, StatusMapper statusMapper) {
        this.statusRepository = statusRepository;
        this.statusMapper = statusMapper;
    }

    @Transactional
    public List<StatusDTO> getStatuses(){
        List<StatusDTO> statusDTOS = new ArrayList<>();
        for(StatusEntity sE : statusRepository.findAll()) {
            statusDTOS.add(statusMapper.fromEntityToDTO(sE));
        }

        return statusDTOS;
    }

    @Transactional
    public Optional<StatusDTO> addStatus(StatusDTO newStatusDTO){
        if(!existsStatus(newStatusDTO))
        {
            StatusEntity savedEntity = statusRepository.save(statusMapper.fromDTOToEntity(newStatusDTO));
            return Optional.of(statusMapper.fromEntityToDTO(savedEntity));
        }
        return Optional.empty();
    }

    @Transactional
    public boolean deleteStatusById(Integer id){
        if(statusRepository.existsById(id)){
            statusRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public Optional<StatusDTO> updateStatus(StatusDTO updatedStatus){
        if(statusRepository.existsById(updatedStatus.getId())){
            StatusEntity existingEntity = statusRepository.findById(updatedStatus.getId()).get();

            existingEntity.setName(updatedStatus.getName());

            statusRepository.save(existingEntity);

            return Optional.of(updatedStatus);
        }
        return Optional.empty();
    }

    private boolean existsStatus(StatusDTO statusDTO){
        return statusDTO.getId() != null && statusRepository.existsById(statusDTO.getId()) ||
                statusRepository.existsByName(statusDTO.getName());
    }
}
