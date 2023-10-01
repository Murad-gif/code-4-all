package CS2001.Group47.ELearning_Platform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import CS2001.Group47.ELearning_Platform.model.QuizCategory;
@Repository
public interface QuizRepository extends JpaRepository<QuizCategory,Integer>{
    List<QuizCategory>findAllByStudents_EmailOrderByResultDesc(String Email);
}
