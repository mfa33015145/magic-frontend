$(document).ready(function() {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeTextColor() {
        const color = getRandomColor();
        $('.hd').css('color', color);
    }

    // Muda a cor do texto a cada 1000 milissegundos (1 segundo)
    setInterval(changeTextColor, 1000);
});
