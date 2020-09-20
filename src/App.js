import React, { useState } from 'react';




function App () {
  const [count, setCount] = useState(0);

  return (
    <div className = "App" >
      <p className="title-counter">Sponge Counter</p>
      <div className="sponge-box">
         <h1  className="numbers"> {count} </h1>
      <div className="btn-box">
         <button className="add-sign" onClick = { () => setCount(count +1)}>+</button>
         <button className="reset-sign" onClick = { () => setCount(0)}>Reset</button>
         <button className="sub-sign" onClick = { () => setCount(count > 0 ? count -1 : 0)}>-</button>
       </div>  
      </div>
      <footer className="footer"> &copy; Made by Rayani Freitas</footer>
    </div>
  );
}

export default App;
