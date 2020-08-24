radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    radio.sendNumber(0)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        . . . . .
        `)
})
