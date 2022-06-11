student_array = [];

function submit() {
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;
    var name5 = document.getElementById("student5").value;

    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    student_array.push(name4);
    student_array.push(name5);

    console.log(student_array);

    document.getElementById("display_name").innerHTML = student_array;
    document.getElementById("btn_submit").style.display = "none";
    document.getElementById("btn_sort").style.display = "inline-block";
}

function sort() {
    student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML = student_array;
}