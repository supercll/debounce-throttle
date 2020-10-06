// 防抖函数的思路是多次触发只执行第一次或者最后一次
/* 
    参数： 
        fn： 需要防抖的函数
        wait： 防抖的时间
        im： 是立即触发一次还是延迟到最后触发一次
*/
function debounce(fn, wait = 500, im = false) {
    let timer = null;
    return function (...args) {
        let now = !timer && im;
        clearTimeout(timer);
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            !im && fn(...args);
        }, wait);
        now && fn(...args);
    };
}

// 节流函数的思路：一段时间内只触发一次函数，节省不必要的消耗，例如页面滚动事件

function throttle(fn, wait = 500) {
    let timer = null;
    let cd = true;

    return function (...args) {
        if (!cd) return;
        fn(...args);
        cd = false;
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            cd = true;
        }, wait);
    };
}
