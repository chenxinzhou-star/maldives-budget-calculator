// 马尔代夫旅行预算计算器
// Maldives Travel Budget Calculator

// 价格数据 (美元)
const priceData = {
    // 机票价格 (往返)
    flights: {
        beijing: 800,
        shanghai: 750,
        guangzhou: 700,
        hongkong: 650,
        singapore: 500
    },
    
    // 酒店价格 (每晚)
    hotels: {
        budget: { min: 150, max: 300, avg: 225 },
        mid: { min: 300, max: 600, avg: 450 },
        luxury: { min: 600, max: 1200, avg: 900 },
        ultra: { min: 1200, max: 3000, avg: 1800 }
    },
    
    // 餐食附加费 (每人每晚)
    mealPlans: {
        bb: 50,    // 含早餐
        hb: 100,   // 半餐
        fb: 180,   // 全餐
        ai: 0      // 一价全包 (已含)
    },
    
    // 活动预算 (每人)
    activities: {
        low: 100,
        medium: 300,
        high: 500
    }
};

// 计算预算
function calculateBudget() {
    // 获取输入值
    const days = parseInt(document.getElementById('days').value) || 5;
    const travelers = parseInt(document.getElementById('travelers').value) || 2;
    const islandType = document.getElementById('island-type').value;
    const mealPlan = document.getElementById('meal-plan').value;
    const departure = document.getElementById('departure').value;
    const activityLevel = document.getElementById('activities').value;
    
    // 计算各项费用
    const flightCost = priceData.flights[departure] * travelers;
    
    const hotelData = priceData.hotels[islandType];
    const hotelCost = hotelData.avg * days;
    
    // 交通接驳 (快艇/水飞)
    const transferCost = (islandType === 'ultra' ? 600 : islandType === 'luxury' ? 400 : 250) * travelers;
    
    // 餐费
    let mealCost = 0;
    if (mealPlan !== 'ai') {
        mealCost = priceData.mealPlans[mealPlan] * days * travelers;
    }
    
    // 活动费用
    const activityCost = priceData.activities[activityLevel] * travelers;
    
    // 其他费用 (小费、spa等)
    const otherCost = 50 * days * travelers;
    
    // 总计
    const totalCost = flightCost + hotelCost + transferCost + mealCost + activityCost + otherCost;
    
    // 显示结果
    document.getElementById('flight-cost').textContent = formatCurrency(flightCost);
    document.getElementById('hotel-cost').textContent = formatCurrency(hotelCost);
    document.getElementById('transfer-cost').textContent = formatCurrency(transferCost);
    document.getElementById('meal-cost').textContent = formatCurrency(mealCost);
    document.getElementById('activity-cost').textContent = formatCurrency(activityCost);
    document.getElementById('other-cost').textContent = formatCurrency(otherCost);
    document.getElementById('total-cost').textContent = formatCurrency(totalCost);
    
    // 生成小贴士
    generateTips(days, travelers, islandType, totalCost);
    
    // 显示结果区域
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

// 格式化货币
function formatCurrency(amount) {
    return '$' + amount.toLocaleString('en-US');
}

// 生成省钱小贴士
function generateTips(days, travelers, islandType, totalCost) {
    const tips = [];
    const perPersonCost = totalCost / travelers;
    
    if (islandType === 'ultra' || islandType === 'luxury') {
        tips.push('考虑选择一价全包(AI)套餐，通常更划算');
    }
    
    if (days > 7) {
        tips.push('停留超过7天可询问酒店是否有长住优惠');
    }
    
    if (travelers >= 4) {
        tips.push('4人以上团队可申请团体优惠');
    }
    
    if (perPersonCost > 5000) {
        tips.push('考虑淡季出行(5-11月)，价格可降低30-40%');
    }
    
    tips.push('提前3-6个月预订通常能获得更好的价格');
    tips.push('关注 yein.cn 获取最新马尔代夫优惠信息');
    
    // 显示小贴士
    const tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = tips.map(tip => `<li>${tip}</li>`).join('');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置默认值动画
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach((input, index) => {
        input.style.animationDelay = `${index * 0.1}s`;
    });
});
