const fs = require('fs');

// Dữ liệu gốc
const data = [
    {"username":"huypro@gmail.com","password":"123456"},
    {"username":"congtinh@gmail.com"},
    {"username":"congdanh@gmail.com"},
    {"username":"cong@gmail.com"},
    {"username":"congchinh@gmail.com"},
    {"username":"thuan@gmail.com","password":"123456"},
    {"username":"nguyenminh123.@gmail.com"},
    {"username":"lequyen456@gmail.com"},
    {"username":"tranthanh789@gmail.com"},
    {"username":"doanthao987@gmail.com"},
    {"username":"phamminh321@gmail.com"},
    {"username":"buithu678@gmail.com"},
    {"username":"nguyentran999@gmail.com"},
    {"username":"lehoa111@gmail.com"},
    {"username":"doankhanh222@gmail.com"},
    {"username":"hoangphuong333@gmail.com"},
    {"username":"phamquoc444@gmail.com"},
    {"username":"buiduc555@gmail.com"},
    {"username":"nguyenthuy666@gmail.com"},
    {"username":"ledang777@gmail.com"},
    {"username":"tranmai888@gmail.com"},
    {"username":"doanlam999@gmail.com"},
    {"username":"hoangviet000@gmail.com"},
    {"username":"phamkhanh999@gmail.com"},
    {"username":"buithanh888@gmail.com"},
    {"username":"nguyenduc777@gmail.com"},
    {"username":"letrung666@gmail.com"},
    {"username":"doanphuong555@gmail.com"},
    {"username":"hoangmai444@gmail.com"},
    {"username":"phamhoa333@gmail.com"},
    {"username":"buiquyen222@gmail.com"},
    {"username":"nguyenkhanh111@gmail.com"},
    {"username":"lehieu000@gmail.com"},
    {"username":"doanthanh999@gmail.com"},
    {"username":"hoangthu888@gmail.com"},
    {"username":"phamkim777@gmail.com"},
    {"username":"buiviet666@gmail.com"},
    {"username":"nguyendang555@gmail.com"},
    {"username":"leduc444@gmail.com"},
    {"username":"doanquyen333@gmail.com"},
    {"username":"hoangminh222@gmail.com"},
    {"username":"phamhieu111@gmail.com"},
    {"username":"buimanh000@gmail.com"},
    {"username":"nguyentrung999@gmail.com"},
    {"username":"ledanh888@gmail.com"},
    {"username":"doanhoang777@gmail.com"},
    {"username":"hoangkim666@gmail.com"},
    {"username":"phamthu555@gmail.com"},
    {"username":"buiquoc444@gmail.com"},
    {"username":"nguyenthuy333@gmail.com"},
    {"username":"lenam222@gmail.com"},
    {"username":"doanhoa111@gmail.com"},
    {"username":"hoanghieu000@gmail.com"},
    {"username":"phamviet999@gmail.com"},
    {"username":"nguyenkim777@gmail.com"},
    {"username":"hoangtrung444@gmail.com"},
    {"username":"lequoc666@gmail.com"},
    {"username":"phamduong333@gmail.com"},
    {"username":"nguyenthai111@gmail.com"},
    {"username":"letrang000@gmail.com"},
    {"username":"doanphuc999@gmail.com"},
    {"username":"phamly777@gmail.com"},
    {"username":"hoangduy888@gmail.com"},
    {"username":"nguyendao555@gmail.com"},
    {"username":"lethanh444@gmail.com"},
    {"username":"hoangbach222@gmail.com"},
    {"username":"phambinh111@gmail.com"},
    {"username":"buidat000@gmail.com"},
    {"username":"nguyenvinh999@gmail.com"},
    {"username":"lebinh888@gmail.com"},
    {"username":"doanhieu777@gmail.com"},
    {"username":"phamtuan555@gmail.com"},
    {"username":"buiphuc444@gmail.com"},
    {"username":"nguyenchinh333@gmail.com"},
    {"username":"hoangtu000@gmail.com"},
    {"username":"phambao999@gmail.com"},
    {"username":"doanquoc111@gmail.com"},
    {"username":"hoangchinh444@gmail.com"},
    {"username":"nguyenviet111@gmail.com"},
    {"username":"doanbao999@gmail.com"},
    {"username":"phamquynh111@gmail.com"},
    {"username":"truonghuy220720@gmail.com"},
    {"username":"ngoctrinh@gmail.com","password":"123456"},
    {"username":"ngoclan@gmail.com","password":"123456"},
    {"username":"viettan@gmail.com","password":"123456"}
];

// Khởi tạo đối tượng để lưu trữ kết quả
let result = {
    students: [],
    users: [],
    username: [],
    loginCount: {}
};

// Duyệt qua các phần tử của dữ liệu gốc
data.forEach(user => {
    // Thêm vào danh sách students (danh sách tất cả các username)
    result.students.push(user.username);
    
    // Nếu user có mật khẩu (có nghĩa là đã đăng ký), thêm vào danh sách users
    if (user.password) {
        result.users.push(user);
    }
    
    // Thêm username vào danh sách username
    result.username.push(user.username);
    
    // Đếm số lần xuất hiện của mỗi username (số lần đăng nhập giả định)
    if (result.loginCount[user.username]) {
        result.loginCount[user.username]++;
    } else {
        result.loginCount[user.username] = 1;
    }
});

// Xuất kết quả ra file users.json
fs.writeFileSync('users.json', JSON.stringify(result, null, 2), 'utf-8');

console.log('File users.json đã được tạo thành công!');
