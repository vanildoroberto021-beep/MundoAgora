const ARTIGOS = [
{id:1,titulo:"Cimeira climática global termina com acordo vinculativo",resumo:"Mais de 190 países assinaram compromisso para reduzir emissões em 45% até 2035.",categoria:"Ambiente",regiao:"Mundo",fonte:"Redação",horas:1,destaque:true,
conteudo:`A cimeira climática internacional terminou este domingo com um acordo histórico que vincula juridicamente 193 países à redução das emissões de gases com efeito de estufa em 45% até 2035.

O secretário-geral das Nações Unidas classificou o acordo como "um ponto de viragem na história da humanidade" e apelou à implementação imediata das medidas acordadas.`},

{id:2,titulo:"Bancos centrais debatem moeda digital em encontro internacional",resumo:"Autoridades monetárias de 40 países analisam riscos e oportunidades das moedas digitais de banco central.",categoria:"Economia",regiao:"Mundo",fonte:"Agência Global",horas:2,
conteudo:`Representantes de 40 bancos centrais reuniram-se esta semana para debater o futuro das moedas digitais de banco central, conhecidas pela sigla CBDC.

Segundo fontes próximas das negociações, existe um consenso crescente de que as CBDC podem melhorar a eficiência dos pagamentos transfronteiriços, reduzindo custos e prazos de transferência.`},

{id:3,titulo:"Sinais de água em exoplaneta reacendem debate sobre habitabilidade",resumo:"Observações espectroscópicas sugerem vapor de água na atmosfera de um planeta a 124 anos-luz da Terra.",categoria:"Ciência",regiao:"Mundo",fonte:"Redação",horas:3,
conteudo:`Uma equipa internacional de astrónomos anunciou a deteção de vapor de água na atmosfera de um exoplaneta rochoso localizado a 124 anos-luz da Terra.

O planeta orbita dentro da chamada zona habitável da sua estrela, onde as temperaturas permitem, em teoria, a existência de água líquida à superfície.`},

{id:4,titulo:"Eleições europeias definem novo equilíbrio parlamentar",resumo:"Resultados apontam para coligações mais fragmentadas e uma agenda centrada em energia e migração.",categoria:"Política",regiao:"Europa",fonte:"Bruxelas",horas:4,
conteudo:`As eleições para o Parlamento Europeu terminaram com um cenário político mais fragmentado do que o previsto pelas sondagens.

Os partidos de centro-direita mantiveram-se como a maior força, mas perderam assentos. Os sociais-democratas registaram um desempenho estável.`},

{id:5,titulo:"Startups africanas batem recorde de investimento em tecnologia",resumo:"Fintech e energia solar lideram uma vaga de financiamento que ultrapassou os 5 mil milhões de dólares.",categoria:"Tecnologia",regiao:"África",fonte:"Nairobi",horas:5,
conteudo:`As startups africanas atraíram este ano mais de 5 mil milhões de dólares em investimento, um recorde histórico impulsionado sobretudo pelos setores das fintech e da energia solar.

Quénia, Nigéria, África do Sul e Egito concentram a maioria das operações.`},

{id:6,titulo:"Mercados asiáticos fecham em alta após dados de produção industrial",resumo:"Índices regionais subiram pelo terceiro dia consecutivo, impulsionados pelo setor de semicondutores.",categoria:"Economia",regiao:"Ásia",fonte:"Agência",horas:6,
conteudo:`Os principais índices bolsistas asiáticos encerraram a sessão em alta pelo terceiro dia consecutivo, impulsionados por dados positivos sobre a produção industrial.

Tóquio, Seul, Xangai e Taipé registaram ganhos acima de 1%.`},

{id:7,titulo:"América Latina acelera transição energética com novos parques solares",resumo:"Projetos em quatro países devem adicionar 12 gigawatts de capacidade limpa nos próximos dois anos.",categoria:"Ambiente",regiao:"América",fonte:"Santiago",horas:7,
conteudo:`Quatro países da América Latina anunciaram em conjunto um plano para acelerar a transição energética, com a construção de novos parques solares e eólicos.

O investimento total está estimado em 18 mil milhões de dólares.`},

{id:8,titulo:"Nova Zelândia anuncia reserva marinha gigante no Pacífico",resumo:"Área protegida de 680 mil km² vai limitar pesca industrial e atividades de exploração mineral.",categoria:"Ambiente",regiao:"Oceania",fonte:"Wellington",horas:8,
conteudo:`O governo neozelandês anunciou a criação de uma das maiores reservas marinhas do mundo, com 680 mil quilómetros quadrados no oceano Pacífico.

A medida foi saudada por organizações ambientais internacionais.`},

{id:9,titulo:"Vacina contra nova estirpe entra em fase final de testes",resumo:"Ensaio clínico envolve 32 mil voluntários em 14 países e resultados preliminares são esperados em seis meses.",categoria:"Saúde",regiao:"Mundo",fonte:"Redação",horas:9,
conteudo:`A vacina desenvolvida contra a nova estirpe de um vírus respiratório entrou na fase final de testes clínicos.

A fase III é a última etapa antes da aprovação pelas autoridades reguladoras.`},

{id:10,titulo:"Competição continental: seleções confirmam favoritismo nas oitavas",resumo:"Quartas de final ficam definidas após uma jornada com 19 golos e duas decisões por penáltis.",categoria:"Desporto",regiao:"África",fonte:"Desporto",horas:10,
conteudo:`A fase de oitavas de final da competição continental de futebol terminou com emoção até ao último minuto.

As seleções favoritas confirmaram o apuramento, mas algumas enfrentaram sérias dificuldades.`},

{id:11,titulo:"Museus europeus devolvem acervos históricos a países de origem",resumo:"Acordo quadro prevê a repatriação gradual de milhares de peças adquiridas durante o período colonial.",categoria:"Cultura",regiao:"Europa",fonte:"Paris",horas:12,
conteudo:`Vários museus europeus assinaram um acordo quadro para a devolução gradual de milhares de peças históricas aos países de origem.

O processo será acompanhado por uma comissão internacional de historiadores.`},

{id:12,titulo:"Inteligência artificial generativa chega a hospitais públicos",resumo:"Sistemas de apoio ao diagnóstico já estão em uso em 60 unidades, com supervisão médica obrigatória.",categoria:"Tecnologia",regiao:"América",fonte:"Agência",horas:14,
conteudo:`Sistemas de inteligência artificial generativa começaram a ser usados em 60 hospitais públicos para apoiar o diagnóstico médico.

Os responsáveis sublinham que a IA é uma ferramenta de apoio e nunca substitui o profissional de saúde.`},

{id:13,titulo:"Trem de alta velocidade liga duas capitais asiáticas em três horas",resumo:"Nova linha reduz para metade o tempo de viagem e deverá retirar 4 milhões de passageiros por ano dos voos.",categoria:"Tecnologia",regiao:"Ásia",fonte:"Tóquio",horas:16,
conteudo:`Uma nova linha ferroviária de alta velocidade ligou duas capitais asiáticas num trajeto que passa a demorar apenas três horas.

O projeto demorou oito anos a construir e inclui tecnologia de levitação magnética.`},

{id:14,titulo:"Relatório aponta queda da pobreza extrema em doze países",resumo:"Documento atribui o progresso a programas de transferência de renda e melhoria do acesso à energia elétrica.",categoria:"Política",regiao:"Mundo",fonte:"Redação",horas:18,
conteudo:`Um relatório internacional divulgado esta semana aponta uma queda significativa da pobreza extrema em doze países.

O documento atribui o progresso a programas de transferência de renda e melhoria do acesso à energia elétrica.`},

{id:15,titulo:"Descoberta arqueológica reescreve cronologia de uma civilização antiga",resumo:"Escavações revelam estruturas 800 anos mais antigas do que se pensava, com vestígios de comércio de longa distância.",categoria:"Ciência",regiao:"Ásia",fonte:"Agência",horas:20,
conteudo:`Uma descoberta arqueológica numa região remota da Ásia está a reescrever a cronologia de uma civilização antiga.

As escavações revelaram estruturas 800 anos mais antigas do que se pensava.`},

{id:16,titulo:"Cidades costeiras testam novos sistemas de defesa contra a subida do mar",resumo:"Barreiras móveis e zonas húmidas artificiais integram um plano-piloto com duração de cinco anos.",categoria:"Ambiente",regiao:"Oceania",fonte:"Sydney",horas:22,
conteudo:`Várias cidades costeiras começaram a testar novos sistemas de defesa contra a subida do nível do mar.

O projeto vai envolver engenheiros, biólogos marinhos e urbanistas.`},

{id:18,titulo:"Descoberta arqueológica em Portugal revela vestígios de 5000 anos",resumo:"Escavações no Alentejo encontraram estruturas que podem reescrever a cronologia do povoamento pré-histórico.",categoria:"Ciência",regiao:"Europa",fonte:"Redação MundoAgora",horas:2,
conteudo:`Uma equipa de arqueólogos portugueses anunciou a descoberta de um conjunto de estruturas em pedra com cerca de 5000 anos, no interior do Alentejo. Os vestígios incluem muros, fossos e o que parece ser uma área cerimonial, o que sugere a existência de comunidades organizadas muito antes do que se pensava até agora.

A escavação, que decorreu ao longo de oito meses, foi coordenada por uma equipa da Universidade de Lisboa em parceria com investigadores espanhóis e britânicos. Os trabalhos foram financiados por fundos europeus e contaram com o apoio da câmara municipal local.

<h2>Um achado que muda o mapa</h2>

Segundo os investigadores, a disposição das estruturas indica planeamento urbano e trabalho coletivo, algo raro para o período. Foram identificados muros com mais de 80 metros de extensão, alinhamentos astronómicos e uma área central que poderá ter servido para rituais comunitários.

"Encontrámos muros com mais de 80 metros de extensão e alinhamentos astronómicos que fazem sentido. Isto muda a forma como olhamos para a pré-história da região", afirmou o diretor da escavação em conferência de imprensa.

Além dos muros, a equipa recolheu centenas de fragmentos de cerâmica decorada, ferramentas de pedra polida, ossos de animais e vestígios de fogueiras. Alguns dos objetos apresentam sinais de comércio de longa distância, o que indica que aquelas comunidades já estavam ligadas a redes de troca regionais.

<h2>Uma sociedade mais complexa do que se pensava</h2>

Até agora, acreditava-se que as comunidades do interior do Alentejo, há 5000 anos, viviam em pequenos povoados dispersos, sem grande organização social. A nova descoberta obriga a rever essa ideia.

"A existência de muros, fossos e áreas cerimoniais implica coordenação, liderança e recursos. Não estamos a falar de grupos isolados, mas de comunidades capazes de mobilizar dezenas de pessoas para projetos comuns", explicou um dos arqueólogos envolvidos.

Os investigadores acreditam que o local pode ter sido um centro regional de poder, talvez ligado a rotas de comércio de sal, cobre ou cereais. A próxima fase de escavação vai tentar identificar sepulturas e áreas habitacionais.

<h2>O que se segue</h2>

A área vai ser alvo de escavações mais profundas no próximo verão. O objetivo é perceber a dimensão total do sítio e se existem sepulturas associadas, o que ajudaria a compreender melhor as práticas funerárias daquela comunidade.

Os materiais recolhidos vão ser analisados em laboratórios especializados, com datação por carbono-14, análise de ADN antigo e estudos de proveniência de matérias-primas. Os primeiros resultados científicos deverão ser publicados no final do próximo ano.`},

{id:19,titulo:"Moçambique vence e sobe na tabela do grupo de qualificação",resumo:"A seleção nacional garantiu três pontos importantes fora de casa e aproxima-se da fase final.",categoria:"Desporto",regiao:"África",fonte:"Redação Desporto",horas:3,
conteudo:`A seleção moçambicana de futebol venceu esta noite por 2-0 no estádio adversário e subiu ao segundo lugar do grupo de qualificação para a próxima competição continental. Os golos foram marcados na segunda parte, depois de uma primeira metade equilibrada e sem grandes oportunidades para ambas as equipas.

O jogo decorreu num ambiente hostil, com mais de 30 mil espectadores nas bancadas, mas a equipa moçambicana soube manter a calma e impor o seu ritmo nos momentos decisivos.

<h2>Um jogo de paciência</h2>

O selecionador optou por um esquema mais cauteloso no início, com duas linhas defensivas bem organizadas e aposta em contra-ataques rápidos. A equipa soube esperar o momento certo e, aos 58 minutos, abriu o marcador num contra-ataque conduzido pela direita, finalizado com um remate colocado junto ao poste.

O segundo golo surgiu aos 79 minutos, na sequência de um livre bem executado à entrada da área. A partir daí, Moçambique controlou o jogo e garantiu os três pontos sem sobressaltos, gerindo a posse de bola e evitando riscos desnecessários.

O guarda-redes moçambicano teve uma noite tranquila, com apenas duas defesas de registo. A defesa central foi considerada o sector mais consistente da equipa, com cortes decisivos em momentos críticos.

<h2>Reações e próximos jogos</h2>

"Foi uma vitória de maturidade. A equipa soube sofrer e depois aproveitou as oportunidades. Estamos a crescer jogo após jogo e isso é o mais importante", disse o selecionador na conferência de imprensa.

O capitão da equipa, que completou o seu 50.º jogo internacional, também destacou a união do grupo: "Este é um grupo que trabalha junto há muito tempo. Sabemos os momentos em que temos de sofrer e os momentos em que podemos atacar."

Com este resultado, Moçambique soma agora 7 pontos em quatro jornadas e fica numa posição confortável para a qualificação. O próximo jogo está marcado para daqui a duas semanas, em casa, frente ao líder do grupo. Uma vitória pode garantir matematicamente o apuramento.

<h2>Impacto para o futebol nacional</h2>

A boa campanha da seleção tem tido impacto no futebol interno. Os clubes nacionais registaram um aumento de assistências e a procura de jovens pelas escolas de formação cresceu nos últimos meses.

O governo anunciou recentemente um pacote de investimento em infraestruturas desportivas, com a construção de novos campos de treino em várias províncias. O objetivo é aproveitar o momento positivo para desenvolver a base do futebol moçambicano.`},

{id:20,titulo:"Novo tratamento contra a malária mostra eficácia de 92% em ensaios",resumo:"Uma equipa internacional desenvolveu um medicamento oral que pode substituir tratamentos mais longos.",categoria:"Saúde",regiao:"Mundo",fonte:"Redação MundoAgora",horas:4,
conteudo:`Um novo tratamento oral contra a malária demonstrou uma eficácia de 92% em ensaios clínicos de fase III, realizados em cinco países africanos. O estudo envolveu mais de 4.000 pacientes, incluindo crianças e adultos, e os resultados foram publicados numa das principais revistas médicas internacionais.

O medicamento foi desenvolvido por uma parceria entre uma farmacêutica europeia, institutos de investigação africanos e a Organização Mundial de Saúde. Os ensaios decorreram em Moçambique, Tanzânia, Quénia, Uganda e Nigéria.

<h2>Menos dias, menos efeitos secundários</h2>

O novo medicamento é administrado em apenas três dias, contra os sete ou catorze dias dos tratamentos tradicionais. Além disso, os investigadores registaram uma taxa de efeitos secundários significativamente inferior, com menos casos de náuseas, tonturas e reações alérgicas.

"A adesão ao tratamento é um dos maiores desafios no combate à malária. Um esquema mais curto aumenta drasticamente a probabilidade de o paciente completar a terapêutica", explicou um dos autores do estudo.

Os ensaios mostraram também que o medicamento é eficaz contra as estirpes mais resistentes do parasita, incluindo algumas que já não respondem aos tratamentos de primeira linha atualmente usados em África.

<h2>O impacto para Moçambique e a região</h2>

Moçambique é um dos países mais afetados pela malária no mundo. Segundo dados da OMS, a doença mata mais de 15 mil pessoas por ano no país, a maioria crianças com menos de cinco anos. A aprovação deste medicamento pelas autoridades reguladoras poderá representar uma mudança importante nas estratégias de saúde pública.

O Ministério da Saúde moçambicano já manifestou interesse em integrar o novo tratamento nos protocolos nacionais, caso seja aprovado. O processo de aprovação deverá demorar entre seis a doze meses.

"Estamos a acompanhar com muito interesse. Se os resultados se confirmarem na prática clínica, este medicamento pode salvar milhares de vidas por ano", afirmou um responsável do programa nacional de combate à malária.

<h2>Desafios e próximos passos</h2>

Ainda assim, os especialistas alertam que a prevenção continua a ser fundamental. As redes mosquiteiras tratadas com inseticida, a eliminação de água estagnada e o diagnóstico precoce continuam a ser as ferramentas mais eficazes para reduzir os casos.

Há também a preocupação com o custo. O novo medicamento deverá ser mais caro do que os tratamentos atuais, o que pode limitar o acesso em países com recursos limitados. A OMS está a negociar um preço acessível com o fabricante.

Além disso, os investigadores alertam para a necessidade de monitorizar a resistência. "Nenhum medicamento é eterno. Se usarmos mal este tratamento, o parasita pode desenvolver resistência em poucos anos", avisou um dos autores do estudo.`}
,
{id:21,titulo:"Mocambique garante qualificacao historica para a Taca Africana das Nacoes",resumo:"Com uma vitoria por 2-1 fora de casa, os Mambas asseguram presenca na CAN pela terceira vez na historia.",categoria:"Desporto",regiao:"Africa",fonte:"Redacao Desporto",horas:1,
conteudo:`A selecao mocambicana de futebol garantiu este domingo a qualificacao para a Taca Africana das Nacoes (CAN), apos vencer por 2-1 no estadio adversario, numa partida que ficara marcada na historia do futebol nacional.

Com este resultado, os Mambas somam 13 pontos em seis jornadas e garantem matematicamente o apuramento com uma jornada de antecedencia. E a terceira vez que Mocambique consegue chegar a fase final da competicao continental, depois das participacoes em 1986, 1996 e 2010.

O jogo comecou equilibrado, com as duas equipas a estudarem-se mutuamente nos primeiros minutos. A primeira oportunidade clara surgiu aos 18 minutos, num remate de fora da area que passou ligeiramente ao lado da baliza adversaria.

<h2>Um jogo de nervos e superacao</h2>

O marcador foi aberto aos 34 minutos, na sequencia de um canto bem executado pela direita. O defesa central mocambicano apareceu ao primeiro poste e cabecou para o fundo das redes, fazendo explodir de alegria os cerca de 200 adeptos mocambicanos presentes no estadio.

O adversario reagiu e chegou ao empate aos 42 minutos, num lance de bola parada. O intervalo chegou com o resultado em 1-1, deixando tudo em aberto para a segunda parte.

Aos 67 minutos, o selecionador mocambicano fez uma substituicao que se revelaria decisiva. Entrou um avancado rapido e tecnico, que mudou o ritmo do ataque. Cinco minutos depois, aos 72, chegou o golo da vitoria. Num contra-ataque conduzido pela esquerda, o novo avancado recebeu a bola na area, fintou o guarda-redes e fez o 2-1.

A partir dai, a equipa mocambicana fechou-se bem atras e soube gerir o resultado ate ao apito final. O guarda-redes teve duas defesas importantes nos ultimos dez minutos, garantindo os tres pontos.

<h2>Reacoes de euforia</h2>

"Estamos a fazer historia. Estes jogadores deram tudo em campo e merecem esta qualificacao. Mocambique inteiro deve estar orgulhoso", declarou o selecionador na conferencia de imprensa apos o jogo.

O capitao da equipa, visivelmente emocionado, tambem falou aos jornalistas: "Trabalhamos muito para este momento. Passamos por momentos dificeis, mas nunca desistimos. Esta qualificacao e para todo o povo mocambicano."

Nas ruas de Maputo e de outras cidades do pais, houve celebracoes espontaneas apos o apito final. Milhares de pessoas sairam a rua com bandeiras e camisolas da selecao, num ambiente de festa que se prolongou pela noite.

<h2>O caminho ate aqui</h2>

A campanha de qualificacao de Mocambique foi marcada por altos e baixos. A equipa comecou com uma derrota fora de casa, mas recuperou com duas vitorias consecutivas em casa. Seguiu-se um empate dificil, antes das duas vitorias que selaram o apuramento.

O selecionador apostou numa mistura de jogadores experientes que atuam no estrangeiro com jovens formados nos clubes nacionais. Essa aposta revelou-se acertada, com varios jovens a assumirem papeis importantes ao longo da campanha.

<h2>O que esperar da CAN</h2>

A fase final da Taca Africana das Nacoes vai decorrer no proximo ano, num pais ainda a confirmar. Mocambique vai integrar um dos grupos da competicao, que reunira as 24 melhores selecoes do continente.

Os analistas consideram que Mocambique tem condicoes para passar a fase de grupos, algo que nunca conseguiu nas participacoes anteriores. A equipa devera defrontar adversarios de nivel medio na primeira fase, o que aumenta as esperancas de uma campanha historica.

"Este grupo tem qualidade para competir com qualquer selecao africana. Vamos preparar-nos bem e dar o nosso melhor", garantiu o selecionador.

<h2>Impacto para o futebol nacional</h2>

A qualificacao devera ter um impacto positivo no futebol mocambicano. Os clubes nacionais esperam um aumento de assistencias e de receitas, e a federacao ja anunciou que vai investir mais na formacao de jovens.

O governo, por sua vez, prometeu apoiar a preparacao da selecao para a fase final, com um pacote de investimento em infraestruturas e logistica.

Para os adeptos, a qualificacao e motivo de orgulho e esperanca. Depois de anos de resultados irregulares, os Mambas voltam a estar entre os melhores de Africa, e o pais inteiro sonha com uma campanha memoravel na CAN.`}
];