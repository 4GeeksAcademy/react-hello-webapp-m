import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [characters, setCharacters] = useState([]);
    const [locations, setLocations] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (item) => {
        const exists = favorites.some(
            (fav) => fav.id === item.id
        );

        if (exists) {
            setFavorites(
                favorites.filter(
                    (fav) => fav.id !== item.id
                )
            );
        } else {
            setFavorites([
                ...favorites,
                item
            ]);
        }
    };

    return (
        <StoreContext.Provider
            value={{
                characters,
                locations,
                episodes,
                favorites,
                setCharacters,
                setLocations,
                setEpisodes,
                toggleFavorite
            }}
        >
            {children}
        </StoreContext.Provider>
    );

}

export const useStore = () => useContext(StoreContext);
