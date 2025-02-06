import { useState } from "react";

function App() {
// test
//  const [email, setEmail] = useState("");
//  const [pass, setPass] = useState("");
//  const [select, setSelect] = useState("user");
//  const [gender, setGender] = useState("mail");
//  const [rules, setRules] = useState(false);

  const [form, setForm] = useState({
    email: '',
    pass: '',
    select: 'user',
    gender: 'mail',
    rules: false,
  });

  const submitHandler = () => {
    event.preventDefault();
    console.log(form);
  };
//
//  const emailHandler = (event) => {
//    setEmail(event.target.value);
//  };
//
//  const passHandler = (event) => {
//    setPass(event.target.value);
//  };
//
//  const selectHandler = (event) => {
//    setSelect(event.target.value);
//  };
//
//  const genderHandler = (event) => {
//    setGender(event.target.value);
//  };
//
//  const rulesHandler = () => {
//    setRules(rules => !rules);
//  };

  const formHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'rules') {
      setForm(form => ({...form, rules: !form.rules}))
    } else {
      setForm(form => ({...form, [name]: value}))
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Email"
        value={form.email}
        name='email'
        onChange={formHandler}
      />
      <input
        type="password"
        placeholder="password"
        value={form.pass}
        name='pass'
        onChange={formHandler}
      />
      <select value={form.select} name='select' onChange={formHandler}>
        <option value="user">User</option>
        <option value="writer">Writer</option>
        <option value="admin">Admin</option>
      </select>
      <div>
        <label htmlFor="mail">Mail</label>
        <input
          type="radio"
          name="gender"
          id="mail"
          value='mail'
          checked={form.gender === 'mail'}
          onChange={formHandler}
        />
        <label htmlFor="femail">Femail</label>
        <input
          type="radio"
          name="gender"
          id="femail"
          value='femail'
          checked={form.gender === 'femail'}
          onChange={formHandler}
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          checked={form.gender === 'other'}
          onChange={formHandler}
        />
      </div>
      <input type='checkbox' checked={form.rules} name='rules' onChange={formHandler}/>
      <button type='submit'>Login</button>
      </form>
    </>
  );
}

export default App;
