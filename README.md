# MusicDot
Projeto fictício de uma plataforma de cursos online, com base em apostila da Caelum. 

Serão lançadas pelo menos três versões no GitHub: (1) first commit, em que incluirei os bugs identificados (e provavlemente causados por mim mesmo, rs) ao longo da elaboração do projeto; (2) correção dos bugs inicialmente identificados e (3) novas features que não estavam descritas na apostila, mas que pretendo implantar por conta própria para melhorar o projeto.

## Correção de bugs

#### Quando a tela diminui, os textos dos cursos ficam sobre o background-image, tendo uma visualização ruim;
Correção: no @media min 768, a .cursos__list li, na hora de setar o background size, estava com um espaço entre o “2” e o “rem”, aumetando irregularmente o tamanho da imagem.

#### Quando a tela fica grande, o footer fica alinhado à direita da tela, da metade em diante
Correção: na class container, no @media min 1066 e min 1440, deixei “100%-960px”, sem um espaçamento entre o sinal de “-”. 

#### Quando a tela fica grande, o address no footer fica com textos sobrepostos
Correção: solucionado com o ajuste na class container, conforme descrito acima.

#### Quando a tela fica grande, o newsletter sai da tela
Correção: solucionado com o ajuste na class container, conforme descrito acima.

#### A depender do tamanho (qd maior), o botão do android fica desalinhado do grid
Correção: alterar a prop grid-column-end da .app__text de “span 2” para “span 3”
