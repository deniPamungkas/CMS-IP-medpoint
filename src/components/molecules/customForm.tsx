import React, { useState } from "react";
import { loginFormControl } from "../../assets/constants";
import InputField from "../atoms/inputField";
import Button from "../atoms/button";
import { supabase } from "../../utils/supabaseConfig";
import { toast, ToastContainer } from "react-toastify";

interface CustomFormProps {
  formData: LoginForm;
  setFormData: React.Dispatch<React.SetStateAction<LoginForm>>;
}

interface LoginForm {
  email: string;
  password: string;
}

const CustomForm: React.FC<CustomFormProps> = ({ formData, setFormData }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit: (e: any) => void = async (e: any) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword(formData);
      //   console.log(data, "data");
      //   console.log(error, "error");
      if (data.user !== null) {
        window.location.href = "http://localhost:5173/dashboard";
      }
      if (error !== null) {
        toast.error("Invalid login credentials", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      setIsLoading(true);
      console.log(error, "er");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="flex flex-col justify-center space-y-14"
    >
      <div className="flex flex-col space-y-5">
        {loginFormControl.map((field) => {
          return (
            <InputField
              name={field.name}
              onChange={handleChange}
              key={field.name}
              placeholder={field.placeholder}
              componentType={field.componentType}
              type={field.type}
              label={field.label}
            />
          );
        })}
      </div>
      <div className="w-full">
        <Button
          buttonType="submit"
          disabled={isLoading}
          label="Login"
          onClick={() => {}}
          size="default"
        />
      </div>
      <ToastContainer />
    </form>
  );
};

export default CustomForm;
