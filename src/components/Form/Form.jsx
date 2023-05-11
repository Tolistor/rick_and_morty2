import style from './Form.module.css'

import { useState } from "react";
import validation from "./validation";

const Form = ({login})=> {
    //? estado local de userData "login"
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    //? estado local de errors
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    //? manejador de los inputs
    const handleChange = (event)=> {  
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        //? capturamos error y validamos
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    
    

    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData)
    }

    //? Renderizado
    return(
        <div>
            <form onSubmit={handleSubmit} className={style.form}>

                <h5>Formulario de login</h5>

                {/* <label htmlFor="Email"> Email</label> */}
                <input 
                    className={style.controls}
                    type="text" 
                    name="email" 
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Escribe tu email"
                />
                {/* mostramos mensaje de error */}
                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

                {/* <label htmlFor="Password"> Password</label> */}
                <input 
                    className={style.controls}
                    type="text" 
                    name="password" 
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Escribe tu password"
                />
                {/* mostramos mensaje de error */}
                {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

                <button className={style.buttons} >Ingresar</button>

                
                
            </form>
        </div>
    )
}

export default Form;