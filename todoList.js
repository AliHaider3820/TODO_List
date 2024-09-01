const listDiv = document.getElementById("listElement");
const input1 = document.getElementById("text");
const list = document.createElement("ul");
listDiv.appendChild(list);
let count = 0;
    function fun1(){
        if(input1.value != ""){
        listDiv.style.display = "block";
        count++;
        const li = document.createElement("li");
        li.classList.add("li");
        list.appendChild(li);
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Remove";
    
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
    
        // Create a container for the checkbox and text
        const leftContainer = document.createElement("div");
        leftContainer.style.display = "flex";
        leftContainer.style.alignItems = "center"; // Align items vertically centered
    
        // Append checkbox and text to the left container
        leftContainer.appendChild(checkBox);
        leftContainer.appendChild(document.createTextNode(input1.value));
    
        // Append the left container to li
        li.appendChild(leftContainer);
    
        // Append the remove button to li (right side)
        li.appendChild(deleteButton);
    
        // Append li to the list
        list.appendChild(li);
        input1.value = "";
    
        deleteButton.addEventListener("click",function(){
            list.removeChild(li);
            count--;
            if(count == 0)
                listDiv.style.display = "none";
        })
        checkBox.addEventListener("click", function(){
            if(this.checked)
            leftContainer.style = "text-decoration-line: line-through;";
        else
        leftContainer.style = "text-decoration-line: none;";


        })
    }

    else
    alert("Enter your task.");
}
