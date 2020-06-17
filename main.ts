radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.pause(200)
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Triangle)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
    radio.sendNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(1)
})
radio.setGroup(167)
basic.forever(function () {
	
})
