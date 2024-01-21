const data = [
   {
     "day": "mon",
     "amount": 17.45
   },
   {
     "day": "tue",
     "amount": 34.91
   },
   {
     "day": "wed",
     "amount": 52.36
   },
   {
     "day": "thu",
     "amount": 31.07
   },
   {
     "day": "fri",
     "amount": 23.39
   },
   {
     "day": "sat",
     "amount": 43.28
   },
   {
     "day": "sun",
     "amount": 25.48
   }
 ];

for (let i = 0; i < data.length; i++){
  let graphBox = document.querySelector(".graphs-box")
  let dayDiv = document.createElement('div');
  dayDiv.classList.add('day');

  let dayAmount = document.createElement('p')
  dayAmount.classList.add("day-amount");

  let dayPara = document.createElement('p');

  let graphDiv = document.createElement('div');
  graphDiv.classList.add("graph");

  dayAmount.textContent = '$' + data[i]["amount"];
  dayPara.textContent = data[i]['day'];

  let graphHeight = Math.floor(data[i]['amount'] * 3);
  console.log(graphHeight)
  
  graphDiv.style = `height: ${graphHeight}px`

  dayDiv.appendChild(dayAmount);
  dayDiv.appendChild(graphDiv);
  dayDiv.appendChild(dayPara);

  graphBox.appendChild(dayDiv)

  graphDiv.addEventListener("click", ()=>{
    graphDiv.classList.toggle("current-day")
    dayAmount.classList.toggle("current-day-amount")
  })
}

