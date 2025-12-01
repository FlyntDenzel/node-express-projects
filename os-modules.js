const os = require("os")

//get current user info
const user = os.userInfo()
console.log(user)

//check user awakeTime
const awakeTime = os.uptime()
console.log(`The awake Time of your laptop is ${awakeTime} seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(`This is your system's information `, currentOS)