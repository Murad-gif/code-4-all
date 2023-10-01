package CS2001.Group47.ELearning_Platform.dto;




import CS2001.Group47.ELearning_Platform.model.Donator;




public class DonatorDTO {




  private String donatorTitle;
  private String firstName;
  private String lastName;
  private String phone;
  private String email;
  private String howHear;
  private String motivate;
   public DonatorDTO() {
    
  }
   public DonatorDTO(Donator donator) {
      this.donatorTitle = donator.getDonatorTitle();
      this.firstName = donator.getFirstName();
      this.lastName = donator.getLastName();
      this.phone = donator.getPhone();
      this.email = donator.getEmail();
      this.howHear = donator.getHowHear();
      this.motivate = donator.getMotivate();
  }




  public String getDonatorTitle() {
      return donatorTitle;
  }
   public void setDonatorTitle(String donatorTitle) {
      this.donatorTitle = donatorTitle;
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
   public String getHowHear() {
      return howHear;
  }
   public void setHowHear(String howHear) {
      this.howHear = howHear;
  }
   public String getMotivate() {
      return motivate;
  }
   public void setMotivate(String motivate) {
      this.motivate = motivate;
  }
   public Donator toDonator() {
      Donator donator = new Donator();
      donator.setDonatorTitle(this.donatorTitle);
      donator.setFirstName(this.firstName);
      donator.setLastName(this.lastName);
      donator.setPhone(this.phone);
      donator.setEmail(this.email);
      donator.setHowHear(this.howHear);
      donator.setMotivate(this.motivate);
      return donator;
  }
   @Override
  public String toString() {
      return "DonatorDTO [donatorTitle=" + donatorTitle + ", firstName=" + firstName + ", lastName=" + lastName
              + ", phone=" + phone + ", email=" + email + ", howHear=" + howHear + ", motivate=" + motivate + "]";
  }
}
