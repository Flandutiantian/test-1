const string= `
.skin *{box-sizing:border-box;margin:0;padding:0;}
.skin *::before, .skin *::after{box-sizing:border-box;}
.skin{
    position:relative;
    background:#ffe600;
    min-height:50vh;
}
.nose{
    /* border:10px solid red;
    border-color:black transparent  transparent;
    border-bottom:none;
    width:0px;
    height:0px;
    position:relative;
    left:50%;
    top:145px;
    margin-left:-10px;
    z-index: 10; */
    border:14px solid red;
    border-color:black transparent  transparent;
    border-bottom:none;
    width:0px;
    height:10px;
    position:relative;
    left:50%;
    top:145px;
    margin-left:-14px;
    z-index: 10;
    border-radius: 100%;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
}
/* .yuan{
    position: absolute;
    width:20px;
    height:6px;
    top:-15px;
    left:-10px;
    border-radius: 40px 40px 0 0;
    background: black;
} */
.eye{
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position:absolute;
    left:50%;
    top:100px;
    margin-left:-32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.eye::before{
    content: '';
    border: 2px solid #000;
    width:30px;
    height:30px;
    display:block;
    background: #fff;
    border-radius: 50%;
    position:relative;
    left:4px;
    top:2px;
}
.mouth{
    width:200px;
    height:100px;
    position:absolute;
    left:50%;
    top: 175px;
    margin-left: -100px;
}
.mouth .up{
    position:relative;
    top:-10px; 
    /* z-index: 1;  */
}
.mouth .up .lip{
    border:3px solid black;   
    height:30px;
    width:90px;
    border-top-color: transparent; 
    /* border-right-color:transparent; */
    position:relative;
    z-index: 2;
    background:#ffe600;
}
.mouth .up .lip.left{  
    border-right:none;  
    border-radius: 100%;   
    transform: rotate(-10deg);
    /* ??????20??? */
    margin-left: 11px;
}
.mouth .up .lip.right{
    border-left:none;   
    border-radius: 50%;
    transform: rotate(10deg);
    /* ??????20??? */
    left:99px;
    bottom:30px;
}
.mouth .down{
    height:170px;
    position:absolute;
    top:0px;
    width:100%;
    overflow:hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    height:1200px;
    width:100%;
    position:absolute;
    bottom:0;
    left:50px;
    margin-left: -50px;
    border-radius: 50%;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width:200px;
    height:300px;
    position: absolute;
    bottom:-160px;
    left:50%;
    margin-left: -100px; 
    background:#ff485f;
    border-radius: 100%;
}
.face{
    position:absolute;
    left:50%;
    border: 3px solid #000;
    width:88px;
    height:88px;
    top:200px;
    margin-left: -44px;
    z-index: 3;
}
.face > img{
    position: absolute;
    top:50%;
    left:50%;
}

.face.left > img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
}
.face.left{
    transform: translateX(-180px);
    background: #f00;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background: #f00;
    border-radius: 50%;
}
`
export default string;