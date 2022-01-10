import { useEffect, useState } from "react";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
            });
    }, []);

    return <div>{loading ? <h2>Loading</h2> : <h1>Home</h1>}</div>;
}

export default Home;
