package CS2001.Group47.ELearning_Platform.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.QuizCategory;
import CS2001.Group47.ELearning_Platform.repository.QuizRepository;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.exception.ResourceNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Rate_Review;
import CS2001.Group47.ELearning_Platform.repository.Rate_ReviewRepository;

@Service
public class QuizService {
    @Autowired
  QuizRepository quizRepository;
  
    public List<QuizCategory>  findQuiz(String Email){
        return quizRepository.findAllByStudents_EmailOrderByResultDesc( Email);
      }
     


}
