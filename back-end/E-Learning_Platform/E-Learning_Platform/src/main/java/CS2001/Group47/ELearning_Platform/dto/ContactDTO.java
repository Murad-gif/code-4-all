package CS2001.Group47.ELearning_Platform.dto;

import CS2001.Group47.ELearning_Platform.model.Contact;

public class ContactDTO{

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String briefMessage;

    public ContactDTO() {
    
    }

    public ContactDTO(Contact contact) {
        this.firstName = contact.getFirstName();
        this.lastName = contact.getLastName();
        this.email = contact.getEmail();
        this.phone = contact.getPhone();
        this.briefMessage = contact.getBriefMessage();
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBriefMessage() {
        return briefMessage;
    }

    public void setBriefMessage(String briefMessage) {
        this.briefMessage = briefMessage;
    }

    public Contact toContact() {
        Contact contact = new Contact();
        contact.setFirstName(this.firstName);
        contact.setLastName(this.lastName);
        contact.setEmail(this.email);
        contact.setPhone(this.phone);
        contact.setBriefMessage(this.briefMessage);

        return contact;

    }

    @Override
    public String toString() {
        return "ContactDTO{" +
                "firstName=" + firstName 
                + ", lastName=" + lastName 
                + ", email=" + email 
                + ", phone=" + phone 
                + ", briefMessage=" + briefMessage 
                + '}';
    }
}
