package ch.sbb.kolomiiets.shopsystem;

import ch.sbb.kolomiiets.shopsystem.persistance.StatusRepository;
import ch.sbb.kolomiiets.shopsystem.persistance.entity.StatusEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.StatusDTO;
import ch.sbb.kolomiiets.shopsystem.service.StatusService;
import ch.sbb.kolomiiets.shopsystem.service.mapper.StatusMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class StatusServiceTest {

    @Mock
    private StatusRepository statusRepository;

    @Mock
    private StatusMapper statusMapper;

    @InjectMocks
    private StatusService statusService;

    @Test
    public void givenStatusDTO_whenAddStatus_thenSuccess(){

        StatusDTO givenStatusDTO = new StatusDTO(null, "NEW");
        StatusEntity entityToSave = new StatusEntity();
        StatusEntity savedEntity = new StatusEntity();
        savedEntity.setId(12);
        savedEntity.setName("NEW");
        StatusDTO savedDTO = new StatusDTO(12, "NEW");

        when(statusRepository.existsByName(givenStatusDTO.getName())).thenReturn(false);
        when(statusMapper.fromDTOToEntity(givenStatusDTO)).thenReturn(entityToSave);
        when(statusRepository.save(entityToSave)).thenReturn(savedEntity);
        when(statusMapper.fromEntityToDTO(savedEntity)).thenReturn(savedDTO);

        Optional<StatusDTO> saveResult = statusService.addStatus(givenStatusDTO);

        assertTrue(saveResult.isPresent());
        assertEquals("NEW", saveResult.get().getName());

        verify(statusRepository).save(any(StatusEntity.class));
    }

    @Test
    public void givenNotExistingId_WhenDeleteStatus_thenNoSuccess(){
        Integer id = 12;

        when(statusRepository.existsById(id)).thenReturn(false);

        boolean deleteResult = statusService.deleteStatusById(id);

        assertFalse(deleteResult);

    }
}
