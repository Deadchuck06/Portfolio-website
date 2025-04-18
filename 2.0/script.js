// your code goes here
// Form validation
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = this.querySelector('input[type="text"]');
    const email = this.querySelector('input[type="email"]');
    const message = this.querySelector("textarea");
  
    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!email.value.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
  
    alert("Thanks for reaching out!");
  });
  