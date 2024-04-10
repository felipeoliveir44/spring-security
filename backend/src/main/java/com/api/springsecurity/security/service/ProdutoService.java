package com.api.springsecurity.security.service;

import com.api.springsecurity.security.dados.produto.ProdutoCadastroDTO;
import com.api.springsecurity.security.domain.produto.Produto;
import com.api.springsecurity.security.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository repository;

    public ResponseEntity cadastrarProduto(ProdutoCadastroDTO dados) {
        Produto produto = new Produto(dados);
        repository.save(produto);
        return ResponseEntity.ok(dados);
    }

    public List<Produto> listarProdutos() {
        return repository.findAll();
    }
}
