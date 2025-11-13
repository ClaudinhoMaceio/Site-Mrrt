# 📋 Como Usar o Site MRRT

## ✅ Tudo em um único arquivo!

Agora todo o sistema está em **1 único arquivo `index.html`** - muito mais fácil para colocar no GitHub!

## 📁 Estrutura Simplificada

```
appmrrt/
├── index.html          ← TUDO ESTÁ AQUI! (HTML + CSS + JavaScript)
├── img/                ← Logos e imagens do site
│   ├── logo-mrrt-icon.png
│   └── logo-mrrt-text.png
├── assets/             ← Imagem do hero (opcional)
│   └── hero-home-aegea.jpg
└── fotos/              ← SUAS FOTOS VÃO AQUI (ou na raiz)
    ├── foto1.jpg
    ├── foto2.jpg
    └── ...
```

## 🖼️ Como Adicionar Fotos na Galeria

### Opção 1: Colocar na pasta `fotos/`
1. Crie uma pasta chamada `fotos` na raiz do projeto
2. Coloque suas fotos lá (ex: `foto1.jpg`, `obra1.jpg`, etc.)
3. Abra o arquivo `index.html`
4. Procure por `// LISTA DE FOTOS - ADICIONE SUAS FOTOS AQUI`
5. Adicione os caminhos das fotos, exemplo:
   ```javascript
   const mediaFiles = [
       'fotos/foto1.jpg',
       'fotos/foto2.jpg',
       'fotos/obra1.jpg',
   ];
   ```

### Opção 2: Colocar na raiz do projeto
1. Coloque as fotos direto na raiz (mesma pasta do `index.html`)
2. Adicione na lista assim:
   ```javascript
   const mediaFiles = [
       'foto1.jpg',
       'foto2.jpg',
       'obra1.jpg',
   ];
   ```

## 🚀 Como Colocar no GitHub

1. **Abra o GitHub Desktop** ou use o terminal
2. **Adicione todos os arquivos:**
   ```bash
   git add .
   ```
3. **Faça o commit:**
   ```bash
   git commit -m "Site MRRT completo"
   ```
4. **Envie para o GitHub:**
   ```bash
   git push
   ```

## 📝 Formatos Suportados

- **Imagens:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
- **Vídeos:** `.mp4`, `.webm`, `.ogg`

## ⚙️ Personalização

### Mudar o número de telefone:
Procure por `+55 11 97584-9265` no arquivo e substitua.

### Mudar o email:
Procure por `email@mrrtservicos.com` no arquivo e substitua.

### Mudar textos:
Todos os textos estão dentro do HTML, é só procurar e editar!

## 🎨 Tudo Funciona Offline

Como tudo está em um único arquivo, você pode:
- Abrir direto no navegador
- Enviar por email
- Colocar em qualquer servidor
- Usar no GitHub Pages

## 💡 Dica

Se você tiver muitas fotos, pode criar uma pasta `fotos/` e adicionar todas de uma vez na lista do JavaScript!

---

**Pronto! Agora é só adicionar suas fotos e fazer upload no GitHub!** 🎉

