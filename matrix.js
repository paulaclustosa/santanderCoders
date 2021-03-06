const movieTheaterVisitors = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kanye West", age: 16 },
  { name: "Bob Ziroll", age: 108 }
];

const canWatchMatrix = movieTheaterVisitors.map((visitor) =>
  visitor.age >= 18
    ? `${visitor.name} can go to The Matrix.`
    : `${visitor.name} is under age!`
);
