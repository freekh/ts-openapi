import * as tsgen from "./engine";
export const allPaths = ["/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest", "/repos/{owner}/{repo}/collaborators", "/repos/{owner}/{repo}/collaborators/{username}", "/repos/{owner}/{repo}/collaborators/{username}/permission", "/repos/{owner}/{repo}/comments", "/repos/{owner}/{repo}/comments/{comment_id}", "/repos/{owner}/{repo}/comments/{comment_id}/reactions", "/repos/{owner}/{repo}/commits", "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", "/repos/{owner}/{repo}/commits/{commit_sha}/comments", "/repos/{owner}/{repo}/commits/{commit_sha}/pulls", "/repos/{owner}/{repo}/commits/{ref}", "/repos/{owner}/{repo}/commits/{ref}/check-runs", "/repos/{owner}/{repo}/commits/{ref}/check-suites", "/repos/{owner}/{repo}/commits/{ref}/status", "/repos/{owner}/{repo}/commits/{ref}/statuses", "/repos/{owner}/{repo}/community/code_of_conduct", "/repos/{owner}/{repo}/community/profile", "/repos/{owner}/{repo}/compare/{base}...{head}"];
export type Paths = "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs" | "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest" | "/repos/{owner}/{repo}/collaborators" | "/repos/{owner}/{repo}/collaborators/{username}" | "/repos/{owner}/{repo}/collaborators/{username}/permission" | "/repos/{owner}/{repo}/comments" | "/repos/{owner}/{repo}/comments/{comment_id}" | "/repos/{owner}/{repo}/comments/{comment_id}/reactions" | "/repos/{owner}/{repo}/commits" | "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head" | "/repos/{owner}/{repo}/commits/{commit_sha}/comments" | "/repos/{owner}/{repo}/commits/{commit_sha}/pulls" | "/repos/{owner}/{repo}/commits/{ref}" | "/repos/{owner}/{repo}/commits/{ref}/check-runs" | "/repos/{owner}/{repo}/commits/{ref}/check-suites" | "/repos/{owner}/{repo}/commits/{ref}/status" | "/repos/{owner}/{repo}/commits/{ref}/statuses" | "/repos/{owner}/{repo}/community/code_of_conduct" | "/repos/{owner}/{repo}/community/profile" | "/repos/{owner}/{repo}/compare/{base}...{head}";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs" ? {
    get: (owner: string, repo: string, checkSuiteId: number, accept: string, checkName?: string, status?: "queued" | "in_progress" | "completed", filter?: "latest" | "all", perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            check_runs: {
                app: {
                    created_at: string;
                    description: string;
                    events: string[];
                    external_url: string;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    owner: {
                        avatar_url: string;
                        description: string;
                        events_url: string;
                        hooks_url: string;
                        id: number;
                        issues_url: string;
                        login: string;
                        members_url: string;
                        node_id: string;
                        public_members_url: string;
                        repos_url: string;
                        url: string;
                    };
                    permissions: {
                        contents: string;
                        issues: string;
                        metadata: string;
                        single_file: string;
                    };
                    slug: string;
                    updated_at: string;
                };
                check_suite: {
                    id: number;
                };
                completed_at: string;
                conclusion: string;
                details_url: string;
                external_id: string;
                head_sha: string;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                output: {
                    annotations_count: number;
                    annotations_url: string;
                    summary: string;
                    text: string;
                    title: string;
                };
                pull_requests: {
                    base: {
                        ref: string;
                        repo: {
                            id: number;
                            name: string;
                            url: string;
                        };
                        sha: string;
                    };
                    head: {
                        ref: string;
                        repo: {
                            id: number;
                            name: string;
                            url: string;
                        };
                        sha: string;
                    };
                    id: number;
                    number: number;
                    url: string;
                }[];
                started_at: string;
                status: string;
                url: string;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest" ? {
    post: (owner: string, repo: string, checkSuiteId: number, accept: string) => Promise<{
        status: 201;
    }>;
} : P extends "/repos/{owner}/{repo}/collaborators" ? {
    get: (owner: string, repo: string, affiliation?: "outside" | "direct" | "all", perPage?: number, page?: number, accept?: string) => Promise<{
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
            permissions: {
                admin: boolean;
                pull: boolean;
                push: boolean;
            };
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/collaborators/{username}" ? {
    delete: (owner: string, repo: string, username: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, username: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 404;
    }>;
    put: (owner: string, repo: string, username: string, accept?: string) => Promise<{
        status: 201;
        data: {
            created_at: string;
            html_url: string;
            id: number;
            invitee: {
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
            inviter: {
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
            permissions: string;
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
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/collaborators/{username}/permission" ? {
    get: (owner: string, repo: string, username: string, accept?: string) => Promise<{
        status: 200;
        data: {
            permission: string;
            user: {
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
        };
    }>;
} : P extends "/repos/{owner}/{repo}/comments" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            commit_id: string;
            created_at: string;
            html_url: string;
            id: number;
            line: number;
            node_id: string;
            path: string;
            position: number;
            updated_at: string;
            url: string;
            user: {
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
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/comments/{comment_id}" ? {
    delete: (owner: string, repo: string, commentId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, commentId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            commit_id: string;
            created_at: string;
            html_url: string;
            id: number;
            line: number;
            node_id: string;
            path: string;
            position: number;
            updated_at: string;
            url: string;
            user: {
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
        };
    }>;
    patch: (owner: string, repo: string, commentId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            commit_id: string;
            created_at: string;
            html_url: string;
            id: number;
            line: number;
            node_id: string;
            path: string;
            position: number;
            updated_at: string;
            url: string;
            user: {
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
        };
    }>;
} : P extends "/repos/{owner}/{repo}/comments/{comment_id}/reactions" ? {
    get: (owner: string, repo: string, commentId: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            content: string;
            created_at: string;
            id: number;
            node_id: string;
            user: {
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
        }[];
    }>;
    post: (owner: string, repo: string, commentId: number, accept: string) => Promise<{
        status: 201;
        data: {
            content: string;
            created_at: string;
            id: number;
            node_id: string;
            user: {
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
        };
    }>;
} : P extends "/repos/{owner}/{repo}/commits" ? {
    get: (owner: string, repo: string, sha?: string, path?: string, author?: string, since?: string, until?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            author: {
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
            comments_url: string;
            commit: {
                author: {
                    date: string;
                    email: string;
                    name: string;
                };
                comment_count: number;
                committer: {
                    date: string;
                    email: string;
                    name: string;
                };
                message: string;
                tree: {
                    sha: string;
                    url: string;
                };
                url: string;
                verification: {
                    payload: string;
                    reason: string;
                    signature: string;
                    verified: boolean;
                };
            };
            committer: {
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
            html_url: string;
            node_id: string;
            parents: {
                sha: string;
                url: string;
            }[];
            sha: string;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head" ? {
    get: (owner: string, repo: string, commitSha: string, accept: string) => Promise<{
        status: 200;
        data: {
            commit: {
                sha: string;
                url: string;
            };
            name: string;
            protected: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{commit_sha}/comments" ? {
    get: (owner: string, repo: string, commitSha: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            commit_id: string;
            created_at: string;
            html_url: string;
            id: number;
            line: number;
            node_id: string;
            path: string;
            position: number;
            updated_at: string;
            url: string;
            user: {
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
        }[];
    }>;
    post: (owner: string, repo: string, commitSha: string, accept?: string) => Promise<{
        status: 201;
        data: {
            body: string;
            commit_id: string;
            created_at: string;
            html_url: string;
            id: number;
            line: number;
            node_id: string;
            path: string;
            position: number;
            updated_at: string;
            url: string;
            user: {
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
        };
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{commit_sha}/pulls" ? {
    get: (owner: string, repo: string, commitSha: string, accept: string, perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            _links: {
                comments: {
                    href: string;
                };
                commits: {
                    href: string;
                };
                html: {
                    href: string;
                };
                issue: {
                    href: string;
                };
                review_comment: {
                    href: string;
                };
                review_comments: {
                    href: string;
                };
                self: {
                    href: string;
                };
                statuses: {
                    href: string;
                };
            };
            active_lock_reason: string;
            assignee: {
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
            assignees: {
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
            author_association: string;
            base: {
                label: string;
                ref: string;
                repo: {
                    allow_merge_commit: boolean;
                    allow_rebase_merge: boolean;
                    allow_squash_merge: boolean;
                    archive_url: string;
                    archived: boolean;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    clone_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    created_at: string;
                    default_branch: string;
                    deployments_url: string;
                    description: string;
                    disabled: boolean;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks_count: number;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    git_url: string;
                    has_downloads: boolean;
                    has_issues: boolean;
                    has_pages: boolean;
                    has_projects: boolean;
                    has_wiki: boolean;
                    homepage: string;
                    hooks_url: string;
                    html_url: string;
                    id: number;
                    is_template: boolean;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    language: string;
                    languages_url: string;
                    merges_url: string;
                    milestones_url: string;
                    mirror_url: string;
                    name: string;
                    network_count: number;
                    node_id: string;
                    notifications_url: string;
                    open_issues_count: number;
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
                    permissions: {
                        admin: boolean;
                        pull: boolean;
                        push: boolean;
                    };
                    private: boolean;
                    pulls_url: string;
                    pushed_at: string;
                    releases_url: string;
                    size: number;
                    ssh_url: string;
                    stargazers_count: number;
                    stargazers_url: string;
                    statuses_url: string;
                    subscribers_count: number;
                    subscribers_url: string;
                    subscription_url: string;
                    svn_url: string;
                    tags_url: string;
                    teams_url: string;
                    temp_clone_token: string;
                    template_repository: string;
                    topics: string[];
                    trees_url: string;
                    updated_at: string;
                    url: string;
                    visibility: string;
                    watchers_count: number;
                };
                sha: string;
                user: {
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
            };
            body: string;
            closed_at: string;
            comments_url: string;
            commits_url: string;
            created_at: string;
            diff_url: string;
            draft: boolean;
            head: {
                label: string;
                ref: string;
                repo: {
                    allow_merge_commit: boolean;
                    allow_rebase_merge: boolean;
                    allow_squash_merge: boolean;
                    archive_url: string;
                    archived: boolean;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    clone_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    created_at: string;
                    default_branch: string;
                    deployments_url: string;
                    description: string;
                    disabled: boolean;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks_count: number;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    git_url: string;
                    has_downloads: boolean;
                    has_issues: boolean;
                    has_pages: boolean;
                    has_projects: boolean;
                    has_wiki: boolean;
                    homepage: string;
                    hooks_url: string;
                    html_url: string;
                    id: number;
                    is_template: boolean;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    language: string;
                    languages_url: string;
                    merges_url: string;
                    milestones_url: string;
                    mirror_url: string;
                    name: string;
                    network_count: number;
                    node_id: string;
                    notifications_url: string;
                    open_issues_count: number;
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
                    permissions: {
                        admin: boolean;
                        pull: boolean;
                        push: boolean;
                    };
                    private: boolean;
                    pulls_url: string;
                    pushed_at: string;
                    releases_url: string;
                    size: number;
                    ssh_url: string;
                    stargazers_count: number;
                    stargazers_url: string;
                    statuses_url: string;
                    subscribers_count: number;
                    subscribers_url: string;
                    subscription_url: string;
                    svn_url: string;
                    tags_url: string;
                    teams_url: string;
                    temp_clone_token: string;
                    template_repository: string;
                    topics: string[];
                    trees_url: string;
                    updated_at: string;
                    url: string;
                    visibility: string;
                    watchers_count: number;
                };
                sha: string;
                user: {
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
            };
            html_url: string;
            id: number;
            issue_url: string;
            labels: {
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                url: string;
            }[];
            locked: boolean;
            merge_commit_sha: string;
            merged_at: string;
            milestone: {
                closed_at: string;
                closed_issues: number;
                created_at: string;
                creator: {
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
                description: string;
                due_on: string;
                html_url: string;
                id: number;
                labels_url: string;
                node_id: string;
                number: number;
                open_issues: number;
                state: string;
                title: string;
                updated_at: string;
                url: string;
            };
            node_id: string;
            number: number;
            patch_url: string;
            requested_reviewers: {
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
            requested_teams: {
                description: string;
                html_url: string;
                id: number;
                members_url: string;
                name: string;
                node_id: string;
                parent: string;
                permission: string;
                privacy: string;
                repositories_url: string;
                slug: string;
                url: string;
            }[];
            review_comment_url: string;
            review_comments_url: string;
            state: string;
            statuses_url: string;
            title: string;
            updated_at: string;
            url: string;
            user: {
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
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{ref}" ? {
    get: (owner: string, repo: string, ref: string, accept?: string) => Promise<{
        status: 200;
        data: {
            author: {
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
            comments_url: string;
            commit: {
                author: {
                    date: string;
                    email: string;
                    name: string;
                };
                comment_count: number;
                committer: {
                    date: string;
                    email: string;
                    name: string;
                };
                message: string;
                tree: {
                    sha: string;
                    url: string;
                };
                url: string;
                verification: {
                    payload: string;
                    reason: string;
                    signature: string;
                    verified: boolean;
                };
            };
            committer: {
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
            files: {
                additions: number;
                blob_url: string;
                changes: number;
                deletions: number;
                filename: string;
                patch: string;
                raw_url: string;
                status: string;
            }[];
            html_url: string;
            node_id: string;
            parents: {
                sha: string;
                url: string;
            }[];
            sha: string;
            stats: {
                additions: number;
                deletions: number;
                total: number;
            };
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{ref}/check-runs" ? {
    get: (owner: string, repo: string, ref: string, accept: string, checkName?: string, status?: "queued" | "in_progress" | "completed", filter?: "latest" | "all", perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            check_runs: {
                app: {
                    created_at: string;
                    description: string;
                    events: string[];
                    external_url: string;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    owner: {
                        avatar_url: string;
                        description: string;
                        events_url: string;
                        hooks_url: string;
                        id: number;
                        issues_url: string;
                        login: string;
                        members_url: string;
                        node_id: string;
                        public_members_url: string;
                        repos_url: string;
                        url: string;
                    };
                    permissions: {
                        contents: string;
                        issues: string;
                        metadata: string;
                        single_file: string;
                    };
                    slug: string;
                    updated_at: string;
                };
                check_suite: {
                    id: number;
                };
                completed_at: string;
                conclusion: string;
                details_url: string;
                external_id: string;
                head_sha: string;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                output: {
                    annotations_count: number;
                    annotations_url: string;
                    summary: string;
                    text: string;
                    title: string;
                };
                pull_requests: {
                    base: {
                        ref: string;
                        repo: {
                            id: number;
                            name: string;
                            url: string;
                        };
                        sha: string;
                    };
                    head: {
                        ref: string;
                        repo: {
                            id: number;
                            name: string;
                            url: string;
                        };
                        sha: string;
                    };
                    id: number;
                    number: number;
                    url: string;
                }[];
                started_at: string;
                status: string;
                url: string;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{ref}/check-suites" ? {
    get: (owner: string, repo: string, ref: string, accept: string, appId?: number, checkName?: string, perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            check_suites: {
                after: string;
                app: {
                    created_at: string;
                    description: string;
                    events: string[];
                    external_url: string;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    owner: {
                        avatar_url: string;
                        description: string;
                        events_url: string;
                        hooks_url: string;
                        id: number;
                        issues_url: string;
                        login: string;
                        members_url: string;
                        node_id: string;
                        public_members_url: string;
                        repos_url: string;
                        url: string;
                    };
                    permissions: {
                        contents: string;
                        issues: string;
                        metadata: string;
                        single_file: string;
                    };
                    slug: string;
                    updated_at: string;
                };
                before: string;
                conclusion: string;
                head_branch: string;
                head_sha: string;
                id: number;
                node_id: string;
                pull_requests: any[];
                repository: {
                    allow_merge_commit: boolean;
                    allow_rebase_merge: boolean;
                    allow_squash_merge: boolean;
                    archive_url: string;
                    archived: boolean;
                    assignees_url: string;
                    blobs_url: string;
                    branches_url: string;
                    clone_url: string;
                    collaborators_url: string;
                    comments_url: string;
                    commits_url: string;
                    compare_url: string;
                    contents_url: string;
                    contributors_url: string;
                    created_at: string;
                    default_branch: string;
                    deployments_url: string;
                    description: string;
                    disabled: boolean;
                    downloads_url: string;
                    events_url: string;
                    fork: boolean;
                    forks_count: number;
                    forks_url: string;
                    full_name: string;
                    git_commits_url: string;
                    git_refs_url: string;
                    git_tags_url: string;
                    git_url: string;
                    has_downloads: boolean;
                    has_issues: boolean;
                    has_pages: boolean;
                    has_projects: boolean;
                    has_wiki: boolean;
                    homepage: string;
                    hooks_url: string;
                    html_url: string;
                    id: number;
                    is_template: boolean;
                    issue_comment_url: string;
                    issue_events_url: string;
                    issues_url: string;
                    keys_url: string;
                    labels_url: string;
                    language: string;
                    languages_url: string;
                    merges_url: string;
                    milestones_url: string;
                    mirror_url: string;
                    name: string;
                    network_count: number;
                    node_id: string;
                    notifications_url: string;
                    open_issues_count: number;
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
                    permissions: {
                        admin: boolean;
                        pull: boolean;
                        push: boolean;
                    };
                    private: boolean;
                    pulls_url: string;
                    pushed_at: string;
                    releases_url: string;
                    size: number;
                    ssh_url: string;
                    stargazers_count: number;
                    stargazers_url: string;
                    statuses_url: string;
                    subscribers_count: number;
                    subscribers_url: string;
                    subscription_url: string;
                    svn_url: string;
                    tags_url: string;
                    teams_url: string;
                    temp_clone_token: string;
                    template_repository: string;
                    topics: string[];
                    trees_url: string;
                    updated_at: string;
                    url: string;
                    visibility: string;
                    watchers_count: number;
                };
                status: string;
                url: string;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{ref}/status" ? {
    get: (owner: string, repo: string, ref: string, accept?: string) => Promise<{
        status: 200;
        data: {
            commit_url: string;
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
            sha: string;
            state: string;
            statuses: {
                avatar_url: string;
                context: string;
                created_at: string;
                description: string;
                id: number;
                node_id: string;
                state: string;
                target_url: string;
                updated_at: string;
                url: string;
            }[];
            total_count: number;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{ref}/statuses" ? {
    get: (owner: string, repo: string, ref: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            avatar_url: string;
            context: string;
            created_at: string;
            creator: {
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
            description: string;
            id: number;
            node_id: string;
            state: string;
            target_url: string;
            updated_at: string;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/community/code_of_conduct" ? {
    get: (owner: string, repo: string, accept: string) => Promise<{
        status: 200;
        data: {
            body: string;
            key: string;
            name: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/community/profile" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            description: string;
            documentation: boolean;
            files: {
                code_of_conduct: {
                    html_url: string;
                    key: string;
                    name: string;
                    url: string;
                };
                contributing: {
                    html_url: string;
                    url: string;
                };
                issue_template: {
                    html_url: string;
                    url: string;
                };
                license: {
                    html_url: string;
                    key: string;
                    name: string;
                    spdx_id: string;
                    url: string;
                };
                pull_request_template: {
                    html_url: string;
                    url: string;
                };
                readme: {
                    html_url: string;
                    url: string;
                };
            };
            health_percentage: number;
            updated_at: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/compare/{base}...{head}" ? {
    get: (owner: string, repo: string, base: string, head: string, accept?: string) => Promise<{
        status: 200;
        data: {
            ahead_by: number;
            base_commit: {
                author: {
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
                comments_url: string;
                commit: {
                    author: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    comment_count: number;
                    committer: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    message: string;
                    tree: {
                        sha: string;
                        url: string;
                    };
                    url: string;
                    verification: {
                        payload: string;
                        reason: string;
                        signature: string;
                        verified: boolean;
                    };
                };
                committer: {
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
                html_url: string;
                node_id: string;
                parents: {
                    sha: string;
                    url: string;
                }[];
                sha: string;
                url: string;
            };
            behind_by: number;
            commits: {
                author: {
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
                comments_url: string;
                commit: {
                    author: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    comment_count: number;
                    committer: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    message: string;
                    tree: {
                        sha: string;
                        url: string;
                    };
                    url: string;
                    verification: {
                        payload: string;
                        reason: string;
                        signature: string;
                        verified: boolean;
                    };
                };
                committer: {
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
                html_url: string;
                node_id: string;
                parents: {
                    sha: string;
                    url: string;
                }[];
                sha: string;
                url: string;
            }[];
            diff_url: string;
            files: {
                additions: number;
                blob_url: string;
                changes: number;
                contents_url: string;
                deletions: number;
                filename: string;
                patch: string;
                raw_url: string;
                sha: string;
                status: string;
            }[];
            html_url: string;
            merge_base_commit: {
                author: {
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
                comments_url: string;
                commit: {
                    author: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    comment_count: number;
                    committer: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    message: string;
                    tree: {
                        sha: string;
                        url: string;
                    };
                    url: string;
                    verification: {
                        payload: string;
                        reason: string;
                        signature: string;
                        verified: boolean;
                    };
                };
                committer: {
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
                html_url: string;
                node_id: string;
                parents: {
                    sha: string;
                    url: string;
                }[];
                sha: string;
                url: string;
            };
            patch_url: string;
            permalink_url: string;
            status: string;
            total_commits: number;
            url: string;
        };
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs" ? {
    get: (owner: string, repo: string, checkSuiteId: number, accept: string, checkName?: string, status?: "queued" | "in_progress" | "completed", filter?: "latest" | "all", perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                check_runs: {
                    app: {
                        created_at: string;
                        description: string;
                        events: string[];
                        external_url: string;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        owner: {
                            avatar_url: string;
                            description: string;
                            events_url: string;
                            hooks_url: string;
                            id: number;
                            issues_url: string;
                            login: string;
                            members_url: string;
                            node_id: string;
                            public_members_url: string;
                            repos_url: string;
                            url: string;
                        };
                        permissions: {
                            contents: string;
                            issues: string;
                            metadata: string;
                            single_file: string;
                        };
                        slug: string;
                        updated_at: string;
                    };
                    check_suite: {
                        id: number;
                    };
                    completed_at: string;
                    conclusion: string;
                    details_url: string;
                    external_id: string;
                    head_sha: string;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    output: {
                        annotations_count: number;
                        annotations_url: string;
                        summary: string;
                        text: string;
                        title: string;
                    };
                    pull_requests: {
                        base: {
                            ref: string;
                            repo: {
                                id: number;
                                name: string;
                                url: string;
                            };
                            sha: string;
                        };
                        head: {
                            ref: string;
                            repo: {
                                id: number;
                                name: string;
                                url: string;
                            };
                            sha: string;
                        };
                        id: number;
                        number: number;
                        url: string;
                    }[];
                    started_at: string;
                    status: string;
                    url: string;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest" ? {
    post: (owner: string, repo: string, checkSuiteId: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 201;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/collaborators" ? {
    get: (owner: string, repo: string, affiliation?: "outside" | "direct" | "all", perPage?: number, page?: number, accept?: string) => Promise<{
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
                permissions: {
                    admin: boolean;
                    pull: boolean;
                    push: boolean;
                };
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
} : P extends "/repos/{owner}/{repo}/collaborators/{username}" ? {
    delete: (owner: string, repo: string, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 404;
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                created_at: string;
                html_url: string;
                id: number;
                invitee: {
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
                inviter: {
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
                permissions: string;
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
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/collaborators/{username}/permission" ? {
    get: (owner: string, repo: string, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                permission: string;
                user: {
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
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/comments" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                commit_id: string;
                created_at: string;
                html_url: string;
                id: number;
                line: number;
                node_id: string;
                path: string;
                position: number;
                updated_at: string;
                url: string;
                user: {
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
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/comments/{comment_id}" ? {
    delete: (owner: string, repo: string, commentId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, commentId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                commit_id: string;
                created_at: string;
                html_url: string;
                id: number;
                line: number;
                node_id: string;
                path: string;
                position: number;
                updated_at: string;
                url: string;
                user: {
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
            };
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, commentId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                commit_id: string;
                created_at: string;
                html_url: string;
                id: number;
                line: number;
                node_id: string;
                path: string;
                position: number;
                updated_at: string;
                url: string;
                user: {
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
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/comments/{comment_id}/reactions" ? {
    get: (owner: string, repo: string, commentId: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                content: string;
                created_at: string;
                id: number;
                node_id: string;
                user: {
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
            }[];
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, commentId: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                content: string;
                created_at: string;
                id: number;
                node_id: string;
                user: {
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
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/commits" ? {
    get: (owner: string, repo: string, sha?: string, path?: string, author?: string, since?: string, until?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                author: {
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
                comments_url: string;
                commit: {
                    author: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    comment_count: number;
                    committer: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    message: string;
                    tree: {
                        sha: string;
                        url: string;
                    };
                    url: string;
                    verification: {
                        payload: string;
                        reason: string;
                        signature: string;
                        verified: boolean;
                    };
                };
                committer: {
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
                html_url: string;
                node_id: string;
                parents: {
                    sha: string;
                    url: string;
                }[];
                sha: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head" ? {
    get: (owner: string, repo: string, commitSha: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                commit: {
                    sha: string;
                    url: string;
                };
                name: string;
                protected: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{commit_sha}/comments" ? {
    get: (owner: string, repo: string, commitSha: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                commit_id: string;
                created_at: string;
                html_url: string;
                id: number;
                line: number;
                node_id: string;
                path: string;
                position: number;
                updated_at: string;
                url: string;
                user: {
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
            }[];
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, commitSha: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                body: string;
                commit_id: string;
                created_at: string;
                html_url: string;
                id: number;
                line: number;
                node_id: string;
                path: string;
                position: number;
                updated_at: string;
                url: string;
                user: {
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
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{commit_sha}/pulls" ? {
    get: (owner: string, repo: string, commitSha: string, accept: string, perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                _links: {
                    comments: {
                        href: string;
                    };
                    commits: {
                        href: string;
                    };
                    html: {
                        href: string;
                    };
                    issue: {
                        href: string;
                    };
                    review_comment: {
                        href: string;
                    };
                    review_comments: {
                        href: string;
                    };
                    self: {
                        href: string;
                    };
                    statuses: {
                        href: string;
                    };
                };
                active_lock_reason: string;
                assignee: {
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
                assignees: {
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
                author_association: string;
                base: {
                    label: string;
                    ref: string;
                    repo: {
                        allow_merge_commit: boolean;
                        allow_rebase_merge: boolean;
                        allow_squash_merge: boolean;
                        archive_url: string;
                        archived: boolean;
                        assignees_url: string;
                        blobs_url: string;
                        branches_url: string;
                        clone_url: string;
                        collaborators_url: string;
                        comments_url: string;
                        commits_url: string;
                        compare_url: string;
                        contents_url: string;
                        contributors_url: string;
                        created_at: string;
                        default_branch: string;
                        deployments_url: string;
                        description: string;
                        disabled: boolean;
                        downloads_url: string;
                        events_url: string;
                        fork: boolean;
                        forks_count: number;
                        forks_url: string;
                        full_name: string;
                        git_commits_url: string;
                        git_refs_url: string;
                        git_tags_url: string;
                        git_url: string;
                        has_downloads: boolean;
                        has_issues: boolean;
                        has_pages: boolean;
                        has_projects: boolean;
                        has_wiki: boolean;
                        homepage: string;
                        hooks_url: string;
                        html_url: string;
                        id: number;
                        is_template: boolean;
                        issue_comment_url: string;
                        issue_events_url: string;
                        issues_url: string;
                        keys_url: string;
                        labels_url: string;
                        language: string;
                        languages_url: string;
                        merges_url: string;
                        milestones_url: string;
                        mirror_url: string;
                        name: string;
                        network_count: number;
                        node_id: string;
                        notifications_url: string;
                        open_issues_count: number;
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
                        permissions: {
                            admin: boolean;
                            pull: boolean;
                            push: boolean;
                        };
                        private: boolean;
                        pulls_url: string;
                        pushed_at: string;
                        releases_url: string;
                        size: number;
                        ssh_url: string;
                        stargazers_count: number;
                        stargazers_url: string;
                        statuses_url: string;
                        subscribers_count: number;
                        subscribers_url: string;
                        subscription_url: string;
                        svn_url: string;
                        tags_url: string;
                        teams_url: string;
                        temp_clone_token: string;
                        template_repository: string;
                        topics: string[];
                        trees_url: string;
                        updated_at: string;
                        url: string;
                        visibility: string;
                        watchers_count: number;
                    };
                    sha: string;
                    user: {
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
                };
                body: string;
                closed_at: string;
                comments_url: string;
                commits_url: string;
                created_at: string;
                diff_url: string;
                draft: boolean;
                head: {
                    label: string;
                    ref: string;
                    repo: {
                        allow_merge_commit: boolean;
                        allow_rebase_merge: boolean;
                        allow_squash_merge: boolean;
                        archive_url: string;
                        archived: boolean;
                        assignees_url: string;
                        blobs_url: string;
                        branches_url: string;
                        clone_url: string;
                        collaborators_url: string;
                        comments_url: string;
                        commits_url: string;
                        compare_url: string;
                        contents_url: string;
                        contributors_url: string;
                        created_at: string;
                        default_branch: string;
                        deployments_url: string;
                        description: string;
                        disabled: boolean;
                        downloads_url: string;
                        events_url: string;
                        fork: boolean;
                        forks_count: number;
                        forks_url: string;
                        full_name: string;
                        git_commits_url: string;
                        git_refs_url: string;
                        git_tags_url: string;
                        git_url: string;
                        has_downloads: boolean;
                        has_issues: boolean;
                        has_pages: boolean;
                        has_projects: boolean;
                        has_wiki: boolean;
                        homepage: string;
                        hooks_url: string;
                        html_url: string;
                        id: number;
                        is_template: boolean;
                        issue_comment_url: string;
                        issue_events_url: string;
                        issues_url: string;
                        keys_url: string;
                        labels_url: string;
                        language: string;
                        languages_url: string;
                        merges_url: string;
                        milestones_url: string;
                        mirror_url: string;
                        name: string;
                        network_count: number;
                        node_id: string;
                        notifications_url: string;
                        open_issues_count: number;
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
                        permissions: {
                            admin: boolean;
                            pull: boolean;
                            push: boolean;
                        };
                        private: boolean;
                        pulls_url: string;
                        pushed_at: string;
                        releases_url: string;
                        size: number;
                        ssh_url: string;
                        stargazers_count: number;
                        stargazers_url: string;
                        statuses_url: string;
                        subscribers_count: number;
                        subscribers_url: string;
                        subscription_url: string;
                        svn_url: string;
                        tags_url: string;
                        teams_url: string;
                        temp_clone_token: string;
                        template_repository: string;
                        topics: string[];
                        trees_url: string;
                        updated_at: string;
                        url: string;
                        visibility: string;
                        watchers_count: number;
                    };
                    sha: string;
                    user: {
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
                };
                html_url: string;
                id: number;
                issue_url: string;
                labels: {
                    color: string;
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                }[];
                locked: boolean;
                merge_commit_sha: string;
                merged_at: string;
                milestone: {
                    closed_at: string;
                    closed_issues: number;
                    created_at: string;
                    creator: {
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
                    description: string;
                    due_on: string;
                    html_url: string;
                    id: number;
                    labels_url: string;
                    node_id: string;
                    number: number;
                    open_issues: number;
                    state: string;
                    title: string;
                    updated_at: string;
                    url: string;
                };
                node_id: string;
                number: number;
                patch_url: string;
                requested_reviewers: {
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
                requested_teams: {
                    description: string;
                    html_url: string;
                    id: number;
                    members_url: string;
                    name: string;
                    node_id: string;
                    parent: string;
                    permission: string;
                    privacy: string;
                    repositories_url: string;
                    slug: string;
                    url: string;
                }[];
                review_comment_url: string;
                review_comments_url: string;
                state: string;
                statuses_url: string;
                title: string;
                updated_at: string;
                url: string;
                user: {
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
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{ref}" ? {
    get: (owner: string, repo: string, ref: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                author: {
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
                comments_url: string;
                commit: {
                    author: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    comment_count: number;
                    committer: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    message: string;
                    tree: {
                        sha: string;
                        url: string;
                    };
                    url: string;
                    verification: {
                        payload: string;
                        reason: string;
                        signature: string;
                        verified: boolean;
                    };
                };
                committer: {
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
                files: {
                    additions: number;
                    blob_url: string;
                    changes: number;
                    deletions: number;
                    filename: string;
                    patch: string;
                    raw_url: string;
                    status: string;
                }[];
                html_url: string;
                node_id: string;
                parents: {
                    sha: string;
                    url: string;
                }[];
                sha: string;
                stats: {
                    additions: number;
                    deletions: number;
                    total: number;
                };
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{ref}/check-runs" ? {
    get: (owner: string, repo: string, ref: string, accept: string, checkName?: string, status?: "queued" | "in_progress" | "completed", filter?: "latest" | "all", perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                check_runs: {
                    app: {
                        created_at: string;
                        description: string;
                        events: string[];
                        external_url: string;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        owner: {
                            avatar_url: string;
                            description: string;
                            events_url: string;
                            hooks_url: string;
                            id: number;
                            issues_url: string;
                            login: string;
                            members_url: string;
                            node_id: string;
                            public_members_url: string;
                            repos_url: string;
                            url: string;
                        };
                        permissions: {
                            contents: string;
                            issues: string;
                            metadata: string;
                            single_file: string;
                        };
                        slug: string;
                        updated_at: string;
                    };
                    check_suite: {
                        id: number;
                    };
                    completed_at: string;
                    conclusion: string;
                    details_url: string;
                    external_id: string;
                    head_sha: string;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    output: {
                        annotations_count: number;
                        annotations_url: string;
                        summary: string;
                        text: string;
                        title: string;
                    };
                    pull_requests: {
                        base: {
                            ref: string;
                            repo: {
                                id: number;
                                name: string;
                                url: string;
                            };
                            sha: string;
                        };
                        head: {
                            ref: string;
                            repo: {
                                id: number;
                                name: string;
                                url: string;
                            };
                            sha: string;
                        };
                        id: number;
                        number: number;
                        url: string;
                    }[];
                    started_at: string;
                    status: string;
                    url: string;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{ref}/check-suites" ? {
    get: (owner: string, repo: string, ref: string, accept: string, appId?: number, checkName?: string, perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                check_suites: {
                    after: string;
                    app: {
                        created_at: string;
                        description: string;
                        events: string[];
                        external_url: string;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        owner: {
                            avatar_url: string;
                            description: string;
                            events_url: string;
                            hooks_url: string;
                            id: number;
                            issues_url: string;
                            login: string;
                            members_url: string;
                            node_id: string;
                            public_members_url: string;
                            repos_url: string;
                            url: string;
                        };
                        permissions: {
                            contents: string;
                            issues: string;
                            metadata: string;
                            single_file: string;
                        };
                        slug: string;
                        updated_at: string;
                    };
                    before: string;
                    conclusion: string;
                    head_branch: string;
                    head_sha: string;
                    id: number;
                    node_id: string;
                    pull_requests: any[];
                    repository: {
                        allow_merge_commit: boolean;
                        allow_rebase_merge: boolean;
                        allow_squash_merge: boolean;
                        archive_url: string;
                        archived: boolean;
                        assignees_url: string;
                        blobs_url: string;
                        branches_url: string;
                        clone_url: string;
                        collaborators_url: string;
                        comments_url: string;
                        commits_url: string;
                        compare_url: string;
                        contents_url: string;
                        contributors_url: string;
                        created_at: string;
                        default_branch: string;
                        deployments_url: string;
                        description: string;
                        disabled: boolean;
                        downloads_url: string;
                        events_url: string;
                        fork: boolean;
                        forks_count: number;
                        forks_url: string;
                        full_name: string;
                        git_commits_url: string;
                        git_refs_url: string;
                        git_tags_url: string;
                        git_url: string;
                        has_downloads: boolean;
                        has_issues: boolean;
                        has_pages: boolean;
                        has_projects: boolean;
                        has_wiki: boolean;
                        homepage: string;
                        hooks_url: string;
                        html_url: string;
                        id: number;
                        is_template: boolean;
                        issue_comment_url: string;
                        issue_events_url: string;
                        issues_url: string;
                        keys_url: string;
                        labels_url: string;
                        language: string;
                        languages_url: string;
                        merges_url: string;
                        milestones_url: string;
                        mirror_url: string;
                        name: string;
                        network_count: number;
                        node_id: string;
                        notifications_url: string;
                        open_issues_count: number;
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
                        permissions: {
                            admin: boolean;
                            pull: boolean;
                            push: boolean;
                        };
                        private: boolean;
                        pulls_url: string;
                        pushed_at: string;
                        releases_url: string;
                        size: number;
                        ssh_url: string;
                        stargazers_count: number;
                        stargazers_url: string;
                        statuses_url: string;
                        subscribers_count: number;
                        subscribers_url: string;
                        subscription_url: string;
                        svn_url: string;
                        tags_url: string;
                        teams_url: string;
                        temp_clone_token: string;
                        template_repository: string;
                        topics: string[];
                        trees_url: string;
                        updated_at: string;
                        url: string;
                        visibility: string;
                        watchers_count: number;
                    };
                    status: string;
                    url: string;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{ref}/status" ? {
    get: (owner: string, repo: string, ref: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                commit_url: string;
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
                sha: string;
                state: string;
                statuses: {
                    avatar_url: string;
                    context: string;
                    created_at: string;
                    description: string;
                    id: number;
                    node_id: string;
                    state: string;
                    target_url: string;
                    updated_at: string;
                    url: string;
                }[];
                total_count: number;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/commits/{ref}/statuses" ? {
    get: (owner: string, repo: string, ref: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                avatar_url: string;
                context: string;
                created_at: string;
                creator: {
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
                description: string;
                id: number;
                node_id: string;
                state: string;
                target_url: string;
                updated_at: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/community/code_of_conduct" ? {
    get: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                key: string;
                name: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/community/profile" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                description: string;
                documentation: boolean;
                files: {
                    code_of_conduct: {
                        html_url: string;
                        key: string;
                        name: string;
                        url: string;
                    };
                    contributing: {
                        html_url: string;
                        url: string;
                    };
                    issue_template: {
                        html_url: string;
                        url: string;
                    };
                    license: {
                        html_url: string;
                        key: string;
                        name: string;
                        spdx_id: string;
                        url: string;
                    };
                    pull_request_template: {
                        html_url: string;
                        url: string;
                    };
                    readme: {
                        html_url: string;
                        url: string;
                    };
                };
                health_percentage: number;
                updated_at: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/compare/{base}...{head}" ? {
    get: (owner: string, repo: string, base: string, head: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                ahead_by: number;
                base_commit: {
                    author: {
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
                    comments_url: string;
                    commit: {
                        author: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        comment_count: number;
                        committer: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        message: string;
                        tree: {
                            sha: string;
                            url: string;
                        };
                        url: string;
                        verification: {
                            payload: string;
                            reason: string;
                            signature: string;
                            verified: boolean;
                        };
                    };
                    committer: {
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
                    html_url: string;
                    node_id: string;
                    parents: {
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
                    url: string;
                };
                behind_by: number;
                commits: {
                    author: {
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
                    comments_url: string;
                    commit: {
                        author: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        comment_count: number;
                        committer: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        message: string;
                        tree: {
                            sha: string;
                            url: string;
                        };
                        url: string;
                        verification: {
                            payload: string;
                            reason: string;
                            signature: string;
                            verified: boolean;
                        };
                    };
                    committer: {
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
                    html_url: string;
                    node_id: string;
                    parents: {
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
                    url: string;
                }[];
                diff_url: string;
                files: {
                    additions: number;
                    blob_url: string;
                    changes: number;
                    contents_url: string;
                    deletions: number;
                    filename: string;
                    patch: string;
                    raw_url: string;
                    sha: string;
                    status: string;
                }[];
                html_url: string;
                merge_base_commit: {
                    author: {
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
                    comments_url: string;
                    commit: {
                        author: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        comment_count: number;
                        committer: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        message: string;
                        tree: {
                            sha: string;
                            url: string;
                        };
                        url: string;
                        verification: {
                            payload: string;
                            reason: string;
                            signature: string;
                            verified: boolean;
                        };
                    };
                    committer: {
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
                    html_url: string;
                    node_id: string;
                    parents: {
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
                    url: string;
                };
                patch_url: string;
                permalink_url: string;
                status: string;
                total_commits: number;
                url: string;
            };
        };
        headers: object;
    }>;
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs": return { get: (owner: string, repo: string, checkSuiteId: number, accept: string, checkName?: string, status?: "queued" | "in_progress" | "completed", filter?: "latest" | "all", perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    check_runs: {
                        app: {
                            created_at: string;
                            description: string;
                            events: string[];
                            external_url: string;
                            html_url: string;
                            id: number;
                            name: string;
                            node_id: string;
                            owner: {
                                avatar_url: string;
                                description: string;
                                events_url: string;
                                hooks_url: string;
                                id: number;
                                issues_url: string;
                                login: string;
                                members_url: string;
                                node_id: string;
                                public_members_url: string;
                                repos_url: string;
                                url: string;
                            };
                            permissions: {
                                contents: string;
                                issues: string;
                                metadata: string;
                                single_file: string;
                            };
                            slug: string;
                            updated_at: string;
                        };
                        check_suite: {
                            id: number;
                        };
                        completed_at: string;
                        conclusion: string;
                        details_url: string;
                        external_id: string;
                        head_sha: string;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        output: {
                            annotations_count: number;
                            annotations_url: string;
                            summary: string;
                            text: string;
                            title: string;
                        };
                        pull_requests: {
                            base: {
                                ref: string;
                                repo: {
                                    id: number;
                                    name: string;
                                    url: string;
                                };
                                sha: string;
                            };
                            head: {
                                ref: string;
                                repo: {
                                    id: number;
                                    name: string;
                                    url: string;
                                };
                                sha: string;
                            };
                            id: number;
                            number: number;
                            url: string;
                        }[];
                        started_at: string;
                        status: string;
                        url: string;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, checkSuiteId }), { checkName, status, filter, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest": return { post: (owner: string, repo: string, checkSuiteId: number, accept: string): Promise<{
                status: 201;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, checkSuiteId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/collaborators": return { get: (owner: string, repo: string, affiliation?: "outside" | "direct" | "all", perPage?: number, page?: number, accept?: string): Promise<{
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
                    permissions: {
                        admin: boolean;
                        pull: boolean;
                        push: boolean;
                    };
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { affiliation, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/collaborators/{username}": return { delete: (owner: string, repo: string, username: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, username: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, username: string, accept?: string): Promise<{
                status: 201;
                data: {
                    created_at: string;
                    html_url: string;
                    id: number;
                    invitee: {
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
                    inviter: {
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
                    permissions: string;
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
                    url: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, username }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/collaborators/{username}/permission": return { get: (owner: string, repo: string, username: string, accept?: string): Promise<{
                status: 200;
                data: {
                    permission: string;
                    user: {
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
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/comments": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    commit_id: string;
                    created_at: string;
                    html_url: string;
                    id: number;
                    line: number;
                    node_id: string;
                    path: string;
                    position: number;
                    updated_at: string;
                    url: string;
                    user: {
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
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/comments/{comment_id}": return { delete: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    commit_id: string;
                    created_at: string;
                    html_url: string;
                    id: number;
                    line: number;
                    node_id: string;
                    path: string;
                    position: number;
                    updated_at: string;
                    url: string;
                    user: {
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
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    commit_id: string;
                    created_at: string;
                    html_url: string;
                    id: number;
                    line: number;
                    node_id: string;
                    path: string;
                    position: number;
                    updated_at: string;
                    url: string;
                    user: {
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
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/comments/{comment_id}/reactions": return { get: (owner: string, repo: string, commentId: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    content: string;
                    created_at: string;
                    id: number;
                    node_id: string;
                    user: {
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
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commentId }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, commentId: number, accept: string): Promise<{
                status: 201;
                data: {
                    content: string;
                    created_at: string;
                    id: number;
                    node_id: string;
                    user: {
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
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits": return { get: (owner: string, repo: string, sha?: string, path?: string, author?: string, since?: string, until?: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    author: {
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
                    comments_url: string;
                    commit: {
                        author: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        comment_count: number;
                        committer: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        message: string;
                        tree: {
                            sha: string;
                            url: string;
                        };
                        url: string;
                        verification: {
                            payload: string;
                            reason: string;
                            signature: string;
                            verified: boolean;
                        };
                    };
                    committer: {
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
                    html_url: string;
                    node_id: string;
                    parents: {
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { sha, path, author, since, until, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head": return { get: (owner: string, repo: string, commitSha: string, accept: string): Promise<{
                status: 200;
                data: {
                    commit: {
                        sha: string;
                        url: string;
                    };
                    name: string;
                    protected: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commitSha }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{commit_sha}/comments": return { get: (owner: string, repo: string, commitSha: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    commit_id: string;
                    created_at: string;
                    html_url: string;
                    id: number;
                    line: number;
                    node_id: string;
                    path: string;
                    position: number;
                    updated_at: string;
                    url: string;
                    user: {
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
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commitSha }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, commitSha: string, accept?: string): Promise<{
                status: 201;
                data: {
                    body: string;
                    commit_id: string;
                    created_at: string;
                    html_url: string;
                    id: number;
                    line: number;
                    node_id: string;
                    path: string;
                    position: number;
                    updated_at: string;
                    url: string;
                    user: {
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
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, commitSha }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{commit_sha}/pulls": return { get: (owner: string, repo: string, commitSha: string, accept: string, perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    _links: {
                        comments: {
                            href: string;
                        };
                        commits: {
                            href: string;
                        };
                        html: {
                            href: string;
                        };
                        issue: {
                            href: string;
                        };
                        review_comment: {
                            href: string;
                        };
                        review_comments: {
                            href: string;
                        };
                        self: {
                            href: string;
                        };
                        statuses: {
                            href: string;
                        };
                    };
                    active_lock_reason: string;
                    assignee: {
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
                    assignees: {
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
                    author_association: string;
                    base: {
                        label: string;
                        ref: string;
                        repo: {
                            allow_merge_commit: boolean;
                            allow_rebase_merge: boolean;
                            allow_squash_merge: boolean;
                            archive_url: string;
                            archived: boolean;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            clone_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            created_at: string;
                            default_branch: string;
                            deployments_url: string;
                            description: string;
                            disabled: boolean;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks_count: number;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            git_url: string;
                            has_downloads: boolean;
                            has_issues: boolean;
                            has_pages: boolean;
                            has_projects: boolean;
                            has_wiki: boolean;
                            homepage: string;
                            hooks_url: string;
                            html_url: string;
                            id: number;
                            is_template: boolean;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            language: string;
                            languages_url: string;
                            merges_url: string;
                            milestones_url: string;
                            mirror_url: string;
                            name: string;
                            network_count: number;
                            node_id: string;
                            notifications_url: string;
                            open_issues_count: number;
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
                            permissions: {
                                admin: boolean;
                                pull: boolean;
                                push: boolean;
                            };
                            private: boolean;
                            pulls_url: string;
                            pushed_at: string;
                            releases_url: string;
                            size: number;
                            ssh_url: string;
                            stargazers_count: number;
                            stargazers_url: string;
                            statuses_url: string;
                            subscribers_count: number;
                            subscribers_url: string;
                            subscription_url: string;
                            svn_url: string;
                            tags_url: string;
                            teams_url: string;
                            temp_clone_token: string;
                            template_repository: string;
                            topics: string[];
                            trees_url: string;
                            updated_at: string;
                            url: string;
                            visibility: string;
                            watchers_count: number;
                        };
                        sha: string;
                        user: {
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
                    };
                    body: string;
                    closed_at: string;
                    comments_url: string;
                    commits_url: string;
                    created_at: string;
                    diff_url: string;
                    draft: boolean;
                    head: {
                        label: string;
                        ref: string;
                        repo: {
                            allow_merge_commit: boolean;
                            allow_rebase_merge: boolean;
                            allow_squash_merge: boolean;
                            archive_url: string;
                            archived: boolean;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            clone_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            created_at: string;
                            default_branch: string;
                            deployments_url: string;
                            description: string;
                            disabled: boolean;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks_count: number;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            git_url: string;
                            has_downloads: boolean;
                            has_issues: boolean;
                            has_pages: boolean;
                            has_projects: boolean;
                            has_wiki: boolean;
                            homepage: string;
                            hooks_url: string;
                            html_url: string;
                            id: number;
                            is_template: boolean;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            language: string;
                            languages_url: string;
                            merges_url: string;
                            milestones_url: string;
                            mirror_url: string;
                            name: string;
                            network_count: number;
                            node_id: string;
                            notifications_url: string;
                            open_issues_count: number;
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
                            permissions: {
                                admin: boolean;
                                pull: boolean;
                                push: boolean;
                            };
                            private: boolean;
                            pulls_url: string;
                            pushed_at: string;
                            releases_url: string;
                            size: number;
                            ssh_url: string;
                            stargazers_count: number;
                            stargazers_url: string;
                            statuses_url: string;
                            subscribers_count: number;
                            subscribers_url: string;
                            subscription_url: string;
                            svn_url: string;
                            tags_url: string;
                            teams_url: string;
                            temp_clone_token: string;
                            template_repository: string;
                            topics: string[];
                            trees_url: string;
                            updated_at: string;
                            url: string;
                            visibility: string;
                            watchers_count: number;
                        };
                        sha: string;
                        user: {
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
                    };
                    html_url: string;
                    id: number;
                    issue_url: string;
                    labels: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    }[];
                    locked: boolean;
                    merge_commit_sha: string;
                    merged_at: string;
                    milestone: {
                        closed_at: string;
                        closed_issues: number;
                        created_at: string;
                        creator: {
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
                        description: string;
                        due_on: string;
                        html_url: string;
                        id: number;
                        labels_url: string;
                        node_id: string;
                        number: number;
                        open_issues: number;
                        state: string;
                        title: string;
                        updated_at: string;
                        url: string;
                    };
                    node_id: string;
                    number: number;
                    patch_url: string;
                    requested_reviewers: {
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
                    requested_teams: {
                        description: string;
                        html_url: string;
                        id: number;
                        members_url: string;
                        name: string;
                        node_id: string;
                        parent: string;
                        permission: string;
                        privacy: string;
                        repositories_url: string;
                        slug: string;
                        url: string;
                    }[];
                    review_comment_url: string;
                    review_comments_url: string;
                    state: string;
                    statuses_url: string;
                    title: string;
                    updated_at: string;
                    url: string;
                    user: {
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
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commitSha }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{ref}": return { get: (owner: string, repo: string, ref: string, accept?: string): Promise<{
                status: 200;
                data: {
                    author: {
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
                    comments_url: string;
                    commit: {
                        author: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        comment_count: number;
                        committer: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        message: string;
                        tree: {
                            sha: string;
                            url: string;
                        };
                        url: string;
                        verification: {
                            payload: string;
                            reason: string;
                            signature: string;
                            verified: boolean;
                        };
                    };
                    committer: {
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
                    files: {
                        additions: number;
                        blob_url: string;
                        changes: number;
                        deletions: number;
                        filename: string;
                        patch: string;
                        raw_url: string;
                        status: string;
                    }[];
                    html_url: string;
                    node_id: string;
                    parents: {
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
                    stats: {
                        additions: number;
                        deletions: number;
                        total: number;
                    };
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{ref}/check-runs": return { get: (owner: string, repo: string, ref: string, accept: string, checkName?: string, status?: "queued" | "in_progress" | "completed", filter?: "latest" | "all", perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    check_runs: {
                        app: {
                            created_at: string;
                            description: string;
                            events: string[];
                            external_url: string;
                            html_url: string;
                            id: number;
                            name: string;
                            node_id: string;
                            owner: {
                                avatar_url: string;
                                description: string;
                                events_url: string;
                                hooks_url: string;
                                id: number;
                                issues_url: string;
                                login: string;
                                members_url: string;
                                node_id: string;
                                public_members_url: string;
                                repos_url: string;
                                url: string;
                            };
                            permissions: {
                                contents: string;
                                issues: string;
                                metadata: string;
                                single_file: string;
                            };
                            slug: string;
                            updated_at: string;
                        };
                        check_suite: {
                            id: number;
                        };
                        completed_at: string;
                        conclusion: string;
                        details_url: string;
                        external_id: string;
                        head_sha: string;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        output: {
                            annotations_count: number;
                            annotations_url: string;
                            summary: string;
                            text: string;
                            title: string;
                        };
                        pull_requests: {
                            base: {
                                ref: string;
                                repo: {
                                    id: number;
                                    name: string;
                                    url: string;
                                };
                                sha: string;
                            };
                            head: {
                                ref: string;
                                repo: {
                                    id: number;
                                    name: string;
                                    url: string;
                                };
                                sha: string;
                            };
                            id: number;
                            number: number;
                            url: string;
                        }[];
                        started_at: string;
                        status: string;
                        url: string;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), { checkName, status, filter, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{ref}/check-suites": return { get: (owner: string, repo: string, ref: string, accept: string, appId?: number, checkName?: string, perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    check_suites: {
                        after: string;
                        app: {
                            created_at: string;
                            description: string;
                            events: string[];
                            external_url: string;
                            html_url: string;
                            id: number;
                            name: string;
                            node_id: string;
                            owner: {
                                avatar_url: string;
                                description: string;
                                events_url: string;
                                hooks_url: string;
                                id: number;
                                issues_url: string;
                                login: string;
                                members_url: string;
                                node_id: string;
                                public_members_url: string;
                                repos_url: string;
                                url: string;
                            };
                            permissions: {
                                contents: string;
                                issues: string;
                                metadata: string;
                                single_file: string;
                            };
                            slug: string;
                            updated_at: string;
                        };
                        before: string;
                        conclusion: string;
                        head_branch: string;
                        head_sha: string;
                        id: number;
                        node_id: string;
                        pull_requests: any[];
                        repository: {
                            allow_merge_commit: boolean;
                            allow_rebase_merge: boolean;
                            allow_squash_merge: boolean;
                            archive_url: string;
                            archived: boolean;
                            assignees_url: string;
                            blobs_url: string;
                            branches_url: string;
                            clone_url: string;
                            collaborators_url: string;
                            comments_url: string;
                            commits_url: string;
                            compare_url: string;
                            contents_url: string;
                            contributors_url: string;
                            created_at: string;
                            default_branch: string;
                            deployments_url: string;
                            description: string;
                            disabled: boolean;
                            downloads_url: string;
                            events_url: string;
                            fork: boolean;
                            forks_count: number;
                            forks_url: string;
                            full_name: string;
                            git_commits_url: string;
                            git_refs_url: string;
                            git_tags_url: string;
                            git_url: string;
                            has_downloads: boolean;
                            has_issues: boolean;
                            has_pages: boolean;
                            has_projects: boolean;
                            has_wiki: boolean;
                            homepage: string;
                            hooks_url: string;
                            html_url: string;
                            id: number;
                            is_template: boolean;
                            issue_comment_url: string;
                            issue_events_url: string;
                            issues_url: string;
                            keys_url: string;
                            labels_url: string;
                            language: string;
                            languages_url: string;
                            merges_url: string;
                            milestones_url: string;
                            mirror_url: string;
                            name: string;
                            network_count: number;
                            node_id: string;
                            notifications_url: string;
                            open_issues_count: number;
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
                            permissions: {
                                admin: boolean;
                                pull: boolean;
                                push: boolean;
                            };
                            private: boolean;
                            pulls_url: string;
                            pushed_at: string;
                            releases_url: string;
                            size: number;
                            ssh_url: string;
                            stargazers_count: number;
                            stargazers_url: string;
                            statuses_url: string;
                            subscribers_count: number;
                            subscribers_url: string;
                            subscription_url: string;
                            svn_url: string;
                            tags_url: string;
                            teams_url: string;
                            temp_clone_token: string;
                            template_repository: string;
                            topics: string[];
                            trees_url: string;
                            updated_at: string;
                            url: string;
                            visibility: string;
                            watchers_count: number;
                        };
                        status: string;
                        url: string;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), { appId, checkName, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{ref}/status": return { get: (owner: string, repo: string, ref: string, accept?: string): Promise<{
                status: 200;
                data: {
                    commit_url: string;
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
                    sha: string;
                    state: string;
                    statuses: {
                        avatar_url: string;
                        context: string;
                        created_at: string;
                        description: string;
                        id: number;
                        node_id: string;
                        state: string;
                        target_url: string;
                        updated_at: string;
                        url: string;
                    }[];
                    total_count: number;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{ref}/statuses": return { get: (owner: string, repo: string, ref: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    avatar_url: string;
                    context: string;
                    created_at: string;
                    creator: {
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
                    description: string;
                    id: number;
                    node_id: string;
                    state: string;
                    target_url: string;
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/community/code_of_conduct": return { get: (owner: string, repo: string, accept: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    key: string;
                    name: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/community/profile": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    description: string;
                    documentation: boolean;
                    files: {
                        code_of_conduct: {
                            html_url: string;
                            key: string;
                            name: string;
                            url: string;
                        };
                        contributing: {
                            html_url: string;
                            url: string;
                        };
                        issue_template: {
                            html_url: string;
                            url: string;
                        };
                        license: {
                            html_url: string;
                            key: string;
                            name: string;
                            spdx_id: string;
                            url: string;
                        };
                        pull_request_template: {
                            html_url: string;
                            url: string;
                        };
                        readme: {
                            html_url: string;
                            url: string;
                        };
                    };
                    health_percentage: number;
                    updated_at: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/compare/{base}...{head}": return { get: (owner: string, repo: string, base: string, head: string, accept?: string): Promise<{
                status: 200;
                data: {
                    ahead_by: number;
                    base_commit: {
                        author: {
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
                        comments_url: string;
                        commit: {
                            author: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            comment_count: number;
                            committer: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            message: string;
                            tree: {
                                sha: string;
                                url: string;
                            };
                            url: string;
                            verification: {
                                payload: string;
                                reason: string;
                                signature: string;
                                verified: boolean;
                            };
                        };
                        committer: {
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
                        html_url: string;
                        node_id: string;
                        parents: {
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
                        url: string;
                    };
                    behind_by: number;
                    commits: {
                        author: {
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
                        comments_url: string;
                        commit: {
                            author: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            comment_count: number;
                            committer: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            message: string;
                            tree: {
                                sha: string;
                                url: string;
                            };
                            url: string;
                            verification: {
                                payload: string;
                                reason: string;
                                signature: string;
                                verified: boolean;
                            };
                        };
                        committer: {
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
                        html_url: string;
                        node_id: string;
                        parents: {
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
                        url: string;
                    }[];
                    diff_url: string;
                    files: {
                        additions: number;
                        blob_url: string;
                        changes: number;
                        contents_url: string;
                        deletions: number;
                        filename: string;
                        patch: string;
                        raw_url: string;
                        sha: string;
                        status: string;
                    }[];
                    html_url: string;
                    merge_base_commit: {
                        author: {
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
                        comments_url: string;
                        commit: {
                            author: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            comment_count: number;
                            committer: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            message: string;
                            tree: {
                                sha: string;
                                url: string;
                            };
                            url: string;
                            verification: {
                                payload: string;
                                reason: string;
                                signature: string;
                                verified: boolean;
                            };
                        };
                        committer: {
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
                        html_url: string;
                        node_id: string;
                        parents: {
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
                        url: string;
                    };
                    patch_url: string;
                    permalink_url: string;
                    status: string;
                    total_commits: number;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, base, head }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs": return { get: (owner: string, repo: string, checkSuiteId: number, accept: string, checkName?: string, status?: "queued" | "in_progress" | "completed", filter?: "latest" | "all", perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        check_runs: {
                            app: {
                                created_at: string;
                                description: string;
                                events: string[];
                                external_url: string;
                                html_url: string;
                                id: number;
                                name: string;
                                node_id: string;
                                owner: {
                                    avatar_url: string;
                                    description: string;
                                    events_url: string;
                                    hooks_url: string;
                                    id: number;
                                    issues_url: string;
                                    login: string;
                                    members_url: string;
                                    node_id: string;
                                    public_members_url: string;
                                    repos_url: string;
                                    url: string;
                                };
                                permissions: {
                                    contents: string;
                                    issues: string;
                                    metadata: string;
                                    single_file: string;
                                };
                                slug: string;
                                updated_at: string;
                            };
                            check_suite: {
                                id: number;
                            };
                            completed_at: string;
                            conclusion: string;
                            details_url: string;
                            external_id: string;
                            head_sha: string;
                            html_url: string;
                            id: number;
                            name: string;
                            node_id: string;
                            output: {
                                annotations_count: number;
                                annotations_url: string;
                                summary: string;
                                text: string;
                                title: string;
                            };
                            pull_requests: {
                                base: {
                                    ref: string;
                                    repo: {
                                        id: number;
                                        name: string;
                                        url: string;
                                    };
                                    sha: string;
                                };
                                head: {
                                    ref: string;
                                    repo: {
                                        id: number;
                                        name: string;
                                        url: string;
                                    };
                                    sha: string;
                                };
                                id: number;
                                number: number;
                                url: string;
                            }[];
                            started_at: string;
                            status: string;
                            url: string;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, checkSuiteId }), { checkName, status, filter, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest": return { post: (owner: string, repo: string, checkSuiteId: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, checkSuiteId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/collaborators": return { get: (owner: string, repo: string, affiliation?: "outside" | "direct" | "all", perPage?: number, page?: number, accept?: string): Promise<{
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
                        permissions: {
                            admin: boolean;
                            pull: boolean;
                            push: boolean;
                        };
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { affiliation, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/collaborators/{username}": return { delete: (owner: string, repo: string, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        created_at: string;
                        html_url: string;
                        id: number;
                        invitee: {
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
                        inviter: {
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
                        permissions: string;
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
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, username }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/collaborators/{username}/permission": return { get: (owner: string, repo: string, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        permission: string;
                        user: {
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
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/comments": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        commit_id: string;
                        created_at: string;
                        html_url: string;
                        id: number;
                        line: number;
                        node_id: string;
                        path: string;
                        position: number;
                        updated_at: string;
                        url: string;
                        user: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/comments/{comment_id}": return { delete: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        commit_id: string;
                        created_at: string;
                        html_url: string;
                        id: number;
                        line: number;
                        node_id: string;
                        path: string;
                        position: number;
                        updated_at: string;
                        url: string;
                        user: {
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
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        commit_id: string;
                        created_at: string;
                        html_url: string;
                        id: number;
                        line: number;
                        node_id: string;
                        path: string;
                        position: number;
                        updated_at: string;
                        url: string;
                        user: {
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
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/comments/{comment_id}/reactions": return { get: (owner: string, repo: string, commentId: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        content: string;
                        created_at: string;
                        id: number;
                        node_id: string;
                        user: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commentId }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, commentId: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        content: string;
                        created_at: string;
                        id: number;
                        node_id: string;
                        user: {
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
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits": return { get: (owner: string, repo: string, sha?: string, path?: string, author?: string, since?: string, until?: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        author: {
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
                        comments_url: string;
                        commit: {
                            author: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            comment_count: number;
                            committer: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            message: string;
                            tree: {
                                sha: string;
                                url: string;
                            };
                            url: string;
                            verification: {
                                payload: string;
                                reason: string;
                                signature: string;
                                verified: boolean;
                            };
                        };
                        committer: {
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
                        html_url: string;
                        node_id: string;
                        parents: {
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { sha, path, author, since, until, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head": return { get: (owner: string, repo: string, commitSha: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        commit: {
                            sha: string;
                            url: string;
                        };
                        name: string;
                        protected: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commitSha }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{commit_sha}/comments": return { get: (owner: string, repo: string, commitSha: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        commit_id: string;
                        created_at: string;
                        html_url: string;
                        id: number;
                        line: number;
                        node_id: string;
                        path: string;
                        position: number;
                        updated_at: string;
                        url: string;
                        user: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commitSha }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, commitSha: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        body: string;
                        commit_id: string;
                        created_at: string;
                        html_url: string;
                        id: number;
                        line: number;
                        node_id: string;
                        path: string;
                        position: number;
                        updated_at: string;
                        url: string;
                        user: {
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
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, commitSha }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{commit_sha}/pulls": return { get: (owner: string, repo: string, commitSha: string, accept: string, perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        _links: {
                            comments: {
                                href: string;
                            };
                            commits: {
                                href: string;
                            };
                            html: {
                                href: string;
                            };
                            issue: {
                                href: string;
                            };
                            review_comment: {
                                href: string;
                            };
                            review_comments: {
                                href: string;
                            };
                            self: {
                                href: string;
                            };
                            statuses: {
                                href: string;
                            };
                        };
                        active_lock_reason: string;
                        assignee: {
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
                        assignees: {
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
                        author_association: string;
                        base: {
                            label: string;
                            ref: string;
                            repo: {
                                allow_merge_commit: boolean;
                                allow_rebase_merge: boolean;
                                allow_squash_merge: boolean;
                                archive_url: string;
                                archived: boolean;
                                assignees_url: string;
                                blobs_url: string;
                                branches_url: string;
                                clone_url: string;
                                collaborators_url: string;
                                comments_url: string;
                                commits_url: string;
                                compare_url: string;
                                contents_url: string;
                                contributors_url: string;
                                created_at: string;
                                default_branch: string;
                                deployments_url: string;
                                description: string;
                                disabled: boolean;
                                downloads_url: string;
                                events_url: string;
                                fork: boolean;
                                forks_count: number;
                                forks_url: string;
                                full_name: string;
                                git_commits_url: string;
                                git_refs_url: string;
                                git_tags_url: string;
                                git_url: string;
                                has_downloads: boolean;
                                has_issues: boolean;
                                has_pages: boolean;
                                has_projects: boolean;
                                has_wiki: boolean;
                                homepage: string;
                                hooks_url: string;
                                html_url: string;
                                id: number;
                                is_template: boolean;
                                issue_comment_url: string;
                                issue_events_url: string;
                                issues_url: string;
                                keys_url: string;
                                labels_url: string;
                                language: string;
                                languages_url: string;
                                merges_url: string;
                                milestones_url: string;
                                mirror_url: string;
                                name: string;
                                network_count: number;
                                node_id: string;
                                notifications_url: string;
                                open_issues_count: number;
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
                                permissions: {
                                    admin: boolean;
                                    pull: boolean;
                                    push: boolean;
                                };
                                private: boolean;
                                pulls_url: string;
                                pushed_at: string;
                                releases_url: string;
                                size: number;
                                ssh_url: string;
                                stargazers_count: number;
                                stargazers_url: string;
                                statuses_url: string;
                                subscribers_count: number;
                                subscribers_url: string;
                                subscription_url: string;
                                svn_url: string;
                                tags_url: string;
                                teams_url: string;
                                temp_clone_token: string;
                                template_repository: string;
                                topics: string[];
                                trees_url: string;
                                updated_at: string;
                                url: string;
                                visibility: string;
                                watchers_count: number;
                            };
                            sha: string;
                            user: {
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
                        };
                        body: string;
                        closed_at: string;
                        comments_url: string;
                        commits_url: string;
                        created_at: string;
                        diff_url: string;
                        draft: boolean;
                        head: {
                            label: string;
                            ref: string;
                            repo: {
                                allow_merge_commit: boolean;
                                allow_rebase_merge: boolean;
                                allow_squash_merge: boolean;
                                archive_url: string;
                                archived: boolean;
                                assignees_url: string;
                                blobs_url: string;
                                branches_url: string;
                                clone_url: string;
                                collaborators_url: string;
                                comments_url: string;
                                commits_url: string;
                                compare_url: string;
                                contents_url: string;
                                contributors_url: string;
                                created_at: string;
                                default_branch: string;
                                deployments_url: string;
                                description: string;
                                disabled: boolean;
                                downloads_url: string;
                                events_url: string;
                                fork: boolean;
                                forks_count: number;
                                forks_url: string;
                                full_name: string;
                                git_commits_url: string;
                                git_refs_url: string;
                                git_tags_url: string;
                                git_url: string;
                                has_downloads: boolean;
                                has_issues: boolean;
                                has_pages: boolean;
                                has_projects: boolean;
                                has_wiki: boolean;
                                homepage: string;
                                hooks_url: string;
                                html_url: string;
                                id: number;
                                is_template: boolean;
                                issue_comment_url: string;
                                issue_events_url: string;
                                issues_url: string;
                                keys_url: string;
                                labels_url: string;
                                language: string;
                                languages_url: string;
                                merges_url: string;
                                milestones_url: string;
                                mirror_url: string;
                                name: string;
                                network_count: number;
                                node_id: string;
                                notifications_url: string;
                                open_issues_count: number;
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
                                permissions: {
                                    admin: boolean;
                                    pull: boolean;
                                    push: boolean;
                                };
                                private: boolean;
                                pulls_url: string;
                                pushed_at: string;
                                releases_url: string;
                                size: number;
                                ssh_url: string;
                                stargazers_count: number;
                                stargazers_url: string;
                                statuses_url: string;
                                subscribers_count: number;
                                subscribers_url: string;
                                subscription_url: string;
                                svn_url: string;
                                tags_url: string;
                                teams_url: string;
                                temp_clone_token: string;
                                template_repository: string;
                                topics: string[];
                                trees_url: string;
                                updated_at: string;
                                url: string;
                                visibility: string;
                                watchers_count: number;
                            };
                            sha: string;
                            user: {
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
                        };
                        html_url: string;
                        id: number;
                        issue_url: string;
                        labels: {
                            color: string;
                            default: boolean;
                            description: string;
                            id: number;
                            name: string;
                            node_id: string;
                            url: string;
                        }[];
                        locked: boolean;
                        merge_commit_sha: string;
                        merged_at: string;
                        milestone: {
                            closed_at: string;
                            closed_issues: number;
                            created_at: string;
                            creator: {
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
                            description: string;
                            due_on: string;
                            html_url: string;
                            id: number;
                            labels_url: string;
                            node_id: string;
                            number: number;
                            open_issues: number;
                            state: string;
                            title: string;
                            updated_at: string;
                            url: string;
                        };
                        node_id: string;
                        number: number;
                        patch_url: string;
                        requested_reviewers: {
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
                        requested_teams: {
                            description: string;
                            html_url: string;
                            id: number;
                            members_url: string;
                            name: string;
                            node_id: string;
                            parent: string;
                            permission: string;
                            privacy: string;
                            repositories_url: string;
                            slug: string;
                            url: string;
                        }[];
                        review_comment_url: string;
                        review_comments_url: string;
                        state: string;
                        statuses_url: string;
                        title: string;
                        updated_at: string;
                        url: string;
                        user: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commitSha }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{ref}": return { get: (owner: string, repo: string, ref: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        author: {
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
                        comments_url: string;
                        commit: {
                            author: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            comment_count: number;
                            committer: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            message: string;
                            tree: {
                                sha: string;
                                url: string;
                            };
                            url: string;
                            verification: {
                                payload: string;
                                reason: string;
                                signature: string;
                                verified: boolean;
                            };
                        };
                        committer: {
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
                        files: {
                            additions: number;
                            blob_url: string;
                            changes: number;
                            deletions: number;
                            filename: string;
                            patch: string;
                            raw_url: string;
                            status: string;
                        }[];
                        html_url: string;
                        node_id: string;
                        parents: {
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
                        stats: {
                            additions: number;
                            deletions: number;
                            total: number;
                        };
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{ref}/check-runs": return { get: (owner: string, repo: string, ref: string, accept: string, checkName?: string, status?: "queued" | "in_progress" | "completed", filter?: "latest" | "all", perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        check_runs: {
                            app: {
                                created_at: string;
                                description: string;
                                events: string[];
                                external_url: string;
                                html_url: string;
                                id: number;
                                name: string;
                                node_id: string;
                                owner: {
                                    avatar_url: string;
                                    description: string;
                                    events_url: string;
                                    hooks_url: string;
                                    id: number;
                                    issues_url: string;
                                    login: string;
                                    members_url: string;
                                    node_id: string;
                                    public_members_url: string;
                                    repos_url: string;
                                    url: string;
                                };
                                permissions: {
                                    contents: string;
                                    issues: string;
                                    metadata: string;
                                    single_file: string;
                                };
                                slug: string;
                                updated_at: string;
                            };
                            check_suite: {
                                id: number;
                            };
                            completed_at: string;
                            conclusion: string;
                            details_url: string;
                            external_id: string;
                            head_sha: string;
                            html_url: string;
                            id: number;
                            name: string;
                            node_id: string;
                            output: {
                                annotations_count: number;
                                annotations_url: string;
                                summary: string;
                                text: string;
                                title: string;
                            };
                            pull_requests: {
                                base: {
                                    ref: string;
                                    repo: {
                                        id: number;
                                        name: string;
                                        url: string;
                                    };
                                    sha: string;
                                };
                                head: {
                                    ref: string;
                                    repo: {
                                        id: number;
                                        name: string;
                                        url: string;
                                    };
                                    sha: string;
                                };
                                id: number;
                                number: number;
                                url: string;
                            }[];
                            started_at: string;
                            status: string;
                            url: string;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), { checkName, status, filter, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{ref}/check-suites": return { get: (owner: string, repo: string, ref: string, accept: string, appId?: number, checkName?: string, perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        check_suites: {
                            after: string;
                            app: {
                                created_at: string;
                                description: string;
                                events: string[];
                                external_url: string;
                                html_url: string;
                                id: number;
                                name: string;
                                node_id: string;
                                owner: {
                                    avatar_url: string;
                                    description: string;
                                    events_url: string;
                                    hooks_url: string;
                                    id: number;
                                    issues_url: string;
                                    login: string;
                                    members_url: string;
                                    node_id: string;
                                    public_members_url: string;
                                    repos_url: string;
                                    url: string;
                                };
                                permissions: {
                                    contents: string;
                                    issues: string;
                                    metadata: string;
                                    single_file: string;
                                };
                                slug: string;
                                updated_at: string;
                            };
                            before: string;
                            conclusion: string;
                            head_branch: string;
                            head_sha: string;
                            id: number;
                            node_id: string;
                            pull_requests: any[];
                            repository: {
                                allow_merge_commit: boolean;
                                allow_rebase_merge: boolean;
                                allow_squash_merge: boolean;
                                archive_url: string;
                                archived: boolean;
                                assignees_url: string;
                                blobs_url: string;
                                branches_url: string;
                                clone_url: string;
                                collaborators_url: string;
                                comments_url: string;
                                commits_url: string;
                                compare_url: string;
                                contents_url: string;
                                contributors_url: string;
                                created_at: string;
                                default_branch: string;
                                deployments_url: string;
                                description: string;
                                disabled: boolean;
                                downloads_url: string;
                                events_url: string;
                                fork: boolean;
                                forks_count: number;
                                forks_url: string;
                                full_name: string;
                                git_commits_url: string;
                                git_refs_url: string;
                                git_tags_url: string;
                                git_url: string;
                                has_downloads: boolean;
                                has_issues: boolean;
                                has_pages: boolean;
                                has_projects: boolean;
                                has_wiki: boolean;
                                homepage: string;
                                hooks_url: string;
                                html_url: string;
                                id: number;
                                is_template: boolean;
                                issue_comment_url: string;
                                issue_events_url: string;
                                issues_url: string;
                                keys_url: string;
                                labels_url: string;
                                language: string;
                                languages_url: string;
                                merges_url: string;
                                milestones_url: string;
                                mirror_url: string;
                                name: string;
                                network_count: number;
                                node_id: string;
                                notifications_url: string;
                                open_issues_count: number;
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
                                permissions: {
                                    admin: boolean;
                                    pull: boolean;
                                    push: boolean;
                                };
                                private: boolean;
                                pulls_url: string;
                                pushed_at: string;
                                releases_url: string;
                                size: number;
                                ssh_url: string;
                                stargazers_count: number;
                                stargazers_url: string;
                                statuses_url: string;
                                subscribers_count: number;
                                subscribers_url: string;
                                subscription_url: string;
                                svn_url: string;
                                tags_url: string;
                                teams_url: string;
                                temp_clone_token: string;
                                template_repository: string;
                                topics: string[];
                                trees_url: string;
                                updated_at: string;
                                url: string;
                                visibility: string;
                                watchers_count: number;
                            };
                            status: string;
                            url: string;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), { appId, checkName, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{ref}/status": return { get: (owner: string, repo: string, ref: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        commit_url: string;
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
                        sha: string;
                        state: string;
                        statuses: {
                            avatar_url: string;
                            context: string;
                            created_at: string;
                            description: string;
                            id: number;
                            node_id: string;
                            state: string;
                            target_url: string;
                            updated_at: string;
                            url: string;
                        }[];
                        total_count: number;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/commits/{ref}/statuses": return { get: (owner: string, repo: string, ref: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        avatar_url: string;
                        context: string;
                        created_at: string;
                        creator: {
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
                        description: string;
                        id: number;
                        node_id: string;
                        state: string;
                        target_url: string;
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/community/code_of_conduct": return { get: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        key: string;
                        name: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/community/profile": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        description: string;
                        documentation: boolean;
                        files: {
                            code_of_conduct: {
                                html_url: string;
                                key: string;
                                name: string;
                                url: string;
                            };
                            contributing: {
                                html_url: string;
                                url: string;
                            };
                            issue_template: {
                                html_url: string;
                                url: string;
                            };
                            license: {
                                html_url: string;
                                key: string;
                                name: string;
                                spdx_id: string;
                                url: string;
                            };
                            pull_request_template: {
                                html_url: string;
                                url: string;
                            };
                            readme: {
                                html_url: string;
                                url: string;
                            };
                        };
                        health_percentage: number;
                        updated_at: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/compare/{base}...{head}": return { get: (owner: string, repo: string, base: string, head: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        ahead_by: number;
                        base_commit: {
                            author: {
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
                            comments_url: string;
                            commit: {
                                author: {
                                    date: string;
                                    email: string;
                                    name: string;
                                };
                                comment_count: number;
                                committer: {
                                    date: string;
                                    email: string;
                                    name: string;
                                };
                                message: string;
                                tree: {
                                    sha: string;
                                    url: string;
                                };
                                url: string;
                                verification: {
                                    payload: string;
                                    reason: string;
                                    signature: string;
                                    verified: boolean;
                                };
                            };
                            committer: {
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
                            html_url: string;
                            node_id: string;
                            parents: {
                                sha: string;
                                url: string;
                            }[];
                            sha: string;
                            url: string;
                        };
                        behind_by: number;
                        commits: {
                            author: {
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
                            comments_url: string;
                            commit: {
                                author: {
                                    date: string;
                                    email: string;
                                    name: string;
                                };
                                comment_count: number;
                                committer: {
                                    date: string;
                                    email: string;
                                    name: string;
                                };
                                message: string;
                                tree: {
                                    sha: string;
                                    url: string;
                                };
                                url: string;
                                verification: {
                                    payload: string;
                                    reason: string;
                                    signature: string;
                                    verified: boolean;
                                };
                            };
                            committer: {
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
                            html_url: string;
                            node_id: string;
                            parents: {
                                sha: string;
                                url: string;
                            }[];
                            sha: string;
                            url: string;
                        }[];
                        diff_url: string;
                        files: {
                            additions: number;
                            blob_url: string;
                            changes: number;
                            contents_url: string;
                            deletions: number;
                            filename: string;
                            patch: string;
                            raw_url: string;
                            sha: string;
                            status: string;
                        }[];
                        html_url: string;
                        merge_base_commit: {
                            author: {
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
                            comments_url: string;
                            commit: {
                                author: {
                                    date: string;
                                    email: string;
                                    name: string;
                                };
                                comment_count: number;
                                committer: {
                                    date: string;
                                    email: string;
                                    name: string;
                                };
                                message: string;
                                tree: {
                                    sha: string;
                                    url: string;
                                };
                                url: string;
                                verification: {
                                    payload: string;
                                    reason: string;
                                    signature: string;
                                    verified: boolean;
                                };
                            };
                            committer: {
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
                            html_url: string;
                            node_id: string;
                            parents: {
                                sha: string;
                                url: string;
                            }[];
                            sha: string;
                            url: string;
                        };
                        patch_url: string;
                        permalink_url: string;
                        status: string;
                        total_commits: number;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, base, head }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
