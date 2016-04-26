/*
参照
http://phiary.me/vue-js-markdown-editor/
 */

// ロード時読み込み
window.onload = function() {
  new Vue({
    el: '#editor',
    data: {
      // v-model デフォルト値
      input: '# Hello World\n\n- hoge\n- foo\n ## sub title\n * aaa\n * bbb',
    },
    // marked.jsのmarked()を利用
    filters: {
      marked: marked
    },
  });
};
