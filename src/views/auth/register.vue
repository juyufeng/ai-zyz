<template>
  <div class="register-container">
    <van-nav-bar
      title="注册"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    
    <div class="register-form">
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
          <van-field
            v-model="realName"
            name="realName"
            label="真实姓名"
            placeholder="请输入真实姓名"
            :rules="[{ required: true, message: '请填写真实姓名' }]"
          />
          <van-field
            v-model="inviteCode"
            name="inviteCode"
            label="邀请码"
            placeholder="请输入邀请码"
            :rules="[{ required: true, message: '请填写邀请码' }]"
          />
        </van-cell-group>
        
        <div class="submit-btn">
          <van-button round block type="primary" native-type="submit">
            注册
          </van-button>
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
const realName = ref('')
const inviteCode = ref('')

const onClickLeft = () => {
  router.back()
}

const onSubmit = async (values) => {
  try {
    const res = await fetch('/api/user/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(r => r.json())
    
    if (res.code === 200) {
      showToast('注册成功')
      router.push('/login')
    } else {
      showToast(res.message)
    }
  } catch (error) {
    showToast('注册失败')
  }
}
</script>

<style lang="scss" scoped>
.register-container {
  padding-top: 46px;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.register-form {
  padding: 32px 16px;
}

.submit-btn {
  margin: 24px 16px;
}
</style>