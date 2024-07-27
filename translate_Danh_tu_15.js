// /*
//  * Install the Generative AI SDK
//  *
//  * $ npm install @google/generative-ai
//  *
//  * See the getting started guide for more information
//  * https://ai.google.dev/gemini-api/docs/get-started/node
//  */
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyBFDy3Idxce0_8r7PxI-Orv1RQpmAO8nBA";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
});

const generationConfig = {
    temperature: 0.2,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

async function run() {
    const parts = [
        { text: "input: một danh sách dữ liệu json chứa các từ tiếng việt và các thông tin của nó {\n        \"data\": [\n{{            \"word\": \"địa chỉ\",            \"_word\": \"dia chi\",            \"description\": \"Những thông tin cụ thể về chỗ ở, nơi làm việc của một người, một cơ quan, v.v.\",            \"tl\": \"Danh từ\",            \"word_en\": \"address\",            \"tl_en\": \"Noun\"        },]\n}" },
        { text: "output: thêm trường \"synset_vi\" chứa các từ đồng nghĩa và cùng từ loại với từ trong trường \"word_en\", đồng thời chuyển các từ đó sang tiếng việt và bỏ trường \"word_en\" vaf \"tl_en\" {\n        \"data\": [\n{\n            \"word\": \"địa chỉ\",\n            \"_word\": \"dia chi\",\n            \"description\": \"Những thông tin cụ thể về chỗ ở, nơi làm việc của một người, một cơ quan, v.v.\",\n            \"tl\": \"Danh từ\",\n            \"synset_vi\": [\"địa chỉ nhà\", \"địa chỉ liên lạc\", \"nơi ở\", \"địa điểm\", \"đường\", \"số nhà\"]\n\n\n        },\n]\n}" },

        ////////////////////
        { text: "input: một danh sách dữ liệu json chứa các từ tiếng việt và các thông tin của nó {\n            \"word\": \"thiếp mời\",\n            \"_word\": \"thiep moi\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"invitation card\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thiếu nhi\",\n            \"_word\": \"thieu nhi\",\n            \"description\": \"Trẻ em thuộc các lứa tuổi thiếu niên, nhi đồng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"children\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thiếu niên\",\n            \"_word\": \"thieu nien\",\n            \"description\": \"Trẻ em thuộc lứa tuổi từ mười đến khoảng mười bốn, mười lăm.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"teenager\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thím\",\n            \"_word\": \"thim\",\n            \"description\": \"Vợ của chú (có thể dùng để xưng gọi).\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"aunt (wife of father's younger brother)\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thóc (gạo)\",\n            \"_word\": \"thoc (gao)\",\n            \"description\": \"Hạt lúa còn nguyên cả vỏ trấu.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"paddy rice\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thông báo\",\n            \"_word\": \"thong bao\",\n            \"description\": \"Báo cho mọi người biết tình hình, tin tức bằng lời nói hoặc văn bản.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"announcement\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thông tin\",\n            \"_word\": \"thong tin\",\n            \"description\": \"Điều được truyền đi cho biết.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"information\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thời gian biểu\",\n            \"_word\": \"thoi gian bieu\",\n            \"description\": \"Bản kê thời gian và trình tự làm các công việc khác nhau theo quy định (thường là trong ngày, trong tuần lễ).\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"schedule\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thợ kim hoàn\",\n            \"_word\": \"tho kim hoan\",\n            \"description\": \"Thợ gia công, chế tác các đồ trang sức bằng vàng bạc.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"jeweler\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thợ rèn\",\n            \"_word\": \"tho ren\",\n            \"description\": \"Thợ chuyên làm nghề rèn sắt thành dụng cụ.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"blacksmith\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thợ thêu\",\n            \"_word\": \"tho theu\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"embroiderer\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thù lao\",\n            \"_word\": \"thu lao\",\n            \"description\": \"Trả công (thường bằng tiền) để bù đắp lại công sức lao động đã bỏ ra.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"remuneration\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thủ tướng\",\n            \"_word\": \"thu tuong\",\n            \"description\": \"Người đứng đầu chính phủ ở một nước.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"prime minister\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thú dữ\",\n            \"_word\": \"thu du\",\n            \"description\": \"Loài thú lớn, rất dữ, như hổ, báo, v.v., có thể làm hại con người; thường dùng để ví những kẻ hung dữ, độc ác.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"beast\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thú y\",\n            \"_word\": \"thu y\",\n            \"description\": \"Ngành chuyên lo các việc về phòng, trị bệnh cũng như lai tạo giống, v.v. cho gia súc, gia cầm hoặc các loài động vật nói chung, và kiểm nghiệm các sản phẩm chăn nuôi.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"veterinary medicine\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ngữ pháp\",\n            \"_word\": \"ngu phap\",\n            \"description\": \"Hệ thống những phương thức và quy tắc cấu tạo từ, cấu tạo câu trong một ngôn ngữ.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"grammar\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thùng\",\n            \"_word\": \"thung\",\n            \"description\": \"Đồ đựng bằng kim loại hoặc bằng gỗ, có hình trụ hoặc hình hộp.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"barrel\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thuốc bắc\",\n            \"_word\": \"thuoc bac\",\n            \"description\": \"Thuốc chữa bệnh được chế biến từ các loại thảo mộc có nguồn gốc từ Trung Quốc; phân biệt với thuốc tây và thuốc nam.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"traditional Chinese medicine\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thuốc bổ\",\n            \"_word\": \"thuoc bo\",\n            \"description\": \"Thuốc có tác dụng tăng cường, bồi bổ thêm sức khoẻ cho cơ thể.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"tonic\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thuốc lá\",\n            \"_word\": \"thuoc la\",\n            \"description\": \"Thuốc hút được chế biến từ cây thuốc lá, thường được quấn thành điếu.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"cigarette\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thuỷ điện\",\n            \"_word\": \"thuy dien\",\n            \"description\": \"Điện do năng lượng của nước sinh ra.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"hydroelectricity\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thuỷ thủ\",\n            \"_word\": \"thuy thu\",\n            \"description\": \"Nhân viên làm việc trên tàu thuỷ.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sailor\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tinh trùng\",\n            \"_word\": \"tinh trung\",\n            \"description\": \"Tế bào sinh dục đực được hình thành trong tinh hoàn, có khả năng vận động.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sperm\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Thủy Điện Hòa Bình\",\n            \"_word\": \"thuy dien hoa binh\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Hoa Binh Hydroelectric Power Plant\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thuyền chài\",\n            \"_word\": \"thuyen chai\",\n            \"description\": \"Thuyền nhỏ dùng để đánh cá bằng chài lưới.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"fishing boat\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thuyền rồng\",\n            \"_word\": \"thuyen rong\",\n            \"description\": \"Thuyền lớn có trang trí hình rồng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"dragon boat\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trưởng thành\",\n            \"_word\": \"truong thanh\",\n            \"description\": \"Phát triển đến mức hoàn chỉnh, đầy đủ về mọi mặt.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"adulthood\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"mục đích\",\n            \"_word\": \"muc dich\",\n            \"description\": \"Cái vạch ra làm đích nhằm đạt cho được.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"purpose\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thứ tự\",\n            \"_word\": \"thu tu\",\n            \"description\": \"Sự sắp xếp lần lượt trên dưới, trước sau, một cách hợp lí, theo một nguyên tắc nhất định.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"order\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Thừa Thiên – Huế\",\n            \"_word\": \"thua thien – hue\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Thua Thien Hue\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thực phẩm\",\n            \"_word\": \"thuc pham\",\n            \"description\": \"Các thứ dùng để chế biến thành món ăn, như thịt, cá, trứng, v.v. (nói khái quát); phân biệt với lương thực.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"food\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thực tế\",\n            \"_word\": \"thuc te\",\n            \"description\": \"Tổng thể nói chung những gì đang tồn tại, đang diễn ra trong tự nhiên và trong xã hội, về mặt có quan hệ đến đời sống con người.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"reality\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thực vật\",\n            \"_word\": \"thuc vat\",\n            \"description\": \"Tên gọi chung các loài cây cỏ và những sinh vật bậc thấp khác có tính chất như cây cỏ, trong các tế bào cơ thể thường có màng bằng cellulos.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"plant\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thương (số)\",\n            \"_word\": \"thuong (so)\",\n            \"description\": \"Kết quả của phép chia.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"quotient\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bùng binh\",\n            \"_word\": \"bung binh\",\n            \"description\": \"Vòng tròn được vây cao (thường có hoa, cây cảnh bên trong) nằm ở giữa các ngả đường giao nhau để làm mốc cho xe cộ lưu thông.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"roundabout\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tỉ lệ\",\n            \"_word\": \"ti le\",\n            \"description\": \"Tỉ số giữa các phần của một tổng thể, hay giữa một phần nào đó với tổng thể.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"proportion\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tỉ số\",\n            \"_word\": \"ti so\",\n            \"description\": \"Thương số các số đo của hai đại lượng cùng loại với cùng một đơn vị đo.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"ratio\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tia chớp\",\n            \"_word\": \"tia chop\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"lightning\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tia nắng\",\n            \"_word\": \"tia nang\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sunbeam\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tia số\",\n            \"_word\": \"tia so\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"number line\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tích (số)\",\n            \"_word\": \"tich (so)\",\n            \"description\": \"Kết quả của phép nhân.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"product\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tiệc\",\n            \"_word\": \"tiec\",\n            \"description\": \"Bữa ăn đặc biệt có nhiều món ngon và có đông người dự, nhân một dịp vui mừng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"party\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Tiền Giang\",\n            \"_word\": \"tien giang\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Tien Giang\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tiến sĩ\",\n            \"_word\": \"tien si\",\n            \"description\": \"(Từ cũ) học vị của người đỗ khoa thi đình; Từ mới: là một học vị do trường đại học cấp cho nghiên cứu sinh sau đại học, công nhận luận án nghiên cứu của họ đã đáp ứng tiêu chuẩn bậc tiến sĩ, là hoàn toàn mới chưa từng có ai làm qua.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"doctor\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tiếng Anh\",\n            \"_word\": \"tieng anh\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"English\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tiếng nói\",\n            \"_word\": \"tieng noi\",\n            \"description\": \"Ngôn ngữ, về mặt là công cụ giao tiếp.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"voice\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tiểu học\",\n            \"_word\": \"tieu hoc\",\n            \"description\": \"Cấp học đầu tiên trong bậc học giáo dục phổ thông, từ lớp một đến lớp năm.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"primary school\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tim\",\n            \"_word\": \"tim\",\n            \"description\": \"Bộ phận trung tâm của hệ tuần hoàn, có chức năng điều khiển việc vận chuyển máu trong cơ thể.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"heart\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tin học\",\n            \"_word\": \"tin hoc\",\n            \"description\": \"Khoa học nghiên cứu về thông tin và các quá trình xử lí thông tin tự động trên máy tính.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"computer science\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tin nhắn\",\n            \"_word\": \"tin nhan\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"message\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tin tức\",\n            \"_word\": \"tin tuc\",\n            \"description\": \"Là một chủ đề có đủ sự liên quan đến công chúng hoặc khán giả đặc biệt để đảm bảo sự chú ý hoặc đưa tin của báo chí.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"news\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thần kì\",\n            \"_word\": \"than ki\",\n            \"description\": \"Tài tình một cách kì lạ, tới mức như không thể tưởng tượng nổi.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"miracle\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tình cảm\",\n            \"_word\": \"tinh cam\",\n            \"description\": \"Sự yêu mến, gắn bó giữa người với người.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"affection\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tình huống\",\n            \"_word\": \"tinh huong\",\n            \"description\": \"Sự diễn biến của tình hình, về mặt cần phải đối phó.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"situation\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thương yêu\",\n            \"_word\": \"thuong yeu\",\n            \"description\": \"Như yêu thương.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"love\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tình yêu\",\n            \"_word\": \"tinh yeu\",\n            \"description\": \"Tình cảm yêu mến làm cho gắn bó mật thiết và có trách nhiệm với người, với vật.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"love\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tính cách\",\n            \"_word\": \"tinh cach\",\n            \"description\": \"Đặc điểm riêng qua thái độ, cách cư xử của mỗi người.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"personality\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tính chất\",\n            \"_word\": \"tinh chat\",\n            \"description\": \"Đặc điểm riêng dùng làm cơ sở để phân biệt với những cái khác loại.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"nature\",\n            \"tl_en\": \"Noun\"\n        }," },
        { text: "output: thêm trường \"synset_vi\" chứa các từ đồng nghĩa và cùng từ loại với từ trong trường \"word_en\", đồng thời chuyển các từ đó sang tiếng việt và bỏ trường \"word_en\" vaf \"tl_en\" " },

        ////////////////////////{text: "input: một danh sách dữ liệu json chứa các từ tiếng việt và các thông tin của nó {\n            \"word\": \"tính từ\",\n            \"_word\": \"tinh tu\",\n            \"description\": \"Từ chuyên biểu thị ý nghĩa tính chất, thuộc tính, thường có thể trực tiếp làm vị ngữ trong câu.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"adjective\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"to lớn\",\n            \"_word\": \"to lon\",\n            \"description\": \"To và lớn (nói khái quát).\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"huge\",\n            \"tl_en\": \"Adjective\"\n        },\n        {\n            \"word\": \"tò mò\",\n            \"_word\": \"to mo\",\n            \"description\": \"Thích tìm tòi, dò hỏi để biết bất cứ điều gì nhằm thoả mãn sự hiếu kì hoặc vì lòng ham muốn nào đó, cho dù việc đó có quan hệ hay không quan hệ đến mình.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"curiosity\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"toa lét\",\n            \"_word\": \"toa let\",\n            \"description\": \"Buồng chuyên dùng cho việc vệ sinh cá nhân.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"toilet\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"toa xe\",\n            \"_word\": \"toa xe\",\n            \"description\": \"Toa (nói khái quát) dùng để chở hành khách hoặc chở hàng của ngành đường sắt.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"carriage\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"toà án\",\n            \"_word\": \"toa an\",\n            \"description\": \"Cơ quan nhà nước có nhiệm vụ xét xử các vụ phạm pháp, kiện tụng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"court\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tòa soạn\",\n            \"_word\": \"toa soan\",\n            \"description\": \"Ban biên tập, sửa chữa của một tờ báo hoặc tạp chí.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"editorial office\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"toàn cầu\",\n            \"_word\": \"toan cau\",\n            \"description\": \"Cả thế giới, trên phạm vi toàn thế giới.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"global\",\n            \"tl_en\": \"Adjective\"\n        },\n        {\n            \"word\": \"tóc xoăn\",\n            \"_word\": \"toc xoan\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"curly hair\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tổ chim\",\n            \"_word\": \"to chim\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"bird's nest\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tôn trọng\",\n            \"_word\": \"ton trong\",\n            \"description\": \"Giữ gìn và tránh vi phạm, xúc phạm đến.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"respect\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tổ tiên\",\n            \"_word\": \"to tien\",\n            \"description\": \"Tổng thể nói chung những người coi là thuộc những thế hệ đầu tiên, qua đời đã lâu, của một dòng họ hay một dân tộc, trong quan hệ với các thế hệ sau này.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"ancestors\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tổ trưởng\",\n            \"_word\": \"to truong\",\n            \"description\": \"Người đứng đầu điều hành công việc của một nhóm người.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"team leader\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tổng (số)\",\n            \"_word\": \"tong (so)\",\n            \"description\": \"Kết quả của một phép cộng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sum\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tổng thống\",\n            \"_word\": \"tong thong\",\n            \"description\": \"Nguyên thủ quốc gia, cá nhân lãnh đạo cao nhất trong một quốc gia, cũng như thủ tướng quyền hành và phạm vi của họ phụ thuộc quy định đề ra từ tổ chức lập pháp cao nhất của quốc gia đó.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"president\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tờ báo\",\n            \"_word\": \"to bao\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"newspaper\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tờ giấy\",\n            \"_word\": \"to giay\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sheet of paper\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tờ tiền\",\n            \"_word\": \"to tien\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"banknote\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Trà Vinh\",\n            \"_word\": \"tra vinh\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Tra Vinh\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"trại giam\",\n            \"_word\": \"trai giam\",\n            \"description\": \"Nơi giam giữ tù nhân.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"prison\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trà\",\n            \"_word\": \"tra\",\n            \"description\": \"Búp hoặc lá cây chè đã sao, đã chế biến, để pha nước uống.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"tea\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trạm xe buýt\",\n            \"_word\": \"tram xe buyt\",\n            \"description\": \"Nơi bố trí ở dọc đường giao thông, đón trả khách.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"bus stop\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trạm y tế\",\n            \"_word\": \"tram y te\",\n            \"description\": \"Cơ sở chữa bệnh nhỏ ở xã hoặc cơ quan.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"medical station\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trang phục\",\n            \"_word\": \"trang phuc\",\n            \"description\": \"Gồm các loại áo quần và một số vật dụng khác đi đi kèm như mũ, giầy, tất, khăn quàng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"costume\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trăng\",\n            \"_word\": \"trang\",\n            \"description\": \"Vệ tinh tự nhiên duy nhất của Trái Đất và là vệ tinh tự nhiên lớn thứ năm trong Hệ Mặt Trời.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"moon\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"quạt trần\",\n            \"_word\": \"quat tran\",\n            \"description\": \"Quạt điện được thiết kế để treo trên trần nhà.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"ceiling fan\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trần nhà\",\n            \"_word\": \"tran nha\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"ceiling\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tre\",\n            \"_word\": \"tre\",\n            \"description\": \"Cây thân cứng, rỗng ở các gióng, đặc ở mấu, mọc thành bụi, thường dùng để làm nhà và đan lát.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"bamboo\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trí khôn\",\n            \"_word\": \"tri khon\",\n            \"description\": \"Khả năng suy nghĩ và hiểu biết.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"intelligence\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trí thức\",\n            \"_word\": \"tri thuc\",\n            \"description\": \"Người làm việc lao động trí óc.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"intellectual\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"triều cường\",\n            \"_word\": \"trieu cuong\",\n            \"description\": \"Hiện tượng thuỷ triều dâng lên cao nhất, xảy ra vào thời kì trăng non hoặc trăng tròn.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"spring tide\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"triều đình\",\n            \"_word\": \"trieu dinh\",\n            \"description\": \"(Từ cũ) nơi các quan vào chầu vua và bàn việc nước; thường dùng để chỉ cơ quan trung ương, do vua trực tiếp đứng đầu, của nhà nước quân chủ.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"royal court\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trình độ\",\n            \"_word\": \"trinh do\",\n            \"description\": \"Mức độ về sự hiểu biết, về kĩ năng được xác định hoặc đánh giá theo tiêu chuẩn nhất định nào đó.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"level\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trò chơi\",\n            \"_word\": \"tro choi\",\n            \"description\": \"Hoạt động bày ra để vui chơi, giải trí.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"game\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trọc đầu\",\n            \"_word\": \"troc dau\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"bald head\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trọng tài\",\n            \"_word\": \"trong tai\",\n            \"description\": \"Người điều khiển và xác định thành tích của cuộc thi đấu trong một số môn thể thao.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"referee\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"xe tải\",\n            \"_word\": \"xe tai\",\n            \"description\": \"Ô tô lớn để chở hàng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"truck\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trống\",\n            \"_word\": \"trong\",\n            \"description\": \"Nhạc khí rỗng, thường có hình trụ, thân bằng gỗ hoặc kim loại có một hoặc hai mặt thường bịt da căng, dùng dùi hay tay để gõ thành tiếng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"drum\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trục hoành\",\n            \"_word\": \"truc hoanh\",\n            \"description\": \"Trục nằm ngang trong hai trục toạ độ, dùng để xác định hoành độ của các điểm trong mặt phẳng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"horizontal axis\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trục tung\",\n            \"_word\": \"truc tung\",\n            \"description\": \"Trục nằm dọc trong hai trục toạ độ, dùng để xác định tung độ của các điểm trong mặt phẳng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"vertical axis\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Trung Quốc (nước Trung Quốc)\",\n            \"_word\": \"trung quoc (nuoc trung quoc)\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"China\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"Trung Thu\",\n            \"_word\": \"trung thu\",\n            \"description\": \"(thường viết hoa) rằm tháng tám; ngày tết của trẻ em, theo phong tục cổ truyền.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Mid-Autumn Festival\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"trung ương\",\n            \"_word\": \"trung uong\",\n            \"description\": \"Thuộc bộ phận chính, quan trọng nhất, có tác dụng chi phối các bộ phận xung quanh có liên quan.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"central\",\n            \"tl_en\": \"Adjective\"\n        },\n        {\n            \"word\": \"truyền thống\",\n            \"_word\": \"truyen thong\",\n            \"description\": \"Thói quen hình thành đã lâu đời trong lối sống và nếp nghĩ, được truyền lại từ thế hệ này sang thế hệ khác.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"tradition\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trứng\",\n            \"_word\": \"trung\",\n            \"description\": \"Khối hình bầu dục hoặc hình cầu do một số động vật cái đẻ ra, sau có thể nở thành con.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"egg\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trường tiểu học\",\n            \"_word\": \"truong tieu hoc\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"primary school\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trường hợp\",\n            \"_word\": \"truong hop\",\n            \"description\": \"Việc xảy ra hoặc giả định xảy ra, nói về mặt tính chất cụ thể của nó, lần này khác những lần khác.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"case\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trường mầm non\",\n            \"_word\": \"truong mam non\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"kindergarten\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trường PTCS (cấp 2)\",\n            \"_word\": \"truong ptcs (cap 2)\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"lower secondary school\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trường THPT ( cấp 3)\",\n            \"_word\": \"truong thpt ( cap 3)\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"upper secondary school\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trưởng nhóm\",\n            \"_word\": \"truong nhom\",\n            \"description\": \"Người đứng đầu một nhóm người.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"group leader\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tuần\",\n            \"_word\": \"tuan\",\n            \"description\": \"Khoảng thời gian nhất định.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"week\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tuổi thơ\",\n            \"_word\": \"tuoi tho\",\n            \"description\": \"Độ tuổi còn nhỏ, còn non dại.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"childhood\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tuỷ sống\",\n            \"_word\": \"tuy song\",\n            \"description\": \"Chất tuỷ màu trắng đục, dạng ống dài ở trong cột xương sống.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"spinal cord\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tuyên ngôn\",\n            \"_word\": \"tuyen ngon\",\n            \"description\": \"Bản tuyên bố có tính chất cương lĩnh của một chính đảng, một tổ chức.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"manifesto\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"từ đồng âm\",\n            \"_word\": \"tu dong am\",\n            \"description\": \"Từ có vỏ ngữ âm giống nhau, nhưng khác nhau về nghĩa.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"homonym\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"từ ngữ\",\n            \"_word\": \"tu ngu\",\n            \"description\": \"Từ và ngữ (nói khái quát).\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"vocabulary\",\n            \"tl_en\": \"Noun\"\n        },"},
        { text: "output: thêm trường \"synset_vi\" chứa các từ đồng nghĩa và cùng từ loại với từ trong trường \"word_en\", đồng thời chuyển các từ đó sang tiếng việt và bỏ trường \"word_en\" vaf \"tl_en\" " },
    ];

    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
    });
    console.log(JSON.parse(result.response.text()));

}

run();