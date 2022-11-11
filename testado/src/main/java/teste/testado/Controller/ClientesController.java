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
import teste.testado.Modelo.perfilSite;
import teste.testado.Repository.ClientesRepository;

@RestController
public class ClientesController {

    @Autowired
    private ClientesRepository repositorioCliente;
    
    @RequestMapping(value = "/getClientes", method = RequestMethod.GET)
    public List<ClientesDto> getClientes(String email){
        if(email == null){
            List<perfilSite> clientes = repositorioCliente.findAll();
            return ClientesDto.converter(clientes);
        }else{
            List<perfilSite> clientes = repositorioCliente.findByEmail(email);
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
}    




