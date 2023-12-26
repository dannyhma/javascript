const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
// Destructuring Assignment
// let firstName = "Dimas";
// let age = 20;

// expression menginisialisasi nilai baru melalui destructuring object
// ({ firstName, age } = profile);

// console.log(firstName);
// console.log(age);

// Destructuring Object
// const { firstName, lastName, age } = profile;
//   const firstName = profile.firstName;
//   const lastName = profile.lastName;
//   const age = profile.age;
   
// console.log(firstName, lastName, age);

// Default Values
// const { firstName, age, isMale = false} = profile;
 
// console.log(firstName)
// console.log(age)
// console.log(isMale)

// Assigning to Different Local Variable Names
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);