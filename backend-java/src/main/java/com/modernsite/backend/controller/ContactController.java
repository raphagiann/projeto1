package com.modernsite.backend.controller;

import com.modernsite.backend.dto.ContactRequest;
import com.modernsite.backend.service.ContactService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@RequiredArgsConstructor
@Tag(name = "Contact", description = "Endpoints de contato")
public class ContactController {
    
    private final ContactService contactService;
    
    @PostMapping
    @Operation(summary = "Enviar mensagem de contato")
    public ResponseEntity<String> sendMessage(@Valid @RequestBody ContactRequest request) {
        contactService.saveContactMessage(request);
        return ResponseEntity.ok("Mensagem enviada com sucesso");
    }
}
