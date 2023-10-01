package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;



@Entity
@Table(name = "quizTest")
@EntityListeners(AuditingEntityListener.class)
public class QuizCategory implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer quizID;
	
	
    String quizType;
    String result;


    @ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "student")
	//@JsonIgnore
	private Student students;

	public QuizCategory() {
	}

	public QuizCategory(@NotBlank String quizType, String result, Student students) {
		super();
		this.quizType = quizType;
		this.result = result;
		this.students = students;
	}

	public String getQuizType() {
		return quizType;
	}

	public void setQuizType(String quizType) {
		this.quizType = quizType;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public Student getStudents() {
		return students;
	}

	public void setStudents(Student students) {
		this.students = students;
	}

	
}
