package CS2001.Group47.ELearning_Platform.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Courses;
import CS2001.Group47.ELearning_Platform.repository.CoursesRepository;

@Service

public class CoursesService {

   @Autowired
   private CoursesRepository coursesRepository;
    
   public Courses getCoursesById(int courseID) {
    return coursesRepository.findByCourseID(courseID);

    }
    
}
