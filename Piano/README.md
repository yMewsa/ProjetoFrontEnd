## O que é?
 - Um piano virtual interativo desenvolvido com HTML, CSS e JavaScript. O  foco principal deste projeto foi treinar o posicionamento de elementos com CSS e a manipulação dinâmica de áudio via DOM.

   ## Tecnologias Utilizadas
     - HTML5: Estrutura semântica e data-attributes.
     - CSS: Flexbox, posicionamento absoluto e gradientes.
     - JavaScript: Manipulação de eventos e reprodução de áudio dinâmico.

 ## Desafios e Soluções
     - HTML: Identificando as notas
     O Desafio: Como informar ao JavaScript qual tecla foi clicada sem criar dezenas de ids diferentes ou poluir o código?

     A Solução: Utilizamos o atributo customizado data-music-note (ex: data-music-note="C1"). Isso guardou o nome exato do arquivo de áudio direto na tag HTML de forma limpa e semântica.

     - CSS: O posicionamento das teclas pretas
     O Desafio: As teclas pretas não seguem um padrão contínuo (elas pulam os espaços entre as notas Mi-Fá e Si-Dó). Como sobrepô-las corretamente?

     A Solução: Este foi o maior desafio do projeto. A solução foi aplicar position: relative no contêiner principal e position: absolute nas teclas pretas para fixá-las no topo. Depois, usamos o seletor :nth-child() para mapear e empurrar cada uma das 10 teclas pretas individualmente para a direita usando a propriedade left em pixels exatos (ex: left: 49px, left: 117px, etc).

     - JavaScript: Dinamismo sem repetição
     O Desafio: Fazer o piano tocar sem precisar escrever uma função diferente para cada uma das teclas.

     Solução: Usamos document.querySelectorAll(".key") para agrupar todas as teclas. Com um simples laço de repetição (forEach), adicionamos um evento de clique geral. Quando o usuário clica, o JavaScript lê o data-music-note da tecla específica e injeta esse valor no caminho do arquivo de áudio (new Audio(...)), resolvendo tudo com menos de 10 linhas de código.