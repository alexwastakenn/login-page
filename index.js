const first_gradient = 'background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);';
const second_gradient = 'background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);';
const third_gradient = 'background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);';
const fourth_gradient = 'background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);';
const fifth_gradient = 'background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);';
const sixth_gradient = 'background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);';
const seventh_gradient = 'background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);';
const eight_gradient = 'background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);';
const ninth_gradient = 'background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);';
const tenth_gradient = 'background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);';
const eleventh_gradient = 'background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);';
const twelfth_gradient = 'background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);';
const thirteenth_gradient = 'background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);';
const fourteenth_gradient = 'background-image: linear-gradient(-20deg, #d558c8 0%, #24d292 100%);';
const fifteenth_gradient = 'background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);';
const sixteenth_gradient = 'background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%);';
function set_bg_gradient(gradient) {
    const body = document.querySelector('body');
    if (body === null)
        return;
    body.setAttribute('style', gradient);
    set_btn_gradient(gradient);
}
function set_btn_gradient(gradient) {
    const btn = document.querySelector('.login-form__submit');
    if (btn === null)
        return;
    btn.setAttribute('style', gradient);
    console.log("button background gradient changed.");
}
function set_custom_bg_gradient() {
    const gradient = prompt('Enter linear gradient code: ');
    if (gradient === null || gradient === undefined)
        return;
    console.log(gradient.slice(0, 16));
    const body = document.querySelector('body');
    if (body === null)
        return;
    body.setAttribute('style', gradient);
}
