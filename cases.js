const CASES = [
    {
        id: 0,
        title: "Hiệp Đấu Khắc Nghiệt",
        diff: "CỰC KHÓ",
        desc: "Võ sĩ gục ngã không do lực đấm.",
        story: [
            "Nhà vô địch MMA gục chết ở hiệp 3 dù chỉ trúng đòn nhẹ.",
            "Khám nghiệm pháp y phát hiện nồng độ độc tố suy tim thẩm thấu qua da.",
            "Cả đối thủ và nạn nhân đều không mang vật nhọn, nước uống hoàn toàn bình thường."
        ],
        suspects: [
            { name: "Đối Thủ", role: "Võ sĩ", detail: "Khai: 'Cú đấm của tôi chưa đủ hạ gục anh ta'." },
            { name: "Bác Sĩ", role: "Y tế", detail: "Khai: 'Tôi chỉ thoa mỡ Vaseline lên mặt nạn nhân để chống rách da'." },
            { name: "HLV Riêng", role: "Huấn luyện viên", detail: "Khai: 'Tôi là người quấn băng tay (handwrap) cho cậu ấy trước trận'." }
        ],
        evidence: [
            { name: "Băng Quấn Tay", icon: "🥊", desc: "Chứa keo tẩm độc. Khi thi đấu cường độ siêu khắc nghiệt, thân nhiệt tăng làm lỗ chân lông giãn nở, độc ngấm qua mồ hôi vào máu." },
            { name: "Nước Tăng Lực", icon: "💧", desc: "Hoàn toàn sạch. Đối thủ cố tình cất giấu chai nước để đánh lạc hướng điều tra." },
            { name: "Mỡ Vaseline", icon: "🧴", desc: "Được kiểm tra không có bất kỳ hóa chất lạ nào." }
        ],
        opts: {
            s: ["Bác Sĩ", "Đối Thủ", "HLV Riêng"],
            w: ["Nước Tăng Lực", "Băng Quấn Tay Tẩm Độc", "Mỡ Vaseline"],
            l: ["Sàn Đấu", "Phòng Thay Đồ", "Phòng Y Tế"]
        },
        sol: { s: "HLV Riêng", w: "Băng Quấn Tay Tẩm Độc", l: "Phòng Thay Đồ" }
    },
    {
        id: 1,
        title: "Vệt Trượt Dài Lưỡi Hái",
        diff: "RẤT KHÓ",
        desc: "Xe mất lái nhưng phanh không bị cắt.",
        story: [
            "Nạn nhân tử vong do lao chiếc mô tô dáng Tracker xuống vực tại khúc cua đèo.",
            "Xe vừa được phục chế hoàn chỉnh. Dây phanh không hề bị cắt đứt hay phá hoại.",
            "Tại hiện trường không có dấu vết va chạm với xe khác."
        ],
        suspects: [
            { name: "Bạn Gái", role: "Đi cùng đoàn", detail: "Khai: 'Tôi chạy xe khác đi trước anh ấy 5 phút'." },
            { name: "Thợ Máy", role: "Chủ Gara", detail: "Khai: 'Tôi vừa bảo dưỡng phuộc USD và hệ thống phanh hôm qua'." },
            { name: "Chủ Nợ", role: "Giang hồ", detail: "Khai: 'Nó chết thì ai trả tiền cho tôi?'." }
        ],
        evidence: [
            { name: "Dây Phanh Đĩa", icon: "🏍️", desc: "Nguyên vẹn không tì vết, loại trừ việc bị cắt cáp." },
            { name: "Ống Dầu Phanh", icon: "🛢️", desc: "Bị rút cạn dầu và thay bằng nước lã. Khi đổ đèo, ma sát làm nước sôi tạo bọt khí, gây mất áp suất phanh hoàn toàn." },
            { name: "Kìm Cắt Sắt", icon: "✂️", desc: "Nằm trong cốp xe của Chủ nợ, nhưng lưỡi kìm không dính kim loại mạt." }
        ],
        opts: {
            s: ["Chủ Nợ", "Thợ Máy", "Bạn Gái"],
            w: ["Cắt Dây Phanh", "Tráo Dầu Phanh Bằng Nước", "Đạp Ngã Xe"],
            l: ["Khúc Cua Đèo", "Gara Sửa Xe", "Bãi Tập Kết"]
        },
        sol: { s: "Thợ Máy", w: "Tráo Dầu Phanh Bằng Nước", l: "Gara Sửa Xe" }
    },
    {
        id: 2,
        title: "Cái Chết Bốc Hơi",
        diff: "KHÓ",
        desc: "Mùi thơm của bánh mì nướng hòa lẫn mùi tử thần.",
        story: [
            "Chủ tiệm bánh và cà phê mộc mạc ngã gục ngay trước cửa lò nướng.",
            "Phổi nạn nhân bị tổn thương nặng do hít phải khí độc hóa học bay hơi.",
            "Các loại bột mì, cà phê, bơ tỏi trong xưởng đều được kiểm định an toàn 100%."
        ],
        suspects: [
            { name: "Bếp Phó", role: "Thợ bánh", detail: "Khai: 'Tôi nhào bột xong là đi giao hàng ngay'." },
            { name: "Vợ Nạn Nhân", role: "Thu ngân", detail: "Khai: 'Anh ấy ở một mình trong xưởng nướng bánh cả sáng'." },
            { name: "Kẻ Cạnh Tranh", role: "Chủ quán đối diện", detail: "Khai: 'Tôi không thèm bước chân vào cái tiệm rách đó'." }
        ],
        evidence: [
            { name: "Cốc Cà Phê", icon: "☕", desc: "Cốc uống dở của nạn nhân không có độc, chỉ là hồng trà bình thường." },
            { name: "Nhiệt Kế Lò", icon: "🌡️", desc: "Đầu nhiệt kế thủy ngân bị bẻ gãy một góc nhỏ xíu và nhét sâu vào trong mẻ bánh. Nhiệt độ lò làm thủy ngân bay hơi thành khí độc." },
            { name: "Khẩu Trang Than Hoạt Tính", icon: "😷", desc: "Được tìm thấy giấu dưới đáy balo của Bếp Phó." }
        ],
        opts: {
            s: ["Vợ Nạn Nhân", "Kẻ Cạnh Tranh", "Bếp Phó"],
            w: ["Cà Phê Tẩm Độc", "Bột Mì Chứa Hóa Chất", "Nhiệt Kế Thủy Ngân Rơi Vào Lò"],
            l: ["Quầy Pha Chế", "Xưởng Nướng Bánh", "Nhà Kho"]
        },
        sol: { s: "Bếp Phó", w: "Nhiệt Kế Thủy Ngân Rơi Vào Lò", l: "Xưởng Nướng Bánh" }
    },
    {
        id: 3,
        title: "Độ Trễ Tử Thần",
        diff: "CỰC KHÓ",
        desc: "Độc dược tẩm ở nơi không ngờ tới nhất.",
        story: [
            "Một lập trình viên đột tử khi đang rà soát code cho dự án game. Khám nghiệm cho thấy nhiễm độc tiếp xúc.",
            "Cốc nước rỗng bên cạnh an toàn. Nạn nhân có thói quen vừa gõ phím HE Keyboard (phím cơ nam châm) vừa dụi mắt do thức khuya.",
            "Chỉ có những người trong team nội bộ mới vào được phòng làm việc."
        ],
        suspects: [
            { name: "Trưởng Dự Án", role: "Quản lý", detail: "Khai: 'Tiến độ đang gấp, tôi không có lý do gì để giết coder chính'." },
            { name: "Tester", role: "Kiểm thử", detail: "Khai: 'Hôm qua tôi có mượn máy anh ấy để test bug bảng ngọc 5 phút'." },
            { name: "Lao Công", role: "Tạp vụ", detail: "Khai: 'Tôi lau bàn sạch sẽ mỗi tối'." }
        ],
        evidence: [
            { name: "Cốc Nước", icon: "💧", desc: "Đã cạn, không có dấu vết của chất độc, chỉ là vỏ bọc." },
            { name: "Bàn Phím Cơ", icon: "⌨️", desc: "Chỉ riêng phím Spacebar không có dấu vân tay của nạn nhân. Tester đã bôi chất độc thấm qua da lên phím này. Khi nạn nhân gõ code và dụi mắt, độc ngấm thẳng vào niêm mạc." },
            { name: "Lọ Nước Nhỏ Mắt", icon: "👁️", desc: "Nằm lăn lóc trên bàn, dung dịch bên trong là nước muối sinh lý bình thường." }
        ],
        opts: {
            s: ["Tester", "Trưởng Dự Án", "Lao Công"],
            w: ["Nước Nhỏ Mắt Tẩm Độc", "Cốc Nước", "Độc Trên Phím Spacebar"],
            l: ["Khu Nghỉ Ngơi", "Phòng Máy Chủ", "Bàn Làm Việc"]
        },
        sol: { s: "Tester", w: "Độc Trên Phím Spacebar", l: "Bàn Làm Việc" }
    },
    {
        id: 4,
        title: "Ánh Sáng Trong Buồng Tối",
        diff: "RẤT KHÓ",
        desc: "Chết do điện giật nhưng không rò rỉ dây cáp.",
        story: [
            "Nhiếp ảnh gia phong cách retro chết cháy đen tay trong buồng tối rửa ảnh.",
            "Công tắc đèn an toàn, máy ảnh không rò điện. Cửa khóa trái từ bên trong.",
            "Trong phòng tràn ngập mùi hóa chất rửa phim."
        ],
        suspects: [
            { name: "Trợ Lý Ảnh", role: "Hậu kỳ", detail: "Khai: 'Tôi ra ngoài mua thêm giấy in ảnh lúc anh ấy vào buồng tối'." },
            { name: "Người Mẫu", role: "Mẫu ảnh", detail: "Khai: 'Tôi đang tẩy trang ở sảnh ngoài'." },
            { name: "Đối Thủ", role: "Thợ ảnh", detail: "Khai: 'Tôi đứng bên kia đường chụp lén tiệm của hắn'." }
        ],
        evidence: [
            { name: "Máy Ảnh Phim", icon: "📷", desc: "Nguyên vẹn, không có dấu vết chập cháy." },
            { name: "Khay Hóa Chất", icon: "🧪", desc: "Khay nhựa chứa dung dịch hãm phim đã bị đục một lỗ nhỏ, nối với mạch điện 220V giấu dưới sàn. Khi nạn nhân nhúng tay vào rửa phim, dòng điện lập tức kích hoạt." },
            { name: "Cuộn Phim", icon: "🎞️", desc: "Bị cháy sáng hoàn toàn. Trợ lý đã lấy cớ phim hỏng để ép nạn nhân phải tự tay vào buồng tối rửa lại." }
        ],
        opts: {
            s: ["Người Mẫu", "Trợ Lý Ảnh", "Đối Thủ"],
            w: ["Súng Giật Điện", "Rò Điện Máy Ảnh", "Khay Hóa Chất Nối Mạch Điện"],
            l: ["Phòng Thay Đồ", "Buồng Tối Rửa Ảnh", "Sảnh Lễ Tân"]
        },
        sol: { s: "Trợ Lý Ảnh", w: "Khay Hóa Chất Nối Mạch Điện", l: "Buồng Tối Rửa Ảnh" }
    },
    {
        id: 5,
        title: "Tin Nhắn Báo Tử",
        diff: "CỰC KHÓ",
        desc: "Bằng chứng ngoại phạm bằng ứng dụng di động.",
        story: [
            "Cô gái bị đâm chết tại chung cư lúc 20:30. Bạn trai cô ta là nghi phạm số một.",
            "Tuy nhiên, ứng dụng theo dõi cảm xúc nội bộ cài trên máy tính nạn nhân ghi nhận cô ấy tự tay bấm nút 'Tức giận' gửi thông báo tức thì cho bạn trai lúc 21:00.",
            "App này mã hóa nội bộ, không có độ trễ, chứng minh lúc 21:00 nạn nhân vẫn còn sống để bấm."
        ],
        suspects: [
            { name: "Bạn Trai", role: "Người yêu", detail: "Khai: 'Lúc 21:00 tôi đang họp ở công ty, sếp tôi có thể làm chứng tôi vừa nhận thông báo tức thì từ cô ấy'." },
            { name: "Người Giao Hàng", role: "Shipper", detail: "Khai: 'Tôi giao đồ ăn lúc 20:20, cô ấy nhận xong đóng cửa ngay'." },
            { name: "Bảo Vệ", role: "An ninh", detail: "Khai: 'Tôi không thấy người lạ nào lên tầng này'." }
        ],
        evidence: [
            { name: "Hệ Thống Mạng", icon: "🌐", desc: "Log server ghi nhận ứng dụng không hề bị hack hay chỉnh sửa độ trễ. Nút bấm thật sự được kích hoạt lúc 21:00." },
            { name: "Cục Đá Lạnh", icon: "🧊", desc: "Bên cạnh chuột máy tính có một vũng nước nhỏ. Bạn trai đã đặt một cục đá lạnh kẹp tăm nhọn lơ lửng trên phím click chuột. Đá tan dần, đến 21:00 thì rớt xuống tạo lực click tự động." },
            { name: "Dao Gọt Hoa Quả", icon: "🔪", desc: "Hung khí bị ném ở thùng rác tầng trệt, không có vân tay." }
        ],
        opts: {
            s: ["Người Giao Hàng", "Bảo Vệ", "Bạn Trai"],
            w: ["Hack Độ Trễ App", "Bẫy Click Chuột Bằng Đá Lạnh", "Nhờ Đồng Phạm Bấm Hộ"],
            l: ["Phòng Ngủ", "Hành Lang", "Bàn Máy Tính"]
        },
        sol: { s: "Bạn Trai", w: "Bẫy Click Chuột Bằng Đá Lạnh", l: "Bàn Máy Tính" }
    },
    {
        id: 6,
        title: "Đạn Tàng Hình",
        diff: "RẤT KHÓ",
        desc: "Lỗ đạn trên ngực nhưng không có đầu đạn.",
        story: [
            "Ông trùm sòng bạc bị ám sát giữa phòng làm việc. Một lỗ đạn xuyên tim, nhưng xung quanh không có vỏ đạn hay đầu đạn nào.",
            "Áo sơ mi của nạn nhân ướt sũng nước xung quanh vết thương.",
            "Cửa sổ phòng mở hé, bên ngoài là tòa nhà đang thi công."
        ],
        suspects: [
            { name: "Sát Thủ Đánh Thuê", role: "Giang hồ", detail: "Khai: 'Tôi có súng, nhưng hôm nay tôi chưa nhận hợp đồng nào'." },
            { name: "Con Nợ", role: "Khách VIP", detail: "Khai: 'Tôi đến xin khất nợ nhưng vệ sĩ không cho vào'." },
            { name: "Thư Ký", role: "Trợ lý", detail: "Khai: 'Tôi nghe tiếng cửa sổ vỡ kính nên chạy vào'." }
        ],
        evidence: [
            { name: "Súng Lục", icon: "🔫", desc: "Súng của sát thủ xét nghiệm không có mùi thuốc súng mới bắn." },
            { name: "Tủ Lạnh", icon: "❄️", desc: "Trong phòng thi công đối diện có một tủ đông mini. Sát thủ đã tự đúc đạn bằng nước đá đông cứng. Sau khi bắn xuyên tim, đạn đá tự tan ra thành nước, xóa sạch dấu vết rãnh khương tuyến." },
            { name: "Máy Sấy Tóc", icon: "💨", desc: "Nằm trong phòng tắm, hoàn toàn không liên quan." }
        ],
        opts: {
            s: ["Con Nợ", "Thư Ký", "Sát Thủ Đánh Thuê"],
            w: ["Súng Bắn Bằng Đạn Đá Lạnh", "Đâm Bằng Dao Đá", "Mũi Tên Tẩm Độc"],
            l: ["Phòng Tắm", "Phòng Làm Việc", "Tòa Nhà Đang Thi Công (Đối Diện)"]
        },
        sol: { s: "Sát Thủ Đánh Thuê", w: "Súng Bắn Bằng Đạn Đá Lạnh", l: "Tòa Nhà Đang Thi Công (Đối Diện)" }
    },
    {
        id: 7,
        title: "Ảo Ảnh Khôn Cùng",
        diff: "KHÓ",
        desc: "Nhận diện khuôn mặt hoàn hảo, nhưng vẫn là giả mạo.",
        story: [
            "Giám đốc kho lưu trữ bị đâm chết trong kho. Cửa kho dùng khóa sinh trắc học nhận diện khuôn mặt cực kỳ gắt gao, không ai khác mở được.",
            "Camera cửa ghi lại hình ảnh giám đốc tự mở cửa đi vào lúc 23:00, nhưng pháp y khẳng định ông ta đã chết từ 21:00.",
            "Kẻ gian đã thoát ra và khóa cửa lại."
        ],
        suspects: [
            { name: "Chuyên Gia Đồ Họa", role: "Nhân viên", detail: "Khai: 'Hệ thống nhận diện của chúng ta là AI cao cấp, không thể dùng ảnh in hay mặt nạ 3D lừa được'." },
            { name: "Phó Giám Đốc", role: "Cấp dưới", detail: "Khai: 'Tôi đang uống rượu với đối tác cả đêm'." },
            { name: "Bảo Vệ Kho", role: "An ninh", detail: "Khai: 'Hệ thống không báo lỗi gì cả'." }
        ],
        evidence: [
            { name: "Log Sinh Trắc Học", icon: "👁️", desc: "Hệ thống ghi nhận tỷ lệ khớp khuôn mặt là 99.9%. Chuyên gia đồ họa đã dùng công cụ AI tạo ảnh Deepfake siêu thực, đảm bảo không thay đổi khuôn mặt và chiếu lên iPad độ phân giải cực cao để lừa camera nhận diện chiều sâu." },
            { name: "Mặt Nạ Silicon", icon: "🎭", desc: "Tìm thấy trong thùng rác, nhưng hệ thống cửa đã được nâng cấp để chống lại mặt nạ này. Đây chỉ là nghi binh." },
            { name: "Màn Hình iPad", icon: "📱", desc: "Màn hình dính dấu vân tay của Chuyên gia đồ họa." }
        ],
        opts: {
            s: ["Bảo Vệ Kho", "Phó Giám Đốc", "Chuyên Gia Đồ Họa"],
            w: ["Mặt Nạ Silicon", "Hack Mã Khóa Cửa", "Hình Ảnh Deepfake Lừa AI"],
            l: ["Phòng Giám Đốc", "Cửa Kho Lưu Trữ", "Phòng An Ninh"]
        },
        sol: { s: "Chuyên Gia Đồ Họa", w: "Hình Ảnh Deepfake Lừa AI", l: "Cửa Kho Lưu Trữ" }
    },
    {
        id: 8,
        title: "Bản Dịch Huyết Dụ",
        diff: "RẤT KHÓ",
        desc: "Chữ ký tan biến sau khi hợp đồng được ký.",
        story: [
            "Luật sư đại diện bị siết cổ tại nhà riêng. Kẻ thủ ác cố tìm cách cướp lại một bản hợp đồng nhượng quyền.",
            "Tuy nhiên, bản hợp đồng còn lại trên bàn chỉ là một tờ giấy trắng ở phần chữ ký nạn nhân.",
            "Thư ký xác nhận đã phiên dịch qua audio và in hợp đồng trước đó vài giờ."
        ],
        suspects: [
            { name: "Khách Hàng", role: "Đối tác", detail: "Khai: 'Hắn hứa sẽ ký, nhưng lúc tôi đến thì hắn đã chết'." },
            { name: "Thư Ký", role: "Dịch thuật", detail: "Khai: 'Tôi dùng tool dịch file audio xong in ra cho sếp ký rồi đi về'." },
            { name: "Vợ Luật Sư", role: "Người nhà", detail: "Khai: 'Tôi thấy anh ấy cãi nhau với khách hàng qua điện thoại'." }
        ],
        evidence: [
            { name: "Bút Mực", icon: "🖋️", desc: "Khách hàng đã tráo cây bút yêu thích của luật sư bằng một cây bút bơm mực tàng hình (sẽ bay màu hoàn toàn khi hơ nóng hoặc sau 1 giờ)." },
            { name: "Lò Sưởi Điện", icon: "🔥", desc: "Bật ở mức tối đa chĩa thẳng vào bàn làm việc, ép mực bay hơi nhanh hơn." },
            { name: "Sợi Dây Thừng", icon: "🪢", desc: "Dùng để siết cổ, có vương sợi vải từ bộ vest của Khách Hàng." }
        ],
        opts: {
            s: ["Vợ Luật Sư", "Khách Hàng", "Thư Ký"],
            w: ["Đổi Bản In Xóa Chữ", "Bút Mực Bay Màu (Nhiệt)", "Súng Lục"],
            l: ["Phòng Khách", "Phòng Làm Việc", "Phòng Ngủ"]
        },
        sol: { s: "Khách Hàng", w: "Bút Mực Bay Màu (Nhiệt)", l: "Phòng Làm Việc" }
    },
    {
        id: 9,
        title: "Tiếng Gầm Vô Hình",
        diff: "KHÓ",
        desc: "Gây án mà không cần chạm vào nạn nhân.",
        story: [
            "Người đàn ông sống cạnh công trường tử vong trên ghế sofa, màng nhĩ chảy máu, mạch máu não vỡ do áp lực.",
            "Cửa nhà khóa kín, không có dấu vết vật lộn hay vũ khí.",
            "Trên tai nạn nhân vẫn đang đeo tai nghe chống ồn chủ động (ANC)."
        ],
        suspects: [
            { name: "Thợ Khoan", role: "Công nhân", detail: "Khai: 'Tôi khoan cắt bê tông từ sáng, ồn là việc của tôi'." },
            { name: "Bạn Cùng Phòng", role: "Sinh viên", detail: "Khai: 'Tôi đi học cả ngày, anh ấy thích yên tĩnh nên hay đeo tai nghe'." },
            { name: "Kẻ Thù Cũ", role: "Hacker", detail: "Khai: 'Tôi không thèm động tay với hắn'." }
        ],
        evidence: [
            { name: "Máy Khoan Bê Tông", icon: "🕳️", desc: "Tạo ra tiếng ồn lớn nhưng không đủ gây vỡ mạch máu não ngay lập tức." },
            { name: "Tai Nghe Chống Ồn", icon: "🎧", desc: "Hacker (Kẻ Thù Cũ) đã xâm nhập vào điện thoại nạn nhân, điều khiển tai nghe phát ra sóng hạ âm (tần số cực thấp) ở âm lượng tối đa liên tục trong nhiều giờ, gây phá hủy não bộ." },
            { name: "Điện Thoại Nạn Nhân", icon: "📱", desc: "Ứng dụng nghe nhạc bị cài đè một file âm thanh lạ ẩn." }
        ],
        opts: {
            s: ["Thợ Khoan", "Bạn Cùng Phòng", "Kẻ Thù Cũ"],
            w: ["Đập Đá Vào Đầu", "Tai Nghe Phát Sóng Hạ Âm", "Chất Độc Khí"],
            l: ["Công Trường", "Phòng Ngủ", "Ghế Sofa"]
        },
        sol: { s: "Kẻ Thù Cũ", w: "Tai Nghe Phát Sóng Hạ Âm", l: "Ghế Sofa" }
    },
    {
        id: 10,
        title: "Tầm Nhìn Của Kẻ Mù",
        diff: "TRUNG BÌNH",
        desc: "Sự thật nằm trong lời nói dối vụng về.",
        story: [
            "Án mạng xảy ra ở ngõ hẻm vắng. Một người đàn ông mù đi ngang qua tự xưng là nhân chứng duy nhất.",
            "Ông ta khai với cảnh sát: 'Tôi nghe thấy tiếng bước chân, rồi nạn nhân hét lên. Kẻ đó bỏ chạy, lướt qua tôi, hắn mặc một chiếc áo khoác da màu đỏ'."
        ],
        suspects: [
            { name: "Kẻ Mù (Nhân chứng)", role: "Người qua đường", detail: "Khai: 'Tôi bị mù bẩm sinh, tai tôi rất thính'." },
            { name: "Tên Trộm", role: "Giang hồ", detail: "Khai: 'Tôi có mặc áo khoác đỏ, nhưng tôi chỉ đi ngang qua đó nhặt đồ'." },
            { name: "Vợ Nạn Nhân", role: "Người nhà", detail: "Khai: 'Tôi đang ở nhà nấu cơm chờ anh ấy'." }
        ],
        evidence: [
            { name: "Áo Khoác Đỏ", icon: "🧥", desc: "Tên trộm thực sự có mặc áo đỏ, nhưng một người mù bẩm sinh không thể nào biết được màu sắc của chiếc áo khi ai đó lướt qua." },
            { name: "Cây Gậy Dò Đường", icon: "🦯", desc: "Phần tay cầm của gậy dính vệt máu khô của nạn nhân." },
            { name: "Ví Tiền Nạn Nhân", icon: "👛", desc: "Được giấu sâu trong túi áo của Kẻ Mù." }
        ],
        opts: {
            s: ["Tên Trộm", "Vợ Nạn Nhân", "Kẻ Mù (Nhân chứng)"],
            w: ["Súng", "Gậy Dò Đường", "Dao Phay"],
            l: ["Trong Nhà", "Hẻm Vắng", "Quán Nhậu"]
        },
        sol: { s: "Kẻ Mù (Nhân chứng)", w: "Gậy Dò Đường", l: "Hẻm Vắng" }
    },
    {
        id: 11,
        title: "Giọt Lệ Độc Tôn",
        diff: "KHÓ",
        desc: "Tìm độc tố trong biển nước.",
        story: [
            "Giám đốc nhân sự bị đầu độc ngay giữa cuộc họp căng thẳng. Cô uống nước lọc, cà phê, và ăn trái cây cùng mọi người.",
            "Tất cả đồ ăn thức uống trên bàn đều sạch. Cảnh sát không tìm thấy manh mối độc dược nào đường tiêu hóa."
        ],
        suspects: [
            { name: "Trưởng Phòng", role: "Cấp dưới", detail: "Khai: 'Tôi ngồi cạnh cô ấy, tự tay rót nước cho cô ấy'." },
            { name: "Nhân Viên Mới", role: "Thực tập", detail: "Khai: 'Tôi phụ trách gọt trái cây mang vào phòng'." },
            { name: "Thư Ký", role: "Trợ lý", detail: "Khai: 'Tôi dọn tài liệu lên bàn trước khi họp'." }
        ],
        evidence: [
            { name: "Cốc Nước", icon: "🥛", desc: "Hoàn toàn sạch." },
            { name: "Trái Cây", icon: "🍎", desc: "Không có độc." },
            { name: "Lọ Thuốc Nhỏ Mắt", icon: "💧", desc: "Nạn nhân hay bị khô mắt. Trưởng phòng đã bơm Cyanua lỏng vào lọ thuốc này. Khi nạn nhân nhỏ mắt, độc ngấm trực tiếp qua màng nhầy võng mạc gây tử vong tức tưởi." }
        ],
        opts: {
            s: ["Thư Ký", "Trưởng Phòng", "Nhân Viên Mới"],
            w: ["Trái Cây Tẩm Độc", "Nước Lọc Chứa Cyanua", "Thuốc Nhỏ Mắt Chứa Độc"],
            l: ["Phòng Nghỉ", "Phòng Họp", "Khu Pha Chế"]
        },
        sol: { s: "Trưởng Phòng", w: "Thuốc Nhỏ Mắt Chứa Độc", l: "Phòng Họp" }
    },
    {
        id: 12,
        title: "Đá Bào Vang Đỏ",
        diff: "TRUNG BÌNH",
        desc: "Tại sao chỉ có một người chết khi uống cùng một chai rượu?",
        story: [
            "Hai đối tác làm ăn cạn ly rượu vang chúc mừng hợp đồng mới. 10 phút sau, ông A chết vì ngộ độc, ông B vẫn bình an.",
            "Cả hai rót rượu từ cùng một chai, uống từ cùng một bộ ly do phục vụ mang tới."
        ],
        suspects: [
            { name: "Ông B", role: "Đối tác", detail: "Khai: 'Tôi uống cạn ly ngay lập tức vì quá khát, ông A thì nhâm nhi từ từ'." },
            { name: "Người Phục Vụ", role: "Bồi bàn", detail: "Khai: 'Tôi dùng kẹp gắp đá cho cả hai người theo yêu cầu'." },
            { name: "Vợ Ông A", role: "Người nhà", detail: "Khai: 'Tôi gọi điện cho anh ấy lúc vừa ký xong hợp đồng'." }
        ],
        evidence: [
            { name: "Chai Rượu", icon: "🍾", desc: "Kiểm nghiệm an toàn." },
            { name: "Viên Đá Lạnh", icon: "🧊", desc: "Ông B là người đã âm thầm cho độc vào phần lõi của viên đá lạnh. Vì ông B uống ực cạn ly ngay khi đá chưa tan, ông ta không sao. Ông A uống chậm, đá tan ra giải phóng chất độc vào rượu." },
            { name: "Khăn Lau Ly", icon: "🧻", desc: "Sạch sẽ." }
        ],
        opts: {
            s: ["Người Phục Vụ", "Vợ Ông A", "Ông B"],
            w: ["Viên Đá Lạnh Chứa Độc", "Rượu Vang Độc", "Viền Ly Có Độc"],
            l: ["Quầy Pha Chế", "Bàn Tiệc VIP", "Hành Lang"]
        },
        sol: { s: "Ông B", w: "Viên Đá Lạnh Chứa Độc", l: "Bàn Tiệc VIP" }
    },
    {
        id: 13,
        title: "Áo Khoác Hai Mặt",
        diff: "DỄ",
        desc: "Kẻ thủ ác biến mất trước camera an ninh.",
        story: [
            "Kẻ cướp đâm gục nhân viên siêu thị rồi bỏ chạy. Camera ghi lại hắn mặc áo khoác màu vàng rực rỡ.",
            "Cảnh sát phong tỏa siêu thị lập tức, không ai lọt ra ngoài. Nhưng họ kiểm tra tất cả khách hàng đều không ai mặc áo vàng."
        ],
        suspects: [
            { name: "Khách Hàng Nam", role: "Khách", detail: "Khai: 'Tôi mặc áo khoác đen từ lúc ở nhà đi'." },
            { name: "Thu Ngân", role: "Nhân viên", detail: "Khai: 'Tôi sợ quá nấp dưới quầy'." },
            { name: "Bảo Vệ", role: "An ninh", detail: "Khai: 'Tôi khóa cửa ngay sau tiếng la'." }
        ],
        evidence: [
            { name: "Camera Cửa", icon: "📹", desc: "Không có bóng dáng áo vàng nào chạy ra." },
            { name: "Chiếc Áo Khoác Đen", icon: "🧥", desc: "Áo của Khách Hàng Nam là loại áo khoác gió hai mặt. Mặt trong màu vàng, mặt ngoài màu đen. Hắn lộn ngược áo lại ngay sau khi gây án để hòa vào đám đông." },
            { name: "Con Dao Nhỏ", icon: "🔪", desc: "Giấu dưới đế giày của Khách Hàng Nam." }
        ],
        opts: {
            s: ["Bảo Vệ", "Thu Ngân", "Khách Hàng Nam"],
            w: ["Cởi Áo Vứt Đi", "Áo Khoác Lộn Hai Mặt", "Đồng Phạm Tráo Áo"],
            l: ["Bãi Gửi Xe", "Cửa Ra Vào", "Trong Siêu Thị"]
        },
        sol: { s: "Khách Hàng Nam", w: "Áo Khoác Lộn Hai Mặt", l: "Trong Siêu Thị" }
    },
    {
        id: 14,
        title: "Cuộc Gặp Trong Chớp Mắt",
        diff: "KHÓ",
        desc: "Dùng găng tay không chỉ để chống vân tay.",
        story: [
            "Kỹ sư trưởng bảo trì điện mạng gục chết khi đang sửa tủ biến áp. Tay bị cháy đen do điện giật 10.000V.",
            "Găng tay cao su cách điện của ông ta hoàn toàn nguyên vẹn, không rách, không hở."
        ],
        suspects: [
            { name: "Thợ Phụ", role: "Công nhân", detail: "Khai: 'Tôi đưa găng tay cho sếp rồi đi mua nước'." },
            { name: "Chủ Đầu Tư", role: "Sếp lớn", detail: "Khai: 'Tôi đang hối thúc tiến độ qua điện thoại'." },
            { name: "Thư Ký", role: "Hành chính", detail: "Khai: 'Tôi xếp lịch sửa chữa này từ tuần trước'." }
        ],
        evidence: [
            { name: "Kìm Cắt Dây", icon: "🗜️", desc: "Bọc nhựa cách điện tốt." },
            { name: "Găng Tay Cao Su", icon: "🧤", desc: "Thợ phụ đã dùng một cây kim tiêm đâm vô số lỗ li ti xỏ xuyên qua lòng bàn tay của chiếc găng. Mắt thường không thấy, nhưng khi nạn nhân đổ mồ hôi cầm vào dây điện, mồ hôi dẫn điện xuyên qua các lỗ kim gây tử vong." },
            { name: "Cây Kim Tiêm", icon: "💉", desc: "Tìm thấy trong thùng rác gần đó." }
        ],
        opts: {
            s: ["Chủ Đầu Tư", "Thợ Phụ", "Thư Ký"],
            w: ["Cắt Dây Cáp", "Găng Tay Bị Đâm Lỗ Kim", "Tạt Nước Vào Tủ Điện"],
            l: ["Phòng Họp", "Phòng Kỹ Thuật", "Hành Lang"]
        },
        sol: { s: "Thợ Phụ", w: "Găng Tay Bị Đâm Lỗ Kim", l: "Phòng Kỹ Thuật" }
    },
    {
        id: 15,
        title: "Phản Ứng Cẩu Trặc",
        diff: "RẤT KHÓ",
        desc: "Sự thù hằn giấu trong ống thông gió.",
        story: [
            "Nạn nhân tử vong tại văn phòng làm việc riêng do sốc phản vệ cấp tính với lông chó.",
            "Văn phòng ở tầng 15, cấm mang thú cưng, nạn nhân không hề tiếp xúc với bất kỳ con vật nào trong tháng qua."
        ],
        suspects: [
            { name: "Đồng Nghiệp A", role: "Nhân viên", detail: "Khai: 'Tôi nuôi chó, nhưng hôm nay tôi mặc đồ sạch đi làm'." },
            { name: "Trưởng Phòng", role: "Sếp", detail: "Khai: 'Tôi dị ứng mèo, không ưa động vật'." },
            { name: "Bảo Trì Tòa Nhà", role: "Kỹ thuật", detail: "Khai: 'Hệ thống gió đang chạy bình thường'." }
        ],
        evidence: [
            { name: "Áo Khoác", icon: "🧥", desc: "Áo của Đồng Nghiệp A hoàn toàn sạch lông." },
            { name: "Màng Lọc Gió", icon: "💨", desc: "Đồng Nghiệp A đã bí mật gom một lượng lớn lông chó của mình, nhét vào phía sau màng lọc của cửa gió điều hòa chĩa thẳng vào bàn nạn nhân. Khi bật máy lạnh, lông bay vô hình trong không khí." },
            { name: "Thùng Rác", icon: "🗑️", desc: "Có vỏ túi nilon chứa lông động vật." }
        ],
        opts: {
            s: ["Trưởng Phòng", "Đồng Nghiệp A", "Bảo Trì Tòa Nhà"],
            w: ["Bỏ Độc Vào Cà Phê", "Lông Chó Trong Ống Thông Gió", "Bôi Lông Chó Lên Bàn"],
            l: ["Phòng Vệ Sinh", "Bàn Làm Việc", "Phòng Kỹ Thuật"]
        },
        sol: { s: "Đồng Nghiệp A", w: "Lông Chó Trong Ống Thông Gió", l: "Bàn Làm Việc" }
    },
    {
        id: 16,
        title: "Dòng Chữ Vô Hình",
        diff: "DỄ",
        desc: "Sự thật nằm dưới đáy chén.",
        story: [
            "Người chồng bị đâm chết tại bàn ăn. Người vợ nói có kẻ gian đột nhập đánh cắp tài sản.",
            "Tài sản duy nhất bị mất là một cuốn sổ tiết kiệm. Trên bàn còn một chén canh đang ăn dở."
        ],
        suspects: [
            { name: "Người Vợ", role: "Vợ", detail: "Khai: 'Hắn trùm kín mặt, cầm dao xông vào'." },
            { name: "Kẻ Đột Nhập", role: "Kẻ cướp", detail: "Vết chân bùn đất mờ nhạt từ cửa sổ." },
            { name: "Hàng Xóm", role: "Nhân chứng", detail: "Khai: 'Tôi nghe tiếng la hét lúc 7h tối'." }
        ],
        evidence: [
            { name: "Chén Canh", icon: "🥣", desc: "Đáy chén có một vết xước hình chữ thập (X) - dấu hiệu giang hồ đòi nợ? Không, đây là chén mới mua." },
            { name: "Vết Bùn Đất", icon: "👣", desc: "Vết giày in trên thảm hướng TỪ TRONG RA NGOÀI cửa sổ, không phải từ ngoài vào. Người vợ đã tạo hiện trường giả." },
            { name: "Dao Thái Thịt", icon: "🔪", desc: "Được rửa sạch cất trong bếp, có phản ứng với thuốc thử máu." }
        ],
        opts: {
            s: ["Kẻ Đột Nhập", "Hàng Xóm", "Người Vợ"],
            w: ["Độc Trong Canh", "Tự Sát", "Dàn Dựng Hiện Trường Đột Nhập"],
            l: ["Bàn Ăn", "Cửa Sổ", "Nhà Bếp"]
        },
        sol: { s: "Người Vợ", w: "Dàn Dựng Hiện Trường Đột Nhập", l: "Bàn Ăn" }
    },
    {
        id: 17,
        title: "Chiếc Phao Định Mệnh",
        diff: "TB",
        desc: "Sát hại nạn nhân giữa biển khơi bằng một cây kim.",
        story: [
            "Du khách không biết bơi tử vong do đuối nước khi đang dùng phao nằm thư giãn trên biển.",
            "Phao xẹp lép khi được vớt lên. Nạn nhân hoảng loạn và chìm."
        ],
        suspects: [
            { name: "Chủ Cho Thuê Phao", role: "Dịch vụ", detail: "Khai: 'Tôi bơm phao căng cứng trước khi giao'." },
            { name: "Bạn Gái", role: "Đi cùng", detail: "Khai: 'Tôi bơi ở gần đó, quay lại thì phao đã xẹp'." },
            { name: "Người Lướt Ván", role: "Du khách", detail: "Khai: 'Ván của tôi vô tình quệt trúng phao của anh ta'." }
        ],
        evidence: [
            { name: "Vết Rách", icon: "🏄", desc: "Không có vết rách lớn nào do ván lướt sóng gây ra." },
            { name: "Lỗ Kim Tiêm", icon: "📍", desc: "Có 5 lỗ châm kim cực nhỏ ở mặt dưới phao. Chủ ý của Bạn Gái là để phao xịt từ từ khi nạn nhân bơi ra xa bờ, khiến hắn đuối nước từ từ mà không tạo ra tiếng nổ bục phao." },
            { name: "Cây Kim Băng", icon: "🧷", desc: "Giấu trong túi xách chống nước của Bạn Gái." }
        ],
        opts: {
            s: ["Chủ Cho Thuê Phao", "Bạn Gái", "Người Lướt Ván"],
            w: ["Đâm Kim Vào Phao", "Đâm Ván Trượt", "Cho Thuê Phao Rách"],
            l: ["Bãi Biển", "Giữa Biển", "Quầy Cho Thuê"]
        },
        sol: { s: "Bạn Gái", w: "Đâm Kim Vào Phao", l: "Giữa Biển" }
    },
    {
        id: 18,
        title: "Băng Keo Phản Chủ",
        diff: "KHÓ",
        desc: "Hệ thống bảo mật vân tay bị qua mặt.",
        story: [
            "Két sắt chứa tài liệu mật bị mở toang. Không có dấu hiệu cạy phá. Khóa két là loại nhận diện vân tay cao cấp.",
            "Giám đốc (người duy nhất có vân tay) bị đâm chết tại bàn làm việc trước khi két bị mở."
        ],
        suspects: [
            { name: "Phó Giám Đốc", role: "Cấp dưới", detail: "Khai: 'Tôi phát hiện xác chết lúc sáng nay'." },
            { name: "Thư Ký", role: "Trợ lý", detail: "Khai: 'Sếp vừa gọi tôi vào lấy báo cáo thì đã gục rồi'." },
            { name: "Bảo Vệ", role: "An ninh", detail: "Khai: 'Tôi không nghe tiếng động gì lạ'." }
        ],
        evidence: [
            { name: "Băng Keo Trong", icon: "🩹", desc: "Thư ký đã dán một đoạn băng keo trong lên nút quét vân tay từ hôm trước. Khi Giám đốc mở két, vân tay in lên băng dính. Thư ký sát hại giám đốc, gỡ đoạn băng dính đó ra ấn lại vào máy quét để mở két." },
            { name: "Ngón Tay Nạn Nhân", icon: "🖐️", desc: "Không có vết mực hay dấu hiệu bị ép nhấn vào két (do khoảng cách từ xác đến két khá xa)." },
            { name: "Báo Cáo", icon: "📄", desc: "Bị vứt tung tóe trên sàn." }
        ],
        opts: {
            s: ["Bảo Vệ", "Phó Giám Đốc", "Thư Ký"],
            w: ["Chặt Ngón Tay", "Băng Keo Lấy Vân Tay", "Hack Mật Khẩu"],
            l: ["Hành Lang", "Phòng Giám Đốc", "Phòng Kế Toán"]
        },
        sol: { s: "Thư Ký", w: "Băng Keo Lấy Vân Tay", l: "Phòng Giám Đốc" }
    },
    {
        id: 19,
        title: "Án Mạng Chuyến Xe Đêm",
        diff: "RẤT KHÓ",
        desc: "Nạn nhân chết gục ở ghế sau xe công nghệ.",
        story: [
            "Tài xế xe Be Group hốt hoảng báo cảnh sát khi vị khách ngồi băng ghế sau gục chết trên đường ra ngoại ô.",
            "Cửa kính đóng kín, xe chạy liên tục không dừng. Nạn nhân tử vong do hít phải khí độc Carbon Monoxide (CO).",
            "Tài xế ở ghế trước vẫn hoàn toàn tỉnh táo."
        ],
        suspects: [
            { name: "Tài Xế Xe Be", role: "Lái xe", detail: "Khai: 'Tôi chạy bật điều hòa suốt tuyến, anh ta ngủ gật rồi đi luôn'." },
            { name: "Vợ Nạn Nhân", role: "Người đặt xe", detail: "Khai: 'Tôi dùng app gọi xe cho chồng đi công tác'." },
            { name: "Thợ Sửa Xe", role: "Bảo dưỡng", detail: "Khai: 'Xe này tuần trước vừa thay lốc lạnh'." }
        ],
        evidence: [
            { name: "Ống Xả (Pô xe)", icon: "💨", desc: "Tài xế đã khoét một lỗ nhỏ ở ống xả, dùng ống cao su luồn khí thải CO trực tiếp vào hốc gió điều hòa dưới gầm ghế sau. Hắn ta mở hé cửa sổ ghế lái của mình để thoát khí." },
            { name: "Nước Giải Khát", icon: "🧃", desc: "Chai nước khách uống không có độc." },
            { name: "Camera Hành Trình", icon: "📹", desc: "Đã bị rút thẻ nhớ trước chuyến đi." }
        ],
        opts: {
            s: ["Thợ Sửa Xe", "Vợ Nạn Nhân", "Tài Xế Xe Be"],
            w: ["Đầu Độc Nước Uống", "Luồn Khí CO Vào Ghế Sau", "Chặn Cửa Gây Ngạt"],
            l: ["Nhà Nạn Nhân", "Gara Sửa Xe", "Trên Xe Hơi"]
        },
        sol: { s: "Tài Xế Xe Be", w: "Luồn Khí CO Vào Ghế Sau", l: "Trên Xe Hơi" }
    },
    {
        id: 20,
        title: "Lời Nguyền Nam Châm",
        diff: "KHÓ",
        desc: "Dữ liệu bị xóa sạch không cần mật khẩu.",
        story: [
            "Máy chủ chứa dữ liệu tham nhũng của tòa án bị xóa trắng hoàn toàn. Người giữ chìa khóa phòng server bị đánh ngất.",
            "Cửa phòng server làm bằng kính cường lực không thể phá vỡ, mã khóa vân tay bình thường.",
            "Hung thủ không hề bước chân vào phòng máy chủ."
        ],
        suspects: [
            { name: "Quan Chức", role: "Nghi phạm tham nhũng", detail: "Khai: 'Tôi đang bị tạm giam lấy đâu ra khả năng làm việc đó'." },
            { name: "Luật Sư", role: "Bào chữa", detail: "Khai: 'Tôi đến thăm thân chủ và chỉ đứng ngoài hành lang tòa án'." },
            { name: "Kỹ Sư IT", role: "Quản trị mạng", detail: "Khai: 'Server offline lúc 3h sáng, tôi đang ngủ ở nhà'." }
        ],
        evidence: [
            { name: "Cửa Kính Phòng Server", icon: "🔲", desc: "Hoàn toàn nguyên vẹn. Bàn đặt ổ cứng nằm sát ngay mặt kính bên trong." },
            { name: "Nam Châm Neodymium", icon: "🧲", desc: "Luật sư đã lén áp một khối nam châm đất hiếm cực mạnh vào mặt ngoài của lớp kính cường lực, ngay sát vị trí ổ cứng HDD bên trong. Từ trường cực mạnh đã phá hủy toàn bộ đĩa từ mà không cần đột nhập." },
            { name: "Cáp Mạng", icon: "🔌", desc: "Không có dấu hiệu bị hack qua mạng LAN." }
        ],
        opts: {
            s: ["Kỹ Sư IT", "Luật Sư", "Quan Chức"],
            w: ["Hack Qua Mạng", "Đập Vỡ Cửa Kính", "Nam Châm Phá Ổ Cứng"],
            l: ["Phòng Server", "Hành Lang Tòa Án", "Nhà Tạm Giam"]
        },
        sol: { s: "Luật Sư", w: "Nam Châm Phá Ổ Cứng", l: "Hành Lang Tòa Án" }
    },
    {
        id: 21,
        title: "Cuộc Gọi Tử Thần",
        diff: "TB",
        desc: "Bị đâm chết trong lúc đang nghe điện thoại.",
        story: [
            "Ông chủ bị đâm từ phía sau khi đang nói chuyện điện thoại bằng tai nghe Bluetooth trong văn phòng.",
            "Nhân chứng duy nhất là người đang ở đầu dây bên kia: 'Tôi nghe ông ấy kêu Á lên một tiếng rồi im bặt, sau đó là tiếng bước chân chạy'."
        ],
        suspects: [
            { name: "Thư Ký", role: "Đang gọi điện", detail: "Khai: 'Tôi gọi báo cáo công việc từ nhà riêng, nghe thấy mọi chuyện'." },
            { name: "Bảo Vệ", role: "Trực đêm", detail: "Khai: 'Tôi thấy phòng sếp sáng đèn nhưng không dám vào'." },
            { name: "Đối Tác", role: "Kẻ thù", detail: "Khai: 'Tôi đe dọa ông ta, nhưng sát thủ không phải là tôi'." }
        ],
        evidence: [
            { name: "Điện Thoại", icon: "📱", desc: "Nhật ký cuộc gọi ghi nhận cuộc gọi với Thư ký kéo dài 5 phút." },
            { name: "Ứng Dụng Thu Âm", icon: "🎙️", desc: "Thư ký thực chất đang trốn sau rèm cửa phòng sếp. Cô ta bật một đoạn ghi âm câu hỏi của mình, kết nối Bluetooth với tai nghe sếp, sau đó vòng ra sau lưng đâm nạn nhân để ngụy tạo ngoại phạm là 'đang gọi từ nhà'." },
            { name: "Dao Găm", icon: "🔪", desc: "Dính máu và bị ném lại hiện trường." }
        ],
        opts: {
            s: ["Đối Tác", "Bảo Vệ", "Thư Ký"],
            w: ["Súng Lục", "Dao Găm Cùng File Ghi Âm Giả", "Thuốc Độc"],
            l: ["Văn Phòng Sếp", "Nhà Riêng Thư Ký", "Quầy Lễ Tân"]
        },
        sol: { s: "Thư Ký", w: "Dao Găm Cùng File Ghi Âm Giả", l: "Văn Phòng Sếp" }
    },
    {
        id: 22,
        title: "Giai Điệu Ru Ngủ",
        diff: "KHÓ",
        desc: "Mùi hương thoang thoảng kết liễu cuộc đời.",
        story: [
            "Nạn nhân chết trong lúc tắm bồn nước nóng, cửa phòng tắm chốt trong. Chết do suy hô hấp.",
            "Không có máy sấy tóc rò điện, nước trong bồn không có thuốc độc."
        ],
        suspects: [
            { name: "Người Chồng", role: "Người nhà", detail: "Khai: 'Tôi xem tivi ngoài phòng khách, cô ấy tắm rất lâu'." },
            { name: "Người Giúp Việc", role: "Tạp vụ", detail: "Khai: 'Tôi đã cọ rửa bồn tắm sạch sẽ từ chiều'." },
            { name: "Bạn Gái Cũ", role: "Kẻ thù", detail: "Khai: 'Tôi có gửi tặng một hộp quà làm đẹp nặc danh'." }
        ],
        evidence: [
            { name: "Nến Thơm", icon: "🕯️", desc: "Bạn gái cũ đã gửi tặng một hộp nến thơm cao cấp. Phần sáp nến được trộn lẫn với hóa chất gây tê liệt hô hấp khi bay hơi ở nhiệt độ cao. Nạn nhân thắp nến khi tắm và lịm đi." },
            { name: "Sữa Tắm", icon: "🛁", desc: "Chai sữa tắm hoàn toàn bình thường." },
            { name: "Quạt Thông Gió", icon: "💨", desc: "Bị hỏng từ trước, khiến khí độc tụ lại trong phòng kín." }
        ],
        opts: {
            s: ["Người Giúp Việc", "Người Chồng", "Bạn Gái Cũ"],
            w: ["Sữa Tắm Có Độc", "Nến Thơm Tẩm Khí Độc", "Điện Giật Nước"],
            l: ["Phòng Khách", "Phòng Tắm", "Sân Vườn"]
        },
        sol: { s: "Bạn Gái Cũ", w: "Nến Thơm Tẩm Khí Độc", l: "Phòng Tắm" }
    },
    {
        id: 23,
        title: "Chiếc Thảm Phản Chủ",
        diff: "RẤT KHÓ",
        desc: "Độc ngấm từ bước chân đầu tiên về nhà.",
        story: [
            "Vị quan tòa nghiêm khắc gục chết khi vừa bước vào thư viện nhà mình. Chết do ngộ độc chất tiếp xúc qua da.",
            "Ông ta có thói quen tháo giày và đi chân trần trên thảm trong nhà.",
            "Không có thức ăn hay đồ uống nào có độc."
        ],
        suspects: [
            { name: "Tội Phạm Cũ", role: "Kẻ trả thù", detail: "Khai: 'Tôi theo dõi ông ta về nhà, nhưng chưa kịp hành động'." },
            { name: "Quản Gia", role: "Người làm", detail: "Khai: 'Tôi giặt thảm và dọn dẹp mỗi ngày'." },
            { name: "Con Trai Ngỗ Nghịch", role: "Người nhà", detail: "Khai: 'Ông ta cắt viện trợ của tôi, tôi hận ông ta'." }
        ],
        evidence: [
            { name: "Thảm Chùi Chân", icon: "🚪", desc: "Thảm chùi chân TRƯỚC cửa nhà bị Con Trai tẩm bột độc cực mạnh. Khi quan tòa giẫm giày lên, độc dính vào đế giày. Khi tháo giày bằng tay, độc dính vào tay. Sau đó ông ta dụi mắt và tử vong." },
            { name: "Thảm Thư Viện", icon: "🧶", desc: "Hoàn toàn sạch, không có độc." },
            { name: "Cốc Trà", icon: "🍵", desc: "Đang pha dở, chưa kịp uống." }
        ],
        opts: {
            s: ["Tội Phạm Cũ", "Quản Gia", "Con Trai Ngỗ Nghịch"],
            w: ["Thảm Thư Viện Có Độc", "Bột Độc Ở Thảm Chùi Chân Ngoài Cửa", "Trà Có Độc"],
            l: ["Cửa Ra Vào", "Thư Viện", "Nhà Bếp"]
        },
        sol: { s: "Con Trai Ngỗ Nghịch", w: "Bột Độc Ở Thảm Chùi Chân Ngoài Cửa", l: "Cửa Ra Vào" }
    },
    {
        id: 24,
        title: "Giọt Nước Chân Không",
        diff: "CỰC KHÓ",
        desc: "Phi hành gia tử vong trong buồng mô phỏng.",
        story: [
            "Chuyên gia hàng không tử vong trong buồng huấn luyện chân không. Chết do đuối nước (nước tràn vào phổi).",
            "Buồng giả lập hoàn toàn khô ráo, bộ đồ phi hành gia không bị rách, mũ bảo hiểm khóa chặt."
        ],
        suspects: [
            { name: "Kỹ Sư Vận Hành", role: "Điều khiển", detail: "Khai: 'Tôi chỉ giảm áp suất theo đúng quy trình bài tập'." },
            { name: "Đồng Đội", role: "Học viên", detail: "Khai: 'Tôi tập ở buồng kế bên, mọi thứ bình thường'." },
            { name: "Vợ Nạn Nhân", role: "Bảo hiểm", detail: "Khai: 'Anh ấy hay phàn nàn về hệ thống làm mát của bộ đồ'." }
        ],
        evidence: [
            { name: "Bộ Quần Áo Vũ Trụ", icon: "👨‍🚀", desc: "Hệ thống ống dẫn nước làm mát bên trong bộ đồ bị Kỹ sư vận hành đục một lỗ rò rỉ ngay gần cổ áo. Khi môi trường là chân không, nước làm mát trào ra, tạo thành các khối nước lơ lửng bọc kín mũi và miệng nạn nhân, gây đuối nước trong mũ bảo hiểm." },
            { name: "Van Xả Áp Suất", icon: "⚙️", desc: "Hoạt động hoàn toàn bình thường." },
            { name: "Bình Dưỡng Khí", icon: "🧯", desc: "Còn nguyên 100% khí Oxy." }
        ],
        opts: {
            s: ["Đồng Đội", "Vợ Nạn Nhân", "Kỹ Sư Vận Hành"],
            w: ["Bơm Nước Vào Mũ", "Ống Làm Mát Rò Rỉ Trong Mũ", "Cắt Cáp Dưỡng Khí"],
            l: ["Phòng Thay Đồ", "Phòng Điều Khiển", "Buồng Chân Không"]
        },
        sol: { s: "Kỹ Sư Vận Hành", w: "Ống Làm Mát Rò Rỉ Trong Mũ", l: "Buồng Chân Không" }
    },
    {
        id: 25,
        title: "Tia Chớp Chết Người",
        diff: "TB",
        desc: "Gây án nhờ thời tiết.",
        story: [
            "Nạn nhân bị sét đánh cháy đen khi đang chơi golf. Sự việc tưởng chừng là tai nạn xui xẻo do cơn giông bất chợt.",
            "Nhưng pháp y phát hiện nồng độ sắt và nam châm rải rác trên quần áo nạn nhân cao bất thường."
        ],
        suspects: [
            { name: "Caddie Cũ", role: "Bị sa thải", detail: "Khai: 'Tôi giận ông ta, nhưng làm sao tôi sai khiến được tia sét?'." },
            { name: "Bạn Chơi Golf", role: "Đối tác", detail: "Khai: 'Tôi thấy trời chuyển mây nên gọi ông ấy vào, nhưng ông ấy cố đánh thêm 1 lỗ'." },
            { name: "Vợ Nạn Nhân", role: "Phu nhân", detail: "Khai: 'Tôi đã ủi đồ cho anh ấy đi chơi sáng nay'." }
        ],
        evidence: [
            { name: "Bộ Quần Áo Golf", icon: "👕", desc: "Vợ nạn nhân đã bí mật ngâm áo khoác của chồng vào dung dịch chứa bột kim loại dẫn điện cực mạnh trước khi ủi. Khi đứng trên bãi cỏ rộng, nạn nhân trở thành một cột thu lôi di động hoàn hảo." },
            { name: "Gậy Golf Đánh Dở", icon: "⛳", desc: "Gậy Titanium bình thường, không đủ để thu hút sét nhanh đến vậy." },
            { name: "Túi Đựng Gậy", icon: "🎒", desc: "Bị ướt mưa, không có manh mối." }
        ],
        opts: {
            s: ["Bạn Chơi Golf", "Caddie Cũ", "Vợ Nạn Nhân"],
            w: ["Gậy Golf Gắn Nam Châm", "Áo Tẩm Bột Kim Loại Thu Lôi", "Gài Mìn Trọng Lượng"],
            l: ["Nhà Câu Lạc Bộ", "Sân Golf", "Phòng Giặt Giũ Ở Nhà"]
        },
        sol: { s: "Vợ Nạn Nhân", w: "Áo Tẩm Bột Kim Loại Thu Lôi", l: "Phòng Giặt Giũ Ở Nhà" }
    },
    {
        id: 26,
        title: "Nấc Cụt Cuối Cùng",
        diff: "DỄ",
        desc: "Phản xạ cơ thể trở thành nhược điểm chí mạng.",
        story: [
            "Bác sĩ phẫu thuật bị đâm một nhát dao vào lưng gục chết trong căn tin bệnh viện.",
            "Camera bị hỏng. 3 người ngồi cùng bàn đều phủ nhận việc ra tay, ai cũng nói mình đang mải cắm mặt ăn."
        ],
        suspects: [
            { name: "Bệnh Nhân Cũ", role: "Khách", detail: "Khai: 'Tôi đang ăn cháo ở bàn kế bên'." },
            { name: "Y Tá Trưởng", role: "Đồng nghiệp", detail: "Khai: 'Tôi đang ăn chiếc bánh mì kẹp cực cay, cay đến mức tôi bị nấc cụt liên tục không dừng được'." },
            { name: "Bác Sĩ Thực Tập", role: "Cấp dưới", detail: "Khai: 'Tôi vừa gắp miếng thịt thì ông ấy ngã gục'." }
        ],
        evidence: [
            { name: "Dao Mổ", icon: "🔪", desc: "Hung khí là dao mổ giấu trong vạt áo blouse." },
            { name: "Lời Khai Y Tá", icon: "💬", desc: "Y Tá Trưởng nói dối. Cô ta đâm nạn nhân, nhưng vì đang bị nấc cụt dữ dội do ăn cay, cú đâm bị lệch quỹ đạo (rách áo rộng) và tiếng nấc vang lên ngay lúc nạn nhân đổ gục đã tố cáo cô ta không hề 'cắm mặt ăn'." },
            { name: "Khay Thức Ăn", icon: "🍱", desc: "Khay của Y Tá vương vãi lộn xộn do hành động vội vàng rút dao." }
        ],
        opts: {
            s: ["Bệnh Nhân Cũ", "Bác Sĩ Thực Tập", "Y Tá Trưởng"],
            w: ["Súng Giảm Thanh", "Đầu Độc Vào Cháo", "Đâm Bằng Dao Mổ"],
            l: ["Phòng Khám", "Căn Tin Bệnh Viện", "Nhà Vệ Sinh"]
        },
        sol: { s: "Y Tá Trưởng", w: "Đâm Bằng Dao Mổ", l: "Căn Tin Bệnh Viện" }
    },
    {
        id: 27,
        title: "Âm Nhạc Tử Thần",
        diff: "KHÓ",
        desc: "Kéo dây đàn, đứt sinh mệnh.",
        story: [
            "Nghệ sĩ Cello nổi tiếng gục ngã trên sân khấu khi đang chơi nốt cao trào nhất của bản giao hưởng.",
            "Lưỡi của ông ta bị cắt sâu, máu chảy lênh láng. Không ai đến gần ông ta trong lúc biểu diễn."
        ],
        suspects: [
            { name: "Nhạc Trưởng", role: "Chỉ huy", detail: "Khai: 'Tôi đứng trên bục chỉ huy cách ông ta 3 mét'." },
            { name: "Kỹ Thuật Chỉnh Âm", role: "Âm thanh", detail: "Khai: 'Tôi ngồi ở phòng điều khiển tít phía sau'." },
            { name: "Thợ Sửa Đàn", role: "Hậu cần", detail: "Khai: 'Tôi đã căng lại dây cung vĩ (bow) cho ông ấy trước khi ra diễn'." }
        ],
        evidence: [
            { name: "Cây Vĩ Cello (Bow)", icon: "🎻", desc: "Thợ sửa đàn đã thay một sợi cước kim loại sắc như dao cạo xen lẫn vào bó lông đuôi ngựa của cây Vĩ. Khi nạn nhân chơi hăng say, theo thói quen đưa Vĩ lên cao gần mặt, sợi cước đã cắt phăng cổ họng/lưỡi." },
            { name: "Micro", icon: "🎙️", desc: "Không bị rò điện." },
            { name: "Bản Nhạc", icon: "🎼", desc: "Có dấu máu bắn lên, vị trí hoàn toàn khớp với nhịp kéo Vĩ mạnh nhất." }
        ],
        opts: {
            s: ["Kỹ Thuật Chỉnh Âm", "Thợ Sửa Đàn", "Nhạc Trưởng"],
            w: ["Súng Bắn Tỉa", "Cáp Âm Thanh Siết Cổ", "Sợi Cước Sắc Trong Vĩ Đàn"],
            l: ["Phòng Chỉnh Âm", "Sân Khấu", "Phòng Chờ"]
        },
        sol: { s: "Thợ Sửa Đàn", w: "Sợi Cước Sắc Trong Vĩ Đàn", l: "Sân Khấu" }
    },
    {
        id: 28,
        title: "Màu Sơn Đánh Lừa",
        diff: "RẤT KHÓ",
        desc: "Chiếc xe biến mất giữa thanh thiên bạch nhật.",
        story: [
            "Vụ cướp ngân hàng táo tợn. Bọn cướp tẩu thoát bằng chiếc xe tải màu trắng. Cảnh sát chốt chặn mọi ngả đường nhưng chiếc xe bốc hơi.",
            "Camera giao thông chỉ ghi nhận một chiếc xe tải màu xanh dương đi qua trạm kiểm soát."
        ],
        suspects: [
            { name: "Trưởng Băng Cướp", role: "Cầm đầu", detail: "Khai: 'Tôi bắt taxi về nhà sau khi chia tiền'." },
            { name: "Tài Xế Đào Tẩu", role: "Lái xe", detail: "Khai: 'Tôi lái xe tải đi giao hàng nước đá'." },
            { name: "Cảnh Sát Biến Chất", role: "Nội gián", detail: "Khai: 'Tôi trực trạm chốt, chỉ có xe màu xanh đi qua'." }
        ],
        evidence: [
            { name: "Thùng Xe Tải", icon: "🚚", desc: "Lớp sơn màu trắng bên ngoài xe thực chất là một lớp decal dán (wrap) phủ kín xe. Ngay khi khuất tầm nhìn camera đầu tiên, Tài xế đào tẩu đã lột sạch lớp decal trắng trong 30 giây, để lộ lớp sơn zin màu xanh dương bên trong và đi qua chốt an toàn." },
            { name: "Cuộn Decal Bỏ Đi", icon: "🗑️", desc: "Tìm thấy trong thùng rác tại một con hẻm khuất cách ngân hàng 1km." },
            { name: "Biển Số Xe", icon: "🏷️", desc: "Biển giả đã được vứt lại cùng lớp decal." }
        ],
        opts: {
            s: ["Trưởng Băng Cướp", "Cảnh Sát Biến Chất", "Tài Xế Đào Tẩu"],
            w: ["Đổi Xe Chớp Nhoáng", "Xe Chở Trong Xe Tải Lớn Hơn", "Lột Decal Đổi Màu Xe"],
            l: ["Con Hẻm Khuất", "Trạm Chốt Chặn", "Ngân Hàng"]
        },
        sol: { s: "Tài Xế Đào Tẩu", w: "Lột Decal Đổi Màu Xe", l: "Con Hẻm Khuất" }
    },
    {
        id: 29,
        title: "Ly Cà Phê Trái Khuấy",
        diff: "TB",
        desc: "Tại sao kẻ thuận tay phải lại dùng tay trái?",
        story: [
            "Một nhà văn nổi tiếng (thuận tay phải) được tìm thấy đã chết vì ngộ độc xyanua tại bàn làm việc.",
            "Ly cà phê tẩm độc nằm gọn gàng bên PHÍA TRÁI của bàn phím.",
            "Nạn nhân không bao giờ để ly uống nước bên tay nghịch của mình để tránh va đổ."
        ],
        suspects: [
            { name: "Vợ Nhà Văn", role: "Người nhà", detail: "Khai: 'Tôi mang cà phê vào cho anh ấy rồi đi ngủ'." },
            { name: "Trợ Lý Đánh Máy", role: "Nhân viên", detail: "Khai: 'Sếp nhờ tôi gõ lại bản thảo, tôi thuận tay trái nên ngồi làm việc ở bàn của sếp lúc chiều'." },
            { name: "Biên Tập Viên", role: "Đối tác", detail: "Khai: 'Tôi đến giục nộp bản thảo, cãi nhau một trận rồi về'." }
        ],
        evidence: [
            { name: "Ly Cà Phê", icon: "☕", desc: "Hung thủ đã hạ độc vào ly cà phê, nhưng vì thói quen thuận tay trái của chính mình, hắn vô thức đặt ly cà phê tẩm độc sang bên TRÁI bàn làm việc sau khi bỏ thuốc, quên mất nạn nhân thuận tay phải." },
            { name: "Bàn Phím", icon: "⌨️", desc: "Có dấu vân tay của Trợ lý đánh máy." },
            { name: "Lọ Thuốc", icon: "💊", desc: "Vỏ lọ xyanua vứt ở sọt rác." }
        ],
        opts: {
            s: ["Vợ Nhà Văn", "Biên Tập Viên", "Trợ Lý Đánh Máy"],
            w: ["Dao Găm", "Cà Phê Có Độc Đặt Nhầm Tay Thuận", "Tiêm Độc Tố"],
            l: ["Phòng Khách", "Phòng Làm Việc", "Nhà Bếp"]
        },
        sol: { s: "Trợ Lý Đánh Máy", w: "Cà Phê Có Độc Đặt Nhầm Tay Thuận", l: "Phòng Làm Việc" }
    },
    {
        id: 30,
        title: "Tai Nạn Trong Phòng Kín",
        diff: "KHÓ",
        desc: "Bức tranh kẽm và phản ứng hóa học.",
        story: [
            "Họa sĩ vẽ tranh kim loại bị ngạt thở chết trong xưởng vẽ khóa trái.",
            "Trong phòng đầy bột kẽm và một can axit loãng bị đổ lênh láng trên sàn. Không có dấu vết hung thủ.",
            "Công an định kết luận là tai nạn do đổ hóa chất tạo khí Hydro dễ cháy/ngạt."
        ],
        suspects: [
            { name: "Kẻ Bán Sơn", role: "Cung cấp", detail: "Khai: 'Tôi chỉ giao hàng rồi về'." },
            { name: "Vợ Cũ", role: "Có thù oán", detail: "Khai: 'Tôi ghét ông ta, nhưng phòng khóa trái mà?'." },
            { name: "Học Trò", role: "Phụ việc", detail: "Khai: 'Tôi là người trộn bột kẽm cho thầy trước khi ra về'." }
        ],
        evidence: [
            { name: "Cục Đá Lạnh", icon: "🧊", desc: "Học trò đã dùng một cục nước đá để chêm chặn can axit đặt nghiêng. Khi đá tan, can axit mất thăng bằng đổ ụp xuống đống bột kẽm, kích hoạt phản ứng sinh khí ngạt sau khi hắn đã ra về và khóa cửa." },
            { name: "Can Axit", icon: "🧪", desc: "Nằm lăn lóc trên sàn, nắp bị vặn lỏng sẵn." },
            { name: "Vũng Nước", icon: "💧", desc: "Có một vũng nước nhỏ đáng ngờ ngay bên cạnh can axit đổ, mặc dù axit không bay hơi tạo thành nước." }
        ],
        opts: {
            s: ["Học Trò", "Vợ Cũ", "Kẻ Bán Sơn"],
            w: ["Súng Chế Từ Ống Nước", "Khóa Cửa Chặn Oxy", "Bẫy Axit Bằng Cục Đá Lạnh"],
            l: ["Xưởng Vẽ", "Hành Lang", "Tiệm Sơn"]
        },
        sol: { s: "Học Trò", w: "Bẫy Axit Bằng Cục Đá Lạnh", l: "Xưởng Vẽ" }
    },
    {
        id: 31,
        title: "Quả Bom Nước",
        diff: "TRUNG BÌNH",
        desc: "Sát khí giấu trong khối tinh thể.",
        story: [
            "Chủ tịch tập đoàn chết do ngộ độc Kali Xyanua khi đang uống rượu whisky on the rock (uống với một viên đá cầu lớn).",
            "Toàn bộ chai rượu, thức ăn, ly uống đều được kiểm tra trước đó bởi vệ sĩ."
        ],
        suspects: [
            { name: "Người Pha Chế", role: "Bartender", detail: "Khai: 'Tôi đập đá từ một tảng lớn, không thể nhét độc vào được'." },
            { name: "Vệ Sĩ", role: "An ninh", detail: "Khai: 'Tôi đã dùng máy dò chất độc thử trước rượu'." },
            { name: "Thư Ký Thân Tín", role: "Kẻ phản bội", detail: "Khai: 'Tôi tự tay thả viên đá vào ly cho sếp'." }
        ],
        evidence: [
            { name: "Khuôn Làm Đá Cầu", icon: "🔮", desc: "Thư ký đã dùng khuôn silicon làm đá hình cầu tại nhà, bơm Xyanua lỏng vào chính giữa viên đá và làm đông lại. Vệ sĩ kiểm tra bề mặt đá và rượu hoàn toàn bình thường. Chỉ khi đá tan đến lõi, chất độc mới hòa vào rượu." },
            { name: "Chai Whisky", icon: "🥃", desc: "Sạch sẽ, không có dấu vết kim tiêm." },
            { name: "Kẹp Gắp Đá", icon: "🥢", desc: "Không dính độc." }
        ],
        opts: {
            s: ["Vệ Sĩ", "Người Pha Chế", "Thư Ký Thân Tín"],
            w: ["Kẹp Gắp Tẩm Độc", "Độc Trong Lõi Viên Đá Cầu", "Đầu Độc Trực Tiếp"],
            l: ["Quầy Bar", "Phòng Khách VIP", "Bếp"]
        },
        sol: { s: "Thư Ký Thân Tín", w: "Độc Trong Lõi Viên Đá Cầu", l: "Phòng Khách VIP" }
    },
    {
        id: 32,
        title: "Bóng Dâm Bụt",
        diff: "DỄ",
        desc: "Dùng độc hoa thay cho gươm đao.",
        story: [
            "Bà cô già giàu có chết trong giấc ngủ. Không có dấu vết đột nhập.",
            "Trong phòng ngủ ngập tràn hoa loa kèn, hoa hồng và một chậu hoa lạ mới được gửi tặng.",
            "Nguyên nhân chết: Ngộ độc rễ cây Hellebore (Thiết Mộc Lan) cực mạnh."
        ],
        suspects: [
            { name: "Cháu Gái", role: "Thừa kế", detail: "Khai: 'Tôi mua tặng dì chậu Lan Ý cho thơm phòng'." },
            { name: "Người Giao Hoa", role: "Shipper", detail: "Khai: 'Tôi chỉ giao hàng theo đơn đặt trước'." },
            { name: "Quản Gia", role: "Người làm", detail: "Khai: 'Bà ấy thích tự pha trà rễ cây thảo mộc mỗi tối'." }
        ],
        evidence: [
            { name: "Chậu Hoa Mới", icon: "🪴", desc: "Cháu gái cố tình tặng chậu cây Hellebore cực độc nhưng nói dối là Lan Ý, đồng thời trà trộn vụn rễ cây này vào hộp thảo mộc pha trà của bà cô mù lòa." },
            { name: "Hộp Trà Thảo Mộc", icon: "🫖", desc: "Có lẫn vụn rễ cây độc." },
            { name: "Sổ Di Chúc", icon: "📜", desc: "Vừa được sửa lại để lại toàn bộ tài sản cho Cháu Gái." }
        ],
        opts: {
            s: ["Quản Gia", "Cháu Gái", "Người Giao Hoa"],
            w: ["Súng Lục", "Thuốc Ngủ Quá Liều", "Trà Pha Rễ Cây Độc"],
            l: ["Nhà Bếp", "Phòng Ngủ", "Cửa Hàng Hoa"]
        },
        sol: { s: "Cháu Gái", w: "Trà Pha Rễ Cây Độc", l: "Phòng Ngủ" }
    },
    {
        id: 33,
        title: "Bản Án Từ Tần Số",
        diff: "CỰC KHÓ",
        desc: "Kính vỡ đâm chết người.",
        story: [
            "Nữ ca sĩ Opera bị những mảnh kính vỡ từ đèn chùm pha lê đâm chết khi đang ở một mình trong phòng luyện thanh.",
            "Phòng được cách âm hoàn toàn, cửa khóa. Không có dấu vết va đập vào đèn chùm."
        ],
        suspects: [
            { name: "Quản Lý", role: "Bầu sô", detail: "Khai: 'Cô ấy đang tập luyện để phá kỷ lục hát nốt cao nhất'." },
            { name: "Nhân Viên Kỹ Thuật", role: "Bảo trì", detail: "Khai: 'Đèn chùm pha lê rất chắc chắn, tôi vừa vệ sinh hôm qua'." },
            { name: "Đối Thủ", role: "Ca sĩ khác", detail: "Khai: 'Tôi ghen tị với giọng hát của ả, nhưng tôi không biết ma thuật'." }
        ],
        evidence: [
            { name: "Hệ Thống Loa", icon: "🔊", desc: "Quản lý đã bí mật cài đặt hệ thống loa ẩn trong phòng. Khi ca sĩ ngân nốt cao (Soprano), hệ thống loa đồng thời phát ra tần số cộng hưởng cực đại làm vỡ tung toàn bộ pha lê của chiếc đèn chùm treo ngay trên đầu nạn nhân." },
            { name: "Mảnh Pha Lê", icon: "💎", desc: "Ghim đầy trên người nạn nhân do rơi tự do từ độ cao 5 mét." },
            { name: "Điều Khiển Loa", icon: "🎛️", desc: "Kết nối Bluetooth với điện thoại của Quản lý." }
        ],
        opts: {
            s: ["Đối Thủ", "Nhân Viên Kỹ Thuật", "Quản Lý"],
            w: ["Ném Đá Vỡ Đèn", "Hack Loa Tạo Tần Số Cộng Hưởng", "Cắt Dây Treo Đèn"],
            l: ["Sân Khấu", "Phòng Luyện Thanh", "Phòng Chỉnh Âm"]
        },
        sol: { s: "Quản Lý", w: "Hack Loa Tạo Tần Số Cộng Hưởng", l: "Phòng Luyện Thanh" }
    },
    {
        id: 34,
        title: "Cái Bóng Sau Rèm",
        diff: "KHÓ",
        desc: "Lời khai hoàn hảo luôn có kẽ hở.",
        story: [
            "Người chồng bị bắn chết. Cô vợ khai đang đứng nấu ăn trong bếp thì nghe tiếng súng, chạy ra phòng khách thấy cửa sổ mở toang, hung thủ đã tẩu thoát.",
            "Khám nghiệm cho thấy nạn nhân bị bắn từ cự ly rất gần (dưới 1 mét)."
        ],
        suspects: [
            { name: "Vợ Nạn Nhân", role: "Nhân chứng", detail: "Khai: 'Tôi nghe tiếng súng nổ rất to, mùi thuốc súng khét lẹt'." },
            { name: "Kẻ Đòi Nợ", role: "Nghi phạm", detail: "Khai: 'Tôi đến đòi nợ, gõ cửa không ai mở nên đi về'." },
            { name: "Hàng Xóm", role: "Nhân chứng", detail: "Khai: 'Tôi thấy một bóng đen nhảy qua hàng rào'." }
        ],
        evidence: [
            { name: "Khói Thuốc Súng", icon: "💨", desc: "Vợ nạn nhân khai ngửi thấy mùi thuốc súng khét lẹt. Nhưng nếu hung thủ bắn xong bỏ chạy ngay và cửa sổ đang mở toang, gió sẽ thổi bay mùi rất nhanh. Cô ta là người bắn ở cự ly gần nên mới ngửi thấy rõ mùi đó trên tay áo mình." },
            { name: "Vết Bắn", icon: "🎯", desc: "Vết cháy xém quanh lỗ đạn chứng minh bị bắn áp sát. Không thể có chuyện hung thủ nấp từ xa bắn." },
            { name: "Cây Súng", icon: "🔫", desc: "Bị giấu dưới bao gạo trong bếp." }
        ],
        opts: {
            s: ["Kẻ Đòi Nợ", "Hàng Xóm", "Vợ Nạn Nhân"],
            w: ["Bắn Tỉa Qua Cửa Sổ", "Súng Lục Bắn Áp Sát", "Đâm Dao Ngụy Tạo Vết Đạn"],
            l: ["Phòng Khách", "Ngoài Sân", "Nhà Bếp"]
        },
        sol: { s: "Vợ Nạn Nhân", w: "Súng Lục Bắn Áp Sát", l: "Phòng Khách" }
    },
    {
        id: 35,
        title: "Con Nhện Bằng Vàng",
        diff: "TB",
        desc: "Động vật có nọc độc làm hung khí.",
        story: [
            "Nhà nữ thực vật học chết trong lều cắm trại ở rừng rậm Amazon. Vết cắn của nhện Độc Góa Phụ Đen được tìm thấy trên cổ tay.",
            "Nhưng loại nhện này không phân bố ở khu vực rừng Nam Mỹ này."
        ],
        suspects: [
            { name: "Hướng Dẫn Viên", role: "Dân địa phương", detail: "Khai: 'Rừng này đầy rẫy hiểm nguy, nhện độc có ở khắp nơi'." },
            { name: "Trợ Lý Nghiên Cứu", role: "Đồng nghiệp", detail: "Khai: 'Tôi ngủ ở lều bên cạnh, đóng kín cửa lều'." },
            { name: "Nhà Tài Trợ", role: "Tỷ phú", detail: "Khai: 'Tôi bay trực thăng đến thăm đoàn sáng nay'." }
        ],
        evidence: [
            { name: "Hộp Bắt Côn Trùng", icon: "🕷️", desc: "Tìm thấy trong balo của Trợ Lý Nghiên Cứu. Hắn đã lén mang lậu con nhện Góa Phụ Đen từ phòng thí nghiệm ở Mỹ sang để ngụy tạo tai nạn tự nhiên nhằm cướp công trình nghiên cứu." },
            { name: "Cửa Lều", icon: "⛺", desc: "Khóa kéo bị hở một khe nhỏ do cố ý để thả nhện vào." },
            { name: "Tài Liệu Nghiên Cứu", icon: "📁", desc: "Đã bị chuyển tên tác giả thành tên của Trợ Lý." }
        ],
        opts: {
            s: ["Hướng Dẫn Viên", "Nhà Tài Trợ", "Trợ Lý Nghiên Cứu"],
            w: ["Súng Bắn Phi Tiêu", "Nhện Góa Phụ Đen (Nhập Lậu)", "Rắn Độc Rừng"],
            l: ["Trong Lều Nạn Nhân", "Bãi Đáp Trực Thăng", "Bờ Suối"]
        },
        sol: { s: "Trợ Lý Nghiên Cứu", w: "Nhện Góa Phụ Đen (Nhập Lậu)", l: "Trong Lều Nạn Nhân" }
    },
    {
        id: 36,
        title: "Băng Keo Cuốn Họng",
        diff: "RẤT KHÓ",
        desc: "Phá vỡ bằng chứng ngoại phạm 'Ngủ say'.",
        story: [
            "Chủ tiệm cầm đồ bị siết cổ chết tại nhà. Vợ hắn khai rằng cô ta đã uống thuốc ngủ cực mạnh và ngủ say như chết từ 8h tối.",
            "Cảnh sát tìm thấy chai thuốc ngủ trống rỗng và cô ta quả thực rất lờ đờ khi được đánh thức."
        ],
        suspects: [
            { name: "Vợ Nạn Nhân", role: "Người nhà", detail: "Khai: 'Tôi uống 3 viên Valium, ai làm gì tôi cũng không biết'." },
            { name: "Con Nợ", role: "Giang hồ", detail: "Khai: 'Tôi đến đập cửa lúc 10h đêm không ai ra'." },
            { name: "Tình Nhân Của Vợ", role: "Kẻ ngoại tình", detail: "Khai: 'Tôi ở quán bar suốt đêm'." }
        ],
        evidence: [
            { name: "Cuộn Băng Keo", icon: "🩹", desc: "Trong thùng rác có một đoạn băng keo dính. Người vợ đã dàn cảnh: Giết chồng lúc 8:30 tối. Xong xuôi, cô ta mới uống 3 viên thuốc ngủ vào lúc 9h tối để tạo tình trạng lờ đờ thật sự khi cảnh sát đến. Đoạn băng keo dùng để che khe cửa chặn tiếng hét." },
            { name: "Máu Dưới Móng Tay", icon: "🩸", desc: "Cô vợ không tẩy sạch được vết cào của chồng dưới móng tay mình." },
            { name: "Chai Thuốc Ngủ", icon: "💊", desc: "Dấu vân tay của vợ đè lên trên vết máu mờ (cầm lọ thuốc SAU khi giết người)." }
        ],
        opts: {
            s: ["Tình Nhân Của Vợ", "Con Nợ", "Vợ Nạn Nhân"],
            w: ["Dây Xích Siết Cổ", "Bắn Súng Lục", "Đầu Độc"],
            l: ["Phòng Khách", "Cửa Ra Vào", "Nhà Bếp"]
        },
        sol: { s: "Vợ Nạn Nhân", w: "Dây Xích Siết Cổ", l: "Phòng Khách" }
    },
    {
        id: 37,
        title: "Tiếng Gõ Nhịp Tim",
        diff: "KHÓ",
        desc: "Sát thủ không có mặt tại hiện trường.",
        story: [
            "Bệnh nhân giàu có đang chờ ghép tim đột ngột qua đời trong phòng chăm sóc đặc biệt (ICU).",
            "Máy thở bị tắt. Nhưng y tá trực ngoài cửa thề không ai bước vào phòng.",
            "Có một chú chó trị liệu (Pet Therapy) được phép chạy lăng xăng trong khu vực này."
        ],
        suspects: [
            { name: "Y Tá Trực", role: "Trực đêm", detail: "Khai: 'Tôi ngồi ngay bàn trực, cửa phòng bằng kính trong suốt'." },
            { name: "Người Thừa Kế", role: "Cháu trai", detail: "Khai: 'Tôi về nhà từ chiều'." },
            { name: "Bác Sĩ", role: "Trưởng khoa", detail: "Khai: 'Tôi đang nghỉ ngơi ở phòng trực'." }
        ],
        evidence: [
            { name: "Chú Chó Trị Liệu", icon: "🐕", desc: "Người thừa kế đã gắn một module điều khiển từ xa cực nhỏ pha lẫn thiết bị phá sóng wifi vào vòng cổ của chú chó. Khi chú chó chạy ngang qua máy thở, thiết bị phá sóng đã làm máy thở sập nguồn (reboot) khiến bệnh nhân tử vong." },
            { name: "Vòng Cổ Chó", icon: "📿", desc: "Bị đứt và vứt lại ngoài bãi cỏ." },
            { name: "Máy Thở", icon: "📟", desc: "Log ghi nhận lỗi 'Mất tín hiệu kết nối thiết bị ngoại vi'." }
        ],
        opts: {
            s: ["Người Thừa Kế", "Y Tá Trực", "Bác Sĩ"],
            w: ["Rút Phích Cắm Bằng Tay", "Thiết Bị Phá Sóng Trên Vòng Cổ Chó", "Tiêm Độc Qua Cây Truyền Dịch"],
            l: ["Phòng Trực", "Phòng ICU", "Ngoài Hành Lang"]
        },
        sol: { s: "Người Thừa Kế", w: "Thiết Bị Phá Sóng Trên Vòng Cổ Chó", l: "Phòng ICU" }
    },
    {
        id: 38,
        title: "Bản Phác Thảo Bằng Bút Chì",
        diff: "DỄ",
        desc: "Hung khí nằm ở những chi tiết học thuật.",
        story: [
            "Sinh viên mỹ trúc bị đâm chết tại bàn vẽ. Xung quanh đầy bản phác thảo.",
            "Vết đâm rất nhỏ nhưng sâu, xuyên thẳng vào động mạch cổ.",
            "Không tìm thấy dao, kéo hay bất kỳ vật sắc nhọn kim loại nào."
        ],
        suspects: [
            { name: "Bạn Cùng Phòng", role: "Sinh viên", detail: "Khai: 'Tôi đi thư viện mượn sách từ sáng'." },
            { name: "Giảng Viên Mỹ Thuật", role: "Thầy giáo", detail: "Khai: 'Cậu ta ăn cắp ý tưởng của tôi, tôi đã tát cậu ta một cái'." },
            { name: "Bảo Vệ Ký Túc Xá", role: "An ninh", detail: "Khai: 'Tôi không cho người ngoài vào'." }
        ],
        evidence: [
            { name: "Bút Chì Kim", icon: "✏️", desc: "Giảng viên đã dùng một cây bút chì phác thảo cỡ lớn, chuốt cực nhọn bằng dao rọc giấy để đâm nạn nhân. Lõi chì than chì đã bị gãy và kẹt trong vết thương, không thể che giấu bởi máy X-quang." },
            { name: "Bản Vẽ Dở", icon: "🖼️", desc: "Có vệt máu kéo dài." },
            { name: "Tẩy Cao Su", icon: "🧽", desc: "Dính đầy than chì bất thường (để mài nhọn ngòi)." }
        ],
        opts: {
            s: ["Bạn Cùng Phòng", "Giảng Viên Mỹ Thuật", "Bảo Vệ Ký Túc Xá"],
            w: ["Dao Rọc Giấy", "Súng Bút", "Bút Chì Chuốt Nhọn"],
            l: ["Phòng Vẽ", "Hành Lang", "Thư Viện"]
        },
        sol: { s: "Giảng Viên Mỹ Thuật", w: "Bút Chì Chuốt Nhọn", l: "Phòng Vẽ" }
    },
    {
        id: 39,
        title: "Khẩu Trang Tử Thần",
        diff: "CỰC KHÓ",
        desc: "Sự bảo vệ biến thành cỗ máy giết người.",
        story: [
            "Một TikToker bị ngạt thở tử vong khi đang livestream review sản phẩm khẩu trang chống khói bụi đặc chủng.",
            "Nạn nhân có biểu hiện co giật ôm cổ họng rồi gục xuống ngay trước camera.",
            "Loại khẩu trang này được thiết kế với màng lọc than hoạt tính tiên tiến."
        ],
        suspects: [
            { name: "Nhà Sản Xuất", role: "Tài trợ", detail: "Khai: 'Hàng ngàn người dùng sản phẩm của chúng tôi không sao cả'." },
            { name: "Trợ Lý Livestream", role: "Hậu trường", detail: "Khai: 'Tôi chỉ đứng bấm điện thoại quay phim'." },
            { name: "Kẻ Anti-fan", role: "Người xem", detail: "Khai: 'Tôi có bình luận chửi rủa, nhưng không thể giết người qua mạng'." }
        ],
        evidence: [
            { name: "Khẩu Trang Nạn Nhân Đeo", icon: "😷", desc: "Trợ lý livestream đã tráo lớp màng lọc than hoạt tính bằng một lớp nilon mỏng trong suốt cắt từ túi nilon, chèn vào giữa hai lớp vải của khẩu trang. Khi nạn nhân hít mạnh để test khả năng lọc khí, lớp nilon dán chặt vào mũi miệng gây ngạt thở cấp tính." },
            { name: "Kéo Cắt Giấy", icon: "✂️", desc: "Trợ lý dùng để cắt lớp nilon." },
            { name: "Bao Bì Sản Phẩm", icon: "📦", desc: "Có vết rạch lén ở mép dưới." }
        ],
        opts: {
            s: ["Nhà Sản Xuất", "Trợ Lý Livestream", "Kẻ Anti-fan"],
            w: ["Khí Độc Trong Studio", "Màng Nilon Giấu Trong Khẩu Trang", "Độc Ở Cốc Nước Cạnh Bàn"],
            l: ["Nhà Kho", "Phòng Studio Livestream", "Nhà Máy Sản Xuất"]
        },
        sol: { s: "Trợ Lý Livestream", w: "Màng Nilon Giấu Trong Khẩu Trang", l: "Phòng Studio Livestream" }
    }
    // ... [Dán tiếp ngay sau dấu ngoặc nhọn } của vụ án số 40 (id: 39) của bạn] ...
    ,
    {
        id: 40,
        title: "Chương I: Kẻ Đưa Tin Im Lặng",
        diff: "CỰC KHÓ",
        desc: "Đầu mối đầu tiên về Hội Kín Ánh Trăng bị cắt đứt.",
        story: [
            "Một người đưa tin gọi cho bạn, nói rằng anh ta có danh sách của 'Hội Kín Ánh Trăng'. Nhưng khi bạn đến bốt điện thoại công cộng, anh ta đã chết.",
            "Nạn nhân gục ngay trong bốt điện thoại, trên tay vẫn cầm chặt ống nghe. Không có vết thương hở.",
            "Bên ngoài bốt có 3 người đang đứng trú mưa, không ai tiếp xúc trực tiếp với nạn nhân."
        ],
        suspects: [
            { name: "Cảnh Sát Tuần Tra", role: "Tuần Tra", detail: "Khai: 'Tôi đứng trú mưa ở hiên nhà đối diện, anh ta tự nhiên ngã gục'." },
            { name: "Thợ Điện", role: "Sửa Chữa", detail: "Khai: 'Tôi vừa kiểm tra đường dây điện thoại khu này 15 phút trước'." },
            { name: "Kẻ Lang Thang", role: "Vô Gia Cư", detail: "Khai: 'Tôi nhặt rác quanh đây, thấy gã thợ điện bôi cái gì đó vào điện thoại'." }
        ],
        evidence: [
            { name: "Ống Nghe Điện Thoại", icon: "📞", desc: "Phần viền ống nghe áp vào tai và má nạn nhân được bôi một lớp chất độc thẩm thấu qua da cực mạnh. Chỉ cần đổ mồ hôi, độc sẽ ngấm." },
            { name: "Sổ Ghi Chép", icon: "📓", desc: "Nạn nhân kịp xé một trang giấy ghi địa chỉ một tiệm rửa ảnh retro trước khi chết." },
            { name: "Găng Tay Cao Su", icon: "🧤", desc: "Thợ điện vứt lại trong thùng rác, bên ngoài dính chất độc trùng khớp với trên ống nghe." }
        ],
        opts: { 
            s: ["Kẻ Lang Thang", "Cảnh Sát Tuần Tra", "Thợ Điện"], 
            w: ["Khí Gas Trong Bốt", "Bắn Tỉa Giảm Thanh", "Độc Bôi Lên Ống Nghe"], 
            l: ["Trạm Biến Áp", "Bốt Điện Thoại Công Cộng", "Trụ Sở Cảnh Sát"] 
        },
        sol: {s: "Thợ Điện", w: "Độc Bôi Lên Ống Nghe", l: "Bốt Điện Thoại Công Cộng"}
    },
    {
        id: 41,
        title: "Chương II: Bức Cuốn Phim Nhuốm Máu",
        diff: "RẤT KHÓ",
        desc: "Cuộc truy tìm tại tiệm ảnh phim phong cách vintage.",
        story: [
            "Từ manh mối trước, bạn tìm đến tiệm rửa ảnh phim cổ điển. Ông chủ tiệm bị phát hiện treo cổ trong buồng tối (Darkroom).",
            "Buồng tối khóa trái từ bên trong. Không khí sặc sụa mùi hóa chất tráng phim.",
            "Một cuộn phim chưa kịp rửa nằm lăn lóc trên sàn."
        ],
        suspects: [
            { name: "Thanh Tra Tham Nhũng", role: "Cảnh Sát", detail: "Khai: 'Tôi nhận được tin báo án nên đến phá cửa. Ông ta tự sát'." },
            { name: "Thợ Rửa Ảnh Phụ", role: "Nhân Viên", detail: "Khai: 'Thầy tôi đang rửa một cuộn phim mật, cấm tôi vào'." },
            { name: "Người Mẫu", role: "Khách Hàng", detail: "Khai: 'Tôi đến lấy ảnh chân dung nhưng tiệm đóng cửa'." }
        ],
        evidence: [
            { name: "Cuộn Phim", icon: "🎞️", desc: "Cuộn phim bằng chứng đã bị kéo tuột ra ngoài cho phơi sáng toàn bộ, làm hỏng hoàn toàn dữ liệu. Người tự sát sẽ không làm việc thừa thãi này." },
            { name: "Sợi Dây Thừng", icon: "➰", desc: "Nút thắt thòng lọng là loại dùng trong huấn luyện đặc nhiệm cảnh sát. Thanh tra đã giết ông chủ tiệm, dàn cảnh treo cổ rồi giả vờ là người 'phá cửa chốt trong' để hợp thức hóa." },
            { name: "Bao Diêm", icon: "柴", desc: "Ghi địa chỉ một bến cảng, rơi ra từ túi áo của Thanh tra." }
        ],
        opts: { 
            s: ["Người Mẫu", "Thợ Rửa Ảnh Phụ", "Thanh Tra Tham Nhũng"], 
            w: ["Ép Uống Thuốc Độc", "Dàn Dựng Treo Cổ", "Ngạt Khí Hóa Chất"], 
            l: ["Phòng Trưng Bày", "Buồng Tối Rửa Ảnh", "Nhà Kho"] 
        },
        sol: {s: "Thanh Tra Tham Nhũng", w: "Dàn Dựng Treo Cổ", l: "Buồng Tối Rửa Ảnh"}
    },
    {
        id: 42,
        title: "Chương III: Kẻ Bịt Miệng Phân Tử",
        diff: "KHÓ",
        desc: "Thanh tra tham nhũng bị diệt khẩu ngay tại đồn.",
        story: [
            "Bạn chuẩn bị bắt giữ viên Thanh Tra thì hắn hoảng loạn định nổ máy xe bỏ trốn. Vừa vặn chìa khóa, xe nổ tung giữa bãi đỗ đồn cảnh sát.",
            "Phân tích mảnh bom cho thấy đây là một loại bom điều khiển bằng sóng vô tuyến phức tạp."
        ],
        suspects: [
            { name: "Kỹ Sư Vô Tuyến", role: "Chuyên Gia", detail: "Khai: 'Tôi đến sửa bộ đàm cho bộ phận điều phối'." },
            { name: "Vợ Thanh Tra", role: "Người Nhà", detail: "Khai: 'Tôi mang đồ ăn trưa cho chồng, không ngờ anh ấy...'" },
            { name: "Lính Gác Cổng", role: "Bảo Vệ", detail: "Khai: 'Gã kỹ sư kia cứ lảng vảng gần bãi xe cả buổi sáng'." }
        ],
        evidence: [
            { name: "Mảnh Bo Mạch", icon: "📟", desc: "Tìm thấy linh kiện bộ thu sóng radio thường dùng trong thiết bị bộ đàm cảnh sát, được độ chế thành kíp nổ." },
            { name: "Bộ Đàm Cầm Tay", icon: "📻", desc: "Kỹ sư đã thay đổi tần số bộ đàm của mình. Chỉ cần hắn bấm nút 'Gọi', tần số đó sẽ kích hoạt quả bom dưới gầm xe." },
            { name: "Sổ Tay Kỹ Sư", icon: "📓", desc: "Ghi chép lịch trình vận chuyển của một lô hàng tại Cầu Cảng Số 4." }
        ],
        opts: { 
            s: ["Vợ Thanh Tra", "Lính Gác Cổng", "Kỹ Sư Vô Tuyến"], 
            w: ["Súng Bắn Tỉa Xuyên Kính", "Bom Kích Hoạt Bằng Radio", "Cắt Dây Phanh Xe"], 
            l: ["Bãi Đỗ Xe Đồn Cảnh Sát", "Phòng Bộ Đàm", "Cổng Chính"] 
        },
        sol: {s: "Kỹ Sư Vô Tuyến", w: "Bom Kích Hoạt Bằng Radio", l: "Bãi Đỗ Xe Đồn Cảnh Sát"}
    },
    {
        id: 43,
        title: "Chương IV: Cầu Cảng Khóc Thầm",
        diff: "TB",
        desc: "Truy vết lô hàng đến Cầu Cảng Số 4.",
        story: [
            "Đến bến cảng theo ghi chép của gã kỹ sư, bạn phát hiện một tay buôn lậu bị đè nát bét dưới một container hàng hóa thép.",
            "Cần cẩu bốc dỡ đột nhiên tuột cáp. Quản lý bến cảng đổ lỗi cho hệ thống hỏng."
        ],
        suspects: [
            { name: "Quản Lý Bến Cảng", role: "Quản Lý", detail: "Khai: 'Hệ thống thủy lực của cần cẩu dạo này rất rệu rã'." },
            { name: "Thợ Vận Hành Cẩu", role: "Công Nhân", detail: "Khai: 'Tôi bị đau bụng nên nhờ sếp trực thay ca 15 phút'." },
            { name: "Thủy Thủ Tàu", role: "Bốc Xếp", detail: "Khai: 'Tôi đang buộc dây neo, nghe tiếng rầm là chạy tới'." }
        ],
        evidence: [
            { name: "Bảng Điều Khiển Cẩu", icon: "🎛️", desc: "Nút 'Emergency Release' (Thả khẩn cấp) có dấu vân tay in hằn rất mạnh của Quản Lý. Hắn đã tự tay bấm nút thả rơi container để diệt khẩu tay buôn lậu." },
            { name: "Hồ Sơ Hàng Hóa", icon: "📁", desc: "Lô hàng trong container chứa đầy mặt nạ dùng cho một buổi dạ tiệc sắp diễn ra." },
            { name: "Dây Cáp Cẩu", icon: "⛓️", desc: "Hoàn toàn không bị đứt, chứng tỏ không phải tai nạn đứt cáp." }
        ],
        opts: { 
            s: ["Quản Lý Bến Cảng", "Thợ Vận Hành Cẩu", "Thủy Thủ Tàu"], 
            w: ["Bắn Tỉa", "Cần Cẩu Thả Rơi Container", "Đẩy Xuống Biển"], 
            l: ["Phòng Điều Khiển", "Boong Tàu", "Cầu Cảng Số 4"] 
        },
        sol: {s: "Quản Lý Bến Cảng", w: "Cần Cẩu Thả Rơi Container", l: "Cầu Cảng Số 4"}
    },
    {
        id: 44,
        title: "Chương V: Dạ Tiệc Mặt Nạ",
        diff: "CỰC KHÓ",
        desc: "Sự kiện từ thiện là bức bình phong của Hội Kín.",
        story: [
            "Tại buổi dạ tiệc mặt nạ của giới thượng lưu, một chính trị gia đang bộc bạch sự hối hận trên bục phát biểu thì đột ngột sùi bọt mép tử vong.",
            "Không ai lại gần ông ta. Không uống nước, không ăn đồ ăn."
        ],
        suspects: [
            { name: "Vũ Công Múa Lụa", role: "Biểu Diễn", detail: "Khai: 'Tôi chỉ múa ở phía dưới bục phát biểu'." },
            { name: "Thư Ký Sự Kiện", role: "Tổ Chức", detail: "Khai: 'Tôi là người set-up micro và âm thanh trước khi sếp lên'." },
            { name: "Vệ Sĩ Riêng", role: "An Ninh", detail: "Khai: 'Tôi đứng ngay sau lưng sếp, không có ai ám sát cả'." }
        ],
        evidence: [
            { name: "Chiếc Micro", icon: "🎙️", desc: "Đầu lưới của micro được Thư Ký gắn một cây kim cực nhỏ tẩm độc tố thấm qua da. Khi chính trị gia kề môi sát micro để nói lớn, kim đâm nhẹ vào môi gây tử vong." },
            { name: "Ly Rượu Vang", icon: "🍷", desc: "Sạch sẽ, được vệ sĩ kiểm tra kỹ." },
            { name: "Thiệp Mời Giả", icon: "💌", desc: "Tìm thấy trong túi áo nạn nhân, hẹn gặp tại một nhà kho bỏ hoang ngoại ô." }
        ],
        opts: { 
            s: ["Vũ Công Múa Lụa", "Thư Ký Sự Kiện", "Vệ Sĩ Riêng"], 
            w: ["Kim Độc Giấu Trong Micro", "Phóng Tiêu Tẩm Độc", "Thuốc Độc Trong Không Khí"], 
            l: ["Bàn Tiệc VIP", "Sảnh Nhảy Múa", "Bục Phát Biểu"] 
        },
        sol: {s: "Thư Ký Sự Kiện", w: "Kim Độc Giấu Trong Micro", l: "Bục Phát Biểu"}
    },
    {
        id: 45,
        title: "Chương VI: Cạm Bẫy Bàn Cờ Lưới",
        diff: "RẤT KHÓ",
        desc: "Bước sai một ô, trả giá bằng mạng sống.",
        story: [
            "Lần theo tấm thiệp, bạn đến nhà kho bỏ hoang. Sàn nhà được chia thành các ô lưới caro vuông vức. Một đồng nghiệp của bạn bị trói ở giữa.",
            "Chỉ cần đạp sai một ô, mìn dưới sàn sẽ nổ. Dù bạn giải mã thành công ma trận lưới để cứu đồng nghiệp, một tên gác cổng bên ngoài đã bị giết để cắt đứt dấu vết."
        ],
        suspects: [
            { name: "Chuyên Gia Lập Trình", role: "Hacker Hội Kín", detail: "Khai: 'Tôi chỉ tạo ra thuật toán cho cái bẫy này, tôi không giết gác cổng'." },
            { name: "Tay Súng Tỉa", role: "Xuyên Quốc Gia", detail: "Khai: 'Tôi được lệnh dọn dẹp hiện trường nếu có biến'." },
            { name: "Đồng Nghiệp", role: "Con Tin", detail: "Khai: 'Tôi bị bịt mắt, chỉ nghe tiếng súng có gắn giảm thanh'." }
        ],
        evidence: [
            { name: "Vết Đạn Xuyên Sọ", icon: "🎯", desc: "Đường đạn bắn từ trên mái nhà xưởng đối diện xuyên qua khe thông gió, một kỹ năng chỉ có Tay súng tỉa chuyên nghiệp mới làm được." },
            { name: "Bàn Phím Điều Khiển", icon: "⌨️", desc: "Mã nguồn logic lưới (Grid board logic) điều khiển bẫy mìn vẫn còn mở. Nó chứa chữ ký số của Chuyên gia lập trình." },
            { name: "Vỏ Đạn Cỡ 7.62mm", icon: "🔫", desc: "Rơi trên mái nhà đối diện, mang ký hiệu của băng đảng." }
        ],
        opts: { 
            s: ["Đồng Nghiệp", "Chuyên Gia Lập Trình", "Tay Súng Tỉa"], 
            w: ["Bơm Khí Độc", "Bắn Tỉa Từ Xa", "Kích Nổ Bẫy Mìn"], 
            l: ["Mái Nhà Đối Diện", "Giữa Lưới Mìn", "Phòng Điều Khiển"] 
        },
        sol: {s: "Tay Súng Tỉa", w: "Bắn Tỉa Từ Xa", l: "Mái Nhà Đối Diện"}
    },
    {
        id: 46,
        title: "Chương VII: Bức Tường Im Lặng",
        diff: "CỰC KHÓ",
        desc: "Kẻ sát nhân giấu mặt ngay trong đội ngũ.",
        story: [
            "Bạn bắt được Tay súng tỉa và đưa về phòng thẩm vấn số 1. Hắn chuẩn bị khai ra tay trong tay áo của Hội Kín.",
            "Đột nhiên hắn ôm ngực co giật và chết. Chết do hóa chất trợ tim bị tiêm quá liều.",
            "Phòng thẩm vấn được khóa chặt, camera giám sát quay liên tục."
        ],
        suspects: [
            { name: "Luật Sư Bào Chữa", role: "Đại Diện", detail: "Khai: 'Tôi vừa bước vào định gặp thân chủ thì hắn đã chết'." },
            { name: "Giám Đốc Cảnh Sát", role: "Cấp Trên", detail: "Khai: 'Tôi đang xem thẩm vấn qua màn hình một chiều từ phòng bên'." },
            { name: "Trợ Lý Pháp Y", role: "Y Tế Nội Bộ", detail: "Khai: 'Tôi vào lấy mẫu máu nạn nhân trước khi thẩm vấn'." }
        ],
        evidence: [
            { name: "Băng Băng Cá Nhân", icon: "🩹", desc: "Vết lấy máu ở tay nạn nhân bị Trợ lý pháp y băng lại. Thực chất gã trợ lý (người của Hội Kín) đã tiêm thẳng hóa chất độc thay vì rút máu." },
            { name: "Camera Thẩm Vấn", icon: "📹", desc: "Hoạt động bình thường, ghi lại cảnh nạn nhân tự dưng co giật (vì độc ngấm chậm)." },
            { name: "Hồ Sơ Y Tế", icon: "📁", desc: "Hắn cố tình giấu bệnh án dị ứng của tay súng để sử dụng loại thuốc gây phản ứng cực sốc." }
        ],
        opts: { 
            s: ["Luật Sư Bào Chữa", "Giám Đốc Cảnh Sát", "Trợ Lý Pháp Y"], 
            w: ["Tiêm Độc Qua Việc Lấy Máu", "Bắn Súng Xuyên Kính", "Độc Trong Ly Nước"], 
            l: ["Phòng Quan Sát Một Chiều", "Hành Lang Đồn", "Phòng Thẩm Vấn"] 
        },
        sol: {s: "Trợ Lý Pháp Y", w: "Tiêm Độc Qua Việc Lấy Máu", l: "Phòng Thẩm Vấn"}
    },
    {
        id: 47,
        title: "Chương VIII: Bữa Ăn Đêm Chết Chóc",
        diff: "RẤT KHÓ",
        desc: "Kẻ phản trắc bị diệt khẩu giữa chốn đông người.",
        story: [
            "Trợ lý pháp y lẩn trốn tại một quán ăn đêm ọp ẹp của thế giới ngầm.",
            "Hắn được phát hiện gục chết, úp mặt vào bát phở đang ăn dở. Xung quanh khách khứa vẫn ồn ào nhậu nhẹt, không ai thấy dấu hiệu xô xát hay tiếng động lạ.",
            "Pháp y xác định hắn chết ngay lập tức do một vật cực nhọn đâm xuyên màng nhĩ tiến thẳng vào não."
        ],
        suspects: [
            { name: "Vệ Sĩ Của Trùm", role: "Tay Chân", detail: "Khai: 'Tôi ngồi bàn phía sau hắn. Lúc tôi đứng dậy tính tiền đi về, hắn vẫn đang cắm mặt ăn'." },
            { name: "Chủ Quán Đêm", role: "Giang Hồ Gác Kiếm", detail: "Khai: 'Quán ồn ào, tôi mải trụng phở trong bếp, rảnh đâu mà nhìn'." },
            { name: "Gã Say Rượu", role: "Khách Quen", detail: "Khai: 'Tôi gục trên bàn ngủ từ sớm, chả biết cái thá gì cả'." }
        ],
        evidence: [
            { name: "Đũa Thép", icon: "🥢", desc: "Vệ Sĩ đi ngang qua lưng nạn nhân, vờ loạng choạng rồi dùng một chiếc đũa thép đâm cực mạnh vào lỗ tai nạn nhân, rút ra ngay tắp lự. Máu chảy ít và hòa vào nước phở nên không ai chú ý." },
            { name: "Bát Phở", icon: "🍜", desc: "Được kiểm tra hoàn toàn không có chất độc, bát phở chỉ là bức bình phong che giấu vết máu." },
            { name: "Tờ Tiền", icon: "💵", desc: "Tờ tiền Vệ Sĩ ném lại trên bàn để trả tiền có dính một chấm máu siêu nhỏ văng ra từ đầu chiếc đũa thép." }
        ],
        opts: { 
            s: ["Gã Say Rượu", "Chủ Quán Đêm", "Vệ Sĩ Của Trùm"], 
            w: ["Bỏ Độc Vào Nước Dùng", "Đâm Đũa Thép Xuyên Tai", "Súng Bút Giảm Thanh"], 
            l: ["Nhà Bếp", "Bàn Ăn Quán Đêm", "Hẻm Sau Quán"] 
        },
        sol: {s: "Vệ Sĩ Của Trùm", w: "Đâm Đũa Thép Xuyên Tai", l: "Bàn Ăn Quán Đêm"}
    },
    {
        id: 48,
        title: "Chương IX: Bước Lùi Chiến Thuật",
        diff: "RẤT KHÓ",
        desc: "Kẻ trung thành bị hiến tế.",
        story: [
            "Dấu vết của tên Vệ Sĩ dẫn bạn thẳng tới dinh thự của Thị Trưởng thành phố. Bất ngờ, bạn thấy tên Vệ Sĩ đã bị bắn gục ngay trước cổng.",
            "Bên cạnh xác hắn là khẩu súng lục của chính hắn, nhưng vân tay đã bị lau sạch.",
            "Trong sân, Thị trưởng tỏ ra vô cùng kinh hãi."
        ],
        suspects: [
            { name: "Quản Gia Biệt Thự", role: "Người Làm", detail: "Khai: 'Tôi nghe tiếng súng, chạy ra thì thấy hắn nằm đó'." },
            { name: "Thị Trưởng", role: "Kẻ Bị Tình Nghi", detail: "Khai: 'Hắn định ám sát tôi, có người đã nổ súng cứu tôi'." },
            { name: "Thư Ký Thị Trưởng", role: "Bàn Tay Phải", detail: "Khai: 'Sếp tôi vô tội. Kẻ thủ ác là tên Vệ sĩ này'." }
        ],
        evidence: [
            { name: "Vết Đạn", icon: "🎯", desc: "Đường đạn bắn từ trên ban công lầu 2 cắm thẳng xuống. Quản gia không ở trên đó." },
            { name: "Súng Bắn Tỉa Giảm Thanh", icon: "🔫", desc: "Thư ký của Thị Trưởng đã tự tay thủ tiêu tên Vệ Sĩ (đồng bọn) từ lầu 2 để chặt đứt hoàn toàn manh mối hướng về phía Thị Trưởng - The Architect thực sự." },
            { name: "Đế Giày", icon: "👞", desc: "Đế giày của Thư Ký dính mạt xi măng từ ban công lầu 2 đang thi công." }
        ],
        opts: { 
            s: ["Thị Trưởng", "Thư Ký Thị Trưởng", "Quản Gia Biệt Thự"], 
            w: ["Đâm Lén Từ Phía Sau", "Đánh Độc", "Bắn Tỉa Từ Ban Công Lầu 2"], 
            l: ["Cổng Biệt Thự", "Phòng Khách Thị Trưởng", "Ban Công Lầu 2"] 
        },
        sol: {s: "Thư Ký Thị Trưởng", w: "Bắn Tỉa Từ Ban Công Lầu 2", l: "Ban Công Lầu 2"}
    },
    {
        id: 49,
        title: "Chương Cuối: Bức Màn Nhung Sụp Xuống",
        diff: "CỰC KHÓ",
        desc: "Màn kịch lật đổ vị vua của bóng tối.",
        story: [
            "Mọi bằng chứng đều chỉ đích danh Thị Trưởng chính là Trùm Cuối (The Architect) của Hội Kín Ánh Trăng.",
            "Bạn phá cửa tầng thượng tòa thị chính để bắt hắn. Tuy nhiên, Thị Trưởng đang nâng ly rượu vang cười ngạo nghễ bỗng hộc máu, ngã gục chết trước mắt bạn.",
            "Hắn đã bị chính người thân tín nhất của mình phản bội."
        ],
        suspects: [
            { name: "Thư Ký Thị Trưởng", role: "Bàn Tay Phải", detail: "Khai: 'Ông ta sợ tội nên tự sát thôi, giờ tôi sẽ tiếp quản di sản của ông ta'.<br>Thái độ: Chiến thắng." },
            { name: "Phu Nhân Thị Trưởng", role: "Vợ", detail: "Khai: 'Tôi không thể sống cùng một con quái vật nữa'." },
            { name: "Đội Trưởng Đặc Nhiệm", role: "Cảnh Sát", detail: "Khai: 'Tôi vừa đạp cửa xông vào cùng cậu mà'." }
        ],
        evidence: [
            { name: "Ly Rượu Vang", icon: "🍷", desc: "Ly rượu của Thị trưởng đã được Thư Ký hạ độc Xyanua từ trước. Hắn vắt chanh bỏ vỏ Thị trưởng để chiếm đoạt vị trí 'The Architect' mới." },
            { name: "Bản Di Chúc Quyền Lực", icon: "📜", desc: "Toàn bộ tài sản ngầm và mạng lưới Hội Kín vừa được ký chuyển giao cho Thư Ký." },
            { name: "Gương Mặt Mới Của Hội Kín", icon: "👑", desc: "Bằng việc bắt giữ Thư Ký ngay tại trận với lọ độc dược còn giấu trong tay áo, bạn đã chính thức đập tan Hội Kín Ánh Trăng vĩnh viễn." }
        ],
        opts: { 
            s: ["Thư Ký Thị Trưởng", "Đội Trưởng Đặc Nhiệm", "Phu Nhân Thị Trưởng"], 
            w: ["Súng Bắn Xuyên Kính", "Độc Trong Ly Rượu Vang", "Thuốc Nổ"], 
            l: ["Phòng Ngủ Phu Nhân", "Phòng Đợi", "Tầng Thượng Tòa Thị Chính"] 
        },
        sol: {s: "Thư Ký Thị Trưởng", w: "Độc Trong Ly Rượu Vang", l: "Tầng Thượng Tòa Thị Chính"}
    }
];
