// enables burger icon to be clicked when screen size is tablet or smaller and will drop down the previously hidden items
$("#burger").click(function(){
    $("ul").slideToggle();
    $("ul ul").css("display", "none");
});

// enables drop down items to work when burger is in place
$("ul li").click(function(){
    $("ul ul").slideUp();
    $(this).find('ul').slideToggle();
});

// prevents nav bar disapearing if window is shrunk below 768 and then increased above it
$(window).resize(function(){
    if($(window).width() > 768){
        $("ul").removeAttr('style');
    }
});


// checkout functons
// constantly adds to local storage when user requests to add to the cart
// takes item name and price from html upon submit button press and adds item name to receipt list and price to totalPrice 
function addItem(itemName, price){
    localStorage.setItem(itemName, price);
    alert(itemName + " was added to your cart. Proceed to checkout to continue confirm purchase or continue shopping");
}




// loops through printing each key and value in local storage
//for(var i=0; i < localStorage.length; i++){
//    $('#checkout-para').append(localStorage.getItem(localStorage.key(i)));
//    $('#checkout-papa').append(localStorage.key(i));
//}

var fullTotal = 0; // starts total at zero

// will reveal the total to the user on the checkout page
function showTotal(){
    // loops through each key in the local storage
    for(var i=0; i < localStorage.length; i++){
        fullTotal += parseInt(localStorage.getItem(localStorage.key(i))); //adds each value to the fullTotal
    }
    $('#checkout-total').append(fullTotal); // updates the total on the chekcout html page
}

// only allows button to be pressed once, otherwise the user could potentially end up viewing an incorrect value
$('#show-total-btn').on('click', function(){
    $(this).prop('disabled', true);
});

// clears local storage and refreshes page
function clearStorage(){
    localStorage.clear(); //clears the local storage
    location.reload();
}

//Paint app code:

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.lineWidth = 5;
var down = false;

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', function(){
    // these 4 lines will run when the mouse button is down
    down = true;
    context.beginPath();
    context.moveTo(xPos, yPos);
    canvas.addEventListener('mousemove', draw);
});

canvas.addEventListener('mouseup', function(){
    down = false;
});  /* when the mouse button is released, the value of 'down' variable will be set to 'false' therefore the line will stop drawing */




function draw(e){
    xPos = e.clientX - canvas.offsetLeft;
    yPos = e.clientY - canvas.offsetTop;

    if(down == true){
        context.lineTo(xPos, yPos);
        context.stroke();
    }
}


/* swaps the drawing color by taking the specific color of the button as a parameter into the function(given in create.html) */
function changeColor(color){
    context.strokeStyle = color;
}

/* clears the canvas */
function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}
