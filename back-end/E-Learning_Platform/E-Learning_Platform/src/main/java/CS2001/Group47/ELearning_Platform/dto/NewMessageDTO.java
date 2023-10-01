package CS2001.Group47.ELearning_Platform.dto;



public class NewMessageDTO {
    String newMessage;
    int saveThreadID;
    int studentId;
    
    public NewMessageDTO(String newMessage,  int saveThreadID, int studentId) {
        super();
        this.newMessage = newMessage;
        this.saveThreadID = saveThreadID;
        this.studentId = studentId;
    }

    public String getNewMessage() {
        return newMessage;
    }

    public void setNewMessage(String newMessage) {
        this.newMessage = newMessage;
    }

    public int getSaveThreadID() {
        return saveThreadID;
    }

    public void setSaveThreadID(int saveThreadID) {
        this.saveThreadID = saveThreadID;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    @Override
    public String toString() {
        return "NewMessageDTO [newMessage=" + newMessage + ", saveThreadID=" + saveThreadID
                + ", studentId=" + studentId + "]";
    }

    

   

    
 




   
    
    
}
