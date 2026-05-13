# Juliana Pedagogia — Site estático

Site pronto para GitHub e Vercel.

Domínio base usado nos links:

https://julianapedagogia.vercel.app

## Estrutura

- `index.html` — home
- `assets/style.css` — estilos
- `assets/script.js` — acessibilidade e busca
- `artigos/` — 20 artigos em páginas separadas

## Deploy na Vercel

1. Suba todos estes arquivos para o GitHub.
2. Importe o repositório na Vercel.
3. Framework preset: Other.
4. Build command: deixe vazio.
5. Output directory: deixe vazio.

## Links

- Brincadeiras de agora: por que documentar a cultura viva da infância: https://julianapedagogia.vercel.app/artigos/brincadeiras-de-agora-cultura-da-infancia-2024.html
- Pedagogia, escuta e documentário: aprender a registrar relatos: https://julianapedagogia.vercel.app/artigos/pedagogia-escuta-e-documentario-cultural-2024.html
- Praças, parques e cultura juvenil: onde a cidade vira espaço de aprendizagem: https://julianapedagogia.vercel.app/artigos/pracas-parques-e-cultura-juvenil-2024.html
- Jogos eletrônicos e socialização: a cultura gamer como parte da juventude: https://julianapedagogia.vercel.app/artigos/jogos-eletronicos-e-socializacao-2024.html
- Gírias atuais: palavras, significados e pertencimento entre jovens: https://julianapedagogia.vercel.app/artigos/girias-atuais-palavras-e-significados-2024.html
- Cultura digital e infância: entre telas, ruas, jogos e imaginação: https://julianapedagogia.vercel.app/artigos/cultura-digital-e-infancia-2024.html
- Memória local do presente: registrar hoje para preservar amanhã: https://julianapedagogia.vercel.app/artigos/memoria-local-do-presente-2024.html
- Infância, adolescência e convivência: o que as brincadeiras ensinam: https://julianapedagogia.vercel.app/artigos/infancia-adolescencia-e-convivencia-2024.html
- Esportes urbanos e juventude: corpo, praça e identidade: https://julianapedagogia.vercel.app/artigos/esportes-urbanos-e-juventude-2024.html
- Famílias como guardiãs da memória: pais, mães e relatos sobre brincar: https://julianapedagogia.vercel.app/artigos/familias-como-guardias-da-memoria-2024.html
- Documentário como ação educativa: filmar, escutar e devolver à comunidade: https://julianapedagogia.vercel.app/artigos/documentario-como-acao-educativa-2025.html
- Site, acervo digital e cultura local: quando a memória fica acessível: https://julianapedagogia.vercel.app/artigos/site-acervo-digital-e-cultura-local-2025.html
- Infância e tecnologias digitais: cuidado, mediação e criatividade: https://julianapedagogia.vercel.app/artigos/infancia-e-tecnologias-digitais-2025.html
- Cultura dos memes: humor, linguagem e crítica entre estudantes: https://julianapedagogia.vercel.app/artigos/cultura-dos-memes-e-linguagem-dos-jovens-2025.html
- Brincar na rua: liberdade, segurança e pertencimento: https://julianapedagogia.vercel.app/artigos/brincar-na-rua-e-seguranca-2025.html
- Campeonatos de games como cultura: competição, treino e comunidade: https://julianapedagogia.vercel.app/artigos/campeonatos-de-games-como-cultura-2025.html
- Palavras que marcam uma geração: glossário afetivo das gírias atuais: https://julianapedagogia.vercel.app/artigos/palavras-que-marcam-uma-geracao-2025.html
- IA, planejamento e projetos culturais: tecnologia como apoio, não substituição: https://julianapedagogia.vercel.app/artigos/ia-planejamento-e-projetos-culturais-2025.html
- Escuta de crianças em projetos culturais: cuidado, consentimento e respeito: https://julianapedagogia.vercel.app/artigos/escuta-de-criancas-em-projetos-culturais-2026.html
- Documentar o agora para o futuro: por que o cotidiano juvenil importa: https://julianapedagogia.vercel.app/artigos/documentar-o-agora-para-o-futuro-2026.html

## Correção aplicada

Esta versão embute o CSS principal dentro de cada arquivo HTML.
Assim, mesmo que o arquivo `assets/style.css` não seja carregado por algum erro de caminho, o design continua funcionando.

Mesmo assim, suba a pasta inteira para o GitHub:
- `index.html`
- `assets/`
- `artigos/`
- `vercel.json`


## Alterações finais

- Removido o bloco "Canal principal" da seção de portfólio.
- Mantidos os vídeos/documentários e o canal infantil.
- Criada a página `artigos/index.html` com o índice geral.
- Todos os 20 artigos estão como páginas HTML individuais dentro da pasta `artigos/`.

Para funcionar na Vercel, suba a pasta inteira:
- `index.html`
- `artigos/index.html`
- todos os arquivos `artigos/*.html`
- `assets/`
- `vercel.json`
