import React from 'react';
import {createRoot} from 'react-dom/client'


const domNode = document.getElementById('root')
const root = createRoot(domNode)


const App = () => {
  return <div style = {{margin: "auto", width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
    <label for="nome" style={{ display: "block", marginBottom: 4}}>Informe seu nome:</label>
    <input type="text" id="nome" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
    <button style={{marginTop: 12, paddingTop:8, paddingBottom: 8, backgroundColor: "blueviolet", color: "white", border: "none", width: '100%', borderRadius: 8}}>Enviar</button>
  </div>
};

root.render(<App/>)