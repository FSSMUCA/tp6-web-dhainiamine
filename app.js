const form = document.getElementById('calculator-form');
const numberAInput = document.getElementById('numberA');
const numberBInput = document.getElementById('numberB');
const operationSelect = document.getElementById('operation');
const errorDiv = document.getElementById('error-message');
const historyList = document.getElementById('history-list');

let history = [];

// fonction pour afficher une erreur
function displayError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

// fonction pour masquer l'erreur
function clearError() {
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
}

// fonction pour mettre à jour l'affichage de l'historique dans le DOM
function updateHistoryDOM() {
    historyList.innerHTML = '';
    history.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        historyList.appendChild(listItem);
    });
}

// gestionnaire d'événement pour le formulaire
form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearError();

    // récupération des valeurs
    const numA = parseFloat(numberAInput.value);
    const numB = parseFloat(numberBInput.value);
    const operation = operationSelect.value;
    let result = null;

    // validation des données
    if (isNaN(numA) || numberAInput.value.trim() === '' || isNaN(numB) || numberBInput.value.trim() === '') {
        displayError("Veuillez saisir des nombres valides dans les deux champs.");
        return;
    }

    // cas de la division par zéro
    if (operation === '/' && numB === 0) {
        displayError("Erreur : Impossible de diviser par zéro (÷ 0).");
        return;
    }

    // le calcul
    switch (operation) {
        case '+':
            result = numA + numB;
            break;
        case '-':
            result = numA - numB;
            break;
        case '*':
            result = numA * numB;
            break;
        case '/':
            result = numA / numB;
            break;
        default:
            displayError("Opération non reconnue.");
            return;
    }

    const historyEntry = `${numA} ${operation} ${numB} = ${result.toFixed(2)}`;

    // mise a jour de l'historique
    history.push(historyEntry);
    updateHistoryDOM();
    console.log("Résultat :", historyEntry);
});