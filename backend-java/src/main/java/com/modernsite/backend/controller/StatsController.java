package com.modernsite.backend.controller;

import com.modernsite.backend.repository.ContactMessageRepository;
import com.modernsite.backend.repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/stats")
@RequiredArgsConstructor
@Tag(name = "Statistics", description = "Endpoints de estatísticas")
@SecurityRequirement(name = "bearer-jwt")
public class StatsController {
    
    private final UserRepository userRepository;
    private final ContactMessageRepository contactMessageRepository;
    
    @GetMapping
    @Operation(summary = "Obter estatísticas do sistema")
    public ResponseEntity<Map<String, Long>> getStats() {
        Map<String, Long> stats = new HashMap<>();
        stats.put("users", userRepository.count());
        stats.put("messages", contactMessageRepository.count());
        stats.put("services", 6L);
        return ResponseEntity.ok(stats);
    }
}
