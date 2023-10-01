package CS2001.Group47.ELearning_Platform.service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import CS2001.Group47.ELearning_Platform.exception.ResourceNotFoundException;
import CS2001.Group47.ELearning_Platform.exception.StudentNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Student;
import CS2001.Group47.ELearning_Platform.repository.StudentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class StudentService {
	@Autowired
	StudentRepository studentRepository;

	private static final Logger log = LoggerFactory.getLogger(StudentService.class);

	public boolean changePassword(Integer userId, String newPassword) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			String encodedPassword = encoder.encode(newPassword);
			user.setPassword(encodedPassword);
			studentRepository.save(user);
			return true;
		} else {
			return false;
		}
	}
	

	public StudentService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Student> getStudents() {
		return (List<Student>) studentRepository.findAll();
	}

	public void addStudent(Student newUser) {
		studentRepository.save(newUser);
	}

	public Optional<Student> findByID(Integer id) {
		return studentRepository.findById(id);
	}

	public void deleteStudent(Integer id) {
		Student student = studentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student", "id", id));
		studentRepository.delete(student);
	}

	public Student findByEmail(String email) {
		return studentRepository.findByEmail(email);
	}

	public void updateResetPasswordToken(String token, String email) throws StudentNotFoundException {
		Student student = studentRepository.findByEmail(email);
		if (student != null) {
			student.setResetPasswordToken(token);
			studentRepository.save(student);
		} else {
			throw new StudentNotFoundException("Could not find any student with the email" + email);
		}
	}

	public Student getResetPasswordToken(String token) {
		return studentRepository.findByResetPasswordToken(token);
	}

	public void updatePassword(Student student, String newPassword) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String encodedPassword = encoder.encode(newPassword);
		student.setPassword(encodedPassword);

		student.setResetPasswordToken(null);
		studentRepository.save(student);
	}

	// added by murad here and in student repo as well
	// public Student getStudentbyId(int studentId) {
	// return studentRepository.findByStudentId(studentId);
	// }

	// public Student saveUserProfile(Student userProfile) {
	// return studentRepository.save(userProfile);
	// }

	// public Optional<Student> getUserProfileById(Integer userId) {
	// return studentRepository.findById(userId);
	// }

	// -----

	public void saveUserImage(Integer id, MultipartFile file) throws IOException {
		Student user = studentRepository.findById(id).orElseThrow();
	
		if (user.getAvatar() != null) {
			user.setAvatar(file.getBytes());
		} else {
			Resource resource = new ClassPathResource("default.jpg");
			InputStream inputStream = resource.getInputStream();
			byte[] defaultImageBytes = IOUtils.toByteArray(inputStream);
			user.setAvatar(defaultImageBytes);
		}
	
		studentRepository.save(user);
	}
	
	public byte[] getUserImage(Integer id) {
		Student user = studentRepository.findById(id).orElseThrow();
		byte[] imageBytes = user.getAvatar();
	
		if (imageBytes == null) {
			try {
				Resource resource = new ClassPathResource("default.jpg");
				InputStream inputStream = resource.getInputStream();
				imageBytes = IOUtils.toByteArray(inputStream);
			} catch (IOException e) {
			}
		}
	
		return imageBytes;
	}
	
	public void saveUserBackImage(Integer id, MultipartFile file) throws IOException {
		Student user = studentRepository.findById(id).orElseThrow();
	
		if (user.getBackavatar() != null) {
			user.setBackavatar(file.getBytes());
		} else {
			Resource resource = new ClassPathResource("default.jpg");
			InputStream inputStream = resource.getInputStream();
			byte[] defaultImageBytes = IOUtils.toByteArray(inputStream);
			user.setBackavatar(defaultImageBytes);
		}
	
		studentRepository.save(user);
	}

	public byte[] getUserBackImage(Integer id) {
		Student user = studentRepository.findById(id).orElseThrow();
		byte[] imageBytes = user.getBackavatar();
	
		if (imageBytes == null) {
			try {
				Resource resource = new ClassPathResource("default.jpg");
				InputStream inputStream = resource.getInputStream();
				imageBytes = IOUtils.toByteArray(inputStream);
			} catch (IOException e) {
			}
		}
	
		return imageBytes;
	}

	public void saveBio(Integer userId, String bio) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			user.setBio(bio);
			studentRepository.save(user);
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public String getBio(Integer userId) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			return user.getBio();
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public void saveOption(Integer userId, String bio) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			user.setOptionValue(bio);
			studentRepository.save(user);
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public String getOption(Integer userId) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			return user.getOptionValue();
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public void saveRole(Integer userId, String role) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			user.setRole(role);
			studentRepository.save(user);
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public String getRole(Integer userId) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			return user.getRole();
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public void saveTwitter(Integer userId, String twitter) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			user.setTwitter(twitter);
			studentRepository.save(user);
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public String getTwitter(Integer userId) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			return user.getTwitter();
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public void saveLinked(Integer userId, String linkedIn) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			user.setLinkedIn(linkedIn);
			studentRepository.save(user);
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public String getLinkedr(Integer userId) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			return user.getLinkedIn();
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public void saveInstagram(Integer userId, String instagram) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			user.setLinkedIn(instagram);
			studentRepository.save(user);
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public String getInstagram(Integer userId) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			return user.getInstagram();
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public void saveUsername(Integer userId, String userName) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			user.setUsername(userName);
			studentRepository.save(user);
		} else {
			throw new RuntimeException("User not found");
		}
	}

	public String getUsername(Integer userId) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			return user.getUsername();
		} else {
			throw new RuntimeException("User not found");
		}
	}
	 
	public void initializeSelectedBadges(Student user) {
		List<String> selectedBadges = user.getSelected_badges();
		while (selectedBadges.size() < 4) {
			selectedBadges.add(null);
		}
		user.setSelected_badges(selectedBadges);
	}

	public Student updateSelectedBadges(Integer userId, String badgeName, int badgeIndex) {
		Optional<Student> userOptional = studentRepository.findById(userId);
		if (userOptional.isPresent()) {
			Student user = userOptional.get();
			
			initializeSelectedBadges(user); // Call the method to ensure the list has at least 4 elements
			
			List<String> selectedBadges = user.getSelected_badges();
			selectedBadges.set(badgeIndex, badgeName);
			user.setSelected_badges(selectedBadges);
			return studentRepository.save(user);
		} else {
			throw new RuntimeException("User not found");
		}
	}
	public Student getStudentByStudentId(Integer studentId) {
		return studentRepository.findByStudentId(studentId);
	}

}
