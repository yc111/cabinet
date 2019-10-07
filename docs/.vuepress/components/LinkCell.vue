<template>
  <div class="card">
    <div class="card-header">
      <div class="main-title">
        <span class="declear">原创</span>
        <span class=“title”>{{ctitle}}</span>
      </div>
      <div class="sub-title">
        <span class="category">{{category}}</span>
        <span class="date">{{date}}</span>
      </div>
    </div>
    <div class="card-body">
      <span class="tag" v-for="(tag, index) in tags" :key="index">{{tag}}</span>
      <p class="summary">{{summary}}</p>
    </div>
    <div class="card-footer">
      <a :href="linkpath" class="more">查看全文</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Linkcard",
  props: ["ctitle", "category", "date", "tags", "summary", "linkpath"]
};
</script>

<style>
.card {
  display: inline-block;
  width: 50%;
  height: 300px;
  margin: 30;
  padding: 10px;
  border: solid 1px #eeeeee;
}

.title {
  font-size: 32px;
  font-weight: 800;
}
.card-content {
  font-size: 16px;
  color: #333333;
}
.card-footer {
  color: #3eaf7c;
}
</style>