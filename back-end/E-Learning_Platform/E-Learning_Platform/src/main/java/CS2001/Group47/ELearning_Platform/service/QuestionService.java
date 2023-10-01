package CS2001.Group47.ELearning_Platform.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Question;
import CS2001.Group47.ELearning_Platform.repository.QuestionRepository;

public interface QuestionService {
  
  List<Question> getAllQuestions();
  
  Optional<Question> getQuestionById(Long id);
  
  Question saveQuestion(Question question);
  
  void deleteQuestionById(Long id);
}

@Service
class QuestionServiceImpl implements QuestionService {
  
  @Autowired
  private QuestionRepository questionRepository;

  @Override
  public List<Question> getAllQuestions() {
    return questionRepository.findAll();
  }

  @Override
  public Optional<Question> getQuestionById(Long id) {
    return questionRepository.findById(id);
  }

  @Override
  public Question saveQuestion(Question question) {
    return questionRepository.save(question);
  }

  @Override
  public void deleteQuestionById(Long id) {
    questionRepository.deleteById(id);
  }
}
