const subpages = [
    { name: 'Terms of Service', link: 'subpages/terms-of-service.html' },
    { name: 'Privacy Policy', link: 'subpages/privacy-policy.html' },
    { name: 'Changelog', link: 'subpages/changelog.html' },
    { name: 'Credits', link: 'subpages/credits.html' }
];

function generateSubpagesBar() {
    const currentPage = window.location.pathname;
    let htmlContent = '';
    const isSubpage = currentPage.includes('/subpages/');

    if (currentPage !== '/' && currentPage !== '/index.html') {
        htmlContent += '<a href="/" class="btn-main-page" id="back-to-main">Back to Main Page</a> | ';
    }

    subpages.forEach((page, index) => {
        const link = isSubpage ? page.link.replace('subpages/', '') : page.link;
        if (currentPage !== link) {
            htmlContent += `<a href="${link}">${page.name}</a>`;
            if (index < subpages.length - 1) {
                htmlContent += ' | ';
            }
        }
    });

    if (htmlContent.endsWith(' | ')) {
        htmlContent = htmlContent.slice(0, -3);
    }

    document.getElementById('subpages-bar').innerHTML = htmlContent;
}

generateSubpagesBar();
