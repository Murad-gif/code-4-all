package CS2001.Group47.ELearning_Platform.model;
import java.io.Serializable;

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
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "videos")
@EntityListeners(AuditingEntityListener.class)

public class Videos implements Serializable{


    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="videoid")
	private Integer id;

	@NotBlank
	@Column(name="url")
    private String Url;

	@NotBlank
	@Column(name="videos_name")
	private String videoName;

	
	
    @ManyToOne( )
	@JoinColumn(name = "course")
	@JsonIgnore

    private Courses courses;

	    
    @ManyToOne()
	@JoinColumn(name = "category")
@JsonIgnore
    private VideoCategory videoCategory;
	


	public Videos() {
		// TODO Auto-generated constructor stub
	}


	public Videos(@NotBlank String Url, @NotBlank String videoName, Courses courses, VideoCategory videoCategory) {
		super();
		this.Url = Url;
		this.videoName = videoName;
		this.courses = courses; 
		this.videoCategory=videoCategory;
	}


	public Courses getCourse() {
		return courses;
	}


	public void setCourses(Courses course) {
		this.courses= courses;
	}



	public Integer getVideoID() {
		return this.id;
	}

	public void setVideoID(Integer id) {
		this.id = id;
	}

	public String getUrl() {
		return this.Url;
	}

	public void setUrl(String Url) {
		this.Url = Url;
	}


	public String getVideoName() {
		return this.videoName;
	}

	public void setVideoName(String videoName) {
		this.videoName = videoName;
	}

	public VideoCategory getVideoCategory() {
		return videoCategory;
	}


	public void setVideoCategory(VideoCategory videoCategory) {
		this.videoCategory = videoCategory;
	}

	

	@Override
	public String toString() {
		return "Videos [videoID=" + id + ", Url=" + Url + ", videoName=" + videoName +", course="+ courses+",vidCAt"+ videoCategory+ "]";
	}
	
      

}
