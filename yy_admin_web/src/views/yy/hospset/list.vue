<template>
  <div class="app-container">
    <!--查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.hosname" placeholder="医院名称"/>
      </el-form-item>

      <el-form-item>
        <el-input v-model="searchObj.hoscode" placeholder="医院编号"/>
      </el-form-item>
      <el-select v-model="limit" placeholder="显示的数目">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-search" @click="fetchData()">查询</el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="数据加载中...."
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"/>
      <el-table-column
        label="序号"
        width="70"
        align="center"
      >
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="hosname" label="医院名称" width="180"/>

      <el-table-column prop="hoscode" label="医院编号" width="160"/>

      <el-table-column prop="apiUrl" label="地址" width="200"/>

      <el-table-column prop="contactsName" label="联系人"/>

      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          {{ scope.row.status === 1 ? '可用' : '不可用' }}
        </template>
      </el-table-column>

      <el-table-column label="操作" width="300" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="editById(scope.row.id)">修改</el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除
          </el-button>
          <el-button v-if="scope.row.status===1" type="primary" size="mini" icon="el-icon-delete" @click="lockHostSet(scope.row.id,0)">锁定
          </el-button>
          <el-button v-if="scope.row.status===0" type="danger" size="mini" icon="el-icon-delete" @click="lockHostSet(scope.row.id,1)">取消锁定
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-button type="danger" size="mini" @click="removeRows()">批量删除</el-button>
    </div>
    <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      background
      style="padding: 30px 0; text-align: center;"
      layout="prev, pager, next, jumper"
      @current-change="fetchData"
    />
  </div>
</template>

<script>
import hos from '@/api/hospset'

export default {
  data() {
    return {
      multipleSelection: [],
      options: [{
        value: 1,
        label: 1
      }, {
        value: 5,
        label: 5
      }, {
        value: 10,
        label: 10
      }, {
        value: 20,
        label: 20
      }, {
        value: 30,
        label: 30
      }],
      listLoading: true, // 是否显示loading信息
      list: [], // 数据列表
      total: 0, // 总记录数
      page: 1, // 页码
      limit: 5, // 每页记录数
      searchObj: {
        hosname: '',
        hoscode: ''
      }// 查询条件
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    // 锁定业务
    lockHostSet(id, status) {
      hos.lockHospSet(id, status).then(resp => {
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
        this.fetchData()
      })
    },
    handleSelectionChange(selection) {
      this.multipleSelection = selection
    },
    // 批量删除
    removeRows() {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请选择医院',
          type: 'warning'
        })
        return
      }
      this.$confirm('此操作将永久删除医院是设置信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { // 确定执行then方法
        const idList = []
        // 遍历数组得到每个id值，设置到idList里面
        for (let i = 0; i < this.multipleSelection.length; i++) {
          const obj = this.multipleSelection[i]
          const id = obj.id
          idList.push(id)
        }
        // 调用接口
        hos.removeRows(idList)
          .then(response => {
            // 提示
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            // 刷新页面
            this.fetchData(1)
          })
      })
    },
    fetchData(page = 1) {
      this.page = page
      hos.getHospitalPage(this.page, this.limit, this.searchObj).then(resp => {
        this.total = resp.data.total
        this.list = resp.data.records
        this.listLoading = false
      })
    },
    resetData() {
      this.searchObj = {}
      this.fetchData()
    },
    editById(id) {
      console.log(id, '=====================')
      this.$router.push({
        path: '/edit',
        query: { id }
      })
    },
    removeDataById(id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return hos.removeById(id)
      }).then(() => {
        this.fetchData()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch((response) => { // 失败
        if (response === 'cancel') {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        } else {
          this.$message({
            type: 'error',
            message: '删除失败'
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
