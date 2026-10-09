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

{id:17,titulo:"Cientistas detetam nova molécula na atmosfera de Titã",resumo:"A sonda James Webb identificou um composto orgânico raro, que pode ajudar a compreender a química pré-biótica.",categoria:"Ciência",regiao:"Mundo",fonte:"Redação MundoAgora",horas:1,
conteudo:`A NASA anunciou esta quarta-feira a deteção de uma nova molécula orgânica na atmosfera de Titã, a maior lua de Saturno. O composto foi detetado pela sonda James Webb durante observações de rotina.

<h2>Porque é importante</h2>

Titã é o único corpo celeste além da Terra com rios, lagos e mares estáveis à superfície. A descoberta reforça a hipótese de que a lua pode albergar formas de química pré-biótica.

<h2>Próximos passos</h2>

A equipa vai agora cruzar os dados do James Webb com observações anteriores da sonda Cassini.`},

{id:18,titulo:"Descoberta arqueológica em Portugal revela vestígios de 5000 anos",resumo:"Escavações no Alentejo encontraram estruturas que podem reescrever a cronologia do povoamento pré-histórico.",categoria:"Ciência",regiao:"Europa",fonte:"Redação MundoAgora",horas:2,
conteudo:`Uma equipa de arqueólogos portugueses anunciou a descoberta de um conjunto de estruturas em pedra com cerca de 5000 anos, no interior do Alentejo.

<h2>Um achado que muda o mapa</h2>

Segundo os investigadores, a disposição das estruturas indica planeamento urbano e trabalho coletivo, algo raro para o período.

<h2>O que se segue</h2>

A área vai ser alvo de escavações mais profundas no próximo verão.`},

{id:19,titulo:"Moçambique vence e sobe na tabela do grupo de qualificação",resumo:"A seleção nacional garantiu três pontos importantes fora de casa e aproxima-se da fase final.",categoria:"Desporto",regiao:"África",fonte:"Redação Desporto",horas:3,
conteudo:`A seleção moçambicana de futebol venceu esta noite por 2-0 no estádio adversário e subiu ao segundo lugar do grupo de qualificação.

<h2>Um jogo de paciência</h2>

O selecionador optou por um esquema mais cauteloso no início. A equipa soube esperar o momento certo e abriu o marcador aos 58 minutos.

<h2>Reações e próximos jogos</h2>

"Foi uma vitória de maturidade", disse o selecionador na conferência de imprensa.`},

{id:20,titulo:"Novo tratamento contra a malária mostra eficácia de 92% em ensaios",resumo:"Uma equipa internacional desenvolveu um medicamento oral que pode substituir tratamentos mais longos.",categoria:"Saúde",regiao:"Mundo",fonte:"Redação MundoAgora",horas:4,
conteudo:`Um novo tratamento oral contra a malária demonstrou uma eficácia de 92% em ensaios clínicos de fase III, realizados em cinco países africanos.

<h2>Menos dias, menos efeitos secundários</h2>

O novo medicamento é administrado em apenas três dias, contra os sete ou catorze dias dos tratamentos tradicionais.

<h2>O impacto para Moçambique</h2>

Moçambique é um dos países mais afetados pela malária no mundo. A aprovação deste medicamento poderá representar uma mudança importante nas estratégias de saúde pública.`}
];
