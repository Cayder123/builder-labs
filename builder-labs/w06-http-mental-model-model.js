async function inspectHttpResponse(url) {
    try {
        console.log("=== [1.CLIENT] Dang gui HTTP Request toi:", url);
        const response = await fetch(url);

        console.log("\n=== [2.SERVER] Da nhan duoc HTTP Response ===");

        // 1. In mã trạng thái HTTP Status (ví dụ: 200, 404)
        // console.log("- HTTP Status Code:", response.status);
        console.log("- HTTP Status Code:", response.status);

        // 2. In lời nhắn trạng thái Status Text (ví dụ: OK)
        // console.log("- Status Text:", response.statusText);
        console.log("- Status Text:", response.statusText);

        // 3. In cờ kiểm tra response.ok
        // console.log("- Is OK?:", response.ok);
        console.log("- Is OK?:", response.ok);

        // 4. Mổ xẻ Headers (Thông tin bổ trợ mà server đính kèm):
        // - Lấy loại định dạng dữ liệu server trả về: response.headers.get("content-type")
        console.log("- Content-Type:", response.headers.get("content-type"));

        console.log("- Date:", response.headers.get("date"))

        // 5. [3. BODY] Cuối cùng mới bóc gói hàng lấy ruột dữ liệu:
        // const data = await response.json();
        // In tiêu đề dữ liệu nhận được (data.title)
        const data = await response.json();
        console.log("- Title", data.title);
    } catch (error) {
        console.log("[ERROR] Lỗi kết nối mạng:", error.message);
    }
}

inspectHttpResponse("https://jsonplaceholder.typicode.com/posts/1");