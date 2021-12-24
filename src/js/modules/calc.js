const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          matetialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunction = () => {
        sum = Math.round((+sizeBlock.value) * (+matetialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || matetialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и метериал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunction);
    matetialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);
};

export default calc;