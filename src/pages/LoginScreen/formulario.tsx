import { FormEvent, useState } from "react"
import { useForm } from "react-hook-form"

interface tipoProps {
  type : string
  nome : string
}

export default function Formulario(props : tipoProps){
  
  const [spanClass, setSpanClass] = useState('none')
    function focused(){
      setSpanClass('login_spam')
    }
    function unfocused(){
      setSpanClass('none')
    }
/* Form */
    const [dados, SetDados] = useState('')

  return(
    <label className='login_label'>
        <span className={spanClass}>{props.nome}</span>
        <input type={props.type} name='username' className='login_input' 
        onFocus={focused} onBlur={ dados.length===0 ? (unfocused) : focused} 
        onChange={event => SetDados(event.target.value)} ></input>
      </label>
  )
}