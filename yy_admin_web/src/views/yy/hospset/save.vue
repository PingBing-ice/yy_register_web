<template>
  <div class="app-container">
    <template>
      <div class="app-container">
        <el-form label-width="120px">
          <el-form-item label="医院名称">
            <el-input v-model="hospset.hosname"/>
          </el-form-item>
          <el-form-item label="医院编号">
            <el-input v-model="hospset.hoscode"/>
          </el-form-item>
          <el-form-item label="api地址">
            <el-input v-model="hospset.apiUrl"/>
          </el-form-item>
          <el-form-item label="联系人">
            <el-input v-model="hospset.contactsName"/>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="hospset.contactsPhone"/>
          </el-form-item>
          <el-form-item>
            <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </template>
  </div>
</template>

<script>
import hosp from '@/api/hospset'
import hos from '@/api/hospset'

export default {
  data() {
    return {
      hospset: {},
      saveBtnDisabled: false // 保存按钮是否禁用,
    }
  },
  created() {
    this.hospset.id = this.$route.query.id
    console.log(this.hospset.id, 'asdasdasd==============')
  },
  methods: {
    saveOrUpdate() {
      this.saveBtnDisabled = true
      this.saveData()
    },
    // 保存
    saveData() {
      this.saveBtnDisabled = true
      if (this.hospset.id) {
        hos.updateById(this.hospset).then(resp => {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.$router.push({
            path: '/yy/hospset/list'
          })
        })
      } else {
        hosp.save(this.hospset).then(response => {
          this.$message({
            type: 'success',
            message: '保存成功!'
          })
          this.$router.push({ path: '/yy/hospset/list' })
        }).catch((response) => {
          this.$message({
            type: 'error',
            message: '保存失败'
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
