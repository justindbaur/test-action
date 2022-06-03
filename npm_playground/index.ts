import { getOctokit } from "@actions/github";
import core from "@actions/core";


async function main(): Promise<void> {
    var token = process.env.GITHUB_TOKEN;

    if (!token) {
        console.log("No token found");
        return;
    }

    const github = getOctokit(token, {
        log: console
    });

    const pull = await github.rest.pulls.get({
        owner: "justindbaur",
        repo: "test-action",
        pull_number: 1
    });

    console.log(pull.data.head.ref);
    console.log(pull.data.base.ref);

    core.setOutput("pull_head", pull.data.head.ref);
    core.setOutput("pull_base", pull.data.base.ref);
}

main()
    .catch(console.error);
