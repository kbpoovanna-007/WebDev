function compute()
{
    var principal = document.getElementById("principal").value;


    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);

    var year = new Date().getFullYear()+years;

    var interest = (principal * rate * years) / 100;
    var sum= principal+interest;

    document.getElementById("result").innerHTML=interest+"<br/><br/>If you deposit "+principal+"<br/>at an interest rate of "+rate+"<br/>You will receive an amount of "+sum+"<br/>in the year "+year;
}

function check()
{
  var prince=document.getElementById("principal").value;
  if(prince<1)
  {
    alert("Enter right input");
  }
  prince.focus;
  return false;
}
