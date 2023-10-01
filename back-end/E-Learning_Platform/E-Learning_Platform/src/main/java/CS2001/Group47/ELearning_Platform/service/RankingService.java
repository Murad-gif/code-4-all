package CS2001.Group47.ELearning_Platform.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.repository.StudentRepository;

@Service
public class RankingService {
    public static Student getRankPosition;
    @Autowired
    private StudentRepository studentRepository; 

    /**
     * @param totXp
     * @return
     */
    // public int getRankPosition(int totXp){
	// 	List<Student> orderedList = studentRepository.findAllByOrderBytotXpAsc();
	// 	for (int i = 0; i < orderedList.size(); i++){
	// 		Student student = orderedList.get(i);
    //         if(student.getStudentId()  ) {
    //             return i + 1; 
    //         }
    //         return 0; 
	// 	}
       
           
	// }
  
    }