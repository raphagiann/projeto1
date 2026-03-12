package com.modernsite.backend.service;

import com.modernsite.backend.dto.ContactRequest;
import com.modernsite.backend.model.ContactMessage;
import com.modernsite.backend.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {
    
    private final ContactMessageRepository contactMessageRepository;
    
    public void saveContactMessage(ContactRequest request) {
        ContactMessage message = new ContactMessage();
        message.setName(request.getName());
        message.setEmail(request.getEmail());
        message.setSubject(request.getSubject());
        message.setMessage(request.getMessage());
        
        contactMessageRepository.save(message);
    }
}
