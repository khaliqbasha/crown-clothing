export const addItemToCart = (cardItems, cardItemToAdd) => {
    const existingCartItem = cardItems.find(
        cardItem => cardItem.id ===  cardItemToAdd.id
    );

    if (existingCartItem) {
        return cardItems.map(cardItem => cardItem.id === cardItemToAdd.id ? {...cardItem, quantity: cardItem.quantity + 1} : cardItem);
    }
    return [...cardItems, {...cardItemToAdd, quantity: 1}]
}