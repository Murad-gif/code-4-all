package CS2001.Group47.ELearning_Platform.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class StudentPostDTO {

    String firstName;
    String lastName;
    Date dob;
    String dateOfBirth;
    String country;
    String phone;
    String email;
    String password;
    byte[] avatar;
    byte[] backavatar;
    String bio;
    String optionValue;
    String role;
    String twitter;
    String instagram;
    String linkedIn;
    String username;
    List<String> selectedBadges;

    public StudentPostDTO(String username, String twitter, String instagram, String linkedIn, String role,
            String optionValue, String bio, byte[] avatar,byte[] backavatar, String firstName,
            String lastName,
            Date dob,
            String dateOfBirth,
            String country,
            String phone, String email,
            String password,
            List<String> selectedBadges) {
        super();
        this.backavatar = backavatar;
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
        this.dob = dob;
        this.dateOfBirth = dateOfBirth;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.password = password;
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

    public String getInstagram() {
        return instagram;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public String getLinkedIn() {
        return linkedIn;
    }

    public void setLinkedIn(String linkedIn) {
        this.linkedIn = linkedIn;
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

    public byte[] getAvatarByte() {
        return avatar;
    }

    public void setAvatarByte(byte[] avatar) {
        this.avatar = avatar;
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

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateoOfBirth) {
        this.dateOfBirth = dateoOfBirth;
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

    public List<String> getSelectedBadges() {
        return selectedBadges;
    }
    
    public void setBadges(List<String> selectedBadges) {
        this.selectedBadges = selectedBadges;
    }

    @Override
    public String toString() {
        return "StudentPostDTO [firstName=" + "username=" + username + "backavatar=" + backavatar + "role=" + role + firstName + "twitter=" + twitter
                + "linkedIn=" + linkedIn + "instagram=" + instagram + "profile" + "optionValue=" + optionValue
                + "bio=" + bio
                + "profile=" + avatar
                + ", lastName="
                + lastName + ", dateoOfBirth=" + dateOfBirth
                + ", country=" + country + ", phone=" + phone + ", email=" + email + ", password=" + password + "selectedBadges=" + selectedBadges + "]";
    }

}
