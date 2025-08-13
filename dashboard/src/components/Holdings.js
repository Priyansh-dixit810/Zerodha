import React, {useState,useEffect}from 'react';
import axios from 'axios';
function Holdings() {
    const [allholdings,setAllholdings] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/allholdings")
        .then((res)=>{
            setAllholdings(res.data);
        })
    },[])
    return (
        <>
        <h3 className='title'>Holdings ({allholdings.length})</h3>
        <div className='order-table'>
            <table>
                <tr>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg. cost</th>
                    <th>LTP</th>
                    <th>Cur. val</th>
                    <th>P&L</th>
                    <th>Net chg.</th>
                    <th>Day chg.</th>
                </tr>
                    {allholdings.map((stock,index)=>{
                        const curValue = stock.price*stock.qty;
                        const value = curValue-stock.avg*stock.qty
                        const isProfit = value >=0.0;
                        const profclass = isProfit ? 'profit' : 'loss';
                        const dayclass = stock.isLoss? 'loss' : 'profit';

                        return(
                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{curValue}</td>
                                <td className={profclass}>{value.toFixed(2)}</td>
                                <td className={profclass}>{stock.net}</td>
                                <td className={dayclass}>{stock.day}</td>
                            </tr>
                        )
                    })}
            </table>
        </div>
        </>
    );
}

export default Holdings;