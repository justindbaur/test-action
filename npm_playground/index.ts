import { getOctokit } from "@actions/github";


async function main(): Promise<void> {
    var token = process.env.GITHUB_TOKEN;

    if (!token) {
        console.log("No token found");
        return;
    }

    const github = getOctokit(token, {
        log: console
    });

    const membership = await github.rest.repos.checkCollaborator({
        owner: "bitwarden",
        repo: "server",
        username: "sudoevan"
    });

    console.log(membership.status);
}

main()
    .catch(console.error);
