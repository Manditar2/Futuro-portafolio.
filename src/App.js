import logo from './logo.svg';
import React from 'react';
import './App.css';


class Juego extends React.Component {

  generar_random = (maximo) =>{
    let valores = new Array(maximo)
    
    // Crea el casillero inicial.
    for(let i = 0; i < valores.length; i++){
      let temp = Math.floor(Math.random() * 4)+1;
      if(temp%2 == 0){valores[i] = temp;}
      else valores[i] = 0;
    }

    //Chequea si es que todos los valores son 0
    for(let i = 0; i < valores.length; i++){
      if(valores[i] != 0){
        return valores
      }
    }
   //Si todos los valores son 0, entonces fuerza posiciones a tomar valores.
    let num_al = Math.floor(Math.random() * 4) + 1;
    let dummy = [1,2]
    for(let i = 0; i < num_al; i++){
      valores[i] = dummy[Math.floor(Math.random()) + 1]
    }
    return valores;
  }

  constructor(props){
    super(props);
    this.state = {
      valor_casilla: this.generar_random(9)
    };
  
  }
  componentDidMount(){
    document.addEventListener('keydown', this.escuchar_teclado);
  }
  componentWillUnmount(){
    document.removeEventListener('keydown',this.escuchar_teclado);
  }

  escuchar_teclado = (event) => {
    let valores = this.state.valor_casilla
    let puede_agregar = false;

    if (event.keyCode === 37) {
      // se ha pulsado la flecha hacia la izquierda
      for(let i = 0; i < 7; i = i + 3){ // filas: 0,3,6
        let add = 0
        let cola = []

        for(let j = i; j < i + 3; j++){ // Movimiento en columnas
          if(valores[j] != 0){
            if(j > i && valores[j-1] == 0){
              puede_agregar = true
            }

            if(cola.length > 0){
              // Se debe cheaquear si se realiza la suma.
              if(cola[cola.length - 1] == valores[j] && add == 0){
                 cola[cola.length - 1] = cola[cola.length - 1]*2
                 puede_agregar = true
                 add = 1
              }
              else{
                cola.push(valores[j])
              }
            }
            else{
              cola.push(valores[j])
            }
          }
        }
        for(let j = i; j < i + 3; j++){
          if(cola.length > 0){
            valores[j] = cola.shift()
          }
          else{
            valores[j] = 0
          }
        }
      }
      if(puede_agregar){
        valores = this.nuevo_numero(valores)
      }
      this.setState({valor_casilla:valores})
    } 
      else if (event.keyCode === 38) {
      // se ha pulsado la flecha hacia arriba
      for(let j = 0; j < 3; j++){
        
        let add = 0
        let cola = []

        for(let i = j; i < j + 7; i = i+3){
          if(valores[i] != 0){
            if(i > j && valores[i -3] == 0){
              puede_agregar = true
            }

            if(cola.length > 0){
              // Se debe cheaquear si se realiza la suma.
              if(cola[cola.length - 1] == valores[i] && add == 0){
                 cola[cola.length - 1] = cola[cola.length - 1]*2
                 puede_agregar = true
                 add = 1
              }
              else{
                cola.push(valores[i])
              }

            }
            else{
              cola.push(valores[i])
            }
          }
        }
        for(let i = j ; i < j + 7 ; i = i + 3){
          if(cola.length > 0){
            valores[i] = cola.shift()
          }
          else{
            valores[i] = 0
          }
        }
      }
      if(puede_agregar){
        valores = this.nuevo_numero(valores)
      }
      this.setState({valor_casilla:valores})

    } else if (event.keyCode === 39) {
      // Tecla hacia la derecha.
      let puede_agregar = false
      for(let i = 0; i < 7; i = i + 3){
        let add = 0
        let cola = []

        for(let j = i + 2; j > i - 1; j--){
          if(valores[j] != 0){
            if(j > i + 2 && valores[j + 1] == 0){
              puede_agregar = true
            }

            if(cola.length > 0){

              // Se debe cheaquear si se realiza la suma.
              if(cola[cola.length - 1] == valores[j] && add == 0){

                 cola[cola.length - 1] = cola[cola.length - 1]*2
                 puede_agregar = true
                 add = 1
              }
              else{
                cola.push(valores[j])
              }

            }
            else{
              cola.push(valores[j])
            }
          }
        }
        for(let j = i + 2; j > i - 1; j--){
          if(cola.length > 0){
            valores[j] = cola.shift()
          }
          else{
            valores[j] = 0
          }
        }
      }
      if(puede_agregar){
        valores = this.nuevo_numero(valores)
      }
      this.setState({valor_casilla:valores})


    } else if (event.keyCode === 40) {
      // se ha pulsado la flecha hacia abajo
      let puede_agregar = false
      for(let j = 0; j < 3; j++){
        
        let add = 0
        let cola = []

        for(let i = j + 6 ; i > j - 1; i = i-3){
          if(valores[i] != 0){
            if(i > j + 6 && valores[i + 3] == 0){
              puede_agregar = true
            }
            if(cola.length > 0){

              // Se debe cheaquear si se realiza la suma.
              if(cola[cola.length - 1] == valores[i] && add == 0){

                 cola[cola.length - 1] = cola[cola.length - 1]*2
                 puede_agregar = true
                 add = 1
              }
              else{
                cola.push(valores[i])
              }

            }
            else{
              cola.push(valores[i])
            }
          }
        }
        for(let i = j + 6; i > j - 1 ; i = i - 3){
          if(cola.length > 0){
            valores[i] = cola.shift()
          }
          else{
            valores[i] = 0
          }
        }
      }
      if(puede_agregar){
        valores = this.nuevo_numero(valores)
      }
      this.setState({valor_casilla:valores})
    }  
  }

  nuevo_numero = (valores) => {
    let candidatos = []
    let numeros_random  = [2,4]
    let agregar = numeros_random[Math.floor(Math.random())]

    for(let i = 0; i < valores.length; i++){
      if(valores[i] == 0){
        candidatos.push(i)
      }
    }    
    if(candidatos.length == 0){
      alert("Fin del juego, pérdiste")
    }
    else{
      let a_cambiar =  candidatos[Math.floor(Math.random())*candidatos.length]
      valores[a_cambiar] = agregar
      return valores
    }
    return valores
  }
   
  ocultar = (valor) => {
    let estiloCasilla = {}
    if(valor != 0){
        estiloCasilla = {
        height: '100px',
        boxSizing: 'border-box',
        borderColor: '#8b008b',
        border: '5px solid black',
        borderRadius: '2px',
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        color: '#ffff'
      };  
  }
    else{
        estiloCasilla = {
        height: '100px',
        boxSizing: 'border-box',
        borderColor: '#8b008b',
        border: '5px solid black',
        borderRadius: '2px',
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        color: 'transparent'
      };  
    }
  return <div style={estiloCasilla}>{valor}</div>;
}

  render() {
  return <div className = "tablero">
      {this.ocultar(this.state.valor_casilla[0])}
      {this.ocultar(this.state.valor_casilla[1])}
      {this.ocultar(this.state.valor_casilla[2])}
      {this.ocultar(this.state.valor_casilla[3])}
      {this.ocultar(this.state.valor_casilla[4])}
      {this.ocultar(this.state.valor_casilla[5])}
      {this.ocultar(this.state.valor_casilla[6])}
      {this.ocultar(this.state.valor_casilla[7])}
      {this.ocultar(this.state.valor_casilla[8])}
  </div>;
  }
}


class Sidebar extends React.Component {
  render() {

    const estilo_barra = {
      position: 'fixed',
      left: '0',
      top: '0',
      bottom: '0',
      width: '15%',
      backgroundColor: 'rgb(32, 33, 35)',
      color: '#fff'
    };

    const botones = {
      margin:'7% 0',
      listStyle: 'none',
    }
    const links = {
      textDecoration: 'none',
      color:'rgb(247, 247, 248)',
    }
    const titulo = {
      margin:'10% 0',
      listStyle: 'none',
      fontWeight: 'solid',
      marginLeft:'20px',
      marginTop:'24px'
    }
    return (
      <div style = {estilo_barra}>
      <nav>
        <div style={titulo}> Manditar </div>
        <ul>
          <li style = {botones}><a style = {links} href="/">Juego 2048</a></li>
          <li style = {botones}><a style = {links} href="/">Otro juego futuro</a></li>
          <li style = {botones}><a style = {links} href="/">...</a></li>
        </ul>
      </nav>
      </div>

    );
  }
}

function App() {
  let segmentar_div = {
      position:'fixed',  // Establece la propiedad position en absolute// Coloca el div en la parte superior de la pantalla
      right: '0',  // Coloca el div en la parte derecha de la pantalla
      bottom: '0',  // Coloca el div en la parte inferior de la pantalla
      left: '15%',  // Ajusta el ancho del div según tus necesidades
      width: '85%',
      height:'100%',  // Ajusta el ancho del div según tus necesidades
      backgroundColor: '#fff',
      color: '#000',
      display:'flex',
      alignItems: 'center',  // Centra el div hijo horizontalmente
      justifyContent: 'center',
  }
  
  return (
    <div className="App">
      <div>
      <Sidebar />
      </div>
      <div style={segmentar_div}>
      <Juego/>
      </div>

    </div>
  );
}

export default App;
