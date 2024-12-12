import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './utils/supabaseConfig'

function App() {
  const [tes, setTes] = useState<any[] | null>(null)
  const getDataFromSupabase = async() =>{
    const {data}= await supabase.from('test').select()
    setTes(data)
  }

  useEffect(()=>{
    getDataFromSupabase()
  },[])

  if(tes?.length == undefined){
    console.log('supabase not connected')
  }else if(tes.length){
    console.log('supabase connected',tes)
  }
  console.log(tes)
  return (
    <>
      <div>hello world</div>
    </>
  )
}

export default App
