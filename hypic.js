// Hypic Pro Mod - Shadowrocket Script
// Mục đích: Mở khóa tính năng Pro (học tập kỹ thuật)

// Khởi tạo biến lưu trạng thái
let body = $response.body;
let obj = JSON.parse(body);

// Kiểm tra và sửa đổi dữ liệu response
if (obj && obj.data) {
    // Mở khóa trạng thái VIP
    if (obj.data.user_info) {
        obj.data.user_info.is_vip = true;
        obj.data.user_info.vip_type = 2;
        obj.data.user_info.vip_expire_time = "2099-12-31 23:59:59";
        obj.data.user_info.is_pro = true;
        obj.data.user_info.pro_expire_time = "2099-12-31 23:59:59";
    }
    
    // Mở khóa quyền truy cập công cụ Pro
    if (obj.data.features) {
        obj.data.features.is_pro_unlocked = true;
        obj.data.features.has_premium_access = true;
        obj.data.features.pro_features = true;
        obj.data.features.ai_tools = true;
        obj.data.features.advanced_editing = true;
    }
    
    // Mở khóa watermark removal
    if (obj.data.settings) {
        obj.data.settings.remove_watermark = true;
        obj.data.settings.export_hd = true;
        obj.data.settings.pro_filters = true;
        obj.data.settings.all_templates = true;
    }
    
    // Mở khóa subscription
    if (obj.data.subscription) {
        obj.data.subscription.status = "active";
        obj.data.subscription.plan = "pro";
        obj.data.subscription.is_trial = false;
        obj.data.subscription.expiry = "2099-12-31";
    }
}

// Trả về response đã sửa đổi
$done({ body: JSON.stringify(obj) });