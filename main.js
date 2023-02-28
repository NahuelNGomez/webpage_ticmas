getData();

function getData() {
    // console.log('test');

    //Get API
    fetch('https://randomuser.me/api/')
        .then(function(response) { return response.json(); })
        .then(function(json) {
            console.log(typeof(json));
        });
}