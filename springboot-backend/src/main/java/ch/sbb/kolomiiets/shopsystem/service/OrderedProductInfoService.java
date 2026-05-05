package ch.sbb.kolomiiets.shopsystem.service;

import ch.sbb.kolomiiets.shopsystem.persistance.OrderedProductInfoRepository;
import ch.sbb.kolomiiets.shopsystem.persistance.entity.OrderedProductInfoEntity;
import ch.sbb.kolomiiets.shopsystem.service.DTO.OrderedProductInfoDTO;
import ch.sbb.kolomiiets.shopsystem.service.mapper.OrderedProductInfoMapper;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderedProductInfoService {

    private final OrderedProductInfoRepository orderedProductInfoRepository;
    private final OrderedProductInfoMapper orderedProductInfoMapper;

    public OrderedProductInfoService(OrderedProductInfoRepository orderedProductInfoRepository, OrderedProductInfoMapper orderedProductInfoMapper) {
        this.orderedProductInfoRepository = orderedProductInfoRepository;
        this.orderedProductInfoMapper = orderedProductInfoMapper;
    }

    @Transactional
    public List<OrderedProductInfoDTO> getOrderedProductInfosByProductId(Integer productID){
        List<OrderedProductInfoDTO> productInfoDTOS = new ArrayList<>();

        for(OrderedProductInfoEntity oE : orderedProductInfoRepository.getOrderedProductInfoEntityByProduct_Id(productID)){
            productInfoDTOS.add(orderedProductInfoMapper.fromEntityToDTO(oE));
        }

        return productInfoDTOS;
    }

    @Transactional
    public Optional<OrderedProductInfoDTO> getOrderedProductInfoById(Integer id){
        Optional<OrderedProductInfoEntity> orderedProductInfoEntityOpt = orderedProductInfoRepository.findById(id);
        return orderedProductInfoMapper.getOptionalDTOFromOptionalEntity(orderedProductInfoEntityOpt);
    }

    @Transactional
    public Optional<OrderedProductInfoDTO> addOrderedProductInfo(OrderedProductInfoDTO newOrderedProductInfo){
        if(orderedProductInfoRepository.existsById(newOrderedProductInfo.getId())){
            return Optional.empty();
        }
        OrderedProductInfoEntity orderedProductInfoEntity = orderedProductInfoRepository.save(orderedProductInfoMapper.fromDTOToEntity(newOrderedProductInfo));
        return Optional.of(orderedProductInfoMapper.fromEntityToDTO(orderedProductInfoEntity));
    }

    @Transactional
    public boolean deleteById(Integer id){
        if(orderedProductInfoRepository.existsById(id)){
            orderedProductInfoRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Transactional
    public Optional<OrderedProductInfoDTO> updateOrderedProductInfo(OrderedProductInfoDTO newOrderedProductInfoDTO){
        if(orderedProductInfoRepository.existsById(newOrderedProductInfoDTO.getId())){
            orderedProductInfoRepository.save(orderedProductInfoMapper.fromDTOToEntity(newOrderedProductInfoDTO));
        }
        return Optional.empty();
    }

}