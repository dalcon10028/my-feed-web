export default {
  namespace: true,
  state: () => ({
    feeds: [
      {
        id: 1,
        channel: {
          name: '달콘박스',
          link: 'https://old.dalconbox.com/',
          description: '테스트 설명',
          generator: 'TISTORY'
        },
        title: '렉시컬 스코프',
        link: 'https://old.dalconbox.com/317',
        pubDate: 'Fri, 08 Apr 2022 15:39:35 +0900',
        description: `IDE(VSCode)로 협업하며 개발을 하다 보면 문제가 없는 코드에 lint error 밑줄이 그어져 있는 경우가 있다...`
      },
      {
        id: 1,
        channel: {
          name: '달콘박스',
          link: 'https://old.dalconbox.com/',
          description: '테스트 설명',
          generator: 'TISTORY'
        },
        title: '렉시컬 스코프',
        link: 'https://old.dalconbox.com/317',
        pubDate: 'Fri, 08 Apr 2022 15:39:35 +0900',
        description: `IDE(VSCode)로 협업하며 개발을 하다 보면 문제가 없는 코드에 lint error 밑줄이 그어져 있는 경우가 있다...`
      }
    ]
  }),
  getters: {}
};
