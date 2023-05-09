input.onButtonPressed(Button.A, function () {
    Pedra_LE = randint(0, 6)
    basic.showNumber(Pedra_LE)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    Pedra_LD = randint(0, 6)
    basic.showNumber(Pedra_LD)
    basic.pause(500)
    if (Pedra_LE == Jogo_LD) {
        Jogo_LD = Pedra_LD
        pontos += 1
    } else if (Pedra_LD == Jogo_LE) {
        Jogo_LE = Pedra_LE
        pontos += 1
    } else if (Pedra_LD == Jogo_LD) {
        Temp = Pedra_LD
        Pedra_LD = Pedra_LE
        Pedra_LE = Temp
        Jogo_LD = Pedra_LD
        pontos += 1
    } else if (Pedra_LE == Jogo_LE) {
        Temp = Pedra_LE
        Pedra_LD = Pedra_LE
        Pedra_LE = Temp
        Jogo_LD = Jogo_LE
        pontos += 1
    } else {
        pontos += -1
    }
    basic.clearScreen()
    basic.pause(5000)
    basic.showNumber(Jogo_LE)
    basic.pause(5000)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showNumber(Jogo_LD)
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pontos)
})
let Temp = 0
let Jogo_LD = 0
let Jogo_LE = 0
let Pedra_LD = 0
let Pedra_LE = 0
let pontos = 0
pontos = 5
Pedra_LE = randint(0, 6)
basic.showNumber(Pedra_LE)
basic.pause(500)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
Pedra_LD = randint(0, 6)
basic.showNumber(Pedra_LD)
basic.pause(500)
Jogo_LE = Pedra_LE
Jogo_LD = Pedra_LD
basic.forever(function () {
	
})
