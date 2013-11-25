$(function(){
    renderPizza(com.dawgpizza.menu);
    renderDrinks(com.dawgpizza.menu);
    renderDesserts(com.dawgpizza.menu);
}); // on doc ready 

function renderPizza(entry) {
    var idx;
    var pizza;
    var template = $('.pizza');
    var container = $('.pizzas');
    container.empty();
    var instance;
    for (idx = 0; idx < entry.pizzas.length; ++idx) {
        pizza = entry.pizzas[idx];
        instance = template.clone();
        instance.find('.name').html(pizza.name);
        instance.find('.description').html(pizza.description);

        instance.find('.prices').html("($" + pizza.prices[0] + "/" + pizza.prices[1] + "/" + pizza.prices[2] + ")");
        instance.find('.sm').attr({
            'data-type': pizza.type,
            'data-name': pizza.name,
            'data-size': 'small',
            'data-price': pizza.prices[0]
        });
        instance.find('.md').attr({
            'data-type': pizza.type,
            'data-name': pizza.name,
            'data-size': 'medium',
            'data-price': pizza.prices[1]
        });
        instance.find('.lg').attr({
            'data-type': pizza.type,
            'data-name': pizza.name,
            'data-size': 'large',
            'data-price': pizza.prices[2]
        });

        instance.removeClass('template');
        container.append(instance);
    } //for each pizza
}

function renderDrinks(entry) {
    var idx;
    var drink;
    var template = $('.drink');
    var container = $('.drinks');
    var instance;
    container.empty();
    for (idx = 0; idx < entry.drinks.length; ++idx) {
        drink = entry.drinks[idx];
        instance = template.clone();
        instance.find('.name').html(drink.name);
        instance.find('.price').html("$" + drink.price);
        instance.find('.add-other').attr({
            'data-name': drink.name,
            'data-price': drink.price
        });
        instance.removeClass('template');
        container.append(instance);
    } //for each drink
}

function renderDesserts(entry) {
    var idx;
    var dessert;
    var template = $('.dessert');
    var container = $('.desserts');
    var instance;
    container.empty();
    for (idx = 0; idx < entry.desserts.length; ++idx) {
        dessert = entry.desserts[idx];
        instance = template.clone();
        instance.find('.name').html(dessert.name);
        instance.find('.price').html("$" + dessert.price);
        instance.find('.add-other').attr({
            'data-name': dessert.name,
            'data-price': dessert.price
        });
        instance.removeClass('template');
        container.append(instance);
    } //for each dessert
}