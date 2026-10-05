async function getUserProfile(userId) {
    console.log(`[LOADING] Dang tai du lieu cho User ID: ${userId}`)
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
        if (!response.ok) {
            throw new Error(`Loi HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(`[SUCCESS]Ten: ${data.name}`);
        console.log(`[SUCCESS]Email: ${data.email}`);

    } catch (error) {
        console.log(error.message);
    }
}

getUserProfile(1);
getUserProfile(999999);