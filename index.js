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
