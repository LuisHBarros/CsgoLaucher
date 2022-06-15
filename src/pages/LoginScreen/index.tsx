import facebookLogo from '../../assets/facebook-icon.png'
import googleLogo from '../../assets/google-icon.png'
import appleLogo from '../../assets/apple-icon.png'
import seta from '../../assets/seta.svg'
import Logo from '../../assets/Valve_logo.svg.png'

import Formulario from './formulario'
import './LoginScreen.css'


  
  
export default function LoginScreen(){
  
  return(
    <main>
    <section className='login'>
      <div className="wrapper">
        
          <img src={Logo} className='valveLogo'/>
          <h1 className='titulo'>Fazer login</h1>
          <Formulario nome={'Nome de usuário'} type='text'/>
          <Formulario nome={'Senha'} type='password'/>
          <div className = 'login-items'>
            <button className='login-button'>
              <img src={facebookLogo} className='button-img'/>
            </button>
            <button className='login-button'>
              <img src={googleLogo} className='button-img'/>
            </button>
            <button className='login-button'>
              <img src={appleLogo} className='button-img'/>
            </button>

      </div>
      <label className='label-checkbox'>
        <input type='checkbox' className='input-checkbox' />
        Manter Login
      </label>

      </div>
      
      <div className="wrapper">
        
        <button className="submit">
          <img src={seta} className='submit-seta'/>
        </button>
        <a href='#' className='login-link'>nao consegue fazer login?</a>
        <a href='#' className='login-link'>crie uma conta</a>
      </div>
    </section>
    <section className='wallpaper'>
    </section>
    </main>
  )
}
