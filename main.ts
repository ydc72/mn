input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.showNumber(
    0,
    0,
    r,
    1
    )
})
let r = 0
OLED12864_I2C.init(60)
basic.forever(function () {
    r = pins.digitalReadPin(DigitalPin.P1)
})
