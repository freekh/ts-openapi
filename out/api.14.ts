import * as tsgen from "./engine";
export const allPaths = ["/repos/{owner}/{repo}/tags", "/repos/{owner}/{repo}/teams", "/repos/{owner}/{repo}/topics", "/repos/{owner}/{repo}/traffic/clones", "/repos/{owner}/{repo}/traffic/popular/paths", "/repos/{owner}/{repo}/traffic/popular/referrers", "/repos/{owner}/{repo}/traffic/views", "/repos/{owner}/{repo}/transfer", "/repos/{owner}/{repo}/vulnerability-alerts", "/repos/{owner}/{repo}/{archive_format}/{ref}", "/repos/{template_owner}/{template_repo}/generate", "/repositories", "/scim/v2/organizations/{org}/Users", "/scim/v2/organizations/{org}/Users/{scim_user_id}", "/search/code", "/search/commits", "/search/issues", "/search/labels", "/search/repositories", "/search/topics"];
export type Paths = "/repos/{owner}/{repo}/tags" | "/repos/{owner}/{repo}/teams" | "/repos/{owner}/{repo}/topics" | "/repos/{owner}/{repo}/traffic/clones" | "/repos/{owner}/{repo}/traffic/popular/paths" | "/repos/{owner}/{repo}/traffic/popular/referrers" | "/repos/{owner}/{repo}/traffic/views" | "/repos/{owner}/{repo}/transfer" | "/repos/{owner}/{repo}/vulnerability-alerts" | "/repos/{owner}/{repo}/{archive_format}/{ref}" | "/repos/{template_owner}/{template_repo}/generate" | "/repositories" | "/scim/v2/organizations/{org}/Users" | "/scim/v2/organizations/{org}/Users/{scim_user_id}" | "/search/code" | "/search/commits" | "/search/issues" | "/search/labels" | "/search/repositories" | "/search/topics";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/repos/{owner}/{repo}/tags" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            commit: {
                sha: string;
                url: string;
            };
            name: string;
            tarball_url: string;
            zipball_url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/teams" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
    }>;
} : P extends "/repos/{owner}/{repo}/topics" ? {
    get: (owner: string, repo: string, accept: string) => Promise<{
        status: 200;
        data: {
            names: string[];
        };
    }>;
    put: (owner: string, repo: string, accept: string) => Promise<{
        status: 200;
        data: {
            names: string[];
        };
    }>;
} : P extends "/repos/{owner}/{repo}/traffic/clones" ? {
    get: (owner: string, repo: string, per?: "day" | "week", accept?: string) => Promise<{
        status: 200;
        data: {
            clones: {
                count: number;
                timestamp: string;
                uniques: number;
            }[];
            count: number;
            uniques: number;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/traffic/popular/paths" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            count: number;
            path: string;
            title: string;
            uniques: number;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/traffic/popular/referrers" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            count: number;
            referrer: string;
            uniques: number;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/traffic/views" ? {
    get: (owner: string, repo: string, per?: "day" | "week", accept?: string) => Promise<{
        status: 200;
        data: {
            count: number;
            uniques: number;
            views: {
                count: number;
                timestamp: string;
                uniques: number;
            }[];
        };
    }>;
} : P extends "/repos/{owner}/{repo}/transfer" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 202;
        data: {
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
    }>;
} : P extends "/repos/{owner}/{repo}/vulnerability-alerts" ? {
    delete: (owner: string, repo: string, accept: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, accept: string) => Promise<{
        status: 204;
    } | {
        status: 404;
    }>;
    put: (owner: string, repo: string, accept: string) => Promise<{
        status: 204;
    }>;
} : P extends "/repos/{owner}/{repo}/{archive_format}/{ref}" ? {
    get: (owner: string, repo: string, archiveFormat: string, ref: string, accept?: string) => Promise<{
        status: 302;
    }>;
} : P extends "/repos/{template_owner}/{template_repo}/generate" ? {
    post: (templateOwner: string, templateRepo: string, accept: string) => Promise<{
        status: 201;
        data: {
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
            template_repository: {
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
            topics: string[];
            trees_url: string;
            updated_at: string;
            url: string;
            visibility: string;
            watchers_count: number;
        };
    }>;
} : P extends "/repositories" ? {
    get: (since?: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
        }[];
    }>;
} : P extends "/scim/v2/organizations/{org}/Users" ? {
    get: (org: string, startIndex?: number, count?: number, filter?: string, accept?: string) => Promise<{
        status: 200;
        data: {
            Resources: {
                active: boolean;
                emails: {
                    primary: boolean;
                    type: string;
                    value: string;
                }[];
                externalId: string;
                id: string;
                meta: {
                    created: string;
                    lastModified: string;
                    location: string;
                    resourceType: string;
                };
                name: {
                    familyName: string;
                    givenName: string;
                };
                schemas: string[];
                userName: string;
            }[];
            itemsPerPage: number;
            schemas: string[];
            startIndex: number;
            totalResults: number;
        };
    }>;
    post: (org: string, accept?: string) => Promise<{
        status: 201;
        data: {
            active: boolean;
            emails: {
                primary: boolean;
                type: string;
                value: string;
            }[];
            externalId: string;
            id: string;
            meta: {
                created: string;
                lastModified: string;
                location: string;
                resourceType: string;
            };
            name: {
                familyName: string;
                givenName: string;
            };
            schemas: string[];
            userName: string;
        };
    }>;
} : P extends "/scim/v2/organizations/{org}/Users/{scim_user_id}" ? {
    delete: (org: string, scimUserId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (org: string, scimUserId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            active: boolean;
            emails: {
                primary: boolean;
                type: string;
                value: string;
            }[];
            externalId: string;
            id: string;
            meta: {
                created: string;
                lastModified: string;
                location: string;
                resourceType: string;
            };
            name: {
                familyName: string;
                givenName: string;
            };
            schemas: string[];
            userName: string;
        };
    }>;
    patch: (org: string, scimUserId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            active: boolean;
            emails: {
                primary: boolean;
                type: string;
                value: string;
            }[];
            externalId: string;
            id: string;
            meta: {
                created: string;
                lastModified: string;
                location: string;
                resourceType: string;
            };
            name: {
                familyName: string;
                givenName: string;
            };
            schemas: string[];
            userName: string;
        };
    }>;
    put: (org: string, scimUserId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            active: boolean;
            emails: {
                primary: boolean;
                type: string;
                value: string;
            }[];
            externalId: string;
            id: string;
            meta: {
                created: string;
                lastModified: string;
                location: string;
                resourceType: string;
            };
            name: {
                familyName: string;
                givenName: string;
            };
            schemas: string[];
            userName: string;
        };
    }>;
} : P extends "/search/code" ? {
    get: (q: string, sort?: "indexed", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            incomplete_results: boolean;
            items: {
                git_url: string;
                html_url: string;
                name: string;
                path: string;
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
                    stargazers_url: string;
                    statuses_url: string;
                    subscribers_url: string;
                    subscription_url: string;
                    tags_url: string;
                    teams_url: string;
                    trees_url: string;
                    url: string;
                };
                score: number;
                sha: string;
                url: string;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/search/commits" ? {
    get: (q: string, accept: string, sort?: "author-date" | "committer-date", order?: "desc" | "asc", perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            incomplete_results: boolean;
            items: {
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
                parents: {
                    html_url: string;
                    sha: string;
                    url: string;
                }[];
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
                score: number;
                sha: string;
                url: string;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/search/issues" ? {
    get: (q: string, sort?: "comments" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | "created" | "updated", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            incomplete_results: boolean;
            items: {
                assignee: string;
                body: string;
                closed_at: string;
                comments: number;
                comments_url: string;
                created_at: string;
                events_url: string;
                html_url: string;
                id: number;
                labels: {
                    color: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                }[];
                labels_url: string;
                milestone: string;
                node_id: string;
                number: number;
                pull_request: {
                    diff_url: string;
                    html_url: string;
                    patch_url: string;
                };
                repository_url: string;
                score: number;
                state: string;
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
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
            }[];
            total_count: number;
        };
    }>;
} : P extends "/search/labels" ? {
    get: (repositoryId: number, q: string, sort?: "created" | "updated", order?: "desc" | "asc", accept?: string) => Promise<{
        status: 200;
        data: {
            incomplete_results: boolean;
            items: {
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                score: number;
                url: string;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/search/repositories" ? {
    get: (q: string, sort?: "stars" | "forks" | "help-wanted-issues" | "updated", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            incomplete_results: boolean;
            items: {
                created_at: string;
                default_branch: string;
                description: string;
                fork: boolean;
                forks_count: number;
                full_name: string;
                homepage: string;
                html_url: string;
                id: number;
                language: string;
                master_branch: string;
                name: string;
                node_id: string;
                open_issues_count: number;
                owner: {
                    avatar_url: string;
                    gravatar_id: string;
                    id: number;
                    login: string;
                    node_id: string;
                    received_events_url: string;
                    type: string;
                    url: string;
                };
                private: boolean;
                pushed_at: string;
                score: number;
                size: number;
                stargazers_count: number;
                updated_at: string;
                url: string;
                watchers_count: number;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/search/topics" ? {
    get: (q: string, accept?: string) => Promise<{
        status: 200;
        data: {
            incomplete_results: boolean;
            items: {
                created_at: string;
                created_by: string;
                curated: boolean;
                description: string;
                display_name: string;
                featured: boolean;
                name: string;
                released: string;
                score: number;
                short_description: string;
                updated_at: string;
            }[];
            total_count: number;
        };
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/repos/{owner}/{repo}/tags" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                commit: {
                    sha: string;
                    url: string;
                };
                name: string;
                tarball_url: string;
                zipball_url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/teams" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/topics" ? {
    get: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                names: string[];
            };
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                names: string[];
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/traffic/clones" ? {
    get: (owner: string, repo: string, per?: "day" | "week", accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                clones: {
                    count: number;
                    timestamp: string;
                    uniques: number;
                }[];
                count: number;
                uniques: number;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/traffic/popular/paths" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                count: number;
                path: string;
                title: string;
                uniques: number;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/traffic/popular/referrers" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                count: number;
                referrer: string;
                uniques: number;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/traffic/views" ? {
    get: (owner: string, repo: string, per?: "day" | "week", accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                count: number;
                uniques: number;
                views: {
                    count: number;
                    timestamp: string;
                    uniques: number;
                }[];
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/transfer" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 202;
            data: {
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
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/vulnerability-alerts" ? {
    delete: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 404;
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/{archive_format}/{ref}" ? {
    get: (owner: string, repo: string, archiveFormat: string, ref: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 302;
        };
        headers: object;
    }>;
} : P extends "/repos/{template_owner}/{template_repo}/generate" ? {
    post: (templateOwner: string, templateRepo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
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
                template_repository: {
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
                topics: string[];
                trees_url: string;
                updated_at: string;
                url: string;
                visibility: string;
                watchers_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/repositories" ? {
    get: (since?: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
            }[];
        };
        headers: object;
    }>;
} : P extends "/scim/v2/organizations/{org}/Users" ? {
    get: (org: string, startIndex?: number, count?: number, filter?: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                Resources: {
                    active: boolean;
                    emails: {
                        primary: boolean;
                        type: string;
                        value: string;
                    }[];
                    externalId: string;
                    id: string;
                    meta: {
                        created: string;
                        lastModified: string;
                        location: string;
                        resourceType: string;
                    };
                    name: {
                        familyName: string;
                        givenName: string;
                    };
                    schemas: string[];
                    userName: string;
                }[];
                itemsPerPage: number;
                schemas: string[];
                startIndex: number;
                totalResults: number;
            };
        };
        headers: object;
    }>;
    post: (org: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                active: boolean;
                emails: {
                    primary: boolean;
                    type: string;
                    value: string;
                }[];
                externalId: string;
                id: string;
                meta: {
                    created: string;
                    lastModified: string;
                    location: string;
                    resourceType: string;
                };
                name: {
                    familyName: string;
                    givenName: string;
                };
                schemas: string[];
                userName: string;
            };
        };
        headers: object;
    }>;
} : P extends "/scim/v2/organizations/{org}/Users/{scim_user_id}" ? {
    delete: (org: string, scimUserId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (org: string, scimUserId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                active: boolean;
                emails: {
                    primary: boolean;
                    type: string;
                    value: string;
                }[];
                externalId: string;
                id: string;
                meta: {
                    created: string;
                    lastModified: string;
                    location: string;
                    resourceType: string;
                };
                name: {
                    familyName: string;
                    givenName: string;
                };
                schemas: string[];
                userName: string;
            };
        };
        headers: object;
    }>;
    patch: (org: string, scimUserId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                active: boolean;
                emails: {
                    primary: boolean;
                    type: string;
                    value: string;
                }[];
                externalId: string;
                id: string;
                meta: {
                    created: string;
                    lastModified: string;
                    location: string;
                    resourceType: string;
                };
                name: {
                    familyName: string;
                    givenName: string;
                };
                schemas: string[];
                userName: string;
            };
        };
        headers: object;
    }>;
    put: (org: string, scimUserId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                active: boolean;
                emails: {
                    primary: boolean;
                    type: string;
                    value: string;
                }[];
                externalId: string;
                id: string;
                meta: {
                    created: string;
                    lastModified: string;
                    location: string;
                    resourceType: string;
                };
                name: {
                    familyName: string;
                    givenName: string;
                };
                schemas: string[];
                userName: string;
            };
        };
        headers: object;
    }>;
} : P extends "/search/code" ? {
    get: (q: string, sort?: "indexed", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                incomplete_results: boolean;
                items: {
                    git_url: string;
                    html_url: string;
                    name: string;
                    path: string;
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
                        stargazers_url: string;
                        statuses_url: string;
                        subscribers_url: string;
                        subscription_url: string;
                        tags_url: string;
                        teams_url: string;
                        trees_url: string;
                        url: string;
                    };
                    score: number;
                    sha: string;
                    url: string;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/search/commits" ? {
    get: (q: string, accept: string, sort?: "author-date" | "committer-date", order?: "desc" | "asc", perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                incomplete_results: boolean;
                items: {
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
                    parents: {
                        html_url: string;
                        sha: string;
                        url: string;
                    }[];
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
                    score: number;
                    sha: string;
                    url: string;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/search/issues" ? {
    get: (q: string, sort?: "comments" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | "created" | "updated", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                incomplete_results: boolean;
                items: {
                    assignee: string;
                    body: string;
                    closed_at: string;
                    comments: number;
                    comments_url: string;
                    created_at: string;
                    events_url: string;
                    html_url: string;
                    id: number;
                    labels: {
                        color: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    }[];
                    labels_url: string;
                    milestone: string;
                    node_id: string;
                    number: number;
                    pull_request: {
                        diff_url: string;
                        html_url: string;
                        patch_url: string;
                    };
                    repository_url: string;
                    score: number;
                    state: string;
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
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/search/labels" ? {
    get: (repositoryId: number, q: string, sort?: "created" | "updated", order?: "desc" | "asc", accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                incomplete_results: boolean;
                items: {
                    color: string;
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    score: number;
                    url: string;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/search/repositories" ? {
    get: (q: string, sort?: "stars" | "forks" | "help-wanted-issues" | "updated", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                incomplete_results: boolean;
                items: {
                    created_at: string;
                    default_branch: string;
                    description: string;
                    fork: boolean;
                    forks_count: number;
                    full_name: string;
                    homepage: string;
                    html_url: string;
                    id: number;
                    language: string;
                    master_branch: string;
                    name: string;
                    node_id: string;
                    open_issues_count: number;
                    owner: {
                        avatar_url: string;
                        gravatar_id: string;
                        id: number;
                        login: string;
                        node_id: string;
                        received_events_url: string;
                        type: string;
                        url: string;
                    };
                    private: boolean;
                    pushed_at: string;
                    score: number;
                    size: number;
                    stargazers_count: number;
                    updated_at: string;
                    url: string;
                    watchers_count: number;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/search/topics" ? {
    get: (q: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                incomplete_results: boolean;
                items: {
                    created_at: string;
                    created_by: string;
                    curated: boolean;
                    description: string;
                    display_name: string;
                    featured: boolean;
                    name: string;
                    released: string;
                    score: number;
                    short_description: string;
                    updated_at: string;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/repos/{owner}/{repo}/tags": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    commit: {
                        sha: string;
                        url: string;
                    };
                    name: string;
                    tarball_url: string;
                    zipball_url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/teams": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/topics": return { get: (owner: string, repo: string, accept: string): Promise<{
                status: 200;
                data: {
                    names: string[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, accept: string): Promise<{
                status: 200;
                data: {
                    names: string[];
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/traffic/clones": return { get: (owner: string, repo: string, per?: "day" | "week", accept?: string): Promise<{
                status: 200;
                data: {
                    clones: {
                        count: number;
                        timestamp: string;
                        uniques: number;
                    }[];
                    count: number;
                    uniques: number;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { per }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/traffic/popular/paths": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    count: number;
                    path: string;
                    title: string;
                    uniques: number;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/traffic/popular/referrers": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    count: number;
                    referrer: string;
                    uniques: number;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/traffic/views": return { get: (owner: string, repo: string, per?: "day" | "week", accept?: string): Promise<{
                status: 200;
                data: {
                    count: number;
                    uniques: number;
                    views: {
                        count: number;
                        timestamp: string;
                        uniques: number;
                    }[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { per }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/transfer": return { post: (owner: string, repo: string, accept?: string): Promise<{
                status: 202;
                data: {
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/vulnerability-alerts": return { delete: (owner: string, repo: string, accept: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, accept: string): Promise<{
                status: 204;
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, accept: string): Promise<{
                status: 204;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/{archive_format}/{ref}": return { get: (owner: string, repo: string, archiveFormat: string, ref: string, accept?: string): Promise<{
                status: 302;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, archiveFormat, ref }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{template_owner}/{template_repo}/generate": return { post: (templateOwner: string, templateRepo: string, accept: string): Promise<{
                status: 201;
                data: {
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
                    template_repository: {
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
                    topics: string[];
                    trees_url: string;
                    updated_at: string;
                    url: string;
                    visibility: string;
                    watchers_count: number;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { templateOwner, templateRepo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repositories": return { get: (since?: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
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
                }[];
            }> => engine.process(handle("get", p, { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/scim/v2/organizations/{org}/Users": return { get: (org: string, startIndex?: number, count?: number, filter?: string, accept?: string): Promise<{
                status: 200;
                data: {
                    Resources: {
                        active: boolean;
                        emails: {
                            primary: boolean;
                            type: string;
                            value: string;
                        }[];
                        externalId: string;
                        id: string;
                        meta: {
                            created: string;
                            lastModified: string;
                            location: string;
                            resourceType: string;
                        };
                        name: {
                            familyName: string;
                            givenName: string;
                        };
                        schemas: string[];
                        userName: string;
                    }[];
                    itemsPerPage: number;
                    schemas: string[];
                    startIndex: number;
                    totalResults: number;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { startIndex, count, filter }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, accept?: string): Promise<{
                status: 201;
                data: {
                    active: boolean;
                    emails: {
                        primary: boolean;
                        type: string;
                        value: string;
                    }[];
                    externalId: string;
                    id: string;
                    meta: {
                        created: string;
                        lastModified: string;
                        location: string;
                        resourceType: string;
                    };
                    name: {
                        familyName: string;
                        givenName: string;
                    };
                    schemas: string[];
                    userName: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/scim/v2/organizations/{org}/Users/{scim_user_id}": return { delete: (org: string, scimUserId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, scimUserId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, scimUserId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    active: boolean;
                    emails: {
                        primary: boolean;
                        type: string;
                        value: string;
                    }[];
                    externalId: string;
                    id: string;
                    meta: {
                        created: string;
                        lastModified: string;
                        location: string;
                        resourceType: string;
                    };
                    name: {
                        familyName: string;
                        givenName: string;
                    };
                    schemas: string[];
                    userName: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, scimUserId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (org: string, scimUserId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    active: boolean;
                    emails: {
                        primary: boolean;
                        type: string;
                        value: string;
                    }[];
                    externalId: string;
                    id: string;
                    meta: {
                        created: string;
                        lastModified: string;
                        location: string;
                        resourceType: string;
                    };
                    name: {
                        familyName: string;
                        givenName: string;
                    };
                    schemas: string[];
                    userName: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { org, scimUserId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, scimUserId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    active: boolean;
                    emails: {
                        primary: boolean;
                        type: string;
                        value: string;
                    }[];
                    externalId: string;
                    id: string;
                    meta: {
                        created: string;
                        lastModified: string;
                        location: string;
                        resourceType: string;
                    };
                    name: {
                        familyName: string;
                        givenName: string;
                    };
                    schemas: string[];
                    userName: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, scimUserId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/code": return { get: (q: string, sort?: "indexed", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    incomplete_results: boolean;
                    items: {
                        git_url: string;
                        html_url: string;
                        name: string;
                        path: string;
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
                            stargazers_url: string;
                            statuses_url: string;
                            subscribers_url: string;
                            subscription_url: string;
                            tags_url: string;
                            teams_url: string;
                            trees_url: string;
                            url: string;
                        };
                        score: number;
                        sha: string;
                        url: string;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", p, { q, sort, order, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/commits": return { get: (q: string, accept: string, sort?: "author-date" | "committer-date", order?: "desc" | "asc", perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    incomplete_results: boolean;
                    items: {
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
                        parents: {
                            html_url: string;
                            sha: string;
                            url: string;
                        }[];
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
                        score: number;
                        sha: string;
                        url: string;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", p, { q, sort, order, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/issues": return { get: (q: string, sort?: "comments" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | "created" | "updated", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    incomplete_results: boolean;
                    items: {
                        assignee: string;
                        body: string;
                        closed_at: string;
                        comments: number;
                        comments_url: string;
                        created_at: string;
                        events_url: string;
                        html_url: string;
                        id: number;
                        labels: {
                            color: string;
                            id: number;
                            name: string;
                            node_id: string;
                            url: string;
                        }[];
                        labels_url: string;
                        milestone: string;
                        node_id: string;
                        number: number;
                        pull_request: {
                            diff_url: string;
                            html_url: string;
                            patch_url: string;
                        };
                        repository_url: string;
                        score: number;
                        state: string;
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
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", p, { q, sort, order, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/labels": return { get: (repositoryId: number, q: string, sort?: "created" | "updated", order?: "desc" | "asc", accept?: string): Promise<{
                status: 200;
                data: {
                    incomplete_results: boolean;
                    items: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        score: number;
                        url: string;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", p, { repositoryId, q, sort, order }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/repositories": return { get: (q: string, sort?: "stars" | "forks" | "help-wanted-issues" | "updated", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    incomplete_results: boolean;
                    items: {
                        created_at: string;
                        default_branch: string;
                        description: string;
                        fork: boolean;
                        forks_count: number;
                        full_name: string;
                        homepage: string;
                        html_url: string;
                        id: number;
                        language: string;
                        master_branch: string;
                        name: string;
                        node_id: string;
                        open_issues_count: number;
                        owner: {
                            avatar_url: string;
                            gravatar_id: string;
                            id: number;
                            login: string;
                            node_id: string;
                            received_events_url: string;
                            type: string;
                            url: string;
                        };
                        private: boolean;
                        pushed_at: string;
                        score: number;
                        size: number;
                        stargazers_count: number;
                        updated_at: string;
                        url: string;
                        watchers_count: number;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", p, { q, sort, order, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/topics": return { get: (q: string, accept?: string): Promise<{
                status: 200;
                data: {
                    incomplete_results: boolean;
                    items: {
                        created_at: string;
                        created_by: string;
                        curated: boolean;
                        description: string;
                        display_name: string;
                        featured: boolean;
                        name: string;
                        released: string;
                        score: number;
                        short_description: string;
                        updated_at: string;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", p, { q }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/repos/{owner}/{repo}/tags": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        commit: {
                            sha: string;
                            url: string;
                        };
                        name: string;
                        tarball_url: string;
                        zipball_url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/teams": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/topics": return { get: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        names: string[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        names: string[];
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/traffic/clones": return { get: (owner: string, repo: string, per?: "day" | "week", accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        clones: {
                            count: number;
                            timestamp: string;
                            uniques: number;
                        }[];
                        count: number;
                        uniques: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { per }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/traffic/popular/paths": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        count: number;
                        path: string;
                        title: string;
                        uniques: number;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/traffic/popular/referrers": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        count: number;
                        referrer: string;
                        uniques: number;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/traffic/views": return { get: (owner: string, repo: string, per?: "day" | "week", accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        count: number;
                        uniques: number;
                        views: {
                            count: number;
                            timestamp: string;
                            uniques: number;
                        }[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { per }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/transfer": return { post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 202;
                    data: {
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
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/vulnerability-alerts": return { delete: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/{archive_format}/{ref}": return { get: (owner: string, repo: string, archiveFormat: string, ref: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 302;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, archiveFormat, ref }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{template_owner}/{template_repo}/generate": return { post: (templateOwner: string, templateRepo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
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
                        template_repository: {
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
                        topics: string[];
                        trees_url: string;
                        updated_at: string;
                        url: string;
                        visibility: string;
                        watchers_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { templateOwner, templateRepo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repositories": return { get: (since?: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/scim/v2/organizations/{org}/Users": return { get: (org: string, startIndex?: number, count?: number, filter?: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        Resources: {
                            active: boolean;
                            emails: {
                                primary: boolean;
                                type: string;
                                value: string;
                            }[];
                            externalId: string;
                            id: string;
                            meta: {
                                created: string;
                                lastModified: string;
                                location: string;
                                resourceType: string;
                            };
                            name: {
                                familyName: string;
                                givenName: string;
                            };
                            schemas: string[];
                            userName: string;
                        }[];
                        itemsPerPage: number;
                        schemas: string[];
                        startIndex: number;
                        totalResults: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { startIndex, count, filter }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        active: boolean;
                        emails: {
                            primary: boolean;
                            type: string;
                            value: string;
                        }[];
                        externalId: string;
                        id: string;
                        meta: {
                            created: string;
                            lastModified: string;
                            location: string;
                            resourceType: string;
                        };
                        name: {
                            familyName: string;
                            givenName: string;
                        };
                        schemas: string[];
                        userName: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/scim/v2/organizations/{org}/Users/{scim_user_id}": return { delete: (org: string, scimUserId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, scimUserId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, scimUserId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        active: boolean;
                        emails: {
                            primary: boolean;
                            type: string;
                            value: string;
                        }[];
                        externalId: string;
                        id: string;
                        meta: {
                            created: string;
                            lastModified: string;
                            location: string;
                            resourceType: string;
                        };
                        name: {
                            familyName: string;
                            givenName: string;
                        };
                        schemas: string[];
                        userName: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, scimUserId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (org: string, scimUserId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        active: boolean;
                        emails: {
                            primary: boolean;
                            type: string;
                            value: string;
                        }[];
                        externalId: string;
                        id: string;
                        meta: {
                            created: string;
                            lastModified: string;
                            location: string;
                            resourceType: string;
                        };
                        name: {
                            familyName: string;
                            givenName: string;
                        };
                        schemas: string[];
                        userName: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { org, scimUserId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, scimUserId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        active: boolean;
                        emails: {
                            primary: boolean;
                            type: string;
                            value: string;
                        }[];
                        externalId: string;
                        id: string;
                        meta: {
                            created: string;
                            lastModified: string;
                            location: string;
                            resourceType: string;
                        };
                        name: {
                            familyName: string;
                            givenName: string;
                        };
                        schemas: string[];
                        userName: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, scimUserId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/code": return { get: (q: string, sort?: "indexed", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        incomplete_results: boolean;
                        items: {
                            git_url: string;
                            html_url: string;
                            name: string;
                            path: string;
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
                                stargazers_url: string;
                                statuses_url: string;
                                subscribers_url: string;
                                subscription_url: string;
                                tags_url: string;
                                teams_url: string;
                                trees_url: string;
                                url: string;
                            };
                            score: number;
                            sha: string;
                            url: string;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, { q, sort, order, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/commits": return { get: (q: string, accept: string, sort?: "author-date" | "committer-date", order?: "desc" | "asc", perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        incomplete_results: boolean;
                        items: {
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
                            parents: {
                                html_url: string;
                                sha: string;
                                url: string;
                            }[];
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
                            score: number;
                            sha: string;
                            url: string;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, { q, sort, order, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/issues": return { get: (q: string, sort?: "comments" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | "created" | "updated", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        incomplete_results: boolean;
                        items: {
                            assignee: string;
                            body: string;
                            closed_at: string;
                            comments: number;
                            comments_url: string;
                            created_at: string;
                            events_url: string;
                            html_url: string;
                            id: number;
                            labels: {
                                color: string;
                                id: number;
                                name: string;
                                node_id: string;
                                url: string;
                            }[];
                            labels_url: string;
                            milestone: string;
                            node_id: string;
                            number: number;
                            pull_request: {
                                diff_url: string;
                                html_url: string;
                                patch_url: string;
                            };
                            repository_url: string;
                            score: number;
                            state: string;
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
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, { q, sort, order, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/labels": return { get: (repositoryId: number, q: string, sort?: "created" | "updated", order?: "desc" | "asc", accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        incomplete_results: boolean;
                        items: {
                            color: string;
                            default: boolean;
                            description: string;
                            id: number;
                            name: string;
                            node_id: string;
                            score: number;
                            url: string;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, { repositoryId, q, sort, order }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/repositories": return { get: (q: string, sort?: "stars" | "forks" | "help-wanted-issues" | "updated", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        incomplete_results: boolean;
                        items: {
                            created_at: string;
                            default_branch: string;
                            description: string;
                            fork: boolean;
                            forks_count: number;
                            full_name: string;
                            homepage: string;
                            html_url: string;
                            id: number;
                            language: string;
                            master_branch: string;
                            name: string;
                            node_id: string;
                            open_issues_count: number;
                            owner: {
                                avatar_url: string;
                                gravatar_id: string;
                                id: number;
                                login: string;
                                node_id: string;
                                received_events_url: string;
                                type: string;
                                url: string;
                            };
                            private: boolean;
                            pushed_at: string;
                            score: number;
                            size: number;
                            stargazers_count: number;
                            updated_at: string;
                            url: string;
                            watchers_count: number;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, { q, sort, order, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/search/topics": return { get: (q: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        incomplete_results: boolean;
                        items: {
                            created_at: string;
                            created_by: string;
                            curated: boolean;
                            description: string;
                            display_name: string;
                            featured: boolean;
                            name: string;
                            released: string;
                            score: number;
                            short_description: string;
                            updated_at: string;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, { q }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
