     
document.addEventListener("DOMContentLoaded", function() {
  // this event listener loads all the content in the file
    console.log("The DOM has loaded");
    // when it successfully fires it console logs "The DOM has loaded"
  
    const baseUrl = 'http://localhost:3000/fruits';
    // i have declared a variable baseUrl that is asssigned the link to my json-server
  
    fetch(baseUrl)
    //  a get request is made to my json server
      .then(res => res.json())
      // the response is the data in json format
      .then(fruits => {
        // in the above line there's an arrow function that is generated
        const fruitList = document.getElementById('allfruits');
        // gets an element by id all fruits
        const infoDisplay = document.getElementById('title');
        // gets an element by id title
        const genusName=document.getElementById('genus')
        // gets an element by id genus
        const familyName=document.getElementById('family')
        // gets an element by id family
        const caloriesCount=document.getElementById('calories')
        // gets an element by calories
        const fatContent=document.getElementById('fat')
        // gets an element by fat
        const cabohydrateCount=document.getElementById('carbohydrates')
        // gets an element by carbohydrate
        const sugarContent=document.getElementById('sugar')
        // gets an element by sugar
        const proteinContent=document.getElementById('protein')
        // gets an element by protein
        fruits.forEach(fruit => {
          const fruitName = fruit.name;
          const fruitId = fruit.id;
          
          const list = document.createElement('li');
          list.textContent = fruitName;
          
        
          list.addEventListener('click', () => {
            // an event listener is added to make the list of fruits responsive
            
            fetch(`${baseUrl}/${fruitId}`)
              .then(res => res.json())
              .then(info => {                  
                
                
                infoDisplay.innerHTML=`Name: ${info.name}`
                // according to each fruit id a name is added to the display card
                 genusName.innerHTML=`Genus: ${info.genus}`
                  familyName.innerHTML=`Family: ${info.family}`
                  caloriesCount.innerHTML=`calories:${info.nutritions.calories}`
                  fatContent.innerHTML=`fatContent:${info.nutritions.fat}`
                cabohydrateCount.innerHTML=`Carbs:${info.nutritions.carbohydrates}`
                sugarContent.innerHTML=`sugar:${info.nutritions.sugar}`
                proteinContent.innerHTML=`protein:${info.nutritions.protein}`
              })
              .catch(error => {
                // incase of any errors while executing the code this error is loaded
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
  document.getElementById('fruitForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const fruitData = Object.fromEntries(formData);

    try {
        const response = await fetch('http://localhost:3000/fruits',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fruitData)
        });

        if (response.ok) {
            alert('Fruit added successfully!');
        } else {
            const errorText = await response.text();
            console.error('Error:', errorText);
            alert('Failed to add fruit. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to add fruit. Please try again.');
    }
});

  

