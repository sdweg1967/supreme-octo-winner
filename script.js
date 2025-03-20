document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-button');
    const nameResult = document.getElementById('name-result');

    const prefixes = ['Eco', 'Tech', 'Smart', 'Green', 'Global', 'Inno', 'Alpha', 'Beta', 'Vision', 'Peak'];
    const suffixes = ['Solutions', 'Systems', 'Ventures', 'Group', 'Innovations', 'Enterprises', 'Hub', 'Labs', 'Dynamics', 'Core'];
    const words = ['Sky', 'Ocean', 'Sun', 'Star', 'Moon', 'Cloud', 'Wave', 'River', 'Forest', 'Field'];

    function generateName() {
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const randomWord = words[Math.floor(Math.random() * words.length)];

        // Разные варианты генерации (можно комбинировать)
        const choice = Math.floor(Math.random() * 3); // 0, 1, или 2
        let generatedName;

        switch (choice) {
            case 0:
                generatedName = randomPrefix + randomSuffix;
                break;
            case 1:
                generatedName = randomWord + randomSuffix;
                break;
            case 2:
                generatedName = randomPrefix + randomWord;
                break;
            default:
                generatedName = "Ошибка генерации";
        }

        nameResult.textContent = generatedName;
    }


    generateButton.addEventListener('click', generateName);
    function generateName() {
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const randomWord = words[Math.floor(Math.random() * words.length)];
    
        const choice = Math.floor(Math.random() * 6); // Увеличиваем количество вариантов
    
        let generatedName;
    
        switch (choice) {
            case 0:
                generatedName = randomPrefix + randomSuffix;
                break;
            case 1:
                generatedName = randomWord + randomSuffix;
                break;
            case 2:
                generatedName = randomPrefix + randomWord;
                break;
            case 3:
                generatedName = randomPrefix + randomWord + randomSuffix; // Новая комбинация
                break;
            case 4:
                generatedName = randomWord + randomPrefix; // Новая комбинация
                break;
            case 5:
                generatedName = randomWord; // Просто слово
                break;
            default:
                generatedName = "Ошибка генерации";
        }
    
        nameResult.textContent = generatedName;
    }
    
});
