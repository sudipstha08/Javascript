// const formatter = new Intl.DateTimeFormat("es")
// const formatter = new Intl.DateTimeFormat("en")
const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'long'}) 

console.log(formatter.format(new Date()))

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
 */