
let button = document.getElementById("button");

button.addEventListener("click", function () {

    
    var database = firebase.database();
    var ref = database.ref("cc2650-ff366");
    
    ref.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot){
    
            var data = childSnapshot.val();
            console.log(data);
    
        });
    })


}) 





