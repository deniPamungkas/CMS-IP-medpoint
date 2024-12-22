import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./utils/supabaseConfig";
import { Route, Routes } from "react-router";
import Login from "./components/pages/login";
import Dashboard from "./components/pages/dashboard";

function App() {
  const [tes, setTes] = useState<any[] | null>(null);
  const getDataFromSupabase = async () => {
    const { data } = await supabase.from("doctor_schedule").select();
    setTes(data);
  };

  useEffect(() => {
    getDataFromSupabase();
  }, []);

  console.log(tes);
  // if (tes?.length == undefined) {
  //   console.log("supabase not connected");
  // } else if (tes.length) {
  //   console.log("supabase connected", tes);
  // }
  // console.log(tes);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
