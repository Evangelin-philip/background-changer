
import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [bgColor,setbgColor]=useState("aquamarine")
  const change_bg=(color)=>{
    setbgColor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor=bgColor
  },[bgColor])
  return (
    <div style={{height:'100vh',position:'relative'}}>
      <h1 style={{width:'100%',textAlign: "center",position:'absolute',top:'40vh',color:'purple'}}>Background Color Changer</h1>
      <div style={{width:'100%',textAlign: "center",position:'absolute',top:'75vh',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
        <button style={{height:'35px',borderColor:'yellow',borderRadius:'35px',backgroundColor:'blue',width:'100px',color:'white'}}onClick={()=>{change_bg("blue")}}>Blue</button>
        <button style={{height:'35px',borderColor:'yellow',borderRadius:'35px',backgroundColor:'red',width:'100px',color:'white'}} onClick={()=>{change_bg("red")}}>Red</button>
        <button style={{height:'35px',borderColor:'yellow',borderRadius:'35px',backgroundColor:'orange',width:'100px',color:'white'}} onClick={()=>{change_bg("orange")}}>Orange</button>
        <button style={{height:'35px',borderColor:'yellow',borderRadius:'35px',backgroundColor:'violet',width:'100px',color:'white'}} onClick={()=>{change_bg("violet")}}>Violet</button>
        <button style={{height:'35px',borderColor:'yellow',borderRadius:'35px',backgroundColor:'green',width:'100px',color:'white'}} onClick={()=>{change_bg("green")}}>Green</button>
        <button style={{height:'35px',borderColor:'yellow',borderRadius:'35px',backgroundColor:'black',width:'100px',color:'white'}} onClick={()=>{change_bg("black")}}>Black</button>
      </div>
    </div>
  );
}

export default App;
