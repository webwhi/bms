<template>
  <div class="login-container">
      <el-form :model="form" class="login-form"  :rules="rules" ref="formRef">
          <div class="title-tontainer">
              <h3 class="title">用户登录</h3>
          </div>
    <el-form-item prop="username">
             <el-icon class="svg">
                <avatar />
             </el-icon>
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item prop="password">
         <el-icon class="svg" @click="changeType">
             <key />
         </el-icon>
      <el-input v-model="form.password" :type="passwordType" />
    </el-form-item>
       <el-button type="primary" round="boolean" class="login" @click="handLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { reactive,ref } from 'vue';
import {login} from '@/api/login'
import {Avatar} from '@element-plus/icons-vue'
import{Key}from '@element-plus/icons-vue'

const form=ref({
    username:'admin',
    password:'123456'
})
const rules=ref({
    username:[
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    
    ],
     password:[
      { required: true, message: 'Please input Activity name', trigger: 'blur' },
    
     ]
})
const formRef=ref(null)
const handLogin=()=>{
     
  formRef.value.validate(async(valid) => {
    if (valid) {
      // alert('submit!');
      const res=await login(form.value);
        console.log(res);
    } else {
      console.log('error submit!');
      return false
    }
  })
}
   const passwordType=ref('password')
   const changeType=()=>{
     if(passwordType.value==='password')
     {
       passwordType.value='text'
     }
     else{
       passwordType.value='password'
     }
   }

</script>

<style lang="scss" scoped>
.login-container{
    margin: 20%;
    position: relative;
}
.title{
    margin-left: 40%;   
}
.svg{
   position: absolute;
   top: 30%;
   z-index: 1;
}
.login{
    width: 100%;
}
</style>