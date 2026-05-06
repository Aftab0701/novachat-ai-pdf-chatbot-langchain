# NovaChat AI: Intelligent PDF Conversational Agent

NovaChat AI is a high-performance, customizable AI agent designed to "ingest" PDF documents, store embeddings in a vector database, and provide intelligent, context-aware answers to user queries. Built with **LangChain** and **LangGraph**, it offers a robust architecture for production-ready AI applications.

Developed by **Aftab**.

---

## 🚀 Features

- **Dynamic Ingestion Graph**: Efficiently parse and index PDF documents into a Supabase vector store.
- **Advanced Retrieval Graph**: Intelligent routing logic that decides whether to retrieve context or provide direct answers.
- **Streaming UI**: Real-time response streaming for a smooth, modern chat experience.
- **Stateful Orchestration**: Powered by LangGraph to manage complex conversational flows and document retrieval states.
- **Modern Next.js Frontend**: Sleek, responsive interface with multi-file upload support and glassmorphic design.

---

## 🏗️ Architecture Overview

```ascii
┌─────────────────────┐    1. Upload PDFs    ┌───────────────────────────┐
│ Frontend (Next.js)  │ ────────────────────> │ Backend (LangGraph)       │
│ - Modern UI w/ Chat │                      │ - Ingestion Graph         │
│ - Multi-PDF Support │ <────────────────────┤ - Vector Embeddings       │
└─────────────────────┘    2. Confirmation   │ - Supabase Storage        │
                                             └───────────────────────────┘

┌─────────────────────┐    3. Ask Questions  ┌───────────────────────────┐
│ Frontend (Next.js)  │ ────────────────────> │ Backend (LangGraph)       │
│ - SSE Streaming     │                      │ - Retrieval Graph         │
│ - Source Citations  │ <────────────────────┤ - OpenAI / LLM            │
└─────────────────────┘ 4. Streamed Answers  └───────────────────────────┘
```

---

## 🛠️ Prerequisites

1. **Node.js v18+** (v20 recommended)
2. **Yarn** or **npm**
3. **Supabase Project**: For vector storage (requires `documents` table and `match_documents` function).
4. **OpenAI API Key**: Or any LLM provider supported by LangChain.
5. **LangChain API Key**: (Optional) For tracing and debugging via LangSmith.

---

## ⚙️ Installation & Setup

1. **Clone the project**:
   ```bash
   git clone <your-repo-url>
   cd novachat-ai
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   ```

3. **Configure Environment Variables**:
   Follow the `.env.example` files in both `frontend` and `backend` directories.

---

## 💻 Local Development

This project uses **Turborepo** to manage the monorepo.

### Start Backend
```bash
cd backend
yarn langgraph:dev
```
*Launches LangGraph server on port 2024.*

### Start Frontend
```bash
cd frontend
yarn dev
```
*Launches Next.js app on port 3000.*

---

## 📄 Usage

1. **Ingest Documents**: Click the paperclip icon to upload PDFs. NovaChat AI will process and store them.
2. **Chat**: Ask questions related to your documents. The AI will cite sources for its answers.
3. **Analyze**: Use the "View Sources" feature to see exactly which part of the PDF was used.

---

## 🛡️ License

Distributed under the MIT License. See `LICENSE` for more information.

Developed with ❤️ by [Aftab](https://github.com/your-github-username).
