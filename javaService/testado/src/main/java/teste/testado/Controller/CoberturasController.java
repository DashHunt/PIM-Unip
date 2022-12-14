package teste.testado.Controller;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import teste.testado.Controller.DTO.CoberturasDto;
import teste.testado.Controller.Form.CoberturasForm;
import teste.testado.Modelo.Coberturas;
import teste.testado.Repository.CoberturasRepository;

@RestController
@CrossOrigin
public class CoberturasController {
    @Autowired
    private CoberturasRepository repositorioCoberturas;
    
    @RequestMapping(value = "/getCoberturas", method = RequestMethod.GET)
    public List<CoberturasDto> getCoberturas(Long idSolicitacao){
        if(idSolicitacao == null){
            List<Coberturas> coberturas = repositorioCoberturas.findByCoberturas();
            return CoberturasDto.converter(coberturas);
        }else{
            List<Coberturas> coberturas = repositorioCoberturas.findByIdSolicitacao(idSolicitacao);
            return CoberturasDto.converter(coberturas);
        }
    }

    @RequestMapping(value = "/getTotalCoberturas", method = RequestMethod.GET)
    public List<CoberturasDto> getTotalCoberturas(){
        List<Coberturas> coberturas = repositorioCoberturas.findTotalCoberturas();
        return CoberturasDto.converter(coberturas);

    }
    
    @RequestMapping(value = "/postCoberturas", method = RequestMethod.POST)
    public ResponseEntity<CoberturasDto> postClientes(@RequestBody CoberturasForm form, UriComponentsBuilder uriBuilder){
        Coberturas coberturas = form.converter();
        repositorioCoberturas.save(coberturas);

        URI uri = uriBuilder.path("/Coberturas/{id}").buildAndExpand(coberturas.getIdCobertura()).toUri();
        return ResponseEntity.created(uri).body(new CoberturasDto(coberturas));
    }

    @Transactional
    @RequestMapping(value = "/putCoberturas", method = RequestMethod.POST)
    public void atualizar(@RequestBody Coberturas coberturas) {
		repositorioCoberturas.save(coberturas);
	}

    @DeleteMapping("/deleteCoberturas")
    public ResponseEntity<Object> deleteSolicitacoesById(Integer idSolicitacao, String descricao) {
        repositorioCoberturas.deleteById(idSolicitacao, descricao);

        return ResponseHandler.generateResponse("Deleted!", HttpStatus.OK, "Deleted");

    }
}