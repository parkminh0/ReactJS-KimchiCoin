import React, { useEffect } from "react";
import { useState } from "react";
import Form from "./Form";

function Detail ({typed}) {
    const [loading, setLoading] = useState(true);
    const [upbit, setUpbit] = useState([]);
    const [binance, setBinance] = useState([]);
    const [krwusd, setKrwuds] = useState([]);
    const coin = async () => {
        const upjson = await (
            await fetch(
            `https://api.upbit.com/v1/ticker?markets=KRW-${typed}`
        )).json()
        const bijson = await (
            await fetch(
                `https://api.binance.com/api/v3/ticker/price?symbol=${typed}USDT`
        )).json()
        const json = await (
            await fetch(
                "https://api.manana.kr/exchange/rate/KRW/USD.json"
        )).json()
        setUpbit(upjson);
        setBinance(bijson);
        setKrwuds(json);
        setLoading(false);
    }

    useEffect(() => {
      coin()
    }, []);
  
    return (
        <div>
        {loading 
            ? (<h2 style={{
                color:"red"
            }}>No Information Of This Coin</h2>)
            : (
                <div>
                    <h1>KRW-{typed}</h1><hr/>
                    {upbit.map((data) => (
                        <Form 
                            trade_price={data.trade_price}
                            change={data.change}
                            change_price={data.signed_change_price}
                            change_rate={data.signed_change_rate}
                            high_price={data.high_price}
                            low_price={data.low_price}
                            prev_closing_price={data.prev_closing_price}
                            price={binance.price}
                            ku={krwusd[0].rate}
                            acc_trade_volume={data.acc_trade_volume}
                            acc_trade_price={data.acc_trade_price}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Detail;