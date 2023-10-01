package CS2001.Group47.ELearning_Platform.dto;

import CS2001.Group47.ELearning_Platform.model.Subscriptions;

public class SubscribeDTO {
    String subEmail;
    private int subId;
    private	int threadId;

    public SubscribeDTO(String subEmail, int subId, int threadId) {
        this.subEmail = subEmail;
        this.subId = subId;
        this.threadId = threadId;
    }


    public String getSubEmail() {
        return subEmail;
    }

    public void setSubEmail(String subEmail) {
        this.subEmail = subEmail;
    }


    public int getSubId() {
        return subId;
    }

    public void setSubId(int subId) {
        this.subId = subId;
    }

    public int getThreadId() {
        return threadId;
    }

    public void setThreadId(int threadId) {
        this.threadId = threadId;
    }

    @Override
    public String toString() {
        return "SubscribeDTO [subEmail=" + subEmail + ", subId=" + subId + ", threadId=" + threadId + "]";
    }




    
    


}
