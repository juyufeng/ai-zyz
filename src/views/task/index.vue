<template>
  <div class="task-container">
    <!-- 用户等级卡片 -->
    <div class="level-card">
      <div class="level-header">
        <div class="level-title">N-1</div>
        <div class="level-tag">普通级</div>
      </div>
      
      <div class="level-info">
        <div class="level-item">
          <div class="item-value">1.00%</div>
          <div class="item-label">返利比例</div>
        </div>
        <div class="level-item">
          <div class="item-value">30</div>
          <div class="item-label">邀请人数</div>
        </div>
      </div>
      
      <div class="level-badge">
        <img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="等级徽章">
      </div>
    </div>
    
    <!-- 佣金详情 -->
    <div class="commission-section">
      <div class="section-title">
        <van-icon name="balance-list-o" />
        <span>佣金详情</span>
      </div>
      
      <div class="commission-cards">
        <div class="commission-card blue-card">
          <div class="card-title">今日收益</div>
          <div class="card-value">
            <span class="currency">₽</span>
            <span class="amount">3036.33</span>
          </div>
        </div>
        
        <div class="commission-card pink-card">
          <div class="card-title">任务进度</div>
          <div class="card-value">
            <span class="progress">(2 / 30)</span>
          </div>
        </div>
      </div>
      
      <div class="commission-total">
        <div class="total-label">累计收益</div>
        <div class="total-value">
          <span class="currency">₽</span>
          <span class="amount">0.00</span>
        </div>
      </div>
    </div>
    
    <!-- 任务说明 -->
    <div class="task-instructions">
      <div class="instruction-title">任务说明：</div>
      <ul class="instruction-list">
        <li>每天完成任务可获得收益</li>
        <li>任务完成后收益将自动添加到账户</li>
        <li>如有任何问题请联系客服解决</li>
      </ul>
    </div>
    
    <!-- 开始按钮 -->
    <div class="start-button">
      <van-button type="primary" block round color="#4e6ef2" size="large">
        开始任务
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
.task-container {
  padding: 16px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.level-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.level-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.level-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-right: 8px;
}

.level-tag {
  background-color: #e6f7ff;
  color: #1890ff;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
}

.level-info {
  display: flex;
}

.level-item {
  flex: 1;
}

.item-value {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.item-label {
  font-size: 12px;
  color: #999;
}

.level-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.commission-section {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.section-title {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  .van-icon {
    color: #4e6ef2;
    font-size: 18px;
    margin-right: 8px;
  }
  
  span {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
}

.commission-cards {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.commission-card {
  flex: 1;
  padding: 12px;
  border-radius: 8px;
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
  font-size: 18px;
  font-weight: bold;
}

.currency {
  font-size: 14px;
  margin-right: 2px;
}

.commission-total {
  background-color: #f5f7fa;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-label {
  font-size: 14px;
  color: #666;
}

.total-value {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.task-instructions {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.instruction-title {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.instruction-list {
  padding-left: 16px;
  margin: 0;
  
  li {
    font-size: 12px;
    color: #999;
    margin-bottom: 4px;
  }
}

.start-button {
  margin-top: 24px;
}
</style>
