<template>
  <ul class="toc">
    <li v-for="h1 in anchors">
      <a :href="h1.href"><b>{{h1.label}}</b></a>
      <ul v-if="h1.items && h1.items.length">
        <li v-for="h2 in h1.items">
          <a :href="h2.href">{{h2.label}}</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#" class="back-to-top">Back to top</a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['anchors']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "./../../assets/css/variables";

  .toc {
    list-style: none;
    padding: 0;

    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      margin: 5px 0;
    }

    a {
      color: #99979c !important;
      text-decoration: none !important;
      display: block;

      &:hover {
        color: @highlight-color !important;
      }

      &.back-to-top {
        opacity: .8;
        margin-top: 20px;
        font-size: 90%;
      }
    }
  }
</style>
