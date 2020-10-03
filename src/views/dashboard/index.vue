<template>
  <div class="dashboard-container">
    <div class="dashboard-id">用户id: {{ userId }}</div>
    <div class="dashboard-name">用户名: {{ name }}</div>
    <div class="dashboard-text">系统使用说明：</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  userId: '',
  computed: {
    ...mapGetters([
      'name',
      'userId'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-id {
    font-size: 30px;
    line-height: 46px;
  }
  &-name {
    font-size: 30px;
    line-height: 46px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
