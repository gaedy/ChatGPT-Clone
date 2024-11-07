import { useState } from "react";

function BuilderProfile() {
  const [saveValue, setIsSaveValue] = useState("");

  const [squares, setSquares] = useState(Array(9).fill(null));

 

  return (
    <>
      <div className="bg-slate-500 w-full h-full rounded-lg flex flex-col justify-between items-center p-2 gap-4">
        <div className="w-1/2 h-1/2 bg-slate-800 flex justify-center items-center gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">

              <button className="bg-gray-500 w-10 h-10" onClick={()=> setIsSaveValue("x")}>{squares[0]}</button>
              
              <button className="bg-gray-500 w-10 h-10" onClick={()=> setIsSaveValue("x")}>{squares[0]}</button>
              
              <button className="bg-gray-500 w-10 h-10" onClick={()=> setIsSaveValue("x")}>{squares[0]}</button>

            </div>
            <div className="flex gap-1">

              <button className="bg-gray-500 w-10 h-10">o</button>
              <button className="bg-gray-500 w-10 h-10">o</button>
              <button className="bg-gray-500 w-10 h-10">o</button>

            </div>
            <div className="flex gap-1">

              <button className="bg-gray-500 w-10 h-10">o</button>
              <button className="bg-gray-500 w-10 h-10">o</button>
              <button className="bg-gray-500 w-10 h-10">o</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuilderProfile;

{
  /* <div className="bg-slate-600 h-1/4 w-full p-2 rounded-md flex justify-start items-center">
        <p></p>
        
        </div>
        
        <div className="bg-slate-600 h-3/4 w-full rounded-md flex justify-center gap-4">
        <button value="1" className="bg-slate-700 hover:bg-slate-800 h-10 w-10" >1</button>
        <button value="2" className="bg-slate-700 hover:bg-slate-800 h-10 w-10" >2</button>
        <button value="3" className="bg-slate-700 hover:bg-slate-800 h-10 w-10" >3</button>
        <button className="bg-slate-700 hover:bg-slate-800 h-10 w-10" >+</button>
        <button className="bg-slate-700 hover:bg-slate-800 h-10 w-10" >=</button>
        </div> */
}
