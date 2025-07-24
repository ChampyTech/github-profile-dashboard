function generateLinks() {
    const username = document.getElementById('username').value.trim();
    const list = document.getElementById('links');
    list.innerHTML = '';

    if (!username) return list.innerHTML = '<li style="color: red">Please enter a valid username.</li>';

    const links = [
        { label: 'Profile Link', url: `https://github.com/${username}` },
        { label: 'Followers', url: `https://github.com/${username}?tab=followers` },
        { label: 'Following', url: `https://github.com/${username}?tab=following` },
        { label: 'Stars & Lists', url: `https://github.com/${username}?tab=stars` },
        { label: 'Contributions', url: `https://github.com/${username}` },
        { label: 'Organizations', url: `https://github.com/${username}?tab=organizations` },
        { label: 'Projects', url: `https://github.com/users/${username}/projects` },
        { label: 'Gists (public)', url: `https://gist.github.com/${username}` },
        { label: 'Gists (starred)', url: `https://gist.github.com/${username}/starred` },
        { label: 'Projects', url: `https://github.com/${username}?tab=projects` },
        { label: 'Packages', url: `https://github.com/${username}?tab=packages` },
        { label: 'Sponsors', url: `https://github.com/sponsors/${username}` },
        { label: 'Achievements', url: `https://github.com/${username}?tab=achievements` },
        { label: 'Profile README', url: `https://github.com/${username}/${username}/blob/main/README.md` },
        { label: 'Profile README (code)', url: `https://github.com/${username}/${username}/blob/main/README.md?plain=1` },
        { label: 'Profile README (blame)', url: `https://github.com/${username}/${username}/blame/main/README.md` },
        { label: 'Profile README (raw)', url: `https://raw.githubusercontent.com/${username}/${username}/refs/heads/main/README.md` },
        { label: 'Pinned Repositories', url: `https://github.com/${username}#:~:text=Pinned,Loading` },
        { label: 'Contribution Graph', url: `https://github.com/${username}#:~:text=477-,contributions,-in%20the%20last` },
        { label: 'Contribution Activity', url: `https://github.com/${username}?tab=overview#:~:text=Contribution%20activity` },
        { label: 'Repositories (all)', url: `https://github.com/${username}?tab=repositories` },
        { label: 'Repositories (public)', url: `https://github.com/${username}?tab=repositories&q=&type=public&language=&sort=` },
        { label: 'Repositories (private)', url: `https://github.com/${username}?tab=repositories&q=&type=private&language=&sort=` },
        { label: 'Repositories (sources)', url: `https://github.com/${username}?tab=repositories&q=&type=source&language=&sort=` },
        { label: 'Repositories (forks)', url: `https://github.com/${username}?tab=repositories&q=&type=fork&language=&sort=` },
        { label: 'Repositories (archived)', url: `https://github.com/${username}?tab=repositories&q=&type=archived&language=&sort=` },
        { label: 'Repositories (sponsorable)', url: `https://github.com/${username}?tab=repositories&q=&type=sponsorable&language=&sort=` },
        { label: 'Repositories (mirrors)', url: `https://github.com/${username}?tab=repositories&q=&type=mirror&language=&sort=` },
        { label: 'Repositories (templates)', url: `https://github.com/${username}?tab=repositories&q=&type=template&language=&sort=` },
        { label: 'Projects (all)', url: `https://github.com/${username}?tab=projects` },
    ];

    links.forEach((link) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.label}</a>`
        list.appendChild(li);
    });
}