/**
 * 
 */
package CS2001.Group47.ELearning_Platform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.Student;

/**
 * @author JohCa
 *
 */
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	@Query("SELECT s FROM Student s WHERE s.email = ?1")
	Student findByEmail(String email);

	Student findByResetPasswordToken(String token);

	Student findByStudentId(Integer integer);

	List<Student> findByOrderByXpDesc();
}
