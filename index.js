window.addEventListener('scroll',()=>{
    var wScroll = window.scrollY;
    console.log(wScroll);
    const para = document.getElementsByClassName("starimag")[0];
    para.style.transform = 'translate(0px, '+ wScroll/(window.innerHeight) +'%)';
    if (wScroll> 200){
        document.body.style.backgroundColor = '#000021'
    }
    else {
        document.body.style.backgroundColor = '#0E0E15' 
    }
});

