package CS2001.Group47.ELearning_Platform.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Answer;
import CS2001.Group47.ELearning_Platform.repository.AnswerRepository;

public interface AnswerService {
  
  List<Answer> getAllAnswers();
  
  Optional<Answer> getAnswerById(Long id);
  
  Answer saveAnswer(Answer answer);
  
  void deleteAnswerById(Long id);
  
  List<Answer> getAnswersByStudentId(Long studentId);
  
  List<Answer> getAnswersByQuestionId(Long questionId);
}

@Service
class AnswerServiceImpl implements AnswerService {
  
  @Autowired
  private AnswerRepository answerRepository;

  @Override
  public List<Answer> getAllAnswers() {
    return answerRepository.findAll();
  }

  @Override
  public Optional<Answer> getAnswerById(Long id) {
    return answerRepository.findById(id);
  }

  @Override
  public Answer saveAnswer(Answer answer) {
    return answerRepository.save(answer);
  }

  @Override
  public void deleteAnswerById(Long id) {
    answerRepository.deleteById(id);
  }
  
  @Override
  public List<Answer> getAnswersByStudentId(Long studentId) {
    return answerRepository.findByStudentId(studentId);
  }
  
  @Override
  public List<Answer> getAnswersByQuestionId(Long questionId) {
    return answerRepository.findByQuestionId(questionId);
  }
}
