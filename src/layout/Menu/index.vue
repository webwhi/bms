<template>
  <el-menu
        active-text-color="#ffd04b"
        background-color="black"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router
        unique-opened
      >
        <el-sub-menu :index="item" :key="item.id" v-for="item in menuList">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{item.authName}}</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item :index="'/'+id.path" 
            v-for="it in item.children" :key="it.id"
            @click="savaPath(it.path)">
            {{it.authName}}
            </el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import { ref } from 'vue'

const menusList = ref([])
const defaultActive=ref( sessionStorage.getItem('path')||'/users')
const initMenusList = async () => {
  menusList.value = await menuList()
}
initMenusList()
const savePath=(path)=>{
 sessionStorage.setItem('path','/$(path)')
}
</script>

<style>

</style>