


const inputItem = document.getElementById('inputArea');

function additem(){
    if(inputItem.value == ""){
        document.getElementById('outPut').innerText = "Please enter a valid item name !!";
        document.getElementById('outPut').style.color = "red";

    
    }
    else{
        document.getElementById('outPut').innerText = "Your Item has been Added";
        document.getElementById('outPut').style.color = "green";
        document.getElementById('outlist').style.display = "block";

        const listItem = document.getElementById('olList');
        const newItem = document.createElement('li');
        newItem.innerText = inputItem.value;
        listItem.appendChild(newItem);

        
        const delButton = document.createElement('i');
        delButton.setAttribute(`class`, `fa-solid fa-trash-can`);
        newItem.appendChild(delButton);
        
        delButton.addEventListener('click', deletedItem);

        function deletedItem(){
            newItem.parentNode.removeChild(newItem);
        }

        const modifyButton = document.createElement('i');
        modifyButton.setAttribute(`class`, `fa-solid fa-pen-to-square`);
        newItem.appendChild(modifyButton);

        modifyButton.addEventListener('click', modifyItem);

        function modifyItem(){
            console.log('modify item button clicked');
            inputItem.value = newItem.innerText;
            newItem.parentNode.removeChild(newItem);
        }


        inputItem.value = "";
    }
}

