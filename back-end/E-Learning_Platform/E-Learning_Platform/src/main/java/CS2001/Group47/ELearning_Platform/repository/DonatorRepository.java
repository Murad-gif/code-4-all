package CS2001.Group47.ELearning_Platform.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




import CS2001.Group47.ELearning_Platform.model.Donator;




@Repository
public interface DonatorRepository extends JpaRepository<Donator, Integer> {
}
