count = () =>{
    var n = document.getElementById("bi").innerHTML;
    var num = parseInt(n) ;
    console.log(num);
    num++;
    console.log(num);
    document.getElementById("bi").innerHTML = num;
}
check = (no)=>{
    if(no%2==0){
        return 0;
    }else{
        return 1;
    }
}
chk = (ele) =>{
    if(ele.classList.contains("un") || ele.classList.contains("hi")){
        return 1
    }else{
        return 0;
    }
}
color = (ele)=>{
    var n = document.getElementById("bi").innerHTML;
    nn = parseInt(n);
    an = check(nn);
    if(an==0){
        ele.classList.add("hi");
        console.log('white');
    }else{
        ele.classList.add("un");
        console.log('black');
    }
}
res = () =>{

}
result = () =>{
    var wa  = document.getElementById('a').classList.contains("un");
    var wb  = document.getElementById('b').classList.contains("un");
    var wc  = document.getElementById('c').classList.contains("un");
    var wd  = document.getElementById('d').classList.contains("un");
    var we  = document.getElementById('e').classList.contains("un");
    var wf  = document.getElementById('f').classList.contains("un");
    var wg  = document.getElementById('g').classList.contains("un");
    var wh  = document.getElementById('h').classList.contains("un");
    var wi  = document.getElementById('i').classList.contains("un");
    
    var ba  = document.getElementById('a').classList.contains("hi");
    var bb  = document.getElementById('b').classList.contains("hi");
    var bc  = document.getElementById('c').classList.contains("hi");
    var bd  = document.getElementById('d').classList.contains("hi");
    var be  = document.getElementById('e').classList.contains("hi");
    var bf  = document.getElementById('f').classList.contains("hi");
    var bg  = document.getElementById('g').classList.contains("hi");
    var bh  = document.getElementById('h').classList.contains("hi");
    var bi  = document.getElementById('i').classList.contains("hi");

    var ans = document.getElementById('myModal')
    var win = document.getElementById('win')
    
    if(wa&&wb&&wc||wd&&we&&wf||wg&&wh&&wi||wa&&wd&&wg||wb&&we&&wh||wc&&wf&&wi||wa&&we&&wi||wc&&we&&wg){
        win.innerHTML = "Black Wins"
        // ans.style.visibility = "visible";
        ans.style.display = "block";
        return 1;
        
    }else if(ba&&bb&&bc||bd&&be&&bf||bg&&bh&&bi||ba&&bd&&bg||bb&&be&&bh||bc&&bf&&bi||ba&&be&&bi||bc&&be&&bg){
        win.innerHTML = "White Wins"
        // ans.style.visibility = "visible";
        ans.style.display = "block";
        return 0;
    }else{
        return 21;
    }
}
painter = (id) =>{
    var ele  = document.getElementById(id);
    if(chk(ele)==0){
        color(ele);
        count();
        result();
    }
}
reload = ()=>{
    location.reload();
}