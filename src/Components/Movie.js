import { Link } from "react-router-dom";
function Movie(props) {
    return (
        <div>
            <Link to={`/movie/${props.id}`}>{props.title}</Link>
        </div>
    );
}

export default Movie;
