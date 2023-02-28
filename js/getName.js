async function getData() {
    let result = await fetch("https://randomuser.me/api/")
        .then( response => response.json())
        .then(data => data)
    document.getElementById("name").innerHTML = result.results[0].name.first + " " + result.results[0].name.last;
    document.getElementById("iconName").innerHTML = "<img src=" + result.results[0].picture.large + ' alt="person-icon">'
}

getData()