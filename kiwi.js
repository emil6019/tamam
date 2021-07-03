var slider = document.getElementById('myRange')








function toggle(button)
{
  if(document.getElementById("1").value=="OFF"  ){
   document.getElementById("1").value="ON";
   slider.addEventListener('mousemove', function(){
    var x = slider.value ;
    var color = 'linear-gradient(to right,rgb(0, 220, 190)' + x + '%, rgb(207, 243, 239)' + x + '%)';
    slider.style.background = color
    if ( x > 90 ) {
        document.getElementById('ayliq').innerHTML = '<b>$160'
        document.querySelector('.month').innerHTML = ' / 10 month'
    }
    
    else if ( x > 80) {
        document.getElementById('ayliq').innerHTML = '<b>$144'
        document.querySelector('.month').innerHTML = ' / 9 month'
    }
    else if ( x > 70) {
        document.getElementById('ayliq').innerHTML = '<b>$128'
        document.querySelector('.month').innerHTML = ' / 8 month'
    }
    else if ( x > 60) {
        document.getElementById('ayliq').innerHTML = '<b>$112'
        document.querySelector('.month').innerHTML = ' / 7 month'
    }
    else if ( x > 50) {
        document.getElementById('ayliq').innerHTML = '<b>$96.00'
        document.querySelector('.month').innerHTML = ' / 6 month'
    }
    else if ( x > 40) {
        document.getElementById('ayliq').innerHTML = '<b>$80.00'
        document.querySelector('.month').innerHTML = ' / 5 month'
    }
    else if ( x > 30) {
        document.getElementById('ayliq').innerHTML = '<b>$64.00'
        document.querySelector('.month').innerHTML = ' / 4 month'
    }
    else if ( x > 20) {
        document.getElementById('ayliq').innerHTML = '<b>$48.00'
        document.querySelector('.month').innerHTML = ' / 3 month'
    }
    else if ( x > 10) {
        document.getElementById('ayliq').innerHTML = '<b>$32.00'
        document.querySelector('.month').innerHTML = ' / 2 month'
    }
    else if ( x < 10) {
        document.getElementById('ayliq').innerHTML = '<b>$16.00</b>'
        document.querySelector('.month').innerHTML = ' / month'
    }
    
     if ( x > 60) {
        document.getElementById('ayliq').style.paddingLeft = 75 + '%'
    }
    else {
        document.getElementById('ayliq').style.paddingLeft = 60 + '%'
    }
    
    })
}

else if(document.getElementById("1").value=="ON" ){
   document.getElementById("1").value="OFF";
   slider.addEventListener('mousemove', function(){
    var x = slider.value ;
    var color = 'linear-gradient(to right,rgb(0, 220, 190)' + x + '%, rgb(207, 243, 239)' + x + '%)';
    slider.style.background = color
    
    if ( x > 75) {
        document.getElementById('ayliq').innerHTML = '<b>$480'
        document.querySelector('.month').innerHTML = ' / 4 year'
    }
    else if ( x > 50) {
        document.getElementById('ayliq').innerHTML = '<b>$360'
        document.querySelector('.month').innerHTML = ' / 3 year'
    }
    else if ( x > 25) {
        document.getElementById('ayliq').innerHTML = '<b>$240'
        document.querySelector('.month').innerHTML = ' / 2 year'
    }
    else if ( x < 25) {
        document.getElementById('ayliq').innerHTML = '<b>$120</b>'
        document.querySelector('.month').innerHTML = ' / 1 year'
    }
    
    
     if ( x > 0) {
        document.getElementById('ayliq').style.paddingLeft = 75 + '%'
    }
    else {
        document.getElementById('ayliq').style.paddingLeft = 60 + '%'
    }
    
   
  
})


}

}





function istek() {
    var x = document.getElementById("telephone").value;
  document.getElementById("bilmirem").innerHTML = x + '' + ' / month';
  var qiymet = x * 16
  document.getElementById('ayliq').innerHTML = '<b>$' + qiymet
  if ( x < 1 ) {
    document.getElementById("bilmirem").innerHTML ='1' + '/ month';
    document.getElementById('ayliq').innerHTML = '<b>' + '$16'
  }
  else if (x == 12) {
    document.getElementById("bilmirem").innerHTML ='1' + '/ year';
    document.getElementById('ayliq').innerHTML = '<b>' + '$120';
    document.getElementById("1").value="OFF";
    document.querySelector('.switch').classList.add('dum')
  }
  else if (x == 24) {
    document.getElementById("bilmirem").innerHTML ='2' + '/ year';
    document.getElementById('ayliq').innerHTML = '<b>' + '$240';
    document.getElementById("1").value="OFF";
    document.querySelector('.switch').classList.add('dum')
  }
  else if (x == 36) {
    document.getElementById("bilmirem").innerHTML ='3' + '/ year';
    document.getElementById('ayliq').innerHTML = '<b>' + '$360';
    document.getElementById("1").value="OFF";
    document.querySelector('.switch').classList.add('dum')
  }
  else if ( isNaN(x)) {
    document.getElementById("bilmirem").innerHTML ='1' + '/ month';
    document.getElementById('ayliq').innerHTML = '<b>' + '$16'
    document.getElementById("telephone").value = '1'
  }
  else {
    document.getElementById("1").value="ON";
    document.querySelector('.switch').classList.remove('dum')
  }

 
}
