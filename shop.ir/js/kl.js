        // وقتی فرم ارسال می‌شه این کد اجرا می‌شه
            document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // جلوگیری از رفرش صفحه
          
            // گرفتن مقادیر یوزرنیم و پسورد
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
          
            // یوزرنیم و پسورد پیش‌فرض (مثلاً برای تست)
            const correctUsername = "Amir";
            const correctPassword = "1234";
          
            // چک کردن اطلاعات
            if (username === correctUsername && password === correctPassword) {
                // اگه درست بود، هدایت به صفحه اصلی
                window.location.href = "panel.html";
            } else {
                // اگه اشتباه بود، نمایش پیام خطا
                document.getElementById('errorMessage').textContent = 'نام کاربری یا رمز عبور اشتباه است!'
            }
          });