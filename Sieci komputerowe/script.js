
let idZamowienia = 0;

function zaznaczBraki() {
    const rows = document.querySelectorAll("table tr");
    rows.forEach((row, index) => {
        if (index === 0) return; // Pomijamy nagłówek tabeli
        const cell = row.cells[2]; // Kolumna "Dostępna ilość"
        const value = parseInt(cell.textContent, 10);
        if (value === 0) {
            cell.style.backgroundColor = "red";
        } else if (value >= 1 && value <= 5) {
            cell.style.backgroundColor = "yellow";
        } else {
            cell.style.backgroundColor = "Honeydew";
        }
    });
}

function aktualizuj() {
    const row = event.target.closest("tr");
    const cell = row.cells[2]; // Kolumna "Dostępna ilość"
    const newValue = prompt("Podaj nową ilość:");
    if (newValue !== null) {
        cell.textContent = newValue;
        zaznaczBraki();
    }
}

function zamow() {
    idZamowienia++;
    const row = event.target.closest("tr");
    const productName = row.cells[0].textContent; // Kolumna "Produkt"
    alert(`Zamówienie nr: ${idZamowienia} Produkt: ${productName}`);
}

// Wywołanie funkcji zaznaczającej braki na początku działania skryptu
document.addEventListener("DOMContentLoaded", zaznaczBraki);
