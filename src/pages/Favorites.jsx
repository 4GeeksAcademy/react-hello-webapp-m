import { useStore } from "../store";

export const Favorites = () => {
    const { favorites } = useStore();

    return (
        <div className="container mt-4">
            <h1>Favorites</h1>

            <div className="row">
                {favorites.map(character => (
                    <div
                        key={character.id}
                        className="col-md-3 mb-4"
                    >
                        <div className="card">
                            <img
                                src={character.image}
                                className="card-img-top"
                                alt={character.name}
                            />

                            <div className="card-body">
                                <h5>{character.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};