package ch.sbb.kolomiiets.shopsystem.controller;

import ch.sbb.kolomiiets.shopsystem.service.DTO.StatusDTO;
import ch.sbb.kolomiiets.shopsystem.service.StatusService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/alexshop/statuses")
public class StatusController {

    private final StatusService statusService;

    public StatusController(StatusService statusService) {
        this.statusService = statusService;
    }

    @GetMapping
    public ResponseEntity<List<StatusDTO>> getStatuses(){
        List<StatusDTO> statuses = statusService.getStatuses();
        if(statuses.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(statuses);
    }

    @PostMapping
    public ResponseEntity<StatusDTO> addStatus(@RequestBody StatusDTO newStatus){
        Optional<StatusDTO> addedStatus = statusService.addStatus(newStatus);
        if(addedStatus.isEmpty()){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.ok(addedStatus.get());
    }

    @PutMapping
    public ResponseEntity<StatusDTO> updateStatus(@RequestBody StatusDTO updatedStatus){
        Optional<StatusDTO> updStatus = statusService.updateStatus(updatedStatus);
        if(updStatus.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updStatus.get());
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity deleteStatusById(@PathVariable Integer id){
        boolean operationResult = statusService.deleteStatusById(id);
        return operationResult ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

}