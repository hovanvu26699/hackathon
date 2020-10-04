




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
            alert(' đã đăng thành công.');
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            alret('đăng  bài thất bại')
            console.error("Error adding document: ", error);
        });
}


function renderData() {
    db.collection("products").get()
        .then(function (querySnapshot) {
            let comic = document.getElementById("comic")
            let economy = document.getElementById("economy")
            let history = document.getElementById("history")
            let other = document.getElementById("other")
        querySnapshot.forEach(function (doc) {
            let temp = `
            <div class="col-lg-3 col-md-6">
                <div class="single-product-card">
                    <div class="thumb">
                        <img src="assets/img/product/home-4/05.png" alt="top-product">
                    </div>
                    <div class="product-card-details">
                        <p class="categories">${doc.data().category}</p>
                        <h4 class="title"><a href=" #">${doc.data().name}</a></h4>
                        <div class="star-rating">
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star-half-o"></i></span>
                        </div>
                        <div class="price">
                            <span> $${doc.data().price}</span>
                        </div>
                        <div class="product-cart">
                            <span class="shop-cart-icon"><a href="#"><i class="las la-shopping-cart"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
            `
            if( doc.data().category == 'comic'){
                comic.insertAdjacentHTML("beforeend", temp)
            } 
            else if(doc.data().category == 'economy'){
                economy.insertAdjacentHTML("beforeend", temp)
            }
            else if (doc.data().category == 'history'){
                history.insertAdjacentHTML("beforeend", temp)
            }
             else if (doc.data().category == 'other') {
                other.insertAdjacentHTML("beforeend", temp)
             }

            

            // doc.data() is never undefined for query doc snapshots
            // document.getElementById("123").innerHTML += doc.data().name + "<br>"
            // document.getElementById("123").innerHTML += doc.data().price + "<br>"
            // document.getElementById("123").innerHTML += doc.data().quantity + "<br>"
            // document.getElementById("123").innerHTML += doc.data().category + "<br>"
            // document.getElementById("123").innerHTML += `<img src="${doc.data().pic}" alt="">` + "<br>"

            console.log(doc.id, " => ", doc.data());
        });
    });
}
renderData()
