document.head.insertAdjacentHTML('beforeend',`<style>
  #left-displays,#right-displays {
    position: absolute;
    top: 50%;
    height: 520px;
    transform: translateY(-50%);
    pointer-events: none;
  } #left-displays {
    width: 96px;
  } #right-displays {
    width: 88px;
    right: 0;
  } #left-displays>div,#right-displays>div {
    box-shadow: 0 0 5px black;
    pointer-events: auto;
    &:nth-child(1) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
    }
  } #left-displays>div {
    border-radius: 0 15px 15px 0;
    &:nth-child(1) {
      right: 0;
      height: 46px;
    }
  } #right-displays>div:nth-child(1) {height: 44px;
  } #right-displays>div {border-radius: 15px 0 0 15px;
  } #right-displays>div>div {box-shadow: none;
  } #palette-bg,#help>.content>.links>*>img {height: 100%;
  } #palette-bg {overflow: hidden;
  } #palette-create {
    position: relative;
    left: 25%;
  } #palette-colors>div {
    transition-duration: 1s;
    border-radius: 50%;
    border: 2px solid #0008;
    &:hover {border: 2px solid #fff8;}
  } #dinfo-display::before {border: 1px dashed #fff8;
  } .wincontainer,#help>.content {
    border-radius: 5px;
    padding: 5px;
  } #toole-container>button {
    display: block;
    width: 48px;
    height: 48px;
    margin: 2px 0;
    border-radius: 50%;
    transition-duration: 1s;
    transition-property: background-color,box-shadow;
    border-image: none;
    border-color: #0000;
  } #toole-container>button:not(.selected):hover {box-shadow: inset 0 0 0 24px #4b329b80;
  } #toole-container>button:not(.selected):active {
    background-color: #4b329b80;
    box-shadow: inset 0 0 0 18px #7d64c880;
  } #toole-container>button.selected {
    background-color: #7d64c880;
    box-shadow: inset 0 0 0 24px #af96ff80;
  } #toole-container>button>div {
    position: relative;
    margin: -18px 0;
  } #windows {
    padding: 3px 5px 5px 5px;
    box-sizing: border-box;
    z-index: auto;
  } #windows>div,#help {
    border-radius: 15px;
    padding: 11px;
  } button.windowCloseButton {
    top: 8px;
    right: 11px;
    &:active {border: none;}
  } #help>.content>.links>* {
    margin: 0 5px;
    width: auto;
    height: 74px;
  } #help>.content>.links>*>img {width: 100%;
  } #player-list {
    min-width: 85px;
    max-height: 102px;
    overflow-y: auto;
  } button {font: 16px pixel-op,sans-serif;
  } button:hover,button:active {filter: none;
  } #help {transition: 1s opacity;
  } #help.hidden {
    opacity: 0;
    display: block;
    pointer-events: none;
  } #help-button {
    border-image: url(/img/small_border.png) 5 repeat;
    border-width: 5px;
    border-image-outset: 1px;
  } button {
    border-image: url(/img/small_border.png) 6 repeat;
    border-image-outset: 1px;
    padding: 0;
  } input[type="checkbox"] {
    appearance: none;
    background-color: #4b329b;
    width: 13px;
    height: 14px;
    border-radius: 3px;
    transition-duration: 500ms;
    transition-property: background-color,box-shadow;
    margin-top: 0;
    margin-bottom: 0;
  } input[type="checkbox"]:hover {
    background-color: #7d64c8;
    box-shadow: inset 0 0 0 3px #4b329b;
  } input[type="checkbox"]:checked {
    background-color: #af96ff;
    box-shadow: inset 0 0 0 3px #7d64c8;
  } #tooltip {transition: 500ms opacity;
  } #windows>div,#help,#right-displays>div,#left-displays>div,.context-menu,#dinfo-hlp-box {background-color: #0004;
  } .wincontainer,#windows>div,#help,#help>.content {border: none;
  } .wincontainer,#right-displays>div>div,#topright-displays>span,#topleft-displays>span,#tooltip,#help>.content,button {background-color: #0008;
  } #chat-messages>li,#chat>textarea {background-color: #0008 !important;
  } input {outline: none;
  } button,.whitetext,#tooltip,#topright-displays>span,#topleft-displays>span {
    color: #7d64c8;
    text-shadow: 1px 1px #4b329b;
  } #windows>div>span,.title,#notice-display {
    color: #7d64c8 !important;
    text-shadow: 1px 1px #4b329b !important;
  } #chat.active {background-color: transparent;
  } #keybinddiv>li {margin-bottom: 1px;
  } #kb-og {margin-bottom: 3px;
  } .admin>li {text-shadow: 1px 0 crimson;
  } .moderator>li {text-shadow: 1px 0 forestgreen;
  } #load-scr {z-index: 1;}
</style>`);
(function() {
  let rightDisplay=document.createElement('div');
  rightDisplay.id='right-displays';
  document.body.insertBefore(rightDisplay,document.getElementById('bottomleft-displays'));
  rightDisplay=document.getElementById('right-displays');
  document.getElementById('toole-container').style='';
  rightDisplay.append(document.createElement('div'),OWOP.elements.paletteBg);
  rightDisplay.querySelector('div').appendChild(OWOP.elements.paletteCreate);
  OWOP.elements.paletteBg.appendChild(OWOP.elements.palette);
  rightDisplay.addEventListener('wheel',(e)=>OWOP.player.paletteIndex+=e.deltaY>0?1:-1);
})();
