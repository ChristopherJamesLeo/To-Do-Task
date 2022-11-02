console.log("hello world");
const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const deleteBtns = document.querySelectorAll(".delete");
const getDate = document.querySelector(".date");


let dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let MonthArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]



let day = new Date().getDay(); // wednesday;
let date = new Date().getDate(); // 1 tp 30
let month = new Date().getMonth();
let year = new Date().getUTCFullYear();
// console.log(day,date,month,year);

let setDate = `${dayArr[day]} , ${MonthArr[month]} , ${year} ( ${date}-${month+1}-${year} )`;

getDate.innerText = setDate;




addForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // form အတွင်းရှိ element များအား name ဖြင့် ခေါ်ယူ၍ ရသည် 
    const todo = addForm.add.value.trim(); // trim() သည် string များ၏ လွတ်နေသောနေရာအား "     hello" ဖယ်ထုတ်ပေးရ၍ "hello" တစ်လုံးတည်းသာထွက်လာစေသည်
    if(todo.length != 0){
        generateTemplate(todo);
        addForm.reset();
    }else{
        alert("Please Input Task")
    }
})

const generateTemplate = (todo) => {
    // const liTag = document.createElement("li");
    // liTag.classList.add("list-group-item", "d-flex" ,"justify-content-between", "text-aligns-center")
    // const spanTag = document.createElement("span");
    // spanTag.textContent = todo;
    // const iTag = document.createElement("i");
    // iTag.className = "fas fa-trash-alt delete";
    // let spanDate = document.createElement("span");
    // spanDate.classList.add("insetDate");
    // spanDate.innerText = `${date}-${month+1}-${year}`;
    // liTag.appendChild(spanTag);
    // liTag.appendChild(spanDate);
    // liTag.appendChild(iTag);
    // list.appendChild(liTag);
    let liTagHtml =`<li class="list-group-item d-flex justify-content-between text-aligns-center">
                    <span>${todo}</span>
                    <span class="insetDate">(${date}-${month+1}-${year})</span>
                    <i class="fas fa-trash-alt delete"></i>
                    </li>`;
    // // list.innerHTML = liTagHtml; // တစ်ခုတည်းပြောင်းပေးနေမည်ဖြစ်သည်
    list.innerHTML += liTagHtml; // ထပ်ခါထပ်ခါပေါင်းထည့်နေမည်ဖြစ်သည်

    // list များသည် functin run ပြီးမှသာ ဝင်လာမည်ဖြစ်သောကြောင့် ၎င်း list များအား လိုချင် အသုံးပြုချင်ပါက လက်ရှိ တည်ဆောက်ထားသော function အတွင်းတွင်သာ ခေါ်ယူအသုံးပြုရမည် 

    let oddLists = document.querySelectorAll(".list-group-item:nth-child(odd)");

    oddLists.forEach(function(oddList){
        oddList.style.backgroundColor = "#f4f4f4";
    })
    let evenLists = document.querySelectorAll(".list-group-item:nth-child(even)");
    for(let i = 0 ; i < evenLists.length ; i++){
        evenLists[i].style.backgroundColor = "#eee";
    }

}

// delete button သည် js မှ လှမ်းထည့်ထားသောကြောင့် querySelectorAll  ဖြင့် ခေါ်ဆို၍ မရဘဲ class list စစ်ပြီမှသာ ဖျက်ယူနိုင်မည်
// 
list.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        console.log("remove")
    }
})

const getClearAll = document.querySelector(".delete-All")
getClearAll.addEventListener("click",(e)=>{
    var listArr = Array.from(list.children);
    listArr.forEach((lists)=>{
        lists.remove();
    })
    // for(let i = 0 ; i < listArr.length ; i++){
    //     listArr[i].remove();
    // }
})



