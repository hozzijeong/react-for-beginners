import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const { id } = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const getMovieDetail = async () => {
        const res = await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
        );
        const json = await res.json();
        setMovieInfo(json.data.movie);
    };
    useEffect(() => {
        getMovieDetail();
    });
    return <h1>{movieInfo.title}</h1>;
}

export default Detail;
