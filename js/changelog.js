const changelogContent = document.getElementById("changelog-content");

if (changelogContent)
{
    fetch("/resources/changelog.md")
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
            console.error("Error fetching changelog:", error);
            changelogContent.innerHTML = "<p>Error loading changelog. Please try again later.</p>";
        });
}
