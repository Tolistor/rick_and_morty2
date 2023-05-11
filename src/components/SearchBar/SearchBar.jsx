import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({onSearch, random}) => {

   const [ id, setId] = useState("")

   const handleChange = (event) =>{
      setId(event.target.value)
      // console.log(event.target.value);
   }

   

   return (
      <div className={style.contenedor}>
         <input 
         type='search' 
         onChange= {handleChange}  //? onchange
         value={id}
         placeholder=' Ingresa el id'
         /> 

         <button
         onClick={()=> onSearch(id)}
         >Agregar</button> 

         

      </div>
   );
};

export default SearchBar;
