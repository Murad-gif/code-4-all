package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.Date;

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

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "Subscriptions")
@EntityListeners(AuditingEntityListener.class)
public class Subscriptions implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer subId;
	
	String subEmail;
	
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date subbedAtDate;

	@ManyToOne( fetch = FetchType.EAGER)
	@JoinColumn(name = "threads")
	private Threads threads;

	public Subscriptions() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Subscriptions(String subEmail, Threads threads) {
		super();
		this.subEmail = subEmail;
		this.threads = threads;
	}

	public Integer getSubId() {
		return subId;
	}

	public void setSubId(Integer subId) {
		this.subId = subId;
	}

	public String getSubEmail() {
		return subEmail;
	}

	public void setSubEmail(String subEmail) {
		this.subEmail = subEmail;
	}

	public Date getSubbedAtDate() {
		return subbedAtDate;
	}

	public void setSubbedAtDate(Date subbedAtDate) {
		this.subbedAtDate = subbedAtDate;
	}

	public Threads getThreads() {
		return threads;
	}

	public void setThreads(Threads threads) {
		this.threads = threads;
	}

	@Override
	public String toString() {
		return "Subscriptions [subId=" + subId + ", subEmail=" + subEmail + ", subbedAtDate=" + subbedAtDate
				+ ", threads=" + threads + "]";
	}

	

	

	


}
