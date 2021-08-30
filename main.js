arraystudent=[];
function submit(){
var name_1 = document.getElementById("name_of_the_student_1").value;
var name_2 = document.getElementById("name_of_the_student_2").value;
var name_3 = document.getElementById("name_of_the_student_3").value;
var name_4 = document.getElementById("name_of_the_student_4").value;
arraystudent.push(name_1);
arraystudent.push(name_2);
arraystudent.push(name_3);
arraystudent.push(name_4);
document.getElementById("display_name").innerHTML=arraystudent;
document.getElementById("submit_button").style.display = "none";
 document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){arraystudent.sort();
document.getElementById("display_name").innerHTML=arraystudent;}