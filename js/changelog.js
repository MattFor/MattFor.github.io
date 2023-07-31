const changelogContent = document.getElementById('changelog-content');

if (changelogContent) {
    fetch('../resources/changelog.md')
        .then(response => response.text())
        .then(markdown => {
            // it doesn't fucking work
            // const html = marked(markdown);
            // changelogContent.innerHTML = html;
        }).catch(() => {});
}
