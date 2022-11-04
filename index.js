const firstGradient = 'background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);';
const secondGradient = 'background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);';
const thirdGradient = 'background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);';
const fourthGradient = 'background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);';
const fifthGradient = 'background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);';
const sixthGradient = 'background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);';
const seventhGradient = 'background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);';
const eightGradient = 'background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);';
const ninthGradient = 'background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);';
const tenthGradient = 'background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);';
const eleventhGradient = 'background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);';
function setBgGradient(gradient) {
    const body = document.querySelector('body');
    if (body === null)
        return;
    body.setAttribute('style', gradient);
}
function setCustomBgGradient() {
    const gradient = prompt('Enter linear gradient code: ');
    if (gradient === null || gradient === undefined)
        return;
    const body = document.querySelector('body');
    if (body === null)
        return;
    body.setAttribute('style', gradient);
}
