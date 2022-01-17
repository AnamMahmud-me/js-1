function myFunction(){
  var name = document.getElementById('studentName').value;
  var x1 = Number(document.getElementById('mark1').value);
  var x2 = Number(document.getElementById('mark2').value);
  var x3 = Number(document.getElementById('mark3').value);
 
  var total = Number(x1 + x2 + x3);
  var average_mark = Number(total/3);
  
  document.getElementById("name").innerHTML = name;
  document.getElementById("total_mark").innerHTML = total;

  if(x1>=80){
      document.getElementById("bangla_mark").innerHTML = 5;
  }
  else if(x1>=70){
      document.getElementById("bangla_mark").innerHTML = 4;
  }
  else if(x1>=60){
      document.getElementById("bangla_mark").innerHTML = 3.50;
  }
  else if(x1>=50){
      document.getElementById("bangla_mark").innerHTML =3.00;
  }
  else if(x1>=40){
      document.getElementById("bangla_mark").innerHTML = 2.00;
  }
  else if(x1>=33){
      document.getElementById("bangla_mark").innerHTML =1.00;
  }else{
      document.getElementById("bangla_mark").innerHTML = 0; 
  }
 

if(x2>=80){
    document.getElementById("english_mark").innerHTML = 5;
}
else if(x2>=70){
    document.getElementById("english_mark").innerHTML = 4;
}
else if(x2>=60){
    document.getElementById("english_mark").innerHTML = 3.50;
}
else if(x2>=50){
    document.getElementById("english_mark").innerHTML =3.00;
}
else if(x2>=40){
    document.getElementById("english_mark").innerHTML = 2.00;
}
else if(x2>=33){
    document.getElementById("english_mark").innerHTML =1.00;
}else{
    document.getElementById("english_mark").innerHTML = 0; 
}


if(x3>=80){
  document.getElementById("math_mark").innerHTML = 5;
}
else if(x3>=70){
  document.getElementById("math_mark").innerHTML = 4;
}
else if(x3>=60){
  document.getElementById("math_mark").innerHTML = 3.50;
}
else if(x3>=50){
  document.getElementById("math_mark").innerHTML =3.00;
}
else if(x3>=40){
  document.getElementById("math_mark").innerHTML = 2.00;
}
else if(x3>=33){
  document.getElementById("math_mark").innerHTML =1.00;
}else{
  document.getElementById("math_mark").innerHTML = 0; 
}


if(average_mark>=80){
  document.getElementById("gpa").innerHTML = 5;
}
else if(average_mark>=70){
  document.getElementById("gpa").innerHTML = 4;
}
else if(average_mark>=60){
  document.getElementById("gpa").innerHTML = 3.50;
}
else if(average_mark>=50){
  document.getElementById("gpa").innerHTML =3.00;
}
else if(average_mark>=40){
  document.getElementById("gpa").innerHTML = 2.00;
}
else if(average_mark>=33){
  document.getElementById("gpa").innerHTML =1.00;
}else{
  document.getElementById("gpa").innerHTML = 0;        
}


if(average_mark>=80){
  document.getElementById("grade").innerHTML = "A+";
}
else if(average_mark>=70){
  document.getElementById("grade").innerHTML = "A-";
}
else if(average_mark>=60){
  document.getElementById("grade").innerHTML = "A";
}
else if(average_mark>=50){
  document.getElementById("grade").innerHTML ="B";
}
else if(average_mark>=40){
  document.getElementById("grade").innerHTML ="C";
}
else if(average_mark>=33){
  document.getElementById("grade").innerHTML ="D";
}else{
  document.getElementById("grade").innerHTML = "F";       
}

}

