import React from 'react'
import './cadastroContexto.css'


class CadastroContexto extends React.Component {

    constructor(props) {
      super(props);
      this.state = {nomeCampanha: ''};
      this.state = {segmento: 'DEFAULT'};
      this.state = {contexto: ''};

      this.state = {inicioVigencia: ''};
      this.state = {fimVigencia: ''};
      this.state = {produto: 'DEFAULT'};




      this.selectSegmento = this.selectSegmento.bind(this);
      this.setNomeCampanha = this.setNomeCampanha.bind(this);
      this.setContexto = this.setContexto.bind(this);


      this.setInicioVigencia = this.setInicioVigencia.bind(this);
      this.setFimVigencia = this.setFimVigencia.bind(this);


      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    selectSegmento(event){
        this.setState({segmento: event.target.value});
    }

    setNomeCampanha(event) {
        this.setState({nomeCampanha: event.target.value})
    }

    setContexto(event) {
        this.setState({contexto: event.target.value});
    }
      
    setInicioVigencia(event) {
        this.setState({inicioVigencia: event.target.value});
    }

    setFimVigencia(event) {
        this.setState({fimVigencia: event.target.value});
    }

    handleSubmit(event){
        alert('Campanha Cadastrada');
        event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}  >
        <div>
            <div >
                <h2> Cadastro de Contextos </h2>
                <div className = "flexVertical">
                <div  className= "flexVertical">
                    <label>
                    Nome da campanha:
                    </label>
                    <input  type="text" value={this.state.nomeCampanha} onChange={this.setNomeCampanha} />
                </div>
                    <div  className= "flexVertical">
                    <label >
                        Segmento: 
                    </label>
                    
                        <select value={this.state.segmento} onChange={this.selectSegmento}>
                            <option value="DEFAULT">Selecione um Segmento</option>
                            <option value="IA">Itaú Agências</option>
                            <option value="IU">Uniclass</option>
                           
                        </select>
                    </div>
                </div>
            </div>
            <div  className= "flexVertical">
                <label>
                Contexto:
                </label>
                <textarea  value={this.state.contexto} onChange={this.setContexto} />
               
            </div>
            <div className= "flexVertical">
                <div  className= "flexVertical">
                <label>
                    Início de vigência:
                </label>
                <input  type="date" value={this.state.inicioVigencia} onChange={this.setInicioVigencia} />
                </div>

                <div  className= "flexVertical">
                <label>
                    Fim de vigência
                </label>
                
                <input  type="date" value={this.state.fimVigencia} onChange={this.setFimVigencia} />
                </div>
            </div>

            <div  className= "flexVertical"> 
                <label>
                    Produto: 
                </label>
                
                    <select value={this.state.produto} onChange={this.selectSegmento}>
                        <option value="RENEG">Renegociação</option>
                        <option value="SEGUROS">Seguros</option>
                        <option value="CREDIARIO">Crediário</option>
                        <option value="CONSIG_INSS">Consignado INSS</option>
                        <option value="CONSIG_EP">Consignado EP</option>
                        <option value="CONSIGNADO_OP">Consignado OP</option>
                        <option value="CONSIGNADO_EP_OP">Consignado OP/EP</option>
                        <option value="DEFAULT">Selecione um produto</option>
                    </select>
            </div>
            <div>
           
            </div>
            <div className = "classButon">            
                <input  type="submit" value="Cadastrar" />
            </div>
        </div>
      </form>
      );
    }
  }

export default  CadastroContexto