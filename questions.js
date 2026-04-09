const QUESTIONS = [
  // ===== ÜNİTE 1: AKARSULAR =====
  {
    id: 1, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'nin en uzun akarsuyu hangisidir?",
    secenekler: ["Fırat", "Kızılırmak", "Sakarya", "Seyhan"],
    dogru: 1,
    aciklama: "Kızılırmak, yaklaşık 1355 km uzunluğuyla Türkiye'nin en uzun akarsuyu ve aynı zamanda Anadolu yarımadasının en uzun ırmağıdır.",
    iller: ["TR68", "TR71", "TR18"]
  },
  {
    id: 2, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'nin en büyük havzasına sahip akarsuyu hangisidir?",
    secenekler: ["Kızılırmak", "Fırat", "Sakarya", "Dicle"],
    dogru: 1,
    aciklama: "Fırat, yaklaşık 184.918 km² ile Türkiye'nin en büyük havzasına sahip akarsuyu olup sınır ötesi bir nehirdir.",
    iller: ["TR44", "TR02", "TR63"]
  },
  {
    id: 3, unite: 1, uniteName: "Akarsular",
    soru: "Aşağıdaki hangi ırmak, Karadeniz'e dökülmez?",
    secenekler: ["Kızılırmak", "Yeşilırmak", "Sakarya", "Ceyhan"],
    dogru: 3,
    aciklama: "Ceyhan Nehri Akdeniz'e dökülür. Kızılırmak, Yeşilırmak ve Sakarya ise Karadeniz'e dökülen nehirlerdir.",
    iller: ["TR01", "TR46"]
  },
  {
    id: 4, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'nin rejimi en düzenli akarsuyu hangisidir?",
    secenekler: ["Kızılırmak", "Fırat", "Sakarya", "Çoruh"],
    dogru: 2,
    aciklama: "Sakarya Nehri, beslenme havzasının geniş olması ve kar-yağmur dengeli beslenmesi nedeniyle en düzenli rejimli akarsulardan biridir.",
    iller: ["TR54", "TR41"]
  },
  {
    id: 5, unite: 1, uniteName: "Akarsular",
    soru: "Dicle ve Fırat nehirlerinin birleştiği yer hangisidir?",
    secenekler: ["Basra Körfezi yakınları", "Şattülarap", "Bağdat", "Musul"],
    dogru: 1,
    aciklama: "Dicle ve Fırat, Irak'ta Kurnah yakınlarında birleşerek Şattülarap adını alır ve Basra Körfezi'ne dökülür.",
    iller: ["TR65", "TR73"]
  },
  {
    id: 6, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de akarsu boylarının en kısa olduğu bölge hangisidir?",
    secenekler: ["İç Anadolu", "Ege", "Karadeniz", "Güneydoğu Anadolu"],
    dogru: 2,
    aciklama: "Karadeniz kıyılarında dağlar denize yakın olduğundan akarsu boyları kısadır fakat debi oranları yüksektir.",
    iller: ["TR61", "TR52"]
  },
  {
    id: 7, unite: 1, uniteName: "Akarsular",
    soru: "Meriç Nehri hangi denize dökülür?",
    secenekler: ["Karadeniz", "Ege Denizi", "Marmara Denizi", "Akdeniz"],
    dogru: 1,
    aciklama: "Meriç Nehri, Ege Denizi'ne dökülür ve Türkiye-Yunanistan sınırını oluşturur.",
    iller: ["TR22"]
  },
  {
    id: 8, unite: 1, uniteName: "Akarsular",
    soru: "Aşağıdakilerden hangisi, akarsuyun aşındırma gücünü artıran bir faktör değildir?",
    secenekler: ["Eğimin fazla olması", "Debinin fazla olması", "Taşınan malzemenin sert olması", "Arazinin düz olması"],
    dogru: 3,
    aciklama: "Arazinin düz olması, akışı yavaşlatır ve aşındırma gücünü azaltır. Eğim, debi ve sert malzeme aşındırmayı artıran faktörlerdir.",
    iller: []
  },
  {
    id: 9, unite: 1, uniteName: "Akarsular",
    soru: "Yeşilırmak'ın döküldüğü yer hangisidir?",
    secenekler: ["Samsun - Bafra", "Ordu", "Sinop", "Trabzon"],
    dogru: 0,
    aciklama: "Yeşilırmak, Samsun ili yakınında Bafra ovasını oluşturarak Karadeniz'e dökülür.",
    iller: ["TR55", "TR60"]
  },
  {
    id: 10, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de en fazla enerji potansiyeline sahip akarsu hangisidir?",
    secenekler: ["Kızılırmak", "Sakarya", "Fırat", "Seyhan"],
    dogru: 2,
    aciklama: "Fırat Nehri, akış hızı ve debisi nedeniyle Türkiye'de en fazla hidroelektrik enerji potansiyeline sahip nehirdir.",
    iller: ["TR44", "TR02"]
  },
  {
    id: 11, unite: 1, uniteName: "Akarsular",
    soru: "Delta oluşumu için hangi koşullar gereklidir?",
    secenekler: ["Hızlı akış ve sığ deniz", "Yavaş akış, bol alüvyon ve sığ kıyı", "Derin deniz ve bol yağış", "Eğimli arazi ve bol taşınan malzeme"],
    dogru: 1,
    aciklama: "Delta oluşumu için nehrin yavaşlaması (alüvyon bırakması), bol alüvyon taşıması ve denizin sığ olması gerekir.",
    iller: []
  },
  {
    id: 12, unite: 1, uniteName: "Akarsular",
    soru: "Çoruh Nehri hangi denize dökülür?",
    secenekler: ["Karadeniz", "Hazar Denizi", "Akdeniz", "Basra Körfezi"],
    dogru: 0,
    aciklama: "Çoruh Nehri, Artvin ilinden geçerek Gürcistan'dan Karadeniz'e dökülür.",
    iller: ["TR08"]
  },
  {
    id: 13, unite: 1, uniteName: "Akarsular",
    soru: "Menderes Nehri hangi denize dökülür?",
    secenekler: ["Karadeniz", "Marmara", "Ege", "Akdeniz"],
    dogru: 2,
    aciklama: "Büyük Menderes Nehri, Ege Denizi'ne dökülür. Kıvrımlı akarsu yataklarına 'menderesli akarsu' denmesinin kaynağı bu nehirdir.",
    iller: ["TR09", "TR20"]
  },
  {
    id: 14, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de akarsular genel olarak hangi yönde akar?",
    secenekler: ["Kuzeyden güneye", "Güneyden kuzeye", "Batıdan doğuya", "Her yöne"],
    dogru: 3,
    aciklama: "Türkiye'nin topoğrafyası nedeniyle akarsular farklı yönlerde akmaktadır; doğudan batıya, kuzeyden güneye ve güneyden kuzeye akan nehirler mevcuttur.",
    iller: []
  },
  {
    id: 15, unite: 1, uniteName: "Akarsular",
    soru: "Aşağıdaki hangisi Akdeniz'e dökülen bir akarsudur?",
    secenekler: ["Sakarya", "Kızılırmak", "Seyhan", "Yeşilırmak"],
    dogru: 2,
    aciklama: "Seyhan Nehri, Adana ovasını sulayarak Akdeniz'e dökülür. Seyhan Barajı bu nehir üzerinde kurulmuştur.",
    iller: ["TR01"]
  },

  // ===== ÜNİTE 2: DAĞLAR & VOLKANLAR =====
  {
    id: 16, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'nin en yüksek dağı hangisidir?",
    secenekler: ["Süphan Dağı", "Erciyes Dağı", "Ağrı Dağı", "Hasan Dağı"],
    dogru: 2,
    aciklama: "Ağrı Dağı (5137 m), Türkiye'nin ve aynı zamanda Türkiye ile çevre ülkeler arasında Kafkasya'nın en yüksek zirvesidir.",
    iller: ["TR04"]
  },
  {
    id: 17, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Kapadokya'daki peri bacaları oluşumunda hangi volkanik dağ etkilidir?",
    secenekler: ["Ağrı Dağı", "Erciyes Dağı", "Süphan Dağı", "Nemrut Dağı"],
    dogru: 1,
    aciklama: "Erciyes Dağı'nın püskürttüğü volkanik tüf ve lavların aşınmasıyla Kapadokya'daki peri bacaları oluşmuştur.",
    iller: ["TR38"]
  },
  {
    id: 18, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de Pontik (Kuzey Anadolu) dağları genel olarak hangi yönde uzanır?",
    secenekler: ["Kuzey - Güney", "Doğu - Batı", "Kuzeydoğu - Güneybatı", "Kuzeybatı - Güneydoğu"],
    dogru: 1,
    aciklama: "Kuzey Anadolu Dağları (Pontik Dağlar), Karadeniz kıyısı boyunca genel olarak Doğu-Batı yönünde uzanır.",
    iller: ["TR61", "TR52", "TR55"]
  },
  {
    id: 19, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de Toroslar genel olarak hangi yönde uzanır?",
    secenekler: ["Kuzey - Güney", "Doğu - Batı", "Kuzeybatı - Güneydoğu", "Batı - Doğu"],
    dogru: 3,
    aciklama: "Toroslar (Toros Dağları) genel olarak Batı-Doğu yönünde uzanır ve Akdeniz kıyısıyla iç bölgeler arasında doğal bir bariyer oluşturur.",
    iller: ["TR07", "TR33"]
  },
  {
    id: 20, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Süphan Dağı hangi ilin sınırları içindedir?",
    secenekler: ["Van", "Bitlis", "Muş", "Ağrı"],
    dogru: 1,
    aciklama: "Süphan Dağı (4058 m), Van Gölü'nün kuzeyinde, Bitlis iline bağlıdır ve söndürülmüş bir volkandır.",
    iller: ["TR13"]
  },
  {
    id: 21, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de volkanik kökenli dağların en yoğun bulunduğu bölge hangisidir?",
    secenekler: ["Ege", "Marmara", "Doğu Anadolu", "İç Anadolu"],
    dogru: 2,
    aciklama: "Doğu Anadolu Bölgesi'nde Ağrı, Süphan, Nemrut (Bitlis), Tendürek gibi volkanik dağlar yoğun olarak bulunmaktadır.",
    iller: ["TR04", "TR65"]
  },
  {
    id: 22, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Erciyes Dağı hangi ilde bulunur?",
    secenekler: ["Sivas", "Kayseri", "Niğde", "Nevşehir"],
    dogru: 1,
    aciklama: "Erciyes Dağı (3917 m), Kayseri ilinde yer alan söndürülmüş bir yanardağdır.",
    iller: ["TR38"]
  },
  {
    id: 23, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Hasan Dağı hangi iller arasında yer alır?",
    secenekler: ["Aksaray - Niğde", "Konya - Karaman", "Kayseri - Sivas", "Ankara - Konya"],
    dogru: 0,
    aciklama: "Hasan Dağı (3268 m), Aksaray ve Niğde illeri arasında yer alan söndürülmüş bir yanardağdır.",
    iller: ["TR68", "TR51"]
  },
  {
    id: 24, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de kuzey-güney yönünde uzanan tek önemli dağ silsilesi hangisidir?",
    secenekler: ["Toroslar", "Kuzey Anadolu Dağları", "Küre Dağları", "Amanos Dağları"],
    dogru: 3,
    aciklama: "Amanos Dağları (Nur Dağları), Türkiye'de istisna olarak kuzey-güney yönünde uzanan önemli bir dağ silsilesidir.",
    iller: ["TR46"]
  },
  {
    id: 25, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Nemrut Dağı kalderası üzerinde oluşan krater gölünün adı nedir?",
    secenekler: ["Van Gölü", "Hazar Gölü", "Nemrut Gölü", "Nazik Gölü"],
    dogru: 2,
    aciklama: "Nemrut Dağı (Bitlis), Türkiye'nin en büyük kalderası içinde Nemrut Gölü (Nemrut Krater Gölü) barındırmaktadır.",
    iller: ["TR13"]
  },
  {
    id: 26, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'nin en uzun dağ silsilesi hangisidir?",
    secenekler: ["Kuzey Anadolu Dağları", "Toroslar", "Güneydoğu Torosları", "Küre Dağları"],
    dogru: 1,
    aciklama: "Toros Dağları, batıdan doğuya yaklaşık 1500 km uzunluğuyla Türkiye'nin en uzun dağ silsilesidir.",
    iller: ["TR07", "TR33", "TR01"]
  },
  {
    id: 27, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Ağrı Dağı'nın büyük ve küçük zirveleri arasındaki mesafe yaklaşık kaç km'dir?",
    secenekler: ["5 km", "11 km", "20 km", "30 km"],
    dogru: 1,
    aciklama: "Büyük Ağrı (5137 m) ve Küçük Ağrı (3896 m) yaklaşık 11 km mesafede birbirinden ayrılmaktadır.",
    iller: ["TR04"]
  },
  {
    id: 28, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Aşağıdakilerden hangisi volkanik bir dağ değildir?",
    secenekler: ["Ağrı Dağı", "Erciyes Dağı", "Uludağ", "Süphan Dağı"],
    dogru: 2,
    aciklama: "Uludağ, granitik (püsküreç) kayaçlardan oluşan horst tipi bir dağdır, volkanik değildir.",
    iller: ["TR16"]
  },
  {
    id: 29, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Doğu Anadolu'da yer alan Tendürek Dağı hangi ilde bulunur?",
    secenekler: ["Ağrı", "Van", "Muş", "Bitlis"],
    dogru: 0,
    aciklama: "Tendürek Dağı (2983 m), Ağrı iline bağlı olup aktif volkanik özellikler taşıyan bir dağdır.",
    iller: ["TR04"]
  },
  {
    id: 30, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de Anadolu Yarımadası genel hatlarıyla hangi tektonik levha üzerindedir?",
    secenekler: ["Avrasya Levhası", "Afrika Levhası", "Anadolu Levhası", "Arap Levhası"],
    dogru: 2,
    aciklama: "Türkiye büyük ölçüde Anadolu Levhası üzerinde yer almakta, kuzeyde Avrasya ve güneyde Afrika/Arap levhaları arasında sıkışmaktadır.",
    iller: []
  },

  // ===== ÜNİTE 3: OVALAR & PLATOLAR =====
  {
    id: 31, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'nin en büyük ovası hangisidir?",
    secenekler: ["Bafra Ovası", "Çukurova", "Konya Ovası", "Gediz Ovası"],
    dogru: 2,
    aciklama: "Konya Ovası, yaklaşık 4.500 km² ile Türkiye'nin en büyük iç ovası ve kapalı havzasıdır.",
    iller: ["TR42"]
  },
  {
    id: 32, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Çukurova hangi nehirlerin taşıdığı alüvyonlarla oluşmuştur?",
    secenekler: ["Fırat - Dicle", "Seyhan - Ceyhan", "Menderes - Gediz", "Sakarya - Kızılırmak"],
    dogru: 1,
    aciklama: "Çukurova (Adana Ovası), Seyhan ve Ceyhan nehirlerinin taşıdığı alüvyon birikintileriyle oluşmuş delta ovasıdır.",
    iller: ["TR01"]
  },
  {
    id: 33, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'nin en yüksek platosu hangisidir?",
    secenekler: ["Uzunyayla Platosu", "Erzurum-Kars Platosu", "Haymana Platosu", "Obruk Platosu"],
    dogru: 1,
    aciklama: "Erzurum-Kars Platosu, ortalama 1800-2000 m yüksekliğiyle Türkiye'nin en yüksek platosudur.",
    iller: ["TR25", "TR36"]
  },
  {
    id: 34, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Bafra Ovası hangi nehrin delta ovasıdır?",
    secenekler: ["Kızılırmak", "Yeşilırmak", "Sakarya", "Filyos"],
    dogru: 0,
    aciklama: "Bafra Ovası, Kızılırmak Nehri'nin Karadeniz'e döküldüğü yerde oluşturduğu delta ovasıdır.",
    iller: ["TR55"]
  },
  {
    id: 35, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Harran Ovası hangi ilimizde bulunur?",
    secenekler: ["Gaziantep", "Adıyaman", "Şanlıurfa", "Mardin"],
    dogru: 2,
    aciklama: "Harran Ovası, Şanlıurfa iline bağlı olup GAP projesi kapsamında sulanan verimli bir ovadır.",
    iller: ["TR63"]
  },
  {
    id: 36, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'de 'peneplen' oluşumuna örnek gösterilebilecek alan hangisidir?",
    secenekler: ["Erzurum-Kars Platosu", "Konya Ovası", "Haymana Platosu", "Çukurova"],
    dogru: 2,
    aciklama: "Haymana Platosu, aşınmış ve düzleşmiş yüzeyiyle peneplen özelliği gösteren bir platodur.",
    iller: ["TR06"]
  },
  {
    id: 37, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "İç Anadolu'da 'obruk' oluşumları hangi kayaç türüyle ilgilidir?",
    secenekler: ["Granit", "Kireçtaşı (karsik)", "Bazalt", "Şist"],
    dogru: 1,
    aciklama: "Obruklar, kireçtaşı arazilerde karstlaşma sonucu oluşan çöküntü çukurlukları ile gölleridir.",
    iller: ["TR42"]
  },
  {
    id: 38, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Gediz Ovası hangi nehrin oluşturduğu ovadır?",
    secenekler: ["Büyük Menderes", "Gediz", "Bakırçay", "Küçük Menderes"],
    dogru: 1,
    aciklama: "Gediz Ovası, Gediz Nehri'nin taşıdığı alüvyonlarla doldurulmuş, graben üzerinde yer alan bir ovadır.",
    iller: ["TR35"]
  },
  {
    id: 39, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Ege Bölgesi'ndeki ovaların çoğu nasıl bir oluşuma sahiptir?",
    secenekler: ["Alüvyal ova", "Graben ovası", "Delta ovası", "Lös ovası"],
    dogru: 1,
    aciklama: "Ege Bölgesi'ndeki ovalar (Gediz, Büyük Menderes, Küçük Menderes) tektonik çöküntü (graben) alanlarının alüvyonla dolmasıyla oluşmuştur.",
    iller: ["TR35", "TR09"]
  },
  {
    id: 40, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'de kıyı ovalarının en geniş yer kapladığı bölge hangisidir?",
    secenekler: ["Karadeniz", "Marmara", "Akdeniz", "Ege"],
    dogru: 2,
    aciklama: "Akdeniz Bölgesi'nde Çukurova (Adana), Amik, Silifke gibi geniş kıyı ovaları yer almaktadır.",
    iller: ["TR01", "TR33"]
  },
  {
    id: 41, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Uzunyayla Platosu hangi bölgede bulunur?",
    secenekler: ["İç Anadolu", "Doğu Anadolu", "Karadeniz", "Marmara"],
    dogru: 0,
    aciklama: "Uzunyayla Platosu, Sivas ve Kayseri illeri arasında İç Anadolu'da yer alan önemli bir platodur.",
    iller: ["TR58", "TR38"]
  },
  {
    id: 42, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'de tarım alanı en geniş ova hangisidir?",
    secenekler: ["Harran Ovası", "Çukurova", "Konya Ovası", "Bafra Ovası"],
    dogru: 2,
    aciklama: "Konya Ovası, Türkiye'nin en büyük iç ovası olup geniş tarım arazilerine sahiptir.",
    iller: ["TR42"]
  },
  {
    id: 43, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Aşağıdakilerden hangisi bir delta ovası değildir?",
    secenekler: ["Bafra Ovası", "Çarşamba Ovası", "Harran Ovası", "Çukurova"],
    dogru: 2,
    aciklama: "Harran Ovası, nehir taşıması ile oluşmamış, kara içinde yer alan allüvyal bir çöküntü ovasıdır.",
    iller: ["TR63"]
  },
  {
    id: 44, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Büyük Menderes Ovası hangi denize komşudur?",
    secenekler: ["Marmara", "Karadeniz", "Ege", "Akdeniz"],
    dogru: 2,
    aciklama: "Büyük Menderes Ovası, Ege Denizi'ne paralel uzanan bir graben ovası olup ağzı Ege'ye açılır.",
    iller: ["TR09"]
  },
  {
    id: 45, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'de 'kapalı havza' özelliği gösteren ova hangisidir?",
    secenekler: ["Çukurova", "Konya Ovası", "Bafra Ovası", "Gediz Ovası"],
    dogru: 1,
    aciklama: "Konya Ovası, sularını denize ulaştıramayan kapalı havza özelliğine sahip Türkiye'nin en büyük iç ovasıdır.",
    iller: ["TR42"]
  },

  // ===== ÜNİTE 4: GÖLLER =====
  {
    id: 46, unite: 4, uniteName: "Göller",
    soru: "Türkiye'nin ve Ortadoğu'nun en büyük gölü hangisidir?",
    secenekler: ["Tuz Gölü", "Van Gölü", "Eğirdir Gölü", "Beşehir Gölü"],
    dogru: 1,
    aciklama: "Van Gölü, yaklaşık 3.713 km² yüzey alanıyla Türkiye'nin ve Ortadoğu'nun en büyük gölüdür.",
    iller: ["TR65"]
  },
  {
    id: 47, unite: 4, uniteName: "Göller",
    soru: "Tuz Gölü hangi bölgede yer alır?",
    secenekler: ["Doğu Anadolu", "Karadeniz", "İç Anadolu", "Güneydoğu Anadolu"],
    dogru: 2,
    aciklama: "Tuz Gölü, İç Anadolu Bölgesi'nde Konya, Aksaray ve Ankara illeri arasında yer alan kapalı havza gölüdür.",
    iller: ["TR68"]
  },
  {
    id: 48, unite: 4, uniteName: "Göller",
    soru: "Van Gölü nasıl bir göl türüdür?",
    secenekler: ["Tektonik göl", "Volkanik set gölü", "Karstik göl", "Buzul gölü"],
    dogru: 1,
    aciklama: "Van Gölü, volkanik faaliyetler sonucu lav akışlarının akarsuyu kapatması ile oluşan volkanik set gölüdür.",
    iller: ["TR65"]
  },
  {
    id: 49, unite: 4, uniteName: "Göller",
    soru: "Türkiye'de en fazla göl hangi bölgededir?",
    secenekler: ["Ege", "Akdeniz", "İç Anadolu", "Göller Yöresi (Güneybatı)"],
    dogru: 3,
    aciklama: "Göller Yöresi olarak da bilinen Güneybatı Anadolu (Isparta, Burdur, Antalya çevresi) Türkiye'de göl yoğunluğunun en fazla olduğu bölgedir.",
    iller: ["TR32", "TR15"]
  },
  {
    id: 50, unite: 4, uniteName: "Göller",
    soru: "Aşağıdaki göllerden hangisi tektonik göl değildir?",
    secenekler: ["Tuz Gölü", "Eğirdir Gölü", "Karagöl (Artvin)", "Beşehir Gölü"],
    dogru: 2,
    aciklama: "Karagöl (Artvin), heyelan set gölü olup tektonik hareketlerle değil, kütlesel hareket sonucu oluşmuştur.",
    iller: ["TR08"]
  },
  {
    id: 51, unite: 4, uniteName: "Göller",
    soru: "Türkiye'nin en derin gölü hangisidir?",
    secenekler: ["Van Gölü", "Hazar Gölü", "Eğirdir Gölü", "Burdur Gölü"],
    dogru: 0,
    aciklama: "Van Gölü, maksimum 451 m derinliğiyle Türkiye'nin en derin gölüdür.",
    iller: ["TR65"]
  },
  {
    id: 52, unite: 4, uniteName: "Göller",
    soru: "Hazar Gölü hangi ilde bulunur?",
    secenekler: ["Elazığ", "Tunceli", "Bingöl", "Diyarbakır"],
    dogru: 0,
    aciklama: "Hazar Gölü, Elazığ iline bağlı Doğu Anadolu'da tektonik bir göldür.",
    iller: ["TR23"]
  },
  {
    id: 53, unite: 4, uniteName: "Göller",
    soru: "Sapanca Gölü hangi bölgede yer alır?",
    secenekler: ["İç Anadolu", "Marmara", "Karadeniz", "Ege"],
    dogru: 1,
    aciklama: "Sapanca Gölü, Marmara Bölgesi'nde Sakarya ilinde yer alır ve İstanbul ile Kocaeli'nin içme suyu kaynakları arasındadır.",
    iller: ["TR54"]
  },
  {
    id: 54, unite: 4, uniteName: "Göller",
    soru: "Eğirdir Gölü hangi ilde bulunur?",
    secenekler: ["Burdur", "Isparta", "Antalya", "Konya"],
    dogru: 1,
    aciklama: "Eğirdir Gölü, Isparta iline bağlı olup Türkiye'nin tatlı su göllerinden birincisidir.",
    iller: ["TR32"]
  },
  {
    id: 55, unite: 4, uniteName: "Göller",
    soru: "Türkiye'de karstik (çözünme) kökenli göllerin en fazla bulunduğu bölge hangisidir?",
    secenekler: ["Doğu Anadolu", "İç Anadolu", "Akdeniz (Toros etekleri)", "Ege"],
    dogru: 2,
    aciklama: "Toros Dağları'nın kireçtaşı arazi yapısı nedeniyle Akdeniz Bölgesi'nde karstik göller (obruk gölleri, polye gölleri) fazla sayıdadır.",
    iller: ["TR07"]
  },
  {
    id: 56, unite: 4, uniteName: "Göller",
    soru: "Van Gölü'nün suyu neden acıdır?",
    secenekler: ["Denizle bağlantısı olduğu için", "Kapalı havza olduğundan buharlaşma ile tuz birikimi", "İçine dökülen ırmakların tuzlu olması", "Volkanik kökenli olduğu için"],
    dogru: 1,
    aciklama: "Van Gölü, kapalı havza özelliğinde olduğundan suları buharlaşmakta ve tuzluluk oranı artmaktadır; sodaca ve acı bir göldür.",
    iller: ["TR65"]
  },
  {
    id: 57, unite: 4, uniteName: "Göller",
    soru: "Türkiye'de yapay (baraj) gölleri yoğunlukla hangi ırmaklar üzerinde kurulmuştur?",
    secenekler: ["Kızılırmak - Yeşilırmak", "Fırat - Dicle", "Sakarya - Meriç", "Seyhan - Ceyhan"],
    dogru: 1,
    aciklama: "Fırat ve Dicle nehirleri üzerinde Atatürk Barajı, Keban Barajı, Ilısu Barajı gibi büyük baraj gölleri kurulmuştur.",
    iller: ["TR02", "TR21"]
  },
  {
    id: 58, unite: 4, uniteName: "Göller",
    soru: "Burdur Gölü hangi tür göldür?",
    secenekler: ["Karstik göl", "Volkanik set gölü", "Tektonik göl", "Delta gölü"],
    dogru: 2,
    aciklama: "Burdur Gölü, tektonik çöküntü ile oluşmuş, tuzlu ve acı bir kapalı havza gölüdür.",
    iller: ["TR15"]
  },
  {
    id: 59, unite: 4, uniteName: "Göller",
    soru: "Abant Gölü hangi ilde bulunur?",
    secenekler: ["Sakarya", "Bolu", "Düzce", "Zonguldak"],
    dogru: 1,
    aciklama: "Abant Gölü, Bolu iline bağlı olup heyelan set gölü özelliği taşıyan turizm amaçlı bir göldür.",
    iller: ["TR14"]
  },
  {
    id: 60, unite: 4, uniteName: "Göller",
    soru: "Aşağıdaki göllerden hangisi tuzlu değildir?",
    secenekler: ["Van Gölü", "Tuz Gölü", "Burdur Gölü", "Eğirdir Gölü"],
    dogru: 3,
    aciklama: "Eğirdir Gölü, açık havza özelliği taşıdığından tatlı su gölüdür. Diğerleri kapalı havza ya da tuz birikimli gölleridir.",
    iller: ["TR32"]
  },

  // ===== ÜNİTE 5: BOĞAZLAR & KIYI =====
  {
    id: 61, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "İstanbul Boğazı'nın uzunluğu yaklaşık kaç km'dir?",
    secenekler: ["17 km", "31 km", "56 km", "8 km"],
    dogru: 1,
    aciklama: "İstanbul Boğazı (Karadeniz Boğazı) yaklaşık 31 km uzunluğundadır.",
    iller: ["TR34"]
  },
  {
    id: 62, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Çanakkale Boğazı'nın en dar yeri kaç metredir?",
    secenekler: ["700 m", "1200 m", "1800 m", "3500 m"],
    dogru: 0,
    aciklama: "Çanakkale Boğazı'nın en dar yeri yaklaşık 1200 m civarındadır (bazı kaynaklarda 750 m olarak da belirtilir); genel olarak 1,2-7 km arası değişir.",
    iller: ["TR17"]
  },
  {
    id: 63, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'nin kıyı şeridinin en uzun olduğu deniz hangisidir?",
    secenekler: ["Ege Denizi", "Akdeniz", "Karadeniz", "Marmara Denizi"],
    dogru: 0,
    aciklama: "Ege Denizi kıyıları, girinti-çıkıntı ve adalar nedeniyle Türkiye'nin en uzun kıyı şeridine sahip denizidir.",
    iller: ["TR09", "TR35"]
  },
  {
    id: 64, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'nin toplam kıyı uzunluğu yaklaşık kaç km'dir?",
    secenekler: ["4800 km", "7200 km", "8333 km", "10000 km"],
    dogru: 2,
    aciklama: "Türkiye'nin toplam kıyı uzunluğu yaklaşık 8333 km'dir (adalar dahil).",
    iller: []
  },
  {
    id: 65, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Karadeniz kıyıları nasıl bir kıyı tipine örnek gösterilebilir?",
    secenekler: ["Ria kıyısı", "Fiord kıyısı", "Düz (boyuna) kıyı", "Limanlı kıyı"],
    dogru: 2,
    aciklama: "Karadeniz kıyıları, dağların denize paralel uzanması nedeniyle liman imkânları sınırlı, düz (boyuna) kıyı özelliği taşır.",
    iller: ["TR61"]
  },
  {
    id: 66, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Ege kıyıları nasıl bir kıyı tipine örnek gösterilebilir?",
    secenekler: ["Ria (enine) kıyısı", "Boyuna kıyı", "Delta kıyısı", "Falezli kıyı"],
    dogru: 0,
    aciklama: "Ege kıyıları, vadilerin denizle dik açı yapmasıyla çok sayıda körfez, yarımada ve ada oluşturan ria (enine) kıyı tipine örnek gösterilir.",
    iller: ["TR09", "TR48"]
  },
  {
    id: 67, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "İskenderun Körfezi hangi bölgede yer alır?",
    secenekler: ["Ege", "Akdeniz", "Marmara", "Karadeniz"],
    dogru: 1,
    aciklama: "İskenderun Körfezi, Akdeniz Bölgesi'nde Hatay ve Adana illeri kıyısında yer alan büyük bir körfezdir.",
    iller: ["TR31"]
  },
  {
    id: 68, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'nin güneybatısında bulunan ve derin girintiler oluşturan kıyı tipi hangisidir?",
    secenekler: ["Haliç", "Ria", "Fjord", "Tombolo"],
    dogru: 1,
    aciklama: "Türkiye'nin güneybatısında (Muğla çevresi) aşınan vadi ağızlarının sular altında kalmasıyla ria kıyı tipi oluşmuştur.",
    iller: ["TR48"]
  },
  {
    id: 69, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Marmara Denizi kaç metre derinliktedir (ortalama)?",
    secenekler: ["100 m", "250 m", "500 m", "850 m"],
    dogru: 1,
    aciklama: "Marmara Denizi'nin ortalama derinliği yaklaşık 250 metredir; en derin yeri ise 1355 m'dir.",
    iller: ["TR34"]
  },
  {
    id: 70, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'de falezler (yalıyarlar) en fazla hangi kıyılarda görülür?",
    secenekler: ["Ege kıyıları", "Akdeniz batı kıyıları (Antalya)", "Karadeniz kıyıları", "Marmara kıyıları"],
    dogru: 1,
    aciklama: "Antalya körfezi gibi Akdeniz batı kıyılarında kireçtaşı kayalıkların dalgalarla aşınmasıyla dik falezler oluşmuştur.",
    iller: ["TR07"]
  },
  {
    id: 71, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Çanakkale Boğazı hangi iki denizi birbirine bağlar?",
    secenekler: ["Karadeniz - Marmara", "Marmara - Ege", "Ege - Akdeniz", "Karadeniz - Ege"],
    dogru: 1,
    aciklama: "Çanakkale Boğazı (Dardaneller), Marmara Denizi ile Ege Denizi'ni birbirine bağlar.",
    iller: ["TR17"]
  },
  {
    id: 72, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "İstanbul Boğazı hangi iki denizi birbirine bağlar?",
    secenekler: ["Karadeniz - Ege", "Marmara - Ege", "Karadeniz - Marmara", "Akdeniz - Marmara"],
    dogru: 2,
    aciklama: "İstanbul Boğazı (Boğaziçi), Karadeniz ile Marmara Denizi'ni birbirine bağlar.",
    iller: ["TR34"]
  },
  {
    id: 73, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'nin kıyılarının en az girintili-çıkıntılı olduğu bölge hangisidir?",
    secenekler: ["Ege", "Marmara", "Akdeniz", "Karadeniz"],
    dogru: 3,
    aciklama: "Karadeniz kıyıları, dağların kıyıya paralel uzanması ve tektonik yapısı nedeniyle az girintili-çıkıntılı düz bir kıyı çizgisine sahiptir.",
    iller: ["TR61", "TR52"]
  },
  {
    id: 74, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'nin kıta sahanlığı en geniş olan denizi hangisidir?",
    secenekler: ["Karadeniz", "Ege", "Marmara", "Akdeniz"],
    dogru: 1,
    aciklama: "Ege Denizi'nde Türkiye'nin kıta sahanlığı geniş tutulmakta; bu nedenle Türkiye-Yunanistan arasında sıkça kıta sahanlığı anlaşmazlıkları yaşanmaktadır.",
    iller: ["TR35"]
  },
  {
    id: 75, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Marmara Denizi'nin Türkiye açısından önemi nedir?",
    secenekler: ["En derin denizdir", "Boğazlarla bağlantı kurarak hem Karadeniz hem Ege'ye erişim sağlar", "Balıkçılık açısından en verimlidir", "En büyük denizdir"],
    dogru: 1,
    aciklama: "Marmara Denizi, Türk Boğazları Sistemi'nin merkezinde yer alarak Karadeniz ile Akdeniz-Ege arasındaki geçiş yolunu oluşturur.",
    iller: ["TR34"]
  },

  // ===== ÜNİTE 6: COĞRAFİ BÖLGELER =====
  {
    id: 76, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye kaç coğrafi bölgeye ayrılmaktadır?",
    secenekler: ["5", "6", "7", "8"],
    dogru: 2,
    aciklama: "Türkiye, 1941 yılında Birinci Coğrafya Kongresi'nde 7 coğrafi bölgeye ayrılmıştır.",
    iller: []
  },
  {
    id: 77, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'nin en büyük coğrafi bölgesi hangisidir?",
    secenekler: ["İç Anadolu", "Doğu Anadolu", "Karadeniz", "Ege"],
    dogru: 1,
    aciklama: "Doğu Anadolu Bölgesi, yaklaşık 164.000 km² ile Türkiye'nin en büyük coğrafi bölgesidir.",
    iller: ["TR25", "TR65"]
  },
  {
    id: 78, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'nin en küçük coğrafi bölgesi hangisidir?",
    secenekler: ["Marmara", "Ege", "Güneydoğu Anadolu", "Karadeniz"],
    dogru: 2,
    aciklama: "Güneydoğu Anadolu Bölgesi, yaklaşık 61.000 km² ile Türkiye'nin en küçük coğrafi bölgesidir.",
    iller: ["TR63", "TR21"]
  },
  {
    id: 79, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'nin en kalabalık nüfuslu bölgesi hangisidir?",
    secenekler: ["İç Anadolu", "Doğu Anadolu", "Marmara", "Ege"],
    dogru: 2,
    aciklama: "Marmara Bölgesi, İstanbul başta olmak üzere Türkiye'nin en kalabalık nüfusuna sahip bölgesidir.",
    iller: ["TR34", "TR16"]
  },
  {
    id: 80, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'nin en seyrek nüfuslu bölgesi hangisidir?",
    secenekler: ["Güneydoğu Anadolu", "İç Anadolu", "Doğu Anadolu", "Karadeniz"],
    dogru: 2,
    aciklama: "Doğu Anadolu Bölgesi, zorlu coğrafi koşullar ve iklim nedeniyle nüfus yoğunluğunun en düşük olduğu bölgedir.",
    iller: ["TR25", "TR65"]
  },
  {
    id: 81, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Akdeniz Bölgesi'nin önemli tarım ürünleri arasında hangisi yer almaz?",
    secenekler: ["Turunçgiller", "Pamuk", "Çay", "Muz"],
    dogru: 2,
    aciklama: "Çay, Karadeniz Bölgesi'nin özellikle Rize ve Artvin illerinde yetiştirilen bir üründür. Akdeniz'de turunçgiller, pamuk, muz ve zeytin öne çıkar.",
    iller: ["TR07"]
  },
  {
    id: 82, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "GAP (Güneydoğu Anadolu Projesi) hangi iki nehri kapsar?",
    secenekler: ["Kızılırmak - Yeşilırmak", "Fırat - Dicle", "Sakarya - Meriç", "Seyhan - Ceyhan"],
    dogru: 1,
    aciklama: "GAP Projesi, Fırat ve Dicle nehirleri üzerinde kurulu barajlar ve sulama kanallarını kapsayan Güneydoğu Anadolu'nun kalkınma projesidir.",
    iller: ["TR21", "TR63"]
  },
  {
    id: 83, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Karadeniz Bölgesi'nde hangi ürün dünyada önemli üretim miktarına sahiptir?",
    secenekler: ["Buğday", "Fındık", "Pamuk", "Şeker pancarı"],
    dogru: 1,
    aciklama: "Türkiye, dünya fındık üretiminin yaklaşık %65-70'ini karşılamakta olup bu üretimin büyük çoğunluğu Karadeniz Bölgesi'nden sağlanmaktadır.",
    iller: ["TR52"]
  },
  {
    id: 84, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "İç Anadolu Bölgesi'nin en önemli tarım ürünü hangisidir?",
    secenekler: ["Mısır", "Buğday", "Zeytin", "Çay"],
    dogru: 1,
    aciklama: "İç Anadolu Bölgesi, Türkiye'nin 'tahıl ambarı' olarak bilinir; özellikle buğday ve arpa üretimi ön plandadır.",
    iller: ["TR42", "TR06"]
  },
  {
    id: 85, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'nin en fazla yağış alan bölgesi hangisidir?",
    secenekler: ["Akdeniz", "Marmara", "Doğu Karadeniz", "Ege"],
    dogru: 2,
    aciklama: "Doğu Karadeniz (Rize çevresi) yılda ortalama 2000-3000 mm yağış alarak Türkiye'nin en yağışlı bölgesidir.",
    iller: ["TR53"]
  },
  {
    id: 86, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'nin en az yağış alan bölgesi hangisidir?",
    secenekler: ["İç Anadolu", "Güneydoğu Anadolu", "Doğu Anadolu", "Ege"],
    dogru: 1,
    aciklama: "Güneydoğu Anadolu Bölgesi, özellikle Şanlıurfa ve Mardin çevresi yılda 300-400 mm yağış ile Türkiye'nin en kurak bölgesidir.",
    iller: ["TR63"]
  },
  {
    id: 87, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Ege Bölgesi'nde öne çıkan tarım ürünleri hangileridir?",
    secenekler: ["Çay - Fındık", "Zeytin - Üzüm - İncir - Tütün", "Buğday - Arpa", "Pamuk - Mısır"],
    dogru: 1,
    aciklama: "Ege Bölgesi; zeytin, üzüm, incir ve tütün gibi değerli tarım ürünleriyle ön plana çıkar.",
    iller: ["TR09", "TR35"]
  },
  {
    id: 88, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'nin sanayi açısından en gelişmiş bölgesi hangisidir?",
    secenekler: ["İç Anadolu", "Ege", "Marmara", "Karadeniz"],
    dogru: 2,
    aciklama: "Marmara Bölgesi, İstanbul, Bursa, Kocaeli gibi sanayi şehirleriyle Türkiye'nin sanayi üretiminin yaklaşık %40'ını gerçekleştiren bölgedir.",
    iller: ["TR34", "TR16"]
  },
  {
    id: 89, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'de tekstil sanayisi en yoğun hangi bölgede gelişmiştir?",
    secenekler: ["Karadeniz", "Doğu Anadolu", "Marmara ve Ege", "Güneydoğu Anadolu"],
    dogru: 2,
    aciklama: "Türkiye'nin tekstil sanayisi, ham madde (pamuk, ipek) ve insan kaynağı açısından Marmara ve Ege bölgelerinde yoğunlaşmıştır.",
    iller: ["TR34", "TR35"]
  },
  {
    id: 90, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Doğu Anadolu Bölgesi'nin en önemli tarımsal faaliyeti hangisidir?",
    secenekler: ["Tahıl üretimi", "Hayvancılık (büyükbaş)", "Narenciye", "Zeytin"],
    dogru: 1,
    aciklama: "Doğu Anadolu Bölgesi, geniş yaylalar ve mera alanları nedeniyle büyükbaş hayvancılığın Türkiye'de en fazla yapıldığı bölgedir.",
    iller: ["TR25", "TR65"]
  },

  // ===== BONUS SORULAR (Karma Coğrafya) =====
  {
    id: 91, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de akarsular üzerinde kurulan barajların temel amacı nedir?",
    secenekler: ["Sadece sulama", "Enerji üretimi", "Sulama, enerji üretimi ve içme suyu", "Sadece taşkın kontrolü"],
    dogru: 2,
    aciklama: "Türkiye'deki barajlar çok amaçlı olup sulama, hidroelektrik enerji, içme suyu ve taşkın kontrolü gibi birden fazla amaca hizmet eder.",
    iller: []
  },
  {
    id: 92, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Kuzey Anadolu Fay Hattı (KAF) hangi yönde uzanır?",
    secenekler: ["Kuzey - Güney", "Doğu - Batı", "Kuzeydoğu - Güneybatı", "Kuzeybatı - Güneydoğu"],
    dogru: 1,
    aciklama: "Kuzey Anadolu Fay Hattı (KAF), Erzincan'dan İzmit Körfezi'ne kadar Doğu-Batı yönünde uzanır.",
    iller: ["TR24", "TR41"]
  },
  {
    id: 93, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'de 'yeniden gençleşme' sonucu boğaz vadisi oluşumu en çok hangi bölgede görülür?",
    secenekler: ["Karadeniz", "Ege", "Akdeniz", "İç Anadolu"],
    dogru: 1,
    aciklama: "Ege Bölgesi'nde Menderes, Gediz gibi nehirler yeniden gençleşme sonucu boğaz vadileri ve teraslar oluşturmuştur.",
    iller: ["TR09"]
  },
  {
    id: 94, unite: 4, uniteName: "Göller",
    soru: "Karakaya Baraj Gölü hangi nehir üzerinde kurulmuştur?",
    secenekler: ["Dicle", "Fırat", "Kızılırmak", "Sakarya"],
    dogru: 1,
    aciklama: "Karakaya Baraj Gölü, Fırat Nehri üzerinde Malatya ve Elazığ illeri arasında kurulmuştur.",
    iller: ["TR44", "TR23"]
  },
  {
    id: 95, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye kıyılarında en çok hangi kıyı şekli görülür?",
    secenekler: ["Tombolo", "Lagün", "Delta", "Kıyı kordonları ve kumullar"],
    dogru: 3,
    aciklama: "Türkiye kıyılarında kıyı kordonları ve kumullar oldukça yaygındır; Karadeniz başta olmak üzere birçok kıyıda görülür.",
    iller: []
  },
  {
    id: 96, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Marmara Bölgesi'nde öne çıkan hayvancılık ürünü hangisidir?",
    secenekler: ["Büyükbaş süt hayvancılığı", "Koyun yetiştiriciliği", "Tavukçuluk", "Arıcılık"],
    dogru: 0,
    aciklama: "Marmara Bölgesi'nde yoğun nüfus ve sanayiye bağlı olarak süt hayvancılığı (inek) ön plana çıkmaktadır.",
    iller: ["TR34"]
  },
  {
    id: 97, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de akarsuların debisi en düşük olduğu mevsim hangisidir?",
    secenekler: ["Kış", "İlkbahar", "Yaz", "Sonbahar"],
    dogru: 2,
    aciklama: "İç Anadolu ve Güneydoğu Anadolu'da yazın yüksek sıcaklık ve düşük yağış nedeniyle akarsuların debisi en düşük seviyeye iner.",
    iller: []
  },
  {
    id: 98, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de deprem riski en yüksek fay hattı hangisidir?",
    secenekler: ["Doğu Anadolu Fay Hattı", "Kuzey Anadolu Fay Hattı", "Batı Anadolu Fayları", "Hepsi aynı risk taşır"],
    dogru: 1,
    aciklama: "Kuzey Anadolu Fay Hattı (KAF), tarihsel süreçte en fazla yıkıcı deprem üreten fay olarak bilinmekte ve İstanbul başta olmak üzere büyük nüfus merkezlerine yakın geçmektedir.",
    iller: []
  },
  {
    id: 99, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Çarşamba Ovası hangi nehrin oluşturduğu delta ovasıdır?",
    secenekler: ["Kızılırmak", "Yeşilırmak", "Sakarya", "Bartın"],
    dogru: 1,
    aciklama: "Çarşamba Ovası, Yeşilırmak Nehri'nin Karadeniz'e döküldüğü yerde oluşturduğu delta ovasıdır.",
    iller: ["TR55"]
  },
  {
    id: 100, unite: 4, uniteName: "Göller",
    soru: "Türkiye'nin ikinci büyük gölü hangisidir?",
    secenekler: ["Tuz Gölü", "Eğirdir Gölü", "Beşehir Gölü", "Burdur Gölü"],
    dogru: 0,
    aciklama: "Tuz Gölü, yaklaşık 1500 km² ile Van Gölü'nden sonra Türkiye'nin ikinci büyük gölüdür.",
    iller: ["TR68"]
  },
  {
    id: 101, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'nin Akdeniz kıyılarında sıkça görülen bir kıyı şekli olan 'haliç' nasıl oluşur?",
    secenekler: ["Volkanik faaliyetlerle", "Akarsuların denize döküldüğü yerlerde dalga ve akıntı etkisiyle", "Buzul erimesiyle", "Okyanus akıntılarıyla"],
    dogru: 1,
    aciklama: "Haliçler; nehir ağızlarında tatlı su ile tuzlu suyun karıştığı, gelgit ve dalgaların etkisiyle şekillenen kıyı yapılarıdır.",
    iller: []
  },
  {
    id: 102, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'de turizm gelirlerinin en yüksek olduğu bölge hangisidir?",
    secenekler: ["Marmara", "Karadeniz", "Akdeniz", "Ege"],
    dogru: 2,
    aciklama: "Akdeniz Bölgesi; Antalya başta olmak üzere Alanya, Kemer, Side gibi turistik merkezleriyle Türkiye'nin en fazla turizm geliri elde ettiği bölgesidir.",
    iller: ["TR07"]
  },
  {
    id: 103, unite: 1, uniteName: "Akarsular",
    soru: "Sakarya Nehri hangi gölden doğar?",
    secenekler: ["Abant Gölü", "Sapanca Gölü", "Porsuk Çayı'ndan", "Kaynaklardan doğar - gölden değil"],
    dogru: 3,
    aciklama: "Sakarya Nehri, Afyonkarahisar'daki kaynaklardan doğar; herhangi bir gölden kaynaklanmaz.",
    iller: ["TR03"]
  },
  {
    id: 104, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de dağlık alanların yüzölçüme oranı yaklaşık kaçtır?",
    secenekler: ["%25", "%40", "%55", "%70"],
    dogru: 2,
    aciklama: "Türkiye yüzölçümünün yaklaşık %55'i dağlık ve engebeli arazilerden oluşmaktadır.",
    iller: []
  },
  {
    id: 105, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Polderler hangi ülkenin coğrafyasıyla özdeşleşmiş olsa da Türkiye'de hangi bölgede küçük ölçekli benzeri görülür?",
    secenekler: ["Karadeniz delta ovaları", "İç Anadolu ovaları", "Ege graben ovaları", "Güneydoğu platoları"],
    dogru: 0,
    aciklama: "Karadeniz'deki delta ovalarında (Bafra, Çarşamba) deniz seviyesine yakın düzlükler polder benzeri özellikler taşır.",
    iller: ["TR55"]
  },
  {
    id: 106, unite: 4, uniteName: "Göller",
    soru: "Türkiye'de sulama amacıyla kurulan en büyük baraj hangisidir?",
    secenekler: ["Keban Barajı", "Atatürk Barajı", "Ilısu Barajı", "Karakaya Barajı"],
    dogru: 1,
    aciklama: "Atatürk Barajı, Fırat Nehri üzerinde kurulu olup sulama ve enerji açısından Türkiye'nin en büyük barajıdır.",
    iller: ["TR02"]
  },
  {
    id: 107, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'nin dört denizle çevrili olması coğrafi açıdan ne anlama gelir?",
    secenekler: ["Deniz ikliminin her yerde egemen olması", "Üç tarafının denizle çevrilmesi nedeniyle yarımada özelliği taşıması", "Dağlık arazinin az olması", "Tarım alanlarının fazla olması"],
    dogru: 1,
    aciklama: "Türkiye, üç tarafı denizle çevrili (kuzey, batı, güney) bir yarımada üzerinde yer alır ve stratejik konumu nedeniyle üç denize kıyısı vardır.",
    iller: []
  },
  {
    id: 108, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'de 'Birinci Coğrafya Kongresi' hangi yılda yapılmış ve 7 bölge belirlenmiştir?",
    secenekler: ["1923", "1930", "1941", "1950"],
    dogru: 2,
    aciklama: "1941 yılında Ankara'da düzenlenen Birinci Coğrafya Kongresi'nde Türkiye 7 coğrafi bölgeye ve bölümlerine ayrılmıştır.",
    iller: []
  },
  {
    id: 109, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de akarsu havzaları arasında en küçük olan hangisidir?",
    secenekler: ["Meriç Havzası", "Susurluk Havzası", "Akarçay Havzası (kapalı)", "Büyük Menderes Havzası"],
    dogru: 2,
    aciklama: "Akarçay Havzası, sularını denize ulaştıramayan kapalı bir havzadır ve Türkiye'nin en küçük havzaları arasındadır.",
    iller: ["TR03"]
  },
  {
    id: 110, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Uludağ hangi ilde bulunur?",
    secenekler: ["İstanbul", "Bursa", "Balıkesir", "Kocaeli"],
    dogru: 1,
    aciklama: "Uludağ (2543 m), Bursa iline bağlı olup kış turizmi ve kayak merkezi olarak ünlüdür.",
    iller: ["TR16"]
  },

  // Ek sorular (111-150)
  {
    id: 111, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'deki en önemli uluslararası su anlaşmazlığı hangi nehirler üzerindedir?",
    secenekler: ["Kızılırmak - Yeşilırmak", "Meriç - Tunca", "Fırat - Dicle", "Sakarya - Çoruh"],
    dogru: 2,
    aciklama: "Türkiye, Suriye ve Irak arasında Fırat ve Dicle nehirlerinin suları konusunda su anlaşmazlıkları yaşanmaktadır.",
    iller: ["TR63"]
  },
  {
    id: 112, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de 'Ilgaz Dağları' hangi bölgede yer alır?",
    secenekler: ["Ege", "Marmara", "Karadeniz (iç kesim)", "İç Anadolu"],
    dogru: 2,
    aciklama: "Ilgaz Dağları, Karabük ve Kastamonu illeri arasında Karadeniz Bölgesi'nin güney kesiminde yer alır.",
    iller: ["TR37"]
  },
  {
    id: 113, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "GAP Projesi'nde sulanan Harran Ovası'nın sulama suyu nereden sağlanır?",
    secenekler: ["Dicle Nehri", "Fırat Nehri (Atatürk Barajı)", "Ceyhan Nehri", "Yeraltı suları"],
    dogru: 1,
    aciklama: "Harran Ovası, Fırat Nehri üzerindeki Atatürk Barajı'ndan çekilen sularla GAP kapsamında sulanmaktadır.",
    iller: ["TR63", "TR02"]
  },
  {
    id: 114, unite: 4, uniteName: "Göller",
    soru: "Türkiye'de en fazla balık üretilen doğal göl hangisidir?",
    secenekler: ["Van Gölü", "Tuz Gölü", "Eğirdir Gölü", "Beşehir Gölü"],
    dogru: 2,
    aciklama: "Eğirdir Gölü, tatlı su balıkçılığı açısından Türkiye'nin en verimli doğal göllerinden biridir.",
    iller: ["TR32"]
  },
  {
    id: 115, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'nin en büyük körfezi hangisidir?",
    secenekler: ["İskenderun Körfezi", "İzmir Körfezi", "Antalya Körfezi", "Edremit Körfezi"],
    dogru: 2,
    aciklama: "Antalya Körfezi, yaklaşık 350 km genişliğiyle Türkiye'nin en büyük körfezidir.",
    iller: ["TR07"]
  },
  {
    id: 116, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Erzurum hangi coğrafi bölgede yer alır?",
    secenekler: ["İç Anadolu", "Güneydoğu Anadolu", "Doğu Anadolu", "Karadeniz"],
    dogru: 2,
    aciklama: "Erzurum, Doğu Anadolu Bölgesi'nde Erzurum-Kars Bölümü'nde yer alır.",
    iller: ["TR25"]
  },
  {
    id: 117, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'de hangi bölge 'Orta Karadeniz Bölümü' olarak adlandırılır?",
    secenekler: ["Samsun - Sinop çevresi", "Rize - Trabzon çevresi", "Bartın - Zonguldak çevresi", "Kastamonu - Bolu çevresi"],
    dogru: 0,
    aciklama: "Karadeniz Bölgesi, Batı, Orta ve Doğu Karadeniz bölümleri olarak ayrılır; Orta Karadeniz Bölümü Samsun çevresini kapsar.",
    iller: ["TR55"]
  },
  {
    id: 118, unite: 1, uniteName: "Akarsular",
    soru: "Porsuk Çayı hangi büyük nehrin koludur?",
    secenekler: ["Kızılırmak", "Sakarya", "Fırat", "Yeşilırmak"],
    dogru: 1,
    aciklama: "Porsuk Çayı, Eskişehir'den geçen ve Sakarya Nehri'ne katılan bir koldur.",
    iller: ["TR26", "TR54"]
  },
  {
    id: 119, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de fay hatlarının en yoğun geçtiği bölge hangisidir?",
    secenekler: ["Marmara ve Kuzey Anadolu", "Ege ve Marmara", "Kuzey Anadolu ve Doğu Anadolu", "Hepsi eşit yoğunlukta"],
    dogru: 2,
    aciklama: "Kuzey Anadolu Fay Hattı (KAF) ve Doğu Anadolu Fay Hattı (DAF), Türkiye'nin en aktif sismik kuşaklarını oluşturur.",
    iller: []
  },
  {
    id: 120, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'de 'polye' oluşumları hangi arazi tipinde yaygındır?",
    secenekler: ["Alüvyal araziler", "Karstik (kireçtaşı) araziler", "Volkanik araziler", "Killi araziler"],
    dogru: 1,
    aciklama: "Polyeler, karstik bölgelerde kireçtaşının çözünmesiyle oluşan kapalı havzalardır; Türkiye'de Toros Dağları eteklerinde yaygındır.",
    iller: ["TR07", "TR42"]
  },
  {
    id: 121, unite: 4, uniteName: "Göller",
    soru: "Türkiye'de tuz üretiminin büyük kısmı hangi gölden sağlanır?",
    secenekler: ["Van Gölü", "Burdur Gölü", "Tuz Gölü", "Eğirdir Gölü"],
    dogru: 2,
    aciklama: "Tuz Gölü, Türkiye'nin ihtiyaç duyduğu sofra tuzunun önemli bir kısmını karşılayan büyük bir tuz kaynağıdır.",
    iller: ["TR68"]
  },
  {
    id: 122, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'de 'lagün' oluşumlarına en fazla hangi kıyılarda rastlanır?",
    secenekler: ["Karadeniz kıyıları", "Ege kıyıları", "Marmara kıyıları", "Akdeniz batısı"],
    dogru: 0,
    aciklama: "Karadeniz kıyılarında kıyı kordonları arkasında lagünler (koy gölleri) oluşmuştur; Karasu, Kızılırmak ağzı örnek gösterilebilir.",
    iller: ["TR61"]
  },
  {
    id: 123, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Güneydoğu Anadolu Bölgesi'nin arazi yapısı nasıldır?",
    secenekler: ["Dağlık ve engebeli", "Geniş platolar ve ovalardan oluşur", "Kıyı ovaları egemendir", "Alüvyal düzlükler yoktur"],
    dogru: 1,
    aciklama: "Güneydoğu Anadolu Bölgesi, geniş platolar (Mardin, Gaziantep) ve düz ovalardan (Harran, Dicle) oluşan görece düz bir yapıya sahiptir.",
    iller: ["TR21", "TR63"]
  },
  {
    id: 124, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de akarsular hangi mevsimde en yüksek debiye ulaşır?",
    secenekler: ["Kış", "Yaz", "Sonbahar", "İlkbahar"],
    dogru: 3,
    aciklama: "İlkbaharda karların erimesi ve yağışların artmasıyla akarsular en yüksek debiye ulaşır.",
    iller: []
  },
  {
    id: 125, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'deki Bolkar Dağları hangi sisteme aittir?",
    secenekler: ["Kuzey Anadolu Dağları", "Toros Dağları (Orta Toroslar)", "Ege Dağları", "Kürdistan Dağları"],
    dogru: 1,
    aciklama: "Bolkar Dağları, Toros Dağları sisteminin Orta Toroslar bölümünde yer alır ve Mersin iline bağlıdır.",
    iller: ["TR33"]
  },
  {
    id: 126, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'de 'Menteşe yöresi' hangi bölgede yer alır?",
    secenekler: ["Karadeniz", "Ege güneyi", "Akdeniz batısı", "İç Anadolu"],
    dogru: 1,
    aciklama: "Menteşe Yöresi, Muğla ilini kapsayan Ege Bölgesi'nin güney kesiminde engebeli ve dağlık bir alandır.",
    iller: ["TR48"]
  },
  {
    id: 127, unite: 4, uniteName: "Göller",
    soru: "Türkiye'de yüzölçümü bakımından en büyük baraj gölü hangisidir?",
    secenekler: ["Keban Barajı", "Atatürk Barajı", "Karakaya Barajı", "Ilısu Barajı"],
    dogru: 1,
    aciklama: "Atatürk Barajı, yaklaşık 817 km² yüzölçümü ile Türkiye'nin en büyük baraj gölüdür.",
    iller: ["TR02"]
  },
  {
    id: 128, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'nin Karadeniz kıyılarında doğal limanların az olmasının temel nedeni nedir?",
    secenekler: ["Denizin sığ olması", "Kıyının düz ve girintisiz olması", "Fırtınaların sık olması", "Nüfusun az olması"],
    dogru: 1,
    aciklama: "Kuzey Anadolu Dağları'nın Karadeniz'e paralel uzanması, kıyı şeridini düz ve girintisiz kılmakta; bu da doğal liman oluşumunu engellemektedir.",
    iller: ["TR61"]
  },
  {
    id: 129, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'nin 'Akdeniz iklimi' etkisindeki bölgeleri hangileridir?",
    secenekler: ["Karadeniz ve Marmara", "Akdeniz ve Ege kıyıları", "İç Anadolu ve Doğu Anadolu", "Güneydoğu ve Doğu Anadolu"],
    dogru: 1,
    aciklama: "Akdeniz ve Ege kıyıları; yazları sıcak-kurak, kışları ılık-yağışlı Akdeniz ikliminin etkisindedir.",
    iller: ["TR07", "TR09"]
  },
  {
    id: 130, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de akarsular üzerindeki en eski su değirmenleri en fazla hangi bölgede kullanılmıştır?",
    secenekler: ["Karadeniz", "Ege", "İç Anadolu", "Akdeniz"],
    dogru: 0,
    aciklama: "Karadeniz Bölgesi'nin hızlı akan dere ve çaylarında tarihsel olarak su değirmenleri (su değirmeni kültürü) yaygın biçimde kullanılmıştır.",
    iller: ["TR61"]
  },
  {
    id: 131, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de kalker (kireçtaşı) kökenli doğal köprüler ve mağaralar hangi bölgede yoğundur?",
    secenekler: ["Karadeniz", "Marmara", "Akdeniz (Toros)", "Ege"],
    dogru: 2,
    aciklama: "Toros Dağları kireçtaşı yapısı nedeniyle karst oluşumları (mağara, düden, dolina) Akdeniz Bölgesi'nde en yoğun şekilde görülür.",
    iller: ["TR07"]
  },
  {
    id: 132, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "İç Anadolu'daki geniş düzlüklerin oluşmasında temel etken nedir?",
    secenekler: ["Volkanik akıntılar", "Uzun süreli aşınma ve birikim süreçleri", "Tektonik çökmeler", "Buzullaşma"],
    dogru: 1,
    aciklama: "İç Anadolu'nun geniş düzlükleri, milyonlarca yıllık aşınma ve alüvyon birikim süreçleri sonucunda oluşmuştur.",
    iller: ["TR42", "TR06"]
  },
  {
    id: 133, unite: 4, uniteName: "Göller",
    soru: "Türkiye'de Ramsar Sözleşmesi kapsamında koruma altına alınan sulak alan sayısı kaçtır? (yaklaşık)",
    secenekler: ["5", "14", "25", "40"],
    dogru: 1,
    aciklama: "Türkiye, uluslararası öneme sahip sulak alanlar (Ramsar Sözleşmesi) kapsamında yaklaşık 14 alanı koruma altına almıştır.",
    iller: []
  },
  {
    id: 134, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Montrö Boğazlar Sözleşmesi hangi yılda imzalanmıştır?",
    secenekler: ["1923", "1936", "1945", "1950"],
    dogru: 1,
    aciklama: "Montrö Boğazlar Sözleşmesi, 1936 yılında imzalanmış ve Türkiye'ye Boğazlar üzerinde egemenlik hakkı tanımıştır.",
    iller: ["TR34"]
  },
  {
    id: 135, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'de hangi bölge 'karasal iklim' özelliklerini en belirgin şekilde gösterir?",
    secenekler: ["Marmara", "Akdeniz", "Karadeniz", "İç Anadolu ve Doğu Anadolu"],
    dogru: 3,
    aciklama: "İç Anadolu ve Doğu Anadolu, denizden uzak ve yüksek konumları nedeniyle sıcaklık farklarının belirgin olduğu karasal iklimi en yoğun yaşayan bölgelerdir.",
    iller: ["TR42", "TR25"]
  },
  {
    id: 136, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de 'çığ' olayının en sık yaşandığı bölge hangisidir?",
    secenekler: ["Ege", "Karadeniz", "Doğu Anadolu (yüksek dağlık kesimler)", "Güneydoğu Anadolu"],
    dogru: 2,
    aciklama: "Doğu Anadolu'nun yüksek dağlık kesimlerinde, özellikle Hakkari, Ağrı, Bitlis gibi illerde çığ olayları sık yaşanmaktadır.",
    iller: ["TR30", "TR04"]
  },
  {
    id: 137, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de 1999 Marmara Depremi'nin merkezi hangi ilçedeydi?",
    secenekler: ["İstanbul Avcılar", "Kocaeli Gölcük", "Sakarya Adapazarı", "Bursa İnegöl"],
    dogru: 1,
    aciklama: "17 Ağustos 1999 Marmara Depremi'nin (7,6 Mw) merkez üssü Kocaeli'nin Gölcük ilçesiydi.",
    iller: ["TR41"]
  },
  {
    id: 138, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'deki en önemli linyit kömürü havzası hangi bölgededir?",
    secenekler: ["İç Anadolu", "Ege", "Marmara", "Karadeniz"],
    dogru: 1,
    aciklama: "Ege Bölgesi'nde Soma (Manisa) ve Tunçbilek (Kütahya) gibi önemli linyit kömürü havzaları bulunmaktadır.",
    iller: ["TR45", "TR43"]
  },
  {
    id: 139, unite: 4, uniteName: "Göller",
    soru: "Türkiye'de Keban Baraj Gölü'nün enerji üretimindeki önemi nedir?",
    secenekler: ["Sulama amaçlıdır", "Türkiye'nin ilk büyük HES projesidir", "En büyük barajdır", "Su arıtma amaçlıdır"],
    dogru: 1,
    aciklama: "Keban Barajı (1974), Türkiye'de inşa edilen ilk büyük hidroelektrik santral projelerinden biri olup Fırat Nehri üzerindedir.",
    iller: ["TR23"]
  },
  {
    id: 140, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye kıyılarında en fazla turizm yatırımının yapıldığı kesim hangisidir?",
    secenekler: ["Karadeniz kıyıları", "Marmara kıyıları", "Akdeniz ve Ege kıyıları", "İç kıyılar"],
    dogru: 2,
    aciklama: "Akdeniz ve Ege kıyıları, iklim koşulları ve sahil olanakları nedeniyle yoğun turizm yatırımlarına ev sahipliği yapar.",
    iller: ["TR07", "TR48"]
  },
  {
    id: 141, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'de nüfus artış hızının en yüksek olduğu bölge tarihsel olarak hangisidir?",
    secenekler: ["Doğu Anadolu", "Güneydoğu Anadolu", "Marmara", "İç Anadolu"],
    dogru: 2,
    aciklama: "Marmara Bölgesi, göç çeken sanayi ve hizmet sektörü nedeniyle nüfus artış hızının en yüksek olduğu bölgedir.",
    iller: ["TR34"]
  },
  {
    id: 142, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de akarsular üzerindeki ilk büyük sulama kanalları hangi ovada açılmıştır?",
    secenekler: ["Konya Ovası", "Çukurova", "Harran Ovası", "Gediz Ovası"],
    dogru: 1,
    aciklama: "Çukurova'da Seyhan ve Ceyhan nehirleri üzerinden açılan sulama kanalları Türkiye'nin ilk kapsamlı sulama altyapılarından biridir.",
    iller: ["TR01"]
  },
  {
    id: 143, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de demir cevheri üretiminin yoğunlaştığı bölge hangisidir?",
    secenekler: ["Karadeniz (Zonguldak)", "İç Anadolu (Sivas-Divriği)", "Ege", "Akdeniz"],
    dogru: 1,
    aciklama: "Sivas-Divriği, Türkiye'nin en önemli demir cevheri kaynağıdır ve İç Anadolu Bölgesi'nde yer alır.",
    iller: ["TR58"]
  },
  {
    id: 144, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'de 'taraça' (teras) oluşumları en fazla hangi nehir vadilerinde görülür?",
    secenekler: ["Küçük dere yataklarında", "Büyük nehirlerin geniş vadilerinde", "Kapalı havza göllerinde", "Delta ovalarında"],
    dogru: 1,
    aciklama: "Fırat, Kızılırmak, Sakarya gibi büyük nehirlerin geniş vadilerinde nehir taraçaları yaygın olarak gözlemlenir.",
    iller: []
  },
  {
    id: 145, unite: 4, uniteName: "Göller",
    soru: "Kovada Gölü hangi ilde bulunur?",
    secenekler: ["Burdur", "Isparta", "Antalya", "Konya"],
    dogru: 1,
    aciklama: "Kovada Gölü, Isparta iline bağlı olup Eğirdir Gölü ile bağlantılı, küçük bir doğal göldür.",
    iller: ["TR32"]
  },
  {
    id: 146, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'nin Karadeniz kıyılarında en önemli liman kenti hangisidir?",
    secenekler: ["Sinop", "Samsun", "Trabzon", "Zonguldak"],
    dogru: 2,
    aciklama: "Trabzon, doğal limana sahip olması ve Doğu Karadeniz'in ticaret merkezi konumuyla Karadeniz'in en önemli liman kentidir.",
    iller: ["TR61"]
  },
  {
    id: 147, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'de 'Karadeniz iklimi'nin en belirgin yaşandığı iller hangileridir?",
    secenekler: ["Kastamonu - Bartın", "Rize - Artvin", "Samsun - Ordu", "Trabzon - Giresun"],
    dogru: 1,
    aciklama: "Rize ve Artvin, yılın her mevsimi bol yağış alan Karadeniz ikliminin en belirgin özelliklerini gösteren illerdir.",
    iller: ["TR53", "TR08"]
  },
  {
    id: 148, unite: 1, uniteName: "Akarsular",
    soru: "Türkiye'de akarsuların taşımacılık amacıyla kullanılamamasının temel nedeni nedir?",
    secenekler: ["Suyun az olması", "Mevsimsele rejimleri ve eğimli yapıları", "Kirlilik", "Yasal düzenlemeler"],
    dogru: 1,
    aciklama: "Türkiye akarsularının mevsimsel değişken rejimleri, bol şelale ve hızlı akışlı kesimleri ulaşım açısından kullanımlarını engeller.",
    iller: []
  },
  {
    id: 149, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Munzur Dağları hangi bölgede bulunur?",
    secenekler: ["İç Anadolu", "Karadeniz", "Doğu Anadolu", "Güneydoğu Anadolu"],
    dogru: 2,
    aciklama: "Munzur Dağları, Tunceli ve Erzincan illeri arasında Doğu Anadolu Bölgesi'nde yer alır.",
    iller: ["TR62", "TR24"]
  },
  {
    id: 150, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'de tarımsal nüfus oranının en yüksek olduğu bölge hangisidir?",
    secenekler: ["Marmara", "İç Anadolu", "Doğu Anadolu", "Karadeniz"],
    dogru: 3,
    aciklama: "Karadeniz Bölgesi, dağlık ve engebeli yapısı nedeniyle küçük aile çiftçiliğinin yaygın olduğu, tarımsal nüfus oranının yüksek olduğu bir bölgedir.",
    iller: ["TR61", "TR52"]
  },
  {
    id: 151, unite: 3, uniteName: "Ovalar & Platolar",
    soru: "Türkiye'de 'Ergene Havzası' hangi bölgededir?",
    secenekler: ["Karadeniz", "Marmara", "Ege", "İç Anadolu"],
    dogru: 1,
    aciklama: "Ergene Havzası, Tekirdağ ve Edirne illerini kapsayan Marmara Bölgesi'nde yer alır ve buğday üretimiyle öne çıkar.",
    iller: ["TR59", "TR22"]
  },
  {
    id: 152, unite: 4, uniteName: "Göller",
    soru: "İznik Gölü hangi ilde bulunur?",
    secenekler: ["İstanbul", "Bursa", "Kocaeli", "Balıkesir"],
    dogru: 1,
    aciklama: "İznik Gölü, Bursa iline bağlı tektonik kökenli bir göldür ve tarihi İznik şehrine yakın konumdadır.",
    iller: ["TR16"]
  },
  {
    id: 153, unite: 5, uniteName: "Boğazlar & Kıyılar",
    soru: "Türkiye'de 'tombolo' oluşumuna en iyi örnek nerede görülür?",
    secenekler: ["Sinop Yarımadası", "İstanbul Boğazı", "Akdeniz koyları", "Ege adaları"],
    dogru: 0,
    aciklama: "Sinop, kıyıya birleşmiş yarımada yapısıyla tombolo oluşumuna örnek gösterilen önemli bir coğrafi şekildir.",
    iller: ["TR57"]
  },
  {
    id: 154, unite: 6, uniteName: "Coğrafi Bölgeler",
    soru: "Türkiye'de 'çeltik (pirinç)' tarımı en fazla hangi bölgede yapılır?",
    secenekler: ["İç Anadolu", "Akdeniz", "Karadeniz (Samsun-Bafra)", "Ege"],
    dogru: 2,
    aciklama: "Çeltik tarımı, su ihtiyacı fazla olan bir ürün olduğundan Karadeniz'in delta ovalarında (Bafra, Çarşamba) yoğunlaşmıştır.",
    iller: ["TR55"]
  },
  {
    id: 155, unite: 2, uniteName: "Dağlar & Volkanlar",
    soru: "Türkiye'de bor madeni üretiminde hangi bölge öne çıkar?",
    secenekler: ["Karadeniz", "Ege (Balıkesir-Bursa)", "Akdeniz", "Doğu Anadolu"],
    dogru: 1,
    aciklama: "Dünya bor rezervlerinin büyük çoğunluğuna ev sahipliği yapan Türkiye'de bor madeni üretimi özellikle Balıkesir-Bursa çevresinde yoğunlaşmaktadır.",
    iller: ["TR16", "TR10"]
  }
];
