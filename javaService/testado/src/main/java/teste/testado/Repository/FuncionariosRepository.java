package teste.testado.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import teste.testado.Modelo.Funcionarios;

import java.util.List;

public interface FuncionariosRepository extends JpaRepository<Funcionarios, Integer> {

    @Query("SELECT F FROM Funcionarios F where F.email=:email and F.senha=:senha")
    List<Funcionarios> findByEmail(String email, String senha);

}