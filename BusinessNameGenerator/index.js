function adjective(){
    const random1=Math.floor((Math.random() * 3) + 1);
    if (random1 === 1) {
      return "Crazy";
    } else if (random1 === 2) {
      return "Amazing";
    } else if (random1 === 3) {
      return "Fire";
    }
  }

 function ShopName(){
    const random2=Math.floor((Math.random() * 3) + 1);
    if (random2 === 1) {
      return "Engine";
    } else if (random2 === 2) {
      return "Foods";
    } else if (random2 === 3) {
      return "Garments";
    }
  } 


  function another(){
    const random3=Math.floor((Math.random() * 3) + 1);
    if (random3 === 1) {
      return "Bros";
    } else if (random3 === 2) {
      return "Limited";
    } else if (random3 === 3) {
      return "Hub";
    }
  } 
  let adj= adjective();
  let shop=ShopName();
  let lastWord=another();
  console.log("Business Name is:",adj+" "+shop+" "+lastWord)



