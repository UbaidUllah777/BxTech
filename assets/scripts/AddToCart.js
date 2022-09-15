
let carts = document.querySelectorAll('.add-cart');


let products =
    [
        {
            name: 'Mutual AID',
            tag: 'MutualAID',
            price: 1,
            inCart: 0
        },
        {
            name: 'Shadow Lands',
            tag: 'ShadowLands',
            price: 2,
            inCart: 0
        },
        {
            name: 'MOLL FLANDERS',
            tag: 'MOLLFLANDERS',
            price: 3,
            inCart: 0
        },
        {
            name: 'North America',
            tag: 'NorthAmerica',
            price: 4,
            inCart: 0
        },
        {
            name: 'Wolf Hall',
            tag: 'WolfHall',
            price: 5,
            inCart: 0
        },
        {
            name: 'Wicked Sacrifice',
            tag: 'WickedSacrifice',
            price: 6,
            inCart: 0
        },
        {
            name: 'Dictionary of ARTS',
            tag: 'DictionaryofARTS',
            price: 7,
            inCart: 0
        },
        {
            name: 'PineApple Grils',
            tag: 'PineAppleGrils',
            price: 8,
            inCart: 0
        }
    ];







for (let i = 0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () => {
        cartnumbers(products[i]);
    totalCost(products[i]);
})
}

function CartOnLoad()
{
    let productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers)
    {

        document.querySelector('.cartspan').textContent = productNumbers;
       
      
    }
}


function cartnumbers(product)
{
    let productNumbers= localStorage.getItem('cartNumbers');
  
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cartspan').textContent  = productNumbers+ 1;
    }
    else
    {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cartspan').textContent  = 1;
    }
    setItems(product);
}
function setItems(product)
{
    let cartItems = localStorage.getItem('ProductsinCart');
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {

        if (cartItems[product.tag] == undefined)
        {
            cartItems =
            {
                ...cartItems,
                [product.tag]:product
            }

        }

        cartItems[product.tag].inCart += 1;
    } else
    {

        product.inCart = 1;
        cartItems =
        {
            [product.tag]: product
        }
    }
    localStorage.setItem('ProductsinCart', JSON.stringify(cartItems));
}
function totalCost(product)
{
    /*  console.log('the total cost is : ', product.price)*/

    let cartcost = localStorage.getItem('totalCost');
    if (cartcost != null) {
        cartcost = parseInt(cartcost);
        localStorage.setItem('totalCost', cartcost + product.price)
    }
    else
    {

        localStorage.setItem('totalCost',  product.price)
    }

    
}
function displayCart()
{

    let cartcost = localStorage.getItem('totalCost');
    let cartItems=localStorage.getItem("ProductsinCart");
    cartItems=JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <img  src="./imagesForCart/${item.tag}.jpg" style="padding-left:10px; width="80px"; height="100px";">
            <span style="padding-left:10px;">${item.name}</span>
             </div>
               <div class="price">$${item.price}.00 </div>

                <div class="quantity">
                    <i class="fas fa-minus"></i>  &nbsp  &nbsp
                    <span>${item.inCart}</span> &nbsp  &nbsp
                    <i class="fas fa-plus "></i>
                 </div>
                <div class="total">$${item.inCart * item.price}.00 </div>

            `;
        });
        productContainer.innerHTML += `

                <div class="EndTotalContainer">
                    <h5 class="EndTotalTitle"> End Total</h5>
                    <h5 class="EndTotal"> $${cartcost}</h5>   
                </div>
            `;
    }
    else if (cartItems < 1 && productContainer)
    {
        productContainer.innerHTML = '';
            productContainer.innerHTML += `
               
                    <h1 class="emptycarttext"style="margin-top:50px; color:red;">Your Cart is empty</h1>
                    
                

            `;
        function blinker() {
            $('.emptycarttext').delay(1000);
            $('.emptycarttext').fadeOut(700);
            $('.emptycarttext').fadeIn(700);
        }
        setInterval(blinker, 1000);
        
    }
}
CartOnLoad();
displayCart();

let DiscardAllCarts = document.querySelector('.btnDiscardCart');
DiscardAllCarts.addEventListener("click", function (evt) {
    evt.preventDefault();
    window.location.replace("homePage.aspx");
    localStorage.clear();
    return false;
});


// Plus Minus
