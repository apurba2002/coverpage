
document.getElementById('c-sub-name').innerHTML=sessionStorage.getItem('subname')
document.getElementById('c-student-name').innerHTML=sessionStorage.getItem('studentname')
document.getElementById('c-job-name').innerHTML=sessionStorage.getItem('jobname')
document.getElementById('c-roll').innerHTML=sessionStorage.getItem('rollnumber')
document.getElementById('c-department').innerHTML=sessionStorage.getItem('department')
document.getElementById('c-shift').innerHTML=sessionStorage.getItem('shift')
document.getElementById('c-teacher-name').innerHTML=sessionStorage.getItem('teachername')

var theme = sessionStorage.getItem('theme');

if(theme==="green"){
    document.getElementById('theme-jr').style.color=theme;
    document.getElementById('theme-jn').style.color=theme;
    document.getElementById('theme-jno').style.color=theme;
    document.getElementById('theme-sb').style.color=theme;
    document.getElementById('theme-st').style.color=theme;
    document.getElementById('theme-sg').style.color=theme;
    
    
}
else if(theme===null){
    document.getElementById('theme-jr').style.color="blue";
    document.getElementById('theme-jn').style.color="blue";
    document.getElementById('theme-jno').style.color="blue";
    document.getElementById('theme-sb').style.color='blue';
    document.getElementById('theme-st').style.color="blue";
    document.getElementById('theme-sg').style.color="blue";
}
function download(){
    window.print();
    window.addEventListener("afterprint",function(){
        this.location.href="index.html";
    })

}

