async function getPost(url) {
    try {
        console.log("---- 1. [GET] dang lay du lieu bai viet so 1 ----");
        const response = await fetch(url);
        console.log("---- HTTP STATUS ----", response.status);
        if (!response.ok) {
            throw new Error(`HTTP ERROR: ${response.status}`);
        }
        const data = await response.json();
        console.log("---- TITLE ----", data.title);
    } catch (error) {
        console.log("ERROR", error.message);
    }

}
async function createPost() {
    try {
        console.log("\n---- 2. [POST] Đang tạo bài viết mới ----");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: "Bai viet moi cua Le Van Si", userId: 1 })

            }
        );
        console.log("---- HTTP STATUS ----", response.status);
        if (!response.ok) {
            throw new Error(`HTTP ERROR: ${response.status}`);
        }
        const data = await response.json();
        console.log("---- Du lieu vua tao ----", data);

    } catch (error) {
        console.log("ERROR", error.message);

    }

}
async function main() {
    await getPost("https://jsonplaceholder.typicode.com/posts/1");
    await createPost();
}

main()