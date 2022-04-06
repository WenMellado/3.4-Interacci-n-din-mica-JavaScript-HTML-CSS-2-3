let taReview=document.getElementById("taReview");
let radiusLT=document.getElementById("radiousLT");
let radiusRT=document.getElementById("radiousRT");
let radiusRB=document.getElementById("radiousRB");
let radiusLB=document.getElementById("radiousLB");
let inputLT=document.getElementById("inputLT");
let inputRT=document.getElementById("inputRT");
let inputLB=document.getElementById("inputLB");
let inputRB=document.getElementById("inputRB");
let radious=document.getElementById("radious");
let allRadious=document.getElementById("allRadious");
let widthBorder=document.getElementById("widthBorder");
let border1=document.getElementById("border1");
let borderDotted=document.getElementById("borderDotted");
let borderColor=document.getElementById("borderColor");
let alphaBorder=document.getElementById("alphaBorder");


radiusLT.oninput=function(e){
    inputLT.value=radiusLT.value;
    if(allRadious.checked){
        taReview.style.borderRadius=radiousLT.value + 'px';
        inputLB.value=radiousLT.value;
        inputRB.value=radiousLT.value;
        inputRT.value=radiousLT.value;
        radiousRB.value=radiousLT.value;
        radiousLB.value=radiousLT.value;
        radiousRT.value=radiousLT.value;
    }
    else{
    taReview.style.borderTopLeftRadius=radiusLT.value + 'px';
    inputLB.value=0;
    inputRB.value=0;
    inputRT.value=0;  
    }
};
radiusRT.oninput=function(e){
    inputRT.value=radiusRT.value;
    taReview.style.borderTopRightRadius=radiusRT.value + 'px';
};
radiusRB.oninput=function(e){
    inputRB.value=radiusRB.value;
    taReview.style.borderBottomRightRadius=radiusRB.value + 'px';
};
radiusLB.oninput=function(e){
    inputLB.value=radiusLB.value;
    taReview.style.borderBottomLeftRadius=radiusLB.value + 'px';
};

allRadious.oninput=function(e){
    if(!allRadious.checked){
        taReview.style.borderRadius='0px 0px 0px';
        inputLB.value=0;
        inputRB.value=0;
        inputRT.value=0;
    }
};
widthBorder.oninput=function(e){
    taReview.style.borderWidth=widthBorder.value + 'px';
};
border1.onclick=function(e){
    taReview.style.borderWidth='1px';
    widthBorder.value=1;
};
borderSolid.onclick=function(e){
    taReview.style.borderStyle='solid';
};
borderDotted.onclick=function(e){
    taReview.style.borderStyle='dotted';
};
borderDashed.onclick=function(e){
    taReview.style.borderStyle='dashed';
};
borderDouble.onclick=function(e){
    taReview.style.borderStyle='double';
};
borderGroove.onclick=function(e){
    taReview.style.borderStyle='Groove';
};
borderRidge.onclick=function(e){
    taReview.style.borderStyle='Ridge';
};
borderInset.onclick=function(e){
    taReview.style.borderStyle='Inset';
};
borderOutset.onclick=function(e){
    taReview.style.borderStyle='Outset';
};
borderHidden.onclick=function(e){
    taReview.style.borderStyle='Hidden';
};
borderNone.onclick=function(e){
    taReview.style.borderStyle='None';
};
borderColor.oninput=function(e){
    taReview.style.borderColor=borderColor.value;
};
radiousColor.oninput = function(){
    var r=parseInt(borderColor.value.substring(1,3), 16);
    var g=parseInt(borderColor.value.substring(3,5), 16);
    var b=parseInt(borderColor.value.substring(5,7), 16);
    taReview.style.borderColor = "rgb("+r+", "+g+", "+b+", "+radiousColor.value/100+")"
};
border2.onclick=function(e){
    radiousColor.value=100;
    taReview.style.borderColor=borderColor.value;
};
all.onclick=function(e){
    taReview.style.borderStyle='solid';
};
bordertop.onclick=function(e){
        taReview.style.borderRight='none';
        taReview.style.borderBottom='none';
        taReview.style.borderLeft='none';
        taReview.style.borderTop='solid';
};
borderright.onclick=function(e){
    taReview.style.borderTop='none';
    taReview.style.borderBottom='none';
    taReview.style.borderLeft='none';
    taReview.style.borderRight='solid';
};
borderbottom.onclick=function(e){
    taReview.style.borderTop='none';
    taReview.style.borderRight='none';
    taReview.style.borderLeft='none';
    taReview.style.borderBottom='solid';
};
borderleft.onclick=function(e){
    taReview.style.borderTop='none';
    taReview.style.borderRight='none';
    taReview.style.borderBottom='none';
    taReview.style.borderLeft='solid';
};


