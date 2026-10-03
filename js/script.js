document.addEventListener('DOMContentLoaded', () => {
    
    // --------------------------------------------------------
    // --- 1. تعريف النصوص المترجمة (Translations Definition) ---
    // --------------------------------------------------------
    const translations = {
        // 🔑 تحديث النصوص لتناسب الهيكلية الجديدة
        'headline-h1': {
            ar: 'LAPTOWN',
            en: 'LAPTOWN'
        },
        'welcome-text': {
            ar:' وجهتكم المثلى لاقتناء أجود الحواسيب المحمولة، مدعومةً بخدمات صيانة احترافية وملحقات أصلية تضمن لكم الجودة والأداء',
            en: 'Your trusted destination for the best laptops, professional maintenance services, and genuine accessories'
        },
        // ترجمة نصوص الأزرار
        'btn-store': { ar: 'زيارة متجرنا', en: 'Visit Our Store' },
        'btn-facebook': { ar: 'فيسبوك', en: 'Facebook' },
        'btn-tiktok': { ar: 'تيك توك', en: 'TikTok' },
        'btn-instagram': { ar: 'انستغرام', en: 'Instagram' },
        'btn-whatsapp': { ar: 'واتساب', en: 'WhatsApp' },
        'btn-map': { ar: 'موقع المحل', en: 'Store Location' },
        // ترجمة زر الاتصال
        'btn-phone': { 
            ar: 'اتصل بنا 0552791131', 
            en: 'Call us 0552791131' 
        },
        // 🔑 تحديث نص التذييل (Footer)
        // ترجمة نص التذييل (Footer)
        'footer-text': {
            // 🔑 الترجمة العربية الجديدة
            ar: 'شكراً لزيارتكم صفحتنا.<br>نحن نقدر دعمكم وثقتكم.<br>© 2025 LAPTOWN.جميع الحقوق محفوظة.', 
            
            // 🔑 النص الإنجليزي الجديد
            en: 'Thank you for visiting our page.<br>We appreciate your support and trust.<br>&copy; 2025 LAPTOWN. All Rights Reserved.'
        }
    };

    // --------------------------------------------------------
    // --- 2. تفاعل الشعار (Logo Interaction) ---
    // --------------------------------------------------------
    const logo = document.getElementById('main-logo');
    if (logo) {
        logo.addEventListener('mouseover', () => {
            logo.style.transform = 'rotate(5deg) scale(1.05)';
            logo.style.transition = 'transform 0.3s ease';
        });
        logo.addEventListener('mouseout', () => {
            logo.style.transform = 'rotate(0deg) scale(1)';
        });
    }

    // --------------------------------------------------------
    // --- 3. وظيفة تبديل اللغة (Language Switcher Logic) ---
    // --------------------------------------------------------
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;
    // اللغة الافتراضية هي الإنجليزية (en)
    let currentLang = 'en'; 

    function updateContent(lang) {
        currentLang = lang;
        
        // 1. تحديث الاتجاه العام للصفحة (RTL/LTR)
        const direction = (lang === 'ar' ? 'rtl' : 'ltr');
        body.setAttribute('dir', direction);
        document.documentElement.setAttribute('lang', lang);

        // 2. تحديث جميع النصوص بناءً على الـ ID
        for (const id in translations) {
            const element = document.getElementById(id);
            if (element) {
                // إذا كان العنصر زر يحتوي أيقونة (i أو img)، نحافظ على الأيقونة ونغير النص
                const iconElement = element.querySelector('i, img, .btn-logo');
                if (iconElement) {
                    const icon = iconElement.outerHTML;
                    // يتم إدخال الأيقونة + مسافة + النص المترجم
                    element.innerHTML = icon + ' ' + translations[id][lang];
                } else {
                    // إذا كان العنصر مجرد نص (مثل h1 أو footer)
                    element.innerHTML = translations[id][lang];
                }
                // تطبيق الاتجاه على العنصر (للعناوين والنصوص)
                element.setAttribute('dir', direction); 
            }
        }
        
        // 3. تحديث نص زر التبديل (AR / EN)
        langToggle.textContent = (lang === 'ar' ? 'EN / AR' : 'AR / EN');
    }
    
    // عند الضغط على الزر، يتم التبديل بين اللغات
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        updateContent(newLang);
    });

    // تطبيق اللغة الإنجليزية عند التحميل للمرة الأولى
    updateContent('en'); 
});
