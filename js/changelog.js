/**
 * Grr! stop looking here all is available at
 * @link https://github.com/MattFor/MattFor.github.io
 */

const changelogContent = document.getElementById('changelog-content');

if (changelogContent)
{
    const url = window.location.href;
    const fetchUrl = url.includes('devlog') ? '/resources/text/devlog.md' : '/resources/text/changelog.md';

    const MAX_RETRIES = 3;
    const RETRY_DELAY = 1500;

    const loadContent = (attempt) =>
    {
        fetch(fetchUrl)
        .then(response =>
        {
            if (!response.ok)
            {
                throw new Error('Network response was not ok: ' + response.statusText);
            }

            return response.text();
        })
        .then(markdown =>
        {
            changelogContent.innerHTML = marked(markdown);
        })
        .catch(error =>
        {
            console.error(`Error fetching changelog (attempt ${attempt}/${MAX_RETRIES}):`, error);

            if (attempt < MAX_RETRIES)
            {
                changelogContent.innerHTML = `<p class="changelog-retry-msg">Loading… (retry ${attempt}/${MAX_RETRIES - 1})</p>`;
                setTimeout(() => loadContent(attempt + 1), RETRY_DELAY);
            }
            else
            {
                changelogContent.innerHTML =
                    '<p>Failed to load content after multiple attempts.</p>' +
                    '<p><button onclick="location.reload()" style="margin-top:0.5rem;padding:0.4em 1em;cursor:pointer;border-radius:6px;border:1px solid var(--border);background:var(--bg-elevated);color:var(--text);font-size:0.9rem">Retry</button></p>';
            }
        });
    };

    loadContent(1);
}
