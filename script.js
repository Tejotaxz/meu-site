const TOTAL_MONEY = 200000000000; // Fortuna total de Elon Musk em dólares
let currentMoney = TOTAL_MONEY;

document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const item = event.target.parentElement;
        const price = parseInt(item.getAttribute('data-price'));

        if (currentMoney >= price) {
            currentMoney -= price;
            document.getElementById('current-money').textContent = `$${currentMoney.toLocaleString()}`;
            document.getElementById('result').textContent = `Você comprou um item por $${price.toLocaleString()}!`;
            document.getElementById('result').style.color = 'blue';
        } else {
            document.getElementById('result').textContent = 'Dinheiro insuficiente!';
            document.getElementById('result').style.color = 'red';
        }
    });
});
