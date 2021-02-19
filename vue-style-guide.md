## Sumarização dos padrões de desenvolvimento do VueJS

### Categorias
Cada padrão descrito encontra-se em uma das seguintes categorias:
1. [Essenciais](#essenciais) cuja intenção é previnir erros :fire:.
2. [Fortemente recomendados](#fortemente-recomendados) são padrões que objetivam melhorar a legibilidade do código :orange_book:.
3. [Recomendados](#recomendados) que buscam minimizar escolhas arbitrárias e discuções desnecessárias :thought_balloon:.
4. [Usar com cuidado](#usar-com-cuidado) apontado pela documentação como padrões com "perigo em potencial" :warning:.

### Essenciais

1. O **nome de componentes** deve ser formado por várias palavras. Ex: TodoItem.
2. A **definição das props** deve ser a mais detalhada possível, ao menos
o tipo deve ser especificado. Props devidamente descritas tornam o entendimento
do componente mais simples. Ex:

     ```javascript
     props: {
         status: {
             type: String,
             required: true,
             validator: function(){...}
         }
     }
     ```
3. **Evite** declarações `v-if` no mesmo elemento juntamente com declarações `v-for`. 
No exemplo a seguir, toda vez em que é necessário re-renderizar os elementos toda
a lista de usuários é percorrida.

     ```html
     <ul>
         <li
             v-for="user in users"
             v-if="user.active"
             :key="user.id"
         >
             {{ user.name }}
         </li>
     </ul>
     ```

     Processamento desnecessário que pode ser evitado criando uma _computed property_.      
     
     ```javascript
     computed: {
         activeUsers(){
             this.users.filter(function(user){
                 return user.active;
             }); 
         }
     }
     ```
4. O **escopo dos estilos** dos componentes deve ser restrito, com exceção dos estilos
do componente raiz ─ App ─ e de componentes de layout.

    ```html
    <style scoped>
        .btn {
            color: #eee;
            font-size: 1rem;
        }
    </style>
    ```
5. O **nome de propriedades privadas** em plugins, mixins e componentes deve conter o prefixo
`$_`. Isso foi esquematizado baseando-se no fato de que as referências com o prefixo `$` serem
recursos públicos do framework, e referências privadas serem prefixadas com `_`. Assim foi deliberado
que a melhor maneira de nomear propriedades privadas definidas pelo usuário é unindo os dois prefixos,
fazendo isso não há chances de ocorrer algum tipo de problema com referências.

[:arrow_up: Lista de categorias](#categorias)

### Fortemente Recomendados

1. Criar **arquivos de componentes** é uma prática bastante interessante, uma vez tendo os componentes
definidos em arquivos específicos torna-se mais fácil encontrá-los, e revisá-los. Esse padrão é bastante 
conveniente quando analisando da perspectiva de projetos bastante extensos e com muito componentes.

2. Nomes de **arquivo de componentes** devem ser sempre PascalCase ou kebab-case.

3. Nomes de **componentes padrão** que definem estilos específicos devem ser prefixados com
**Base**, **App** ou **V**. Ex: BaseButton, VInput, AppHeader.

4. Nome de **componentes de instância única**, que são instânciados apenas uma única vez em cada **página** ou **view**
devem conter o prefixo **The**. Esse tipo de componente nunca aceita props uma vez que ele é mais geral e não possui
um relacionamento com o componente pai. Ex: **TheHeader**, **TheFooter**, **TheSidebar**

5. Nome de **componentes bastante dependentes/acoplados** (comum entre componentes pais e filhos), nessa situação
o componente filho devem ser prefixado com o nome do componente pai. Ex: 
     ```
     components/
          |- TodoList.vue
          |- TodoListItem.vue
          |- TodoListItemButton.vue
     ```
     Fazer isso é bastante conveniente pois a ordem alfabética dos editores de texto mantém os componentes próximos
     o que melhora a "navegação" no projeto.
     
6. **Ordem das palavras** no nome dos componentes deve sempre iniciar com termos mais gerais ─ alto nível ─ e terminar
com palavras que modificam, descrevem, e não deixam dúvida sobre o propósito do componente (ver item anterior).

7. A declaração de **fechamento de template** pode ser feita de duas maneiras. O **auto-fechamento** deve ser
usado em componentes definidos em arquivos ou strings e o **fechamento padrão** (html like) deve ser usado em templates
DOM. Ex.:

     ```html
     <!-- Arquivo .vue -->
     <template>
          <MyComponent
               prop1="miau"
               prop2="That's What She said"
          />
     </tempate>

     <!-- Contexto DOM -->
     <my-component
          prop1="miau"
          prop2="That's What She said"
     >

     </my-component>
     ```

8. **Nome do componentes** deve seguir o estilo PascalCase no nome de arquivos, em templates definidos em arquivos
`.vue` e no formato de string. O estilo kebab-case deve ser usado em referências a partir de templates DOM
(verificar item anterior).

9. Nomes de componentes **não devem conter abreviações**, elas não transmitem informação nenhuma. Ao invés disso
é preferível um nome longo porém informativo.

10. **Nomes de propriedades** devem seguir o estilo camelCase na sua declaração, porém kebab-case em referências no
contexto de templates DOM ou JSX.

11. **Elementos com muitos atributos** devem ser organizados em várias linhas. Em javascript essa prática é bastante usada
na declaração de objetos que são extensos e é considerada uma boa convenção. De acordo com a
[documentação](https://vuejs.org/v2/style-guide/#Multi-attribute-elements-strongly-recommended)
isso melhora a legibilidade do código. Ex.:

     ```html
     <template>
          <MyComponent
               prop1="miau"
               prop2="That's What she said"
          />
     </tempate>

     <img
          src="https://oloco-meu.png"
          alt="Oloco meu"
     >
     ```

12. Templates devem **conter expressões simples**, expressões complexas devem ser refatoradas
para métodos ou _computed properties_.

13. ****Computed props**** muito complexas devem ser refatoradas em props mais simples, quando possível, 
isso possibilita nomear partes do código o que facilita o entendimento do mesmo.

14. **Valores de atributos devem estar entre aspas**. Quando sem aspas, a sintaxe não permite que as partes que compôem o
valor de um atributo sejam separadas por espaço, e isso dificulta a leitura do código. Ex.: 

     ```html
          <!-- Shitty -->
          <AppSidebar :style={width:sidebarWidth+'px'}>

          <!-- Pretty -->
          <AppSidebar :style="{ width: sidebarWidth + 'px' }">
          
          <!-- By Vue Docs -->
     ```
     
15. **Abreviações de diretivas** devem ser usadas sempre ou nunca, misturar as duas possibilidades é uma heresia,
segundo a doutria VueJS.

[:arrow_up: Lista de categorias](#categorias)

## Recomendados

1. Adicionar **linhas vazias/separadoras** entre propriedades de componentes é uma prática que melhora a leitura 
e a navegação pelo código, essêncial caso a lista de _props_ e outras opções do componente seja longa. Não é necessário 
caso este seja enxuto. Ex.:
     ```javascript
     // By Vue Docs
     props: {
       value: {
         type: String,
         required: true
       },

       focused: {
         type: Boolean,
         default: false
       },

       label: String,
       icon: String
     },

     computed: {
       formattedValue: function () {
         // ...
       },

       inputClasses: function () {
         // ...
       }
     }
     ```
     
2. Componentes declarados em arquivos `.vue` devem seguir a ordem de elementos: `<script>`, 
`<template>` e `<style>` (weird).

## Usar com cuidado

1. **Não usar o atributo `key` em condicionais do tipo `v-if` + `v-else-if` + `v-else`**.  Usar o atributo `key` obriga o Vue a
considerar os elementos como distintos, caso contrário somente um elemento é utilizado e este é atualizado em função do condicional.
Deve-se tomar cuidado em condicionais (ver exemplo a seguir) em que dois elementos estão sendo considerados a mesma coisa (sem `key`), onde da verdade
deveriam estar sendo considerados distintos.

     ```html
     <!-- By Vue Docs -->
     <div v-if="error">
          Erro: {{ error }}
     </div>
     <div v-else>
          {{ results }}
     </div>
     ```

2. **Seletores baseados em elementos devem ser evitados** em contextos `<style scoped>`. Ao invés disso use classes,
torna-se custoso um grande número de seletores baseados em elementos uma vez que o Vue adiciona um atributo `data` específico
ao elemento e estiliza-o a partir disso.

3. **Comunicação entre componentes pai-filho implícita**. Preferir _props_ e eventos na comunicação entre componentes pais e filhos,
ao invés da declaração `this.$parent` ou _mutating props_. Um App VueJS ideal é composto por _props_ fazendo a comunicação de elementos pais com
filhos e eventos fazendo a comunicação inversa. Porém é sabido que há situações extremas que _mutation props_ ou `this.$parent` podem simplificar
dois componentes que já estão bastante acoplados. A última solução parece bastante convidativa em sitações simples, porém fique atento, não
abra mão de escrever menos código por ser capaz de facilmente compreender o fluxo de dados entre seus componentes.

**Fonte**: [VueJS Style Guide](https://vuejs.org/v2/style-guide)
