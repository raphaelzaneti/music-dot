# MusicDot
Projeto fictício de uma plataforma de cursos online, com base em apostila da Caelum. 

Até o o momento, foram lançadas três versões no GitHub: (1) first commit, em que incluirei os bugs identificados (e provavlemente causados por mim mesmo, rs) ao longo da elaboração do projeto; (2) correção dos bugs inicialmente identificados e (3) novos ajustes que não estavam descritos na apostila, mas que implantei por conta própria para melhorar o projeto.

## Correção de bugs

#### Ao diminuir a tela, os textos dos cursos ficam sobre a background-image, deixando a visualização ruim;
Correção: No @media min 768, a classe cursos__list li, na hora de setar o background size, estava com um espaço entre o “2” e o “rem”, aumetando irregularmente o tamanho da imagem.

#### Ao aumentar a tela, o footer fica alinhado à direita da viewport, da metade em diante
Correção: na class container, no @media min 1066 e min 1440, deixei “100%-960px”, sem um espaçamento entre o sinal de “-” e os valores operados. 

#### Ao aumentar a tela, o address no footer fica com textos sobrepostos
Correção: solucionado com o ajuste na class container, conforme descrito acima.

#### Ao aumentar a tela, o newsletter fica fora da viewport
Correção: solucionado com o ajuste na class container, conforme descrito acima.

#### A depender do tamanho da tela (conforme aumenta), o botão do android fica desalinhado do grid
Correção: alterar a prop grid-column-end da .app__text de “span 2” para “span 3”

## Implementações de minha autoria
- Atribuir as cores da página a variáveis de CSS, permitindo uma manipulação mais pŕatica no futuro;
- Alinhar os botões iOS e Android, centralizando-os em relação à chamada do App em telas maiores;
- No footer, dar maior espaçamento entre as seções de links e de cursos;
- Aumentar o margin top para o footer em telas maiores;
- Ajustar a height dos vídeos e alocar melhor o texto descritivo;
- Aumentar o margin-top no "Por que estudar na MusicDot" em telas maiores;
- Ajustar o tamanho dos botões da chamada de Apps em telas de width inferior a 1200px.
