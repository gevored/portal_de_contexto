import React, { Fragment } from 'react'
import './menuVertical.css'
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import Routes from '../../routes.js'
import CadastroContexto from '../cadastroContexto/cadastroContexto'


function MenuVertical(){

   function direct (e){
    e.preventDefault();
   }
    return(
        <div id="divMenuCorpo">
        <BrowserRouter>
        <div id= "divMenuVertical">
        
        <nav class="nav">
           
            <ul>
                {/* <li><a href="/Cadastro" >Cadastro</a></li>
                <li><a href="/Consulta" >Visualização de Contextos</a></li> */}
                <li><Link to="/Cadastro">Cadastro</Link></li> 
                <li><Link to="/Consulta">Visualização de Contextos</Link></li> 

            </ul>
            
        </nav>   
    
        </div>
        
        <div id= "divConteudo">
            <Routes/>
        </div>
        
        </BrowserRouter>
        </div>
        
    )
}

export default  MenuVertical
