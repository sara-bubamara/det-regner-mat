input.onButtonPressed(Button.A, function () {
    spiller.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    spiller.change(LedSpriteProperty.X, 1)
})
let spiller: game.LedSprite = null
spiller = game.createSprite(2, 4)
let mat = game.createSprite(2, 2)
let liv = 3
game.setScore(0)
mat.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    mat.set(LedSpriteProperty.X, randint(0, 4))
    mat.set(LedSpriteProperty.Y, 0)
    basic.pause(300)
    for (let index = 0; index < 4; index++) {
        mat.change(LedSpriteProperty.Y, 1)
        basic.pause(300)
    }
    if (spiller.isTouching(mat)) {
        game.addScore(1)
    } else {
        liv += -1
        if (liv == 0) {
            game.gameOver()
        }
    }
})
