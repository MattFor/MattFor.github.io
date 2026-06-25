(() =>
{
    const pages = [
        {
            name: 'Home',
            short: 'Home',
            link: '/'
        },
        {
            name: 'Terms of Service',
            short: 'Terms',
            link: '/subpages/terms-of-service.html'
        },
        {
            name: 'Privacy Policy',
            short: 'Privacy',
            link: '/subpages/privacy-policy.html'
        },
        {
            name: 'Changelog',
            short: 'Changelog',
            link: '/subpages/changelog.html'
        },
        {
            name: 'Devlog',
            short: 'Devlog',
            link: '/subpages/devlog.html'
        },
        {
            name: 'Credits',
            short: 'Credits',
            link: '/subpages/credits.html'
        }
    ];

    const path = window.location.pathname;
    const isCurrent = (link) =>
        link === '/'
            ? (path === '/' || path.endsWith('/index.html'))
            : path.endsWith(link.replace(/^\//, '')) || path.includes(link);

    const others = pages.filter((p) => !isCurrent(p.link));

    // Footer bar - pipe-separated, full names.
    const bottom = document.getElementById('subpages-bar');
    if (bottom)
    {
        bottom.innerHTML = others
        .map((p) => `<a href="${p.link}">${p.name}</a>`)
        .join(' <span aria-hidden="true">|</span> ');
    }

    // Top bar - pill links, short names, appended after existing nav items.
    const top = document.getElementById('topnav');
    if (top)
    {
        if (top.children.length)
        {
            const sep = document.createElement('span');
            sep.className = 'nav-sep';
            sep.setAttribute('aria-hidden', 'true');
            top.appendChild(sep);
        }
        others.forEach((p) =>
        {
            const a = document.createElement('a');
            a.href = p.link;
            a.textContent = p.short;
            a.className = 'nav-page';
            top.appendChild(a);
        });
    }
})();
