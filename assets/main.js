function preview() {

    document.getElementById('main').style.display = "none";
    document.getElementById('preview').style.display = "block";


}

function send() {
    
    var subname = document.getElementById('sub-name').value
    var jobname = document.getElementById('job-name').value
    var studentname = document.getElementById('student-name').value
    var rollnumber = document.getElementById('roll-number').value
    var department = document.getElementById('department').value
    var shift = document.getElementById('shift').value
    var teachername = document.getElementById('teacher-name').value
    sessionStorage.setItem("subname", subname)

    sessionStorage.setItem("jobname", jobname)
    sessionStorage.setItem("studentname", studentname)
    sessionStorage.setItem("rollnumber", rollnumber)
    sessionStorage.setItem("department", department)
    sessionStorage.setItem("shift", shift)
    sessionStorage.setItem("teachername", teachername)
    

    location.href="cover.html"

}

var backbutton = document.getElementById('back-button')
backbutton.addEventListener("mouseover", function(){
    backbutton.style.backgroundColor="lightgray"
})
function theme (){
    document.getElementById('theme').style.display="block";
    document.getElementById('baner').style.display="none";
    document.getElementById('about').style.display="none";

}
function theme_change(){
    document.getElementById('theme').style.display="block";
    document.getElementById('baner').style.display="none";
    document.getElementById('about').style.display="none";
}
function theme_pink(){
    var theme ="pink"
    sessionStorage.setItem("theme", theme);
    document.getElementById('tool-theme-name').innerHTML="Pink";
    document.getElementById('theme').style.display="none";
    document.getElementById('baner').style.display="block";
    document.getElementById('about').style.display="block";
    document.getElementById('tool-theme-name').style.color="pink";
    document.getElementById('tool-theme-name').style.fontWeight="400";
    
}
function theme_green(){
    var theme ="green"
    sessionStorage.setItem("theme", theme);
    document.getElementById('tool-theme-name').innerHTML="Green";
    document.getElementById('theme').style.display="none";
    document.getElementById('baner').style.display="block";
    document.getElementById('about').style.display="block";
    document.getElementById('tool-theme-name').style.color="Green";
    document.getElementById('tool-theme-name').style.fontWeight="400";
    
}
function theme_brown(){
    var theme ="brown"
    sessionStorage.setItem("theme", theme);
    document.getElementById('tool-theme-name').innerHTML="Brown";
    document.getElementById('theme').style.display="none";
    document.getElementById('baner').style.display="block";
    document.getElementById('about').style.display="block";
    document.getElementById('tool-theme-name').style.color="burlywood";
    document.getElementById('tool-theme-name').style.fontWeight="400";
    
}
function theme_lightblue(){
    var theme ="lightblue"
    sessionStorage.setItem("theme", theme);
    document.getElementById('tool-theme-name').innerHTML="Light Blue";
    document.getElementById('theme').style.display="none";
    document.getElementById('baner').style.display="block";
    document.getElementById('about').style.display="block";
    document.getElementById('tool-theme-name').style.color="lightblue";
    document.getElementById('tool-theme-name').style.fontWeight="400";
    
}
function theme_orange(){
    var theme ="orange"
    sessionStorage.setItem("theme", theme);
    document.getElementById('tool-theme-name').innerHTML="Orange";
    document.getElementById('theme').style.display="none";
    document.getElementById('baner').style.display="block";
    document.getElementById('about').style.display="block";
    document.getElementById('tool-theme-name').style.color="orange";
    document.getElementById('tool-theme-name').style.fontWeight="400";
    
}
function theme_default(){
    var theme ="default"
    sessionStorage.setItem("theme", theme);
    document.getElementById('tool-theme-name').innerHTML="Default";
    document.getElementById('theme').style.display="none";
    document.getElementById('baner').style.display="block";
    document.getElementById('about').style.display="block";
    document.getElementById('tool-theme-name').style.color="blue";
    document.getElementById('tool-theme-name').style.fontWeight="400";
    
}

