package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.model.Answer;
import CS2001.Group47.ELearning_Platform.service.AnswerService;

@RestController
@RequestMapping("/api/answers")
public class AnswerRestController {

  @Autowired
  private AnswerService answerService;

  @GetMapping
  public ResponseEntity<List<Answer>> getAllAnswers() {
    List<Answer> answers = answerService.getAllAnswers();
    if (answers.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(answers, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Answer> getAnswerById(@PathVariable("id") Long id) {
    Optional<Answer> answer = answerService.getAnswerById(id);
    if (answer.isPresent()) {
      return new ResponseEntity<>(answer.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping
  public ResponseEntity<Answer> createAnswer(@RequestBody Answer answer) {
    Answer savedAnswer = answerService.saveAnswer(answer);
    return new ResponseEntity<>(savedAnswer, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<HttpStatus> deleteAnswer(@PathVariable("id") Long id) {
    Optional<Answer> answer = answerService.getAnswerById(id);
    if (answer.isPresent()) {
      answerService.deleteAnswerById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  
  @GetMapping("/student/{studentId}")
  public ResponseEntity<List<Answer>> getAnswersByStudentId(@PathVariable("studentId") Long studentId) {
    List<Answer> answers = answerService.getAnswersByStudentId(studentId);
    if (answers.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(answers, HttpStatus.OK);
  }
  
  @GetMapping("/question/{questionId}")
  public ResponseEntity<List<Answer>> getAnswersByQuestionId(@PathVariable("questionId") Long questionId) {
    List<Answer> answers = answerService.getAnswersByQuestionId(questionId);
    if (answers.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(answers, HttpStatus.OK);
  }

}
