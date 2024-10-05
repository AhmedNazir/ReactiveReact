import { getImageUrl, people } from "../Utils/common.js";

const chemistList = people.filter((person) => person.profession === "chemist");

export default function ListRender() {
  const listItems = chemistList.map((person) => {
    return (
      <li key={person.id}>
        <img src={getImageUrl(person.imageId)} alt={person.name} />
        <p>{person.name}</p>
        <p>{crypto.randomUUID()}</p>
        <p>
          <b>{person.profession}</b>
          <br />
          <i>{person.accomplishment}</i>
        </p>
      </li>
    );
  });
  return listItems;
}
