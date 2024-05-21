class Card {
    constructor(id, name, effect_description, effect, point_value, uniqueness, contiuing_effect) {
        this.id = id // string
        this.name = name // string
        this.effect_description = effect_description // string
        this.effect = effect // function
        this.point_value = point_value // number
        this.uniqueness = uniqueness // boolean
        this.contiuing_effect = contiuing_effect // boolean
    }

    play() {
        // play this card
    }

}

export default Card;