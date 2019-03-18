/*
- instalar visual studio code


- instalar o node


- lançar aulas babel e webpack


OK - inslatar o xamp OBS: Vai instalar o MySQL e PHPAdmin para acessar o banco de dados
https://www.apachefriends.org/pt_br/download.html


- Criar uma pasta chamda: 'projeto-portfolio'
- Criar a API, criar uma pasta chamda rest-api
- npm init -y
- npm install --save-dev express body-parser cors
- criar o arquivo 'api.js' para rodar o servidor, implementar o código 'foto' e 
testar o via o server via http://localhost:3000/


- Criar a pasta 'banco'
- Criar a pasta 'banco' e Pegar o script pronto no DBDesigner e salvar na pasta 'banco' 
para mostrar o, aluno como criar o bando no phpmyadmin e rodar script de criar tabela
e popular dados.


- npm install --save-dev mysql
- dentro uma pasta cria arquivo 'dbConexao' na pasta banco
- criar a pasta Model e dentro o arquivo PortfolioModel.js
- implementar o métodos 'getTodos'


- Criar classe resposta padrão "RespostaClass.js" dentro de model
- Criar pasta 'router' e dentro o arquivo 'portfolioRouter.js'
- Implementar apenas métodos 'getTodos'


- Configurar portfolioRouter.js dentro de api.js
- Testar getTodos com PostMan
- instar nodemon: npm install nodemon -g
npm config get prefix
set PATH=%PATH%;C:\Users\madson\AppData\Roaming\npm


- Implementação operação por get por id em 'PortfolioModel.js'
- Implementação operação por get por id em 'portfolioRouter.js'
- Testar com postman


- Implementação operação adicionar em 'PortfolioModel.js'
- Implementação operação adicionar em 'portfolioRouter.js'
- Testar com postman


- Implementação operação deletar em 'PortfolioModel.js'
- Implementação operação deletar em 'portfolioRouter.js'
- Testar com postman


- Implementação operação editar em 'PortfolioModel.js'
- Implementação operação editar em 'portfolioRouter.js'
- Testar com postman


/////WEB///////////////////////////////////////////////////////////

--Criar estrutura do projeto
- Cria uma pasta chamada 'web-api', 
- Copiar o conteúdo da pasta 'webpack'para dentro da pasta do projeto 'web-app'
- Rodar o comando: npm init e renomear o projeto para 'web-app'
- Instalar os módulos via npm: npm i
- Deletar alguns arquivos de dentro da pasta 'dis': 
Pasta 'css', 'js', 
Arquivo: listagem-table.html, bundle.js
Limpar a pasta bundle
- Dentro de 'dist' criar uma pasta 'view->portfolio'
- Mover o arquivo CRUD.html para dentro de 'view->portfolio'


--Preparar index.html
- Deletar alguns arquivos de dentro da pasta 'src': 
Arquivos: cliente-class.js, instancia-cliente.js, promise.js
- Deletar o conteúdo da div content de index.html e deixar o código abaixo
    <div class="container">
        <h1>Portfólio de Serviços</h1>
        <div id='portfolios'>
        </div>
    </div>
OBS: Colocar o mesmo tídulo no title head
Obs; navbar: <a class="nav-link" href="./index.html">Home</a>
OBS: navbar:<a class="nav-link" href="./view/portfolio/crud.html">Cadastro Portfólio</a>
-Deletar entradas css e js substituir pelos bundles via npm build
Obs: Antes delatar imports index.js:
import {} from './instancia-cliente';
import {} from './promise';
Obs 2; retirar formatação sass e css referente cor de plano de fundo
Obs 3: comentar a duplicação de código do webpack.config


--preparar página crud
-Cópiar index.html e renomear de crud crud.html (renomear o velho para não conflitar)
-Alterar link index para <a class="nav-link" href="../../index.html">Home</a>
-apagar dados do container div e por:
OBS: pode copiar parte de crud velho
        <h2>Cadastro de Portfólio</h2>        
        <div id='msg'></div>

        <div id="listagem">             
            <button id='btn-exibir-formulario' type="button" class="btn btn-primary">Cadastrar</button>            
            <br>
            <br>
            <div id='portfolios'>
            </div>
        </div>


        <div id="formulario">
            <div class="row">
                <div class="col-sm">                    
                    <form method="POST" action="/" id="form">

                        <div class="form-group">
                            <label for="id">Código</label>
                            <input type="number" class="form-control" id="id" name="id" disabled="disabled">
                        </div>

                        <div class="form-group">
                            <label for="descricao">Descricao</label>
                            <input type="text" class="form-control" id="descricao" name="descricao" placeholder="Informe uma descrição.">
                        </div>

                        <div class="form-group">
                                <label for="detalhes">Detalhes</label>
                                <textarea class="form-control" id="detalhes" name="detalhes"></textarea>
                        </div>                       

                        <div class="form-inline">
                            <button id='btn-cadastrar-portfolio' type="button" class="btn btn-primary mr-sm-2">Salvar</button>
                            <button id='btn-cancelar-operacao' type="button" class="btn btn-primary">Cancelar</button>
                        </div>
                        <br>

                    </form>
                </div>
            </div>

        </div>

-alterar tilte para: Cadastro de Portfólio
-voltar níveis css e js ../../
-deletar crud.html velho


--Criando classe 'ConfigClass' na raiz junto com index.js(foto)


--Criando pasta 'Models->portfolio'
-Criar classe 'PortfolioClass.js'(foto)
-Criar classe 'PortfolioModel.js'(foto)


--Criando estrutura pasta 'controllers'
-Criar classe 'IndexController.js' (foto)


--Imoplementar lista portfolio index
-implementar 'getTodos' em model (foto)
-implementar getTodos em 'IndexController'(Foto)
-informar IndexController no webpack e index.html
-Testar (rodar API)


--Criar classe 'PortfolioController.js'(Foto)
-informar IndexController no webpack e crud.html
-Testar (rodar API)


--ocultar form no CRUD portfolio
-Criar métodos ocultarElemento e exibirElemento e chamar no main(Foto)
-Criar métodos 'limparCamposForm()'(Foto)
-Criar método 'registrarEvents()'(Foto)
-Testar


--Implementar método para alerts do bootstrap(foto) OBS: e o limpar


--Implementar a listagem no CRUD portfolio
-criar método getTodosTable e por no main(Foto)


--Implementar o registros de eventos dos botões e por no main(Foto)


--Implementar função adicionar
-primeiro o método do model(Foto)
-segundo o método no controller(Foto)
-testar


--Implementar método editar
-primeiro getid e editar no model(Foto)
-segundo prepararEditar no controler(Foto)
-terceiro editar no controler(Foto)
-testar


--Implementar ecluir
-primeiro no model


*/

