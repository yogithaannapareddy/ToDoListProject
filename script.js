// Add close button to each list item
var myNodelist = document.getElementsByTagName("li");

for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("×");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Close button functionality
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Checked task
var list = document.querySelector("ul");

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Add new task
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("×");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
