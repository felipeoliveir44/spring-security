package com.api.springsecurity.security.dados.produto;

import java.math.BigDecimal;

public record ProdutoCadastroDTO(
        String nome,
        BigDecimal preco
) {
}
