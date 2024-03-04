import React, { useEffect, useState } from 'react'
import { body, btnLayout, btnStyle, inputstyle, opStyle, subBody } from './ConstStylefile'
const btns = ['+', '7', '8', '9', '-', '4', '5', '6', '*', '1', '2', '3', '/', '0', '.', '=', 'C'];
const operators = ['+', '-', '*', '/', 'C'];

function Calculator() {
    const [display, setDisplay] = useState('');
    useEffect(()=>{
        document.title="Calculator App"
    },[]);
    function result() {
        try {
            //eslint-disable-next-line
            setDisplay(eval(display));
        } catch (error) {
            setDisplay('Error');
            console.log(`${error}`);
        }
    }
    function clearSc() {
        setDisplay("");
    }
    return (
        <div style={body} >
            <div style={subBody} >
                <h1
                    style={{ color: 'hsl(35, 100%, 55%)', textAlign: 'center', fontFamily: 'sans-serif', letterSpacing: '15px', fontWeight: 'bold' }}>
                    Calculator
                </h1>
                <input type='text'  value={display} readOnly style={inputstyle} id='display' autoFocus = {true}
                    onKeyDown={(event) => {
                        if (event.key === '=' || event.key === 'Enter')
                            result();
                        else if (event.key === 'C' || event.key === 'Backspace')
                            clearSc();
                        else if (btns.includes(event.key))
                            setDisplay(display + event.key);
                    }}>
                </input>
                <div style={btnLayout}>
                    {btns.map((element, index) => {
                        if (element === 'C') {
                            return <button key={index} onClick={clearSc} style={(operators.includes(element)) ? opStyle : btnStyle}>{element}</button>
                        }
                        else if (element === '=') {
                            return <button key={index} onClick={result} style={btnStyle}>{element}</button>
                        }
                        else {
                            return <button key={index} onClick={() => {
                                setDisplay(display + element);
                            }} style={(operators.includes(element)) ? opStyle : btnStyle}>{element}</button>
                        }
                    })}
                </div>
            </div>
        </div>

    )
}

export default Calculator
// const body = {
//     margin: 0,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: 'hsl(0, 0%, 95%)',
// }
// const subBody = {
//     backgroundColor: 'hsl(0, 0%, 15%)',
//     fontFamily: "Arial sans-serif",
//     maxWidth: '500px',
//     overflow: 'hidden',
//     borderRadius: '15px'
// }
// const btnLayout = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4,1fr)',
//     padding: '25px',
//     gap: '10px'
// }
// const inputstyle = {
//     width: '100%',
//     padding: '20px',
//     textAlign: 'left',
//     fontSize: '5em',
//     backgroundColor: 'hsl(0, 0%, 20%)',
//     color: 'white',
//     border: 'none'
// }
// const btnStyle = {
//     width: '100px',
//     height: '100px',
//     borderRadius: '50px',
//     border: 'none',
//     color: 'white',
//     backgroundColor: 'hsl(0, 0%, 25%)',
//     fontSize: '3rem',
//     fontWeight: 'bold',
//     cursor: 'pointer',
// }