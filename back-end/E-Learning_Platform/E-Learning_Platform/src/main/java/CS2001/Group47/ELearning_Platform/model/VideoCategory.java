package CS2001.Group47.ELearning_Platform.model;

import java.io.Serializable;
import java.util.ArrayList;
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
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "videoCategory")
@EntityListeners(AuditingEntityListener.class)
public class VideoCategory implements Serializable {
    


    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="categoryID")
	private Integer categoryID;

	public Integer getCategoryID() {
        return categoryID;
    }



    public void setCategoryID(Integer categoryID) {
        this.categoryID = categoryID;
    }



    @NotBlank
	@Column(name="categoryName")
    private String categoryName;

	

	
	@OneToMany(mappedBy = "videoCategory"
	, cascade = CascadeType.MERGE, fetch = FetchType.EAGER
	  )

   private List <Videos> videos = new ArrayList<>() ;
 








    public VideoCategory() {
    }



    public VideoCategory( List<Videos> videos) {
        super();
      this.videos = videos;
    }



    public String getCategoryName() {
        return categoryName;
    }



    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }





    public List<Videos> getVideos() {
        return videos;
    }



    public void setVideos(List<Videos> videos) {
        this.videos = videos;
    }



	@Override
	public String toString() {
		return "videoCategory [categoryID=" + categoryID + ", categoryName=" + categoryName + ", videos="+ videos+"]";
	}
	




}
