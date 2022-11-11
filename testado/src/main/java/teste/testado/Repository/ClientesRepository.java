package teste.testado.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import teste.testado.Modelo.perfilSite;

public interface ClientesRepository extends JpaRepository<perfilSite, Integer> {

    List<perfilSite> findByEmail(String email);
    
}
