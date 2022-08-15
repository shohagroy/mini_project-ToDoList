


const inputItem = document.getElementById('inputArea');




function additem(){
    if(inputItem.value == ""){
        document.getElementById('outPut').innerText = "Please enter a valid item name !!";
    
    }
    else{
        document.getElementById('outPut').innerText = "Your Item has been Added";
        document.getElementById('outPut').style.color = "green"
        document.getElementById('outlist').style.display = "block"

        const listItem = document.getElementById('olList');
        const newItem = document.createElement('li');
        newItem.innerText = inputItem.value;
        listItem.appendChild(newItem);

        inputItem.value = "";
    }
}
