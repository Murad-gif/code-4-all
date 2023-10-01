package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid; // Import the Valid class from the javax.validation package.

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import CS2001.Group47.ELearning_Platform.dto.DonatorDTO;
import CS2001.Group47.ELearning_Platform.dto.PaymentDTO;
import CS2001.Group47.ELearning_Platform.model.Donator;
import CS2001.Group47.ELearning_Platform.model.Payment;
import CS2001.Group47.ELearning_Platform.service.DonatorService;
import CS2001.Group47.ELearning_Platform.service.PaymentService;




@RestController
public class PaymentController {


  @Autowired
  DonatorService donatorService; // Create an instance of DonatorService and inject it into this class.


  @Autowired
  PaymentService paymentService; // Create an instance of PaymentService and inject it into this class.


  @PostMapping("/donators") // Handle POST requests at the "/donators" endpoint.
  public Donator createDonator(@Valid @RequestBody DonatorDTO donatorDTO) {  // Define a method that creates a new Donator.
      return donatorService.save(donatorDTO.toDonator()); // Save the new Donator using the injected DonatorService.
  }

  @PostMapping("/payments") // Handle POST requests at the "/payments" endpoint.
  public Payment createPayment(@Valid @RequestBody PaymentDTO paymentDTO) { // Define a method that creates a new Payment.
      return paymentService.save(paymentDTO.toPayment()); // Save the new Payment using the injected PaymentService.
  }
}

