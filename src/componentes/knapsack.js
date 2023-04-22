import React from 'react';

class Mochila extends React.Component{

    render(){
        const contenedor_padre = {
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
        }
        const contiene_caja = {
            height:'90%',
            width:'90%',
            borderRadius:'5px',
            display:'flex',
            flexDirection:'column', 
            backgroundColor:'rgb(32, 33, 35)',
            alignItems:'center',
            justifyContent:'space-evenly',
        }
        const contiene_titulo = {
            display:'flex',
            justifyContent:'center',
            fontSize:'25px',
            fontWeight:'20px',
            color:'#bffcf9',

        }
        const contiene_agregados = {
            color:'#47817f',
            border:'solid',
            height:'68%',
            width:'90%',
            display:'flex',
        }
        const contiene_enviar = {
            color:'#bffcf9',
            border:'solid',
            height:'15%',
            margin:'3%',
            width:'90%',
            display:'flex',
        }
        return <div style={contenedor_padre}>
            <div style = {contiene_caja}>
                <div style = {contiene_titulo}>Menú</div>
                <div style = {contiene_agregados}>
                    <ul>
                        <li>hola    </li>
             
   
                    </ul>
                </div>
                <div style = {contiene_enviar}>a</div>
            </div>
        </div>
    }
}
export { Mochila  as default}