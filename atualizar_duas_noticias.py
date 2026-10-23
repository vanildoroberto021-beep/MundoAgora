# -*- coding: utf-8 -*-
import re

with open('dados.js', 'r', encoding='utf-8') as f:
    texto = f.read()

# ==========================================
# 1. NOTÍCIA DO PETRÓLEO (ID 5)
# ==========================================
# Mudar a imagem para uma petrolífera real
nova_img_petroleo = "https://images.unsplash.com/photo-1543880397-4435d626d955?auto=format&fit=crop&w=900&q=80"
texto = re.sub(r'(id:5,.*?)imagem:"[^"]*"', r'\1imagem:"' + nova_img_petroleo + '"', texto, count=1, flags=re.DOTALL)

# Adicionar mais parágrafos
texto_antigo_petroleo = "A OPEP+ já sinalizou que pode intervir para estabilizar os preços, mas nenhuma medida concreta foi anunciada até ao momento."
texto_novo_petroleo = texto_antigo_petroleo + """

<h2>Reunião de Emergência da OPEP+</h2>

Os ministros da energia dos países membros da OPEP+ estão reunidos de emergência para discutir o aumento da produção. Fontes indicam que um acordo pode ser anunciado nas próximas horas para tentar acalmar os mercados. "Não podemos permitir que a especulação destrua a economia global", afirmou um dos delegados presentes.

Enquanto isso, nos postos de combustível, os consumidores já sentem o impacto. Em algumas capitais europeias, o preço da gasolina atingiu o valor mais alto dos últimos dois anos, levando a protestos de camionistas e transportadores."""
texto = texto.replace(texto_antigo_petroleo, texto_novo_petroleo)

# ==========================================
# 2. NOTÍCIA DA META (ID 7)
# ==========================================
# Mudar a imagem para algo de Realidade Virtual / Meta
nova_img_meta = "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900&q=80"
texto = re.sub(r'(id:7,.*?)imagem:"[^"]*"', r'\1imagem:"' + nova_img_meta + '"', texto, count=1, flags=re.DOTALL)

# Adicionar mais parágrafos
texto_antigo_meta = "Os investidores estão a migrar para setores mais tradicionais, considerados mais seguros no atual cenário de incerteza."
texto_novo_meta = texto_antigo_meta + """

<h2>Declarações de Zuckerberg</h2>

Mark Zuckerberg defendeu os pesados investimentos durante a apresentação dos resultados trimestrais. "Acreditamos que a inteligência artificial é o futuro da nossa empresa e da interação social. Estes custos são um investimento no longo prazo, não um desperdício", afirmou o CEO aos jornalistas.

Analistas de mercado, no entanto, mostram-se céticos. A margem de lucro da Meta caiu 15% neste trimestre, e muitos investidores institucionais começaram a vender as suas posições, temendo que a empresa esteja a perder o foco do seu negócio principal, que é a publicidade digital."""
texto = texto.replace(texto_antigo_meta, texto_novo_meta)

with open('dados.js', 'w', encoding='utf-8') as f:
    f.write(texto)

print("✅ Notícias do Petróleo e da Meta atualizadas com novas imagens e mais parágrafos!")
