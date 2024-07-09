import { useState } from "react";
import { v4 } from "uuid";

import inputs from "../constants/input";

import ContactList from "./ContactList";
import Invalid from "./Invalid";

function Form() {
  const [showError, setShowError] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeFormHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newForm = { ...form, id: v4() };
    if (!form.name || !form.lastName || !form.email || !form.phone) {
      setShowError(true);
      setForm({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } else {
      setShowError(false);
      setContacts((contacts) => [...contacts, newForm]);
    }
    setForm({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const removeHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-12 justify-items-center border-2 border-white rounded-xl mt-10 mx-64 px-10 py-5 shadow-2xl"
      >
        {inputs.map((input) => (
          <input
            key={input.id}
            className={input.className}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={form[input.name]}
            onChange={changeFormHandler}
          />
        ))}
        <div className="col-span-12 w-full px-3 my-5">
          <button
            className="bg-blue-700 text-white w-full py-2 border-2 border-blue-700 rounded-lg hover:text-blue-700 hover:bg-white"
            type="submit"
          >
            Add Contact
          </button>
        </div>
      </form>
      {showError && <Invalid />}
      <ContactList contacts={contacts} removeHandler={removeHandler} />
    </>
  );
}

export default Form;
