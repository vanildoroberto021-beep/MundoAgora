# -*- coding: utf-8 -*-
import re, datetime

print("\n=== NOVA NOTÍCIA ===\n")

titulo = input("Título: ")
resumo = input("Resumo (curto): ")
categoria = input("Categoria (ex: Política, Economia, Desporto): ")
regiao = input("Região (ex: África, Europa, Mundo): ")
fonte = input("Fonte (ex: Redação MundoAgora): ")

print("\nEscreve o conteúdo. Quando terminares, escreve FIM numa linha sozinha.")
print("Podes usar <h2>Subtítulo</h2> para criar subtítulos.\n")

linhas = []
while True:
    linha = input()
    if linha.strip() == "FIM":
        break
    linhas.append(linha)
conteudo = "\n".join(linhas)

with open('dados.js', 'r', encoding='utf-8') as f:
    texto = f.read()

ids = re.findall(r'id:(\d+)', texto)
novo_id = max(int(i) for i in ids) + 1

# Escapar aspas dentro de título e resumo
titulo_esc = titulo.replace('"', '\\"')
resumo_esc = resumo.replace('"', '\\"')

novo_artigo = f''',
{{id:{novo_id},titulo:"{titulo_esc}",resumo:"{resumo_esc}",categoria:"{categoria}",regiao:"{regiao}",fonte:"{fonte}",horas:1,
conteudo:`{conteudo}`}}
];'''

texto = texto.rstrip()
if texto.endswith('];'):
    texto = texto[:-2] + novo_artigo

with open('dados.js', 'w', encoding='utf-8') as f:
    f.write(texto)

print(f"\n✅ Notícia #{novo_id} adicionada com sucesso!")
print("Para publicar, corre:")
print("  git add .")
print("  git commit -m \"Nova notícia\"")
print("  git push")
