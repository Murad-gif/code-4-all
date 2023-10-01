package CS2001.Group47.ELearning_Platform.dto;

public class ResultDTO {
    private Long id;
    private Integer score;
    private Integer studentId;

    public ResultDTO() {
    }

    public ResultDTO(Long id, Integer score, Integer studentId) {
        this.id = id;
        this.score = score;
        this.studentId = studentId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }
}
