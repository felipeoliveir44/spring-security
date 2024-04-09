package com.api.springsecurity.security.controller;

import com.api.springsecurity.security.dados.produto.ProdutoCadastroDTO;
import com.api.springsecurity.security.domain.produto.Produto;
import com.api.springsecurity.security.service.ProdutoService;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
    @Autowired
    private ProdutoService service;

    @PostMapping("/cadastrar")
    @Transactional
    public ResponseEntity cadastrarProduto(@RequestBody @Valid ProdutoCadastroDTO dados) {
        service.cadastrarProduto(dados);
        return ResponseEntity.ok(dados);
    }

    @GetMapping("/listar")
    public List<Produto> listarProdutos() {
        List listaProdutos = service.listarProdutos();
        return listaProdutos;
    }
}
