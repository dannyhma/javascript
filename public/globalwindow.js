const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  // fullName: () => {
  //   return `${this.firstName} ${this.lastName}`;
  // },
  // panggilNanti: function () {
  //   setTimeout(function () {
  //     console.log(this.firstName);
  //   }, 3000);
  // },
};

console.log(person.fullName());
