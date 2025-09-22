document.addEventListener('DOMContentLoaded', () => {
    // Objeto para guardar os dados das Heranças de Suragel
    const SURAGEL_HERANCAS = {
        'Al-Gazara': { description: "<b>Herança de Al-Gazara.</b> Devido à presença do puro caos primordial de Nimb em seu sangue, você recebe +1 em um atributo aleatório." },
        'Arbória': { description: "<b>Herança de Arbória.</b> Como parte do Grande Ciclo de Allihanna, você recebe a habilidade Forma Selvagem para uma única forma, escolhida entre Ágil, Sorrateira e Veloz. Caso adquira essa habilidade novamente, o custo dessa forma diminui em –1 PM." },
        'Chacina': { description: "<b>Herança de Chacina.</b> Pela ferocidade de Megalokk, você recebe a habilidade Forma Selvagem para uma única forma, escolhida entre Feroz e Resistente. Caso adquira essa habilidade novamente, o custo dessa forma diminui em –1 PM." },
        'Deathok': { description: "<b>Herança de Deathok.</b> A mudança constante faz parte de sua alma. Você recebe +2 em duas perícias a sua escolha. A cada manhã, você pode trocar essas perícias." },
        'Drashantyr': { description: "<b>Herança de Drashantyr.</b> Graças ao poder elemental dos dragões, você recebe +1 PM e redução de ácido, eletricidade, fogo, frio, luz e trevas 5." },
        'Kundali': { description: "<b>Herança de Kundali.</b> Pelo espírito protetor, mas também opressor, de Tauron, você recebe +2 na Defesa e em testes de manobras de combate." },
        'Magika': { description: "<b>Herança de Magika.</b> Você aprende e pode lançar uma magia arcana de 1º círculo a sua escolha (atributo-chave Inteligência ou Carisma, a sua escolha). Caso aprenda novamente essa magia, seu custo diminui em –1 PM." },
        'Nivenciuén': { description: "<b>Herança de Nivenciuén.</b> Mesmo que o Reino de Glórienn tenha sofrido um destino terrível, a antiga soberania élfica ainda permeia seu sangue. Você recebe +2 em Misticismo e uma habilidade racial dos elfos entre Graça de Glórienn e Sangue Mágico." },
        'Odisseia': { description: "<b>Herança de Odisseia.</b> Sua alma tocada por Valkaria está sempre preparada para problemas! Você recebe +2 em Iniciativa e Percepção, e sua capacidade de carga aumenta em 2 espaços." },
        'Ordine': { description: "<b>Herança de Ordine.</b> As forças da lei e ordem de Khalmyr afetam suas ações. Você recebe +2 em Intuição, em Investigação e em testes sem rolagens de dados (ao escolher 0, 10 ou 20)." },
        'Pelágia': { description: "<b>Herança de Pelágia.</b> Mesmo nas situações mais desesperadoras, seu espírito se mantém plácido e imperturbável como o próprio Oceano. Escolha três perícias. Com elas, você pode gastar 1 PM para escolher 10 em qualquer situação, exceto testes de ataque." },
        'Pyra': { description: "<b>Herança de Pyra.</b> Em algum lugar dentro de você, sempre existe uma segunda chance. Quando faz um teste de resistência ou um teste de atributo para remover uma condição, você pode gastar 2 PM para rolá-lo novamente." },
        'Ramknal': { description: "<b>Herança de Ramknal.</b> Escolha duas perícias entre Acrobacia, Enganação, Furtividade, Jogatina e Ladinagem. Quando faz um teste da perícia escolhida, você pode gastar 2 PM para receber +5 nesse teste." },
        'Serena': { description: "<b>Herança de Serena.</b> Pela proteção de Marah, você recebe +2 na Defesa e em testes de resistência contra oponentes aos quais não tenha causado dano, perda de PV ou condições (exceto enfeitiçado, fascinado e pasmo) nessa cena." },
        'Skerry': { description: "<b>Herança de Skerry.</b> Você carrega a força de criatividade. Quando faz um teste de Ofício, pode gastar 1 PM para ser treinado na perícia em questão ou para rolar dois dados e usar o melhor resultado." },
        'Solaris': { description: "<b>Herança de Solaris.</b> Pelo poder de Azgher, durante o dia você recebe +1 em todos os testes de perícia. Se estiver diretamente sob a luz do sol, esse bônus aumenta para +2." },
        'Sombria': { description: "<b>Herança de Sombria.</b> Pelo poder de Tenebra, durante a noite você recebe +1 em todos os testes de perícia. Se estiver num local sem nenhuma iluminação artificial (como tochas ou magia), esse bônus aumenta para +2." },
        'Sora': { description: "<b>Herança de Sora.</b> Os honrados espíritos ancestrais de Lin-Wu abençoam sua perseverança. Você recebe +2 em Nobreza, Vontade e em testes de perícia estendidos (incluindo contra perigos complexos)." },
        'Terápolis': { description: "<b>Herança de Terápolis.</b> Você recebe +2 em Intuição e Vontade, e pode fazer testes dessas perícias contra ilusões automaticamente, sem precisar interagir com elas." },
        'Venomia': { description: "<b>Herança de Venomia.</b> Ser escorregadio como Sszzaas faz parte de sua natureza, mesmo que você não goste disso. Você recebe +2 em Enganação e em testes para evitar manobras de combate e efeitos de movimento." },
        'Vitalia': { description: "<b>Herança de Vitalia.</b> A força da vida corre intensa em seu sangue. Você recebe +5 PV por patamar e sua recuperação de pontos de vida com descanso aumenta em uma categoria." },
        'Werra': { description: "<b>Herança de Werra.</b> Você possui um conhecimento intuitivo para armas. Você recebe +1 em testes de ataque com armas e proficiência com armas marciais ou com duas armas exóticas." },
    };

    const RACE_DATA = {
        'humano': {
            name: 'Humano/Humana',
            type: 'base',
            attributes: {},
            bonusMessage: "+1 em Três Atributos Diferentes<br><span style='display: block;'>Versátil</span>",
            isChoice: true,
            choiceCount: 3,
            maxChoicePerAttribute: 1,
            imageUrl: "https://64.media.tumblr.com/0a01333736d6f587523db771e1ae9a9a/79bc12ca0c1d927b-f2/s540x810/7d7d4d2827c06a1728cedc4a16fe9ba4d7f84888.gif"
        },
        'elfo': {
            name: 'Elfo/Elfa',
            type: 'base',
            attributes: { "inteligencia": 2, "destreza": 1, "constituicao": -1 },
            bonusMessage: "Inteligência +2, Destreza +1, Constituição -1<br>Graça de Glórienn<br>Sangue Mágico<br>Sentidos Élficos",
            isChoice: false,
            imageUrl: "https://gifdb.com/images/high/lord-of-the-rings-legolas-fight-83hz9so0rfuayi6h.gif"
        },
        'dwarf': {
            name: 'Anão/Anã',
            type: 'base',
            attributes: { "constituicao": 2, "sabedoria": 1, "destreza": -1 },
            bonusMessage: "Constituição +2, Sabedoria +1, Destreza -1<br>Conhecimento das Rochas<br>Devagar e Sempre<br>Duro como Pedra<br>Tradição de Heredrimm",
            isChoice: false,
            imageUrl: "https://64.media.tumblr.com/f08b1803103b529b258e210d153fce57/tumblr_myfubf9Z6Z1ru8yv8o6_250.gif"
        },
        'dahllan': {
            name: 'Dahllan',
            type: 'base',
            attributes: { "sabedoria": 2, "destreza": 1, "inteligencia": -1 },
            bonusMessage: "Sabedoria +2, Destreza +1, Inteligência –1<br>Amiga das Plantas<br>Armadura de Allihanna<br>Empatia Selvagem",
            isChoice: false,
            imageUrl: "https://64.media.tumblr.com/250a3660431e450a2d1bf1006c6a9f22/67343f6f7b018235-b6/s500x750/738b8d3406931195e9fe8178a7079e2303c3efca.gif"
        },
        'goblin': {
            name: 'Goblin',
            type: 'base',
            attributes: { "destreza": 2, "inteligencia": 1, "carisma": -1 },
            bonusMessage: "Destreza +2, Inteligência +1, Carisma –1<br>Engenhoso<br>Espelunqueiro<br>Peste Esguia<br>Rato das Ruas",
            isChoice: false,
            imageUrl: "https://i.redd.it/37rebhpgjag91.gif"
        },
        'lefou': {
            name: 'Lefou',
            type: 'base',
            attributes: { "carisma": -1 },
            bonusMessage: "+1 em três atributos (exceto Carisma)<br>Carisma -1<br>Cria da Tormenta<br>Deformidade",
            isChoice: true,
            choiceCount: 3,
            maxChoicePerAttribute: 1,
            lockedChoiceAttributes: ['carisma'],
            imageUrl: "https://i.pinimg.com/originals/97/65/e7/9765e7da233fa1a343c819c988c99bec.gif"
        },
        'minotaur': {
            name: 'Minotauro',
            type: 'base',
            attributes: { "forca": 2, "constituicao": 1, "sabedoria": -1 },
            bonusMessage: "Força +2, Constituição +1, Sabedoria –1<br>Chifres<br>Couro Rígido<br>Faro<br>Medo de Altura",
            isChoice: false,
            imageUrl: "https://24.media.tumblr.com/tumblr_mdb7ptBRgr1rg7hodo1_500.gif"
        },
        'qareen': {
            name: 'Qareen',
            type: 'base',
            attributes: { "carisma": 2, "inteligencia": 1, "sabedoria": -1 },
            bonusMessage: "Carisma +2, Inteligência +1, Sabedoria –1<br>Desejos<br>Resistência Elemental<br>Tatuagem Mística",
            isChoice: false,
            imageUrl: "https://giffiles.alphacoders.com/108/108732.gif"
        },
        'golem': {
            name: 'Golem',
            type: 'base',
            imageUrl: "https://designyoukai.com/wp-content/uploads/2024/02/golem.gif",
            imageUrls: { 'pedra': "https://clan.fastly.steamstatic.com/images/35898811/58ac6a7714698e8ac06774676eb176fde0d1d6ff.gif", 'espelho': "https://i.pinimg.com/originals/1a/00/23/1a0023bdc25ae9d95eab99ddb2855d05.gif", 'mashin': "https://pa1.aminoapps.com/7451/9081304f4f7594669ed30ab2525b9d584e11295ar1-480-383_hq.gif", 'barro': "https://64.media.tumblr.com/80000ca2a312c65036ac51b870d42bb1/tumblr_pgug05Drhh1t77wz1_250.gif", 'ferro': "https://pa1.aminoapps.com/6627/aa08675bb57337ae1b1e037514ffef77249ced96_hq.gif", 'carne': "https://media1.tenor.com/m/1o2Q-Xm8BXcAAAAd/cindry-onepiece-cindry-smile.gif", 'sucata': "https://pa1.aminoapps.com/7140/b33c02fd2fb4f71922893b692d43bc4b20588ab0r1-270-170_hq.gif", 'dourado': "https://i.makeagif.com/media/4-07-2022/5_ya8P.gif", 'bronze': "https://64.media.tumblr.com/01d05bc3d3a42b664a90eb306f7dc1d4/8c531fc53407c5fa-3e/s540x810/9b373119f37ce1d811b0f197657afd8dc9ed8b7a.gif", "gelo": "https://i.imgflip.com/a09k1r.gif", },
            createCustomUi: (container) => {
                container.innerHTML = `
                <div><label for="golem-chassi">Chassi:</label><select id="golem-chassi"><option value="">Selecione</option><option value="mashin">Mashin</option><option value="barro">Barro</option><option value="bronze">Bronze</option><option value="carne">Carne</option><option value="espelho">Espelhos</option><option value="ferro">Ferro</option><option value="gelo">Gelo Eterno</option><option value="pedra">Pedra</option><option value="sucata">Sucata</option><option value="dourado">Inevitavel</option></select></div>
                <div><label for="golem-fonte">Fonte de Energia:</label><select id="golem-fonte"><option value="">Selecione</option><option value="Alquimica">Alquímica</option><option value="Elemental">Elemental</option><option value="Sagrada">Sagrada</option><option value="Vapor">Vapor</option></select></div>
                <div id="golem-elemental-options" class="hidden"><label for="golem-elemental-type">Tipo Elemental:</label><select id="golem-elemental-type"><option value="">Selecione</option><option value="Fogo">Fogo</option><option value="eletricidade">Ar (eletricidade)</option><option value="Frio">Água (frio)</option><option value="acido">Terra (ácido)</option></select></div>
                <div><label for="golem-tamanho">Tamanho:</label><select id="golem-tamanho"><option value="">Selecione</option><option value="Pequeno">Pequeno</option><option value="Medio">Médio</option><option value="Grande">Grande</option></select></div>
            `;
                container.querySelectorAll('select').forEach(s => s.addEventListener('change', updateGolemAttributes));
                document.getElementById('golem-fonte').addEventListener('change', (e) => {
                    document.getElementById('golem-elemental-options').classList.toggle('hidden', e.target.value !== 'Elemental');
                });
            },
            calculateAttributes: () => {
                const chassi = document.getElementById('golem-chassi')?.value;
                const tamanhoSelect = document.getElementById('golem-tamanho');
                const table = document.getElementById('attribute-table');
                const imageUrl = RACE_DATA.golem.imageUrls[chassi] || RACE_DATA.golem.imageUrl;
                table.style.background = `url('${imageUrl}') no-repeat center center`;
                table.style.backgroundSize = "75% auto";
                tamanhoSelect.disabled = false;
                if (chassi === 'mashin') {
                    tamanhoSelect.value = 'Medio';
                    tamanhoSelect.disabled = true;
                }
                const tamanho = tamanhoSelect.value;
                const attrs = { forca: 1, destreza: 0, constituicao: 0, inteligencia: 0, sabedoria: 0, carisma: -1 };
                let choiceCount = 0;
                let maxPerAttr = 1;
                let chassiBonusMessage = ''; // Variável para a descrição do bônus

                switch (chassi) {
                    case 'ferro':
                        attrs.forca += 1; attrs.constituicao += 1;
                        chassiBonusMessage = "Força +1, Constituição +1";
                        break;
                    case 'carne':
                        attrs.forca += 1; attrs.constituicao += 2; attrs.carisma -= 1;
                        chassiBonusMessage = "Força +1, Constituição +2, Carisma -1";
                        break;
                    case 'barro': case 'gelo': case 'pedra':
                        attrs.constituicao += 2;
                        chassiBonusMessage = "Constituição +2";
                        break;
                    case 'espelho':
                        attrs.carisma += 2; attrs.sabedoria += 1; attrs.constituicao -= 1;
                        chassiBonusMessage = "Carisma +2, Sabedoria +1, Constituição -1";
                        break;
                    case 'sucata':
                        attrs.forca += 1; attrs.constituicao += 1;
                        chassiBonusMessage = "Força +1, Constituição +1";
                        break;
                    case 'dourado':
                        attrs.forca += 1; attrs.carisma += 2;
                        chassiBonusMessage = "Força +1, Carisma +2";
                        break;
                    case 'bronze': case 'mashin':
                        choiceCount = 2;
                        chassiBonusMessage = `+1 em ${choiceCount} atributos à sua escolha.`;
                        break;
                }

                if (tamanho === 'Pequeno') attrs.destreza += 1;
                if (tamanho === 'Grande') attrs.destreza -= 1;

                const fonte = document.getElementById('golem-fonte')?.value || '';
                const tipoElemental = document.getElementById('golem-elemental-type')?.value || '';

                // Monta a mensagem de bônus dinamicamente
                let finalMessage = `<b>Golem:</b> Força +1, Carisma -1<br>`;
                if (chassi && chassiBonusMessage) {
                    finalMessage += `<b>Chassi (${chassi.charAt(0).toUpperCase() + chassi.slice(1)}):</b> ${chassiBonusMessage}<br>`;
                }
                if (tamanho) {
                    finalMessage += `<b>Tamanho (${tamanho}):</b> ${tamanho === 'Pequeno' ? 'Destreza +1' : (tamanho === 'Grande' ? 'Destreza -1' : '')}<br>`;
                }
                if (fonte) {
                    finalMessage += `<b>Fonte de Energia:</b> ${fonte}${tipoElemental ? ` (${tipoElemental})` : ''}<br>`;
                }

                document.getElementById('bonusMessage').innerHTML = finalMessage;

                return { baseAttributes: attrs, isChoice: choiceCount > 0, choiceCount: choiceCount, maxChoicePerAttribute: maxPerAttr };
            }
        },
        'hynne': {
            name: 'Hynne',
            type: 'base',
            attributes: { "destreza": 2, "carisma": 1, "forca": -1 },
            bonusMessage: "Destreza +2, Carisma +1, Força –1<br>Arremessador<br>Pequeno e Rechonchudo<br>Sorte Salvadora",
            isChoice: false,
            imageUrl: "https://media.tenor.com/PTIS0o34PD8AAAAM/fuck-you-the-hobbit.gif"
        },
        'kliren': {
            name: 'Kliren',
            type: 'base',
            attributes: { "inteligencia": 2, "carisma": 1, "forca": -1 },
            bonusMessage: "Inteligência +2, Carisma +1, Força –1<br>Híbrido<br>Engenhosidade<br>Ossos Frágeis<br>Vanguardista",
            isChoice: false,
            imageUrl: "https://static.wikia.nocookie.net/powerlisting/images/e/ec/510.gif"
        },
        'medusa': {
            name: 'Medusa',
            type: 'base',
            attributes: { "destreza": 2, "carisma": 1 },
            bonusMessage: "Destreza +2, Carisma +1<br>Cria de Megalokk<br>Natureza Venenosa<br>Olhar Atordoante",
            isChoice: false,
            imageUrl: "https://i0.wp.com/doublesama.com/wp-content/uploads/2018/04/Nadeko-Medusa.gif"
        },
        'osteon': {
            name: 'Osteon',
            type: 'base',
            attributes: { "constituicao": -1 },
            bonusMessage: "+1 em Três Atributos (exceto Constituição)<br>Constituição -1<br>Armadura Óssea<br>Memória Póstuma<br>Natureza Esquelética<br>Preço da Não Vida",
            isChoice: true,
            choiceCount: 3,
            maxChoicePerAttribute: 1,
            lockedChoiceAttributes: ['constituicao'],
            imageUrl: "https://i.pinimg.com/originals/b4/31/39/b431396f88202e330b79ce23fe951bcd.gif"
        },
        'siren': {
            name: 'Sereia/Tritão',
            type: 'base',
            attributes: {},
            bonusMessage: "+1 em Três Atributos Diferentes<br>Canção dos Mares<br>Mestre do Tridente<br>Transformação Anfíbia",
            isChoice: true,
            choiceCount: 3,
            maxChoicePerAttribute: 1,
            imageUrl: "https://i.pinimg.com/originals/ee/3e/b1/ee3eb1c7e56d7c6250d11ae048c45ad2.gif"
        },
        'silfide': {
            name: 'Sílfide',
            type: 'base',
            attributes: { "carisma": 2, "destreza": 1, "forca": -2 },
            bonusMessage: "Carisma +2, Destreza +1, Força –2<br>Asas de Borboleta<br>Espírito da Natureza<br>Magia das Fadas",
            isChoice: false,
            imageUrl: "https://media.tenor.com/0l34BiWLbNIAAAAM/sword-art-online-sao.gif"
        },
        'trog': {
            name: 'Trog',
            type: 'base',
            attributes: { "constituicao": 2, "forca": 1, "inteligencia": -1 },
            bonusMessage: "Constituição +2, Força +1, Inteligência –1<br>Mau Cheiro<br>Mordida<br>Reptiliano<br>Sangue Frio",
            isChoice: false,
            imageUrl: "https://i.pinimg.com/originals/c3/30/72/c330723a6d99c001622f20453df59ea2.gif"
        },
        'aggelus': {
            name: 'Aggelus (Suragel)',
            type: 'base',
            attributes: { "sabedoria": 2, "carisma": 1 },
            bonusMessage: "Sabedoria +2, Carisma +1<br>Herança Divina<br>Luz Sagrada",
            isChoice: false,
            imageUrl: "https://i.pinimg.com/originals/69/45/4c/69454c70ede01eaf8a8356b0c4c5b817.gif",
            createCustomUi: createSuragelUi,
        },
        'sulfure': {
            name: 'Sulfure (Suragel)',
            type: 'base',
            attributes: { "destreza": 2, "inteligencia": 1 },
            bonusMessage: "Destreza +2, Inteligência +1<br>Herança Divina<br>Sombras Profanas",
            isChoice: false,
            imageUrl: "https://i.redd.it/082zk22jrjz91.gif",
            createCustomUi: createSuragelUi,
        },
        'dwarf_ghanor': {
            name: 'Anão/Anã (Ghanor)',
            type: 'ghanor',
            attributes: { "constituicao": 2, "inteligencia": 1, "carisma": -1 },
            bonusMessage: "Constituição +2, Inteligência +1, Carisma -1<br>Busca pela Perfeição<br>Devagar e Sempre<br>Moldado nas Rochas",
            isChoice: false,
            imageUrl: "https://i.redd.it/en44m0mkuxtb1.gif"
        },
        'elf_ghanor': {
            name: 'Elfo/Elfa (Ghanor)',
            type: 'ghanor',
            attributes: { "sabedoria": 2, "destreza": 1, "constituicao": -1 },
            bonusMessage: "Sabedoria +2, Destreza +1, Constituição –1<br>Armas da Floresta<br>Magia Antiga<br>Passo Leve<br>Sentidos Élficos<br>Sentimentos Conflitantes",
            isChoice: false,
            imageUrl: "https://i.pinimg.com/originals/af/00/76/af007620b24912908e302cc539153849.gif"
        },
        'giant_ghanor': {
            name: 'Gigante (Ghanor)',
            type: 'ghanor',
            attributes: { "forca": 3, "constituicao": 2, "inteligencia": -2, "sabedoria": -1, "carisma": -1 },
            bonusMessage: "Força +3, Constituição +2, Inteligência –2, Sabedoria –1, Carisma –1<br>Grandão<br>Primitivo",
            isChoice: false,
            imageUrl: "https://i.gifer.com/embedded/download/DYL0.gif"
        },
        'hobgoblin_ghanor': {
            name: 'Hobgoblin (Ghanor)',
            type: 'ghanor',
            attributes: { "forca": 1, "destreza": 1, "constituicao": 1, "carisma": -1 },
            bonusMessage: "Força +1, Destreza +1, Constituição +1, Carisma –1<br>Couro Duro<br>Dependência de Liderança<br>Militarista<br>Natureza Bestial",
            isChoice: false,
            imageUrl: "https://i.makeagif.com/media/2-06-2019/7hLGy0.gif"
        },
        'halfelf_ghanor': {
            name: 'Meio-Elfo (Ghanor)',
            type: 'ghanor',
            attributes: { "carisma": 2 },
            bonusMessage: "Carisma +2, +1 em outro atributo<br>Longa Infância<br>Sentidos Ancestrais",
            isChoice: true,
            choiceCount: 1,
            maxChoicePerAttribute: 1,
            lockedChoiceAttributes: ['carisma'],
            imageUrl: "https://i.pinimg.com/originals/84/88/ae/8488aec8f373c20370f1c47fd5917ae1.gif"
        },
        'aberrant': {
            name: 'Aberrante (Ghanor)',
            type: 'ghanor',
            imageUrl: 'https://media.tenor.com/3IrxSu1aWscAAAAM/resident-evil-resident-evil-2.gif',
            createCustomUi: (container) => {
                const mutations = [
                    { id: 'mutacaoAscetico', name: 'Ascético' }, { id: 'mutacaoMagiaBizarra', name: 'Magia Bizarra' },
                    { id: 'mutacaoCouroRochoso', name: 'Couro Rochoso' }, { id: 'mutacaoMetamorfose', name: 'Metamorfose' },
                    { id: 'mutacaoMordida', name: 'Mordida' }, { id: 'mutacaoMusculoso', name: 'Musculoso' },
                    { id: 'mutacaoResistente', name: 'Resistente' }, { id: 'mutacaoSentidosAgucados', name: 'Sentidos Aguçados' },
                    { id: 'mutacaoVeloz', name: 'Veloz' }, { id: 'mutacaoVenenoso', name: 'Venenoso' }
                ];
                let mutationHtml = '<h6>Mutações (Escolha até 4):</h6>';
                mutations.forEach(m => {
                    mutationHtml += `<div><input type="checkbox" id="${m.id}" name="mutation" value="${m.id}"><label for="${m.id}">${m.name}</label></div>`;
                });
                container.innerHTML = mutationHtml;
                container.querySelectorAll('input[name="mutation"]').forEach(checkbox => {
                    checkbox.addEventListener('change', () => {
                        const checkedCount = container.querySelectorAll('input[name="mutation"]:checked').length;
                        if (checkedCount > 4) {
                            alert('Você só pode escolher até 4 mutações!');
                            checkbox.checked = false;
                        }
                        updateAberrantAttributes();
                    });
                });
            },
            calculateAttributes: () => {
                const attrs = { forca: 0, destreza: 0, constituicao: 0, inteligencia: 0, sabedoria: 0, carisma: -2 };
                const selectedMutations = [];
                const bonusMap = {
                    mutacaoAscetico: { attr: 'sabedoria', name: 'Ascético' }, mutacaoMusculoso: { attr: 'forca', name: 'Musculoso' },
                    mutacaoResistente: { attr: 'constituicao', name: 'Resistente' }, mutacaoVeloz: { attr: 'destreza', name: 'Veloz' },
                    mutacaoMagiaBizarra: { name: 'Magia Bizarra' }, mutacaoCouroRochoso: { name: 'Couro Rochoso' },
                    mutacaoMetamorfose: { name: 'Metamorfose' }, mutacaoMordida: { name: 'Mordida' },
                    mutacaoSentidosAgucados: { name: 'Sentidos Aguçados' }, mutacaoVenenoso: { name: 'Venenoso' },
                };
                document.querySelectorAll('input[name="mutation"]:checked').forEach(checkbox => {
                    const mutation = bonusMap[checkbox.value];
                    if (mutation) {
                        if (mutation.attr) { attrs[mutation.attr] = (attrs[mutation.attr] || 0) + 1; }
                        selectedMutations.push(mutation.name);
                    }
                });
                document.getElementById('bonusMessage').innerHTML = `Carisma -2<br>Mutações: ${selectedMutations.join(', ') || 'Nenhuma'}`;
                return { baseAttributes: attrs, isChoice: false, choiceCount: 0 };
            }
        },
        'halforc_ameacas': {
            name: 'Meio-Orc (Ameaças)',
            type: 'ameacas',
            attributes: { "forca": 2 },
            bonusMessage: "Força +2, +1 em outro atributo (exceto Carisma)<br>Criatura das Profundezas<br>Adaptável<br>Sangue Orc",
            isChoice: true,
            choiceCount: 1,
            maxChoicePerAttribute: 1,
            lockedChoiceAttributes: ['carisma'],
            imageUrl: "https://gifdb.com/images/high/tiny-tina-wonderland-video-game-orc-witness-me-7anj41yealn074hg.gif"
        },
        'orc_ameacas': {
            name: 'Orc (Ameaças)',
            type: 'ameacas',
            attributes: { "forca": 2, "constituicao": 1, "inteligencia": -1 },
            bonusMessage: "+2 em Força, Constituição +1, Inteligência –1<br>Feroz<br>Habitante das Cavernas<br>Vigor Brutal",
            isChoice: false,
            imageUrl: "https://i.pinimg.com/originals/f3/f7/ba/f3f7bac36cdf249f15bd81d7efdd2491.gif"
        },
        'tabrachi': {
            name: 'Tabrachi (Ameaças)',
            type: 'ameacas',
            attributes: { "constituicao": 2, "forca": 1, "carisma": -1 },
            bonusMessage: "Constituição +2, Força +1, Carisma –1<br>Batráquio<br>Linguarudo<br>Saltador",
            isChoice: false,
            imageUrl: "https://i.makeagif.com/media/2-06-2016/Z9za8C.gif"
        },
        'ogre': {
            name: 'Ogro (Ameaças)',
            type: 'ameacas',
            attributes: { "forca": 3, "constituicao": 2, "inteligencia": -1, "carisma": -1 },
            bonusMessage: "Força +3, Constituição +2, Inteligência –1, Carisma –1<br>Quanto Maior o Tamanho...<br>…Maior a Porrada<br>Camada de Ingenuidade",
            isChoice: false,
            imageUrl: "https://media0.giphy.com/media/TIGP3k4gNAqvza2KJK/giphy-downsized.gif"
        },
        'bugbear': {
            name: 'Bugbear (Ameaças)',
            type: 'ameacas',
            attributes: { "forca": 2, "destreza": 1, "carisma": -1 },
            bonusMessage: "Força +2, Destreza +1, Carisma –1<br>Empunhadura Poderosa<br>Saborear Pavor<br>Sentidos de Predador",
            isChoice: false,
            imageUrl: "https://media1.tenor.com/m/qEgRLp9ZG_sAAAAd/grrr-beast-man.gif"
        },
        'hobgoblin_ameacas': {
            name: 'Hobgoblin (Ameaças)',
            type: 'ameacas',
            attributes: { "constituicao": 2, "destreza": 1, "carisma": -1 },
            bonusMessage: "Constituição +2, Destreza +1, Carisma –1<br>Arte da Guerra<br>Metalurgia Hobgoblin<br>Táticas de Guerrilha",
            isChoice: false,
            imageUrl: "https://64.media.tumblr.com/a8fd66069693d12f2f4ef4372c6a3667/8f857d181fda07ba-c0/s500x750/5eade5b52d6d2b6a510609d01c119354862aaf9b.gif"
        },
        'centaur': {
            name: 'Centauro (Ameaças)',
            type: 'ameacas',
            attributes: { "sabedoria": 2, "forca": 1, "inteligencia": -1 },
            bonusMessage: "Sabedoria +2, Força +1, Inteligência –1<br>Avantajado<br>Cascos<br>Ginete Natural<br>Medo de Altura",
            isChoice: false,
            imageUrl: "https://64.media.tumblr.com/3ec153799fa25e21ad10be5be1a2157a/2c6fb1d5eacdd6bb-63/s540x810/42863302a5dcac125d795eb1e8357b0141c43089.gif"
        },
        'gnoll': {
            name: 'Gnoll (Ameaças)',
            type: 'ameacas',
            attributes: { "constituicao": 2, "sabedoria": 1, "inteligencia": -1 },
            bonusMessage: "Constituição +2, Sabedoria +1, Inteligência –1<br>Faro<br>Mordida<br>Oportunista<br>Rendição",
            isChoice: false,
            imageUrl: "https://64.media.tumblr.com/747cc66960cd29327e014a9d4d9296b5/97a1d09906c94285-49/s540x810/f00e0f34e4ff2c07ba5e0db91dfc7cecee3810f3.gif"
        },
        'kallyanach': {
            name: 'Kallyanach (Ameaças)',
            type: 'ameacas',
            attributes: {}, // Atributos são 100% de escolha
            bonusMessage: "+2 em um atributo ou +1 em dois atributos.<br>Herança Dracônica<br>Bênção de Kallyadranoch",
            isChoice: true,
            choiceCount: 2,
            maxChoicePerAttribute: 2,
            imageUrl: 'https://i.pinimg.com/originals/23/cc/03/23cc03827dd5eb610540f4a03ea88190.gif',
            createCustomUi: (container) => {
                const elementalTypes = ['Ácido', 'Eletricidade', 'Fogo', 'Frio', 'Luz', 'Trevas'];
                const bencaos = [
                    { id: 'bencaoArmamento', name: 'Armamento Kallyanach' }, { id: 'bencaoAsas', name: 'Asas Dracônicas' },
                    { id: 'bencaoEscamas', name: 'Escamas Elementais' }, { id: 'bencaoMagia', name: 'Prática Arcana' },
                    { id: 'bencaoSentidos', name: 'Sentidos Dracônicos' }, { id: 'bencaoSopro', name: 'Sopro de Dragão' },
                ];
                container.innerHTML = `
            <div class="mt-2">
                <label for="kallyanach-elemental">Herança Dracônica:</label>
                <select id="kallyanach-elemental">
                    <option value="">Selecione</option>
                    ${elementalTypes.map(type => `<option value="${type}">${type}</option>`).join('')}
                </select>
            </div>
            <h6 class="mt-2">Bênção de Kallyadranoch (Escolha 2):</h6>
            <div id="bencao-container">
                ${bencaos.map(b => `<div><input type="checkbox" id="${b.id}" name="bencao"><label for="${b.id}">${b.name}</label></div>`).join('')}
            </div>
        `;
                container.querySelectorAll('input[name="bencao"]').forEach(checkbox => {
                    checkbox.addEventListener('change', () => {
                        if (container.querySelectorAll('input[name="bencao"]:checked').length > 2) {
                            alert('Você só pode escolher até 2 bênçãos!');
                            checkbox.checked = false;
                        }
                    });
                });
            }
        },
        'kaijin': {
            name: 'Kaijin (Ameaças)',
            type: 'ameacas',
            attributes: { "forca": 2, "constituicao": 1, "carisma": -2 },
            bonusMessage: "Força +2, Constituição +1, Carisma –2<br>Couraça Rubra<br>Cria da Tormenta<br>Disforme<br>Terror Vivo",
            isChoice: false,
            imageUrl: "https://media1.tenor.com/m/RjZXfToDdogAAAAd/momotaros-enter.gif"
        },
        'kappa': {
            name: 'Kappa (Ameaças)',
            type: 'ameacas',
            attributes: { "destreza": 2, "constituicao": 1, "carisma": -1 },
            bonusMessage: "Destreza +2, Constituição +1, Carisma –1<br>Anfíbio<br>Carapaça Kappa<br>Cura das Águas<br>Tigela D’água",
            isChoice: false,
            imageUrl: "https://pa1.aminoapps.com/7745/d5e19b747299768717a2c6122de955aa5fb2a707r1-608-342_hq.gif"
        },
        'nezumi': {
            name: 'Nezumi (Ameaças)',
            type: 'ameacas',
            attributes: { "constituicao": 2, "destreza": 1, "inteligencia": -1 },
            bonusMessage: "Constituição +2, Destreza +1, Inteligência –1<br>Empunhadura Poderosa<br>Pequeno, Mas Não Metade<br>Roedor<br>Sentidos Murídeos",
            isChoice: false,
            imageUrl: "https://media.tenor.com/Ar4yaROS_wUAAAAM/breaking-boards-splinter.gif"
        },
        'tengu': {
            name: 'Tengu (Ameaças)',
            type: 'ameacas',
            attributes: { "destreza": 2, "inteligencia": 1 },
            bonusMessage: "Destreza +2, Inteligência +1<br>Asas Desorientadoras<br>Caminhante do Céu<br>Espírito Corvino",
            isChoice: false,
            imageUrl: "https://64.media.tumblr.com/1ae44c223c951f18f9dc892b001c62b2/tumblr_oz3w5jS2w41wdfs98o1_540.gif"
        },
        'minauro': {
            name: 'Minauro (Ameaças)',
            type: 'ameacas',
            attributes: { "forca": 1 },
            bonusMessage: "Força +1 e +1 em dois atributos<br>Faro<br>Mente Aberta<br>Plurivalente",
            isChoice: true,
            choiceCount: 2,
            maxChoicePerAttribute: 1,
            imageUrl: "https://i.imgflip.com/a0fxsg.gif"
        },
        'kobold': {
            name: 'Kobolds (Ameaças)',
            type: 'ameacas',
            attributes: { "destreza": 2, "forca": -1 },
            bonusMessage: "Enxame Escamoso<br>Praga Monstruosa<br>Sensibilidade a Luz<br>Talentos do Bando",
            isChoice: false,
            imageUrl: 'https://media.tenor.com/iY__m2gWNYwAAAAM/dnd-cartoon-dnd.gif',
            createCustomUi: (container) => {
                const talents = [
                    { id: 'koboldAmontoado', name: 'Amontoados' }, { id: 'koboldAArmadilha', name: 'Armadilha Terrível' },
                    { id: 'koboldDiferentao', name: 'Diferentão' }, { id: 'koboldExFamiliar', name: 'Ex-Familiar' },
                    { id: 'koboldOusado', name: 'O Ousado' }, { id: 'koboldFundao', name: 'Os do Fundo' },
                    { id: 'koboldOrganizado', name: 'Organizadinhos' }, { id: 'koboldOportunista', name: 'Pestes Oportunistas' },
                    { id: 'koboldExplosivo', name: 'Somos Explosivos' }, { id: 'koboldEnxame', name: 'Tática de Enxame' },
                ];
                let talentHtml = '<h6>Talentos do Bando (Escolha 2):</h6>';
                talents.forEach(t => {
                    talentHtml += `<div><input type="checkbox" id="${t.id}" name="talent"><label for="${t.id}">${t.name}</label></div>`;
                });
                container.innerHTML = talentHtml;
                container.querySelectorAll('input[name="talent"]').forEach(checkbox => {
                    checkbox.addEventListener('change', () => {
                        const checkedCount = container.querySelectorAll('input[name="talent"]:checked').length;
                        if (checkedCount > 2) {
                            alert('Você só pode escolher até 2 talentos!');
                            checkbox.checked = false;
                        }
                        updateKoboldAttributes();
                    });
                });
            },
            calculateAttributes: () => {
                const selectedTalents = Array.from(document.querySelectorAll('input[name="talent"]:checked')).map(cb => cb.nextElementSibling.textContent);
                const baseMessage = "Destreza +2, Força -1<br>Enxame Escamoso<br>Praga Monstruosa<br>Sensibilidade a Luz";

                if (selectedTalents.length > 0) {
                    document.getElementById('bonusMessage').innerHTML = `${baseMessage}<br>Talentos de Bando: ${selectedTalents.join(', ')}`;
                } else {
                    document.getElementById('bonusMessage').innerHTML = baseMessage;
                }

                // Atributos do Kobold são fixos, então retornamos o base
                return { baseAttributes: RACE_DATA.kobold.attributes, isChoice: false, choiceCount: 0 };
            }
        },
        'harpia': {
            name: 'Harpia (Ameaças)',
            type: 'ameacas',
            attributes: { "destreza": 2, "carisma": 1, "inteligencia": -1 },
            bonusMessage: "Destreza +2, Carisma +1, Inteligência –1<br>Asas de Abutre<br>Cria de Masmorra<br>Grito Aterrorizante<br>Pés Rapinantes",
            isChoice: false,
            imageUrl: "https://images.steamusercontent.com/ugc/862852702977931501/C2CAB11CAE25250FEEF6174FA7E908D62697B3A9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        },
        'ceratops': {
            name: 'Ceratops (Ameaças)',
            type: 'ameacas',
            attributes: { "constituicao": 2, "forca": 1, "destreza": -1, "inteligencia": -1 },
            bonusMessage: "Constituição +2, Força +1, Destreza -1, Inteligência –1<br>Chifres<br>Paquidérmico<br>Papel Tribal<br>Medo de Altura",
            isChoice: false,
            imageUrl: "https://media1.tenor.com/m/t4csDZj4cpUAAAAd/huh-dinosaurs.gif"
        },
        'pteros': {
            name: 'Pteros (Ameaças)',
            type: 'ameacas',
            attributes: { "sabedoria": 2, "destreza": 1, "inteligencia": -1 },
            bonusMessage: "Sabedoria +2, Destreza +1, Inteligência -1<br>Ligação Natural<br>Mãos Rudimentares<br>Pés Rapinantes<br>Senhor dos Céus<br>Sentidos Rapinantes",
            isChoice: false,
            imageUrl: "https://media1.tenor.com/m/5seA8tx1za0AAAAd/sauron-marvel.gif"
        },
        'velocis': {
            name: 'Velocis (Ameaças)',
            type: 'ameacas',
            attributes: { "destreza": 2, "sabedoria": 1, "inteligencia": -1 },
            bonusMessage: "Destreza +2, Sabedoria +1, Inteligência –1<br>Através de Espinheiros<br>Sentidos Selvagens<br>Velocista da Planície",
            isChoice: false,
            imageUrl: "https://i.redd.it/gz73bz9g5cne1.gif"
        },
        'voracis': {
            name: 'Voracis (Ameaças)',
            type: 'ameacas',
            attributes: { "destreza": 2, "constituicao": 1, "inteligencia": -1 },
            bonusMessage: "Destreza +2, Constituição +1, Inteligência –1<br>Garras<br>Rainha da Selva<br>Sentidos Selvagens",
            isChoice: false,
            imageUrl: "https://media.tenor.com/17xAoIGD9IMAAAAC/thunder-cats.gif"
        },
        'yidishan': {
            name: 'Yidishan (Ameaças)',
            type: 'ameacas',
            attributes: { "carisma": -2 },
            bonusMessage: "+1 em três atributos (exceto Carisma)<br>Carisma –2<br>Híbrido Mecânico<br>Natureza Orgânica<br>Peças Metálicas",
            isChoice: true,
            choiceCount: 3,
            maxChoicePerAttribute: 1,
            lockedChoiceAttributes: ['carisma'],
            imageUrl: "https://media1.tenor.com/m/Ohc53jtWsUwAAAAd/dc-cyborg.gif"
        },
        'moreau': {
            name: 'Moreau (Ameaças)',
            type: 'ameacas',
            // Dados para cada herança
            herancas: {
                'coruja': { attr: 'sabedoria', bonus: 'Espreitador<br>Garras<br>Sapiência', img: 'https://64.media.tumblr.com/a08e6cc43f776f5465d828c92745732c/3ac762947728a3f4-5a/s540x810/d4a75ccf84342d5841c1993a08b7a219c5fa63e4.gif' },
                'hiena': { attr: 'sabedoria', bonus: 'Carniceiro Prevalecido<br>Faro<br>Mordida', img: 'https://media1.tenor.com/m/BtIllWFPLZAAAAAC/hyena-lionking.gif' },
                'raposa': { attr: 'inteligencia', bonus: 'Agarra-me se Puderes<br>Esperteza Vulpina<br>Faro', img: 'https://media1.tenor.com/m/5t3uqVBgquYAAAAC/zootopia-nick-wilde.gif' },
                'serpente': { attr: 'inteligencia', bonus: 'Arborícola<br>Constritor<br>Instintos Traiçoeiros', img: 'https://64.media.tumblr.com/b70b2236cbc05df471b1864b070edbde/tumblr_prxsmgfkzv1r2zjloo4_r1_400.gif' },
                'bufalo': { attr: 'forca', bonus: 'Chifres<br>Faro<br>Marrada Impressionante', img: 'https://media1.tenor.com/m/xOuqexM1QI0AAAAd/kinnikuman-buffaloman.gif' },
                'coelho': { attr: 'destreza', bonus: 'Patas Ligeiras<br>Pé de Coelho<br>Senso de Preservação', img: 'https://media.tenor.com/7ghUf4IwTeUAAAAM/zootopia-rabbit.gif' },
                'crocodilo': { attr: 'constituicao', bonus: 'Couro Rígido<br>Mordida<br>Predador Aquático', img: 'https://i.imgur.com/jQwOTIR.gif' },
                'gato': { attr: 'carisma', bonus: 'As Muitas Vidas de Um Gato<br>Garras<br>Sentidos Felinos', img: 'https://i.pinimg.com/originals/b3/a6/da/b3a6daffbeef2af9e7203dd480e89000.gif' },
                'leao': { attr: 'forca', bonus: 'Mordida<br>Rugido Imponente<br>Sentidos da Realeza', img: 'https://i.gifer.com/C93F.gif' },
                'lobo': { attr: 'carisma', bonus: 'Faro<br>Mordida<br>Táticas de Matilha', img: 'https://i.makeagif.com/media/4-20-2023/6IDAQU.gif' },
                'morcego': { attr: 'destreza', bonus: 'Asas<br>Cavaleiro das Trevas<br>Ecolocalização', img: 'https://i.makeagif.com/media/8-23-2024/Ioripn.gif' },
                'urso': { attr: 'constituicao', bonus: 'Abraço de Urso<br>Faro<br>Mordida', img: 'https://i.pinimg.com/originals/af/73/01/af7301323e8db44ce871878280f61251.gif' },
            },
            createCustomUi: (container) => {
                let herancaOptions = Object.keys(RACE_DATA.moreau.herancas).map(key =>
                    `<option value="${key}">${key.charAt(0).toUpperCase() + key.slice(1)}</option>`
                ).join('');

                container.innerHTML = `
                    <div>
                        <label for="moreau-heranca">Herança:</label>
                        <select id="moreau-heranca">
                            <option value="">Selecione</option>
                            ${herancaOptions}
                        </select>
                    </div>
                `;
                container.querySelector('#moreau-heranca').addEventListener('change', updateMoreauAttributes);
            },
            calculateAttributes: () => {
                const herancaKey = document.getElementById('moreau-heranca')?.value;
                const herancaData = RACE_DATA.moreau.herancas[herancaKey];
                const attrs = {};

                if (herancaData) {
                    // Define o +1 fixo da herança
                    attrs[herancaData.attr] = 1;

                    // Atualiza a imagem e a mensagem
                    document.getElementById('attribute-table').style.background = `url('${herancaData.img}') no-repeat center center`;
                    document.getElementById('attribute-table').style.backgroundSize = "75% auto";
                    document.getElementById('bonusMessage').innerHTML = `+1 em ${herancaData.attr.charAt(0).toUpperCase() + herancaData.attr.slice(1)} e +2 em dois atributos.<br>${herancaData.bonus}`;
                } else {
                    document.getElementById('attribute-table').style.background = '';
                    document.getElementById('bonusMessage').innerHTML = 'Selecione uma Herança.';
                }

                // Todos os Moreau de escolha têm as mesmas regras
                return { baseAttributes: attrs, isChoice: true, choiceCount: 2, maxChoicePerAttribute: 1 };
            }
        },
        'sea_elf': {
            name: 'Elfo do Mar (Ameaças)',
            type: 'ameacas',
            attributes: { "destreza": 2, "constituicao": 1, "inteligencia": -1 },
            bonusMessage: "Destreza +2, Constituição +1, Inteligência –1<br>Arsenal do Oceano<br>Cria das Águas<br>Dependência de Água",
            isChoice: false,
            imageUrl: "https://giffiles.alphacoders.com/214/214964.gif"
        },
        'nagah_macho': {
            name: 'Nagah (Macho - Ameaças)',
            type: 'ameacas',
            attributes: { "forca": 1, "destreza": 1, "constituicao": 1 },
            bonusMessage: "Força +1, Destreza +1, Constituição +1<br>Cauda<br>Inocência Dissimulada<br>Presentes de Sszzaas<br>Fraquezas Ofídias",
            isChoice: false,
            imageUrl: "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyMWxlYm9kcDY2MXkwM296YTdyYTFpandvN2l5NHNwZmUzOHozMG1lcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jBnYaRTtSG9jbPrDrR/giphy-downsized-medium.gif"
        },
        'nagah_femea': {
            name: 'Nagah (Fêmea - Ameaças)',
            type: 'ameacas',
            attributes: { "inteligencia": 1, "sabedoria": 1, "carisma": 1 },
            bonusMessage: "Inteligência +1, Sabedoria +1, Carisma +1<br>Cauda<br>Inocência Dissimulada<br>Presentes de Sszzaas<br>Fraquezas Ofídias",
            isChoice: false,
            imageUrl: "https://pa1.aminoapps.com/6452/651c37fe76ffbb5bb25a40ade46083b1e55465dc_hq.gif"
        },
        'fintroll': {
            name: 'Fintroll (Ameaças)',
            type: 'ameacas',
            attributes: { "inteligencia": 2, "constituicao": 1, "forca": -1 },
            bonusMessage: "Inteligência +2, Constituição +1, Força -1<br>Corpo Vegetal<br>Presença Arcana<br>Regeneração Vegetal<br>Intolerância a Luz",
            isChoice: false,
            imageUrl: "https://i.pinimg.com/originals/95/ea/29/95ea2981d51aaf84d5b7a0a25e3f309e.gif"
        },
        'soterrado': {
            name: 'Soterrado (Ameaças)',
            type: 'ameacas',
            attributes: { "constituicao": -1 },
            bonusMessage: "+1 em três atributos (exceto Constituição)<br>Constituição -1<br>Abraço Gélido<br>Esquife de Gelo<br>Natureza Esquelética<br>Preço da Não Vida",
            isChoice: true,
            choiceCount: 3,
            maxChoicePerAttribute: 1,
            lockedChoiceAttributes: ['constituicao'],
            imageUrl: "https://i.redd.it/y5i8n0dso9p91.gif"
        },
        'duende': {
            name: 'Duende (Herois de Arton)',
            type: 'DHracas',
            imageUrl: 'https://i.pinimg.com/originals/37/a1/d8/37a1d8584b898130605bc0b2228dbba8.gif',
            natureData: {
                'Animal': { isChoice: true, choiceCount: 1, maxChoicePerAttribute: 1, bonusText: "Pode adicionar +1 em um atributo à sua escolha.", imageUrl: "https://i.redd.it/z92c1bu4c8251.gif" },
                'Vegetal': { isChoice: false, bonusText: "Natureza Vegetal, Florescer Feérico.", imageUrl: "https://static.wikia.nocookie.net/powerlisting/images/5/54/Zetsu_mayfly.gif" },
                'Mineral': { isChoice: false, bonusText: "", imageUrl: "https://media1.tenor.com/m/5P1FeRwotGkAAAAd/whomp-mario.gif" }
            },
            createCustomUi: (container) => {
                const dons = [
                    { id: 'donForca', name: 'Força' }, { id: 'donDestreza', name: 'Destreza' }, { id: 'donConstituicao', name: 'Constituição' },
                    { id: 'donInteligencia', name: 'Inteligência' }, { id: 'donSabedoria', name: 'Sabedoria' }, { id: 'donCarisma', name: 'Carisma' }
                ];
                const presentes = [
                    { id: 'presAfinidade', name: 'Afinidade Elemental', sub: ['Água', 'Fogo', 'Vegetação'] }, { id: 'presEncantar', name: 'Encantar Objetos' },
                    { id: 'presEnfeiticar', name: 'Enfeitiçar' }, { id: 'presInvisibilidade', name: 'Invisibilidade' },
                    { id: 'presLingua', name: 'Língua da Natureza' }, { id: 'presMaldicao', name: 'Maldição', sub: ['Apatia Profunda', 'Coração de Geleia', 'Envelhecimento Súbito', 'Loucura do Verão', 'Mil Verrugas', 'Ruína do Corpo', 'Outra (a critério do mestre)'] },
                    { id: 'presMetamorfose', name: 'Metamorfose Animal' }, { id: 'presLaDoQueAqui', name: 'Mais Lá do Que Aqui' },
                    { id: 'presSonhos', name: 'Sonhos Proféticos' }, { id: 'presVelocidade', name: 'Velocidade do Pensamento' },
                    { id: 'presVisao', name: 'Visão Feérica' }, { id: 'presVoo', name: 'Voo' }
                ];

                let presentesHtml = '';
                presentes.forEach(p => {
                    presentesHtml += `<div><input type="checkbox" id="${p.id}" name="presente"><label for="${p.id}">${p.name}</label>`;
                    if (p.sub) {
                        presentesHtml += `<select id="${p.id}-sub" class="hidden ml-2">${p.sub.map(s => `<option value="${s}">${s}</option>`).join('')}</select>`;
                    }
                    presentesHtml += `</div>`;
                });

                container.innerHTML = `
            <button id="nimbButton" class="btn btn-primary btn-sm mb-2">Sonhos Malucos (Modo Nimb)</button>
            <div><label>Natureza:</label><select id="duende-natureza"><option value="Animal">Animal</option><option value="Vegetal">Vegetal</option><option value="Mineral">Mineral</option></select></div>
            <div><label>Tamanho:</label><select id="duende-tamanho"><option value="Minúsculo">Minúsculo</option><option value="Pequeno">Pequeno</option><option value="Medio" selected>Médio</option><option value="Grande">Grande</option></select></div>
            <h6 class="mt-2">Dons (Escolha até 2):</h6>
            <div id="dons-container">${dons.map(d => `<div><input type="checkbox" id="${d.id}" name="don"><label for="${d.id}">${d.name}</label></div>`).join('')}</div>
            <h6 class="mt-2">Presentes de Magia e Caos (Escolha até 3):</h6>
            <div id="presentes-container">${presentesHtml}</div>
        `;

                // Event Listeners
                container.querySelectorAll('select, input[type="checkbox"]').forEach(el => el.addEventListener('change', updateDuendeAttributes));

                document.getElementById('presAfinidade').addEventListener('change', (e) => {
                    document.getElementById('presAfinidade-sub').classList.toggle('hidden', !e.target.checked);
                });
                document.getElementById('presMaldicao').addEventListener('change', (e) => {
                    document.getElementById('presMaldicao-sub').classList.toggle('hidden', !e.target.checked);
                });

                document.getElementById('nimbButton').addEventListener('click', () => {
                    // Randomiza tudo
                    const naturezaEl = document.getElementById('duende-natureza');
                    naturezaEl.selectedIndex = Math.floor(Math.random() * naturezaEl.options.length);
                    const tamanhoEl = document.getElementById('duende-tamanho');
                    tamanhoEl.selectedIndex = Math.floor(Math.random() * tamanhoEl.options.length);
                    const donsCheckboxes = Array.from(document.querySelectorAll('input[name="don"]'));
                    donsCheckboxes.forEach(cb => cb.checked = false);
                    donsCheckboxes.sort(() => 0.5 - Math.random()).slice(0, 2).forEach(cb => cb.checked = true);
                    const presentesCheckboxes = Array.from(document.querySelectorAll('input[name="presente"]'));
                    presentesCheckboxes.forEach(cb => cb.checked = false);
                    presentesCheckboxes.sort(() => 0.5 - Math.random()).slice(0, 3).forEach(cb => cb.checked = true);

                    container.querySelectorAll('select, input, button').forEach(el => {
                        if (el.id !== 'presAfinidade-sub' && el.id !== 'presMaldicao-sub') {
                            el.disabled = true;
                        }
                    });

                    document.getElementById('presAfinidade-sub').classList.toggle('hidden', !document.getElementById('presAfinidade').checked);
                    document.getElementById('presMaldicao-sub').classList.toggle('hidden', !document.getElementById('presMaldicao').checked);

                    alert("Por sua ousadia, você recebe +2 PM!");
                    updateDuendeAttributes();
                });

                container.querySelectorAll('input[name="don"]').forEach(cb => cb.addEventListener('change', () => {
                    if (container.querySelectorAll('input[name="don"]:checked').length > 2) {
                        alert('Máximo de 2 Dons!');
                        cb.checked = false;
                    }
                }));
                container.querySelectorAll('input[name="presente"]').forEach(cb => cb.addEventListener('change', () => {
                    if (container.querySelectorAll('input[name="presente"]:checked').length > 3) {
                        alert('Máximo de 3 Presentes!');
                        cb.checked = false;
                    }
                }));
            },
            calculateAttributes: () => {
                const attrs = { forca: 0, destreza: 0, constituicao: 0, inteligencia: 0, sabedoria: 0, carisma: 0 };
                const tamanho = document.getElementById('duende-tamanho')?.value;
                if (tamanho === 'Minúsculo') attrs.forca -= 1;
                if (tamanho === 'Grande') attrs.destreza -= 1;
                document.querySelectorAll('input[name="don"]:checked').forEach(cb => {
                    const attrName = cb.id.replace('don', '').toLowerCase();
                    if (attrs.hasOwnProperty(attrName)) attrs[attrName] += 1;
                });

                const naturezaKey = document.getElementById('duende-natureza')?.value;
                const naturezaData = RACE_DATA.duende.natureData[naturezaKey];

                document.getElementById('attribute-table').style.background = `url('${naturezaData.imageUrl}') no-repeat center center`;
                document.getElementById('attribute-table').style.backgroundSize = "75% auto";

                const donsNomes = Array.from(document.querySelectorAll('input[name="don"]:checked')).map(cb => cb.nextElementSibling.textContent);
                const presentesNomes = Array.from(document.querySelectorAll('input[name="presente"]:checked')).map(cb => {
                    let text = cb.nextElementSibling.textContent;
                    const subSelector = document.getElementById(`${cb.id}-sub`);
                    if (subSelector && !subSelector.classList.contains('hidden')) {
                        text += ` (${subSelector.value})`;
                    }
                    return text;
                });

                document.getElementById('bonusMessage').innerHTML = `
            Natureza: ${naturezaKey}, Tamanho: ${tamanho}<br>
            ${naturezaData.bonusText ? `${naturezaData.bonusText}<br>` : ''}
            ${donsNomes.length > 0 ? `Dons: ${donsNomes.join(', ')}<br>` : ''}
            ${presentesNomes.length > 0 ? `Presentes: ${presentesNomes.join(', ')}<br>` : ''}
            Aversão a Ferro, Aversão a Sinos, Tabu
        `;
                return {
                    baseAttributes: attrs,
                    isChoice: naturezaData.isChoice,
                    choiceCount: naturezaData.choiceCount || 0,
                    maxChoicePerAttribute: naturezaData.maxChoicePerAttribute || 0
                };
            }
        },
        'eiradaan': {
            name: 'Eiradaan (Herois de Arton)',
            type: 'DHracas',
            attributes: { "sabedoria": 2, "carisma": 1, "forca": -1 },
            bonusMessage: "Sabedoria +2, Carisma +1, Força -1<br>Essência Feérica<br>Magia Instintiva<br>Sentidos Místicos<br>Canção da Melancolia",
            isChoice: false,
            imageUrl: "https://gamingyeeter.com/wp-content/uploads/2021/11/giphy-2.gif"
        },
        'galokk': {
            name: 'Galokk (Herois de Arton)',
            type: 'DHracas',
            attributes: { "forca": 1, "constituicao": 1, "carisma": -1 },
            bonusMessage: "Força +1, Constituição +1, +1 em um Atributo, Carisma -1<br>Força dos Titãs<br>Meio-Gigante<br>Infância Entre os Pequenos",
            isChoice: true,
            choiceCount: 1,
            maxChoicePerAttribute: 1,
            imageUrl: "https://i.imgur.com/a4iUv3x.gif"
        },
        'halfelf_herois': {
            name: 'Meio-Elfo (Herois de Arton)',
            type: 'DHracas',
            attributes: { "inteligencia": 1 },
            bonusMessage: "Inteligência +1, +1 em dois atributos (exceto Constituição)<br>Ambição Herdada<br>Entre Dois Mundos<br>Sangue Élfico",
            isChoice: true,
            choiceCount: 2,
            maxChoicePerAttribute: 1,
            lockedChoiceAttributes: ['constituicao'],
            imageUrl: "https://i.pinimg.com/originals/ce/d5/36/ced536ade0d16ff1e3b15e5ed1ca7247.gif"
        },
        'satiro': {
            name: 'Sátiro (Herois de Arton)',
            type: 'DHracas',
            attributes: { "carisma": 2, "destreza": 1, "sabedoria": -1 },
            bonusMessage: "Carisma +2, Destreza +1, Sabedoria -1<br>Marrada<br>Festeiro Feérico<br>Instrumentista Mágico<br>Pernas Caprinas",
            isChoice: false,
            imageUrl: "https://i.imgur.com/NnVps2O.gif"
        },
        'nailanandora': {
            name: 'Nailanandora (Duelo de Dragões)',
            type: 'outraRaca',
            attributes: { "destreza": 2, "carisma": 1, "constituicao": -1 },
            bonusMessage: "Destreza +2, Carisma +1, Constituição –1<br>Alma das Nuvens<br>Asas Emplumadas<br>Sentidos Élficos",
            isChoice: false,
            imageUrl: "https://i.pinimg.com/originals/50/75/71/5075710b2596ae9889349129c8c4144d.gif"
        },
    };

    const ATTRIBUTES = ['forca', 'destreza', 'constituicao', 'inteligencia', 'sabedoria', 'carisma'];
    const racaSelect = document.getElementById('raca');
    const attributeTableBody = document.querySelector('#attribute-table tbody');
    const customUiContainer = document.getElementById('race-specific-options');

    const configPanel = document.getElementById('opcoes');
    const configButton = document.getElementById('config-button');
    const closeConfigButton = document.getElementById('close-config-button');

    makeDraggable(configPanel);

    const togglePontos = document.getElementById('togglePontos');
    const pontosInput = document.getElementById('pontosInput');
    const salvarPontosBtn = document.getElementById('salvarPontos');
    const pontosDisponiveisSpan = document.getElementById('pontos_disponiveis');

    togglePontos.addEventListener('change', () => {
        const isChecked = togglePontos.checked;
        pontosInput.classList.toggle('hidden', !isChecked);
        salvarPontosBtn.classList.toggle('hidden', !isChecked);
        if (isChecked) {
            pontosInput.value = pontosDisponiveisSpan.textContent;
        }
    });

    salvarPontosBtn.addEventListener('click', () => {
        const novoValor = parseInt(pontosInput.value, 10);
        if (!isNaN(novoValor) && novoValor >= 0) {
            pontosDisponiveisSpan.textContent = novoValor;
            updateAvailablePoints();
            togglePontos.checked = false;
            pontosInput.classList.add('hidden');
            salvarPontosBtn.classList.add('hidden');
        } else {
            alert('Por favor, insira um valor numérico válido e não negativo.');
            pontosInput.value = pontosDisponiveisSpan.textContent;
        }
    });

    const toggleOutrosInput = document.getElementById('toggleOutrosInput');
    toggleOutrosInput.addEventListener('change', () => {
        const isChecked = toggleOutrosInput.checked;
        const outrosCols = document.querySelectorAll('.outros-col');
        outrosCols.forEach(col => col.classList.toggle('show', isChecked));
        if (!isChecked) {
            document.querySelectorAll('.attr-outros').forEach(input => input.value = 0);
            updateAll();
        }
    });

    configButton.addEventListener('click', () => configPanel.style.display = 'block');
    closeConfigButton.addEventListener('click', () => configPanel.style.display = 'none');

    function populateRaceSelect() {
        while (racaSelect.options.length > 1) { racaSelect.remove(1); }
        for (const raceId in RACE_DATA) {
            const race = RACE_DATA[raceId];
            const option = document.createElement('option');
            option.value = raceId;
            option.textContent = race.name;
            option.dataset.raceType = race.type;
            racaSelect.appendChild(option);
        }
    }


    const ICONS_ATRIBUTOS = {
        'forca': 'imagens/forca.png',
        'destreza': 'imagens/destreza.png',
        'constituicao': 'imagens/constituicao.png',
        'inteligencia': 'imagens/inteligencia.png',
        'sabedoria': 'imagens/sabedoria.png',
        'carisma': 'imagens/carisma.png'
    };

    // ***** ALTERAÇÃO 1: Função para validar o valor dentro dos limites (min/max) *****
    function validateMinMax(input) {
        // Permite que o campo fique temporariamente vazio ou com "-" enquanto o usuário digita
        if (input.value === '' || input.value === '-') return;

        let value = parseInt(input.value, 10);
        // ALTERAÇÃO: Definimos os limites min e max diretamente no código
        const min = -1;
        const max = 4;

        if (isNaN(value)) {
            // Se o valor for inválido (ex: "abc"), reverte para o valor que tinha antes da edição
            input.value = input.dataset.previousValue;
        } else if (value < min) {
            input.value = min;
        } else if (value > max) {
            input.value = max;
        }
    }

    // ***** ALTERAÇÃO 2: Função para validar os pontos quando o usuário termina a edição *****
    function validatePoints(event) {
        const input = event.target;

        // Garante que o campo não fique vazio
        if (input.value === '' || input.value === '-') {
            input.value = input.dataset.previousValue;
        }

        // Verifica se a alteração deixou os pontos negativos
        if (calculateAvailablePoints() < 0) {
            // Se sim, reverte para o valor anterior
            input.value = input.dataset.previousValue;
        }

        // Atualiza a interface com o valor final e correto
        updateAll();
    }


    function populateAttributeTable() {
        attributeTableBody.innerHTML = '';
        ATTRIBUTES.forEach(attr => {
            const row = document.createElement('tr');
            // ALTERAÇÃO: Adicionado o style para definir a largura e alinhar o texto
            row.innerHTML = `
        <td><img src="${ICONS_ATRIBUTOS[attr]}" alt="símbolo de ${attr}" height="40px" width="auto"></td>
        <td style="font-weight: bold; font-size: 30px;">${attr.substring(0, 3).toUpperCase()}</td>
        <td><input type="tel" id="${attr}" class="attr-base" value="0" style="width: 75px; text-align: center;"></td>
        <td><input type="number" id="${attr}_racial" class="attr-racial" value="0" style="width: 75px;" readonly></td>
        <td class="outros-col"><input type="number" id="${attr}_outros" class="attr-outros" value="0" style="width: 75px;"></td>
        <td id="total_${attr}" class="total-col">0</td>
    `;
            attributeTableBody.appendChild(row);

            const baseAttrInput = row.querySelector(`#${attr}`);
            const outrosAttrInput = row.querySelector(`#${attr}_outros`);

            baseAttrInput.addEventListener('focusin', (e) => {
                e.target.dataset.previousValue = e.target.value;
            });

            baseAttrInput.addEventListener('input', (e) => validateMinMax(e.target));

            baseAttrInput.addEventListener('change', validatePoints);

            outrosAttrInput.addEventListener('change', updateAll);
        });
    }

    function updateAll() {
        updateTotals();
        updateAvailablePoints();
    }

    function updateTotals() {
        ATTRIBUTES.forEach(attr => {
            const baseValue = parseInt(document.getElementById(attr).value) || 0;
            const racialValue = parseInt(document.getElementById(`${attr}_racial`).value) || 0;
            const outrosValue = parseInt(document.getElementById(`${attr}_outros`).value) || 0;
            document.getElementById(`total_${attr}`).textContent = baseValue + racialValue + outrosValue;
        });
    }

    function calculateAvailablePoints() {
        const costTable = { '-1': -1, '0': 0, '1': 1, '2': 2, '3': 4, '4': 7 };
        let totalCost = 0;
        ATTRIBUTES.forEach(attr => {
            const valor = parseInt(document.getElementById(attr).value);
            if (!isNaN(valor)) { // Adicionado para segurança
                totalCost += costTable[valor] || 0;
            }
        });
        const pontosIniciais = document.getElementById('togglePontos').checked ?
            parseInt(document.getElementById('pontosInput').value) : 10;

        return pontosIniciais - totalCost;
    }

    function updateAvailablePoints() {
        const pontosAtuais = calculateAvailablePoints();
        const pontosDisponiveisEl = document.getElementById("pontos_disponiveis");
        pontosDisponiveisEl.textContent = pontosAtuais;
        pontosDisponiveisEl.style.color = pontosAtuais < 0 ? "red" : "black";
    }

    function applyRaceAttributes(attrs, isChoice, choiceCount, lockedAttrs = [], maxPerAttr = 1) {
        const racialInputs = document.querySelectorAll('input.attr-racial');
        racialInputs.forEach(input => {
            const newEl = input.cloneNode(true);
            input.parentNode.replaceChild(newEl, input);
            const attrName = newEl.id.replace('_racial', '');
            const baseValue = attrs[attrName] || 0;
            newEl.value = baseValue;
            newEl.readOnly = true;
            newEl.disabled = true;
            newEl.min = '';
            newEl.max = '';
        });

        const editableInputs = document.querySelectorAll('input.attr-racial');
        if (isChoice) {
            editableInputs.forEach(input => {
                const attrName = input.id.replace('_racial', '');
                const baseValue = attrs[attrName] || 0;
                if (lockedAttrs && lockedAttrs.includes(attrName)) {
                    return;
                }
                input.disabled = false;
                input.readOnly = false;
                input.min = baseValue;
                input.max = baseValue + maxPerAttr;
                input.addEventListener('change', () => {
                    let totalPointsSpent = 0;
                    editableInputs.forEach(inp => {
                        const currentBase = attrs[inp.id.replace('_racial', '')] || 0;
                        totalPointsSpent += (parseInt(inp.value) || 0) - currentBase;
                    });
                    if (totalPointsSpent > choiceCount) {
                        alert(`Você só pode distribuir ${choiceCount} pontos!`);
                        input.value = (parseInt(input.value) || 0) - (totalPointsSpent - choiceCount);
                        totalPointsSpent = choiceCount;
                    }
                    editableInputs.forEach(inp => {
                        if (lockedAttrs && lockedAttrs.includes(inp.id.replace('_racial', ''))) {
                            inp.disabled = true;
                            return;
                        }
                        const currentBase = attrs[inp.id.replace('_racial', '')] || 0;
                        const isAtBase = (parseInt(inp.value) || 0) === currentBase;
                        inp.disabled = (totalPointsSpent >= choiceCount && isAtBase);
                    });
                    updateAll();
                });
            });
        } else {
            editableInputs.forEach(input => {
                const attrName = input.id.replace('_racial', '');
                if (attrs[attrName] !== undefined) {
                    input.disabled = false;
                }
            });
        }
    }

    function handleRaceChange() {
        const raceId = racaSelect.value;
        const race = RACE_DATA[raceId];
        const customUiContainer = document.getElementById('race-specific-options');
        customUiContainer.innerHTML = '';
        document.getElementById('bonusMessage').innerHTML = '';
        document.getElementById('attribute-table').style.background = '';

        if (!race || raceId === 'outros') {
            applyRaceAttributes({}, false, 0);
            updateAll();
            return;
        }

        document.getElementById('bonusMessage').innerHTML = race.bonusMessage || '';
        document.getElementById('attribute-table').style.background = race.imageUrl ? `url('${race.imageUrl}') no-repeat center center` : "";
        document.getElementById('attribute-table').style.backgroundSize = "75% auto";

        if (race.createCustomUi) {
            race.createCustomUi(customUiContainer);
        }

        const updateFunction = window[`update${raceId.charAt(0).toUpperCase() + raceId.slice(1)}Attributes`];
        if (typeof updateFunction === 'function') {
            updateFunction();
        } else {
            applyRaceAttributes(race.attributes, race.isChoice, race.choiceCount, race.lockedChoiceAttributes, race.maxChoicePerAttribute);
        }
        updateAll();
    }

    function createSuragelUi(container) {
        const herancaOptions = Object.keys(SURAGEL_HERANCAS).map(key =>
            `<option value="${key}">${key}</option>`
        ).join('');

        container.innerHTML = `
            <div>
                <input type="checkbox" id="suragel-variante">
                <label for="suragel-variante">Suragel Variante (Deuses de Arton)</label>
            </div>
            <div id="suragel-heranca-container" class="hidden mt-2">
                <label for="suragel-heranca">Herança:</label>
                <select id="suragel-heranca">
                    ${herancaOptions}
                </select>
            </div>
        `;
        container.querySelector('#suragel-variante').addEventListener('change', updateSuragelAttributes);
        container.querySelector('#suragel-heranca').addEventListener('change', updateSuragelAttributes);
    }

    function updateAggelusAttributes() {
        updateSuragelAttributes();
    }

    function updateSulfureAttributes() {
        updateSuragelAttributes();
    }

    function updateSuragelAttributes() {
        const raceId = racaSelect.value;
        const race = RACE_DATA[raceId];
        if (raceId !== 'aggelus' && raceId !== 'sulfure') return;

        const isVariante = document.getElementById('suragel-variante')?.checked;
        const herancaContainer = document.getElementById('suragel-heranca-container');
        herancaContainer.classList.toggle('hidden', !isVariante);

        let currentAttrs = { ...race.attributes };
        let bonusMessage = race.bonusMessage;
        let finalMessage = "";

        // Pega as duas primeiras linhas da mensagem base (atributos e Herança Divina)
        const baseLines = bonusMessage.split('<br>').slice(0, 2).join('<br>');

        if (isVariante) {
            const herancaKey = document.getElementById('suragel-heranca')?.value;
            const herancaData = SURAGEL_HERANCAS[herancaKey];

            finalMessage = `${baseLines}<br>${herancaData.description}`;

            // Aplica a ação da herança, se houver
            if (herancaData.action) {
                currentAttrs = herancaData.action(currentAttrs);
            }

        } else {
            finalMessage = bonusMessage; // Usa a mensagem original completa
        }

        document.getElementById('bonusMessage').innerHTML = finalMessage;
        applyRaceAttributes(currentAttrs, race.isChoice, race.choiceCount, race.lockedChoiceAttributes, race.maxChoicePerAttribute);
        updateAll();
    }

    function updateGolemAttributes() {
        const race = RACE_DATA.golem;
        if (!race || !race.calculateAttributes) return;
        const result = race.calculateAttributes();
        applyRaceAttributes(result.baseAttributes, result.isChoice, result.choiceCount, [], result.maxChoicePerAttribute);
        updateAll();
    }

    function updateAberrantAttributes() {
        const race = RACE_DATA.aberrant;
        if (!race || !race.calculateAttributes) return;
        const result = race.calculateAttributes();
        applyRaceAttributes(result.baseAttributes, result.isChoice, result.choiceCount);
        updateAll();
    }

    function updateKoboldAttributes() {
        const race = RACE_DATA.kobold;
        if (!race || !race.calculateAttributes) return;
        race.calculateAttributes();
        updateAll();
    }

    function updateMoreauAttributes() {
        const race = RACE_DATA.moreau;
        if (!race || !race.calculateAttributes) return;
        const result = race.calculateAttributes();
        applyRaceAttributes(result.baseAttributes, result.isChoice, result.choiceCount, [], result.maxChoicePerAttribute);
        updateAll();
    }

    function updateDuendeAttributes() {
        const race = RACE_DATA.duende;
        if (!race || !race.calculateAttributes) return;
        const result = race.calculateAttributes();
        applyRaceAttributes(result.baseAttributes, result.isChoice, result.choiceCount, [], result.maxChoicePerAttribute);
        updateAll();
    }

    function handleFilterChange() {
        const selectedTypes = new Set();
        document.querySelectorAll('.race-filter:checked').forEach(cb => selectedTypes.add(cb.dataset.raceType));
        Array.from(racaSelect.options).forEach(option => {
            if (option.value === 'outros') {
                option.style.display = 'block';
                return;
            }
            const raceData = RACE_DATA[option.value];
            if (raceData) {
                if (raceData.type === 'base' || selectedTypes.has(raceData.type)) {
                    option.style.display = 'block';
                } else {
                    option.style.display = 'none';
                }
            }
        });
        const currentRaceData = RACE_DATA[racaSelect.value];
        if (currentRaceData && racaSelect.options[racaSelect.selectedIndex].style.display === 'none') {
            racaSelect.value = 'outros';
            handleRaceChange();
        }
    }

    document.getElementById('config-button').addEventListener('click', () => {
        document.getElementById('opcoes').style.display = 'block';
    });
    document.getElementById('close-config-button').addEventListener('click', () => {
        document.getElementById('opcoes').style.display = 'none';
    });
    document.getElementById('reset-button').addEventListener('click', () => {
        window.location.reload();
    });
    document.querySelectorAll('.race-filter').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
    racaSelect.addEventListener('change', handleRaceChange);

    const PROMPT_ELEMENTS = {
        poses: ["in a heroic pose", "crouching and ready for battle", "meditating in silence", "staring at the horizon", "running at full speed", "delivering a powerful blow", "casting a spell", "hiding in the shadows", "with arms crossed, imposing"],
        attire: ["full plate armor", "adventurer's leather clothes", "an ornate mage robe", "ceremonial cleric vestments", "extravagant noble attire", "wild animal pelts", "light and stealthy armor", "blacksmith clothes with soot"],
        heldItems: ["holding a shining sword", "with an ancient staff in hand", "wielding a battle axe", "with a longbow drawn", "holding twin daggers", "with a shield and mace", "holding an orb of energy", "with an open tome of spells"],
        locations: ["in an ancient forest", "on top of a rocky mountain", "in a bustling tavern", "in the ruins of a castle", "inside a damp dungeon", "in an underground city", "in a dark swamp", "in a clearing under the moonlight"]
    };
    const fixedCharacteristics = "4k, ultra detailed, intricate details, photorealistic, cinematic lighting, volumetric lighting, photographic, Unreal Engine, anime style";

    function generateRandomPrompt() {
        const racaId = racaSelect.value;
        const raceData = RACE_DATA[racaId];
        const promptGerado = document.getElementById("promptGerado");
        if (!raceData || racaId === 'outros') {
            promptGerado.textContent = "Please select a race first.";
            return;
        }
        let promptText = "";
        if (racaId === "golem") {
            const chassiValue = document.getElementById("golem-chassi")?.value || 'stone';
            const action = ["guarding an ancient site", "in the middle of a construction", "standing still like a statue", "in a battle-ready pose"];
            const randomAction = action[Math.floor(Math.random() * action.length)];
            promptText = `A golem made of ${chassiValue}, ${randomAction}, ${fixedCharacteristics}`;
        } else {
            const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
            const pose = getRandom(PROMPT_ELEMENTS.poses);
            const vestimenta = getRandom(PROMPT_ELEMENTS.attire);
            const item = getRandom(PROMPT_ELEMENTS.heldItems);
            const local = getRandom(PROMPT_ELEMENTS.locations);
            const raceName = raceData.name.split(' ')[0].replace('(', '');
            promptText = `A ${raceName}, ${pose}, wearing ${vestimenta}, ${item}, in ${local}, ${fixedCharacteristics}`;
        }
        promptGerado.textContent = promptText;
    }

    document.getElementById('gerarPrompt').addEventListener('click', generateRandomPrompt);
    document.getElementById('copiarPrompt').addEventListener('click', () => {
        const promptText = document.getElementById("promptGerado").textContent;
        if (promptText && !promptText.startsWith("Please select")) {
            navigator.clipboard.writeText(promptText).then(() => {
                alert("Prompt copied!");
            }).catch(err => {
                console.error('Error copying text: ', err);
            });
        }
    });

    function makeDraggable(element) {
        let isDragging = false;
        let offsetX, offsetY;
        element.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON' || e.target.tagName === 'LABEL' || e.target.tagName === 'SPAN') {
                return;
            }
            isDragging = true;
            offsetX = e.clientX - element.offsetLeft;
            offsetY = e.clientY - element.offsetTop;
            element.style.cursor = 'grabbing';
        });
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                element.style.left = `${e.clientX - offsetX}px`;
                element.style.top = `${e.clientY - offsetY}px`;
            }
        });
        document.addEventListener('mouseup', () => {
            isDragging = false;
            element.style.cursor = 'move';
        });
    }

    // --- INICIALIZAÇÃO ---
    populateAttributeTable();
    populateRaceSelect();
    handleRaceChange();
    handleFilterChange();
    document.getElementById('reset-button').addEventListener('click', () => window.location.reload());
});
