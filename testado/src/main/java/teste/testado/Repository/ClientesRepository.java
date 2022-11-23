package teste.testado.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import teste.testado.Modelo.PerfilSite;

public interface ClientesRepository extends JpaRepository<PerfilSite, Long> {

    @Query("SELECT C FROM PerfilSite C where C.email=:email and C.senha=:senha")
    List<PerfilSite> findByEmail(@Param("email") String email, @Param("senha") String senha);

    @Query("SELECT C FROM PerfilSite C where C.idCliente=:idCliente")
    List<PerfilSite> findById(@Param("idCliente") Integer idCliente);
    
}
