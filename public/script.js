//clock
document.body.onload = () => {
  setInterval(() => {
    let date = new Date();
    document.getElementById("calender").innerHTML = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }, 1000);
};

//dynamiclly create new elements
document.getElementById("createnode").onclick = () => {
  var newDiv = document.createElement("div");
  newDiv.classList.add("entries");

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");

  div1.classList.add("formdivs");
  div2.classList.add("formdivs");
  div3.classList.add("formdivs");
  div4.classList.add("formdivs");

  var p1 = document.createElement("p");
  p1.innerHTML = "Name :";
  p1.classList.add("divp");
  var inputtext1 = document.createElement("input");
  inputtext1.setAttribute("type", "text");
  inputtext1.setAttribute("name", "dogname");
  inputtext1.classList.add("fields");
  div1.appendChild(p1);
  div1.appendChild(inputtext1);

  var p2 = document.createElement("p");
  p2.innerHTML = "Contact Number :";
  p2.classList.add("divp");
  var inputtext2 = document.createElement("input");
  inputtext2.setAttribute("name", "contact");
  inputtext2.setAttribute("type", "number");
  inputtext2.classList.add("fields");
  div2.appendChild(p2);
  div2.appendChild(inputtext2);

  var p3 = document.createElement("p");
  p3.innerHTML = "Entry Date :";
  p3.classList.add("divp");
  var inputdate = document.createElement("input");
  inputdate.setAttribute("name", "entrydate");
  inputdate.setAttribute("type", "date");
  inputdate.classList.add("fields");
  div3.appendChild(p3);
  div3.appendChild(inputdate);

  var p4 = document.createElement("p");
  p4.innerHTML = "Days :";
  p4.classList.add("divp");
  var showday = document.createElement("div");
  showday.setAttribute("id", "showday");
  div4.appendChild(p4);
  div4.appendChild(showday);

  newDiv.appendChild(div1);
  newDiv.appendChild(div2);
  newDiv.appendChild(div3);
  newDiv.appendChild(div4);
  document.getElementById("listcontainer").appendChild(newDiv);
};

var entries = document.getElementsByClassName("entries");
var fields = document.getElementsByClassName("fields");
var savebtn = document.getElementById("savebtn");
var submitbtn = document.getElementById("submitbtn");
var jsonObj = {};

//to create a json of all input data
function createJson() {
  console.log(entries.length);
  for (i = 0; i < entries.length; i++) {
    let temp = {};
    for (j = 0; j < fields.length; j++) {
      let key = fields[j].getAttribute("name");
      temp[key] = fields[j].value;
    }
    jsonObj[i] = temp;
  }
  console.log(jsonObj);
}
savebtn.onclick = createJson;

//send data to server
var sendResponse = async () => {
  var response = await fetch("/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(jsonObj),
  });

  var data = await response.text();
  console.log(data);
};
submitbtn.onclick = sendResponse;
