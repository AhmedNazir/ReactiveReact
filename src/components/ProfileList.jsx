import { getImageUrl } from "../Utils/common.js";

function Profile({
  name,
  id,
  size,
  profession,
  totalAward,
  awardList,
  discoveredList,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(id)}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {totalAward} </b>({awardList})
        </li>
        <li>
          <b>Discovered: </b>
          {discoveredList}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name={"Maria Skłodowska-Curie"}
        id={"szV5sdG"}
        size={70}
        profession={"physicist and chemist"}
        totalAward={4}
        awardList={
          "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,Matteucci Medal"
        }
        discoveredList={"polonium (chemical element)"}
      />

      <Profile
        name={"Katsuko Saruhashi"}
        id={"YfeOqp2"}
        size={70}
        profession={"geochemist"}
        totalAward={2}
        awardList={"Miyake Prize for geochemistry, Tanaka Prize"}
        discoveredList={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
