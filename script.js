
let operEle=document.getElementById("oper"),ranNum1,ranNum2,oper;
operVal=document.getElementById("oper").value,
rangeEle=document.getElementById("rang"),
rangeVal=rangeEle.value,
prblmsEle=document.getElementsByClassName("problems")[0],
ranNumGen=(rng)=>{
    rng=parseInt(rng);
    let ran=Math.ceil(Math.random()*rng);
    console.log(ran);
    return ran;
},
reset=()=>{
    prblmsEle.innerHTML="";
},
txtsym=(operVal)=>{
    switch (operVal){
        case 'add':return ('+');
        case 'sub':return ('-');
        case 'mul':return ('*');
        default:return ('/');
    }
};
prblmUpdate=(num1,num2,oper)=>{
    reset();

    // Creating Elements 

    let newPrblm=document.createElement("div");
    newPrblm.setAttribute("class","problem");

    let num1Ele=document.createElement("h4");
    num1Ele.innerHTML=num1;

    let operationEle=document.createElement('h4')
    operationEle.innerHTML=txtsym(operVal);

    let num2Ele=document.createElement("h4");
    num2Ele.innerHTML=num2;

    let inpEle=document.createElement("input"),
    hrEle=document.createElement('hr');
    inpEle.setAttribute("class","ans-inp");
    inpEle.setAttribute('type','text');
    
    // Appending elements to the parent Element
    newPrblm.append(num1Ele);
    newPrblm.append(operationEle);
    newPrblm.append(num2Ele);
    newPrblm.append(hrEle);
    newPrblm.append(inpEle);
    newPrblm.append(hrEle);

    prblmsEle.append(newPrblm);

},

startBtn=document.getElementById("inp-start");
startBtn.addEventListener("click",()=> {
    for(i=0;i<16;i++){
        ranNum1=ranNumGen(rangeVal);
        ranNum2=ranNumGen(rangeVal);
        prblmUpdate(ranNum1,ranNum2,operEle);
    }
})
