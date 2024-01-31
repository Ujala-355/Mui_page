import React,{useState} from "react";
import {Button,TextField,Grid,Paper} from "@mui/material";

const Calculator=()=>{
    const [input, setInput]=useState("");
    const [result,setResult]=useState("");
    
    const handleButtonClick=(value)=>{
        setInput((prevInput)=>prevInput+value);
    }
    const handleReset=()=>{
        setInput("");
        setResult('');
    }
    const handleCalculate=()=>{
        try{
            setResult(eval(input).toString());
        }
        catch(error){
            setResult("Error");
        }
    }
    return(
        <>
            <Grid container justifyContent="center" alignItems="center" style={{height:"100vh"}}>
                <Paper elevation={3} style={{padding:"20px",textAlign:"center"}}>
                    <TextField
                        label="input"
                        variant="outlined"
                        fullWidth
                        value={input}
                        InputProps={{readOnly:true}}
                        style={{marginBottom:"10px"}}
                    />
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Button variant="outlined" onClick={()=>handleButtonClick('1')}>1</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" onClick={()=>handleButtonClick('2')}>2</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" onClick={()=>handleButtonClick('3')}>3</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" onClick={()=>handleButtonClick("+")}>+</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Button variant="outlined" onClick={()=>handleButtonClick("0")}>0</Button>
                        </Grid>
                        <Grid>
                            <Button variant="outlined" onClick={()=>handleButtonClick("-")}>-</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" onClick={()=>handleButtonClick("*")}>*</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" onClick={()=>handleButtonClick('/')}>/</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item>
                            <Button variant="outlined" onClick={handleReset}>
                                Reset
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" onClick={handleCalculate}>Result</Button>
                        </Grid>
                    </Grid>
                    <TextField 
                        lable="Result"
                        variant="outlined"
                        fullWidth
                        value={result}
                        InputProps={{readOnly:true}}
                        style={{marginTop:"10px"}}
                    />
                </Paper>
            </Grid>
        </>
    )
}
export default Calculator;