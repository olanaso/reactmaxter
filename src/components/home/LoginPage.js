import React,{ useState}  from 'react';
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const LoginPage = () => {
    
    const [login,set_login]=useState({});
    const [estadobotoon,setestadobotoon]=useState(false);
    
    const cambioEstado=(e)=>{
      

        set_login({
            ...login,
            [e.target.name]: e.target.value
        });
        
    }
    
    const Login=(e)=>{
        e.preventDefault();
        setestadobotoon(true)
        alert(JSON.stringify(login))
        setestadobotoon(false)
        
    }
    
    return (
        <form onSubmit={Login}>
            <h2>Login</h2>
          
           
            <TextInput
                name="usuario"
                value={login.usuario}
                label="Usuario"
                onChange={cambioEstado}
              
            />

          

            <TextInput
                name="clave"
                value={login.clave}
                label="clave"
                onChange={cambioEstado}
               
            />

            <button type="submit"  className="btn btn-primary">
                {!estadobotoon ? 'Guardar':'Gardando ..'}   
            </button>
        </form>
    );
};

export default LoginPage;