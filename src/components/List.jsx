import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function Group(peopleList) {
  console.log(peopleList);

  const listItems = peopleList.map((person) => {
    return (
      <li key={person.id}>
        <img src={getImageUrl(person.imageId)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    );
  });

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export default function List() {
  const peopleList1 = people.filter((person) => person.profession == "chemist");

  const peopleList2 = people.filter((person) => person.profession != "chemist");

  return (
    <>
      <Group peopleList={peopleList1} />
      <Group peopleList={peopleList2} />;
    </>
  );
}
