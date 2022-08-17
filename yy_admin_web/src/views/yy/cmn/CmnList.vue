<template>
  <div class="app-container">
    <el-table
      :data="list"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column
        prop="name"
        label="名称"
        width="300"
      />

      <el-table-column
        prop="dictCode"
        label="编码"
        width="300"
      />

      <el-table-column
        prop="value"
        label="值"
        width="300"
      />

      <el-table-column
        prop="createTime"
        label="创建时间"
      />

    </el-table>
    <div class="el-toolbar">
      <div class="el-toolbar-body" style="justify-content: flex-start;">
        <el-button type="text" @click="exportData"><i class="fa fa-plus"/> 导出</el-button>
        <el-button type="text" @click="importData"><i class="fa fa-plus"/> 导入</el-button>
      </div>
    </div>
    <el-dialog title="导入" :visible.sync="dialogImportVisible" width="480px">
      <el-form label-position="right" label-width="170px">
        <el-form-item label="文件">
          <el-upload
            :multiple="false"
            :on-success="onUploadSuccess"
            :action="'http://localhost/cmn/dict/importData'"
            class="upload-demo"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传xls文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogImportVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import cmn from '@/api/cmn'

export default {
  data() {
    return {
      dialogImportVisible: false,
      list: [] // 数据字典列表数组
    }
  },
  created() {
    this.getDataList()
  },
  methods: {
    // 获取数据
    getDataList() {
      cmn.getList(1).then(resp => {
        this.list = resp.data.list
      })
    },
    importData() {
      this.dialogImportVisible = true
    },
    onUploadSuccess(response, file) {
      this.$message.success('上传成功')
      this.dialogImportVisible = false
      this.getDataList()
    },

    load(tree, treeNode, resolve) {
      cmn.getList(tree.id).then(resp => {
        resolve(resp.data.list)
      })
    },
    exportData() {
      this.$confirm('确定要下载吗？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      })
        .then(() => {
          window.open('http://localhost/cmn/dict/exportData')
        })
        .catch(action => {
        })
    }
  }
}
</script>

<style scoped>

</style>
