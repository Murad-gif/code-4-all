package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.OneToMany;
import javax.persistence.GenerationType;
import javax.persistence.CascadeType;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "faq")
@EntityListeners(AuditingEntityListener.class)
public class FAQ implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Integer id;

    //@NotBlank
    @Column(name="Questions")
    String question;

   //@NotBlank
    @Column(name="Answers")
    String answer;

    @OneToMany(mappedBy = "faq"
    , cascade = CascadeType.ALL
      )
      @JsonIgnore


    private List<FAQ> faq = new ArrayList<>();

    public FAQ(){
        //super();
    }

    public FAQ(Integer id,String question, String answer){
        super();
        this.id=id;
        this.question=question;
        this.answer=answer;

    }

    
    public void setId(Integer id){
        this.id=id;
    }

    public Integer getId(){
        return id;
    }

    public void setQuestion(String question){
        this.question=question;
    }

    public String getQuestion(){
        return question;
    }

    public void setAnswer(String answer){
        this.answer=answer;
    }

    public String getAnswer(){
        return answer;
    }

    @Override
	public String toString() {
		return "FAQ [id="+ id + ",question=" + question + ", answer=" + answer + "]";
	}







}
