# -*- coding: utf-8 -*-
import re

novas = [
{
"titulo":"Cientistas detetam nova molécula na atmosfera de Titã",
"resumo":"A sonda James Webb identificou um composto orgânico raro, que pode ajudar a compreender a química pré-biótica.",
"categoria":"Ciência",
"regiao":"Mundo",
"fonte":"Redação MundoAgora",
"conteudo":"""A NASA anunciou esta quarta-feira a deteção de uma nova molécula orgânica na atmosfera de Titã, a maior lua de Saturno. O composto, identificado como metilcianoacetileno, foi detetado pela sonda James Webb durante observações de rotina e pode ser um dos blocos essenciais para a formação de aminoácidos.

<h2>Porque é importante</h2>

Titã é o único corpo celeste além da Terra com rios, lagos e mares estáveis à superfície, ainda que de metano e etano líquidos. A descoberta reforça a hipótese de que a lua pode albergar formas de química pré-biótica, mesmo sem vida tal como a conhecemos.

"A presença desta molécula sugere que processos químicos complexos estão a acontecer em Titã. É como olhar para a Terra primitiva, há quatro mil milhões de anos", explicou uma das investigadoras envolvidas no estudo.

<h2>Próximos passos</h2>

A equipa vai agora cruzar os dados do James Webb com observações anteriores da sonda Cassini, para perceber se a molécula está distribuída de forma uniforme ou concentrada em determinadas zonas da atmosfera.

Uma nova missão da NASA, a Dragonfly, deverá chegar a Titã em 2034 para estudar a superfície de perto e procurar sinais de química orgânica complexa."""
},
{
"titulo":"Descoberta arqueológica em Portugal revela vestígios de 5000 anos",
"resumo":"Escavações no Alentejo encontraram estruturas que podem reescrever a cronologia do povoamento pré-histórico na Península Ibérica.",
"categoria":"Ciência",
"regiao":"Europa",
"fonte":"Redação MundoAgora",
"conteudo":"""Uma equipa de arqueólogos portugueses anunciou a descoberta de um conjunto de estruturas em pedra com cerca de 5000 anos, no interior do Alentejo. Os vestígios incluem muros, fossos e o que parece ser uma área cerimonial, o que sugere a existência de comunidades organizadas muito antes do que se pensava.

<h2>Um achado que muda o mapa</h2>

Segundo os investigadores, a disposição das estruturas indica planeamento urbano e trabalho coletivo, algo raro para o período. "Encontrámos muros com mais de 80 metros de extensão e alinhamentos astronómicos que fazem sentido. Isto muda a forma como olhamos para a pré-história da região", afirmou o diretor da escavação.

Os materiais recolhidos, incluindo cerâmica decorada e ferramentas de pedra polida, vão ser analisados em laboratório nos próximos meses. A datação por carbono-14 deverá confirmar a idade exata dos vestígios.

<h2>O que se segue</h2>

A área vai ser alvo de escavações mais profundas no próximo verão. O objetivo é perceber a dimensão total do sítio e se existem sepulturas associadas, o que ajudaria a compreender melhor as práticas funerárias daquela comunidade."""
},
{
"titulo":"Moçambique vence e sobe na tabela do grupo de qualificação",
"resumo":"A seleção nacional garantiu três pontos importantes fora de casa e aproxima-se da fase final da competição continental.",
"categoria":"Desporto",
"regiao":"África",
"fonte":"Redação Desporto",
"conteudo":"""A seleção moçambicana de futebol venceu esta noite por 2-0 no estádio adversário e subiu ao segundo lugar do grupo de qualificação para a próxima competição continental. Os golos foram marcados na segunda parte, depois de uma primeira metade equilibrada e sem grandes oportunidades.

<h2>Um jogo de paciência</h2>

O selecionador optou por um esquema mais cauteloso no início, com duas linhas defensivas bem organizadas. A equipa soube esperar o momento certo e, aos 58 minutos, abriu o marcador num contra-ataque rápido pela direita.

O segundo golo surgiu aos 79 minutos, na sequência de um livre bem executado. A partir daí, Moçambique controlou o jogo e garantiu os três pontos sem sobressaltos.

<h2>Reações e próximos jogos</h2>

"Foi uma vitória de maturidade. A equipa soube sofrer e depois aproveitou as oportunidades", disse o selecionador na conferência de imprensa.

Com este resultado, Moçambique soma agora 7 pontos em quatro jornadas e fica numa posição confortável para a qualificação. O próximo jogo está marcado para daqui a duas semanas, em casa, frente ao líder do grupo."""
},
{
"titulo":"Novo tratamento contra a malária mostra eficácia de 92% em ensaios",
"resumo":"Uma equipa internacional desenvolveu um medicamento oral que pode substituir tratamentos mais longos e com mais efeitos secundários.",
"categoria":"Saúde",
"regiao":"Mundo",
"fonte":"Redação MundoAgora",
"conteudo":"""Um novo tratamento oral contra a malária demonstrou uma eficácia de 92% em ensaios clínicos de fase III, realizados em cinco países africanos. O estudo envolveu mais de 4.000 pacientes e os resultados foram publicados numa das principais revistas médicas internacionais.

<h2>Menos dias, menos efeitos secundários</h2>

O novo medicamento é administrado em apenas três dias, contra os sete ou catorze dias dos tratamentos tradicionais. Além disso, os investigadores registaram uma taxa de efeitos secundários significativamente inferior.

"A adesão ao tratamento é um dos maiores desafios no combate à malária. Um esquema mais curto aumenta drasticamente a probabilidade de o paciente completar a terapêutica", explicou um dos autores do estudo.

<h2>O impacto para Moçambique e a região</h2>

Moçambique é um dos países mais afetados pela malária no mundo. A aprovação deste medicamento pelas autoridades reguladoras poderá representar uma mudança importante nas estratégias de saúde pública.

Ainda assim, os especialistas alertam que a prevenção continua a ser fundamental: redes mosquiteiras tratadas, eliminação de água estagnada e diagnóstico precoce continuam a ser as ferramentas mais eficazes para reduzir os casos."""
}
]

with open('dados.js','r',encoding='utf-8') as f:
    texto = f.read()

ids = re.findall(r'id:(\d+)', texto)
proximo_id = max(int(i) for i in ids) + 1

for art in novas:
    t = art["titulo"].replace('"','\\"')
    r = art["resumo"].replace('"','\\"')
    bloco = f''',
{{id:{proximo_id},titulo:"{t}",resumo:"{r}",categoria:"{art['categoria']}",regiao:"{art['regiao']}",fonte:"{art['fonte']}",horas:1,
conteudo:`{art['conteudo']}`}}'''
    texto = texto.rstrip()
    if texto.endswith('];'):
        texto = texto[:-2] + bloco + '\n];'
    proximo_id += 1

with open('dados.js','w',encoding='utf-8') as f:
    f.write(texto)

print(f"✅ {len(novas)} notícias adicionadas!")
