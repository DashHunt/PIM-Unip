package teste.testado.Controller;

import java.net.URI;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import teste.testado.Controller.DTO.SolicitacoesDto;
import teste.testado.Controller.Form.SolicitacoesForm;
import teste.testado.Modelo.Solicitacoes;
import teste.testado.Repository.SolicitacoesRepository;

@RestController
@CrossOrigin
public class SolicitacoesController {
    @Autowired
    private SolicitacoesRepository repositorioSolicitacoes;
    
    @RequestMapping(value = "/getSolicitacoes", method = RequestMethod.GET)
    public List<SolicitacoesDto> getSolicitacoes(Integer idSolicitacao){
        if(idSolicitacao == null){
            List<Solicitacoes> solicitacoes = repositorioSolicitacoes.findSolicitacoes();
            return SolicitacoesDto.converter(solicitacoes);
        }else{
            List<Solicitacoes> solicitacoes = repositorioSolicitacoes.findByIdSolicitacao(idSolicitacao);
            return SolicitacoesDto.converter(solicitacoes);
        }
    }

    @RequestMapping(value = "/getSolicitacoesByStatus", method = RequestMethod.GET)
    public List<Object[]> getSolicitacoesByStatus(String status){
        List<Object[]> solicitacoes = repositorioSolicitacoes.findByStatus(status);
        return solicitacoes;
    }



    @RequestMapping(value = "/postSolicitacoes", method = RequestMethod.POST)
    public ResponseEntity<SolicitacoesDto> postSolicitacoes(@RequestBody SolicitacoesForm form, UriComponentsBuilder uriBuilder){
        Solicitacoes solicitacoes = form.converter();
        repositorioSolicitacoes.save(solicitacoes);

        URI uri = uriBuilder.path("/Solicitacoes/{id}").buildAndExpand(solicitacoes.getIdSolicitacao()).toUri();
        return ResponseEntity.created(uri).body(new SolicitacoesDto(solicitacoes));
    }

    @Transactional
    @RequestMapping(value = "/putSolicitacoes", method = RequestMethod.POST)
    public void atualizar(@RequestBody Solicitacoes solicitacoes) {
		repositorioSolicitacoes.save(solicitacoes);
	}

    @DeleteMapping("/deleteSolicitacoes")
    public void deleteSolicitacoesById(Integer idSolicitacao) {
        repositorioSolicitacoes.deleteById(idSolicitacao);
     }

}


