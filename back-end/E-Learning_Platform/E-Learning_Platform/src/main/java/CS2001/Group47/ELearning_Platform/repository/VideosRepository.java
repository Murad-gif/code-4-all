package CS2001.Group47.ELearning_Platform.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import CS2001.Group47.ELearning_Platform.model.Videos;
import CS2001.Group47.ELearning_Platform.model.VideoCategory;

@Repository
public interface VideosRepository extends CrudRepository<Videos, Integer> {
   List<Videos> findAllByOrderByVideoNameAsc();
   List<Videos> findAllByVideoNameAndCourses_CourseID(String videoName,Integer courseID);
   List<Videos> findByVideoCategory(VideoCategory videoCategory);

   
}
