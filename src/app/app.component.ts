import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contato {
  nome: string;
  telefone: string;
  email: string;
  favorito: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'trabalho-agenda';

  novoNome: string = '';
  novoTelefone: string = '';
  novoEmail: string = '';

  busca: string = '';

  listaContatos: Contato[] = [];

  contatosPesquisados: Contato[] = [];

  adicionarContato() {

    if (
      this.novoNome.trim() === '' ||
      this.novoTelefone.trim() === ''
    ) {
      alert('Informe o nome e o telefone do contato.');
      return;
    }

    const novoContato: Contato = {
      nome: this.novoNome.trim(),
      telefone: this.novoTelefone.trim(),
      email: this.novoEmail.trim(),
      favorito: false
    };

    this.listaContatos.push(novoContato);

    this.novoNome = '';
    this.novoTelefone = '';
    this.novoEmail = '';
  }

  pesquisarContato() {

    const texto = this.busca.toLowerCase().trim();

    this.contatosPesquisados = this.listaContatos.filter(contato =>
      contato.nome.toLowerCase().includes(texto)
    );
  }

  removerLista(index: number) {

    this.listaContatos.splice(index, 1);
  }

  alterarFavorito(index: number) {

    this.listaContatos[index].favorito =
      !this.listaContatos[index].favorito;
  }

}