fetch("JS/itemSwapper.json")
            .then(Response => Response.json())
            .then(data => {
                const ItemsSwapperProduct = document.querySelector(".Products");
                const productComputerDesktop =document.querySelector(".product_computer_desktop")
                const productPhoneTablets =document.querySelector(".product_phones_tablets")
                //console.log(ItemsSwapperProduct);

                allProductJson=data;

                //product with precent in sale
                data.forEach(product => {
                    
                    if (product.old_price)
                    {
                        const precent =Math.floor(((product.price -product.old_price)/product.old_price)*100 );
                        ItemsSwapperProduct.innerHTML +=`
                        <div class="product swiper-slide">
                        <p class="sale_present">${precent}%</p>
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
                            <p class="old_price">$${product.old_price}</p>
                        </div>

                    </div>
                        `
                    }
                });

                //product with precent in computer & Desktop
                data.forEach(product => {
                    
                    productComputerDesktop.innerHTML +=`
                        <div class="product swiper-slide">
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
                        </div>

                    </div>
                        `
                    });


                    //product with precent in phones & tablets
                data.forEach(product => {
                    
                    productPhoneTablets.innerHTML +=`
                        <div class="product swiper-slide">
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
                        </div>

                    </div>
                        `
                    });
            })