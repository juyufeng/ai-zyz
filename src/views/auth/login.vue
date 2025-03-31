<template>
  <div class="login-container">
    <van-nav-bar
      title="登录"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    
    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        
        <div class="submit-btn">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
        
        <div class="register-link" @click="goToRegister">
          还没有账号？立即注册
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

const router = useRouter()
const username = ref('')
const password = ref('')

const onClickLeft = () => {
  router.back()
}

const goToRegister = () => {
  router.push('/register')
}

const onSubmit = async (values) => {
  try {
    const res = await fetch('/api/user/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(r => r.json())
    
    if (res.code === 200) {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
      showToast('登录成功')
      router.push('/')
    } else {
      showToast(res.message)
    }
  } catch (error) {
    showToast('登录失败')
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  padding-top: 46px;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.login-form {
  padding: 32px 16px;
}

.submit-btn {
  margin: 24px 16px;
}

.register-link {
  text-align: center;
  color: #4e6ef2;
  font-size: 14px;
}
</style>