package CS2001.Group47.ELearning_Platform.controller;

import javax.validation.Valid; // Import the Valid class from the javax.validation package.


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;


import CS2001.Group47.ELearning_Platform.model.Contact;
import CS2001.Group47.ELearning_Platform.service.ContactService;
import CS2001.Group47.ELearning_Platform.dto.ContactDTO;

@RestController
public class ContactController {

    @Autowired
    ContactService contactService;

    @PostMapping("/contact_info") 
     public Contact createContact(@Valid @RequestBody ContactDTO contactDTO) {  
      return contactService.save(contactDTO.toContact());
  }


    //@PostMapping("/ContactInfo")
}
    //public ResponseEntity<Contact> addContact(@RequestBody ContactDTO contactDTO) {
      //  Contact contact = contactService.saveContact(contactDTO);
        //return ResponseEntity.ok(contact);
    //}

    //@GetMapping("/contacts")
    //public ResponseEntity<List<Contact>> getAllContacts() {
      //  List<Contact> contacts = contactService.getAllContacts();
        //return ResponseEntity.ok(contacts);
    //}

    //@GetMapping("/{id}")
    //public ResponseEntity<Contact> getContactById(@PathVariable Long id) {
       // Optional<Contact> contact = contactService.getContactById(id);
        //if (contact.isPresent()) {
           // return ResponseEntity.ok(contact.get());
        //} else {
        //    return ResponseEntity.notFound().build();
       // }
    //}


//}