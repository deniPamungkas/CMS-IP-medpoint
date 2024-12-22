import { useState } from "react";
import CustomForm from "../molecules/customForm";

const Login = () => {
  interface LoginForm {
    email: string;
    password: string;
  }
  const initialState: LoginForm = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<LoginForm>(initialState);
  return (
    <div className="w-full flex justify-center space-x-1 bg-white p-8">
      <div className="h-[100vh] w-full bg-white flex items-center">
        <div className="w-[400px] m-auto p-3">
          <h1 className="text-5xl font-bold mb-3">Selamat Datang</h1>
          <p className="leading-5 mb-7">
            Masuk dan kelola dashboard Mediverse anda sekarang
          </p>
          <CustomForm formData={formData} setFormData={setFormData} />
          <div className="flex justify-center mt-2">
            <a href="">Forgot password?</a>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-full bg-purple-600 rounded-lg"></div>
    </div>
  );
};

export default Login;
