import styled from "styled-components"
import {useState} from "react";


const StyledCalc = styled.div`
    display: inline-block;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 8em;

    input {
        padding: 10px;
        font-size: 1.2em;
        width: 100px;
        margin: 5px;
        border-radius: 20px;
    }

    button {
        padding: 10px 20px;
        margin: 5px;
        font-size: 1.2em;
        border: none;
        background-color: #007bb5;
        color: white;
        cursor: pointer;
        border-radius: 5px;
    }

    button:hover {
        background-color: #a725c4;
    }

`
export default function Calculator() {
    // variables for the calculator
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [output, setOutput] = useState("Enter numbers above!");
    const [outputColor, setOutputColor] = useState("blue");

    // helper function to check inputs error

    function getInputs() {
        const num1 = Number(firstNum);
        const num2 = Number(secondNum);

        if (isNaN(num1) || isNaN(num2)) {
            setOutput("Please enter valid Numbers");
            setOutputColor("red");
            return false;
        }

        // reset the color back to blue
        setOutputColor("blue");
        return {"num1": num1, "num2": num2}
    }

    function calcAdd() {
        const inputs = getInputs();
        if (inputs) {
            const result = inputs.num1 + inputs.num2;
            if (result < 0) {
                setOutputColor("red");
            }
            setOutput(result.toString());
        }

    }

    function calcSub() {
        const inputs = getInputs();
        if (inputs) {
          const result = inputs.num1 - inputs.num2;
          setOutput(result.toString());
          if (result < 0) setOutputColor("red");
        }
    }

    function calcMul() {
        const inputs = getInputs();
        if (inputs) {
          const result = inputs.num1 * inputs.num2;
          setOutput(result.toString());
          if (result < 0) setOutputColor("red");
        }
    }

    function calcDiv() {
        const inputs = getInputs();
        if (inputs) {
          if (inputs.num2 === 0) {
            setOutput("Divisor must be different from 0!");
            setOutputColor("red");
            return;
          }
          const result = inputs.num1 / inputs.num2;
          setOutput(result.toString());
          if (result < 0) setOutputColor("red");
        }
    }

    function calcPow() {
        const inputs = getInputs();
        if (inputs) {
            let result = 1;
            const num1 = inputs.num1;
            const num2 = inputs.num2;
            if (num2 > 0) {
                for (let i = 0; i < num2; i++) {
                    result = result * num1;
                }
            }

            setOutput(result.toString());
            if (result < 0) setOutputColor("red");
        }
    }

    function clearInput() {
        setFirstNum("");
        setSecondNum("");
        setOutput("");
    }

    return (
        <StyledCalc>
                    <label htmlFor="first-num">First number</label> <br/>
                    <input 
                        id="first-num" 
                        type="text" 
                        value={firstNum}
                        onChange={(e) => setFirstNum(e.target.value)}/>
                    <br/>
                    <label htmlFor="second-num">Second number</label> <br/>
                    <input 
                        id="second-num" 
                        type="text"
                        value={secondNum}
                        onChange={(e) => setSecondNum(e.target.value)}
                        />
                    
                    <br/>
                    
                    <h3 id="output" style={{color: outputColor}}>
                        {output}
                    </h3>

                    <br />
                    <button onClick={calcAdd}> + </button>
                    <button onClick={calcSub}> - </button>
                    <button onClick={calcMul}> * </button>
                    <button onClick={calcDiv}> / </button>
                    <button onClick={calcPow}> ** </button>
                    <button onClick={clearInput}>Clear</button>
        </StyledCalc>
    )
}