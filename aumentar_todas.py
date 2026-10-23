# -*- coding: utf-8 -*-
import re

with open('dados.js', 'r', encoding='utf-8') as f:
    texto = f.read()

expansao_politica = """

<h2>Reações da Sociedade Civil</h2>

Organizações da sociedade civil já se manifestaram sobre o caso, exigindo transparência e ação rápida das autoridades competentes. Para os analistas, este é um momento decisivo que pode redefinir o panorama político e social nos próximos meses.

A população acompanha os desdobramentos com expectativa. A comunicação oficial tem sido atualizada de forma constante, mas o clima de incerteza ainda predomina entre os cidadãos, que aguardam medidas concretas e respostas para as suas principais preocupações."""

expansao_economia = """

<h2>Perspetivas do Mercado</h2>

Os investidores institucionais mantêm-se em alerta máximo. A volatilidade dos preços e a incerteza nas políticas económicas levam muitas empresas a adiar decisões de investimento de grande escala, o que pode abrandar a recuperação económica nos próximos trimestres.

Especialistas financeiros recomendam uma estratégia prudente. "É momento de diversificar e olhar para ativos de refúgio", explica um consultor de investimentos. A evolução das próximas semanas será crucial para determinar a tendência do mercado a longo prazo."""

expansao_tech = """

<h2>Impacto a Longo Prazo e Ética</h2>

Especialistas em ética digital alertam para os desafios que estas inovações trazem. A rápida implementação de novas tecnologias exige uma regulamentação adequada para proteger os direitos dos utilizadores e garantir a segurança dos dados.

Enquanto a tecnologia avança, a discussão sobre os seus limites continua. As empresas prometem investir em segurança e transparência, mas os reguladores mantêm-se vigilantes para evitar abusos no mercado e garantir uma concorrência justa."""

expansao_desporto = """

<h2>Próximos Desafios</h2>

Com este resultado, as expectativas para as próximas jornadas são elevadíssimas. A equipa técnica já anunciou que vai promover algumas alterações para gerir o desgaste físico dos atletas ao longo da temporada.

Os adeptos, por sua vez, preparam uma receção calorosa no próximo jogo em casa. O ambiente promete ser de festa, mas a exigência por bons resultados continua a ser o principal motor desta modalidade e a pressão sobre os atletas é enorme."""

expansao_saude = """

<h2>Recomendações das Autoridades</h2>

As autoridades de saúde sublinham a importância do diagnóstico precoce e da vacinação. A informação é a melhor arma para combater a desinformação e garantir que a população toma as medidas necessárias para se proteger.

As unidades de saúde estão a reforçar as equipas para lidar com a procura. Especialistas apelam à calma, mas alertam para a necessidade de manter as medidas de higiene e prevenção recomendadas, especialmente junto dos grupos de risco."""

expansao_ciencia = """

<h2>O Futuro da Investigação</h2>

A comunidade científica internacional aguarda agora os próximos passos. Serão necessários mais estudos e financiamento para validar e expandir estas descobertas, que podem abrir portas a áreas de investigação completamente novas e revolucionar o conhecimento atual.

O entusiasmo é grande, mas os investigadores apelam à paciência. "A ciência avança por pequenos passos, e cada descoberta é uma peça fundamental no grande quebra-cabeça do conhecimento humano", conclui um dos responsáveis pelo projeto."""

expansao_ambiente = """

<h2>Alerta Climático</h2>

Ambientalistas alertam que este fenómeno é mais uma prova de que as alterações climáticas exigem ação imediata. A frequência e a intensidade dos eventos extremos têm aumentado drasticamente nas últimas décadas.

Governos e organizações internacionais estão sob pressão para implementar políticas mais verdes. A transição energética e a proteção dos ecossistemas são apontadas como prioridades máximas para evitar cenários catastróficos no futuro."""

expansao_mundo = """

<h2>Reação Internacional</h2>

A comunidade internacional está a acompanhar a situação com apreensão. Líderes de vários países já apelaram ao diálogo e à resolução pacífica, oferecendo-se para mediar as negociações e evitar uma escalada de tensão.

Organizações humanitárias preparam-se para intervir caso a situação se deteriore. A estabilidade regional é vista como essencial, e os esforços diplomáticos intensificam-se nas próximas horas para encontrar uma saída negociada."""

def expandir(match):
    bloco = match.group(0)
    
    cat_match = re.search(r'categoria:"([^"]+)"', bloco)
    cat = cat_match.group(1) if cat_match else "Mundo"
    
    conteudo_match = re.search(r'conteudo:`(.*?)`\}', bloco, re.DOTALL)
    if not conteudo_match:
        return bloco
    
    conteudo_atual = conteudo_match.group(1)
    
    if cat == "Política": adicao = expansao_politica
    elif cat == "Economia": adicao = expansao_economia
    elif cat == "Tecnologia": adicao = expansao_tech
    elif cat == "Desporto": adicao = expansao_desporto
    elif cat == "Saúde": adicao = expansao_saude
    elif cat == "Ciência": adicao = expansao_ciencia
    elif cat == "Ambiente": adicao = expansao_ambiente
    else: adicao = expansao_mundo
    
    novo_conteudo = conteudo_atual + adicao
    return bloco.replace(conteudo_atual, novo_conteudo)

# Aplica a expansão a todas as notícias
texto = re.sub(r'\{id:\d+,.*?conteudo:`.*?`\}', expandir, texto, flags=re.DOTALL)

with open('dados.js', 'w', encoding='utf-8') as f:
    f.write(texto)

print("✅ Todos os 25 artigos foram expandidos com mais 2 parágrafos e subtítulos!")
