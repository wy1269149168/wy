<template>
  <div style="margin-left: 100px">
    <el-form ref="form" :model="form" label-width="80px" >
      <el-form-item label="学生学号" style="width: 50%">
        <el-input v-model="form.no"></el-input>
      </el-form-item>
      <el-form-item label="学生姓名" style="width: 50%">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="学生年龄" style="width: 50%">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="学生性别">
        <el-select v-model="form.sex" placeholder="请选择学生性别">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name:'addUser',
    data() {
      return {
        form: {
          no: '',
          name: '',
          age: '',
          sex: ''
        }
      }
    },
    methods: {
      onSubmit() {this.$confirm('数据即将提交, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

          this.$axios.post('/addStudent',{
            no: this.form.no,
            name: this.form.name,
            age: this.form.age,
            sex: this.form.sex

          }).then(successResponse=>{
            console.log(successResponse);
            if (successResponse.status === 200&&successResponse.data===1){
              this.$message({
                type: 'success',
                message: '添加成功!'
              });
              this.$router.replace({path: '/userList'})
            }else {
              this.$message({
                type: 'info',
                message: '添加失败,当前数据已存在'
              });
              console.log('添加失败')
            }
          }).catch(()=>{

          })

        }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消添加'
        });
      });

      }
    }

  }

</script>
