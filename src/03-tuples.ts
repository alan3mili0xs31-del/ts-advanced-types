(()=>{
  // Tuple type: A tuple is a fixed-length array where each element can have a different type.
  type User = [string, number, boolean];

  const user1: User = ["Alan", 21, false];
  const user2: User = ["Ally", 16, true];
  const user3: User = ["Annie", 13, false];

  // There are some ways to access the elements of a tuple:
  // 1. Using square brackets with the index of the element
  // 2. Using destructuring assignment

  console.log("Username", user1[0]);
  console.log("Age", user1[1]);
  console.log("Is in relationship", user1[2]);

  const [username, age] = user2;
  console.log("Username", username);
  console.log("Age", age);

  user3.forEach(item => console.log(item));
})();
