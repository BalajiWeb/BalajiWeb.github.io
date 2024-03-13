let ampm = document.getElementById('ampm');


function displayTime() 
{
    // create object for date time 
    let dateTime = new Date();
    let hr = padZero(dateTime.getHours());
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let ds = dateTime.getDay();
    let ms = dateTime.getMonth();
    let ys = dateTime.getFullYear();

    // count Property Number 
   
    if(hr > 12) 
    {
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }
    document.getElementById('hour').innerHTML = padZero(hr)
    document.getElementById('minute').innerHTML = padZero(min)
    document.getElementById('secound').innerHTML = padZero(sec)
    document.getElementById('day').innerHTML = padZero(ds);
    document.getElementById('month').innerHTML = padZero(ms);
    document.getElementById('year').innerHTML = padZero(ys);
    
}
function padZero(num) 
{
    return num<10?"0"+num:num
}
setInterval(displayTime,500)


