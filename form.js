function sendEmail() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let comment = document.getElementById('comment').value;

    let form = document.getElementById("contactForm");

           form.addEventListener("submit", function (event) {
               event.preventDefault(); // don't reload on form submission

               if (name != '' && email != '' && comment != '') {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", "mail.php", true); 
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.onreadystatechange = function() {
                   if (this.readyState == 4 && this.status == 200) {
                     var response = this.responseText;
                   }
                };
                var data = {name: name,email: email,phone: phone,comment: comment};
                xhttp.send(JSON.stringify(data));   

                document.getElementById("contactForm").reset(); //reset form data after submission        
            };

           });
             
};

