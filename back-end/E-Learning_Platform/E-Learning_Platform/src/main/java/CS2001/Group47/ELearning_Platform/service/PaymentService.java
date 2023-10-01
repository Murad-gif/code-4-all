package CS2001.Group47.ELearning_Platform.service;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import CS2001.Group47.ELearning_Platform.model.Donator;
import CS2001.Group47.ELearning_Platform.model.Payment;
import CS2001.Group47.ELearning_Platform.repository.DonatorRepository;
import CS2001.Group47.ELearning_Platform.repository.PaymentRepository;


@Service
public class PaymentService {


   @Autowired
   private PaymentRepository paymentRepository;


   public Payment save(Payment payment) {
       return paymentRepository.save(payment);
   }
}
