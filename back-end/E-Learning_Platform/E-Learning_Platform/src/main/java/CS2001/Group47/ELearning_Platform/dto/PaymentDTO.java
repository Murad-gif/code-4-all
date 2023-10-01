package CS2001.Group47.ELearning_Platform.dto;




import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;




import CS2001.Group47.ELearning_Platform.model.Payment;




public class PaymentDTO {




  int dAmount;
  String billingFirstName;
  String billingLastName;
  String cardNo;
  String cardType;
  String country;
  String city;
  String address;
  String address2;
  String postCode;




  public PaymentDTO() {
  }




  public PaymentDTO(Payment payment) {
      this.dAmount = payment.getdAmount();
      this.billingFirstName = payment.getBillingFirstName();
      this.billingLastName = payment.getBillingLastName();
      this.cardNo = payment.getCardNo();
      this.cardType = payment.getCardType();
      this.country = payment.getCountry();
      this.city = payment.getCity();
      this.address = payment.getAddress();
      this.address2 = payment.getAddress2();
      this.postCode = payment.getPostCode();
  }




  public int getdAmount() {
      return dAmount;
  }

  public void setdAmount(int dAmount) {
      this.dAmount = dAmount;
  }

  public String getBillingFirstName() {
      return billingFirstName;
  }

  public void setBillingFirstName(String billingFirstName) {
      this.billingFirstName = billingFirstName;
  }

  public String getBillingLastName() {
      return billingLastName;
  }

  public void setBillingLastName(String billingLastName) {
      this.billingLastName = billingLastName;
  }

  public String getCardNo() {
      return cardNo;
  }
  public void setCardNo(String cardNo) {
      this.cardNo = cardNo;
  }

  public String getCardType() {
      return cardType;
  }

  public void setCardType(String cardType) {
      this.cardType = cardType;
  }

  public String getCountry() {
      return country;
  }

  public void setCountry(String country) {
      this.country = country;
  }

  public String getCity() {
      return city;
  }

  public void setCity(String city) {
      this.city = city;
  }

  public String getAddress() {
      return address;
  }

  public void setAddress(String address) {
      this.address = address;
  }
  public String getAddress2() {
      return address2;
  }

  public void setAddress2(String address2) {
      this.address2 = address2;
  }

  public String getPostCode() {
      return postCode;
  }

  public void setPostCode(String postCode) {
      this.postCode = postCode;
  }

  public Payment toPayment() {
      Payment payment = new Payment();
      payment.setdAmount(dAmount);
      payment.setBillingFirstName(billingFirstName);
      payment.setBillingLastName(billingLastName);
      payment.setCardNo(cardNo);
      payment.setCardType(cardType);
      payment.setCountry(country);
      payment.setCity(city);
      payment.setAddress(address);
      payment.setAddress2(address2);
      payment.setPostCode(postCode);
      return payment;
  }


  @Override
public String toString() {
  return "PaymentDTO [dAmount=" + dAmount + ", billingFirstName=" + billingFirstName + ", billingLastName="
          + billingLastName + ", cardNo=" + cardNo + ", cardType=" + cardType + ", country=" + country + ", city=" + city 
          + ", address=" + address + ", address2=" + address2 + "postCode=" + postCode
          + "]";
}




}
