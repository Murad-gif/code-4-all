package CS2001.Group47.ELearning_Platform.dto;

import java.util.Date;

public class ReviewPostDTO {
    private int ratingID;
  
    private	int ratingStars;
    private String reviewDesc;
    private	int courseID;
    private	int studentId;
    private String email;
    private String createdAt;


    public String getCreatedAt() {
        return createdAt;
    }


    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public ReviewPostDTO(int ratingStars, String reviewDesc, int courseID, String email,String createdAt) {
        super();
        this.ratingStars = ratingStars;
        this.reviewDesc = reviewDesc;
        this.courseID = courseID;
        this.email = email;
        this.createdAt = createdAt;
       // this.studentId = studentId;
    }

    public int getRatingID() {
        return ratingID;
    }


    public void setRatingID(int ratingID) {
        this.ratingID = ratingID;
    }


    public int getRatingStars() {
        return ratingStars;
    }
    public void setRatingStars(int ratingStars) {
        this.ratingStars = ratingStars;
    }
    public String getReviewDesc() {
        return reviewDesc;
    }
    public void setReviewDesc(String reviewDesc) {
        this.reviewDesc = reviewDesc;
    }
    public int getCourseID() {
        return courseID;
    }
    public void setCourseID(int courseID) {
        this.courseID = courseID;
    }
    public int getStudentId() {
        return studentId;
    }
    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }


}
