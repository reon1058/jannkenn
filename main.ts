radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.pause(1000)
    if (receivedNumber == relaese && (receivedNumber == relaese2 && relaese == relaese2)) {
        basic.showIcon(IconNames.Triangle)
    } else if (receivedNumber == 0 && (relaese == 1 && relaese2 == 2)) {
        basic.showIcon(IconNames.Triangle)
    } else if (receivedNumber == 0 && relaese == 2 && relaese2 == 1) {
        basic.showIcon(IconNames.Triangle)
    } else if (receivedNumber == 1 && (relaese == 0 && relaese2 == 2)) {
        basic.showIcon(IconNames.Triangle)
    } else if (receivedNumber == 1 && (relaese == 2 && relaese2 == 0)) {
        basic.showIcon(IconNames.Triangle)
    } else if (receivedNumber == 2 && (relaese == 0 && relaese2 == 1)) {
        basic.showIcon(IconNames.Triangle)
    } else if (receivedNumber == 2 && (relaese == 1 && relaese2 == 0)) {
        basic.showIcon(IconNames.Triangle)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
    radio.sendNumber(0)
    relaese = 0
    relaese2 = 0
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    radio.sendNumber(2)
    relaese = 2
    relaese2 = 2
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(1)
    relaese = 1
    relaese2 = 1
})
let relaese2 = 0
let relaese = 0
radio.setGroup(167)
basic.forever(function () {
	
})
