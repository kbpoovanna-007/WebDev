
var i=0;

while(i<4)
{
  const btn = document.querySelectorAll(".wrong")[i];
  btn.addEventListener("click",function onClick()
  {
    btn.style.backgroundColor="red";
    document.querySelectorAll("#part1")[0].innerHTML="WRONG.....!";

  }
  )
  i+=1;
}

document.querySelectorAll(".right")[0].addEventListener("click",function()
{
  document.querySelectorAll("#part1")[0].innerHTML="RIGHT.....!";
  document.querySelectorAll(".right")[0].style.backgroundColor="green";
}
)



const inp = document.getElementById("button2");
inp.addEventListener("click",function()
{
  var b=document.getElementById("ans2");

  if(b.value!="Switzerland")
  {
    b.style.color="red";
    inp.style.backgroundColor="red";
      document.querySelectorAll("#part2")[0].innerHTML="WRONG.....!";
  }
  else
  {
    b.style.color="green";
    inp.style.backgroundColor="green";
    document.querySelectorAll("#part2")[0].innerHTML="RIGHT.....!";
  }
})
