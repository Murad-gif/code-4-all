package CS2001.Group47.ELearning_Platform.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import CS2001.Group47.ELearning_Platform.dto.StudentPostDTO;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.repository.StudentRepository;
import CS2001.Group47.ELearning_Platform.service.RankingService;
import CS2001.Group47.ELearning_Platform.service.StudentService;

@RestController
public class StudentController {
    @Autowired
    StudentService studentService;
    @Autowired
    StudentRepository studentRepository;

    @GetMapping("/user")
    public List<Student> getAllUsers() {

        return studentService.getStudents();

    }


    @PostMapping("/user")
    public ResponseEntity<Optional<Student>> addUser(@RequestBody StudentPostDTO newStudentDTO) {
        // StudentDTO has null attributes
        if (newStudentDTO.getFirstName() == null ||
                newStudentDTO.getLastName() == null ||
                newStudentDTO.getDob() == null ||
                newStudentDTO.getCountry() == null ||
                newStudentDTO.getPhone() == null ||
                newStudentDTO.getEmail() == null ||
                newStudentDTO.getPassword() == null) {

            // This is for testing purposes
            System.out.println(newStudentDTO.toString());
            // Return response entity with error and BAD REQUEST status
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);

        }

        // Create password encoder object
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        // Convert Date to String for DOB
        // Date date = newStudentDTO.getDateOfBirth();
        // DateFormat dateFormat = new SimpleDateFormat("dd/mm/yyyy");
        // String dob = dateFormat.format(date);

        Date date = newStudentDTO.getDob();  
        System.out.println(date);
        DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");  
        String strDate = dateFormat.format(date);  
        System.out.println("Converted String: " + strDate); 

        // Else create a student with DTO
        Student newStudent = new Student(
                newStudentDTO.getFirstName(),
                newStudentDTO.getLastName(), strDate, newStudentDTO.getCountry(),
                newStudentDTO.getPhone(),
                newStudentDTO.getEmail(), encoder.encode(newStudentDTO.getPassword()));
        // Add student through StudentService
        studentService.addStudent(newStudent);

        // Return response entity with new user and CREATED status
        return new ResponseEntity<>(Optional.ofNullable(newStudent), HttpStatus.CREATED);

    }

    @GetMapping("/user/{id}")
    public Optional<Student> getStudentbyId(@PathVariable(value = "id") Integer Id) {

        // Return a user with the specified ID
        return studentService.findByID(Id);

    }

    @DeleteMapping("user/{id}")
    public String deleteStudent(@PathVariable(value = "id") Integer Id) {

        // Delete student by using their ID
        studentService.deleteStudent(Id);
        return "Student Deleted";

    }

    @GetMapping("/user/findByEmail")
    public Optional<Student> getUserByEmail(@RequestParam String email) {

        return Optional.ofNullable(studentService.findByEmail(email));

    }

    @GetMapping("/user/getByEmail")
    public Student getByEmail(@RequestParam String email) {

        return (studentService.findByEmail(email));

    }
   
    
    // @RequestMapping(value = "/username", method = RequestMethod.GET)
    // @ResponseBody
    // public String currentUserName(Principal principal) {
    // return principal.getName();
    // }

    @RequestMapping("/profile/{email}")
    public Student getProfile(@PathVariable("email")  String email) {
        return studentService.findByEmail(email);


    }
    @GetMapping("/getRankings")
    public List<Student> getRankings() {

        return studentRepository.findByOrderByXpDesc();
    }
    
    @PostMapping ("/saveSelectedBadges")

    public Student setSelectedBadges (@RequestBody Map<String, Object> payload) {
        
        String badgeName = (String) payload.get("badgeName");
        int badgeIndex = (Integer)  payload.get("badgeIndex");
        Integer studentId = (Integer) payload.get("studentId");
        if (badgeName == null || studentId == null || payload.get("badgeIndex") == null) {
            throw new RuntimeException("Required fields missing in payload");
        }
        return studentService.updateSelectedBadges(studentId, badgeName, badgeIndex);
    }
}
