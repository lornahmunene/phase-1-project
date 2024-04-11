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
        const infoDisplay = document.getElementById('title');
        const genusName=document.getElementById('genus')
        const familyName=document.getElementById('family')
        fruits.forEach(fruit => {
          const fruitName = fruit.name;
          const fruitId = fruit.id;
          
          const list = document.createElement('li');
          list.textContent = fruitName;
          
          
          list.addEventListener('click', () => {
            
            fetch(`${baseUrl}/${fruitId}`)
              .then(res => res.json())
              .then(info => {                  
                
                
                infoDisplay.innerHTML=`Name: ${info.name}`
                 genusName.innerHTML=`Genus: ${info.genus}`
                  familyName.innerHTML=`Family: ${info.family}`
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
  






