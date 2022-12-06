package teste.testado.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import teste.testado.Modelo.perfilSite;

public interface ClientesRepository extends JpaRepository<perfilSite, Long> {

    @Query("SELECT C FROM perfilSite C where C.email=:email and C.senha=:senha")
    List<perfilSite> findByEmail(@Param("email") String email, @Param("senha") String senha);

    @Query("SELECT C FROM perfilSite C where C.idCliente=:idCliente")
    List<perfilSite> findById(@Param("idCliente") Integer idCliente);

    @Modifying
    @Query("UPDATE perfilSite C set C.idCliente=:idCliente WHERE C.idCliente=:idCliente")
    List<perfilSite> atualizar(@Param("idCliente") Integer idCliente);
    
}
