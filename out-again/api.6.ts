import * as tsgen from "./engine";
export const allPaths = ["/repos/{owner}/{repo}/actions/jobs/{job_id}/logs", "/repos/{owner}/{repo}/actions/runners", "/repos/{owner}/{repo}/actions/runners/downloads", "/repos/{owner}/{repo}/actions/runners/registration-token", "/repos/{owner}/{repo}/actions/runners/remove-token", "/repos/{owner}/{repo}/actions/runners/{runner_id}", "/repos/{owner}/{repo}/actions/runs", "/repos/{owner}/{repo}/actions/runs/{run_id}", "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel", "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs", "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun", "/repos/{owner}/{repo}/actions/secrets", "/repos/{owner}/{repo}/actions/secrets/public-key", "/repos/{owner}/{repo}/actions/secrets/{name}", "/repos/{owner}/{repo}/actions/workflows", "/repos/{owner}/{repo}/actions/workflows/{workflow_id}", "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", "/repos/{owner}/{repo}/assignees"];
export type Paths = "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs" | "/repos/{owner}/{repo}/actions/runners" | "/repos/{owner}/{repo}/actions/runners/downloads" | "/repos/{owner}/{repo}/actions/runners/registration-token" | "/repos/{owner}/{repo}/actions/runners/remove-token" | "/repos/{owner}/{repo}/actions/runners/{runner_id}" | "/repos/{owner}/{repo}/actions/runs" | "/repos/{owner}/{repo}/actions/runs/{run_id}" | "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts" | "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel" | "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs" | "/repos/{owner}/{repo}/actions/runs/{run_id}/logs" | "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun" | "/repos/{owner}/{repo}/actions/secrets" | "/repos/{owner}/{repo}/actions/secrets/public-key" | "/repos/{owner}/{repo}/actions/secrets/{name}" | "/repos/{owner}/{repo}/actions/workflows" | "/repos/{owner}/{repo}/actions/workflows/{workflow_id}" | "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs" | "/repos/{owner}/{repo}/assignees";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs" ? {
    get: (owner: string, repo: string, jobId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 302;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runners" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            id: number;
            name: string;
            os: string;
            status: string;
        }[][];
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runners/downloads" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            architecture: string;
            download_url: string;
            filename: string;
            os: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runners/registration-token" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
            expires_at: string;
            token: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runners/remove-token" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
            expires_at: string;
            token: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runners/{runner_id}" ? {
    delete: (owner: string, repo: string, runnerId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, runnerId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            id: number;
            name: string;
            os: string;
            status: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs" ? {
    get: (owner: string, repo: string, actor?: string, branch?: string, event?: string, status?: "completed" | "status" | "conclusion", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            total_count: number;
            workflow_runs: {
                artifacts_url: string;
                cancel_url: string;
                check_suite_url: string;
                conclusion: string;
                created_at: string;
                event: string;
                head_branch: string;
                head_commit: {
                    author: {
                        email: string;
                        name: string;
                    };
                    committer: {
                        email: string;
                        name: string;
                    };
                    id: string;
                    message: string;
                    timestamp: string;
                    tree_id: string;
                };
                head_repository: {
                    archive_url: string;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    deployments_url: string;
                    description: string;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    hooks_url: string;
                    html_url: string;
                    id: number;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    languages_url: string;
                    merges_url: string;
                    milestones_url: string;
                    name: string;
                    node_id: string;
                    notifications_url: string;
                    owner: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    private: boolean;
                    pulls_url: string;
                    releases_url: string;
                    stargazers_url: string;
                    statuses_url: string;
                    subscribers_url: string;
                    subscription_url: string;
                    tags_url: string;
                    teams_url: string;
                    trees_url: string;
                    url: string;
                };
                head_sha: string;
                html_url: string;
                id: number;
                jobs_url: string;
                logs_url: string;
                node_id: string;
                pull_requests: any[];
                repository: {
                    archive_url: string;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    deployments_url: string;
                    description: string;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    git_url: string;
                    html_url: string;
                    id: number;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    languages_url: string;
                    merges_url: string;
                    milestones_url: string;
                    name: string;
                    node_id: string;
                    notifications_url: string;
                    owner: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    private: boolean;
                    pulls_url: string;
                    releases_url: string;
                    ssh_url: string;
                    stargazers_url: string;
                    statuses_url: string;
                    subscribers_url: string;
                    subscription_url: string;
                    tags_url: string;
                    teams_url: string;
                    trees_url: string;
                    url: string;
                };
                rerun_url: string;
                run_number: number;
                status: string;
                updated_at: string;
                url: string;
                workflow_url: string;
            }[];
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}" ? {
    get: (owner: string, repo: string, runId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            artifacts_url: string;
            cancel_url: string;
            check_suite_url: string;
            conclusion: string;
            created_at: string;
            event: string;
            head_branch: string;
            head_commit: {
                author: {
                    email: string;
                    name: string;
                };
                committer: {
                    email: string;
                    name: string;
                };
                id: string;
                message: string;
                timestamp: string;
                tree_id: string;
            };
            head_repository: {
                archive_url: string;
                assignees_url: string;
                blobs_url: string;
                branches_url: string;
                collaborators_url: string;
                comments_url: string;
                commits_url: string;
                compare_url: string;
                contents_url: string;
                contributors_url: string;
                deployments_url: string;
                description: string;
                downloads_url: string;
                events_url: string;
                fork: boolean;
                forks_url: string;
                full_name: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                hooks_url: string;
                html_url: string;
                id: number;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                languages_url: string;
                merges_url: string;
                milestones_url: string;
                name: string;
                node_id: string;
                notifications_url: string;
                owner: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                private: boolean;
                pulls_url: string;
                releases_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                url: string;
            };
            head_sha: string;
            html_url: string;
            id: number;
            jobs_url: string;
            logs_url: string;
            node_id: string;
            pull_requests: any[];
            repository: {
                archive_url: string;
                assignees_url: string;
                blobs_url: string;
                branches_url: string;
                collaborators_url: string;
                comments_url: string;
                commits_url: string;
                compare_url: string;
                contents_url: string;
                contributors_url: string;
                deployments_url: string;
                description: string;
                downloads_url: string;
                events_url: string;
                fork: boolean;
                forks_url: string;
                full_name: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                git_url: string;
                html_url: string;
                id: number;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                languages_url: string;
                merges_url: string;
                milestones_url: string;
                name: string;
                node_id: string;
                notifications_url: string;
                owner: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                private: boolean;
                pulls_url: string;
                releases_url: string;
                ssh_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                url: string;
            };
            rerun_url: string;
            run_number: number;
            status: string;
            updated_at: string;
            url: string;
            workflow_url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts" ? {
    get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            artifacts: {
                archive_download_url: string;
                created_at: string;
                expired: string;
                expires_at: string;
                id: number;
                name: string;
                node_id: string;
                size_in_bytes: number;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel" ? {
    post: (owner: string, repo: string, runId: number, accept?: string) => Promise<{
        status: 202;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs" ? {
    get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            jobs: {
                check_run_url: string;
                completed_at: string;
                conclusion: string;
                head_sha: string;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                run_id: number;
                run_url: string;
                started_at: string;
                status: string;
                steps: {
                    completed_at: string;
                    conclusion: string;
                    name: string;
                    number: number;
                    started_at: string;
                    status: string;
                }[];
                url: string;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}/logs" ? {
    get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 302;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun" ? {
    post: (owner: string, repo: string, runId: number, accept?: string) => Promise<{
        status: 201;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/secrets" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            secrets: {
                created_at: string;
                name: string;
                updated_at: string;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/secrets/public-key" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            key: string;
            key_id: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/secrets/{name}" ? {
    delete: (owner: string, repo: string, name: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, name: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            name: string;
            updated_at: string;
        };
    }>;
    put: (owner: string, repo: string, name: string, accept?: string) => Promise<{
        status: 418;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/workflows" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            total_count: number;
            workflows: {
                badge_url: string;
                created_at: string;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                path: string;
                state: string;
                updated_at: string;
                url: string;
            }[];
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/workflows/{workflow_id}" ? {
    get: (owner: string, repo: string, workflowId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            badge_url: string;
            created_at: string;
            html_url: string;
            id: number;
            name: string;
            node_id: string;
            path: string;
            state: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs" ? {
    get: (owner: string, repo: string, workflowId: number, actor?: string, branch?: string, event?: string, status?: "completed" | "status" | "conclusion", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            total_count: number;
            workflow_runs: {
                artifacts_url: string;
                cancel_url: string;
                check_suite_url: string;
                conclusion: string;
                created_at: string;
                event: string;
                head_branch: string;
                head_commit: {
                    author: {
                        email: string;
                        name: string;
                    };
                    committer: {
                        email: string;
                        name: string;
                    };
                    id: string;
                    message: string;
                    timestamp: string;
                    tree_id: string;
                };
                head_repository: {
                    archive_url: string;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    deployments_url: string;
                    description: string;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    hooks_url: string;
                    html_url: string;
                    id: number;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    languages_url: string;
                    merges_url: string;
                    milestones_url: string;
                    name: string;
                    node_id: string;
                    notifications_url: string;
                    owner: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    private: boolean;
                    pulls_url: string;
                    releases_url: string;
                    stargazers_url: string;
                    statuses_url: string;
                    subscribers_url: string;
                    subscription_url: string;
                    tags_url: string;
                    teams_url: string;
                    trees_url: string;
                    url: string;
                };
                head_sha: string;
                html_url: string;
                id: number;
                jobs_url: string;
                logs_url: string;
                node_id: string;
                pull_requests: any[];
                repository: {
                    archive_url: string;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    deployments_url: string;
                    description: string;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    git_url: string;
                    html_url: string;
                    id: number;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    languages_url: string;
                    merges_url: string;
                    milestones_url: string;
                    name: string;
                    node_id: string;
                    notifications_url: string;
                    owner: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    private: boolean;
                    pulls_url: string;
                    releases_url: string;
                    ssh_url: string;
                    stargazers_url: string;
                    statuses_url: string;
                    subscribers_url: string;
                    subscription_url: string;
                    tags_url: string;
                    teams_url: string;
                    trees_url: string;
                    url: string;
                };
                rerun_url: string;
                run_number: number;
                status: string;
                updated_at: string;
                url: string;
                workflow_url: string;
            }[];
        };
    }>;
} : P extends "/repos/{owner}/{repo}/assignees" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            html_url: string;
            id: number;
            login: string;
            node_id: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        }[];
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs" ? {
    get: (owner: string, repo: string, jobId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 302;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runners" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                id: number;
                name: string;
                os: string;
                status: string;
            }[][];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runners/downloads" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                architecture: string;
                download_url: string;
                filename: string;
                os: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runners/registration-token" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                expires_at: string;
                token: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runners/remove-token" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                expires_at: string;
                token: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runners/{runner_id}" ? {
    delete: (owner: string, repo: string, runnerId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, runnerId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                id: number;
                name: string;
                os: string;
                status: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs" ? {
    get: (owner: string, repo: string, actor?: string, branch?: string, event?: string, status?: "completed" | "status" | "conclusion", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                total_count: number;
                workflow_runs: {
                    artifacts_url: string;
                    cancel_url: string;
                    check_suite_url: string;
                    conclusion: string;
                    created_at: string;
                    event: string;
                    head_branch: string;
                    head_commit: {
                        author: {
                            email: string;
                            name: string;
                        };
                        committer: {
                            email: string;
                            name: string;
                        };
                        id: string;
                        message: string;
                        timestamp: string;
                        tree_id: string;
                    };
                    head_repository: {
                        archive_url: string;
                        assignees_url: string;
                        blobs_url: string;
                        branches_url: string;
                        collaborators_url: string;
                        comments_url: string;
                        commits_url: string;
                        compare_url: string;
                        contents_url: string;
                        contributors_url: string;
                        deployments_url: string;
                        description: string;
                        downloads_url: string;
                        events_url: string;
                        fork: boolean;
                        forks_url: string;
                        full_name: string;
                        git_commits_url: string;
                        git_refs_url: string;
                        git_tags_url: string;
                        hooks_url: string;
                        html_url: string;
                        id: number;
                        issue_comment_url: string;
                        issue_events_url: string;
                        issues_url: string;
                        keys_url: string;
                        labels_url: string;
                        languages_url: string;
                        merges_url: string;
                        milestones_url: string;
                        name: string;
                        node_id: string;
                        notifications_url: string;
                        owner: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        private: boolean;
                        pulls_url: string;
                        releases_url: string;
                        stargazers_url: string;
                        statuses_url: string;
                        subscribers_url: string;
                        subscription_url: string;
                        tags_url: string;
                        teams_url: string;
                        trees_url: string;
                        url: string;
                    };
                    head_sha: string;
                    html_url: string;
                    id: number;
                    jobs_url: string;
                    logs_url: string;
                    node_id: string;
                    pull_requests: any[];
                    repository: {
                        archive_url: string;
                        assignees_url: string;
                        blobs_url: string;
                        branches_url: string;
                        collaborators_url: string;
                        comments_url: string;
                        commits_url: string;
                        compare_url: string;
                        contents_url: string;
                        contributors_url: string;
                        deployments_url: string;
                        description: string;
                        downloads_url: string;
                        events_url: string;
                        fork: boolean;
                        forks_url: string;
                        full_name: string;
                        git_commits_url: string;
                        git_refs_url: string;
                        git_tags_url: string;
                        git_url: string;
                        html_url: string;
                        id: number;
                        issue_comment_url: string;
                        issue_events_url: string;
                        issues_url: string;
                        keys_url: string;
                        labels_url: string;
                        languages_url: string;
                        merges_url: string;
                        milestones_url: string;
                        name: string;
                        node_id: string;
                        notifications_url: string;
                        owner: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        private: boolean;
                        pulls_url: string;
                        releases_url: string;
                        ssh_url: string;
                        stargazers_url: string;
                        statuses_url: string;
                        subscribers_url: string;
                        subscription_url: string;
                        tags_url: string;
                        teams_url: string;
                        trees_url: string;
                        url: string;
                    };
                    rerun_url: string;
                    run_number: number;
                    status: string;
                    updated_at: string;
                    url: string;
                    workflow_url: string;
                }[];
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}" ? {
    get: (owner: string, repo: string, runId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                artifacts_url: string;
                cancel_url: string;
                check_suite_url: string;
                conclusion: string;
                created_at: string;
                event: string;
                head_branch: string;
                head_commit: {
                    author: {
                        email: string;
                        name: string;
                    };
                    committer: {
                        email: string;
                        name: string;
                    };
                    id: string;
                    message: string;
                    timestamp: string;
                    tree_id: string;
                };
                head_repository: {
                    archive_url: string;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    deployments_url: string;
                    description: string;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    hooks_url: string;
                    html_url: string;
                    id: number;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    languages_url: string;
                    merges_url: string;
                    milestones_url: string;
                    name: string;
                    node_id: string;
                    notifications_url: string;
                    owner: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    private: boolean;
                    pulls_url: string;
                    releases_url: string;
                    stargazers_url: string;
                    statuses_url: string;
                    subscribers_url: string;
                    subscription_url: string;
                    tags_url: string;
                    teams_url: string;
                    trees_url: string;
                    url: string;
                };
                head_sha: string;
                html_url: string;
                id: number;
                jobs_url: string;
                logs_url: string;
                node_id: string;
                pull_requests: any[];
                repository: {
                    archive_url: string;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    deployments_url: string;
                    description: string;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    git_url: string;
                    html_url: string;
                    id: number;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    languages_url: string;
                    merges_url: string;
                    milestones_url: string;
                    name: string;
                    node_id: string;
                    notifications_url: string;
                    owner: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    private: boolean;
                    pulls_url: string;
                    releases_url: string;
                    ssh_url: string;
                    stargazers_url: string;
                    statuses_url: string;
                    subscribers_url: string;
                    subscription_url: string;
                    tags_url: string;
                    teams_url: string;
                    trees_url: string;
                    url: string;
                };
                rerun_url: string;
                run_number: number;
                status: string;
                updated_at: string;
                url: string;
                workflow_url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts" ? {
    get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                artifacts: {
                    archive_download_url: string;
                    created_at: string;
                    expired: string;
                    expires_at: string;
                    id: number;
                    name: string;
                    node_id: string;
                    size_in_bytes: number;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel" ? {
    post: (owner: string, repo: string, runId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 202;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs" ? {
    get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                jobs: {
                    check_run_url: string;
                    completed_at: string;
                    conclusion: string;
                    head_sha: string;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    run_id: number;
                    run_url: string;
                    started_at: string;
                    status: string;
                    steps: {
                        completed_at: string;
                        conclusion: string;
                        name: string;
                        number: number;
                        started_at: string;
                        status: string;
                    }[];
                    url: string;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}/logs" ? {
    get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 302;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun" ? {
    post: (owner: string, repo: string, runId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/secrets" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                secrets: {
                    created_at: string;
                    name: string;
                    updated_at: string;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/secrets/public-key" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                key: string;
                key_id: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/secrets/{name}" ? {
    delete: (owner: string, repo: string, name: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, name: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                created_at: string;
                name: string;
                updated_at: string;
            };
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, name: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/workflows" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                total_count: number;
                workflows: {
                    badge_url: string;
                    created_at: string;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    path: string;
                    state: string;
                    updated_at: string;
                    url: string;
                }[];
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/workflows/{workflow_id}" ? {
    get: (owner: string, repo: string, workflowId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                badge_url: string;
                created_at: string;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                path: string;
                state: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs" ? {
    get: (owner: string, repo: string, workflowId: number, actor?: string, branch?: string, event?: string, status?: "completed" | "status" | "conclusion", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                total_count: number;
                workflow_runs: {
                    artifacts_url: string;
                    cancel_url: string;
                    check_suite_url: string;
                    conclusion: string;
                    created_at: string;
                    event: string;
                    head_branch: string;
                    head_commit: {
                        author: {
                            email: string;
                            name: string;
                        };
                        committer: {
                            email: string;
                            name: string;
                        };
                        id: string;
                        message: string;
                        timestamp: string;
                        tree_id: string;
                    };
                    head_repository: {
                        archive_url: string;
                        assignees_url: string;
                        blobs_url: string;
                        branches_url: string;
                        collaborators_url: string;
                        comments_url: string;
                        commits_url: string;
                        compare_url: string;
                        contents_url: string;
                        contributors_url: string;
                        deployments_url: string;
                        description: string;
                        downloads_url: string;
                        events_url: string;
                        fork: boolean;
                        forks_url: string;
                        full_name: string;
                        git_commits_url: string;
                        git_refs_url: string;
                        git_tags_url: string;
                        hooks_url: string;
                        html_url: string;
                        id: number;
                        issue_comment_url: string;
                        issue_events_url: string;
                        issues_url: string;
                        keys_url: string;
                        labels_url: string;
                        languages_url: string;
                        merges_url: string;
                        milestones_url: string;
                        name: string;
                        node_id: string;
                        notifications_url: string;
                        owner: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        private: boolean;
                        pulls_url: string;
                        releases_url: string;
                        stargazers_url: string;
                        statuses_url: string;
                        subscribers_url: string;
                        subscription_url: string;
                        tags_url: string;
                        teams_url: string;
                        trees_url: string;
                        url: string;
                    };
                    head_sha: string;
                    html_url: string;
                    id: number;
                    jobs_url: string;
                    logs_url: string;
                    node_id: string;
                    pull_requests: any[];
                    repository: {
                        archive_url: string;
                        assignees_url: string;
                        blobs_url: string;
                        branches_url: string;
                        collaborators_url: string;
                        comments_url: string;
                        commits_url: string;
                        compare_url: string;
                        contents_url: string;
                        contributors_url: string;
                        deployments_url: string;
                        description: string;
                        downloads_url: string;
                        events_url: string;
                        fork: boolean;
                        forks_url: string;
                        full_name: string;
                        git_commits_url: string;
                        git_refs_url: string;
                        git_tags_url: string;
                        git_url: string;
                        html_url: string;
                        id: number;
                        issue_comment_url: string;
                        issue_events_url: string;
                        issues_url: string;
                        keys_url: string;
                        labels_url: string;
                        languages_url: string;
                        merges_url: string;
                        milestones_url: string;
                        name: string;
                        node_id: string;
                        notifications_url: string;
                        owner: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        private: boolean;
                        pulls_url: string;
                        releases_url: string;
                        ssh_url: string;
                        stargazers_url: string;
                        statuses_url: string;
                        subscribers_url: string;
                        subscription_url: string;
                        tags_url: string;
                        teams_url: string;
                        trees_url: string;
                        url: string;
                    };
                    rerun_url: string;
                    run_number: number;
                    status: string;
                    updated_at: string;
                    url: string;
                    workflow_url: string;
                }[];
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/assignees" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs": return { get: (owner: string, repo: string, jobId: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 302;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, jobId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runners": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    id: number;
                    name: string;
                    os: string;
                    status: string;
                }[][];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runners/downloads": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    architecture: string;
                    download_url: string;
                    filename: string;
                    os: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runners/registration-token": return { post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
                    expires_at: string;
                    token: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runners/remove-token": return { post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
                    expires_at: string;
                    token: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runners/{runner_id}": return { delete: (owner: string, repo: string, runnerId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, runnerId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, runnerId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    id: number;
                    name: string;
                    os: string;
                    status: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, runnerId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs": return { get: (owner: string, repo: string, actor?: string, branch?: string, event?: string, status?: "completed" | "status" | "conclusion", perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    total_count: number;
                    workflow_runs: {
                        artifacts_url: string;
                        cancel_url: string;
                        check_suite_url: string;
                        conclusion: string;
                        created_at: string;
                        event: string;
                        head_branch: string;
                        head_commit: {
                            author: {
                                email: string;
                                name: string;
                            };
                            committer: {
                                email: string;
                                name: string;
                            };
                            id: string;
                            message: string;
                            timestamp: string;
                            tree_id: string;
                        };
                        head_repository: {
                            archive_url: string;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            deployments_url: string;
                            description: string;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            hooks_url: string;
                            html_url: string;
                            id: number;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            languages_url: string;
                            merges_url: string;
                            milestones_url: string;
                            name: string;
                            node_id: string;
                            notifications_url: string;
                            owner: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            private: boolean;
                            pulls_url: string;
                            releases_url: string;
                            stargazers_url: string;
                            statuses_url: string;
                            subscribers_url: string;
                            subscription_url: string;
                            tags_url: string;
                            teams_url: string;
                            trees_url: string;
                            url: string;
                        };
                        head_sha: string;
                        html_url: string;
                        id: number;
                        jobs_url: string;
                        logs_url: string;
                        node_id: string;
                        pull_requests: any[];
                        repository: {
                            archive_url: string;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            deployments_url: string;
                            description: string;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            git_url: string;
                            html_url: string;
                            id: number;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            languages_url: string;
                            merges_url: string;
                            milestones_url: string;
                            name: string;
                            node_id: string;
                            notifications_url: string;
                            owner: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            private: boolean;
                            pulls_url: string;
                            releases_url: string;
                            ssh_url: string;
                            stargazers_url: string;
                            statuses_url: string;
                            subscribers_url: string;
                            subscription_url: string;
                            tags_url: string;
                            teams_url: string;
                            trees_url: string;
                            url: string;
                        };
                        rerun_url: string;
                        run_number: number;
                        status: string;
                        updated_at: string;
                        url: string;
                        workflow_url: string;
                    }[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { actor, branch, event, status, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}": return { get: (owner: string, repo: string, runId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    artifacts_url: string;
                    cancel_url: string;
                    check_suite_url: string;
                    conclusion: string;
                    created_at: string;
                    event: string;
                    head_branch: string;
                    head_commit: {
                        author: {
                            email: string;
                            name: string;
                        };
                        committer: {
                            email: string;
                            name: string;
                        };
                        id: string;
                        message: string;
                        timestamp: string;
                        tree_id: string;
                    };
                    head_repository: {
                        archive_url: string;
                        assignees_url: string;
                        blobs_url: string;
                        branches_url: string;
                        collaborators_url: string;
                        comments_url: string;
                        commits_url: string;
                        compare_url: string;
                        contents_url: string;
                        contributors_url: string;
                        deployments_url: string;
                        description: string;
                        downloads_url: string;
                        events_url: string;
                        fork: boolean;
                        forks_url: string;
                        full_name: string;
                        git_commits_url: string;
                        git_refs_url: string;
                        git_tags_url: string;
                        hooks_url: string;
                        html_url: string;
                        id: number;
                        issue_comment_url: string;
                        issue_events_url: string;
                        issues_url: string;
                        keys_url: string;
                        labels_url: string;
                        languages_url: string;
                        merges_url: string;
                        milestones_url: string;
                        name: string;
                        node_id: string;
                        notifications_url: string;
                        owner: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        private: boolean;
                        pulls_url: string;
                        releases_url: string;
                        stargazers_url: string;
                        statuses_url: string;
                        subscribers_url: string;
                        subscription_url: string;
                        tags_url: string;
                        teams_url: string;
                        trees_url: string;
                        url: string;
                    };
                    head_sha: string;
                    html_url: string;
                    id: number;
                    jobs_url: string;
                    logs_url: string;
                    node_id: string;
                    pull_requests: any[];
                    repository: {
                        archive_url: string;
                        assignees_url: string;
                        blobs_url: string;
                        branches_url: string;
                        collaborators_url: string;
                        comments_url: string;
                        commits_url: string;
                        compare_url: string;
                        contents_url: string;
                        contributors_url: string;
                        deployments_url: string;
                        description: string;
                        downloads_url: string;
                        events_url: string;
                        fork: boolean;
                        forks_url: string;
                        full_name: string;
                        git_commits_url: string;
                        git_refs_url: string;
                        git_tags_url: string;
                        git_url: string;
                        html_url: string;
                        id: number;
                        issue_comment_url: string;
                        issue_events_url: string;
                        issues_url: string;
                        keys_url: string;
                        labels_url: string;
                        languages_url: string;
                        merges_url: string;
                        milestones_url: string;
                        name: string;
                        node_id: string;
                        notifications_url: string;
                        owner: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        private: boolean;
                        pulls_url: string;
                        releases_url: string;
                        ssh_url: string;
                        stargazers_url: string;
                        statuses_url: string;
                        subscribers_url: string;
                        subscription_url: string;
                        tags_url: string;
                        teams_url: string;
                        trees_url: string;
                        url: string;
                    };
                    rerun_url: string;
                    run_number: number;
                    status: string;
                    updated_at: string;
                    url: string;
                    workflow_url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, runId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts": return { get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    artifacts: {
                        archive_download_url: string;
                        created_at: string;
                        expired: string;
                        expires_at: string;
                        id: number;
                        name: string;
                        node_id: string;
                        size_in_bytes: number;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, runId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel": return { post: (owner: string, repo: string, runId: number, accept?: string): Promise<{
                status: 202;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, runId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs": return { get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    jobs: {
                        check_run_url: string;
                        completed_at: string;
                        conclusion: string;
                        head_sha: string;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        run_id: number;
                        run_url: string;
                        started_at: string;
                        status: string;
                        steps: {
                            completed_at: string;
                            conclusion: string;
                            name: string;
                            number: number;
                            started_at: string;
                            status: string;
                        }[];
                        url: string;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, runId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}/logs": return { get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 302;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, runId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun": return { post: (owner: string, repo: string, runId: number, accept?: string): Promise<{
                status: 201;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, runId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/secrets": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    secrets: {
                        created_at: string;
                        name: string;
                        updated_at: string;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/secrets/public-key": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    key: string;
                    key_id: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/secrets/{name}": return { delete: (owner: string, repo: string, name: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, name }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, name: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    name: string;
                    updated_at: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, name }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, name: string, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, name }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/workflows": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    total_count: number;
                    workflows: {
                        badge_url: string;
                        created_at: string;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        path: string;
                        state: string;
                        updated_at: string;
                        url: string;
                    }[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/workflows/{workflow_id}": return { get: (owner: string, repo: string, workflowId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    badge_url: string;
                    created_at: string;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    path: string;
                    state: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, workflowId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs": return { get: (owner: string, repo: string, workflowId: number, actor?: string, branch?: string, event?: string, status?: "completed" | "status" | "conclusion", perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    total_count: number;
                    workflow_runs: {
                        artifacts_url: string;
                        cancel_url: string;
                        check_suite_url: string;
                        conclusion: string;
                        created_at: string;
                        event: string;
                        head_branch: string;
                        head_commit: {
                            author: {
                                email: string;
                                name: string;
                            };
                            committer: {
                                email: string;
                                name: string;
                            };
                            id: string;
                            message: string;
                            timestamp: string;
                            tree_id: string;
                        };
                        head_repository: {
                            archive_url: string;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            deployments_url: string;
                            description: string;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            hooks_url: string;
                            html_url: string;
                            id: number;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            languages_url: string;
                            merges_url: string;
                            milestones_url: string;
                            name: string;
                            node_id: string;
                            notifications_url: string;
                            owner: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            private: boolean;
                            pulls_url: string;
                            releases_url: string;
                            stargazers_url: string;
                            statuses_url: string;
                            subscribers_url: string;
                            subscription_url: string;
                            tags_url: string;
                            teams_url: string;
                            trees_url: string;
                            url: string;
                        };
                        head_sha: string;
                        html_url: string;
                        id: number;
                        jobs_url: string;
                        logs_url: string;
                        node_id: string;
                        pull_requests: any[];
                        repository: {
                            archive_url: string;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            deployments_url: string;
                            description: string;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            git_url: string;
                            html_url: string;
                            id: number;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            languages_url: string;
                            merges_url: string;
                            milestones_url: string;
                            name: string;
                            node_id: string;
                            notifications_url: string;
                            owner: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            private: boolean;
                            pulls_url: string;
                            releases_url: string;
                            ssh_url: string;
                            stargazers_url: string;
                            statuses_url: string;
                            subscribers_url: string;
                            subscription_url: string;
                            tags_url: string;
                            teams_url: string;
                            trees_url: string;
                            url: string;
                        };
                        rerun_url: string;
                        run_number: number;
                        status: string;
                        updated_at: string;
                        url: string;
                        workflow_url: string;
                    }[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, workflowId }), { actor, branch, event, status, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/assignees": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs": return { get: (owner: string, repo: string, jobId: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 302;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, jobId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runners": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        id: number;
                        name: string;
                        os: string;
                        status: string;
                    }[][];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runners/downloads": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        architecture: string;
                        download_url: string;
                        filename: string;
                        os: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runners/registration-token": return { post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        expires_at: string;
                        token: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runners/remove-token": return { post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        expires_at: string;
                        token: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runners/{runner_id}": return { delete: (owner: string, repo: string, runnerId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, runnerId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, runnerId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        id: number;
                        name: string;
                        os: string;
                        status: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, runnerId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs": return { get: (owner: string, repo: string, actor?: string, branch?: string, event?: string, status?: "completed" | "status" | "conclusion", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        total_count: number;
                        workflow_runs: {
                            artifacts_url: string;
                            cancel_url: string;
                            check_suite_url: string;
                            conclusion: string;
                            created_at: string;
                            event: string;
                            head_branch: string;
                            head_commit: {
                                author: {
                                    email: string;
                                    name: string;
                                };
                                committer: {
                                    email: string;
                                    name: string;
                                };
                                id: string;
                                message: string;
                                timestamp: string;
                                tree_id: string;
                            };
                            head_repository: {
                                archive_url: string;
                                assignees_url: string;
                                blobs_url: string;
                                branches_url: string;
                                collaborators_url: string;
                                comments_url: string;
                                commits_url: string;
                                compare_url: string;
                                contents_url: string;
                                contributors_url: string;
                                deployments_url: string;
                                description: string;
                                downloads_url: string;
                                events_url: string;
                                fork: boolean;
                                forks_url: string;
                                full_name: string;
                                git_commits_url: string;
                                git_refs_url: string;
                                git_tags_url: string;
                                hooks_url: string;
                                html_url: string;
                                id: number;
                                issue_comment_url: string;
                                issue_events_url: string;
                                issues_url: string;
                                keys_url: string;
                                labels_url: string;
                                languages_url: string;
                                merges_url: string;
                                milestones_url: string;
                                name: string;
                                node_id: string;
                                notifications_url: string;
                                owner: {
                                    avatar_url: string;
                                    events_url: string;
                                    followers_url: string;
                                    following_url: string;
                                    gists_url: string;
                                    gravatar_id: string;
                                    html_url: string;
                                    id: number;
                                    login: string;
                                    node_id: string;
                                    organizations_url: string;
                                    received_events_url: string;
                                    repos_url: string;
                                    site_admin: boolean;
                                    starred_url: string;
                                    subscriptions_url: string;
                                    type: string;
                                    url: string;
                                };
                                private: boolean;
                                pulls_url: string;
                                releases_url: string;
                                stargazers_url: string;
                                statuses_url: string;
                                subscribers_url: string;
                                subscription_url: string;
                                tags_url: string;
                                teams_url: string;
                                trees_url: string;
                                url: string;
                            };
                            head_sha: string;
                            html_url: string;
                            id: number;
                            jobs_url: string;
                            logs_url: string;
                            node_id: string;
                            pull_requests: any[];
                            repository: {
                                archive_url: string;
                                assignees_url: string;
                                blobs_url: string;
                                branches_url: string;
                                collaborators_url: string;
                                comments_url: string;
                                commits_url: string;
                                compare_url: string;
                                contents_url: string;
                                contributors_url: string;
                                deployments_url: string;
                                description: string;
                                downloads_url: string;
                                events_url: string;
                                fork: boolean;
                                forks_url: string;
                                full_name: string;
                                git_commits_url: string;
                                git_refs_url: string;
                                git_tags_url: string;
                                git_url: string;
                                html_url: string;
                                id: number;
                                issue_comment_url: string;
                                issue_events_url: string;
                                issues_url: string;
                                keys_url: string;
                                labels_url: string;
                                languages_url: string;
                                merges_url: string;
                                milestones_url: string;
                                name: string;
                                node_id: string;
                                notifications_url: string;
                                owner: {
                                    avatar_url: string;
                                    events_url: string;
                                    followers_url: string;
                                    following_url: string;
                                    gists_url: string;
                                    gravatar_id: string;
                                    html_url: string;
                                    id: number;
                                    login: string;
                                    node_id: string;
                                    organizations_url: string;
                                    received_events_url: string;
                                    repos_url: string;
                                    site_admin: boolean;
                                    starred_url: string;
                                    subscriptions_url: string;
                                    type: string;
                                    url: string;
                                };
                                private: boolean;
                                pulls_url: string;
                                releases_url: string;
                                ssh_url: string;
                                stargazers_url: string;
                                statuses_url: string;
                                subscribers_url: string;
                                subscription_url: string;
                                tags_url: string;
                                teams_url: string;
                                trees_url: string;
                                url: string;
                            };
                            rerun_url: string;
                            run_number: number;
                            status: string;
                            updated_at: string;
                            url: string;
                            workflow_url: string;
                        }[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { actor, branch, event, status, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}": return { get: (owner: string, repo: string, runId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        artifacts_url: string;
                        cancel_url: string;
                        check_suite_url: string;
                        conclusion: string;
                        created_at: string;
                        event: string;
                        head_branch: string;
                        head_commit: {
                            author: {
                                email: string;
                                name: string;
                            };
                            committer: {
                                email: string;
                                name: string;
                            };
                            id: string;
                            message: string;
                            timestamp: string;
                            tree_id: string;
                        };
                        head_repository: {
                            archive_url: string;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            deployments_url: string;
                            description: string;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            hooks_url: string;
                            html_url: string;
                            id: number;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            languages_url: string;
                            merges_url: string;
                            milestones_url: string;
                            name: string;
                            node_id: string;
                            notifications_url: string;
                            owner: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            private: boolean;
                            pulls_url: string;
                            releases_url: string;
                            stargazers_url: string;
                            statuses_url: string;
                            subscribers_url: string;
                            subscription_url: string;
                            tags_url: string;
                            teams_url: string;
                            trees_url: string;
                            url: string;
                        };
                        head_sha: string;
                        html_url: string;
                        id: number;
                        jobs_url: string;
                        logs_url: string;
                        node_id: string;
                        pull_requests: any[];
                        repository: {
                            archive_url: string;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            deployments_url: string;
                            description: string;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            git_url: string;
                            html_url: string;
                            id: number;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            languages_url: string;
                            merges_url: string;
                            milestones_url: string;
                            name: string;
                            node_id: string;
                            notifications_url: string;
                            owner: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            private: boolean;
                            pulls_url: string;
                            releases_url: string;
                            ssh_url: string;
                            stargazers_url: string;
                            statuses_url: string;
                            subscribers_url: string;
                            subscription_url: string;
                            tags_url: string;
                            teams_url: string;
                            trees_url: string;
                            url: string;
                        };
                        rerun_url: string;
                        run_number: number;
                        status: string;
                        updated_at: string;
                        url: string;
                        workflow_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, runId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts": return { get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        artifacts: {
                            archive_download_url: string;
                            created_at: string;
                            expired: string;
                            expires_at: string;
                            id: number;
                            name: string;
                            node_id: string;
                            size_in_bytes: number;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, runId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel": return { post: (owner: string, repo: string, runId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 202;
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, runId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs": return { get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        jobs: {
                            check_run_url: string;
                            completed_at: string;
                            conclusion: string;
                            head_sha: string;
                            html_url: string;
                            id: number;
                            name: string;
                            node_id: string;
                            run_id: number;
                            run_url: string;
                            started_at: string;
                            status: string;
                            steps: {
                                completed_at: string;
                                conclusion: string;
                                name: string;
                                number: number;
                                started_at: string;
                                status: string;
                            }[];
                            url: string;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, runId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}/logs": return { get: (owner: string, repo: string, runId: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 302;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, runId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun": return { post: (owner: string, repo: string, runId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, runId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/secrets": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        secrets: {
                            created_at: string;
                            name: string;
                            updated_at: string;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/secrets/public-key": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        key: string;
                        key_id: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/secrets/{name}": return { delete: (owner: string, repo: string, name: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, name }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, name: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        created_at: string;
                        name: string;
                        updated_at: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, name }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, name: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, name }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/workflows": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        total_count: number;
                        workflows: {
                            badge_url: string;
                            created_at: string;
                            html_url: string;
                            id: number;
                            name: string;
                            node_id: string;
                            path: string;
                            state: string;
                            updated_at: string;
                            url: string;
                        }[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/workflows/{workflow_id}": return { get: (owner: string, repo: string, workflowId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        badge_url: string;
                        created_at: string;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        path: string;
                        state: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, workflowId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs": return { get: (owner: string, repo: string, workflowId: number, actor?: string, branch?: string, event?: string, status?: "completed" | "status" | "conclusion", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        total_count: number;
                        workflow_runs: {
                            artifacts_url: string;
                            cancel_url: string;
                            check_suite_url: string;
                            conclusion: string;
                            created_at: string;
                            event: string;
                            head_branch: string;
                            head_commit: {
                                author: {
                                    email: string;
                                    name: string;
                                };
                                committer: {
                                    email: string;
                                    name: string;
                                };
                                id: string;
                                message: string;
                                timestamp: string;
                                tree_id: string;
                            };
                            head_repository: {
                                archive_url: string;
                                assignees_url: string;
                                blobs_url: string;
                                branches_url: string;
                                collaborators_url: string;
                                comments_url: string;
                                commits_url: string;
                                compare_url: string;
                                contents_url: string;
                                contributors_url: string;
                                deployments_url: string;
                                description: string;
                                downloads_url: string;
                                events_url: string;
                                fork: boolean;
                                forks_url: string;
                                full_name: string;
                                git_commits_url: string;
                                git_refs_url: string;
                                git_tags_url: string;
                                hooks_url: string;
                                html_url: string;
                                id: number;
                                issue_comment_url: string;
                                issue_events_url: string;
                                issues_url: string;
                                keys_url: string;
                                labels_url: string;
                                languages_url: string;
                                merges_url: string;
                                milestones_url: string;
                                name: string;
                                node_id: string;
                                notifications_url: string;
                                owner: {
                                    avatar_url: string;
                                    events_url: string;
                                    followers_url: string;
                                    following_url: string;
                                    gists_url: string;
                                    gravatar_id: string;
                                    html_url: string;
                                    id: number;
                                    login: string;
                                    node_id: string;
                                    organizations_url: string;
                                    received_events_url: string;
                                    repos_url: string;
                                    site_admin: boolean;
                                    starred_url: string;
                                    subscriptions_url: string;
                                    type: string;
                                    url: string;
                                };
                                private: boolean;
                                pulls_url: string;
                                releases_url: string;
                                stargazers_url: string;
                                statuses_url: string;
                                subscribers_url: string;
                                subscription_url: string;
                                tags_url: string;
                                teams_url: string;
                                trees_url: string;
                                url: string;
                            };
                            head_sha: string;
                            html_url: string;
                            id: number;
                            jobs_url: string;
                            logs_url: string;
                            node_id: string;
                            pull_requests: any[];
                            repository: {
                                archive_url: string;
                                assignees_url: string;
                                blobs_url: string;
                                branches_url: string;
                                collaborators_url: string;
                                comments_url: string;
                                commits_url: string;
                                compare_url: string;
                                contents_url: string;
                                contributors_url: string;
                                deployments_url: string;
                                description: string;
                                downloads_url: string;
                                events_url: string;
                                fork: boolean;
                                forks_url: string;
                                full_name: string;
                                git_commits_url: string;
                                git_refs_url: string;
                                git_tags_url: string;
                                git_url: string;
                                html_url: string;
                                id: number;
                                issue_comment_url: string;
                                issue_events_url: string;
                                issues_url: string;
                                keys_url: string;
                                labels_url: string;
                                languages_url: string;
                                merges_url: string;
                                milestones_url: string;
                                name: string;
                                node_id: string;
                                notifications_url: string;
                                owner: {
                                    avatar_url: string;
                                    events_url: string;
                                    followers_url: string;
                                    following_url: string;
                                    gists_url: string;
                                    gravatar_id: string;
                                    html_url: string;
                                    id: number;
                                    login: string;
                                    node_id: string;
                                    organizations_url: string;
                                    received_events_url: string;
                                    repos_url: string;
                                    site_admin: boolean;
                                    starred_url: string;
                                    subscriptions_url: string;
                                    type: string;
                                    url: string;
                                };
                                private: boolean;
                                pulls_url: string;
                                releases_url: string;
                                ssh_url: string;
                                stargazers_url: string;
                                statuses_url: string;
                                subscribers_url: string;
                                subscription_url: string;
                                tags_url: string;
                                teams_url: string;
                                trees_url: string;
                                url: string;
                            };
                            rerun_url: string;
                            run_number: number;
                            status: string;
                            updated_at: string;
                            url: string;
                            workflow_url: string;
                        }[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, workflowId }), { actor, branch, event, status, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/assignees": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
