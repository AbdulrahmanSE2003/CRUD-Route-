var productNameIP= document.getElementById('productName');
var productPriceIP= document.getElementById('productPrice');
var productDescIP= document.getElementById('productDesc');
var productCategoryIP= document.getElementById('productCategory');
var addBtn=document.getElementById('addBtn');
var updBtn=document.getElementById('updBtn');
var cart=[];

if(localStorage.getItem("products") != null){
    cart=JSON.parse(localStorage.getItem("products"));
    displayProduct(cart);
}

function addProduct(){
    var product={  
        itemName:productNameIP.value,
        itemPrice:productPriceIP.value,
        itemDesc:productDescIP.value,
        itemCategory:productCategoryIP.value,
    }
    cart.push(product);
    localStorage.setItem("products", JSON.stringify(cart));
    displayProduct(cart);
    clearIP(); 
}

function displayProduct(arr){
    var itemsToDisplay=``;
    for(var i=0 ; i<arr.length ; i++){
        itemsToDisplay+=`<tr>
                    <td>${arr[i].itemName}</td>
                    <td>${arr[i].itemPrice}</td>
                    <td>${arr[i].itemDesc}</td>
                    <td>${arr[i].itemCategory}</td>
                    <td><button onclick="updateProduct(${i})" class="btn-outline-warning btn btn-sm ">Update</button></td>
                    <td><button onclick="delProduct(${i})" class="btn-outline-danger btn btn-sm">Delete</button></td>
                </tr>`
    }
    document.getElementById('tbody').innerHTML=itemsToDisplay;
}
function clearIP(){
    productNameIP.value="";
    productPriceIP.value="";
    productDescIP.value="";
    productCategoryIP.value="";
}
function delProduct(index){
    cart.splice(index,1);
    localStorage.setItem("products", JSON.stringify(cart));
    displayProduct(cart);
}

function search(word){
    var cartForSearch=[];
    for(var i=0; i<cart.length ; i++){
        if(cart[i].itemName.toLowerCase().includes(word)==true){
            cartForSearch.push(cart[i]);
        }
    }
    console.log(cartForSearch);
    displayProduct(cartForSearch);
}

function updateProduct(index){
    addBtn.classList.replace("d-block", "d-none");
    updBtn.classList.replace("d-none","d-block");
    productNameIP.value= cart[index].itemName;
    productPriceIP.value= cart[index].itemPrice;
    productDescIP.value= cart[index].itemDesc;
    productCategoryIP.value= cart[index].itemCategory;  
    var editedProduct={  
        newName:productNameIP.value,
        newPrice:productPriceIP.value,
        newDesc:productDescIP.value,
        newCategory:productCategoryIP.value,
    }
    cart.splice(index,1,editedProduct)
    localStorage.setItem('product', cart);
}
