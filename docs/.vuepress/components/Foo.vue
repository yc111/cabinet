<template>
  <div class="cell">
    <h1>{{ctitle}}</h1>
  </div>
</template>

<script>
export default {
  name: "Foo",
  props: ['ctitle']
}
</script>

<style>
  .cell {
    display: inline-block;
    width: 30%;
    height: 150px;
    margin: 10;
    border: solid 1px #eeeeee;
  }
  .cell-title {
    font-size: 32px;
    font-weight: 800;
  }
  .cell-content {
    font-size: 16px;
    color: #333333
  }
  .cell-footer {
    color: aquamarine;
  }
</style>