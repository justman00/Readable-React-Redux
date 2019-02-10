import React from "react";

import "./App.css";

const Category = props => {
  return (
    <section className="category">
      <h1>{props.category}</h1>
    </section>
  );
};

export default Category;
