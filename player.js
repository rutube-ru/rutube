// Ждем загрузки DOM, чтобы скрипт видел все элементы
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Находим элементы
    const video = document.getElementById('mainPlayer');
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');

    // 2. Настройка видеоплеера
    if (video) {
        // Умный формат (черные полосы для 4:3)
        video.style.objectFit = "contain"; 
        video.style.backgroundColor = "#000";

        // Блокируем правую кнопку мыши
        video.oncontextmenu = function(e) {
            e.preventDefault();
            alert("Права защищены! RuTube 2007-2009 ©");
            return false;
        };

        // Ловим инфу о формате при загрузке
        video.onloadedmetadata = function() {
            console.log("Разрешение: " + this.videoWidth + "x" + this.videoHeight);
            let aspect = this.videoWidth / this.videoHeight;
            if (aspect < 1.5) {
                console.log("📺 Режим 4:3 (Олдскул)");
            }
        };

        // Если файл потерялся (404)
        video.onerror = function() {
            console.error("Бро, видос потерялся!");
            video.style.border = "2px solid red";
        };
    }

    // 3. Оживляем Лайки
    if (likeBtn && likeCount) {
        likeBtn.onclick = function() {
            let val = parseInt(likeCount.innerText.replace(/,/g, ''));
            if (!isNaN(val)) {
                val++;
                likeCount.innerText = val.toLocaleString('en-US');
                
                // Кнопка западает (стиль 2000-х)
                likeBtn.disabled = true;
                likeBtn.innerText = "МНЕ НРАВИТСЯ!";
                likeBtn.style.background = "#ccc";
                likeBtn.style.boxShadow = "inset 2px 2px 5px #000";
                
                console.log("Лайк засчитан! Рейтинг: " + val);
            }
        };
    }

    console.log("--- RuTube Custom Engine Started ---");
});
