import ChapterContent from '@/components/ChapterContent'
import { notFound } from 'next/navigation'

// Função para extrair o conteúdo do capítulo do arquivo original
const extractChapterContent = (content: string, chapterNumber: number): string => {
        // Esta função processaria o conteúdo do arquivo Notes_250411_000103.txt
        // e extrairia apenas o conteúdo do capítulo específico
        // Para fins de demonstração, estamos usando conteúdo fixo

        const chapters = [
                // Capítulo 1
                `Capítulo 1 — "Começos"

O som dos passos apressados ecoava pelos corredores da universidade enquanto os alunos se movimentavam em busca das salas corretas. Era o primeiro dia de aula do semestre, e o campus ganhava vida com risos, conversas e um leve nervosismo no ar.

Nicole segurava firme sua mochila, os olhos varrendo os corredores como se tentasse absorver cada detalhe daquele novo mundo. Seus cabelos escuros balançavam a cada passo, e uma leve ansiedade dançava em seu peito.

Ela era uma caloura, e tudo parecia tão maior do que esperava.

— Ei, tá perdida? — perguntou uma voz calma e um pouco rouca.

Nicole virou o rosto e viu Nick, um rapaz de olhar sereno e postura despreocupada, encostado casualmente numa das colunas do corredor. Ele segurava um copo de café com uma das mãos e tinha uma vibe estranhamente acolhedora, mesmo com seu visual levemente alternativo.

— Eu... talvez — ela admitiu com um sorriso tímido. — Estou procurando a sala de Design de Personagens I.

Nick deu um leve sorriso de canto, levantando a sobrancelha.

— Aula com o professor Murakami? Eu também tive com ele. Posso te mostrar onde fica.

Nicole assentiu, e os dois começaram a caminhar juntos.

— Obrigada. É meu primeiro dia aqui... e confesso que achei que estaria mais preparada — disse ela, rindo sem graça.

— Ninguém tá preparado no começo. A gente só finge bem — respondeu Nick, tomando mais um gole do café.

Durante o caminho, Nicole começou a relaxar. Nick não falava muito, mas também não deixava o silêncio desconfortável. Ele só... acompanhava. Escutava. Dava espaço. E isso foi o suficiente.

— Aqui é a sala. Ele costuma chegar uns cinco minutos atrasado, então você tem tempo — disse ele, parando em frente à porta.

Nicole sorriu. Aquele gesto simples a fez sentir menos sozinha.

— Valeu mesmo. E... qual seu nome?

— Nick. E você?

— Nicole.

— Hm... Nick e Nicole? — ele soltou uma risada leve. — Isso vai confundir a galera.

Ela riu junto, balançando a cabeça.

— Acho que sim.

Eles se despediram ali, com um aceno leve. Nada dramático, nada que parecesse especial. Mas enquanto Nicole se sentava na sala e abria seu caderno, percebeu que ainda pensava naquele veterano de olhar tranquilo.

E Nick, enquanto voltava pelos corredores, sentia uma curiosidade inesperada por aquela garota nova, de sorriso tímido e olhar intenso.

Mas nenhum dos dois notou. Ainda não.

---

Fim do capítulo.`,

                // Capítulo 2
                `Capítulo 2 — "Caminhos que se Cruzam"

O campus da universidade ainda carregava aquele ar de novidade, com estudantes cruzando os corredores em busca de salas, cartazes de clubes estampados por todos os lados e uma brisa morna de início de outono balançando as folhas das árvores.

Nicole caminhava com o mapa do campus aberto no celular, franzindo a testa.
— "Sala 206 do bloco D… ou era do bloco C…?" — murmurava baixinho, virando o aparelho de cabeça pra baixo, como se isso fosse ajudar.

Nick, que passava com fone de ouvido e um copo de café na mão, a notou de longe. Ele reconheceu o rosto — afinal, tinham se esbarrado no primeiro dia, e a expressão de confusão era inconfundível.

— "Se continuar andando nessa direção, você vai parar no estacionamento." — ele disse, parando ao lado dela com um meio sorriso.

Nicole piscou algumas vezes e deu um risinho nervoso.
— "Ah… eu sabia. Tava testando você…" — ela respondeu, desviando o olhar enquanto desligava o mapa.

Nick deu uma risadinha, colocando o café no parapeito de uma mureta próxima.
— "Bloco D é pra lá. Eu te levo, tô indo naquela direção."

Nicole hesitou por um segundo antes de assentir com um sorriso tímido.
— "Valeu, veterano."

Os dois começaram a andar lado a lado. Era um silêncio confortável, com o som dos passos e o vento preenchendo o espaço entre eles. Nicole olhava ao redor com curiosidade, enquanto Nick, que já conhecia cada canto dali, a observava com o canto dos olhos.

— "Tá curtindo a faculdade até agora?" — ele perguntou, quebrando o silêncio.

— "Sim… quer dizer, meio perdida ainda. Mas o pessoal parece legal. E você?"

— "Já me acostumei. Mas sempre tem algo novo por aqui. Tipo calouras que tentam andar até o estacionamento achando que é o bloco D." — ele falou com um sorriso provocativo.

Nicole riu e empurrou levemente o ombro dele.
— "Hey! Eu tava só… explorando!"

Nick sorriu de volta, e por um breve momento, os dois se olharam e pareceram esquecer o tempo. Não era nada grandioso, nada cinematográfico — apenas um instante onde os olhos se encontraram, e havia um tipo de paz ali. Natural. Leve.

Chegando perto da sala, Nick apontou com o queixo.
— "É aqui. Sala 206."

— "Obrigada… de novo." — ela respondeu.

Nick pegou o café de volta e fez um gesto leve com a cabeça.
— "Se se perder de novo, só me procurar. Tô sempre por aí."

— "Vou anotar isso." — ela respondeu, sorrindo.

Nicole entrou na sala, e Nick ficou parado por um segundo. O sorriso dela, mesmo tímido, ficou na cabeça dele por mais tempo do que imaginava. Ele deu um gole no café e murmurou pra si mesmo:

— "Ela tem uma risada bonita…"

E então seguiu o caminho dele, sem perceber que, aos poucos, aquela garota de mapa na mão já tinha marcado alguma coisa dentro dele.

---

Fim do capítulo.`,

                // Capítulo 3
                `Capítulo 3 — "Uma pausa entre aulas"

Os corredores da universidade se enchiam de vozes e passos apressados. Era hora do intervalo entre os turnos, e os alunos se espalhavam pelo campus — uns correndo para os clubes, outros em busca de um lanche ou um lugar mais tranquilo para respirar.

Nicole, com a mochila pendurada de lado e os fones enroscados nos dedos, caminhava pelo jardim central da faculdade. Ela ainda se sentia um pouco deslocada, tentando entender sua própria rotina naquele lugar tão novo, mas não demonstrava isso. Seus olhos estavam atentos a cada detalhe ao redor: o som dos pássaros, o cheiro do café vindo da lanchonete, os alunos rindo em grupinhos.

Ela procurava um lugar pra sentar quando ouviu uma voz familiar:

— "Ei, caloura perdida de novo?" — disse Nick, encostado numa árvore, com uma caixa de suco na mão e uma mochila jogada no chão ao lado dele.

Nicole ergueu a sobrancelha com um sorriso enviesado.
— "Você só me vê perdida ou anda me perseguindo, veterano?"

Nick riu e deu de ombros.
— "Talvez um pouco dos dois. Quer sentar?"

Ela olhou ao redor. Todos os bancos estavam ocupados por grupos barulhentos, mas o lugar onde Nick estava parecia... tranquilo. Ela assentiu, sentando ao lado dele, com uma certa timidez que tentava disfarçar brincando com os fones nas mãos.

— "Então, qual é o seu curso mesmo?" — ele perguntou, virando ligeiramente o rosto pra ela.

— "Design. Quero trabalhar com arte digital… ou animação. Tô na dúvida ainda." — respondeu Nicole, agora olhando o céu entre as folhas das árvores.

Nick abriu um sorriso discreto.
— "Faz sentido. Você tem cara de quem vive rabiscando alguma coisa no canto do caderno."

Nicole sorriu de canto.
— "E você? Já tá no fim do curso?

— "Quase. Último ano de comunicação. Mas já tô cansado como se tivesse uns cinquenta anos." — ele disse, fingindo um suspiro dramático.

Nicole riu.
— "Não parece, viu? Ainda tá no pique de provocar calouras."

Nick a olhou de lado, e por um momento, ela percebeu que ele não era só o cara que tirava sarro dela. Havia um cansaço discreto nos olhos dele, mas também algo gentil, um tipo de calma que era reconfortante.

— "É legal conversar com você, sabia?" — ela soltou, quase sem perceber.

Nick se virou um pouco surpreso.
— "É? Por quê?"

Nicole deu de ombros, sorrindo.
— "Você me trata como se eu já fizesse parte daqui. E isso ajuda. Tipo… muito."

Ele ficou em silêncio por um segundo, olhando pra ela, e então desviou os olhos com um sorriso pequeno, mas sincero.

— "Talvez você já faça."

A frase pairou no ar. Ambos fingiram não dar muita importância a ela, voltando os olhos para o céu e para os sons ao redor, como se não significasse nada… embora, no fundo, tivesse deixado algo marcado. Não era amor, ainda. Mas era o início de um laço que, dia após dia, ficaria mais forte — sem que eles percebessem.

---

Fim do capítulo.`,

                // Capítulo 4
                `Capítulo 4 — "Chuva inesperada"

O céu já estava meio fechado desde o começo da tarde, mas ninguém parecia dar bola. A maioria dos alunos ainda circulava pelo campus, e Nicole, como de costume, saía da aula distraída, os fones no pescoço e o olhar voltado pro celular, respondendo mensagens do grupo da turma. Ela não percebeu as nuvens se juntando acima dela até ouvir o primeiro trovão.

— "Sério isso?" — murmurou, olhando pra cima, justo quando as primeiras gotas começaram a cair.

Apressou o passo, protegendo o cabelo com a manga do moletom. A chuva engrossou rápido, pegando todos desprevenidos. O jardim se esvaziava enquanto os estudantes corriam para os pavilhões mais próximos.

Nicole correu até a cobertura do prédio de comunicação, onde encontrou alguns alunos se abrigando. E lá, encostado na parede, com a mochila no chão e uma latinha de café na mão, estava Nick. Ele olhou pra ela, com aquele sorriso de canto costumeiro.

— "Acho que a chuva tem uma queda por você, caloura."

Nicole bufou, ofegante pela correria.
— "Se ela gosta de mim, tem um jeito bem ruim de demonstrar."

Nick riu, afastando-se um pouco da parede para dar espaço.
— "Vem pra cá, ainda dá pra fugir de ficar encharcada."

Ela entrou debaixo da cobertura e ajeitou os cabelos.
— "Você sempre aparece nesses momentos, né?"

— "Talvez eu só esteja no lugar certo na hora certa. Ou talvez eu só goste de ver você correndo da chuva."

Nicole deu uma risada leve e sentou no chão encostada à parede, deixando a mochila do lado. Nick se sentou também, cruzando as pernas.

Os dois ficaram em silêncio por um instante, apenas ouvindo o barulho da chuva batendo no telhado de metal e o som distante de alunos correndo ou rindo. A cena era tranquila, quase cinematográfica.

— "Tem algo de bom nisso," disse Nicole, olhando a água escorrer.
— "No quê?"
— "Na chuva. Tipo… ela obriga a gente a parar, sabe? A não correr tanto."

Nick olhou pra ela com um ar surpreso.
— "Você sempre fala essas coisas meio poéticas assim?"

— "Só quando eu tô com alguém que escuta." — respondeu ela, com um sorriso tímido.

Ele ficou em silêncio por alguns segundos, encarando a chuva como se digerisse aquelas palavras.
— "Então vou continuar escutando."

Nicole sentiu algo estranho com aquela resposta. Um leve aquecimento no peito. Mas ignorou. Era só uma conversa, certo?

Depois de um tempo ali, rindo de bobagens, falando sobre matérias, professores esquisitos e comidas ruins da cantina, a chuva começou a parar. Eles se levantaram devagar, como se não tivessem pressa de ir embora.

— "Acho que agora dá pra voltar," disse Nicole, ajeitando a alça da mochila.

— "Te acompanho," respondeu Nick, andando ao lado dela pelo caminho molhado, os dois desviando de poças, conversando baixinho.

Nem um nem outro percebeu o quanto estavam sorrindo ao final do trajeto. Também não notaram como haviam parado de tratar aquilo como apenas mais uma coincidência.

Afinal, talvez a chuva realmente tivesse uma queda por eles.

---

Fim do capítulo.`,

                // Capítulo 5
                `Capítulo 5 — "Entre conversas e silêncios"

A semana seguinte à chuva parecia mais leve. O campus ainda estava molhado em alguns pontos, mas o clima estava mais ameno, e as árvores tinham aquele cheiro gostoso de terra molhada misturado com flores de outono. Era como se tudo tivesse desacelerado um pouco — inclusive Nicole.

Ela chegava mais cedo nas aulas, andava menos apressada, e às vezes, mesmo sem perceber, olhava pelos corredores procurando Nick. Não era algo consciente. Era mais como uma expectativa silenciosa. Um costume novo.

Do outro lado, Nick estava igual. Mesmo com a rotina corrida dos veteranos, ele se pegava pensando nela nos momentos mais aleatórios — tipo enquanto esquentava miojo no micro-ondas da sala de design ou enquanto escutava música no intervalo.

Na quinta-feira, após uma aula longa de semiótica, Nicole saiu da sala coçando a cabeça.

— "Não sei se meu cérebro entendeu ou só desistiu de tentar."

Foi quando sentiu alguém cutucar seu ombro.
— "Você sobreviveu. Isso já conta como vitória." — Nick sorriu, apoiado na parede.

— "Você me persegue ou tem um radar específico pra quando eu tô surtando?"

— "Os dois. Mas se te consola, eu também saí de uma aula que parecia ter sido dada em aramaico."

Nicole riu e, sem dizer nada, começou a caminhar com ele ao lado. Os passos eram calmos, como se ambos soubessem que não precisavam ir pra lugar nenhum com pressa.

— "Ei, tô indo pegar café. Quer vir?"
— "Se for do bom, sim. Se for daquele da máquina, não."
— "Então é sim. Tô com sorte hoje."

Eles seguiram até a cafeteria do campus, pegaram os cafés e se sentaram num banco de concreto no pátio, onde a luz do fim da tarde dourava tudo ao redor. Era um daqueles momentos que pareciam pequenos demais pra serem importantes — mas eram.

Nick abriu o caderno dele e mostrou algumas ideias de um projeto. Nicole se interessou logo.
— "Você realmente desenha tudo isso?"
— "Desde sempre. Mas nunca mostro pra muita gente."

— "Por quê?"
— "Acho que é meio íntimo. Tipo mostrar uma parte que eu não sei se as pessoas vão entender."

Ela ficou em silêncio por um instante, depois olhou pra ele.
— "Eu entendo."

A resposta foi simples, mas carregada de significado. Nick olhou pra ela de volta, e por um breve momento, houve silêncio entre os dois. Mas não era um silêncio desconfortável. Era cheio. Quase denso.

Ele desviou o olhar com um sorrisinho.
— "Você é meio diferente, Nicole."

— "Você também, Nick."

Eles continuaram ali por mais um tempo, falando sobre nada e tudo. Rindo de piadas internas que começaram a surgir, dividindo o fone de ouvido pra ouvir uma música nova que Nicole tinha descoberto. O sol descia devagar no céu, deixando os dois envoltos numa luz dourada.

Enquanto Nick falava sobre um antigo professor esquisito que sempre usava meias de banana, Nicole observava a forma como ele gesticulava, o jeito que os olhos dele ficavam levemente semicerrados quando ria. Algo dentro dela apertou — mas era um aperto bom. Familiar. Quase aconchegante.

Ela ignorou. Ele também.

Porque, como em Horimiya, o romance deles não nasceria com confissões dramáticas ou gestos grandiosos. Ele crescia assim: entre cafés divididos, piadas compartilhadas e silêncios confortáveis.

E nenhum dos dois percebia — ainda.

---

Fim do capítulo.`,

                // Capítulo 6
                `Capítulo 6 — "As Pequenas Coisas"

O calor do início do outono começava a dar lugar a brisas mais suaves. O campus estava mais silencioso naquele sábado de manhã, com poucos alunos andando pelos corredores. Nicole havia chegado cedo para trabalhar em um projeto solo, mas, ao passar pela sala de multimídia, viu algo familiar.

Nick estava ali, de fones, editando algo no computador. A luz do monitor refletia nos olhos dele, e havia um copo vazio de café ao lado do teclado.

Ela ficou parada na porta, observando por alguns segundos antes de bater de leve na madeira.

— Trabalhando de novo? — perguntou com um sorriso.

Nick tirou um dos fones e olhou pra ela.
— Você também tá aqui num sábado? Achei que só eu era doente o suficiente pra isso.

Nicole entrou, sentando na cadeira ao lado.
— Meu cérebro funciona melhor longe da gritaria do pessoal. Aqui é tipo... um santuário.

Nick esticou o braço, entregando um fone pra ela.
— Quer ouvir? É a trilha que tô pensando em usar pra um vídeo do projeto.

Ela colocou o fone, e os dois ficaram ali, compartilhando o mesmo áudio. A música era suave, meio melancólica, mas reconfortante.

— Isso combina com teu projeto... e contigo — comentou Nicole, olhando pro monitor.

— Comigo? — ele riu, curioso.

— É. Meio introspectivo, mas cheio de detalhes. Só percebe quem olha com calma.

Nick não soube o que responder. Mas aquela frase ficou ecoando nele.

Algum tempo depois, já com o sol mais alto, Nicole se espreguiçou.

— Ei, tô com fome. Vamos comer algo?

— Bora. Conheço um lugar ali perto que é barato e tem um karaokê.

Ela arqueou uma sobrancelha.
— Karaokê?

— O que foi? Você não canta?

— Só no banho... e mesmo assim mal.

— Então vai ser perfeito. Eu canto pior ainda — disse ele, levantando e estendendo a mão.

Nicole segurou, e os dois saíram juntos, o som dos passos ecoando pelo corredor vazio. Era só um almoço. Só um karaokê. Mas havia algo diferente naquela naturalidade. Algo que crescia devagar, feito flor em dia nublado.

Sem eles perceberem... estavam ficando cada vez mais próximos.

---

Fim do capítulo.`,

                // Capítulo 7
                `Capítulo 7 — "Ecos na Silhueta da Tarde"

O calor do início do outono começava a dar lugar a brisas mais suaves. O campus estava mais silencioso naquele sábado de manhã, com poucos alunos andando pelos corredores. Nicole havia chegado cedo para trabalhar em um projeto solo, mas, ao passar pela sala de multimídia, viu algo familiar.

Nick estava ali, de fones, editando algo no computador. A luz do monitor refletia nos olhos dele, e havia um copo vazio de café ao lado do teclado.

Ela ficou parada na porta, observando por alguns segundos antes de bater de leve na madeira.

— Trabalhando de novo? — perguntou com um sorriso.

Nick tirou um dos fones e olhou pra ela.
— Você também tá aqui num sábado? Achei que só eu era doente o suficiente pra isso.

Nicole entrou, sentando na cadeira ao lado.
— Meu cérebro funciona melhor longe da gritaria do pessoal. Aqui é tipo... um santuário.

Nick esticou o braço, entregando um fone pra ela.
— Quer ouvir? É a trilha que tô pensando em usar pra um vídeo do projeto.

Ela colocou o fone, e os dois ficaram ali, compartilhando o mesmo áudio. A música era suave, meio melancólica, mas reconfortante.

— Isso combina com teu projeto... e contigo — comentou Nicole, olhando pro monitor.

— Comigo? — ele riu, curioso.

— É. Meio introspectivo, mas cheio de detalhes. Só percebe quem olha com calma.

Nick não soube o que responder. Mas aquela frase ficou ecoando nele.

Algum tempo depois, já com o sol mais alto, Nicole se espreguiçou.

— Ei, tô com fome. Vamos comer algo?

— Bora. Conheço um lugar ali perto que é barato e tem um karaokê.

Ela arqueou uma sobrancelha.
— Karaokê?

— O que foi? Você não canta?

— Só no banho... e mesmo assim mal.

— Então vai ser perfeito. Eu canto pior ainda — disse ele, levantando e estendendo a mão.

Nicole segurou, e os dois saíram juntos, o som dos passos ecoando pelo corredor vazio. Era só um almoço. Só um karaokê. Mas havia algo diferente naquela naturalidade. Algo que crescia devagar, feito flor em dia nublado.

Sem eles perceberem... estavam ficando cada vez mais próximos.

---

Fim do capítulo.`,

                // Capítulo 8
                `Capítulo 8 — "Entre Corações Atrapalhados"

O campus parecia diferente naquela tarde. O sol, mais baixo, tingia tudo de dourado — os corredores, os degraus da entrada, até mesmo o reflexo nas janelas da biblioteca parecia brilhar com um toque mais suave.

Nick estava sentado nos degraus do bloco principal, fones nos ouvidos, olhando pro céu como se esperasse uma resposta de algum pensamento distante. Nicole vinha caminhando devagar, segurando um caderno contra o peito, distraída com algo no celular. Quando ela o viu, sorriu automaticamente.

— Tá sempre nesse mesmo lugar... parece até que faz parte da arquitetura já. — ela disse, parando na frente dele.

Nick tirou um dos fones, meio sonolento.
— Talvez eu seja só um elemento decorativo sofisticado. Deveria me pintar de bronze e cobrar por foto.

Nicole riu, sentando ao lado dele.
— Acho que seria um ótimo ponto turístico. "Venha ver o Nick que não vai pras aulas mas tá sempre presente."

Os dois riram juntos. O silêncio que se seguiu não foi estranho — foi leve, confortável. O tipo de silêncio que não exige explicação.

— Te procurei na aula de teoria hoje. — Nicole disse, ajeitando uma mecha de cabelo atrás da orelha.

— Tive que resolver um problema com a coordenação... documento da bolsa, aquelas burocracias chatas.
— Entendi... — ela respondeu, olhando pra frente, e completou quase em um sussurro:
— Senti sua falta.

Nick virou o rosto devagar, encarando o perfil dela. Os cílios longos, a expressão suave. Por um segundo, o tempo pareceu prender a respiração.

— Você tá ficando sentimental, hein? — ele provocou, tentando soar leve, mas com a voz falhando de leve no final.

— Não enche, só achei a aula mais sem graça sem alguém pra comentar bobagens comigo. — ela rebateu com um empurrãozinho de leve no ombro dele.

O toque, embora simples, acendeu uma faísca invisível entre eles. Ambos notaram — mas não disseram nada. Como se qualquer palavra quebrasse aquele clima delicado demais pra ser nomeado.

Nicole puxou o caderno e abriu numa página rabiscada.
— Tava tentando desenhar você ontem... mas ficou uma aberração. — ela mostrou, meio rindo.

Nick pegou o caderno, analisando o desenho. Tinha algo de carinhoso na maneira como ela o desenhou — mesmo que meio torto, era reconhecível.
— Achei fofo. Posso guardar?

Ela piscou, surpresa.
— Sério?

— Uhum. Um dia quando a gente for famoso, posso vender isso como "o retrato original da artista misteriosa".

Nicole sorriu, e seu olhar se demorou um pouco mais no rosto dele. Por um instante, algo queria escapar dos lábios dela, mas ela segurou. Assim como ele segurou o impulso de encostar a testa na dela.

As luzes do poste se acendiam uma a uma. O céu tingido de lilás já entregava que o dia estava acabando. Mas ali, entre os dois, parecia que o tempo apenas começava.

E mais uma vez, o capítulo se encerrava sem que eles percebessem: já estavam mais próximos do que antes.

---

Fim do capítulo.`,

                // Capítulo 9
                `Capítulo 9 — "Calda de maçã e silêncios"

A cafeteria da universidade estava quase vazia. Era fim de tarde de uma sexta-feira, o sol entrava de lado pelas janelas amplas, criando linhas douradas no chão de madeira. Nick estava na fila, meio distraído, enquanto Nicole escolhia uma mesa perto da janela.

Ela parecia mais quieta naquele dia. O olhar distante, os dedos desenhando linhas invisíveis sobre a mesa. Quando ele voltou com dois cafés, deixou o dela na frente e se sentou.

— Você tá esquisita hoje. Tudo bem?

Nicole sorriu de leve, pegando o copo.
— Só pensando… o semestre já tá passando tão rápido, né?

Nick apoiou o queixo na mão, encarando ela de um jeito que nem ele mesmo percebia.
— Você se acostumou bem. Achei que fosse demorar mais pra se enturmar.

— Talvez tenha sido por causa de alguém que me puxou pra perto desde o primeiro dia. — ela disse, com um olhar significativo.

Os olhos de Nick encontraram os dela. Havia algo ali... uma atmosfera mais densa, mais suave ao mesmo tempo. As palavras pareciam desnecessárias naquele momento.

Nicole abaixou o olhar, como se percebesse que tinha dito mais do que devia.

— Se continuar me olhando assim, vou achar que tem alguma coisa errada comigo. — ela brincou, tentando tirar o peso do ar.

Nick riu baixinho, mas não tirou os olhos dela.
— Tem sim. Você é esquisita. Mas... daquelas esquisitas boas de ter por perto.

Nicole deu um sorrisinho torto, balançando a cabeça. O silêncio que se seguiu foi... estranho. Não desconfortável, só... cheio. Cheio de algo que nenhum dos dois conseguia nomear. Um quase toque, um quase beijo... um quase tudo.

E foi exatamente nesse "quase" que a garçonete chegou com um pedaço de torta de maçã — só que errou a mesa e colocou em cima do caderno de Nicole, sujando tudo de calda.

— Aí não, moça... esse era meu novo projeto! — Nicole se levantou num pulo, pegando o caderno com uma expressão de desespero cômico.

Nick segurou o riso, tentando parecer solidário, mas claramente se divertindo.
— Seu projeto agora virou sobremesa experimental. Arte interativa. Muito à frente do seu tempo.

Nicole deu um tapa leve no ombro dele.
— Você não presta!

— Mas você riu. — ele disse, meio baixo, meio orgulhoso.
E ela realmente riu. Daquelas risadas de fechar os olhos e esquecer do mundo por alguns segundos.

Quando se sentaram de novo, ainda rindo, a tensão do momento anterior parecia ter sumido. Mas a verdade era que ela só tinha se escondido entre as camadas de torta e palavras não ditas.

E nenhum dos dois percebeu... mas estavam cada vez mais presos naquele laço invisível que não se desfaz fácil.

---

Fim do capítulo.`,

                // Capítulo 10
                `Capítulo 10 — "Entre Palavras Não Ditas"

O sol já tinha começado a descer quando os dois saíram da cafeteria. Nicole ainda limpava com cuidado o caderno manchado de calda, segurando-o contra o peito como se aquilo fosse salvar o projeto.

Nick andava ao lado, com as mãos no bolso e aquele meio sorriso de quem não sabe se se desculpa ou se zoa mais.

— Você acha que vai sair essa mancha? — ela perguntou, erguendo o caderno em direção à luz.

— Acho que agora tem personalidade. Vai chamar mais atenção na banca final.

Nicole bufou, mas o canto da boca tremia, tentando segurar o riso.

— Você devia ser banido de qualquer cafeteria com torta.

— A culpa foi da garçonete! — ele levantou as mãos em rendição.

— Você riu. Isso te torna cúmplice. — ela respondeu, cutucando o braço dele com o ombro.

Eles seguiram andando pelo campus, onde algumas árvores já começavam a perder folhas. As sombras se alongavam na calçada e havia um certo silêncio entre eles... não desconfortável, mas carregado de algo que ainda não tinha nome.

Nicole olhou para o céu dourado e, sem pensar muito, soltou:

— Sabia que eu achei que você fosse arrogante no começo?

Nick a olhou de lado, surpreso.
— Sério?

— Uhum. Você tem essa cara de "eu sei de tudo".

— Mas eu sei de tudo. — ele respondeu, sério, e os dois começaram a rir de novo.

Ela chutou uma folhinha no chão.
— Mas você foi legal comigo. Acho que você foi o primeiro veterano que não tratou a gente como... peso.

— É que você tinha cara de perdida. Fiquei com dó. — ele disse com deboche.

— Seu idiota! — ela reclamou, mas a voz soou mais doce do que irritada.

Eles pararam de andar quando chegaram perto do prédio principal. Nicole abraçou o caderno e olhou para cima, encarando as janelas do ateliê.

— Acho que vou subir e tentar salvar isso aqui.

Nick assentiu.
— Quer ajuda?

Ela hesitou um pouco. Seus olhos encontraram os dele por uns segundos a mais.

— Acho que consigo sozinha hoje... — ela disse, sorrindo, mas com um brilho diferente no olhar.

Nick balançou a cabeça, aceitando.
— Se precisar, só mandar mensagem. Ou sinal de fumaça, sei lá.

Nicole riu, começou a se afastar, mas parou depois de dois passos. Virou-se com uma expressão leve.

— Nick?

— Hmm?

— Você foi o melhor erro de julgamento que eu já tive.

E antes que ele pudesse responder, ela já tinha virado de costas e subido as escadas, deixando ele ali, parado, com o coração batendo mais rápido — e sem saber bem por quê.

Ele coçou a nuca e soltou um suspiro, ainda sorrindo sozinho.

— Que menina esquisita...

Mas naquele momento, ele percebeu que não queria que ela mudasse nem um pouco.

---

Fim do capítulo.`,

                // Capítulo 11
                `Capítulo 11 — "Notificação às 22:47"

O som das teclas ecoava no quarto silencioso. A luz azulada do monitor iluminava o rosto de Nick, que estava editando algo para um projeto da faculdade. A escrivaninha estava bagunçada: caneca com resquício de café frio, cadernos rabiscados, um fone largado sobre a mesa... e o celular, virado para baixo.

Nicole não tinha mandado nada desde mais cedo, e por algum motivo... ele reparou nisso.
"Será que ela tá ocupada? Ou talvez só... sei lá, vivendo a vida dela."

Ele riu sozinho, meio bobo, e esticou os braços, deixando o corpo tombar um pouco na cadeira gamer. A playlist de lo-fi tocava baixinho. O ponteiro do mouse parou sobre uma linha de texto. O silêncio confortava.

Até que — "trimm!" — uma notificação vibrou.

Nick pegou o celular distraído, já esperando um meme de algum grupo ou spam de app. Mas... não era nada disso.

Número desconhecido.

A prévia da mensagem, com aquelas palavras simples, fez seus olhos arregalarem devagar.

> "Oi, Nick. Não sei se você ainda lembra de mim, mas..."

Ele parou de respirar por um segundo. O nome na mensagem não aparecia, mas algo naquela frase... o jeito como foi escrita, direto ao ponto, mas com hesitação... fez sua mente correr pra memórias há muito tempo guardadas.

Sentou na beira da cama, os olhos fixos no visor. O quarto parecia mais frio agora.
"Será que é...?

> "...eu só pensei em mandar isso hoje. Não tô esperando muita coisa, mas... precisava tentar."

Seu coração acelerou. Aquilo não era só uma coincidência. A sensação era inconfundível. O tipo de coisa que você não consegue ignorar.

Ele olhou pro nome que ainda não se revelava, e ficou parado ali, por alguns minutos. O barulho da chuva começando lá fora combinava com o silêncio da dúvida.

Finalmente, ele digitou uma resposta:

> "Eu lembro. Por que agora?"

E enviou.

Sem saber o que esperar.
Sem saber o que aquilo significava.
Sem saber... que o passado estava voltando a bater à porta.

---

Fim do capítulo.`,

                // Capítulo 12
                `Capítulo 12 — "Silêncios e Sinais"

A semana começou com o céu nublado, como se refletisse o humor de Nick. O corredor da universidade estava cheio, mas ele caminhava entre os estudantes como se não estivesse ali de verdade, os olhos perdidos em pensamentos, as mãos nos bolsos do moletom cinza.

Nicole percebeu logo de cara.

— Nick... ei, Nick! — ela acenou, chamando a atenção dele do outro lado da fonte do pátio central.

Ele demorou alguns segundos pra perceber que ela o chamava, e quando respondeu, foi com um sorriso fraco.

— Opa... e aí, Nicole.

Ela franziu o cenho. O Nick de sempre era animado, um pouco sarcástico, às vezes até brincalhão demais. Mas agora… parecia que ele estava num lugar distante.

— Cê tá bem? Dormiu pouco?

— Mais ou menos... só pensando em umas paradas, nada demais, — ele respondeu, desviando o olhar.

Ela não quis forçar, mas a preocupação estava ali, clara. Durante a aula, Nick ficava encarando a janela, os dedos tamborilando distraídos sobre a mesa, completamente alheio ao conteúdo. Nicole trocou olhares com a colega ao lado, que só deu de ombros.

Na hora do intervalo, sentaram juntos no banco de sempre perto das máquinas de snacks. Nicole tentou puxar assunto sobre um novo anime que começou a assistir, algo bobo e engraçado… mas Nick parecia distante demais pra reagir como costumava fazer.

— Nick... você tá mesmo bem?

Ele hesitou, passou a mão pelo cabelo e respondeu:

— Tô, só... coisa da minha cabeça mesmo. É fase.

Nicole não acreditou muito. O silêncio dele doía um pouco, porque ela se acostumou com a presença barulhenta e honesta do Nick. Vê-lo assim, meio perdido, a fazia se sentir... deixada de lado?

E, pior ainda… quando ele olhava o celular com aquele olhar preocupado, franzia o cenho, e logo em seguida guardava rápido como se escondesse algo… uma pontada esquisita surgiu dentro dela.

Será que tem alguém?
Será que é uma garota?
Por que ele não me fala?

— Você anda bem distraído. Quase derrubou seu lanche duas vezes ontem e hoje quase entrou na sala errada, — ela disse, tentando brincar.

— É, né… tô ficando velho, — ele sorriu de leve, mas era um sorriso triste.

Nicole desviou o olhar, apertando os lábios.

Idiota. Para de parecer tão distante assim. Tá me deixando com raiva… e eu nem sei por quê.

Quando a aula acabou, Nick disse que ia direto pra casa, sem passar no café com ela como sempre faziam. Disse que precisava pensar. Nicole acenou, forçando um sorriso, mas por dentro, o peito apertava.

Enquanto o via se afastar, mexendo no celular com o mesmo olhar tenso, ela murmurou pra si mesma:

— Quem é você... e por que tá deixando ele tão longe de mim?

---

Fim do capítulo.`,

                // Capítulo 13
                `Capítulo 13 — "Entre Palavras Não Ditas"

Nicole encarava a tela do celular enquanto rolava a conversa com Nick dos últimos dias. Tinha emoji, tinha piadinha, tinha até aquele gif besta que ele mandou semana passada quando ela disse que tava com cólica. Mas de uns dias pra cá… as respostas ficaram curtas. Os áudios pararam. Os emojis sumiram.

Não que ele tenha sumido completamente, ela pensava. Mas é como se estivesse... com outra cabeça. Outro lugar. Longe de mim.

No quarto, sentada na beirada da cama, com a meia arrastão meio torta e o moletom que roubou dele no último trabalho em grupo, ela mexia no zíper da manga, inquieta. A preocupação estava começando a virar frustração.

— Você não é assim, Nick…

O pensamento escapou dos lábios num sussurro.

No dia seguinte, eles se encontraram no pátio da universidade. Nick estava lá, encostado na grade com os fones no ouvido, cabeça baixa. Quando viu Nicole, tirou os fones rapidamente e tentou sorrir, mas ela percebeu que ainda havia algo quebrado naquele sorriso.

— Você tá com uma cara de quem viu um fantasma, — ela comentou, meio rindo, tentando aliviar o clima.

— Quase isso, — ele respondeu, olhando pra ela com um olhar cansado.

Ela esperava que ele completasse a frase, contasse. Mas não veio nada. Só silêncio.

Durante a aula, ela se pegava olhando pra ele a cada cinco minutos. Ele estava lá... mas não lá. E aquilo doía mais do que ela queria admitir. Quando ele encostava o queixo na mão e olhava pro vazio, ela queria saber no que ele tava pensando. Será que era alguém? Uma ex? Um problema em casa? E por que ele não confiava nela pra falar?

No intervalo, ela foi mais direta.

— Se for alguma coisa séria... você sabe que pode falar comigo, né?

Ele a olhou. Os olhos pareciam gratos, mas ainda assim, trancados.

— Eu sei, Nicole. Valeu mesmo. Mas... é coisa antiga. Que só bagunça minha cabeça.

Nicole forçou um sorriso. Bagunçava a cabeça dele, mas agora estava começando a bagunçar a dela também.

Eu não quero ser invasiva, ela pensava. Mas também não quero ser só uma colega que ele esconde coisas. Eu não sou só mais uma pessoa qualquer na vida dele… né?

No fim do dia, Nick foi embora sozinho de novo. Nicole ficou sentada num banco perto do estacionamento, mexendo no celular sem olhar pra tela. A brisa da tarde balançava seus cabelos e ela suspirava fundo.

— Quem é você? — ela disse pra ninguém. — E por que o Nick tá diferente desde que você apareceu?

A notificação do celular piscou. Era uma figurinha boba do Nick, com uma piada aleatória.

Nicole sorriu de canto, mas logo murchou de novo.

Você tá aqui… mas também não tá. E eu odeio esse meio-termo.

---

Fim do capítulo.`,

                // Capítulo 14
                `Capítulo 14 — "Vozes do Passado"

Depois de um longo dia de aula, Nick e Nicole caminham por uma rua tranquila, as mochilas penduradas preguiçosamente nos ombros, e os passos em sintonia — mesmo sem que eles percebam.

O sol se despedia atrás dos prédios, pintando o céu com tons alaranjados e violetas. A brisa leve da tarde batia nos cabelos escuros de Nicole, que segurava um copo de chá gelado com a outra mão, observando o jeito relaxado de Nick caminhar ao seu lado.

— Você tá bem melhor hoje, — ela comentou, dando um gole no chá e espiando ele de canto.

Nick deu uma risadinha leve, aquela que só escapava quando ele tava realmente tranquilo.

— Tô, sim... acho que só precisava de um tempo pra colocar as ideias no lugar.

Nicole assentiu, mas ainda tinha um certo peso em seu peito. Não que ela fosse invadir o espaço dele — ela respeitava isso. Mas parte dela ainda queria entender tudo... saber o que realmente tinha mexido tanto com ele naquela noite.

Eles atravessaram a rua, rindo de um vídeo bobo que ela mostrou no celular. Foi então que uma voz surgiu atrás deles — suave, clara, com um tom marcante que fez Nick parar no meio do passo.

— Nicolas...? É você?

Ele se virou devagar, o riso ainda preso nos lábios, mas os olhos congelando por um instante.

— Yuna...?

Nicole parou ao lado dele, confusa.

A garota que se aproximava tinha cabelos ruivos vibrantes com as pontas tingidas de roxo, presos num coque bagunçado. Usava uma camiseta raglan branca com mangas pretas e uma estampa de anime antigo. Os óculos de aro redondo combinavam perfeitamente com o estilo meio nerd e skatista dela. Havia algo despretensiosamente bonito na forma como ela andava — natural, confiante, e com aquele sorriso calmo que parecia carregar memórias demais.

— Nossa… eu achei que tava alucinando quando ouvi tua voz, — Yuna disse, rindo leve.

Nick passou a mão pelos cabelos, visivelmente sem jeito.

— Faz... quanto tempo? Quatro anos?

— Quase cinco, — ela respondeu, cruzando os braços. — Você ainda anda por aí tomando chá de pêssego como se fosse café gourmet?

Ele riu, um pouco mais à vontade, e olhou discretamente pra Nicole.

— Ah, essa é a Nicole. Amiga da faculdade.
— Nicole, essa é a Yuna... a gente era bem próximo no ensino médio. Melhor amiga por muito tempo... e depois, por um tempinho, namorados também.

Nicole piscou algumas vezes, tentando processar. Não era ciúmes. Ainda não. Era mais... surpresa. Curiosidade. Uma pontada desconfortável de não saber exatamente o que aquele passado significava agora.

— Oi! Muito prazer, — ela disse, forçando um sorriso simpático.

— Prazer é meu, — Yuna respondeu, com uma piscadinha tranquila.

A tensão era suave, mas perceptível. E Nicole, mesmo sem entender exatamente o motivo, sentia uma pequena nuvem pairando sobre a tarde perfeita que estavam tendo. Yuna trouxe o passado. E, com ele, um milhão de perguntas que ainda não tinham resposta.

---

Fim do capítulo.`,

                // Capítulo 15
                `Capítulo 15 — "Entre o Hoje e o Ontem"

Os três caminharam juntos pela praça central, o céu já pintado de azul profundo, enquanto os postes começavam a se acender em tons quentes. A conversa fluiu... mais ou menos.

Yuna falava com aquela naturalidade de quem não sentia o tempo passar. Ela puxava assuntos nostálgicos, histórias de escola, lembranças de lugares, piadas antigas que só ela e Nick entendiam. E Nick… ele sorria. Às vezes por educação, às vezes por pura memória afetiva.

Nicole caminhava ao lado, um pouco mais calada do que o normal. Ela não se sentia deixada de lado, mas havia algo naquela conexão entre os dois que a fazia sentir... deslocada. Ela nem sabia direito por quê. Mas ver Nick rindo de coisas que ela não conhecia, com alguém que sabia partes da vida dele que ela ainda não fazia ideia... cutucava algo dentro dela.

— E você, Nicole? Como conheceu esse cara aqui? Ele continua esquisito como sempre? — Yuna perguntou, rindo leve, tirando um pirulito do bolso da mochila.

Nicole sorriu, meio sem graça.

— A gente se esbarrou no primeiro dia de aula. E sim… ele é esquisito. Mas é o tipo bom de esquisito.

Nick tossiu levemente, sem saber se sorria ou desviava o olhar. Aquilo pegou ele desprevenido — não pelo que Nicole disse, mas pela forma carinhosa, como se ela realmente tivesse… notado ele.

— Parece que você anda se enturmando mais do que na época do colégio, — Yuna comentou, provocando.

— Tô tentando. A Nicole me puxa bastante pra fora da toca, — ele respondeu, lançando um olhar rápido pra ela.

Nicole sorriu, discreta. Mas por dentro, a frase aqueceu algo no peito.

Yuna olhou entre os dois, analisando a troca. Ela não comentou nada, mas seus olhos deixaram escapar uma leve curiosidade. Como se estivesse lendo um livro e tivesse acabado de virar uma página interessante.

Eles pararam numa pequena cafeteria aberta até tarde. Sentaram os três numa mesinha redonda do lado de fora, com as cadeiras rangendo levemente quando se acomodaram.

A conversa seguiu, agora com Nicole mais incluída, rindo de forma contida, tentando entender quem era aquela Yuna de verdade — por trás do sorriso tranquilo e das piadas internas.

Nick pediu um café. Nicole, um chocolate quente. Yuna pegou um expresso duplo com chantilly. Exatamente como Nick lembrava.

— Ainda toma isso? — ele comentou, rindo.

— Você acha que eu ia mudar, logo essa parte? — ela respondeu com uma piscadela.

Nicole observava tudo. Não com ciúmes. Mas com aquele olhar de quem está tentando montar um quebra-cabeça. Quem era Yuna, na real? O que ela queria agora?

E Nick… bom, ele estava dividido. Yuna trazia lembranças. Mas Nicole... Nicole era o agora. E, sem perceber, ele já se sentia diferente quando estava ao lado dela.

O trio ficou ali, entre goles e memórias, até a noite cair de vez. Quando se levantaram para ir embora, Yuna ficou parada um instante.

— Nick… vamos marcar de conversar um dia com mais calma? Tem umas coisas que eu queria muito te contar. Tipo... de verdade.

Nicole não entendeu exatamente o que era, mas percebeu como o semblante de Nick mudou. Um peso no olhar. Uma hesitação.

— Claro, — ele respondeu, simples.

Yuna sorriu, se despediu com um aceno e sumiu pela rua iluminada. Nick e Nicole ficaram parados por um instante, em silêncio.

— Ela parece ser legal, — Nicole disse, sem olhar diretamente pra ele.

— Ela era importante pra mim… — ele respondeu, baixo. — Mas não significa que ainda seja do mesmo jeito.

Nicole apenas assentiu, sem dizer nada. Eles começaram a andar de novo, lado a lado. O silêncio não era desconfortável… mas agora, estava cheio de pensamentos não ditos.

---

Fim do capítulo.`,

                // Capítulo 16
                `Capítulo 16 — "Bem-vinda ao Inferno, Yuna"

A manhã parecia como qualquer outra. O sol filtrava suavemente pelas janelas da sala 302, o ventilador de teto girava preguiçosamente, e os alunos estavam naquela vibe: metade acordados, metade arrependidos de ter saído da cama.

Nick e Nicole estavam nos seus lugares habituais — ele com fone em um ouvido, ela com a cabeça apoiada na mão, encarando o nada enquanto esperava o professor chegar. A conversa entre eles era mansa, meio embolada pelo sono. Até que…

— Bom dia, turma. Vamos começar! — anunciou o professor Takashima, entrando com sua clássica energia exagerada de quem parece ter bebido café intravenoso.

Professor Takashima era o tipo de cara que parecia ter saído de um anime de esporte: alto, atlético, com cabelo preso num coque samurai e uma camisa florida que não combinava com absolutamente nada. Ninguém entendia como ele ainda era tão respeitado no meio acadêmico.

Mas o que chocou mesmo não foi o visual do professor.

Foi quem entrou logo atrás dele.

— Ah, e antes que eu esqueça… temos uma nova aluna transferida. Chegou atrasada no semestre, mas vai acompanhar vocês em algumas matérias. Venha, por favor.

Nicole engasgou com a própria saliva.

Nick congelou no lugar, como se alguém tivesse apertado o botão de pause.

Yuna entrou sorrindo, com aquele jeitinho despreocupado, carregando a mochila caída num ombro, e uma latinha de energético na outra mão. Ela usava a camiseta raglan preta e branca de sempre, e um boné virado pra trás. Parecia mais que estava indo pro campeonato de skate do que pra uma aula de fundamentos do design.

— Yo, gente. Eu sou a Yuna. Prazer. Ou não, depende de quem tiver aqui.

Alguns alunos riram. Outros ficaram em silêncio. E no fundo da sala, Nicole e Nick trocavam olhares tipo: isso é pegadinha, né? Cadê as câmeras?

— Como vocês são do curso de design, vão se acostumar com a excentricidade dela. Ou não. Isso aqui é um caos mesmo. — completou Takashima, já abrindo o notebook.

Yuna avistou Nick e Nicole no fundo da sala, sorriu e foi direto pra lá.

— Tcharam. Surpresa. Vocês acharam que tinham me deixado pra trás?

Nicole forçou um sorriso. Nick ainda estava travado, tentando entender como uma figura do passado estava virando parte do cotidiano dele. Tipo, oficialmente.

— Eu pensei que você só tava de passagem… — ele comentou, baixo.

— Longa história. Mas em resumo: me mudei. E agora, azar o de vocês.

Yuna jogou a mochila no chão, puxou uma cadeira e se sentou entre os dois, como se fosse a coisa mais natural do mundo.

Nicole olhava de lado, tentando esconder a expressão de "socorro".

Nick soltou um suspiro e murmurou:

— Isso vai ser um semestre bem longo…

— Não seja dramático, Niiick~ — Yuna sussurrou com um sorrisinho provocativo. — A gente vai se divertir. Tipo os velhos tempos.

Nicole deu uma tossida forçada. Yuna piscou. O professor começou a aula falando sobre teoria das cores, enquanto uma tensão em RGB se formava naquela parte da sala.

E enquanto Takashima fazia analogias absurdas com Pokémon pra explicar harmonia cromática, Nicole só pensava:

Ok. Agora temos uma ruiva nerd skatista entre nós. O que mais pode acontecer?

Spoiler: muita coisa ainda.

---

Fim do capítulo.`,

                // Capítulo 17
                `Capítulo 17 — "Torta de climão com cobertura de sarcasmo"

O clima naquele fim de tarde era diferente.

Depois da aula, Nicole e Nick decidiram caminhar até um parque próximo da universidade. Não foi algo planejado — só aconteceu. A brisa estava fresca, o céu pintado de tons dourados e azul-acinzentado, e o silêncio entre eles não era desconfortável… era um silêncio tranquilo, daqueles que só acontece com quem se sente bem junto.

Sentaram-se num banco de madeira meio gasto, sob uma árvore alta que dançava com o vento. Nicole, ainda com a mochila nos ombros, olhou pro lado e notou o olhar distante de Nick.

— "Você tá em outro mundo de novo." — ela comentou com um meio sorriso.

Nick soltou uma risada curta, baixando os olhos.

— "Desculpa. Tô só… pensando."

Nicole virou um pouco o corpo na direção dele, cruzando as pernas no banco.

— "É sobre a Yuna, né?"

Nick hesitou. Era a primeira vez que ela falava o nome da outra em voz alta.

— "É."

— "Quer me contar?"

O som das folhas balançando suavemente preencheu o espaço entre a pergunta e a resposta. Nick demorou a começar.

— "A gente se conheceu quando eu tinha uns 17. Eu tava numa fase… difícil. Coisas em casa, escola, aquele sentimento de que nada fazia muito sentido. E ela apareceu tipo um cometa. Brilhante, barulhenta, diferente."

Nicole prestava atenção em cada palavra, sem interromper.

— "Ela me tirou de um buraco. Foi a primeira pessoa que me ouviu de verdade. A gente ficou junto por um tempo. Não muito... mas foi intenso. Eu achava que sabia o que era amar alguém. Hoje… não sei se era amor ou só… salvação."

Nicole mordeu o lábio inferior, pensativa.

— "E por que acabou?"

Nick olhou pro céu por um instante, como se tentando encontrar a resposta entre as nuvens.

— "Porque a vida puxou a gente pra direções diferentes. Ela queria liberdade. Eu queria me entender primeiro. E… teve uma coisa que aconteceu."

Nicole esperou, mas ele não continuou.

— "Você ainda gosta dela?"

Nick virou o rosto na direção dela. O vento jogou uma mecha de cabelo sobre os olhos de Nicole, e ele, quase sem pensar, afastou com a mão.

Um toque leve. Íntimo. Rápido demais pra ser percebido como algo além de um gesto simples. Mas entre eles… significou muito.

— "Tem coisas que a gente nunca esquece. — ele disse, finalmente. — "Mas… tem coisas novas que a gente começa a querer lembrar, também."

Nicole sentiu o coração acelerar. Mas antes que ela pudesse processar a frase, Nick levantou lentamente, enfiando as mãos nos bolsos do moletom.

— "Nicole…" — a voz dele soou mais baixa. — "Tem uma parte da história que eu nunca contei pra ninguém. Nem pros meus amigos mais próximos."

Ela ficou em silêncio, esperando.

Nick encarou o chão por um momento, respirou fundo… e então começou:

— "Naquela época… quando tudo parecia estar indo bem… a Yuna desapareceu da noite pro dia. Sumiu. Sem uma mensagem, sem explicação. Fiquei semanas tentando entender. Até que recebi uma carta."

Nicole arregalou um pouco os olhos. A voz dele estava mais pesada agora, mais amarga.

— "A carta dizia que ela precisava fugir. Que tinha feito algo errado. Que não podia me envolver. E pediu… pra eu esquecê-la."

O silêncio voltou.

Nick sentou de novo, mais devagar desta vez.

— "Eu tentei seguir em frente. E, aos poucos, consegui. Até que ela apareceu aqui… como se nada tivesse acontecido."

Nicole sentiu um aperto no peito. Não sabia exatamente o que dizer. Mas, mais do que nunca, queria estar ali. Com ele. Pra ele.

— "Por que ela voltou agora?"

Nick respondeu com um sorriso triste.

— "É o que eu tô tentando descobrir."

E então, vibração no bolso. O celular de Nick.

Ele puxou o aparelho, olhou a tela e empalideceu por um instante. Nicole tentou espiar, mas não conseguiu ver.

Nick bloqueou o celular sem dizer uma palavra. E ficou ali, com o olhar fixo no horizonte.

Nicole sentiu um arrepio. Algo no ar tinha mudado.

— "Nick… o que foi?"

Ele demorou, mas respondeu:

— "A carta… era falsa."

---

Fim do capítulo.`,

                // Capítulo 18
                `Capítulo 18 — "Coisas que o tempo não leva"

O clima naquele fim de tarde era diferente.

Depois da aula, Nicole e Nick decidiram caminhar até um parque próximo da universidade. Não foi algo planejado — só aconteceu. A brisa estava fresca, o céu pintado de tons dourados e azul-acinzentado, e o silêncio entre eles não era desconfortável… era um silêncio tranquilo, daqueles que só acontece com quem se sente bem junto.

Sentaram-se num banco de madeira meio gasto, sob uma árvore alta que dançava com o vento. Nicole, ainda com a mochila nos ombros, olhou pro lado e notou o olhar distante de Nick.

— "Você tá em outro mundo de novo." — ela comentou com um meio sorriso.

Nick soltou uma risada curta, baixando os olhos.

— "Desculpa. Tô só… pensando."

Nicole virou um pouco o corpo na direção dele, cruzando as pernas no banco.

— "É sobre a Yuna, né?"

Nick hesitou. Era a primeira vez que ela falava o nome da outra em voz alta.

— "É."

— "Quer me contar?"

O som das folhas balançando suavemente preencheu o espaço entre a pergunta e a resposta. Nick demorou a começar.

— "A gente se conheceu quando eu tinha uns 17. Eu tava numa fase… difícil. Coisas em casa, escola, aquele sentimento de que nada fazia muito sentido. E ela apareceu tipo um cometa. Brilhante, barulhenta, diferente."

Nicole prestava atenção em cada palavra, sem interromper.

— "Ela me tirou de um buraco. Foi a primeira pessoa que me ouviu de verdade. A gente ficou junto por um tempo. Não muito... mas foi intenso. Eu achava que sabia o que era amar alguém. Hoje… não sei se era amor ou só… salvação."

Nicole mordeu o lábio inferior, pensativa.

— "E por que acabou?"

Nick olhou pro céu por um instante, como se tentando encontrar a resposta entre as nuvens.

— "Porque a vida puxou a gente pra direções diferentes. Ela queria liberdade. Eu queria me entender primeiro. E… teve uma coisa que aconteceu."

Nicole esperou, mas ele não continuou.

— "Você ainda gosta dela?"

Nick virou o rosto na direção dela. O vento jogou uma mecha de cabelo sobre os olhos de Nicole, e ele, quase sem pensar, afastou com a mão.

Um toque leve. Íntimo. Rápido demais pra ser percebido como algo além de um gesto simples. Mas entre eles… significou muito.

— "Tem coisas que a gente nunca esquece. — ele disse, finalmente. — "Mas… tem coisas novas que a gente começa a querer lembrar, também."

Nicole sentiu o coração acelerar. Mas antes que ela pudesse processar a frase, Nick levantou lentamente, enfiando as mãos nos bolsos do moletom.

— "Nicole…" — a voz dele soou mais baixa. — "Tem uma parte da história que eu nunca contei pra ninguém. Nem pros meus amigos mais próximos."

Ela ficou em silêncio, esperando.

Nick encarou o chão por um momento, respirou fundo… e então começou:

— "Naquela época… quando tudo parecia estar indo bem… a Yuna desapareceu da noite pro dia. Sumiu. Sem uma mensagem, sem explicação. Fiquei semanas tentando entender. Até que recebi uma carta."

Nicole arregalou um pouco os olhos. A voz dele estava mais pesada agora, mais amarga.

— "A carta dizia que ela precisava fugir. Que tinha feito algo errado. Que não podia me envolver. E pediu… pra eu esquecê-la."

O silêncio voltou.

Nick sentou de novo, mais devagar desta vez.

— "Eu tentei seguir em frente. E, aos poucos, consegui. Até que ela apareceu aqui… como se nada tivesse acontecido."

Nicole sentiu um aperto no peito. Não sabia exatamente o que dizer. Mas, mais do que nunca, queria estar ali. Com ele. Pra ele.

— "Por que ela voltou agora?"

Nick respondeu com um sorriso triste.

— "É o que eu tô tentando descobrir."

E então, vibração no bolso. O celular de Nick.

Ele puxou o aparelho, olhou a tela e empalideceu por um instante. Nicole tentou espiar, mas não conseguiu ver.

Nick bloqueou o celular sem dizer uma palavra. E ficou ali, com o olhar fixo no horizonte.

Nicole sentiu um arrepio. Algo no ar tinha mudado.

— "Nick… o que foi?"

Ele demorou, mas respondeu:

— "A carta… era falsa."

---

Fim do capítulo.`,

                // Capítulo 19
                `Capítulo 19 — "Entre Linhas e Silêncios"

O dia seguinte chegou nublado, como se o céu refletisse o que estava dentro de Nick.

Ele passou a manhã inteira tentando entender o que sentia. A revelação da noite anterior ainda ecoava na cabeça como uma batida distante, insistente.

"A carta era falsa."

Era como se uma parte da história que ele já tinha tentado enterrar voltasse com força. Agora tudo fazia sentido. O sumiço repentino, a confusão, a sensação de abandono. Yuna nunca quis deixá-lo... ela foi afastada. E isso doía. Doía de um jeito que ele nem sabia que ainda era possível.

Mas havia outra coisa. Algo mais recente. Algo... ou alguém.

Nicole.

Nick nunca foi bom em identificar os próprios sentimentos, ainda mais quando eles vinham disfarçados de amizade, de parceria, de convivência tranquila. Mas toda vez que ele olhava pra ela, sentia um aperto diferente. Como se cada riso dela trouxesse uma paz que ele não sentia há muito tempo.

Ainda não era amor — ou talvez fosse, só que ele não percebia.

Naquela tarde, Nicole o encontrou na biblioteca, como sempre fazia.

— "Você sumiu de novo hoje…" — ela disse, largando a mochila na mesa. — "Tava começando a achar que ia precisar fazer um cartaz de 'procura-se'."

Nick sorriu, mas era um sorriso cansado.

— "Só… precisava pensar."

Ela sentou-se ao lado dele, observando o rosto abatido.

— "Quer conversar?"

— "Quero. Mas não agora. Acho que… só preciso de uma distração."

Nicole então levantou com um brilho nos olhos, segurando a mão dele com leveza:

— "Vem comigo."

— "Pra onde?"

— "Só vem. Confia."

Eles saíram da biblioteca e andaram até uma praça mais afastada do campus. Ali, havia uma pequena feirinha rolando — com barraquinhas de artesanato, doces e jogos bobos.

Nicole foi direto até uma barraca de pelúcias.

— "Pronto. Sua distração." — ela pegou uma bolinha e apontou pro jogo de acertar latas.

Nick arqueou uma sobrancelha.

— "Você me trouxe aqui pra jogar isso?"

— "Sim. Perdeu a chance de dizer 'não' quando segurou minha mão."

Ele riu, pela primeira vez no dia. Um riso de verdade.

Jogaram, erraram quase tudo, riram mais ainda. Nicole fazia vozes dramáticas cada vez que errava, enquanto Nick fingia ser um jogador profissional fracassado.

No fim, o atendente da barraca deu pra eles uma mini pelúcia de consolo: um gatinho preto com olhos grandes.

— "Toma. Isso é um prêmio de casal." — disse o rapaz, sorrindo.

Nick e Nicole se entreolharam.

— "A gente não—" — começaram a dizer ao mesmo tempo… e então riram juntos, desviando o olhar.

A pelúcia ficou nas mãos de Nicole, que a segurou com carinho.

Enquanto voltavam devagar pro campus, com o fim de tarde tingindo o céu, Nicole falou suavemente:

— "Se quiser conversar um dia sobre o que você passou… Eu tô aqui."

Nick olhou pra ela. O cabelo levemente bagunçado pelo vento, o jeito tranquilo e presente… e naquele instante, algo dentro dele pareceu afrouxar.

— "Obrigado. Eu sei disso."

Ficaram em silêncio depois disso.

Mas não era mais o silêncio da dúvida, e sim o da cumplicidade.

Algo entre eles começava a mudar. Ainda não sabiam o que. Ainda não tinham nomeado.

Mas o vento já soprava diferente.

---

Fim do capítulo.`,

                // Capítulo 20
                `Capítulo 20 — "Entre Memórias e Espelhos"

O som dos tênis de sola gasta da Yuna ecoava pelos corredores da faculdade enquanto ela segurava uma pilha de livros contra o peito. O sol filtrava pelas janelas altas, lançando reflexos dourados em seus cabelos ruivos, cujas pontas roxas balançavam ao ritmo dos seus passos.

Ela parecia tranquila.

Mas só parecia.

Seus olhos escondidos atrás dos óculos tinham um brilho melancólico constante. E ninguém ali imaginava o quanto de dor e saudade ela já tinha aprendido a guardar em silêncio.

*– Três anos atrás*

Era o último semestre do ensino médio.

Yuna caminhava apressada pelos corredores da escola, o celular vibrando sem parar na mão. No visor, várias mensagens de casa. Da mãe. Do hospital.

— "Não agora… por favor…" — ela murmurava, com a voz trêmula.

Nick estava lá fora, esperando ela sair da aula pra mais um daqueles encontros que sempre terminavam com risadas e milkshakes de chocolate.

Mas ela nunca apareceu naquele dia.

Ela entrou direto no carro do pai e partiu rumo a outra cidade. A mãe estava doente. Algo grave. E tudo mudou de repente.

Ela tentou mandar mensagem, tentou ligar.

Mas o coração dela estava quebrado demais pra explicar.

E o medo de machucar ainda mais alguém… fez ela se calar.

"É melhor assim…", pensava enquanto olhava o celular tremendo nas mãos, a foto de Nick com aquele sorrisinho bobo ainda no papel de parede da tela.

Ela apagou o número dele.

Mas nunca apagou ele da memória.

*– um ano depois*

Yuna estava sentada num cyber café, trabalhando em freelance de design pra juntar grana pra ajudar em casa.

Ela abriu o Instagram e viu sem querer uma publicação marcada da antiga escola.

Nick aparecia numa foto com uns amigos.

Ela clicou.

Começou a seguir anonimamente. Sempre vendo de longe. Sempre torcendo. Sempre… presente na distância.

Mesmo sem estar na vida dele, ela nunca deixou de acompanhar. E cada sorriso que via nas fotos era como um alívio — "ele tá bem."

E então…

*dois meses atrás, dia do reencontro na rua*

Yuna caminhava com o skate debaixo do braço, voltando de uma sessão de fotos urbana que fazia por hobby. O sol da tarde dourava tudo ao redor.

E então, ali na frente, ela viu.

Nick.

Com outra garota.

Nicole.

Ela os observou de longe, como se o tempo tivesse parado por uns segundos. O jeito como ele a olhava… como ela o fazia rir… aquilo doeu. Mas também… aqueceu.

Porque apesar da dor, não havia rancor.

Ela sorriu.

Um sorriso pequeno, cheio de lembrança e aceitação.

"Ele seguiu em frente… e tá bem."

Por um instante, pensou em ir embora sem dizer nada. Deixar as coisas como estavam.

Mas o coração bateu mais forte.

— "Não posso continuar fugindo."

E foi ali que ela deu o passo.

Chamou o nome dele.

— "Nick?"

O resto… o tempo começou a escrever outra vez.

 *Volta ao presente*

Yuna estava sentada sozinha no laboratório de informática, digitando num dos PCs. Seus dedos dançavam pelo teclado enquanto a tela mostrava um esboço de um personagem com cabelos escuros e olhos profundos — parecido com Nick.

Ela olhou a arte e suspirou.

— "É engraçado… como mesmo depois de tanto tempo… você ainda me inspira."

Mas agora… era diferente.

Yuna sabia que talvez não fosse mais o lugar dela ao lado de Nick. Que o tempo havia mudado os caminhos de ambos.

E mesmo assim, ela estava ali.

Porque mesmo com o coração marcado, ainda havia espaço pra crescer. E ela queria estar por perto… não pra reconquistar algo.

Mas pra entender o que ainda poderia florescer.

Talvez amizade.

Talvez algo novo.

Ou talvez… só a certeza de que alguns amores, mesmo se perdendo no caminho, continuam vivos — do jeitinho deles.

---

Fim do capítulo.`,

                // Capítulo 21
                `Capítulo 21 — "Quando a Distância Dói"

O clima no campus estava diferente naquele dia.

Talvez fosse o vento mais fresco, talvez o fato de Takashima não ter aparecido com outra camisa absurda. Talvez fosse só o fato de que, apesar das turbulências internas, Nick e Nicole estavam começando a se acostumar com aquele espaço entre eles… que não era amizade, mas ainda não era mais do que isso.

Depois da aula, os dois decidiram ir ao pequeno lounge novo da faculdade. Uma cafeteria improvisada com pufes espalhados, iluminação aconchegante e baristas com cara de quem largaram o ensino médio semana passada.

Nick estava deitado num dos pufes, segurando o celular sobre a cabeça.

Nicole estava no pufe ao lado, com os pés cruzados, desenhando algo no tablet.

— "Você sabia que o seu nome tá salvo no meu celular como 'Calouro 2'? — disse Nick, do nada.

Nicole levantou uma sobrancelha.

— "Você é patético."

— "É que eu não sabia teu nome ainda. Depois esqueci de mudar. Aí virou marca."

— "Você ainda tem o adesivo do meu caderno com o meu nome colado na tampa do teu notebook."

— "Detalhes."

Nicole balançou a cabeça, mas não segurou o riso.

— "Ok. E o meu nome tá salvo como 'Calouro 2'. O seu tá salvo como 'Veterano Barulhento'."

— "Olha só, que romântico."

— "A gente se ama." — ela respondeu, irônica, com o tablet ainda nas mãos.

Silêncio.

Depois de dois segundos…

Nick tossiu.

— "Nossa… quase engasguei com meu próprio ar."

Nicole riu.

— "Bebê."

Do outro lado do lounge, uma figura ruiva com as pontas roxas caminhava com um copo de chá quente, óculos escorregando um pouco no nariz, e uma camiseta raglan com uma estampa de um anime obscuro que ninguém além dela parecia reconhecer.

Yuna.

Ela parou por um segundo, olhando discretamente para o casal de pufes do outro lado. Sorriu de canto. Depois, calmamente, seguiu até o balcão e disse:

— "O chá de pêssego do Nick. Menos açúcar. Ele sempre esquece que tem gastrite."

A barista, confusa, respondeu:

— "Hã? Desculpa… quem é você?"

Yuna só piscou devagar, pegou o chá e foi até uma mesa afastada, como se fosse só mais uma pessoa comum no campus.

Nick e Nicole nem perceberam.

De volta aos pufes, Nick havia se sentado.

— "Cê já percebeu que, tipo, se a gente fosse um casal num anime, o fandom ia surtar toda vez que a gente encosta o dedo um no outro?"

Nicole rolou os olhos, mas uma risada escapou.

— "Nick, eu literalmente te dei uma cotovelada semana passada porque você comeu meu biscoito."

— "Isso foi um momento de tensão sexual."

Nicole jogou uma almofada nele, que caiu pra trás no pufe com um som abafado.

— "Tô anotando isso no meu caderno de absurdos."

Nick reapareceu de cabeça pra baixo, os cabelos caindo pro lado do rosto.

— "Eu sou tipo o bad boy do ensino médio que não sabe lidar com sentimentos."

— "Você é o NPC que vende caneta no intervalo."

Eles riram. Os olhos se encontraram por um instante mais longo do que deveria. Mas logo desviaram. O silêncio foi preenchido com a trilha leve que tocava no lounge, e o som distante da Yuna assoprando seu chá numa mesa do canto.

Longe… mas não tão longe.

A garota ruiva observava de leve, sem invadir. E mesmo sem se intrometer, era parte daquele cenário.

Como uma sombra tranquila que entendia que certas histórias não precisam ser reescritas… só apreciadas de longe.

---

Fim do capítulo.`,

                // Capítulo 22
                `Capítulo 22 — "O Fim Que É Um Começo"

O clima no campus estava diferente naquele dia.

Talvez fosse o vento mais fresco, talvez o fato de Takashima não ter aparecido com outra camisa absurda. Talvez fosse só o fato de que, apesar das turbulências internas, Nick e Nicole estavam começando a se acostumar com aquele espaço entre eles… que não era amizade, mas ainda não era mais do que isso.

Depois da aula, os dois decidiram ir ao pequeno lounge novo da faculdade. Uma cafeteria improvisada com pufes espalhados, iluminação aconchegante e baristas com cara de quem largaram o ensino médio semana passada.

Nick estava deitado num dos pufes, segurando o celular sobre a cabeça.

Nicole estava no pufe ao lado, com os pés cruzados, desenhando algo no tablet.

— "Você sabia que o seu nome tá salvo no meu celular como 'Calouro 2'? — disse Nick, do nada.

Nicole levantou uma sobrancelha.

— "Você é patético."

— "É que eu não sabia teu nome ainda. Depois esqueci de mudar. Aí virou marca."

— "Você ainda tem o adesivo do meu caderno com o meu nome colado na tampa do teu notebook."

— "Detalhes."

Nicole balançou a cabeça, mas não segurou o riso.

— "Ok. E o meu nome tá salvo como 'Calouro 2'. O seu tá salvo como 'Veterano Barulhento'."

— "Olha só, que romântico."

— "A gente se ama." — ela respondeu, irônica, com o tablet ainda nas mãos.

Silêncio.

Depois de dois segundos…

Nick tossiu.

— "Nossa… quase engasguei com meu próprio ar."

Nicole riu.

— "Bebê."

Do outro lado do lounge, uma figura ruiva com as pontas roxas caminhava com um copo de chá quente, óculos escorregando um pouco no nariz, e uma camiseta raglan com uma estampa de um anime obscuro que ninguém além dela parecia reconhecer.

Yuna.

Ela parou por um segundo, olhando discretamente para o casal de pufes do outro lado. Sorriu de canto. Depois, calmamente, seguiu até o balcão e disse:

— "O chá de pêssego do Nick. Menos açúcar. Ele sempre esquece que tem gastrite."

A barista, confusa, respondeu:

— "Hã? Desculpa… quem é você?"

Yuna só piscou devagar, pegou o chá e foi até uma mesa afastada, como se fosse só mais uma pessoa comum no campus.

Nick e Nicole nem perceberam.

De volta aos pufes, Nick havia se sentado.

— "Cê já percebeu que, tipo, se a gente fosse um casal num anime, o fandom ia surtar toda vez que a gente encosta o dedo um no outro?"

Nicole rolou os olhos, mas uma risada escapou.

— "Nick, eu literalmente te dei uma cotovelada semana passada porque você comeu meu biscoito."

— "Isso foi um momento de tensão sexual."

Nicole jogou uma almofada nele, que caiu pra trás no pufe com um som abafado.

— "Tô anotando isso no meu caderno de absurdos."

Nick reapareceu de cabeça pra baixo, os cabelos caindo pro lado do rosto.

— "Eu sou tipo o bad boy do ensino médio que não sabe lidar com sentimentos."

— "Você é o NPC que vende caneta no intervalo."

Eles riram. Os olhos se encontraram por um instante mais longo do que deveria. Mas logo desviaram. O silêncio foi preenchido com a trilha leve que tocava no lounge, e o som distante da Yuna assoprando seu chá numa mesa do canto.

Longe… mas não tão longe.

A garota ruiva observava de leve, sem invadir. E mesmo sem se intrometer, era parte daquele cenário.

Como uma sombra tranquila que entendia que certas histórias não precisam ser reescritas… só apreciadas de longe.

---

Fim do capítulo.`,

                // Capítulo 23
                `Capítulo 23 — "Entre risos, um passo além"

O clima naquele fim de tarde era diferente.

Depois da aula, Nicole e Nick decidiram caminhar até um parque próximo da universidade. Não foi algo planejado — só aconteceu. A brisa estava fresca, o céu pintado de tons dourados e azul-acinzentado, e o silêncio entre eles não era desconfortável… era um silêncio tranquilo, daqueles que só acontece com quem se sente bem junto.

Sentaram-se num banco de madeira meio gasto, sob uma árvore alta que dançava com o vento. Nicole, ainda com a mochila nos ombros, olhou pro lado e notou o olhar distante de Nick.

— "Você tá em outro mundo de novo." — ela comentou com um meio sorriso.

Nick soltou uma risada curta, baixando os olhos.

— "Desculpa. Tô só… pensando."

Nicole virou um pouco o corpo na direção dele, cruzando as pernas no banco.

— "É sobre a Yuna, né?"

Nick hesitou. Era a primeira vez que ela falava o nome da outra em voz alta.

— "É."

— "Quer me contar?"

O som das folhas balançando suavemente preencheu o espaço entre a pergunta e a resposta. Nick demorou a começar.

— "A gente se conheceu quando eu tinha uns 17. Eu tava numa fase… difícil. Coisas em casa, escola, aquele sentimento de que nada fazia muito sentido. E ela apareceu tipo um cometa. Brilhante, barulhenta, diferente."

Nicole prestava atenção em cada palavra, sem interromper.

— "Ela me tirou de um buraco. Foi a primeira pessoa que me ouviu de verdade. A gente ficou junto por um tempo. Não muito... mas foi intenso. Eu achava que sabia o que era amar alguém. Hoje… não sei se era amor ou só… salvação."

Nicole mordeu o lábio inferior, pensativa.

— "E por que acabou?"

Nick olhou pro céu por um instante, como se tentando encontrar a resposta entre as nuvens.

— "Porque a vida puxou a gente pra direções diferentes. Ela queria liberdade. Eu queria me entender primeiro. E… teve uma coisa que aconteceu."

Nicole esperou, mas ele não continuou.

— "Você ainda gosta dela?"

Nick virou o rosto na direção dela. O vento jogou uma mecha de cabelo sobre os olhos de Nicole, e ele, quase sem pensar, afastou com a mão.

Um toque leve. Íntimo. Rápido demais pra ser percebido como algo além de um gesto simples. Mas entre eles… significou muito.

— "Tem coisas que a gente nunca esquece. — ele disse, finalmente. — "Mas… tem coisas novas que a gente começa a querer lembrar, também."

Nicole sentiu o coração acelerar. Mas antes que ela pudesse processar a frase, Nick levantou lentamente, enfiando as mãos nos bolsos do moletom.

— "Nicole…" — a voz dele soou mais baixa. — "Tem uma parte da história que eu nunca contei pra ninguém. Nem pros meus amigos mais próximos."

Ela ficou em silêncio, esperando.

Nick encarou o chão por um momento, respirou fundo… e então começou:

— "Naquela época… quando tudo parecia estar indo bem… a Yuna desapareceu da noite pro dia. Sumiu. Sem uma mensagem, sem explicação. Fiquei semanas tentando entender. Até que recebi uma carta."

Nicole arregalou um pouco os olhos. A voz dele estava mais pesada agora, mais amarga.

— "A carta dizia que ela precisava fugir. Que tinha feito algo errado. Que não podia me envolver. E pediu… pra eu esquecê-la."

O silêncio voltou.

Nick sentou de novo, mais devagar desta vez.

— "Eu tentei seguir em frente. E, aos poucos, consegui. Até que ela apareceu aqui… como se nada tivesse acontecido."

Nicole sentiu um aperto no peito. Não sabia exatamente o que dizer. Mas, mais do que nunca, queria estar ali. Com ele. Pra ele.

— "Por que ela voltou agora?"

Nick respondeu com um sorriso triste.

— "É o que eu tô tentando descobrir."

E então, vibração no bolso. O celular de Nick.

Ele puxou o aparelho, olhou a tela e empalideceu por um instante. Nicole tentou espiar, mas não conseguiu ver.

Nick bloqueou o celular sem dizer uma palavra. E ficou ali, com o olhar fixo no horizonte.

Nicole sentiu um arrepio. Algo no ar tinha mudado.

— "Nick… o que foi?"

Ele demorou, mas respondeu:

— "A carta… era falsa."

---

Fim do capítulo.`,

                // Capítulo 24
                `Capítulo 24 — "Quase"

O céu já estava começando a escurecer quando Nick chegou ao ponto de encontro.

Ele vestia uma camisa preta simples, jeans escuro e uma jaqueta leve por cima. As mãos estavam nos bolsos, e o pé batucava no chão como se esperasse há mais de dez minutos — mesmo estando adiantado.

Então ele a viu.

Nicole caminhava devagar pela rua, com uma leveza diferente no passo. Usava um vestido preto de tecido leve, justo no corpo sem ser exagerado, com alças finas e uma jaqueta jeans caída pelos ombros. As botas de cano curto batiam firmes no chão, e o cabelo, meio preso com uma presilha em formato de estrela, balançava suavemente.

Ela estava linda.
Linda de um jeito que fazia o mundo dar uma pausa.

— "Oi." — disse ela, parando em frente a ele, com um sorrisinho de canto que disfarçava o nervosismo.

— "Oi." — ele respondeu, tentando não parecer tão afetado quanto estava.

— "Você tá… diferente."

— "Você também. Tipo... versão melhorada da Nicole artista gótica gamer do pufe."

Ela riu.

— "Acho que me esforcei um pouquinho."

— "Valeu a pena."

E assim, começaram a caminhar.

O lugar que Nick escolheu era um café aconchegante, escondido entre ruas antigas, com luz baixa, mesas de madeira escura e quadros de artistas independentes espalhados pelas paredes. O ambiente parecia ter saído direto de uma história slice of life.

Sentaram-se numa mesa no canto, perto da janela.

Conversaram sobre tudo e nada. Riram. Disputaram qual anime mais os fez chorar (Nicole perdeu feio). E entre uma fala e outra, o silêncio aparecia… mas não pesava. Era confortável. Quente.

Em um momento, Nicole apoiou o queixo na mão e olhou pra ele com calma.

— "Nick…"

— "Hmm?"

— "Não quero que ninguém te veja desse jeito. Só eu."

Ele travou.

— "Desse jeito…?"

— "Rindo assim. Calmo. Bobo. É como se… você só mostrasse isso pra mim."

Nick ficou quieto por um instante, absorvendo.

— "Talvez seja porque… só com você eu me sinto assim."

Nicole desviou o olhar, o coração disparado.

— "Idiota."

Mas ela sorria.

Então, o garçom apareceu com duas bebidas — um chocolate quente com chantilly e um café com leite. Junto deles, um copo extra… de chá de pêssego.

Nicole e Nick se entreolharam.

O garçom apontou discretamente pra outra mesa, mais ao fundo.

Yuna.

Sentada sozinha, óculos tortos, com uma camisa do Evangelion e um laptop coberto de adesivos. Ela levantou o copo de chá e fez um gesto com os dedos em V.

— "Dessa vez, episódio 49 de 50, hein? — ela disse de longe, piscando.

Nick quase engasgou de rir.Nicole levou a mão à testa, rindo baixinho.

— "Eu não aguento essa mulher."

— "Ela sempre aparece."

— "Última vez, prometo." — gritou Yuna, antes de voltar pro notebook e colocar os fones.

— "É um easter egg vivo." — murmurou Nick, ainda sorrindo.

Quando saíram do café, a noite estava morna. O vento leve balançava as folhas, e as luzes dos postes lançavam sombras suaves no chão.

Caminhavam devagar, lado a lado, até que chegaram a uma praça vazia.

Nicole parou.

— "Foi um bom quase encontro."

Nick se virou pra ela.

— "Você quer que continue sendo um 'quase'?

Ela hesitou. Mas então deu um passo à frente. Não muito. Só o suficiente pra diminuir o espaço entre eles.

— "Acho que… gosto do jeito que está. Por enquanto."

O olhar dele pousou no dela. Havia uma faísca. Forte. Silenciosa.

Nick ergueu a mão e tirou uma mecha do cabelo dela que caía sobre o rosto.

— "Nicole…"

Ela levantou os olhos.

E naquele instante…
Aquele milésimo de segundo antes de algo acontecer…
A tela da história escurece.

---

Fim do capítulo.`,

                // Capítulo 25
                `Capítulo 25 — "O Fim Que É Um Começo"

— "E foi assim…"
Nick terminou de falar, olhando para as duas meninas à sua frente, sentadas no tapete da sala com os olhos arregalados.

Violet, de 7 anos, vestia uma camiseta preta com um morcego fofo desenhado na frente, uma meia arrastão só em uma das pernas (herança visual da mãe). Ayaka, com 5 anos, usava um vestido roxo e uma presilha em forma de estrela no cabelo — a mesma que Nicole usou no primeiro encontro.

— "...foi assim que eu conheci a garota mais teimosa, mais inteligente, mais sarcástica… e mais linda da faculdade."

Ayaka piscou.

— "A mamãe?"

Nick riu.

— "Sim. A mamãe."

Violet mordeu os lábios, animada.

— "Mas e o beijo? Teve beijo?

Nick olhou pras duas com um sorriso travesso.

— "Ah, o beijo… o beijo foi mais tarde. Foi depois de tudo isso. Foi no fim daquela noite.

Do outro lado da casa, Nicole mexia nas panelas com calma, cantarolando baixinho. O cheiro de almoço de domingo tomava o ar: arroz soltinho, frango assado com alecrim e limão, salada colorida — a combinação perfeita do que ela gostava de fazer quando queria que a casa parecesse viva.

Nick se levantou do tapete e caminhou até a cozinha. Encostou-se na porta, observando.

— "Você ouviu alguma parte da história?"

Nicole não virou, mas sorriu de canto.

— "Ouvi tudo. Inclusive a parte que você me chamou de teimosa."

— "Foi elogio."

— "Eu sei."

Ele chegou mais perto, encostando o queixo no ombro dela.

— "Elas perguntaram do beijo."

— "Ah é? — ela disse, rindo. — "E o que você respondeu?"

Nick não disse nada.

Ele apenas a virou com cuidado, segurando sua cintura com uma mão e o rosto com a outra.E ali, no meio da cozinha, cercados pelo cheiro de comida, o som distante de desenhos animados vindo da TV e a luz quente do sol entrando pela janela…

Eles se beijaram.

Um beijo lento. Calmo. Intenso sem precisar ser exagerado. O tipo de beijo que não vem de impulso, mas de uma história longa, construída com carinho. Um beijo que era casa. Um beijo que era "obrigado por tudo até aqui."

Nicole sorriu contra os lábios dele, sussurrando baixinho:

— "Demorou cinquenta episódios."

— "E valeu cada segundo."

Antes que pudessem dizer qualquer outra coisa, a campainha tocou.

Violet e Ayaka saíram correndo pela casa, animadas.

— "EU ATENDO!!
— "NÃÃÃO, EU CHEGO PRIMEIRO!!

As duas abriram a porta juntas — e ali estava ela.

Yuna.

Com os cabelos ruivos agora presos num coque improvisado, uma camisa xadrez amarrada na cintura, e uma sacola de doces na mão.

— "O quê? Achavam que tinham se livrado de mim?"

Violet e Ayaka gritaram animadas:

— "Tia Yunaaaa!!

Ela abriu os braços e se agachou.

— "Até parece que eu perderia o almoço de domingo da Nicole. Nem morta."

As crianças a abraçaram, e ela entrou com aquele jeitinho desajeitado e confiante de sempre.

Na cozinha, Nick e Nicole ainda estavam colados, olhos nos olhos.

Yuna apareceu na porta, fingindo tampar os olhos com drama.

— "Olha só, o beijo ÉPICO! FINALMENTE. Já posso ir em paz agora."

Nick riu.

Nicole, com os olhos brilhando, puxou Nick pela gola da camisa e deu mais um beijo, dessa vez só pra provocar.

— "Essa é minha resposta."

Yuna bateu palmas de forma teatral.

— "Aplausos! É isso, gente. Anime encerrado com louvor. Cadê os créditos subindo ao som de uma balada triste de piano?"

As meninas riam. A casa estava cheia.
E Nick, com Nicole ao lado, as filhas nos braços e o passado inteiro transformado em afeto, soube:

Esse era o melhor final possível.

Mas no fundo…
Ele também sabia:

Essa história… ainda estava só começando.

Fim.`
        ];

        return chapters[chapterNumber - 1] || "Conteúdo não disponível";
}

// Tipo para os dados dos capítulos
type ChapterMetadata = {
        id: number;
        title: string;
        date: string;
}

// Dados de metadados dos capítulos
const chaptersMetadata: ChapterMetadata[] = [
        { id: 1, title: "Começos", date: "10 de Abril, 2025" },
        { id: 2, title: "Caminhos que se Cruzam", date: "10 de Abril, 2025" },
        { id: 3, title: "Uma pausa entre aulas", date: "10 de Abril, 2025" },
        { id: 4, title: "Chuva inesperada", date: "10 de Abril, 2025" },
        { id: 5, title: "Entre conversas e silêncios", date: "10 de Abril, 2025" },
        { id: 6, title: "As Pequenas Coisas", date: "10 de Abril, 2025" },
        { id: 7, title: "Ecos na Silhueta da Tarde", date: "10 de Abril, 2025" },
        { id: 8, title: "Entre Corações Atrapalhados", date: "10 de Abril, 2025" },
        { id: 9, title: "Calda de maçã e silêncios", date: "10 de Abril, 2025" },
        { id: 10, title: "Entre Palavras Não Ditas", date: "10 de Abril, 2025" },
        { id: 11, title: "Notificação às 22:47", date: "10 de Abril, 2025" },
        { id: 12, title: "Silêncios e Sinais", date: "10 de Abril, 2025" },
        { id: 13, title: "Entre Palavras Não Ditas", date: "10 de Abril, 2025" },
        { id: 14, title: "Vozes do Passado", date: "10 de Abril, 2025" },
        { id: 15, title: "Entre o Hoje e o Ontem", date: "10 de Abril, 2025" },
        { id: 16, title: "Bem-vinda ao Inferno, Yuna", date: "10 de Abril, 2025" },
        { id: 17, title: "Torta de climão com cobertura de sarcasmo", date: "10 de Abril, 2025" },
        { id: 18, title: "Coisas que o tempo não leva", date: "10 de Abril, 2025" },
        { id: 19, title: "Entre Linhas e Silêncios", date: "10 de Abril, 2025" },
        { id: 20, title: "Entre Memórias e Espelhos", date: "10 de Abril, 2025" },
        { id: 21, title: "Quando a Distância Dói", date: "10 de Abril, 2025" },
        { id: 22, title: "O Fim Que É Um Começo", date: "10 de Abril, 2025" },
        { id: 23, title: "Entre risos, um passo além", date: "10 de Abril, 2025" },
        { id: 24, title: "Quase", date: "10 de Abril, 2025" },
        { id: 25, title: "O Fim Que É Um Começo", date: "10 de Abril, 2025" }
];

// Usar a tipagem padrão do Next.js para páginas dinâmicas
export default async function ChapterPage(props: { params: { id: string } }) {
        const chapterId = parseInt(props.params.id);

        // Verificar se o ID do capítulo é válido
        if (isNaN(chapterId) || chapterId < 1 || chapterId > chaptersMetadata.length) {
                notFound();
        }

        const chapter = chaptersMetadata[chapterId - 1];
        const chapterContent = extractChapterContent("", chapterId);

        return (
                <ChapterContent
                        id={chapter.id}
                        title={chapter.title}
                        content={chapterContent}
                        date={chapter.date}
                        totalChapters={chaptersMetadata.length}
                />
        )
} 