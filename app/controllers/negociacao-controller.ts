import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacoes-view.js";


export class NegociacaoController {
  private _inputData : HTMLInputElement;
  private _inputQuantidade : HTMLInputElement;
  private _inputValor : HTMLInputElement;
  private negociacoes = new Negociacoes;
  private negociacoesView = new NegociacaoView('#negociacoesView');
  private mensagemView = new MensagemView("#mensagemView");
  
  constructor() {
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  adiciona(): void{
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso!')
    
    //console.table(this.negociacoes.lista());
    this.limparFormulario();
  }
  
  criaNegociacao(): Negociacao{
    const exp = /-/g;
    const date = new Date(this._inputData.value.replace(exp, ','));
    const quantidade = parseInt(this._inputQuantidade.value);
    const valor = parseFloat(this._inputValor.value);
  
    return new Negociacao(date, quantidade, valor);
  }

  limparFormulario(): void{
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';

    this._inputData.focus();
  }

}