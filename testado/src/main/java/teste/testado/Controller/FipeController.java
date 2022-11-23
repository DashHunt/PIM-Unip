package teste.testado.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import teste.testado.Controller.DTO.FipeDto;

import teste.testado.Modelo.Fipe;
import teste.testado.Repository.FipeRepository;

@RestController
public class FipeController {
    @Autowired
    private FipeRepository repositorioFipe;
    
    @RequestMapping(value = "/getFipe", method = RequestMethod.GET)
    public List<FipeDto> getFipe(Integer idCarro){
        if(idCarro == null){
            List<Fipe> fipe = repositorioFipe.findAll();
            return FipeDto.converter(fipe);
        }else{
            List<Fipe> fipe = repositorioFipe.findByIdCarro(idCarro);
            return FipeDto.converter(fipe);
        }
    }

    @RequestMapping(value = "/getMarcaFipe", method = RequestMethod.GET)
    public List<Object[]> getMarcaFipe(String marca){
        return repositorioFipe.findMarcaFipe(marca);
    }

    @RequestMapping(value = "/getModeloFipe", method = RequestMethod.GET)
    public List<Object[]> getModeloFipe(String marca){
        return repositorioFipe.findModeloFipe(marca);
    }

    @RequestMapping(value = "/getAnoFipe", method = RequestMethod.GET)
    public List<Object[]> getAnoFipe(String modelo){
        return repositorioFipe.findAnoFipe(modelo);
    }

    @RequestMapping(value = "/getTipoFipe", method = RequestMethod.GET)
    public List<Object[]> getTipoFipe(String modelo){
        return repositorioFipe.findTipoFipe(modelo);
    }

    @RequestMapping(value = "/getValorFipe", method = RequestMethod.GET)
    public List<Object[]> getValorFipe(String modelo){
        return repositorioFipe.findValorFipe(modelo);
    }

}
