package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Threads")
@EntityListeners(AuditingEntityListener.class)
public class Threads implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer threadId;
	
	String threadName;

	
	String fTags;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date fTimestampCreated;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.DATE)
	@CreatedDate
	private Date fDateCreated;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIME)
	@CreatedDate
	private Date fTimeCreated;
	

	@ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "student")
	//@JsonIgnore
	private Student students;

	@OneToMany(mappedBy = "threads", cascade = CascadeType.ALL)
	@JsonIgnore

	private List<Messages> messages = new ArrayList<>();

	@OneToMany(mappedBy = "threads", cascade = CascadeType.ALL)
	@JsonIgnore

	private List<Subscriptions> subscriptions = new ArrayList<>();
	
	public Threads() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Threads(String threadName, String fTags, Student students) {
		super();
		this.threadName = threadName;
		this.fTags = fTags;
		this.students = students;
		
		
	}

	

	public Integer getThreadId() {
		return threadId;
	}

	public void setThreadId(Integer threadId) {
		this.threadId = threadId;
	}

	public String getThreadName() {
		return threadName;
	}

	public void setThreadName(String threadName) {
		this.threadName = threadName;
	}
	

	public String getfTags() {
		return fTags;
	}

	public void setfTags(String fTags) {
		this.fTags = fTags;
	}

	public Date getfTimestampCreated() {
		return fTimestampCreated;
	}

	public void setfTimestampCreated(Date fTimestampCreated) {
		this.fTimestampCreated = fTimestampCreated;
	}

	public Date getfDateCreated() {
		return fDateCreated;
	}

	public void setfDateCreated(Date fDateCreated) {
		this.fDateCreated = fDateCreated;
	}

	public Date getfTimeCreated() {
		return fTimeCreated;
	}

	public void setfTimeCreated(Date fTimeCreated) {
		this.fTimeCreated = fTimeCreated;
	}

	public Student getStudents() {
		return students;
	}

	public void setStudents(Student students) {
		this.students = students;
	}

	@Override
	public String toString() {
		return "Threads [threadId=" + threadId + ", threadName=" + threadName + ", fTags=" + fTags
				+ ", fTimestampCreated=" + fTimestampCreated + ", fDateCreated=" + fDateCreated + ", fTimeCreated="
				+ fTimeCreated + ", students=" + students + ", messages=" + messages + ", subscriptions="
				+ subscriptions + "]";
	}

	

	

	
	


	
}
