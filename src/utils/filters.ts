import {cards} from "@/utils/cards";

const filters: string[] = []

for (const card of cards) {
    if (!filters.includes(card.edition)) {
        filters.push(card.edition)
    }
}

export { filters }
