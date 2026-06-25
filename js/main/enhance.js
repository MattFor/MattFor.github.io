/**
 * Grr! stop looking here all is available at
 * @link https://github.com/MattFor/MattFor.github.io
 */

(() =>
{
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- Scroll reveal ------------------------------------------------ */
    const revealables = document.querySelectorAll('.reveal');

    if (reduceMotion || !('IntersectionObserver' in window))
    {
        revealables.forEach((el) => el.classList.add('is-visible'));
    }
    else
    {
        const revealObserver = new IntersectionObserver((entries, obs) =>
        {
            entries.forEach((entry) =>
            {
                if (!entry.isIntersecting)
                {
                    return;
                }
                entry.target.style.transitionDelay =
                    (entry.target.dataset.revealDelay || '0') + 'ms';
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            });
        }, {
            rootMargin: '0px 0px -8% 0px',
            threshold: 0.12
        });

        revealables.forEach((el) => revealObserver.observe(el));
    }

    /* ---- Active-section nav highlighting ------------------------------ */
    const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^=\'#\']'));
    if (navLinks.length && 'IntersectionObserver' in window)
    {
        const byId = new Map(
            navLinks.map((a) => [
                a.getAttribute('href').slice(1),
                a
            ])
        );
        const sections = navLinks
        .map((a) => document.getElementById(a.getAttribute('href').slice(1)))
        .filter(Boolean);

        const setActive = (id) =>
        {
            navLinks.forEach((a) =>
            {
                const on = a.getAttribute('href').slice(1) === id;
                a.classList.toggle('is-active', on);
                if (on)
                {
                    a.setAttribute('aria-current', 'true');
                }
                else
                {
                    a.removeAttribute('aria-current');
                }
            });
        };

        const navObserver = new IntersectionObserver((entries) =>
        {
            const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (visible && byId.has(visible.target.id))
            {
                setActive(visible.target.id);
            }
        }, {
            rootMargin: '-45% 0px -45% 0px',
            threshold: [
                0,
                0.25,
                0.5,
                1
            ]
        });

        sections.forEach((s) => navObserver.observe(s));
    }

    const data = window.RELAXY_COMMANDS;
    const chips = document.querySelectorAll('.chip[data-cmd]');
    if (data && chips.length)
    {
        const tip = document.createElement('div');
        tip.className = 'cmd-tip';
        tip.setAttribute('role', 'tooltip');
        tip.innerHTML =
            '<p class="cmd-name"></p>' +
            '<code class="cmd-usage"></code>' +
            '<p class="cmd-desc"></p>' +
            '<p class="cmd-hint">Click to keep open</p>';
        const elName = tip.querySelector('.cmd-name');
        const elUsage = tip.querySelector('.cmd-usage');
        const elDesc = tip.querySelector('.cmd-desc');
        document.body.appendChild(tip);

        // Render the small subset of Discord/markdown the descriptions use.
        const escapeHtml = (s) => s
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const mdToHtml = (s) => escapeHtml(s)
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/__([^_]+)__/g, '<u>$1</u>')
        .replace(/~~([^~]+)~~/g, '<s>$1</s>')
        .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');

        let pinned = null;   // the chip currently pinned, if any

        const place = (chip) =>
        {
            const margin = 10;
            const gap = 8;
            const r = chip.getBoundingClientRect();

            // Pick whichever side of the chip has more room, then cap the
            // tooltip to that space so it scrolls instead of covering the chip.
            const spaceBelow = window.innerHeight - r.bottom - gap - margin;
            const spaceAbove = r.top - gap - margin;
            const below = spaceBelow >= spaceAbove;
            // On mobile cap to 58 % of the viewport so there's always free
            // screen area outside the tooltip to initiate a page scroll.
            const viewportCap = window.innerWidth <= 720
                ? Math.floor(window.innerHeight * 0.58)
                : window.innerHeight - margin * 2;
            const avail = Math.min(
                Math.max(below ? spaceBelow : spaceAbove, 140),
                viewportCap
            );
            tip.style.maxHeight = avail + 'px';

            tip.style.left = '0';
            tip.style.top = '0';
            const tr = tip.getBoundingClientRect();
            let left = r.left + r.width / 2 - tr.width / 2;
            left = Math.max(margin, Math.min(left, window.innerWidth - tr.width - margin));
            const top = below ? r.bottom + gap : r.top - tr.height - gap;
            tip.style.left = Math.round(left) + 'px';
            tip.style.top = Math.round(Math.max(margin, top)) + 'px';
        };

        const show = (chip) =>
        {
            const info = data[chip.dataset.cmd];
            if (!info)
            {
                return;
            }
            elName.textContent = '=' + chip.dataset.cmd;
            elUsage.textContent = info.u || '=' + chip.dataset.cmd;
            elDesc.innerHTML = mdToHtml(info.d || 'No description.');
            tip.classList.add('is-open');
            place(chip);
        };

        const hide = () =>
        {
            if (pinned)
            {
                return;
            }
            tip.classList.remove('is-open', 'is-pinned');
        };

        const clearPin = () =>
        {
            if (!pinned)
            {
                return;
            }
            pinned.classList.remove('is-active');
            pinned = null;
            tip.classList.remove('is-pinned', 'is-open');
        };

        chips.forEach((chip) =>
        {
            chip.addEventListener('mouseenter', () =>
            {
                if (!pinned)
                {
                    show(chip);
                }
            });
            chip.addEventListener('mouseleave', hide);
            chip.addEventListener('focus', () =>
            {
                if (!pinned)
                {
                    show(chip);
                }
            });
            chip.addEventListener('blur', hide);
            chip.addEventListener('click', (e) =>
            {
                e.stopPropagation();
                if (pinned === chip)
                {
                    clearPin();
                    return;
                }
                if (pinned)
                {
                    pinned.classList.remove('is-active');
                }
                pinned = chip;
                chip.classList.add('is-active');
                show(chip);
                tip.classList.add('is-pinned');
            });
        });

        document.addEventListener('click', (e) =>
        {
            if (pinned && !tip.contains(e.target))
            {
                clearPin();
            }
        });
        document.addEventListener('keydown', (e) =>
        {
            if (e.key === 'Escape')
            {
                clearPin();
                tip.classList.remove('is-open');
            }
        });
        window.addEventListener('scroll', () =>
        {
            if (pinned)
            {
                const r = pinned.getBoundingClientRect();
                const offscreen = r.bottom < -80 || r.top > window.innerHeight + 80;
                if (offscreen)
                {
                    clearPin();
                }
                else
                {
                    place(pinned);
                }
            }
            else if (tip.classList.contains('is-open'))
            {
                tip.classList.remove('is-open');
            }
        }, { passive: true });
    }
})();
