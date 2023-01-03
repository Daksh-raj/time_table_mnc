console.log("fetch js is connected");
let input_value = "";
let file = "time_table.json";
let drop_down_container = document.getElementsByTagName("li");
console.log(drop_down_container);
// console.log(drop_down_container);
for (let i = 0; i < 5; i++) {
  drop_down_container[i].addEventListener("click", (e) => {
    input_value = e.target.innerText;
    // console.log(input_value);
    input_value = input_value.toLowerCase();
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
          if (input_value.includes("monday")) {
            // console.log(myObj.time_table.monday["11.00AM-12.00AM"]);
            let final = "";
            for (let key in myObj.time_table.monday) {
              final += `<div class="card animate__pulse">
              <div class="card-body">
                  <h5 class="card-title">${key}</h5>
                  <p class="card-text">${myObj.time_table.monday[key]}</p>
              </div>
          </div>`;
            }
            container_push.innerHTML = final;
          } else if (input_value.includes("tuesday")) {
            console.log(myObj.time_table.tuesday["11.00AM-12.00AM"]);
            let final = " ";
            for (let key in myObj.time_table.tuesday) {
              final += `<div class="card animate__pulse">
              <div class="card-body">
                  <h5 class="card-title">${key}</h5>
                  <p class="card-text">${myObj.time_table.tuesday[key]}</p>
              </div>
          </div>`;
            }
            container_push.innerHTML = final;
          } else if (input_value.includes("wednesday")) {
            let final = " ";
            console.log(myObj.time_table.wednesday["11.00AM-12.00AM"]);
            for (let key in myObj.time_table.wednesday) {
              final += `<div class="card animate__pulse">
              <div class="card-body">
                  <h5 class="card-title">${key}</h5>
                  <p class="card-text">${myObj.time_table.wednesday[key]}</p>
              </div>
          </div>`;
            }
            container_push.innerHTML = final;
          } else if (input_value.includes("thursday")) {
            let final = "";
            console.log(myObj.time_table.thursday["11.00AM-12.00AM"]);
            for (let key in myObj.time_table.thursday) {
              final += `<div class="card animate__pulse">
              <div class="card-body">
                  <h5 class="card-title">${key}</h5>
                  <p class="card-text">${myObj.time_table.thursday[key]}</p>
              </div>
          </div>`;
            }
            container_push.innerHTML = final;
          } else if (input_value.includes("friday")) {
            let final = "";
            console.log(myObj.time_table.friday["11.00AM-12.00AM"]);
            for (let key in myObj.time_table.friday) {
              final += `<div class="card animate__pulse">
              <div class="card-body">
                  <h5 class="card-title">${key}</h5>
                  <p class="card-text">${myObj.time_table.friday[key]}</p>
              </div>
          </div>`;
            }
            container_push.innerHTML = final;
          } else {
            alert("Please! input the working Day or valid input");
          }
        });
    }
  });
}

let button = document.querySelector("button");

let container_push = document.querySelector(".container_time_slot");
console.log(container_push);
button.addEventListener("click", function (e) {
  // input_value += document.querySelector("input").value.toLowerCase();
});
