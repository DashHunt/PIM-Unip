package teste.testado.Controller;

import java.net.URI;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import teste.testado.Controller.DTO.TelefonesDto;
import teste.testado.Controller.Form.TelefonesForm;
import teste.testado.Modelo.Telefones;
import teste.testado.Repository.TelefonesRepository;

@RestController
@CrossOrigin
public class TelefonesController {
    @Autowired
    private TelefonesRepository repositorioTelefones;
    
    @RequestMapping(value = "/getTelefones", method = RequestMethod.GET)
    public List<TelefonesDto> getTelefones(Long idSolicitacao){
        if(idSolicitacao == null){
            List<Telefones> telefone = repositorioTelefones.findByTelefones();
            return TelefonesDto.converter(telefone);
        }else{
            List<Telefones> telefone = repositorioTelefones.findByIdSolicitacao(idSolicitacao);
            return TelefonesDto.converter(telefone);
        }
    }
    
    @RequestMapping(value = "/postTelefones", method = RequestMethod.POST)
    public ResponseEntity<TelefonesDto> postTelefones(@RequestBody TelefonesForm form, UriComponentsBuilder uriBuilder){
        Telefones telefone = form.converter();
        repositorioTelefones.save(telefone);

        URI uri = uriBuilder.path("/Telefones/{id}").buildAndExpand(telefone.getIdTelefone()).toUri();
        return ResponseEntity.created(uri).body(new TelefonesDto(telefone));
    }

    @Transactional
    @RequestMapping(value = "/putTelefones", method = RequestMethod.POST)
    public void atualizar(@RequestBody Telefones telefones) {
		repositorioTelefones.save(telefones);
	}

}