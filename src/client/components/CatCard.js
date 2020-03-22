import React from "react";
import { Link } from "react-router-dom"; // hint, you may want to use this
import AllCats from "./AllCats";

// You have a bunch of freedom here to write this how you want
// This is not really tested, other than what props you use here
// Check AllCats specs for what is being checked

const CatCard = props => {
  console.log(this.props, "props");
  return (
    <div class="cat-card">
      <Link to="/cat/:id">{cat.name}</Link>
    </div>
  );
};

export default CatCard;
