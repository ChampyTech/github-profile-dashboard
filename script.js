function generateLinks() {
    const username = document.getElementById('username').value.trim();
    const list = document.getElementById('links');
    list.innerHTML = '';

    if (!username) return list.innerHTML = '<li style="color: red">Please enter a valid username.</li>';

    const links = [
        { label: 'Profile Link', url: `https://github.com/${username}` },
        { label: 'Followers', url: `https://github.com/${username}?tab=followers` },
        { label: 'Following', url: `https://github.com/${username}?tab=following` },
        { label: 'Public Repositories', url: `https://github.com/${username}?tab=repositories` },
        { label: 'Stars & Lists', url: `https://github.com/${username}?tab=stars` },
        { label: 'Contributions', url: `https://github.com/${username}` },
        { label: 'Organizations', url: `https://github.com/${username}?tab=organizations` },
        { label: 'Projects', url: `https://github.com/users/${username}/projects` },
        { label: 'Public Gists', url: `https://gist.github.com/${username}` },
        { label: 'Starred Gists', url: `https://gist.github.com/${username}/starred` },
        { label: 'Projects', url: `https://github.com/${username}?tab=projects` },
        { label: 'Packages', url: `https://github.com/${username}?tab=packages` },
        { label: 'Sponsors', url: `https://github.com/sponsors/${username}` },
        { label: 'Achievements', url: `https://github.com/${username}?tab=achievements` },
        { label: 'Profile README', url: `https://github.com/${username}/${username}/blob/main/README.md` },
        { label: 'Profile README (code)', url: `https://github.com/${username}/${username}/blob/main/README.md?plain=1` },
        { label: 'Profile README (blame)', url: `https://github.com/${username}/${username}/blame/main/README.md` },
        { label: 'Profile README (raw)', url: `https://raw.githubusercontent.com/${username}/${username}/refs/heads/main/README.md` },
    ];

    links.forEach((link) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.label}</a>`
        list.appendChild(li);
    });
}