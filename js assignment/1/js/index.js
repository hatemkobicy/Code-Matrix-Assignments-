

// Function to add data to table
function Addtotaple() {
    let first_name = document.getElementById("firstName").value;
    let last_name = document.getElementById("lastName").value;
    let city = document.getElementById("city").value;
    let age = document.getElementById("age").value;
    
    if (firstName && lastName && city && age) {
      let table = document.getElementById("userTable");
      let row = table.insertRow();

      row.insertCell(0).textContent = first_name;
      row.insertCell(1).textContent = last_name;
      row.insertCell(2).textContent = city;
      row.insertCell(3).textContent = age;

      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("city").value = "";
      document.getElementById("age").value = "";
    } else {
      alert("Please fill all fields.");
    }

};