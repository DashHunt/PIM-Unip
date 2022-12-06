package teste.testado.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import teste.testado.Controller.DTO.FuncionariosDto;
import teste.testado.Modelo.Funcionarios;
import teste.testado.Repository.FuncionariosRepository;

@RestController
@CrossOrigin
public class FuncionariosController {

    @Autowired
    private FuncionariosRepository repositorioFuncionarios;
    
    @RequestMapping(value = "/getFuncionarios", method = RequestMethod.GET)
    public List<FuncionariosDto> getFuncionarios(String email, String senha){
        if(email == null){
            List<Funcionarios> funcionarios = repositorioFuncionarios.findAll();
            return FuncionariosDto.converter(funcionarios);
        }else{
            List<Funcionarios> funcionarios = repositorioFuncionarios.findByEmail(email, senha);
            return FuncionariosDto.converter(funcionarios);
        }
    }

}
