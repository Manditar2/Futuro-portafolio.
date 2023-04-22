import { DiGithubBadge } from 'react-icons/di';
import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
      const estilo_barra = {
        width: '100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        maxHeight:'100%',
        backgroundColor: 'rgb(32, 33, 35)',
        color: '#fff',
      };
      const botones = {
        margin:'7% 0',
        listStyle: 'none',
        borderRadius: '5px',
        height:'20%',
      }
      const titulo = {
        display:'flex',
        listStyle: 'none',
        fontWeight: 'solid',
        marginLeft:'12px',
        padding:'10px'
      }
      const icono_titulo = {
        width: '25px',
        height: '25px',
        marginRight:'5px',   
      }
      const centrar_titulo = {
        fontWeight:'700',
        paddingTop:'5px'
      }
      const division_abajo = {
        width:'90%',
        height:'100%',
        marginLeft:'5%',
        marginRight:'5%',
        marginTop:'90%',
        display:'flex',
        flexDirection:'column',
        boxSizing: 'border-box',
        borderTop:'solid',
        borderColor:'#adc2be',
        borderWidth:'1px',
        opacity:'0.4',
        flexWrap:'wrap'
      }
      const email= {
        marginTop:'20px',

      }
      return (
        <div style = {estilo_barra}>
          <div style={titulo}> <DiGithubBadge style={icono_titulo}/><div style={centrar_titulo}>Manditar2 </div></div>
          <ul>
            <li style = {botones}><a className = "link" onClick = {() => {this.props.seleccionar_aplicacion(1)}}>Juego 2048</a></li>
            <li style = {botones}><a className = "link" href = "#">Otro juego futuro</a></li>
            <li style = {botones}><a className = "link"  onClick = {() => {this.props.seleccionar_aplicacion(2)}}>Knapsack comida</a></li>
            <li style = {botones}><a className = "link" href="/">...</a></li>
          </ul>
          <div style = {division_abajo}>
            <div style ={email}>
            Frodollface@gmail.com
            </div>

          </div>
        </div>
  
      );
    }
  }
  export { Sidebar }