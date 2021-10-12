# Duodígito :100:

PWA para calcular o mínimo múltiplo duodígito de um número maior do que 100 informado pelo usuário.  



## Front-End

### Linguagens e ferramentas utilizadas :wrench:



* React :atom_symbol: 17.0.2

* TypeScript :keyboard: 4.3.5

* Visual Studio Code :vs: 1.61.0

* Ubuntu :penguin: 18.04

* Google Chrome :globe_with_meridians: 94.0.4606.81

  

### Bibliotecas utilizadas :books:



* create-react-app

`yarn create react-app calculo_duodigito` 

* Emotion

`         yarn add @emotion/react`

`         yarn add @emotion/css`

* Toastify

`         yarn add react-toastify`

* Yarn

  

### Instalação local do Front-End :framed_picture: 



Após clonar o repositório, acesse o diretório "front_end" e execute os seguintes comandos:  



`yarn install`

`yarn start`  



A seguir, acesse `localhost:3000` no seu browser 



### Restrições à entrada de dados :no_entry_sign:



* O usuário deve informar um número real
* O usuário não pode entrar com um número que seja menor do que 100
* O usuário pode fazer até 30 consultas à API por sessão, para que a página permaneça legível
* Caso a API não consiga calcular uma solução satisfatória, o usuário é informado através de uma mensagem de erro



### Observações :eyes:



* O aplicativo apresenta boa visualização e usabilidade quando executado em smartphones e tablets
* Diferentes bibliotecas de CSS poderiam ter sido utilizadas neste aplicativo
* Não foi imposto um limite máximo para entrada de números, uma vez que o máximo número que pode ser processado por um sistema 64 bits é consideravelmente grande. No entanto, o backend enviará uma mensagem de erro caso não consiga lidar com o número informado.





## Back-End

### Linguagens e ferramentas utilizadas :wrench:



* Java :coffee: 11.0.11
* IntelliJ IDEA :id: 2021.2.2
* Spring Boot :leaves: 2.5.5 



### Bibliotecas utilizadas :books:



* Spring Web



### Instalação local do Back-End :back: 



Após clonar o repositório, abra o diretório "back_end"  no IntelliJ IDEA e execute o arquivo src/main/java/romulo/springbootbackend/SpringbootBackendApplication.java  



Após execução, o servidor estará disponível em `http://localhost:8080`



### Observações :eyes:



* A API retorna um código de erro caso passe por muitas iterações sem encontrar a solução ou caso o múltiplo calculado "estoure" a variável