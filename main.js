let btn = document.getElementById("btn");
let taskList = document.getElementById("taskList");
let inputval = document.getElementById("userInput")

btn.onclick =    
function addTask(){
    console.log("hi")
if(inputval.value == ""){
    taskList.innerHTML= `<span class="alert">Nothing added</span>`;

}else{
    taskList.innerHTML =taskList.innerHTML+`<div class="task">
    <span id="work">${inputval.value}</span>
    <button class="delBtn" ><i class="fa fa-trash" aria-hidden="true"></i></button>
</div>`


let del = document.querySelectorAll(".delBtn");

for(i =0 ; i < del.length ; i++){
    del[i].onclick = function(){
        this.parentNode.remove() 
        
    }
  
}
inputval.value = "" ;
}
 }


