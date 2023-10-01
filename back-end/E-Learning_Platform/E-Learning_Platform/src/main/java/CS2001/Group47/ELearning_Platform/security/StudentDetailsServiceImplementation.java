package CS2001.Group47.ELearning_Platform.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.repository.StudentRepository;

@Service
public class StudentDetailsServiceImplementation implements UserDetailsService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // TODO Auto-generated method stub
        Student currentStudent = studentRepository.findByEmail(email);

        if(currentStudent != null) {
            System.out.println(currentStudent.getEmail());

            List<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority("ROLE_STUDENT"));

            UserDetails student = new org.springframework.security.core.userdetails.User(email, currentStudent.getPassword(), true, true, true, true, authorities);
            return student;
        } else {
            throw new UsernameNotFoundException("Student not authorized");
        }
    }

}
 