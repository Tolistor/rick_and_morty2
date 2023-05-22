import style from './Card.module.css'

import {Link} from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions'
import { useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react'


const Card = ({id, name, status, species, gender, origin, image, onClose,  }) => {

   const dispatch = useDispatch()   
   const myFavorites = useSelector(state => state.myFavorites)

   const [isFav, setIsFav] = useState(false);
   
   


   const handleFavorite = () =>{
      isFav ? dispatch(removeFav(id)) : dispatch(addFav({id, name, status, species, gender, origin, image, onClose}));
      setIsFav(!isFav)
   };
   

   useEffect(() => {      
      myFavorites.forEach((fav) => {         
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);
   

   return (
      <div className='cards'>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }


         <div className='face front '>
            <img src={image} alt="" className='img'/>
         </div>

         <div className='face back'>
            <button onClick={()=>onClose(id)}>Cerrar</button>
            
            <Link to={`/detail/${id}`} className={style.nombre}>
               <h1>{name}</h1>
            </Link>            
            <h3>STATUS: {status}</h3>
            <h3>SPECIE: {species}</h3>
            <h3>GENDER: {gender}</h3>
            <h3>ORIGIN: {origin}</h3>
         </div>

      </div>
   );
};

export default Card

//* como si fuera de clase
// const mapStateToProps = (state)=>{
//    return {      
//       myFavorites : state.myFavorites
//    }
// }

// const mapDispatchToProps = (dispatch)=> {
//    return {
//       addFav : (character)=> dispatch(addFav(character)),
//       removeFav : (id)=> dispatch(removeFav(id))

//    }
// }

// export default connect(  
//    mapStateToProps,  
//    mapDispatchToProps)
//    (Card);

