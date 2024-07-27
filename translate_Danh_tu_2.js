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
        { text: "input: một danh sách dữ liệu json chứa các từ tiếng việt và các thông tin của nó {\n            \"word\": \"con hàu\",\n            \"_word\": \"con hau\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"oyster\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"hải sản\",\n            \"_word\": \"hai san\",\n            \"description\": \"Sản phẩm thực vật, động vật khai thác từ biển (nói khái quát).\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"seafood\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"vịt quay\",\n            \"_word\": \"vit quay\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"roast duck\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"gà nướng lu\",\n            \"_word\": \"ga nuong lu\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"clay-oven roasted chicken\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bánh hamburger\",\n            \"_word\": \"banh hamburger\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"hamburger\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bánh sandwich\",\n            \"_word\": \"banh sandwich\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sandwich\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bánh canh\",\n            \"_word\": \"banh canh\",\n            \"description\": \"Thức ăn làm bằng bột nhào kĩ rồi cắt thành sợi, nấu với tôm, cua, thịt.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Vietnamese thick noodle soup\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"miến\",\n            \"_word\": \"mien\",\n            \"description\": \"Thức ăn làm bằng tinh bột, chế biến thành sợi dài, nhỏ và khô, nấu chín có màu trong và dai.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"cellophane noodles\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"nước ép (cam, cà chua,..)\",\n            \"_word\": \"nuoc ep (cam, ca chua,..)\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"juice\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"sinh tố (bơ, dâu,..)\",\n            \"_word\": \"sinh to (bo, dau,..)\",\n            \"description\": \"Chỉ thức uống được chế biến từ các loại hoa quả tươi bằng cách xay nhuyễn với một vài muỗng cà phê sữa đặc có đường, đá vụn và trái cây tươi.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"smoothie\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"mía\",\n            \"_word\": \"mia\",\n            \"description\": \"Cây trồng thuộc họ lúa, thân đặc có đốt, chứa chất đường, dùng để ăn, kéo mật hoặc làm đường.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sugarcane\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"chanh đá\",\n            \"_word\": \"chanh da\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"iced lime juice\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"chanh nóng\",\n            \"_word\": \"chanh nong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"hot lime juice\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"chanh muối\",\n            \"_word\": \"chanh muoi\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"salted lime\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trà đá\",\n            \"_word\": \"tra da\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"iced tea\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trà nóng\",\n            \"_word\": \"tra nong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"hot tea\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"trà sữa\",\n            \"_word\": \"tra sua\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"milk tea\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Socola\",\n            \"_word\": \"socola\",\n            \"description\": \"Một loại đồ ăn được làm từ quả của cây ca cao.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"chocolate\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Cocacola\",\n            \"_word\": \"cocacola\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Coca-Cola\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"7up\",\n            \"_word\": \"7up\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"7 Up\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"rửa chân\",\n            \"_word\": \"rua chan\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"foot washing\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"rửa mặt\",\n            \"_word\": \"rua mat\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"face washing\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đánh răng\",\n            \"_word\": \"danh rang\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"tooth brushing\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cuối tuần\",\n            \"_word\": \"cuoi tuan\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"weekend\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cuối tháng\",\n            \"_word\": \"cuoi thang\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"end of the month\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cuối năm\",\n            \"_word\": \"cuoi nam\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"end of the year\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"mục tiêu\",\n            \"_word\": \"muc tieu\",\n            \"description\": \"Đích để nhắm vào.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"target\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đôi/cặp\",\n            \"_word\": \"doi/cap\",\n            \"description\": \"Tập hợp gồm hai vật cùng loại, hai cá thể tương ứng với nhau và làm thành một đơn vị về mặt chức năng, công dụng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"pair\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Đảng\",\n            \"_word\": \"dang\",\n            \"description\": \"Đảng Cộng sản Việt Nam, nói tắt.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Party\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tóc dài\",\n            \"_word\": \"toc dai\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"long hair\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"tóc ngắn\",\n            \"_word\": \"toc ngan\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"short hair\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"lốc xoáy\",\n            \"_word\": \"loc xoay\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"tornado\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cây nến\",\n            \"_word\": \"cay nen\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"candle\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đồ uống\",\n            \"_word\": \"do uong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"drinks\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đồ ăn\",\n            \"_word\": \"do an\",\n            \"description\": \"Các thức dùng để ăn, nói chung.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"food\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cái vợt cá\",\n            \"_word\": \"cai vot ca\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"fishing net\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"vợt cầu lông\",\n            \"_word\": \"vot cau long\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"badminton racket\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"con vượn\",\n            \"_word\": \"con vuon\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"gibbon\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"muối\",\n            \"_word\": \"muoi\",\n            \"description\": \"Tinh thể trắng, vị mặn, thường được tách từ nước biển, dùng để ăn.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"salt\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"nước mắm\",\n            \"_word\": \"nuoc mam\",\n            \"description\": \"Dung dịch mặn, có vị ngọt đậm, được chế biến từ cá muối, dùng để chấm hoặc nêm thức ăn.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"fish sauce\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bình sữa (em bé)\",\n            \"_word\": \"binh sua (em be)\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"baby bottle\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"hoa hậu\",\n            \"_word\": \"hoa hau\",\n            \"description\": \"Danh hiệu dành cho người con gái đạt giải nhất trong một cuộc thi người đẹp có quy mô lớn (một nước, một khu vực, hoặc toàn thế giới).\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Miss\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cái neo\",\n            \"_word\": \"cai neo\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"anchor\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"phóng viên\",\n            \"_word\": \"phong vien\",\n            \"description\": \"Người làm báo chuyên đi lấy tin tức, tài liệu để viết bài.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"reporter\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"nhà văn hóa\",\n            \"_word\": \"nha van hoa\",\n            \"description\": \"Nhà làm nơi tổ chức sinh hoạt câu lạc bộ cho quần chúng đông đảo.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"cultural house\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"chùa Yên Tử\",\n            \"_word\": \"chua yen tu\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Yen Tu Pagoda\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"chõ xôi\",\n            \"_word\": \"cho xoi\",\n            \"description\": \"Nồi dùng để đồ xôi, gồm hai tầng, tầng dưới đựng nước, tầng trên đựng gạo có lỗ nhỏ ở đáy để hơi nước bốc lên làm chín gạo.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sticky rice steamer\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cây cọ\",\n            \"_word\": \"cay co\",\n            \"description\": \"Cây bút lông để vẽ; cũng dùng để chỉ người vẽ tranh, hoạ sĩ (về mặt có một tính chất nào đó).\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"paintbrush\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"khu vực cách ly\",\n            \"_word\": \"khu vuc cach ly\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"quarantine zone\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"thung lũng\",\n            \"_word\": \"thung lung\",\n            \"description\": \"là một vùng đất có địa hình trũng hơn so với những vùng đất xung quanh.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"valley\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"địa hình\",\n            \"_word\": \"dia hinh\",\n            \"description\": \"Bề mặt của một vùng, với sự phân bố các yếu tố như núi, đồi, đồng bằng,v.v.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"terrain\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Kim Đồng\",\n            \"_word\": \"kim dong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Kim Dong\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"Thánh Gióng\",\n            \"_word\": \"thanh giong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Saint Giong\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"hoa giấy\",\n            \"_word\": \"hoa giay\",\n            \"description\": \"Cây leo, rậm lá, hoa mọc từng cụm ba cái, màu đỏ, trắng hay vàng, thường được trồng làm cảnh, làm thành giàn để lấy bóng mát.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"bougainvillea\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"hoa dâm bụt\",\n            \"_word\": \"hoa dam but\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"hibiscus\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"internet\",\n            \"_word\": \"internet\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"internet\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"hoa mai\",\n            \"_word\": \"hoa mai\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"apricot blossom\",\n            \"tl_en\": \"Noun\"\n        }," },
        { text: "output: thêm trường \"synset_vi\" chứa các từ đồng nghĩa và cùng từ loại với từ trong trường \"word_en\", đồng thời chuyển các từ đó sang tiếng việt và bỏ trường \"word_en\" vaf \"tl_en\" " },

        ////////////////////
        { text: "input: một danh sách dữ liệu json chứa các từ tiếng việt và các thông tin của nó {\n            \"word\": \"dấu huyền\",\n            \"_word\": \"dau huyen\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"grave accent\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu sắc\",\n            \"_word\": \"dau sac\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"acute accent\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu hỏi\",\n            \"_word\": \"dau hoi\",\n            \"description\": \"Dùng đặt ở cuối câu hỏi.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"question mark\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu ngã\",\n            \"_word\": \"dau nga\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"tilde\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu nặng\",\n            \"_word\": \"dau nang\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"dot below\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ăn cóc\",\n            \"_word\": \"an coc\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"toad\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ác mộng\",\n            \"_word\": \"ac mong\",\n            \"description\": \"Giấc mơ dữ, thấy những điều không lành đáng sợ; cũng dùng để chỉ tai hoạ lớn đã trải qua, nghĩ đến còn thấy ghê sợ, tưởng như thực như hư.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"nightmare\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"An Giang\",\n            \"_word\": \"an giang\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"An Giang\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"Anh (nước Anh)\",\n            \"_word\": \"anh (nuoc anh)\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"England\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"anh chị\",\n            \"_word\": \"anh chi\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"older brother and/or sister\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"anh chị em\",\n            \"_word\": \"anh chi em\",\n            \"description\": \"Những người còn trẻ, gồm cả nam lẫn nữ, có quan hệ ruột thịt hoặc gần gũi như ruột thịt.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"siblings\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"anh em\",\n            \"_word\": \"anh em\",\n            \"description\": \"Những người cùng một thế hệ có quan hệ ruột thịt hoặc họ hàng với nhau.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"brothers\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"anh họ\",\n            \"_word\": \"anh ho\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"cousin (male, older)\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"anh hùng\",\n            \"_word\": \"anh hung\",\n            \"description\": \"Người có tài năng và dũng khí hơn hẳn người thường, làm nên những việc được người đời ca tụng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"hero\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"anh rể\",\n            \"_word\": \"anh re\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"brother-in-law (wife's brother)\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"anh ruột\",\n            \"_word\": \"anh ruot\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"biological brother\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"anh vợ\",\n            \"_word\": \"anh vo\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"brother-in-law (wife's brother)\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ao chuôm\",\n            \"_word\": \"ao chuom\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"bell-bottom pants\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ảo thuật\",\n            \"_word\": \"ao thuat\",\n            \"description\": \"Nghệ thuật dùng những động tác nhanh nhẹn, khéo léo hoặc sử dụng những vật liệu, thiết bị đặc biệt khiến người xem cảm giác thấy những sự biến hoá kì lạ không lường được.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"magic\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"áo\",\n            \"_word\": \"ao\",\n            \"description\": \"Đồ mặc che thân từ cổ trở xuống.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"shirt\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"áo ấm\",\n            \"_word\": \"ao am\",\n            \"description\": \"Áo mặc mùa đông cho ấm, nói chung.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"warm coat\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"áo cánh\",\n            \"_word\": \"ao canh\",\n            \"description\": \"Áo mỏng, dài đến ngang hông, cổ đứng hoặc viền, xẻ nách, thường có hai túi dưới.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"blouse\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"áo đồng phục\",\n            \"_word\": \"ao dong phuc\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"uniform\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"áo len\",\n            \"_word\": \"ao len\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sweater\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"áo phao\",\n            \"_word\": \"ao phao\",\n            \"description\": \"Áo được thiết kế đặc biệt, giữ cho người nổi trên mặt nước.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"life jacket\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"áo phông\",\n            \"_word\": \"ao phong\",\n            \"description\": \"Áo mặc chui đầu, may bằng vải dệt kim, thường có in hình hoặc chữ ở trước và sau áo.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"T-shirt\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"áp phích\",\n            \"_word\": \"ap phich\",\n            \"description\": \"Tờ giấy lớn có chữ hoặc tranh vẽ, dán ở nơi công cộng để tuyên truyền cổ động hay để quảng cáo.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"poster\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"âm thanh\",\n            \"_word\": \"am thanh\",\n            \"description\": \"âm (nói khái quát).\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sound\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ấm đun nước\",\n            \"_word\": \"am dun nuoc\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"kettle\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ấm trà\",\n            \"_word\": \"am tra\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"teapot\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ấn tượng\",\n            \"_word\": \"an tuong\",\n            \"description\": \"Nhận thức cảm tính xen lẫn với cảm xúc còn lưu giữ lại trong đầu óc.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"impression\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Âu Cơ\",\n            \"_word\": \"au co\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Au Co\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"Bà Nà\",\n            \"_word\": \"ba na\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Ba Na Hills\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"Bà Rịa - Vũng Tàu\",\n            \"_word\": \"ba ria - vung tau\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Ba Ria - Vung Tau\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"triệu phú\",\n            \"_word\": \"trieu phu\",\n            \"description\": \"Một cá nhân rất giàu, có bạc triệu.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"millionaire\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Bạc Liêu\",\n            \"_word\": \"bac lieu\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Bac Lieu\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"bài báo\",\n            \"_word\": \"bai bao\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"article\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bài thơ\",\n            \"_word\": \"bai tho\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"poem\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"hệ bài tiết\",\n            \"_word\": \"he bai tiet\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"excretory system\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bãi cát\",\n            \"_word\": \"bai cat\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sandbank\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bãi cỏ\",\n            \"_word\": \"bai co\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"lawn\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bãi đỗ xe (ô tô)\",\n            \"_word\": \"bai do xe (o to)\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"parking lot\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bãi tắm\",\n            \"_word\": \"bai tam\",\n            \"description\": \"Bãi cát rộng, bằng phẳng ven biển hoặc ven sông, dùng làm nơi tắm mát và nghỉ ngơi.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"beach\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ban đêm\",\n            \"_word\": \"ban dem\",\n            \"description\": \"Khoảng thời gian từ sau khi trời tối cho đến trước khi trời sáng; phân biệt với ban ngày.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"night\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ban giám hiệu\",\n            \"_word\": \"ban giam hieu\",\n            \"description\": \"Tập thể những người lãnh đạo một trường học, đứng đầu là hiệu trưởng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"school board\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"ban ngày\",\n            \"_word\": \"ban ngay\",\n            \"description\": \"Khoảng thời gian từ sau khi trời sáng đến trước khi trời tối; phân biệt với ban đêm.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"daytime\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bàn chải đánh răng\",\n            \"_word\": \"ban chai danh rang\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"toothbrush\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bàn chân\",\n            \"_word\": \"ban chan\",\n            \"description\": \"Phần cuối của chân người và một số động vật, dùng để đỡ toàn thân khi đi, đứng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"foot\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bàn ghế\",\n            \"_word\": \"ban ghe\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"furniture\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bàn là\",\n            \"_word\": \"ban la\",\n            \"description\": \"Đồ dùng có mặt phẳng bằng kim loại có thể làm nóng lên để là quần áo.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"iron\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bàn phím (máy vi tính)\",\n            \"_word\": \"ban phim (may vi tinh)\",\n            \"description\": \"Thiết bị nhập dữ liệu của máy tính, thiết bị tập hợp các phím kí tự và phím điều khiển, được nối với máy tính để điều khiển hoặc nhập dữ liệu.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"keyboard\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bàn tay\",\n            \"_word\": \"ban tay\",\n            \"description\": \"Phần cuối của tay, có các ngón tay, để cầm nắm, sờ mó, lao động; thường được coi là biểu tượng của sự lao động chân tay có tính sáng tạo của con người.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"hand\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bản đồ Việt Nam\",\n            \"_word\": \"ban do viet nam\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"map of Vietnam\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bản làng\",\n            \"_word\": \"ban lang\",\n            \"description\": \"Xóm làng ở vùng dân tộc thiểu số miền Bắc Việt Nam.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"village (ethnic minority)\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bản lề\",\n            \"_word\": \"ban le\",\n            \"description\": \"Vật gồm hai miếng kim loại xoay quanh một trục chung, dùng để lắp cánh cửa, nắp hòm, v.v.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"hinge\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bản nhạc\",\n            \"_word\": \"ban nhac\",\n            \"description\": \"Bản ghi bài hát hoặc bài đàn bằng kí hiệu âm nhạc.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sheet music\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"bản sao (chỉ người)\",\n            \"_word\": \"ban sao (chi nguoi)\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"copycat\",\n            \"tl_en\": \"Noun\"\n        }," },
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