// change text of button when clicked
document.getElementById('button').addEventListener('click', function() 
{
    this.innerText = 'Text changed!';
});

// change all list items to the color blue when one item is clicked 
var listItems = document.querySelectorAll('#list li');
listItems.forEach(function(item) {
  item.addEventListener('click', function() {
    listItems.forEach(function(li) {
      li.style.color = 'blue'; 
    });
  });
});

// append a new praragraph with text when button is clicked
document.getElementById('appendParagraph').addEventListener('click', function()
{   
    var containerDiv = document.getElementById('container'); 
    var newParagraph = document.createElement('p'); 
    newParagraph.innerText = 'New paragraph created!'; 
    containerDiv.appendChild(newParagraph); 
}); 