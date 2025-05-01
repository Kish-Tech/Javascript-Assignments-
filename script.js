document.getElementById("clickBtn").addEventListener("click", function() {
    alert("Button was clicked!");
});

//Hover Effect
document.getElementById("hoverDiv").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
});
document.getElementById("hoverDiv").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

//keypress detection
document.getElementById("keyInput"),addEventListener("keypress", function(event){
    alert("You Pressed: " + event.key);
});

//Double click or long press
let PressTimer;
document.getElementById("secretBtn").addEventListener("dblclick", function(){
    alert("You double-clicked");
});
document.getElementById("secretBtn").addEventListener("mousedown", function(){
    PressTimer = setTimeout(function(){
        alert("You long-pressed");
    }, 1000);
});
document.getElementById("secretBtn").addEventListener("mouseup", function() {
    clearTimeout(PressTimer);
});

//changing color button

document.getElementById("colorChangeBtn").addEventListener("click", function() {
    this.textContent = "Color Changed";
    this.style.backgroundColor = "green";
});

//image gallery

let images = ["js2.png", "js3.jfif", "js4.png"];
let currentIndex = 0;

document.getElementById("nextImageBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentIndex];
});

//Tabs feature

document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", function() {
        const tabId = this.getAttribute("data-tab");
        document.querySelectorAll(".tab-content").forEach(tab => {
            tab.style.display = tab.id === tabId ? "block" : "none";
        });
    });
});

//Form Validation - Required Field Check
document.getElementById("myForm").addEventListener("submit", function(event) {
    const nameField = document.getElementById("name");
    if (nameField.value.trim() === "") {
      event.preventDefault();
      alert("Name is required!");
    }
  });
  
  //  Form Validation - Email Format Check
  document.getElementById("emailForm").addEventListener("submit", function(event) {
    const emailField = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      event.preventDefault();
      alert("Please enter a valid email!");
    }
  });
  
  // Form Validation - Password Length Check
  document.getElementById("passwordForm").addEventListener("submit", function(event) {
    const passwordField = document.getElementById("password");
    if (passwordField.value.length < 8) {
      event.preventDefault();
      alert("Password must be at least 8 characters long!");
    }
  });
  
  // Bonus: Real-Time Feedback While Typing
  document.getElementById("realTimeInput").addEventListener("input", function() {
    const feedback = document.getElementById("feedback");
    feedback.textContent = "You typed: " + this.value;
  });