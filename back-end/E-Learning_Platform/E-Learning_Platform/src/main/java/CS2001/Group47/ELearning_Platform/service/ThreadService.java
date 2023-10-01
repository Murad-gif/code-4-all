package CS2001.Group47.ELearning_Platform.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.exception.ResourceNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Threads;
import CS2001.Group47.ELearning_Platform.repository.ThreadsRepository;

@Service
public class ThreadService {
    @Autowired
	ThreadsRepository threadsRepository;

	public ThreadService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Threads> getThreads() {
		return (List<Threads>) threadsRepository.findAll();
	}

	public void addThread(Threads newThread) {
		threadsRepository.save(newThread);
	}

	public Threads findByID(Integer id) {
		return threadsRepository.findByThreadId(id);
	}

	public List<Threads> findByThreadNameContaining(String threadName) {
		return threadsRepository.findByThreadNameContaining(threadName);
	}

	public List<Threads> findByfTagContaining(String fTags) {
		return threadsRepository.findByfTagsContaining(fTags);
	}

	public Threads findByEmail(String email) {
		return threadsRepository.findByStudents_Email(email);
	}

	public Threads findByTagContaining(String threadtag) {
		return null;
	}

	public void deletethread(Integer threadId) {
		Threads threads = threadsRepository.findById(threadId)
				.orElseThrow(() -> new ResourceNotFoundException("threads", "threadId", threadId));
                threadsRepository.delete(threads);
	}
}
