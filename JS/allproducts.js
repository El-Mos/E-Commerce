fetch("JS/itemSwapper.json")
            .then(Response => Response.json())
            .then(data => {

                const Products =document.querySelector(".product_dev")
                //console.log(ItemsSwapperProduct);

                allProductJson=data;

                //product with precent in sale
                data.forEach(product => {
                    

                        const oldPrice = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";
                        const precent_p =product.old_price ? `<p class="sale_present">${Math.floor(((product.price -product.old_price)/product.old_price)*100 )}%</p>` : "";

                        Products.innerHTML +=`
                        <div class="product swiper-slide">
                        ${precent_p}
                        <div class="sale_icons">
                            <i onclick="addInCart(${product.id},this)" class="fa-solid fa-cart-shopping"></i>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-share"></i>
                        </div>
                        
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img src="${product.img_hover}" class="img_hover" alt="">
                        </div>
                        <p class="descript"><a href="#">${product.name}</a></p>
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p>$${product.price}</p>
                            ${oldPrice}
                        </div>

                    </div>
                        `
                    }
                );

            })

// close && open Filter
const btn =document.querySelector(".filter")
function open_close_filter(){
    btn.classList.toggle("active");
    
}