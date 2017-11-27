Oque é o IONIC?
	É um framework para desenvolvimento de aplicações mobile hibridas, criado em 2013 pela Drifty e com um grande suporte.
	
	É possível criar aplicações com o look and feel de uma aplicação nativa, mas ter apenas uma base de código, e no final, gerar instaladores para iOS, Android e Windows, mas nem contamos o windows pois já está em declínio.

	Um APP escrito com IONIC, utiliza, JavaScript, HTML, CSS(SASS) e Angular (TypeScript).


Oque são recursos nativos?
	São aqueles fornecidos pelo hardware do seu dispositivo móvel, digamos que pelo seu aplicativo seja necessário utilizar a camera, para ler um QR code, ou usar geolocalização, estes dois exemplos são recursos nativos, e para você fazer uso deles, é necessário instalar um plugin que no ecosistema IONIC chamamos de IONIC NATIVE.

SASS
	Utiliza o SASS como pré processador para tornar fácil a "tematização".

IONICONS
	Mais de 700 icones para sua aplicação, já se preocupando com as dierenças entre sistemas operacionais.


PLATFORM CONTINUITY
	É um conceito, que quer dizer que, se você desenvolve sua aplicação para uma plataforma, os componentes disponíveis pelo IONIC se adaptam e mudam a aparencia de acordo com o sistema operacional do disponsitivo.


IONIC VIEW
	É uma solução para testar sua aplicação entre diversos dispositivos. Você envia a aplicação para a nuvem do IONIC, faz o download do aplicativo chamado IONIC VIEW, e apartir dele baixa o seu aplicativo em desenvolvimento.

	Porém, esta solução está sendo descontinuada, oque pode ser até bom de um certo aspecto, pois ele não funciona bem quando a aplicação faz uso de muitos recursos nativos.

POSSO FAZER TODO TIPO DE APLICAÇÃO USANDO IONIC?
	Não. 
	Se sua aplicação irá utilizar muitos recursos nativos, e precisa de um nível de performace muito grande, como o Uber, ou EasyTaxy que utiliza muito geoprocessamento e o tempo de resposta entre o hardware e a renderização das informações no APP devem ser istantaneas, a minha recomendação é que faça nativo.

ANGULAR x IONIC
	No Angular temos um algo chamado Service, já no IONIC extamente a mesma coisa se chama Provider.

	No Angular temos a API de rotas, que apesar de estar disponível para uso no IONIC, não é usado, no IONIC utilizamos o conceito de pilha, onde você empilha e desempilha telas.

	Nem todos componentes escritos para funcionar com Angular vão funcionar bem no IONIC, por exemplo, existe um para fazer scrolldown infinito, que funciona bem no Angular, no IONIC não. É por isto que sempre que precisar de algo, primeiro olhe no site oficial se já existe algo pronto, se tiver utilize-o, neste exemplo, temos um componente para fazer scolldown infinito.

[não funciona no ionic] 
https://github.com/orizens/ngx-infinite-scroll

https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/

Aplicativo de demonstração dos componentes que já estão prontos pra você utilizar
https://github.com/yannbf/ionic3-components