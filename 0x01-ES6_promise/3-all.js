import { uploadPhoto, createUser } from "./utils.js";

async function handleProfileSignup() {
    try {
        const [photoResponse, userResponse] = await Promise.all([
            uploadPhoto(),
            createUser()
        ]);
        console.log(userResponse.body.firstName, userResponse.body.lastName);
    } catch (error) {
        console.error("Signup system offline");
    }
}

export default handleProfileSignup;
