export default interface ICard {
    edition: string,
    text: string,
    info: {
        specialties: [
            {
                title: string,
                text: string,
            }
        ]
    }
}
