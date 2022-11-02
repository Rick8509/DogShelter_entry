document.body.onload = () => {
  setInterval(() => {
    let date = new Date();
    document.getElementById("calender").innerHTML = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }, 1000);
};

document.getElementById("createnode").onclick = () => {
  var newDiv = document.createElement("div");
  newDiv.classList.add("entries");
  var inputtext = document.createElement("input");
  newDiv.appendChild(inputtext);
  document.getElementById("listcontainer").appendChild(newDiv);
};
