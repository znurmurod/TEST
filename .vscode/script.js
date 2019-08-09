'usestrict';



let money = +prompt("Ваш бюджет за месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
   finance: money,
   timeData: time,
   expenses: {},
   optionalexpenses: {},
   income: [],
   savings: false

};


// for (let i = 0; i < 2; i++) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//    let b = +prompt("Во сколько обойдется?", "");

//    if (typeof(a) === 'string' && typeof (a) != null && a != '' && a.length < 50 &&
//       typeof(b) != null && b != '') {
//       console.log("DONE");
//       appData.expenses[a] = b;

//    } else {
//       i--;  
// }
// }
let i = 0;
do{
   let a = prompt("Введите обязательную статью расходов в этом месяце", "");
   let b = +prompt("Во сколько обойдется?", "");

   if (typeof (a) === 'string' && typeof (a) != null && a != '' && a.length < 50 &&
      typeof (b) != null && b != '') {
      console.log("DONE");
      appData.expenses[a] = b;
      i++;
         } 
}
while (i < 2) 
   


appData.Permoney = appData.finance / 30;
alert("Ваш бюджет за день=" + appData.Permoney);

if (appData.Permoney < 100) {
   console.log("Small profit");
} else if (appData.Permoney > 100 && appData.Permoney < 1000) {
   console.log("Average profit");
} else {
   console.log("NaN");
}