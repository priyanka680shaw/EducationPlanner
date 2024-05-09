import { Card } from './Card.jsx';
import { useEffect, useState } from 'react'

export const MainCard = () => {
    const [subject , setSubject] = useState();
    const [hours , setHours] = useState();
    const [allData , setAllDtata] =  useState([]);

  
   
      function addHanddler(){
        const list = {
            subject : subject , 
            hours : Number(hours)
        }
        setAllDtata([...allData , list])
        setSubject("");
       
      }
      console.log(allData)
    
    useEffect(()=>{
        const  dataRecived = JSON.parse(localStorage.getItem("data"));
        if(dataRecived){
            console.log("dataRecived" , dataRecived)
            // const  dataRecived = JSON.parse(localStorage.getItem("data"));
            setAllDtata(dataRecived)
        }
       
    } ,[])

    useEffect(()=>{
        if(allData.length >0)
            {
                localStorage.setItem("data" , JSON.stringify(allData))
            }
    } , [allData])
  return (
    <>
    <div>
        <p className='text-3xl '>Education Planner</p>
    </div>
        <div className='flex  justify-center  p-4 m-4 bg-red-100 '>
            <input type='text' placeholder='Enter Subject' className = "p-3  m-3 border-4 " onChange={(e)=>{
                setSubject(e.target.value)
            }} value={subject}/>
            <input type='number' className = "p-3  m-3" onChange={(e)=>{
                setHours(e.target.value)
            }} value={hours}/>
            <button onClick={addHanddler}>Add</button>
        </div>

        <div className='flex flex-wrap justify-center items-center w-100 h-auto bg-red-400'>
            {/* output */}
            {
                allData.map((items , idx)=>{
                    return( <Card subject = {items.subject} hours = {items.hours} key ={idx} id = {idx} setAllDtata = {setAllDtata} allData = {allData}/>)
                })
            }

        </div>
    </>
  )
}
