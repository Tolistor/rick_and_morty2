import style from './Detail.module.css'
import axios from "axios";
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";

const Detail = ()=> {
    const {id} = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div className={style.contendor}>
            <h1 className={style.titulo}> {character?.name}</h1>  
            <p className={style.parrafos}> STATUS |{character?.status}</p>
            <p className={style.parrafos}> SPECIE |{character?.species}</p>
            <p className={style.parrafos}> GENDER |{character?.gender}</p>
            <p className={style.parrafos}> ORIGIN |{character?.origin?.name}</p>
            <img src={character?.image} alt="" className={style.img}/>
        </div>
    )
}

export default Detail;