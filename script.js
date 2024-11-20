function sim() {
    alert("🥰Sabia que você iria aceitar!!🥰")
    const link = "https://www.youtube.com/watch?v=PnAMEe0GGG8"
    window.open(link)

}
function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute'
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...")
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}