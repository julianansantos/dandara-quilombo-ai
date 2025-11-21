document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    chatForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const messageText = userInput.value.trim();
        if (!messageText) return;

        
        appendMessage(messageText, "user-message", "Eu", false);
        
        userInput.value = "";
        userInput.disabled = true;
        sendBtn.disabled = true;

        
        const loadingId = appendMessage("Processando dados e formulando...", "ai-message typing", "D", false);

        try {
            const response = await fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: messageText })
            });

            const data = await response.json();
            
            removeMessage(loadingId);
            
            if (response.ok) {
                appendMessage(data.response, "ai-message", "D", true); 
            } else {
                appendMessage("Erro ao comunicar com o servidor.", "ai-message error", "!", false);
            }

        } catch (error) {
            removeMessage(loadingId);
            console.error(error);
            appendMessage("Não consegui conectar ao Quilombo Digital agora.", "ai-message error", "!", false);
        } finally {
            userInput.disabled = false;
            sendBtn.disabled = false;
            userInput.focus();
        }
    });

    function appendMessage(text, className, avatarLetter, isMarkdown) {
        const msgId = Date.now();
        const msgDiv = document.createElement("div");
        msgDiv.className = `message ${className}`;
        msgDiv.id = msgId;
        
        let content = "";
        
        if (isMarkdown && typeof marked !== 'undefined') {
            content = marked.parse(text);
        } else {
            content = `<p>${text}</p>`;
        }
        
        msgDiv.innerHTML = `
            <div class="avatar">${avatarLetter}</div>
            <div class="bubble">${content}</div>
        `;

        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
        return msgId;
    }

    function removeMessage(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }
});