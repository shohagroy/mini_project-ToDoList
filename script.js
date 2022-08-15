


const inputItem = document.getElementById('inputArea');

function additem() {
    if (inputItem.value == "") {
        document.getElementById('outPut').innerText = "Please enter a valid item name !!";
        document.getElementById('outPut').style.color = "red";


    }
    else {
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


        function deletedItem() {
            newItem.parentNode.removeChild(newItem);
            document.getElementById('outPut').innerText = `Your 1 Item has been Removed.!`;
            document.getElementById('outPut').style.color = "red";
        }

        const modifyButton = document.createElement('i');
        modifyButton.setAttribute(`class`, `fa-solid fa-pen-to-square`);
        newItem.appendChild(modifyButton);

        modifyButton.addEventListener('click', modifyItem);

        function modifyItem() {
            inputItem.value = newItem.innerText;
            newItem.parentNode.removeChild(newItem);
        }

        const totalList = document.getElementsByTagName('li');
        const allitem = totalList.length;

        document.getElementById('outPut').innerText = `Your ${allitem} Item has been Added .!!`;

        inputItem.value = "";
    }
}
