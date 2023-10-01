package CS2001.Group47.ELearning_Platform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.exception.ResourceNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Subscriptions;
import CS2001.Group47.ELearning_Platform.repository.SubscriptionRepository;

@Service
public class SubscriptionService {

    @Autowired
	SubscriptionRepository subscriptionRepository;

    public SubscriptionService() {
		super();
		// TODO Auto-generated constructor stub
	}
    public void addSub(Subscriptions newsub) {
		subscriptionRepository.save(newsub);
	}


    public Iterable<Subscriptions> findSub(String subEmail, Integer threadId) {
		return subscriptionRepository.findBySubEmailAndThreads_ThreadId(subEmail, threadId);
    }
    
    public void deleteSub(Integer subId) {
		Subscriptions subscriptions = subscriptionRepository.findById(subId)
				.orElseThrow(() -> new ResourceNotFoundException("subscriptions", "subId", subId));
                subscriptionRepository.delete(subscriptions);
	}
}
