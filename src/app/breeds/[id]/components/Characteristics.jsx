import Scale from "./Scale";

export default function Characteristics({ cat }) {
  const text = ["temperament", "origin", "life_span"];
  const scaled = [
    "adaptability",
    "affection_level",
    "child_friendly",
    "grooming",
    "intelligence",
    "heath_issues",
    "social_needs",
    "stranger_friendly",
  ];

  const formatString = (string) => {
    return string
      .slice(0, 1)
      .toUpperCase()
      .concat(string.slice(1).split("_").join(" "));
  };

  return (
    <div className="max-w-4xl flex-[1.5]">
      <h1 className="mb-7 text-3xl font-semibold md:text-4xl">{cat.name}</h1>
      <p className="mb-9 text-base leading-snug md:text-lg">
        {cat.description}
      </p>

      <ul className="flex flex-col gap-6">
        {text.map((c, i) => (
          <li key={i}>
            <span className="font-bold">{formatString(c)}:&nbsp;</span>
            {cat[c]} {c === "life_span" && "years"}
          </li>
        ))}

        {scaled.map((c, i) => (
          <li
            key={i}
            className="flex flex-col justify-between gap-5 md:flex-row md:items-center md:gap-10"
          >
            <span className="font-bold">{formatString(c)}:</span>
            <Scale value={cat[c]} />
          </li>
        ))}
      </ul>
    </div>
  );
}
