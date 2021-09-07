import axios from "axios";
import React, { useState, useEffect } from "react";

// t.string "text"
// t.float "stars"  // automatic is set to 0
// t.string "source"
// t.string "username"

const EditFactForm = (props) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  // const useEffect(() => {
  //   console.log("id: ", props.match.params.id);
  //   getFact();
  // })
  useEffect(() => {
    getFact();
  }, []);

  const getFact = async () => {
    try {
      let res = await axios.get(`/api/facts/${props.match.params.id}`);
      setText(res.data.text);
      setSource(res.data.source);
      setUsername(res.data.username);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    console.log("obj: ", { text, source, username });
    try {
      let res = await axios.put(`/api/facts/${props.match.params.id}`, {
        text,
        username,
        source,
      });
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
        <button type="submit">EDIT!!!!</button>
      </form>
    </div>
  );
};

export default EditFactForm;