const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false }
];

const updatePeopleAndVotes = (acc, voted) => (ageRange) => {
  const people = `num${ageRange}People`;
  const votes = `num${ageRange}Votes`;

  return {
  ...acc,
  [people]: acc[people] + 1,
  [votes]: voted === true ? acc[votes] + 1 : acc[votes]
  };
};

const totalPeopleAndVotes = voters.reduce(
  (acc, voter) => {
    const partialApply = updatePeopleAndVotes(acc, voter.voted);

    if (voter.age >= 18 && voter.age <= 25) {
      return partialApply("Young");
    }

    if (voter.age >= 26 && voter.age <= 35) {
      return partialApply("Mid");
    }

    if (voter.age >= 36 && voter.age <= 55) {
      return partialApply("Old");
    }

    return acc;
  },
  {
    numYoungPeople: 0,
    numYoungVotes: 0,
    numMidPeople: 0,
    numMidVotes: 0,
    numOldPeople: 0,
    numOldVotes: 0
    }
);
