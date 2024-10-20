var cart =document.querySelector('.cart');

function open_cart(){
    cart.classList.add("active")

}

// Close Cart sale
function close_cart(){
    cart.classList.remove("active")
}


var menu= document.querySelector(".menu");
// open menu
function open_menu(){
    menu.classList.add("active");
}

// colose Menu
function close_menu(){
    menu.classList.remove("active");
}


////////////////////////////Add & Remove Item In Card////////////////////////////////////


var allProductJson ;
var productInCart=[];
var btnAdded =[];
var item_in_cart =document.querySelector(".item_in_cart");
var numcart = document.querySelector(".count_item_incart"); //count in top cart
var count_item =document.querySelector(".count_item")// count in header
var priceCartHead=document.querySelector(".price_cart_head"); // price in header
var priceCartTotal =document.querySelector(".price_cart_total")
//console.log(item_in_car);

             // Add Product in Sale Cart//



//add in  list
function addInCart (id , btn){
    productInCart.push(allProductJson[id]);
    //console.log(allProductJson[id]);
    btnAdded.push(btn);
    btn.classList.add("active");

    getItemCart ();
}

//add in cart
function getItemCart (){
    let items =" ";
    let price=0;
    console.log(productInCart);
    for (let i = 0; i < productInCart.length; i++) {
        items +=`
        <div class="item_cart">
                    <img src="${productInCart[i].img}" alt="">
                    <div class="content">
                        <h4><a href="item.html">${productInCart[i].name}</a></h4>
                        <P class="price_item">${productInCart[i].price}$</P>
                    </div>
                    <button class="delete_item_in_cart">
                        <i onclick="removeItemCart(${productInCart[i].id},${i})" class="fa-solid fa-trash-can"></i>
                    </button>
                </div>`;
        price+=productInCart[i].price;
            
        
    }
        item_in_cart.innerHTML = items;
        numcart.innerHTML =`${productInCart.length} Item in Cart)`
        count_item.innerText =productInCart.length;
        priceCartHead.innerText=`${price}$`;
        priceCartTotal.innerText=`${price}$`;
}


             // Remove Product in Sale Cart//

function removeItemCart(id,index ){
    productInCart.splice(index, 1);
    btnAdded[index].classList.remove("active")
    btnAdded.splice(index,1);
    getItemCart ();
}



////////////////////////////End Add & Remove Item In Card////////////////////////////////////


//////////////////////////// Footer ////////////////////////////////////

        //Back To Top

var backToTop =document.querySelector(".back_to_top");

backToTop.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    }
    )
})



////////////////////////////Item Page///////////////////////////////
let bigImg =document.querySelector(".big_img img");

function selectImg(img){
    console.log(img);
    console.log(bigImg);
    bigImg.src=img;
}