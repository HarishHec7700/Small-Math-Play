
let operEle=document.getElementById("oper"),ranNum1,ranNum2,oper;
operVal=operEle.value,
rangeEle=document.getElementById("rang"),
rangeVal=rangeEle.value,
prblmsEle=document.getElementsByClassName("problems")[0],
ranNumGen=(rng)=>{
    rng=parseInt(rng);
    let ran=Math.ceil(Math.random()*rng);
    // console.log(ran);
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
    num1Ele.setAttribute('class','head1')

    let operationEle=document.createElement('h4')
    operationEle.innerHTML=txtsym(oper);
    operationEle.setAttribute('class','operate')


    let num2Ele=document.createElement("h4");
    num2Ele.innerHTML=num2;
    num2Ele.setAttribute('class','head2')
    var hrEle1=document.createElement('hr');

    let inpEle=document.createElement("input");
    let hrEle=document.createElement('hr');
    inpEle.setAttribute("class","ans-inp");
    inpEle.setAttribute('type','text');
    
    // Appending elements to the parent Element
    newPrblm.append(num1Ele);
    newPrblm.append(operationEle);
    newPrblm.append(num2Ele);
    newPrblm.append(hrEle1);
    newPrblm.append(inpEle);
    newPrblm.append(hrEle);

    prblmsEle.append(newPrblm);

},

startBtn=document.getElementById("inp-start");
startBtn.addEventListener("click",()=> {
    if(operVal!=="divide"){
       for(i=1;i<=16;i++){
        ranNum1=ranNumGen(rangeVal);
        ranNum2=ranNumGen(rangeVal);
        prblmUpdate(ranNum1,ranNum2,operVal);
    }
}
});
let checkEle=document.getElementById('ans-check');
checkEle.addEventListener('click',()=>{
    var problemEles,problemEle,operationEle,operationVal,mark=0,num1Ele,num1Val,num2Ele,num2Val,expAns,resInpVal;
    problemEles=document.getElementsByClassName('problems');
    for(i=0;i<problemEles.length;i++){
        problemEle=problemEles[i];
        operationEle=problemEle.getElementsByClassName('operate')[0];
        num1Ele=problemEle.getElementsByClassName('head1')[0];
        num2Ele=problemEle.getElementsByClassName('head2')[0];
        operationVal=operationEle.innerHTML;
        console.log(operationVal);
        num1Val=parseInt(num1Ele.innerHTML);
        console.log(num1Val);
        num2Val=parseInt(num2Ele.innerHTML);
        console.log(num2Val);
        // Expected Answer
        if(operationVal=="+")
            expAns=num1Val+num2Val;
        else if(operationVal=="-")
            expAns=num1Val-num2Val;
        else if(operationVal=="*")
            expAns=num1Val*num2Val;
        else
            expAns=num1Val/num2Val;  
        // console.log(expAns);    
        resInpVal=parseInt(problemEle.getElementsByClassName('ans-inp')[0].value);    
        if(resInpVal==expAns){
            mark++;
        }
        console.log(mark);
        alert("your Score is "+mark);
    }
})

