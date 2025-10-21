// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 创建动态星空
    createDynamicStars();
    
    // 添加鼠标交互效果
    addMouseInteraction();
    
    // 创建额外的流星
    createRandomMeteors();
    
    // 添加点击爱心效果
    addHeartClickEffect();
    
    // 创建音频可视化效果（可选）
    createAudioVisualization();
});

// 创建动态星空
function createDynamicStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'dynamic-star';
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: #fff;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
            box-shadow: 0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, 0.8);
        `;
        starsContainer.appendChild(star);
    }
    
    // 添加闪烁动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0% { opacity: 0.3; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.2); }
        }
    `;
    document.head.appendChild(style);
}

// 添加鼠标交互效果
function addMouseInteraction() {
    const container = document.querySelector('.container');
    const heart = document.querySelector('.heart');
    
    container.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // 创建鼠标跟随粒子
        createMouseParticle(e.clientX, e.clientY);
        
        // 爱心跟随鼠标轻微移动
        const moveX = (x - 50) * 0.1;
        const moveY = (y - 50) * 0.1;
        heart.style.transform = `rotate(-45deg) translate(${moveX}px, ${moveY}px)`;
    });
    
    container.addEventListener('mouseleave', function() {
        heart.style.transform = 'rotate(-45deg) translate(0, 0)';
    });
}

// 创建鼠标跟随粒子
function createMouseParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: #00ffff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        box-shadow: 0 0 10px #00ffff;
        animation: mouseParticleFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    
    // 添加粒子消失动画
    if (!document.querySelector('#mouseParticleStyle')) {
        const style = document.createElement('style');
        style.id = 'mouseParticleStyle';
        style.textContent = `
            @keyframes mouseParticleFade {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0) translateY(-50px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // 1秒后移除粒子
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 1000);
}

// 创建随机流星
function createRandomMeteors() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% 概率生成流星
            createMeteor();
        }
    }, 2000);
}

function createMeteor() {
    const meteor = document.createElement('div');
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.3; // 从上方开始
    const angle = Math.random() * 60 + 15; // 15-75度角
    const speed = Math.random() * 3 + 2; // 2-5秒动画时间
    
    meteor.style.cssText = `
        position: fixed;
        left: ${startX}px;
        top: ${startY}px;
        width: 2px;
        height: 2px;
        background: #fff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 5;
        box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
    `;
    
    // 添加尾巴
    const tail = document.createElement('div');
    tail.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ffff, transparent);
        transform-origin: 0 50%;
        animation: meteorTailAnim ${speed}s ease-out;
    `;
    meteor.appendChild(tail);
    
    document.body.appendChild(meteor);
    
    // 流星移动动画
    const distance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
    const endX = startX + Math.cos(angle * Math.PI / 180) * distance;
    const endY = startY + Math.sin(angle * Math.PI / 180) * distance;
    
    meteor.animate([
        { transform: `translate(0, 0) rotate(${angle}deg)`, opacity: 0 },
        { transform: `translate(0, 0) rotate(${angle}deg)`, opacity: 1, offset: 0.1 },
        { transform: `translate(${endX - startX}px, ${endY - startY}px) rotate(${angle}deg)`, opacity: 0 }
    ], {
        duration: speed * 1000,
        easing: 'ease-out'
    }).onfinish = () => {
        if (meteor.parentNode) {
            meteor.parentNode.removeChild(meteor);
        }
    };
    
    // 添加尾巴动画样式
    if (!document.querySelector('#meteorTailStyle')) {
        const style = document.createElement('style');
        style.id = 'meteorTailStyle';
        style.textContent = `
            @keyframes meteorTailAnim {
                0% { transform: scaleX(0); opacity: 1; }
                50% { transform: scaleX(1); opacity: 0.8; }
                100% { transform: scaleX(0); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// 添加点击爱心效果
function addHeartClickEffect() {
    const heart = document.querySelector('.heart');
    
    heart.addEventListener('click', function() {
        // 创建爆炸效果
        createHeartExplosion();
        
        // 爱心放大效果
        heart.style.animation = 'none';
        heart.style.transform = 'rotate(-45deg) scale(1.3)';
        
        setTimeout(() => {
            heart.style.animation = 'heartbeat 2s ease-in-out infinite';
            heart.style.transform = 'rotate(-45deg) scale(1)';
        }, 300);
    });
}

// 创建爱心爆炸效果
function createHeartExplosion() {
    const heartRect = document.querySelector('.heart').getBoundingClientRect();
    const centerX = heartRect.left + heartRect.width / 2;
    const centerY = heartRect.top + heartRect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const angle = (i / 20) * Math.PI * 2;
        const velocity = Math.random() * 100 + 50;
        const size = Math.random() * 6 + 2;
        
        particle.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            width: ${size}px;
            height: ${size}px;
            background: ${Math.random() > 0.5 ? '#ff0080' : '#00ffff'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            box-shadow: 0 0 10px currentColor;
        `;
        
        document.body.appendChild(particle);
        
        // 粒子爆炸动画
        const endX = centerX + Math.cos(angle) * velocity;
        const endY = centerY + Math.sin(angle) * velocity;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        };
    }
}

// 创建音频可视化效果（装饰性）
function createAudioVisualization() {
    const container = document.querySelector('.container');
    const visualizer = document.createElement('div');
    visualizer.className = 'audio-visualizer';
    visualizer.style.cssText = `
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 2px;
        z-index: 10;
    `;
    
    // 创建音频条
    for (let i = 0; i < 20; i++) {
        const bar = document.createElement('div');
        bar.style.cssText = `
            width: 3px;
            height: 20px;
            background: linear-gradient(to top, #ff0080, #00ffff);
            animation: audioBar ${Math.random() * 0.5 + 0.5}s ease-in-out infinite alternate;
            animation-delay: ${i * 0.1}s;
        `;
        visualizer.appendChild(bar);
    }
    
    container.appendChild(visualizer);
    
    // 添加音频条动画
    if (!document.querySelector('#audioBarStyle')) {
        const style = document.createElement('style');
        style.id = 'audioBarStyle';
        style.textContent = `
            @keyframes audioBar {
                0% { height: 5px; opacity: 0.5; }
                100% { height: ${Math.random() * 30 + 10}px; opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// 添加键盘交互
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        // 空格键触发特殊效果
        createSpecialEffect();
    }
});

function createSpecialEffect() {
    // 创建彩虹波纹效果
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border: 2px solid #00ffff;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 1000;
        animation: rippleEffect 2s ease-out forwards;
    `;
    
    document.body.appendChild(ripple);
    
    // 添加波纹动画
    if (!document.querySelector('#rippleStyle')) {
        const style = document.createElement('style');
        style.id = 'rippleStyle';
        style.textContent = `
            @keyframes rippleEffect {
                0% { 
                    width: 0; 
                    height: 0; 
                    opacity: 1; 
                    border-color: #00ffff;
                }
                50% { 
                    border-color: #ff0080;
                }
                100% { 
                    width: 800px; 
                    height: 800px; 
                    opacity: 0; 
                    border-color: #00ff00;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 2000);
}