const d = document;
let ce;
let tab;
let calendarStyle = {
    'border':'#333333',
    'holidaybg':'#FF6666',
    'weekdaybg':'#CCCCCC',
    'width':"150"
};

d.addEventListener('DOMContentLoaded', () => {
    ce = d.querySelector('div#calendar');
    tab = "edit";
    const click = 'click';
    d.querySelector('div#menutab>div#file').addEventListener('click',tabswitch_file,false);
    d.querySelector('div#menutab>div#edit').addEventListener('click',tabswitch_edit,false);
    d.querySelector('div#menutab>div#event').addEventListener('click',tabswitch_event,false);
    d.querySelector('div#menutab>div#layout').addEventListener('click',tabswitch_layout,false);
    d.querySelector('div#edit_create-calendar').addEventListener('click',edit_createCalendar,false);
    d.querySelector('div#createCalendar>div#innerFrameHeader>i').addEventListener('click',()=>{
        d.querySelector('#overlay').classList.remove("show");
        d.querySelector('#createCalendar').classList.remove("show");
    },false)
}, false);
function* tabshow() {
    let el = window.getComputedStyle(d.querySelector('div#menucontent>div.sel'));
    let elop = 0;
    let eltrX = 50;
    elop = elop + 0.001;
    eltrX = eltrX - 0.001;
    d.querySelector('div#menucontent>div.sel').style.transform = "translateX("+eltrX+"px)";
    d.querySelector('div#menucontent>div.sel').style.opacity = elop;
    yield;
    d.querySelector('div#menucontent>div.sel').style.transform = "translateX(0px)";
    d.querySelector('div#menucontent>div.sel').style.opacity = "1";
}
function tabswitch_file() {
    if(d.querySelector('div#menutab>div.sel').id != "file"){
        d.querySelector('div#menutab>div.sel').classList.remove('sel');
        d.querySelector('div#menutab>div#file').classList.add('sel');
        d.querySelector('div#menucontent>div.sel').classList.remove('sel');
        d.querySelector('div#menucontent>div#file').classList.add('sel');
        // d.querySelector('div#menucontent>div.sel').style.transform = "translateX(50px)";
        // d.querySelector('div#menucontent>div.sel').style.opacity = "0";
        tab = "file";
        // let tabanimate = tabshow();
        // d.querySelector('div#menucontent>div#file').addEventListener("transitionend", ()=>tabanimate.next(),false);
        // setTimeout(()=>{tabanimate.next();},0);
    }
}
function tabswitch_edit() {
    d.querySelector('div#menutab>div.sel').classList.remove('sel');
    d.querySelector('div#menutab>div#edit').classList.add('sel');
    d.querySelector('div#menucontent>div.sel').classList.remove('sel');
    d.querySelector('div#menucontent>div#edit').classList.add('sel');
    // d.querySelector('div#menucontent>div.sel').style.transform = "translateX(50px)";
    // d.querySelector('div#menucontent>div.sel').style.opacity = "0";
    tab = "edit";
    // let tabanimate = tabshow();
    // d.querySelector('div#menucontent>div#edit').addEventListener("transitionend", ()=>tabanimate.next(),false);
    // setTimeout(()=>{tabanimate.next();},0);
}
function tabswitch_event() {
    d.querySelector('div#menutab>div.sel').classList.remove('sel');
    d.querySelector('div#menutab>div#event').classList.add('sel');
    d.querySelector('div#menucontent>div.sel').classList.remove('sel');
    d.querySelector('div#menucontent>div#event').classList.add('sel');
    // d.querySelector('div#menucontent>div.sel').style.transform = "translateX(50px)";
    // d.querySelector('div#menucontent>div.sel').style.opacity = "0";
    tab = "event";
    // let tabanimate = tabshow();
    // d.querySelector('div#menucontent>div#event').addEventListener("transitionend", ()=>tabanimate.next(),false);
    // setTimeout(()=>{tabanimate.next();},0);
}
function tabswitch_layout() {
    d.querySelector('div#menutab>div.sel').classList.remove('sel');
    d.querySelector('div#menutab>div#layout').classList.add('sel');
    d.querySelector('div#menucontent>div.sel').classList.remove('sel');
    d.querySelector('div#menucontent>div#layout').classList.add('sel');
    // d.querySelector('div#menucontent>div.sel').style.transform = "translateX(50px)";
    // d.querySelector('div#menucontent>div.sel').style.opacity = "0";
    tab = "layout";
    // let tabanimate = tabshow();
    // d.querySelector('div#menucontent>div#layout').addEventListener("transitionend", ()=>tabanimate.next(),false);
    // setTimeout(()=>{tabanimate.next();},0);
}
function edit_createCalendar() {
    d.querySelector('#overlay').classList.add("show");
    d.querySelector('#createCalendar').classList.add("show");
    // let calendar = generateCalendarFrame();
}
function generateCalendarFrame() {
    let e = d.createElement('table');
    e.setAttribute('border',"0");
    e.setAttribute('cellpadding',"2");
    e.setAttribute('cellspacing',"1");
    e.setAttribute('bgcolor',calendarStyle.border);
    e.setAttribute('width',calendarStyle.width);
    let ee = d.createElement('tr');
    ee.setAttribute('align','center');
    ee.setAttribute('bgcolor','#FFFFFF');
    let eee = d.createElement('td');
    eee.setAttribute('colspan',"7");
    eee.innerText = calendarProperty.yearMonth;

}