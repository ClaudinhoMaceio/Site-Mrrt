# 📸 COMO ADICIONAR FOTOS NA GALERIA

## ✅ PASSO A PASSO SIMPLES

### 1️⃣ CRIE A PASTA `galeria/` (se ainda não existir)
   - A pasta já foi criada automaticamente
   - Ela está na raiz do projeto: `appmrrt/galeria/`

### 2️⃣ COLOQUE SUAS FOTOS NA PASTA `galeria/`
   - Copie suas fotos de obras para dentro da pasta `galeria/`
   - Exemplo: `galeria/obra1.jpg`, `galeria/obra2.jpg`, etc.
   - Formatos aceitos: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.mp4`, `.webm`

### 3️⃣ ABRA O ARQUIVO `index.html`
   - Procure por: `// LISTA DE FOTOS DA GALERIA`
   - Você vai encontrar uma lista assim:
   ```javascript
   const mediaFiles = [
       // ADICIONE SUAS FOTOS DE OBRAS AQUI (uma por linha):
       // 'galeria/obra1.jpg',
       // 'galeria/obra2.jpg',
   ];
   ```

### 4️⃣ ADICIONE OS NOMES DAS FOTOS NA LISTA
   - Remova o `//` (comentário) da linha
   - Adicione o nome da foto que você colocou na pasta `galeria/`
   - Exemplo:
   ```javascript
   const mediaFiles = [
       'galeria/obra1.jpg',      // ✅ Remova o // e adicione o nome
       'galeria/obra2.jpg',      // ✅ Adicione mais fotos aqui
       'galeria/obra3.jpg',      // ✅ Uma foto por linha
   ];
   ```

### 5️⃣ SALVE O ARQUIVO E ATUALIZE O SITE
   - Salve o `index.html`
   - Faça upload no GitHub
   - As fotos aparecerão automaticamente na galeria!

---

## 📁 ESTRUTURA FINAL

```
appmrrt/
├── index.html          ← Edite aqui para adicionar nomes das fotos
├── galeria/            ← Coloque suas fotos aqui
│   ├── obra1.jpg
│   ├── obra2.jpg
│   └── obra3.jpg
├── img/                ← Logos (não mexa)
└── assets/            ← Imagens do site (não mexa)
```

---

## ⚠️ IMPORTANTE

1. **Nomes das fotos**: Use nomes simples, sem espaços ou caracteres especiais
   - ✅ BOM: `obra1.jpg`, `projeto-2024.jpg`
   - ❌ RUIM: `obra 1.jpg`, `projeto@2024.jpg`

2. **Caminho correto**: Sempre use `galeria/` antes do nome da foto
   - ✅ CORRETO: `'galeria/obra1.jpg'`
   - ❌ ERRADO: `'obra1.jpg'` ou `'fotos/obra1.jpg'`

3. **Formato**: Use aspas simples `' '` ao redor do caminho
   - ✅ CORRETO: `'galeria/obra1.jpg'`
   - ❌ ERRADO: `galeria/obra1.jpg` (sem aspas)

---

## 🎯 EXEMPLO COMPLETO

Se você tem 3 fotos:
- `galeria/obra1.jpg`
- `galeria/obra2.jpg`
- `galeria/obra3.jpg`

No `index.html`, a lista deve ficar assim:

```javascript
const mediaFiles = [
    'galeria/obra1.jpg',
    'galeria/obra2.jpg',
    'galeria/obra3.jpg',
];
```

---

## 🚀 DEPOIS DE ADICIONAR

1. Salve o arquivo `index.html`
2. Faça commit no Git:
   ```bash
   git add .
   git commit -m "Adicionei fotos na galeria"
   git push
   ```
3. As fotos aparecerão no site!

---

## ❓ PROBLEMAS COMUNS

**As fotos não aparecem?**
- ✅ Verifique se o nome da foto na lista está igual ao nome do arquivo
- ✅ Verifique se o caminho começa com `galeria/`
- ✅ Verifique se você removeu o `//` (comentário)
- ✅ Verifique se a foto está realmente na pasta `galeria/`

**A pasta galeria não existe?**
- Crie manualmente: `appmrrt/galeria/`
- Ou o arquivo `.gitkeep` já foi criado automaticamente

---

**Pronto! Agora é só adicionar suas fotos e atualizar a lista!** 📸✨

