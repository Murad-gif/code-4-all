package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "question")
public class Question implements Serializable{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "question_text")
  private String questionText;

  @Column(name = "category")
  private String category;

  @Column(name = "difficulty")
  private String difficulty;

  @Column(name = "correct_answer")
  private String correctAnswer;

  @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)


	private List<Answer> answer = new ArrayList<>();





  // constructors
  public Question() {
  }

  public Question(String questionText, String category, String difficulty, String correctAnswer,List<Answer> answer) {
    super();

    this.questionText = questionText;
    this.category = category;
    this.difficulty = difficulty;
    this.correctAnswer = correctAnswer;
    this.answer = answer;
  }

  // getters and setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getQuestionText() {
    return questionText;
  }

  public void setQuestionText(String questionText) {
    this.questionText = questionText;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getDifficulty() {
    return difficulty;
  }

  public void setDifficulty(String difficulty) {
    this.difficulty = difficulty;
  }

  public String getCorrectAnswer() {
    return correctAnswer;
  }

  public void setCorrectAnswer(String correctAnswer) {
    this.correctAnswer = correctAnswer;
  }
  
  @Override
  public String toString() {
    return "Question [id=" + id + ", questionText=" + questionText + ", category=" + category + ", difficulty="
        + difficulty + ", correctAnswer=" + correctAnswer + ", asnwer=" + answer + "]";
  }

  public List<Answer> getAnswer() {
    return answer;
  }

  public void setAnswer(List<Answer> answer) {
    this.answer = answer;
  }

}