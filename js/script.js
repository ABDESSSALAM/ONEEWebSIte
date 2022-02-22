var dt=document.querySelector("#todayIs");
var date=new Date().toDateString();
dt.innerText=date;
//presntation
function load_p1(){
    //load
    $(document).ready(function(){
      $('#content').empty()
      $('#content').load("./pages/presentation.php");
      
   });
  }

  //cooperation

function load_p2(){
    //load
    $(document).ready(function(){
      $('#content').empty()
      $('#content').load("./pages/cooperation.php");
      
   });
}

//qualite
function load_p3(){
    //load
    $(document).ready(function(){
      $('#content').empty()
      $('#content').load("./pages/qualite.php");
      
   });
}

//region

function load_p4(){
    //load
    $(document).ready(function(){
      $('#content').empty()
      $('#content').load("./pages/region.php");
      
   });
}
function load_p5(){
    //load
    $(document).ready(function(){
      $('#content').empty()
      $('#content').load("./pages/presse.php");
      
   });
}

//mediatheque
function load_p6(){
    //load
    $(document).ready(function(){
      $('#content').empty()
      $('#content').load("./pages/mediatheque.php");
      
   });
}