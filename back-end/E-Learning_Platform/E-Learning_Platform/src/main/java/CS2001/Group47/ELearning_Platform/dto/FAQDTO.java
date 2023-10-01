package CS2001.Group47.ELearning_Platform.dto;

import CS2001.Group47.ELearning_Platform.model.FAQ;

public class FAQDTO {

    private String question;
    private String answer;

    public FAQDTO() {
    
    }

    public FAQDTO(FAQ faq) {
        this.question = faq.getQuestion();
        this.answer = faq.getAnswer();
    }

    public void setQuestion(String question) {
        this.question = question;
    }


    public String getQuestion() {
        return question;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getAnswer() {
        return answer;
    }

    public FAQ toFAQ() {
        FAQ faq = new FAQ();
        faq.setQuestion(this.question);
        faq.setAnswer(this.answer);
    
        return faq;

    }

    @Override
    public String toString() {
        return "FAQDTO{" +
                "question=" + question 
                + ", answer=" + answer 
                + '}';
    }
    
}
