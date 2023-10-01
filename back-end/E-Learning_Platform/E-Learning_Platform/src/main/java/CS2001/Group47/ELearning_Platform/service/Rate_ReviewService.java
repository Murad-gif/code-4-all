package CS2001.Group47.ELearning_Platform.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.exception.ResourceNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Rate_Review;
import CS2001.Group47.ELearning_Platform.repository.Rate_ReviewRepository;

@Service

public class Rate_ReviewService {
	@Autowired
	Rate_ReviewRepository reviewRepository;

	public void addReview(Rate_Review newReview) {
		reviewRepository.save(newReview);
	}

	public List<Rate_Review> getReviews(Integer courseID) {
		return (List<Rate_Review>) reviewRepository.findAllByCourses_CourseID(courseID);

	}

	public Rate_Review findByEmail(String email, Integer courseID) {
		return reviewRepository.findByStudents_EmailAndCourses_CourseID(email,courseID);
	}

	public void deleteReview(Integer ratingID) {
		Rate_Review rate_Review = reviewRepository.findById(ratingID)
				.orElseThrow(() -> new ResourceNotFoundException("rate_review", "ratingID", ratingID));
		reviewRepository.delete(rate_Review);
	}

}
