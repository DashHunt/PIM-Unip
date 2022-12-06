package teste.testado.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import teste.testado.Modelo.QuantidadeMes;

public interface QuantidadeMesRepository extends JpaRepository<QuantidadeMes, Integer> {

    @Query(value = "SELECT EXTRACT(month FROM S.dataCadastro::timestamp) 'mes', count(S) as quantidade FROM Solicitacoes S GROUP BY EXTRACT(month FROM S.dataCadastro::timestamp) ORDER BY EXTRACT(month FROM S.dataCadastro::timestamp)", nativeQuery = true)
    List<QuantidadeMes> findQuantidadeMes();
    
}
