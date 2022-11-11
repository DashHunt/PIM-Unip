package teste.testado.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import teste.testado.Modelo.Solicitacoes;

public interface SolicitacoesRepository extends JpaRepository<Solicitacoes, Long> {

    List<Solicitacoes> findByIdSolicitacao(Long idSolicitacao);

    @Query("SELECT S FROM Solicitacoes S")
    List<Solicitacoes> findSolicitacoes();

    //void saveSolicitacoes(Solicitacoes solicitacoes);
    
}
