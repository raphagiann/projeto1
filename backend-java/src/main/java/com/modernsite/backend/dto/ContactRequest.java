package com.modernsite.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ContactRequest {
    @NotBlank(message = "Nome é obrigatório")
    private String name;
    
    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email inválido")
    private String email;
    
    @NotBlank(message = "Assunto é obrigatório")
    private String subject;
    
    @NotBlank(message = "Mensagem é obrigatória")
    @Size(min = 10, message = "Mensagem deve ter pelo menos 10 caracteres")
    private String message;
}
