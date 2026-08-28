Gupy Test - Fullstack Application
Este repositório contém a solução para o desafio técnico Fullstack (Gupy), composto por uma API REST construída com Spring Boot (Java) e uma aplicação Front-end em Angular.

Objetivos Concluídos
API Documentada: Back-end estruturado com endpoints mapeados e documentação interativa gerada via Springdoc OpenAPI (Swagger).

Front-end Funcional: Interface desenvolvida em Angular com o fluxo completo da aplicação, integrando Angular Material e Bootstrap, além de validações de formulário.

Testes Implementados: Cobertura de cenários principais através de testes no Back-end (Spring Boot Test) e no Front-end (Vitest).

Tecnologias Utilizadas
Back-end (Gupy-Test-Spring)
Java 26

Spring Boot (WebMVC, Data JPA, Validation)

Banco de Dados: H2 Database (Em memória, facilitando a execução e testes)

Lombok: Para redução de boilerplate (Getters, Setters, Construtores, etc)

Springdoc OpenAPI: Para documentação automática da API (Swagger)

Front-end (gupy-test-angular)
Angular (Framework principal)

Angular Material & CDK: Componentes de UI e comportamentos

Bootstrap & Ng-Bootstrap: Estilização e layout responsivo

RxJS: Programação reativa

Vitest: Framework de testes unitários para o front-end

🚀 Como Executar o Projeto
Pré-requisitos
Java 26 (JDK) instalado.

Maven instalado.

Node.js (versão recomendada pelo Angular/npm atual) e npm instalados.

Angular CLI (Opcional para rodar comandos globais, mas os scripts do package.json já resolvem).

1. Executando o Back-end
   O back-end utiliza o banco de dados em memória H2, o que significa que não é necessária nenhuma configuração externa de banco.

Acesse a pasta raiz do back-end.

Baixe as dependências e inicie a aplicação:

Bash
mvn clean install
mvn spring-boot:run
A API estará rodando por padrão na porta 8080.

Acessando a Documentação da API:
Com o back-end em execução, acesse a interface do Swagger para explorar e testar os endpoints através do navegador:
http://localhost:8080/swagger-ui.html

2. Executando o Front-end
   O projeto Angular está configurado com um proxy (proxy.conf.js) para evitar problemas de CORS ao se comunicar com o Back-end local.

Acesse a pasta raiz do front-end.

Instale as dependências do projeto:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm start
A aplicação estará disponível no navegador em:
http://localhost:4200

Como Executar os Testes
Para garantir a qualidade e resiliência da aplicação, ambos os ecossistemas possuem scripts de testes prontos para execução.

Acessar o back-end

git clone https://github.com/acvb-Alexsander/Gupy-Test-Spring.git

Testes no Back-end
Os testes de integração e testes unitários do Spring Boot podem ser executados com o Maven:

Bash
mvn test
Testes no Front-end
O front-end utiliza o Vitest como motor de testes (conforme configurado no package.json). Para rodar a suíte de testes:

Bash
npm run test


banco de dados 

spring.application.name=Gupy-Test-Spring
spring.datasource.url= jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.show-sql=true
