import { City, Question } from './types';

export const UI_TRANSLATIONS = {
  pt: {
    eyebrow: "Mapa do Seu Destino",
    title: "Onde no mundo você deveria viver?",
    desc: "15 perguntas sobre seu ritmo de vida, ambições, relações e sonhos vão revelar a cidade do mundo que foi perfeitamente desenhada para você.",
    btnStart: "Descobrir Minha Cidade",
    headerTitle: "Onde Viver?",
    btnBack: "← Voltar",
    btnNext: "Próxima →",
    btnResult: "Ver Resultado ✦",
    resultEyebrow: "Sua cidade no mundo é",
    resultDividerText: "O que torna esta cidade especial:",
    alternativeTitle: "Também combinam com você",
    btnReset: "↺ Refazer o Quiz",
    durationLabel: "🕐 Cerca de 5 minutos",
    citiesCountLabel: "🌍 36 cidades analisadas",
    questionsCountLabel: "✦ 15 perguntas",
    selectLanguageTitle: "Selecione seu idioma / Select your language",
    tagline: "Uma jornada cartográfica para encontrar seu verdadeiro lar",
    orText: "ou"
  },
  en: {
    eyebrow: "Your Destiny Map",
    title: "Where in the world should you live?",
    desc: "15 questions about your pace of life, ambitions, relationships, and dreams will reveal the global city that was perfectly designed for you.",
    btnStart: "Discover My City",
    headerTitle: "Where to Live?",
    btnBack: "← Back",
    btnNext: "Next →",
    btnResult: "Get Results ✦",
    resultEyebrow: "Your city in the world is",
    resultDividerText: "What makes this city special:",
    alternativeTitle: "Also a great match for you",
    btnReset: "↺ Retake the Quiz",
    durationLabel: "🕐 About 5 minutes",
    citiesCountLabel: "🌍 36 cities analyzed",
    questionsCountLabel: "✦ 15 questions",
    selectLanguageTitle: "Select your language / Selecione seu idioma",
    tagline: "A cartographic journey to find your true home",
    orText: "or"
  }
};

export const CIDADES: City[] = [
  {
    id: "toquio",
    emoji: "🗼",
    perfil: { tech: 3, seguro: 3, urbano: 3, cultura: 3, ritmo: 3, coletivo: 3, natureza: 1, custo: -1 },
    pt: {
      nome: "Tóquio",
      pais: "Japão",
      desc: "Você é fascinado por ordem, inovação e profundidade cultural. Tóquio oferece a fusão perfeita entre tradição milenar e vanguarda tecnológica, onde cada bairro é um universo próprio.",
      tags: ["Tecnologia", "Gastronomia", "Segurança", "Transporte Público", "Tradição"],
      destaques: [
        { i: "🚇", l: "Transporte", v: "Metrô impecável e pontual" },
        { i: "🍜", l: "Gastronomia", v: "Capital mundial do sabor" },
        { i: "🌸", l: "Harmonia", v: "Parques e templos zen" }
      ]
    },
    en: {
      nome: "Tokyo",
      pais: "Japan",
      desc: "You are fascinated by order, innovation, and cultural depth. Tokyo offers the perfect fusion between ancient tradition and cutting-edge technology, where each neighborhood feels like its own universe.",
      tags: ["Technology", "Gastronomy", "Safety", "Public Transit", "Tradition"],
      destaques: [
        { i: "🚇", l: "Transit", v: "Impeccable & punctual subway" },
        { i: "🍜", l: "Gastronomy", v: "World culinary capital" },
        { i: "🌸", l: "Harmony", v: "Parks and zen temples" }
      ]
    }
  },
  {
    id: "lisboa",
    emoji: "🌊",
    perfil: { sol: 3, historia: 3, custo: 3, europa: 3, arte: 2, ritmo: -1, tech: 0, natureza: 3 },
    pt: {
      nome: "Lisboa",
      pais: "Portugal",
      desc: "Você busca beleza com custo de vida razoável, sol, história e uma Europa autêntica sem o frenesi das grandes metrópoles. Lisboa é poesia urbana sob uma luz deslumbrante.",
      tags: ["Sol", "História", "Gastronomia", "Mar", "Custo Acessível"],
      destaques: [
        { i: "☀️", l: "Clima", v: "300 dias de sol por ano" },
        { i: "🏄", l: "Mar", v: "Apenas 30 minutos de lindas praias" },
        { i: "🍷", l: "Custo de Vida", v: "Muito moderado para a Europa" }
      ]
    },
    en: {
      nome: "Lisbon",
      pais: "Portugal",
      desc: "You look for beauty with a reasonable cost of living, sun, history, and an authentic Europe without the frenzy of huge metropolises. Lisbon is pure urban poetry beneath a stunning light.",
      tags: ["Sun", "History", "Gastronomy", "Sea", "Affordable Living"],
      destaques: [
        { i: "☀️", l: "Climate", v: "300 days of sun per year" },
        { i: "🏄", l: "Sea", v: "Just 30 minutes to beautiful beaches" },
        { i: "🍷", l: "Cost of Living", v: "Highly moderate for Europe" }
      ]
    }
  },
  {
    id: "nova-york",
    emoji: "🗽",
    perfil: { ambicao: 3, urbano: 3, ritmo: 3, cultura: 3, diversidade: 3, custo: -2, natureza: -1, familia: 0 },
    pt: {
      nome: "Nova York",
      pais: "EUA",
      desc: "Você é ambicioso, acelerado e precisa estar no centro de tudo. Nova York é o palco dos que não aceitam limites — uma metrópole que pulsa energia pura 24 horas por dia.",
      tags: ["Ambição", "Networking", "Diversidade", "Cultura", "Adrenalina"],
      destaques: [
        { i: "🏙️", l: "Oportunidades", v: "Capital financeira e criativa global" },
        { i: "🎭", l: "Cultura", v: "Teatros da Broadway e grandes museus" },
        { i: "⚡", l: "Ritmo", v: "A cidade que nunca dorme" }
      ]
    },
    en: {
      nome: "New York",
      pais: "USA",
      desc: "You are ambitious, fast-paced, and need to be at the center of everything. New York is the stage for those who accept no limits — a metropolis pulsing with pure energy 24/7.",
      tags: ["Ambition", "Networking", "Diversity", "Culture", "Adrenaline"],
      destaques: [
        { i: "🏙️", l: "Opportunities", v: "Global financial & creative capital" },
        { i: "🎭", l: "Culture", v: "Broadway theaters & premier museums" },
        { i: "⚡", l: "Pace", v: "The city that never sleeps" }
      ]
    }
  },
  {
    id: "amsterda",
    emoji: "🚲",
    perfil: { liberdade: 3, design: 3, sustenta: 3, europa: 3, bike: 3, ritmo: 1, custo: -1, familia: 2 },
    pt: {
      nome: "Amsterdã",
      pais: "Holanda",
      desc: "Você valoriza liberdade, design, sustentabilidade e uma vida equilibrada entre trabalho e prazer. Amsterdã é o refúgio ideal para mentes progressistas e amantes da mobilidade sobre duas rodas.",
      tags: ["Liberdade", "Design", "Bicicletas", "Canais", "Sustentabilidade"],
      destaques: [
        { i: "🚲", l: "Mobilidade", v: "Cultura cicloviária de classe mundial" },
        { i: "🌷", l: "Charme", v: "Canais históricos e arquitetura icônica" },
        { i: "🌿", l: "Verde", v: "Sustentabilidade e praças por toda parte" }
      ]
    },
    en: {
      nome: "Amsterdam",
      pais: "Netherlands",
      desc: "You value freedom, design, sustainability, and a balanced life between work and play. Amsterdam is the ideal refuge for progressive minds and lovers of two-wheeled mobility.",
      tags: ["Freedom", "Design", "Bicycles", "Canals", "Sustainability"],
      destaques: [
        { i: "🚲", l: "Mobility", v: "World-class biking culture" },
        { i: "🌷", l: "Charm", v: "Historic canals & iconic architecture" },
        { i: "🌿", l: "Greenery", v: "Sustainability and parks everywhere" }
      ]
    }
  },
  {
    id: "barcelona",
    emoji: "🎨",
    perfil: { sol: 3, arte: 3, social: 3, gastronomia: 3, ritmo: 2, custo: 0, familia: 2, natureza: 2 },
    pt: {
      nome: "Barcelona",
      pais: "Espanha",
      desc: "Você é criativo, social e precisa de sol, arte e uma vida que celebra a convivência nas ruas. Barcelona é uma obra de arte viva que une as praias do Mediterrâneo à vibrante herança de Gaudí.",
      tags: ["Sol", "Arte", "Gastronomia", "Mar", "Vida Noturna"],
      destaques: [
        { i: "🎨", l: "Estética", v: "Modernismo catalão e Gaudí" },
        { i: "🌊", l: "Litoral", v: "Praias vibrantes no meio da cidade" },
        { i: "🥘", l: "Banquete", v: "Tapas sublimes e mercados históricos" }
      ]
    },
    en: {
      nome: "Barcelona",
      pais: "Spain",
      desc: "You are creative, social, and appreciate sun, art, and a life celebrating public square gatherings. Barcelona is a living masterpiece connecting Mediterranean sands with Gaudí's rich heritage.",
      tags: ["Sun", "Art", "Gastronomy", "Sea", "Nightlife"],
      destaques: [
        { i: "🎨", l: "Esthetics", v: "Catalan Modernism & Gaudí" },
        { i: "🌊", l: "Coastline", v: "Vibrant beaches right in the city" },
        { i: "🥘", l: "Banquet", v: "Sublime tapas & historic markets" }
      ]
    }
  },
  {
    id: "berlim",
    emoji: "🎸",
    perfil: { arte: 3, liberdade: 3, diversidade: 3, musica: 3, custo: 2, ritmo: 2, social: 3, europa: 3 },
    pt: {
      nome: "Berlim",
      pais: "Alemanha",
      desc: "Você é inconformista, criativo e valoriza a autenticidade sobre qualquer luxo de aparências. Berlim é a capital da contracultura, da reinvenção constante e da liberdade individual extrema.",
      tags: ["Arte", "Liberdade", "Música", "Diversidade", "Custo Moderado"],
      destaques: [
        { i: "🎭", l: "Cena Cultural", v: "Arte underground e museus históricos" },
        { i: "🏗️", l: "Vanguarda", v: "História que se reinventa todo dia" },
        { i: "💶", l: "Custo", v: "Razoável para uma grande capital europeia" }
      ]
    },
    en: {
      nome: "Berlin",
      pais: "Germany",
      desc: "You are non-conformist, highly creative, and value raw authenticity over cosmetic luxury. Berlin is the global capital of counterculture, constant reinvention, and absolute personal freedom.",
      tags: ["Art", "Freedom", "Music", "Diversity", "Moderate Cost"],
      destaques: [
        { i: "🎭", l: "Culture Scene", v: "Underground arts & powerful museums" },
        { i: "🏗️", l: "Vanguard", v: "History reinventing itself daily" },
        { i: "💶", l: "Cost", v: "Notably reasonable for a major European capital" }
      ]
    }
  },
  {
    id: "cidade-do-cabo",
    emoji: "🏔️",
    perfil: { natureza: 3, aventura: 3, liberdade: 2, diversidade: 2, sol: 3, custo: 2, familia: 2 },
    pt: {
      nome: "Cidade do Cabo",
      pais: "África do Sul",
      desc: "Você é aventureiro por natureza e quer viver cercado por paisagens dramáticas que tiram o fôlego. A Cidade do Cabo une montanhas imponentes a praias majestosas.",
      tags: ["Natureza", "Aventura", "Mar", "Vinhos", "Paisagens Épicas"],
      destaques: [
        { i: "⛰️", l: "Paisagem", v: "Table Mountain e o encontro de dois oceanos" },
        { i: "🍷", l: "Vinhedos", v: "Clima perfeito e vinícolas históricas" },
        { i: "🌅", v: "Pores do sol inesquecíveis sobre o Atlântico", l: "Beleza" }
      ]
    },
    en: {
      nome: "Cape Town",
      pais: "South Africa",
      desc: "You are an adventurer at heart and wish to live surrounded by dramatic, breathtaking landscapes. Cape Town joins soaring mountains with majestic coastlines.",
      tags: ["Nature", "Adventure", "Sea", "Wines", "Epic Scenery"],
      destaques: [
        { i: "⛰️", l: "Landscape", v: "Table Mountain & meeting of two oceans" },
        { i: "🍷", l: "Vineyards", v: "Perfect climate and historical estates" },
        { i: "🌅", l: "Beauty", v: "Unforgettable sunsets over the Atlantic" }
      ]
    }
  },
  {
    id: "singapura",
    emoji: "🦁",
    perfil: { tech: 3, seguro: 3, ambicao: 3, gastronomia: 3, urbano: 3, custo: -2, natureza: 1, familia: 2 },
    pt: {
      nome: "Singapura",
      pais: "Singapura",
      desc: "Você busca eficiência máxima, segurança infalível e quer o dinamismo asiático sem abrir mão de infraestrutura impecável. Singapura é a metrópole mais verde e moderna do planeta.",
      tags: ["Eficiência", "Tecnologia", "Gastronomia", "Segurança", "Negócios"],
      destaques: [
        { i: "🏙️", l: "Modernidade", v: "Urbanismo futurista exuberante" },
        { i: "🍜", l: "Culinária", v: "Incrível cultura de Hawker Centers" },
        { i: "🔒", l: "Segurança", v: "Uma das taxas de crime mais baixas do mundo" }
      ]
    },
    en: {
      nome: "Singapore",
      pais: "Singapore",
      desc: "You seek maximum efficiency, absolute safety, and want Asian dynamic energy paired with pristine infrastructure. Singapore is the cleanest, greenest, and most modern city-state.",
      tags: ["Efficiency", "Technology", "Gastronomy", "Safety", "Business"],
      destaques: [
        { i: "🏙️", l: "Modernity", v: "Lush futuristic urban planning" },
        { i: "🍜", l: "Cuisine", v: "Vibrant global Hawker Center culture" },
        { i: "🔒", l: "Safety", v: "One of the absolute lowest crime rates globally" }
      ]
    }
  },
  {
    id: "melbourne",
    emoji: "☕",
    perfil: { qualidade: 3, social: 3, esporte: 3, diversidade: 3, natureza: 2, familia: 3, custo: -1, ritmo: 1 },
    pt: {
      nome: "Melbourne",
      pais: "Austrália",
      desc: "Você é cosmopolita e preza pelo bem-estar urbano. Apaixonado por café, artes urbanas, esportes e um cotidiano amigável, Melbourne é rotineiramente eleita entre as melhores cidades para viver.",
      tags: ["Qualidade de Vida", "Café", "Esportes", "Multicultural", "Parques"],
      destaques: [
        { i: "☕", l: "Artesanal", v: "A indiscutível capital mundial do café espresso" },
        { i: "🏉", l: "Vibração", v: "Cultura esportiva intensa (AFL, Grand Slam)" },
        { i: "🌿", l: "Lazer", v: "Parques ingleses impecáveis e ruelas artísticas" }
      ]
    },
    en: {
      nome: "Melbourne",
      pais: "Australia",
      desc: "You are cosmopolitan and value urban well-being above all. Obsessed with micro-cafés, street art, sports, and a welcoming daily pace, Melbourne is regularly voted among the world's most livable cities.",
      tags: ["Quality of Life", "Coffee", "Sports", "Multicultural", "Parks"],
      destaques: [
        { i: "☕", l: "Artisanal", v: "The undisputed global capital of espresso" },
        { i: "🏉", l: "Vibe", v: "Intense sporting culture (AFL, Grand Slam)" },
        { i: "🌿", l: "Leisure", v: "Lush botanical gardens & creative laneways" }
      ]
    }
  },
  {
    id: "copenhague",
    emoji: "🧜",
    perfil: { qualidade: 3, sustenta: 3, design: 3, familia: 3, seguro: 3, custo: -2, sol: -1, ritmo: 0 },
    pt: {
      nome: "Copenhague",
      pais: "Dinamarca",
      desc: "Você acredita em bem-estar coletivo, sustentabilidade ecológica e design funcional. Copenhague é o lar sagrado do 'Hygge', famosa por suas ciclovias livres e felicidade geral.",
      tags: ["Felicidade", "Design", "Sustentabilidade", "Qualidade", "Família"],
      destaques: [
        { i: "😊", l: "Felicidade", v: "Sempre no topo do índice de satisfação internacional" },
        { i: "♻️", l: "Futuro", v: "Meta de CO2 neutro e canais incrivelmente limpos" },
        { i: "👪", l: "Educação", v: "Padrão de excelência absoluto para criar filhos" }
      ]
    },
    en: {
      nome: "Copenhagen",
      pais: "Denmark",
      desc: "You believe in collective welfare, ecological sustainability, and functional design. Copenhagen is the sacred home of 'Hygge', famous for its vast bike highway networks and general happiness.",
      tags: ["Happiness", "Design", "Sustainability", "Quality of Life", "Family"],
      destaques: [
        { i: "😊", l: "Happiness", v: "Constantly tops international satisfaction indices" },
        { i: "♻️", l: "Future", v: "Targeting carbon neutrality and pristine canals" },
        { i: "👪", l: "Family", v: "An absolute gold standard for raising children" }
      ]
    }
  },
  {
    id: "buenos-aires",
    emoji: "💃",
    perfil: { arte: 3, social: 3, gastronomia: 3, custo: 3, musica: 3, historia: 2, ritmo: 2, familia: 2 },
    pt: {
      nome: "Buenos Aires",
      pais: "Argentina",
      desc: "Você é apaixonado, intenso e ama literatura, cafés tradicionais e debates calorosos sobre culinária e política. Buenos Aires transborda charme europeu com paixão latino-americana.",
      tags: ["Paixão", "Tango", "Gastronomia", "Teatro", "Custo Baixo"],
      destaques: [
        { i: "💃", l: "Teatros", v: "Mais salas de teatro per capita que NY" },
        { i: "🥩", l: "Churrasco", v: "Cortes de carne memoráveis em cada portinha" },
        { i: "📚", l: "Cultura", v: "Cidade do romance, vinhos e livrarias monumentais" }
      ]
    },
    en: {
      nome: "Buenos Aires",
      pais: "Argentina",
      desc: "You are passionate, intense, and love literature, traditional cafés, and warm debates on gastronomy and politics. Buenos Aires overflows with European charm and Latin heart.",
      tags: ["Passion", "Tango", "Gastronomy", "Theater", "Low Cost"],
      destaques: [
        { i: "💃", l: "Theaters", v: "More theater stages per capita than NY" },
        { i: "🥩", l: "Grill", v: "Memorable steak cuts in simple local steakhouses" },
        { i: "📚", l: "Culture", v: "A city of books, fine Malbecs, and majestic architecture" }
      ]
    }
  },
  {
    id: "dubai",
    emoji: "🏙️",
    perfil: { ambicao: 3, luxo: 3, tech: 3, negocio: 3, sol: 2, custo: -1, natureza: -1, diversidade: 2 },
    pt: {
      nome: "Dubai",
      pais: "Emirados Árabes",
      desc: "Você pensa grande, gosta de modernidade impecável e adora o espírito de ambição global. Dubai oferece infraestrutura descompromissadamente moderna e fôlego cosmopolita de ponta.",
      tags: ["Luxo", "Tecnologia", "Negócios", "Sol", "Modernidade"],
      destaques: [
        { i: "🌆", l: "Arquitetura", v: "Os arranha-céus mais icônicos modernos" },
        { i: "💼", l: "Impostos", v: "Isenção fiscal para impulsionar sua carreira" },
        { i: "☀️", l: "Clima", v: "Verão eterno e praias limpas a poucos passos" }
      ]
    },
    en: {
      nome: "Dubai",
      pais: "UAE",
      desc: "You think big, admire absolute modernity, and love a global ambitious mindset. Dubai offers uncompromisingly high-end infrastructure and a top-tier cosmopolitan scale.",
      tags: ["Luxury", "Technology", "Business", "Sun", "Modernity"],
      destaques: [
        { i: "🌆", l: "Skyline", v: "The most iconic modern skyscrapers in the world" },
        { i: "💼", l: "Career", v: "Zero income tax to accelerate your wealth" },
        { i: "☀️", l: "Climate", v: "Endless summer and pristine beaches nearby" }
      ]
    }
  },
  {
    id: "cidade-do-mexico",
    emoji: "🌮",
    perfil: { gastronomia: 3, arte: 3, cultura: 3, custo: 3, diversidade: 3, social: 2, urbano: 2, familia: 2 },
    pt: {
      nome: "Cidade do México",
      pais: "México",
      desc: "Você ama o calor humano, a efervescência artística e uma gastronomia de renome mundial. A Cidade do México pulsa cultura com o legado cativante de Frida Kahlo e ricas tradições pré-hispânicas.",
      tags: ["Gastronomia", "Arte", "Cultura", "Diversidade", "Excelente Custo"],
      destaques: [
        { i: "🌮", l: "Sabor", v: "Melhor culinária de rua e restaurantes de alta cozinha" },
        { i: "🎨", l: "Museus", v: "Mais de 150 museus de arte e história" },
        { i: "💰", l: "Estilo", v: "Bairros vibrantes (Roma, Condesa) a preços ótimos" }
      ]
    },
    en: {
      nome: "Mexico City",
      pais: "Mexico",
      desc: "You love warm interactions, artistic effervescence, and world-class gastronomy. Mexico City pulses with culture, showcasing Frida Kahlo's legacy and rich pre-Hispanic history.",
      tags: ["Gastronomy", "Art", "Culture", "Diversity", "Great Value"],
      destaques: [
        { i: "🌮", l: "Flavor", v: "Phenomenal street foods & top-tier restaurants" },
        { i: "🎨", l: "Museums", v: "Home to over 150 vibrant art & history institutions" },
        { i: "💰", l: "Living", v: "Sophisticated areas (Roma/Condesa) with great value" }
      ]
    }
  },
  {
    id: "zurique",
    emoji: "🏔️",
    perfil: { seguro: 3, qualidade: 3, riqueza: 3, natureza: 2, familia: 3, custo: -3, ritmo: -1, sustenta: 2 },
    pt: {
      nome: "Zurique",
      pais: "Suíça",
      desc: "Você preza por quietude, sofisticação discreta, pontualidade britânica e o melhor que a Suíça tem a oferecer. Zurique combina requinte financeiro e acesso imediato aos Alpes suíços.",
      tags: ["Segurança", "Riqueza", "Montanhas", "Qualidade", "Estabilidade"],
      destaques: [
        { i: "🏦", l: "Finanças", v: "Hub financeiro global estável e seguro" },
        { i: "⛷️", l: "Alpes", v: "Montanhas exuberantes com neve a poucas horas" },
        { i: "🔒", l: "Civilidade", v: "Padrões públicos incrivelmente organizados" }
      ]
    },
    en: {
      nome: "Zurich",
      pais: "Switzerland",
      desc: "You cherish quiet, understated sophistication, flawless precision, and the best of Switzerland. Zurich merges financial prowess with immediate access to raw Alpine wonder.",
      tags: ["Safety", "Wealth", "Mountains", "Quality", "Stability"],
      destaques: [
        { i: "🏦", l: "Finance", v: "Top stable global finance hub with strong currency" },
        { i: "⛷️", l: "Alps", v: "Breathtaking snowy peaks just a train ride away" },
        { i: "🔒", l: "Civic Order", v: "Impeccably organized streets and public schools" }
      ]
    }
  },
  {
    id: "seoul",
    emoji: "🎮",
    perfil: { tech: 3, cultura: 3, gastronomia: 3, urbano: 3, social: 3, ritmo: 3, arte: 2, custo: 0 },
    pt: {
      nome: "Seul",
      pais: "Coreia do Sul",
      desc: "Você está antenado nas tendências modernas de tecnologia, k-pop, séries, moda e design. Seul é um colosso tecnológico que respira juventude e não dorme até o amanhecer.",
      tags: ["Tecnologia", "Cultura Pop", "Gastronomia", "Design", "Vida Noturna"],
      destaques: [
        { i: "🎮", l: "E-Sports", v: "Capital mundial dos games e internet ultrarrápida" },
        { i: "🍜", l: "Churrasco", v: "Gastronomia coreana única aberta toda a noite" },
        { i: "🏢", l: "Futurismo", v: "Metrô hipermoderno e templos medievais lado a lado" }
      ]
    },
    en: {
      nome: "Seoul",
      pais: "South Korea",
      desc: "You are tuned into modern trends in tech, pop culture, entertainment, and skincare. Seoul is a technological powerhouse that breathes youth and thrives until dawn.",
      tags: ["Technology", "Pop Culture", "Gastronomy", "Design", "Nightlife"],
      destaques: [
        { i: "🎮", l: "Tech Capital", v: "World gaming capital and ultra-fast internet network" },
        { i: "🍜", l: "BBQ", v: "Flavorful Korean BBQ and street markets open forever" },
        { i: "🏢", l: "Futurism", v: "Hyper-modern subway meeting century-old palaces" }
      ]
    }
  },
  {
    id: "nairobi",
    emoji: "🦁",
    perfil: { natureza: 3, aventura: 3, comunidade: 3, custo: 3, diversidade: 2, sol: 2, seguro: -1, urbano: 1 },
    pt: {
      nome: "Nairobi",
      pais: "Quênia",
      desc: "Você é um desbravador curioso, quer proximidade com a vida selvagem majestosa e quer testemunhar o crescimento de um hub de inovação apelidado de 'Silicon Savannah'.",
      tags: ["Natureza", "Aventuras", "Safári", "Crescimento", "Comunidade"],
      destaques: [
        { i: "🦁", l: "Fauna", v: "Parque Nacional de Nairobi com leões livres na berma" },
        { i: "🌍", l: "Empreender", v: "Energia vibrante do principal hub do leste africano" },
        { i: "🏔️", l: "Clima", v: "Planaltos ensolarados com temperatura amena" }
      ]
    },
    en: {
      nome: "Nairobi",
      pais: "Kenya",
      desc: "You are a curious trailblazer who wants proximity to spectacular wildlife while watching the rise of 'Silicon Savannah', East Africa's leading tech and business center.",
      tags: ["Nature", "Adventure", "Safari", "Growth", "Community"],
      destaques: [
        { i: "🦁", l: "Wildlife", v: "Nairobi National Park with lions roaming near skyline" },
        { i: "🌍", l: "Emerging Hub", v: "Vibrant entrepreneur energy in East Africa" },
        { i: "🏔️", l: "Climate", v: "Sunny high-altitude plateau with breezy days" }
      ]
    }
  },
  {
    id: "vancouver",
    emoji: "🏔️",
    perfil: { natureza: 3, qualidade: 3, sustenta: 3, diversidade: 3, familia: 3, custo: -1, sol: 0, ritmo: 1 },
    pt: {
      nome: "Vancouver",
      pais: "Canadá",
      desc: "Você quer esquiar de manhã e velejar à tarde, morando no centro de uma cidade limpa, segura e extremamente respeitosa. Vancouver equilibra natureza alpina e diversidade global de forma perfeita.",
      tags: ["Natureza", "Qualidade de Vida", "Diversidade", "Montanhas", "Sustentabilidade"],
      destaques: [
        { i: "🏔️", l: "Ao ar livre", v: "Trilhas florestais profundas e pistas de esqui a minutos" },
        { i: "🌿", l: "Ar Limpo", v: "Políticas ambientais rigorosas e ar puro" },
        { i: "🌍", l: "Cultura", v: "Forte influência multicultural asiática e excelente comida" }
      ]
    },
    en: {
      nome: "Vancouver",
      pais: "Canada",
      desc: "You want to ski in the morning and sail in the afternoon, living in a clean, exceptionally safe and respectful environment. Vancouver merges untamed nature and global diversity smoothly.",
      tags: ["Nature", "Quality of Life", "Diversity", "Mountains", "Sustainability"],
      destaques: [
        { i: "🏔️", l: "Outdoors", v: "Deep rainforest trails & ski slopes minutes away" },
        { i: "🌿", l: "Purity", v: "Strict environmental rules and crisp Pacific air" },
        { i: "🌍", l: "Culture", v: "Strong Asian multicultural community & top-tier dining" }
      ]
    }
  },
  {
    id: "bali",
    emoji: "🌺",
    perfil: { natureza: 3, espiritualidade: 3, custo: 3, liberdade: 3, aventura: 2, ritmo: -2, tech: 1, familia: 1 },
    pt: {
      nome: "Bali",
      pais: "Indonésia",
      desc: "Você deseja desacelerar a mente, conectar-se a si mesmo e viver a vida de forma descalça e consciente. Bali é o santuário mundial dos nômades digitais e amantes do bem-estar espiritual.",
      tags: ["Espiritualidade", "Natureza", "Custo Baixo", "Trabalho Remoto", "Bem-estar"],
      destaques: [
        { i: "🧘", l: "Mente", v: "Ioga diária, massagens e retiros budistas" },
        { i: "🌴", l: "Praias", v: "Campos de arroz verdes e cultura ancestral viva" },
        { i: "💻", l: "Coworking", v: "Comunidade massiva de empreendedores digitais" }
      ]
    },
    en: {
      nome: "Bali",
      pais: "Indonesia",
      desc: "You wish to slow down your mind, connect with yourself, and enjoy a barefoot, mindful life. Bali is the sanctuary of choice for conscious living, surfing, and digital nomad networks.",
      tags: ["Spirituality", "Nature", "Low Cost", "Remote Work", "Wellness"],
      destaques: [
        { i: "🧘", l: "Mindfulness", v: "Daily yoga, massages, and scenic temple retreats" },
        { i: "🌴", l: "Scenery", v: "Pristine green rice paddies and sacred coastlines" },
        { i: "💻", l: "Networking", v: "Immense, creative global remote work community" }
      ]
    }
  },
  {
    id: "lagos",
    emoji: "🎵",
    perfil: { musica: 3, energia: 3, social: 3, empreende: 3, arte: 2, custo: 2, seguro: -1, urbano: 2 },
    pt: {
      nome: "Lagos",
      pais: "Nigéria",
      desc: "Você possui energia transbordante, espírito empreendedor incansável e quer estar no vibrante caldeirão cultural que molda a música e a moda moderna do continente africano.",
      tags: ["Energia", "Afrobeat", "Moda", "Empreendedorismo", "Arte"],
      destaques: [
        { i: "🎵", l: "Música", v: "Berço do Afrobeat global e das festas elétricas" },
        { i: "👗", l: "Estilo", v: "Moda artesanal arrojada e design único" },
        { i: "💼", l: "Negócios", v: "A maior economia de consumo da África Ocidental" }
      ]
    },
    en: {
      nome: "Lagos",
      pais: "Nigeria",
      desc: "You have overflowing energy, a relentless entrepreneurial drive, and want to be in the vibrant cultural crucible shaping the fashion and music of modern Africa.",
      tags: ["Energy", "Afrobeat", "Fashion", "Entrepreneurship", "Art"],
      destaques: [
        { i: "🎵", l: "Music", v: "Birthplace of global Afrobeat and deep dance subcultures" },
        { i: "👗", l: "Style", v: "Bold, cutting-edge street fashion and designer industry" },
        { i: "💼", l: "Economy", v: "The leading consumer engine of West Africa" }
      ]
    }
  },
  {
    id: "toronto",
    emoji: "🍁",
    perfil: { diversidade: 3, seguro: 3, familia: 3, qualidade: 3, custo: -1, ritmo: 1, natureza: 1, social: 2 },
    pt: {
      nome: "Toronto",
      pais: "Canadá",
      desc: "Você preza por civilidade, boas oportunidades de carreira e uma sociedade onde a imigração é celebrada com respeito. Toronto apoia famílias de todos os cantos em uma das cidades mais seguras do mundo.",
      tags: ["Diversidade", "Segurança", "Família", "Oportunidades", "Organização"],
      destaques: [
        { i: "🌍", l: "Multicultural", v: "Mais de 140 línguas nacionais faladas nas ruas" },
        { i: "🔒", l: "Segurança", v: "Policiamento premiado e baixíssimos índices criminais" },
        { i: "💼", l: "Finanças", v: "Hub de inovação e finanças corporativas" }
      ]
    },
    en: {
      nome: "Toronto",
      pais: "Canada",
      desc: "You value civic order, strong career options, and a society where immigration is celebrated with genuine respect. Toronto supports families from every corner in unparalleled safety.",
      tags: ["Diversity", "Safety", "Family", "Opportunities", "Organization"],
      destaques: [
        { i: "🌍", l: "Multicultural", v: "Over 140 community languages spoken in daily life" },
        { i: "🔒", l: "Safety", v: "Extremely safe streets with respectful policing" },
        { i: "💼", l: "Finance", v: "Major technology, corporate, and healthcare market" }
      ]
    }
  },
  {
    id: "paris",
    emoji: "🗼",
    perfil: { arte: 3, gastronomia: 3, historia: 3, romantico: 3, moda: 3, custo: -1, ritmo: 1, sol: 0 },
    pt: {
      nome: "Paris",
      pais: "França",
      desc: "Você tem um apreço incondicional pela estética refinada, história gloriosa e pela paciência de desfrutar um café na calçada. Paris é a musa indiscutível da gastronomia, museus e da alta-costura.",
      tags: ["Arte", "Gastronomia", "Moda", "Romanticismo", "História"],
      destaques: [
        { i: "🎨", l: "Estética", v: "O Louvre, Orsay e belezas arquitetônicas de Hausmann" },
        { i: "🥐", l: "Tradição", v: "Cafés e bistrôs que guardam a história da literatura" },
        { i: "👗", l: "Moda", v: "Epicentro absoluto de luxo e vanguarda estilosa" }
      ]
    },
    en: {
      nome: "Paris",
      pais: "France",
      desc: "You have an unconditional appreciation for fine aesthetics, deep history, and the simple beauty of long sidewalk chats. Paris remains the undisputed capital of high fashion, art collections, and gastronomy.",
      tags: ["Art", "Gastronomy", "Fashion", "Romance", "History"],
      destaques: [
        { i: "🎨", l: "Aesthetics", v: "Louvre, Orsay, and Haussmann architecture" },
        { i: "🥐", l: "Tradition", v: "Legendary brasseries storing literary memories" },
        { i: "👗", l: "Fashion", v: "The absolute epicenter of global style and prestige" }
      ]
    }
  },
  {
    id: "tel-aviv",
    emoji: "🌊",
    perfil: { tech: 3, empreende: 3, social: 3, liberdade: 2, sol: 3, custo: -1, seguro: 1, natureza: 3 },
    pt: {
      nome: "Tel Aviv",
      pais: "Israel",
      desc: "Você adora calor mediterrâneo unido ao fervor das startups de alta tecnologia. Tel Aviv é onde a economia digital encontra a diversão à beira-mar e bares que pulsam sem limites.",
      tags: ["Negócios", "Praias", "Tecnologia", "Vida Noturna", "Sol"],
      destaques: [
        { i: "🚀", l: "Startups", v: "Conhecido como o segundo Vale do Silício" },
        { i: "🏖️", l: "Litoral", v: "Orla ensolarada e ideal para caminhadas ao ar livre" },
        { i: "🌙", l: "Vibração", v: "Bares, baladas e cena noturna enérgica e acolhedora" }
      ]
    },
    en: {
      nome: "Tel Aviv",
      pais: "Israel",
      desc: "You adore Mediterranean warmth paired with the high-octane drive of tech startups. Tel Aviv is where a massive digital ecosystem meets beach fitness and endless nightlife.",
      tags: ["Business", "Beaches", "Technology", "Nightlife", "Sun"],
      destaques: [
        { i: "🚀", l: "Startups", v: "Commonly known as the second Silicon Valley" },
        { i: "🏖️", l: "Coastline", v: "Sandy shores, sea breezes, and active beach gyms" },
        { i: "🌙", l: "Nightlife", v: "Enthusiastic restaurants, pubs, and non-stop dancing" }
      ]
    }
  },
  {
    id: "estocolmo",
    emoji: "❄️",
    perfil: { design: 3, natureza: 3, qualidade: 3, sustenta: 3, familia: 3, custo: -2, sol: -2, ritmo: 0 },
    pt: {
      nome: "Estocolmo",
      pais: "Suécia",
      desc: "Você é fã da quietude minimalista, inovação sustentável e de uma qualidade de vida onde o equilíbrio familiar é impecável. Estocolmo é distribuída em lindas ilhas arborizadas.",
      tags: ["Design", "Natureza", "Igualdade", "Invulnerabilidade", "Lazer"],
      destaques: [
        { i: "🌲", l: "Parques", v: "Água limpa e florestas densas integradas ao espaço urbano" },
        { i: "🏛️", l: "Equilíbrio", v: "As melhores regras de licença parental do mundo" },
        { i: "🎨", l: "Estética", v: "Moda e tecnologia de ponta limpas e inovadoras" }
      ]
    },
    en: {
      nome: "Stockholm",
      pais: "Sweden",
      desc: "You are a fan of minimalist serenity, green innovations, and a standard of living where family balance is highly respected. Stockholm spreads across stunning forested islands.",
      tags: ["Design", "Nature", "Equality", "Cleanliness", "Leisure"],
      destaques: [
        { i: "🌲", l: "Islands", v: "Pristine waters and forests integrated with city living" },
        { i: "🏛️", l: "Welfare", v: "World-class parental support and work setups" },
        { i: "🎨", l: "Esthetics", v: "Sophisticated minimalist architecture & digital tech" }
      ]
    }
  },
  {
    id: "medellin",
    emoji: "🌸",
    perfil: { sol: 3, comunidade: 3, custo: 3, empreende: 2, natureza: 2, social: 3, ritmo: 1, familia: 2 },
    pt: {
      nome: "Medellín",
      pais: "Colômbia",
      desc: "Você valoriza a incrível transformação urbana, acolhimento imediato e um clima ensolarado conhecido como 'reino da primavera eterna'. Medellín transborda café local e simpatia única.",
      tags: ["Clima", "Inovação", "Acolhimento", "Preço Baixo", "Montanhas"],
      destaques: [
        { i: "🌸", l: "Primavera", v: "Flores e temperaturas ótimas o ano inteiro" },
        { i: "🚡", l: "Urbanismo", v: "Teleféricos que integram todas as encostas sociais" },
        { i: "💰", l: "Custo", v: "Custo de vida acessível para nômades e aposentados" }
      ]
    },
    en: {
      nome: "Medellín",
      pais: "Colombia",
      desc: "You value rapid civic transformation, warm hospitality, and a welcoming climate known as the 'land of eternal spring'. Medellín overflows with specialty coffee and friendliness.",
      tags: ["Climate", "Innovation", "Hospitality", "Low Cost", "Mountains"],
      destaques: [
        { i: "🌸", l: "Spring", v: "Beautiful orchids and mild warm climate all year" },
        { i: "🚡", l: "Transit", v: "Innovative cable cars linking hill communities cleanly" },
        { i: "💰", l: "Affordability", v: "Incredible value for remote workers and travelers" }
      ]
    }
  },
  {
    id: "mumbai",
    emoji: "🎬",
    perfil: { energia: 3, gastronomia: 3, arte: 2, ambicao: 3, custo: 3, seguro: -1, ritmo: 3, espiritualidade: 2 },
    pt: {
      nome: "Mumbai",
      pais: "Índia",
      desc: "Você gosta de contrastes intrigantes, negócios borbulhantes e o ritmo fascinante da megalópole que sedia a vibrante indústria de Bollywood e mercados históricos infinitos.",
      tags: ["Energia", "Bollywood", "Especiarias", "Finanças", "Espiritualidade"],
      destaques: [
        { i: "🎬", l: "Cinema", v: "Império do cinema de Bollywood e festivais" },
        { i: "🍛", l: "Sabores", v: "Curries magníficos e culinária de rua incomparável" },
        { i: "📈", l: "Dinamismo", v: "Centro financeiro e comercial que cresce sem parar" }
      ]
    },
    en: {
      nome: "Mumbai",
      pais: "India",
      desc: "You enjoy rich contrasts, bustling markets, and the fascinating rhythm of the sprawling megacity hosting Bollywood, heritage landmarks, and hyper-growth finance markets.",
      tags: ["Energy", "Bollywood", "Spices", "Finance", "Spirituality"],
      destaques: [
        { i: "🎬", l: "Cinema", v: "The creative giant of Bollywood and street drama" },
        { i: "🍛", l: "Culinary", v: "Outstanding street snacks and deep regional curries" },
        { i: "📈", l: "Drive", v: "A major commercial dynamo expanding daily" }
      ]
    }
  },
  {
    id: "sydney",
    emoji: "🦘",
    perfil: { sol: 3, qualidade: 3, esporte: 3, familia: 2, natureza: 3, custo: -2, social: 2 },
    pt: {
      nome: "Sydney",
      pais: "Austrália",
      desc: "Você quer ter a areia da praia na porta e manter uma carreira brilhante em uma das economias mais fortes da Oceania. Sydney valoriza saúde, sol e surf acima de tudo.",
      tags: ["Litoral", "Qualidade", "Vela e Surf", "Clima Ensolarado", "Parques"],
      destaques: [
        { i: "🏄", l: "Surf", v: "A icônica Bondi Beach e mais 40 praias" },
        { i: "🌞", l: "Atividades", v: "Caminhadas costeiras exuberantes sob o sol" },
        { i: "🏙️", l: "Carreira", v: "Ampla presença de sedes corporativas multinacionais" }
      ]
    },
    en: {
      nome: "Sydney",
      pais: "Australia",
      desc: "You want sandy coastline at your door while driving a stellar corporate career. Sydney integrates ocean sports and beautiful parks with economic strength seamlessly.",
      tags: ["Coast", "Quality", "Sailing & Surf", "Sunny Climate", "Parks"],
      destaques: [
        { i: "🏄", l: "Surf", v: "The legendary Bondi Beach & over 40 other coves" },
        { i: "🌞", l: "Active Life", v: "Magnificent coastal paths for daily jogging and sun" },
        { i: "🏙️", l: "Business", v: "Strong presence of global offices and active hiring" }
      ]
    }
  },
  {
    id: "praga",
    emoji: "🏰",
    perfil: { historia: 3, arte: 3, custo: 3, romantico: 3, europa: 2, ritmo: 0, sol: 0, familia: 2 },
    pt: {
      nome: "Praga",
      pais: "República Tcheca",
      desc: "Você busca contos de fadas medievais, pontes góticas de pedra e quer beber a melhor e mais barata cerveja da Europa em pubs boêmios. Praga é um tesouro preservado no coração europeu.",
      tags: ["História", "Arquitetura", "Custo Baixo", "Boemia", "Arte"],
      destaques: [
        { i: "🏰", l: "Patrimônio", v: "Castelo gótico monumental e ruelas intocadas" },
        { i: "🍺", l: "Pubs", v: "Líder mundial em cervejas artesanais autênticas" },
        { i: "💶", l: "Preço", v: "Custo de vida incrivelmente razoável para a Europa" }
      ]
    },
    en: {
      nome: "Prague",
      pais: "Czech Republic",
      desc: "You seek medieval fairytales, Gothic stone architectures, and historic pubs serving the world's finest, highly inexpensive lagers. Prague is a preserved bohemian gem.",
      tags: ["History", "Architecture", "Low Cost", "Bohemian", "Art"],
      destaques: [
        { i: "🏰", l: "Heritage", v: "Colossal Gothic castle and cobblestone alleys" },
        { i: "🍺", l: "Social", v: "The undisputed birthplace of modern brewing culture" },
        { i: "💶", l: "Economy", v: "Outstanding cost of living within Central Europe" }
      ]
    }
  },
  {
    id: "porto",
    emoji: "🍷",
    perfil: { historia: 3, arte: 3, custo: 3, europa: 3, romantico: 3, comunidade: 2, ritmo: -1, sol: 2 },
    pt: {
      nome: "Porto",
      pais: "Portugal",
      desc: "Você tem espírito poético, gosta de fachadas azulejadas, caminhadas à margem do rio Douro e de uma atmosfera criativa e acolhedora de escala humana e sabor requintado.",
      tags: ["História", "Rio Douro", "Enoturismo", "Design", "Aconchego"],
      destaques: [
        { i: "🍷", l: "Vinho", v: "Adegas históricas do famoso Vinho do Porto" },
        { i: "🌉", l: "Patrimônio", v: "A icônica Ponte D. Luís e vistas ribeirinhas" },
        { i: "🎨", l: "Artes", v: "Galerias indie e estúdios de design vibrantes" }
      ]
    },
    en: {
      nome: "Porto",
      pais: "Portugal",
      desc: "You have a poetic spirit, and appreciate tiled facades, breezy walks along the Douro River, and a creative, human-scale atmosphere built on good neighbors and rich history.",
      tags: ["History", "Douro River", "Wine Estates", "Design", "Cozy Scale"],
      destaques: [
        { i: "🍷", l: "Wine", v: "Historical cellars of the legendary Port Wine" },
        { i: "🌉", l: "Riverfront", v: "The iconic Eiffel-designed D. Luís bridge" },
        { i: "🎨", l: "Creativity", v: "Indie art galleries & bustling local bakeries" }
      ]
    }
  },
  {
    id: "tbilisi",
    emoji: "🏔️",
    perfil: { custo: 3, arte: 3, aventura: 3, liberdade: 3, historia: 2, empreende: 2, diversidade: 2, ritmo: 1 },
    pt: {
      nome: "Tbilisi",
      pais: "Geórgia",
      desc: "Você é curioso e adora joias escondidas pelo globo. Tbilisi oferece vinhos milenares em jarras de barro, montanhas do Cáucaso imponentes e um custo de vida surpreendentemente baixo.",
      tags: ["Custo Baixo", "Cáucaso", "Vinho Natural", "Acolhimento", "História"],
      destaques: [
        { i: "🍷", l: "Vinhos", v: "Herança de 8.000 anos de fermentação em argila" },
        { i: "🏔️", l: "Montanhas", v: "Trilhas fascinantes e antigos mosteiros de pedra" },
        { i: "💻", l: "Remote", v: "Políticas de visto super fáceis para trabalhadores" }
      ]
    },
    en: {
      nome: "Tbilisi",
      pais: "Georgia",
      desc: "You are curious and love discoverable global spots. Tbilisi offers age-old natural wines in clay jars, dramatic Caucasus mountains, and an incredibly affordable lifestyle.",
      tags: ["Highly Affordable", "Caucasus", "Natural Wines", "Hospitality", "History"],
      destaques: [
        { i: "🍷", l: "Wine Heritage", v: "8,000-year history of clay-pot aging (Qvevri)" },
        { i: "🏔️", l: "Hiking", v: "Fascinating mountain valleys and old stone towers" },
        { i: "💻", l: "Visa Perks", v: "One of the most welcoming visa setups for nomads" }
      ]
    }
  },
  {
    id: "chiang-mai",
    emoji: "🌿",
    perfil: { natureza: 3, espiritualidade: 3, custo: 3, liberdade: 3, comunidade: 3, ritmo: -2, aventura: 2, gastronomia: 2 },
    pt: {
      nome: "Chiang Mai",
      pais: "Tailândia",
      desc: "Você quer calmaria, contato profundo com templos budistas inspiradores e adora o estilo comunitário e amigável. Chiang Mai é a joia montanhosa do sudeste asiático.",
      tags: ["Montanhas", "Espiritual", "Custo Baixo", "Cafés", "Quietude"],
      destaques: [
        { i: "🧘", l: "Templos", v: "Mais de 300 santuários budistas ornamentados" },
        { i: "⛰️", l: "Selva", v: "Ar puro, cachoeiras e colinas verdes majestosas" },
        { i: "💰", l: "Preço", v: "Alimentação e moradia de alta qualidade a preço irrisório" }
      ]
    },
    en: {
      nome: "Chiang Mai",
      pais: "Thailand",
      desc: "You want serenity, closeness to inspiring Buddhist temples, and a peaceful community vibe. Chiang Mai represents the lush, mountainous crown of Thailand.",
      tags: ["Mountains", "Spiritual", "Value", "Café Culture", "Quietude"],
      destaques: [
        { i: "🧘", l: "Temples", v: "Home to over 300 gold-gilded forest sanctuaries" },
        { i: "⛰️", l: "Jungles", v: "Elephant sanctuaries, fresh waterfalls & breezy peaks" },
        { i: "💰", l: "Savings", v: "Gourmet food and cozy studios for extreme value" }
      ]
    }
  },
  {
    id: "valparaiso",
    emoji: "🎨",
    perfil: { arte: 3, liberdade: 3, custo: 2, musica: 2, romantico: 2, comunidade: 2, sol: 2, natureza: 2 },
    pt: {
      nome: "Valparaíso",
      pais: "Chile",
      desc: "Você é artista no íntimo, ama morros poéticos, funiculares centenários e ver o mar do Oceano Pacífico a partir de casas coloridas. Valparaíso é a inspiração boêmia de Pablo Neruda.",
      tags: ["Artes Plásticas", "Funiculares", "Pacífico", "Poesia", "Boemia"],
      destaques: [
        { i: "🎨", l: "Muralismo", v: "Ruas ingremes pintadas de grafites artísticos espetaculares" },
        { i: "🌊", l: "Oceano", v: "Porto histórico que se acende como poeira estrelada" },
        { i: "🍷", l: "Sabor", v: "Vinho chileno e frutos do mar frescos magníficos" }
      ]
    },
    en: {
      nome: "Valparaíso",
      pais: "Chile",
      desc: "You are an artist at heart, and adore winding hills, vintage funiculars, and sweeping views of the Pacific Ocean from colorful houses. Valparaíso was Pablo Neruda's sea-facing muse.",
      tags: ["Street Art", "Cable Cars", "Pacific", "Poetry", "Bohemia"],
      destaques: [
        { i: "🎨", l: "Murals", v: "Fascinating hills painted by world-renowned graffiti artists" },
        { i: "🌊", l: "Seascapes", v: "Historic port displaying breathtaking hillside lights at night" },
        { i: "🍷", l: "Wines", v: "Immediately adjacent to Casablanca Valley wine region" }
      ]
    }
  },
  {
    id: "tallinn",
    emoji: "🏰",
    perfil: { historia: 3, tech: 3, design: 2, europa: 3, seguro: 2, custo: 2, sustenta: 2, ritmo: 0 },
    pt: {
      nome: "Tallinn",
      pais: "Estônia",
      desc: "Você quer ter muralhas medievais na sua frente e, ao mesmo tempo, emitir burocracias pelo celular em menos de um minuto. Tallinn é o país digital mais eficiente do mundo.",
      tags: ["História antiga", "Hiper Digital", "Design nórdico", "Segurança", "Custo bom"],
      destaques: [
        { i: "🏰", l: "Medieval", v: "Centro histórico de contos de fadas preservado pela UNESCO" },
        { i: "💻", l: "E-Gov", v: "99% dos serviços públicos operam online 24h" },
        { i: "🌲", l: "Verde", v: "Parques, ar puríssimo e transporte gratuito para moradores" }
      ]
    },
    en: {
      nome: "Tallinn",
      pais: "Estonia",
      desc: "You want preserved castle towers of old alongside the most advanced digital administration system. Tallinn blends a fairytale medieval heart with standard hyper-digitization.",
      tags: ["Old History", "Hyper Digital", "Baltic Design", "Safety", "Great Cost"],
      destaques: [
        { i: "🏰", l: "Fairytale", v: "Perfect UNESCO-protected medieval city center" },
        { i: "💻", l: "E-Society", v: "Initialize startups and sign contracts online in minutes" },
        { i: "🌲", l: "Air Purity", v: "Pristine beaches, dense pine woods, and free public transit" }
      ]
    }
  },
  {
    id: "cidade-do-panama",
    emoji: "🌉",
    perfil: { negocio: 3, custo: 3, ambicao: 2, sol: 3, diversidade: 2, empreende: 2, familia: 2, natureza: 2 },
    pt: {
      nome: "Cidade do Panamá",
      pais: "Panamá",
      desc: "Você busca conexões estratégicas nas Américas, infraestrutura moderna de negócios, mar do Caribe e um clima idealizado para compras e turismo global sob sol pleno.",
      tags: ["Negócios", "Orla Marítima", "Custo Bom", "Sol e Praia", "Hub Logístico"],
      destaques: [
        { i: "🛳️", l: "Canal", v: "Obras incríveis de engenharia conectando oceanos" },
        { i: "🏙️", l: "Skyline", v: "Arranha-céus luxuosos com excelente custo de vida" },
        { i: "☀️", l: "Calor", v: "Praias, ilhas e clima caribenho a curta viagem" }
      ]
    },
    en: {
      nome: "Panama City",
      pais: "Panama",
      desc: "You appreciate strategic links across the Americas, up-to-date business centers, warm ocean breezes, and a tax-friendly hub tailored for global shopping and logistics.",
      tags: ["Business", "Coastline", "Great Value", "Sun and Sea", "Logistics Hub"],
      destaques: [
        { i: "🛳️", l: "Canal", v: "Awesome engineering achievements linking oceans" },
        { i: "🏙️", l: "Finance", v: "Luxurious modern skylines with highly accessible pricing" },
        { i: "☀️", l: "Tropics", v: "Archipelagos and lush rainforest close to downtown" }
      ]
    }
  },
  {
    id: "wellington",
    emoji: "🧙",
    perfil: { natureza: 3, qualidade: 3, comunidade: 3, arte: 2, familia: 3, sol: 1, custo: -1, ritmo: -1 },
    pt: {
      nome: "Wellington",
      pais: "Nova Zelândia",
      desc: "Você preza pelo bem-estar comunitário em escala amigável e deseja as montanhas e lagos da 'Terra Média'. Wellington é rica em cafés finos, indústrias de cinema e ventos revigorantes.",
      tags: ["Natureza", "Cinematográfico", "Escala Humana", "Cafés", "Ar Artesanal"],
      destaques: [
        { i: "🎬", l: "Efeitos", v: "Estúdios Weta Workshop (O Senhor dos Anéis)" },
        { i: "🌊", l: "Fiordes", v: "Colinas arborizadas ao redor do mar austral" },
        { i: "☕", l: "Cafés", v: "Mais cafés per capita do que New York" }
      ]
    },
    en: {
      nome: "Wellington",
      pais: "New Zealand",
      desc: "You prioritize community support and love the epic landscapes of 'Middle-earth'. Wellington provides deep harbor views, a massive coffee industry, and fresh ocean breezes.",
      tags: ["Nature", "Cinematic", "Human Scale", "Cafés", "Craft Scene"],
      destaques: [
        { i: "🎬", l: "VFX Giant", v: "Home to Weta Workshop (Lord of the Rings)" },
        { i: "🌊", l: "Scenic Bay", v: "Rolling forested hills cascading into the South Pacific" },
        { i: "☕", l: "Espresso", v: "More micro-roasters per capita than New York City" }
      ]
    }
  },
  {
    id: "rio-de-janeiro",
    emoji: "🏖️",
    perfil: { sol: 3, musica: 3, social: 3, natureza: 3, custo: 2, seguro: -1, ritmo: 2 },
    pt: {
      nome: "Rio de Janeiro",
      pais: "Brasil",
      desc: "Você deseja viver a vida na sua máxima intensidade e alegria, abraçado por belezas naturais estonteantes, música no DNA e a praia no centro das suas decisões diárias.",
      tags: ["Praia", "Samba", "Futebol", "Beleza Escultórica", "Calor Humano"],
      destaques: [
        { i: "🏖️", l: "Bossa Nova", v: "Copacabana e Ipanema embaladas por canções" },
        { i: "⛰️", l: "Relevo", v: "Floresta da Tijuca e Pão de Açúcar abraçando o mar" },
        { i: "🎉", l: "Alegria", v: "O maior carnaval de rua do planeta" }
      ]
    },
    en: {
      nome: "Rio de Janeiro",
      pais: "Brazil",
      desc: "You wish to live life with joy and flair, hugged by jaw-dropping vertical greenery, samba rhythms, and beach runs defining your entire weekend schedule.",
      tags: ["Beaches", "Samba", "Culture", "Sculptural Beauty", "High Energy"],
      destaques: [
        { i: "🏖️", l: "Sand Culture", v: "Copacabana & Ipanema sands lined with music and sports" },
        { i: "⛰️", l: "Jungles", v: "Lush Tijuca rainforest meeting towering granite peaks" },
        { i: "🎉", l: "Celebration", v: "The absolute largest, happiest street carnival on Earth" }
      ]
    }
  },
  {
    id: "bangkok",
    emoji: "🛕",
    perfil: { gastronomia: 3, espiritualidade: 2, social: 3, custo: 3, aventura: 2, arte: 2, ritmo: 3, natureza: 1 },
    pt: {
      nome: "Bangkok",
      pais: "Tailândia",
      desc: "Você ama o caos amigável, quer provar a melhor e mais barata comida de rua da sua vida e adoraria contemplar pagodes reluzentes do budismo ao lado de canais históricos.",
      tags: ["Sabores de rua", "Budismo", "Preço Muito Baixo", "Cena Noturna", "Energia"],
      destaques: [
        { i: "🍜", l: "Street Food", v: "Vencedores de estrelas Michelin vendendo na brasa" },
        { i: "🛕", l: "Cultura", v: "O Templo do Buda de Esmeralda e massagens tradicionais" },
        { i: "🌃", l: "Noite", v: "Mercados flutuantes e bares no terraço fascinantes" }
      ]
    },
    en: {
      nome: "Bangkok",
      pais: "Thailand",
      desc: "You love organized chaos, desire to taste highly affordable global street food, and wish to admire ornate golden stupas meeting modern skyscraper rooftops.",
      tags: ["Street Food", "Buddhism", "Low Cost", "Active Nightlife", "Exotic Rhythm"],
      destaques: [
        { i: "🍜", l: "Gastronomy", v: "Michelin-starred street food stalls cooking on open flame" },
        { i: "🛕", l: "Culture", v: "Grand Palace, reclining golden buddhas, and Thai massages" },
        { i: "🌃", l: "Nightlife", v: "Spectacular neon-lit night markets and top-tier rooftop bars" }
      ]
    }
  }
];

export const PERGUNTAS: Question[] = [
  {
    icone: "🌡️",
    pt: {
      texto: "Qual clima faz você se sentir mais vivo?",
      subtexto: "Pense no dia ideal em que você acorda e olha pela janela.",
      opcoes: [
        { texto: "Sol forte e calor o ano todo — quanto mais quente, melhor", pontos: { sol: 3, natureza: 1 } },
        { texto: "Quatro estações bem definidas, inclusive inverno com neve", pontos: { natureza: 2, familia: 1, historia: 1 } },
        { texto: "Clima ameno e temperado, sem extremos", pontos: { qualidade: 2, sustenta: 1 } },
        { texto: "Primavera eterna, entre 18°C e 26°C sempre", pontos: { sol: 2, custo: 1, comunidade: 1 } },
        { texto: "Clima frio e cinzento — acho reconfortante e produtivo", pontos: { design: 2, qualidade: 1, sustenta: 1 } },
        { texto: "Clima tropical úmido, com chuvas e exuberância", pontos: { natureza: 3, aventura: 1, espiritualidade: 1 } }
      ]
    },
    en: {
      texto: "What climate makes you feel most alive?",
      subtexto: "Think of an ideal day when you wake up and look out the window.",
      opcoes: [
        { texto: "Strong sun and warmth all year — the hotter, the better", pontos: { sol: 3, natureza: 1 } },
        { texto: "Four distinct seasons, including snowy winters", pontos: { natureza: 2, familia: 1, historia: 1 } },
        { texto: "Mild and temperate climate, without major extremes", pontos: { qualidade: 2, sustenta: 1 } },
        { texto: "Eternal spring, always between 18°C and 26°C (64°F - 78°F)", pontos: { sol: 2, custo: 1, comunidade: 1 } },
        { texto: "Cool and grey weather — I find it comforting and productive", pontos: { design: 2, qualidade: 1, sustenta: 1 } },
        { texto: "Humid tropical climate, with rains and lush greenery", pontos: { natureza: 3, aventura: 1, espiritualidade: 1 } }
      ]
    }
  },
  {
    icone: "🏙️",
    pt: {
      texto: "Como você imagina o bairro onde mora?",
      subtexto: "Feche os olhos. O que você vê quando sai pela porta de casa?",
      opcoes: [
        { texto: "Arranha-céus, movimento constante, tudo a 10 minutos a pé", pontos: { urbano: 3, ritmo: 2, tech: 1 } },
        { texto: "Ruas históricas, cafés charmosos, museus à esquina", pontos: { historia: 3, arte: 2, europa: 1 } },
        { texto: "Natureza acessível — parque, mata, rio ou litoral ao alcance", pontos: { natureza: 3, sol: 1 } },
        { texto: "Bairro residencial tranquilo, jardins, segurança para crianças", pontos: { familia: 3, seguro: 2, qualidade: 1 } },
        { texto: "Hub criativo: ateliês, startups, murais e galerias", pontos: { arte: 3, empreende: 2, diversidade: 1 } },
        { texto: "Mistura cultural intensa — idiomas, cheiros e cores de todos os lados", pontos: { diversidade: 3, gastronomia: 2, social: 1 } }
      ]
    },
    en: {
      texto: "How do you imagine the neighborhood you live in?",
      subtexto: "Close your eyes. What do you see when you step out of your door?",
      opcoes: [
        { texto: "Skyscrapers, continuous movement, everything within a 10-minute walk", pontos: { urbano: 3, ritmo: 2, tech: 1 } },
        { texto: "Cobblestone streets, charming cafés, museums around the corner", pontos: { historia: 3, arte: 2, europa: 1 } },
        { texto: "Nature within arm's reach — parks, woods, rivers, or coastlines", pontos: { natureza: 3, sol: 1 } },
        { texto: "Quiet residential streets, children playing, peaceful gardens", pontos: { familia: 3, seguro: 2, qualidade: 1 } },
        { texto: "Creative hub: loft studios, emerging startups, murals and independent galleries", pontos: { arte: 3, empreende: 2, diversidade: 1 } },
        { texto: "A vibrant cultural mosaic — multi-ethnic shops, spices, and languages", pontos: { diversidade: 3, gastronomia: 2, social: 1 } }
      ]
    }
  },
  {
    icone: "💼",
    pt: {
      texto: "O que define seu estilo de trabalho ideal?",
      subtexto: "Sem barreiras — o que realmente te motiva?",
      opcoes: [
        { texto: "Empreender: fundar minha própria empresa e gerir minhas ambições", pontos: { empreende: 3, ambicao: 2, energia: 1 } },
        { texto: "Grande corporação, estabilidade, benefícios e carreira estruturada", pontos: { seguro: 2, qualidade: 2, riqueza: 1 } },
        { texto: "Trabalho remoto/Nômade digital — liberdade geográfica total", pontos: { liberdade: 3, custo: 2, aventura: 1 } },
        { texto: "Tecnologia, desenvolvimento de softwares e impacto escalável", pontos: { tech: 3, ambicao: 2, urbano: 1 } },
        { texto: "Cultura, designer, literatura ou expressão criativa pura", pontos: { arte: 3, musica: 1, design: 2 } },
        { texto: "Impacto social e governamental — melhorar as comunidades reais", pontos: { comunidade: 3, familia: 1, qualidade: 1 } }
      ]
    },
    en: {
      texto: "What defines your ideal career path?",
      subtexto: "No restrictions — what truly drives your professional self?",
      opcoes: [
        { texto: "Entrepreneurship: founding my own company and calling my own shots", pontos: { empreende: 3, ambicao: 2, energia: 1 } },
        { texto: "Corporate scale: stability, robust benefits, and a clear career ladder", pontos: { seguro: 2, qualidade: 2, riqueza: 1 } },
        { texto: "Digital Nomadic: 100% remote work with absolute geographic freedom", pontos: { liberdade: 3, custo: 2, aventura: 1 } },
        { texto: "Cutting-edge tech, software solutions, and hyper-scalable models", pontos: { tech: 3, ambicao: 2, urbano: 1 } },
        { texto: "Fine arts, fashion, writing, or pure creative expression", pontos: { arte: 3, musica: 1, design: 2 } },
        { texto: "Social enterprise, non-profits, or civic lines supporting the public good", pontos: { comunidade: 3, familia: 1, qualidade: 1 } }
      ]
    }
  },
  {
    icone: "👪",
    pt: {
      texto: "Como você enxerga a família daqui a 10 anos?",
      subtexto: "Responder honestamente ajuda a refinar a estrutura ideal da cidade.",
      opcoes: [
        { texto: "Casado/a, com filhos e uma vida com estabilidade familiar", pontos: { familia: 3, seguro: 2, qualidade: 1 } },
        { texto: "Talvez um filho, equilibrado com forte independência e vida social", pontos: { liberdade: 2, familia: 1, ritmo: 1 } },
        { texto: "Sem planos para filhos — o foco é meu crescimento e lazeres", pontos: { liberdade: 3, social: 2, aventura: 1 } },
        { texto: "Não tenho planos fixos — prefiro uma cidade versátil para ambas opções", pontos: { qualidade: 2, diversidade: 1, custo: 1 } },
        { texto: "Meus melhores amigos são minha verdadeira família cotidiana", pontos: { social: 3, comunidade: 2, diversidade: 1 } },
        { texto: "Raízes profundas, família alargada, tradições de proximidade comunitária", pontos: { comunidade: 3, espiritualidade: 2, historia: 1 } }
      ]
    },
    en: {
      texto: "How do you envision family in your life in 10 years?",
      subtexto: "Your vision of family shapes the ideal civic services of your city.",
      opcoes: [
        { texto: "With children, a partner, and a robust, happy household setup", pontos: { familia: 3, seguro: 2, qualidade: 1 } },
        { texto: "Perhaps one child, balanced with personal workspace and social outings", pontos: { liberdade: 2, familia: 1, ritmo: 1 } },
        { texto: "Child-free — focusing entirely on wealth, hobbies, and absolute independence", pontos: { liberdade: 3, social: 2, aventura: 1 } },
        { texto: "Undecided — I want a dynamic, well-rounded city that caters to both", pontos: { qualidade: 2, diversidade: 1, custo: 1 } },
        { texto: "Friends are my family — close-knit circles sharing creative lives", pontos: { social: 3, comunidade: 2, diversidade: 1 } },
        { texto: "Deep roots, multi-generational values, and strong community traditions", pontos: { comunidade: 3, espiritualidade: 2, historia: 1 } }
      ]
    }
  },
  {
    icone: "🐕",
    pt: {
      texto: "Você planeja ter ou já tem animais de estimação?",
      subtexto: "Pense na rotina e no espaço urbano recomendados para o seu pet.",
      opcoes: [
        { texto: "Sim, meu companheiro animal dita as prioridades de espaço e parques", pontos: { natureza: 2, familia: 2, qualidade: 2 } },
        { texto: "Quero ter — prezo por bairros acolhedores para animais e veterinários fáceis", pontos: { natureza: 2, sustenta: 1, qualidade: 1 } },
        { texto: "Talvez um gato ou pet pequeno, mas sem mudar meus rumos", pontos: { liberdade: 1, urbano: 1 } },
        { texto: "Não quero pets — prefiro viajar com as malas prontas a qualquer momento", pontos: { aventura: 2, liberdade: 2 } },
        { texto: "Gosto de animais, mas prefiro a praticidade sem obrigações pesadas", pontos: { urbano: 2, ritmo: 1 } },
        { texto: "Prefiro uma casa enorme, sítio ou quintal com espaço para muitos animais", pontos: { natureza: 3, familia: 1, sustenta: 1 } }
      ]
    },
    en: {
      texto: "Do you have or expect to raise pets?",
      subtexto: "Consider how pet-friendly your future neighborhood should be.",
      opcoes: [
        { texto: "Yes, my pet is a key priority and requires green dog parks near me", pontos: { natureza: 2, familia: 2, qualidade: 2 } },
        { texto: "I want to - space, veterinarian clinics, and dog beaches are important", pontos: { natureza: 2, sustenta: 1, qualidade: 1 } },
        { texto: "A small feline or low-maintenance pet would suit me fine", pontos: { liberdade: 1, urbano: 1 } },
        { texto: "No pets — I want to travel with zero arrangements to secure", pontos: { aventura: 2, liberdade: 2 } },
        { texto: "I like animals, but priority is high-rise city center convenience", pontos: { urbano: 2, ritmo: 1 } },
        { texto: "I want multiple large pets and a massive yard, outskirts are optimal", pontos: { natureza: 3, familia: 1, sustenta: 1 } }
      ]
    }
  },
  {
    icone: "🚇",
    pt: {
      texto: "Como você prefere se locomover diariamente?",
      subtexto: "O transporte urbano muda inteiramente nossa rotina diária.",
      opcoes: [
        { texto: "Metrô hiper eficiente e rápido, sem necessidade de possuir carro", pontos: { urbano: 3, tech: 1, sustenta: 1 } },
        { texto: "Bicicleta como filosofia de vida, esporte e trajeto diário", pontos: { sustenta: 3, bike: 3, qualidade: 1 } },
        { texto: "Caminhadas a pé em ruelas fofas, proximidade é fundamental", pontos: { qualidade: 2, historia: 1, europa: 1 } },
        { texto: "Conforto do trânsito no meu carro com ar e autonomia", pontos: { familia: 1, seguro: 1, riqueza: 1 } },
        { texto: "Moto ou scooter ágil pelas ruas, sem horas perdidas em filas", pontos: { energia: 2, ritmo: 2, aventura: 1 } },
        { texto: "Qualquer transporte, o importante é que a cidade resolva os trajetos", pontos: { qualidade: 2, sustenta: 1 } }
      ]
    },
    en: {
      texto: "How do you prefer to get around during the week?",
      subtexto: "Daily transportation style dictates how closely you experience your transit.",
      opcoes: [
        { texto: "Punctual, super-fast subways — I want to live entirely car-free", pontos: { urbano: 3, tech: 1, sustenta: 1 } },
        { texto: "Biking for fitness and transit — dedicated cycling highways are key", pontos: { sustenta: 3, bike: 3, qualidade: 1 } },
        { texto: "Walkability: running error-runs and grabbing groceries fully on foot", pontos: { qualidade: 2, historia: 1, europa: 1 } },
        { texto: "Private car comfort — I desire my own garage, highway routes and driving autonomy", pontos: { familia: 1, seguro: 1, riqueza: 1 } },
        { texto: "Scooters or motorcycles: zipping through lanes quickly and easily", pontos: { energia: 2, ritmo: 2, aventura: 1 } },
        { texto: "Indifferent, as long as transit is structured and reasonably priced", pontos: { qualidade: 2, sustenta: 1 } }
      ]
    }
  },
  {
    icone: "🍽️",
    pt: {
      texto: "O que a culinária representa nas suas buscas de vida?",
      subtexto: "Pense nas suas saídas à noite e as compras do fim de semana.",
      opcoes: [
        { texto: "Uma fonte primária de felicidade — quero comer em novos lugares sempre", pontos: { gastronomia: 3, social: 2, arte: 1 } },
        { texto: "Adoro receitas artesanais domésticas e ingrediente frescos de feiras locais", pontos: { qualidade: 2, familia: 1, sustenta: 1 } },
        { texto: "Comidas de mercados populares, barracas ao ar livre e tascas despretensiosas", pontos: { social: 3, custo: 2, gastronomia: 2 } },
        { texto: "Explosão de temperos autênticos do oriente, culinária étnica variada", pontos: { diversidade: 3, gastronomia: 2, aventura: 1 } },
        { texto: "Nutrição rápida e saudável, não perco tempo focando nisso", pontos: { liberdade: 1, ritmo: 1 } },
        { texto: "Jantares sofisticados, harmonização com vinhos finos e chefs estrelados", pontos: { riqueza: 2, luxo: 2, gastronomia: 2 } }
      ]
    },
    en: {
      texto: "What does gastronomy mean to your way of life?",
      subtexto: "Reflect on your dining out budgets and weekend grocery visits.",
      opcoes: [
        { texto: "A major source of joy — I want world-class restaurants to discover weekly", pontos: { gastronomia: 3, social: 2, arte: 1 } },
        { texto: "Healthy home cooking with organic, fresh ingredients from local farmers", pontos: { qualidade: 2, familia: 1, sustenta: 1 } },
        { texto: "Bustling street stalls, cozy night markets, and down-to-earth local pubs", pontos: { social: 3, custo: 2, gastronomia: 2 } },
        { texto: "Global spices: authentic, fiery dishes from all cultures are indispensable", pontos: { diversidade: 3, gastronomia: 2, aventura: 1 } },
        { texto: "Efficient fuel — I eat to live and prefer quick, nutritious meals", pontos: { liberdade: 1, ritmo: 1 } },
        { texto: "Fine dining, vintage wine pairings, and Michelin-starred culinary art", pontos: { riqueza: 2, luxo: 2, gastronomia: 2 } }
      ]
    }
  },
  {
    icone: "🌿",
    pt: {
      texto: "Qual nível de acesso à natureza você precisa?",
      subtexto: "Como você lida com a falta de florestas ou águas?",
      opcoes: [
        { texto: "Essencial — folgas semanais exigem trilhas, lagos, mares ou esqui", pontos: { natureza: 3, aventura: 2, sustenta: 1 } },
        { texto: "Aprecio o verde, mas um parque urbano planejado me basta plenamente", pontos: { qualidade: 2, urbano: 1 } },
        { texto: "Alma urbana — asfalto e prédios me inspiram, natureza fica pras férias", pontos: { urbano: 3, ritmo: 2, ambicao: 1 } },
        { texto: "Imersão total: florestas intocadas e sossego de povoados de montanha", pontos: { natureza: 3, sol: 2, liberdade: 1 } },
        { texto: "Pistas alpinas, neve, montanhismo rigoroso e jaquetas pesadas", pontos: { natureza: 2, aventura: 2, esporte: 1 } },
        { texto: "Sustentabilidade integrada: tetos verdes, reciclagem impecável nas ruas", pontos: { sustenta: 3, design: 2, comunidade: 1 } }
      ]
    },
    en: {
      texto: "How much contact with nature do you truly require?",
      subtexto: "Consider how concrete jungles versus national parks affect your mood.",
      opcoes: [
        { texto: "Non-negotiable — I need hikes, coastlines, deep forests, or ski hills weekly", pontos: { natureza: 3, aventura: 2, sustenta: 1 } },
        { texto: "I enjoy a nice, manicured city park, but I don't need wild forests", pontos: { qualidade: 2, urbano: 1 } },
        { texto: "Purely urban — I thrive on high-rises and skylines; nature is for vacations", pontos: { urbano: 3, ritmo: 2, ambicao: 1 } },
        { texto: "Total immersion: dramatic woods, scenic coastal rocks, or vast open skies", pontos: { natureza: 3, sol: 2, liberdade: 1 } },
        { texto: "Epic mountain valleys, fresh powder snow, and winter sports action", pontos: { natureza: 2, aventura: 2, esporte: 1 } },
        { texto: "Green integration — zero-emission policies, organic markets, and smart energy", pontos: { sustenta: 3, design: 2, comunidade: 1 } }
      ]
    }
  },
  {
    icone: "🎭",
    pt: {
      texto: "Qual é o seu lazer preferido do fim de semana?",
      subtexto: "Pense na atividade espontânea que te traz mais felicidade.",
      opcoes: [
        { texto: "Visitar museus de arte contemporânea, espetáculos teatrais ou cinema cult", pontos: { arte: 3, historia: 2, europa: 1 } },
        { texto: "Sentar num pub animado com amigos, experimentar novos coquetéis e vinhos", pontos: { social: 3, gastronomia: 2, musica: 1 } },
        { texto: "Surfar cedo, fazer rapel, montanhismo de alto rendimento ou corrida", pontos: { esporte: 3, natureza: 2, aventura: 2 } },
        { texto: "Ler sob luz de um bom café indie, folhear livrarias tradicionais", pontos: { qualidade: 2, design: 1, familia: 1 } },
        { texto: "Fugir para arredores novos aos sábados, pequenas explorações curiosas", pontos: { aventura: 3, liberdade: 2, diversidade: 1 } },
        { texto: "Sessões matinais de ioga, meditação, autocuidado de spa ou bem-estar", pontos: { espiritualidade: 3, natureza: 1, qualidade: 1 } }
      ]
    },
    en: {
      texto: "What is your go-to activity on a free Saturday?",
      subtexto: "What brings the quickest smile to your face on your day off?",
      opcoes: [
        { texto: "Visiting modern art galleries, classical concert halls, or indie film screenings", pontos: { arte: 3, historia: 2, europa: 1 } },
        { texto: "Unwinding at a bustling local pub, trying craft IPAs or high-end cocktails", pontos: { social: 3, gastronomia: 2, musica: 1 } },
        { texto: "Catching morning waves, trail running, cycling, or climbing cliffs", pontos: { esporte: 3, natureza: 2, aventura: 2 } },
        { texto: "Curling up with a book in a rustic café and sipping specialty espressos", pontos: { qualidade: 2, design: 1, familia: 1 } },
        { texto: "Road-tripping to a quiet nearby village, exploring historic landmarks", pontos: { aventura: 3, liberdade: 2, diversidade: 1 } },
        { texto: "Attending a sound-bath meditation, an outdoor yoga session, or a spa", pontos: { espiritualidade: 3, natureza: 1, qualidade: 1 } }
      ]
    }
  },
  {
    icone: "💰",
    pt: {
      texto: "Como você se sente com dinheiro e padrões de custo?",
      subtexto: "Seja pragmático sobre seus orçamentos e estilo ideal de despesa.",
      opcoes: [
        { texto: "Economizo nas saídas e moradia em prol de tranquilidade e mais tempo livre", pontos: { custo: 3, liberdade: 2, qualidade: 1 } },
        { texto: "Pago o preço que for preciso por serviços limpos, segurança de elite e ruas organizadas", pontos: { riqueza: 2, seguro: 2, qualidade: 2 } },
        { texto: "Ambição produtiva — quero maximizar lucros e me posicionar nos grandes mercados", pontos: { ambicao: 3, riqueza: 2, negocio: 1 } },
        { texto: "Viver barato em dólar/euro trabalhando de forma autônoma: custo-benefício rei", pontos: { custo: 3, liberdade: 3, aventura: 1 } },
        { texto: "Indiferente aos luxos materiais, prefiro financiar ingressos de arte e espetáculos", pontos: { arte: 2, gastronomia: 1, historia: 1 } },
        { texto: "Prefiro consumir marcas consagradas, hotéis boutique com as melhores regalias corporativas", pontos: { luxo: 3, riqueza: 3, custo: -2 } }
      ]
    },
    en: {
      texto: "What is your relation with money and cost of living?",
      subtexto: "Be realistic about your desired monthly spends and lifestyle requirements.",
      opcoes: [
        { texto: "I prefer working less to enjoy free time, so a highly affordable city is ideal", pontos: { custo: 3, liberdade: 2, qualidade: 1 } },
        { texto: "I am willing to pay heavy taxes/costs for perfect medical systems and clean avenues", pontos: { riqueza: 2, seguro: 2, qualidade: 2 } },
        { texto: "Wealth building — I want high salaries and heavy economic action to expand my business", pontos: { ambicao: 3, riqueza: 2, negocio: 1 } },
        { texto: "Earning in hard currency while living in low-cost paradises is the dream layout", pontos: { custo: 3, liberdade: 3, aventura: 1 } },
        { texto: "Material possessions are secondary; my money goes into live concerts, fine dining, or travel", pontos: { arte: 2, gastronomia: 1, historia: 1 } },
        { texto: "High-end luxury — I want Michelin stars, beach clubs, and premium private treatments", pontos: { luxo: 3, riqueza: 3, custo: -2 } }
      ]
    }
  },
  {
    icone: "🌍",
    pt: {
      texto: "Qual continente tem a conexão mais forte com seu coração?",
      subtexto: "Não hesite — qual continente te inspira o primeiro pensamento?",
      opcoes: [
        { texto: "Europa — história profunda, bela arquitetura antiga e facilidade para cruzar fronteiras", pontos: { historia: 2, arte: 2, europa: 3 } },
        { texto: "Ásia — vanguarda da robótica futurista, mistérios zen e gastronomias inesquecíveis", pontos: { tech: 2, espiritualidade: 2, gastronomia: 2 } },
        { texto: "Américas — calor humano, grandes hubs de empreendimento de terras jovens", pontos: { energia: 2, liberdade: 2, diversidade: 1 } },
        { texto: "África — natureza selvagem magnífica e o berço vibrante das culturas humanas", pontos: { natureza: 2, aventura: 3, comunidade: 2 } },
        { texto: "Oceania — paraísos isolados do mundo, estilo de vida pacífico e limpo do mar", pontos: { natureza: 2, qualidade: 3, sol: 1 } },
        { texto: "Qualquer lugar — me importo apenas com as métricas do ecossistema e facilidades urbanas", pontos: { diversidade: 2, qualidade: 2 } }
      ]
    },
    en: {
      texto: "Which continent calls to your soul?",
      subtexto: "Don't overthink — which region feels like your spiritual harbor?",
      opcoes: [
        { texto: "Europe — historic architectures, pedestrian avenues, and walking everywhere", pontos: { historia: 2, arte: 2, europa: 3 } },
        { texto: "Asia — high-tech skyscrapers, profound temples, and exotic culinary arts", pontos: { tech: 2, espiritualidade: 2, gastronomia: 2 } },
        { texto: "Americas — explosive daily energy, large markets, and a can-do entrepreneurial culture", pontos: { energia: 2, liberdade: 2, diversidade: 1 } },
        { texto: "Africa — wild safaris, raw untouched beauty, and amazing human warmness", pontos: { natureza: 2, aventura: 3, comunidade: 2 } },
        { texto: "Oceania — remote clean shores, great wages, and relaxed ocean vibes", pontos: { natureza: 2, qualidade: 3, sol: 1 } },
        { texto: "Indifferent — as long as the neighborhood index scores high on metric scales", pontos: { diversidade: 2, qualidade: 2 } }
      ]
    }
  },
  {
    icone: "🔒",
    pt: {
      texto: "O quanto a segurança molda o seu sono?",
      subtexto: "Seja totalmente aberto sobre seus limites contra criminalidade urbana.",
      opcoes: [
        { texto: "Absolutamente essencial — caminhar no escuro com celular em mãos é inegociável", pontos: { seguro: 3, familia: 1, qualidade: 1 } },
        { texto: "Bastante importante — gostaria de delegacias que ajam e segurança preventiva", pontos: { seguro: 2, aventura: 1 } },
        { texto: "Aceitável — já lidei com áreas metropolitanas agitadas e sei como me defender", pontos: { energia: 2, ambicao: 1 } },
        { texto: "Gosto da vivacidade extrema e da imprevisibilidade mais que ordens rígidas", pontos: { energia: 3, liberdade: 2, aventura: 1 } },
        { texto: "O importante é ter bolsões residenciais calmos na periferia e condomínios bons", pontos: { urbano: 2, custo: 1 } },
        { texto: "Prezo por segurança pública eficaz sem excessos inquisidores dos guardas", pontos: { seguro: 2, liberdade: 2 } }
      ]
    },
    en: {
      texto: "How much does public safety dictate your peaceful sleep?",
      subtexto: "Be entirely realistic about your thresholds for urban crime.",
      opcoes: [
        { texto: "Absolute priority — walking at midnight with an active phone must be completely safe", pontos: { seguro: 3, familia: 1, qualidade: 1 } },
        { texto: "Very important — I want reactive police forces and general civil compliance", pontos: { seguro: 2, aventura: 1 } },
        { texto: "Moderate — I know street-smarts well and can adapt to spirited big cities", pontos: { energia: 2, ambicao: 1 } },
        { texto: "I prefer high-energy organic urbanism over sterile, over-regulated police states", pontos: { energia: 3, liberdade: 2, aventura: 1 } },
        { texto: "As long as there are wealthy safe suburbs, I don't mind central hub action", pontos: { urbano: 2, custo: 1 } },
        { texto: "I want a safe city that respects personal liberties, with polite civil oversight", pontos: { seguro: 2, liberdade: 2 } }
      ]
    }
  },
  {
    icone: "🌐",
    pt: {
      texto: "Seu relacionamento diário com novos idiomas?",
      subtexto: "Pense nas burocracias burocráticas básicas rituais.",
      opcoes: [
        { texto: "Quero falar inglês habitualmente, é minha segunda ou primeira língua", pontos: { diversidade: 2, tech: 1, ambicao: 1 } },
        { texto: "Adoro decifrar novos dialetos — o esforço é a faísca da imersão nas calçadas", pontos: { historia: 2, arte: 1, europa: 2 } },
        { texto: "Prefiro conforto — me sinto acolhido se for em português ou espanhol fáceis", pontos: { social: 2, comunidade: 2, custo: 1 } },
        { texto: "Língua não é o maior problema se eu carregar um tradutor simultâneo online", pontos: { aventura: 3, liberdade: 2, diversidade: 1 } },
        { texto: "Busco cidades com boa comunidade de expatriados portugueses/brasileiros estabelecidos", pontos: { familia: 2, seguro: 1, custo: 1 } },
        { texto: "Quero línguas intrigantes e totalmente distantes — como japonês, coreano ou árabe", pontos: { tech: 2, gastronomia: 2, cultura: 3 } }
      ]
    },
    en: {
      texto: "What is your comfort level with local languages?",
      subtexto: "Think of renting an apartment, opening accounts, or seeing a dentist.",
      opcoes: [
        { texto: "English is my comfort zone — I want to easily communicate in English natively", pontos: { diversidade: 2, tech: 1, ambicao: 1 } },
        { texto: "I would be thrilled to learn a complex European language from scratch", pontos: { historia: 2, arte: 1, europa: 2 } },
        { texto: "I lean toward Latin roots — Portuguese or Spanish makes me feel immediately welcome", pontos: { social: 2, comunidade: 2, custo: 1 } },
        { texto: "Language is no barrier — I find my way using gestures and mobile translating keys", pontos: { aventura: 3, liberdade: 2, diversidade: 1 } },
        { texto: "I look for places with robust, pre-established Portuguese or Brazilian circles", pontos: { familia: 2, seguro: 1, custo: 1 } },
        { texto: "I want exotic writing systems entirely different from Latin letters — e.g. Japanese or Arabic", pontos: { tech: 2, gastronomia: 2, cultura: 3 } }
      ]
    }
  },
  {
    icone: "🏠",
    pt: {
      texto: "Como seria a moradia dos seus sonhos?",
      subtexto: "O apartamento ou quintal dita sua verdadeira felicidade caseira.",
      opcoes: [
        { texto: "Apartamento de alta tecnologia no centro de tudo, compacto e funcional", pontos: { urbano: 3, ritmo: 2, tech: 1 } },
        { texto: "Casa de subúrbio espaçosa com gramado, espaço pra churrasco e pets livres", pontos: { familia: 3, natureza: 2, seguro: 1 } },
        { texto: "Loft ou estúdio moderno ao lado de cafeterias charmosas e escritórios compartilhados", pontos: { liberdade: 3, design: 2, empreende: 1 } },
        { texto: "Living de andar alto com janelas enormes e vista para o oceano ou arranha-céus", pontos: { qualidade: 2, arte: 1, sol: 1 } },
        { texto: "Prédio antigo remodelado, com tijolo aparente, vigas rústicas e alma histórica", pontos: { historia: 3, arte: 2, europa: 1 } },
        { texto: "Tanto faz o design interno, o importante é ter espaço para organizar banquetes e festas", pontos: { social: 3, gastronomia: 1, comunidade: 1 } }
      ]
    },
    en: {
      texto: "How do you define your dream home?",
      subtexto: "Your domestic setup is the base of your daily peace.",
      opcoes: [
        { texto: "A sleek smart-apartment downtown, walking distance from all key clubs and offices", pontos: { urbano: 3, ritmo: 2, tech: 1 } },
        { texto: "A spacious suburban house with a large backyard for pets & cozy family grills", pontos: { familia: 3, natureza: 2, seguro: 1 } },
        { texto: "A cozy studio on top of an artisan bakery, next to coffee-houses and coworking lounges", pontos: { liberdade: 3, design: 2, empreende: 1 } },
        { texto: "A sun-lit penthouse with huge glass windows and panoramic views of waves or skyscrapers", pontos: { qualidade: 2, arte: 1, sol: 1 } },
        { texto: "A renovated historic flat with exposed brickwork, wood beams, and antique balconies", pontos: { historia: 3, arte: 2, europa: 1 } },
        { texto: "Interior style doesn't matter; I need room to host large dinners and open bar parties", pontos: { social: 3, gastronomia: 1, comunidade: 1 } }
      ]
    }
  },
  {
    icone: "✨",
    pt: {
      texto: "No fundo, qual é o supremo desejo da sua cidade ideal?",
      subtexto: "A resposta central que sela os eixos da sua personalidade.",
      opcoes: [
        { texto: "Crescer exponencialmente na minha profissão e acumular grandes contatos", pontos: { ambicao: 3, tech: 2, negocio: 1 } },
        { texto: "Garantir leveza no dia a dia, sorrisos simples dos pedestres e alta qualidade de vida", pontos: { qualidade: 3, sustenta: 2, familia: 1 } },
        { texto: "Sentir total imunidade social para ser totalmente eu mesmo sem tabus", pontos: { liberdade: 3, diversidade: 3, arte: 1 } },
        { texto: "Pertencimento sincero a uma comunidade amigável onde todos se ajudam", pontos: { comunidade: 3, social: 2, familia: 1 } },
        { texto: "Adrenalina constante, descobertas noturnas, eventos e exploração crua", pontos: { aventura: 3, energia: 3, musica: 1 } },
        { texto: "Sentimento de solidez do futuro, sem saltos drásticos de crimes ou inflação", pontos: { seguro: 3, familia: 3, qualidade: 2 } }
      ]
    },
    en: {
      texto: "In the end, what is your ultimate goal from your ideal city?",
      subtexto: "The central thesis that binds all traits of your persona together.",
      opcoes: [
        { texto: "To challenge my limits, expand my networking capital, and build substantial assets", pontos: { ambicao: 3, tech: 2, negocio: 1 } },
        { texto: "To experience clean streets, happy neighborhoods, and a stress-free daily routine", pontos: { qualidade: 3, sustenta: 2, familia: 1 } },
        { texto: "To enjoy absolute social freedom to live my identity fully, with zero conservative rules", pontos: { liberdade: 3, diversidade: 3, arte: 1 } },
        { texto: "To build solid friendships, participate in neighborhood associations, and feel at home", pontos: { comunidade: 3, social: 2, familia: 1 } },
        { texto: "To enjoy permanent cultural excitement, concerts, culinary shock and continuous discovery", pontos: { aventura: 3, energia: 3, musica: 1 } },
        { texto: "To secure absolute peace of mind for my children, stable banking, and high civil metrics", pontos: { seguro: 3, familia: 3, qualidade: 2 } }
      ]
    }
  }
];
