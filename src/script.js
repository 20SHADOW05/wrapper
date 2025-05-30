import './style.css'

const sendBtn = document.getElementById('send-btn')
const userInput = document.getElementById('user-input')
const chatBox = document.getElementById('chat-box')

const API_KEY = 'API_KEY'

function addMessage(text, sender) {
    const msg = document.createElement('div')
    msg.classList.add('message', sender)
    msg.textContent = text
    chatBox.appendChild(msg)
    chatBox.scrollTop = chatBox.scrollHeight
}

sendBtn.addEventListener('click', async () => {
    const input = userInput.value.trim()
    if (!input) return

    addMessage(input, 'user')
    userInput.value = ''

    try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: input },
                ],
            }),
        })

        const data = await res.json()
        const reply = data.choices[0].message.content || 'No reply.'
        addMessage(reply, 'bot')
    } catch (err) {
        addMessage('Error talking to GPT.', 'bot')
        console.error(err)
    }
})
