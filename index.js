
var burgers = ['Hamburger', 'Cheeseburger'];
var featuredDrink = 'Strawberry Milkshake';

//  Function and Block
function addBurger() {
    var newBurger = 'Flatburger'; 
    burgers.push(newBurger);
}

// Variable Declaration and Scope
if (true) {
    let anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);

    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake';
    }
    console.log('Inside block - Featured Drink:', featuredDrink);}