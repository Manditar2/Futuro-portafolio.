import React from 'react';
import { DiGithubBadge, DiJavascript } from 'react-icons/di';
import { DiPython, DiJava, DiJavascript1 } from "react-icons/di";

class Login extends React.Component{


    render(){
        const formulario_div = {
            width:'100vw',
            height:'100vh',
            backgroundColor: '#f2ffff',
            display:'flex',
            textAlign:'center',
            justifyContent: 'center',
            flex:'1 1',
        }

        const titulo_div = {
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            display:'flex',
        }
        const contenedor_derecho = {
            backgroundColor:'#ffff',
            height:'100%',
            width:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }

        const contiene_login = {
            width:'65%',
            height:'70%',
            backgroundColor:'#ffff',
            display:'flex',
            flexDirection:'column',
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
        }


        const icono = {
            width:'20px',
            height:'20px',
            marginTop:'2%',
            marginLeft:'2%',
            marginRight:'2%',
        }
        const git = {
            marginTop:'2%',
            fontWeight:'700'
        }
        const contiene_imagen = {
            width:'100%',
            display:'flex',
            textAlign:'center',
            justifyContent:'center',
            paddingTop:'8%',
            paddingBottom:'5%',
        }

        const texto_informativo = {
            fontSize:'10px',
            color:'#aba9bc',
            width:'80%',
        }

        const contiene_informativo = {
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }

        const contiene_form = {
            width:'100%',
            height:'100%',
            backgroundColor:'#ffff',
            display:'flex',
            textAlign:'center',
            justifyContent:'center',
            paddingTop:'10%',
        }

        const formulario = {
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#ffff',
            width:'100%',
        }

        const input_formulario = {
            border:'none',
            outline:'none',
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            backgroundColor:'#e0eeed',
            height:'12%',
            width:'60%',
            display:'block',
            marginLeft:'20%',
            marginBottom:'5%',
        }

        const organizar_cajas = {
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            fontSize:'12px',
            color:'#1c3434',
        }
        
        const contiene_checkbox = {
            marginLeft:'10%',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
        }

        const registrate = {
            marginRight:'10%',
            color:'#008bde',
            cursor:'pointer',
        }

        const boton_enviar = {
            backgroundColor:'#008bde',
            marginTop:'6%',
            width:'60%',
            marginLeft:'20%',
            fontWeight:'900',
            color:'#ffff',
            borderRadius:'40px',
            height:'15%',
            border:'none',

        }
        const contiene_habilidades = {
            

        }
        const icono_habilidad = {
            width:'40px',
            height:'40px',
        }
        const contacto = {
            display:'flex',
            fontSize:'14px',
            marginTop:'8%',
            marginLeft:'4%',
            fontWeight:'700',
            justifyContent:'space-between'
        }
        return <div style={formulario_div}>
            <div className = "contenedor_login">
                <div className = "contenedor_login_izquierdo">
                    <div style = {titulo_div}>
                    <DiGithubBadge style = {icono} />
                    <div style = {git}>Manditar2</div>
                    </div>
                    <div style ={contiene_imagen}><div className = "imagen_login"> </div></div>
                    <h2>Gabriel Roberto Castillo Cortés</h2>
                    <div>Soy estudiante de ingeniería civil en informática y telecomunicaciones en la UDP.</div>
                    <h4>Lenguajes de favoritos:</h4>
                    <div style={contiene_habilidades}>
                        <DiJava style={icono_habilidad}/>
                        <DiPython style={icono_habilidad}/>
                        <DiJavascript style={icono_habilidad} />
                    </div>
                    <div style={contacto}> 
                       <div>Frodollface@gmail.com</div>
                    </div>

                </div>
                <div style={contenedor_derecho}>
                    <div style = {contiene_login}>
                        <h2 style = {{color:'#47d6c0'}}>Log in</h2>
                        <div style = {contiene_informativo}><div style = {texto_informativo}>Este registro y login es solo para hacer funcionar el portafolio, no use datos personales en estos proyectos.</div></div>
                        <div style = {contiene_form}>
                            <form style={formulario}>
                                <input style = {input_formulario} placeholder='Usuario'></input>
                                <input style = {input_formulario} placeholder ='Contraseña' type= "password"></input>
                                    <div style = {organizar_cajas}>
                                        <div style = {contiene_checkbox}>
                                        <input type = "checkbox" id = "keep_conectado"></input>
                                        <label for = "keep_conectado">Mantener conectado</label>
                                        </div>
                                        <div style ={registrate}>Regístrate</div>
                                    </div>
                                <input type = "submit" className = "login_boton_enviar" value = "Acceder"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export { Login  as default} 
