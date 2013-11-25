$(function(){
    //create a cart model as a simple object with
    //the properties we eventually need to post to
    //the server
    var cart = {
        name: null,
        address1: null,
        zip: null,
        phone: null,
        items: [], //empty array
        total: null
    }; //cart data

    //click event handler for all buttons with the
    //style class 'add-to-cart'
    $('.add-to-cart').click(function(){
        //use the attributes on the button to construct
        //a new cart item object that we can add to the
        //cart's items array
        var newCartItem = {
            type: this.getAttribute('data-type'),
            name: this.getAttribute('data-name'),
            size: this.getAttribute('data-size'),
            price: this.getAttribute('data-price')
        };

        //push the new item on to the items array
        cart.items.push(newCartItem);
    
        //render the cart's contents to the element
        //we're using to contain the cart information
        //note that you would need a <div> or some
        //other grouping element on the page that has a
        //style class of 'cart-container'
        renderCart(cart, $('.cart-container'));
    });

    $('.empty').click(function(){
        cart.items = [];
        renderCart(cart, $('.cart-container'));
    });

    $('.remove-item').click(function(){
        var idxToRemove = this.getAttribute('data-index');
        cart.items.splice(idxToRemove, 1);
        renderCart(cart, $('.cart-container'));
    });

   $('.submit-order').click(function(){
        //TODO: validate the cart to make sure all the required
        //properties have been filled out, and that the 
        //total order is greater than $20 (see homework 
        //instructions) 
        if(cart.total < 20) {
            alert("Please order at least $20");
        } else {
            cart.name = $('.name').val();
            cart.address1 = $('.address1').val();
            cart.zip = $('.zip').val();
            cart.phone = $('.phone').val();
            postCart(cart, $('.cart-form'));
        }
    });

}); //doc ready

// renderCart()
// renders the current cart information to the screen
// parameters are:
//  - cart (object) reference to the cart model
//  - container (jQuery object) reference to the container <div>
//
function renderCart(cart, container) {
    var idx, item;
    var total = 0;
    var template = $('.cart-item-template');
    var costs = $('.cart-footer');
    var instance;
    
    //empty the container of whatever is there currently
    container.empty();

    //for each item in the cart...
    for (idx = 0; idx < cart.items.length; ++idx) {
        instance = template.clone();
        //TODO: code to render the cart item
        instance.find('.title').html(item.name);
        instance.find('.price').html(item.price);
        subtotal += cart.item[idx].price;
        instance.removeClass('cart-item-template');
        container.append(instance);
    } //for each cart item

    //TODO: code to render sub-total price of the cart
    //the tax amount (see instructions), 
    //and the grand total
    var tax = 0;
    var grandtotal = 0;
    tax = (total * 0.095).toFixed(2);
    grandtotal = (total * 1.095).toFixed(2);
    costs.find('.tax').html("$" + tax);
    costs.find('.subtotal').html("$" + total);
    costs.find('.grandtotal').html("$" + grandtotal);
} //renderCart()

// postCart()
// posts the cart model to the server using
// the supplied HTML form
// parameters are:
//  - cart (object) reference to the cart model
//  - cartForm (jQuery object) reference to the HTML form
//
function postCart(cart, cartForm) {
    //find the input in the form that has the name of 'cart'    
    //and set it's value to a JSON representation of the cart model
    cartForm.find('input[name="cart"]').val(JSON.stringify(cart));
    //submit the form--this will navigate to an order confirmation page
    cartForm.submit();
} //postCart()