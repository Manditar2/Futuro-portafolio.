import React from 'react';

class Registro extends React.Component{

    render(){
        const contenedor_principal = {
            width:'100vw',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#e8f3f1',
            flex:'1 1'
        }
        const contenedor_registro = {
            width:'80%',
            height:'70%',
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#ffff',
            boxShadow: '12px 12px 20px 2px rgba(0, 0, 0, 0.2)',
            borderRadius:'8px',
        }
        const titulo = {
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            fontWeight:'900',
            marginTop:'2%',
            color:'#47d6c0',
            borderBottom:'solid',
            borderColor:'#adc2be',
            boxSizing: 'border-box',

        }
        const contenedor_formulario = {
            width:'100%',
            height:'100%',
            display:'flex', 
            alignItems:'center',
            flexDirection:'row',
        }
        const fila_nombres = {
            display:'flex',
            width:'100%',
            flexDirection:'row',
            justifyContent:'center',
            gap:'15px',
            marginBottom:'15px',
        }
        const fila_completa = {
            width:'100%',
            marginBottom:'5%',
            display:'flex',
            justifyContent:'center',
        }

        const tam_formulario ={
            width:'100%',
        }
        const boton_formulario = {
            width:'100%',
            height:'10%',
            display:'flex',
            textAlign:'center',
            justifyContent:'center',
        }

        const input_formulario = {
            border: '2px transparent',
            height:'40px',
            outline:'none',
            width:'calc(60% + 15px)',
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            backgroundColor:'#e0eeed',
        }
        const input_formulario_fila = {
            border: '2px transparent',
            borderRadius:'2px', 
            height:'40px',
            width:'30%',
            outline:'none',
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            backgroundColor:'#e0eeed',
        }

        const boton_enviar = {
            backgroundColor:'#008bde',
            color:'#ffff',
            borderRadius:'40px',
            border:'none',
            cursor:'pointer',
            transition:'all 0.5s',
            height:'40px',
            width:'100px',
        }
        
        return <div style = {contenedor_principal}>
            <div style = {contenedor_registro}>
                <div style={titulo}><h3>Registro</h3></div>
                <div style = {contenedor_formulario}>
                    <form style = {tam_formulario}> 
                        <div style = {fila_nombres}>
                        <input type = "text" style = {input_formulario_fila} placeholder="Nombre"></input>
                        <input type = "text" style = {input_formulario_fila} placeholder="Apellido"></input>
                        </div>
                        <div style = {fila_nombres}>
                        <input type = "text" style = {input_formulario_fila} placeholder="Usuario"></input>
                        <input type = "text" style = {input_formulario_fila} placeholder="Contraseña"></input>
                        </div>
                        <div style={fila_completa}>
                        <input style = {input_formulario} type = "email" placeholder='Correo electrónico'></input>
                        </div>
                        <div style={boton_formulario}>
                        <button type='submit' className = "login_boton_enviar_registro"> Registrarse </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    }

}

export { Registro  as default}