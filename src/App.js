import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/";
import { Provider } from 'react-redux';

/*Paginas*/
import Login from "./view/login/";
import NovoUsuario from "./view/usuario-novo/";
import Home from "./view/home/";
import UsuarioRecuperarSenha from "./view/usuario-recuperar-senha/";
import EventoCadastro from "./view/evento-cadastro/";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/eventos/:parametro" component={Home} />
        <Route exact path="/novo-usuario" component={NovoUsuario} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/recuperar-senha" component={UsuarioRecuperarSenha} />
        <Route exact path="/cadastrar-evento" component={EventoCadastro} />
      </Router>
    </Provider>
  );
}

export default App;
