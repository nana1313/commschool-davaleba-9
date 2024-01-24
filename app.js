// davaleba 1
let a = Number(prompt("შეიყვანე პირველი რიცხვი."));
let b = Number(prompt("შეიყვანე მეორე რიცხვი."));
alert(`ჯამი = ${a + b}; ნამრავლი = ${a * b}`);

// davaleba 2
alert(5 > 4);                  // true
alert("apple" > "pineapple");  //false
alert("2" > "12");             //true
alert(undefined == null);      //true
alert(undefined === null);     //false
alert(null == " 0 ");          //false
alert(null === + "0");         //fase

//davaleba 3
let username = prompt("შეიყვანეთ სახელი:") ;
if(username === "Admin"){
    let pass = prompt("შეიყვანეთ პაროლი:");
    if(pass === "TheMaster"){
        alert("Welcome!");
    }else if(pass === null || pass === ""){
        alert("Canceled");
    }else{
        alert("Wrong Password");
    }
}else if(username === null || username === ""){
    alert("Canceled");
}else{
    alert("I don't know you.");
}

//davaleba 4
alert(null || 2 || undefined);  // 2
alert(1 && null && 2);          // null
alert(null || 2 && 3 || 4);     // 3
alert(!1 && !2 || 3);           // 3

//davaleba 5 
 let date = Number(prompt("ჩაწერეთ წელი :"));
 if(date%400 == 0){
    alert(`${date} ნაკიანი წელიწადია`);
 }else{
    alert(`${date} არ რის ნაკიანი წელიწადი`);
 }