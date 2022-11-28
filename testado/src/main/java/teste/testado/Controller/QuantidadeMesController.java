package teste.testado.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import teste.testado.Controller.DTO.QuantidadeMesDto;
import teste.testado.Modelo.QuantidadeMes;
import teste.testado.Repository.QuantidadeMesRepository;

@RestController
public class QuantidadeMesController {
    @Autowired
    private QuantidadeMesRepository repositorioQuantidadeMes;
    
    @RequestMapping(value = "/getQuantidadeMes", method = RequestMethod.GET)
    public List<QuantidadeMesDto> getQuantidadeMes(){
        List<QuantidadeMes> coberturas = repositorioQuantidadeMes.findQuantidadeMes();
        return QuantidadeMesDto.converter(coberturas);

    }
}
