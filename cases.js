const CASES = [
   {
        id: 0,
        title: "Vũ Điệu Cuối Cùng", 
        diff: "DỄ",
        desc: "Cái chết bí ẩn trong phòng thay đồ bị khóa kín.",
        story: [
            "Vào lúc 20:00 tối, tiếng hét thất thanh vang lên từ hậu trường nhà hát Grand. Nữ vũ công chính Bella được tìm thấy đã chết trong phòng thay đồ riêng của cô.",
            "Hiện trường là một căn phòng kín. Cửa bị khóa trái từ bên trong, và chìa khóa duy nhất nằm gọn trong túi áo của nạn nhân. Cảnh sát xác nhận cô bị siết cổ đến chết.",
            "Tuy nhiên, điều kỳ lạ là không hề tìm thấy bất kỳ sợi dây thừng hay hung khí nào tương tự trong phòng. Chỉ có những vật dụng trang điểm vương vãi.",
            "Khi kiểm tra thùng rác ở góc phòng, thám tử tìm thấy một tờ vé số bị vò nát, bên trên có ghi nguệch ngoạc con số: 1998."
        ],
        suspects: [
            {
                name: "Nhạc Công", 
                role: "Nghệ Sĩ", 
                detail: "Khai báo: 'Tôi đang ngồi thay dây đàn Cello ở sảnh chờ lúc đó'.<br>Vật dụng: Cây đàn Cello cũ kỹ, thiếu mất dây E (dây cao nhất)."
            },
            {
                name: "Đạo Diễn", 
                role: "Chỉ Đạo", 
                detail: "Khai báo: 'Tôi ở trên phòng điều khiển âm thanh suốt buổi tập'.<br>Vật dụng: Một xấp kịch bản dày và bút bi."
            },
            {
                name: "Lao Công", 
                role: "Tạp Vụ", 
                detail: "Khai báo: 'Tôi đang lau sàn hành lang bên ngoài'.<br>Vật dụng: Xô nước bẩn và cây lau nhà ẩm ướt."
            }
        ],
        evidence: [
            {
                name: "Hộp Đàn Cello", 
                icon: "🎻", 
                locked: true, 
                code: "1998", 
                desc: "Bên trong hộp đàn, giấu dưới lớp nhung lót là một cuộn dây cước trong suốt, rất mảnh nhưng cực kỳ sắc bén. Nó đã được lau chùi sạch sẽ."
            },
            {
                name: "Lỗ Thông Gió", 
                icon: "💨", 
                desc: "Một lỗ thông gió nhỏ nằm trên cao gần cửa ra vào. Nó quá nhỏ để người chui qua, nhưng đủ để luồn một sợi dây câu hoặc dây cước qua để kéo chốt cửa từ bên ngoài."
            },
            {
                name: "Vết Hằn", 
                icon: "〰️", 
                desc: "Vết hằn trên cổ nạn nhân rất mảnh và sâu, không giống vết của dây thừng hay tay người. Nó giống vết cắt của một sợi dây đàn hoặc dây cước."
            }
        ],
        opts: { 
            s: ["Nhạc Công", "Đạo Diễn", "Lao Công"], 
            w: ["Dây Đàn/Cước", "Tay Không", "Khăn Lụa"], 
            l: ["Phòng Thay Đồ", "Sân Khấu", "Phòng Điều Khiển"] 
        },
        sol: {
            s: "Nhạc Công", 
            w: "Dây Đàn/Cước", 
            l: "Phòng Thay Đồ"
        }
    },
            {
        id: 1,
        title: "Kẻ Vô Hình", 
        diff: "TRUNG BÌNH",
        desc: "Máu của hung thủ vương vãi, nhưng không ai bị thương.",
        story: [
            "Tỷ phú John bị ám sát tàn bạo tại thư viện riêng vào lúc 21:00 đêm mưa bão. Ông ấy đã chống trả quyết liệt trước khi chết.",
            "Tại hiện trường, bên cạnh thi thể nạn nhân, cảnh sát tìm thấy một vũng máu nhỏ không phải của ông John. Xét nghiệm nhanh cho thấy đó là máu nhóm A.",
            "Điều này chứng tỏ hung thủ đã bị thương trong lúc giằng co. Tuy nhiên, khi thẩm vấn 3 người có mặt trong nhà, không ai có vết thương hở nào trên cơ thể.",
            "Két sắt của ông John vẫn đóng, mật mã là năm sinh của ông ấy: 1975."
        ],
        suspects: [
            {
                name: "Đầu Bếp", 
                role: "Làm Bếp", 
                detail: "Khai báo: 'Tôi đang chặt thịt gà trong bếp'.<br>Quan sát: Ngón tay trỏ trái có băng gạc cũ, anh ta nói bị đứt tay từ sáng."
            },
            {
                name: "Quản Gia", 
                role: "Quản Lý Nhà", 
                detail: "Khai báo: 'Tôi đang pha trà ở phòng khách'.<br>Quan sát: Bộ đồ vest chỉn chu, sạch sẽ, không có dấu hiệu xô xát."
            },
            {
                name: "Vợ Nạn Nhân", 
                role: "Góa Phụ", 
                detail: "Khai báo: 'Tôi đã uống thuốc ngủ và ngủ say'.<br>Quan sát: Vẻ mặt hoảng sợ tột độ, run rẩy."
            }
        ],
        evidence: [
            {
                name: "Con Dao Bếp", 
                icon: "🔪", 
                desc: "Một con dao làm bếp được tìm thấy sau vườn. Trên cán dao có dính máu khô. Xét nghiệm cho thấy đó là máu nhóm A."
            },
            {
                name: "Hồ Sơ Y Tế", 
                icon: "📋", 
                locked: true, 
                code: "1975", 
                desc: "Hồ sơ sức khỏe định kỳ của gia đình: Nạn nhân máu O. Vợ máu B. Quản gia máu O. Đầu bếp máu A."
            },
            {
                name: "Băng Gạc", 
                icon: "🩹", 
                desc: "Tìm thấy một miếng băng gạc thấm máu tươi bị vo tròn trong thùng rác nhà bếp. Có vẻ hung thủ đã thay băng vết thương sau khi gây án."
            }
        ],
        opts: { 
            s: ["Đầu Bếp", "Quản Gia", "Vợ Nạn Nhân"], 
            w: ["Con Dao", "Súng Lục", "Thuốc Độc"], 
            l: ["Thư Viện", "Nhà Bếp", "Phòng Ngủ"] 
        },
        sol: {s: "Đầu Bếp", w: "Con Dao", l: "Thư Viện"}
    },
    {
        id: 2,
        title: "Bóng Ma Tháp Đồng Hồ", 
        diff: "KHÓ",
        desc: "Thời gian tử vong và bằng chứng ngoại phạm không khớp nhau.",
        story: [
            "Người gác tháp chuông già bị đẩy ngã từ đỉnh tháp xuống đất tử vong. Đồng hồ trên tay nạn nhân vỡ nát, dừng lại ở lúc 10:00 đêm.",
            "Tuy nhiên, cỗ máy đồng hồ khổng lồ của tháp đã bị hỏng từ chiều, nó chạy chậm hơn thực tế đúng 15 phút.",
            "Cảnh sát khoanh vùng được 3 nghi phạm, nhưng cả 3 đều có bằng chứng ngoại phạm dựa trên tiếng chuông đồng hồ điểm lúc 10 giờ.",
            "Trong túi áo nạn nhân có cuốn sổ nhật ký khóa mã: 1200."
        ],
        suspects: [
            {
                name: "Thợ Sửa", 
                role: "Kỹ Thuật", 
                detail: "Khai: 'Tôi nghe thấy chuông tháp điểm 10 tiếng khi đang ngồi ở quán rượu'.<br>Khoảng cách: Quán rượu cách tháp 10 phút đi bộ."
            },
            {
                name: "Người Vợ", 
                role: "Nội Trợ", 
                detail: "Khai: 'Tôi ở nhà nấu súp. Tôi nhìn đồng hồ treo tường đúng 10h thì nghe tiếng hét thất thanh'."
            },
            {
                name: "Thị Trưởng", 
                role: "Quan Chức", 
                detail: "Khai: 'Tôi đang họp trực tuyến. Tiếng chuông 10h ồn ào đã làm gián đoạn cuộc họp của tôi'."
            }
        ],
        evidence: [
            {
                name: "Cơ Chế Đồng Hồ", 
                icon: "⚙️", 
                desc: "Đồng hồ tháp chạy chậm 15 phút. Nghĩa là khi nó điểm 10 tiếng chuông, thời gian thực tế đã là 10:15."
            },
            {
                name: "Nhật Ký", 
                icon: "📓", 
                locked: true, 
                code: "1200", 
                desc: "Trang cuối cùng nạn nhân viết vội: 'Gã thợ sửa máy đang lén lút làm gì đó với bánh răng số 4'."
            },
            {
                name: "Bản Đồ", 
                icon: "🗺️", 
                desc: "Nếu Thợ Sửa gây án lúc 10:00 (thực tế), hắn đi bộ 10 phút đến quán rượu (10:10). Hắn ngồi đó và đến 10:15 thì chuông mới điểm 10h. Hắn đã dùng độ trễ thời gian để tạo bằng chứng ngoại phạm!"
            }
        ],
        opts: { 
            s: ["Thợ Sửa", "Người Vợ", "Thị Trưởng"], 
            w: ["Tay Không (Đẩy ngã)", "Cờ Lê", "Gậy Sắt"], 
            l: ["Đỉnh Tháp", "Quán Rượu", "Tòa Thị Chính"] 
        },
        sol: {s: "Thợ Sửa", w: "Tay Không (Đẩy ngã)", l: "Đỉnh Tháp"}
    },
    {
        id: 3,
        title: "Viên Ngọc Bị Nguyền", 
        diff: "RẤT KHÓ",
        desc: "Viên ngọc biến mất không để lại dấu chân trên sàn đầy bột.",
        story: [
            "Viên ngọc Ruby 'Mắt Rồng' trị giá triệu đô được trưng bày trên một cái bệ giữa phòng. Để chống trộm, Giám đốc đã cho rải một lớp bột mì trắng xóa khắp sàn nhà vào ban đêm.",
            "Sáng hôm sau, viên ngọc biến mất. Kỳ lạ thay, lớp bột mì trên sàn hoàn toàn nguyên vẹn, không có bất kỳ dấu chân nào đi từ cửa vào đến bệ đá.",
            "Phòng trưng bày không có cửa sổ, chỉ có một cửa chính có lính canh 24/7. Trên trần nhà, ngay phía trên bệ đá là một ô thông gió.",
            "Hệ thống laser bảo vệ có mã tắt là: 0909."
        ],
        suspects: [
            {
                name: "Kỹ Sư", 
                role: "Bảo Trì", 
                detail: "Khai: 'Tôi đang sửa hệ thống thông gió trên tầng áp mái suốt đêm qua'."
            },
            {
                name: "Ảo Thuật Gia", 
                role: "Khách VIP", 
                detail: "Khai: 'Tôi là khách tham quan VIP'.<br>Hành lý: Một vali đạo cụ ảo thuật lớn."
            },
            {
                name: "Giám Đốc", 
                role: "Quản Lý", 
                detail: "Khai: 'Tôi là người duy nhất có chìa khóa cửa chính, nhưng tôi không hề vào đó'."
            }
        ],
        evidence: [
            {
                name: "Sàn Bột Mì", 
                icon: "❄️", 
                desc: "Lớp bột phẳng lì chứng tỏ kẻ trộm không hề chạm chân xuống sàn. Hắn phải tiếp cận viên ngọc từ phía trên."
            },
            {
                name: "Hộp Dụng Cụ", 
                icon: "🧰", 
                locked: true, 
                code: "0909", 
                desc: "Trong hộp đồ nghề của Kỹ Sư, cảnh sát tìm thấy một chiếc cần câu máy thu gọn, dây cước siêu bền và một nam châm cực mạnh."
            },
            {
                name: "Ô Thông Gió", 
                icon: "🔲", 
                desc: "Các con ốc vít của ô thông gió trên trần nhà có dấu hiệu bị tháo ra và vặn lại mới đây. Kỹ Sư đã nằm từ ống thông gió và dùng cần câu để lấy viên ngọc."
            }
        ],
        opts: { 
            s: ["Kỹ Sư", "Ảo Thuật Gia", "Giám Đốc"], 
            w: ["Cần Câu & Nam Châm", "Tay Không", "Dây Thừng"], 
            l: ["Ống Thông Gió", "Cửa Chính", "Hành Lang"] 
        },
        sol: {s: "Kỹ Sư", w: "Cần Câu & Nam Châm", l: "Ống Thông Gió"}
    },
    {
        id: 4,
        title: "Dạ Tiệc Ly Biệt", 
        diff: "CỰC KHÓ",
        desc: "Đầu độc công khai trước mặt mọi người.",
        story: [
            "Trong bữa tiệc mừng thọ, ông Chủ tịch đột ngột ôm ngực và tử vong ngay tại bàn tiệc. Bác sĩ pháp y kết luận ông chết do trụy tim cấp tính bị kích thích bởi dược lực.",
            "Điều đáng nói là ông ta cùng uống chung một chai rượu vang với 4 vị khách khác. Mọi người đều bình an vô sự.",
            "Ly rượu của ông ta cũng được kiểm tra, hoàn toàn sạch sẽ, không có độc.",
            "Mã số tủ thuốc cá nhân của ông chủ tịch là: 3388."
        ],
        suspects: [
            {
                name: "Bác Sĩ Riêng", 
                role: "Y Tế", 
                detail: "Khai: 'Tôi vừa kê cho ông ấy một đơn thuốc bổ mới sáng nay'."
            },
            {
                name: "Người Hầu", 
                role: "Phục Vụ", 
                detail: "Khai: 'Tôi đã rửa ly rất kỹ bằng nước nóng và lau khô'."
            },
            {
                name: "Thư Ký", 
                role: "Trợ Lý", 
                detail: "Khai: 'Chính tay tôi đã khui rượu và rót cho mọi người, kể cả tôi cũng uống'."
            }
        ],
        evidence: [
            {
                name: "Chai Rượu", 
                icon: "🍷", 
                desc: "Rượu vang đỏ bình thường, không có độc tố. Những người khác uống không sao, chứng tỏ nguồn độc không nằm trong rượu."
            },
            {
                name: "Lọ Thuốc Bổ", 
                icon: "💊", 
                locked: true, 
                code: "3388", 
                desc: "Lọ thuốc được dán nhãn 'Vitamin' thực chất chứa Digoxin - một loại thuốc trợ tim cực mạnh nếu dùng quá liều."
            },
            {
                name: "Hồ Sơ Bệnh Án", 
                icon: "📄", 
                desc: "Chủ tịch bị bệnh tim tiềm ẩn. Rượu có tác dụng làm tăng hấp thụ Digoxin. Bác sĩ đã cố tình kê đơn thuốc này, biết rằng khi ông ta uống rượu trong tiệc, cơn đau tim sẽ đến như một cái chết tự nhiên."
            }
        ],
        opts: { 
            s: ["Bác Sĩ Riêng", "Người Hầu", "Thư Ký"], 
            w: ["Tương Tác Thuốc & Rượu", "Thuốc Chuột", "Dao Găm"], 
            l: ["Bàn Tiệc", "Nhà Bếp", "Phòng Khám"] 
        },
        sol: {s: "Bác Sĩ Riêng", w: "Tương Tác Thuốc & Rượu", l: "Bàn Tiệc"}
    },
    {
        id: 5,
        title: "Tiếng Đàn Violin", 
        diff: "TRUNG BÌNH",
        desc: "Nhạc trưởng chết ngay trên sân khấu khi đang biểu diễn.",
        story: [
            "Trong buổi hòa nhạc, khi nhạc trưởng vung đũa chỉ huy, ông đột ngột ngã gục. Nguyên nhân chết là do bị điện giật.",
            "Đũa chỉ huy của ông làm bằng gỗ, không dẫn điện.",
            "Tuy nhiên, sàn sân khấu nơi ông đứng có dấu hiệu ẩm ướt.",
            "Mã tủ đồ của nghệ sĩ Piano: 4567."
        ],
        suspects: [
            {
                name: "Nghệ Sĩ Piano", 
                role: "Đồng Nghiệp", 
                detail: "Khai: 'Tôi ghen tị với ông ấy, nhưng tôi không giết người'.<br>Hành động: Lau mồ hôi liên tục."
            },
            {
                name: "Kỹ Thuật Viên", 
                role: "Hậu Đài", 
                detail: "Khai: 'Tôi kiểm tra mic và dây điện rồi, mọi thứ an toàn'."
            },
            {
                name: "Vợ Nhạc Trưởng", 
                role: "Góa Phụ", 
                detail: "Khai: 'Tôi ngồi ở hàng ghế đầu xem chồng biểu diễn'."
            }
        ],
        evidence: [
            {
                name: "Đôi Giày Da", 
                icon: "👞", 
                desc: "Đế giày của nhạc trưởng đã bị đóng thêm đinh sắt dẫn điện. Ai đó đã tráo giày của ông trước buổi diễn."
            },
            {
                name: "Bình Nước", 
                icon: "💧", 
                locked: true, 
                code: "4567", 
                desc: "Tìm thấy trong tủ của Nghệ Sĩ Piano. Hắn đã đổ nước ra sàn chỗ bục chỉ huy để tạo mạch điện."
            },
            {
                name: "Dây Điện Trần", 
                icon: "⚡", 
                desc: "Một sợi dây điện hở được luồn khéo léo dưới thảm sàn sân khấu."
            }
        ],
        opts: { 
            s: ["Nghệ Sĩ Piano", "Kỹ Thuật Viên", "Vợ Nhạc Trưởng"], 
            w: ["Điện Giật (Giày & Nước)", "Đũa Chỉ Huy", "Súng"], 
            l: ["Sân Khấu", "Phòng Thay Đồ", "Phòng Kỹ Thuật"] 
        },
        sol: {s: "Nghệ Sĩ Piano", w: "Điện Giật (Giày & Nước)", l: "Sân Khấu"}
    },
    {
        id: 6,
        title: "Chuyến Bay Định Mệnh", 
        diff: "KHÓ",
        desc: "Án mạng trong buồng lái khóa kín trên độ cao 10.000m.",
        story: [
            "Chuyến bay 404 đang bay qua Đại Tây Dương thì Cơ trưởng đột ngột tử vong. Buồng lái được khóa chặt từ bên trong.",
            "Cơ phó, người duy nhất có chìa khóa dự phòng, khai rằng anh ta đang ngủ trong khoang nghỉ ngơi lúc sự việc xảy ra.",
            "Trên bảng điều khiển, hộp đen ghi lại âm thanh cuối cùng là tiếng Cơ phó cãi vã gay gắt với nạn nhân về nợ nần.",
            "Đặc biệt, mặt nạ dưỡng khí của Cơ trưởng đã bị cắt đứt ống dẫn một cách tinh vi."
        ],
        suspects: [
            {
                name: "Cơ Phó", 
                role: "Phi Công", 
                detail: "Khai: 'Tôi ngủ say như chết'.<br>Thái độ: Lo lắng, mồ hôi đầm đìa."
            },
            {
                name: "Tiếp Viên Trưởng", 
                role: "Tiếp Viên", 
                detail: "Khai: 'Tôi chỉ mang cà phê vào cho họ lúc đầu giờ'."
            },
            {
                name: "Vệ Sĩ", 
                role: "Hành Khách", 
                detail: "Khai: 'Tôi thấy Cơ phó đi vào buồng lái lúc 2h sáng'."
            }
        ],
        evidence: [
            {
                name: "Cốc Cà Phê", 
                icon: "☕", 
                desc: "Trong cốc còn cặn thuốc ngủ liều cao. Cơ trưởng đã bị đánh thuốc trước."
            },
            {
                name: "Hộp Đen", 
                icon: "📼", 
                locked: true, 
                code: "7700", 
                desc: "Ghi âm: 'Cậu dám làm thế à?'. Tiếng vật lộn và tiếng cắt ống thở."
            },
            {
                name: "Dao Găm", 
                icon: "🔪", 
                desc: "Tìm thấy trong túi áo khoác của Cơ Phó, dính vết cao su từ ống thở."
            }
        ],
        opts: { 
            s: ["Cơ Phó", "Tiếp Viên Trưởng", "Vệ Sĩ"], 
            w: ["Cắt Ống Khí & Thuốc Ngủ", "Súng", "Dây Thừng"], 
            l: ["Buồng Lái", "Khoang Hành Khách", "Nhà Vệ Sinh"] 
        },
        sol: {s: "Cơ Phó", w: "Cắt Ống Khí & Thuốc Ngủ", l: "Buồng Lái"}
    },
    {
        id: 7,
        title: "Bức Họa Bị Đánh Cắp", 
        diff: "TRUNG BÌNH",
        desc: "Tranh biến mất trong 60 giây tắt đèn.",
        story: [
            "Tại buổi triển lãm tranh quý, đèn đột ngột vụt tắt trong đúng 1 phút. Khi đèn sáng lại, bức tranh 'Hoàng Hôn' trị giá 5 triệu đô đã không cánh mà bay.",
            "Khung kính bảo vệ hoàn toàn nguyên vẹn, không hề bị đập vỡ hay cạy phá. Chỉ có người giữ chìa khóa mới mở được nó.",
            "Camera an ninh ghi lại được cảnh một bóng người đeo găng tay trắng thao tác rất nhanh tại vị trí bức tranh.",
            "Mã két sắt chứa chìa khóa dự phòng: 1234."
        ],
        suspects: [
            {
                name: "Họa Sĩ", 
                role: "Tác Giả", 
                detail: "Khai: 'Tôi đang đứng ngắm tác phẩm của mình'.<br>Trang phục: Áo vest có túi lớn."
            },
            {
                name: "Bảo Vệ", 
                role: "An Ninh", 
                detail: "Khai: 'Tôi đứng canh ngay cửa ra vào'.<br>Vật dụng: Chùm chìa khóa thắt lưng."
            },
            {
                name: "Nhà Sưu Tầm", 
                role: "Khách VIP", 
                detail: "Khai: 'Tôi đang uống rượu vang ở sảnh'."
            }
        ],
        evidence: [
            {
                name: "Khung Kính", 
                icon: "🖼️", 
                desc: "Không có dấu vân tay lạ. Ổ khóa được mở bằng chìa khóa chuẩn."
            },
            {
                name: "Băng Ghi Hình", 
                icon: "📹", 
                locked: true, 
                code: "1234", 
                desc: "Góc quay khuất cho thấy Bảo Vệ lén đưa chùm chìa khóa cho Họa Sĩ trước khi đèn tắt."
            },
            {
                name: "Găng Tay Trắng", 
                icon: "🧤", 
                desc: "Tìm thấy trong túi áo vest của Họa Sĩ, dính bụi sơn tranh."
            }
        ],
        opts: { 
            s: ["Họa Sĩ", "Bảo Vệ", "Nhà Sưu Tầm"], 
            w: ["Chìa Khóa (Đồng Phạm)", "Dao Rọc Giấy", "Búa"], 
            l: ["Phòng Tranh", "Sảnh Chính", "Kho"] 
        },
        sol: {s: "Họa Sĩ", w: "Chìa Khóa (Đồng Phạm)", l: "Phòng Tranh"}
    },
    {
        id: 8,
        title: "Thư Viện Ma Ám", 
        diff: "DỄ",
        desc: "Tai nạn hy hữu hay mưu sát được tính toán?",
        story: [
            "Thủ thư già được phát hiện tử vong do một giá sách khổng lồ đổ sập đè lên người.",
            "Cảnh sát ban đầu nghĩ là tai nạn do giá sách cũ mối mọt. Nhưng khi khám nghiệm, họ thấy chân giá sách có vết cưa rất gọn.",
            "Máy tính của nạn nhân đang mở một email tống tiền chưa kịp gửi.",
            "Mật khẩu máy tính là 4 số 0."
        ],
        suspects: [
            {
                name: "Nam Sinh Viên", 
                role: "Người Đọc", 
                detail: "Khai: 'Em đang tìm sách ở khu vực khác'.<br>Balo: Rất nặng và cồng kềnh."
            },
            {
                name: "Lao Công", 
                role: "Tạp Vụ", 
                detail: "Khai: 'Tôi lau dọn ở tầng 1'.<br>Thái độ: Bình thản."
            },
            {
                name: "Giáo Sư", 
                role: "Giảng Viên", 
                detail: "Khai: 'Tôi có hẹn với nạn nhân nhưng chưa kịp gặp'."
            }
        ],
        evidence: [
            {
                name: "Chân Giá Sách", 
                icon: "📚", 
                desc: "Bị cưa 2/3, chỉ cần một lực đẩy nhẹ là đổ. Mùn cưa vương vãi."
            },
            {
                name: "Email Tống Tiền", 
                icon: "💻", 
                locked: true, 
                code: "0000", 
                desc: "Nội dung: 'Tôi biết cậu đã gian lận luận án, hãy đưa 10.000$'. Người nhận: Nam Sinh Viên."
            },
            {
                name: "Cưa Cầm Tay", 
                icon: "🪚", 
                desc: "Giấu dưới đáy balo của Nam Sinh Viên, lưỡi cưa dính gỗ và sơn giá sách."
            }
        ],
        opts: { 
            s: ["Nam Sinh Viên", "Lao Công", "Giáo Sư"], 
            w: ["Cưa & Đẩy Ngã", "Súng", "Gạch"], 
            l: ["Thư Viện", "Phòng Học", "Căng Tin"] 
        },
        sol: {s: "Nam Sinh Viên", w: "Cưa & Đẩy Ngã", l: "Thư Viện"}
    },
    {
        id: 9,
        title: "Vụ Nổ Phòng Thí Nghiệm", 
        diff: "RẤT KHÓ",
        desc: "Một cái bẫy chết người bằng hóa học.",
        story: [
            "Tiến sĩ Hóa học chết cháy trong phòng thí nghiệm sau một vụ nổ lớn. Hệ thống chữa cháy tự động đã kích hoạt nhưng không cứu được ông.",
            "Nguyên nhân vụ nổ được xác định là do phản ứng giữa Natri kim loại và Nước.",
            "Tiến sĩ là người rất cẩn thận, không bao giờ để nước gần Natri. Ai đó đã gài bẫy ông.",
            "Mã két sắt chứa nhật ký nghiên cứu: 2025."
        ],
        suspects: [
            {
                name: "Trợ Lý", 
                role: "Cộng Sự", 
                detail: "Khai: 'Tôi ra ngoài mua cà phê'.<br>Động cơ: Ghen tị vì không được công nhận."
            },
            {
                name: "Đối Thủ Cạnh Tranh", 
                role: "Giáo Sư", 
                detail: "Khai: 'Tôi không hề đến gần khu vực đó'."
            },
            {
                name: "Nghiên Cứu Sinh", 
                role: "Học Trò", 
                detail: "Khai: 'Tôi đang làm bài tập ở thư viện'."
            }
        ],
        evidence: [
            {
                name: "Lọ Hóa Chất Vỡ", 
                icon: "🧪", 
                desc: "Mảnh vỡ của lọ Natri nằm vương vãi trên sàn ướt."
            },
            {
                name: "Nhật Ký", 
                icon: "📓", 
                locked: true, 
                code: "2025", 
                desc: "Ghi chép: 'Trợ lý đã lén lút thay đổi vị trí các lọ hóa chất nhiều lần'."
            },
            {
                name: "Hệ Thống Phun Nước", 
                icon: "🚿", 
                desc: "Van cảm biến khói bị can thiệp để phun nước ngay khi có khói nhẹ, kích hoạt phản ứng nổ của Natri."
            }
        ],
        opts: { 
            s: ["Trợ Lý", "Đối Thủ Cạnh Tranh", "Nghiên Cứu Sinh"], 
            w: ["Bẫy Hóa Chất (Natri + Nước)", "Bom Hẹn Giờ", "Súng"], 
            l: ["Phòng Thí Nghiệm", "Hành Lang", "Sân Trường"] 
        },
        sol: {s: "Trợ Lý", w: "Bẫy Hóa Chất (Natri + Nước)", l: "Phòng Thí Nghiệm"}
    },
    {
        id: 10,
        title: "Ngôi Mộ Cổ Ai Cập", 
        diff: "KHÓ",
        desc: "Lời nguyền của Pharaoh hay lòng tham con người?",
        story: [
            "Trưởng đoàn khảo cổ chết gục ngay bên cạnh quan tài Pharaoh vừa được mở nắp. Trên cổ không có vết thương, nhưng mặt tím tái.",
            "Mọi người đồn đại về lời nguyền chết chóc. Nhưng thám tử ngửi thấy mùi hạnh nhân đắng thoang thoảng trong không khí.",
            "Cửa hầm mộ đã bị đóng kín từ bên ngoài sau khi đoàn đi vào.",
            "Mã số khắc trên nắp quan tài: 1000."
        ],
        suspects: [
            {
                name: "Đồng Nghiệp", 
                role: "Nhà Khảo Cổ", 
                detail: "Khai: 'Tôi đang chép văn bia ở góc phòng'.<br>Biểu hiện: Đeo mặt nạ phòng độc từ trước."
            },
            {
                name: "Hướng Dẫn Viên", 
                role: "Dẫn Đường", 
                detail: "Khai: 'Tôi đứng canh cửa, không thấy ai ra vào'."
            },
            {
                name: "Kẻ Trộm Mộ", 
                role: "Tội Phạm", 
                detail: "Khai: 'Tôi chỉ đi theo để kiếm chút vàng'."
            }
        ],
        evidence: [
            {
                name: "Mùi Hạnh Nhân", 
                icon: "💨", 
                desc: "Dấu hiệu đặc trưng của khí độc Xyanua."
            },
            {
                name: "Mảnh Gốm Cổ", 
                icon: "🏺", 
                locked: true, 
                code: "1000", 
                desc: "Bên trong mảnh gốm vỡ có chứa hỗn hợp axit và muối xyanua, tạo ra khí độc khi vỡ."
            },
            {
                name: "Mặt Nạ Phòng Độc", 
                icon: "😷", 
                desc: "Chỉ có Đồng Nghiệp là người duy nhất đeo mặt nạ kỹ càng trước khi quan tài mở."
            }
        ],
        opts: { 
            s: ["Đồng Nghiệp", "Hướng Dẫn Viên", "Kẻ Trộm Mộ"], 
            w: ["Khí Độc Xyanua", "Lời Nguyền", "Dao Găm"], 
            l: ["Lăng Mộ", "Sa Mạc", "Khách Sạn"] 
        },
        sol: {s: "Đồng Nghiệp", w: "Khí Độc Xyanua", l: "Lăng Mộ"}
    },
            {
        id: 11,
        title: "Bóng Ma Trên Đỉnh Tuyết", 
        diff: "TRUNG BÌNH",
        desc: "Một cái chết lạnh lẽo trên đỉnh núi không người.",
        story: [
            "Đội cứu hộ tìm thấy thi thể một nhà leo núi nghiệp dư bị vùi lấp trong tuyết. Xung quanh thi thể chỉ có đúng một hàng dấu chân của chính nạn nhân.",
            "Khám nghiệm hiện trường cho thấy nạn nhân chết do vết thương chí mạng ở đầu, không phải do lạnh hay kiệt sức.",
            "Trong chiếc lều cách đó 500m, người bạn đồng hành đang run rẩy vì sợ hãi, nói rằng nạn nhân đã tự ý bỏ đi trong đêm bão.",
            "Chiếc ba lô của nạn nhân bị khóa bằng mã số: 5555."
        ],
        suspects: [
            {
                name: "Bạn Leo Núi", 
                role: "Đồng Hành", 
                detail: "Khai: 'Cậu ấy tự bỏ đi giữa đêm. Tôi sợ quá không dám ra ngoài'.<br>Trang bị: Đầy đủ dụng cụ leo núi chuyên nghiệp."
            },
            {
                name: "Đội Trưởng", 
                role: "Cứu Hộ", 
                detail: "Khai: 'Chúng tôi nhận được tín hiệu SOS lúc 4h sáng'."
            },
            {
                name: "Chủ Nhà Trọ", 
                role: "Kinh Doanh", 
                detail: "Khai: 'Hai người họ đã cãi nhau to tiếng về tiền bạc trước khi lên núi'."
            }
        ],
        evidence: [
            {
                name: "Giày Trượt Tuyết", 
                icon: "🎿", 
                desc: "Đế giày trượt tuyết rất rộng và phẳng. Nếu đi trên tuyết mới, nó sẽ không để lại dấu chân sâu như giày thường. Hung thủ đã dùng nó để tiếp cận và rời đi mà không để lại dấu vết."
            },
            {
                name: "Chiếc Ba Lô", 
                icon: "🎒", 
                locked: true, 
                code: "5555", 
                desc: "Bên trong thiếu mất bình dưỡng khí dự phòng - thứ quan trọng nhất để sống sót. Người bạn đồng hành đã lén lấy nó."
            },
            {
                name: "Gậy Leo Núi", 
                icon: "🦯", 
                desc: "Gậy của người bạn đồng hành có vết máu đã được lau chùi vội vàng bằng tuyết."
            }
        ],
        opts: { 
            s: ["Bạn Leo Núi", "Đội Trưởng", "Chủ Nhà Trọ"], 
            w: ["Gậy Leo Núi", "Súng Săn", "Lở Tuyết"], 
            l: ["Sườn Núi", "Lều Trại", "Trạm Nghỉ"] 
        },
        sol: {s: "Bạn Leo Núi", w: "Gậy Leo Núi", l: "Sườn Núi"}
    },
    {
        id: 12,
        title: "Mật Mã Hacker", 
        diff: "RẤT KHÓ",
        desc: "Vụ án mạng trong phòng server đóng kín.",
        story: [
            "CEO của một tập đoàn công nghệ lớn được phát hiện tử vong ngay tại bàn làm việc trong phòng máy chủ bảo mật cao.",
            "Nguyên nhân cái chết là do điện giật cực mạnh. Tuy nhiên, không có dây điện hở hay nước đổ ra sàn.",
            "Trên màn hình máy tính của nạn nhân hiện lên dòng chữ 'GAME OVER'.",
            "Hệ thống log ghi nhận quyền truy cập admin cuối cùng vào lúc 23:00. Mã đăng nhập: 1010."
        ],
        suspects: [
            {
                name: "Hacker Mũ Trắng", 
                role: "Tester", 
                detail: "Khai: 'Tôi được thuê để test bảo mật, nhưng chưa kịp làm gì'."
            },
            {
                name: "Kỹ Sư Phần Cứng", 
                role: "Bảo Trì", 
                detail: "Khai: 'Tôi đã cảnh báo về lỗi rò rỉ điện ở bàn phím từ tuần trước'."
            },
            {
                name: "Thư Ký Riêng", 
                role: "Trợ Lý", 
                detail: "Khai: 'Ông ấy gọi tôi pha cà phê lúc 22:30'."
            }
        ],
        evidence: [
            {
                name: "Bàn Phím Cơ", 
                icon: "⌨️", 
                desc: "Bàn phím kim loại đã bị đấu nối trực tiếp với nguồn điện cao thế 220V bên trong case máy tính."
            },
            {
                name: "Laptop Cá Nhân", 
                icon: "💻", 
                locked: true, 
                code: "1010", 
                desc: "Nhật ký truy cập cho thấy Kỹ Sư Phần Cứng đã đăng nhập vào hệ thống điện tòa nhà và tắt aptomat an toàn."
            },
            {
                name: "Sàn Nhà", 
                icon: "🔲", 
                desc: "Hoàn toàn khô ráo, loại trừ khả năng tai nạn do nước."
            }
        ],
        opts: { 
            s: ["Kỹ Sư Phần Cứng", "Hacker Mũ Trắng", "Thư Ký Riêng"], 
            w: ["Bàn Phím Nhiễm Điện", "Dây Cáp", "Nước"], 
            l: ["Phòng Server", "Văn Phòng CEO", "Nhà Riêng"] 
        },
        sol: {s: "Kỹ Sư Phần Cứng", w: "Bàn Phím Nhiễm Điện", l: "Phòng Server"}
    },
    {
        id: 13,
        title: "Con Tàu Ma", 
        diff: "KHÓ",
        desc: "Sự biến mất bí ẩn giữa đại dương.",
        story: [
            "Thuyền trưởng của tàu du lịch 5 sao đột nhiên biến mất trong đêm khi tàu đang ở giữa Thái Bình Dương.",
            "Camera an ninh hành lang cho thấy ông ta đi vào phòng lúc 22:00 và không bao giờ trở ra.",
            "Trong phòng thuyền trưởng, cửa sổ ban công mở toang, gió biển lùa vào lạnh buốt. Trên sàn nhà có vũng nước biển mặn chát.",
            "Két sắt cá nhân của thuyền trưởng bị khóa. Mã két: 3333."
        ],
        suspects: [
            {
                name: "Thủy Thủ Trưởng", 
                role: "Thủy Thủ", 
                detail: "Khai: 'Tôi đang trực trên đài chỉ huy'.<br>Động cơ: Mâu thuẫn về lộ trình tàu."
            },
            {
                name: "Đầu Bếp Trưởng", 
                role: "Đầu Bếp", 
                detail: "Khai: 'Tôi đang chuẩn bị thực đơn sáng dưới bếp'."
            },
            {
                name: "Hành Khách VIP", 
                role: "Khách", 
                detail: "Khai: 'Tôi đang ngắm trăng ở boong trên'."
            }
        ],
        evidence: [
            {
                name: "Lan Can Ban Công", 
                icon: "🌊", 
                desc: "Có vết trầy xước mới, như thể có vật nặng bị kéo qua."
            },
            {
                name: "Nhật Ký Hàng Hải", 
                icon: "📖", 
                locked: true, 
                code: "3333", 
                desc: "Trang cuối cùng viết về việc Thủy Thủ Trưởng đe dọa sẽ 'cho ông ta bơi cùng cá mập'."
            },
            {
                name: "Đoạn Dây Thừng", 
                icon: "🪢", 
                desc: "Một đoạn dây thừng bị cắt đứt vương lại ở góc ban công. Nó dùng để trói hoặc kéo nạn nhân."
            }
        ],
        opts: { 
            s: ["Thủy Thủ Trưởng", "Đầu Bếp Trưởng", "Hành Khách VIP"], 
            w: ["Đẩy Xuống Biển", "Dao Găm", "Súng Lục"], 
            l: ["Phòng Thuyền Trưởng", "Boong Tàu", "Nhà Bếp"] 
        },
        sol: {s: "Thủy Thủ Trưởng", w: "Đẩy Xuống Biển", l: "Phòng Thuyền Trưởng"}
    },
    {
        id: 14,
        title: "Cú Swing Tử Thần", 
        diff: "DỄ", 
        desc: "Tai nạn thể thao hay mưu sát có chủ đích?",
        story: [
            "Một đại gia bất động sản gục chết ngay trên sân golf hố số 9. Nguyên nhân là chấn thương sọ não nghiêm trọng do vật cứng đập vào.",
            "Thi thể nằm sấp trên cỏ, bên cạnh là quả bóng golf của ông ta.",
            "Ba người chơi cùng nhóm đều khẳng định họ đứng ở xa khi nạn nhân phát bóng.",
            "Mã khóa túi gậy golf của nạn nhân: 8888."
        ],
        suspects: [
            {
                name: "Caddie", 
                role: "Nhặt Bóng", 
                detail: "Khai: 'Tôi đang đi tìm bóng ở bụi cây phía trước'."
            },
            {
                name: "Đối Tác", 
                role: "Doanh Nhân", 
                detail: "Khai: 'Tôi đang đứng ở khu phát bóng, cách xa ông ấy 200m'."
            },
            {
                name: "Vợ Nạn Nhân", 
                role: "Vợ", 
                detail: "Khai: 'Tôi ngồi chờ trên xe điện, uống nước'."
            }
        ],
        evidence: [
            {
                name: "Gậy Sắt Số 7", 
                icon: "⛳", 
                desc: "Cây gậy của Đối Tác bị móp méo bất thường ở phần đầu gậy. Có vết máu nhỏ đã được lau sơ qua."
            },
            {
                name: "Điện Thoại", 
                icon: "📱", 
                locked: true, 
                code: "8888", 
                desc: "Tin nhắn đe dọa từ Đối Tác gửi nạn nhân: 'Nếu mày không ký hợp đồng, tao sẽ đập nát đầu mày'."
            },
            {
                name: "Bóng Golf", 
                icon: "⚪", 
                desc: "Nằm cách xác 2 mét, sạch sẽ, không dính máu. Chứng tỏ nạn nhân bị đánh chứ không phải bị bóng bay trúng."
            }
        ],
        opts: { 
            s: ["Đối Tác", "Caddie", "Vợ Nạn Nhân"], 
            w: ["Gậy Golf", "Bóng Golf Bay Trúng", "Hòn Đá"], 
            l: ["Sân Golf (Hố 9)", "Xe Điện", "Nhà Câu Lạc Bộ"] 
        },
        sol: {s: "Đối Tác", w: "Gậy Golf", l: "Sân Golf (Hố 9)"}
    },
    {
        id: 15,
        title: "Bí Ẩn Studio Ảnh", 
        diff: "TRUNG BÌNH",
        desc: "Cái chết đẹp như một bức tranh.",
        story: [
            "Người mẫu ảnh nổi tiếng Lana đột tử trong buổi chụp hình chủ đề 'Nữ thần băng giá'. Cô chết trong tư thế ngồi trên ngai vàng.",
            "Phòng chụp được thiết kế kín mít, sử dụng rất nhiều đá khô (CO2 rắn) để tạo hiệu ứng khói mờ ảo.",
            "Khám nghiệm cho thấy nồng độ Oxy trong máu nạn nhân cực thấp.",
            "Mã khóa máy ảnh của nhiếp ảnh gia: 2468."
        ],
        suspects: [
            {
                name: "Nhiếp Ảnh Gia", 
                role: "Chụp Ảnh", 
                detail: "Khai: 'Tôi chỉ tập trung vào ống kính, không để ý xung quanh'."
            },
            {
                name: "Trợ Lý Ánh Sáng", 
                role: "Hậu Cần", 
                detail: "Khai: 'Tôi ra ngoài lấy thêm hắt sáng'."
            },
            {
                name: "Stylist", 
                role: "Tạo Mẫu", 
                detail: "Khai: 'Tôi là người chuẩn bị bối cảnh đá khô'."
            }
        ],
        evidence: [
            {
                name: "Không Khí", 
                icon: "☁️", 
                desc: "Nồng độ khí CO2 trong phòng cao gấp 20 lần mức an toàn do lượng đá khô quá lớn được thả vào nước nóng."
            },
            {
                name: "Thẻ Nhớ Máy Ảnh", 
                icon: "📷", 
                locked: true, 
                code: "2468", 
                desc: "Những bức ảnh cuối cùng chụp được cảnh Stylist lén đổ thêm một lượng lớn đá khô vào bồn ngay sát chân nạn nhân."
            },
            {
                name: "Cửa Thoát Hiểm", 
                icon: "🚪", 
                desc: "Bị chặn lại bởi các thùng thiết bị, khiến không khí không thể lưu thông."
            }
        ],
        opts: { 
            s: ["Stylist", "Nhiếp Ảnh Gia", "Trợ Lý Ánh Sáng"], 
            w: ["Ngạt Khí (Đá Khô CO2)", "Dây Siết", "Thuốc Độc"], 
            l: ["Studio Chụp Ảnh", "Phòng Thay Đồ", "Sảnh Chờ"] 
        },
        sol: {s: "Stylist", w: "Ngạt Khí (Đá Khô CO2)", l: "Studio Chụp Ảnh"}
    },
    {
        id: 16,
        title: "Bóng Tối Đồn Cảnh Sát", 
        diff: "CỰC KHÓ",
        desc: "Chết trong buồng giam được canh gác 24/7.",
        story: [
            "Một nhân chứng quan trọng được phát hiện treo cổ trong buồng giam biệt lập. Cảnh sát trưởng kết luận là tự sát.",
            "Tuy nhiên, nút thắt dây thừng quá chuyên nghiệp so với khả năng của nạn nhân. Và camera giám sát buồng giam đã bị tắt đúng 5 phút.",
            "Chỉ có người có quyền cao nhất mới tắt được camera và mở cửa buồng giam.",
            "Mã đăng nhập hệ thống camera: 9900."
        ],
        suspects: [
            {
                name: "CS Trực Ban", 
                role: "Lính Gác", 
                detail: "Khai: 'Tôi đi vệ sinh lúc đó, khi quay lại thì camera đã tắt'."
            },
            {
                name: "Cảnh Sát Trưởng", 
                role: "Chỉ Huy", 
                detail: "Khai: 'Tôi đang họp với cấp trên qua điện thoại trong phòng làm việc'."
            },
            {
                name: "Lao Công", 
                role: "Tạp Vụ", 
                detail: "Khai: 'Tôi đang lau sàn ở sảnh ngoài'."
            }
        ],
        evidence: [
            {
                name: "Dây Giày", 
                icon: "👟", 
                desc: "Nạn nhân bị treo cổ bằng dây giày, nhưng giày của nạn nhân là loại giày lười không dây. Dây này được mang từ ngoài vào."
            },
            {
                name: "Nhật Ký Hệ Thống", 
                icon: "💻", 
                locked: true, 
                code: "9900", 
                desc: "Tài khoản Admin của Cảnh Sát Trưởng đã đăng nhập để xóa dữ liệu camera trong 5 phút đó."
            },
            {
                name: "Chùm Chìa Khóa", 
                icon: "🗝️", 
                desc: "Chìa khóa vạn năng chỉ có Cảnh Sát Trưởng giữ."
            }
        ],
        opts: { 
            s: ["Cảnh Sát Trưởng", "CS Trực Ban", "Lao Công"], 
            w: ["Dàn Dựng Treo Cổ", "Súng Lục", "Thuốc Độc"], 
            l: ["Buồng Giam", "Phòng Trực Ban", "Phòng Cảnh Sát Trưởng"] 
        },
        sol: {s: "Cảnh Sát Trưởng", w: "Dàn Dựng Treo Cổ", l: "Buồng Giam"}
    },
    {
        id: 17,
        title: "Lính Cứu Hỏa Phản Bội", 
        diff: "TRUNG BÌNH",
        desc: "Chết cháy vì bình dưỡng khí rỗng.",
        story: [
            "Đội trưởng đội cứu hỏa hy sinh trong đám cháy một nhà kho. Nguyên nhân là ngạt khói do hết dưỡng khí.",
            "Điều lạ lùng là bình khí của ông mới được thay trước khi vào đám cháy 5 phút.",
            "Van bình khí không bị hỏng, nhưng bên trong hoàn toàn trống rỗng.",
            "Mã tủ thiết bị cứu hỏa: 1144."
        ],
        suspects: [
            {
                name: "Lính Mới", 
                role: "Tân Binh", 
                detail: "Khai: 'Tôi là người thay bình khí cho Đội trưởng. Tôi chắc chắn nó đầy'."
            },
            {
                name: "Chủ Nhà Kho", 
                role: "Nạn Nhân", 
                detail: "Khai: 'Tôi chạy thoát ra ngoài ngay khi thấy lửa'."
            },
            {
                name: "Đội Phó", 
                role: "Chỉ Huy", 
                detail: "Khai: 'Tôi chỉ huy bên ngoài, không vào trong'."
            }
        ],
        evidence: [
            {
                name: "Bình Khí", 
                icon: "🧯", 
                locked: true, 
                code: "1144", 
                desc: "Bình khí này có một lỗ thủng nhỏ xíu ở đáy đã được hàn lại sơ sài, khí đã rò rỉ hết từ trước. Lính Mới cố tình đưa bình hỏng này."
            },
            {
                name: "Bật Lửa Zippo", 
                icon: "🔥", 
                desc: "Tìm thấy tại điểm khởi phát cháy, khắc tên Chủ Nhà Kho (đây là vụ phóng hỏa trục lợi bảo hiểm)."
            },
            {
                name: "Tài Khoản Bank", 
                icon: "💳", 
                desc: "Lính Mới vừa nhận một khoản tiền lớn từ Chủ Nhà Kho."
            }
        ],
        opts: { 
            s: ["Lính Mới", "Chủ Nhà Kho", "Đội Phó"], 
            w: ["Bình Khí Hỏng (Ngạt Khói)", "Đẩy Vào Lửa", "Sập Tường"], 
            l: ["Hiện Trường Đám Cháy", "Xe Cứu Hỏa", "Trạm Cứu Hỏa"] 
        },
        sol: {s: "Lính Mới", w: "Bình Khí Hỏng (Ngạt Khói)", l: "Hiện Trường Đám Cháy"}
    },
    {
        id: 18,
        title: "Giàn Giáo Tử Thần", 
        diff: "KHÓ",
        desc: "Tai nạn lao động hay âm mưu được tính toán?",
        story: [
            "Kiến trúc sư trưởng rơi từ tầng 10 của tòa nhà đang xây dựng xuống đất tử vong. Giàn giáo nơi ông đứng bị sập một góc.",
            "Các công nhân khai rằng giàn giáo mới được lắp đặt và kiểm tra kỹ lưỡng.",
            "Tại vị trí sập, các chốt khóa giàn giáo đã biến mất.",
            "Mã hộp đựng bản vẽ: 2233."
        ],
        suspects: [
            {
                name: "Chủ Thầu", 
                role: "Quản Lý", 
                detail: "Khai: 'Chúng tôi đang tranh cãi gay gắt về chất lượng vật liệu'."
            },
            {
                name: "Thợ Xây", 
                role: "Công Nhân", 
                detail: "Khai: 'Tôi là người lắp giàn giáo đó, tôi thề tôi đã siết ốc kỹ'."
            },
            {
                name: "Thư Ký Dự Án", 
                role: "Trợ Lý", 
                detail: "Khai: 'Tôi đưa mũ bảo hộ cho ông ấy rồi đi xuống'."
            }
        ],
        evidence: [
            {
                name: "Mũ Bảo Hộ", 
                icon: "⛑️", 
                desc: "Vỡ nát do va đập."
            },
            {
                name: "Cờ Lê Đa Năng", 
                icon: "🔧", 
                locked: true, 
                code: "2233", 
                desc: "Tìm thấy trong cốp xe của Chủ Thầu. Trên cờ lê có dính mỡ bò trùng loại với mỡ trên giàn giáo."
            },
            {
                name: "Chốt Khóa", 
                icon: "🔩", 
                desc: "Được tìm thấy trong túi quần của Chủ Thầu. Hắn đã tháo chốt khi Kiến trúc sư không để ý."
            }
        ],
        opts: { 
            s: ["Chủ Thầu", "Thợ Xây", "Thư Ký Dự Án"], 
            w: ["Tháo Chốt Giàn Giáo", "Đẩy Ngã", "Gạch Rơi"], 
            l: ["Công Trường Xây Dựng", "Văn Phòng", "Tầng 10"] 
        },
        sol: {s: "Chủ Thầu", w: "Tháo Chốt Giàn Giáo", l: "Công Trường Xây Dựng"}
    },
    {
        id: 19,
        title: "Xe Bom", 
        diff: "KHÓ",
        desc: "Vụ nổ rung chuyển bãi đỗ xe.",
        story: [
            "Chiếc xe hơi của một nhà báo điều tra phát nổ ngay khi anh ta vừa vặn chìa khóa khởi động. Nạn nhân tử vong tại chỗ.",
            "Chuyên gia bom mìn xác định bom được gài dưới gầm xe, kích hoạt bằng hệ thống đề nổ.",
            "Nhà báo này đang nắm giữ bằng chứng tham nhũng của một quan chức lớn.",
            "Mã camera bãi xe: 4455."
        ],
        suspects: [
            {
                name: "Vệ Sĩ", 
                role: "Bảo Vệ", 
                detail: "Khai: 'Tôi được lệnh theo dõi anh ta, nhưng tôi không giết người'."
            },
            {
                name: "Thợ Rửa Xe", 
                role: "Nhân Viên", 
                detail: "Khai: 'Sáng nay anh ấy có mang xe đến rửa'."
            },
            {
                name: "Chính Trị Gia", 
                role: "Quan Chức", 
                detail: "Khai: 'Tôi không biết gì về vụ này'."
            }
        ],
        evidence: [
            {
                name: "Mảnh Kíp Nổ", 
                icon: "💣", 
                desc: "Loại kíp nổ quân dụng C4, không bán ngoài thị trường."
            },
            {
                name: "Băng Ghi Hình", 
                icon: "📹", 
                locked: true, 
                code: "4455", 
                desc: "Ghi lại cảnh Vệ Sĩ lẻn xuống gầm xe trong lúc xe đang được rửa (Thợ rửa xe không để ý)."
            },
            {
                name: "Máy Ghi Âm", 
                icon: "🎙️", 
                desc: "Trong túi nạn nhân, ghi lại cuộc gọi đe dọa từ Vệ Sĩ."
            }
        ],
        opts: { 
            s: ["Vệ Sĩ", "Chính Trị Gia", "Thợ Rửa Xe"], 
            w: ["Bom Gài Gầm Xe", "Súng Tỉa", "Đâm Xe"], 
            l: ["Bãi Đỗ Xe", "Tòa Soạn Báo", "Gara Rửa Xe"] 
        },
        sol: {s: "Vệ Sĩ", w: "Bom Gài Gầm Xe", l: "Bãi Đỗ Xe"}
    },
    {
        id: 20,
        title: "Phấn Trắng Tử Thần", 
        diff: "TRUNG BÌNH",
        desc: "Vụ ám sát ngay trên bục giảng.",
        story: [
            "Thầy giáo dạy Hóa ngã gục ngay trên bục giảng khi đang viết bài. Ông chết do hít phải một lượng lớn bụi phấn độc.",
            "Hộp phấn màu trắng ông đang dùng đã bị tẩm chất độc Cyanua dạng bột.",
            "Chỉ có giáo viên và lao công mới có chìa khóa tủ đựng phấn.",
            "Mã tủ văn phòng phẩm: 6677."
        ],
        suspects: [
            {
                name: "Phó Hiệu Trưởng", 
                role: "Đồng Nghiệp", 
                detail: "Khai: 'Tôi muốn lên chức Hiệu trưởng, nhưng ông ấy là đối thủ lớn nhất'.<br>Thái độ: Giả vờ đau buồn."
            },
            {
                name: "Học Sinh Cá Biệt", 
                role: "Học Trò", 
                detail: "Khai: 'Em ghét ổng vì hay mắng em, nhưng em không giết người'."
            },
            {
                name: "Lao Công", 
                role: "Tạp Vụ", 
                detail: "Khai: 'Sáng nào tôi cũng thay phấn mới cho các lớp'."
            }
        ],
        evidence: [
            {
                name: "Viên Phấn Độc", 
                icon: "🖍️", 
                locked: true, 
                code: "6677", 
                desc: "Viên phấn này nặng hơn bình thường do đã bị ngâm tẩm hóa chất. Nó được lấy từ ngăn tủ riêng của Thầy Phó Hiệu Trưởng."
            },
            {
                name: "Khăn Lau Bảng", 
                icon: "🧽", 
                desc: "Bình thường, không có độc."
            },
            {
                name: "Găng Tay Cao Su", 
                icon: "🧤", 
                desc: "Tìm thấy trong cặp của Phó Hiệu Trưởng, dính bột phấn trắng."
            }
        ],
        opts: { 
            s: ["Phó Hiệu Trưởng", "Học Sinh Cá Biệt", "Lao Công"], 
            w: ["Phấn Tẩm Độc Cyanua", "Nước Uống Có Độc", "Dao"], 
            l: ["Lớp Học", "Phòng Giáo Viên", "Sân Trường"] 
        },
        sol: {s: "Phó Hiệu Trưởng", w: "Phấn Tẩm Độc Cyanua", l: "Lớp Học"}
    },
           
           {
        id: 21,
        title: "Tiệm Bánh Nửa Đêm", 
        diff: "TRUNG BÌNH",
        desc: "Cái chết ngọt ngào trong kho nguyên liệu.",
        story: [
            "Chủ tiệm bánh danh tiếng được tìm thấy đã chết trong kho bột mì khóa kín. Nạn nhân bị vùi lấp trong đống bột trắng xóa, nguyên nhân tử vong là ngạt thở.",
            "Cửa kho chỉ có thể khóa từ bên ngoài. Tuy nhiên, chìa khóa duy nhất lại nằm trong túi tạp dề của nạn nhân.",
            "Hệ thống camera an ninh đã bị ai đó bôi kem che kín ống kính vào đúng thời điểm xảy ra vụ án (23:00).",
            "Két tiền trống rỗng, mã số két là ngày sinh con gái chủ tiệm: 2468."
        ],
        suspects: [
            {
                name: "Phụ Bếp", 
                role: "Thợ Bánh", 
                detail: "Khai: 'Tôi đang nướng mẻ bánh cuối cùng'.<br>Biểu hiện: Tay run rẩy, dính đầy bột."
            },
            {
                name: "Vợ Nạn Nhân", 
                role: "Thu Ngân", 
                detail: "Khai: 'Tôi đang tính sổ sách ở quầy thu ngân'.<br>Động cơ: Gần đây hai vợ chồng hay cãi nhau về tiền bạc."
            },
            {
                name: "Đối Thủ", 
                role: "Cạnh Tranh", 
                detail: "Khai: 'Tôi chỉ đi ngang qua mua bánh mì thôi'."
            }
        ],
        evidence: [
            {
                name: "Bao Bột Mì", 
                icon: "🥡", 
                desc: "Bị rạch toang bằng một vật sắc nhọn, không phải tự nhiên bục vỡ."
            },
            {
                name: "Chìa Khóa Kho", 
                icon: "🗝️", 
                locked: true, 
                code: "2468", 
                desc: "Chìa khóa nằm trong túi nạn nhân, nhưng Phụ Bếp có một bản sao bí mật giấu dưới đế giày."
            },
            {
                name: "Camera Bị Che", 
                icon: "📹", 
                desc: "Loại kem dùng để che camera là kem bơ đặc biệt, chỉ có Phụ Bếp mới biết công thức pha chế."
            }
        ],
        opts: { 
            s: ["Phụ Bếp", "Vợ Nạn Nhân", "Đối Thủ"], 
            w: ["Đẩy Ngã & Đổ Bột (Ngạt Thở)", "Dao Làm Bánh", "Súng"], 
            l: ["Kho Bột Mì", "Khu Vực Nướng", "Quầy Thu Ngân"] 
        },
        sol: {s: "Phụ Bếp", w: "Đẩy Ngã & Đổ Bột (Ngạt Thở)", l: "Kho Bột Mì"}
    },
    {
        id: 22,
        title: "Thẩm Mỹ Viện Tử Thần", 
        diff: "KHÓ",
        desc: "Ca phẫu thuật làm đẹp biến thành thảm kịch.",
        story: [
            "Một nữ đại gia bất động sản đột ngột tử vong ngay trên bàn mổ trong khi đang thực hiện phẫu thuật căng da mặt.",
            "Bác sĩ phẫu thuật khẳng định mọi quy trình đều chuẩn xác. Tuy nhiên, giám định pháp y phát hiện nạn nhân chết do thiếu oxy não trầm trọng.",
            "Hệ thống cung cấp khí gây mê và oxy dường như đã bị can thiệp.",
            "Mã tủ hồ sơ bệnh án: 1111."
        ],
        suspects: [
            {
                name: "Bác Sĩ Trưởng", 
                role: "Phẫu Thuật", 
                detail: "Khai: 'Tôi đã phẫu thuật cho hàng ngàn người, không thể có sai sót'.<br>Hoàn cảnh: Đang nợ nần do cờ bạc."
            },
            {
                name: "Y Tá Phụ Tá", 
                role: "Trợ Lý", 
                detail: "Khai: 'Tôi là người chuẩn bị các bình khí trước ca mổ'."
            },
            {
                name: "Chồng Nạn Nhân", 
                role: "Người Nhà", 
                detail: "Khai: 'Tôi ngồi chờ bên ngoài suốt 4 tiếng đồng hồ'."
            }
        ],
        evidence: [
            {
                name: "Bình Khí Oxy", 
                icon: "💨", 
                desc: "Bình dán nhãn Oxy nhưng bên trong lại chứa khí Nitơ nguyên chất (gây ngạt thở tức thì)."
            },
            {
                name: "Sổ Tay Cá Nhân", 
                icon: "📒", 
                locked: true, 
                code: "1111", 
                desc: "Ghi chép của Y Tá cho thấy cô ta đang bị xã hội đen đe dọa đòi nợ thay cho người yêu."
            },
            {
                name: "Hợp Đồng BH", 
                icon: "📄", 
                desc: "Chồng nạn nhân vừa mua gói bảo hiểm nhân thọ trị giá cực lớn cho vợ tuần trước."
            }
        ],
        opts: { 
            s: ["Y Tá Phụ Tá", "Bác Sĩ Trưởng", "Chồng Nạn Nhân"], 
            w: ["Tráo Bình Khí (Gây Ngạt)", "Dao Mổ", "Thuốc Mê Quá Liều"], 
            l: ["Phòng Phẫu Thuật", "Phòng Hồi Sức", "Sảnh Chờ"] 
        },
        sol: {s: "Y Tá Phụ Tá", w: "Tráo Bình Khí (Gây Ngạt)", l: "Phòng Phẫu Thuật"}
    },
    {
        id: 23,
        title: "Bí Mật Dưới Luống Hoa", 
        diff: "RẤT KHÓ",
        desc: "Người làm vườn hay kẻ sát nhân giấu mặt?",
        story: [
            "Cảnh sát tìm thấy thi thể ông chủ biệt thự bị chôn sơ sài dưới luống hoa hồng mới trồng. Nạn nhân chết do chấn thương sọ não bởi vật cứng.",
            "Đất ở khu vực này vừa được xới lên sáng nay. Người làm vườn thề rằng ông ta chỉ trồng hoa theo lệnh.",
            "Trong nhà không có dấu hiệu đột nhập, nhưng có vết đất bẩn kéo dài từ cửa sau vào phòng khách.",
            "Mã khóa nhà kho dụng cụ: 7890."
        ],
        suspects: [
            {
                name: "Quản Gia", 
                role: "Quản Lý", 
                detail: "Khai: 'Tôi đi chợ từ sớm và mới về'.<br>Thái độ: Rất bình tĩnh, giày sạch bóng."
            },
            {
                name: "Người Làm Vườn", 
                role: "Nhân Viên", 
                detail: "Khai: 'Tôi đang tỉa cây ở sân trước cả buổi sáng'."
            },
            {
                name: "Con Trai", 
                role: "Thừa Kế", 
                detail: "Khai: 'Tôi ngủ trong phòng đến trưa mới dậy'."
            }
        ],
        evidence: [
            {
                name: "Cái Xẻng", 
                icon: "⛏️", 
                desc: "Lưỡi xẻng dính đất và vết máu đã khô. Đây chính là hung khí."
            },
            {
                name: "Đôi Găng Tay", 
                icon: "🧤", 
                locked: true, 
                code: "7890", 
                desc: "Tìm thấy đôi găng tay làm vườn dính máu được giấu kỹ dưới gầm giường của Quản Gia."
            },
            {
                name: "Vết Đất", 
                icon: "👣", 
                desc: "Vết đất dẫn từ vườn vào nhà, nhưng lại dừng trước cửa phòng Quản Gia, không phải phòng con trai hay cửa chính."
            }
        ],
        opts: { 
            s: ["Quản Gia", "Người Làm Vườn", "Con Trai"], 
            w: ["Xẻng", "Cuốc Chim", "Hòn Đá"], 
            l: ["Vườn Hoa", "Phòng Khách", "Nhà Kho"] 
        },
        sol: {s: "Quản Gia", w: "Xẻng", l: "Vườn Hoa"}
    },
    {
        id: 24,
        title: "Cái Chết Của Hacker", 
        diff: "CỰC KHÓ",
        desc: "Một vụ ám sát công nghệ cao không dấu vết.",
        story: [
            "Một hacker nổi tiếng được phát hiện tử vong tại bàn làm việc. Tư thế chết cứng đơ, tay dính chặt vào bàn phím máy tính.",
            "Nguyên nhân tử vong là điện giật cường độ cao. Tuy nhiên, dây nguồn máy tính vẫn ổn định, không có nước đổ ra sàn.",
            "Hacker này đang tống tiền một tập đoàn lớn về lỗ hổng bảo mật.",
            "Mã đăng nhập máy tính nạn nhân: 1010."
        ],
        suspects: [
            {
                name: "Kỹ Sư Điện", 
                role: "Thợ Sửa", 
                detail: "Khai: 'Tôi đến sửa đường dây internet theo yêu cầu lúc 9h sáng'."
            },
            {
                name: "Bạn Gái", 
                role: "Người Yêu", 
                detail: "Khai: 'Anh ấy bảo đang bận việc lớn, đừng làm phiền'."
            },
            {
                name: "Chủ Nợ", 
                role: "Giang Hồ", 
                detail: "Khai: 'Nó nợ tôi tiền, tôi chỉ đến đòi nợ chứ không giết nó'."
            }
        ],
        evidence: [
            {
                name: "Bàn Phím Cơ", 
                icon: "⌨️", 
                desc: "Vỏ bàn phím bằng kim loại đã bị đấu nối trực tiếp với dòng điện 220V từ bên trong case máy tính."
            },
            {
                name: "Cầu Dao Tổng", 
                icon: "⚡", 
                locked: true, 
                code: "1010", 
                desc: "Nhật ký SmartHome cho thấy hệ thống điện đã bị can thiệp kỹ thuật. Dấu vân tay của Kỹ Sư Điện in trên cầu dao."
            },
            {
                name: "Cốc Nước", 
                icon: "💧", 
                desc: "Nước trong cốc vẫn đầy, loại trừ khả năng nạn nhân làm đổ nước gây chập điện."
            }
        ],
        opts: { 
            s: ["Kỹ Sư Điện", "Bạn Gái", "Chủ Nợ"], 
            w: ["Bàn Phím Nhiễm Điện", "Dây Cáp", "Nước"], 
            l: ["Phòng Làm Việc", "Nhà Tắm", "Cửa Chính"] 
        },
        sol: {s: "Kỹ Sư Điện", w: "Bàn Phím Nhiễm Điện", l: "Phòng Làm Việc"}
    },
    {
        id: 25,
        title: "Thư Tuyệt Mệnh Giả", 
        diff: "TRUNG BÌNH",
        desc: "Tự sát hay bị dàn dựng hiện trường?",
        story: [
            "Người chồng được tìm thấy trong tư thế treo cổ tại phòng ngủ. Bên cạnh là một lá thư tuyệt mệnh được đánh máy, nói về áp lực công việc.",
            "Vợ nạn nhân là người phát hiện đầu tiên và gọi cảnh sát. Cô ta khóc lóc thảm thiết.",
            "Tuy nhiên, cảnh sát thấy chiếc ghế dùng để đứng lên treo cổ nằm quá xa so với vị trí nạn nhân.",
            "Mã mở khóa laptop của nạn nhân: 2023."
        ],
        suspects: [
            {
                name: "Người Vợ", 
                role: "Góa Phụ", 
                detail: "Khai: 'Anh ấy bị trầm cảm cả tháng nay rồi'.<br>Động cơ: Ngoại tình và muốn chiếm tài sản."
            },
            {
                name: "Đồng Nghiệp", 
                role: "Bạn Bè", 
                detail: "Khai: 'Hôm qua anh ấy vẫn vui vẻ bàn về dự án mới'."
            },
            {
                name: "Em Trai", 
                role: "Người Thân", 
                detail: "Khai: 'Anh tôi không bao giờ tự sát, anh ấy rất yêu đời'."
            }
        ],
        evidence: [
            {
                name: "Chiếc Ghế", 
                icon: "🪑", 
                desc: "Chiếc ghế bị đổ nằm cách chân nạn nhân 2 mét. Không thể nào tự đá ghế xa đến thế."
            },
            {
                name: "File Thư", 
                icon: "💻", 
                locked: true, 
                code: "2023", 
                desc: "Kiểm tra metadata cho thấy file này được tạo ra và in SAU khi nạn nhân đã chết (dựa trên giờ tử vong pháp y)."
            },
            {
                name: "Dây Thừng", 
                icon: "➰", 
                desc: "Nút thắt dây là loại nút thắt hàng hải phức tạp, chồng nạn nhân không biết thắt, nhưng người tình của vợ là thủy thủ."
            }
        ],
        opts: { 
            s: ["Người Vợ", "Đồng Nghiệp", "Em Trai"], 
            w: ["Dàn Dựng Treo Cổ", "Thuốc Độc", "Súng"], 
            l: ["Phòng Ngủ", "Phòng Khách", "Ban Công"] 
        },
        sol: {s: "Người Vợ", w: "Dàn Dựng Treo Cổ", l: "Phòng Ngủ"}
    },
    {
        id: 26,
        title: "Trộm Kim Cương", 
        diff: "KHÓ",
        desc: "Viên kim cương 'Ngôi Sao Xanh' biến mất không dấu vết.",
        story: [
            "Tại cửa hàng trang sức cao cấp, viên kim cương quý nhất đã biến mất khỏi tủ kính trưng bày. Tủ kính không hề bị đập vỡ, cũng không có dấu hiệu cạy khóa.",
            "Chỉ có 3 người giữ chìa khóa của tủ kính này: Quản Lý, Bảo Vệ Trưởng và Chủ Cửa Hàng.",
            "Hệ thống báo động laser không hề reo lên trong suốt đêm qua.",
            "Mã truy cập phòng camera an ninh: 5555."
        ],
        suspects: [
            {
                name: "Quản Lý", 
                role: "Quản Lý", 
                detail: "Khai: 'Tôi giữ chìa khóa trong két sắt văn phòng, không ai biết mã'."
            },
            {
                name: "Bảo Vệ Trưởng", 
                role: "An Ninh", 
                detail: "Khai: 'Tôi trực cả đêm ở cửa chính, không thấy ai vào'."
            },
            {
                name: "Lao Công", 
                role: "Tạp Vụ", 
                detail: "Khai: 'Tôi nhặt được một vật lạ trong thùng rác sáng nay'."
            }
        ],
        evidence: [
            {
                name: "Tủ Kính", 
                icon: "💎", 
                desc: "Mặt kính bị cắt một lỗ tròn hoàn hảo bằng dao cắt kính chuyên dụng, sau đó được dán lại khéo léo bằng băng dính trong."
            },
            {
                name: "Băng Ghi Hình", 
                icon: "📹", 
                locked: true, 
                code: "5555", 
                desc: "Dữ liệu camera cho thấy Quản Lý đã lén tắt hệ thống báo động laser trong 5 phút vào lúc 2h sáng."
            },
            {
                name: "Găng Tay Đen", 
                icon: "🧤", 
                desc: "Lao công tìm thấy đôi găng tay trong thùng rác, bên trong có dính một sợi tóc của Quản Lý."
            }
        ],
        opts: { 
            s: ["Quản Lý", "Bảo Vệ Trưởng", "Lao Công"], 
            w: ["Dao Cắt Kính & Chìa Khóa", "Búa Tạ", "Súng"], 
            l: ["Cửa Hàng", "Kho Hàng", "Phòng Camera"] 
        },
        sol: {s: "Quản Lý", w: "Dao Cắt Kính & Chìa Khóa", l: "Cửa Hàng"}
    },
    {
        id: 27,
        title: "Bê Tông Cốt Thép", 
        diff: "KHÓ",
        desc: "Một xác chết được tìm thấy bên trong khối bê tông đông cứng.",
        story: [
            "Tại bến cảng, một thùng phi trôi dạt vào bờ bốc mùi hôi thối. Khi mở ra, bên trong là một khối bê tông đã đông cứng, chứa xác của một gã buôn lậu mất tích.",
            "Nạn nhân bị chôn sống, ngạt thở trước khi bê tông khô hoàn toàn. Hiện trường không có dấu vết vật lộn.",
            "Một tờ hóa đơn bị vò nát, thấm nước biển được tìm thấy trong túi áo nạn nhân.",
            "Mã số lô hàng trên thùng phi: 9000."
        ],
        suspects: [
            {
                name: "Ông Trùm", 
                role: "Giang Hồ", 
                detail: "Khai: 'Hắn nợ tôi tiền, nhưng tôi cần hắn sống để trả nợ'.<br>Thái độ: Lạnh lùng."
            },
            {
                name: "Tài Xế Xe Tải", 
                role: "Vận Chuyển", 
                detail: "Khai: 'Tôi chỉ chở hàng theo lệnh, không biết bên trong có gì'."
            },
            {
                name: "Thủ Kho", 
                role: "Nhân Viên", 
                detail: "Khai: 'Tôi đã khóa cửa kho từ sớm'."
            }
        ],
        evidence: [
            {
                name: "Khối Bê Tông", 
                icon: "🧱", 
                desc: "Loại xi măng chuyên dụng khô nhanh, thường dùng trong xây dựng cầu đường, không bán lẻ."
            },
            {
                name: "Hóa Đơn", 
                icon: "🧾", 
                locked: true, 
                code: "9000", 
                desc: "Hóa đơn mua 5 bao xi măng khô nhanh và 1 thùng phi, người ký tên nhận hàng là Tài Xế Xe Tải."
            },
            {
                name: "Vết Lốp Xe", 
                icon: "🚛", 
                desc: "Tại hiện trường phi tang có vết lốp xe tải hạng nặng trùng khớp với xe của nghi phạm."
            }
        ],
        opts: { 
            s: ["Tài Xế Xe Tải", "Ông Trùm", "Thủ Kho"], 
            w: ["Chôn Sống (Xi Măng)", "Súng", "Dây Thừng"], 
            l: ["Bãi Đất Hoang", "Bến Cảng", "Nhà Kho"] 
        },
        sol: {s: "Tài Xế Xe Tải", w: "Chôn Sống (Xi Măng)", l: "Nhà Kho"}
    },
    {
        id: 28,
        title: "Khúc Cua Tử Thần", 
        diff: "RẤT KHÓ",
        desc: "Tai nạn giao thông hay mưu sát được tính toán kỹ lưỡng?",
        story: [
            "Chiếc siêu xe lao xuống vực tại khúc cua gấp trên đèo. Nạn nhân là một tay đua lão luyện, không thể mắc sai lầm sơ đẳng.",
            "Kỹ thuật viên hiện trường báo cáo dây phanh đã bị đứt đôi. Tuy nhiên, vết đứt rất gọn, không giống do mài mòn tự nhiên.",
            "Trước khi chết, nạn nhân đã gọi điện cho vợ nhưng không ai bắt máy.",
            "Mã khóa cửa gara riêng của nạn nhân: 1212."
        ],
        suspects: [
            {
                name: "Thợ Sửa Xe", 
                role: "Kỹ Thuật", 
                detail: "Khai: 'Tôi vừa bảo dưỡng xe hôm qua, phanh hoàn toàn bình thường'."
            },
            {
                name: "Vợ Nạn Nhân", 
                role: "Góa Phụ", 
                detail: "Khai: 'Tôi không biết lái xe, cũng không biết gì về kỹ thuật'."
            },
            {
                name: "Đối Thủ", 
                role: "Tay Đua", 
                detail: "Khai: 'Hắn chết thì tôi bớt đi một đối thủ, nhưng tôi không hèn hạ thế'."
            }
        ],
        evidence: [
            {
                name: "Kìm Cắt Cáp", 
                icon: "✂️", 
                locked: true, 
                code: "1212", 
                desc: "Được giấu sâu trong túi gậy golf của Đối Thủ. Lưỡi kìm có dính dầu phanh và mạt kim loại."
            },
            {
                name: "Dây Phanh", 
                icon: "🚗", 
                desc: "Vết cắt sắc, gọn, chứng tỏ bị cắt bằng dụng cụ chuyên dụng chứ không phải đứt do va chạm."
            },
            {
                name: "Hợp Đồng BH", 
                icon: "📄", 
                desc: "Đối Thủ là người thụ hưởng trong một vụ cá cược ngầm liên quan đến mạng sống nạn nhân."
            }
        ],
        opts: { 
            s: ["Đối Thủ", "Thợ Sửa Xe", "Vợ Nạn Nhân"], 
            w: ["Cắt Dây Phanh", "Đẩy Xe", "Bom Hẹn Giờ"], 
            l: ["Gara Riêng", "Đèo", "Đường Đua"] 
        },
        sol: {s: "Đối Thủ", w: "Cắt Dây Phanh", l: "Gara Riêng"}
    },
    {
        id: 29,
        title: "Chén Rượu Độc", 
        diff: "TRUNG BÌNH",
        desc: "Cái chết đến từ một cái chạm môi.",
        story: [
            "Tại bữa tiệc thượng lưu, ông chủ ngân hàng gục chết ngay sau khi uống cạn ly rượu vang đỏ. Mắt trợn ngược, miệng sùi bọt trắng.",
            "Sommelier (Người nếm rượu) khẳng định chai rượu hoàn toàn bình thường vì anh ta đã nếm trước đó.",
            "Camera cho thấy chỉ có người vợ là người duy nhất tiếp xúc với ly rượu trước khi đưa cho chồng.",
            "Mã khóa hầm rượu quý: 3333."
        ],
        suspects: [
            {
                name: "Sommelier", 
                role: "Nếm Rượu", 
                detail: "Khai: 'Uy tín của tôi quan trọng hơn mạng sống. Rượu không có độc'."
            },
            {
                name: "Người Vợ", 
                role: "Phu Nhân", 
                detail: "Khai: 'Tôi chỉ đưa ly cho anh ấy, tay tôi không hề chạm vào rượu'."
            },
            {
                name: "Bạn Làm Ăn", 
                role: "Đối Tác", 
                detail: "Khai: 'Tôi ngồi đối diện, chỉ cụng ly chúc mừng'."
            }
        ],
        evidence: [
            {
                name: "Chiếc Nhẫn Ngọc", 
                icon: "💍", 
                locked: true, 
                code: "3333", 
                desc: "Chiếc nhẫn trên tay Người Vợ có một ngăn rỗng bí mật bên dưới viên ngọc, chứa bột Cyanua."
            },
            {
                name: "Ly Rượu", 
                icon: "🍷", 
                desc: "Miệng ly có vết bột trắng nhỏ xíu sót lại, không phải cặn rượu."
            },
            {
                name: "Chai Rượu", 
                icon: "🍾", 
                desc: "Kiểm tra dung dịch trong chai: Hoàn toàn không có độc."
            }
        ],
        opts: { 
            s: ["Người Vợ", "Sommelier", "Bạn Làm Ăn"], 
            w: ["Nhẫn Chứa Độc", "Rượu Có Độc", "Kim Tiêm"], 
            l: ["Bàn Tiệc", "Hầm Rượu", "Quầy Bar"] 
        },
        sol: {s: "Người Vợ", w: "Nhẫn Chứa Độc", l: "Bàn Tiệc"}
    },
    {
        id: 30,
        title: "Vụ Án Sân Tennis", 
        diff: "DỄ",
        desc: "Tai nạn thể thao hay sự trả thù đê hèn?",
        story: [
            "Một vận động viên tennis triển vọng bị thương nặng ở đầu do vợt bị gãy đôi khi đang phát bóng cực mạnh. Mảnh vợt sắc nhọn đâm vào thái dương.",
            "Cây vợt này mới được mua và kiểm tra kỹ lưỡng.",
            "Tủ đồ của nạn nhân ở phòng thay đồ đã bị ai đó cạy mở trước trận đấu.",
            "Mã số tủ đồ cá nhân: 0000."
        ],
        suspects: [
            {
                name: "HLV", 
                role: "Huấn Luyện Viên", 
                detail: "Khai: 'Tôi đã kiểm tra vợt sáng nay, nó hoàn hảo'."
            },
            {
                name: "Đối Thủ", 
                role: "Vận Động Viên", 
                detail: "Khai: 'Tôi muốn thắng hắn, nhưng là thắng trên sân đấu'."
            },
            {
                name: "Cậu Bé Nhặt Bóng", 
                role: "Nhân Viên", 
                detail: "Khai: 'Em thấy có người lạ vào phòng thay đồ'."
            }
        ],
        evidence: [
            {
                name: "Khung Vợt Gãy", 
                icon: "🎾", 
                desc: "Tại vị trí gãy có vết cưa nhỏ rất tinh vi, làm yếu cấu trúc vợt, chỉ cần lực mạnh là gãy."
            },
            {
                name: "Điện Thoại", 
                icon: "📱", 
                locked: true, 
                code: "0000", 
                desc: "Tin nhắn từ Đối Thủ gửi cho một gã thợ: 'Làm cho sạch sẽ vào, đừng để nó thi đấu'."
            },
            {
                name: "Băng Đô", 
                icon: "🎗️", 
                desc: "Thấm đẫm mồ hôi và máu."
            }
        ],
        opts: { 
            s: ["Đối Thủ", "HLV", "Cậu Bé Nhặt Bóng"], 
            w: ["Cưa Khung Vợt", "Bóng Tennis Chứa Chì", "Sàn Trơn"], 
            l: ["Sân Tennis", "Phòng Thay Đồ", "Khán Đài"] 
        },
        sol: {s: "Đối Thủ", w: "Cưa Khung Vợt", l: "Sân Tennis"}
    },
    {
        id: 31,
        title: "Bí Mật Dưới Giếng Cổ", 
        diff: "KHÓ",
        desc: "Xác chết dưới đáy giếng khô cạn.",
        story: [
            "Dân làng phát hiện mùi hôi thối bốc lên từ cái giếng cạn bỏ hoang ở bìa rừng. Bên dưới là thi thể một người đàn ông lạ mặt.",
            "Nạn nhân chết do chấn thương sọ não, bên cạnh là một cục gạch dính máu.",
            "Miệng giếng rất hẹp, nạn nhân không thể tự ngã mà đầu va đập mạnh như vậy được.",
            "Mã số khắc trên thành giếng: 5678."
        ],
        suspects: [
            {
                name: "Trưởng Thôn", 
                role: "Cán Bộ", 
                detail: "Khai: 'Tôi đi tuần tra đêm đó, không thấy ai lạ'.<br>Thái độ: Lấm lét."
            },
            {
                name: "Gã Say Rượu", 
                role: "Vô Gia Cư", 
                detail: "Khai: 'Tôi ngủ quên ở gốc đa gần đó, nghe tiếng *bõm* rất to'."
            },
            {
                name: "Cô Gái Làng", 
                role: "Dân Làng", 
                detail: "Khai: 'Tôi ra giếng lấy nước nhưng giếng cạn nên về'."
            }
        ],
        evidence: [
            {
                name: "Cục Gạch", 
                icon: "🧱", 
                desc: "Là loại gạch xây nhà của Trưởng Thôn, có dính tóc và máu nạn nhân."
            },
            {
                name: "Đèn Pin", 
                icon: "🔦", 
                locked: true, 
                code: "5678", 
                desc: "Rơi dưới đáy giếng, trên thân đèn có khắc tên Trưởng Thôn."
            },
            {
                name: "Dây Thừng", 
                icon: "🪢", 
                desc: "Mục nát, không thể dùng để leo xuống."
            }
        ],
        opts: { 
            s: ["Trưởng Thôn", "Gã Say Rượu", "Cô Gái Làng"], 
            w: ["Gạch (Ném Xuống)", "Đẩy Ngã", "Dìm Nước"], 
            l: ["Giếng Nước", "Nhà Trưởng Thôn", "Bìa Rừng"] 
        },
        sol: {s: "Trưởng Thôn", w: "Gạch (Ném Xuống)", l: "Giếng Nước"}
    },
    {
        id: 32,
        title: "Rạp Phim Kinh Hoàng", 
        diff: "TRUNG BÌNH",
        desc: "Án mạng trong bóng tối và tiếng ồn.",
        story: [
            "Một khán giả bị đâm chết ngay trên ghế VIP trong suất chiếu phim hành động đêm muộn. Tiếng súng trong phim đã át tiếng kêu cứu.",
            "Hung khí là một con dao bấm sắc bén đâm thẳng vào tim.",
            "Người ngồi cạnh nạn nhân nói rằng anh ta ngủ gật suốt buổi chiếu.",
            "Số ghế của nạn nhân: 1024."
        ],
        suspects: [
            {
                name: "Người Ngồi Cạnh", 
                role: "Khán Giả", 
                detail: "Khai: 'Tôi ngủ say lắm, tỉnh dậy thì thấy ông ta đã chết'.<br>Thái độ: Quá bình tĩnh."
            },
            {
                name: "Nhân Viên Soát Vé", 
                role: "Nhân Viên", 
                detail: "Khai: 'Tôi đứng ở cửa ra vào, không thấy ai khả nghi đi vào rạp'."
            },
            {
                name: "Bạn Gái", 
                role: "Người Yêu", 
                detail: "Khai: 'Tôi đi vệ sinh khoảng 15 phút, lúc quay lại thì anh ấy đã...'."
            }
        ],
        evidence: [
            {
                name: "Con Dao Bấm", 
                icon: "🗡️", 
                locked: true, 
                code: "1024", 
                desc: "Được tìm thấy dán băng dính dưới gầm ghế của Người Ngồi Cạnh. Trên cán dao chỉ có vân tay của hắn."
            },
            {
                name: "Hộp Bắp Rang", 
                icon: "🍿", 
                desc: "Đổ vương vãi trên sàn, như thể có một cuộc vật lộn ngắn."
            },
            {
                name: "Vé Xem Phim", 
                icon: "🎫", 
                desc: "Người Ngồi Cạnh mua vé vào phút chót, cố tình chọn ghế sát nạn nhân."
            }
        ],
        opts: { 
            s: ["Người Ngồi Cạnh", "Nhân Viên Soát Vé", "Bạn Gái"], 
            w: ["Dao Bấm", "Súng Giảm Thanh", "Dây Siết"], 
            l: ["Rạp Phim", "Nhà Vệ Sinh", "Quầy Vé"] 
        },
        sol: {s: "Người Ngồi Cạnh", w: "Dao Bấm", l: "Rạp Phim"}
    },
    {
        id: 33,
        title: "Hồ Bơi Sát Nhân", 
        diff: "KHÓ",
        desc: "Hệ thống lọc nước trở thành vũ khí giết người.",
        story: [
            "Một vận động viên bơi lội chết đuối tại hồ bơi riêng. Thi thể bị hút chặt xuống đáy hồ tại vị trí van thoát nước.",
            "Lực hút mạnh đến mức không thể thoát ra được. Ai đó đã điều chỉnh công suất máy bơm lên mức cực đại.",
            "Phòng máy bơm được khóa kỹ, chỉ có nhân viên kỹ thuật có chìa.",
            "Mã khóa cửa phòng máy: 9999."
        ],
        suspects: [
            {
                name: "Kỹ Thuật Viên", 
                role: "Bảo Trì", 
                detail: "Khai: 'Tôi đang bảo trì hệ thống ở khu B'.<br>Chứng cứ ngoại phạm: Không rõ ràng."
            },
            {
                name: "Nhân Viên Cứu Hộ", 
                role: "Cứu Hộ", 
                detail: "Khai: 'Lúc đó tôi đang nghỉ trưa, hồ bơi vắng tanh'."
            },
            {
                name: "Quản Lý", 
                role: "Quản Lý", 
                detail: "Khai: 'Tôi đi gặp đối tác cả buổi chiều'."
            }
        ],
        evidence: [
            {
                name: "Bảng Điều Khiển", 
                icon: "🎛️", 
                locked: true, 
                code: "9999", 
                desc: "Nhật ký hệ thống cho thấy Kỹ Thuật Viên đã đăng nhập và chỉnh lực hút lên 200% vào lúc nạn nhân xuống nước."
            },
            {
                name: "Kính Bơi", 
                icon: "🥽", 
                desc: "Kính bơi của nạn nhân bị vỡ nát do va đập mạnh khi bị hút xuống."
            },
            {
                name: "Van Nước", 
                icon: "🚰", 
                desc: "Nắp chắn an toàn của van đã bị tháo bỏ từ trước."
            }
        ],
        opts: { 
            s: ["Kỹ Thuật Viên", "Nhân Viên Cứu Hộ", "Quản Lý"], 
            w: ["Máy Bơm (Lực Hút)", "Dìm Nước", "Điện Giật"], 
            l: ["Hồ Bơi", "Phòng Máy Bơm", "Phòng Thay Đồ"] 
        },
        sol: {s: "Kỹ Thuật Viên", w: "Máy Bơm (Lực Hút)", l: "Hồ Bơi"}
    },
    {
        id: 34,
        title: "Căn Phòng Số 404", 
        diff: "RẤT KHÓ",
        desc: "Bí ẩn về căn phòng không bao giờ mở cửa.",
        story: [
            "Nhân viên dọn phòng phát hiện mùi lạ từ phòng 404 - căn phòng đã bị niêm phong 1 năm nay. Khi phá cửa, họ tìm thấy một thi thể đã phân hủy.",
            "Cửa phòng và cửa sổ đều bị khóa trái từ bên trong bằng chốt xích. Không có lối thoát nào khác.",
            "Nạn nhân là một khách du lịch mất tích từ tuần trước.",
            "Mã chìa khóa vạn năng của khách sạn: 0404."
        ],
        suspects: [
            {
                name: "Lễ Tân", 
                role: "Nhân Viên", 
                detail: "Khai: 'Không ai check-in phòng đó cả, hệ thống báo lỗi'."
            },
            {
                name: "Quản Lý", 
                role: "Quản Lý", 
                detail: "Khai: 'Tôi giữ chìa khóa dự phòng duy nhất trong két sắt'."
            },
            {
                name: "Bảo Vệ", 
                role: "An Ninh", 
                detail: "Khai: 'Tôi nghe tiếng động lạ đêm qua nhưng nghĩ là chuột'."
            }
        ],
        evidence: [
            {
                name: "Sổ Đăng Ký", 
                icon: "📖", 
                desc: "Trang đăng ký của ngày nạn nhân mất tích đã bị xé mất."
            },
            {
                name: "Chùm Chìa Khóa", 
                icon: "🗝️", 
                locked: true, 
                code: "0404", 
                desc: "Tìm thấy chìa khóa vạn năng (Master Key) giấu trong phòng làm việc của Quản Lý. Hắn dùng nó để mở cửa, nhốt nạn nhân vào rồi dùng thủ thuật khóa chốt xích từ bên ngoài."
            },
            {
                name: "Vali Hành Lý", 
                icon: "🧳", 
                desc: "Vali của nạn nhân chứa đầy tiền mặt - động cơ của vụ giết người cướp của."
            }
        ],
        opts: { 
            s: ["Quản Lý", "Lễ Tân", "Bảo Vệ"], 
            w: ["Nhốt (Chết Đói/Khát)", "Dao", "Súng"], 
            l: ["Phòng 404", "Sảnh Lễ Tân", "Kho Hành Lý"] 
        },
        sol: {s: "Quản Lý", w: "Nhốt (Chết Đói/Khát)", l: "Phòng 404"}
    },
    {
        id: 35,
        title: "Chuyến Tàu Tốc Hành", 
        diff: "TRUNG BÌNH",
        desc: "Án mạng trong toa giường nằm hạng sang.",
        story: [
            "Một thương gia buôn đá quý bị siết cổ chết trong buồng riêng trên chuyến tàu Bắc-Nam. Cửa buồng khóa, cửa sổ đóng kín.",
            "Tàu đang chạy với tốc độ cao, hung thủ không thể nhảy ra ngoài.",
            "Hệ thống thông gió nối giữa các buồng khá hẹp nhưng đủ để truyền âm thanh hoặc vật nhỏ.",
            "Mã khóa vali của nạn nhân: 7777."
        ],
        suspects: [
            {
                name: "Hành Khách Bên", 
                role: "Khách", 
                detail: "Khai: 'Tôi nghe thấy tiếng vật lộn nhưng sợ quá không dám sang'."
            },
            {
                name: "Tiếp Viên Tàu", 
                role: "Nhân Viên", 
                detail: "Khai: 'Tôi đưa bữa tối lúc 19h rồi đi ngay'."
            },
            {
                name: "Bác Sĩ", 
                role: "Khách", 
                detail: "Khai: 'Tôi chỉ đi ngang qua để đến toa ăn'."
            }
        ],
        evidence: [
            {
                name: "Lỗ Thông Gió", 
                icon: "💨", 
                desc: "Lỗ thông gió nối với buồng nhân viên. Hung thủ đã ném chìa khóa vào đây sau khi khóa cửa từ bên ngoài?"
            },
            {
                name: "Chìa Khóa Buồng", 
                icon: "🗝️", 
                locked: true, 
                code: "7777", 
                desc: "Tìm thấy chìa khóa phòng nạn nhân trong túi tạp dề của Tiếp Viên Tàu."
            },
            {
                name: "Cái Gối", 
                icon: "🛌", 
                desc: "Dùng để bịt miệng nạn nhân trước khi siết cổ, trên gối có sợi tóc của Tiếp Viên."
            }
        ],
        opts: { 
            s: ["Tiếp Viên Tàu", "Hành Khách Bên", "Bác Sĩ"], 
            w: ["Gối & Dây Siết", "Dao", "Thuốc Độc"], 
            l: ["Toa Tàu", "Hành Lang", "Nhà Vệ Sinh"] 
        },
        sol: {s: "Tiếp Viên Tàu", w: "Gối & Dây Siết", l: "Toa Tàu"}
    },
    {
        id: 36,
        title: "Thợ Săn Kho Báu", 
        diff: "DỄ",
        desc: "Lòng tham dẫn đến diệt vong.",
        story: [
            "Hai thợ săn kho báu cùng đi vào một hang động sâu để tìm vàng. Sáng hôm sau, chỉ một người trở ra với vẻ mặt hoảng hốt.",
            "Anh ta khai rằng người bạn đồng hành bị trượt chân rơi xuống vực thẳm.",
            "Tuy nhiên, cảnh sát tìm thấy dấu vết lạ trên đoạn dây leo núi còn sót lại.",
            "Mã khóa ba lô của kẻ sống sót: 1357."
        ],
        suspects: [
            {
                name: "Thợ Săn Sống", 
                role: "Đồng Hành", 
                detail: "Khai: 'Dây thừng bị đứt do đá cứa. Tôi đã cố giữ nhưng không được'."
            },
            {
                name: "Dẫn Đường", 
                role: "Hướng Dẫn", 
                detail: "Khai: 'Tôi chờ ở cửa hang, không đi vào trong'."
            },
            {
                name: "Dân Làng", 
                role: "Địa Phương", 
                detail: "Khai: 'Họ cãi nhau về cách chia vàng từ tối hôm trước'."
            }
        ],
        evidence: [
            {
                name: "Dây Leo Núi", 
                icon: "🧗", 
                desc: "Đầu dây bị đứt cực kỳ phẳng và gọn, chắc chắn là vết cắt của dao sắc, không phải do ma sát với đá."
            },
            {
                name: "Con Dao Găm", 
                icon: "🔪", 
                locked: true, 
                code: "1357", 
                desc: "Tìm thấy trong ba lô của Thợ Săn Sống Sót. Lưỡi dao có dính sợi nylon từ dây leo núi."
            },
            {
                name: "Bản Đồ", 
                icon: "🗺️", 
                desc: "Nằm gọn trong túi áo của kẻ sống sót. Hắn muốn độc chiếm kho báu."
            }
        ],
        opts: { 
            s: ["Thợ Săn Sống", "Dẫn Đường", "Dân Làng"], 
            w: ["Cắt Dây Thừng", "Đẩy Ngã", "Hòn Đá"], 
            l: ["Vực Thẳm", "Cửa Hang", "Khu Rừng"] 
        },
        sol: {s: "Thợ Săn Sống", w: "Cắt Dây Thừng", l: "Vực Thẳm"}
    },
    {
        id: 37,
        title: "Siêu Mẫu Sàn Catwalk", 
        diff: "KHÓ",
        desc: "Cú ngã chết người trước hàng trăm ống kính.",
        story: [
            "Siêu mẫu vedette đang sải bước trên sàn diễn thì bất ngờ vấp ngã, cú ngã mạnh khiến cô gãy cổ tử vong ngay lập tức.",
            "Kiểm tra đôi giày cao gót 15cm của nạn nhân, phát hiện phần gót giày đã bị gãy lìa. Đây không phải tai nạn ngẫu nhiên.",
            "Đôi giày này là thiết kế độc quyền, được giữ trong hộp khóa mã số cho đến phút chót.",
            "Mã khóa hộp giày: 0909."
        ],
        suspects: [
            {
                name: "Đối Thủ", 
                role: "Người Mẫu", 
                detail: "Khai: 'Cô ta chết thì tôi lên làm vedette, nhưng tôi không hèn hạ thế'.<br>Thái độ: Cười nhếch mép."
            },
            {
                name: "Nhà Thiết Kế", 
                role: "NTK", 
                detail: "Khai: 'Đôi giày là kiệt tác của tôi, tôi không bao giờ phá hỏng nó'."
            },
            {
                name: "Trợ Lý Riêng", 
                role: "Trợ Lý", 
                detail: "Khai: 'Tôi là người duy nhất được chạm vào hộp giày'."
            }
        ],
        evidence: [
            {
                name: "Gót Giày Gãy", 
                icon: "👠", 
                desc: "Phần lõi thép bên trong gót giày đã bị cưa gần đứt, chỉ cần chịu lực mạnh là gãy ngay."
            },
            {
                name: "Chiếc Cưa Nhỏ", 
                icon: "🪚", 
                locked: true, 
                code: "0909", 
                desc: "Tìm thấy một chiếc cưa kim loại nhỏ xíu giấu trong hộp phấn trang điểm của Đối Thủ."
            },
            {
                name: "Sàn Diễn", 
                icon: "🌟", 
                desc: "Sàn được đánh bóng quá mức tại vị trí ngã, có vết dầu trơn do ai đó bôi thêm."
            }
        ],
        opts: { 
            s: ["Đối Thủ", "Nhà Thiết Kế", "Trợ Lý Riêng"], 
            w: ["Cưa Gót Giày", "Sàn Trơn", "Đẩy Ngã"], 
            l: ["Sàn Diễn", "Hậu Trường", "Phòng Thay Đồ"] 
        },
        sol: {s: "Đối Thủ", w: "Cưa Gót Giày", l: "Sàn Diễn"}
    },
    {
        id: 38,
        title: "Thang Máy Tử Thần", 
        diff: "RẤT KHÓ",
        desc: "Rơi tự do từ tầng 20 không lối thoát.",
        story: [
            "Thang máy VIP của tòa nhà chọc trời rơi tự do từ tầng 20 xuống tầng hầm. Vị CEO bên trong tử vong tại chỗ.",
            "Hệ thống phanh khẩn cấp đã không kích hoạt. Cáp treo thang máy bị đứt hoàn toàn.",
            "Camera trong thang máy bị hỏng đúng vào thời điểm xảy ra sự cố.",
            "Mã phòng kỹ thuật thang máy: 2020."
        ],
        suspects: [
            {
                name: "Kỹ Sư Bảo Trì", 
                role: "Bảo Trì", 
                detail: "Khai: 'Tôi vừa kiểm tra định kỳ hôm qua, mọi thứ đều ổn'.<br>Biểu hiện: Tay dính vết cháy axit."
            },
            {
                name: "Bảo Vệ Tòa Nhà", 
                role: "An Ninh", 
                detail: "Khai: 'Tôi trực ở sảnh, thấy thang máy rơi rất nhanh'."
            },
            {
                name: "Lao Công", 
                role: "Tạp Vụ", 
                detail: "Khai: 'Tôi đang lau dọn ở tầng hầm'."
            }
        ],
        evidence: [
            {
                name: "Đoạn Cáp Đứt", 
                icon: "⛓️", 
                desc: "Đầu cáp bị ăn mòn nham nhở, không phải vết cắt bằng kìm hay cưa, mà là do hóa chất."
            },
            {
                name: "Bình Axit", 
                icon: "🧪", 
                locked: true, 
                code: "2020", 
                desc: "Một bình axit Sulfuric rỗng được tìm thấy trong tủ đồ cá nhân của Kỹ Sư Bảo Trì."
            },
            {
                name: "Hệ Thống Phanh", 
                icon: "🛑", 
                desc: "Chốt an toàn của phanh đã bị tháo rời thủ công."
            }
        ],
        opts: { 
            s: ["Kỹ Sư Bảo Trì", "Bảo Vệ Tòa Nhà", "Lao Công"], 
            w: ["Axit Ăn Mòn Cáp", "Cưa Cáp", "Bom"], 
            l: ["Hố Thang Máy", "Phòng Kỹ Thuật", "Cabin Thang Máy"] 
        },
        sol: {s: "Kỹ Sư Bảo Trì", w: "Axit Ăn Mòn Cáp", l: "Hố Thang Máy"}
    },
    {
        id: 39,
        title: "Vụ Án Nhà Kính", 
        diff: "TB",
        desc: "Cái chết dị ứng trong căn phòng đầy hoa.",
        story: [
            "Ông chủ điền trang được phát hiện đã chết trong nhà kính trồng hoa phong lan. Cửa nhà kính khóa kín từ bên trong.",
            "Nạn nhân chết do sốc phản vệ, đường thở bị sưng phù. Ông ta vốn bị dị ứng phấn hoa nghiêm trọng.",
            "Hệ thống quạt thông gió đang chạy hết công suất, thổi phấn hoa bay mù mịt.",
            "Mã bộ điều khiển nhiệt độ: 3030."
        ],
        suspects: [
            {
                name: "Người Làm Vườn", 
                role: "Nhân Viên", 
                detail: "Khai: 'Ông chủ cấm trồng hoa có phấn trong nhà kính này'."
            },
            {
                name: "Con Gái", 
                role: "Người Thân", 
                detail: "Khai: 'Tôi ghét hoa, tôi không bao giờ vào đó'."
            },
            {
                name: "Bác Sĩ", 
                role: "Gia Đình", 
                detail: "Khai: 'Tôi luôn nhắc ông ấy mang theo bút tiêm Epipen'."
            }
        ],
        evidence: [
            {
                name: "Chậu Hoa Ly", 
                icon: "🌺", 
                desc: "Một chậu hoa Ly (nhiều phấn) được giấu kỹ sau các giò phong lan. Đây là nguồn gây dị ứng."
            },
            {
                name: "Điều Khiển Quạt", 
                icon: "💨", 
                locked: true, 
                code: "3030", 
                desc: "Dấu vân tay của Con Gái in rõ trên nút bật quạt chế độ mạnh nhất."
            },
            {
                name: "Bút Tiêm", 
                icon: "💉", 
                desc: "Bút tiêm trong túi nạn nhân đã bị đánh tráo bằng một bút rỗng."
            }
        ],
        opts: { 
            s: ["Con Gái", "Người Làm Vườn", "Bác Sĩ"], 
            w: ["Phấn Hoa (Sốc Phản Vệ)", "Thuốc Độc", "Khí Gas"], 
            l: ["Nhà Kính", "Vườn Hoa", "Phòng Ngủ"] 
        },
        sol: {s: "Con Gái", w: "Phấn Hoa (Sốc Phản Vệ)", l: "Nhà Kính"}
    },
    {
        id: 40,
        title: "Ngọn Hải Đăng Máu", 
        diff: "KHÓ",
        desc: "Cú ngã từ độ cao 50 mét xuống bãi đá.",
        story: [
            "Người gác hải đăng già rơi từ ban công ngọn đèn xuống bãi đá ngầm bên dưới. Hộp sọ vỡ nát.",
            "Lan can sắt chỗ nạn nhân rơi xuống đã bị gãy rời. Nhìn qua tưởng như do rỉ sét lâu ngày.",
            "Nhưng một người thợ điện vừa mới đến sửa chữa đèn hôm qua.",
            "Mã hộp dụng cụ: 1111."
        ],
        suspects: [
            {
                name: "Thuyền Chài", 
                role: "Ngư Dân", 
                detail: "Khai: 'Tôi thấy ông ấy rơi xuống khi đang đánh cá gần bờ'."
            },
            {
                name: "Vợ Nạn Nhân", 
                role: "Góa Phụ", 
                detail: "Khai: 'Tôi mang cơm trưa lên thì không thấy ông ấy đâu'."
            },
            {
                name: "Thợ Điện", 
                role: "Kỹ Thuật", 
                detail: "Khai: 'Tôi chỉ sửa bóng đèn, không đụng vào lan can'."
            }
        ],
        evidence: [
            {
                name: "Thanh Lan Can", 
                icon: "🚧", 
                desc: "Các con ốc cố định lan can đã bị tháo lỏng ra, không phải gãy do rỉ sét."
            },
            {
                name: "Cờ Lê", 
                icon: "🔧", 
                locked: true, 
                code: "1111", 
                desc: "Chiếc cờ lê của Thợ Điện có dính vụn sơn màu trắng của lan can hải đăng."
            },
            {
                name: "Bóng Đèn", 
                icon: "💡", 
                desc: "Vẫn hoạt động bình thường, chứng tỏ Thợ Điện có mục đích khác khi leo lên đó."
            }
        ],
        opts: { 
            s: ["Thợ Điện", "Thuyền Chài", "Vợ Nạn Nhân"], 
            w: ["Tháo Ốc Lan Can", "Đẩy Ngã", "Gậy Sắt"], 
            l: ["Đỉnh Hải Đăng", "Bãi Đá", "Cầu Thang"] 
        },
        sol: {s: "Thợ Điện", w: "Tháo Ốc Lan Can", l: "Đỉnh Hải Đăng"}
    },
            {
        id: 41,
        title: "Sân Khấu Tử Thần", 
        diff: "DỄ",
        desc: "Khi đạo cụ trở thành vũ khí giết người.",
        story: [
            "Trong cảnh cao trào của vở kịch, nam diễn viên chính bị bạn diễn bắn chết ngay trên sân khấu. Khán giả vỗ tay vì tưởng là diễn xuất.",
            "Khẩu súng đạo cụ lẽ ra chỉ bắn đạn mã tử, nhưng lại bắn ra đạn thật xuyên tim nạn nhân.",
            "Đạo cụ viên thề rằng anh ta đã kiểm tra súng kỹ lưỡng trước giờ diễn.",
            "Mã rương đạo cụ: 0070."
        ],
        suspects: [
            {
                name: "Nhân Viên Đạo Cụ", 
                role: "Hậu Đài", 
                detail: "Khai: 'Tôi đã nạp đạn giả, tôi thề!'.<br>Thái độ: Hoảng loạn tột độ."
            },
            {
                name: "Bạn Diễn", 
                role: "Diễn Viên", 
                detail: "Khai: 'Tôi chỉ làm theo kịch bản, tôi không biết súng có đạn thật'."
            },
            {
                name: "Đạo Diễn", 
                role: "Chỉ Đạo", 
                detail: "Khai: 'Tôi muốn cảnh này phải thật chân thực, nhưng không phải thế này'."
            }
        ],
        evidence: [
            {
                name: "Khẩu Súng Lục", 
                icon: "🔫", 
                desc: "Là súng thật, nòng súng còn ấm. Trong ổ đạn có vỏ đạn thật."
            },
            {
                name: "Hộp Đạn", 
                icon: "📦", 
                locked: true, 
                code: "0070", 
                desc: "Một hộp đạn thật được giấu dưới đáy rương đạo cụ của Nhân Viên Đạo Cụ."
            },
            {
                name: "Kịch Bản", 
                icon: "📜", 
                desc: "Có ghi chú viết tay của Đạo Diễn yêu cầu đổi góc bắn, nhưng không ai sửa đạn."
            }
        ],
        opts: { 
            s: ["Nhân Viên Đạo Cụ", "Bạn Diễn", "Đạo Diễn"], 
            w: ["Tráo Đạn Thật", "Súng Giả", "Dao"], 
            l: ["Sân Khấu", "Kho Đạo Cụ", "Cánh Gà"] 
        },
        sol: {s: "Nhân Viên Đạo Cụ", w: "Tráo Đạn Thật", l: "Sân Khấu"}
    },
    {
        id: 42,
        title: "Phòng Gym Đẫm Máu", 
        diff: "TB",
        desc: "Tai nạn tập luyện hay mưu sát?",
        story: [
            "Một vận động viên thể hình chết tức tưởi do thanh tạ 200kg rơi trúng cổ họng khi đang nằm đẩy tạ.",
            "Lúc xảy ra sự việc, phòng gym khá vắng vẻ. Không có người hỗ trợ (spotter) đứng sau.",
            "Nạn nhân là người rất khỏe, mức tạ này bình thường anh ta đẩy rất dễ dàng.",
            "Mã tủ đồ cá nhân: 1999."
        ],
        suspects: [
            {
                name: "Huấn Luyện Viên", 
                role: "PT", 
                detail: "Khai: 'Tôi đau bụng nên đi vệ sinh lúc đó'."
            },
            {
                name: "Hội Viên Mới", 
                role: "Khách Tập", 
                detail: "Khai: 'Tôi đeo tai nghe nhạc to quá, không nghe thấy gì'."
            },
            {
                name: "Lao Công", 
                role: "Tạp Vụ", 
                detail: "Khai: 'Tôi đang lau kính ở khu cardio'."
            }
        ],
        evidence: [
            {
                name: "Thanh Tạ", 
                icon: "🏋️", 
                desc: "Phần tay cầm của thanh tạ dính đầy chất lỏng trơn trượt, không phải mồ hôi."
            },
            {
                name: "Chai Dầu Bôi Trơn", 
                icon: "🛢️", 
                locked: true, 
                code: "1999", 
                desc: "Tìm thấy trong tủ đồ của Huấn Luyện Viên. Anh ta đã bôi dầu vào tạ để nạn nhân trượt tay."
            },
            {
                name: "Khăn Tập", 
                icon: "🧖", 
                desc: "Khăn của nạn nhân cũng bị tẩm dầu."
            }
        ],
        opts: { 
            s: ["Huấn Luyện Viên", "Hội Viên Mới", "Lao Công"], 
            w: ["Bôi Dầu (Trượt Tay)", "Đẩy Thanh Tạ", "Tạ Rơi Tự Nhiên"], 
            l: ["Khu Đẩy Tạ", "Nhà Vệ Sinh", "Quầy Lễ Tân"] 
        },
        sol: {s: "Huấn Luyện Viên", w: "Bôi Dầu (Trượt Tay)", l: "Khu Đẩy Tạ"}
    },
    {
        id: 43,
        title: "Mật Thất Thư Viện", 
        diff: "KHÓ",
        desc: "Căn phòng bí mật sau giá sách.",
        story: [
            "Một nhà sử học nổi tiếng mất tích 3 ngày. Cảnh sát phát hiện ra một mật thất phía sau giá sách trong thư viện riêng của ông.",
            "Khi mở cửa mật thất, nhà sử học đã chết ngạt bên trong. Hệ thống thông khí bị bịt kín.",
            "Cơ chế mở cửa mật thất rất tinh vi, chỉ có thể kích hoạt từ bên ngoài.",
            "Mã cuốn sách kích hoạt: 1800."
        ],
        suspects: [
            {
                name: "Thủ Thư", 
                role: "Quản Lý", 
                detail: "Khai: 'Tôi làm việc ở đây 10 năm nhưng chưa từng biết có mật thất'."
            },
            {
                name: "Sinh Viên", 
                role: "Học Trò", 
                detail: "Khai: 'Thầy hẹn em đến lấy tài liệu nhưng không thấy thầy đâu'."
            },
            {
                name: "Giáo Sư", 
                role: "Đồng Nghiệp", 
                detail: "Khai: 'Chúng tôi đang tranh cãi về một di tích cổ'."
            }
        ],
        evidence: [
            {
                name: "Cơ Quan Bí Mật", 
                icon: "⚙️", 
                desc: "Cần gạt mở cửa được giấu sau một cuốn sách giả trên kệ."
            },
            {
                name: "Cuốn Sách Giả", 
                icon: "📕", 
                locked: true, 
                code: "1800", 
                desc: "Trên gáy cuốn sách có dấu vân tay mới in của Thủ Thư. Hắn đã vô tình hoặc cố ý kích hoạt nó."
            },
            {
                name: "Cây Nến", 
                icon: "🕯️", 
                desc: "Nến trong mật thất đã cháy hết, chứng tỏ nạn nhân đã cố gắng tìm dưỡng khí trong tuyệt vọng."
            }
        ],
        opts: { 
            s: ["Thủ Thư", "Sinh Viên", "Giáo Sư"], 
            w: ["Nhốt Trong Mật Thất", "Đầu Độc", "Dây Thừng"], 
            l: ["Mật Thất", "Thư Viện", "Phòng Đọc"] 
        },
        sol: {s: "Thủ Thư", w: "Nhốt Trong Mật Thất", l: "Mật Thất"}
    },
    {
        id: 44,
        title: "Đám Cưới Máu", 
        diff: "RẤT KHÓ",
        desc: "Ngày vui hóa thành ngày tang.",
        story: [
            "Trong lúc cắt bánh kem, chú rể đột ngột ngã gục và tử vong ngay trên sân khấu. Cô dâu đứng bên cạnh hét lên kinh hoàng.",
            "Khám nghiệm cho thấy chú rể bị trúng một loại độc thần kinh cực mạnh qua đường máu.",
            "Không ai tiếp cận chú rể trong khoảnh khắc đó ngoài cô dâu.",
            "Mã hộp quà cưới của cô dâu: 5050."
        ],
        suspects: [
            {
                name: "Cô Dâu", 
                role: "Vợ", 
                detail: "Khai: 'Em chỉ cầm tay anh ấy cắt bánh thôi mà!'.<br>Trang phục: Váy cưới lộng lẫy, găng tay ren dài."
            },
            {
                name: "Người Yêu Cũ", 
                role: "Khách Mời", 
                detail: "Khai: 'Tôi đứng dưới sân khấu chúc phúc cho họ'."
            },
            {
                name: "Đầu Bếp", 
                role: "Phục Vụ", 
                detail: "Khai: 'Bánh kem hoàn toàn an toàn, mọi người đều ăn mà'."
            }
        ],
        evidence: [
            {
                name: "Con Dao Cắt Bánh", 
                icon: "🔪", 
                desc: "Trên cán dao có một cái kim nhỏ xíu tẩm độc nhô ra. Ai cầm chặt cán dao sẽ bị kim đâm."
            },
            {
                name: "Găng Tay Ren", 
                icon: "🧤", 
                locked: true, 
                code: "5050", 
                desc: "Trong găng tay của Cô Dâu có lót một lớp nhựa cứng bảo vệ lòng bàn tay. Cô ta biết trước về cái kim độc trên dao."
            },
            {
                name: "Bánh Kem", 
                icon: "🎂", 
                desc: "Không có độc tố."
            }
        ],
        opts: { 
            s: ["Cô Dâu", "Người Yêu Cũ", "Đầu Bếp"], 
            w: ["Kim Độc Trên Cán Dao", "Bánh Độc", "Rượu Độc"], 
            l: ["Sân Khấu Tiệc Cưới", "Nhà Bếp", "Phòng Cô Dâu"] 
        },
        sol: {s: "Cô Dâu", w: "Kim Độc Trên Cán Dao", l: "Sân Khấu Tiệc Cưới"}
    },
    {
        id: 45,
        title: "Trại Tâm Thần", 
        diff: "KHÓ",
        desc: "Cuộc nổi loạn hay mưu đồ cá nhân?",
        story: [
            "Bác sĩ điều trị chính được tìm thấy đã chết trong phòng cách ly đặc biệt dành cho bệnh nhân nguy hiểm. Cổ bị siết bằng áo trói.",
            "Cửa phòng cách ly được mở bằng thẻ từ. Bệnh nhân điên loạn bên trong đang cười man dại bên xác bác sĩ.",
            "Tuy nhiên, bệnh nhân này bị trói chặt tay chân, không thể tự mở cửa hay tự cởi trói để tấn công.",
            "Mã thẻ từ của Y Tá Trưởng: 1234."
        ],
        suspects: [
            {
                name: "Bệnh Nhân", 
                role: "Tâm Thần", 
                detail: "Khai: (Cười và nói nhảm)."
            },
            {
                name: "Y Tá Trưởng", 
                role: "Y Tá", 
                detail: "Khai: 'Tôi đang phát thuốc ở khu A'."
            },
            {
                name: "Bảo Vệ", 
                role: "An Ninh", 
                detail: "Khai: 'Tôi ngủ quên một chút ở chốt trực'."
            }
        ],
        evidence: [
            {
                name: "Thẻ Từ Mở Cửa", 
                icon: "💳", 
                locked: true, 
                code: "1234", 
                desc: "Dữ liệu cửa cho thấy thẻ của Y Tá Trưởng đã mở cửa phòng cách ly lúc 2h sáng."
            },
            {
                name: "Con Dao Nhựa", 
                icon: "🍴", 
                desc: "Một con dao nhựa được mài sắc dùng để cắt dây trói cho bệnh nhân, trên đó có vân tay Y Tá Trưởng."
            },
            {
                name: "Camera Hành Lang", 
                icon: "📹", 
                desc: "Ghi lại cảnh Y Tá Trưởng đẩy Bác sĩ vào phòng rồi thả bệnh nhân ra."
            }
        ],
        opts: { 
            s: ["Y Tá Trưởng", "Bệnh Nhân", "Bảo Vệ"], 
            w: ["Mượn Tay Người Điên", "Siết Cổ", "Thuốc Độc"], 
            l: ["Phòng Cách Ly", "Phòng Thuốc", "Hành Lang"] 
        },
        sol: {s: "Y Tá Trưởng", w: "Mượn Tay Người Điên", l: "Phòng Cách Ly"}
    },
    {
        id: 46,
        title: "Livestream Tử Thần", 
        diff: "TB",
        desc: "Vụ án mạng trước hàng ngàn người xem trực tuyến.",
        story: [
            "Một streamer nổi tiếng đang livestream chơi game thì đột ngột ôm cổ, co giật và gục xuống bàn phím. Khán giả tưởng là diễn trò.",
            "Pháp y kết luận nạn nhân chết do ngộ độc Strychnine cực mạnh.",
            "Trên bàn chỉ có một lon nước tăng lực nạn nhân vừa uống.",
            "Mã máy tính của bạn cùng phòng: 8888."
        ],
        suspects: [
            {
                name: "Bạn Cùng Phòng", 
                role: "Bạn Bè", 
                detail: "Khai: 'Tôi là người đưa lon nước cho cậu ấy'.<br>Động cơ: Ghen tị vì kênh của mình ít view."
            },
            {
                name: "Fan Cuồng", 
                role: "Khán Giả", 
                detail: "Khai: 'Tôi gửi tặng thùng nước đó qua đường bưu điện'."
            },
            {
                name: "Shipper", 
                role: "Giao Hàng", 
                detail: "Khai: 'Tôi chỉ giao hàng đến cửa'."
            }
        ],
        evidence: [
            {
                name: "Lon Nước", 
                icon: "🥤", 
                desc: "Có một lỗ kim nhỏ xíu dưới đáy lon, được dán lại bằng keo trong. Thuốc độc được bơm vào từ đây."
            },
            {
                name: "Kim Tiêm", 
                icon: "💉", 
                locked: true, 
                code: "8888", 
                desc: "Tìm thấy kim tiêm và lọ Strychnine giấu trong case máy tính của Bạn Cùng Phòng."
            },
            {
                name: "Chat Log", 
                icon: "💬", 
                desc: "Bạn Cùng Phòng dùng nick ảo comment kích bác nạn nhân uống nước ngay trên stream."
            }
        ],
        opts: { 
            s: ["Bạn Cùng Phòng", "Fan Cuồng", "Shipper"], 
            w: ["Nước Tẩm Độc", "Khí Gas", "Sốc Thuốc"], 
            l: ["Phòng Stream", "Nhà Bếp", "Cửa Ra Vào"] 
        },
        sol: {s: "Bạn Cùng Phòng", w: "Nước Tẩm Độc", l: "Phòng Stream"}
    },
    {
        id: 47,
        title: "Bí Mật Kho Lạnh", 
        diff: "KHÓ",
        desc: "Cái chết băng giá giữa mùa hè oi ả.",
        story: [
            "Quản lý nhà hàng 5 sao được tìm thấy chết cóng trong kho đông lạnh thực phẩm. Nhiệt độ bên trong là -20 độ C.",
            "Nạn nhân chỉ mặc một chiếc áo sơ mi mỏng, co ro ở góc phòng. Cửa kho bị chốt chặt từ bên ngoài bằng một thanh kim loại.",
            "Trên tường kho lạnh có những vết cào xước tuyệt vọng bằng móng tay.",
            "Mã khóa cửa kho lạnh: 0000."
        ],
        suspects: [
            {
                name: "Đầu Bếp Trưởng", 
                role: "Bếp Trưởng", 
                detail: "Khai: 'Tôi đang kiểm kê hàng hóa ở kho khô'.<br>Thái độ: Lạnh lùng, không chút cảm xúc."
            },
            {
                name: "Phụ Bếp", 
                role: "Nhân Viên", 
                detail: "Khai: 'Tôi được lệnh đi lấy đá nhưng thấy cửa khóa nên quay về'."
            },
            {
                name: "Kế Toán", 
                role: "Văn Phòng", 
                detail: "Khai: 'Tôi nghỉ phép hôm nay, chỉ ghé qua lấy tài liệu'."
            }
        ],
        evidence: [
            {
                name: "Thanh Chốt Cửa", 
                icon: "🚪", 
                desc: "Chốt cửa bên trong đã bị ai đó dùng búa đập gãy từ trước, khiến nạn nhân không thể mở từ bên trong."
            },
            {
                name: "Cây Búa", 
                icon: "🔨", 
                locked: true, 
                code: "0000", 
                desc: "Tìm thấy cây búa dính mỡ bò (dùng bôi trơn máy móc nhà bếp) trong tủ đồ của Đầu Bếp Trưởng."
            },
            {
                name: "Áo Khoác", 
                icon: "🧥", 
                desc: "Áo khoác bông của nạn nhân bị vứt trong thùng rác bên ngoài. Hung thủ đã ép nạn nhân cởi áo trước khi nhốt vào."
            }
        ],
        opts: { 
            s: ["Đầu Bếp Trưởng", "Phụ Bếp", "Kế Toán"], 
            w: ["Phá Chốt Cửa & Nhốt", "Khí Lạnh", "Dao"], 
            l: ["Kho Đông Lạnh", "Bếp", "Văn Phòng"] 
        },
        sol: {s: "Đầu Bếp Trưởng", w: "Phá Chốt Cửa & Nhốt", l: "Kho Đông Lạnh"}
    },
    {
        id: 48,
        title: "Bảo Tàng Sáp", 
        diff: "TRUNG BÌNH",
        desc: "Khi tượng sáp có hơi ấm.",
        story: [
            "Khách tham quan hoảng loạn khi phát hiện một bức tượng sáp 'Ma Cà Rồng' bắt đầu rỉ máu thật.",
            "Khi lớp sáp tan chảy dưới đèn chiếu, thi thể một người đàn ông hiện ra bên trong.",
            "Nạn nhân đã mất tích 3 ngày trước. Quy trình đúc tượng sáp cần nhiệt độ rất cao.",
            "Mã xưởng đúc: 1990."
        ],
        suspects: [
            {
                name: "Nghệ Nhân", 
                role: "Điêu Khắc", 
                detail: "Khai: 'Tôi đúc tượng này cả tuần nay, không thấy gì lạ'."
            },
            {
                name: "Bảo Vệ Đêm", 
                role: "An Ninh", 
                detail: "Khai: 'Đêm nào tôi cũng nghe tiếng lò nung hoạt động hết công suất'."
            },
            {
                name: "Hướng Dẫn Viên", 
                role: "Nhân Viên", 
                detail: "Khai: 'Bức tượng này mới được đưa ra trưng bày sáng nay'."
            }
        ],
        evidence: [
            {
                name: "Nồi Nấu Sáp", 
                icon: "🔥", 
                desc: "Bên trong nồi còn sót lại một chiếc khuy áo kim loại của nạn nhân mà lửa không nung chảy được."
            },
            {
                name: "Dao Điêu Khắc", 
                icon: "🔪", 
                locked: true, 
                code: "1990", 
                desc: "Bộ dao của Nghệ Nhân thiếu mất con dao lớn nhất. Nó được tìm thấy cắm sâu trong ngực cái xác bên trong tượng."
            },
            {
                name: "Sổ Nhật Ký", 
                icon: "📓", 
                desc: "Nạn nhân là chủ nợ của Nghệ Nhân, đến đòi tiền và bị giết."
            }
        ],
        opts: { 
            s: ["Nghệ Nhân", "Bảo Vệ Đêm", "Hướng Dẫn Viên"], 
            w: ["Đúc Sống Trong Tượng", "Lò Thiêu", "Súng"], 
            l: ["Xưởng Đúc", "Sảnh Trưng Bày", "Kho"] 
        },
        sol: {s: "Nghệ Nhân", w: "Đúc Sống Trong Tượng", l: "Xưởng Đúc"}
    },
    {
        id: 49,
        title: "Chuyến Tàu Cuối", 
        diff: "KHÓ",
        desc: "Án mạng trong bóng tối đường hầm.",
        story: [
            "Khi tàu điện ngầm chạy qua đoạn đường hầm mất điện kéo dài 30 giây, một hành khách bị đẩy ngã khỏi toa tàu đang chạy.",
            "Thi thể nạn nhân được tìm thấy trên đường ray. Cửa toa tàu đã bị mở cưỡng bức bằng chế độ khẩn cấp.",
            "Trong toa lúc đó chỉ có 3 người khác đứng gần cửa.",
            "Mã số vé tàu: 2024."
        ],
        suspects: [
            {
                name: "Kẻ Móc Túi", 
                role: "Tội Phạm", 
                detail: "Khai: 'Tôi định lấy ví thôi, ai ngờ ông ta ngã'.<br>Thái độ: Lấm lét."
            },
            {
                name: "Nhân Viên Tàu", 
                role: "Soát Vé", 
                detail: "Khai: 'Tôi đang đi kiểm tra vé ở toa trên'."
            },
            {
                name: "Vợ Nạn Nhân", 
                role: "Vợ", 
                detail: "Khai: 'Tôi đi vệ sinh, lúc quay lại thì chồng tôi đã biến mất'."
            }
        ],
        evidence: [
            {
                name: "Cần Gạt Khẩn Cấp", 
                icon: "🚨", 
                desc: "Có dấu vân tay của Kẻ Móc Túi. Hắn định mở cửa tẩu thoát sau khi trộm ví."
            },
            {
                name: "Chiếc Ví Da", 
                icon: "👛", 
                locked: true, 
                code: "2024", 
                desc: "Tìm thấy trong túi áo khoác của Kẻ Móc Túi. Bên trong có vé tàu của nạn nhân."
            },
            {
                name: "Vết Giày", 
                icon: "👞", 
                desc: "Trên sàn tàu, ngay sát cửa mở, có vết trượt của giày thể thao (loại Kẻ Móc Túi đang đi), chứng tỏ hắn đã xô xát với nạn nhân."
            }
        ],
        opts: { 
            s: ["Kẻ Móc Túi", "Nhân Viên Tàu", "Vợ Nạn Nhân"], 
            w: ["Đẩy Khỏi Tàu", "Dao", "Súng"], 
            l: ["Cửa Toa Tàu", "Đường Ray", "Ghế Ngồi"] 
        },
        sol: {s: "Kẻ Móc Túi", w: "Đẩy Khỏi Tàu", l: "Cửa Toa Tàu"}
    },
    // --- CHƯƠNG CUỐI: ĐỐI ĐẦU BÓNG TỐI (50-59) ---
    {
        id: 50, 
        title: "Lời Cảnh Báo", 
        diff: "KHÓ",
        desc: "Một viên đạn bắn tỉa sượt qua vai thám tử.",
        story: [
            "Bạn đang ngồi trong văn phòng thám tử thì một viên đạn xuyên qua cửa kính, găm vào tường, cách đầu bạn chỉ 5cm.",
            "Kẻ bắn tỉa đã tẩu thoát, nhưng để lại một vỏ đạn khắc ký hiệu lạ tại tòa nhà đối diện.",
            "Cảnh sát bắt được 3 nghi phạm có mặt tại sân thượng tòa nhà đó.",
            "Mã vỏ đạn kim loại: 1999."
        ],
        suspects: [
            {
                name: "Cựu Xạ Thủ", 
                role: "Lính Cũ", 
                detail: "Khai: 'Tôi lên đó hút thuốc cho thoáng'.<br>Thái độ: Bình thản, ngón tay có vết chai do bóp cò."
            },
            {
                name: "Bảo Trì", 
                role: "Thợ Sửa", 
                detail: "Khai: 'Tôi đang sửa cục nóng điều hòa'."
            },
            {
                name: "Nhiếp Ảnh Gia", 
                role: "Chụp Ảnh", 
                detail: "Khai: 'Tôi đang phơi sáng chụp ảnh hoàng hôn'."
            }
        ],
        evidence: [
            {
                name: "Vỏ Đạn Khắc Chữ", 
                icon: "💊", 
                locked: true, 
                code: "1999", 
                desc: "Trên vỏ đạn khắc dòng chữ: 'TRÒ CHƠI BẮT ĐẦU'. Đây là lời tuyên chiến của tổ chức tội phạm."
            },
            {
                name: "Khẩu Súng Tỉa", 
                icon: "🔫", 
                desc: "Được giấu trong hộp đàn Guitar của Cựu Xạ Thủ. Nòng súng vẫn còn nóng."
            },
            {
                name: "Máy Ảnh", 
                icon: "📷", 
                desc: "Ảnh chụp cho thấy sân thượng trống trơn lúc xảy ra vụ nổ súng (Nhiếp ảnh gia nói dối về thời gian)."
            }
        ],
        opts: { 
            s: ["Cựu Xạ Thủ", "Bảo Trì", "Nhiếp Ảnh Gia"], 
            w: ["Súng Bắn Tỉa", "Nỏ", "Súng Lục"], 
            l: ["Sân Thượng Đối Diện", "Văn Phòng Thám Tử", "Đường Phố"] 
        },
        sol: {s: "Cựu Xạ Thủ", w: "Súng Bắn Tỉa", l: "Sân Thượng Đối Diện"}
    },
    {
        id: 51, 
        title: "Kẻ Nội Gián", 
        diff: "RẤT KHÓ",
        desc: "Sở cảnh sát không còn an toàn.",
        story: [
            "Nhân chứng duy nhất biết mặt 'Giáo Sư' bị đầu độc chết ngay trong phòng thẩm vấn của Sở Cảnh Sát.",
            "Căn phòng được canh gác nghiêm ngặt, chỉ có 3 sĩ quan cao cấp bước vào.",
            "Camera ghi lại cảnh nạn nhân uống cốc nước rồi gục xuống.",
            "Mã hồ sơ nhân chứng: 1102."
        ],
        suspects: [
            {
                name: "Đội Trưởng", 
                role: "Hình Sự", 
                detail: "Khai: 'Tôi vào đưa hồ sơ cho hắn xem'."
            },
            {
                name: "Bác Sĩ Pháp Y", 
                role: "Pháp Y", 
                detail: "Khai: 'Tôi vào kiểm tra sức khỏe cho hắn'."
            },
            {
                name: "Gác Cửa", 
                role: "Cảnh Sát", 
                detail: "Khai: 'Tôi mang cốc nước vào theo lệnh Đội trưởng'."
            }
        ],
        evidence: [
            {
                name: "Cốc Nước", 
                icon: "🥤", 
                desc: "Chứa chất độc Kali Xyanua. Miệng cốc có dấu vân tay của Cảnh Sát Gác Cửa."
            },
            {
                name: "Găng Tay Cao Su", 
                icon: "🧤", 
                locked: true, 
                code: "1102", 
                desc: "Tìm thấy trong thùng rác, bên trong găng tay dính bột độc. Xét nghiệm ADN bên trong găng tay trùng khớp với Bác Sĩ Pháp Y."
            },
            {
                name: "Camera", 
                icon: "📹", 
                desc: "Góc quay cho thấy Bác Sĩ Pháp Y đã lén bỏ bột vào cốc nước khi Cảnh Sát Gác Cửa không để ý."
            }
        ],
        opts: { 
            s: ["Bác Sĩ Pháp Y", "Đội Trưởng", "Gác Cửa"], 
            w: ["Bột Độc Xyanua", "Súng", "Dao"], 
            l: ["Phòng Thẩm Vấn", "Phòng Pháp Y", "Hành Lang"] 
        },
        sol: {s: "Bác Sĩ Pháp Y", w: "Bột Độc Xyanua", l: "Phòng Thẩm Vấn"}
    },
    {
        id: 52,
        title: "Con Tin Bí Ẩn", 
        diff: "KHÓ",
        desc: "Một đoạn video tống tiền gửi đến điện thoại bạn.",
        story: [
            "Bạn nhận được video quay cảnh người trợ lý của mình bị trói trong một căn hầm tối tăm. Bom hẹn giờ đang đếm ngược.",
            "Trong video, có tiếng chuông đồng hồ Big Ben vang lên và tiếng tàu hỏa chạy qua.",
            "Bạn phải tìm ra địa điểm trước khi bom nổ.",
            "Mã số trên quả bom trong video: 5060."
        ],
        suspects: [
            {
                name: "Kẻ Bắt Cóc", 
                role: "Giấu Mặt", 
                detail: "Khai: (Qua điện thoại) 'Mày chỉ có 30 phút'."
            },
            {
                name: "NV Đường Sắt", 
                role: "Bảo Trì", 
                detail: "Khai: 'Tôi thấy một gã khả nghi lảng vảng ở khu bảo trì đường ray'."
            },
            {
                name: "Người Gác Tháp", 
                role: "Gác Chuông", 
                detail: "Khai: 'Không có ai lên tháp chuông cả'."
            }
        ],
        evidence: [
            {
                name: "Âm Thanh Nền", 
                icon: "🔊", 
                desc: "Tiếng chuông Big Ben là thật, nhưng tiếng tàu hỏa lại có độ vang vọng, chứng tỏ địa điểm là ở dưới lòng đất, gần ga tàu điện ngầm."
            },
            {
                name: "Bản Đồ Tàu Điện", 
                icon: "🗺️", 
                locked: true, 
                code: "5060", 
                desc: "Chỉ có một ga tàu bỏ hoang nằm ngay dưới chân tháp đồng hồ. Đó là Ga Bóng Ma số 9."
            },
            {
                name: "Vệt Dầu Mỡ", 
                icon: "🛢️", 
                desc: "Trên áo nạn nhân dính dầu mỡ đặc trưng của đường ray tàu hỏa."
            }
        ],
        opts: { 
            s: ["Kẻ Bắt Cóc", "NV Đường Sắt", "Người Gác Tháp"], 
            w: ["Bom Hẹn Giờ", "Súng", "Dao"], 
            l: ["Ga Tàu Bỏ Hoang", "Tháp Chuông", "Nhà Kho"] 
        },
        sol: {s: "Kẻ Bắt Cóc", w: "Bom Hẹn Giờ", l: "Ga Tàu Bỏ Hoang"}
    },
    {
        id: 53,
        title: "Giải Cứu", 
        diff: "TB",
        desc: "Đột kích vào Ga Bóng Ma số 9.",
        story: [
            "Bạn ập vào ga tàu bỏ hoang. Trợ lý của bạn bị trói trên ghế, quả bom chỉ còn 1 phút.",
            "Một bóng đen lao ra tấn công bạn rồi bỏ chạy vào đường hầm.",
            "Bạn phải chọn: Đuổi theo hắn hay gỡ bom cứu trợ lý?",
            "Mã gỡ bom (gợi ý: cắt dây màu gì?): 0007."
        ],
        suspects: [
            {
                name: "Sát Thủ", 
                role: "Bóng Đêm", 
                detail: "Khai: (Bỏ chạy)."
            },
            {
                name: "Trợ Lý", 
                role: "Nạn Nhân", 
                detail: "Khai: 'Cứu em! Dây màu ĐỎ! Hắn bảo cắt dây ĐỎ là nổ đấy!'."
            },
            {
                name: "Bạn", 
                role: "Thám Tử", 
                detail: "Suy nghĩ: Hắn là kẻ lừa đảo, hay Trợ lý đang hoảng loạn?"
            }
        ],
        evidence: [
            {
                name: "Sơ Đồ Bom", 
                icon: "💣", 
                locked: true, 
                code: "0007", 
                desc: "Bản vẽ kỹ thuật tìm thấy dưới đất ghi chú: 'Xanh là Kích Hoạt, Đỏ là Ngắt'. Trợ lý đã nghe nhầm hoặc bị lừa."
            },
            {
                name: "Dao Găm", 
                icon: "🗡️", 
                desc: "Của sát thủ đánh rơi. Trên cán dao khắc logo của tổ chức 'Chim Ưng'."
            },
            {
                name: "Vết Máu", 
                icon: "🩸", 
                desc: "Bạn đã bắn trúng vai hắn trước khi hắn chạy thoát."
            }
        ],
        opts: { 
            s: ["Sát Thủ", "Trợ Lý", "Bạn"], 
            w: ["Cắt Dây Đỏ (Gỡ Bom)", "Cắt Dây Xanh", "Bỏ Chạy"], 
            l: ["Ga Tàu Bỏ Hoang", "Đường Hầm", "Sở Cảnh Sát"] 
        },
        sol: {s: "Sát Thủ", w: "Cắt Dây Đỏ (Gỡ Bom)", l: "Ga Tàu Bỏ Hoang"}
    },
    {
        id: 54,
        title: "Mật Mã Giáo Sư", 
        diff: "KHÓ",
        desc: "Truy tìm manh mối từ chiếc dao găm.",
        story: [
            "Từ logo trên con dao găm, bạn tìm ra hang ổ của tổ chức 'Chim Ưng' tại một biệt thự cổ ngoại ô.",
            "Biệt thự trống trơn, nhưng trong thư phòng có một két sắt khổng lồ.",
            "Trên bàn là một ván cờ vua đang chơi dở. Quân Vua đen đã bị chiếu hết.",
            "Mã két sắt (4 số): ????"
        ],
        suspects: [
            {
                name: "Quản Gia", 
                role: "Biệt Thự", 
                detail: "Khai: 'Ông chủ đã đi du lịch từ hôm qua'.<br>Thái độ: Trung thành tuyệt đối."
            },
            {
                name: "Giáo Sư", 
                role: "Vắng Mặt", 
                detail: "Nghi vấn: Chủ nhân bí ẩn của biệt thự."
            },
            {
                name: "Hàng Xóm", 
                role: "Nhân Chứng", 
                detail: "Khai: 'Ngôi nhà này luôn đóng kín cửa'."
            }
        ],
        evidence: [
            {
                name: "Bàn Cờ Vua", 
                icon: "♟️", 
                desc: "Số lượng các quân cờ còn lại trên bàn: 8 Tốt, 2 Mã, 4 Xe, 6 Tượng (tính cả 2 bên). Mã gợi ý: 8246."
            },
            {
                name: "Bức Tranh Cổ", 
                icon: "🖼️", 
                locked: true, 
                code: "8246", 
                desc: "Khi mở két, bên trong là một danh sách các quan chức nhận hối lộ và sơ đồ tấn công Sở Cảnh Sát."
            },
            {
                name: "Lò Sưởi", 
                icon: "🔥", 
                desc: "Nhiều tài liệu đã bị đốt cháy, nhưng danh sách trong két là thứ quan trọng nhất hắn giữ lại để tống tiền."
            }
        ],
        opts: { 
            s: ["Quản Gia", "Giáo Sư", "Hàng Xóm"], 
            w: ["Danh Sách Đen", "Bom", "Súng"], 
            l: ["Thư Phòng", "Hầm Rượu", "Sân Vườn"] 
        },
        sol: {s: "Giáo Sư", w: "Danh Sách Đen", l: "Thư Phòng"}
    },
    {
        id: 55,
        title: "Cuộc Tấn Công", 
        diff: "CỰC KHÓ",
        desc: "Sở Cảnh Sát thất thủ.",
        story: [
            "Bạn mang danh sách đen về Sở Cảnh Sát. Đột nhiên, điện toàn tòa nhà vụt tắt. Tiếng súng nổ vang trời.",
            "Một nhóm lính đánh thuê đeo mặt nạ hơi cay đột kích vào tòa nhà.",
            "Mục tiêu của chúng: Tiêu hủy danh sách đen và giết bạn.",
            "Mã kho vũ khí của cảnh sát: 9111."
        ],
        suspects: [
            {
                name: "Đội Trưởng Lính", 
                role: "Đánh Thuê", 
                detail: "Khai: 'Giao cái list ra đây, tao sẽ tha mạng'."
            },
            {
                name: "Cảnh Sát Trưởng", 
                role: "Chỉ Huy", 
                detail: "Khai: 'Chúng quá đông! Chúng ta phải rút vào phòng an toàn'."
            },
            {
                name: "Phó Cảnh Sát", 
                role: "Nội Gián 2", 
                detail: "Khai: (Ẩn mình trong đám cảnh sát)."
            }
        ],
        evidence: [
            {
                name: "Lựu Đạn Khói", 
                icon: "💣", 
                desc: "Chúng dùng khói để che mắt camera và cảm biến nhiệt."
            },
            {
                name: "Cửa Hậu", 
                icon: "🚪", 
                locked: true, 
                code: "9111", 
                desc: "Cửa hậu được mở từ bên trong. Có kẻ phản bội thứ 2 đã mở đường cho chúng."
            },
            {
                name: "Điện Thoại", 
                icon: "📱", 
                desc: "Của Phó Cảnh Sát có tin nhắn: 'Đã mở cửa sau. Xử lý thằng thám tử đi'."
            }
        ],
        opts: { 
            s: ["Đội Trưởng Lính", "Cảnh Sát Trưởng", "Phó Cảnh Sát"], 
            w: ["Súng Trường Tấn Công", "Dao", "Bom Khói"], 
            l: ["Sảnh Chính", "Cửa Hậu", "Phòng An Toàn"] 
        },
        sol: {s: "Phó Cảnh Sát", w: "Súng Trường Tấn Công", l: "Cửa Hậu"}
    },
    {
        id: 56,
        title: "Đường Cùng", 
        diff: "RẤT KHÓ",
        desc: "Bị dồn vào chân tường.",
        story: [
            "Bạn và Cảnh Sát Trưởng bị dồn lên sân thượng tòa nhà. Trực thăng của 'Giáo Sư' đang bay lơ lửng phía trên.",
            "Tên Phó Cảnh Sát (Nội Gián) chĩa súng vào hai người. Hắn yêu cầu bạn ném danh sách đen xuống.",
            "Bạn chỉ có một khẩu súng với 1 viên đạn duy nhất.",
            "Mã kích hoạt bẫy sân thượng: 0000."
        ],
        suspects: [
            {
                name: "Phó Cảnh Sát", 
                role: "Nội Gián", 
                detail: "Khai: 'Kết thúc rồi thám tử. Mày quá tò mò'."
            },
            {
                name: "Giáo Sư", 
                role: "Trùm", 
                detail: "Ra hiệu: 'Bắn nó đi' (Từ trực thăng)."
            },
            {
                name: "CS Trưởng", 
                role: "Đồng Đội", 
                detail: "Khai: 'Bắn thùng xăng phía sau hắn!'."
            }
        ],
        evidence: [
            {
                name: "Thùng Phuy Xăng", 
                icon: "🛢️", 
                locked: true, 
                code: "0000", 
                desc: "Đặt cạnh máy phát điện dự phòng. Một viên đạn vào đây sẽ gây nổ lớn."
            },
            {
                name: "Gió Lớn", 
                icon: "💨", 
                desc: "Gió đang thổi mạnh về phía trực thăng. Khói đen sẽ làm phi công mất tầm nhìn."
            },
            {
                name: "Khẩu Súng", 
                icon: "🔫", 
                desc: "Chỉ còn 1 viên đạn. Phải bắn chính xác."
            }
        ],
        opts: { 
            s: ["Bạn", "Phó Cảnh Sát", "CS Trưởng"], 
            w: ["Bắn Thùng Xăng (Gây Nổ)", "Bắn Nội Gián", "Đầu Hàng"], 
            l: ["Sân Thượng", "Trực Thăng", "Cầu Thang"] 
        },
        sol: {s: "Bạn", w: "Bắn Thùng Xăng (Gây Nổ)", l: "Sân Thượng"}
    },
    {
        id: 57,
        title: "Sự Trả Thù", 
        diff: "KHÓ",
        desc: "Vụ nổ lớn nhưng 'Giáo Sư' vẫn thoát.",
        story: [
            "Vụ nổ thùng xăng đã thổi bay tên nội gián và khiến trực thăng phải hạ cánh khẩn cấp xuống một bãi phế liệu gần đó.",
            "Bạn đuổi theo đến bãi phế liệu. Xác chiếc trực thăng bốc cháy, nhưng không thấy xác 'Giáo Sư'.",
            "Hắn đang ẩn nấp trong mê cung xe hơi cũ nát.",
            "Mã cần cẩu nam châm: 5555."
        ],
        suspects: [
            {
                name: "Giáo Sư", 
                role: "Kẻ Thù", 
                detail: "Khai: 'Ta sẽ chôn vùi mày ở đây'."
            },
            {
                name: "Phi Công", 
                role: "Tử Vong", 
                detail: "Khai: (Đã chết trong cabin)."
            },
            {
                name: "Bạn", 
                role: "Thám Tử", 
                detail: "Suy nghĩ: Phải dùng mưu trí, hắn có súng máy."
            }
        ],
        evidence: [
            {
                name: "Máy Cần Cẩu", 
                icon: "🏗️", 
                locked: true, 
                code: "5555", 
                desc: "Bạn leo lên buồng điều khiển cần cẩu nam châm khổng lồ."
            },
            {
                name: "Xe Hơi Cũ", 
                icon: "🚗", 
                desc: "Giáo Sư đang nấp sau chiếc xe màu đỏ. Nam châm có thể hút chiếc xe lên."
            },
            {
                name: "Vết Máu", 
                icon: "🩸", 
                desc: "Dẫn đường đến chỗ nấp của hắn."
            }
        ],
        opts: { 
            s: ["Bạn", "Giáo Sư", "Phi Công"], 
            w: ["Dùng Nam Châm Hút Xe", "Súng Lục", "Lao Vào"], 
            l: ["Bãi Phế Liệu", "Buồng Lái Cần Cẩu", "Xác Trực Thăng"] 
        },
        sol: {s: "Bạn", w: "Dùng Nam Châm Hút Xe", l: "Bãi Phế Liệu"}
    },
    {
        id: 58,
        title: "Chiếc Mặt Nạ Vỡ", 
        diff: "RẤT KHÓ",
        desc: "Bộ mặt thật của trùm tội phạm.",
        story: [
            "Chiếc xe bị nam châm hút lên cao rồi thả rơi xuống đất. 'Giáo Sư' bị thương nặng, bò ra khỏi xe.",
            "Hắn tháo chiếc mặt nạ dưỡng khí ra. Khuôn mặt hắn khiến bạn sững sờ.",
            "Hắn chính là... Người thầy thám tử cũ của bạn, người được cho là đã chết 5 năm trước.",
            "Mã huy hiệu cảnh sát cũ: 1985."
        ],
        suspects: [
            {
                name: "Thầy Cũ", 
                role: "Giáo Sư", 
                detail: "Khai: 'Công lý là dối trá. Chỉ có quyền lực và tiền bạc là thật'."
            },
            {
                name: "Bạn", 
                role: "Thám Tử", 
                detail: "Cảm xúc: Bàng hoàng, thất vọng."
            },
            {
                name: "Đội Đặc Nhiệm", 
                role: "Hỗ Trợ", 
                detail: "Đang tới gần (Tiếng còi hú)."
            }
        ],
        evidence: [
            {
                name: "Huy Hiệu Cảnh Sát", 
                icon: "👮", 
                locked: true, 
                code: "1985", 
                desc: "Huy hiệu cũ kỹ khắc tên ông ta, rơi ra từ túi áo vest."
            },
            {
                name: "Khẩu Súng Vàng", 
                icon: "🔫", 
                desc: "Vũ khí biểu tượng của Giáo Sư. Hắn định giơ súng lên bắn bạn lần cuối."
            },
            {
                name: "Vết Sẹo Cũ", 
                icon: "🤕", 
                desc: "Vết sẹo trên tay hắn là do đỡ đạn cho bạn trong một nhiệm vụ quá khứ."
            }
        ],
        opts: { 
            s: ["Thầy Cũ", "Bạn", "Đội Đặc Nhiệm"], 
            w: ["Súng Vàng", "Lời Nói", "Còng Tay"], 
            l: ["Bãi Phế Liệu", "Quá Khứ", "Bệnh Viện"] 
        },
        sol: {s: "Thầy Cũ", w: "Súng Vàng", l: "Bãi Phế Liệu"}
    },
    {
        id: 59,
        title: "Sự Thật Cuối Cùng", 
        diff: "HUYỀN THOẠI",
        desc: "Kết thúc Phần 1: Một cái bẫy hoàn hảo.",
        story: [
            "Khi đội đặc nhiệm ập đến, 'Giáo Sư' bất ngờ tự sát bằng súng của mình. Trước khi chết, hắn cười: 'Món quà cuối cùng dành cho trò...'.",
            "Bạn cầm khẩu súng lên xem. Đột nhiên, Cảnh Sát Trưởng bước ra từ xe bọc thép, chỉ tay vào bạn: 'Bắt lấy hắn! Hắn đã giết Giáo Sư để bịt đầu mối!'.",
            "Hóa ra, Cảnh Sát Trưởng cũng là người của tổ chức. Bạn đã bị gài bẫy trở thành kẻ giết người.",
            "Mã còng số 8: 0000."
        ],
        suspects: [
            {
                name: "CS Trưởng", 
                role: "Trùm Cuối", 
                detail: "Khai: 'Giáo Sư chỉ là con tốt. Tao mới là Vua'."
            },
            {
                name: "Bạn", 
                role: "Thám Tử", 
                detail: "Tình trạng: Bị bao vây, cầm hung khí."
            },
            {
                name: "Giáo Sư", 
                role: "Đã Chết", 
                detail: "Vai trò: Vật tế thần."
            }
        ],
        evidence: [
            {
                name: "Khẩu Súng", 
                icon: "🔫", 
                desc: "Đã bị tráo đạn. Viên đạn giết Giáo Sư khớp với súng của bạn."
            },
            {
                name: "Camera Gắn Áo", 
                icon: "📹", 
                locked: true, 
                code: "0000", 
                desc: "Cảnh sát trưởng đã tắt camera của mình. Không có bằng chứng bạn vô tội."
            },
            {
                name: "Lối Thoát", 
                icon: "🏃", 
                desc: "Một chiếc moto phân khối lớn của tên lính đánh thuê còn sót lại gần đó. Chạy trốn hay đầu hàng?"
            }
        ],
        opts: { 
            s: ["CS Trưởng", "Bạn", "Giáo Sư"], 
            w: ["Dàn Dựng (Đổ Tội)", "Súng", "Luật Pháp"], 
            l: ["Hiện Trường Vụ Án", "Nhà Tù", "Cuộc Sống Lưu Vong"] 
        },
        sol: {s: "CS Trưởng", w: "Dàn Dựng (Đổ Tội)", l: "Hiện Trường Vụ Án"}
    }
];