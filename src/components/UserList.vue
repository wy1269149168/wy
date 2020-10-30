<template>
  <el-table
    v-loading="loading"
    :data="tableData"
    height="100%"
    border
    style="width: 100%">
    <el-table-column
      prop="no"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄">

    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别" :formatter="getSex">

    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleClick(scope.row.no)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="open(scope.row.no)">删除</el-button>
      </template>
    </el-table-column>
    <router-view></router-view>
  </el-table>

</template>

<script>
  export default {
    props:['userName'],
    inject: ['reload'],
    name:'UserList',
    data() {
      return {
        tableData: [
          {
            no:"",
            name:"",
            age:"",
            sex:""
          }
        ],
        loading:true
      }
    },
    beforeCreate() {

      this.$axios.post('/queryList', {

      }).then(successResponse=>{
        console.log(successResponse)
        if (successResponse.status===200){
          this.tableData = successResponse.data;
          this.loading=!this.loading;
        }
      }).catch(failResponse=>{

      })
    },
    methods:{
      handleClick(no) {

        console.log(no),
        this.$axios.post('/queryStudentByNo',{
          no: no,
        }).then(successResponse=>{
          if (successResponse.status==200&&successResponse.data!==""){
            console.log(successResponse.data),
            this.$router.push({
              name:'UpdateStudent',
              params:{
                students: successResponse.data,
                // userName:userName
                // userName: userName,
              }
            })
          }
        })
      },
      getSex(row,index){
        if (row.sex == 1){
          return "男";
        }else {
          return "女"
        }
      },
      open(no){
        this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/deleteStudent',{
            no:no,
          }).then(response=>{
            if (response.status===200&&response.data===1){
              console.log(response),
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              this.reload()

            }
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
