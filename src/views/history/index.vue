<template>
  <div class="history-container">
    <!-- 顶部选项卡 -->
    <div class="tab-header">
      <div class="tab-item active">全部</div>
      <div class="tab-item">待付款</div>
      <div class="tab-item">已完成</div>
    </div>
    
    <!-- 历史记录列表 -->
    <div class="history-list">
      <div class="history-item" v-for="(item, index) in historyList" :key="index">
        <!-- 日期时间 -->
        <div class="history-date">{{ item.date }}</div>
        
        <!-- 酒店信息 -->
        <div class="hotel-info">
          <div class="hotel-image">
            <img :src="item.image" alt="酒店图片">
          </div>
          <div class="hotel-details">
            <div class="hotel-name">{{ item.name }}</div>
            <div class="hotel-price">
              <span class="price-label">价格: </span>
              <span class="price-value">₽ {{ item.price }}</span>
            </div>
            <div class="hotel-profit">
              <span class="profit-label">收益: </span>
              <span class="profit-value">₽ {{ item.profit }}</span>
            </div>
          </div>
        </div>
        
        <!-- 查看详情按钮 -->
        <div class="view-details">
          <span>查看详情</span>
        </div>
      </div>
      
      <!-- 加载更多 -->
      <div class="load-more" v-if="historyList.length > 0">
        <span>没有更多数据</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 模拟历史数据
const historyList = ref([
  {
    date: '2023-01-28 10:30:20',
    name: '奥特尔 多明纳',
    price: '2780.00',
    profit: '27.80',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  },
  {
    date: '2023-01-18 17:30:44',
    name: '格林伍德 莫斯科酒店',
    price: '1571.00',
    profit: '15.71',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'
  }
]);
</script>

<style lang="scss" scoped>
.history-container {
  background-color: #f5f7fa;
  min-height: 100vh;
  padding-bottom: 20px;
}

.tab-header {
  display: flex;
  background-color: #fff;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 10;
}

.tab-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #666;
  padding: 8px 0;
  
  &.active {
    color: #4e6ef2;
    font-weight: bold;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background-color: #4e6ef2;
    }
  }
}

.history-list {
  padding: 12px;
}

.history-item {
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.history-date {
  padding: 10px 12px;
  font-size: 12px;
  color: #999;
  border-bottom: 1px solid #f5f5f5;
}

.hotel-info {
  display: flex;
  padding: 12px;
}

.hotel-image {
  width: 60px;
  height: 60px;
  margin-right: 12px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
}

.hotel-details {
  flex: 1;
}

.hotel-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #333;
}

.hotel-price, .hotel-profit {
  font-size: 12px;
  margin-bottom: 4px;
  
  .price-label, .profit-label {
    color: #999;
  }
  
  .price-value {
    color: #ff6b6b;
    font-weight: bold;
  }
  
  .profit-value {
    color: #07c160;
    font-weight: bold;
  }
}

.view-details {
  text-align: right;
  padding: 8px 12px;
  border-top: 1px solid #f5f5f5;
  
  span {
    font-size: 12px;
    color: #4e6ef2;
  }
}

.load-more {
  text-align: center;
  padding: 16px 0;
  
  span {
    font-size: 12px;
    color: #999;
  }
}
</style>