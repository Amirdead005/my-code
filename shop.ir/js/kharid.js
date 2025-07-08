    let cartCount = 0;
        // گرفتن دکمه و span تعداد
        const addButton = document.getElementById('add-to-cart');
        const countDisplay = document.getElementById('cart-count');

        // وقتی دکمه کلیک می‌شه
        addButton.addEventListener('click',() =>{
            cartCount++; // افزایش تعداد
            countDisplay.textContent = cartCount; // آپدیت عدد روی صفحه
            // countDisplay.style.color="red";
        });
        // script.js
    document.getElementById('searchInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const items = document.querySelectorAll('.itemList');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = ''; // نمایش آیتم
        } else {
            item.style.display = 'none'; // مخفی کردن آیتم
        }
    });
});
