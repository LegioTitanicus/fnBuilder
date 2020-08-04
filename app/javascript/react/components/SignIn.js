import React from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    event.preventDefault();
    fetch(`/users/sign_in`, {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {})
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <div>
      <TextField
        id="emailField"
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        for="user_email"
      />
      <TextField
        id="passField"
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default SignIn;
