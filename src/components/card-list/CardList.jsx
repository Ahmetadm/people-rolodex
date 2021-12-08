import React from "react";
import "./CardList.styles.css";
import Card from "../card/Card";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.people.map((person) => (
        <Card key={person.id} person={person}></Card>
      ))}
    </div>
  );
};

export default CardList;
