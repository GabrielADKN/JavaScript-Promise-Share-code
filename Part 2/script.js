document.addEventListener('DOMContentLoaded', function () {
    GetNewShuffle().then((res) => {

        const deck_id = res.deck_id;
        console.log("Deck ID: ", deck_id);

        const drawButton = document.getElementById('drawButton');
        const deckContainer = document.getElementById('deck');

        drawButton.addEventListener('click', function () {
            DrawCard(deck_id).then((res) => {
                if (res.remaining === 0) {
                    // Display a message when there are no cards left
                    alert("No more cards in the deck!");
                } else {
                    console.log(res.cards[0].value, res.cards[0].suit);

                    // Create a new image element for the card
                    const newCard = document.createElement('img');
                    newCard.src = res.cards[0].image;
                    newCard.alt = `${res.cards[0].value} of ${res.cards[0].suit}`;
                    newCard.classList.add('card', "new");

                    // Append the new card image to the deckContainer
                    deckContainer.appendChild(newCard);
                }
            })
                .catch((err) => {
                    console.error(err);
                })
        });
    });
});

function GetNewShuffle() {
    let url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    return axios
        .get(url)
        .then((res) => {
            console.log("############## Deck Shuffle ##############");
            return res.data;
        })
        .catch((err) => {
            console.error(err);
        });
}

function DrawCard(deck_id) {
    let url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    return axios
        .get(url)
        .then((res) => {
            console.log("############## Draw Card ##############");
            return res.data;
        })
        .catch((err) => {
            console.error(err);
        });
}