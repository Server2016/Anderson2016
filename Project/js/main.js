
var wel = ['Земля', 'Огонь','Воздух', 'Вода'];

var ref = {
    availableItems: document.getElementById('availableItems'),
    craftingTable: document.getElementById('craftingTable'),
    inputItem: document.getElementById('inputItem'),
    add: document.getElementById('add'),
    button: document.getElementById('button'),
    result: document.getElementById('result'),
    craftButton: document.getElementById('craftButton')


};

function app (value) {
    wel.push(value);
}
function getItems () {
    return wel;
}
var a = 0;

function renderItems () {
    items = wel;
   ref.availableItems.innerHTML = '';
    ref.add.value = '';
    for (var i = 0; i < items.length; i++) {
        putItem(items[i]);
    }
}
renderItems();

ref.button.addEventListener('click', addPart);
ref.availableItems.addEventListener('drop', drop);
ref.availableItems.addEventListener('dragover', dragOver);
ref.craftingTable.addEventListener('drop', drop);
ref.craftingTable.addEventListener('dragover', dragOver);
ref.craftButton.addEventListener('click', craft);


function putItem (itemName) {
    var b = document.createElement('span');
    b.id = 'el' + a;
    b.className = 'element';
    b.setAttribute('draggable', true);
    b.ondragstart = drag;
    b.innerHTML = itemName;
    ref.availableItems.appendChild(b);
    a++;
}

ref.button.addEventListener('click', addPart);

function addPart () {
    var value = ref.add.value;
    if (value.length != 0) {
        app(value);
        renderItems();
    }
}
function dragOver(ev){
    ev.preventDefault();
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    var id = ev.dataTransfer.getData("text");
    if (ev.target.id == 'availableItems' ||
        ev.target.id == 'craftingTable') {
        ev.target.appendChild(document.getElementById(id));
    }

}

function craft () {
    ref.result.innerHTML = '';
    var elem = ref.craftingTable.querySelectorAll('span');
    if (elem.length) {
        var arrayItems = [];
        
        for (var i = 0; i < elem.length; i++) {
            arrayItems.push(elem[i].innerHTML);
        }

        var outputResult = making.doCraft(arrayItems);

        if (outputResult !== 0) {

            app(outputResult);	
            renderItems();	

        } else {
            ref.result.innerHTML = 'Неверный рецепт!';
        }

    }
}


