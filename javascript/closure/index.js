// Замыкание это функция внутри другой функции со всеми ее переменными

function urlGenerator(domain) {
  return function(url){
    return `https://${url}.${domain}`
  }
};

const comUrl = urlGenerator('com');
const uaUrl = urlGenerator('ua');

console.warn('comUrl', comUrl('google')); // => https://google.com
console.warn('uaUrl', uaUrl('prom')); // => https://prom.ua

// ================

function increment(){
  let count = 1
  return function(){
    return count++
  }
}

const inc = increment();
inc();
inc();
console.warn('inc', inc()) // -> 3

