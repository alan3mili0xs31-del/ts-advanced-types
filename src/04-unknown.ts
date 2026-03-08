(()=>{
  // The `unknown` type is a type-safe counterpart of `any`. It represents any value, but unlike `any`, you cannot perform operations on an `unknown` type without first asserting its type.
  let myUnknownVar: unknown;
  myUnknownVar = "This is a common string";
  myUnknownVar = 42;
  myUnknownVar = true;
  myUnknownVar = {};
  myUnknownVar = ["alan", 12];

  // calling methods on any and unknown types
  let myAnyVar: any;
  let myUnknownVarV2 : unknown;

  myAnyVar.applyDiscount(); // No error, but it will throw a runtime error if applyDiscount is not defined on the actual value of myAnyVar.
  // myUnknownVarV2.applyDiscount(); // Error: Object is of type 'unknown'.

  let myString: string;
  myString = myAnyVar; // No error, but it will throw a runtime error if myAnyVar is not a string at runtime.
  // myString = myUnknownVarV2; // Error: Type 'unknown' is not assignable to type 'string'.

  //myUnknownVar.toUpperCase(); // No error, because toString is a method available on all types, but it will throw a runtime error if myUnknownVar is null or undefined.
  if (typeof myUnknownVar === "string") {
    console.log(myUnknownVar.toUpperCase()); // No error, because we have narrowed the type of myUnknownVar to string.
  }

  // Never type is a type that represents values that never occur. It is often used to indicate that a function never returns or that a variable can never have a value.
  const noEnd = () => {
    while(true)
      console.log('Do not stop learning!');
  };

  const throwError = (message: string) => {
    throw new Error(message);
  };
})();
