// Number 1
function GetOneFact(number) {
    let url = `http://numbersapi.com/${number}?json`;
    return axios
        .get(url)
        .then((res) => {
            console.log("############## Number 1 ##############");
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

GetOneFact(1).then((res) => {
    console.log(res.text);
});

// Number 2
function GetTMultipleFacts(number1, number2, number3, number4) {
    let allFacts = [];
    allNumbers = [number1, number2, number3, number4];

    allNumbers.forEach((number) => {
        let url = `http://numbersapi.com/${number}?json`;
        allFacts.push(axios.get(url));
    });

    return Promise.all(allFacts)
        .then((res) => {
            const factsContainer = document.getElementById('factsContainer');
            factsContainer.innerHTML = '';

            console.log("############## Number  2 ##############");

            res.forEach((fact) => {
                console.log(fact.data.text);

                const newFact = document.createElement('p');
                newFact.innerText = fact.data.text;

                factsContainer.appendChild(newFact);
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

GetTMultipleFacts(1, 2, 3, 4);


