// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCi6ZtgEDzObqHnZSAA4iO6pUKQxti11Dg",
    authDomain: "khoaci.firebaseapp.com",
    databaseURL: "https://khoaci.firebaseio.com",
    projectId: "khoaci",
    storageBucket: "khoaci.appspot.com",
    messagingSenderId: "140014124727",
    appId: "1:140014124727:web:bd13e4c253d6a91cda9732",
    measurementId: "G-HNRPLX1YE8"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
//////////////////////////////
let Name = document.getElementById("name")
let Price = document.getElementById("gia")
let Quantity = document.getElementById("soluong")
let Category = document.getElementById("loai")
let Images = document.getElementById("img")

/////////////////////////////
function Dang() {
    db.collection("products").add({
        name: Name.value,
        price: Price.value,
        quantity: Quantity.value,
        category: Category.value,
        pic: Images.src
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

document.getElementById("test").addEventListener("click", () => {
    db.collection("products").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            document.getElementById("123").innerHTML += doc.data().name + "<br>"
            document.getElementById("123").innerHTML += doc.data().price + "<br>"
            document.getElementById("123").innerHTML += doc.data().quantity + "<br>"
            document.getElementById("123").innerHTML += doc.data().category + "<br>"
            document.getElementById("123").innerHTML += `<img src="${doc.data().pic}" alt="">` + "<br>"

            console.log(doc.id, " => ", doc.data());
        });
    });
})