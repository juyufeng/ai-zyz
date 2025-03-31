<template>
  <div class="home-container">
    <!-- 顶部用户信息 -->
    <div class="user-info">
      <div class="welcome">
        <h2>欢迎使用 MateShare</h2>
        <p class="user-id">ID: 11112344442 <van-icon name="medal-o" color="#FFD700" /></p>
      </div>
    </div>

    <!-- 功能区 -->
    <div class="feature-grid">
      <div class="feature-item" @click="goToRecharge">
        <van-icon name="cash-back-record" size="24" color="#4facfe" />
        <span>充值</span>
      </div>
      <div class="feature-item" @click="goToWithdraw">
        <van-icon name="gold-coin-o" size="24" color="#4facfe" />
        <span>提现</span>
      </div>
      <div class="feature-item">
        <van-icon name="user-circle-o" size="24" color="#4facfe" />
        <span>个人中心</span>
      </div>
      <div class="feature-item">
        <van-icon name="friends-o" size="24" color="#4facfe" />
        <span>邀请好友</span>
      </div>
    </div>

    <!-- VIP特权 -->
    <div class="section-title">
      <span>VIP特权</span>
      <van-icon name="arrow" />
    </div>

    <!-- 酒店列表 -->
    <div class="hotel-scroll">
      <van-swipe :loop="false" :width="280" :show-indicators="false">
        <van-swipe-item v-for="(hotel, index) in hotels" :key="index">
          <div class="hotel-card">
            <div class="hotel-image" :style="`background-image: url(${hotel.image})`">
              <div class="hotel-rating">{{ hotel.rating }}</div>
            </div>
            <div class="hotel-info">
              <div class="hotel-name">{{ hotel.name }}</div>
              <div class="hotel-price">¥{{ hotel.price }}</div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 会员等级 -->
    <div class="section-title">
      <span>会员等级</span>
    </div>

    <div class="membership-cards">
      <div class="membership-card" v-for="(level, index) in membershipLevels" :key="index">
        <div class="level-number">N-{{ level.number }}</div>
        <div class="level-icon" :class="`level-${level.number}`">
          <van-icon :name="level.icon" size="24" />
        </div>
        <div class="level-details">
          <div class="level-discount">返利: {{ level.discount }}</div>
          <div class="level-invite">邀请: {{ level.invites }}</div>
        </div>
      </div>
    </div>

    <!-- 热门推荐 -->
    <div class="section-title">
      <span>热门推荐</span>
      <van-icon name="arrow" />
    </div>

    <div class="popular-section">
      <van-skeleton title avatar :row="3" :loading="false">
        <div class="popular-content">
          <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" alt="Popular">
          <div class="popular-info">
            <h3>精选酒店套餐</h3>
            <p>限时特惠，立省30%</p>
            <van-button type="primary" size="small" color="linear-gradient(to right, #4facfe, #00f2fe)">
              立即查看
            </van-button>
          </div>
        </div>
      </van-skeleton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 跳转到充值页面
const goToRecharge = () => {
  router.push('/recharge');
};

// 跳转到提现页面
const goToWithdraw = () => {
  router.push('/withdraw');
};

const hotels = ref([
  {
    name: '瑞士日内瓦酒店',
    price: '498.00',
    rating: '4.8',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  },
  {
    name: '罗莎温泉酒店',
    price: '505.00',
    rating: '4.6',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'
  },
  {
    name: '莫斯科艺术公园酒店',
    price: '588.00',
    rating: '4.5',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg'
  },
  {
    name: '维拉德加酒店',
    price: '556.00',
    rating: '4.7',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg'
  }
]);

const membershipLevels = ref([
  { number: 1, icon: 'medal-o', discount: '1%', invites: '30' },
  { number: 2, icon: 'medal-o', discount: '2%', invites: '35' },
  { number: 3, icon: 'medal-o', discount: '4%', invites: '40' },
  { number: 4, icon: 'medal-o', discount: '5%', invites: '50' }
]);
</script>

<style lang="scss" scoped>
.home-container {
  padding: 16px;
  background-color: #f5f7fa;
}

.user-info {
  margin-bottom: 20px;
  padding: 16px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 12px;
  color: white;
}

.welcome {
  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .user-id {
    margin: 8px 0 0;
    font-size: 14px;
    opacity: 0.9;
  }
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 24px;
  background-color: white;
  border-radius: 12px;
  padding: 16px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    margin-top: 8px;
    font-size: 12px;
    color: #333;
  }
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 16px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.hotel-scroll {
  margin: 0 -16px;
  padding: 0 16px;
}

.hotel-card {
  width: 260px;
  margin-right: 12px;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.hotel-image {
  height: 140px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hotel-rating {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}

.hotel-info {
  padding: 12px;
}

.hotel-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.hotel-price {
  font-size: 16px;
  color: #ff6b6b;
  font-weight: bold;
}

.membership-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.membership-card {
  background-color: white;
  border-radius: 8px;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.level-number {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
}

.level-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.level-1 {
  background-color: #FFD700;
}

.level-2 {
  background-color: #C0C0C0;
}

.level-3 {
  background-color: #CD7F32;
}

.level-4 {
  background-color: #50C1E9;
}

.level-details {
  font-size: 10px;
  text-align: center;
  color: #666;
}

.popular-section {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
}

.popular-content {
  display: flex;
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
  }
  
  .popular-info {
    flex: 1;
    padding-left: 16px;
    
    h3 {
      margin: 0 0 8px;
      font-size: 16px;
    }
    
    p {
      margin: 0 0 12px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
