package CS2001.Group47.ELearning_Platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import CS2001.Group47.ELearning_Platform.model.Videos;
import CS2001.Group47.ELearning_Platform.repository.VideosRepository;

@RestController
public class videosController {
    
    @Autowired
    private VideosRepository videosRepository;
   
       /* public Iterable<Videos> getVideos() {
            return videosRepository.findAll();

    
        } */ 



        @RequestMapping("/videos")
public Iterable<Videos> getVideos() {
    return videosRepository.findAllByOrderByVideoNameAsc();
}
@RequestMapping("/videos/{videoName}/{courseID}")
public Iterable<Videos> getVideosbyName( @PathVariable("videoName")String videoName,@PathVariable("courseID") Integer courseID) {
    return videosRepository.findAllByVideoNameAndCourses_CourseID(videoName, courseID) ;
}
}

    




