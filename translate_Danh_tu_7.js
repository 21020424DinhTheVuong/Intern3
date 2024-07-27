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
        { text: "input: một danh sách dữ liệu json chứa các từ tiếng việt và các thông tin của nó {\n            \"word\": \"cụm từ\",\n            \"_word\": \"cum tu\",\n            \"description\": \"Tập hợp các từ cùng bổ sung ý nghĩa cho nhau.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"phrase\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cuộc đời\",\n            \"_word\": \"cuoc doi\",\n            \"description\": \"Quá trình sống của một người, một cá thể sinh vật, nhìn một cách toàn bộ từ lúc sinh ra cho đến lúc chết.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"life\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cuộc sống\",\n            \"_word\": \"cuoc song\",\n            \"description\": \"Tổng thể nói chung những hoạt động trong đời sống của một con người hay một xã hội.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"life\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cuộn giấy vệ sinh\",\n            \"_word\": \"cuon giay ve sinh\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"toilet paper roll\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cuống lá\",\n            \"_word\": \"cuong la\",\n            \"description\": \"Bộ phận của cây, thường hình que, trực tiếp mang lá.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"leaf stalk\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cử chỉ điệu bộ\",\n            \"_word\": \"cu chi dieu bo\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"gestures\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cưa (cái cưa)\",\n            \"_word\": \"cua (cai cua)\",\n            \"description\": \"Dụng cụ dùng để xẻ, cắt gỗ, kim loại và vật liệu cứng khác, có lưỡi bằng thép mỏng với nhiều răng sắc nhọn.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"saw\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cửa hàng\",\n            \"_word\": \"cua hang\",\n            \"description\": \"Cơ sở kinh doanh thương nghiệp hoặc kinh doanh dịch vụ nhỏ.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"store\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cửa khẩu\",\n            \"_word\": \"cua khau\",\n            \"description\": \"Chỗ dùng làm nơi ra vào một nước.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"border gate\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cửa kính\",\n            \"_word\": \"cua kinh\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"glass door\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cửa sổ\",\n            \"_word\": \"cua so\",\n            \"description\": \"Cửa ở lưng chừng tường, vách để lấy ánh sáng và làm thoáng khí.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"window\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"yên ngựa\",\n            \"_word\": \"yen ngua\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"saddle\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"cướp biển\",\n            \"_word\": \"cuop bien\",\n            \"description\": \"Kẻ cướp trên biển.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"pirate\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dải phân cách\",\n            \"_word\": \"dai phan cach\",\n            \"description\": \"Phần được xây, được dựng lên hoặc được sơn kẻ để phân đường giao thông thành các làn đường riêng biệt.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"median strip\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dàn bài\",\n            \"_word\": \"dan bai\",\n            \"description\": \"Trình tự sắp xếp các ý chính của bài để dựa vào đó mà nói hoặc viết.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"outline\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dàn nhạc\",\n            \"_word\": \"dan nhac\",\n            \"description\": \"Tập thể nhạc công dùng nhiều nhạc khí để hoà tấu.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"orchestra\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"danh bạ\",\n            \"_word\": \"danh ba\",\n            \"description\": \"Sổ ghi tên người, tên tổ chức theo một nội dung nhất định.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"directory\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"danh dự\",\n            \"_word\": \"danh du\",\n            \"description\": \"Sự coi trọng của dư luận xã hội, dựa trên giá trị tinh thần, đạo đức tốt đẹp.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"honor\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"danh hiệu\",\n            \"_word\": \"danh hieu\",\n            \"description\": \"Tên gọi nêu lên phẩm chất tốt đẹp, cao quý, dành riêng cho cá nhân hay tập thể có nhiều thành tích xuất sắc.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"title\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"danh lam thắng cảnh\",\n            \"_word\": \"danh lam thang canh\",\n            \"description\": \"Di tích nổi tiếng hoặc cảnh đẹp nổi tiếng, nói chung.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"scenic spot\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"danh mục\",\n            \"_word\": \"danh muc\",\n            \"description\": \"Bản ghi theo phân loại từng mục cụ thể.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"catalog\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"danh nhân\",\n            \"_word\": \"danh nhan\",\n            \"description\": \"Người có danh tiếng và được xã hội công nhận.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"celebrity\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"danh sách\",\n            \"_word\": \"danh sach\",\n            \"description\": \"Bản ghi tên, bản kê tên.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"list\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"danh từ\",\n            \"_word\": \"danh tu\",\n            \"description\": \"Từ chuyên biểu thị ý nghĩa sự vật, đối tượng (thường làm chủ ngữ trong câu).\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"noun\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"danh từ riêng\",\n            \"_word\": \"danh tu rieng\",\n            \"description\": \"Danh từ dùng làm tên riêng để gọi tên từng sự vật, đối tượng riêng lẻ.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"proper noun\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dao\",\n            \"_word\": \"dao\",\n            \"description\": \"Đồ dùng để cắt, gồm có lưỡi sắc và chuôi cầm.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"knife\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dãy nhà\",\n            \"_word\": \"day nha\",\n            \"description\": \"Tập hợp gồm những ngôi nhà nối tiếp nhau, cái này cạnh cái kia.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"row of houses\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dãy núi\",\n            \"_word\": \"day nui\",\n            \"description\": \"Tập hợp gồm những ngọn núi nối tiếp nhau, cái này cạnh cái kia.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"mountain range\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dãy số\",\n            \"_word\": \"day so\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sequence\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dãy số liệu\",\n            \"_word\": \"day so lieu\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"data set\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dân ca\",\n            \"_word\": \"dan ca\",\n            \"description\": \"Bài hát lưu truyền trong dân gian, mang đặc trưng của từng vùng và thường không rõ tác giả.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"folk song\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dân chài\",\n            \"_word\": \"dan chai\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"fishermen\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dân số\",\n            \"_word\": \"dan so\",\n            \"description\": \"Số dân (trong một nước, một vùng).\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"population\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dân tộc\",\n            \"_word\": \"dan toc\",\n            \"description\": \"Tên gọi những cộng đồng người có chung một ngôn ngữ, một lãnh thổ và một truyền thống văn hoá.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"ethnic group\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dân tộc thiểu số\",\n            \"_word\": \"dan toc thieu so\",\n            \"description\": \"Dân tộc chiếm số ít, so với dân tộc chiếm số đông nhất trong một nước có nhiều dân tộc.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"ethnic minority\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dẫn chứng\",\n            \"_word\": \"dan chung\",\n            \"description\": \"Dẫn thí dụ, bằng cớ để chứng minh cho điều nói ra, viết ra là đúng, là có cơ sở.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"evidence\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dầu ăn\",\n            \"_word\": \"dau an\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"cooking oil\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dầu gội đầu\",\n            \"_word\": \"dau goi dau\",\n            \"description\": \"Dầu được chế từ các loại hoá chất hoặc dược thảo, dùng để gội đầu, làm sạch da đầu và sạch tóc.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"shampoo\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dầu hoả\",\n            \"_word\": \"dau hoa\",\n            \"description\": \"Dầu cất từ dầu mỏ, màu trong suốt, có mùi hôi, dễ cháy, thường dùng để thắp sáng, làm chất đốt.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"kerosene\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dầu khí\",\n            \"_word\": \"dau khi\",\n            \"description\": \"Dầu mỏ và khí đốt nói chung.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"oil and gas\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dầu mỏ\",\n            \"_word\": \"dau mo\",\n            \"description\": \"Dầu lấy từ mỏ lên, mùi hắc khó chịu, dùng để chế chất đốt, làm nguyên liệu cho công nghiệp hoá học.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"petroleum\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu bằng\",\n            \"_word\": \"dau bang\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"equals sign\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu chấm\",\n            \"_word\": \"dau cham\",\n            \"description\": \"Dấu ‘.’ dùng khi viết chữ hoặc để đặt ở cuối câu.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"period\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu chấm hỏi\",\n            \"_word\": \"dau cham hoi\",\n            \"description\": \"Dấu câu ‘?’ dùng đặt ở cuối câu hỏi.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"question mark\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu chấm than\",\n            \"_word\": \"dau cham than\",\n            \"description\": \"Dấu câu ‘!’ dùng đặt ở cuối câu cảm, cầu cầu khiến.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"exclamation mark\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu chia\",\n            \"_word\": \"dau chia\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"division sign\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu gạch ngang\",\n            \"_word\": \"dau gach ngang\",\n            \"description\": \"Có kí hiệu (–), là một dấu câu và dài hơn hơn dấu gạch nối. Dấu gạch ngang được dùng trong đầu mục liệt kê, cụm liên danh, liên số, đánh dấu phần chú thích, đánh dấu lời nói trực tiếp của nhân vật.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"em dash\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu hai chấm\",\n            \"_word\": \"dau hai cham\",\n            \"description\": \"Dấu câu có một chấm ở trên và một chấm ở dưới ':', thường dùng trước khi liệt kê các sự việc hoặc đặt trước lời trích dẫn.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"colon\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu ngoặc đơn\",\n            \"_word\": \"dau ngoac don\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"parentheses\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu nhân\",\n            \"_word\": \"dau nhan\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"multiplication sign\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dấu phẩy\",\n            \"_word\": \"dau phay\",\n            \"description\": \"Dấu câu ‘,’ thường dùng để tách các bộ phận cùng loại (đồng chức) với nhau; tách các bộ phận phụ với nòng cốt câu.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"comma\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dây buộc tóc\",\n            \"_word\": \"day buoc toc\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"hair tie\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dây chun\",\n            \"_word\": \"day chun\",\n            \"description\": \"Dây có nhiều sợi cao su có thể co dãn.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"rubber band\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dây điện\",\n            \"_word\": \"day dien\",\n            \"description\": \"Dây dẫn điện, gồm một hoặc một số sợi dây kim loại ghép lại.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"electrical wire\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dây thần kinh\",\n            \"_word\": \"day than kinh\",\n            \"description\": \"Tập hợp của những sợi thần kinh dẫn truyền thành một bó có một vỏ bao bọc, nối các trung tâm thần kinh với các cơ quan trong cơ thể.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"nerve\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dây thừng\",\n            \"_word\": \"day thung\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"rope\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dây xích\",\n            \"_word\": \"day xich\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"chain\",\n            \"tl_en\": \"Noun\"\n        }," },
        { text: "output: thêm trường \"synset_vi\" chứa các từ đồng nghĩa và cùng từ loại với từ trong trường \"word_en\", đồng thời chuyển các từ đó sang tiếng việt và bỏ trường \"word_en\" vaf \"tl_en\" " },

        ////////////////
        { text: "input: một danh sách dữ liệu json chứa các từ tiếng việt và các thông tin của nó {\n            \"word\": \"dép quai hậu\",\n            \"_word\": \"dep quai hau\",\n            \"description\": \"Dép có quai ở phía sau gót.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"sandals\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dê con\",\n            \"_word\": \"de con\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"kid\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dê mẹ\",\n            \"_word\": \"de me\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"mother goat\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dịch vụ\",\n            \"_word\": \"dich vu\",\n            \"description\": \"Công việc phục vụ trực tiếp cho những nhu cầu nhất định của số đông, có tổ chức và được trả công.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"service\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"diêm\",\n            \"_word\": \"diem\",\n            \"description\": \"Que nhỏ, một đầu tẩm hoá chất có khả năng bốc cháy khi cọ xát, dùng để lấy lửa.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"match\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"kịch\",\n            \"_word\": \"kich\",\n            \"description\": \"Nghệ thuật dùng sân khấu trình bày hành động và đối thoại của các nhân vật, để phản ánh những vấn đề, những xung đột trong đời sống xã hội.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"drama\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"kịch câm\",\n            \"_word\": \"kich cam\",\n            \"description\": \"Kịch chỉ dùng điệu bộ, không dùng lời nói.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"mime\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"diện tích\",\n            \"_word\": \"dien tich\",\n            \"description\": \"Số các hình vuông đơn vị có trong một mặt phẳng hay trên một mặt không gian nào đó.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"area\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"diều\",\n            \"_word\": \"dieu\",\n            \"description\": \"Đồ chơi làm bằng một khung tre dán kín giấy có buộc dây dài, khi cầm dây kéo ngược chiều gió thì bay lên cao.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"kite\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Dinh Độc Lập\",\n            \"_word\": \"dinh doc lap\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Independence Palace\",\n            \"tl_en\": \"Proper Noun\"\n        },\n        {\n            \"word\": \"doanh nghiệp\",\n            \"_word\": \"doanh nghiep\",\n            \"description\": \"Đơn vị hoạt động kinh doanh.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"enterprise\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"doanh trại\",\n            \"_word\": \"doanh trai\",\n            \"description\": \"Khu nhà riêng của đơn vị quân đội để ở và làm việc.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"barracks\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dòng chữ\",\n            \"_word\": \"dong chu\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"line of text\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dòng họ\",\n            \"_word\": \"dong ho\",\n            \"description\": \"Toàn thể nói chung những người cùng huyết thống làm thành các thế hệ nối tiếp nhau.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"clan\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dòng sông\",\n            \"_word\": \"dong song\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"river\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"du thuyền\",\n            \"_word\": \"du thuyen\",\n            \"description\": \"Tàu, thuyền (thường nhỏ, có đầy đủ tiện nghi) dùng để đi du lịch.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"yacht\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"dụng cụ\",\n            \"_word\": \"dung cu\",\n            \"description\": \"Vật do con người chế tạo ra để giúp làm tăng khả năng, hiệu lực hoặc phạm vi hoạt động của con người.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"tool\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"nhà nước\",\n            \"_word\": \"nha nuoc\",\n            \"description\": \"Tổ chức, đứng đầu là chính phủ, quản lí công việc chung của một nước.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"state\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"pháo đài\",\n            \"_word\": \"phao dai\",\n            \"description\": \"Công trình xây dựng vững chắc để đặt pháo lớn ở trong khu vực phòng thủ lâu dài.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"fortress\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đài sen\",\n            \"_word\": \"dai sen\",\n            \"description\": \"Giá đèn nến hình hoa sen thời trước.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"lotus lampstand\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đại dương\",\n            \"_word\": \"dai duong\",\n            \"description\": \"Biển lớn, tiếp giáp với cả một châu hoặc một vùng lớn hơn.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"ocean\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đại số\",\n            \"_word\": \"dai so\",\n            \"description\": \"Ngành toán học khái quát số học, trong đó dùng các chữ thay các số.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"algebra\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đại tá\",\n            \"_word\": \"dai ta\",\n            \"description\": \"Bậc quân hàm cao nhất của cấp tá.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"colonel\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đại tướng\",\n            \"_word\": \"dai tuong\",\n            \"description\": \"Bậc quân hàm cao nhất cấp tướng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"general\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đại úy\",\n            \"_word\": \"dai uy\",\n            \"description\": \"Bậc quân hàm cao nhất cấp uý.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"captain\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đám ma\",\n            \"_word\": \"dam ma\",\n            \"description\": \"Lễ để mọi người cùng nhau tiễn đưa người chết về nơi an nghỉ cuối cùng, theo nghi thức.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"funeral\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đám mây\",\n            \"_word\": \"dam may\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"cloud\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đàn xê lô đại vĩ cầm\",\n            \"_word\": \"dan xe lo dai vi cam\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"cello\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đàn bầu\",\n            \"_word\": \"dan bau\",\n            \"description\": \"Đàn truyền thống của Việt Nam, gồm có một bầu, một dây nhỏ bằng kim loại và một cần nhỏ bằng tre uốn cong dùng để lựa cung.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"monochord\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đàn bướm\",\n            \"_word\": \"dan buom\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"flock of butterflies\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đàn ghi ta\",\n            \"_word\": \"dan ghi ta\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"guitar\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đàn kiến\",\n            \"_word\": \"dan kien\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"colony of ants\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đàn tơ-rưng\",\n            \"_word\": \"dan to-rung\",\n            \"description\": \"Đàn của một số dân tộc thiểu số Tây Nguyên, làm bằng những đoạn nứa dài ngắn khác nhau treo trên một cái giá, gõ bằng gỗ mỏng, cần dài.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"bamboo xylophone\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đàng ngoài\",\n            \"_word\": \"dang ngoai\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Outer Region (historical term for northern Vietnam)\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đàng trong\",\n            \"_word\": \"dang trong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Inner Region (historical term for southern Vietnam)\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đạn\",\n            \"_word\": \"dan\",\n            \"description\": \"Khối tròn hay nhọn, thường bằng kim loại, được phóng đi bằng súng để sát thương, phá hoại mục tiêu.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"bullet\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đảo\",\n            \"_word\": \"dao\",\n            \"description\": \"Khoảng, vùng đất rộng có nước bao quanh ở sông, hồ, biển.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"island\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đảo Lý Sơn\",\n            \"_word\": \"dao ly son\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Ly Son Island\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đảo Phú Quốc\",\n            \"_word\": \"dao phu quoc\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Phu Quoc Island\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đặc điểm\",\n            \"_word\": \"dac diem\",\n            \"description\": \"Những nét riêng biệt.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"characteristic\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Đắk Lắk\",\n            \"_word\": \"dak lak\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Dak Lak (province in Vietnam)\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"Đặng Văn Ngữ\",\n            \"_word\": \"dang van ngu\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"Dang Van Ngu (Vietnamese scientist)\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đất\",\n            \"_word\": \"dat\",\n            \"description\": \"Chất rắn ở trên đó người và các loài động vật, thực vật sinh sống; đối lập với trời hoặc với biển, nước.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"land\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đất màu mỡ\",\n            \"_word\": \"dat mau mo\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"fertile soil\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đất nặn\",\n            \"_word\": \"dat nan\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"clay\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đất trồng cây\",\n            \"_word\": \"dat trong cay\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"planting soil\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đầu gối\",\n            \"_word\": \"dau goi\",\n            \"description\": \"Mặt trước của chỗ ống chân khớp với đùi.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"knee\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đầu tàu\",\n            \"_word\": \"dau tau\",\n            \"description\": \"Máy có sức kéo mạnh, chạy trên đường ray, dùng để kéo hoặc đẩy đoàn tàu.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"locomotive\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đấu vật\",\n            \"_word\": \"dau vat\",\n            \"description\": \"Dùng tay không ôm nhau, rồi người này cố dùng sức làm cho người kia ngã xuống để giành phần thắng.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"wrestling\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đầy tớ\",\n            \"_word\": \"day to\",\n            \"description\": \"(Từ cũ) người đi ở trong xã hội cũ, trong quan hệ với chủ.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"servant\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đèn báo giao thông\",\n            \"_word\": \"den bao giao thong\",\n            \"description\": \"\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"traffic light\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đèn điện\",\n            \"_word\": \"den dien\",\n            \"description\": \"Dụng cụ chiếu sáng gồm một bóng thuỷ tinh đã hút hết không khí, bên trong chứa một sợi tóc bằng wolfram, nóng sáng lên khi có dòng điện chạy qua.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"electric light\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đèn đỏ\",\n            \"_word\": \"den do\",\n            \"description\": \"Đèn lắp trên các tuyến đường giao nhau, có ánh sáng màu đỏ, là tín hiệu báo để các phương tiện giao thông dừng chuyển động.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"red light\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đèn lồng\",\n            \"_word\": \"den long\",\n            \"description\": \"Đèn có khung bọc ngoài như một cái lồng, có dán giấy hoặc lụa màu, dùng để trang trí.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"lantern\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đèn pin\",\n            \"_word\": \"den pin\",\n            \"description\": \"Đèn điện cầm tay, dùng pin làm nguồn điện.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"flashlight\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đèn vàng\",\n            \"_word\": \"den vang\",\n            \"description\": \"Đèn lắp trên các tuyến đường giao nhau, có ánh sáng màu vàng, là tín hiệu báo để các phương tiện giao thông chuẩn bị dừng chuyển động.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"yellow light\",\n            \"tl_en\": \"Noun\"\n        },\n        {\n            \"word\": \"đèn xanh\",\n            \"_word\": \"den xanh\",\n            \"description\": \"Đèn lắp trên các tuyến đường giao nhau, có ánh sáng màu xanh, là tín hiệu báo để các phương tiện giao thông tiếp tục chuyển động.\",\n            \"tl\": \"Danh từ\",\n            \"word_en\": \"green light\",\n            \"tl_en\": \"Noun\"\n        }," },
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