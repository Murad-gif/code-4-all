package CS2001.Group47.ELearning_Platform.repository;

import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.Rate_Review;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

@Repository

public interface Rate_ReviewRepository extends CrudRepository<Rate_Review, Integer> {
    List<Rate_Review> findAllByCourses_CourseID(Integer courseID);
    Rate_Review findByStudents_EmailAndCourses_CourseID(String email,Integer CourseID);
}
