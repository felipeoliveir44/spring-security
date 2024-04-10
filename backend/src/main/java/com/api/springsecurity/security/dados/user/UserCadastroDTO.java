package com.api.springsecurity.security.dados.user;

import com.api.springsecurity.security.domain.user.UserRole;
import jakarta.validation.constraints.NotBlank;

public record UserCadastroDTO(
        @NotBlank
        String login,
        @NotBlank
        String password,
        UserRole role
) {
}
