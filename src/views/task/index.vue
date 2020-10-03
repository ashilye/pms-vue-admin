<template>
  <div class="app-container">
    <h3>选择操作应用</h3>
    <div class="box-item">
      <el-radio v-model="radio" label="1">抖音</el-radio>
      <el-radio v-model="radio" label="2">快手</el-radio>
    </div>
    <h3>选择任务类型</h3>
    <div class="box-item">
      <el-button type="primary" icon="el-icon-plus" @click.native.prevent="handleType"></el-button>
    </div>
    <h3>选择设备</h3>
    <div class="box-item">
      <el-button type="primary" icon="el-icon-plus" @click.native.prevent="handleDevices"></el-button>
    </div>

    <div class="box-submit">
      <el-button type="primary" @click.native.prevent="handleSubmit">立即发布</el-button>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      listLoading: true,
      radio: '1'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    handleType() {
      this.$message('选择分类');
    },
    handleDevices() {
      this.$message('选择设备');
    },
    handleSubmit() {
      this.$message('提交');
    },
    fetchData() {
      this.listLoading = true



      this.listLoading = false

    }
  }
}
</script>
<style scoped>
h3 {
  color: gray;
  margin-top: 30px;
}

.box-item {
  margin: 0px 30px 0px 30px;
}

.box-submit {
  margin-top: 50px;
}
</style>