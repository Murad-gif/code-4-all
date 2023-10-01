package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import CS2001.Group47.ELearning_Platform.model.Question;
import CS2001.Group47.ELearning_Platform.repository.QuestionRepository;
import CS2001.Group47.ELearning_Platform.service.QuestionService;

@RestController

public class QuestionRestController {
  
  @Autowired
  private QuestionService questionService;

  @Autowired 
  private QuestionRepository questionRepository;
  



  @RequestMapping("difficulty/{difficulty}/{category}")
  public Iterable<Question> getAllQuestions( @PathVariable("difficulty") String difficulty,@PathVariable("category") String category) {
      return questionRepository.findByDifficultyAndCategory(difficulty,category) ;
  }


  
  @GetMapping("/{id}")
  public ResponseEntity<Question> getQuestionById(@PathVariable Long id) {
    Optional<Question> question = questionService.getQuestionById(id);
    if (question.isPresent()) {
      return new ResponseEntity<>(question.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  
  @PostMapping
  public ResponseEntity<Question> addQuestion(@RequestBody Question question) {
    Question savedQuestion = questionService.saveQuestion(question);
    return new ResponseEntity<>(savedQuestion, HttpStatus.CREATED);
  }
  
  @PutMapping("/{id}")
  public ResponseEntity<Question> updateQuestion(@PathVariable Long id, @RequestBody Question question) {
    Optional<Question> existingQuestion = questionService.getQuestionById(id);
    if (existingQuestion.isPresent()) {
      question.setId(id);
      Question updatedQuestion = questionService.saveQuestion(question);
      return new ResponseEntity<>(updatedQuestion, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteQuestionById(@PathVariable Long id) {
    Optional<Question> existingQuestion = questionService.getQuestionById(id);
    if (existingQuestion.isPresent()) {
      questionService.deleteQuestionById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
}
