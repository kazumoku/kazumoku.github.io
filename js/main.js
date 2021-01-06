"use strict"
{
const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
//  const results=["大吉","中吉","凶","末吉"];
//  btn.innerHTML= results[Math.floor(Math.random()*results.length)];
const n= Math.random();
if(n <0.05){
  btn.innerHTML="大吉";
}else if(n <0.2){
  btn.innerHTML="中吉";
}else{
  btn.innerHTML="凶";
};
});

}