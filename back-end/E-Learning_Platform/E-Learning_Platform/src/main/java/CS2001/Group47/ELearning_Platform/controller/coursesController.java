package CS2001.Group47.ELearning_Platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.model.Courses;
import CS2001.Group47.ELearning_Platform.repository.CoursesRepository;
import CS2001.Group47.ELearning_Platform.service.CoursesService;

@RestController

public class coursesController {
    @Autowired
    private CoursesRepository Coursesrepository;
    @Autowired
    private CoursesService coursesService;

    @RequestMapping("/cars")
        public Iterable<Courses> getCourses() {
            return Coursesrepository.findAll();

    
        } 


        @RequestMapping("/courses/{courseID}")
        public Courses getCourseID(@PathVariable("courseID") Integer courseID) {
            return coursesService.getCoursesById(courseID);

    
        } 
}
