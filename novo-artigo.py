# -*- coding: utf-8 -*-
# Script para adicionar um novo artigo ao dados.js

titulo = "O título da tua notícia aqui"
resumo = "Um resumo curto da notícia."
categoria = "Política"
regiao = "África"
fonte = "Redação MundoAgora"
horas = 1

conteudo = """O primeiro parágrafo da notícia.

O segundo parágrafo com mais detalhes.

## Um subtítulo opcional

O terceiro parágrafo com citações ou análise."""

with open('dados.js', 'r', encoding='utf-8') as f:
    texto = f.read()

# Descobrir o próximo ID
import re
ids = re.findall(r'id:(\d+)', texto)
novo_id = max(int(i) for i in ids) + 1

# Formatar o novo artigo
novo = f''',
{{id:{novo_id},titulo:"{titulo}",resumo:"{resumo}",categoria:"{categoria}",regiao:"{regiao}",fonte:"{fonte}",horas:{horas},
conteudo:`{conteudo}`}}
];'''

# Substituir o último "];" pelo novo artigo
texto = texto.rstrip()
if texto.endswith('];'):
    texto = texto[:-2] + novo

with open('dados.js', 'w', encoding='utf-8') as f:
    f.write(texto)

print(f"Artigo #{novo_id} adicionado com sucesso!")
