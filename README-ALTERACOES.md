# Para Giovanna — versão editorial (reimaginada)

Como rodar: `npm install` e depois `npm run dev`. Para publicar: `npm run build`.

## Conceito
O site é sobre a Giovanna e sobre a preparação para a residência em enfermagem. Abertura com a moeda do "G" (mantida, agora em tinta sobre fundo claro), um texto que se revela com a rolagem, uma linha de pulso que se desenha sozinha, três cenas em tela cheia com transições por recorte (dedicação, esforço, preparação) e a mensagem final.

## Onde editar
- `src/content.js`: todos os textos, a data, a ordem e o recorte das fotos (zoom `z`, foco `x`/`y`).
- `src/components/`: Hero, Story, Gallery e FinalMessage (um por seção).
- `src/styles/global.css`: paleta, tipografia e responsividade.

## Decisões
- As fotos são de casal e de baixa resolução (a foto-07 tem só 293×220). Por isso só entram recortes centrados na Giovanna, pequenos e em apoio ao texto. As 8 imagens continuam em `public/images/`.
- Nenhuma informação nova sobre ela foi escrita: só enfermagem, prova de residência, dedicação e esforço.
- A data 31.10.2026 foi mantida da versão anterior. Confirme se é a data certa.
- Movimento reduzido: sem pin, cenas empilhadas.
