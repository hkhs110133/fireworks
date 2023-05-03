let a = 10
for (let index = 0; index < 10; index++) {
    a += -1
    basic.showNumber(a)
    basic.pause(1000)
}
while (true) {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Chessboard)
}
