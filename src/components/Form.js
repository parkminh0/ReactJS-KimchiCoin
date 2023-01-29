import React from "react";

const Form = (params) => {
    const current = params.trade_price.toLocaleString();
    const cp = params.change_price.toLocaleString();
    const rate = Math.round(params.change_rate*10000)/100;
    const high = params.high_price.toLocaleString();
    const low = params.low_price.toLocaleString();
    const end = params.prev_closing_price.toLocaleString();
    const bi = Math.round(params.price*100)/100;
    const kimchi = Math.round((params.trade_price/params.price/params.ku-1)*10000)/100;
    const accv = Math.round(params.acc_trade_volume*100)/100;
    const vol = accv.toLocaleString();
    const accp = Math.round(params.acc_trade_price*100)/100;
    const acp = accp.toLocaleString();
    return (
        <div>
            <p>현재가: {current} 원</p>
            {params.change === "RISE" 
                ? (
                    <p>상승  {cp} ( {rate}% ⇧ )</p> 
                    )
                : (
                    <p>하락  {cp} ( {rate}% ⇩ )</p> 
                )
            }
            <p>당일고가: {high} 원</p>
            <p>당일저가: {low} 원</p>
            <p>전일종가: {end} 원</p>
            <p>거래량: {vol}</p>
            <p>거래대금: {acp}원</p>
            <hr/>
            <p>바이낸스 가격: {bi} USDT</p>
            <hr/>
            <p>업비트 김프: {kimchi}%</p>
        </div>
    )
}

export default Form;