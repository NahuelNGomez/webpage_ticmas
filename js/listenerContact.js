async function showEmail() {
    document.getElementById("contactTitle").innerHTML = "Email";
    let email = "";
    if(localStorage.getItem("email") === "no") {
        console.log(localStorage.getItem("email"));
        let result = await fetch("https://randomuser.me/api/")
            .then( response => response.json())
            .then(data => data)
        email = result.results[0].email;
        localStorage.setItem("email", email);
    }
    document.getElementById("contactValue").innerHTML = localStorage.getItem("email");
}

async function showPhone() {
    document.getElementById("contactTitle").innerHTML = "Número de telefono";
    let phone = "";
    if(localStorage.getItem("phone") === "no") {
        console.log(localStorage.getItem("phone"));
        let result = await fetch("https://randomuser.me/api/")
            .then( response => response.json())
            .then(data => data)
        phone = result.results[0].phone;
        localStorage.setItem("phone", phone);
    }
    document.getElementById("contactValue").innerHTML = localStorage.getItem("phone");
}

async function showStreet() {
    document.getElementById("contactTitle").innerHTML = "Dirección";
    let number = "";
    let name = "";
    if(localStorage.getItem("nameStreet") === "no") {
        console.log(localStorage.getItem("nameStreet"));
        let result = await fetch("https://randomuser.me/api/")
            .then( response => response.json())
            .then(data => data)
        number = result.results[0].location.street.number;
        name = result.results[0].location.street.name;
        localStorage.setItem("nameStreet", name);
        localStorage.setItem("numberStreet", number);
    }
    document.getElementById("contactValue").innerHTML = localStorage.getItem("nameStreet") + " " + localStorage.getItem("numberStreet");
}


localStorage.setItem("email", "no");
localStorage.setItem("phone", "no");
localStorage.setItem("nameStreet", "no");
localStorage.setItem("numberStreet", "no");
document.getElementById("email").addEventListener("mouseenter", showEmail);
document.getElementById("phone").addEventListener("mouseenter", showPhone);
document.getElementById("street").addEventListener("mouseenter", showStreet);