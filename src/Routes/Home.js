import { useEffect, useState } from "react";
import Movie from "../Components/Movie";
function Home() {
    const [movies, seteMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovies = async () => {
        const res = await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year",
        );
        const json = await res.json();
        seteMovies(json.data.movies);
    };
    useEffect(() => {
        getMovies();
        setLoading(false);
    }, []);
    console.log(movies);

    return (
        <div>
            {loading ? (
                <h2>Loading</h2>
            ) : (
                <div>
                    {movies.map((element) => (
                        <Movie
                            key={element.id}
                            title={element.title}
                            id={element.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
