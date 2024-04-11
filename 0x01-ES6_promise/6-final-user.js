import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, filename) {
    return Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(filename)
    ]).then((res) => {
        const arr = [];
        for (const i of res) {
            arr.push({ status: i.status, value: i.value || i.reason });
        }
        return arr;
    });
}
