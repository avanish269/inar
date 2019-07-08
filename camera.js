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
    alert(blob);
    alert(img.href);
  },'image/png');
});

navigator.mediaDevices.getUserMedia(cst).then((stream)=>{
  vid.srcObject=stream;
});
