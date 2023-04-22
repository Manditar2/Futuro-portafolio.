
import { Sidebar } from './componentes/sidebar'
import React, { Suspense } from 'react';
import './App.css';
import { FiUser } from "react-icons/fi";


const Juego = React.lazy(() => import('./componentes/juego'));
const Knapsack = React.lazy(() => import('./componentes/knapsack'));


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {click_login: false,
    aplicacion:0};
    this.cerrar_login = this.cerrar_login.bind(this);
    this.abrir_login = this.abrir_login.bind(this);
    this.seleccionar_aplicacion = this.seleccionar_aplicacion.bind(this);
    this.renderizar_aplicacion = this.renderizar_aplicacion.bind(this);
  }

  cerrar_login(){
    this.setState({click_login:false})
  }

  abrir_login(){
    this.setState({click_login:true})
  }

  seleccionar_aplicacion (valor){
    this.setState({aplicacion:valor})
    console.log(valor);
  }

  renderizar_aplicacion(){
    if(this.state.aplicacion === 1){
      return (<div className="columna_lado1">
        <div className="titulo"> 2048 </div>
        <div>
          <Juego/>
        </div>
      </div>);
    }
    else if(this.state.aplicacion === 2){
      return (<div className="columna_lado1">
        <div className="titulo"> Mochila </div>
        <Knapsack/>

      </div>);
    }
    else{
      return (<div className="columna_lado1"> Inicio </div>)
    }
  }


  render() {

    return (
      <div className="App">
        <div className="fila">
          <div className="columna_side">
            <Sidebar seleccionar_aplicacion = {this.seleccionar_aplicacion} />
          </div>
          <div className= "columna_lado">
              <Suspense fallback = {<div>Loading ..</div>}>
              {this.renderizar_aplicacion()}
              </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

export { Main  as default}