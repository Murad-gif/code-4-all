package CS2001.Group47.ELearning_Platform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.Subscriptions;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscriptions, Integer>{
    
    List <Subscriptions> findByThreads_ThreadId(Integer id);

    Iterable<Subscriptions> findBySubEmailAndThreads_ThreadId(String subEmail, Integer threadId);

}
