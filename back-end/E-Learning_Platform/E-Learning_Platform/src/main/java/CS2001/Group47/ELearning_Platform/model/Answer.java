package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "answer")
public class Answer implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;
  
  @Column(name = "studentId")
  private Integer studentId;

  @Column(name = "answer_text")
  private String answerText;

  @Column(name = "is_correct")
  private boolean isCorrect;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "question_id", nullable = false)
  @JsonIgnore

  private Question question;
 

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "studendId", referencedColumnName = "studentId")
  private Student student;

  // constructors
  public Answer() {
  }

  public Answer(String answerText, boolean isCorrect, Question question, Integer studentId) {
    this.answerText = answerText;
    this.isCorrect = isCorrect;
    this.question = question;
    this.studentId = studentId;
  }

  // getters and setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getAnswerText() {
    return answerText;
  }

  public void setAnswerText(String answerText) {
    this.answerText = answerText;
  }

  public boolean isCorrect() {
    return isCorrect;
  }

  public void setCorrect(boolean correct) {
    isCorrect = correct;
  }

  public Question getQuestion() {
    return question;
  }

  public void setQuestion(Question question) {
    this.question = question;
  }

  public Integer getStudentId() {
    return studentId;
  }

  public void setStudentId(Integer studentId) {
    this.studentId = studentId;
  }
  
  public Student getStudent() {
      return student;
  }

  public void setStudent(Student student) {
      this.student = student;
  }
}