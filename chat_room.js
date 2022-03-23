var firebaseConfig = {
    apiKey: "AIzaSyA_8S7ECZ4M3MZVe96VUeGBX6uGWaa9vXw",
    authDomain: "chat-app-fd0dd.firebaseapp.com",
    databaseURL: "https://chat-app-fd0dd-default-rtdb.firebaseio.com",
    projectId: "chat-app-fd0dd",
    storageBucket: "chat-app-fd0dd.appspot.com",
    messagingSenderId: "252076364547",
    appId: "1:252076364547:web:9ca4ba4ecd9a9796844f36",
    measurementId: "G-XZQ6LRJY8Q"
  };
  
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div> <hr>";
     document.getElementById("output").innerHTML += row;
  });
});
}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "chat_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location = "index.html";
}