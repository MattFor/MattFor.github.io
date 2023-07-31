(() => {
    const currentPage = window.location.pathname;
    const isSubpage = currentPage.includes('/subpages/');

    let htmlContent = '';

    if (currentPage !== '/' && currentPage !== '/index.html') {
        htmlContent += '<a href="/" class="btn-main-page" id="back-to-main">Back to Main Page</a> | ';
    }

    subpages.forEach((page, index) => {
        const link = isSubpage ? page.link.replace('subpages/', '') : page.link;
        if (!currentPage.includes(page.name)) {
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
})();
