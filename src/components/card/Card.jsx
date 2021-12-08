import "./Card.styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.person.id}?set=set5&size=180x180`}
        alt="monster"
      />
      <h2>{props.person.name}</h2>
      <p>{props.person.email}</p>
    </div>
  );
};

export default Card;
