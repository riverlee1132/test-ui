
const writeFrm = document.querySelector('#writeFrm');
const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
};
writeFrm.addEventListener("submit", submitHandler);
