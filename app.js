
// Logic to fill the table

let tb = document.querySelector("table")
let data = localStorage.getItem("passwords")

if(data == null){
    tb.innerHTML = "No Data To Show";
}
else{

let arr = JSON.parse(data);
let str = "";
for (let index = 0; index < array.length; index++) {
    const element = arr[index];
    


str = ` <tr>
<td>${element.Website}</td>
<td>${element.Username}</td>
<td>${element.Password}</td>
<td>${"Delete"}</td>
</tr>
`

}
tb.innerHTML = tb.innerHTML + str
}

// ....................my code .........................

let btn = document.querySelector(".btn");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked");
    console.log(username.value,password.value);
    let passwords = localStorage.getItem("passwords");
    console.log(passwords);
    if(passwords == null){
        let json = [];
        json.push({username:username.value,password:password.value});
        alert("Password saved");
        localStorage.setItem("passwords",JSON.stringify(json));
    }

    else{
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({username:username.value,password:password.value});
        alert("Password saved");
        localStorage.setItem("passwords",JSON.stringify(json));
        
    }

})











