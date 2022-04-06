<template>
  <div class="login-container">
      <el-form :model="form" class="login-form"  :rules="rules">
          <div class="title-tontainer">
              <h3 class="title">用户登录</h3>
          </div>
    <el-form-item prop="name">
             <el-icon class="svg">
                <avatar />
             </el-icon>
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item prop="password">
         <el-icon class="svg">
             <key />
         </el-icon>
      <el-input v-model="form.password" />
    </el-form-item>
       <el-button type="primary" round="boolean" class="login">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import {Avatar} from '@element-plus/icons-vue'
import{Key}from '@element-plus/icons-vue'
const form=reactive({
    name:'',
    password:''
})
const rules=reactive({
    name:[
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    
    ],
     password:[
      { required: true, message: 'Please input Activity name', trigger: 'blur' },
    
     ]
})
</script>

<style lang="scss">
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