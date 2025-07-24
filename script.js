function generateLinks() {
    const username = document.getElementById("username").value.trim();
    const list = document.getElementById("links");
    list.innerHTML = '';

    if (!username) return list.innerHTML = "<li style=\"color: red\">Please enter a valid username.</li>";

    const links = [
        { label: 'Followers', url: `https://github.com/${username}?tab=followers` },
        { label: 'Following', url: `https://github.com/${username}?tab=following` },
        { label: 'Repositories', url: `https://github.com/${username}?tab=repositories` },
        { label: 'Starred Repositories', url: `https://github.com/${username}?tab=stars` },
        { label: 'Contributions', url: `https://github.com/${username}` },
        { label: 'Organizations', url: `https://github.com/${username}?tab=organizations` },
        { label: 'Projects', url: `https://github.com/users/${username}/projects` },
        { label: 'Gists', url: `https://gist.github.com/${username}` }
    ];

    links.forEach((link) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link.url}" target="_blank">${link.label}</a>`
        list.appendChild(li);
    });
}