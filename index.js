let text = document.getElementById("text-area");

document.getElementById("lorem").addEventListener("click", event => {
    text.value = "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque suscipit tellus at urna lacinia, sit amet pharetra sem finibus. Aliquam congue in felis sed laoreet. Morbi nec laoreet nibh. Proin tincidunt magna sed eros commodo pretium. Suspendisse placerat suscipit massa non condimentum. In ultricies imperdiet purus nec aliquet. Nullam sodales tellus vitae risus imperdiet, eleifend venenatis nisi viverra. Nulla id efficitur nunc, eget sollicitudin urna."
});
document.getElementById("upper-case").addEventListener("click", event => {
    text.value = text.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", event => {
    text.value = text.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", event => {
    text.value = text.value.toLowerCase().replace(/^\w|\s\w/g, (m) =>
        m.toUpperCase());
});

document.getElementById("sentence-case").addEventListener("click", event => {
    text.value = text.value.toLowerCase().replace(/^\w|\.\s+\w/g, m => m.toUpperCase())
})