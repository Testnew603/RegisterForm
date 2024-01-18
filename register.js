function register() {
     var form = document.getElementById("reg");
    if (form.checkValidity()) {
        //********************METHOD - 1******************************************************** */
        // alert(
        //     "Name: " + document.getElementById("fname").value + document.getElementById("lname").value + "\n" +        
        //     "Username: " + document.getElementById("uname").value + "\n" +
        //     "Email: " + document.getElementById("email").value + "\n" +
        //     "Phone: " + document.getElementById("phone").value + "\n" +
        //     "Password: " + document.getElementById("pass").value + "\n" +
        //     "Short Bio: " + document.getElementById("desc").value + "\n"
        // );
        // form.reset();

        //********************METHOD - 1******************************************************** */
        var fields = [];
        var name = document.getElementsByClassName("name");
        for(let i=0; i<name.length; i++){
            fields.push(name[i].value)
        }

        alert(
                 "Name: " + fields[0] + fields[1] + "\n" +        
                 "Username: " + fields[2] + "\n" +
                 "Email: " + fields[3] + "\n" +
                 "Phone: " + fields[4] + "\n" +
                 "Password: " + fields[5] + "\n" +
                 "Short Bio: " + fields[6] + "\n"
             );
             form.reset();
        
    } else {
        form.reportValidity();        
    }
}
