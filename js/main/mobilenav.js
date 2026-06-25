(() =>
{
    const toggle = document.getElementById('navToggle');
    const drawer = document.getElementById('navDrawer');
    const overlay = document.getElementById('navOverlay');
    const closeBtn = document.getElementById('navDrawerClose');
    const drawerNav = document.getElementById('drawerNav');
    const topnav = document.getElementById('topnav');

    if (!toggle || !drawer) return;

    // Mirror topnav into the drawer — subpagebar.js already ran (it's listed first in the scripts)
    if (topnav && drawerNav)
    {
        Array.from(topnav.children).forEach(child =>
        {
            if (child.tagName === 'SPAN' && child.classList.contains('nav-sep')) return;
            drawerNav.appendChild(child.cloneNode(true));
        });
    }

    const openDrawer = () =>
    {
        drawer.classList.add('is-open');
        toggle.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('nav-open');
        closeBtn?.focus();
    };

    const closeDrawer = () =>
    {
        drawer.classList.remove('is-open');
        toggle.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
        toggle.focus();
    };

    toggle.addEventListener('click', openDrawer);
    overlay?.addEventListener('click', closeDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    drawerNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

    document.addEventListener('keydown', e =>
    {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
    });
})();
