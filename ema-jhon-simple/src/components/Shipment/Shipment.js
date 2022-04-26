import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
    setError(event.target.value);
    const shipping = { name, address, phone };
    console.log(shipping);
  };
  return (
    <div className="login-container">
      <h2 className="login-title">Sign Up</h2>
      <form onSubmit={handleCreateUser}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input onBlur={handleNameBlur} type="text" name="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            value={user?.email}
            readOnly
            type="email"
            name="email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input
            onBlur={handleAddressBlur}
            type="text"
            name="address"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input onBlur={handlePhoneBlur} type="number" name="phone" required />
        </div>
        <p style={{ color: "red" }}>{error}</p>
        <input type="submit" value="Shipping Now" className="form-submit" />
      </form>
    </div>
  );
};

export default Shipment;
