# 📂 Estrutura Completa do Projeto MRRT

Este documento descreve a estrutura completa do projeto para garantir que o GitHub reconheça todos os arquivos.

## Estrutura de Pastas

```
appmrrt/
│
├── 📁 assets/              # Recursos gerais (imagens de hero, etc.)
│   ├── .gitkeep           # Garante que a pasta seja reconhecida pelo Git
│   ├── hero-home-aegea.jpg
│   └── engenheiro-obra-nossos-servicos.jpg
│
├── 📁 css/                 # Estilos CSS
│   ├── style-base.css     # Estilos base e variáveis
│   ├── home.css           # Estilos da página inicial
│   ├── contato.css        # Estilos da página de contato
│   ├── quem-somos.css     # Estilos da página quem somos
│   ├── servicos.css       # Estilos da página de serviços
│   └── galeria.css        # Estilos da galeria
│
├── 📁 img/                 # Imagens do site
│   ├── .gitkeep           # Garante que a pasta seja reconhecida pelo Git
│   ├── logo-mrrt-icon.png
│   ├── logo-mrrt-text.png
│   └── [outras imagens]
│
├── 📁 js/                  # Scripts JavaScript
│   ├── script-base.js     # Scripts base (menu, busca)
│   ├── home.js            # Scripts da página inicial
│   ├── contato.js          # Scripts do formulário de contato
│   ├── galeria.js          # Scripts da galeria
│   └── galeria-config.js  # Configuração da galeria
│
├── 📁 media/               # Galeria de fotos e vídeos
│   ├── .gitkeep           # Garante que a pasta seja reconhecida pelo Git
│   └── README.md          # Instruções sobre como usar
│
├── 📄 index.html          # Página inicial
├── 📄 contato.html        # Página de contato
├── 📄 quem-somos.html     # Página sobre a empresa
├── 📄 servicos.html       # Página de serviços
│
├── 📄 .gitignore          # Arquivos ignorados pelo Git
├── 📄 .gitattributes      # Configurações do Git
├── 📄 README.md           # Documentação principal
└── 📄 INSTRUCOES-GALERIA.md # Instruções da galeria
```

## ✅ Arquivos .gitkeep

Os arquivos `.gitkeep` foram criados nas pastas vazias para garantir que o Git as reconheça:

- `assets/.gitkeep`
- `img/.gitkeep`
- `media/.gitkeep`

## 📝 Como Adicionar ao GitHub

1. **Inicialize o repositório Git** (se ainda não foi feito):
   ```bash
   git init
   ```

2. **Adicione todos os arquivos**:
   ```bash
   git add .
   ```

3. **Faça o commit inicial**:
   ```bash
   git commit -m "Initial commit - Site MRRT completo"
   ```

4. **Conecte ao GitHub**:
   ```bash
   git remote add origin [URL_DO_SEU_REPOSITORIO]
   git branch -M main
   git push -u origin main
   ```

## 🔍 Verificação

Para verificar se todas as pastas foram reconhecidas:

```bash
git status
```

Todas as pastas devem aparecer na lista de arquivos rastreados.

## 📌 Notas Importantes

- As pastas `assets/`, `img/` e `media/` têm arquivos `.gitkeep` para serem reconhecidas mesmo quando vazias
- O arquivo `.gitignore` está configurado para não ignorar arquivos importantes
- Todos os caminhos nos arquivos HTML estão relativos e funcionarão no GitHub Pages

