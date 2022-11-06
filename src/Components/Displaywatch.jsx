import React ,{useState, useEffect} from 'react'

const Displaywatch = () => {

    const [data, setData] = useState()
    const [loading , setLoading]  = useState(true)
    useEffect(()=>{      
        const DataFetch=()=>{
          fetch(`http://localhost:4000/TodoList`)
          .then(response => response.json())   
          // console.log(response)  
          .then(response => 
            setData(response)
            )    
            setLoading(false)
        }
       DataFetch()
      },[])
      console.log("data", data)
      if (loading) {
        return <h1>Loading data</h1>;
      }

    return (
        <div>
            <h2>list</h2>
            {
                data && data.map((e)=>{
                    return <div style={{border:"1px solid red", backgroundColor:"#ddb56d", margin:"10px"}} >
                    <h3>Task: {e.title}</h3>
                    <h3>Time: {e.time} Seconds</h3>

                </div>
                    
                    
                })
            }
        </div>
    )
}

export default Displaywatch
