//Positive Mixed Messages

// 2 - random number
const randomNumber = num => {
    return Math.floor(Math.random() * num)        
}

// 1 - object wth arrays of messages
    const positiveMessages = {
        day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        message: ['Will come true', 'Is not possible', 'Maybe become true', 'There is no way to became true'],
        believe: ['Believe it', 'Dont believe it', 'Work hard to got it']
    }

// 3 - empty random array to storage
let positiveMessage = []

// 4 - iterate over the object
for (let prop in positiveMessages) {
    let optionId = randomNumber(positiveMessages[prop].length)

    //  use the object's properties to customize the message 
    switch(prop) {
        case 'day':
            positiveMessage.push(`This day: ${positiveMessages[prop][optionId]}.`)
            break
        case 'message':
            positiveMessage.push(`Your Wish: ${positiveMessages[prop][optionId]}.`)
            break
        case 'believe':
            positiveMessage.push(`Do should: ${positiveMessages[prop][optionId]}.`)
            break
        default:
            positiveMessage.push(`can't see.`)
    }
}

const formatMessage = messageToFormat => {
    const formatted = positiveMessage.join('\n')
    console.log(formatted);
}

formatMessage(positiveMessage)

