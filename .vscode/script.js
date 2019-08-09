
'usestrict';

   let time;
   let money;
 
   
   let expenses = {
 
    firstQuestion: "",
    secondQuestion: ""

   };
   let appData =  {
       finance:money,
      timeData:time,
      expenses: expenses,
      optionalexpenses: null ,
      income: [],
      savings: false
   
   };

     money = prompt("Ваш бюджет за месяц","");
     time = prompt("Введите дату в формате YYYY-MM-DD","");
    expenses.firstQuestion = prompt("Введите обязательную статью расходов в этом месяце","");
    expenses.secondQuestion = +prompt("Во сколько обойдется?","");
     
    let x = money/30;

    alert("Ваш бюджет за день="+x);
    

    


  