
# 2º Missão Estelar JavaScript

Olá Jovem Padawan!!!

  Seja bem-vindo a nossa Segunda Missão Estelar JS! :)

  Até o momento foram apresentados diversos assuntos sobre JS no curso, porém chegou o momento de podemos pôr em prática e mostrar o poder da Força inerente aos conteúdos assimilados até o momento!

  Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS para tornar-se um Metre JS Jedi!:)

  Segue orientações para que você possa executar a missão com sucesso:

  ### Passos para execução da Missão Estelar JS

1 - Realize um Fork do repositório da Formação JavaScript Mestre Jedi para sua conta no GitHub (Obs: Caso já o tenha realizado na primeira Missão, favor desconsiderar);

2 - Clone seu novo repositório clonado para sua máquina via Git Bash e abra com Visual Studio Code. (Obs: Caso já o tenha realizado você deve apenas atualizar o repositório local com repositório remoto principal do curso, ou, do contrário segue alguns passos:)
  
Comandos importantes GIT:
(Adicionar referência ao repositório remoto principal do curso)
- git remote add upstream “caminho repositório SSH”
(Verificar a lista de repositórios remotos)
- git remote –v
(Atualizar repositório local)
- git fetch upstream master
- git merge uptream/master master
Ou
- git pull uptream master

3 - Crie uma pasta com nome de seu usuário do GitHub (ex: 'madsonar') dentro da estrutura de diretório 'missao-estelar->segunda-missao';

4 – Copie a estrutura de arquivos da pasta ‘bootstrap-index’ para dentro de sua pasta recém criada dentro do diretório da Segunda Missão Estelar;

5- Crie um arquivo chamado ‘main.js’ dentro da pasta ‘js’ contido em ‘bootstrap-index’;

6 – Em ‘main.js’ crie um comentário de apenas uma linha com texto ‘Segunda Missão Estelar JS’.

7 – Em ‘main.js’ crie um comentário de múltiplas linhas informando o texto ‘Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)’;

8 – Em ‘main.js’ crie uma variável string de nome ‘missao’ de forma literal com texto sugerido no item 6 desta orientação, logo em seguida exiba o valor da mesma no console juntamente com o seu tipo;

9 – Em ‘main.js’ crie uma variável string de nome ‘hiperespaco’ via função construtora com texto sugerido no item 7 desta orientação, logo em seguida exiba o valor da mesma no console juntamente com seu tipo;

10 – Em ‘main.js’ crie as variáveis de nomes: ‘nomeCliente’(string), ‘renda(number), ‘dataNascimento’(date) e ‘ativo’(boolean). Informe dados fictícios para as variáveis. Na sequência crie uma função de nome ‘exibirDadosClienteVariaveis’ para mostrar os dados no console. Obs: para mostrar o valor de ativo deve ser utilizado o operador ternário para verificar se é true ou false e mostrar sim ou não respectivamente;

11 – Crie a mesma estrutura do item 10, porém em formato de Array de nome ‘clienteArray’, sendo cada elemento um novo array que armazene o nome do campo e valor. Na sequência crie uma função de nome ‘exibirDadosClienteArray’ para mostrar os dados no console fazendo uso do for of.

12 – Crie a mesma estrutura do item 10, porém em formato de Object com nome ‘clienteObject’. Na sequência crie uma função de nome ‘exibirDadosClienteObjeto’ para mostrar os dados no console fazendo uso do for in, switch e if...else para mostrar os nomes das propriedades de forma adequada para o usuário.

13 – Crie uma função de nome ‘retornaDataAtualFormatada’ que retorne a data atual no formato string (DD/MM/YYYY), nesta função deve ser utilizado o construtor Date e seus respectivos métodos para retornar dia, mês e ano. Utilize a estrutura if...else e operador de atribuição ‘+=’ para auxiliar na formatação da data, na sequencia chame a função e imprima seu retorno no console.

14- Crie uma expressão regular de nome ‘hiperEspacoRegExp’ com o padrão ‘Estelar’ através da função construtora, na sequencia crie uma variável de nome string ‘textoMissao’ com o texto a seguir, por fim teste o padrão com a função ‘test’ e execute a mesma com ‘exec’ para mostrar os dados do índice da pesquisa no console.

Texto: ‘Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)’

15- Crie uma estrutura de código que mostre os números de 0 a 30 de forma decrescente com uso do for, faça uso do try catch finally, na mesma implementação dispare um error na iteração 29 para que o bloco catch possa tratar e mostrar no console os detalhes do erro.

16 – Faça uso do arquivo ‘crud.html’ para implementar as instruções a seguir:

Objetivo: Preencher manualmente o formulário formBoot e com click de um botão preencher o formulário formHtml com os mesmos dados.(main.js deve ser referenciado em crud.html)

1 -) No button de rótulo ‘Primary’ presente no ‘formBoot’, altere seu type de ‘submit’ para ‘button’, adicione o evento onclick para chamar a função de nome ‘recebeDadosFormBoot’ que deve receber o próprio formulário como parâmetro.

2 -) No arquivo main.js crie a função ‘recebeDadosFormBoot’ que deve receber um objeto de nome ‘objFormElementos’;

2.1 -) Exiba no console o tipo de objeto de ‘objFormElementos’ fazendo uso do Object prototype e call.

2.2 -) Crie um objeto chamado ‘objDadosForm’ através do construtor Object;

2.3 -) Recupere todos os valores dos campos do formulário ‘formBoot’ através o do objeto ‘objFormElementos’. Você deve criar propriedades do mesmo nome de cada campo do formulário no objeto ‘objDadosForm’ e exibir o valor de cada campo no console.

2.4 -) Exiba no console as propriedades do objeto ‘objDadosForm’;

2.5 -) Chame a função de nome ‘preencherFormHtml’ a ser criada, passando por parâmetro o objeto ‘objDadosForm’;

3 -) Crie uma nova função de nome ‘preencherFormHtml’ que receba por parâmetro um objeto de nome ‘objDados’;

3.1 -) Utilize alguma função de manipulação de DOM de sua escolha e preencha todos os campos do formulário ‘formHtml’ com os dados do objeto ‘objDados’;

3.2 -) Realize um teste para verificar se tudo está funcionando de acordo.

Fico no aguardo do relatório da Missão via Pull Request Jovem Padawan! :)

Que a Força esteja com Você!
