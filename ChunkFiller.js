/**
*author:'Ṃorgive AZIK';
*language:"ru";
*version:4;
**/
//Функция для заливки одного чанка.
function ch(mxCF=CFx+16,myCF=CFy+15) {
    for(;CFy<=myCF;CFy++) {
        for(;CFx<=mxCF;CFx++) {
            if(CFx==mxCF) {CFx-=16;break;
            } else OWOP.world.setPixel(CFx,CFy,CFc);
        };
        if(CFy==myCF) {CFy-=15;break};
    };
};
//Функция для проверки маштаба заливки.
function CFinterval() {
    const CFi=setInterval(()=>{
        switch(CFs) {
            case -1:clearInterval(CFi);
            case 1:ch();break;
            case 2:
                ch(),CFx+=16,ch();
                CFx-=16,CFy+=16,ch(),CFx+=16,ch();
                CFx-=16,CFy-=16;
            break;
            case 3:
                ch(),CFx+=16,ch(),CFx+=16,ch();
                CFx-=32,CFy+=16,ch(),CFx+=16,ch(),CFx+=16,ch();
                CFx-=32,CFy+=16,ch(),CFx+=16,ch(),CFx+=16,ch();
                CFx-=32,CFy-=32;
            break;
        };
    },1800);
};
//Проверка аддонов.
if(!document.getElementById('scr')) {
	var CFx=0,CFy=0,CFc=[0,0,0],CFs=0;
	//Функция для создания тега
    function create(tag,where,style,id,text,classList,placeholder,maxLength,type) {
        let element=document.createElement(tag);
        if(id) element.id=id;
        if(style) element.style=style;
        if(text) element.innerText=text;
        if(classList) element.classList=classList;
        if(placeholder) element.placeholder=placeholder;
        if(maxLength) element.maxLength=maxLength;
        where.appendChild(element);
        if(type) element.type=type;
    };
    create('button',document.body,'z-index:0;position:absolute;left:92px;bottom:16px;text-shadow:1px 1px #4d313b;color:#7e635c;','scr','Скрипты','whitetext');
    document.getElementById('scr').onclick=()=>{
        document.getElementById('D').style.display==''?document.getElementById('D').style.display='none':document.getElementById('D').style.display='';
        if(typeof pd=='function') document.getElementById('P').onclick=()=>{pd()};
        if(typeof td=='function') document.getElementById('T').onclick=()=>{td()};
    };
    create('div',OWOP.elements.windows,'min-width:4px;top:25px;left:75px;display:none;','D');
    create('span',document.getElementById('D'));
    create('button',document.getElementById('D'),'position:absolute;top:-3px;right:10px;width:12px;height:12px;padding:0;background-image:url(/img/gui.png);background-position:-34px -2px;border:none;','H');
    document.getElementById('H').onclick=()=>{
        if(document.querySelector('#D>span').style.display=='') {
            document.querySelector('#D>span').style.display='none';
            document.getElementById('Cl').style.display='none';
            document.getElementById('Cn').style.display='none';
            document.getElementById('H').style.top='-6px';
            document.getElementById('H').style.right='-4px';
            document.getElementById('H').style.backgroundPositionX='-2px';
            if(document.getElementById('R')) document.getElementById('R').style.display='none';
        } else {
            document.querySelector('#D>span').style.display='';
            document.getElementById('Cl').style.display='';
            document.getElementById('Cn').style.display='';
            document.getElementById('H').style.top='-3px';
            document.getElementById('H').style.right='10px';
            document.getElementById('H').style.backgroundPositionX='-34px';
            if(document.getElementById('R')) document.getElementById('R').style.display='';
        };
    };
    create('button',document.getElementById('D'),null,'Cl',null,'windowCloseButton');
    document.getElementById('Cl').onclick=()=>{document.getElementById('D').style.display='none'};
    create('div',document.getElementById('D'),'color:#fff;min-height:30px;max-height:58px;width:490px;','Cn',null,'wincontainer');
    //Функция для изменения области в главную, выборочную.
    function sd() {
        document.getElementById('Cn').innerHTML='';
        document.querySelector('#D>span').innerText='Скрипты';
        create('button',document.getElementById('Cn'),'margin:0 2px;padding:0;color:#00ff64;','CF','Заливка чанков','whitetext');
        document.getElementById('CF').onclick=()=>{cfd()};
        typeof pd=='function'?(
            create('button',document.getElementById('Cn'),'margin:0 2px;padding:0;color:#00ff64;','P','Принтер','whitetext'),
            document.getElementById('P').onclick=()=>{pd()}
        ):create('button',document.getElementById('Cn'),'margin:0 2px;padding:0;color:#00ff6480;background-color:#000000bf;','P','Принтер','whitetext');
        typeof td=='function'?(
            create('button',document.getElementById('Cn'),'margin:0 2px;padding:0;color:#00ff64;','T','Терминал','whitetext'),
            document.getElementById('T').onclick=()=>{td()}
        ):create('button',document.getElementById('Cn'),'margin:0 2px;padding:0;color:#00ff6480;background-color:#000000bf;','T','Терминал','whitetext');
    };
    sd();
    //Функция для присвоения строкам координаты курсора.
    function sC(input,x=true) {x?input.value=OWOP.mouse.tileX:input.value=OWOP.mouse.tileY};
    OWOP.elements.devChat.style.zIndex="1";
} else {
    if(!document.getElementById('CF')) sd();
    document.getElementById('CF').style.backgroundColor='';
    document.getElementById('CF').style.color='#00ff64';
    document.getElementById('CF').onclick=()=>{cfd()};
};
//Функция для изменения области в заливку чанков.
function cfd() {
    document.getElementById('Cn').innerHTML='';
    document.querySelector('#D>span').innerText='Заливка чанков';
    create('button',document.getElementById('D'),'position:absolute;top:-3px;right:23px;width:12px;height:12px;padding:0;background-image:url(/img/gui.png);background-position:-34px -18px;border:none;','R');
    create('input',document.getElementById('Cn'),'margin:1px 2px;padding:0;width:110px;color:#00ff64;background-color:#0000;outline:none;','CFx',null,'whitetext','X координата',5);
    create('input',document.getElementById('Cn'),'margin:1px 2px;padding:0;width:110px;color:#00ff64;background-color:#0000;outline:none;','CFy',null,'whitetext','Y координата',5);
    create('input',document.getElementById('Cn'),'margin:1px 2px;padding:0;width:62px;color:#00ff64;background-color:#0000;outline:none;','CFs',null,'whitetext','Размер',1);
    create('input',document.getElementById('Cn'),'margin:0 2px;padding:0;outline:none;height:28px;position:relative;top:-1px;background-color:#0000;','CFc',null,null,null,null,'color');
    create('button',document.getElementById('Cn'),'margin:0 2px;padding:0;color:#00ff64;','CFstr','Старт','whitetext');
    create('button',document.getElementById('Cn'),'margin:0 2px;padding:0;color:#00ff64;','CFstp','Стоп','whitetext');
    document.getElementById('R').onclick=()=>{
        sd();
        document.getElementById('R').remove();
    };
    document.getElementById('CFx').addEventListener('keyup',(e)=>{
        if(e.keyCode===220) {
            sC(document.getElementById('CFx'));
            sC(document.getElementById('CFy'),false);
            document.getElementById('CFx').blur();
            document.getElementById('CFs').focus();
        };
    });
    document.getElementById('CFy').addEventListener('keyup',(e)=>{
        if(e.keyCode===220) {
            sC(document.getElementById('CFy'),false);
            document.getElementById('CFy').blur();
            document.getElementById('CFs').focus();
        };
    });
    document.getElementById('CFs').addEventListener('keydown',(e)=>{
        if(e.keyCode===9) {
            document.getElementById('CFs').blur();
            document.getElementById('CFc').click();
        };
    });
    document.getElementById('CFstr').onclick=()=>{
        if(!isNaN(document.getElementById('CFx').value&&document.getElementById('CFy').value&&document.getElementById('CFs').value)&&(document.getElementById('CFx').value!=''&&document.getElementById('CFy').value!=''&&document.getElementById('CFs').value!='')) {
            CFx=+document.getElementById('CFx').value;
            CFy=+document.getElementById('CFy').value;
            CFs=+document.getElementById('CFs').value;
            CFc=[parseInt(document.getElementById('CFc').value.substring(1,3),16),parseInt(document.getElementById('CFc').value.substring(3,5),16),parseInt(document.getElementById('CFc').value.substring(5,7),16)];
            CFinterval();
        } else {
            OWOP.elements.devChat.classList.remove('hide');
            OWOP.elements.devChatMessages.insertAdjacentHTML('beforeend','<li><span style="color:#00ff64;">"X координата"|"Y координата"|"Размер" не является числом.</span></li>');
            setTimeout(()=>{OWOP.elements.devChat.classList.add('hide')},5000);
        };
    };
    document.getElementById('CFstp').onclick=()=>{CFs=-1};
    //Добавление описания особенностей скрипта.
    document.getElementById('Cn').insertAdjacentHTML('beforeend',`\n
        На кнопку "\\", можно вставить текущие координаты курсора.\n
        Для перемещения между строками, используйте "Tab".\n
        Максимальный размер заливки 3 (3 на 3 чанка).\n
        Скрипт не выключается самостоятельное.
    `);
};
