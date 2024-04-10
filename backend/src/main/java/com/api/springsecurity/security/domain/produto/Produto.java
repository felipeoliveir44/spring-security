package com.api.springsecurity.security.domain.produto;

import com.api.springsecurity.security.dados.produto.ProdutoCadastroDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "tbproduto")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String nome;
    BigDecimal preco;

    public Produto(ProdutoCadastroDTO dados) {
        this.nome = dados.nome();
        this.preco = dados.preco();
    }
}
