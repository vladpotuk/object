import { userData } from "./userData.js";

function makeProfileMarkup(userProfile) {
    const { name, tag, location, avatar } = userProfile;
    return `
        <div>
            <img src="${avatar}" alt="User Avatar">
            <h3>${name}</h3>
            <p>${tag}</p>
            <p>${location}</p>
        </div>
    `;
}

const markup = makeProfileMarkup(userData);
document.body.insertAdjacentHTML("afterbegin", markup);
