console.log('This is my 1st JS');

var str = '';
for (var j=0;j<10;j++){
    console.log(j+1);
    str+= (j+1) +' '
}

document.querySelector('#output').innerHTML = str;