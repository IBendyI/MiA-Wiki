const relics = [
    {
        name: "🔔 Неслышимый колокол",
        info: "Большой серый колокол с геометрическим узором, вырезанным на его внешней стороне. Он был обнаружен в крайне недоступном месте на 4-м уровне. Это Артефакт особого класса, способный останавливать время. Он был доставлен на поверхность Белыми Свистками Лайзой и Озэн.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/1/1e/Unheard_Bell_Anime_Square.png",
        lvl: "special"
    },
    {
        name: "🧠 Zoaholic",
        info: "Машина порабощения душ. Позволяет пользователю, который синхронизируется с ней, вселять свою душу в других живых существ, распространяя сознание по множеству тел. При злоупотреблении приводит к потере себя и безумию.",
        img: "https://tse1.mm.bing.net/th/id/OIP.r7NM3xZVCeses5PcsJHgBgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        lvl: "special"
    },
    {
        name: "⛏️ Blaze Reap",
        info: "Вечная кирка. Аномально большая кирка, содержащая Вечный Порох, что позволяет ей служить взрывным оружием. Ранее использовалась Лайзой-Истребительницей, сейчас находится во владении Рико.",
        img: "https://pm1.aminoapps.com/7085/f603677495da2eb2893915410160131aa9fff045r1-360-450v2_hq.jpg",
        lvl: "1"
    },
    {
        name: "📍 Thousand-Men Pins",
        info: "Булавки Тысячи Воинов. Каждая булавка, как говорят, дарует силу тысячи мужчин. Озэн встроила в свое тело около 120 таких булавок, что является секретом ее великой силы и долголетия.",
        img: "https://avatars.mds.yandex.net/i?id=d2d6cf547221eb3e4b05316c70d476b4cd21da30-5306514-images-thumbs&n=13",
        lvl: "1"
    },
    {
        name: "🌀 Life Reverberator",
        info: "Резонатор жизни. Используется для создания Белых Свистков. Поглощает жизнь существ, преобразуя её в энергию.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/2/20/Prushka_as_Stone.png",
        lvl: "2"
    },
    {
        name: "🌫️ Fog Weave",
        info: "Ткань, создающая иллюзии и маскирующая объекты в тумане.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/6/67/Fog_Weave_Anime_Square.png",
        lvl: "3"
    },
    {
        name: "☁ Princess Bosom",
        info: "Это Артефакт в форме яйца с узорами на поверхности и мягкой текстурой, которая проминается под давлением.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/f/fa/Princess_Bosom_Anime_Square.png",
        lvl: "3"
    },
    {
        name: "✍ Gentle Knock",
        info: "Это изготовленный вручную многоцелевой инструмент — артефакт из «мыслящих камней», которые часто находят на 3ем слое. После калибровки пользователь может управлять им силой мысли. Форма наконечника меняется в зависимости от мыслей и чувств, которые пользователь посылает на блок управления.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/5/51/All-purpose_lockpick%2C_Gentle_Knock.png",
        lvl: "3"
    },
    {
        name: "🧜‍♀️ Mermaid Burp",
        info: "Это изготовленный вручную многоцелевой инструмент — артефакт из «мыслящих камней», которые часто находят на 3ем слое. После калибровки пользователь может управлять им силой мысли. Форма наконечника меняется в зависимости от мыслей и чувств, которые пользователь посылает на блок управления.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/b/bf/Mermaind_Burp_Anime.png",
        lvl: "3"
    },
    {
        name: "🧭 Star Compass",
        info: "Звездный Компас. Реликвия, найденная Рико на первом слое. Стрелка внутри всегда указывает вниз, независимо от поворотов. Рико утверждает, что она указывает на дно Бездны. Был потерян во время путешествия.",
        img: "https://tse3.mm.bing.net/th/id/OIP.ngTPvB6h2XVCigV-XrXTFAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        lvl: "unknown"
    },
    {
        name: "☂️ Scale Umbrella",
        info: "Чешуйчатый Зонт. Технически, рукотворная реликвия. Был сделан из угольного песка (артефакт 3 класса), но плохая сборка понизила его класс. Обладает прочными, но легкими свойствами. Был разрушен в четвертом слое.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/b/bc/Scale_Umbrella_Anime_Square.png",
        lvl: "4"
    },
    {
        name: "🔆 Sun Sphere",
        info: "Солнечная Сфера. Ярко сияет при активации. Была использована Рико и Регом для отвлечения внимания существ. Была съедена водным существом в Море Трупов.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/8/8b/Sun_Sphere_Anime_Square.png",
        lvl: "4"
    },
    {
        name: "🦁 Deep Sea Lion",
        info: "Информация об этом артефакте отсутствует в доступных источниках.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/3/35/Deep_Sea_Lion.png",
        lvl: "special"
    },
    {
        name: "🧵 Star Thread",
        info: "Большая и толстая нить, которая может выдержать любой удар.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/8/8e/Star_Thread.png",
        lvl: "special"
    },

    // 1-й класс (Grade-1)
    {
        name: "📦 Curse-Warding Box", 
        info: "Проклято-отталкивающий Сосуд. Его реальный эффект - не отмена проклятия. Те, кто внутри, будут страдать от эффектов проклятия и, возможно, умрут, но то, что внутри, вернется к жизни и сразу начнет ползти к центру Бездны.",
        img: "https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1005814/9zyLjf7juRM2sWn3O1m9QA.jpg",
        lvl: "1"
    },
    {
        name: "👻 Ghost Seek",
        info: "Информация об этом артефакте отсутствует в доступных источниках.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/e/ec/Ghost_Seek.png",
        lvl: "1"
    },
    {
        name: "💀 Grim Reaper",
        info: "Информация об этом артефакте отсутствует в доступных источниках.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/6/62/Grim_ripper.png", 
        lvl: "1"
    },
    {
        name: "🚰 Nil Fount",
        info: "Артефакт, производящий воду, возможно, создающий воду из ничего, отсюда и приставка 'nil' в его названии.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/3/32/Nil_Fount_Anime_Square.png",
        lvl: "1"
    },
    {
        name: "🛠️ Third Works",
        info: "Психо-кинетическая рука.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/9/90/Third_Works.png",
        lvl: "1"
    },

    // 2-й класс (Grade-2)  
    {
        name: "🐙 Far Caress",
        info: "Одна из личных реликвий Бондрюда. Также называется 'Касание Луны'. Способна управлять бесчисленными щупальцами. Не является артефактом в строгом смысле, а является местным существом, заключенным в цилиндр.",
        img: "https://s.iimg.su/s/01/gR1mGLCx29InstRhsC8GvP3IGZg6kS0T59UXhj2G.png",
        lvl: "2"
    },
    {
        name: "🧠 Forgetter",
        info: "Информация об этом артефакте отсутствует в доступных источниках.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/d/d6/Storage_Vessel_Manga.png",
        lvl: "2"
    },
    {
        name: "🏺 Gold Shaker",
        info: "Горшок для сбора пыли.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/3/38/Gold_Shaker.png",
        lvl: "2"
    },
    {
        name: "🍃 Tomorrow Signal",
        info: "Флюгер для предсказания погоды.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/9/90/Tomorrow_Signal_Anime_Square.png",
        lvl: "2"
    },
    {
        name: "📯 White Whistles",
        info: "Белые Свистки. Артефакты второго класса, которые могут быть использованы только их первоначальным владельцем. Они сделаны из Звенящих камней жизни и способны активировать спящие реликвии.",
        img: "https://s.iimg.su/s/01/g4RZx1wxKtWDc47MHvDf2Md0cFHFcAg5YBtONMgN.png",
        lvl: "2"
    },

    {
        name: "⛰️ Altar of the Absolute Boundary",
        info: "Алтарь представляет собой большой шарообразный артефакт с каменной облицовкой и мембранным входом. Изнутри капсулу можно видеть снаружи, поскольку стены кажутся полупрозрачными. В центре внутреннего убранства Алтаря находится чаша, приподнятая над полом.[4] Алтарь состоит из комбинации органических и неорганических элементов, а входной портал способен перемещаться независимо, в то время как внутреннее пространство постоянно поддерживается на одном уровне. Алтарь может быть активирован только изнутри владельцем Камня, возвращающего жизнь.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/3/3d/Altar_Circular_Crop_Anime.png", 
        lvl: "unknown"
    },
    {
        name: "💧 Apsenti",
        info: "Апсенти, Маска зеркального копирования — один из Артефактов в иллюстрированном сборнике записанных реликвий. Это маска, благодаря которой можно создавать зеркальные копии.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/5/52/Mirror-Copy_Mask_Apsenti.png",
        lvl: "unknown"
    },
    {
        name: "🛡️ Canopy Unto Dawn",
        info: "Пользовательский комплект брони, который представляет собой целую кучу артефактов, обработанных вместе с био-волокнами и встроенным оружием для повышения боевой эффективности. Также помогает облегчить нагрузку на разделенное сознание Бондрюда.",
        img: "https://s.iimg.su/s/01/gWXV33MxDItTDJddRk01GJUQDTGGPCjShFV4vf7a.png",
        lvl: "unknown"
    },
    {
        name: "🎭 Cold Fantoccini", 
        info: "Это маска, которая позволяет пользователю поднимать нежить и управлять ею.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/3/3e/Dead-Commandeering_Mask_Cold_Fantoccini.png",
        lvl: "unknown"
    },
    {
        name: "👶 Cradle of Desire",
        info: "Колыбель желаний, также называемая Яйцом исполнения желаний, представляет собой Артефакт овальной формы, напоминающий яйца Фаберже. При непосредственном контакте с первобытными существами он прилипает к их телам и исполняет их желания. Таким образом, он более предпочтителен для пользователей с не слишком «запутанным» или «сложным» разумом, как, например, у зрелых людей.",
        img: "https://s.iimg.su/s/01/gkvap3gxh8pkwYrWNNzjfulyD2fYGJIv5cgoKAz5.png",
        lvl: "unknown"
    },
    {
        name: "🏺 Crumple Pot",
        info: "Это горшок, который после высыхания становится лёгким и компактным. При замачивании в горячей воде он увеличивается настолько, что его можно использовать как кастрюлю или ванну.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/0/0c/Crumple_Pot_Dry_Manga.png",
        lvl: "unknown"
    },
    {
        name: "🟣 Gangway",
        info: "Также называется 'Восхождение к Утренней Звезде'. Еще один артефакт Бондрюда. Производится из другого артефакта, 'Лестницы Света'. Выпускает полосу света для удара по отраженной цели. Имеет способность поражать объект, на котором пользователь сильно фокусируется, по нескольким целям и даже стрелять там, где лучи не могут отражаться.",
        img: "https://s.iimg.su/s/01/gyjP5AUxhzw8Ot0AR0NNWA4o7VoGfs4RkWm28jUZ.png",
        lvl: "unknown"
    },
    {
        name: "🎒 Gorebag",
        info: "Горбатый мешок — один из каталогизированных артефактов в Собрании записанных реликвий. Это мешок для хранения отрубленных голов.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/4/4c/Head-Harvesting_Mask_Gorebag.png",
        lvl: "unknown"
    },
    {
        name: "🧼 Hard Scrub",
        info: "Жёсткий скраб — это очищающее средство, созданное на основе безымянных Артефактов. Если оно находится в виде большого комка, то не образует мыльную пену. Однако если его измельчить, то можно получить пену.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/4/4d/Rigid_Washer_Circular_Manga.png",
        lvl: "unknown"
    },
    {
        name: "✉️ Lyza's Letter", 
        info: "Письмо Лизы — это часть неизвестного Артефакта, на котором написано: «Я буду ждать на дне Преисподней... ». По словам Озена, письмо написано не рукой Лизы, в нём используются старые глифы Нижнего мира без упрощённых форм, почерк крупный и неровный, а написано оно не на обычной бумаге, а на неизвестном артефакте, который не смогла порвать сама Озен.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/4/47/Lyza%27s_Letter_Circle_Crop_Anime.png",
        lvl: "unknown"
    },
    {
        name: "👗 Muscle Dress",
        info: "Платье мышц — один из Артефактов в иллюстрированном сборнике записанных реликвий. Это мясистая глина.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/f/f3/Flesh_Clay_Muscle_Dress.png",
        lvl: "unknown"
    },
    {
        name: "🔫 Popple Gun",
        info: "Двойной поп-бластер, также известный как Ли'л Поп-Поп. Это органическая пушка, изготовленная из органической реликвии. Говорят, что она отслеживает колебания в Силовом поле и выбирает «способ поражения». Она была разработана в результате сотрудничества Делверсов и учёных, изучающих трансцендентные силы многих реликвий, найденных в Бездне. В нём используются специальные реликвийные боеприпасы Взрывная приманка, которые после выстрела взрываются, как патрон для дробовика.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/f/f5/Popple-kun.png",
        lvl: "unknown"
    },
    {
        name: "🍎 Ripe Thing",
        info: "Спелая вещь — один из каталогизированных артефактов в Собрании записанных реликвий. Это рассадник головняков.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/9/9d/Ripe_Thing.png",
        lvl: "unknown"
    },
    {
        name: "🎯 Rock Top",
        info: "Скала Топ — один из Артефактов, которые можно найти на 1м Слое, упомянутом Нат. Это камень, который плавает и меняет форму при вращении.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/2/20/Rock_Top_artifact.png",
        lvl: "unknown"
    },
    {
        name: "💉 Shaker",
        info: "Проклятая Игла. Еще один артефакт Бондрюда. Изготовлен из другой реликвии, Проклятой Стали. Когда человека пронзают одной из этих игл, на него накладывается проклятие 3-го слоя.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/c/c5/Shaker_Anime.png",
        lvl: "unknown"
    },
    {
        name: "✨ Shiny Swarm",
        info: "Блестящий рой — один из каталогизированных артефактов в Собрании записанных реликвий. Это капюшон, который позволяет пользователю манипулировать эмоциями других людей.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/b/b8/Emotion-Manipulating_Hood_Shiny_Swarm.png", 
        lvl: "unknown"
    },
    {
        name: "⚔️ Sparagmos",
        info: 'Происхождение Направляющего Света. Одна из личных реликвий Бондрюда. Обработанный артефакт, похожий на Инсинератор Рега, который генерирует таинственный клинок света. Вещи, в которые он попадает, несомненно, распадаются, без каких-либо исключений.',
        img: "https://s.iimg.su/s/01/gy7GvoWxu3r5rtrtPoJ2LpprnGTUFQbPdH1zHunB.png",
        lvl: "unknown"
    },
    {
        name: "🔇 Wonder Wordless",
        info: "Чудо без слов — один из каталогизированных артефактов в Собрании записанных реликвий. Это забавная шутка.",
        img: "https://static.wikia.nocookie.net/madeinabyss/images/b/be/Wonder_Wordless_Anime_Square.png",
        lvl: "unknown"
    }
];

const relicsContainer = document.querySelector('.relics-container');
    const levelOrder = ['4', '3', '2', '1', 'special', 'unknown'];
    const levelTitles = {
        'special': '🌟 Артефакты особого класса',
        'unknown': '❓ Артефакты неизвестного класса',
        '1': '⭐ Артефакты первого уровня',
        '2': '✨ Артефакты второго уровня', 
        '3': '💫 Артефакты третьего уровня',
        '4': '🔮 Артефакты четвертого уровня'
    };
document.addEventListener("DOMContentLoaded", function() {

    // Группируем артефакты по классам
    const relicsByLevel = {};
    relics.forEach(relic => {
        if (!relicsByLevel[relic.lvl]) {
            relicsByLevel[relic.lvl] = [];
        }
        relicsByLevel[relic.lvl].push(relic);
    });

    // Создаем HTML для каждого класса
    levelOrder.forEach(level => {
        if (relicsByLevel[level]) {
            // Добавляем заголовок класса
            relicsContainer.innerHTML += `
                <h2 class="section-title" style="color: black; border-color: black;">
                    ${levelTitles[level]}
                </h2>
            `;
            
            // Добавляем артефакты этого класса
            relicsByLevel[level].forEach(relic => {
                relicsContainer.innerHTML += `
                    <div class="relic">
                        <img src="${relic.img}"
                             style="border-radius: 100%;
                                    border: black solid 3px;">
                        <div class="info-section" style="border: black solid 3px;
                                                         background: rgba(255, 255, 255, 1);">
                            <h3 style="color: black;">${relic.name}</h3>
                            <p style="color: black;">${relic.info}</p>
                        </div>
                    </div>
                `;
            });
        }
    });
});

const searchBox = document.querySelector("#search")
function filterRelics() {
    const searchTerm = searchBox.value.toLowerCase();
    const filteredRelics = relics.filter(relic => 
        relic.name.toLowerCase().includes(searchTerm) || 
        relic.info.toLowerCase().includes(searchTerm)
    );
    
    displayFilteredRelics(filteredRelics);
}

// Функция для отображения отфильтрованных артефактов
function displayFilteredRelics(filteredRelics) {
    relicsContainer.innerHTML = '';
    
    // Группируем отфильтрованные артефакты по уровням
    const relicsByLevel = {};
    filteredRelics.forEach(relic => {
        if (!relicsByLevel[relic.lvl]) {
            relicsByLevel[relic.lvl] = [];
        }
        relicsByLevel[relic.lvl].push(relic);
    });
    
    // Создаем HTML для каждого уровня
    levelOrder.forEach(level => {
        if (relicsByLevel[level] && relicsByLevel[level].length > 0) {
            relicsContainer.innerHTML += `
                <h2 class="section-title">${levelTitles[level]}</h2>
            `;
            
            relicsByLevel[level].forEach(relic => {
                relicsContainer.innerHTML += `
                    <div class="relic">
                        <img src="${relic.img}">
                        <div class="info-section" style="border: black solid 3px;
                                                         background: rgba(255, 255, 255, 0.2);">
                            <h3 style="color: black;">${relic.name}</h3>
                            <p style="color: black;">${relic.info}</p>
                        </div>
                    </div>
                `;
            });
        }
    });
    
    // Если ничего не найдено
    if (filteredRelics.length === 0) {
        relicsContainer.innerHTML = `
            <div style="text-align: center; padding: 2vw; color: black;">
                <h3>😔 Артефакты не найдены</h3>
                <p>Попробуйте изменить поисковый запрос</p>
            </div>
        `;
    }
}

// Обработчик событий для поиска
searchBox.addEventListener('input', filterRelics);

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
    displayFilteredRelics(relics);
});