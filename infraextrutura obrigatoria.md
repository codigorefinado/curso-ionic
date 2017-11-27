Infraextrutura necessária e obrigatória
===================


Preparação do ambiente
-------------

Para que seja possível instalar o Ionic, é necessário instalar:
1- [Node.js](http://www.nodejs.org) 
2 - [Editor de texto](https://www.jetbrains.com/webstorm/download/)
3 - [ionic cli](http://ionicframework.com/getting-started/)

[Node.js](http://www.nodejs.org) instalada. O Node.js é um ambiente JavaScript multiplataforma disponível para Linux, Mac e Windows. Para instalá-lo, siga as instruções abaixo:

Instalação Node.js no Linux (Ubuntu)
-------------
No Ubuntu, através do terminal (permissão de administrador é necessária) execute o comando abaixo:

```
sudo apt-get install -y nodejs
```

ATENÇÃO: em algumas distribuições Linux, pode haver um conflito de nomes quando o Node é instalado pelo apt-get. Nesse caso específico, no lugar do binário ser node, ele passa a se chamar nodejs. Isso gera problemas, pois a instrução npm start não funcionará, pois ela procura o binário node e não nodejs. Para resolver, use a seguinte instrução no terminal para subir o servidor:
```
nodejs server
```
Ou no Ubuntu:

```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```

Depois o comando npm start funcionará conforme esperado.


É uma pena haver essa discrepância, mas fica aqui essa dica!
[Dica de como instalar nodejs e não precisar de sudo toda hora no linux](https://medium.com/codigorefinado/dica-r%C3%A1pida-de-como-instalar-o-node-sem-sudo-no-linux-6e4439521070)

Instalação Node.js no Windows
-------------
Baixe o instalador clicando no grande botão de Download, diretamente da página do Node.js. Durante a instalação, você apenas clicará nos botões para continuar o assistente. Não troque a pasta padrão do Node.js durante a instalação, a não ser que você saiba exatamente o que está fazendo.

Instalação Node.js no MAC
O homebrew é a maneira mais recomendada para instalar o Node.js em sua máquina, através do comando:
```
brew update
brew install node
```
Não usa homebrew? Sem problema, baixe o instalador clicando no grande botão de Download, diretamente da página do Node.js.

Instale um editor de texto ou IDE
-------------
Você vai precisar de um editor de texto, ou IDE para escrever seus códigos. Particularmente, **prefiro o [WebStorm](https://www.jetbrains.com/webstorm/download/)**. Caso você seja estudante, pode conseguir uma [licença](https://www.jetbrains.com/webstorm/buy/#edition=discounts), apenas pedindo, é necessário apenas preencher um formulário onde você envia documentos da instituição.

Se você quiser usar o Visual Studio Code, ou Sublime, pode, mas para torná-lo produtivo terá de instalar uma série e plugins. Caso queira testar o Visual Studio Code fiz uma lista das [melhores extensões para trabalhar com Angular](https://medium.com/codigorefinado/as-melhores-extens%C3%B5es-para-visual-studio-code-para-se-trabalhar-com-angular-da044ed6d0d0?source=false---------1) pra você gastar um pouco menos tempo testando as diversas opções disponíveis. Tarefa dispensável quando se utiliza o  [WebStorm](https://www.jetbrains.com/webstorm/download/).


Instale o ionic cli
-------------
Execute no prompt de comando (shell linux, DOS, powershell) o comando a baixo para instalar o ionic cli e o cordova pelo gerenciador de pacotes do node.
```
npm install -g cordova ionic
```

Leia
 [Codigo Refinado](http://medium.com/codigorefinado)