import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { dom } from "@fortawesome/fontawesome-svg-core";


library.add(fas);

/*DOM -> controla o carregamento dos objetos da página
Ele irá observar a página verificando ocorrências do font awesome*/ 

dom.i2svg().then(() => {
  dom.watch();
});
