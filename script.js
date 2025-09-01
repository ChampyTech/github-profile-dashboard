function handleUsername(event) {
    event.preventDefault();
    generateLinks();
}

function generateLinks() {
    const username = document.getElementById('username').value.trim();
    const list = document.getElementById('links');
    list.innerHTML = '';

    if (!username) return list.innerHTML = '<li style="color: red">Please enter a valid username.</li>';

    const categories = [
        {
            title: 'Repositories',
            links: [
                { label: 'Repositories (all)', url: `https://github.com/${username}?tab=repositories` },
                { label: 'Repositories (public)', url: `https://github.com/${username}?tab=repositories&q=&type=public&language=&sort=` },
                { label: 'Repositories (private)', url: `https://github.com/${username}?tab=repositories&q=&type=private&language=&sort=` },
                { label: 'Repositories (sources)', url: `https://github.com/${username}?tab=repositories&q=&type=source&language=&sort=` },
                { label: 'Repositories (forks)', url: `https://github.com/${username}?tab=repositories&q=&type=fork&language=&sort=` },
                { label: 'Repositories (archived)', url: `https://github.com/${username}?tab=repositories&q=&type=archived&language=&sort=` },
                { label: 'Repositories (sponsorable)', url: `https://github.com/${username}?tab=repositories&q=&type=sponsorable&language=&sort=` },
                { label: 'Repositories (mirrors)', url: `https://github.com/${username}?tab=repositories&q=&type=mirror&language=&sort=` },
                { label: 'Repositories (templates)', url: `https://github.com/${username}?tab=repositories&q=&type=template&language=&sort=` },
                { label: 'Repositories (pinned)', url: `https://github.com/${username}#:~:text=Pinned,Loading` },
            ],
        },
        {
            title: 'Stars',
            links: [
                { label: 'Stars (all)', url: `https://github.com/${username}?tab=stars` },
                { label: 'Stars (public)', url: `https://github.com/${username}?tab=stars&type=public` },
                { label: 'Stars (private)', url: `https://github.com/${username}?tab=stars&type=private` },
                { label: 'Stars (sources)', url: `https://github.com/${username}?tab=stars&type=source` },
                { label: 'Stars (forks)', url: `https://github.com/${username}?tab=stars&type=fork` },
                { label: 'Stars (sponsorable)', url: `https://github.com/${username}?tab=stars&type=sponsorable` },
                { label: 'Stars (mirrors)', url: `https://github.com/${username}?tab=stars&type=mirror` },
                { label: 'Stars (templates)', url: `https://github.com/${username}?tab=stars&type=template` },
            ],
        },
        {
            title: 'Issues',
            links: [
                { label: 'Open issues (assigned to me)', url: `https://github.com/issues/assigned?q=is%3Aissue%20state%3Aopen%20archived%3Afalse%20assignee%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Open issues (created by me)', url: `https://github.com/issues/created?q=is%3Aissue%20state%3Aopen%20archived%3Afalse%20author%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Open issues (mentioned)', url: `https://github.com/issues/mentioned?q=is%3Aissue%20state%3Aopen%20archived%3Afalse%20mentions%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Merged issues (assigned to me)', url: `https://github.com/issues/assigned?q=is%3Aissue%20state%3Amerged%20archived%3Afalse%20assignee%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Merged issues (created by me)', url: `https://github.com/issues/created?q=is%3Aissue%20state%3Amerged%20archived%3Afalse%20author%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Merged issues (mentioned)', url: `https://github.com/issues/mentioned?q=is%3Aissue%20state%3Amerged%20archived%3Afalse%20mentions%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Draft issues (assigned to me)', url: `https://github.com/issues/assigned?q=is%3Aissue%20state%3Adraft%20archived%3Afalse%20assignee%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Draft issues (created by me)', url: `https://github.com/issues/created?q=is%3Aissue%20state%3Adraft%20archived%3Afalse%20author%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Draft issues (mentioned)', url: `https://github.com/issues/mentioned?q=is%3Aissue%20state%3Adraft%20archived%3Afalse%20mentions%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Closed issues (assigned to me)', url: `https://github.com/issues/assigned?q=is%3Aissue%20state%3Aclosed%20archived%3Afalse%20assignee%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Closed issues (created by me)', url: `https://github.com/issues/created?q=is%3Aissue%20state%3Aclosed%20archived%3Afalse%20author%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Closed issues (mentioned)', url: `https://github.com/issues/mentioned?q=is%3Aissue%20state%3Aclosed%20archived%3Afalse%20mentions%3A%40me%20sort%3Aupdated-desc` },
                { label: 'Issues (recent activity)', url: `https://github.com/issues/recent?q=is%3Aissue%20involves%3A%40me%20updated%3A%3E%40today-1w%20sort%3Aupdated-desc` },
            ],
        },
        {
            title: 'Notifications',
            links: [
                { label: 'Notifications (inbox)', url: `https://github.com/notifications` },
                { label: 'Notifications (saved)', url: `https://github.com/notifications?query=is%3Asaved` },
                { label: 'Notifications (read)', url: `https://github.com/notifications?query=is%3Aread` },
                { label: 'Notifications (unread)', url: `https://github.com/notifications?query=is%3Aunread` },
                { label: 'Notifications (done)', url: `https://github.com/notifications?query=is%3Adone` },
                { label: 'Notifications (commits)', url: `https://github.com/notifications?query=is%3Acommit` },
                { label: 'Notifications (gists)', url: `https://github.com/notifications?query=is%3Agist` },
                { label: 'Notifications (releases)', url: `https://github.com/notifications?query=is%3Arelease` },
                { label: 'Notifications (repository invitations)', url: `https://github.com/notifications?query=is%3Arepository-invitation` },
                { label: 'Notifications (repository vulnerability alerts)', url: `https://github.com/notifications?query=is%3Arepository-vulnerability-alert` },
                { label: 'Notifications (repository advisories)', url: `https://github.com/notifications?query=is%3Arepository-advisory` },
                { label: 'Notifications (team discussions)', url: `https://github.com/notifications?query=is%3Ateam-discussion` },
                { label: 'Notifications (discussions)', url: `https://github.com/notifications?query=is%3Adiscussion` },
                { label: 'Notifications (issues & pull requests)', url: `https://github.com/notifications?query=is%3Aissue-or-pull-request` },
            ],
        },
        {
            title: 'Public Profile',
            links: [
                { label: 'Profile Link', url: `https://github.com/${username}` },
                { label: 'Followers', url: `https://github.com/${username}?tab=followers` },
                { label: 'Following', url: `https://github.com/${username}?tab=following` },
                { label: 'Lists', url: `https://github.com/${username}?tab=stars#:~:text=Achievements-,Lists,-(5)` },
                { label: 'Contributions', url: `https://github.com/${username}` },
                { label: 'Organizations', url: `https://github.com/${username}?tab=organizations` },
                { label: 'Projects', url: `https://github.com/users/${username}/projects` },
                { label: 'Gists (public)', url: `https://gist.github.com/${username}` },
                { label: 'Gists (starred)', url: `https://gist.github.com/${username}/starred` },
                { label: 'Sponsors', url: `https://github.com/sponsors/${username}` },
                { label: 'Achievements', url: `https://github.com/${username}?tab=achievements` },
                { label: 'Profile README', url: `https://github.com/${username}/${username}/blob/main/README.md` },
                { label: 'Profile README (code)', url: `https://github.com/${username}/${username}/blob/main/README.md?plain=1` },
                { label: 'Profile README (blame)', url: `https://github.com/${username}/${username}/blame/main/README.md` },
                { label: 'Profile README (raw)', url: `https://raw.githubusercontent.com/${username}/${username}/refs/heads/main/README.md` },
                { label: 'Contribution Graph', url: `https://github.com/${username}#:~:text=477-,contributions,-in%20the%20last` },
                { label: 'Contribution Activity', url: `https://github.com/${username}?tab=overview#:~:text=Contribution%20activity` },

            ],
        },
        {
            title: 'Advanced',
            links: [
                { label: 'Projects (all)', url: `https://github.com/${username}?tab=projects` },
                { label: 'Projects (open)', url: `https://github.com/${username}?query=is%3Aopen&tab=projects` },
                { label: 'Projects (closed)', url: `https://github.com/${username}?query=is%3Aclosed&tab=projects` },
                { label: 'Packages (all)', url: `https://github.com/${username}?tab=packages` },
                { label: 'Packages (public)', url: `https://github.com/${username}?tab=packages&visibility=public` },
                { label: 'Packages (private)', url: `https://github.com/${username}?tab=packages&visibility=private` },
            ],
        }
    ];

    categories.forEach((category) => {
        const h2 = document.createElement('h2');
        h2.textContent = category.title;
        list.appendChild(h2);

        category.links.forEach((link) => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${link.url}" target="_blank">${link.label}</a>`;
            list.appendChild(li);
        });
    });
}