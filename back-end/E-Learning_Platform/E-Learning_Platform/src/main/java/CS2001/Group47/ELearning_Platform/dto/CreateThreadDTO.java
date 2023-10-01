package CS2001.Group47.ELearning_Platform.dto;

import java.util.Arrays;
import java.util.Date;

public class CreateThreadDTO {
    String threadName;
    String fTags;
    private	int studentId;
  
    public CreateThreadDTO(String threadName, String fTags) {
        super();
        this.threadName = threadName;
        this.fTags = fTags;
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

    @Override
    public String toString() {
        return "CreateThreadDTO [threadName=" + threadName + ", fTags=" + fTags + ", studentId=" + studentId
                + "]";
    }
}

