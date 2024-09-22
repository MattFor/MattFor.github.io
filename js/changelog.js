const changelogContent = document.getElementById("changelog-content");

if (changelogContent)
{
    const url = window.location.href;
    const fetchUrl = url.includes("devlog") ? "/resources/text/devlog.md" : "/resources/text/changelog.md";

    fetch(fetchUrl)
        .then(response => {
            if (!response.ok)
            {
                throw new Error("Network response was not ok: " + response.statusText);
            }

            return response.text();
        })
        .then(markdown => {
            changelogContent.innerHTML = marked(markdown);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            changelogContent.innerHTML = "<p>Error loading data. Please try again later.</p>";
        });
}
