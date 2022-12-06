package teste.testado.Controller;

import java.net.URI;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import teste.testado.Controller.DTO.ClientesDto;
import teste.testado.Controller.Form.ClienteForm;
import teste.testado.Modelo.perfilSite;
import teste.testado.Repository.ClientesRepository;

@RestController
@CrossOrigin
public class ClientesController {

    @Autowired
    private ClientesRepository repositorioCliente;
    
    @RequestMapping(value = "/getClientes", method = RequestMethod.GET)
    public List<ClientesDto> getClientes(String email, String senha){
        if(email == null){
            List<perfilSite> clientes = repositorioCliente.findAll();
            return ClientesDto.converter(clientes);
        }else{
            List<perfilSite> clientes = repositorioCliente.findByEmail(email, senha);
            return ClientesDto.converter(clientes);
        }
    }

    @RequestMapping(value = "/getClientesById", method = RequestMethod.GET)
    public List<ClientesDto> getClientesById(Integer idCliente){
        if(idCliente == null){
            List<perfilSite> clientes = repositorioCliente.findAll();
            return ClientesDto.converter(clientes);
        }else{
            List<perfilSite> clientes = repositorioCliente.findById(idCliente);
            return ClientesDto.converter(clientes);
        }
    }
    
    @RequestMapping(value = "/postClientes", method = RequestMethod.POST)
    public ResponseEntity<ClientesDto> postClientes(@RequestBody ClienteForm form, UriComponentsBuilder uriBuilder){
        perfilSite cliente = form.converter();
        repositorioCliente.save(cliente);

        URI uri = uriBuilder.path("/Clientes/{id}").buildAndExpand(cliente.getIdCliente()).toUri();
        return ResponseEntity.created(uri).body(new ClientesDto(cliente));
    }

    @Transactional
    @RequestMapping(value = "/putClientes", method = RequestMethod.POST)
    public void atualizar(@RequestBody perfilSite clientes) {
		repositorioCliente.save(clientes);
	}



}    




