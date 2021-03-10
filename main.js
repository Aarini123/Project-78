var images=[
    "IMG-20210308-WA0029.jpg",
    "IMG-20210308-WA0026.jpg",
    "IMG-20210308-WA0027.jpg"
    ];
    var name1=["Rakesh Bhandari","Aarini Bhandari","Chandermukhi Bhandari"];
  var i=0;
  function next_slide(){
    if(i==3)
    {
    i=0;  
    }  
    document.getElementById("album").src=images[i];
    document.getElementById("names").innerHTML=name1[i];
  i++;
  }