import { useEffect,useState,useCallback } from "react"



const RandomColor = () => {



  const [typeOfColor,setTypeOfColor]=useState('hex')
  const [color,setColor]=useState('#000000')

  

  const randomColorUtility=(length)=>{
    return Math.floor(Math.random()*length)
  }

  const handleCreateRandomHexColor=useCallback(()=>{

    const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hexColor="#"

    for(let i=0;i<6;i++){
      hexColor+=hex[randomColorUtility(hex.length)]
    }

    setColor(hexColor);
  },[])

  const handleCreateRandomRgbColor=useCallback(()=>{

    const r=randomColorUtility(256)
    const g=randomColorUtility(256)
    const b=randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`);

  },[])

  
  useEffect(()=>{
    if(typeOfColor==="rgb"){
      handleCreateRandomRgbColor;
    }
    else {
      handleCreateRandomHexColor;
    }
  },[typeOfColor,handleCreateRandomHexColor,handleCreateRandomRgbColor]);



  return (
    <div style={{
      background:color
    }} className="h-screen ">
      <div className="flex justify-center font-bold ">
      <button onClick={()=>setTypeOfColor('hex')} className="bg-white p-2 m-1  rounded-md hover:bg-stone-300">Create HEX Color</button>
      <button onClick={()=>setTypeOfColor('rgb')} className="bg-white p-2 m-1  rounded-md hover:bg-stone-300">Create RGB Color</button>
      <button onClick={typeOfColor==='hex'? handleCreateRandomHexColor: handleCreateRandomRgbColor}  className="bg-white p-2 m-1  rounded-md hover:bg-stone-300">Generate Random Color</button>
      </div>
      <div className="flex flex-col font-bold text-3xl text-white justify-center items-center h-[75%]">
        <h3>{typeOfColor==='rgb'? 'RGB Color': 'HEX Color' } </h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor