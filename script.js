var itemList = ['item1', 'item2', 'item3', 'item4', 'item5']; // Initialize list.

var myListTag = document.querySelector('#mylist');

itemList.forEach(function(item){
    // '<li class="list-group-item">' + item + '<span class="close">x</span></li>'
    var li = document.createElement('li');
    var text = document.createTextNode(item);

    li.className = 'list-group-item';
    li.appendChild(text);

    myListTag.appendChild(li);
    
    var span = document.createElement('span');
    span.className = 'close';
    span.appendChild(document.createTextNode('x'));

    li.appendChild(span);

    // Add an event listener for every li tag.
    li.addEventListener('click',function(){
        this.classList.toggle('checked');
    });
});

