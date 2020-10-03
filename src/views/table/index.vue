<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="编号" width="95">
        <template slot-scope="scope">{{ scope.$index}}</template>
      </el-table-column>
      <el-table-column label="设备名称">
        <template slot-scope="scope">{{ scope.row.deviceModel }}</template>
      </el-table-column>
      <el-table-column label="设备归属" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.userId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="设备分辨率" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.screenWidth}} * {{scope.row.screenHeigth}}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="设备状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.deviceStatus }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="当前时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

// import { getList } from '@/api/table'

import { getListById } from '@/api/devices'


export default {
  userId: '',
  computed: {
    ...mapGetters([
      'userId'
    ])
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      const params = {
        "userId": this.userId
      };
      getListById(params).then(response => {
        this.list = response.data
        console.log("data", this.list)
        this.listLoading = false
      })
    }
  }
}
</script>
