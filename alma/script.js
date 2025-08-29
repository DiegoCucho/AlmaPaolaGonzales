// Variables globales
let currentImageIndex = 0;
let musicPlaying = false;
let celebrationStarted = false;

// Datos de la galería
const galleryData = [
    {
        title: "Nuestro Primer Viaje",
        description: "Algun día descubrimos que viajar juntos sera un recuerdo muy bonito, nose que lugares te gustaria visitar pero, de que te secuestro de Mexico, te secuestro."
    },
    {
        title: "Cena Bajo las Estrellas",
        description: "La noche perfecta, solo tú y yo, las estrellas seran testigos de nuestras promesas de amor eterno."
    },
    {
        title: "Caminando en la Playa",
        description: "Descalzos por la arena, hablando de sueños, la vida que voy a pasar contigo hasta envejecer."
    },
    {
        title: "Atardecer Perfecto",
        description: "Cuando el cielo se pinte de colores, igual que mi corazón se pintó de amor por ti jsjs."
    },
    {
        title: "Risas y Diversión",
        description: "Cuando riamos hasta que nos duela el estómago, que ya de por si tu voz me encanta..."
    },
    {
        title: "Picnic Dominical",
        description: "Los domingos perfectos empiezan y terminan contigo, cada momento es un regalo :3."
    }
];

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    createParticles();
    setupCursor();
    calculateDaysTogether();
    setupScrollAnimations();
    setupInteractiveElements();
});

// Inicializar el sitio web
function initializeWebsite() {
    console.log('🎂 ¡Página de cumpleaños cargada con amor! 💕');
    
    // Crear efecto de entrada
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
    
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        showWelcomeMessage();
    }, 2000);
}

// Mostrar mensaje de bienvenida
function showWelcomeMessage() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ff6b9d, #c44569);
            color: white;
            padding: 30px 40px;
            border-radius: 20px;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 20px 60px rgba(255, 107, 157, 0.4);
            animation: welcomeSlide 0.8s ease-out;
        ">
            <h3 style="margin-bottom: 15px; font-size: 1.5em;">¡Bienvenida a tu día especial! 🎉</h3>
            <p style="margin-bottom: 20px;">Esta página fue hecha con todo mi amor para ti</p>
            <button onclick="closeWelcome()" style="
                background: white;
                color: #ff6b9d;
                border: none;
                padding: 10px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
            ">¡Comenzar! 💕</button>
        </div>
    `;
    welcomeDiv.id = 'welcome-message';
    document.body.appendChild(welcomeDiv);
    
    // Agregar estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes welcomeSlide {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Cerrar mensaje de bienvenida
function closeWelcome() {
    const welcome = document.getElementById('welcome-message');
    if (welcome) {
        welcome.style.animation = 'welcomeSlide 0.5s ease-in reverse';
        setTimeout(() => {
            welcome.remove();
        }, 500);
    }
}

// Crear partículas de fondo
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posición aleatoria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Tamaño aleatorio
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Color aleatorio entre tonos románticos
        const colors = ['#ff6b9d', '#ffc3d8', '#ffd700', '#c44569'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Animación aleatoria
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        container.appendChild(particle);
    }
}

// Configurar cursor personalizado
function setupCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Efectos en hover
        const interactiveElements = document.querySelectorAll('button, .gallery-item, .wish-card, .reason-card, .message-box');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                follower.style.transform = 'scale(2)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                follower.style.transform = 'scale(1)';
            });
        });
    }
}

function calculateDaysTogether() {
  const startDate = new Date('2025-07-25T00:00:00'); 
  const today = new Date();

  // Quitar horas para evitar desfases
  today.setHours(0,0,0,0);
  startDate.setHours(0,0,0,0);

  const diffTime = today - startDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const counter = document.getElementById('days-together');
  if (counter) {
    animateNumber(counter, 0, diffDays, 2000);
  }
}

// Asegurar que se ejecute cuando cargue el DOM
document.addEventListener("DOMContentLoaded", calculateDaysTogether);


// Animar números
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Configurar animaciones de scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que necesitan animación
    const animatedElements = document.querySelectorAll('.wish-card, .timeline-item, .gallery-item, .reason-card, .message-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
}

// Configurar elementos interactivos
function setupInteractiveElements() {
    // Pastel de cumpleaños
    const cake = document.getElementById('birthday-cake');
    if (cake) {
        cake.addEventListener('click', blowCandles);
    }
    
    // Control de música
    const musicControl = document.getElementById('music-control');
    if (musicControl) {
        musicControl.addEventListener('click', toggleMusic);
    }
    
    // Tarjetas de deseos con efectos especiales
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => createSparkles(card));
    });
    
    // Tarjetas de razones con efectos de corazón
    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach(card => {
        card.addEventListener('click', () => createHeartExplosion(card));
    });
}

// Soplar velas del pastel
function blowCandles() {
    const cake = document.getElementById('birthday-cake');
    const candles = cake.querySelectorAll('.candle');
    
    // Animación de soplar velas
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.style.opacity = '0.3';
            candle.style.transform = 'scale(0.8)';
        }, index * 200);
    });
    
    // Crear confeti
    setTimeout(() => {
        createConfetti();
        showBirthdayMessage();
    }, 1000);
    
    // Restaurar velas después de un tiempo
    setTimeout(() => {
        candles.forEach(candle => {
            candle.style.opacity = '1';
            candle.style.transform = 'scale(1)';
        });
    }, 5000);
}

// Crear confeti
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b9d', '#ffc3d8', '#ffd700', '#c44569', '#ff9ff3'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        container.appendChild(confetti);
        
        // Remover confeti después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Mostrar mensaje de cumpleaños
function showBirthdayMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ffd700, #ff6b9d);
            color: white;
            padding: 40px;
            border-radius: 25px;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 20px 60px rgba(255, 215, 0, 0.4);
            animation: birthdayPop 1s ease-out;
            max-width: 90%;
        ">
            <h2 style="margin-bottom: 20px; font-size: 2em;">🎉 ¡Feliz Cumpleaños! 🎉</h2>
            <p style="margin-bottom: 20px; font-size: 1.2em;">¡Que todos tus deseos se cumplan!</p>
            <button onclick="closeBirthdayMessage()" style="
                background: white;
                color: #ff6b9d;
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                font-size: 1.1em;
            ">¡Gracias mi amor! 💕</button>
        </div>
    `;
    messageDiv.id = 'birthday-message';
    document.body.appendChild(messageDiv);
    
    // Agregar estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes birthdayPop {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5) rotate(-10deg); }
            50% { transform: translate(-50%, -50%) scale(1.1) rotate(5deg); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        }
    `;
    document.head.appendChild(style);
}

// Cerrar mensaje de cumpleaños
function closeBirthdayMessage() {
    const message = document.getElementById('birthday-message');
    if (message) {
        message.style.animation = 'birthdayPop 0.5s ease-in reverse';
        setTimeout(() => {
            message.remove();
        }, 500);
    }
}

// Toggle música
function toggleMusic() {
    const musicIcon = document.querySelector('.music-icon');
    
    if (!musicPlaying) {
        musicIcon.textContent = '🎵';
        musicIcon.style.animation = 'pulse 1s infinite';
        musicPlaying = true;
        
        // Aquí podrías agregar audio real
        console.log('🎵 Reproduciendo música romántica...');
    } else {
        musicIcon.textContent = '🔇';
        musicIcon.style.animation = 'none';
        musicPlaying = false;
        
        console.log('🔇 Música pausada');
    }
}

// Comenzar celebración
function startCelebration() {
    if (celebrationStarted) return;
    
    celebrationStarted = true;
    
    // Crear efectos especiales
    createConfetti();
    createFloatingHearts();
    
    // Scroll suave a la siguiente sección
    document.getElementById('birthday-wishes').scrollIntoView({
        behavior: 'smooth'
    });
    
    // Cambiar texto del botón
    const btn = event.target;
    btn.innerHTML = '🎊 ¡Celebrando! 🎊';
    btn.style.background = 'linear-gradient(135deg, #ffd700, #ff6b9d)';
    
    setTimeout(() => {
        btn.innerHTML = '🎊 ¡Comenzar la Celebración!';
        btn.style.background = '';
        celebrationStarted = false;
    }, 5000);
}

// Reproducir Las Mañanitas
function playBirthdaySong() {
    const btn = event.target;
    btn.innerHTML = '🎵 Cantando Las Mañanitas...';
    btn.disabled = true;
    
    // Simular canción (aquí podrías agregar audio real)
    const lyrics = [
        "🎵 Estas son las mañanitas...",
        "🎵 Que cantaba el Rey David...",
        "🎵 Hoy por ser día de tu santo...",
        "🎵 Te las cantamos a ti... 🎵"
    ];
    
    let currentLyric = 0;
    const lyricInterval = setInterval(() => {
        if (currentLyric < lyrics.length) {
            showLyric(lyrics[currentLyric]);
            currentLyric++;
        } else {
            clearInterval(lyricInterval);
            btn.innerHTML = '🎵 Cantar Las Mañanitas';
            btn.disabled = false;
        }
    }, 2000);
}

// Mostrar letra de canción
function showLyric(lyric) {
    const lyricDiv = document.createElement('div');
    lyricDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 107, 157, 0.9);
            color: white;
            padding: 20px 40px;
            border-radius: 25px;
            font-size: 1.5em;
            font-weight: 600;
            z-index: 9999;
            animation: lyricFade 2s ease-in-out;
        ">${lyric}</div>
    `;
    
    document.body.appendChild(lyricDiv);
    
    setTimeout(() => {
        lyricDiv.remove();
    }, 2000);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes lyricFade {
            0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            20%, 80% { opacity: 1; transform: translateX(-50%) translateY(0); }
            100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        }
    `;
    document.head.appendChild(style);
}

// Crear corazones flotantes
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 2 + 1) + 'em';
        heart.style.animation = `float-hearts ${Math.random() * 4 + 4}s ease-in-out infinite`;
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.opacity = '0.7';
        heart.style.pointerEvents = 'none';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
}

// Crear chispas
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.animationDelay = Math.random() * 1 + 's';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}

// Crear explosión de corazones
function createHeartExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '1.5em';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        const angle = (i / 15) * Math.PI * 2;
        const distance = 100;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        heart.style.transition = 'all 1s ease-out';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.left = endX + 'px';
            heart.style.top = endY + 'px';
            heart.style.opacity = '0';
            heart.style.transform = 'scale(0.5)';
        }, 50);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

// Funciones de la galería
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    const images = document.querySelectorAll('.gallery-item img');
    
    modalImage.src = images[index].src;
    modalTitle.textContent = galleryData[index].title;
    modalDescription.textContent = galleryData[index].description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animación de entrada
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.transition = 'opacity 0.3s ease';
        modal.style.opacity = '1';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('gallery-modal');
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

function nextImage() {
    const images = document.querySelectorAll('.gallery-item img');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateModalImage();
}

function prevImage() {
    const images = document.querySelectorAll('.gallery-item img');
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateModalImage();
}

function updateModalImage() {
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const images = document.querySelectorAll('.gallery-item img');
    
    modalImage.style.opacity = '0';
    
    setTimeout(() => {
        modalImage.src = images[currentImageIndex].src;
        modalTitle.textContent = galleryData[currentImageIndex].title;
        modalDescription.textContent = galleryData[currentImageIndex].description;
        modalImage.style.opacity = '1';
    }, 150);
}

// Desbloquear mensajes
function unlockMessage(messageNumber) {
    const messageBox = document.querySelector(`[data-message="${messageNumber}"]`);
    
    if (messageBox.classList.contains('locked')) {
        messageBox.classList.remove('locked');
        messageBox.classList.add('unlocked');
        
        // Crear efectos especiales
        createSparkles(messageBox);
        createHeartExplosion(messageBox);
        
        // Sonido de desbloqueo (simulado)
        console.log('🔓 ¡Mensaje desbloqueado con amor!');
        
        // Vibración en móviles
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
    }
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Navegación con teclado en modal
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('gallery-modal');
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    }
});

// Efectos de scroll suave para navegación
function smoothScrollTo(elementId) {
    document.getElementById(elementId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Detectar cuando es el cumpleaños real
function checkBirthdayDate() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 8, 1); // 1 de septiembre (mes 8 porque enero es 0)
    
    if (today.getMonth() === 8 && today.getDate() === 1) {
        // ¡Es el cumpleaños real!
        setTimeout(() => {
            showSpecialBirthdayMessage();
        }, 3000);
    }
}

// Mensaje especial para el día real del cumpleaños
function showSpecialBirthdayMessage() {
    const specialDiv = document.createElement('div');
    specialDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ffd700, #ff6b9d, #c44569);
            color: white;
            padding: 50px;
            border-radius: 30px;
            text-align: center;
            z-index: 10001;
            box-shadow: 0 30px 80px rgba(255, 107, 157, 0.6);
            animation: specialGlow 2s ease-in-out infinite;
            max-width: 90%;
        ">
            <h1 style="margin-bottom: 20px; font-size: 2.5em;">🎉 ¡HOY ES TU CUMPLEAÑOS REAL! 🎉</h1>
            <p style="margin-bottom: 30px; font-size: 1.3em;">¡Que este día sea tan especial como tú lo eres para mí!</p>
            <div style="font-size: 3em; margin: 20px 0;">🎂🎈🎁💕🌟</div>
            <button onclick="closeSpecialMessage()" style="
                background: white;
                color: #ff6b9d;
                border: none;
                padding: 20px 40px;
                border-radius: 30px;
                cursor: pointer;
                font-weight: 700;
                font-size: 1.2em;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            ">¡Eres el mejor! 💖</button>
        </div>
    `;
    specialDiv.id = 'special-birthday-message';
    document.body.appendChild(specialDiv);
    
    // Crear confeti extra especial
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createConfetti(), i * 500);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes specialGlow {
            0%, 100% { box-shadow: 0 30px 80px rgba(255, 107, 157, 0.6); }
            50% { box-shadow: 0 30px 80px rgba(255, 215, 0, 0.8); }
        }
    `;
    document.head.appendChild(style);
}

// Cerrar mensaje especial
function closeSpecialMessage() {
    const message = document.getElementById('special-birthday-message');
    if (message) {
        message.style.animation = 'specialGlow 0.5s ease-in reverse';
        setTimeout(() => {
            message.remove();
        }, 500);
    }
}

// Verificar fecha al cargar
checkBirthdayDate();

// Función para compartir en redes sociales (opcional)
function shareOnSocial(platform) {
    const url = window.location.href;
    const text = "¡Mira esta hermosa página que me hicieron para mi cumpleaños! 💕";
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Agregar efectos de sonido (simulados con console.log)
function playSound(soundType) {
    switch(soundType) {
        case 'click':
            console.log('🔊 *click suave*');
            break;
        case 'unlock':
            console.log('🔊 *sonido mágico de desbloqueo*');
            break;
        case 'celebration':
            console.log('🔊 *música de celebración*');
            break;
        case 'heart':
            console.log('🔊 *latido de corazón*');
            break;
    }
}

// Función para guardar el progreso del usuario
function saveProgress() {
    const unlockedMessages = document.querySelectorAll('.message-box.unlocked').length;
    localStorage.setItem('birthdayProgress', JSON.stringify({
        unlockedMessages: unlockedMessages,
        visitDate: new Date().toISOString()
    }));
}

// Cargar progreso guardado
function loadProgress() {
    const saved = localStorage.getItem('birthdayProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        console.log(`💾 Progreso cargado: ${progress.unlockedMessages} mensajes desbloqueados`);
    }
}

// Cargar progreso al iniciar
loadProgress();

// Guardar progreso cuando se desbloquea un mensaje
document.addEventListener('click', function(e) {
    if (e.target.closest('.message-box')) {
        setTimeout(saveProgress, 1000);
    }
});

console.log('🎂💕 ¡Página de cumpleaños lista con amor infinito! 💕🎂');