(function(){
  "use strict";
  const styleViolet=`<style>
  button{
    border-image:url(/img/small_border..png) 6 repeat;
    border-image-outset:1px;
    padding:0
  }button.windowCloseButton{
    top:8px;
    right:11px;
    &:active{border:none}
  }input{outline:none}
  input[type="text"]{margin-right:5px}
  #load-scr{z-index:1}
  #status-msg{text-shadow:inhirit}
  #player-list{
    min-width:85px;
    max-height:102px;
    overflow-y:auto
  }#dinfo-display::before{border:1px dashed #fff8}
  #right-displays{
    position:absolute;
    top:50%;
    right:0;
    width:88px;
    height:520px;
    transform:translateY(-50%);
    pointer-events:none
  }#right-displays>div{
    box-shadow:0 0 5px black;
    pointer-events:auto;
    border-radius:15px 0 0 15px
  }#palette-opts{
    position:absolute;
    top:50%;
    right:auto;
    transform:translateY(-50%);
    width:44px;
    height:100px;
    align-items:center
  }#palette-bg{overflow:hidden}
  #help{transition:1s opacity}
  #tooltip{transition:500ms opacity}
  #right-displays>div>div{box-shadow:none}
  #toole-container>button{
    display:block;
    width:48px;
    height:48px;
    margin:2px 0;
    border-radius:50%;
    transition:1s;
    border-image:none;
    border-color:transparent
  }#toole-container>button.selected{
    background-color:#7d64c880;
    box-shadow:inset 0 0 0 24px #af96ff80
  }#toole-container>button:not(.selected):hover{box-shadow:inset 0 0 0 24px #4b329b80}
  #toole-container>button:not(.selected):active{
    background-color:#4b329b80;
    box-shadow:inset 0 0 0 18px #7d64c880
  }#toole-container>button>div{
    position:relative;
    margin:-18px 0
  }#palette-colors>div{
    transition-duration:1s;
    border-radius:50%;
    border:2px solid #0008;
    &:hover{border:2px solid #fff8}
  }#chat.active{background-color:transparent}
  #help.hidden{
    opacity:0;
    display:block;
    pointer-events:none;
  }#help>.content>.links>*{
    margin:0 5px;
    width:auto;
    height:74px;
  }#help>.content>.links>*>img{width:100%}
  #keybinddiv>li{margin-bottom:1px}
  #kb-og{margin-bottom:3px}
  input[type="checkbox"]{
    appearance:none;
    background-color:#4b329b;
    width:13px;
    height:14px;
    border-radius:3px;
    transition:500ms background-color,box-shadow;
    margin-top:0;
    margin-bottom:0;
    &:hover{
      background-color:#7d64c8;
      box-shadow:inset 0 0 0 3px #4b329b;
    }&:checked{
      background-color:#af96ff;
      box-shadow:inset 0 0 0 3px #7d64c8;
    }
  }.admin>li{text-shadow:1px 0 crimson}
  .moderator>li{text-shadow:1px 0 forestgreen}
  button:hover,button:active{filter:none}
  #windows>div,#help{
    border-radius:15px;
    padding:11px
  }input[type="text"],button{font:16px pixel-op,sans-serif}
  #help>.content,.wincontainer{
    border-radius:5px;
    padding:5px
  }#palette-bg,#help>.content>.links>*>img{height:100%}
  #windows>div,.wincontainer,#help,#help>.content{border:none}
  #chat-messages>li,#chat>textarea{background-color:#0008 !important}
  #windows>div,#help,#right-displays>div,.context-menu,#dinfo-hlp-box{background-color:#0004}
  #windows>div>span,#help>.title,#notice-display,button,.whitetext,#tooltip,#topright-displays>span,#topleft-displays>span,input[type="text"]{
    color:#7d64c8;
    text-shadow:1px 1px #4b329b
  }.wincontainer,#right-displays>div>div,#topright-displays>span,#topleft-displays>span,#tooltip,#help>.content,button,.generic-display,input[type="text"]{background-color:#0008}
  </style>`;
  document.head.insertAdjacentHTML("beforeend",styleViolet);
  document.getElementById("toole-container").style="";
  let rightDisplay=document.createElement("div");
  rightDisplay.id="right-displays";
  document.body.insertBefore(rightDisplay,document.getElementById("bottomleft-displays"));
  rightDisplay=document.getElementById("right-displays");
  rightDisplay.append(OWOP.elements.paletteOpts,OWOP.elements.paletteBg);
  OWOP.elements.paletteBg.appendChild(OWOP.elements.palette);
  rightDisplay.addEventListener("wheel",e=>OWOP.player.paletteIndex+=e.deltaY>0?1:-1);
  OWOP.elements.paletteBg.addEventListener("contextmenu",e=>{
    e.preventDefault();
    return false;
  });
})();
