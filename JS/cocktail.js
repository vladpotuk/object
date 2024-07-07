const container = document.querySelector(".container");
console.log(container);

function getData() {
    return fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    )
    .then((res) => res.json())
    .then((data) => {
        renderData(data);
    });
}

function renderData(cocktail) {
    console.log(cocktail);
    const { drinks } = cocktail;
    console.log(drinks);
    for (const drink of drinks) {
        const {strDrinkThumb,strDrink}=drink;
        const card = `
            <div class="card">
                <img src="${drink.strDrinkThumb}" alt="drink image">
                <p class="title">${strDrink}</p>
                <button>Замовити</button>
            </div>
        `;
        container.insertAdjacentHTML("beforeend", card);
    }
}

getData();
