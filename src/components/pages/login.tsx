import { useState } from "react";
import CustomForm from "../molecules/customForm";
import { ToastContainer } from "react-toastify";

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
      <div className="h-[100vh] w-full bg-white flex flex-col items-center">
        <div className="w-[400px] p-3">
          <h1 className="text-start text-xl font-bold">Mediverse</h1>
        </div>
        <div className="w-[400px] m-auto p-3">
          <h1 className="text-5xl font-bold mb-3">Selamat Datang</h1>
          <p className="leading-5 mb-7">
            Masuk dan kelola dashboard Mediverse anda sekarang
          </p>
          <CustomForm formData={formData} setFormData={setFormData} />
          <div className="flex justify-center mt-2">
            <a href="">Forgot password?</a>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-full bg-purple-600 rounded-lg">
        <div className="w-full p-3">
          <h1 className="text-center text-2xl font-bold">Mediverse</h1>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center">
          <img
            src="./Learning-pana.png"
            alt="illustrasi"
            className="w-[400px] h-[400px]"
          />
          <h1 className="text-4xl text-center font-bold text-green-500">
            Your Personal Healthcare Assistant
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
