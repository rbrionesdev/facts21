import React from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useHistory } from "react-router";

const Fact = ({ id, text, stars, username, source, updateFact }) => {
  const history = useHistory();
  const handleStarClick = async (newValue) => {
    console.log(`Example 2: new value is ${newValue}`);
    // axios call. to db stop fe here....
    let res = await axios.put(`/api/facts/${id}`, { stars: newValue });
    updateFact(res.data);
    console.log(res);
  };
  const firstExample = {
    size: 30,
    value: stars,
    edit: true,
    isHalf: true,
    onChange: handleStarClick,
  };

  return (
    <div style={styles.container}>
      <div style={styles.fact}>
        <h3 style={styles.header}>{text}</h3>
        <p style={styles.user}>{username}</p>
      </div>
      <div style={styles.info}>
        <a href={source}>{source}</a>
        <ReactStars {...firstExample} />
        <div onClick={() => history.push(`/facts/${id}/edit`)}>edit</div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    fontSize: "36px",
  },
  user: {
    fontSize: "16px",
    color: "#666",
  },
  border: {
    border: "1px solid",
  },
  fact: {
    paddingBottom: "20px",
    display: "flex",
    alignContent: "flex-start",
    alignContent: "flex-start",
    justifyItems: "flex-start",
    flexDirection: "column",
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    // justifyContent: "flex-end",
    flexDirection: "row",
  },
  container: {
    display: "flex",
    justContent: "flex-start",
    flexDirection: "column",
    margin: "20px",
    padding: "20px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },
};

export default Fact;