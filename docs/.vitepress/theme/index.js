import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },
  setup() {
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    giscusTalk({
      repo: 'doocs/technical-books',
      repoId: 'MDEwOlJlcG9zaXRvcnkxNzgwMjQ5NDk=',
      mapping: 'number',
      inputPosition: 'top',
      lang: 'zh-CN',
      homePageShowComment: true,
      term: '30',
      lightTheme: 'light',
      darkTheme: 'transparent_dark',
    }, {
      frontmatter,
      route
    }, true);
  }
};