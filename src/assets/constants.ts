interface LoginFieldType {
  name: string;
  label: string;
  componentType: string;
  placeholder: string;
  type: string;
}
[];

export const loginFormControl: LoginFieldType[] = [
  {
    name: "email",
    label: "Email",
    componentType: "input",
    placeholder: "enter your email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    componentType: "input",
    placeholder: "enter your password",
    type: "password",
  },
];
