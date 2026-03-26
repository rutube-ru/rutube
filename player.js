// Ждем загрузки DOM, чтобы скрипт видел все кнопки
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Находим элементы (те самые ID из твоего HTML)
    const video = document.getElementById('mainPlayer');
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');

    // 2. Блокируем правую кнопку мыши (чтобы не тырили видос)
    if (video) {
        video.oncontextmenu = function(e) {
            e.preventDefault();
            alert("Права защищены! RuTube 2007-2009 ©"); // Олдовое уведомление
            return false;
        };

        // Если видос не грузится (404), выводим инфу
        video.onerror = function() {
            console.error("Бро, файл videoplayback.mp4 потерялся!");
            video.style.border = "2px solid red";
        };
    }

    // 3. Оживляем Лайки
    if (likeBtn && likeCount) {
        likeBtn.onclick = function() {
            // Убираем запятые, прибавляем 1
            let val = parseInt(likeCount.innerText.replace(/,/g, ''));
            val++;
            
            // Возвращаем число с красивыми запятыми (124,503)
            likeCount.innerText = val.toLocaleString('en-US');
            
            // Эффект нажатия (кнопка "западает")
            likeBtn.disabled = true;
            likeBtn.innerText = "МНЕ НРАВИТСЯ!";
            likeBtn.style.background = "#ccc";
            likeBtn.style.boxShadow = "inset 2px 2px 5px #000";
            
            console.log("Лайк засчитан! Текущий рейтинг: " + val);
        };
    }

    console.log("--- RuTube Custom Engine Started ---");
});
const video = document.getElementById('mainPlayer');

if (video) {
    video.style.objectFit = "contain"; // Магия! Делает черные полосы по бокам или сверху, как в телеке
    video.style.backgroundColor = "#000"; // Чтобы полосы были трушными черными

    // Если хочешь, чтобы плеер сам подстраивал высоту (необязательно)
    video.onloadedmetadata = function() {
        console.log("Разрешение видео: " + this.videoWidth + "x" + this.videoHeight);
        
        // Проверка: если видео 4:3, можем чуть сузить контейнер (по желанию)
        let aspect = this.videoWidth / this.videoHeight;
        if (aspect < 1.5) {
            console.log("Внимание: Обнаружен олдскульный формат 4:3!");
        }
    };
}

