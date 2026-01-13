// 自動為代碼塊添加行號的腳本
document.querySelectorAll('.code-block').forEach(block => {
    let html = block.innerHTML;
    // 移除頭尾空白
    html = html.replace(/^\s+|\s+$/g, '');
    // 根據 <br> 分割
    let lines = html.split(/<br\s*\/?>/i);
    
    let newContent = '';
    lines.forEach((line, i) => {
        // 清理行內不必要的換行符（源代碼格式造成的）
        let cleanLine = line.replace(/\n/g, ''); 
        
        newContent += `
        <div class="line-row">
            <div class="line-num">${i + 1}</div>
            <div class="line-code">${cleanLine}</div>
        </div>`;
    });
    
    block.innerHTML = newContent;
});

let currentSlide = 1;
const totalSlides = 10;

function showSlide(n) {
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('slide-' + n);
    if (target) target.classList.add('active');
    currentSlide = n;
}

function nextSlide() { if (currentSlide < totalSlides) showSlide(currentSlide + 1); }
function prevSlide() { if (currentSlide > 1) showSlide(currentSlide - 1); }

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

const bgGradients = [
    'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #5eeff9 0%, #4facfe 100%)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #FF9A8B 0%, #FF6A88 100%)'
];

document.querySelectorAll('.slide').forEach((slide, index) => {
    slide.style.backgroundImage = bgGradients[index % bgGradients.length];
});