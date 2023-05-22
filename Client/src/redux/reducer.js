import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //*caso viejo add_fav
    // case ADD_FAV:
    //   return {
    //     ...state,
    //     myFavorites: [...state.myFavorites, payload],
    //     allCharacters: [...state.allCharacters, payload],
    //   };
    // REDUCER | ADD_FAV
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    //*caso viejo remov:fav
    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (fav) => fav.id !== Number(payload)
    //     ),
    //     allCharacters: state.myFavorites.filter(
    //       (fav) => fav.id !== Number(payload)
    //     ),
    //   };
    // REDUCER | REMOVE_FAV
    case REMOVE_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case FILTER:
      const { allCharacters } = state;
      const filtrado = allCharacters.filter(
        (personaje) => personaje.gender === payload
      );
      return {
        ...state,
        myFavorites: filtrado,
      };

    case ORDER:
      const allCharactersCopy = [...state.allCharacters];
      if (payload === "A") {
        allCharactersCopy.sort((a, b) => a.id - b.id);
      } else if (payload === "D") {
        allCharactersCopy.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: allCharactersCopy.filter((char) =>
          state.myFavorites.some((fav) => fav.id === char.id)
        ),
      };
    // case ORDER:
    //   const copia = [...state._allCharacters].sort((a, b) => {
    //     if (action.payload === 'A') {
    //         return a.id - b.id; // Ordenamos de menor a mayor
    //     } else if (action.payload === 'D') {
    //         return b.id - a.id; // Ordenamos de mayor a menor
    //     } else {
    //         return 0;
    // }
    // });

    default:
      return { ...state };
  }
};

export default reducer;
