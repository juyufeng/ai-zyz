<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);
const userInfo = ref({});
const title = ref('MateShare');

const goToLogin = () => {
  router.push('/login');
};

const onClickRight = () => {
  if (isLoggedIn.value) {
    // 显示用户菜单
  }
};

onMounted(() => {
  const token = localStorage.getItem('token');
  const storedUserInfo = localStorage.getItem('userInfo');
  
  if (token && storedUserInfo) {
    isLoggedIn.value = true;
    userInfo.value = JSON.parse(storedUserInfo);
  }
});
</script>

<template>
  <van-nav-bar fixed placeholder @click-right="onClickRight">
    <template #right>
      <div v-if="isLoggedIn" class="user-info">
        {{ userInfo.username }}
      </div>
      <van-button v-else type="primary" size="small" @click="goToLogin">
        登录
      </van-button>
    </template>
  </van-nav-bar>
</template>

<style lang="scss" scoped>
.user-info {
  font-size: 14px;
  color: #333;
}
</style>
