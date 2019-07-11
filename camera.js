const vid=document.getElementById("vid");
const cv=document.getElementById("cv");
const ctxt=cv.getContext('2d');
const capBut=document.getElementById("capture");
var img=document.createElement("a");
cv.style.display="none";
const cst={
  video:{facingMode:"environment"},
};
capBut.addEventListener('click',()=>{
  ctxt.drawImage(vid,0,0,cv.width,cv.height);
  cv.toBlob(function(blob){
    img.href=URL.createObjectURL(blob);
    //alert(blob);
    alert(img.href);
    $.ajax(
      {
        type: "POST",
        //url: "process.py",
        url: "a.txt",
        //data: img.href,
        dataType: "text",
        //dataType: "html",
        success: function(data){
          alert(data);
          //document.getElementById("change").innerHTML=data;
        },
        error: function(){
          alert("error");
        }
      }
    );
    /*var xhr = new XMLHttpRequest();
    xhr.open("GET", "a.txt", true);
    xhr.responseType = "text";
    xhr.onload = function(e) {
      alert(xhr.response);
    }
    xhr.send();*/
  },'image/png');
});

navigator.mediaDevices.getUserMedia(cst).then((stream)=>{
  vid.srcObject=stream;
});
