import { useState } from "react";

function Contacts() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    console.log(contact);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        value={contact.firstName}
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        value={contact.lastName}
        onChange={changeHandler}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={contact.email}
        onChange={changeHandler}
      />
      <input
        type="number"
        placeholder="Phone"
        name="phone"
        value={contact.phone}
        onChange={changeHandler}
      />
      <button onClick={addHandler}>Add Contact</button>
    </div>
  );
}

export default Contacts;
