(() => {
    const currentPage = window.location.pathname;

    let content = "Relaxy is a multipurpose with advanced features such as censoring, custom forums, heartboards, and more. Created by mattfor/MattFor#9884. Over 100000 users on 80+ servers."
    let pageTitle = "Multipurpose Discord Bot";

    for (const page of subpages) {
        if (currentPage.endsWith(page.link)) {
            pageTitle = page.name;
            content = page.description;
            break;
        }
    }

    let headContent = `
    <meta charset="UTF-8">
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relaxy! - ${pageTitle}</title>
    <link rel="stylesheet" href="main.css">
    <link rel="icon" href="resources/relaxy.ico" type="image/x-icon">
    <meta name="theme-color" content="#ff69b4">
    <meta name="author" content="MattFor">
    <meta name="publisher" content="MattFor">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.relaxy.xyz">
    <meta property="og:title" content="Relaxy! - ${pageTitle}">
    <meta property="og:description" content="${content}">
    <meta property="og:image" content="https://cdn.discordapp.com/attachments/1034523802366918667/1135327519407607968/relaxy.png">
    <meta property="twitter:card" content="summary">
    `;

    document.head.innerHTML += headContent;
})();
