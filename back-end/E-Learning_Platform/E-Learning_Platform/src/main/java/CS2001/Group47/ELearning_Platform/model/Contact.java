package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "contact_info")
@EntityListeners(AuditingEntityListener.class)
public class Contact implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer contactId;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date tDateCreated;

	//@NotBlank
	String firstName;

	//NotBlank
	String lastName;

	//@NotBlank
	String email;

	//@NotBlank
	String phone;

	//@NotBlank
	String briefMessage;

	public Contact() {

		super();
		
	}

	public Contact(Date tDateCreated, String firstName, String lastName, String email, String phone, String briefMessage) {
		super();
		this.tDateCreated = tDateCreated;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.briefMessage = briefMessage;

	}

	public Integer getContactID(){
		return contactId;
	}

	public void setContactID(Integer contactId){
		this.contactId = contactId;
	}

	public Date gettDateCreated(){
		return tDateCreated;
	}

	public void settDateCreated(Date tDateCreated){
		this.tDateCreated = tDateCreated;
	}

	public String getFirstName(){
		return firstName;
	}

	public void setFirstName(String firstName){
		this.firstName = firstName;
	}

	public String getLastName(){
		return lastName;
	}

	public void setLastName(String lastName){
		this.lastName = lastName;
	}

	public String getEmail(){
		return email;
	}

	public void setEmail(String email){
		this.email = email;
	}

	public String getPhone(){
		return phone;
	}

	public void setPhone(String phone){
		this.phone = phone;
	}

	public String getBriefMessage(){
		return briefMessage;
	}

	public void setBriefMessage(String briefMessage){
		this.briefMessage = briefMessage;
	}

	@Override
	public String toString() {
		return "ContactInfo [contactId=" + contactId + ", tDateCreated=" + tDateCreated + ", firstName=" + firstName + ", lastName=" + lastName + 
		", email=" + email + ", phone=" + phone + ",briefMessage=" + briefMessage + "]";
	}

	
	
}


