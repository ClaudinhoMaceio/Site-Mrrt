# 📋 CHECKLIST - O QUE VOCÊ PRECISA FAZER

## ✅ PASSO 1: CRIAR PASTA (JÁ FEITO)
- [x] Pasta `galeria/` criada
- [x] Arquivo `.gitkeep` criado para o Git reconhecer

## 📸 PASSO 2: ADICIONAR FOTOS
- [ ] Coloque suas fotos de obras na pasta `galeria/`
- [ ] Exemplo: `galeria/obra1.jpg`, `galeria/obra2.jpg`

## ✏️ PASSO 3: EDITAR index.html
- [ ] Abra o arquivo `index.html`
- [ ] Procure por: `// LISTA DE FOTOS DA GALERIA`
- [ ] Adicione os nomes das fotos na lista `mediaFiles`
- [ ] Exemplo:
  ```javascript
  const mediaFiles = [
      'galeria/obra1.jpg',
      'galeria/obra2.jpg',
  ];
  ```

## 🚀 PASSO 4: FAZER UPLOAD NO GITHUB
- [ ] Salve o arquivo `index.html`
- [ ] Adicione tudo no Git:
  ```bash
  git add .
  git commit -m "Adicionei fotos na galeria"
  git push
  ```

---

## 📁 ESTRUTURA QUE O GITHUB VAI RECONHECER

```
appmrrt/
├── index.html          ← Edite aqui
├── galeria/            ← Coloque fotos aqui
│   ├── .gitkeep        ← Mantenha este arquivo
│   ├── obra1.jpg       ← Suas fotos aqui
│   └── obra2.jpg
├── img/                ← Logos (não mexa)
└── assets/             ← Imagens do site (não mexa)
```

---

## ⚠️ LEMBRE-SE

1. **Pasta**: `galeria/` (não `fotos/` ou `media/`)
2. **Caminho na lista**: Sempre comece com `galeria/`
3. **Formato**: Use aspas simples: `'galeria/obra1.jpg'`
4. **Remova comentários**: Tire o `//` antes do caminho

---

**Veja o arquivo `COMO-ADICIONAR-FOTOS.md` para instruções detalhadas!**

