
import React from 'react'
import CadastroContexto from './components/cadastroContexto/cadastroContexto'

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    
      <Switch>
        <Route exact path="/Cadastro"  >
          <CadastroContexto/>
        </Route>
        <Route exact path="/Consulta"  >
          <h1>Componente de consulta</h1>
        </Route>       
      </Switch>
    
  );


  export default Routes