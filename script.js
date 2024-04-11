document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
const baseUrl= 'http://localhost:3000/fruits'
fetch(baseUrl)
.then(res => res.json())
.then(fruits =>{
  fruits.filter(fruit => {
      const fruitName=fruit.name;
      const fruitList=document.getElementById('allfruits');
      const list=document.createElement('li');
      list.textContent=fruitName;
      fruitList.appendChild(list)
  }) 
})
document.getElementById('allfruits').addEventListener(
    'click',function(event){
        fruitList.map(fruit=>{const infoDisplay=document.getElementById('infoDisplay');
        infoDisplay.textContent=`${nutritions}`

        })
    }
)
    


