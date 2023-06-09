import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [token, setToken] = useState(null);
  const reg =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  const onChange = (event) => {
    if (event.target.className === "email") {
      setEmail(event.target.value);
      setEmailValid(reg.test(email));
    } else if (event.target.className === "password") {
      setPw(event.target.value);
    }
  };

  console.log(`email: ${email}, pw: ${pw}`);

  const getData = async () => {
    const query = `mutation{
      login (email: "${email}", password: "${pw}") {
        token
        user{
          id
          name
          email
        }
      }
    }`;

    const data = await (
      await fetch("https://graphql-ts.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })
    ).json();

    return data;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = await getData();
    // const msg = document.querySelector(".msg");
    if (data.data === null) {
      if (data.errors[0].message === "No Such User Found") {
        setMessage("아이디가 잘못되었습니다.");
      } else if (data.errors[0].message === "Invalid Password") {
        setMessage("비밀번호가 잘못되었습니다.");
      }
      // msg.classList.add("fail");
    } else {
      setMessage(`Hi! ${data.data.login.user.name}`);
      setToken(data.data.login.token);
      // const form = document.querySelector(".form");
      // form.classList.add("success");
      // msg.classList.add("success");
    }
  };
  console.log(token);
  return (
    <div className="login">
      <form onSubmit={onSubmit} onChange={onChange} className="form">
        <input
          className="email"
          type="email"
          placeholder="Email"
          required
          autoFocus
        />
        {emailValid === true && (
          <>
            <input
              className="password"
              type="password"
              placeholder="Password"
            />
            <button>LOGIN</button>
          </>
        )}
      </form>
      {token !== null && <p className="msg">{message}</p>}
    </div>
  );
}

export default App;
