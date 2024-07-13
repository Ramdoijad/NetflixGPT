import React, { useState } from "react";

const FormValidation = () => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const HandleNameChange = (e) => {
    const value = e.target.value;
    setname(value); 
    if(value.length <= 4){
      setNameError('Name should be more than four characters');
    }else{
      setNameError('')
    }
  };
  const HandlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if(passwordValue.length <=4 || passwordValue.includes('@')-1){
      setPasswordError('Password should be more than four characters and include "@"');
    }else{
      setPasswordError('')
    }
  };
 const handleSubmit = (e)=>{
    e.preventDefault();
    if(!nameError && !passwordError && name.length>4 && password.length>4 && password.includes("@")){
      alert("login SuccessFully");
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
       document.cookie = `name=${name}; path=/; max-age=3600;`; // Cookie expires in 1 hour
      document.cookie = `password=${password}; path=/; max-age=3600`;
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("password", password);
    }
    else{
      if(!name){
        setNameError("name is required")
      };
      if(!password){
        setPasswordError("password is required")
      }
    }
    setname('');
    setPassword('');

 }
  return (
    <div className="text-center mt-6">
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black "
          onChange={HandleNameChange}
          type="text"
          placeholder="Name"
          value={name}
        />{" "}
        <br />
        <p className="text-red-800">{nameError}</p>
        <input
          type="password"
          className="border mt-5  border-black"
          onChange={HandlePasswordChange}
          placeholder="Password"
          value={password}
        />
        <br />
        <p className="text-red-700">{passwordError}</p>
        <button className="bg-blue-700 mt-5 rounded-full py-1 px-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
