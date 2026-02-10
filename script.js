document.addEventListener('DOMContentLoaded', () => {
    
    const vibeBtn = document.getElementById('vibe-btn');
    const body = document.body;

    // Danh sách các màu pastel đẹp
    const colors = [
        '#f0f0f0', // Xám nhạt
        '#ffeaa7', // Vàng nhạt
        '#fab1a0', // Cam nhạt
        '#81ecec', // Xanh ngọc
        '#a29bfe'  // Tím mộng mơ
    ];

    vibeBtn.addEventListener('click', () => {
        // Chọn một màu ngẫu nhiên từ danh sách
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Đổi màu nền
        body.style.backgroundColor = randomColor;
        
        console.log(`Đã đổi vibe sang màu: ${randomColor}`);
    });

    // Hiệu ứng console log chào mừng
    console.log("%c Xin chào Hoàng Minh Khôi! ", "background: #000; color: #fff; font-size: 20px; padding: 10px;");
});
