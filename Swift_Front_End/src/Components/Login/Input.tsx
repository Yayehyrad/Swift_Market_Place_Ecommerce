import React from "react";
interface InputProps {
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    email: string;  
}
function Input({handleEmailChange , email} : ) {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  );
}

export default Input;
