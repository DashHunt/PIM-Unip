package teste.testado.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import teste.testado.Modelo.Telefones;


public interface TelefonesRepository extends JpaRepository<Telefones, Long> {

    List<Telefones> findByIdSolicitacao(Long idSolicitacao);

    @Query("SELECT T FROM Telefones T")
    List<Telefones> findByTelefones();

    @Modifying
    @Query("UPDATE Telefones T set T.idSolicitacao=:idSolicitacao WHERE T.idSolicitacao=:idSolicitacao")
    List<Telefones> putTelefones(@Param("idSolicitacao") Integer idSolicitacao);
   
}