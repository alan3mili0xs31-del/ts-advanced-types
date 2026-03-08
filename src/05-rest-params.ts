(()=>{
  // Rest parameters allow us to represent an indefinite number of arguments as an array. This is useful when we want to create functions that can accept a variable number of arguments.
  // In this funcion, we passes an array with the values we want to sum.
  const sum = (numbers: number[]): number => {
    let total = 0;
    numbers.forEach(number => total += number);
    return total;
  };

  const totalBill = sum([10, 20, 35]);

  console.log('Total bill:', totalBill);

  // In this other funcion, we passes a indefinite number of arguments using rest parameters. The `...numbers` syntax allows us to capture all the arguments passed to the function into an array called `numbers`.
  const sumUsingRestParams = (...numbers: number[]) => {
    let total = 0;
    numbers.forEach(number => total += number);
    return total;
  };

  const totalBill2 = sumUsingRestParams(10, 20, 35);
  console.log('Total bill using rest params:', totalBill2);


  enum Role {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
    SELLER = 'seller'
  };

  type User = {
    username: string,
    role: Role
  };

  /**
   * Checks if an user has or not one of the specified roles.
   * @param user User object to be checked.
   * @param roles List of roles to be checked.
   * @returns true if user's rol matches with any or false if not.
   */
  const checkRole = (user: User, ...roles: Role[]) => {
    return roles.includes(user.role);
  };

  const firstUser: User = {
    username: 'Alan',
    role: Role.CUSTOMER
  };

  let res = checkRole(firstUser, Role.CUSTOMER, Role.SELLER, Role.ADMIN);
  console.log('Can the user purchase products?', res);
    res = checkRole(firstUser, Role.SELLER, Role.ADMIN);
  console.log('Can the user offer products?', res);
  res = checkRole(firstUser, Role.ADMIN);
  console.log('Can the user remove products?', res);
})();
