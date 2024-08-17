# Frontend Mentor - Solução do aplicativo gerador de conselhos

Esta é uma solução para o [desafio do aplicativo gerador de conselhos no Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação construindo projetos realistas.

## Índice

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal do aplicativo de acordo com o tamanho da tela do dispositivo.
- Ver os estados de hover para todos os elementos interativos na página.
- Gerar um novo conselho ao clicar no ícone de dado.

### Screenshot

![](./src/design/active-states.jpg)
![](./src/design/desktop-design.jpg)
<div style="text-align: center;">
  <img src="./src/design/mobile-design.jpg">
</div>

### Links

- URL da solução: [Adicionar URL da solução aqui](https://sua-url-da-solucao.com)
- URL do site ao vivo: [Adicionar URL do site aqui](https://seu-site-ao-vivo.com)

## Meu processo

### Construído com

- HTML5 semântico
- Propriedades customizadas de CSS
- Flexbox
- Fluxo de trabalho mobile-first
- JavaScript
- [Advice Slip API](https://api.adviceslip.com/)

### O que eu aprendi

Durante este projeto, melhorei minhas habilidades em utilizar APIs com JavaScript. Aqui está um exemplo de como busquei dados da Advice Slip API:

```js
async function fetchAdvice() {
  try {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const data = await response.json();

    const number = data.slip.id;
    const text = data.slip.advice;

    adviceId.innerText = `CONSELHO #${number}`;
    adviceText.innerText = `"${text}"`;

  } catch (error) {
    console.log(error);
  }
}

fetchAdvice();
```

### Desenvolvimento contínuo

Planejo continuar focando em melhorar minhas habilidades em JavaScript assíncrono e em um melhor manuseio de respostas de APIs, além de explorar técnicas mais avançadas de CSS para criar layouts responsivos.

### Recursos úteis

- [Documentação da Advice Slip API](https://api.adviceslip.com/) - Esta API foi fácil de usar e forneceu todos os dados necessários para o projeto.

## Autor

- Frontend Mentor - [@nahinMSM](https://www.frontendmentor.io/profile/nahinMSM)
- Linkedin - [@Nahin Moreira](https://www.linkedin.com/in/nahin-moreira-752b9a246/)

## Agradecimentos

Agradeço ao Frontend Mentor por fornecer este desafio, e ao curso **"DevQuest"** que me ajudou a praticar e melhorar minhas habilidades em JavaScript e integração com APIs.