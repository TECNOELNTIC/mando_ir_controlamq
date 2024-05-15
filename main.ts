IR.IR_callbackUser(function (message) {
    if (message == 6) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (message == 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (message == 7) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        basic.pause(250)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (message == 5) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        basic.pause(250)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
basic.forever(function () {
	
})
