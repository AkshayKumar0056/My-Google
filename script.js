let query = document.querySelector('.query');
let searchbtn = document.querySelector('.searchbtn');

searchbtn.onclick = function(){
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url,'_self');
}

// for capture enter press

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault();

        let url = 'https://www.google.com/search?q=' + query.value;
        window.open(url,'_self');
    }
}

//for background color

var color = ["#b92b27","#659999","#c31432","#f5af19","#10ac84","#5f27cd","#d53369"];
var i = 0;

document.querySelector(".back").addEventListener("click",function(){
    i = i<color.length ?++i : 0;
    document.querySelector("body").style.background = color[i]
})

// for background Image
document.querySelector("#getval").addEventListener('change',readURL,true);
function readURL(){
    var file = document.querySelector('#getval').files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        document.querySelector('#bg').style.backgroundImage = "url("+ reader.result + ")";
    }
    if(file){
        reader.readAsDataURL(file);
    } else{
        
    }
}