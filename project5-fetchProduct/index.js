(async()=>{
    const productContainerEl = document.getElementById("productContainer");
    
    const searchInputEl = document.getElementById("searchInput");
    const url ="https://fakestoreapi.com/products";
const fetchProducts = async() => {
    try {
   const res = await fetch(url);
   return await res.json();

    } catch(error){
    return error;
    }
};
 
const products = await fetchProducts();

const generateProducts = (product1) => {
    return ` <div class="product_card">
    <div class="image_container">
    <img src ="${product1.image}"/>

    </div>
     <div class="product_content">
        <h2>${product1.title}</h2>
        <p>${product1.description.split(" ").slice(0,30).join(" ")}</p>
        <button>${product1.price} $</button>
     </div>
</div>
`;
};

const checkTextContain = (text, searchText) =>{
    return text.toString().toLowerCase().includes(searchText);
};

const renderProducts = (products) => {
    productContainerEl.innerHTML = "";
    products.forEach((product) => {
        productContainerEl.innerHTML += generateProducts(product);
    });
};
const filterHandler = (event)=>{
    const searchText = event.target.value.toLowerCase();

    const filteredProducts = products.filter((product)=>{
        return (
            checkTextContain(product.title, searchText)||
            checkTextContain(product.description, searchText)||
            checkTextContain(product.price, searchText)
        );
    });
    renderProducts(filteredProducts);
};
searchInputEl.addEventListener("keyup", filterHandler);

renderProducts(products);

//console.log("fetchProduct", await fetchProducts());
})();