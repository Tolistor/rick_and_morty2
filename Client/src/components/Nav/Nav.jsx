import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import {Link} from 'react-router-dom'

const Nav = ({onSearch, random}) => {

    let aleatorio = random(1,826)

    return (
        <div className={style.contenedor}>

            <div className={style.botones}>
                <button 
                className={style.boton}
                onClick={()=> onSearch(aleatorio)}
                >Random</button>

                <button  className={style.boton}>
                    <Link to="/about" className={style.link}>About</Link>
                </button>
                
                <button className={style.boton}>
                    <Link to="/Home" className={style.link}>Home</Link>
                </button>
                
                <button className={style.boton}>
                    <Link to="/favorites" className={style.link}>Favorites</Link>
                </button>
            </div>
            
            <div className={style.busqueda}>
                <SearchBar onSearch={onSearch} random={random} />
            </div>
        </div>
    )
    
}

export default Nav;