let newGoal = '';
let goalList = document.querySelector("#todoList");
const getNewGoal = (e) => {
    // console.log(e.target.value);
    newGoal = e.target.value;
}
let index = 0;
const addTodo = () => {
    if (newGoal != "") {
        // console.log("new",newGoal);
        let li = document.createElement('li');
        let listText = document.createElement('span');
        listText.innerHTML = newGoal;
        let icon = document.createElement('img');
        icon.src = "../Asset/cross.png";
        icon.classList.add("cross_icon");
        // icon.setAttribute("id","delete_item");
        icon.setAttribute("onclick", "deleteItem(this.parentNode)")

        li.appendChild(listText);
        li.appendChild(icon);

        li.setAttribute("class", "goal_items")
        goalList.appendChild(li);

        document.querySelector(".goal_head").style.display = "block";
        document.getElementById("todo_input").value = "";
        newGoal="";
    }
}


function deleteItem(e) {
    goalList.removeChild(e)
    if(goalList.childNodes.length==1){
        document.querySelector(".goal_head").style.display = "none";
    }
}
