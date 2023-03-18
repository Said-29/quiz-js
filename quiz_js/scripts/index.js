const card_body1 = document.getElementsByClassName("card-body1");
const card_body2 = document.getElementsByClassName("card-body2");
const card_body3 = document.getElementsByClassName("card-body3");

fetch('./json/plan.json')
  .then(response => response.json())
  .then(data => {
    let dic = [card_body1, card_body2, card_body3];

    console.log(data);

    for(let i = 0; i < data.length; i++){

    }
  });


