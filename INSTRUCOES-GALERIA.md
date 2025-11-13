# 📸 Instruções da Galeria de Obras

## Como Adicionar Fotos e Vídeos

### Método 1: Adicionar arquivos diretamente na pasta `media/`

1. Coloque suas fotos e vídeos na pasta `media/`
2. Use nomes como:
   - `obra-01.jpg`, `obra-02.jpg`, etc.
   - `projeto-01.jpg`, `projeto-02.jpg`, etc.
   - `video-01.mp4`, `video-02.mp4`, etc.
3. Os arquivos aparecerão automaticamente na galeria!

### Método 2: Adicionar lista manual no código

1. Abra o arquivo `js/galeria.js`
2. Encontre a seção `const mediaFiles = [`
3. Adicione os caminhos dos seus arquivos:
   ```javascript
   const mediaFiles = [
       'media/minha-foto-01.jpg',
       'media/minha-foto-02.jpg',
       'media/meu-video.mp4',
   ];
   ```

## Formatos Suportados

### Fotos:
- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.gif`

### Vídeos:
- `.mp4` (recomendado)
- `.webm`
- `.ogg`

## Funcionalidades da Galeria

✅ **Filtros**: Filtre por "Todas", "Fotos" ou "Vídeos"
✅ **Lightbox**: Clique em qualquer mídia para ver em tela cheia
✅ **Navegação**: Use as setas ou teclado (← →) para navegar
✅ **Responsivo**: Funciona perfeitamente em mobile e desktop
✅ **Animação**: Efeitos suaves e modernos

## Dicas

- Use imagens com boa qualidade (mínimo 800x600px)
- Para vídeos, use formato MP4 para melhor compatibilidade
- Organize seus arquivos com nomes descritivos
- A galeria atualiza automaticamente a cada 30 segundos

## Estrutura Recomendada

```
media/
  ├── obra-01.jpg
  ├── obra-02.jpg
  ├── obra-03.jpg
  ├── video-01.mp4
  └── projeto-saneamento.jpg
```

Ou organize em subpastas:

```
media/
  ├── fotos/
  │   ├── obra-01.jpg
  │   └── obra-02.jpg
  └── videos/
      └── projeto.mp4
```

**Nota**: Se usar subpastas, adicione o caminho completo no código, exemplo: `media/fotos/obra-01.jpg`

