package CS2001.Group47.ELearning_Platform.model;




import java.io.Serializable;
import java.util.Date;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;




@Entity
@Table(name = "Payments")
@EntityListeners(AuditingEntityListener.class)
public class Payment implements Serializable {




  /**
   *
   */
  private static final long serialVersionUID = 1L;
   @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Integer id;




  @NotNull
  int dAmount;
   @NotBlank
  String cardNo;
   @NotBlank
  String cardType;
   @NotBlank
  String billingFirstName;
   @NotBlank
  String billingLastName;
   @NotBlank
  String country;
   @NotBlank
  String city;
   @NotBlank
  String address;
   @NotBlank
  String address2;
   @NotBlank
  String postCode;
   @Column(nullable = false, updatable = false)
  @Temporal(TemporalType.TIMESTAMP)
  @CreatedDate
  private Date createdAtDate;




  public Payment() {
      super();
      // TODO Auto-generated constructor stub
  }




  public Payment( @NotNull int dAmount, @NotBlank String cardNo, @NotBlank String cardType,
          @NotBlank String billingFirstName, @NotBlank String billingLastName, @NotBlank String country,
          @NotBlank String city, @NotBlank String address, @NotBlank String address2, @NotBlank String postCode) {
      super();
      this.dAmount = dAmount;
      this.cardNo = cardNo;
      this.cardType = cardType;
      this.billingFirstName = billingFirstName;
      this.billingLastName = billingLastName;
      this.country = country;
      this.city = city;
      this.address = address;
      this.address2 = address2;
      this.postCode = postCode;
  }
 
  public Integer getId() {
      return id;
  }

  public void setId(Integer id) {
      this.id = id;
  }
  public int getdAmount() {
      return dAmount;
  }
  public void setdAmount(int dAmount) {
      this.dAmount = dAmount;
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

  public Date getCreatedAtDate() {
      return createdAtDate;
  }

  public void setCreatedAtDate(Date createdAtDate) {
      this.createdAtDate = createdAtDate;
  }

  @Override
  public String toString() {
      return "Payment [id=" + id + ", dAmount=" + dAmount + ", cardNo=" + cardNo + ", cardType=" + cardType 
              + ", billingFirstName=" + billingFirstName + ", billingLastName=" + billingLastName
              + ", country=" + country + ", city=" + city + ", address=" + address + ", address2=" + address2
              + ", postCode=" + postCode + ", createdAtDate=" + createdAtDate + "]";
  }
 
 }
