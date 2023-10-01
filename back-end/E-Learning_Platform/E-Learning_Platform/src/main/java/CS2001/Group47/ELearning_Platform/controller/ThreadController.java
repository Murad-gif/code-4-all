package CS2001.Group47.ELearning_Platform.controller;

import java.security.Principal;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import CS2001.Group47.ELearning_Platform.dto.CreateThreadDTO;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.model.Threads;
import CS2001.Group47.ELearning_Platform.repository.ThreadsRepository;
import CS2001.Group47.ELearning_Platform.service.Rate_ReviewService;
import CS2001.Group47.ELearning_Platform.service.ThreadService;

@RestController
public class ThreadController {
    @Autowired
    ThreadService threadService;
    @Autowired
    StudentController studentController;
    @Autowired
    ThreadsRepository threadsRepository;

    @GetMapping("/threads")
    public List<Threads> getAllThreads() {

        return threadService.getThreads();
    
}
    @PostMapping("/threads/create")
    public ResponseEntity<Optional<Threads>> addThread(@RequestBody CreateThreadDTO newThreadDTO, Principal principal) {
        // CreateThreadDTO has null attributes
        if (newThreadDTO.getThreadName() == null || newThreadDTO.getfTags() == null) {
            // This is for testing purposes
            System.out.println(newThreadDTO.toString());

            // Return response entity with error and BAD REQUEST status
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);

        }
        String email = currentUserName(principal);
        Student  student = studentController.getByEmail(email);
        // Else create a thread with DTO
        Threads newThread = new Threads(
                newThreadDTO.getThreadName(),
                newThreadDTO.getfTags(),
                student);
        // Add thread through ThreadService
        threadService.addThread(newThread);

        // Return response entity with new thread and CREATED status
        return new ResponseEntity<>(Optional.ofNullable(newThread), HttpStatus.CREATED);

    }

    @GetMapping("/threademail")
    public Threads getByEmail(@RequestParam String email) {
    	
    	return (threadService.findByEmail(email));
    	
    }

    @GetMapping("/threadid/{threadId}")
    public Threads getThread(@PathVariable("threadId") Integer threadId) {
    	
    	return threadService.findByID(threadId);
    	
    }

    @RequestMapping("/threadName/{threadName}")
    public Iterable<Threads> getThreadbyNameContaining( @PathVariable("threadName")String threadName) {
    return threadService.findByThreadNameContaining(threadName) ;
}


    @RequestMapping("/threadtag/{fTags}")
    public Iterable<Threads> getThreadbytagContaining( @PathVariable("fTags")String fTags) {
    return threadService.findByfTagContaining(fTags) ;
}

    @GetMapping("/threadtime")
    public List<Threads> getThreadbyTime(Date fTimestampCreated) {
        return threadsRepository.findByfTimestampCreated(fTimestampCreated);

    }

    @RequestMapping(value = "/threadcreator", method = RequestMethod.GET)
    @ResponseBody
    public String currentUserName(Principal principal) {
        return principal.getName();
    }

    @DeleteMapping("/deletethread/{threadId}")
    public String deletethread(@PathVariable Integer threadId) {
  
      // Delete message by the the ID
      threadService.deletethread(threadId);
      return "Thread Deleted";
  
    }
}
