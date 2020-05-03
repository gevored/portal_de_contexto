import React from 'react'
import './cadastroContexto.css'


class CadastroContexto extends React.Component {

    constructor(props) {
      super(props);
      this.state = {nomeCampanha: ''};
      this.state = {segmento: 'n/a'};
      this.state = {contexto: ''};


      this.selectSegmento = this.selectSegmento.bind(this);
      this.setNomeCampanha = this.setNomeCampanha.bind(this);
      this.setContexto = this.setContexto.bind(this);

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

    handleSubmit(event){
        alert('Campanha Cadastrada');
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div>
            <div class="form-row">
                <div class="col">
                    <label>
                    Nome da campanha:
                    <input class="form-control" type="text" value={this.state.nomeCampanha} onChange={this.setNomeCampanha} />
                    </label>
                </div>
                <div class="col">
                    <label>
                        Segmento: 
                        <select class="form-control" value={this.state.segmento} onChange={this.selectSegmento}>
                            <option value="IA">Itaú Agências</option>
                            <option value="IU">Uniclass</option>
                            <option value="n/a">Selecione um Segmento</option>
                        </select>
                    </label>
                </div>
            </div>
            <div class="form-row" >
                <label>
                Contexto:
                </label>
                <textarea class="form-control"  value={this.state.contexto} onChange={this.setContexto} />
            </div>
            <div>

            </div>
        
 
        </div>
      </form>
      );
    }
  }

export default  CadastroContexto