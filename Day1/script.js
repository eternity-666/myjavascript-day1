function clock()
{
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var h = new Date().getHours();//小时
    var m = new Date().getMinutes();//分钟
    var s = new Date().getSeconds();//秒

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
var  interval = setInterval(clock,1000);