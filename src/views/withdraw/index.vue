<template>
  <div class="withdraw-container">
    <!-- 顶部导航 -->
    <van-nav-bar
      title="提现"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    
    <!-- 提现金额 -->
    <div class="withdraw-amount">
      <div class="amount-label">提现金额</div>
      <div class="amount-input">
        <input 
          type="text" 
          v-model="withdrawAmount" 
          placeholder="111123424442"
          class="amount-field"
        />
        <span class="currency">₽</span>
      </div>
      <div class="balance-detail">可用余额: 3036.33 ₽</div>
    </div>
    
    <!-- 提现方式 -->
    <div class="withdraw-method">
      <div class="method-title">
        <van-icon name="exchange" color="#4facfe" />
        <span>提现方式</span>
      </div>
      
      <van-cell-group inset>
        <van-cell title="银行卡" is-link />
      </van-cell-group>
      
      <!-- 银行卡信息表单 -->
      <div class="bank-form">
        <van-field
          v-model="bankName"
          label="银行名称"
          placeholder="请输入银行名称"
        />
        <van-field
          v-model="cardNumber"
          label="卡号"
          placeholder="请输入银行卡号"
        />
        <van-field
          v-model="holderName"
          label="持卡人"
          placeholder="请输入持卡人姓名"
        />
      </div>
    </div>
    
    <!-- 提现密码 -->
    <div class="withdraw-password">
      <div class="password-title">
        <van-icon name="exchange" color="#4facfe" />
        <span>提现密码</span>
      </div>
      
      <div class="password-input">
        <van-field
          v-model="password"
          type="password"
          placeholder="******"
        />
      </div>
    </div>
    
    <!-- 底部按钮 -->
    <div class="bottom-button">
      <van-button type="primary" block round color="#4e6ef2" size="large">
        提现
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const withdrawAmount = ref('');
const bankName = ref('');
const cardNumber = ref('');
const holderName = ref('');
const password = ref('');

const onClickLeft = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.withdraw-container {
  padding-top: 46px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.withdraw-amount {
  padding: 24px 16px;
  background-color: #fff;
  margin-bottom: 12px;
}

.amount-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.amount-input {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.amount-field {
  flex: 1;
  font-size: 24px;
  border: none;
  outline: none;
  padding: 4px 0;
}

.currency {
  font-size: 24px;
  color: #333;
  margin-left: 8px;
}

.balance-detail {
  font-size: 12px;
  color: #999;
}

.withdraw-method, .withdraw-password {
  background-color: #fff;
  padding: 16px;
  margin-bottom: 12px;
}

.method-title, .password-title {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  span {
    margin-left: 8px;
    font-size: 14px;
    color: #333;
  }
}

.bank-form {
  margin-top: 16px;
}

.bottom-button {
  position: fixed;
  bottom: 24px;
  left: 16px;
  right: 16px;
}
</style>