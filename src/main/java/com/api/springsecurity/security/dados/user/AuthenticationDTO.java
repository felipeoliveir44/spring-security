package com.api.springsecurity.security.dados.user;

import jakarta.validation.constraints.NotBlank;

public record AuthenticationDTO(
        @NotBlank
        String login,
        @NotBlank
        String password
) {
}
