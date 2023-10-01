package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.ElementCollection;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "student")
@EntityListeners(AuditingEntityListener.class)
public class Student implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer studentId;

	@NotBlank
	String firstName;

	@NotBlank
	String lastName;

	@NotBlank
	String dateOfBirth;

	@NotBlank
	String country;

	@NotBlank
	String phone;

	@NotBlank
	@Column(unique = true)
	String email;

	@NotBlank
	String password;



	String resetPasswordToken;
	@Column(name = "Biog")
	private String bio;

	@Column(name = "role")
	private String role;

	@ElementCollection
    @CollectionTable(name = "selected_badges", joinColumns = @JoinColumn(name = "student_id"))
    @Column(name = "selected_badges")
    private List<String> selectedBadges = new ArrayList<>(4); 
	

	@Column(name = "twitter")
	private String twitter;

	
	@Column(name = "LinkedIn")
	private String linkedIn;

	@Column(name = "userName")
	private String username;

	
	@Column(name = "instagram")
	private String instagram;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAtDate;

	@Column(name = "option_value")
	private String optionValue;
	@Lob
	@Column(name = "image")
	private byte[] avatar;
	@Lob
	@Column(name = "backAvatar")
	private byte[] backavatar;

	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt;

	@Column(name = "xp")
	private Integer xp;

	@OneToMany(mappedBy = "students", cascade = CascadeType.ALL)
	@JsonIgnore

	private List<Rate_Review> rate_Reviews = new ArrayList<>();

	
	@OneToMany(mappedBy = "students", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<QuizCategory> QuizCategory = new ArrayList<>();

	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL) //for result
    @JsonIgnore
    private List<Result> results = new ArrayList<>();

	@OneToMany(mappedBy = "students", cascade = CascadeType.ALL)
	@JsonIgnore

	private List<Threads> threads = new ArrayList<>();

	@OneToMany(mappedBy = "students", cascade = CascadeType.ALL)
	@JsonIgnore

	private List<Messages> messages = new ArrayList<>();



	public Student() {

		super();

	}

	public Student(String firstName, String lastName, String dateOfBirth,
			String country, String phone, String email,
			String password) {

		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.country = country;
		this.phone = phone;
		this.email = email;
		this.password = password;
	

	}

	public Student(byte [] backavatar,String username,String twitter,String linkedIn,String instagram,String role,String optionValue, String bio, byte[] avatar, String firstName, String lastName,
			String dateOfBirth,
			String country, String phone, String email,
			String password, Integer xp) {

		super();
		this.avatar = avatar;
		this.username = username;
		this.twitter = twitter;
		this.linkedIn = linkedIn;
		this.instagram = instagram;
		this.role = role;
		this.optionValue = optionValue;
		this.bio = bio;
		this.avatar = avatar;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.country = country;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.xp = xp;
		this.selectedBadges = selectedBadges;

	}

	
	

	public byte[] getBackavatar() {
		return backavatar;
	}

	public void setBackavatar(byte[] backavatar) {
		this.backavatar = backavatar;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getTwitter() {
		return twitter;
	}

	public void setTwitter(String twitter) {
		this.twitter = twitter;
	}

	public String getLinkedIn() {
		return linkedIn;
	}

	public void setLinkedIn(String linkedIn) {
		this.linkedIn = linkedIn;
	}

	public String getInstagram() {
		return instagram;
	}

	public void setInstagram(String instagram) {
		this.instagram = instagram;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getOptionValue() {
		return optionValue;
	}

	public void setOptionValue(String optionValue) {
		this.optionValue = optionValue;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public byte[] getAvatar() {
		return avatar;
	}

	public void setAvatar(byte[] avatar) {
		this.avatar = avatar;
	}


	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getCreatedAtDate() {
		return createdAtDate;
	}

	public void setCreatedAtDate(Date createdAtDate) {
		this.createdAtDate = createdAtDate;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public String getResetPasswordToken() {
		return resetPasswordToken;
	}

	public void setResetPasswordToken(String resetPasswordToken) {
		this.resetPasswordToken = resetPasswordToken;
	}

	public List<Rate_Review> getRate_Reviews() {
		return rate_Reviews;
	}

	public void setRate_Reviews(List<Rate_Review> rate_Reviews) {
		this.rate_Reviews = rate_Reviews;
	}
	
    

	

	public Integer getXp() {
		return xp;
	}

	public void setXp(Integer xp) {
		this.xp = xp;
	}

	public List<String> getSelected_badges() {
        return selectedBadges;
    }

	public void setSelected_badges(List<String> selectedBadges) {
        this.selectedBadges = selectedBadges;
    }

	@Override
	public String toString() {
		return "Student [id=" + studentId  + "profile=" + avatar+ "backavatar" + backavatar+ "twitter=" +twitter + "linkedIn="+ "username=" + username +linkedIn+ "instagram=" +instagram+ "role=" + role + "bio=" + bio + "optionValue=" + optionValue
				+  ", firstName=" + firstName
				+ ", lastName=" + lastName + ", dateOfBirth="
				+ dateOfBirth + ", country=" + country + ", phone=" + phone + ", email=" + email + ", password="
				+ password + ", createdAtDate=" + createdAtDate + ", updatedAt=" + updatedAt + ", xp=" + xp + "selectedBadges =" + selectedBadges +"]";
	}
	public List<Result> getResults() {         //for the result
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results; 
    }

}
