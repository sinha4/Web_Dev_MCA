document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("interest-form");
    const commentsBox = document.getElementById("comments");
    const formError = document.getElementById("form-error");

    // 1. Show welcome back message using sessionStorage
    if (sessionStorage.getItem("visited")) {
        const welcomeMsg = document.createElement("p");
        welcomeMsg.textContent = "Hi! Welcome back!";
        welcomeMsg.className = "text-green-600 text-center mb-4 font-semibold";
        form.parentElement.insertBefore(welcomeMsg, form);
    } else {
        sessionStorage.setItem("visited", "true");
    }

    // 2. Real-time character count
    const charCount = document.createElement("p");
    charCount.className = "text-sm text-right text-gray-500 mt-1";
    commentsBox.insertAdjacentElement("afterend", charCount);
    commentsBox.addEventListener("input", () => {
        charCount.textContent = `Characters: ${commentsBox.value.length}`;
    });

    // 3. Load existing feedbacks from localStorage
    const FEEDBACK_KEY = "feedbackEntries";
    const feedbackContainer = document.createElement("div");
    feedbackContainer.className = "mt-12 space-y-4";
    form.parentElement.appendChild(feedbackContainer);

    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear All Feedbacks";
    clearBtn.className = "bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition mt-6 w-full";
    form.parentElement.insertBefore(clearBtn, feedbackContainer);

    function loadFeedbacks() {
        feedbackContainer.innerHTML = "";
        const feedbacks = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || [];
        if (feedbacks.length === 0) {
            feedbackContainer.innerHTML = `<p class="text-center text-gray-500">No feedbacks yet.</p>`;
            return;
        }

        feedbacks.forEach((fb, idx) => {
            const card = document.createElement("div");
            card.className = "bg-blue-100 border border-blue-200 rounded-lg p-4 shadow";

            card.innerHTML = `
                <h3 class="font-bold text-blue-900">${fb.name} (${fb.email})</h3>
                <p class="text-sm text-gray-600">Department: ${fb.department}</p>
                <p class="text-sm">Rating: ${fb.rating}</p>
                <p class="mt-2 text-gray-800">${fb.comments}</p>
            `;
            feedbackContainer.appendChild(card);
        });
    }

    loadFeedbacks();

    // 4. Handle form submission
// 4. Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formError.classList.add("hidden");

    const name = form["name"].value.trim();
    const email = form["email"].value.trim();
    const department = form["department"].value;
    const rating = form.querySelector("input[name='rating']:checked")?.value;
    const comments = form["comments"].value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !department || !rating) {
        showError("All fields are required.");
        return;
    }

    if (!emailRegex.test(email)) {
        showError("Please enter a valid email address.");
        return;
    }

    const feedbackObj = { name, email, department, rating, comments };

    const existing = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || [];
    existing.push(feedbackObj);
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(existing));

    form.reset();
    charCount.textContent = "";
    loadFeedbacks();
});

function showError(message) {
    formError.textContent = message;
    formError.classList.remove("hidden");
}


    // 5. Clear all feedbacks
    clearBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete all feedbacks?")) {
            localStorage.removeItem(FEEDBACK_KEY);
            loadFeedbacks();
        }
    });
});
        const product = document.getElementById('product-interest').value.trim();