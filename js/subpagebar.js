const subpages = [
    { name: 'Terms of Service', link: '/subpages/terms-of-service.html' },
    { name: 'Privacy Policy', link: '/subpages/privacy-policy.html' },
    { name: 'Changelog', link: 'changelog.html' },
    { name: 'Credits', link: '/subpages/credits.html' }
];

function generateSubpagesBar() {
    const currentPage = window.location.pathname;
    let htmlContent = '';

    if (currentPage !== '/' && currentPage !== '/index.html') {
        htmlContent += '<a href="/" class="btn-main-page" id="back-to-main">Back to Main Page</a> | ';
    }

    subpages.forEach((page, index) => {
        if (currentPage !== page.link) {
            htmlContent += `<a href="${page.link}">${page.name}</a>`;
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
