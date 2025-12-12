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

    // --- NOVOS LOTES (50 TI + 50 MISTAS) - ADICIONADOS AGORA ---
    // --- TI NOVAS (Fácil) ---
    { question: "O que é 'Hardware'?", options: ["A parte lógica", "A parte física", "O sistema operacional", "A internet"], correct: 1, category: "ti", difficulty: 1, explanation: "Hardware são os componentes físicos, como mouse, teclado e placa-mãe." },
    { question: "O que significa 'CPU'?", options: ["Central Process Unit", "Computer Personal Unit", "Central Power Unit", "Control Panel Utility"], correct: 0, category: "ti", difficulty: 1, explanation: "Unidade Central de Processamento, o cérebro do computador." },
    { question: "Qual é o atalho para 'Desfazer' no Windows?", options: ["Ctrl+C", "Ctrl+V", "Ctrl+Z", "Ctrl+X"], correct: 2, category: "ti", difficulty: 1, explanation: "Ctrl+Z desfaz a última ação realizada." },
    { question: "Qual empresa faz o iPhone?", options: ["Samsung", "Apple", "Xiaomi", "Nokia"], correct: 1, category: "ti", difficulty: 1, explanation: "A Apple lançou o primeiro iPhone em 2007." },
    { question: "O que é um 'Browser'?", options: ["Um antivírus", "Um editor de texto", "Um navegador web", "Um jogo"], correct: 2, category: "ti", difficulty: 1, explanation: "Browser (Navegador) é o programa usado para acessar sites, como Chrome ou Firefox." },
    { question: "O que é 'spam'?", options: ["Vírus perigoso", "E-mail indesejado", "Programa de limpeza", "Tipo de memória"], correct: 1, category: "ti", difficulty: 1, explanation: "Spam refere-se a mensagens eletrônicas não solicitadas enviadas em massa." },
    { question: "Qual a unidade básica de armazenamento?", options: ["Litro", "Byte", "Hertz", "Pixel"], correct: 1, category: "ti", difficulty: 1, explanation: "O Byte (composto por 8 bits) é a unidade fundamental de dados." },
    { question: "Qual destes é um sistema operacional móvel?", options: ["iOS", "Windows 95", "Linux Ubuntu", "MacOS"], correct: 0, category: "ti", difficulty: 1, explanation: "iOS é o sistema operacional exclusivo dos dispositivos móveis da Apple." },
    { question: "Para que serve o 'caps lock'?", options: ["Apagar texto", "Deixar letras maiúsculas", "Tirar print", "Fechar janela"], correct: 1, category: "ti", difficulty: 1, explanation: "Ativa a caixa alta (maiúsculas) no teclado." },
    { question: "O que é um 'Link'?", options: ["Um personagem de jogo", "Uma conexão entre páginas", "Um vírus", "Um tipo de monitor"], correct: 1, category: "ti", difficulty: 1, explanation: "Hiperlink é a referência que leva de uma página web a outra." },
    { question: "Qual cabo conecta o monitor ao PC?", options: ["USB", "HDMI", "P2", "RJ45"], correct: 1, category: "ti", difficulty: 1, explanation: "HDMI é o padrão atual para transmissão de áudio e vídeo." },
    { question: "O que significa 'Download'?", options: ["Enviar arquivo", "Baixar arquivo", "Apagar arquivo", "Editar arquivo"], correct: 1, category: "ti", difficulty: 1, explanation: "Transferir dados de um servidor remoto para o seu computador local." },
    { question: "Quem é o fundador do Facebook?", options: ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Bill Gates"], correct: 2, category: "ti", difficulty: 1, explanation: "Zuckerberg fundou o Facebook em 2004." },
    { question: "Qual tecla tira 'print' da tela?", options: ["Insert", "Print Screen", "Scroll Lock", "Pause Break"], correct: 1, category: "ti", difficulty: 1, explanation: "A tecla Print Screen captura a imagem da tela atual." },
    { question: "O que é um 'Avatar'?", options: ["Um filme", "Representação gráfica do usuário", "Um vírus", "Um tipo de site"], correct: 1, category: "ti", difficulty: 1, explanation: "Imagem ou boneco que representa uma pessoa no mundo digital." },

    // --- TI NOVAS (Médio) ---
    { question: "O que é 'Cloud Computing'?", options: ["Computação em Nuvem", "Computação de Chuva", "Computador Rápido", "Rede Local"], correct: 0, category: "ti", difficulty: 2, explanation: "Uso de servidores remotos para armazenar e processar dados pela internet." },
    { question: "Qual linguagem é conhecida pela cobrinha?", options: ["Java", "C++", "Python", "Ruby"], correct: 2, category: "ti", difficulty: 2, explanation: "O logotipo de Python são duas cobras entrelaçadas." },
    { question: "O que é 'Open Source'?", options: ["Software pago", "Código fonte aberto", "Internet grátis", "Hardware livre"], correct: 1, category: "ti", difficulty: 2, explanation: "Software cujo código pode ser inspecionado e modificado por qualquer pessoa." },
    { question: "O que faz um servidor DNS?", options: ["Hospeda sites", "Traduz domínios em IPs", "Bloqueia vírus", "Acelera vídeos"], correct: 1, category: "ti", difficulty: 2, explanation: "Converte nomes como 'google.com' em endereços numéricos IP." },
    { question: "Qual porta padrão do HTTPS?", options: ["80", "21", "443", "8080"], correct: 2, category: "ti", difficulty: 2, explanation: "Porta 443 é usada para tráfego web seguro." },
    { question: "O que é 'Phishing'?", options: ["Pescaria virtual", "Golpe para roubar dados", "Um jogo de cartas", "Edição de fotos"], correct: 1, category: "ti", difficulty: 2, explanation: "Técnica de enganar usuários para revelar senhas e dados pessoais." },
    { question: "Em programação, o que é um 'Loop'?", options: ["Um erro fatal", "Repetição de código", "Uma variável", "Um comentário"], correct: 1, category: "ti", difficulty: 2, explanation: "Estrutura que repete um bloco de código enquanto uma condição for verdadeira." },
    { question: "O que é 'Linux'?", options: ["Um navegador", "Um Kernel de SO", "Um editor de vídeo", "Uma marca de PC"], correct: 1, category: "ti", difficulty: 2, explanation: "Linux é um kernel de sistema operacional de código aberto." },
    { question: "Qual destes é um banco de dados?", options: ["MySQL", "Excel", "Notepad", "PowerPoint"], correct: 0, category: "ti", difficulty: 2, explanation: "MySQL é um sistema de gerenciamento de banco de dados relacional." },
    { question: "O que significa 'IoT'?", options: ["Internet of Things", "Input of Technology", "Internal of Time", "Index of Text"], correct: 0, category: "ti", difficulty: 2, explanation: "Internet das Coisas: objetos do dia a dia conectados à rede." },
    { question: "O que é um 'Array'?", options: ["Uma flecha", "Uma lista de dados", "Um erro de tela", "Um tipo de mouse"], correct: 1, category: "ti", difficulty: 2, explanation: "Estrutura de dados que armazena uma coleção de elementos." },
    { question: "O que faz o comando 'Ctrl+F'?", options: ["Formata o PC", "Localiza texto", "Fecha janela", "Salva arquivo"], correct: 1, category: "ti", difficulty: 2, explanation: "Abre a ferramenta de busca (Find) na maioria dos programas." },
    { question: "Qual a função da memória RAM?", options: ["Armazenar fotos", "Processar gráficos", "Memória temporária rápida", "Conectar à internet"], correct: 2, category: "ti", difficulty: 2, explanation: "Armazena dados que o processador precisa acessar imediatamente." },
    { question: "O que é 'CSS'?", options: ["Counter Strike Source", "Cascading Style Sheets", "Computer System Security", "Central Server System"], correct: 1, category: "ti", difficulty: 2, explanation: "Linguagem usada para estilizar a apresentação de documentos HTML." },
    { question: "Quem criou a World Wide Web?", options: ["Steve Jobs", "Tim Berners-Lee", "Bill Gates", "Alan Turing"], correct: 1, category: "ti", difficulty: 2, explanation: "Tim Berners-Lee inventou a WWW em 1989." },
    { question: "O que é um 'Algorithm'?", options: ["Um ritmo musical", "Uma sequência de instruções", "Um tipo de gráfico", "Um componente de rede"], correct: 1, category: "ti", difficulty: 2, explanation: "Algoritmo é um conjunto de passos para realizar uma tarefa." },
    { question: "O que é 'Backup'?", options: ["Voltar atrás", "Cópia de segurança", "Fundo de tela", "Parte de trás do PC"], correct: 1, category: "ti", difficulty: 2, explanation: "Cópia de dados para recuperação em caso de perda." },

    // --- TI NOVAS (Difícil) ---
    { question: "O que é 'Big O Notation'?", options: ["Um logo grande", "Análise de complexidade", "Um erro de compilação", "Uma variável global"], correct: 1, category: "ti", difficulty: 3, explanation: "Descreve a performance ou complexidade de um algoritmo." },
    { question: "Qual a diferença de HTTP e HTTPS?", options: ["Velocidade", "Segurança (Criptografia)", "Preço", "Compatibilidade"], correct: 1, category: "ti", difficulty: 3, explanation: "O 'S' significa Secure (Seguro), usando SSL/TLS." },
    { question: "O que é 'Docker'?", options: ["Um porto", "Plataforma de containers", "Um tipo de documento", "Um médico virtual"], correct: 1, category: "ti", difficulty: 3, explanation: "Ferramenta para criar e gerenciar containers de software." },
    { question: "O que significa 'API'?", options: ["Application Programming Interface", "Advanced Program Internet", "Apple Phone Interface", "Automated Protocol Input"], correct: 0, category: "ti", difficulty: 3, explanation: "Interface que permite que dois softwares se comuniquem." },
    { question: "Qual destes é um banco NoSQL?", options: ["PostgreSQL", "Oracle", "MongoDB", "MariaDB"], correct: 2, category: "ti", difficulty: 3, explanation: "MongoDB é um banco orientado a documentos, não relacional." },
    { question: "O que é 'Blockchain'?", options: ["Um jogo de blocos", "Cadeia de registros descentralizada", "Um tipo de corrente", "Bloqueio de sites"], correct: 1, category: "ti", difficulty: 3, explanation: "Tecnologia por trás das criptomoedas, garantindo registros imutáveis." },
    { question: "O que é um ataque 'DDoS'?", options: ["Negação de Serviço Distribuída", "Roubo de Senha Direta", "Download de Dados Ocultos", "Deletar Disco do Sistema"], correct: 0, category: "ti", difficulty: 3, explanation: "Múltiplos acessos simultâneos para derrubar um servidor." },
    { question: "O que é 'Machine Learning'?", options: ["Aprender a consertar máquinas", "Aprendizado de Máquina (IA)", "Tutorial de PC", "Curso de digitação"], correct: 1, category: "ti", difficulty: 3, explanation: "Ramo da IA onde computadores aprendem com dados." },
    { question: "Qual a função do 'Git'?", options: ["Ouvir música", "Controle de versão", "Editar fotos", "Navegar na web"], correct: 1, category: "ti", difficulty: 3, explanation: "Sistema de controle de versão distribuído para rastrear mudanças no código." },
    { question: "O que é 'VPN'?", options: ["Virtual Private Network", "Very Personal Number", "Visual Photo Name", "Virus Protection Now"], correct: 0, category: "ti", difficulty: 3, explanation: "Rede Privada Virtual, cria uma conexão segura sobre uma rede pública." },
    { question: "O que é 'Full Stack'?", options: ["Uma pilha cheia", "Desenvolvedor Front e Back-end", "Um sanduíche", "Memória lotada"], correct: 1, category: "ti", difficulty: 3, explanation: "Profissional que trabalha tanto no lado do cliente quanto do servidor." },
    { question: "O que é 'Agile'?", options: ["Um pássaro", "Metodologia de desenvolvimento", "Um software de ginástica", "Um tipo de geladeira"], correct: 1, category: "ti", difficulty: 3, explanation: "Abordagem iterativa para gerenciamento de projetos e desenvolvimento de software." },
    { question: "Qual destes é um Framework JS?", options: ["Django", "React", "Laravel", "Spring"], correct: 1, category: "ti", difficulty: 3, explanation: "React é uma biblioteca (frequentemente chamada de framework) JavaScript." },
    { question: "O que é 'Latency'?", options: ["Um tipo de café", "Atraso na rede", "Lateral do computador", "Luz da tela"], correct: 1, category: "ti", difficulty: 3, explanation: "Tempo que um pacote de dados leva para ir de um ponto a outro." },
    { question: "O que significa 'SSD'?", options: ["Super Speed Disk", "Solid State Drive", "System Security Data", "Screen Saver Display"], correct: 1, category: "ti", difficulty: 3, explanation: "Unidade de Estado Sólido, mais rápida que HDs tradicionais." },
    { question: "O que é 'Bug Bounty'?", options: ["Um chocolate", "Caça a recompensas por bugs", "Um jogo de tiro", "Um vírus novo"], correct: 1, category: "ti", difficulty: 3, explanation: "Programas que pagam hackers éticos para encontrar falhas de segurança." },
    { question: "O que é 'Recursive Function'?", options: ["Função que chama a si mesma", "Função quebrada", "Função de relógio", "Função reversa"], correct: 0, category: "ti", difficulty: 3, explanation: "Conceito onde uma função executa chamando a si própria." },
    { question: "Qual a base do sistema Binário?", options: ["10", "2", "16", "8"], correct: 1, category: "ti", difficulty: 3, explanation: "O sistema binário usa apenas dois dígitos: 0 e 1." },

    // --- FAMÍLIA/GERAL NOVAS (Fácil) ---
    { question: "Quantos dias tem uma semana?", options: ["5", "6", "7", "8"], correct: 2, category: "geral", difficulty: 1, explanation: "Segunda a Domingo, são 7 dias." },
    { question: "Qual cor é a mistura de azul e amarelo?", options: ["Roxo", "Verde", "Laranja", "Preto"], correct: 1, category: "arte", difficulty: 1, explanation: "Azul e Amarelo formam Verde." },
    { question: "Onde o sol se põe?", options: ["Leste", "Oeste", "Norte", "Sul"], correct: 1, category: "geografia", difficulty: 1, explanation: "O sol nasce no Leste e se põe no Oeste." },
    { question: "Qual animal tem tromba?", options: ["Girafa", "Elefante", "Leão", "Macaco"], correct: 1, category: "ciencias", difficulty: 1, explanation: "O elefante é famoso por sua tromba." },
    { question: "Quantas rodas tem um triciclo?", options: ["2", "3", "4", "1"], correct: 1, category: "matematica", difficulty: 1, explanation: "Tri-ciclo significa três rodas." },
    { question: "O que a vaca produz?", options: ["Refrigerante", "Leite", "Suco", "Mel"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Vacas produzem leite." },
    { question: "Qual a cor do céu limpo de dia?", options: ["Verde", "Azul", "Vermelho", "Roxo"], correct: 1, category: "geral", difficulty: 1, explanation: "Devido à dispersão da luz, vemos o céu azul." },
    { question: "O que usamos para cortar papel?", options: ["Colher", "Tesoura", "Martelo", "Garfo"], correct: 1, category: "geral", difficulty: 1, explanation: "A tesoura é a ferramenta adequada." },
    { question: "Qual mês vem depois de Janeiro?", options: ["Março", "Abril", "Fevereiro", "Dezembro"], correct: 2, category: "geral", difficulty: 1, explanation: "A ordem é Janeiro, Fevereiro..." },
    { question: "Quem é o parceiro do Mickey?", options: ["Pato Donald", "Pateta", "Pluto", "Minnie"], correct: 3, category: "cultura", difficulty: 1, explanation: "Minnie Mouse é a namorada do Mickey." },
    { question: "O que o peixe faz?", options: ["Voa", "Nada", "Late", "Corre"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Peixes nadam." },
    { question: "Qual o sabor principal do limão?", options: ["Doce", "Azedo", "Salgado", "Amargo"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Limões são ácidos e azedos." },
    { question: "Quantos dedos temos em uma mão?", options: ["4", "5", "6", "10"], correct: 1, category: "ciencias", difficulty: 1, explanation: "Temos 5 dedos em cada mão." },
    { question: "O que usamos para ver as horas?", options: ["Bússola", "Relógio", "Termômetro", "Régua"], correct: 1, category: "geral", difficulty: 1, explanation: "Relógios marcam o tempo." },
    { question: "Qual é a capital do Brasil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2, category: "geografia", difficulty: 1, explanation: "Brasília é a capital federal." },

    // --- FAMÍLIA/GERAL NOVAS (Médio) ---
    { question: "Quantos continentes existem?", options: ["4", "5", "6", "7"], correct: 2, category: "geografia", difficulty: 2, explanation: "América, Europa, Ásia, África, Oceania, Antártida (modelo de 6)." },
    { question: "Quem pintou a Mona Lisa?", options: ["Picasso", "Da Vinci", "Van Gogh", "Michelangelo"], correct: 1, category: "arte", difficulty: 2, explanation: "Leonardo da Vinci." },
    { question: "Qual o maior país do mundo?", options: ["China", "EUA", "Brasil", "Rússia"], correct: 3, category: "geografia", difficulty: 2, explanation: "A Rússia é o maior em extensão territorial." },
    { question: "Qual a fórmula da água?", options: ["CO2", "H2O", "O2", "NaCl"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Dois hidrogênios e um oxigênio." },
    { question: "Em que ano o homem pisou na lua?", options: ["1950", "1969", "1980", "2000"], correct: 1, category: "historia", difficulty: 2, explanation: "Neil Armstrong pisou na lua em 1969." },
    { question: "Quantos lados tem um triângulo?", options: ["2", "3", "4", "5"], correct: 1, category: "matematica", difficulty: 2, explanation: "Triângulos têm 3 lados." },
    { question: "Qual a moeda do Japão?", options: ["Dólar", "Euro", "Iene", "Real"], correct: 2, category: "geral", difficulty: 2, explanation: "Iene é a moeda japonesa." },
    { question: "Quem descobriu o Brasil?", options: ["Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Dom Pedro I"], correct: 1, category: "historia", difficulty: 2, explanation: "Cabral chegou em 1500." },
    { question: "Qual o animal mais rápido?", options: ["Leão", "Guepardo", "Cavalo", "Águia"], correct: 1, category: "ciencias", difficulty: 2, explanation: "O Guepardo (Cheetah) é o mais rápido em terra." },
    { question: "O que é um 'bissexto'?", options: ["Ano com 366 dias", "Ano com 364 dias", "Mês de 40 dias", "Feriado"], correct: 0, category: "geral", difficulty: 2, explanation: "Acontece a cada 4 anos, fevereiro tem 29 dias." },
    { question: "Qual a capital da França?", options: ["Londres", "Berlim", "Paris", "Roma"], correct: 2, category: "geografia", difficulty: 2, explanation: "Paris é a capital francesa." },
    { question: "Quantos jogadores num time de vôlei?", options: ["5", "6", "11", "7"], correct: 1, category: "esportes", difficulty: 2, explanation: "6 jogadores em quadra." },
    { question: "Quem é o Rei do Futebol?", options: ["Neymar", "Messi", "Pelé", "Maradona"], correct: 2, category: "esportes", difficulty: 2, explanation: "Edson Arantes do Nascimento, o Pelé." },
    { question: "Qual o planeta vermelho?", options: ["Vênus", "Marte", "Júpiter", "Saturno"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Marte é conhecido como planeta vermelho devido ao óxido de ferro." },
    { question: "O que é fotossíntese?", options: ["Tirar foto", "Planta produzir energia", "Tipo de luz", "Impressão"], correct: 1, category: "ciencias", difficulty: 2, explanation: "Processo onde plantas usam luz solar para criar alimento." },
    { question: "Qual o livro mais vendido do mundo?", options: ["Dom Quixote", "Bíblia", "Harry Potter", "O Senhor dos Anéis"], correct: 1, category: "literatura", difficulty: 2, explanation: "A Bíblia é o livro mais distribuído da história." },
    { question: "Quem escreveu Harry Potter?", options: ["J.K. Rowling", "Tolkien", "George Martin", "Stephen King"], correct: 0, category: "literatura", difficulty: 2, explanation: "J.K. Rowling criou o mundo bruxo." },

    // --- FAMÍLIA/GERAL NOVAS (Difícil) ---
    { question: "Qual a capital da Austrália?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2, category: "geografia", difficulty: 3, explanation: "Canberra, não Sydney." },
    { question: "Quantos elementos na tabela periódica?", options: ["100", "118", "150", "92"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Atualmente são 118 elementos confirmados." },
    { question: "Quem compôs a 9ª Sinfonia?", options: ["Mozart", "Bach", "Beethoven", "Chopin"], correct: 2, category: "musica", difficulty: 3, explanation: "Ludwig van Beethoven." },
    { question: "Qual a montanha mais alta do mundo?", options: ["K2", "Everest", "Aconcágua", "Makalu"], correct: 1, category: "geografia", difficulty: 3, explanation: "Monte Everest, com 8.848m." },
    { question: "Em que ano começou a 2ª Guerra Mundial?", options: ["1914", "1939", "1945", "1918"], correct: 1, category: "historia", difficulty: 3, explanation: "Começou em 1939 com a invasão da Polônia." },
    { question: "Qual o símbolo químico do Ouro?", options: ["Ag", "Au", "Fe", "Cu"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Au, do latim Aurum." },
    { question: "Quem pintou 'A Noite Estrelada'?", options: ["Van Gogh", "Monet", "Dali", "Picasso"], correct: 0, category: "arte", difficulty: 3, explanation: "Vincent Van Gogh." },
    { question: "Qual o menor país do mundo?", options: ["Mônaco", "Vaticano", "Malta", "San Marino"], correct: 1, category: "geografia", difficulty: 3, explanation: "O Vaticano fica dentro de Roma e é o menor." },
    { question: "Qual a velocidade da luz?", options: ["300.000 km/s", "150.000 km/s", "1.000 km/s", "Som"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Aproximadamente 300.000 km/s no vácuo." },
    { question: "Quem foi o primeiro presidente dos EUA?", options: ["Lincoln", "Washington", "Jefferson", "Kennedy"], correct: 1, category: "historia", difficulty: 3, explanation: "George Washington." },
    { question: "Qual é o rio mais longo do mundo?", options: ["Amazonas", "Nilo", "Yangtze", "Mississipi"], correct: 0, category: "geografia", difficulty: 3, explanation: "O Amazonas é considerado o mais longo e volumoso." },
    { question: "Quantos corações tem um polvo?", options: ["1", "2", "3", "4"], correct: 2, category: "ciencias", difficulty: 3, explanation: "Três corações: dois para as brânquias, um para o corpo." },
    { question: "Quem escreveu 'Dom Casmurro'?", options: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Clarice Lispector"], correct: 0, category: "literatura", difficulty: 3, explanation: "Machado de Assis, o Bruxo do Cosme Velho." },
    { question: "Qual o metal líquido à temperatura ambiente?", options: ["Ferro", "Mercúrio", "Chumbo", "Alumínio"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Mercúrio (Hg)." },
    { question: "Onde fica a cidade de Petra?", options: ["Egito", "Jordânia", "Turquia", "Grécia"], correct: 1, category: "geografia", difficulty: 3, explanation: "Petra fica na Jordânia." },
    { question: "Qual a guerra dos 100 anos?", options: ["França x Inglaterra", "EUA x Inglaterra", "Roma x Cartago", "Espanha x Portugal"], correct: 0, category: "historia", difficulty: 3, explanation: "Conflito entre França e Inglaterra (durou 116 anos)." },
    { question: "Quem descobriu a Penicilina?", options: ["Fleming", "Pasteur", "Darwin", "Newton"], correct: 0, category: "ciencias", difficulty: 3, explanation: "Alexander Fleming, em 1928." },
    { question: "Qual o planeta mais quente?", options: ["Mercúrio", "Vênus", "Marte", "Júpiter"], correct: 1, category: "ciencias", difficulty: 3, explanation: "Vênus, devido ao efeito estufa." }
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
const screenAbout = document.getElementById('about-screen');
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
    // O .sort(() => 0.5 - Math.random()) garante a aleatoriedade a cada novo jogo
    const easy = pool.filter(q => q.difficulty === 1).sort(() => 0.5 - Math.random());
    const medium = pool.filter(q => q.difficulty === 2).sort(() => 0.5 - Math.random());
    const hard = pool.filter(q => q.difficulty === 3).sort(() => 0.5 - Math.random());

    let selectedQuestions = [];
    
    // Tenta pegar 5 de cada
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

function showAbout() {
    // Calcular estatísticas dinamicamente
    const total = allQuestions.length;
    const techCount = allQuestions.filter(q => q.category === 'ti').length;
    const familyCount = total - techCount;

    document.getElementById('total-questions-count').textContent = total;
    document.getElementById('tech-questions-count').textContent = techCount;
    document.getElementById('family-questions-count').textContent = familyCount;

    switchScreen(screenAbout);
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