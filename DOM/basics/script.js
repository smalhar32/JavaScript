var btn = document.querySelector("button");

var h5 = document.querySelector("h5");

var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    h5.innerHTML = "Friends";
    h5.style.color = "green";
    btn.innerHTML = "Remove";
    console.log("clicked");
    check = 1;
  }
  else{
    h5.innerHTML = "Stranger";
    h5.style.color = "red";
    btn.innerHTML = "Add Friend";
    console.log("Double-clicked");
    check = 0;
  }
  
});
