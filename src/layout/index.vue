<template>
    <el-container class="app-wrapper">
      <el-header class="sidebar-container">
        <Menu/>
      </el-header>
      <el-container class="container">
        <el-aside width="200px">
          
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  
</template>

<script setup>
import Menu from './Menu'
</script>

<style lang="scss" scoped>

.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>