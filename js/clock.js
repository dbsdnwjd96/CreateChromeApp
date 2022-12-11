const clock = document.querySelector('h2#clock');

/*
- Interval : '몇초마다 해당 함수'를 실행
- setTimeout : '몇초 뒤 해당 함수'를 실행
*/

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);