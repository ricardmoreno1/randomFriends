const messages = [
    "Mary",
    "Caroline",
    "Hugo",
    "Ale",
    "Heliane",
    "Mara",
    "Cynthia",
    "Garo",
    "Michel",
    "Ysai",
    "Ezri",
    "Abi"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length )]
    console.log(message)
}
module.exports = { randomMsg };