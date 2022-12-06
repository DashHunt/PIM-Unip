package teste.testado.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import teste.testado.Modelo.Coberturas;

public interface CoberturasRepository extends JpaRepository<Coberturas, Long> {

    List<Coberturas> findByIdSolicitacao(Long idSolicitacao);
    
    @Query("SELECT C FROM Coberturas C")
    List<Coberturas> findByCoberturas();

    @Modifying
    @Query("UPDATE Coberturas C set C.idSolicitacao=:idSolicitacao WHERE C.idSolicitacao=:idSolicitacao")
    List<Coberturas> postSolicitacoes(@Param("idSolicitacao") Integer idSolicitacao);

    @Query(value = "SELECT SUM(C.valor::integer) FROM Coberturas C", nativeQuery = true)
    List<Coberturas> findTotalCoberturas();

    @Query(value="DELETE FROM Coberturas C WHERE C.fk_id_solicitacao=:idSolicitacao and C.descricao=:descricao", nativeQuery=true)
    void deleteById(Integer idSolicitacao, String descricao);
   
}