import { createRouter, createWebHistory } from "vue-router";
import { isMobileTerminal } from "@/utils/flexible";
import mobileTerminalRoutes from "./modules/m-router";
import pcTerminalRoutes from "./modules/pc-router";
import pathConfig from "./_pathConfig";

// 创建 vueRouter 实例
const router = createRouter({
  history: createWebHistory(),
  // routes: isMobileTerminal.value ? mobileTerminalRoutes : pcTerminalRoutes, 预留媒体判断
  routes: pathConfig,
});

export default router;
