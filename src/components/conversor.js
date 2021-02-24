import React, { Component } from 'react';

export default class Conversor extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "", 
            moedaB_valor: 0,
        };

        this.converter = this.converter.bind(this);
         {/*Para acessar o This do metodo converter, precisa por o metodo 
        bind.Toda função do Js tem esse método bind, pode passar algum objeto
        par dento do bind e ele se torna o this */} 
    }

     
    converter() {
        
        let de_para = `${this.props.moedaA_valor}_${this.props.moedaB_valor}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=234428564665e4c14ce2`;

        fetch(url)
        .then(res=>{
            
            return res.json()
            
        })
        .then(json=>{
            let cotacao = json[de_para].val
            ;
            let moedaB_valor = ( parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
            this.setState({moedaB_valor})
        })

    }
    

  render() {
    return (
      <div className="App">
          <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
            <input type="text" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}></input>  
                {/* disparar evento no botton. onChange vai pegar o valor(disparar evento), 
                o evento vai pegar o elemento (target) que é o que foi desccrito na caixa (elemento input) 
                pegando o valor informado(value)*/} 
            <input type="button" value="Converter" onClick= {this.converter}></input>
                 {/* criou evento (onclick) qie vai chamar a função,metodo (converter)*/}
            <h2>{this.state.moedaB_valor}</h2>

      </div>
    );
  }
}


