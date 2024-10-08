import { useEffect,useState } from "react"

const useOnlineStatus = ()=>{
    const [onlineStauts, setOnlineStatus] = useState(true)
   
  useEffect(()=>{
    window.addEventListener("offline" ,()=>{
      setOnlineStatus(false)
    })
    window.addEventListener("online" ,()=>{ 
        setOnlineStatus(true)
        })
  }, []) 

  return onlineStauts;
}

export default useOnlineStatus