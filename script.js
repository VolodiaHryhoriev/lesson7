function chooseColor() {
   let getColor = document.getElementById('color');
   if (getColor.style.display === 'none') {
    getColor.style.display = 'flex';
   } else {
    getColor.style.display = 'none';
   }
   
   getColor.style.flexWrap = 'wrap';
   getColor.style.width = '350px';
}


function changeBg() {
    let getDiv = document.getElementById('color').children
        for (const element of getDiv) {
            element.addEventListener('click', function() {
                document.body.style.backgroundColor = element.style.backgroundColor 
            })
        }
}


function chooseImg() {
   let getImg = document.getElementById('img');
   if (getImg.style.display === 'none') {
    getImg.style.display = 'flex';
   } else {
    getImg.style.display = 'none';
   }
   getImg.style.display = 'flex';
   getImg.style.flexWrap = 'wrap';
   getImg.style.width = '700px';
}


function changeImgBg() {
    let getDiv = document.getElementById('img').children;
        for (const element of getDiv) {
            element.addEventListener('click', function() {
                document.body.style.backgroundImage = `url(${element.src})`;    
            })
        }
}

