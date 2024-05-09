import { useState } from "react";


export const Card = ({subject , hours , allData , setAllDtata , id}) => {

    const [updateHour , setUpdateHour] = useState(Number(hours));
    console.log("hours" , hours)  // useEffect(()=>{
    //     const  dataRecived = JSON.parse(localStorage.getItem("data"));
    //     setAllDtata(dataRecived)
    // } ,[]))

    //deleteHandler

    // function deleteHandler(sub){
    //     let filterData = [...allData]
    //     console.log(sub.subject)
    //     filterData = filterData.filter((items)=>{
            
    //             if(items.subject === sub.subject){
    //                 return true
    //             }
            
    //     })
      
    //     setAllDtata(filterData);
    // }

    function deleteHandler(index){
        console.log(index)
        const data = [...allData];
        data.splice(index , 1);
        setAllDtata(data);
      
      }

  return (
    <>
         <div  className='p-4 bg-slate-400 m-3 w-96  flex justify-between'>
                                <p>{subject}</p>
                                <p>{updateHour}</p>
                                <button onClick={()=>{
                                    setUpdateHour((pre)=>{
                                        return (pre+1);
                                    })
                                }}>➕</button>
                                <button onClick={()=>{
                                    if(updateHour === 0){
                                        alert("You reachedd at 0");
                                        return;
                                    }
                                    setUpdateHour((pre)=>{
                                        return (pre-1);
                                    })
                                }}>➖</button>
                                <button onClick= {()=>{
                                    deleteHandler({subject})
                                }}>❌</button>
                            </div>
    </>
  )
}
