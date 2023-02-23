function show(imgID)
{
    // console.log(imgID);
    var a = document.querySelector("#print")
    a.innerHTML="";
    // var p = imgID.innerHTML;
    // console.log(p);
    var b = document.createElement("div")
    b.innerHTML=`
    <img src="/product_details/img/review_img/${imgID}.jpg" alt="">
    `;
    a.appendChild(b);
    // console.log(a);
}