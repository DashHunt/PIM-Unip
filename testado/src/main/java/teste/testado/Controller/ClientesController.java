package teste.testado.Controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import teste.testado.Controller.DTO.ClientesDto;
import teste.testado.Controller.Form.ClienteForm;
import teste.testado.Modelo.PerfilSite;
import teste.testado.Repository.ClientesRepository;

@RestController
public class ClientesController {

    @Autowired
    private ClientesRepository repositorioCliente;
    
    @RequestMapping(value = "/getClientes", method = RequestMethod.GET)
    public List<ClientesDto> getClientes(String email, String senha){
        if(email == null){
            List<PerfilSite> clientes = repositorioCliente.findAll();
            return ClientesDto.converter(clientes);
        }else{
            List<PerfilSite> clientes = repositorioCliente.findByEmail(email, senha);
            return ClientesDto.converter(clientes);
        }
    }

    @RequestMapping(value = "/getClientesById", method = RequestMethod.GET)
    public List<ClientesDto> getClientesById(Integer idCliente){
        if(idCliente == null){
            List<PerfilSite> clientes = repositorioCliente.findAll();
            return ClientesDto.converter(clientes);
        }else{
            List<PerfilSite> clientes = repositorioCliente.findById(idCliente);
            return ClientesDto.converter(clientes);
        }
    }
    
    @RequestMapping(value = "/postClientes", method = RequestMethod.POST)
    public ResponseEntity<ClientesDto> postClientes(@RequestBody ClienteForm form, UriComponentsBuilder uriBuilder){
        PerfilSite cliente = form.converter();
        repositorioCliente.save(cliente);

        URI uri = uriBuilder.path("/Clientes/{id}").buildAndExpand(cliente.getIdCliente()).toUri();
        return ResponseEntity.created(uri).body(new ClientesDto(cliente));
    }



}    




