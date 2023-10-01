package CS2001.Group47.ELearning_Platform.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.dto.NewMessageDTO;
import CS2001.Group47.ELearning_Platform.model.Messages;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.model.Threads;
import CS2001.Group47.ELearning_Platform.repository.MessagesRepository;
import CS2001.Group47.ELearning_Platform.repository.StudentRepository;
import CS2001.Group47.ELearning_Platform.service.MessageService;
import CS2001.Group47.ELearning_Platform.service.ThreadService;
@RestController
public class MessagesController {
    @Autowired
    MessageService messageService;
    @Autowired
    ThreadService threadService;
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    MessagesRepository messagesRepository;
        
    @PostMapping("/messages/create")
    public ResponseEntity<Optional<Messages>> addThread(@RequestBody NewMessageDTO newMessageDTO) {
        String studentnull = Integer.toString(newMessageDTO.getStudentId());
        if (studentnull == null) {
            // This is for testing purposes
            System.out.println(newMessageDTO.toString());

            // Return response entity with error and BAD REQUEST status
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);

        }

        Threads threads = threadService.findByID(newMessageDTO.getSaveThreadID());
        Student students = studentRepository.findByStudentId(newMessageDTO.getStudentId());
        // Else create a thread with DTO
        Messages newMessage = new Messages(
            newMessageDTO.getNewMessage(), threads, students);
        // Add thread through ThreadService
        messageService.addMessage(newMessage);

        // Return response entity with new thread and CREATED status
        return new ResponseEntity<>(Optional.ofNullable(newMessage), HttpStatus.CREATED);

    }

    private void alert(String string) {
    }

    @RequestMapping("/messages/{threadId}")
    public Iterable<Messages>  getMessages( @PathVariable("threadId") Integer threadId) {
    return messagesRepository.findByThreads_ThreadId(threadId) ;
    }

    @DeleteMapping("/deletemessage/{messageID}")

    public String deletemessage(@PathVariable Integer messageID) {
  
      // Delete message by the the ID
      messageService.deletemessage(messageID);
      return "Message Deleted";
  
    }
}
