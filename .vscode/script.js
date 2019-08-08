
'usestrict';

     function Cars (make,model,year,owner)
     {
        this.make = make;
        this.model = model;
        this.year = year;
        this.owner = owner;


     }
    function Person(name,surname,sex) 
    {
        this.name = name;
        this.surname = surname;
        this.sex = sex;
        
    }

    let Murod = new Person ("Nurmurod", "Zakirov", "M");
    let myfriend = new Person ("Rihsiboy", "Toirov", "M");
    let Mycar = new Cars("Chevrole", "Nexia",2017,Murod);
    let Hiscar = new Cars("Chevrole", "Lacetti",2019,myfriend);
    
    Mycar.color = "White";
    Cars.prototype.color = null;
    Mycar.color = "Black";
    Hiscar.color = "Yellow";
    console.log(Mycar.owner.surname);
    console.log(Mycar.owner.sex);
    


  


    
    


  