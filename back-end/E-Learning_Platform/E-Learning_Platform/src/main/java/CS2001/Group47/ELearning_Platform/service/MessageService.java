package CS2001.Group47.ELearning_Platform.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CS2001.Group47.ELearning_Platform.exception.ResourceNotFoundException;
import CS2001.Group47.ELearning_Platform.model.Messages;
import CS2001.Group47.ELearning_Platform.repository.MessagesRepository;

@Service
public class MessageService {
    @Autowired
	MessagesRepository messagesRepository;

    public MessageService() {
		super();
		// TODO Auto-generated constructor stub
	}
    public void addMessage(Messages newMessage) {
		messagesRepository.save(newMessage);
	}

	public void deletemessage(Integer messageID) {
		Messages messages = messagesRepository.findById(messageID)
				.orElseThrow(() -> new ResourceNotFoundException("messages", "messageID", messageID));
                messagesRepository.delete(messages);
	}
    
}
