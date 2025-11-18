# Dandara: A IA Mentora do Quilombo Digital ✊🏿💻🏳️‍🌈

> *"Não apenas ensina a jogar o jogo, mas ensina como mudar o jogo."*

![Azure AI](https://img.shields.io/badge/Azure%20AI-OpenAI-0078D4?style=for-the-badge&logo=microsoftazure)
![Python](https://img.shields.io/badge/Python-Flask-3776AB?style=for-the-badge&logo=python)
![Status](https://img.shields.io/badge/Status-MVP-success?style=for-the-badge)

## 📜 Sobre o Projeto

Este projeto apresenta **Dandara**, uma agente de IA disruptiva e um espaço de *aquilombamento digital*, criada para o empoderamento interseccional de mulheres negras e/ou lésbicas na área de tecnologia.

Diferente de bots genéricos de "empoderamento", a Dandara foi arquitetada para entender que os desafios de uma mulher negra ou lésbica na tecnologia não são resolvidos apenas com "confiança". Ela oferece **estratégia**, dados e acolhimento.

### 🎯 A Persona (System Prompt)
A "alma" da Dandara reside em seu *System Prompt* refinado no Azure OpenAI. Ela é uma Engenheira de Software Sênior, ativista, cria da comunidade, direta e acolhedora.
* **Voz:** Incisiva, estratégica, sem jargões corporativos vazios ("papo reto").
* **Missão:** Mentoria técnica de ponta e navegação de carreira em ambientes hostis.

---

## 🚀 Funcionalidades do MVP

A Dandara atua em duas frentes principais nesta versão:

### 1. A Engenheira Sênior (Mentoria Técnica)
Foca na excelência técnica e boas práticas, exigindo qualidade.
* **Especialidades:** SDLC, Clean Code, Arquitetura de Software.
* **Linguagens:** Foco especialista em Java (Spring) e PHP (Laravel).
* **Abordagem:** "O código é a nossa casa. Deve ser limpo e seguro para quem vem depois."

### 2. A Estrategista de Quilombo (Carreira Interseccional)
Foca em sobrevivência e ascensão corporativa.
* **Navegação de Vieses:** Identifica e valida microagressões (manterrupting, gaslighting, viés de afinidade).
* **Negociação Baseada em Dados:** Ajuda a estruturar pedidos de aumento/promoção quantificando entregas para combater a lacuna salarial.
* **Acolhimento:** Um espaço seguro para validar sentimentos antes de traçar o plano de ação.

---

## 🛠️ Stack Tecnológica

O projeto segue uma arquitetura leve e focada na entrega de valor imediato (MVP):

* **Inteligência (Core):** [Azure OpenAI Service](https://azure.microsoft.com/en-us/products/ai-services/openai-service). É o cérebro que processa a persona.
* **Backend:** Python com **Flask**. Micro-framework robusto para gerenciar as rotas e a conexão segura com a API.
* **Frontend:** HTML5, CSS3 e JavaScript (Vanilla). Interface limpa, acessível e com identidade visual "Tech Ancestral".

---

## 🔮 Roadmap & Evolução Futura

Este projeto foi desenhado com escalabilidade em mente. Os próximos passos de desenvolvimento já estão mapeados:

* [ ] **Migração do Frontend para Angular:** Evolução da interface atual para um SPA (Single Page Application) robusto utilizando Angular (v16+), visando componentização, tipagem estrita e escalabilidade de módulos.
* [ ] **Implementação de RAG (Retrieval-Augmented Generation):** Integração com Azure AI Search para permitir que a Dandara consulte uma base de conhecimento curada (artigos, leis, dados de mercado) antes de responder.
* [ ] **Análise de Sentimento:** Integração com Azure AI Language para detectar o estado emocional da usuária e adaptar o tom da resposta (empático vs. técnico) automaticamente.
* [ ] **Autenticação e Histórico:** Persistência de conversas e perfis de usuário.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
* Python 3.8+ instalado.
* Uma conta no **Microsoft Azure** com o serviço **Azure OpenAI** ativo.
* Um deploy de modelo (ex: `gpt-35-turbo`) criado no Azure OpenAI Studio.

### Passo a Passo

1.  **Clone este repositório**
    ```bash
    git clone [https://github.com/julianansantos/dandara-quilombo-ai.git](https://github.com/seu-usuario/dandara-quilombo-ai.git)
    cd dandara-quilombo-ai
    ```

2.  **Configure as Variáveis de Ambiente**
    Renomeie o arquivo `.env.example` para `.env` e preencha com suas credenciais da Azure:
    ```bash
    cp .env.example .env
    ```
    *Edite o arquivo `.env` com:*
    ```ini
    AZURE_OPENAI_ENDPOINT="[https://SEU-RECURSO.openai.azure.com/](https://SEU-RECURSO.openai.azure.com/)"
    AZURE_OPENAI_KEY="SUA_CHAVE_AQUI"
    AZURE_OPENAI_DEPLOYMENT_NAME="NOME_DO_DEPLOY_NO_AZURE"
    ```

3.  **Instale as Dependências**
    Recomenda-se usar um ambiente virtual (`venv`):
    ```bash
    python3 -m venv .venv
    source .venv/bin/activate  # No Windows: .venv\Scripts\activate
    pip install -r requirements.txt
    ```

4.  **Execute a Aplicação**
    ```bash
    flask run
    ```
    O servidor iniciará em `http://127.0.0.1:5000`.

---

## ⚖️ Direitos de Uso e Propriedade Intelectual

Este projeto foi desenvolvido exclusivamente como submissão para o **Azure Frontier Girls AI Challenge**.

* **Propriedade:** Todo o código fonte, design da persona e *System Prompt* são propriedade intelectual da autora.
* **Uso:** O código é disponibilizado para fins de avaliação pelos jurados do desafio. A reprodução, distribuição ou uso comercial sem autorização expressa são vetados.

---
<p align="center">
  Desenvolvido por <strong>Juliana Nascimento</strong>.
</p>