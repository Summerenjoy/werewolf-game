let currentPage = 1;

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        page.style.display = (index + 1 === pageNumber) ? 'block' : 'none';
    });
    currentPage = pageNumber;
    document.getElementById('prevBtn').disabled = (currentPage === 1);
    document.getElementById('nextBtn').disabled = (currentPage === pages.length);
}

function prevPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}

function nextPage() {
    if (currentPage < document.querySelectorAll('.page').length) {
        showPage(currentPage + 1);
    }
}

// モーダルウィンドウの操作
const modal = document.getElementById('charModal');
const charBtn = document.getElementById('charBtn');
const span = document.getElementsByClassName('close')[0];

charBtn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('prevBtn').addEventListener('click', prevPage);
document.getElementById('nextBtn').addEventListener('click', nextPage);

// 初期表示設定
showPage(currentPage);
