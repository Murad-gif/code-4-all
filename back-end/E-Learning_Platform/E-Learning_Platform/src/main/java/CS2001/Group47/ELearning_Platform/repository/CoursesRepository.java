package CS2001.Group47.ELearning_Platform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.Courses;

@Repository
public interface CoursesRepository extends CrudRepository<Courses, Integer>{

 Courses findByCourseID(Integer courseID);
    
    
}
