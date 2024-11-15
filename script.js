//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const ignoreWords = ["a", "an", "the"];

function sortArticles(arr) {
    return arr.sort((a, b) => {
        const titleA = a.toLowerCase().replace(/^(a |an |the )/i, "");
        const titleB = b.toLowerCase().replace(/^(a |an |the )/i, "");
        return titleA.localeCompare(titleB);
    });
}

function displaySortedArticles() {
    const sortedArticles = sortArticles(bands);
    const list = document.getElementById("band");

    sortedArticles.forEach(bands => {
        const listItem = document.createElement("li");
        listItem.textContent = article;
        list.appendChild(listItem);
    });
}
displaySortedArticles();