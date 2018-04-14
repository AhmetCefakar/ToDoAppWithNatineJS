
var itemList = ['item1', 'item2', 'item3', 'item4', 'item5']; // Initialize list.

var myListTag = document.querySelector('#mylist');

// Adding every items to UI list.
itemList.forEach(function (item) {
    // '<li class="list-group-item">' + item + '<span class="close">x</span></li>'
    CreateItem(item);
});

// Creating event adding to 'Add' button.
document.getElementById('btnCreate').onclick = function(){
    var newItem = document.querySelector('#txtInput').value;
    
    if(newItem === ''){
        alert('Please. Enter An Item Name');
        return;
    }
    else{
        CreateItem(newItem);
    }
}

// Adding Item function. This function used several location this 'JS' file.
function CreateItem(item){
    var li = document.createElement('li');
    var text = document.createTextNode(item);

    li.className = 'list-group-item';
    li.appendChild(text);

    myListTag.appendChild(li);
    
    var span = document.createElement('span');
    span.className = 'close';
    span.appendChild(document.createTextNode('x'));

    li.appendChild(span);

    // Adding an event listener for every li tag.
    li.addEventListener('click', function () {
        this.classList.toggle('checked');
        
        if(document.querySelectorAll('#mylist .checked').length <= 0){
           document.getElementById('deleteAll').style.display = 'none';
        }
        else{
            document.getElementById('deleteAll').style.display = 'block';
        }
    });
    
    //  Adding an event listener for every 'X' close button.
    span.onclick = function(){
        var liParent = this.parentElement;
        liParent.remove();
        //liParent.style.display = 'none';
    };
}

// Adding delete all items button.
document.querySelector('#deleteAll').onclick = function(){
    var DeletedItems = document.querySelectorAll('#mylist .checked');

    if(DeletedItems.length <= 0){
        alert('You have to select several items for delete!');
        document.getElementById('deleteAll').style.display = 'none';
    }
    else{
        DeletedItems.forEach(function(item){item.remove();});
        document.getElementById('deleteAll').style.display = 'none';
    }
}
