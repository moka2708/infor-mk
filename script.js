document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. XỬ LÝ POPUP MODAL ---
    const modal = document.getElementById("myModal");
    const closeSpan = document.getElementsByClassName("close")[0];
    const closeBtnAction = document.querySelector(".close-btn-action");
    const btns = document.querySelectorAll(".js-modal-btn"); // Lấy tất cả các nút dự án

    // Duyệt qua từng nút và gắn sự kiện click
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectName = this.getAttribute('data-project');
            // Ông có thể sửa câu thông báo ở đây
            const modalTitle = document.getElementById("modal-title");
            modalTitle.innerText = `Dự án: ${projectName}`;
            
            modal.style.display = "block"; // Hiện popup
        });
    });

    // Hàm đóng modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Đóng khi bấm dấu X
    closeSpan.onclick = closeModal;
    
    // Đóng khi bấm nút OKela
    closeBtnAction.onclick = closeModal;

    // Đóng khi bấm ra ngoài vùng popup
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // --- 2. LOG CHÀO MỪNG ---
    console.log("%c Website của Moka chạy ngon lành!", "background: #000; color: #fff; font-size: 20px; padding: 10px;");
});
