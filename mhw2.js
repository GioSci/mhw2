function onMouseOver_img3()
{
img3.src='img/3.1.png';
}
function onMouseOut_img3()
{
    img3.src='img/3.png';
}

function onMouseOver_li(event)
{
    infoBox.classList.remove('hidden');
    infoBox.style.top= (event.pageY - document.getElementById('facoltà').offsetTop-50) + 'px';
    infoBox.style.left= (event.pageX - document.getElementById('facoltà').offsetLeft+10) + 'px';
    const telefono= document.createElement('text');
    const indirizzo= document.createElement('text');
    const li= event.currentTarget;
    telefono.textContent= 'telefono:' + li.dataset.telefono;
    indirizzo.textContent= 'indirizzo:' + li.dataset.indirizzo;
    infoBox.innerHTML='';
    infoBox.appendChild(telefono);
    infoBox.appendChild(indirizzo);

}
function onMouseOut_li()
{
    infoBox.classList.add('hidden');
}

function onClickInfo(){
    buttonInfo.classList.remove('b_blu');
    buttonInfo.classList.add('b_bianco');
    buttonInfo.textContent='SENZA INFO';
    for(let element of facoltà_list)
    {
        element.addEventListener('mouseover',onMouseOver_li);
        element.addEventListener('mouseout',onMouseOut_li);
    }
    buttonInfo.removeEventListener('click',onClickInfo);
    buttonInfo.addEventListener('click',onRiClickInfo);
}
function onRiClickInfo(){
    buttonInfo.classList.remove('b_bianco');
    buttonInfo.classList.add('b_blu');
    buttonInfo.textContent='PIU^ INFO';
    for(let element of facoltà_list)
    {
        element.removeEventListener('mouseover',onMouseOver_li);
        element.removeEventListener('mouseover',onMouseOut_li);
    }
    buttonInfo.removeEventListener('click',onRiClickInfo);
    buttonInfo.addEventListener('click',onClickInfo);
}

 
const img3=document.querySelector("#img3");
img3.addEventListener('mouseover',onMouseOver_img3);
img3.addEventListener('mouseout',onMouseOut_img3);

const infoBox=document.querySelector('#infoBox');
const facoltà_list=document.querySelectorAll('#facoltà li');

const buttonInfo=document.querySelector('#facoltà button');
buttonInfo.addEventListener('click',onClickInfo);



