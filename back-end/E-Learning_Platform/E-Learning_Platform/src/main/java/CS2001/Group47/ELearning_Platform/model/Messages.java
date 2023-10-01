package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Optional;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Messages")
@EntityListeners(AuditingEntityListener.class)
public class Messages implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer messageID;
	String message;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date mTimestampCreated;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.DATE)
	@CreatedDate
	private Date mDateCreated;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIME)
	@CreatedDate
	private Date mTimeCreated;

	@ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "thread")
	//@JsonIgnore
	private Threads threads;

	@ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "student")
	//@JsonIgnore
	private Student students;

	public Messages() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Messages(String message, Threads threads, Student students) {
		super();
		this.message = message;
		this.threads = threads;
		this.students = students;
	}


    public Integer getMessageID() {
		return messageID;
	}

	public void setMessageID(Integer messageID) {
		this.messageID = messageID;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getmTimestampCreated() {
		return mTimestampCreated;
	}

	public void setmTimestampCreated(Date mTimestampCreated) {
		this.mTimestampCreated = mTimestampCreated;
	}

	public Date getmDateCreated() {
		return mDateCreated;
	}

	public void setmDateCreated(Date mDateCreated) {
		this.mDateCreated = mDateCreated;
	}

	public Date getmTimeCreated() {
		return mTimeCreated;
	}

	public void setmTimeCreated(Date mTimeCreated) {
		this.mTimeCreated = mTimeCreated;
	}

	public Threads getThreads() {
		return threads;
	}

	public void setThreads(Threads threads) {
		this.threads = threads;
	}

	public Student getStudents() {
		return students;
	}

	public void setStudents(Student students) {
		this.students = students;
	}

	@Override
	public String toString() {
		return "Messages [messageID=" + messageID + ", message=" + message + ", mTimestampCreated=" + mTimestampCreated
				+ ", mDateCreated=" + mDateCreated + ", mTimeCreated=" + mTimeCreated + ", threads=" + threads
				+ ", students=" + students + "]";
	}

	

	

	

}

