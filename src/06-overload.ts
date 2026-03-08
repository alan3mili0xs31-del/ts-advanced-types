(()=>{
  // Overload functions allow us to define multiple function
  // signatures for a single function implementation.
  // This is useful when we want to provide different ways to call
  // a function based on the types of the arguments.

  type Operant = number | string;

  // Defining overload function, we declare just the signatures.
  function sum(x: number, y: number): number;
  function sum(x: string, y: string): string;

  function sum(x: Operant, y: Operant) : Operant{
    if (typeof x === 'number' && typeof y === 'number')
      return x + y;
    else if (typeof x === 'string' && typeof y === 'string')
      return x.concat(' ', y);
    return 'Invalid arguments';
  }

  const resp = sum(10, 100);
  // console.log(resp + 1); // Not possible since TS does not know
  // if the return type was a number or string.
  console.log(resp);

  const resp2 = sum('Ally', 'Hidalgo');
  console.log(resp2);

  // Now, as we defined the specific signatures, ts will know what return type
  // to expect base on the arguments passed.
  const resp3 = sum('Annie', 'Hidalgo');
  console.log(resp3.toLocaleLowerCase());


  function sumWithRestParams(...args: number[]) : number;
  function sumWithRestParams(...args: string[]) : string;
  function sumWithRestParams(...args: Operant[]) : Operant {
    if (args.every(arg => typeof arg === 'number')){
      let total = 0;
      args.forEach(arg => total += arg);
      return total;
    }
    else if (args.every(arg => typeof arg === 'string'))
      return args.join(' ');
    return 'Invalid arguments';
  }

  console.log(sumWithRestParams(10, 20, 30));
  console.log(sumWithRestParams('Hello', 'World', 'from', 'Platzi').toUpperCase());
})();
