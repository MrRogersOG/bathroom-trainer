let menuOptions: string[] = ["吃 / Eat", "喝 / Drink", "厕所 / Bathroom"]
let selectedIndex = 0
let eventLog: { type: number, time: number }[] = []

let bathroomTimerStart = -1
let bathroomTimerDuration = 3600000
let alarmStartTime = 0
let alarmPlaying = false
let alarmTriggered = false

let dummy: Image = null
let cursor: Sprite = null

scene.setBackgroundColor(1)

// Create a custom image sprite for the "A" cursor
let cursorImage = image.create(10, 10)
cursorImage.fill(0)
cursorImage.print("A", 1, 1, 7)
cursor = sprites.create(cursorImage, SpriteKind.Player)
cursor.setPosition(5, 24 + selectedIndex * 20)

// Function to start alarm loop
function playBathroomAlarm() {
    alarmPlaying = true
    alarmStartTime = control.millis()
}

// Move cursor up when up button is pressed
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    selectedIndex = (selectedIndex - 1 + menuOptions.length) % menuOptions.length
    cursor.setPosition(5, 24 + selectedIndex * 20)
})

// Move cursor down when down button is pressed
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    selectedIndex = (selectedIndex + 1) % menuOptions.length
    cursor.setPosition(5, 24 + selectedIndex * 20)
})

// Manual alarm trigger for training (B button)
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    playBathroomAlarm()
})

// Stop alarm with right button
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    alarmPlaying = false
})

// Log selection when A button is pressed
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    eventLog.push({
        type: selectedIndex,
        time: control.millis()
    })
    music.baDing.play()

    if (selectedIndex == 0 || selectedIndex == 1) {
        bathroomTimerStart = control.millis()
        alarmTriggered = false
    } else if (selectedIndex == 2) {
        bathroomTimerStart = -1
        alarmTriggered = false
        alarmPlaying = false
    }

    selectedIndex = 0
    cursor.setPosition(5, 24 + selectedIndex * 20)
})

// Paint screen
game.onPaint(function () {
    for (let i = 0; i < menuOptions.length; i++) {
        screen.print(menuOptions[i], 10, 20 + i * 20, 15)
    }

    // Show "→ Stop Alarm" just below the menu if alarm is active
    if (alarmPlaying) {
        screen.print("→ Stop Alarm", 10, 20 + menuOptions.length * 20 - 4, 2)
    }

    // Show countdown if active
    if (bathroomTimerStart >= 0) {
        let elapsed = control.millis() - bathroomTimerStart
        let remaining = Math.max(0, bathroomTimerDuration - elapsed)
        let minutesLeft = Math.idiv(remaining, 60000)

        if (remaining == 0 && !alarmTriggered) {
            playBathroomAlarm()
            alarmTriggered = true
        }

        screen.print("Bathroom in: " + minutesLeft + " min", 10, 90, 7)

        let barColor = 7
        if (minutesLeft <= 20) {
            barColor = 2
        } else if (minutesLeft <= 40) {
            barColor = 4
        }

        let barMaxWidth = 140
        let barWidth = Math.idiv(remaining * barMaxWidth, bathroomTimerDuration)
        screen.fillRect(10, 100, barWidth, 8, barColor)
    }
})

// Loop alarm melody every 1.3 seconds for up to 60 seconds
game.onUpdateInterval(1300, function () {
    if (alarmPlaying && control.millis() - alarmStartTime < 60000) {
        music.playMelody("C5 C5 G A G C5 G A", 450)
    } else {
        alarmPlaying = false
    }
})

// Prevent device timeout by simulating activity every 30 seconds
game.onUpdateInterval(30000, function () {
    dummy = image.create(1, 1)
    dummy.setPixel(0, 0, 1)
})