<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarData = reactive([
  {
    icon: "home-o",
    title: "首页",
    to: {
      name: "Home"
    }
  },
  {
    icon: "notes-o",
    title: "下单历史",
    to: {
      name: "History"
    }
  },
  {
    icon: "orders-o",
    title: "订单",
    to: {
      name: "Order"
    }
  },
  {
    icon: "todo-list-o",
    title: "任务",
    to: {
      name: "Task"
    }
  },
  {
    icon: "user-o",
    title: "我的",
    to: {
      name: "Profile"
    }
  }
]);
</script>

