let box = document.querySelector('box');
let input = document.querySelector('input');
let button = document.querySelector('button');


// alphanumberic issue

let n = prompt("Enter Your Number b/w (1 to 6) for generate OTP pair:");

const fetchData = () => {
     
    let digits = '0123456789';      // only numbers

    // let slots = '1ab4u5jdi394jd23c0';   // Alphanumberic

    let Otp = '';

    for(let i = 0; i < n; i++)
    {
        if(n==1 || n == 2 || n == 3 || n == 4 || n == 5 || n == 6)
        {
            Otp += digits[Math.floor(Math.random()*10)];  // only numbers
            
            // Otp += slots[Math.floor(Math.random()*10)];       // Alphanumberic

            input.value = Otp;
            if( n == 3)
            {
                input.style.color = 'tan';
            }
            else if( n == 4)
            {
                input.style.color = 'lime';
            }
            else if( n == 5)
            {
                input.style.color = 'lightcyan';
            }
            else
            {
                input.style.color = 'rgb(234, 216, 83)';
            }
        }
        else
        {
            input.Otp = "Invalid OTP";
        }
    }
    
    // input reset nhi ho rha he wo krna he

}
button.addEventListener("click",fetchData);

