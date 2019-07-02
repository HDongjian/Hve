<template>
  <h-layout class="icon">
    <h-header slot="header">图标</h-header>
    <div slot="content">
      <div class="demo">
        <i class="h-icon icon-add"></i>
        <p>使用：{{demo2}}</p>
        <p>编译后：{{demo}}</p>
      </div>
      <h-row :gutter="20">
        <h-col v-for="(icon,i) in list" :key="i" :span="8">
          <div class="dib">
            <span :class="`h-icon icon-${icon}`"></span>
            <div class="name">{{icon}}</div>
          </div>
        </h-col>
      </h-row>
    </div>
  </h-layout>
</template>

<script>
export default {

  data () {
    return {
      demo: '<i class="h-icon icon-add"></i>',
      demo2: '<h-icon type="add"></h-icon>',
      list: ['add', 'add-o', 'aim', 'add-square', 'arrow', 'arrow-up', 'apps-o', 'ascending', 'award', 'arrow-down', 'arrow-left', 'bag', 'audio', 'balance-list', 'balance-list-o', 'award-o', 'bag-o', 'bill', 'bookmark', 'balance-o', 'after-sale', 'bars', 'bell', 'bookmark-o', 'bar-chart-o', 'bill-o', 'bullhorn-o', 'cart', 'browsing-history-o', 'brush-o', 'alipay', 'balance-pay', 'birthday-cake-o', 'calender-o', 'cash-on-deliver', 'chat', 'cart-o', 'chat-o', 'clock-o', 'certificate', 'bulb-o', 'cluster', 'clear', 'card', 'column', 'circle', 'browsing-history', 'close', 'cluster-o', 'cash-back-record', 'checked', 'comment-o', 'completed', 'coupon-o', 'clock', 'comment-circle-o', 'cashier-o', 'contact', 'comment', 'desktop-o', 'debit-pay', 'diamond-o', 'chart-trending-o', 'exchange', 'failure', 'closed-eye', 'cross', 'coupon', 'edit', 'fail', 'envelop-o', 'descending', 'eye', 'ecard-pay', 'fire-o', 'description', 'credit-pay', 'filter-o', 'fire', 'expand-o', 'gem', 'free-postage', 'diamond', 'delete', 'gift', 'ellipsis', 'friends-o', 'gold-coin', 'gift-card', 'gold-coin-o', 'expand', 'hotel-o', 'info-o', 'graphic', 'hot', 'gift-o', 'discount', 'label-o', 'friends', 'hot-o', 'live', 'flower-o', 'info', 'manager', 'idcard', 'gem-o', 'manager-o', 'goods-collect-o', 'home-o', 'label', 'medel', 'location-o', 'music-o', 'new-arrival-o', 'logistics', 'new-o', 'invition', 'more-o', 'other-pay', 'new-arrival', 'location', 'pause-circle-o', 'like', 'paid', 'notes-o', 'map-marked', 'more', 'photo', 'peer-pay', 'pause-circle', 'pause', 'orders-o', 'like-o', 'phone-o', 'phone', 'hot-sale-o', 'pending-payment', 'photograph', 'lock', 'qr-invalid', 'play', 'phone-circle-o', 'passed', 'play-circle', 'printer', 'question', 'search', 'play-circle-o', 'send-gift-o', 'plus', 'medel-o', 'photo-o', 'point-gift', 'eye-o', 'service', 'question-o', 'goods-collect', 'setting-o', 'setting', 'refund-o', 'records', 'shop-collect', 'points', 'flag-o', 'point-gift-o', 'star-o', 'shop', 'sign', 'qr', 'shrink', 'stop-circle-o', 'smile-o', 'tv-o', 'scan', 'smile-comment-o', 'umbrella-circle', 'todo-list', 'todo-list-o', 'underway-o', 'shop-o', 'shopping-cart-o', 'video', 'user-o', 'replay', 'vip-card', 'volume-o', 'warning-o', 'wap-home', 'stop-circle', 'wechat', 'warn-o', 'service-o', 'tosend', 'youzan-shield', 'thumb-circle-o', 'smile-comment', 'volume', 'vip-card-o', 'underway', 'user-circle-o', 'wap-nav', 'weapp-nav', 'shopping-cart', 'success', 'send-gift', 'upgrade', 'shop-collect-o', 'star']
    }
  },

  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less'>
.icon .demo{
  font-size: 14px;
  padding:20px;
  text-align: center;
  .h-icon{
    font-size: 22px;
  }
  p{
    line-height: 30px;
  }
}
.icon .dib{
  text-align: center;
  padding:10px 0;
  .h-icon{
    font-size: 22px;
  }
  .name{
    font-size: 14px;
    line-height: 30px;
  }
}
</style>
