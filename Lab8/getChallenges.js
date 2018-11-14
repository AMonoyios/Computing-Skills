var challengesList = document.getElementById("challenges");


function getChallenges() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            // TODO if response received (success).

            console.log(this.responseText);
            var object = JSON.parse(this.responseText);
            console.log("STATUS==>" + object.status);

            // if there is a zic zak line do not pay attention to it
            for (var i=0; i<object.treasureHunts.length; i++) {

                var newITEM = document.createElement("li");

                var linkItem = document.createElement("a");
                linkItem.innerHTML = object.treasureHunts[i].name;
                linkItem.href = "https://codecyprus.org/th/api/start?player=Homer&app=Simpson&treasure-hunt-id=" + object.treasureHunts[i].uuid;

                newITEM.appendChild(linkItem);

                challengesList.appendChild(newITEM);
            }

        } else{
            // TODO if response not received (error)
        }
    };
    xhttp.open("GET", "https://codecyprus.org/th/api/list", true);
    xhttp.send();
}

function info() {
     var myObj = {firstname: "Andreas", lastname: "Smith", age: 30, male: true};

     var myJSON = JSON.stringify(myObj);
     console.log(myJSON);
}