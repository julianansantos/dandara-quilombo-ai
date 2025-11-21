import os
from flask import Flask, render_template, request, jsonify
from openai import AzureOpenAI
from config import Config    

app = Flask(__name__)
app.config.from_object(Config) 

client = AzureOpenAI(
    azure_endpoint=app.config["AZURE_OPENAI_ENDPOINT"],
    api_key=app.config["AZURE_OPENAI_KEY"],
    api_version=app.config["AZURE_OPENAI_API_VERSION"]
)

def load_system_prompt():
    try:
        base_dir = os.path.dirname(os.path.abspath(__file__))
        prompt_path = os.path.join(base_dir, "data", "system_prompt.txt")
        
        with open(prompt_path, "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        print("ERRO: Arquivo system_prompt.txt não encontrado em 'data/'.")
        return "Você é uma assistente útil."

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    try:
        user_message = request.json.get("message")
        if not user_message:
            return jsonify({"error": "Mensagem vazia"}), 400

        system_instruction = load_system_prompt()

        
        response = client.chat.completions.create(
            model=app.config["AZURE_OPENAI_DEPLOYMENT_NAME"],
            messages=[
                {"role": "system", "content": system_instruction},
                {"role": "user", "content": user_message}
            ],
            temperature=0.7,
            max_tokens=500
        )

        usage = response.usage
        print("-" * 30)
        print(f"💰 CUSTO DA MENSAGEM:")
        print(f"📥 Entrada (Prompt): {usage.prompt_tokens} tokens")
        print(f"📤 Saída (Dandara): {usage.completion_tokens} tokens")
        print(f"📊 Total: {usage.total_tokens} tokens")
        print("-" * 30)

        ai_message = response.choices[0].message.content
        return jsonify({"response": ai_message})

    except Exception as e:
        print(f"[ERRO] {e}")
        return jsonify({
            "response": "Minha irmã, houve uma instabilidade na conexão do nosso quilombo digital. Tente novamente em alguns instantes."
        }), 500

if __name__ == "__main__":
    app.run(port=5000)