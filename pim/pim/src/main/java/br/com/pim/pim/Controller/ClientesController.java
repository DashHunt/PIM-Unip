package br.com.pim.pim.Controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Modelo.classClientes;
import br.com.pim.pim.Controller.DTO.ClientesDto;

@RestController
public class ClientesController {
    
    @RequestMapping("/getClientes")
    public List<ClientesDto> getClientes(){
        classClientes clientes = new classClientes(0, "39387413845", "arthurconti@gmail.com", "Arthur", "senha", "Conti");
        return ClientesDto.converter(Arrays.asList(clientes));
    }    

}
