'use strict'
// ***** Fetch Api Started***** // 

async function innerData () {
  try {
    const respone = await fetch('https://dummyjson.com/products')
    const data = await respone.json()
    RenderFunc(data);
  } catch (error) {
    console.error(error);
  }
}
innerData()

// async function end //

// *****Render function started******//

const wrapper = document.querySelector(".hero-wrapper")

function RenderFunc (data){
  wrapper.innerHTML =''
  data.products.forEach((el)=>{
    const card = document.createElement("div")
    card.className=('card')
    card.innerHTML = `
    <img class='card-img' src="${el.thumbnail}" alt="">
    <div class='box'>
    <p class='card-text'>Price: ${el.price}</p>
    <p class='card-text'>Discount: ${el.discountPercentage}</p>
    <p class='card-text'>Desc:    ${el.description} q<p>
    <p class='card-text'>Name: ${el.title}</p>
    </div>
    <i data-delete-id='${el.id}' id='delete-btn' class="fa-solid fa-trash-can"></i>
    `
    wrapper.appendChild(card)
    
  })
}

// render function end //

// **** Deleted function started *****//

const deleteFunc = ()=>{
  wrapper.addEventListener(('click'), e =>{
    if(e.target.classList.contains('fa-solid')){
      const deleteId = e.target.dataset.deleteId
      console.log(deleteId);
      const elConfirm = confirm('Rostanham ochirasizmi')
      if(deleteId && elConfirm ){
        
        fetch(`https://dummyjson.com/products/${deleteId}`, {
        method: 'DELETE'
      }).then(response => response.json())
        .then(data =>console.log(data))
    }
  }
})
}
deleteFunc()

