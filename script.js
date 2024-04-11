// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//   });
// const baseUrl= 'http://localhost:3000/fruits'
// fetch(baseUrl)
// .then(res => res.json())
// .then(fruits =>{
//   fruits.filter(fruit => {
//       const fruitName=fruit.name;
//       const fruitList=document.getElementById('allfruits');
//       const list=document.createElement('li');
//       list.textContent=fruitName;
//       fruitList.appendChild(list)
   
//     })
//         });
//         fetch(baseUrl)
//         .then(res =>res.json())
//         .then(info =>{
//             info.filter(fruit=>{
//                 const fruitId=fruit.id
//             })
//         }

     



        
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  
    const baseUrl = 'http://localhost:3000/fruits';
  
    fetch(baseUrl)
      .then(res => res.json())
      .then(fruits => {
        const fruitList = document.getElementById('allfruits');
        fruits.forEach(fruit => {
          const fruitName = fruit.name;
          const fruitId = fruit.id;
          
          const list = document.createElement('li');
          list.textContent = fruitName;
          
          
          list.addEventListener('click', () => {
            
            fetch(`${baseUrl}/${fruitId}`)
              .then(res => res.json())
              .then(info => {
            
                const infoDisplay = document.getElementById('infoDisplay');
                infoDisplay.textContent =`Name: ${info.name}, Genus: ${info.genus}, Family: ${info.family}`
                
console.log(`Name: ${info.name}, Genus: ${info.genus}, Family: ${info.family}`)
                
              })
              .catch(error => {
                console.error('Error fetching additional information:', error);
              });
          });
          
          fruitList.appendChild(list);
        });
      })
      .catch(error => {
        console.error('Error fetching fruits:', error);
      });
  });





