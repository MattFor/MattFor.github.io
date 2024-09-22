(() => {
    const subpages = [
        {
            name: "Terms of Service",
            link: "/subpages/terms-of-service.html",
            description: "Read the Terms of Service for using Relaxy!, the Multipurpose Discord Bot."
        },
        {
            name: "Privacy Policy",
            link: "/subpages/privacy-policy.html",
            description: "Read the Privacy Policy for using Relaxy!, the Multipurpose Discord Bot."
        },
        {
            name: "Changelog",
            link: "/subpages/changelog.html",
            description: "Check out the changelog and see the latest changes for Relaxy!, the Multipurpose Discord Bot."
        },
        {
            name: "Credits",
            link: "/subpages/credits.html",
            description: "Credits and acknowledgments for those who have contributed to the development of Relaxy!, the Multipurpose Discord Bot."
        }
    ];

    const currentPage = window.location.pathname;

    let htmlContent = "";
    if (currentPage !== "/" && currentPage !== "/subpages/terms-of-service.html")
    {
        htmlContent += '<a href="/" class="btn-main-page" id="back-to-main">Back to Main Page</a> <span>|</span> ';
    }

    subpages.filter(p => !currentPage.includes(p.link)).forEach((page, index) => {
        htmlContent += `<a href="${page.link}">${page.name}</a>`;

        if (index < subpages.length - 1)
        {
            htmlContent += " <span>|</span> ";
        }
    });

    if (htmlContent.endsWith(" <span>|</span> "))
    {
        htmlContent = htmlContent.slice(0, -3); // Remove trailing separator
    }

    document.getElementById("subpages-bar").innerHTML = htmlContent;
})();
