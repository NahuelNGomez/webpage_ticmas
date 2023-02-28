
async function showCountry() {
    document.getElementById("userTitle").innerHTML = "Ciudad";
    let country = "";
    if(localStorage.getItem("ciudad") === "no") {
        console.log(localStorage.getItem("ciudad"));
        let result = await fetch("https://randomuser.me/api/")
            .then( response => response.json())
            .then(data => data)
        country = result.results[0].location.country;
        localStorage.setItem("ciudad", country);
    }
    document.getElementById("userValue").innerHTML = localStorage.getItem("ciudad");
}

async function showAge() {
    document.getElementById("userTitle").innerHTML = "Edad";
    let age = "";
    if(localStorage.getItem("age") === "no") {
        console.log(localStorage.getItem("age"));
        let result = await fetch("https://randomuser.me/api/")
            .then( response => response.json())
            .then(data => data)
        age = result.results[0].dob.age;
        localStorage.setItem("age", age);
    }
    document.getElementById("userValue").innerHTML = localStorage.getItem("age");
}


localStorage.setItem("ciudad", "no");
localStorage.setItem("age", "no");
document.getElementById("country").addEventListener("mouseenter", showCountry);
document.getElementById("age").addEventListener("mouseenter", showAge);