//create basic list of meals
const meals =[
  'Leek pie',
  'Chicken wraps',
  'Brocolli soup',
  'Fish pie',
  'Green bean salad',
  'Fish fingers',
  'Cod papillottes',
  'Grilled cauliflower',
  'Spinach pie',
  'Bunny chow',
  'Stirfry and rice',
  'Pasta with meatballs',
  'Grilled courgette',
  'Homemade pizza',
  'Veggies and potatoes from the oven',
  'Stuffed aubergine'
];

const weekPlanButton = document.createElement('BUTTON');
const weekPlanText = document.createTextNode('Create 7 day mealplan');
const mealPlan = document.getElementById('mealplan').innerHTML;

let counter = 0;

//Generate 7 random meals from array
document.getElementById('mealplan').textContent = 'Some text in this div can also go here.';

for (i = 0; i < 7; i++) {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)]
  document.write('<li>Meal: ' + randomMeal + '.</li>');
  counter += 1;
}

//Create a button that generates the mealplan - actually a refresh page button
weekPlanButton.appendChild(weekPlanText);
document.body.appendChild(weekPlanButton);

weekPlanButton.addEventListener ('click', function(){
  location.reload();
});
