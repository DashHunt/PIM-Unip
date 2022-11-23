package teste.testado.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import teste.testado.Modelo.Solicitacoes;

public interface SolicitacoesRepository extends JpaRepository<Solicitacoes, Long> {

    @Query("SELECT S FROM Solicitacoes S where status='S' and dataExclusao is null and idSolicitacao=:idSolicitacao")
    List<Solicitacoes> findByIdSolicitacao(@Param("idSolicitacao") Integer idSolicitacao);

    @Query("SELECT S FROM Solicitacoes S where status='S' and dataExclusao is null")
    List<Solicitacoes> findSolicitacoes();

    @Modifying
    @Query("UPDATE Solicitacoes S set S.idSolicitacao=:idSolicitacao WHERE S.idSolicitacao=:idSolicitacao")
    List<Solicitacoes> postSolicitacoes(@Param("idSolicitacao") Integer idSolicitacao);

    @Query(value="DELETE Solicitacoes S WHERE S.idSolicitacao=:idSolicitacao", nativeQuery=true)
    void deleteById(Integer idSolicitacao);

    //void postDeleteSolicitacoes(Solicitacoes solicitacoes);
    
}
