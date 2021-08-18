import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";

import Header from "./Components/Header";

import Filme from "./Pages/Filme"

import Erro from "./Pages/Erro"

import Favoritos from "./Pages/Favoritos"

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/filme/:id" component={Filme}></Route>
        <Route exact path="/favoritos" component={Favoritos}></Route>
        <Route  path="*" component={Erro}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
