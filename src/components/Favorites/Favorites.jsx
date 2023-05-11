import { useSelector } from "react-redux"
import Card from "../Card/Card"
import { useDispatch } from "react-redux"
import { orderCards, filterCards } from "../../redux/actions"
import { useState } from "react"

const Favorites = (props) => { 
    // console.log(myFavorites)

    const myFavorites = useSelector(state => state.myFavorites)
    const [aux,setAux] = useState(false)

    const dispatch = useDispatch();

    const handleOrderChange = (event)=> {
        setAux(true)
        dispatch(orderCards(event.target.value))
    }

    const handleFilterChange  = (event)=> {
        dispatch(filterCards(event.target.value))
    }

    return(
        console.log(myFavorites),
        <div >
            <div>
                <select name="orden" onChange={handleOrderChange}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            </div>

            <div>
                <select name="filter" onChange={handleFilterChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>


            {
            myFavorites?.map(character => {
                    return (
                        <div key={character.id}>
                            <Card                         
                            key={character.id}
                            id={character.id}
                            name= {character.name}
                            species={character.species}
                            gender={character.gender}
                            image={character.image}
                            origin={character.origin.name}
                            status={character.status}
                            // onClose={()=>onClose(character.id)}
                            /> 
                        </div>                                  
                        
                    )
                })
            }
        </div>
    )    
}

export default Favorites;


//* com si fuera de clase
// const mapStateToProps = (state)=>{
//     return {      
//         myFavorites : state.myFavorites
//     }
// }

// const mapDispatchToProps = (dispatch)=> {
//     return {
//         orderCards : (orden)=> dispatch(orderCards(orden)),
//         filterCards : (gender)=> dispatch(filterCards(gender))

//     }
// }

// export default connect(  
//     mapStateToProps,null)
//     (Favorites);
