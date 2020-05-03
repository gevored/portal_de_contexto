import React from 'react'
import './menuVertical.css'
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import Routes from '../../routes.js'
import CadastroContexto from '../cadastroContexto/cadastroContexto'


function MenuVertical(){

   function direct (e){
    e.preventDefault();
   }
    return(
        <div id= "divMenuVertical">
        <BrowserRouter>
        <nav class="nav">
           
            <ul>
                {/* <li><a href="/Cadastro" >Cadastro</a></li>
                <li><a href="/Consulta" >Visualização de Contextos</a></li> */}
                <li><Link to="/Cadastro">Cadastro</Link></li> 
                <li><Link to="/Consulta">Visualização de Contextos</Link></li> 

            </ul>
            
        </nav>

        <Routes/>
        </BrowserRouter>

        </div>
        
    )
}

export default  MenuVertical
