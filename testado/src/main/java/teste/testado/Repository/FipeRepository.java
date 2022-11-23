package teste.testado.Repository;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import teste.testado.Modelo.Fipe;

public interface FipeRepository extends JpaRepository<Fipe, Long> {
    
    @Query("SELECT F FROM Fipe F where idCarro=:idCarro")
    List<Fipe> findByIdCarro(@Param("idCarro") Integer idCarro);

    @Query(value="SELECT DISTINCT F.marca FROM Fipe F", nativeQuery = true)
    List<Object[]> findMarcaFipe(@Param("marca") String marca);

    @Query(value="SELECT DISTINCT F.modelo FROM Fipe F where F.marca=:marca", nativeQuery = true)
    List<Object[]> findModeloFipe(@Param("marca") String marca);

    @Query(value="SELECT DISTINCT F.ano FROM Fipe F where F.modelo=:modelo", nativeQuery = true)
    List<Object[]> findAnoFipe(@Param("modelo") String modelo);

    @Query(value="SELECT DISTINCT F.tipo FROM Fipe F where F.modelo=:modelo", nativeQuery = true)
    List<Object[]> findTipoFipe(@Param("modelo") String modelo);

    @Query(value="SELECT DISTINCT F.valor FROM Fipe F where F.modelo=:modelo", nativeQuery = true)
    List<Object[]> findValorFipe(@Param("modelo") String modelo);

}


