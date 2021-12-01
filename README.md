<h1  align="center">VacinaInTheHome Frontend🚀</h1>

![Settings Window](https://i.imgur.com/U59PCdc.jpeg)


## 📝 Sobre o projeto

- Trata-se de uma plataforma de agendamento de vacinas.Visando a dificuldade de algumas pessoas de ir até o local de vacinação, seja por medo ou por problemas de saúde, o vacinaInTheHome chegou para resolver esse problema. Com a plataforma você pode agendar sua vacinação no cnforto e segurança da sua casa!

    
## 🛠️ Tecnologias Utilizadas

[Angular12](https://www.python.org/)

[NPM](https://www.djangoproject.com/)

[NodeJs](https://www.django-rest-framework.org/)


## 🔍 Pré-requisitos

[Node >= 14.15](https://www.python.org/)

[Angular](https://docs.docker.com/compose/)

[Aplicação Backend]()



## ⚙️ Como executar o projeto

Para executa essa aplicação, vamos começar com a instalação de todos os pacotes node necessarios para o funcionamento do projeto através do comando `npm update`.

## .ENV

- Para o rodar o projeto localmente , vai precisar do arquivo .env dentro da pasta /app/ então crie-o colocando o conteudo abaixo.

```text
SECRET_KEY=django-insecure-@irl6g)r5^-rwrn&%vr3(lp3#53+1=ghi20$8k@drjeif55g1)
DEBUG=True
```
Caso queria trocar a aplicação para modo Debug , basta trocar de False para True


### Rodar com Docker
caso queira rodar a aplicação utilizando docker, basta digitar os comando abaixo utilizando o docker-compose.

```bash
# startando o container docker do docker

#comando para buildar a imagen docker
$ docker-compose build

#comando para subir os containers
$ docker-compose up -d

```

### Rodar em sua maquina

 - Se estiver rodando em ambiente Unix basta executar o script run_api.sh que ele criará um maquina virutal python e vai instalar todas dependências nela e executar a aplicação.

 ```bash
    bash run_app.sh
 ```

- Se estiver rodando em ambiente Windows siga os passos abaixo:
  - 1 - Basta digitar o comando `ng serve` certifique-se de que todas as dependências do projeto estão instaladas



#### Se você seguiu todos os dados Certinho o servidor já está ativo com a aplicação na rota http://localhost:4200/

