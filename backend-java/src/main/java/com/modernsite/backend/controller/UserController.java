package com.modernsite.backend.controller;

import com.modernsite.backend.model.User;
import com.modernsite.backend.repository.ContactMessageRepository;
import com.modernsite.backend.repository.UserRepository;
import com.modernsite.backend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Tag(name = "Users", description = "Endpoints de usuários")
@SecurityRequirement(name = "bearer-jwt")
public class UserController {
    
    private final UserService userService;
    private final UserRepository userRepository;
    
    @GetMapping("/me")
    @Operation(summary = "Obter dados do usuário autenticado")
    public ResponseEntity<User> getCurrentUser(Authentication authentication) {
        String email = authentication.getName();
        User user = userService.getUserByEmail(email);
        user.setPassword(null);
        return ResponseEntity.ok(user);
    }
}
