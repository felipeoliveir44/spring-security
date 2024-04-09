package com.api.springsecurity.security.repository;

import com.api.springsecurity.security.domain.produto.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
