import axios from "axios";
import React, { useState } from "react";

// t.string "text"
// t.float "stars"  // automatic is set to 0
// t.string "source"
// t.string "username"

const FactForm = (props) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    console.log("obj: ", { text, source, username });
    try {
      let res = await axios.post("/api/facts", { text, username, source });
      props.history.push("/facts");
      // if successfull what should I do
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Fact Form</h1>
      <div onClick={() => props.history.goBack()}>go back</div>
      {error && <p style={{ color: "red" }}>Error Occured</p>}
      <form onSubmit={handleSubmit}>
        <p>fact</p>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <p>spurce</p>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <p>fact</p>
        <input value={source} onChange={(e) => setSource(e.target.value)} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default FactForm;
