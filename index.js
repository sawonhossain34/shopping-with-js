
document.getElementById('first-card').addEventListener('click',function(){
    // get the data
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    // console.log(productElement,productPrice,productQuantity)

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    // console.log(priceTotal);
  
    
   // show the data
   displayData(productName,productPrice,productQuantity,priceTotal);
})

document.getElementById('secound-card').addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    //  console.log(productName,productPrice,productQuantity);

    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
    
    // console.log(sumTotal);
    displayData(pName,pPrice,pQuantity,sumTotal);
})

// common function//
function displayData(productName,productPrice,productQuantity,priceTotal){
    const container = document.getElementById('table-container');

    const tr = document.createElement("tr")
    tr.innerHTML = `
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
    container.appendChild(tr);
}