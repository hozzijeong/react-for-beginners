import { useState, useEffect } from "react";

function App() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usd, setUsd] = useState(0);
    const [convertVal, setConvertVal] = useState(0);
    const [curCoinIdx, setCurCoinIdx] = useState(0);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((res) => res.json())
            .then((data) => {
                const list = data.filter((element, idx) => idx < 100);
                setCoins(list);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        if (coins.length === 0) return;
        const coinPrice = coins[curCoinIdx].quotes.USD.price;
        setConvertVal(usd / coinPrice);
    }, [usd, curCoinIdx]);
    const onUsdChange = (e) => setUsd(e.target.value);

    const onBitChange = (e) => setCurCoinIdx(Number(e.target.value));
    return (
        <div>
            <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <h2>Loading</h2>
            ) : (
                <div>
                    <select onChange={onBitChange}>
                        {coins.map((element, idx) => (
                            <option key={element.id} value={idx}>
                                {element.name}({element.symbol}):$
                                {element.quotes.USD.price}
                            </option>
                        ))}
                    </select>
                    <hr />
                    <input type="number" value={usd} onChange={onUsdChange} />
                    <p>
                        {convertVal}
                        {coins[curCoinIdx].symbol}
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;
