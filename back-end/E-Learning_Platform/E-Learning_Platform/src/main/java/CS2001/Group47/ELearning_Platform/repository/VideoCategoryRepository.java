package CS2001.Group47.ELearning_Platform.repository;
import CS2001.Group47.ELearning_Platform.model.VideoCategory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoCategoryRepository extends JpaRepository <VideoCategory, Integer> {
    List<VideoCategory> findDistinctByVideos_Courses_CourseID(Integer courseID);
}
