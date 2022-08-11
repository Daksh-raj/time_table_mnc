console.log("fetch js is connected");

let button = document.querySelector("button");
let file = "time_table.json";
let container_push = document.querySelector(".container_time_slot");
console.log(container_push);
button.addEventListener("click", function (e) {
  let input_value = "";
  input_value += document.querySelector("input").value.toLowerCase();
  if (input_value == "") {
    alert("Not a valid input");
  } else {
    fetch(file)
      .then((Response) => {
        return Response.text();
      })
      .then((data) => {
        let myObj = JSON.parse(data);
        console.log(myObj);
        // console.log(myObj.time_table.monday["11.00AM-12.00AM"]);
        // console.log(input_value);
        if (input_value == "monday") {
          // console.log(myObj.time_table.monday["11.00AM-12.00AM"]);
          let final = "";
          for (let key in myObj.time_table.monday) {
            let container_temp = document.createElement("div");
            container_temp = "";
            container_temp += `<h1 style="color:"red">${key}
            <h2 style="color:blue">${myObj.time_table.monday[key]}</h2><br>`;
            console.log(container_temp);
            final += container_temp;
          }
          container_push.innerHTML = final;
        } else if (input_value == "tuesday") {
          console.log(myObj.time_table.tuesday["11.00AM-12.00AM"]);
          let final = " ";
          for (let key in myObj.time_table.tuesday) {
            let container_temp = document.createElement("div");
            container_temp = "";
            container_temp += `<h1 style="color:"red">${key}
            <h2 style="color:blue">${myObj.time_table.tuesday[key]}</h2><br>`;
            console.log(container_temp);
            final += container_temp;
          }
          container_push.innerHTML = final;
        } else if (input_value == "wednesday") {
          let final = " ";
          console.log(myObj.time_table.wednesday["11.00AM-12.00AM"]);
          for (let key in myObj.time_table.wednesday) {
            let container_temp = document.createElement("div");
            container_temp = "";
            container_temp += `<h1 style="color:"red">${key}
            <h2 style="color:blue">${myObj.time_table.wednesday[key]}</h2><br>`;
            console.log(container_temp);
            final += container_temp;
          }
          container_push.innerHTML = final;
        } else if (input_value == "thursday") {
          let final = "";
          console.log(myObj.time_table.thursday["11.00AM-12.00AM"]);
          for (let key in myObj.time_table.thursday) {
            let container_temp = document.createElement("div");
            container_temp = "";
            container_temp += `<h1 style="color:"red">${key}
            <h2 style="color:blue">${myObj.time_table.thursday[key]}</h2><br>`;
            console.log(container_temp);
            final += container_temp;
          }
          container_push.innerHTML = final;
        } else if (input_value == "friday") {
          let final = "";
          console.log(myObj.time_table.friday["11.00AM-12.00AM"]);
          for (let key in myObj.time_table.friday) {
            let container_temp = document.createElement("div");
            container_temp = "";
            container_temp += `<h1 style="color:"red">${key}
            <h2 style="color:blue">${myObj.time_table.friday[key]}</h2><br>`;
            console.log(container_temp);
            final += container_temp;
          }
          container_push.innerHTML = final;
        } else {
          alert("Please! input the working Day or valid input");
        }
      });
  }
});
