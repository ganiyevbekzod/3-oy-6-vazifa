var userName =prompt("Ismingizni kiriting :")
var ticket = prompt("Borib kelish uchun xarajatlaringizni kiriting(dollarda) :");
var hotel = prompt("Mehmonxona to'lovini kiriting(dollarda) :");
var walk = prompt("muzey uchun to'lovni kiriting(euroda) :");
var total =( ((+ticket + +hotel)*11225) + (+walk*11686));
var money = alert("Sizning umumiy xarajatlaringizni so'mdagi qiymati " + "  : " + total + " "+ "so'm");
var Title = document.querySelector('.title');
isRuning=true;
if(total<10000000)
{
    Title.textContent ="Assalomaleykum" + " " +userName +" "+ "sayohatga borib kelishingiz uchun pulingiz kamlik qiladi ";
    
}
else{
    Title.textContent ="Assalomaleykum" + " " +userName +" " + "safaringiz behatar bo'lsin";
}



































// if(number % 2 == 0){
//     console.log("kiritilgan son" + " " + "juft")
// }
// else
// {
//     console.log("kiritilgan son" + "toq")
// }
