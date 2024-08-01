(() => {
    const subpages = [
        {
            name: "Terms of Service",
            link: "subpages/terms-of-service/index.html",
            description: "Read the Terms of Service for using Relaxy!, the Multipurpose Discord Bot."
        },
        {
            name: "Privacy Policy",
            link: "subpages/privacy-policy/index.html",
            description: "Read the Privacy Policy for using Relaxy!, the Multipurpose Discord Bot."
        },
        {
            name: "Changelog",
            link: "subpages/changelog/index.html",
            description: "Check out the changelog and see the latest changes for Relaxy!, the Multipurpose Discord Bot."
        },
        {
            name: "Credits",
            link: "subpages/credits/index.html",
            description: "Credits and acknowledgments for those who have contributed to the development of Relaxy!, the Multipurpose Discord Bot."
        }
    ];

    const currentPage = window.location.pathname;
    const isSubpage = currentPage.includes('subpages');

    let htmlContent = '';
    if (currentPage !== '/' && currentPage !== '/index.html') 
    {
        htmlContent += '<a href="/" class="btn-main-page" id="back-to-main">Back to Main Page</a> | ';
    }

    subpages.filter(p => !currentPage.includes(p.link)).forEach((page, index) => {
        const link = isSubpage ? page.link.replace(/subpages\/.*\//, '') : page.link;

        htmlContent += `<a href="${page.link}">${page.name}</a>`;
        if (index < subpages.length - 1) 
        {
            htmlContent += ' | ';
        }
    });

    if (htmlContent.endsWith(' | ')) 
    {
        htmlContent = htmlContent.slice(0, -3);
    }

    document.getElementById('subpages-bar').innerHTML = htmlContent;
})();
