<template>
  <div class="recharge-container">
    <!-- 顶部导航 -->
    <van-nav-bar
      title="充值"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    
    <!-- 余额信息 -->
    <div class="balance-info">
      <div class="balance-label">其他金额</div>
      <div class="balance-amount">0</div>
      <div class="balance-detail">可用余额: 3036.33 ₽</div>
    </div>
    
    <!-- 支付方式 -->
    <div class="payment-method">
      <van-cell title="银行卡" is-link />
    </div>
    
    <!-- 快速选择金额 -->
    <div class="quick-select">
      <div class="quick-select-title">
        <van-icon name="exchange" color="#4facfe" />
        <span>快速选择</span>
      </div>
      
      <div class="amount-grid">
        <div 
          v-for="(amount, index) in quickAmounts" 
          :key="index" 
          class="amount-item"
          :class="{ active: selectedAmount === amount }"
          @click="selectAmount(amount)"
        >
          <span>₽ {{ amount }}</span>
        </div>
      </div>
    </div>
    
    <!-- 底部按钮 -->
    <div class="bottom-button">
      <van-button type="primary" block round color="#4e6ef2" size="large">
        立即充值
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedAmount = ref('');

const onClickLeft = () => {
  router.back();
};

// 快速选择金额
const quickAmounts = ref(['100.00', '200.00', '500.00', '1000.00', '2000.00', '5000.00']);

// 选择金额
const selectAmount = (amount) => {
  selectedAmount.value = amount;
};
</script>

<style lang="scss" scoped>
.recharge-container {
  padding-top: 46px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.balance-info {
  padding: 24px 16px;
  background-color: #fff;
  margin-bottom: 12px;
}

.balance-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.balance-amount {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
}

.balance-detail {
  font-size: 12px;
  color: #999;
}

.payment-method {
  margin-bottom: 12px;
}

.quick-select {
  background-color: #fff;
  padding: 16px;
  margin-bottom: 24px;
}

.quick-select-title {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  span {
    margin-left: 8px;
    font-size: 14px;
    color: #333;
  }
}

.amount-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.amount-item {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  border-radius: 8px;
  font-size: 14px;
  color: #4e6ef2;
  cursor: pointer;
  
  &.active {
    background-color: rgba(78, 110, 242, 0.1);
    border: 1px solid #4e6ef2;
  }
}

.bottom-button {
  position: fixed;
  bottom: 24px;
  left: 16px;
  right: 16px;
}
</style>