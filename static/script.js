// making object for input display
let displaySpace = document.querySelector(".display");

// making variable to check if favorite button has been clicked before
let clicked = false;

// function to add clicked number to input display
function display(value)
{
    displaySpace.value += value;
}

// function to clear display when call button is clicked
function clearDisplay()
{
    displaySpace.value = "";
}

// function to remove last entered digit
function backspace()
{
    displaySpace.value = displaySpace.value.substr(0, displaySpace.value.length - 1);
    console.log('click1');
}

function fav()
{
    // making object variable for favorite/star button
    starIcon = document.querySelector("#star");

    // check if button hasn't been clicked before
    if(clicked == false)
    {
        // change favorite/star icon to filled
        starIcon.innerHTML = "<i class='fas fa-star'></i>";
        clicked = true;

        // change input display text font color to golden
        displaySpace.style.color = "#F2AF29";
    }
    else
    {
        //button not clicked before

        clicked = false;

        // change icon to empty star        
        starIcon.innerHTML = "<i class='far fa-star'></i>";

        //changing input display text font color back to white
        displaySpace.style.color = "white";
    }
}