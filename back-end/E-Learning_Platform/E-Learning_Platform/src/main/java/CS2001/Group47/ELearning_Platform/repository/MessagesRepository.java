package CS2001.Group47.ELearning_Platform.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import CS2001.Group47.ELearning_Platform.model.Messages;

@Repository
public interface MessagesRepository extends CrudRepository<Messages, Integer>  {
    Messages findByMessage(String message);

    List <Messages> findByThreads_ThreadId(Integer id);

    Messages findBymDateCreated(Date mDateCreated);

	Messages findBymTimeCreated(Date mTimeCreated);
	
	Messages findBymTimestampCreated(Date mTimestampCreated);
}
