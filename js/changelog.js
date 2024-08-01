const changelogContent = document.getElementById("changelog-content");

if (changelogContent) 
{
    fetch("../resources/changelog.md")
        .then(response => {
            if (!response.ok) 
            {
                throw new Error("Network response was not ok " + response.statusText);
            }

            return response.text();
        })
        .then(markdown => {
            const html = marked(markdown);
            changelogContent.innerHTML = html;
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
}
