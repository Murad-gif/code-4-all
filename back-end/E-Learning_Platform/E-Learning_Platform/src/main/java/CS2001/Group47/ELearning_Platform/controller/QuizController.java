package CS2001.Group47.ELearning_Platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.model.QuizCategory;
import CS2001.Group47.ELearning_Platform.service.QuizService;

@RestController
public class QuizController {
    
@Autowired
    QuizService quizService;





    @RequestMapping("/quiz/{email}")
    public Iterable<QuizCategory> getVideosbyName( @PathVariable("email") String Email) {
        return quizService. findQuiz( Email);

   
      }
     

}
