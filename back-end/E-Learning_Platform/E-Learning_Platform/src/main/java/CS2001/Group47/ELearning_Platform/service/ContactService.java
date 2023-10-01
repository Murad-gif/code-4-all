package CS2001.Group47.ELearning_Platform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Contact;
import CS2001.Group47.ELearning_Platform.repository.ContactRepository;
//import CS2001.Group47.ELearning_Platform.model.ContactDTO;

@Service
public class ContactService {


   @Autowired
   private ContactRepository contactRepository;


   public Contact save(Contact contact) {
       return contactRepository.save(contact);
   }
}
