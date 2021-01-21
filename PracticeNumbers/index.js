var totalTile = (width, height, cost) => width*height*cost;
var taxCalculator = (cost, tax) => cost + cost*tax;
var findPi = dPlaces => {
    dPlaces = Number.parseInt(dPlaces);
    let pi
    if(dPlaces > 15)
    {
        document.getElementById('pi').textContent = "Limited"; 
    }else{
    pi = Math.round((Math.PI) * 10**dPlaces) / 10**dPlaces;
    document.getElementById('pi').innerHTML = pi;
    }
}
var findE = dPlaces => {
    dPlaces = Number.parseInt(dPlaces);
    let e;
    if(dPlaces > 15)
    {
        document.getElementById('e').textContent = "Limited"; 
    }else{
        e = Math.round((Math.E) * 10**dPlaces) / 10**dPlaces;
        document.getElementById('e').innerHTML = e;
    }
}
var fiboncci = n =>{
    n = Number.parseInt(n)
    const a =[]
    a[0]=1;
    a[1]=1;
    for(let i = 2; i<n; i++ )
    {
        a[i]=a[i-1]+a[i-2];
    }
    document.getElementById('fiboncci').textContent = a;
}
var prime = interger =>{
    interger = Number.parseInt(interger);
    const a =[];
    let isPrime = true;
    for(let i = 2; i <= interger; i++)
    {
        if(interger%i == 0)
        {
            for(let j=2; j <= i/2; j++)
            {
                if(i%j == 0)
                {
                    isPrime = false;
                }
                else
                {
                    isPrime = true;
                }
            }
            if(isPrime == true)
            {
                a.push(i);
                interger = interger/i;
                i = 1;
            }
        }
    }
    document.getElementById('prime').textContent = a;
}
var binarytoDecimal = binary => {
    let check = true;
    let binaryCheck = binary;
    binary = Number.parseInt(binary);
    Number.isInteger(binary) == false && (check = false)
    while (binaryCheck > 0 )
    {
        if(binaryCheck % 10 >1)
        {
            check = false;
            break;
        }
        binaryCheck = Math.floor(binaryCheck/10);
    }
    binary =  parseInt(binary,2)
    if(check == false){
        document.getElementById('btoD').textContent = "Type error";
    }else{
        document.getElementById('btoD').textContent = binary;
    }
}
var decimaltoBinary = decimal => {
    let check = true;
    decimal = Number.parseInt(decimal);
    Number.isInteger(decimal) == false && (check = false)
    decimal = parseInt(Number(decimal).toString(2));
    if(check == false){
        document.getElementById('dtoB').textContent = "Type error";
    }else{
        document.getElementById('dtoB').textContent = decimal;
    }
}
var factorial = n =>{
    let fac = 1;
    for(let i = 1; i<=n; i++)
    {
        fac = fac * i;
    }
    return fac
} 
var addition = (a1,b1,a2,b2) =>{
    let a=a1+a2;
    let b=b1+b2; 
    return a + "+" + b+"i"
}
var multiplication = (a1,b1,a2,b2) =>{
    let a=a1*a2-b1*b2;
    let b=a1*b2+a2*b1; 
    return a + "+" + b+"i"
}
var negation = (a,b) =>{
    a = -a;
    b = -b;
    return a + "+" + b+"i"
}
var happyNumber = number =>{
    let arr =[];
    let a = number;
    let squares = 0;
    while(number>0)
    {
        arr.push(number%10);
        number = Math.floor(number/10);
    }
    for(let i =0; i<arr.length; i++)
    {
        squares = squares + arr[i]**2;
    }
    while(a>0)
    {
        a = a - squares;
    }
    return a+squares;
}
var coinFlip = () => Math.ceil(Math.random()*2);
var exponentiation = (a,b) => Math.pow(a,b);
var collatz = numberStart => {
    let steps = 0;
    let a = [];
    numberStart = Number.parseInt(numberStart);
    while(numberStart > 1)
    {
        if(numberStart%2==0){
            numberStart = numberStart/2;
        }
        else{
            numberStart = numberStart*3+1;
        }
        steps = steps + 1;
        a.push(numberStart);
    }
    document.getElementById('arrNumber').textContent = a;
    document.getElementById('steps').textContent = "Steps: "+steps;
}
var dateTime = () =>{
    let today = new Date();
    let day = today.getDay();
    const dayList = ["Sunday", "Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Satarday"];
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let dd = today.getDay();
    let mm = today.getMonth()+ 1;
    let yyyy = today.getFullYear();
    dd < 10 && (dd ="0"+dd);
    mm < 10 && (mm ="0"+mm);
    hour <10 && (hour ="0"+hour);
    minute <10 && (minute ="0"+minute);
    second <10 && (second ="0"+second);
    document.getElementById("date").innerHTML = "Today is: "+dayList[day] +" "+dd+"/"+mm+"/"+yyyy;
    document.getElementById("time").innerHTML = "Current time: "+hour+":"+minute+":"+second;
}

var areaofTriangle = (a,b,c) =>{
    a = Number.parseInt(a);
    b = Number.parseInt(b);
    c = Number.parseInt(c);
    let p = (a + b + c)/2;
    let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    document.getElementById("area").innerHTML = "Area of triangle: "+S;
}

var anima = id =>{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.textContent;
    setInterval(()=>{
    text = text[text.length-1]+text.substring(0,text.length-1);
    textNode.textContent = text;
    },100)
}