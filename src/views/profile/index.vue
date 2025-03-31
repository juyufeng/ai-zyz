<template>
  <div class="profile-container">
    <!-- 用户信息卡片 -->
    <div class="user-card">
      <div class="user-avatar">
        <img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="用户头像">
      </div>
      <div class="user-info">
        <div class="user-id">111123424442</div>
        <div class="user-stats">
          <div class="stat-item">
            <span class="stat-label">账号创建：</span>
            <span class="stat-value">217229</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">账户完整度：</span>
            <span class="stat-value">100%</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 账户信息卡片 -->
    <div class="account-cards">
      <div class="account-card blue-card">
        <div class="card-title">账户余额</div>
        <div class="card-value">
          <span class="currency">₽</span>
          <span class="amount">3036.33</span>
        </div>
      </div>
      
      <div class="account-card pink-card">
        <div class="card-title">完成的任务数量</div>
        <div class="card-value">
          <span class="progress">(2 / 30)</span>
        </div>
      </div>
    </div>
    
    <!-- 累计收益 -->
    <div class="total-earnings">
      <div class="earnings-title">累计收益</div>
      <div class="earnings-value">
        <span class="currency">₽</span>
        <span class="amount">0.00</span>
      </div>
    </div>
    
    <!-- 邀请好友 -->
    <div class="invite-section">
      <div class="invite-header">
        <div class="invite-title">邀请好友</div>
        <div class="invite-subtitle">邀请好友，获取奖励</div>
      </div>
      <div class="invite-image">
        <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" alt="邀请图片">
      </div>
    </div>
    
    <!-- 功能菜单 -->
    <div class="menu-list">
      <van-cell-group inset>
        <van-cell title="充值" icon="balance-o" is-link />
        <van-cell title="提现" icon="gold-coin-o" is-link />
        <van-cell title="账户提现记录" icon="notes-o" is-link />
        <van-cell title="登录/注册" icon="user-o" is-link />
        <van-cell title="修改密码" icon="lock" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
.profile-container {
  padding: 16px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.user-card {
  display: flex;
  align-items: center;
  background-color: #a7d8ff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
  border: 2px solid #fff;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.user-info {
  flex: 1;
}

.user-id {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.user-stats {
  font-size: 12px;
  color: #666;
}

.stat-item {
  margin-bottom: 4px;
}

.stat-label {
  color: #666;
}

.stat-value {
  color: #333;
  font-weight: 500;
}

.account-cards {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.account-card {
  flex: 1;
  padding: 16px;
  border-radius: 12px;
  color: #fff;
}

.blue-card {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.pink-card {
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
}

.card-title {
  font-size: 12px;
  margin-bottom: 8px;
}

.card-value {
  font-size: 20px;
  font-weight: bold;
}

.currency {
  font-size: 16px;
  margin-right: 2px;
}

.total-earnings {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.earnings-title {
  font-size: 16px;
  color: #333;
}

.earnings-value {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.invite-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.invite-header {
  margin-bottom: 12px;
}

.invite-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.invite-subtitle {
  font-size: 12px;
  color: #999;
}

.invite-image {
  width: 100%;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.menu-list {
  margin-bottom: 24px;
}
</style>
