function kiemTraChanLe(x){
    if (x%2==0){
        return true;
    }

    else return false;
}

let x = 10;
if (kiemTraChanLe(x)){
    console.log(x + " la so chan");
}

else
{
    console.log(x + " la so le.");
}