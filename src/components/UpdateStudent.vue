<template>
  <div style="margin-left: 100px">
    <el-form ref="form" :model="student" label-width="80px" >
      <el-form-item label="学生学号" style="width: 50%">
        <el-input v-model="student.no"></el-input>
      </el-form-item>
      <el-form-item label="学生姓名" style="width: 50%">
        <el-input v-model="student.name"></el-input>
      </el-form-item>
      <el-form-item label="学生年龄" style="width: 50%">
        <el-input v-model="student.age"></el-input>
      </el-form-item>
      <el-form-item label="学生性别">
        <el-select v-model="student.sex"  placeholder="请选择学生性别">
          <el-option label="男" :value="1"></el-option>
          <el-option label="女" :value="0"></el-option>
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
      name: "UpdateStudent",
      data() {
        return{
          student: {
              no:this.$route.params.students.no,
              name:this.$route.params.students.name,
              age:this.$route.params.students.age,
              sex:this.$route.params.students.sex
            }
        }
      },
      // created() {
      //   if (this.student.sex==1){
      //     this.student.sex="男"
      //   }else {
      //     this.student.sex="女"
      //   }
      // },
      methods:{
        onSubmit(){
          //var that = this;
          // if (this.student.sex==="男"||this.student.sex==="女"){
          //
          // }
          this.$axios.post('/updateStudent',{
            no:this.student.no,
            name:this.student.name,
            age:this.student.age,
            sex:this.student.sex
          }).then(response=>{
            if (response.status===200&&response.data===1){
              this.$router.push({path:'/userList'})
            }
          })
        },
        // getSex(row,index){
        //   if (row.sex == 1){
        //     return "男";
        //   }else {
        //     return "女"
        //   }
        // }
      }

    }
</script>

<style >

</style>
