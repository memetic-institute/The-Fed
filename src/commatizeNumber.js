const replace = string => string.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const commatizeNumber = number =>
    replace(typeof number === 'number' ? number.toString() : number);

export default commatizeNumber;
