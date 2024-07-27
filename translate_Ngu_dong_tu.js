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
        { text: "input: một danh sách dữ liệu json chứa các từ tiếng việt và các thông tin của nó {\n    \"data\": [\n        {\n            \"word\": \"không nghe lời\",\n            \"_word\": \"khong nghe loi\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"disobey\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"không cho\",\n            \"_word\": \"khong cho\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"not allow\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"không cần\",\n            \"_word\": \"khong can\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"not need\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"không nên\",\n            \"_word\": \"khong nen\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"should not\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"không quen\",\n            \"_word\": \"khong quen\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"not familiar with\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"không có\",\n            \"_word\": \"khong co\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"not have\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"không có chi\",\n            \"_word\": \"khong co chi\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"you're welcome\",\n            \"tl_en\": \"Phrase\"\n        },\n        {\n            \"word\": \"không đẹp\",\n            \"_word\": \"khong dep\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"not beautiful\",\n            \"tl_en\": \"Adjective\"\n        },\n        {\n            \"word\": \"suy ra (Toán học)\",\n            \"_word\": \"suy ra (toan hoc)\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"infer\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"không muốn\",\n            \"_word\": \"khong muon\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"don't want\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"không ngon\",\n            \"_word\": \"khong ngon\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"not delicious\",\n            \"tl_en\": \"Adjective\"\n        },\n        {\n            \"word\": \"không dám\",\n            \"_word\": \"khong dam\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"don't dare\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"gấp đôi\",\n            \"_word\": \"gap doi\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"double\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"gấp ba\",\n            \"_word\": \"gap ba\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"triple\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"đi lạc (đường, rừng..)\",\n            \"_word\": \"di lac (duong, rung..)\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"get lost\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"ăn đủ\",\n            \"_word\": \"an du\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"eat enough\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"ăn vừa\",\n            \"_word\": \"an vua\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"eat moderately\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"ăn ít\",\n            \"_word\": \"an it\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"eat less\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"gãy chân\",\n            \"_word\": \"gay chan\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"break a leg\",\n            \"tl_en\": \"Verb\"\n        },\n        {\n            \"word\": \"gãy tay\",\n            \"_word\": \"gay tay\",\n            \"description\": \"\",\n            \"tl\": \"Ngữ động từ\",\n            \"word_en\": \"break an arm\",\n            \"tl_en\": \"Verb\"\n        }\n    ]\n}" },
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