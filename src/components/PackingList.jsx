function Drink({ name }) {
  let dd1, dd2, dd3;
  if (name === "tea") {
    dd1 = "leaf";
    dd2 = "15–70 mg/cup";
    dd3 = "4,000+ years";
  } else {
    dd1 = "bean";
    dd2 = "80–185 mg/cup";
    dd3 = "1,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{dd1}</dd>
        <dt>Caffeine content</dt>
        <dd>{dd2}</dd>
        <dt>Age</dt>
        <dd>{dd3}</dd>
      </dl>
    </section>
  );
}

export default function DrinkingList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
