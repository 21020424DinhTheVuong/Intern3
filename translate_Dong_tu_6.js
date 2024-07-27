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

        ////////////////
        { text: "input: một danh sách dữ liệu json chứa các từ tiếng việt và các thông tin của nó {\n            \"word\": \"phát biểu\",\n            \"_word\": \"phat bieu\",\n            \"description\": \"Nói lên, nêu lên ý kiến, quan niệm, tình cảm của mình về vấn đề gì đó.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"speak\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phát động\",\n            \"_word\": \"phat dong\",\n            \"description\": \"Tuyên truyền, làm cho hiểu rõ ý nghĩa, mục đích của một việc làm để rồi cùng nhau bắt đầu tham gia một cách tự giác, hăng hái.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"launch\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phát hiện\",\n            \"_word\": \"phat hien\",\n            \"description\": \"Tìm thấy, tìm ra cái chưa ai biết.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"discover\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phân công\",\n            \"_word\": \"phan cong\",\n            \"description\": \"Giao cho làm một phần việc nhất định nào đó.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"assign\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phân loại\",\n            \"_word\": \"phan loai\",\n            \"description\": \"Chia ra thành nhiều loại khác nhau.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"classify\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phân tích\",\n            \"_word\": \"phan tich\",\n            \"description\": \"Là chẻ vấn đề ra thành từng mảnh nhỏ, để hiểu từng chi tiết, từng khía cạnh nhỏ, hiểu được vấn đề từ ngoài vào trong, từ trong ra ngoài.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"analyze\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"giữ nguyên\",\n            \"_word\": \"giu nguyen\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"keep intact\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phấn đấu\",\n            \"_word\": \"phan dau\",\n            \"description\": \"Cố gắng, bền bỉ thực hiện nhằm đạt tới mục đích cao đẹp đã đề ra.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"strive\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phấp phới\",\n            \"_word\": \"phap phoi\",\n            \"description\": \"Bay lật qua lật lại trước gió một cách nhẹ nhàng.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"flutter\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phê bình\",\n            \"_word\": \"phe binh\",\n            \"description\": \"Chỉ ra một cách cụ thể những khuyết điểm, thiếu sót của ai đó để góp ý, chê trách giúp họ nhận ra và sửa chữa.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"criticize\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phi ngựa\",\n            \"_word\": \"phi ngua\",\n            \"description\": \"Cưỡi ngựa và cho ngựa phi thật nhanh.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"gallop\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phiên dịch\",\n            \"_word\": \"phien dich\",\n            \"description\": \"Dịch một văn bản hay một lời phát biểu từ ngôn ngữ này sang ngôn ngữ khác.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"translate\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phòng bệnh\",\n            \"_word\": \"phong benh\",\n            \"description\": \"Ngăn ngừa bệnh tật để giữ gìn và tăng cường sức khoẻ.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"prevent disease\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phòng chống\",\n            \"_word\": \"phong chong\",\n            \"description\": \"Phòng bị trước và sẵn sàng chống lại.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"prevent\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phô tô\",\n            \"_word\": \"pho to\",\n            \"description\": \"Chụp sao lại.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"photocopy\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phơi quần áo\",\n            \"_word\": \"phoi quan ao\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"hang clothes out to dry\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phủ nhận\",\n            \"_word\": \"phu nhan\",\n            \"description\": \"Không thừa nhận là đúng, là có thật.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"deny\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phục hồi\",\n            \"_word\": \"phuc hoi\",\n            \"description\": \"Khôi phục cái đã mất đi hoặc đã giảm sút đi.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"recover\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phục vụ\",\n            \"_word\": \"phuc vu\",\n            \"description\": \"Làm việc nhằm giúp ích trực tiếp cho ai đó.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"serve\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"phun nước\",\n            \"_word\": \"phun nuoc\",\n            \"description\": \"Làm cho nước bị đẩy mạnh ra ngoài vòi hoặc ống.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"spray water\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"quan tâm\",\n            \"_word\": \"quan tam\",\n            \"description\": \"Để tâm, chú ý đến một cách thường xuyên.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"care\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"quàng khăn\",\n            \"_word\": \"quang khan\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"put on a scarf\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"quảng cáo\",\n            \"_word\": \"quang cao\",\n            \"description\": \"Trình bày, giới thiệu rộng rãi để cho nhiều người (thường là khách hàng) biết đến.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"advertise\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"quay cóp\",\n            \"_word\": \"quay cop\",\n            \"description\": \"Chép lại bài làm của người khác hoặc lén lút xem tài liệu đem theo khi kiểm tra, thi cử.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"cheat\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"quay phim\",\n            \"_word\": \"quay phim\",\n            \"description\": \"Cho camera hoạt động để thu hình ảnh vào phim.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"film\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"quét dọn\",\n            \"_word\": \"quet don\",\n            \"description\": \"Quét và dọn cho sạch, cho gọn (nói khái quát).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"sweep and clean\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"quét nhà\",\n            \"_word\": \"quet nha\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"sweep the floor\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"đề phòng\",\n            \"_word\": \"de phong\",\n            \"description\": \"Chuẩn bị trước các phương án để sẵn sàng đối phó, ngăn ngừa hoặc hạn chế những thiệt hại có thể xảy ra.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"guard against\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"quy định\",\n            \"_word\": \"quy dinh\",\n            \"description\": \"Định ra để phải theo, phải thực hiện trong công việc, trong hoạt động cụ thể.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"regulate\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"quy nạp\",\n            \"_word\": \"quy nap\",\n            \"description\": \"(suy lí, suy luận) đi từ những hiện tượng, sự kiện riêng đến những kết luận chung.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"inductive reasoning\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"quỳ\",\n            \"_word\": \"quy\",\n            \"description\": \"Ở tư thế đầu gối gập xuống và đặt sát mặt nền để đỡ toàn thân.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"kneel\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"quyết tâm\",\n            \"_word\": \"quyet tam\",\n            \"description\": \"Quyết và cố gắng thực hiện bằng được điều đã định, tuy biết là có nhiều khó khăn, trở ngại.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"resolve\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"ra lệnh\",\n            \"_word\": \"ra lenh\",\n            \"description\": \"Đưa ra mệnh lệnh.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"command\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"ra ngoài\",\n            \"_word\": \"ra ngoai\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"go out\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rạch\",\n            \"_word\": \"rach\",\n            \"description\": \"Làm cho đứt thành đường trên bề mặt, bằng vật sắc.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"cut\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rẽ phải\",\n            \"_word\": \"re phai\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"turn right\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rèn sắt\",\n            \"_word\": \"ren sat\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"forge iron\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rèn luyện\",\n            \"_word\": \"ren luyen\",\n            \"description\": \"Luyện tập một cách thường xuyên để đạt tới những phẩm chất hay trình độ ở một mức nào đó.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"temper\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"reo hò\",\n            \"_word\": \"reo ho\",\n            \"description\": \"Reo ầm lên, tỏ ý vui mừng hay thúc đẩy.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"shout\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rình mò\",\n            \"_word\": \"rinh mo\",\n            \"description\": \"Bí mật theo dõi với mục đích xấu (nói khái quát).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"lurk\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rong chơi\",\n            \"_word\": \"rong choi\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"roam\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rơi\",\n            \"_word\": \"roi\",\n            \"description\": \"Di chuyển xuống mặt đất một cách tự nhiên khi không có gì giữ lại ở vị trí trên cao.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"fall\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"ru ngủ\",\n            \"_word\": \"ru ngu\",\n            \"description\": \"Làm mê muội tinh thần và tê liệt ý chí đấu tranh.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"lullaby\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rụng tóc (đt)\",\n            \"_word\": \"rung toc (dt)\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"shed hair\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rút gọn\",\n            \"_word\": \"rut gon\",\n            \"description\": \"Làm cho có hình thức ngắn gọn, đơn giản hơn.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"simplify\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rút gọn phân số\",\n            \"_word\": \"rut gon phan so\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"reduce fraction\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rửa bát\",\n            \"_word\": \"rua bat\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"wash dishes\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rửa chân\",\n            \"_word\": \"rua chan\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"wash feet\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rửa mặt\",\n            \"_word\": \"rua mat\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"wash face\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rửa tay\",\n            \"_word\": \"rua tay\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"wash hands\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"rước đèn\",\n            \"_word\": \"ruoc den\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"carry lantern\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"san sẻ\",\n            \"_word\": \"san se\",\n            \"description\": \"Chia bớt cho nhau để cùng hưởng, cùng chịu (nói khái quát).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"share\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"sản xuất\",\n            \"_word\": \"san xuat\",\n            \"description\": \"Là những hoạt động của con người nhằm tạo ra của cải vật chất nói chung.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"produce\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"sáng tạo\",\n            \"_word\": \"sang tao\",\n            \"description\": \"Tạo ra những giá trị mới về vật chất hoặc tinh thần.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"create\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"sao chép\",\n            \"_word\": \"sao chep\",\n            \"description\": \"Tạo ra một hoặc nhiều bản giống như bản gốc.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"copy\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"săn bắn\",\n            \"_word\": \"san ban\",\n            \"description\": \"Dùng dụng cụ như dây, cung tên, nỏ để bắt muông thú ở rừng.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"hunt\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"sắp xếp\",\n            \"_word\": \"sap xep\",\n            \"description\": \"Xếp theo một trật tự coi là hợp lí nhất.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"arrange\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"siêu âm\",\n            \"_word\": \"sieu am\",\n            \"description\": \"(Khẩu ngữ) khám, chữa bệnh bằng thiết bị ứng dụng sóng siêu âm.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"ultrasound\",\n            \"tl_en\": \"Verb\"\n        }," },
        { text: "output: thêm trường \"synset_vi\" chứa các từ đồng nghĩa và cùng từ loại với từ trong trường \"word_en\", đồng thời chuyển các từ đó sang tiếng việt và bỏ trường \"word_en\" vaf \"tl_en\" " },

        ////////////////////
        { text: "input: một danh sách dữ liệu json chứa các từ tiếng việt và các thông tin của nó {\n            \"word\": \"sinh đẻ\",\n            \"_word\": \"sinh de\",\n            \"description\": \"Sinh con (nói khái quát) Đồng nghĩa với sinh nở.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"give birth\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"sinh sản\",\n            \"_word\": \"sinh san\",\n            \"description\": \"Đẻ, về mặt chức năng duy trì và phát triển nòi giống của sinh vật (nói khái quát).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"reproduce\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"sinh sống\",\n            \"_word\": \"sinh song\",\n            \"description\": \"Sống, về mặt tồn tại trên đời (nói khái quát).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"live\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"soi\",\n            \"_word\": \"soi\",\n            \"description\": \"Chiếu ánh sáng vào làm cho thấy rõ.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"shine\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"sốt\",\n            \"_word\": \"sot\",\n            \"description\": \"Tăng nhiệt độ cơ thể lên quá mức bình thường, do bị bệnh.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"fever\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"súc miệng\",\n            \"_word\": \"suc mieng\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"rinse mouth\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"sum họp\",\n            \"_word\": \"sum hop\",\n            \"description\": \"Tụ họp tại một chỗ một cách vui vẻ, sau một thời gian phải sống xa nhau.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"gather\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"suy nghĩ\",\n            \"_word\": \"suy nghi\",\n            \"description\": \"Vận dụng sự hoạt động của trí óc để tìm hiểu và giải quyết vấn đề, từ một số phán đoán và ý nghĩ này đi đến những phán đoán và ý nghĩ khác có chứa tri thức mới.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"think\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"sửa chữa\",\n            \"_word\": \"sua chua\",\n            \"description\": \"Sửa những chỗ hư hỏng, sai sót (nói khái quát).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"repair\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tác động\",\n            \"_word\": \"tac dong\",\n            \"description\": \"Làm cho một đối tượng nào đó có những biến đổi nhất định.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"impact\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tách\",\n            \"_word\": \"tach\",\n            \"description\": \"Làm cho rời hẳn ra, không còn gần hoặc gắn liền với nhau thành một khối nữa.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"separate\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tách lớp\",\n            \"_word\": \"tach lop\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"split class\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tài trợ\",\n            \"_word\": \"tai tro\",\n            \"description\": \"Giúp đỡ về mặt tài chính.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"sponsor\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tái phát\",\n            \"_word\": \"tai phat\",\n            \"description\": \"(bệnh, vết thương cũ) phát lại sau một thời gian đã bớt, đã khỏi.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"recur\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tái phạm\",\n            \"_word\": \"tai pham\",\n            \"description\": \"Phạm lại tội cũ hoặc sai lầm cũ.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"reoffend\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tạm biệt\",\n            \"_word\": \"tam biet\",\n            \"description\": \"Chia tay nhau với hi vọng sẽ sớm được gặp lại; cũng dùng làm lời chào khi chia tay.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"farewell\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tán thành\",\n            \"_word\": \"tan thanh\",\n            \"description\": \"Đồng ý chủ trương hoặc hành vi (của người khác).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"approve\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tạo dáng\",\n            \"_word\": \"tao dang\",\n            \"description\": \"Tạo thành những hình dáng hoặc tư thế nào đó.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"pose\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tát\",\n            \"_word\": \"tat\",\n            \"description\": \"Đánh mạnh vào mặt bằng bàn tay đang mở.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"slap\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tặc lưỡi\",\n            \"_word\": \"tac luoi\",\n            \"description\": \"Bật lưỡi kêu thành tiếng, biểu lộ ý không bằng lòng nhưng đành bỏ qua cho xong chuyện.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"click tongue\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tấn công\",\n            \"_word\": \"tan cong\",\n            \"description\": \"Tiến đánh một cách dữ dội, mãnh mẽ và thường trên diện rộng.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"attack\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tập thể dục\",\n            \"_word\": \"tap the duc\",\n            \"description\": \"Là tất cả những hoạt động của cơ thể nhằm nâng cao hoặc duy trì sự vừa vặn của cơ thể và sức khỏe nói chung.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"exercise\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tập trung\",\n            \"_word\": \"tap trung\",\n            \"description\": \"Dồn vào một chỗ hoặc một điểm.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"focus\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tập viết\",\n            \"_word\": \"tap viet\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"practice writing\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tha\",\n            \"_word\": \"tha\",\n            \"description\": \"(con vật) mang đi bằng cách ngậm chặt ở miệng hoặc mỏ.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"carry\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tha mồi\",\n            \"_word\": \"tha moi\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"carry bait\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tha thứ\",\n            \"_word\": \"tha thu\",\n            \"description\": \"Tha cho, bỏ qua cho, không trách cứ hoặc trừng phạt nữa.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"forgive\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thả diều\",\n            \"_word\": \"tha dieu\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"fly kite\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thả mồi\",\n            \"_word\": \"tha moi\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"drop bait\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tham dự\",\n            \"_word\": \"tham du\",\n            \"description\": \"(Trang trọng) dự một hoạt động cụ thể nào đó.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"attend\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tham khảo\",\n            \"_word\": \"tham khao\",\n            \"description\": \"Tìm đọc thêm tài liệu, xem xét, nghe ngóng thêm ý kiến có liên quan để biết rõ hơn về vấn đề đang quan tâm.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"refer\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tham quan\",\n            \"_word\": \"tham quan\",\n            \"description\": \"Đi xem tận nơi, tận mắt để mở rộng hiểu biết hoặc để học tập kinh nghiệm.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"visit\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thán phục\",\n            \"_word\": \"than phuc\",\n            \"description\": \"Cảm phục và khen ngợi.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"admire\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thành công\",\n            \"_word\": \"thanh cong\",\n            \"description\": \"Đạt được kết quả, mục đích như dự định.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"succeed\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thành lập\",\n            \"_word\": \"thanh lap\",\n            \"description\": \"Chính thức lập nên, dựng nên (thường nói về một tổ chức quan trọng).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"establish\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"tháo gỡ\",\n            \"_word\": \"thao go\",\n            \"description\": \"Tháo bỏ, phá bỏ đi cái ngăn cản, gây nguy hiểm.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"disentangle\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thắc mắc\",\n            \"_word\": \"thac mac\",\n            \"description\": \"Cảm thấy còn có điều chưa hiểu, chưa thông nên muốn được giải đáp.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"wonder\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thăm hỏi\",\n            \"_word\": \"tham hoi\",\n            \"description\": \"Thăm và hỏi han tình hình nhằm tỏ sự quan tâm (nói khái quát).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"visit\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thắng lợi\",\n            \"_word\": \"thang loi\",\n            \"description\": \"Giành được phần thắng trong đấu tranh, hoặc đạt được kết quả tốt đẹp trong một hoạt động đòi hỏi nhiều nỗ lực.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"win\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"theo dõi\",\n            \"_word\": \"theo doi\",\n            \"description\": \"Chú ý quan sát (thường là kín đáo, bí mật) từng hoạt động, từng diễn biến để biết rõ hoặc để có sự ứng phó, xử lí kịp thời.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"monitor\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"theo đuổi\",\n            \"_word\": \"theo duoi\",\n            \"description\": \"Làm việc gì đó một cách kiên trì, bền bỉ nhằm mong đạt cho bằng được mục đích (thường là những việc làm tốt đẹp).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"pursue\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thét\",\n            \"_word\": \"thet\",\n            \"description\": \"Quát, mắng, kêu, v.v., bằng giọng rất to và cao đến thé giọng, thường để biểu thị sự tức tối, căm giận hay hăm doạ.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"scream\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thề\",\n            \"_word\": \"the\",\n            \"description\": \"Nói hoặc hứa một cách chắc chắn bằng cách lấy cái thiêng liêng, quý báu như danh dự, tính mạng, quỷ thần, v.v., để làm chứng, làm điều đảm bảo cho lời nói ấy.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"swear\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thêm\",\n            \"_word\": \"them\",\n            \"description\": \"Làm cho hoặc trở nên nhiều hơn lên một phần về số lượng hoặc mức độ.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"add\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thềm\",\n            \"_word\": \"them\",\n            \"description\": \"Phần nền trước cửa hoặc chung quanh nhà, có mái che nhưng thường không có cột đỡ.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"threshold\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thêu\",\n            \"_word\": \"theu\",\n            \"description\": \"Dùng kim và chỉ màu tạo nên các hình trên mặt vải.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"embroider\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thi cử\",\n            \"_word\": \"thi cu\",\n            \"description\": \"Thi vào hoặc ra trường hay để nhận một bằng cấp, học vị nào đó (nói khái quát).\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"take an exam\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thiếp đi\",\n            \"_word\": \"thiep di\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"fall asleep\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thiết kế\",\n            \"_word\": \"thiet ke\",\n            \"description\": \"Trình bày tài liệu kĩ thuật có bản tính toán, bản vẽ, một công trình xây dựng, sản phẩm.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"design\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thoát hiểm\",\n            \"_word\": \"thoat hiem\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"escape\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thổi\",\n            \"_word\": \"thoi\",\n            \"description\": \"Chúm miệng lại và làm cho luồng hơi bật mạnh từ trong miệng ra.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"blow\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thổi bóng\",\n            \"_word\": \"thoi bong\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"blow bubble\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thổi kèn\",\n            \"_word\": \"thoi ken\",\n            \"description\": \"\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"blow horn\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thông cảm\",\n            \"_word\": \"thong cam\",\n            \"description\": \"Hiểu thấu hoàn cảnh, khó khăn riêng và chia sẻ tâm tư, tình cảm.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"sympathize\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thông qua\",\n            \"_word\": \"thong qua\",\n            \"description\": \"(cơ quan hoặc người có thẩm quyền) đồng ý chấp thuận cho được thực hiện, sau khi đã xem xét, thảo luận.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"approve\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"thống nhất\",\n            \"_word\": \"thong nhat\",\n            \"description\": \"Hợp thành một khối có chung cơ cấu, tổ chức.\",\n            \"tl\": \"Động từ\",\n            \"word_en\": \"unify\",\n            \"tl_en\": \"Verb\"\n        }," },
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