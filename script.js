// --- Banco de Dados de Perguntas ---
const allQuestions = [
    // --- PERGUNTAS ORIGINAIS (MANTIDAS) ---
    // --- Minas Gerais ---
    {
        question: "Qual é a capital de Minas Gerais?",
        options: ["Ouro Preto", "Belo Horizonte", "Uberlândia", "Juiz de Fora"],
        correct: 1,
        category: "minas",
        difficulty: 1,
        explanation: "Belo Horizonte foi inaugurada em 1897 para ser a nova capital, substituindo Ouro Preto."
    },
    {
        question: "Complete a frase da bandeira de Minas: 'Libertas Quae Sera...'",
        options: ["Tamen", "Amen", "Viemen", "Semper"],
        correct: 0,
        category: "minas",
        difficulty: 2,
        explanation: "'Libertas Quae Sera Tamen' significa 'Liberdade ainda que tardia' em latim."
    },
    {
        question: "Qual destes ingredientes NÃO pode faltar num pão de queijo tradicional?",
        options: ["Farinha de Trigo", "Polvilho", "Fermento Biológico", "Açúcar"],
        correct: 1,
        category: "minas",
        difficulty: 1,
        explanation: "O polvilho (azedo ou doce) é a base do pão de queijo. Farinha de trigo não entra na receita original!"
    },
    {
        question: "Qual cidade mineira é famosa por suas águas termais e o Parque das Águas?",
        options: ["São Lourenço", "Divinópolis", "Betim", "Contagem"],
        correct: 0,
        category: "minas",
        difficulty: 3,
        explanation: "São Lourenço faz parte do Circuito das Águas e é famosa por suas fontes minerais medicinais."
    },

    // --- Conhecimentos Gerais ---
    {
        question: "Qual é o elemento químico representado pela letra 'O'?",
        options: ["Ouro", "Osmium", "Oxigênio", "Oliva"],
        correct: 2,
        category: "ciencias",
        difficulty: 1,
        explanation: "O símbolo 'O' representa o Oxigênio na tabela periódica. Ouro é 'Au'."
    },
    {
        question: "Quantos estados tem o Brasil?",
        options: ["24", "26", "26 + DF", "27 + DF"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "O Brasil possui 26 estados e 1 Distrito Federal, totalizando 27 unidades federativas."
    },

    // --- Esportes ---
    {
        question: "Qual time é conhecido como 'Galo' em Minas Gerais?",
        options: ["Cruzeiro", "América", "Atlético Mineiro", "Villa Nova"],
        correct: 2,
        category: "esportes",
        difficulty: 1,
        explanation: "O Atlético Mineiro adotou o Galo como mascote na década de 1930."
    },
    {
        question: "Em que ano o Brasil sediou a Copa do Mundo pela segunda vez?",
        options: ["2010", "2014", "2006", "2018"],
        correct: 1,
        category: "esportes",
        difficulty: 2,
        explanation: "O Brasil sediou a Copa em 1950 e depois novamente em 2014."
    },

    // --- Filmes ---
    {
        question: "Quem dirigiu o filme 'Central do Brasil'?",
        options: ["Fernando Meirelles", "Walter Salles", "José Padilha", "Glauber Rocha"],
        correct: 1,
        category: "filmes",
        difficulty: 3,
        explanation: "Walter Salles dirigiu o filme que rendeu uma indicação ao Oscar para Fernanda Montenegro."
    },
    {
        question: "Qual super-herói é conhecido como 'Homem de Ferro'?",
        options: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"],
        correct: 3,
        category: "filmes",
        difficulty: 1,
        explanation: "Tony Stark é o bilionário por trás da armadura do Homem de Ferro."
    },

    // --- História ---
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Getúlio Vargas", "Deodoro da Fonseca", "Dom Pedro II", "Juscelino Kubitschek"],
        correct: 1,
        category: "historia",
        difficulty: 2,
        explanation: "O Marechal Deodoro da Fonseca proclamou a república e foi o primeiro presidente em 1889."
    },
    
    // --- TI / Programação (Originais) ---
    {
        question: "O que significa HTML?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Layer", "Home Tool Markup Language"],
        correct: 0,
        category: "ti",
        difficulty: 1,
        explanation: "HTML (Linguagem de Marcação de Hipertexto) é o bloco de construção padrão da web."
    },
    {
        question: "Em JavaScript, qual símbolo é usado para comentários de uma linha?",
        options: ["<!-- -->", "//", "/* */", "**"],
        correct: 1,
        category: "ti",
        difficulty: 1,
        explanation: "// é usado para comentários de linha única, enquanto /* */ é para múltiplas linhas."
    },
    {
        question: "Qual destas NÃO é uma linguagem de programação?",
        options: ["Python", "Java", "HTML", "C++"],
        correct: 2,
        category: "ti",
        difficulty: 2,
        explanation: "HTML é uma linguagem de marcação (estrutura), não de programação (lógica)."
    },
    {
        question: "O que significa o erro 404 na web?",
        options: ["Servidor interno", "Não encontrado", "Proibido", "Requisição ruim"],
        correct: 1,
        category: "ti",
        difficulty: 1,
        explanation: "404 Not Found indica que o servidor não conseguiu encontrar o recurso solicitado."
    },
    {
        question: "Qual estrutura de dados funciona no princípio LIFO (Last In, First Out)?",
        options: ["Fila (Queue)", "Pilha (Stack)", "Árvore (Tree)", "Grafo (Graph)"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Em uma Pilha (Stack), o último item a entrar é o primeiro a sair (como uma pilha de pratos)."
    },
    {
        question: "Quem é considerado o pai da computação?",
        options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Ada Lovelace"],
        correct: 2,
        category: "ti",
        difficulty: 2,
        explanation: "Alan Turing formalizou os conceitos de algoritmo e computação com a Máquina de Turing."
    },
    {
        question: "Qual comando git envia as alterações para o repositório remoto?",
        options: ["git pull", "git commit", "git push", "git status"],
        correct: 2,
        category: "ti",
        difficulty: 2,
        explanation: "Git 'push' empurra seus commits locais para o servidor remoto."
    },
    {
        question: "O que é 'React'?",
        options: ["Um banco de dados", "Uma biblioteca JS para UI", "Um sistema operacional", "Um editor de texto"],
        correct: 1,
        category: "ti",
        difficulty: 2,
        explanation: "React é uma biblioteca JavaScript popular criada pelo Facebook para construir interfaces de usuário."
    },

    // --- NOVAS PERGUNTAS (LOTE ANTERIOR) ---
    // Nível Fácil
    {
        question: "Qual é a cor da caixa preta dos aviões?",
        options: ["Preta", "Laranja", "Vermelha", "Azul"],
        correct: 1,
        category: "geral",
        difficulty: 1,
        explanation: "As caixas pretas são laranja para facilitar a localização em caso de acidentes."
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
        correct: 2,
        category: "arte",
        difficulty: 1,
        explanation: "Leonardo da Vinci pintou a obra no início do século XVI."
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        correct: 2,
        category: "ciencias",
        difficulty: 1,
        explanation: "Júpiter é o maior planeta, sendo um gigante gasoso."
    },
    {
        question: "Quantos jogadores titulares tem um time de futebol?",
        options: ["9", "10", "11", "12"],
        correct: 2,
        category: "esportes",
        difficulty: 1,
        explanation: "São 11 jogadores em campo por time."
    },
    {
        question: "Em que continente fica o Egito?",
        options: ["Ásia", "África", "Europa", "América"],
        correct: 1,
        category: "geografia",
        difficulty: 1,
        explanation: "O Egito está localizado no nordeste da África."
    },
    {
        question: "Quem é o criador da Turma da Mônica?",
        options: ["Ziraldo", "Mauricio de Sousa", "Monteiro Lobato", "Stan Lee"],
        correct: 1,
        category: "cultura",
        difficulty: 1,
        explanation: "Mauricio de Sousa criou a turma baseada em suas filhas."
    },
    {
        question: "Qual fruto é conhecido por ter sua semente do lado de fora?",
        options: ["Morango", "Caju", "Maçã", "Uva"],
        correct: 1,
        category: "ciencias",
        difficulty: 1,
        explanation: "O que chamamos de fruta no caju é o pedúnculo; a fruta real é a castanha."
    },
    {
        question: "Qual é a moeda oficial dos Estados Unidos?",
        options: ["Euro", "Libra", "Dólar", "Iene"],
        correct: 2,
        category: "geral",
        difficulty: 1,
        explanation: "O Dólar Americano (USD) é a moeda oficial."
    },
    {
        question: "Qual animal é o símbolo da Páscoa?",
        options: ["Cordeiro", "Coelho", "Galinha", "Peixe"],
        correct: 1,
        category: "cultura",
        difficulty: 1,
        explanation: "O coelho é símbolo de fertilidade e vida nova."
    },
    {
        question: "O que as abelhas produzem?",
        options: ["Leite", "Mel", "Seda", "Algodão"],
        correct: 1,
        category: "ciencias",
        difficulty: 1,
        explanation: "As abelhas produzem mel a partir do néctar das flores."
    },
    {
        question: "Qual instrumento musical tem teclas pretas e brancas?",
        options: ["Violão", "Bateria", "Piano", "Flauta"],
        correct: 2,
        category: "musica",
        difficulty: 1,
        explanation: "O piano é caracterizado por suas teclas pretas e brancas."
    },
    {
        question: "Qual personagem vive num abacaxi no fundo do mar?",
        options: ["Patrick", "Lula Molusco", "Bob Esponja", "Plankton"],
        correct: 2,
        category: "filmes",
        difficulty: 1,
        explanation: "Bob Esponja Calça Quadrada vive na Fenda do Biquíni."
    },
    {
        question: "Como se chama o lugar onde se guardam livros?",
        options: ["Farmácia", "Biblioteca", "Padaria", "Oficina"],
        correct: 1,
        category: "geral",
        difficulty: 1,
        explanation: "Biblioteca é o local destinado ao armazenamento e leitura de livros."
    },
    {
        question: "Qual é o satélite natural da Terra?",
        options: ["Sol", "Marte", "Lua", "Cometa"],
        correct: 2,
        category: "ciencias",
        difficulty: 1,
        explanation: "A Lua é o único satélite natural da Terra."
    },
    {
        question: "Em que país fica a Torre Eiffel?",
        options: ["Itália", "Alemanha", "Espanha", "França"],
        correct: 3,
        category: "geografia",
        difficulty: 1,
        explanation: "A Torre Eiffel é o monumento mais famoso de Paris, França."
    },

    // Nível Médio
    {
        question: "Qual é o maior país do mundo em extensão territorial?",
        options: ["China", "EUA", "Rússia", "Canadá"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "A Rússia é o maior país do mundo, abrangendo parte da Europa e da Ásia."
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Jorge Amado", "Machado de Assis", "Clarice Lispector", "José de Alencar"],
        correct: 1,
        category: "literatura",
        difficulty: 2,
        explanation: "Machado de Assis publicou a obra em 1899."
    },
    {
        question: "Qual é a fórmula química da água?",
        options: ["HO2", "H2O", "CO2", "H2O2"],
        correct: 1,
        category: "ciencias",
        difficulty: 2,
        explanation: "H2O: Dois átomos de hidrogênio e um de oxigênio."
    },
    {
        question: "Quantos anos durou a Guerra dos Cem Anos?",
        options: ["100", "116", "99", "101"],
        correct: 1,
        category: "historia",
        difficulty: 2,
        explanation: "Apesar do nome, o conflito entre França e Inglaterra durou 116 anos (1337-1453)."
    },
    {
        question: "Qual banda brasileira cantava 'Mamonas Assassinas'?",
        options: ["Titãs", "Mamonas Assassinas", "Legião Urbana", "Skank"],
        correct: 1,
        category: "musica",
        difficulty: 2,
        explanation: "A banda levava o mesmo nome de seu único álbum de estúdio."
    },
    {
        question: "Qual é o osso mais longo do corpo humano?",
        options: ["Fêmur", "Úmero", "Tíbia", "Rádio"],
        correct: 0,
        category: "ciencias",
        difficulty: 2,
        explanation: "O fêmur, localizado na coxa, é o osso mais longo e resistente."
    },
    {
        question: "Quem descobriu o Brasil?",
        options: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Dom Pedro I"],
        correct: 1,
        category: "historia",
        difficulty: 2,
        explanation: "Cabral chegou ao Brasil em 22 de abril de 1500."
    },
    {
        question: "Qual é a capital da Austrália?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "Muitos acham que é Sydney, mas a capital política é Canberra."
    },
    {
        question: "O que comemora o feriado de 7 de Setembro no Brasil?",
        options: ["Proclamação da República", "Independência", "Descobrimento", "Dia do Trabalho"],
        correct: 1,
        category: "historia",
        difficulty: 2,
        explanation: "Celebra-se a Independência do Brasil de Portugal, em 1822."
    },
    {
        question: "Quem é o 'Rei do Futebol'?",
        options: ["Maradona", "Messi", "Pelé", "Ronaldo"],
        correct: 2,
        category: "esportes",
        difficulty: 2,
        explanation: "Edson Arantes do Nascimento, o Pelé, é mundialmente reconhecido como o Rei."
    },
    {
        question: "Qual é o planeta mais próximo do Sol?",
        options: ["Vênus", "Terra", "Mercúrio", "Marte"],
        correct: 2,
        category: "ciencias",
        difficulty: 2,
        explanation: "Mercúrio é o planeta mais interno do Sistema Solar."
    },
    {
        question: "Em que ano o homem pisou na Lua pela primeira vez?",
        options: ["1959", "1969", "1979", "1989"],
        correct: 1,
        category: "historia",
        difficulty: 2,
        explanation: "A missão Apollo 11 pousou na Lua em 20 de julho de 1969."
    },
    {
        question: "Qual é o coletivo de lobos?",
        options: ["Rebanho", "Cardume", "Alcateia", "Manada"],
        correct: 2,
        category: "geral",
        difficulty: 2,
        explanation: "Alcateia é o termo específico para um grupo de lobos."
    },
    {
        question: "Qual a montanha mais alta do mundo?",
        options: ["K2", "Everest", "Aconcágua", "Kilimanjaro"],
        correct: 1,
        category: "geografia",
        difficulty: 2,
        explanation: "O Monte Everest tem 8.849 metros de altura."
    },
    {
        question: "Que personagem da mitologia grega tinha cobras na cabeça?",
        options: ["Hera", "Afrodite", "Medusa", "Atena"],
        correct: 2,
        category: "mitologia",
        difficulty: 2,
        explanation: "Medusa transformava em pedra quem olhasse diretamente para ela."
    },
    {
        question: "Qual destes não é um estado da região Sudeste?",
        options: ["São Paulo", "Rio de Janeiro", "Paraná", "Espírito Santo"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "O Paraná fica na região Sul do Brasil."
    },
    {
        question: "Quem pintou 'A Noite Estrelada'?",
        options: ["Monet", "Da Vinci", "Van Gogh", "Dali"],
        correct: 2,
        category: "arte",
        difficulty: 2,
        explanation: "Vincent van Gogh pintou a obra em 1889, enquanto estava num asilo."
    },

    // Nível Difícil
    {
        question: "Qual a velocidade da luz no vácuo (aproximadamente)?",
        options: ["300.000 km/s", "150.000 km/s", "1.000 km/s", "300.000 m/s"],
        correct: 0,
        category: "ciencias",
        difficulty: 3,
        explanation: "A luz viaja a aproximadamente 299.792.458 metros por segundo."
    },
    {
        question: "Quem foi o autor de 'O Pequeno Príncipe'?",
        options: ["Victor Hugo", "Antoine de Saint-Exupéry", "Jules Verne", "Albert Camus"],
        correct: 1,
        category: "literatura",
        difficulty: 3,
        explanation: "O escritor e aviador francês publicou a obra em 1943."
    },
    {
        question: "Qual é o menor país do mundo?",
        options: ["Mônaco", "Vaticano", "San Marino", "Liechtenstein"],
        correct: 1,
        category: "geografia",
        difficulty: 3,
        explanation: "O Vaticano tem apenas 0,44 km² e fica dentro de Roma."
    },
    {
        question: "Em que ano começou a Primeira Guerra Mundial?",
        options: ["1914", "1918", "1939", "1945"],
        correct: 0,
        category: "historia",
        difficulty: 3,
        explanation: "A guerra começou em julho de 1914 após o assassinato do Arquiduque Francisco Ferdinando."
    },
    {
        question: "Qual elemento químico tem o símbolo 'Fe'?",
        options: ["Ferro", "Flúor", "Fósforo", "Frâncio"],
        correct: 0,
        category: "ciencias",
        difficulty: 3,
        explanation: "Vem do latim 'Ferrum'."
    },
    {
        question: "Quem compôs a 'Nona Sinfonia'?",
        options: ["Mozart", "Bach", "Beethoven", "Chopin"],
        correct: 2,
        category: "musica",
        difficulty: 3,
        explanation: "Ludwig van Beethoven compôs a obra já estando quase totalmente surdo."
    },
    {
        question: "Qual país tem o maior número de ilhas do mundo?",
        options: ["Filipinas", "Indonésia", "Suécia", "Japão"],
        correct: 2,
        category: "geografia",
        difficulty: 3,
        explanation: "A Suécia possui mais de 260.000 ilhas, a maioria desabitada."
    },
    {
        question: "O que é um 'bissexto'?",
        options: ["Um ano com 366 dias", "Um ângulo de dois graus", "Um verso de duas sílabas", "Um animal de seis patas"],
        correct: 0,
        category: "geral",
        difficulty: 3,
        explanation: "Acontece a cada 4 anos para ajustar o calendário ao movimento da Terra."
    },
    {
        question: "Qual a capital do Canadá?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correct: 2,
        category: "geografia",
        difficulty: 3,
        explanation: "Ottawa foi escolhida pela Rainha Vitória em 1857."
    },
    {
        question: "Quem foi o deus romano correspondente ao grego Zeus?",
        options: ["Marte", "Apolo", "Júpiter", "Netuno"],
        correct: 2,
        category: "mitologia",
        difficulty: 3,
        explanation: "Júpiter era o rei dos deuses na mitologia romana."
    },
    {
        question: "Qual o nome da primeira mulher a ir ao espaço?",
        options: ["Sally Ride", "Valentina Tereshkova", "Yuri Gagarin", "Marie Curie"],
        correct: 1,
        category: "historia",
        difficulty: 3,
        explanation: "A cosmonauta soviética foi ao espaço em 1963."
    },
    {
        question: "Quantos corações tem um polvo?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        category: "ciencias",
        difficulty: 3,
        explanation: "Eles têm três corações: dois bombeiam sangue para as brânquias e um para o corpo."
    },
    {
        question: "Qual é o livro mais vendido da história (excluindo a Bíblia)?",
        options: ["Dom Quixote", "Harry Potter", "O Senhor dos Anéis", "O Pequeno Príncipe"],
        correct: 0,
        category: "literatura",
        difficulty: 3,
        explanation: "Estima-se que Dom Quixote tenha vendido mais de 500 milhões de cópias."
    },
    {
        question: "Em que parte do corpo fica a pleura?",
        options: ["Coração", "Estômago", "Pulmão", "Cérebro"],
        correct: 2,
        category: "ciencias",
        difficulty: 3,
        explanation: "A pleura é uma membrana que envolve os pulmões."
    },
    {
        question: "Qual cidade brasileira já foi capital de Portugal?",
        options: ["Salvador", "Rio de Janeiro", "Recife", "São Luís"],
        correct: 1,
        category: "historia",
        difficulty: 3,
        explanation: "O Rio de Janeiro foi a capital do Império Português de 1808 a 1821."
    },
    {
        question: "Quem pintou 'Guernica'?",
        options: ["Salvador Dalí", "Pablo Picasso", "Diego Rivera", "Frida Kahlo"],
        correct: 1,
        category: "arte",
        difficulty: 3,
        explanation: "Picasso pintou a obra em protesto ao bombardeio da cidade de Guernica."
    },
    {
        question: "Qual é o metal líquido à temperatura ambiente?",
        options: ["Chumbo", "Mercúrio", "Alumínio", "Prata"],
        correct: 1,
        category: "ciencias",
        difficulty: 3,
        explanation: "O mercúrio é o único metal que é líquido em condições normais de temperatura."
    },
    {
        question: "Quantos lados tem um icosaedro?",
        options: ["10", "12", "20", "30"],
        correct: 2,
        category: "matematica",
        difficulty: 3,
        explanation: "Um icosaedro regular possui 20 faces triangulares."
    },

    // --- NOVAS 50 PERGUNTAS ADICIONADAS ANTERIORMENTE ---
    
    // -- FÁCEIS (Novas) --
    {
        question: "Onde o Sol nasce?",
        options: ["Norte", "Sul", "Leste", "Oeste"],
        correct: 2,
        category: "geografia",
        difficulty: 1,
        explanation: "O Sol nasce no Leste (ou Oriente) e se põe no Oeste."
    },
    {
        question: "Qual é o personagem principal do Sítio do Picapau Amarelo?",
        options: ["Pedrinho", "Emília", "Dona Benta", "Visconde"],
        correct: 1,
        category: "literatura",
        difficulty: 1,
        explanation: "A boneca de pano Emília é a personagem mais icônica e falante."
    },
    {
        question: "Quantos segundos tem um minuto?",
        options: ["50", "60", "100", "30"],
        correct: 1,
        category: "matematica",
        difficulty: 1,
        explanation: "Um minuto é composto por 60 segundos."
    },
    {
        question: "Qual animal diz 'miau'?",
        options: ["Cachorro", "Gato", "Vaca", "Pato"],
        correct: 1,
        category: "geral",
        difficulty: 1,
        explanation: "O miado é o som característico dos gatos."
    },
    {
        question: "Qual cor resulta da mistura de azul e amarelo?",
        options: ["Verde", "Roxo", "Laranja", "Marrom"],
        correct: 0,
        category: "arte",
        difficulty: 1,
        explanation: "Azul e amarelo são cores primárias que, misturadas, formam o verde."
    },
    {
        question: "Qual é a capital da França?",
        options: ["Londres", "Berlim", "Paris", "Madri"],
        correct: 2,
        category: "geografia",
        difficulty: 1,
        explanation: "Paris, a Cidade Luz, é a capital francesa."
    },
    {
        question: "Quantas pernas tem uma aranha?",
        options: ["4", "6", "8", "10"],
        correct: 2,
        category: "ciencias",
        difficulty: 1,
        explanation: "Aracnídeos, como as aranhas, possuem 8 patas (4 pares)."
    },
    {
        question: "Qual fruta a Branca de Neve comeu?",
        options: ["Banana", "Maçã", "Pera", "Uva"],
        correct: 1,
        category: "filmes",
        difficulty: 1,
        explanation: "Ela comeu uma maçã envenenada pela bruxa."
    },
    {
        question: "O que o herbívoro come?",
        options: ["Carne", "Plantas", "Insetos", "Tudo"],
        correct: 1,
        category: "ciencias",
        difficulty: 1,
        explanation: "Herbívoros alimentam-se exclusivamente de vegetais."
    },
    {
        question: "Qual é o maior mamífero do mundo?",
        options: ["Elefante", "Baleia Azul", "Girafa", "Rinoceronte"],
        correct: 1,
        category: "ciencias",
        difficulty: 1,
        explanation: "A Baleia Azul pode chegar a 30 metros de comprimento."
    },
    {
        question: "Quem é o parceiro do Batman?",
        options: ["Coringa", "Robin", "Superman", "Flash"],
        correct: 1,
        category: "filmes",
        difficulty: 1,
        explanation: "Robin é o fiel ajudante do Homem-Morcego."
    },
    {
        question: "Em que estação do ano faz mais frio?",
        options: ["Verão", "Primavera", "Outono", "Inverno"],
        correct: 3,
        category: "geral",
        difficulty: 1,
        explanation: "O Inverno é a estação caracterizada pelas temperaturas mais baixas."
    },
    {
        question: "Quantos meses tem um ano?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        category: "geral",
        difficulty: 1,
        explanation: "O calendário gregoriano possui 12 meses."
    },
    {
        question: "O que se usa para medir a febre?",
        options: ["Barômetro", "Termômetro", "Velocímetro", "Régua"],
        correct: 1,
        category: "ciencias",
        difficulty: 1,
        explanation: "O termômetro é o instrumento usado para medir temperatura corporal."
    },
    {
        question: "Qual é a língua oficial do Brasil?",
        options: ["Espanhol", "Inglês", "Português", "Francês"],
        correct: 2,
        category: "geral",
        difficulty: 1,
        explanation: "O Brasil foi colonizado por Portugal, herdando o idioma."
    },
    {
        question: "O que é H2O?",
        options: ["Sal", "Açúcar", "Água", "Vinagre"],
        correct: 2,
        category: "ciencias",
        difficulty: 1,
        explanation: "H2O é a fórmula química da água."
    },
    {
        question: "Qual país é famoso pelo sushi?",
        options: ["China", "Japão", "Coreia", "Tailândia"],
        correct: 1,
        category: "cultura",
        difficulty: 1,
        explanation: "Sushi é um prato tradicional da culinária japonesa."
    },

    // -- MÉDIAS (Novas) --
    {
        question: "Qual é o rio mais extenso do mundo?",
        options: ["Nilo", "Amazonas", "Mississipi", "Yangtzé"],
        correct: 1,
        category: "geografia",
        difficulty: 2,
        explanation: "O Rio Amazonas é considerado o mais extenso, superando o Nilo."
    },
    {
        question: "Quem pintou a Capela Sistina?",
        options: ["Rafael", "Donatello", "Michelangelo", "Da Vinci"],
        correct: 2,
        category: "arte",
        difficulty: 2,
        explanation: "Michelangelo levou 4 anos para pintar o teto da capela."
    },
    {
        question: "Quantos ossos tem o corpo humano adulto?",
        options: ["156", "206", "306", "106"],
        correct: 1,
        category: "ciencias",
        difficulty: 2,
        explanation: "Um adulto saudável possui 206 ossos."
    },
    {
        question: "Qual é o símbolo químico do Ouro?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correct: 0,
        category: "ciencias",
        difficulty: 2,
        explanation: "Vem do latim 'Aurum'."
    },
    {
        question: "Qual banda de rock é liderada por Mick Jagger?",
        options: ["The Beatles", "Queen", "The Rolling Stones", "U2"],
        correct: 2,
        category: "musica",
        difficulty: 2,
        explanation: "Os Rolling Stones foram formados em Londres em 1962."
    },
    {
        question: "Quem escreveu 'Romeu e Julieta'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1,
        category: "literatura",
        difficulty: 2,
        explanation: "Shakespeare escreveu a tragédia no final do século XVI."
    },
    {
        question: "Qual é a capital da Argentina?",
        options: ["Rosário", "Mendoza", "Buenos Aires", "Córdoba"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "Buenos Aires é a capital e maior cidade argentina."
    },
    {
        question: "Em que ano o Muro de Berlim caiu?",
        options: ["1987", "1989", "1991", "1993"],
        correct: 1,
        category: "historia",
        difficulty: 2,
        explanation: "A queda ocorreu em 9 de novembro de 1989."
    },
    {
        question: "Qual é o planeta vermelho?",
        options: ["Júpiter", "Marte", "Vênus", "Saturno"],
        correct: 1,
        category: "ciencias",
        difficulty: 2,
        explanation: "Marte é chamado assim devido ao óxido de ferro em sua superfície."
    },
    {
        question: "Quem é o autor de 'Harry Potter'?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
        correct: 1,
        category: "literatura",
        difficulty: 2,
        explanation: "J.K. Rowling escreveu os 7 livros da saga principal."
    },
    {
        question: "Qual é a moeda do Reino Unido?",
        options: ["Euro", "Dólar", "Libra Esterlina", "Franco"],
        correct: 2,
        category: "geral",
        difficulty: 2,
        explanation: "A Libra Esterlina é uma das moedas mais antigas do mundo."
    },
    {
        question: "Quantos graus tem um círculo?",
        options: ["180", "90", "360", "100"],
        correct: 2,
        category: "matematica",
        difficulty: 2,
        explanation: "Uma volta completa corresponde a 360 graus."
    },
    {
        question: "Qual é o órgão responsável por bombear sangue?",
        options: ["Pulmão", "Fígado", "Coração", "Rim"],
        correct: 2,
        category: "ciencias",
        difficulty: 2,
        explanation: "O coração funciona como uma bomba no sistema circulatório."
    },
    {
        question: "Quem foi Mahatma Gandhi?",
        options: ["Um rei", "Um líder pacifista", "Um guerreiro", "Um cientista"],
        correct: 1,
        category: "historia",
        difficulty: 2,
        explanation: "Gandhi liderou a independência da Índia através da não-violência."
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "O Oceano Pacífico cobre cerca de 30% da superfície da Terra."
    },
    {
        question: "Qual destes animais é um marsupial?",
        options: ["Canguru", "Ornitorrinco", "Pinguim", "Urso"],
        correct: 0,
        category: "ciencias",
        difficulty: 2,
        explanation: "Cangurus carregam seus filhotes em uma bolsa chamada marsúpio."
    },
    {
        question: "Em que país surgiram os Jogos Olímpicos?",
        options: ["Itália", "Grécia", "Egito", "China"],
        correct: 1,
        category: "historia",
        difficulty: 2,
        explanation: "Os jogos surgiram na Grécia Antiga, na cidade de Olímpia."
    },

    // -- DIFÍCEIS (Novas) --
    {
        question: "Qual é a capital do Canadá?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correct: 3,
        category: "geografia",
        difficulty: 3,
        explanation: "Ottawa foi escolhida pela Rainha Vitória para evitar conflitos entre cidades rivais."
    },
    {
        question: "Quem descobriu a Penicilina?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
        correct: 1,
        category: "ciencias",
        difficulty: 3,
        explanation: "Fleming descobriu o antibiótico por acaso em 1928."
    },
    {
        question: "Quantos elementos tem a Tabela Periódica atualmente?",
        options: ["108", "118", "128", "98"],
        correct: 1,
        category: "ciencias",
        difficulty: 3,
        explanation: "A tabela possui 118 elementos confirmados."
    },
    {
        question: "Qual guerra durou de 1939 a 1945?",
        options: ["1ª Guerra Mundial", "Guerra Fria", "2ª Guerra Mundial", "Guerra do Vietnã"],
        correct: 2,
        category: "historia",
        difficulty: 3,
        explanation: "A Segunda Guerra Mundial foi o conflito mais mortal da história."
    },
    {
        question: "Quem pintou 'O Grito'?",
        options: ["Van Gogh", "Edvard Munch", "Picasso", "Monet"],
        correct: 1,
        category: "arte",
        difficulty: 3,
        explanation: "O norueguês Edvard Munch pintou a obra em 1893."
    },
    {
        question: "Qual é o livro sagrado do Islamismo?",
        options: ["Torá", "Bíblia", "Alcorão", "Vedas"],
        correct: 2,
        category: "cultura",
        difficulty: 3,
        explanation: "O Alcorão (Quran) contém as revelações de Alá ao profeta Maomé."
    },
    {
        question: "Qual é o país mais populoso do mundo (2024)?",
        options: ["China", "EUA", "Índia", "Indonésia"],
        correct: 2,
        category: "geografia",
        difficulty: 3,
        explanation: "A Índia ultrapassou a China em população recentemente."
    },
    {
        question: "Quem compôs 'As Quatro Estações'?",
        options: ["Bach", "Vivaldi", "Beethoven", "Mozart"],
        correct: 1,
        category: "musica",
        difficulty: 3,
        explanation: "Antonio Vivaldi compôs os famosos concertos para violino."
    },
    {
        question: "Qual é a unidade de medida de força?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        correct: 2,
        category: "ciencias",
        difficulty: 3,
        explanation: "Newton (N) é a unidade de força no Sistema Internacional."
    },
    {
        question: "Onde fica a cidade de Petra?",
        options: ["Egito", "Israel", "Jordânia", "Turquia"],
        correct: 2,
        category: "geografia",
        difficulty: 3,
        explanation: "Petra é uma cidade histórica e arqueológica na Jordânia."
    },
    {
        question: "Qual o nome do primeiro satélite artificial?",
        options: ["Apollo 11", "Sputnik 1", "Voyager", "Hubble"],
        correct: 1,
        category: "historia",
        difficulty: 3,
        explanation: "A União Soviética lançou o Sputnik 1 em 1957."
    },
    {
        question: "Quem formulou a Teoria da Relatividade?",
        options: ["Newton", "Einstein", "Tesla", "Hawking"],
        correct: 1,
        category: "ciencias",
        difficulty: 3,
        explanation: "Albert Einstein publicou a teoria no início do século XX."
    },
    {
        question: "Qual é a montanha mais alta do Brasil?",
        options: ["Pico da Bandeira", "Monte Roraima", "Pico da Neblina", "Pico do Cristal"],
        correct: 2,
        category: "geografia",
        difficulty: 3,
        explanation: "O Pico da Neblina tem 2.995 metros de altitude."
    },
    {
        question: "O que é 'mitocôndria'?",
        options: ["Cérebro da célula", "Produtora de energia", "Barreira celular", "Material genético"],
        correct: 1,
        category: "ciencias",
        difficulty: 3,
        explanation: "É a organela responsável pela respiração celular e energia."
    },
    {
        question: "Quem foi o primeiro homem a viajar no espaço?",
        options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
        correct: 1,
        category: "historia",
        difficulty: 3,
        explanation: "O russo Yuri Gagarin foi ao espaço em 1961."
    },
    {
        question: "Quantas teclas tem um piano padrão?",
        options: ["66", "77", "88", "99"],
        correct: 2,
        category: "musica",
        difficulty: 3,
        explanation: "Um piano moderno padrão possui 88 teclas (52 brancas e 36 pretas)."
    },

    // --- NOVOS LOTES (50 TI + 50 MISTAS) ---
    
    // TI - FÁCIL
    {
        question: "Qual destas é uma marca de placa de vídeo?",
        options: ["NVIDIA", "Adidas", "Nestlé", "Honda"],
        correct: 0,
        category: "ti",
        difficulty: 1,
        explanation: "NVIDIA é famosa por suas GPUs GeForce."
    },
    {
        question: "O que significa 'PC'?",
        options: ["Para Casa", "Personal Computer", "Private Center", "Processador Central"],
        correct: 1,
        category: "ti",
        difficulty: 1,
        explanation: "Sigla em inglês para Computador Pessoal."
    },
    {
        question: "Qual sistema operacional é representado por um pinguim?",
        options: ["Windows", "macOS", "Linux", "Android"],
        correct: 2,
        category: "ti",
        difficulty: 1,
        explanation: "O mascote do kernel Linux é o pinguim Tux."
    },
    {
        question: "Qual tecla geralmente recarrega a página no navegador?",
        options: ["F1", "F5", "F12", "Esc"],
        correct: 1,
        category: "ti",
        difficulty: 1,
        explanation: "F5 é o atalho padrão para 'Refresh' na maioria dos navegadores."
    },
    {
        question: "O que é um 'Mouse'?",
        options: ["Um monitor", "Um dispositivo de entrada", "Um tipo de cabo", "Um software"],
        correct: 1,
        category: "ti",
        difficulty: 1,
        explanation: "O mouse permite interagir com a interface gráfica do computador."
    },
    {
        question: "Qual empresa criou o Windows?",
        options: ["Apple", "Microsoft", "Google", "IBM"],
        correct: 1,
        category: "ti",
        difficulty: 1,
        explanation: "A Microsoft lançou a primeira versão do Windows em 1985."
    },
    {
        question: "O que é 'Wi-Fi'?",
        options: ["Conexão com fio", "Rede sem fio", "Marca de computador", "Tipo de vírus"],
        correct: 1,
        category: "ti",
        difficulty: 1,
        explanation: "Tecnologia de rede local sem fios baseada no padrão IEEE 802.11."
    },
    {
        question: "Para que serve o comando 'Ctrl + C'?",
        options: ["Colar", "Cortar", "Copiar", "Cancelar"],
        correct: 2,
        category: "ti",
        difficulty: 1,
        explanation: "É o atalho universal para copiar o item selecionado."
    },
    {
        question: "Qual a extensão comum de um arquivo de texto simples?",
        options: [".exe", ".txt", ".jpg", ".mp3"],
        correct: 1,
        category: "ti",
        difficulty: 1,
        explanation: ".txt indica um arquivo de texto sem formatação."
    },
    {
        question: "O que é um 'Bug'?",
        options: ["Um recurso novo", "Um erro no código", "Um tipo de monitor", "Uma senha"],
        correct: 1,
        category: "ti",
        difficulty: 1,
        explanation: "Bug é o termo usado para falhas ou defeitos em software."
    },
    {
        question: "Qual linguagem usa a tag <body>?",
        options: ["Python", "C++", "HTML", "SQL"],
        correct: 2,
        category: "ti",
        difficulty: 1,
        explanation: "Em HTML, <body> delimita o conteúdo visível da página."
    },
    {
        question: "O que significa 'www'?",
        options: ["World Wide Web", "Web World Wide", "Wide Web World", "World Web Wide"],
        correct: 0,
        category: "ti",
        difficulty: 1,
        explanation: "A 'Rede Mundial de Computadores' criada por Tim Berners-Lee."
    },
    {
        question: "Qual destes é um navegador de internet?",
        options: ["Photoshop", "Chrome", "Excel", "Word"],
        correct: 1,
        category: "ti",
        difficulty: 1,
        explanation: "Google Chrome é um dos navegadores mais populares."
    },
    {
        question: "O que é 'PDF'?",
        options: ["Formato de documento", "Peça de computador", "Linguagem de código", "Protocolo de rede"],
        correct: 0,
        category: "ti",
        difficulty: 1,
        explanation: "Portable Document Format, criado pela Adobe."
    },
    {
        question: "Qual dispositivo armazena dados permanentemente?",
        options: ["RAM", "Processador", "HD/SSD", "Monitor"],
        correct: 2,
        category: "ti",
        difficulty: 1,
        explanation: "O Disco Rígido (HD) ou SSD guarda seus arquivos mesmo desligado."
    },

    // TI - MÉDIO
    {
        question: "O que significa CSS?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        correct: 1,
        category: "ti",
        difficulty: 2,
        explanation: "Folhas de Estilo em Cascata definem a aparência de páginas web."
    },
    {
        question: "Qual o comando para listar arquivos no Linux?",
        options: ["dir", "list", "ls", "show"],
        correct: 2,
        category: "ti",
        difficulty: 2,
        explanation: "'ls' (list segments) lista o conteúdo de diretórios no Unix/Linux."
    },
    {
        question: "O que é SQL?",
        options: ["Structured Query Language", "Simple Question Language", "System Query Logic", "Style Query Layer"],
        correct: 0,
        category: "ti",
        difficulty: 2,
        explanation: "Linguagem padrão para gerenciar bancos de dados relacionais."
    },
    {
        question: "Qual porta padrão do protocolo HTTP?",
        options: ["21", "80", "443", "8080"],
        correct: 1,
        category: "ti",
        difficulty: 2,
        explanation: "A porta 80 é usada para tráfego web não criptografado."
    },
    {
        question: "O que significa a sigla API?",
        options: ["Application Programming Interface", "Advanced Program Internet", "Applied Protocol Interface", "Automated Process Input"],
        correct: 0,
        category: "ti",
        difficulty: 2,
        explanation: "Interface que permite a comunicação entre diferentes softwares."
    },
    {
        question: "Em Python, como se imprime algo na tela?",
        options: ["echo()", "console.log()", "print()", "System.out.println()"],
        correct: 2,
        category: "ti",
        difficulty: 2,
        explanation: "A função print() exibe a saída no console Python."
    },
    {
        question: "Qual destes é um banco de dados NoSQL?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        correct: 2,
        category: "ti",
        difficulty: 2,
        explanation: "MongoDB é um banco orientado a documentos, não relacional."
    },
    {
        question: "O que é um endereço IP?",
        options: ["Identidade Pessoal", "Internet Protocol", "Internal Process", "Input Port"],
        correct: 1,
        category: "ti",
        difficulty: 2,
        explanation: "É o identificador numérico de um dispositivo em uma rede."
    },
    {
        question: "Qual a função do DNS?",
        options: ["Proteger contra vírus", "Traduzir domínios para IPs", "Acelerar a internet", "Gerar senhas"],
        correct: 1,
        category: "ti",
        difficulty: 2,
        explanation: "O Domain Name System converte 'google.com' em '142.250.x.x'."
    },
    {
        question: "O que é 'Open Source'?",
        options: ["Código fechado", "Código pago", "Código aberto", "Sem código"],
        correct: 2,
        category: "ti",
        difficulty: 2,
        explanation: "Software cujo código-fonte é disponibilizado para uso e modificação."
    },
    {
        question: "Qual destes é um framework Java?",
        options: ["Django", "Spring", "Laravel", "React"],
        correct: 1,
        category: "ti",
        difficulty: 2,
        explanation: "Spring é um framework popular para desenvolvimento em Java."
    },
    {
        question: "O que faz o 'git clone'?",
        options: ["Cria um repositório", "Copia um repositório", "Deleta um repositório", "Atualiza um repositório"],
        correct: 1,
        category: "ti",
        difficulty: 2,
        explanation: "Baixa uma cópia completa de um repositório remoto."
    },
    {
        question: "O que é um algoritmo?",
        options: ["Um robô", "Uma peça de hardware", "Uma sequência de instruções", "Um erro de rede"],
        correct: 2,
        category: "ti",
        difficulty: 2,
        explanation: "É um passo a passo lógico para resolver um problema."
    },
    {
        question: "Qual camada do modelo OSI trata do roteamento?",
        options: ["Física", "Enlace", "Rede", "Aplicação"],
        correct: 2,
        category: "ti",
        difficulty: 2,
        explanation: "A Camada de Rede (Layer 3) cuida do endereçamento e roteamento (IP)."
    },
    {
        question: "O que é um 'Full Stack Developer'?",
        options: ["Dev só de Banco de Dados", "Dev Front e Back-end", "Dev só de Design", "Gerente de Projetos"],
        correct: 1,
        category: "ti",
        difficulty: 2,
        explanation: "Alguém que trabalha tanto no cliente (front) quanto no servidor (back)."
    },

    // TI - DIFÍCIL
    {
        question: "Qual a complexidade de tempo de busca em uma tabela hash ideal?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
        correct: 2,
        category: "ti",
        difficulty: 3,
        explanation: "Em média, o acesso é direto e constante, O(1)."
    },
    {
        question: "O que é 'Hoisting' em JavaScript?",
        options: ["Elevação de declarações", "Compactação de código", "Um tipo de loop", "Erro de sintaxe"],
        correct: 0,
        category: "ti",
        difficulty: 3,
        explanation: "Comportamento onde declarações de variáveis e funções são movidas para o topo."
    },
    {
        question: "Qual destes padrões de projeto é Criacional?",
        options: ["Observer", "Singleton", "Strategy", "Decorator"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Singleton garante que uma classe tenha apenas uma instância."
    },
    {
        question: "O que é um ataque DDOS?",
        options: ["Roubo de senha", "Negação de Serviço Distribuída", "Injeção de SQL", "Phishing de e-mail"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Múltiplos sistemas inundam um alvo para torná-lo indisponível."
    },
    {
        question: "Qual o princípio 'L' do SOLID?",
        options: ["Liskov Substitution", "Lazy Loading", "Loop Invariant", "Linear Search"],
        correct: 0,
        category: "ti",
        difficulty: 3,
        explanation: "Princípio da Substituição de Liskov: subclasses devem ser substituíveis por suas superclasses."
    },
    {
        question: "O que é Docker?",
        options: ["Um editor de texto", "Plataforma de containerização", "Uma linguagem", "Um sistema operacional"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Docker permite empacotar aplicações e dependências em containers leves."
    },
    {
        question: "Em Redes, o que é o protocolo TCP?",
        options: ["Protocolo não confiável", "Protocolo orientado a conexão", "Protocolo de e-mail", "Protocolo de vídeo"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Transmission Control Protocol garante a entrega ordenada e verificada de dados."
    },
    {
        question: "O que é 'Deadlock'?",
        options: ["Tela azul", "Bloqueio mútuo de processos", "Memória cheia", "Erro de disco"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Situação onde dois processos esperam um pelo outro, travando o sistema."
    },
    {
        question: "Qual destes NÃO é um método HTTP?",
        options: ["GET", "POST", "FETCH", "DELETE"],
        correct: 2,
        category: "ti",
        difficulty: 3,
        explanation: "FETCH é uma API do JavaScript, não um método do protocolo HTTP (como PUT, PATCH)."
    },
    {
        question: "O que é 'Polimorfismo' em OOP?",
        options: ["Muitas formas", "Herança múltipla", "Encapsulamento", "Abstração"],
        correct: 0,
        category: "ti",
        difficulty: 3,
        explanation: "Capacidade de objetos de diferentes classes responderem à mesma mensagem de formas distintas."
    },
    {
        question: "Qual a diferença entre '==' e '===' em JS?",
        options: ["Nenhuma", "Valor vs Valor e Tipo", "Velocidade", "Compatibilidade"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "'===' verifica também o tipo da variável, evitando coerção automática."
    },
    {
        question: "O que é 'Big O Notation'?",
        options: ["Um logotipo", "Análise de performance de algoritmos", "Tamanho do HD", "Versão do Java"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Descreve como o tempo de execução ou espaço cresce com o tamanho da entrada."
    },
    {
        question: "Qual é a porta padrão para HTTPS?",
        options: ["80", "443", "22", "21"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "443 é a porta designada para tráfego web seguro (TLS/SSL)."
    },
    {
        question: "O que é 'ORM'?",
        options: ["Object-Relational Mapping", "Operational Resource Management", "Optimal Route Mode", "Only Read Memory"],
        correct: 0,
        category: "ti",
        difficulty: 3,
        explanation: "Técnica para converter dados entre sistemas de tipos incompatíveis (Objeto <-> SQL)."
    },
    {
        question: "O que é 'Race Condition'?",
        options: ["Competição de velocidade", "Condição de corrida em concorrência", "Teste de performance", "Erro de compilação"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Falha onde o resultado depende da sequência incontrolável de eventos (threads)."
    },
    {
        question: "Qual a função do 'chmod 777'?",
        options: ["Apagar tudo", "Permissão total para todos", "Bloquear arquivo", "Copiar arquivo"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Dá permissão de Leitura, Escrita e Execução para Dono, Grupo e Outros."
    },
    {
        question: "O que é JWT?",
        options: ["Java Web Tools", "JSON Web Token", "JavaScript With Types", "Joint Web Team"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Padrão para criar tokens de acesso baseados em JSON, usado em autenticação."
    },
    {
        question: "O que é 'Refactoring'?",
        options: ["Reescrever do zero", "Melhorar código sem mudar comportamento", "Corrigir bugs", "Adicionar features"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Alterar a estrutura interna do código para torná-lo mais limpo, sem mudar sua função externa."
    },
    {
        question: "O que é Kubernetes?",
        options: ["Um Linux", "Orquestrador de containers", "Banco de dados", "Linguagem de script"],
        correct: 1,
        category: "ti",
        difficulty: 3,
        explanation: "Sistema open-source para automatizar implantação e gestão de aplicações em containers."
    },
    {
        question: "O que é CAP Theorem?",
        options: ["Consistency, Availability, Partition tolerance", "Computer, App, Program", "Code And Process", "Central Access Point"],
        correct: 0,
        category: "ti",
        difficulty: 3,
        explanation: "Diz que um sistema distribuído não pode garantir Consistência, Disponibilidade e Tolerância a Partição simultaneamente."
    },

    // FAMÍLIA/MISTA - FÁCIL
    {
        question: "Quantos dias tem uma semana?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        category: "geral",
        difficulty: 1,
        explanation: "A semana vai de domingo a sábado, totalizando 7 dias."
    },
    {
        question: "Qual cor é o cavalo branco de Napoleão?",
        options: ["Marrom", "Preto", "Branco", "Cinza"],
        correct: 2,
        category: "geral",
        difficulty: 1,
        explanation: "É uma pegadinha clássica: se é branco, a cor é branca."
    },
    {
        question: "O que a vaca bebe?",
        options: ["Leite", "Água", "Suco", "Refrigerante"],
        correct: 1,
        category: "ciencias",
        difficulty: 1,
        explanation: "Vacas adultas bebem água; bezerros bebem leite."
    },
    {
        question: "Qual é o oposto de 'Noite'?",
        options: ["Tarde", "Dia", "Madrugada", "Crepúsculo"],
        correct: 1,
        category: "geral",
        difficulty: 1,
        explanation: "O ciclo diário é dividido principalmente em Dia e Noite."
    },
    {
        question: "Quantos dedos temos em uma mão?",
        options: ["4", "5", "6", "10"],
        correct: 1,
        category: "ciencias",
        difficulty: 1,
        explanation: "O ser humano padrão possui 5 dedos em cada mão."
    },
    {
        question: "Qual é o nome do Mickey Mouse no Brasil?",
        options: ["Rato Geraldo", "Mickey", "Ratinho", "Miguel"],
        correct: 1,
        category: "cultura",
        difficulty: 1,
        explanation: "O nome original foi mantido no Brasil."
    },
    {
        question: "Onde o peixe vive?",
        options: ["Na terra", "No ar", "Na água", "No fogo"],
        correct: 2,
        category: "ciencias",
        difficulty: 1,
        explanation: "Peixes são animais aquáticos."
    },
    {
        question: "Qual a cor da banana madura?",
        options: ["Azul", "Roxa", "Amarela", "Rosa"],
        correct: 2,
        category: "geral",
        difficulty: 1,
        explanation: "A banana fica amarela quando está pronta para consumo."
    },
    {
        question: "Quanto é 2 + 2?",
        options: ["3", "4", "5", "22"],
        correct: 1,
        category: "matematica",
        difficulty: 1,
        explanation: "Soma básica."
    },
    {
        question: "Qual destes é um animal doméstico?",
        options: ["Leão", "Tigre", "Cachorro", "Urso"],
        correct: 2,
        category: "ciencias",
        difficulty: 1,
        explanation: "Cães foram domesticados há milhares de anos."
    },
    {
        question: "O que usamos para escrever no quadro negro?",
        options: ["Caneta", "Giz", "Lápis", "Pincel"],
        correct: 1,
        category: "geral",
        difficulty: 1,
        explanation: "O giz branco é usado tradicionalmente em lousas negras ou verdes."
    },
    {
        question: "Qual a estação das flores?",
        options: ["Verão", "Inverno", "Outono", "Primavera"],
        correct: 3,
        category: "ciencias",
        difficulty: 1,
        explanation: "A Primavera é associada ao reflorescimento da flora."
    },
    {
        question: "Quem é a namorada do Mickey?",
        options: ["Margarida", "Minnie", "Clarabela", "Branca de Neve"],
        correct: 1,
        category: "cultura",
        difficulty: 1,
        explanation: "Minnie Mouse é a eterna companheira do Mickey."
    },
    {
        question: "O que o bombeiro apaga?",
        options: ["Luz", "Fogo", "Memória", "Dívida"],
        correct: 1,
        category: "geral",
        difficulty: 1,
        explanation: "A principal função é o combate a incêndios."
    },
    {
        question: "Qual veículo anda sobre trilhos?",
        options: ["Carro", "Trem", "Avião", "Barco"],
        correct: 1,
        category: "geral",
        difficulty: 1,
        explanation: "Trens e metrôs locomovem-se via ferrovias."
    },

    // FAMÍLIA/MISTA - MÉDIO
    {
        question: "Qual país tem o formato de uma bota?",
        options: ["Espanha", "Portugal", "Itália", "Grécia"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "A península itálica tem um formato característico de bota."
    },
    {
        question: "Quem escreveu 'O Sítio do Picapau Amarelo'?",
        options: ["Ziraldo", "Monteiro Lobato", "Ruth Rocha", "Machado de Assis"],
        correct: 1,
        category: "literatura",
        difficulty: 2,
        explanation: "Monteiro Lobato é o pai da literatura infantil brasileira."
    },
    {
        question: "Qual é o maior estado do Brasil?",
        options: ["Minas Gerais", "São Paulo", "Amazonas", "Pará"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "O Amazonas é o maior em extensão territorial."
    },
    {
        question: "Quantos anéis tem a bandeira olímpica?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        category: "esportes",
        difficulty: 2,
        explanation: "São 5 anéis entrelaçados representando os continentes habitados."
    },
    {
        question: "Qual é a capital da Bahia?",
        options: ["Recife", "Fortaleza", "Salvador", "Maceió"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "Salvador foi a primeira capital do Brasil."
    },
    {
        question: "Quem pintou o teto da Capela Sistina?",
        options: ["Da Vinci", "Michelangelo", "Rafael", "Donatello"],
        correct: 1,
        category: "arte",
        difficulty: 2,
        explanation: "Michelangelo, o gênio renascentista."
    },
    {
        question: "Qual é o animal mais rápido do mundo?",
        options: ["Leão", "Guepardo", "Cavalo", "Águia"],
        correct: 1,
        category: "ciencias",
        difficulty: 2,
        explanation: "O Guepardo (Cheetah) pode passar de 100km/h em terra."
    },
    {
        question: "De quem é a frase 'Penso, logo existo'?",
        options: ["Sócrates", "Platão", "Descartes", "Nietzsche"],
        correct: 2,
        category: "historia",
        difficulty: 2,
        explanation: "René Descartes, filósofo francês (Cogito, ergo sum)."
    },
    {
        question: "Qual a capital dos Estados Unidos?",
        options: ["Nova York", "Los Angeles", "Washington D.C.", "Miami"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "A capital política é Washington, D.C., não NY."
    },
    {
        question: "O que é um 'Haicai'?",
        options: ["Comida japonesa", "Poema japonês", "Arte marcial", "Roupa típica"],
        correct: 1,
        category: "literatura",
        difficulty: 2,
        explanation: "Forma de poesia japonesa curta, geralmente com 3 versos."
    },
    {
        question: "Qual a moeda do Japão?",
        options: ["Yuan", "Won", "Iene", "Dólar"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "O Iene (JPY) é a moeda oficial japonesa."
    },
    {
        question: "Quantos jogadores tem um time de vôlei em quadra?",
        options: ["5", "6", "7", "12"],
        correct: 1,
        category: "esportes",
        difficulty: 2,
        explanation: "São 6 jogadores titulares de cada lado."
    },
    {
        question: "O que a Cinderela perdeu na escada?",
        options: ["O brinco", "A bolsa", "O sapatinho de cristal", "A coroa"],
        correct: 2,
        category: "filmes",
        difficulty: 2,
        explanation: "Ela perdeu o sapatinho ao fugir antes da meia-noite."
    },
    {
        question: "Qual o nome do navio que afundou em 1912?",
        options: ["Titanic", "Britannic", "Olympic", "Santa Maria"],
        correct: 0,
        category: "historia",
        difficulty: 2,
        explanation: "O RMS Titanic afundou em sua viagem inaugural."
    },
    {
        question: "Quem é a 'Rainha dos Baixinhos'?",
        options: ["Angélica", "Eliana", "Xuxa", "Mara Maravilha"],
        correct: 2,
        category: "cultura",
        difficulty: 2,
        explanation: "Xuxa Meneghel recebeu esse título por seu sucesso com crianças."
    },
    {
        question: "Qual é o gás que respiramos para viver?",
        options: ["Hélio", "Nitrogênio", "Oxigênio", "Carbono"],
        correct: 2,
        category: "ciencias",
        difficulty: 2,
        explanation: "O Oxigênio é essencial para a respiração celular."
    },
    {
        question: "Qual a capital da Espanha?",
        options: ["Barcelona", "Sevilha", "Madri", "Valência"],
        correct: 2,
        category: "geografia",
        difficulty: 2,
        explanation: "Madri é a capital e centro político da Espanha."
    },

    // FAMÍLIA/MISTA - DIFÍCIL
    {
        question: "Qual a montanha mais alta do Brasil?",
        options: ["Pico da Bandeira", "Pico da Neblina", "Monte Roraima", "Pico 31 de Março"],
        correct: 1,
        category: "geografia",
        difficulty: 3,
        explanation: "O Pico da Neblina tem 2.995m e fica no Amazonas."
    },
    {
        question: "Quem escreveu 'O Grande Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "Steinbeck"],
        correct: 1,
        category: "literatura",
        difficulty: 3,
        explanation: "Fitzgerald retratou a Era do Jazz nos EUA."
    },
    {
        question: "Qual elemento químico é 'Ag'?",
        options: ["Ouro", "Prata", "Argônio", "Alumínio"],
        correct: 1,
        category: "ciencias",
        difficulty: 3,
        explanation: "Do latim 'Argentum'."
    },
    {
        question: "Em que ano o homem foi à Lua?",
        options: ["1959", "1968", "1969", "1970"],
        correct: 2,
        category: "historia",
        difficulty: 3,
        explanation: "A Apollo 11 pousou em 20 de julho de 1969."
    },
    {
        question: "Qual a capital da Nova Zelândia?",
        options: ["Auckland", "Wellington", "Christchurch", "Queenstown"],
        correct: 1,
        category: "geografia",
        difficulty: 3,
        explanation: "Wellington é a capital mais ao sul do mundo."
    },
    {
        question: "Quem compôs 'O Lago dos Cisnes'?",
        options: ["Bach", "Mozart", "Tchaikovsky", "Beethoven"],
        correct: 2,
        category: "arte",
        difficulty: 3,
        explanation: "Piotr Ilitch Tchaikovsky, compositor russo."
    },
    {
        question: "Qual guerra durou 30 anos?",
        options: ["Guerra dos Cem Anos", "Guerra das Rosas", "Guerra dos Trinta Anos", "Guerra Fria"],
        correct: 2,
        category: "historia",
        difficulty: 3,
        explanation: "Conflito religioso e político na Europa (1618-1648)."
    },
    {
        question: "Quantas teclas tem um piano clássico?",
        options: ["55", "66", "77", "88"],
        correct: 3,
        category: "musica",
        difficulty: 3,
        explanation: "São 52 brancas e 36 pretas."
    },
    {
        question: "Onde fica Machu Picchu?",
        options: ["Chile", "Colômbia", "Bolívia", "Peru"],
        correct: 3,
        category: "geografia",
        difficulty: 3,
        explanation: "A cidade perdida dos Incas fica nos Andes peruanos."
    },
    {
        question: "Quem descobriu a radioatividade?",
        options: ["Einstein", "Newton", "Marie Curie", "Darwin"],
        correct: 2,
        category: "ciencias",
        difficulty: 3,
        explanation: "Marie Curie foi pioneira e ganhou dois prêmios Nobel."
    },
    {
        question: "Qual o maior deserto quente do mundo?",
        options: ["Gobi", "Kalahari", "Saara", "Atacama"],
        correct: 2,
        category: "geografia",
        difficulty: 3,
        explanation: "O Saara é o maior quente (a Antártida é o maior deserto no geral)."
    },
    {
        question: "Quem pintou 'A Última Ceia'?",
        options: ["Michelangelo", "Da Vinci", "Donatello", "Rafael"],
        correct: 1,
        category: "arte",
        difficulty: 3,
        explanation: "Leonardo da Vinci pintou o mural em Milão."
    },
    {
        question: "Qual a estrela mais próxima da Terra (depois do Sol)?",
        options: ["Sirius", "Alpha Centauri", "Proxima Centauri", "Betelgeuse"],
        correct: 2,
        category: "ciencias",
        difficulty: 3,
        explanation: "Proxima Centauri está a cerca de 4.2 anos-luz."
    },
    {
        question: "Em que país nasceu Hitler?",
        options: ["Alemanha", "Polônia", "Áustria", "Hungria"],
        correct: 2,
        category: "historia",
        difficulty: 3,
        explanation: "Adolf Hitler nasceu em Braunau am Inn, Áustria."
    },
    {
        question: "Qual o idioma mais falado no mundo (nativos)?",
        options: ["Inglês", "Espanhol", "Mandarim", "Hindi"],
        correct: 2,
        category: "cultura",
        difficulty: 3,
        explanation: "O Mandarim (Chinês) tem o maior número de falantes nativos."
    },
    {
        question: "O que estuda a Ictiologia?",
        options: ["Aves", "Peixes", "Insetos", "Fosseis"],
        correct: 1,
        category: "ciencias",
        difficulty: 3,
        explanation: "É o ramo da zoologia dedicado ao estudo dos peixes."
    },
    {
        question: "Quem foi o primeiro homem a orbitar a Terra?",
        options: ["Neil Armstrong", "John Glenn", "Yuri Gagarin", "Laika"],
        correct: 2,
        category: "historia",
        difficulty: 3,
        explanation: "O cosmonauta soviético Yuri Gagarin, em 1961."
    },
    {
        question: "Qual o nome da espada do Rei Arthur?",
        options: ["Anduril", "Excalibur", "Ferroada", "Glamdring"],
        correct: 1,
        category: "mitologia",
        difficulty: 3,
        explanation: "Excalibur é a espada lendária da lenda arturiana."
    }
];

// --- Lista de Prêmios (Escada de 1 a 15) ---
const prizes = [
    "1. 1 Pão de Queijo",
    "2. 1 Cafezinho Fresco",
    "3. 1 Pote de Doce de Leite",
    "4. 1 Queijo Minas Inteiro",
    "5. 1 Passagem pra Ouro Preto",
    "6. 1 Fusca Cheio de Pequi",
    "7. 1 Sítio na Serra",
    "8. 1 Lote em Betim",
    "9. 1 Franquia de Açaí",
    "10. 1 Caminhonete Diesel",
    "11. 1 Apartamento em BH",
    "12. 1 Mansão na Pampulha",
    "13. 1 Ilha em Capitólio",
    "14. Governador do Universo",
    "15. 1 Milhão de Reais (em ouro)"
];

// --- Variáveis de Estado ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let isGameActive = false;
let hasWon = false;

// --- Elementos do DOM ---
const screenStart = document.getElementById('start-screen');
const screenGame = document.getElementById('game-screen');
const screenEnd = document.getElementById('end-screen');
const feedbackOverlay = document.getElementById('feedback-overlay');
const exitOverlay = document.getElementById('exit-overlay');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const categoryBadge = document.getElementById('category-badge');
const prizeListEl = document.getElementById('prize-list');
const currentPrizeDisplay = document.getElementById('current-prize-display');

// Novos Elementos de Progresso
const currentLevelAnim = document.getElementById('current-level-anim');
const progressFill = document.getElementById('progress-fill');

// Feedback Elements
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackCorrectAns = document.getElementById('feedback-correct-answer');
const feedbackExplanation = document.getElementById('feedback-explanation');
const btnNextQ = document.getElementById('btn-next-q');

const endTitle = document.getElementById('end-title');
const endMessage = document.getElementById('end-message');
const endIcon = document.getElementById('end-icon');
const finalPrizeEl = document.getElementById('final-prize');

// --- Funções Principais ---

function startGame(mode) {
    let pool = [];

    // 1. Filtrar o banco de perguntas baseado no modo
    if (mode === 'tech') {
        pool = allQuestions.filter(q => q.category === 'ti');
        // Se não houver perguntas suficientes de TI, completamos com gerais difíceis
        if (pool.length < 15) {
            const extra = allQuestions.filter(q => q.category !== 'ti' && q.difficulty >= 2);
            pool = pool.concat(extra);
        }
    } else {
        // Modo Família (Tudim misturado): REMOVE TI COMPLETAMENTE
        pool = allQuestions.filter(q => q.category !== 'ti');
    }

    // 2. Criar a progressão de dificuldade (5 Fáceis, 5 Médias, 5 Difíceis)
    const easy = pool.filter(q => q.difficulty === 1).sort(() => 0.5 - Math.random());
    const medium = pool.filter(q => q.difficulty === 2).sort(() => 0.5 - Math.random());
    const hard = pool.filter(q => q.difficulty === 3).sort(() => 0.5 - Math.random());

    let selectedQuestions = [];
    
    // Tenta pegar 5 de cada, se não der, completa com o que tem
    const qEasy = easy.slice(0, 5);
    const qMedium = medium.slice(0, 5);
    const qHard = hard.slice(0, 5);

    selectedQuestions = [...qEasy, ...qMedium, ...qHard];

    // Se ainda não deu 15, completa com aleatórias restantes
    if (selectedQuestions.length < 15) {
        const usedIds = new Set(selectedQuestions.map(q => q.question));
        const remaining = pool.filter(q => !usedIds.has(q.question)).sort(() => 0.5 - Math.random());
        selectedQuestions = selectedQuestions.concat(remaining.slice(0, 15 - selectedQuestions.length));
    }
    
    // Corta em 15 caso tenha passado
    currentQuestions = selectedQuestions.slice(0, 15);

    currentQuestionIndex = 0;
    isGameActive = true;
    hasWon = false;
    
    renderPrizeList();
    
    switchScreen(screenGame);
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    
    questionText.textContent = q.question;
    categoryBadge.textContent = formatCategory(q.category);
    
    // Atualizar Indicador de Nível com Animação
    currentLevelAnim.textContent = currentQuestionIndex + 1;
    
    // Reiniciar a animação CSS removendo e readicionando a classe
    currentLevelAnim.classList.remove('level-pop');
    void currentLevelAnim.offsetWidth; // Trigger reflow
    currentLevelAnim.classList.add('level-pop');

    // Atualizar Barra de Progresso
    const progressPercent = ((currentQuestionIndex + 1) / 15) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // Atualiza display de prêmio mobile
    const rawPrize = prizes[currentQuestionIndex];
    const prizeText = rawPrize.includes('. ') ? rawPrize.split('. ')[1] : rawPrize;
    currentPrizeDisplay.textContent = `Valendo: ${prizeText}`;

    // Limpar container e criar botões dinamicamente para animar entrada
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.onclick = () => checkAnswer(index);
        
        // Estrutura interna
        const letter = ["A", "B", "C", "D"][index];
        btn.innerHTML = `<span class="opt-letter">${letter}</span> <span class="opt-text">${opt}</span>`;
        
        // Adicionar ao DOM
        optionsContainer.appendChild(btn);

        // Animação de entrada com delay (cascata)
        setTimeout(() => {
            btn.classList.add('slide-in-option');
        }, index * 100); 
    });

    updatePrizeLadder();
}

function checkAnswer(selectedIndex) {
    if (!isGameActive) return;

    const q = currentQuestions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll('.btn-option');
    const correctIndex = q.correct;
    
    // Desabilitar cliques
    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === correctIndex) {
        // Acertou
        const btn = buttons[selectedIndex];
        btn.classList.add('correct', 'animate-pop');
        showFeedback(true, q);
    } else {
        // Errou
        const btn = buttons[selectedIndex];
        btn.classList.add('wrong', 'animate-shake');
        
        // Mostra a correta também
        setTimeout(() => {
            buttons[correctIndex].classList.add('correct');
        }, 300);
        
        showFeedback(false, q);
    }
}

function showFeedback(isCorrect, questionData) {
    // Pequeno delay para o usuário ver a animação do botão antes do modal subir
    setTimeout(() => {
        feedbackOverlay.classList.remove('hidden');
        
        if (isCorrect) {
            feedbackIcon.textContent = "✅";
            feedbackTitle.textContent = "Acertou, mizeravi!";
            feedbackTitle.style.color = "var(--success)";
            feedbackCorrectAns.classList.add('hidden');
            
            if (currentQuestionIndex === currentQuestions.length - 1) {
                btnNextQ.textContent = "Ver Resultado Final";
                hasWon = true;
            } else {
                btnNextQ.textContent = "Próxima Pergunta";
                hasWon = false;
            }
        } else {
            feedbackIcon.textContent = "❌";
            feedbackTitle.textContent = "Errou feio, errou rude!";
            feedbackTitle.style.color = "var(--error)";
            
            feedbackCorrectAns.innerHTML = `A resposta certa era: <strong>${questionData.options[questionData.correct]}</strong>`;
            feedbackCorrectAns.classList.remove('hidden');
            
            btnNextQ.textContent = "Ver Pontuação";
            isGameActive = false; 
        }

        feedbackExplanation.textContent = questionData.explanation || "Sem explicação disponível.";
    }, 800); // 800ms de delay
}

function nextQuestion() {
    feedbackOverlay.classList.add('hidden');

    if (!isGameActive) {
        endGame(false);
    } else if (hasWon) {
        endGame(true);
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function endGame(won) {
    switchScreen(screenEnd);
    
    // Atualiza barra final cheia se ganhou
    if(won) progressFill.style.width = '100%';

    if (won) {
        endIcon.textContent = "🏆";
        endTitle.textContent = "Cê é bão mesmo!";
        endMessage.textContent = "Zerou o jogo! Pode pedir música no Fantástico.";
        finalPrizeEl.textContent = prizes[prizes.length - 1]; 
    } else {
        let prizeIndex = currentQuestionIndex - 1;
        // Pega o texto do prêmio sem o número da frente
        let rawPrize = prizeIndex >= 0 ? prizes[prizeIndex] : "Um aperto de mão";
        let prizeName = rawPrize.includes('. ') ? rawPrize.split('. ')[1] : rawPrize;
        
        endIcon.textContent = "💔";
        endTitle.textContent = "Não foi dessa vez";
        endMessage.textContent = "Mas num desanima não! Cê garantiu:";
        finalPrizeEl.textContent = prizeName;
    }
}

// --- Funções de Saída Personalizada ---

function showExitModal() {
    exitOverlay.classList.remove('hidden');
}

function hideExitModal() {
    exitOverlay.classList.add('hidden');
}

function confirmExitAction() {
    hideExitModal();
    goToHome();
}

// --- Funções Auxiliares ---

function renderPrizeList() {
    prizeListEl.innerHTML = '';
    [...prizes].forEach((prize, index) => {
        const li = document.createElement('li');
        li.className = 'prize-item';
        li.textContent = prize; // Já inclui o número agora
        li.dataset.index = index;
        prizeListEl.prepend(li);
    });
}

function updatePrizeLadder() {
    const items = prizeListEl.querySelectorAll('.prize-item');
    items.forEach(item => {
        const idx = parseInt(item.dataset.index);
        item.classList.remove('active', 'passed');
        if (idx === currentQuestionIndex) item.classList.add('active');
        else if (idx < currentQuestionIndex) item.classList.add('passed');
    });
}

function switchScreen(targetScreen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    targetScreen.classList.add('active');
    window.scrollTo(0, 0);
}

function formatCategory(cat) {
    const map = {
        'minas': 'Minas Gerais',
        'esportes': 'Esportes',
        'historia': 'História',
        'filmes': 'Cinema',
        'geral': 'Geral',
        'ti': 'Tecnologia',
        'ciencias': 'Ciências',
        'geografia': 'Geografia',
        'arte': 'Arte',
        'cultura': 'Cultura Pop',
        'musica': 'Música',
        'literatura': 'Literatura',
        'mitologia': 'Mitologia',
        'matematica': 'Matemática'
    };
    return map[cat] || cat.toUpperCase();
}

function goToHome() {
    switchScreen(screenStart);
}