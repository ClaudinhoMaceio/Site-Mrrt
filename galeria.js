// Sistema de Galeria Automática - Detecta e exibe mídias da pasta media/

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryLoading = galleryGrid.querySelector('.gallery-loading');
    const galleryEmpty = document.querySelector('.gallery-empty');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxInfo = document.getElementById('lightbox-info');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let allMediaItems = [];
    let filteredMediaItems = [];
    let currentMediaIndex = 0;
    let currentFilter = 'all';

    // Lista de extensões suportadas
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const videoExtensions = ['.mp4', '.webm', '.ogg'];

    // Lista de mídias - Adicione seus arquivos aqui
    // Você pode adicionar arquivos diretamente nesta lista ou usar o arquivo galeria-config.js
    const mediaFiles = [
        // Exemplos (descomente e adicione seus arquivos):
        // 'media/obra-01.jpg',
        // 'media/obra-02.jpg',
        // 'media/obra-03.jpg',
        // 'media/video-obra.mp4',
        // 'media/projeto-saneamento.jpg',
        
        // Você também pode usar subpastas:
        // 'media/obras/2024/obra-janeiro.jpg',
        // 'media/videos/projeto-em-acao.mp4',
    ];

    // Função para detectar automaticamente arquivos na pasta media
    // Nota: Em um ambiente real, isso precisaria de um backend
    // Por enquanto, vamos usar uma abordagem que funciona com arquivos estáticos
    function detectMediaFiles() {
        // Esta função tentará carregar arquivos comuns
        // Você pode adicionar seus próprios arquivos na lista abaixo
        const commonNames = [
            'obra', 'projeto', 'trabalho', 'servico', 'construcao',
            'instalacao', 'manutencao', 'rede', 'agua', 'esgoto'
        ];
        
        const detectedFiles = [];
        
        // Tenta detectar arquivos com nomes comuns
        // Em produção, você teria uma lista real de arquivos do servidor
        return detectedFiles;
    }

    // Função para verificar se um arquivo existe
    function checkFileExists(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => {
                // Para vídeos, tenta carregar como vídeo
                const video = document.createElement('video');
                video.onloadeddata = () => resolve(true);
                video.onerror = () => resolve(false);
                video.src = url;
            };
            img.src = url;
        });
    }

    // Função para obter tipo de mídia
    function getMediaType(filename) {
        const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'));
        if (imageExtensions.includes(ext)) return 'image';
        if (videoExtensions.includes(ext)) return 'video';
        return null;
    }

    // Função para criar item da galeria
    function createGalleryItem(mediaPath, index) {
        const mediaType = getMediaType(mediaPath);
        if (!mediaType) return null;

        const item = document.createElement('div');
        item.className = `gallery-item ${mediaType}-item`;
        item.dataset.index = index;
        item.dataset.type = mediaType;
        item.style.animationDelay = `${index * 0.1}s`;

        const badge = document.createElement('div');
        badge.className = 'gallery-item-badge';
        badge.textContent = mediaType === 'image' ? 'Foto' : 'Vídeo';
        item.appendChild(badge);

        if (mediaType === 'image') {
            const img = document.createElement('img');
            img.src = mediaPath;
            img.alt = `Obra ${index + 1}`;
            img.loading = 'lazy';
            img.onerror = () => item.remove();
            item.appendChild(img);
        } else {
            const video = document.createElement('video');
            video.src = mediaPath;
            video.preload = 'metadata';
            video.muted = true;
            video.onerror = () => item.remove();
            
            // Thumbnail do vídeo
            video.addEventListener('loadedmetadata', () => {
                video.currentTime = 1; // Pega frame do segundo 1
            });
            
            item.appendChild(video);
        }

        item.addEventListener('click', () => openLightbox(index));
        return item;
    }

    // Função para carregar galeria
    async function loadGallery() {
        galleryLoading.style.display = 'block';
        galleryEmpty.classList.add('hidden');
        
        // Limpa a galeria
        galleryGrid.innerHTML = '';
        galleryGrid.appendChild(galleryLoading);

        allMediaItems = [];
        
        // Se houver arquivos na lista, usa eles
        if (mediaFiles.length > 0) {
            for (let i = 0; i < mediaFiles.length; i++) {
                const file = mediaFiles[i];
                const item = createGalleryItem(file, i);
                if (item) {
                    allMediaItems.push({ path: file, type: getMediaType(file) });
                }
            }
        } else {
            // Tenta detectar arquivos automaticamente na pasta media
            // Gera uma lista de possíveis nomes de arquivos
            const possibleFiles = [];
            
            // Tenta números de 1 a 30 com diferentes prefixos
            const prefixes = ['obra', 'projeto', 'trabalho', 'servico', 'construcao'];
            const imageExts = ['.jpg', '.jpeg', '.png'];
            const videoExts = ['.mp4', '.webm'];
            
            for (let i = 1; i <= 30; i++) {
                const num = i.toString().padStart(2, '0');
                prefixes.forEach(prefix => {
                    imageExts.forEach(ext => {
                        possibleFiles.push(`media/${prefix}-${num}${ext}`);
                    });
                });
                videoExts.forEach(ext => {
                    possibleFiles.push(`media/video-${num}${ext}`);
                });
            }
            
            // Verifica quais existem (limitado para performance)
            let checked = 0;
            const maxChecks = 50;
            
            for (let i = 0; i < Math.min(possibleFiles.length, maxChecks) && checked < maxChecks; i++) {
                const path = possibleFiles[i];
                const exists = await checkFileExists(path);
                checked++;
                
                if (exists) {
                    const item = createGalleryItem(path, allMediaItems.length);
                    if (item) {
                        allMediaItems.push({ path: path, type: getMediaType(path) });
                    }
                }
            }
        }

        galleryLoading.style.display = 'none';
        
        if (allMediaItems.length === 0) {
            galleryEmpty.classList.remove('hidden');
            return;
        }

        filterMedia(currentFilter);
    }

    // Função para filtrar mídias
    function filterMedia(filter) {
        currentFilter = filter;
        filteredMediaItems = filter === 'all' 
            ? allMediaItems 
            : allMediaItems.filter(item => item.type === filter);

        galleryGrid.innerHTML = '';
        
        if (filteredMediaItems.length === 0) {
            galleryEmpty.classList.remove('hidden');
            return;
        }

        galleryEmpty.classList.add('hidden');

        filteredMediaItems.forEach((item, index) => {
            const galleryItem = createGalleryItem(item.path, index);
            if (galleryItem) {
                galleryItem.dataset.originalIndex = allMediaItems.indexOf(item);
                galleryGrid.appendChild(galleryItem);
            }
        });
    }

    // Função para abrir lightbox
    function openLightbox(index) {
        currentMediaIndex = index;
        const media = filteredMediaItems[index];
        
        lightboxContent.innerHTML = '';
        
        if (media.type === 'image') {
            const img = document.createElement('img');
            img.src = media.path;
            img.alt = `Obra ${index + 1}`;
            lightboxContent.appendChild(img);
        } else {
            const video = document.createElement('video');
            video.src = media.path;
            video.controls = true;
            video.autoplay = true;
            lightboxContent.appendChild(video);
        }

        lightboxInfo.textContent = `${index + 1} / ${filteredMediaItems.length}`;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Função para fechar lightbox
    function closeLightbox() {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
        const video = lightboxContent.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }

    // Função para navegar no lightbox
    function navigateLightbox(direction) {
        if (direction === 'next') {
            currentMediaIndex = (currentMediaIndex + 1) % filteredMediaItems.length;
        } else {
            currentMediaIndex = (currentMediaIndex - 1 + filteredMediaItems.length) % filteredMediaItems.length;
        }
        openLightbox(currentMediaIndex);
    }

    // Event Listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterMedia(btn.dataset.filter);
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
    lightboxNext.addEventListener('click', () => navigateLightbox('next'));

    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });

    // Navegação com teclado
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox('prev');
        if (e.key === 'ArrowRight') navigateLightbox('next');
    });

    // Carrega a galeria ao iniciar
    loadGallery();

    // Atualiza a galeria a cada 30 segundos (para detectar novos arquivos)
    setInterval(() => {
        loadGallery();
    }, 30000);
});

