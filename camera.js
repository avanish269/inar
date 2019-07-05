const vid=document.getElementById("vid");
const cv=document.getElementById("cv");
const ctxt=cv.getContext('2d');
const capBut=document.getElementById("capture");
//const select=document.getElementById("select");
var img=document.createElement("a");
/*var isMobile={
  Android: function(){
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function(){
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function(){
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function(){
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function(){
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};*/

/*function gotDevices(mediaDevices) {
  select.innerHTML = '';
  select.appendChild(document.createElement('option'));
  let count = 1;
  mediaDevices.forEach(mediaDevice => {
    if (mediaDevice.kind === 'videoinput') {
      const option = document.createElement('option');
      option.value = mediaDevice.deviceId;
      const label = mediaDevice.label || `Camera ${count++}`;
      const textNode = document.createTextNode(label);
      option.appendChild(textNode);
      select.appendChild(option);
    }
  });
}*/
/*const cst={
  video:true,
};*/
//if(isMobile.any()==false){
//cv.style.display="none";
  const cst={
    video:{facingMode:"environment"},
  };
//}
/*else {
  const cst={
    video: true,
  };
}*/

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

//navigator.mediaDevices.enumerateDevices().then(gotDevices);
