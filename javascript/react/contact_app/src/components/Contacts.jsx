import { useState } from "react";
import { v4 } from "uuid";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
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
    if (
      !contact.firstName ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const filteredList = contacts.filter((item) => item.id !== id);
    setContacts(filteredList);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap items-center justify-center !p-8 mb-2 h-[14rem] shadow-xl shadow-[#304ffe25]">
        {inputs.map((input, index) => (
          <input
            className="border-1 border-gray-400 rounded-md w-[40%] h-[35px] !px-4 !m-2 outline-none text-[1rem] font-semibold text-blue-700 focus:border-blue-500 hover:border-gray-600"
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button
          className="border-1 border-blue-600 w-[82%] h-8 rounded-md font-semibold !mt-4 hover:bg-blue-600 hover:text-white transiton-all delay-150 duration-300 ease-in-out cursor-pointer outline-none"
          onClick={addHandler}
        >
          Add Contact
        </button>
      </div>
      <div className="text-red-700 font-semibold w-full !mt-6">
        {alert && <p className="bg-red-200 !p-3 rounded-md">{alert}</p>}
      </div>
      <ContactsList
        contacts={contacts}
        setContacts={setContacts}
        onDelete={deleteHandler}
      />
    </div>
  );
}

export default Contacts;
