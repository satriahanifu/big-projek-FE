import React from "react";

function auth() {
  const [state, setState] = useState({
    username: "",
    password: "",
    auth: "",
  });

  const handleFormChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="username" name="username" value={state.username} onChange={(e) => handleFormChange(e)} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" name="password" value={state.password} onChange={(e) => handleFormChange(e)} />
        </div>
        <div>
          <label html for="">
            hello, I'm the admin
          </label>
          <input type="checkbox" placeholder="admin" name="admin" value={state.auth} onChange={(e) => handleFormChange(e)}></input>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default auth;
