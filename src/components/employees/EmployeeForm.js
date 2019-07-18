// import React, { Component } from "react";

//  export default EmployeeForm extends Component {
//      // Set initial state
//   state = {
//     name: "",
//     storeId: "",
//     employeeId: ""
//   }
//   // Update state whenever an input field is edited
//   handleFieldChange = evt => {
//     const stateToChange = {};
//     stateToChange[evt.target.id] = evt.target.value;
//     this.setState(stateToChange);
//   };
//   constructNewEmployee = evt => {
//     evt.preventDefault();
//     if (this.state.employee === "") {
//       window.alert("Please select a caretaker");
//     } else {
//       const animal = {
//         name: this.state.animalName,
//         breed: this.state.breed,
//         // Make sure the employeeId is saved to the database as a number since it is a foreign key.
//         employeeId: parseInt(this.state.employeeId)
//       };

//       // Create the animal and redirect user to animal list
//       this.props
//         .addAnimal(animal)
//         .then(() => this.props.history.push("/animals"));
//     }
//   };

// }