
document.getElementById('first-card').addEventListener('click',function(){
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    // console.log(productElement,productPrice,productQuantity)

    const container = document.getElementById('table-container');

    const tr = document.createElement("tr")
    tr.innerHTML = `
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    `;
    container.appendChild(tr);
})