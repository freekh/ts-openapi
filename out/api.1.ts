import * as tsgen from "./engine";
export const allPaths = ["/events", "/feeds", "/gists", "/gists/public", "/gists/starred", "/gists/{gist_id}", "/gists/{gist_id}/comments", "/gists/{gist_id}/comments/{comment_id}", "/gists/{gist_id}/commits", "/gists/{gist_id}/forks", "/gists/{gist_id}/star", "/gists/{gist_id}/{sha}", "/gitignore/templates", "/gitignore/templates/{name}", "/installation/repositories", "/installation/token", "/issues", "/legacy/issues/search/{owner}/{repository}/{state}/{keyword}", "/legacy/repos/search/{keyword}", "/legacy/user/email/{email}"];
export type Paths = "/events" | "/feeds" | "/gists" | "/gists/public" | "/gists/starred" | "/gists/{gist_id}" | "/gists/{gist_id}/comments" | "/gists/{gist_id}/comments/{comment_id}" | "/gists/{gist_id}/commits" | "/gists/{gist_id}/forks" | "/gists/{gist_id}/star" | "/gists/{gist_id}/{sha}" | "/gitignore/templates" | "/gitignore/templates/{name}" | "/installation/repositories" | "/installation/token" | "/issues" | "/legacy/issues/search/{owner}/{repository}/{state}/{keyword}" | "/legacy/repos/search/{keyword}" | "/legacy/user/email/{email}";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/events" ? {
    get: (perPage?: number, page?: number, accept?: string) => Promise<{
        status: 418;
    }>;
} : P extends "/feeds" ? {
    get: (accept?: string) => Promise<{
        status: 200;
        data: {
            _links: {
                current_user: {
                    href: string;
                    type: string;
                };
                current_user_actor: {
                    href: string;
                    type: string;
                };
                current_user_organization: {
                    href: string;
                    type: string;
                };
                current_user_organizations: {
                    href: string;
                    type: string;
                }[];
                current_user_public: {
                    href: string;
                    type: string;
                };
                security_advisories: {
                    href: string;
                    type: string;
                };
                timeline: {
                    href: string;
                    type: string;
                };
                user: {
                    href: string;
                    type: string;
                };
            };
            current_user_actor_url: string;
            current_user_organization_url: string;
            current_user_organization_urls: string[];
            current_user_public_url: string;
            current_user_url: string;
            security_advisories_url: string;
            timeline_url: string;
            user_url: string;
        };
    }>;
} : P extends "/gists" ? {
    get: (since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            comments: number;
            comments_url: string;
            commits_url: string;
            created_at: string;
            description: string;
            files: any;
            forks_url: string;
            git_pull_url: string;
            git_push_url: string;
            html_url: string;
            id: string;
            node_id: string;
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
            public: boolean;
            truncated: boolean;
            updated_at: string;
            url: string;
            user: string;
        }[];
    }>;
    post: (accept?: string) => Promise<{
        status: 201;
        data: {
            comments: number;
            comments_url: string;
            commits_url: string;
            created_at: string;
            description: string;
            files: any;
            forks: {
                created_at: string;
                id: string;
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
            forks_url: string;
            git_pull_url: string;
            git_push_url: string;
            history: {
                change_status: {
                    additions: number;
                    deletions: number;
                    total: number;
                };
                committed_at: string;
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
                version: string;
            }[];
            html_url: string;
            id: string;
            node_id: string;
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
            public: boolean;
            truncated: boolean;
            updated_at: string;
            url: string;
            user: string;
        };
    }>;
} : P extends "/gists/public" ? {
    get: (since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            comments: number;
            comments_url: string;
            commits_url: string;
            created_at: string;
            description: string;
            files: any;
            forks_url: string;
            git_pull_url: string;
            git_push_url: string;
            html_url: string;
            id: string;
            node_id: string;
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
            public: boolean;
            truncated: boolean;
            updated_at: string;
            url: string;
            user: string;
        }[];
    }>;
} : P extends "/gists/starred" ? {
    get: (since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            comments: number;
            comments_url: string;
            commits_url: string;
            created_at: string;
            description: string;
            files: any;
            forks_url: string;
            git_pull_url: string;
            git_push_url: string;
            html_url: string;
            id: string;
            node_id: string;
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
            public: boolean;
            truncated: boolean;
            updated_at: string;
            url: string;
            user: string;
        }[];
    }>;
} : P extends "/gists/{gist_id}" ? {
    delete: (gistId: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (gistId: string, accept?: string) => Promise<{
        status: 200;
        data: {
            comments: number;
            comments_url: string;
            commits_url: string;
            created_at: string;
            description: string;
            files: any;
            forks: {
                created_at: string;
                id: string;
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
            forks_url: string;
            git_pull_url: string;
            git_push_url: string;
            history: {
                change_status: {
                    additions: number;
                    deletions: number;
                    total: number;
                };
                committed_at: string;
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
                version: string;
            }[];
            html_url: string;
            id: string;
            node_id: string;
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
            public: boolean;
            truncated: boolean;
            updated_at: string;
            url: string;
            user: string;
        };
    }>;
    patch: (gistId: string, accept?: string) => Promise<{
        status: 200;
        data: {
            comments: number;
            comments_url: string;
            commits_url: string;
            created_at: string;
            description: string;
            files: any;
            forks: {
                created_at: string;
                id: string;
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
            forks_url: string;
            git_pull_url: string;
            git_push_url: string;
            history: {
                change_status: {
                    additions: number;
                    deletions: number;
                    total: number;
                };
                committed_at: string;
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
                version: string;
            }[];
            html_url: string;
            id: string;
            node_id: string;
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
            public: boolean;
            truncated: boolean;
            updated_at: string;
            url: string;
            user: string;
        };
    }>;
} : P extends "/gists/{gist_id}/comments" ? {
    get: (gistId: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            created_at: string;
            id: number;
            node_id: string;
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
    post: (gistId: string, accept?: string) => Promise<{
        status: 201;
        data: {
            body: string;
            created_at: string;
            id: number;
            node_id: string;
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
} : P extends "/gists/{gist_id}/comments/{comment_id}" ? {
    delete: (gistId: string, commentId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (gistId: string, commentId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            created_at: string;
            id: number;
            node_id: string;
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
    patch: (gistId: string, commentId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            created_at: string;
            id: number;
            node_id: string;
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
} : P extends "/gists/{gist_id}/commits" ? {
    get: (gistId: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            change_status: {
                additions: number;
                deletions: number;
                total: number;
            };
            committed_at: string;
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
            version: string;
        }[];
    }>;
} : P extends "/gists/{gist_id}/forks" ? {
    get: (gistId: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            id: string;
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
    post: (gistId: string, accept?: string) => Promise<{
        status: 201;
        data: {
            comments: number;
            comments_url: string;
            commits_url: string;
            created_at: string;
            description: string;
            files: any;
            forks_url: string;
            git_pull_url: string;
            git_push_url: string;
            html_url: string;
            id: string;
            node_id: string;
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
            public: boolean;
            truncated: boolean;
            updated_at: string;
            url: string;
            user: string;
        };
    }>;
} : P extends "/gists/{gist_id}/star" ? {
    delete: (gistId: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (gistId: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 404;
    }>;
    put: (gistId: string, accept?: string) => Promise<{
        status: 204;
    }>;
} : P extends "/gists/{gist_id}/{sha}" ? {
    get: (gistId: string, sha: string, accept?: string) => Promise<{
        status: 200;
        data: {
            comments: number;
            comments_url: string;
            commits_url: string;
            created_at: string;
            description: string;
            files: any;
            forks: {
                created_at: string;
                id: string;
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
            forks_url: string;
            git_pull_url: string;
            git_push_url: string;
            history: {
                change_status: {
                    additions: number;
                    deletions: number;
                    total: number;
                };
                committed_at: string;
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
                version: string;
            }[];
            html_url: string;
            id: string;
            node_id: string;
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
            public: boolean;
            truncated: boolean;
            updated_at: string;
            url: string;
            user: string;
        };
    }>;
} : P extends "/gitignore/templates" ? {
    get: (accept?: string) => Promise<{
        status: 200;
        data: string[];
    }>;
} : P extends "/gitignore/templates/{name}" ? {
    get: (name: string, accept?: string) => Promise<{
        status: 200;
        data: {
            name: string;
            source: string;
        };
    }>;
} : P extends "/installation/repositories" ? {
    get: (accept: string, perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            repositories: {
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
            }[];
            total_count: number;
        };
    }>;
} : P extends "/installation/token" ? {
    delete: (accept: string) => Promise<{
        status: 204;
    }>;
} : P extends "/issues" ? {
    get: (filter?: "assigned" | "created" | "mentioned" | "subscribed" | "all", state?: "open" | "closed" | "all", labels?: string, sort?: "created" | "updated" | "comments", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                url: string;
            }[];
            labels_url: string;
            locked: boolean;
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
            pull_request: {
                diff_url: string;
                html_url: string;
                patch_url: string;
                url: string;
            };
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
            repository_url: string;
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
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
        }[];
    }>;
} : P extends "/legacy/issues/search/{owner}/{repository}/{state}/{keyword}" ? {
    get: (owner: string, repository: string, state: "open" | "closed", keyword: string, accept?: string) => Promise<{
        status: 200;
        data: {
            issues: {
                body: string;
                comments: number;
                created_at: string;
                gravatar_id: string;
                html_url: string;
                labels: string[];
                number: number;
                position: number;
                state: string;
                title: string;
                updated_at: string;
                user: string;
                votes: number;
            }[];
        };
    }>;
} : P extends "/legacy/repos/search/{keyword}" ? {
    get: (keyword: string, language?: string, startPage?: string, sort?: "stars" | "forks" | "updated", order?: "asc" | "desc", accept?: string) => Promise<{
        status: 200;
        data: {
            repositories: {
                created: string;
                created_at: string;
                description: string;
                followers: number;
                fork: boolean;
                forks: number;
                has_downloads: boolean;
                has_issues: boolean;
                has_wiki: boolean;
                homepage: string;
                language: string;
                name: string;
                open_issues: number;
                owner: string;
                private: boolean;
                pushed: string;
                pushed_at: string;
                score: number;
                size: number;
                type: string;
                url: string;
                username: string;
                watchers: number;
            }[];
        };
    }>;
} : P extends "/legacy/user/email/{email}" ? {
    get: (email: string, accept?: string) => Promise<{
        status: 200;
        data: {
            user: {
                blog: string;
                company: string;
                created: string;
                created_at: string;
                email: string;
                followers_count: number;
                following_count: number;
                gravatar_id: string;
                id: number;
                location: string;
                login: string;
                name: string;
                public_gist_count: number;
                public_repo_count: number;
                type: string;
            };
        };
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/events" ? {
    get: (perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
} : P extends "/feeds" ? {
    get: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                _links: {
                    current_user: {
                        href: string;
                        type: string;
                    };
                    current_user_actor: {
                        href: string;
                        type: string;
                    };
                    current_user_organization: {
                        href: string;
                        type: string;
                    };
                    current_user_organizations: {
                        href: string;
                        type: string;
                    }[];
                    current_user_public: {
                        href: string;
                        type: string;
                    };
                    security_advisories: {
                        href: string;
                        type: string;
                    };
                    timeline: {
                        href: string;
                        type: string;
                    };
                    user: {
                        href: string;
                        type: string;
                    };
                };
                current_user_actor_url: string;
                current_user_organization_url: string;
                current_user_organization_urls: string[];
                current_user_public_url: string;
                current_user_url: string;
                security_advisories_url: string;
                timeline_url: string;
                user_url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/gists" ? {
    get: (since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                comments: number;
                comments_url: string;
                commits_url: string;
                created_at: string;
                description: string;
                files: any;
                forks_url: string;
                git_pull_url: string;
                git_push_url: string;
                html_url: string;
                id: string;
                node_id: string;
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
                public: boolean;
                truncated: boolean;
                updated_at: string;
                url: string;
                user: string;
            }[];
        };
        headers: object;
    }>;
    post: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                comments: number;
                comments_url: string;
                commits_url: string;
                created_at: string;
                description: string;
                files: any;
                forks: {
                    created_at: string;
                    id: string;
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
                forks_url: string;
                git_pull_url: string;
                git_push_url: string;
                history: {
                    change_status: {
                        additions: number;
                        deletions: number;
                        total: number;
                    };
                    committed_at: string;
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
                    version: string;
                }[];
                html_url: string;
                id: string;
                node_id: string;
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
                public: boolean;
                truncated: boolean;
                updated_at: string;
                url: string;
                user: string;
            };
        };
        headers: object;
    }>;
} : P extends "/gists/public" ? {
    get: (since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                comments: number;
                comments_url: string;
                commits_url: string;
                created_at: string;
                description: string;
                files: any;
                forks_url: string;
                git_pull_url: string;
                git_push_url: string;
                html_url: string;
                id: string;
                node_id: string;
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
                public: boolean;
                truncated: boolean;
                updated_at: string;
                url: string;
                user: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/gists/starred" ? {
    get: (since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                comments: number;
                comments_url: string;
                commits_url: string;
                created_at: string;
                description: string;
                files: any;
                forks_url: string;
                git_pull_url: string;
                git_push_url: string;
                html_url: string;
                id: string;
                node_id: string;
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
                public: boolean;
                truncated: boolean;
                updated_at: string;
                url: string;
                user: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/gists/{gist_id}" ? {
    delete: (gistId: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (gistId: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                comments: number;
                comments_url: string;
                commits_url: string;
                created_at: string;
                description: string;
                files: any;
                forks: {
                    created_at: string;
                    id: string;
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
                forks_url: string;
                git_pull_url: string;
                git_push_url: string;
                history: {
                    change_status: {
                        additions: number;
                        deletions: number;
                        total: number;
                    };
                    committed_at: string;
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
                    version: string;
                }[];
                html_url: string;
                id: string;
                node_id: string;
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
                public: boolean;
                truncated: boolean;
                updated_at: string;
                url: string;
                user: string;
            };
        };
        headers: object;
    }>;
    patch: (gistId: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                comments: number;
                comments_url: string;
                commits_url: string;
                created_at: string;
                description: string;
                files: any;
                forks: {
                    created_at: string;
                    id: string;
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
                forks_url: string;
                git_pull_url: string;
                git_push_url: string;
                history: {
                    change_status: {
                        additions: number;
                        deletions: number;
                        total: number;
                    };
                    committed_at: string;
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
                    version: string;
                }[];
                html_url: string;
                id: string;
                node_id: string;
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
                public: boolean;
                truncated: boolean;
                updated_at: string;
                url: string;
                user: string;
            };
        };
        headers: object;
    }>;
} : P extends "/gists/{gist_id}/comments" ? {
    get: (gistId: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                created_at: string;
                id: number;
                node_id: string;
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
    post: (gistId: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                body: string;
                created_at: string;
                id: number;
                node_id: string;
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
} : P extends "/gists/{gist_id}/comments/{comment_id}" ? {
    delete: (gistId: string, commentId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (gistId: string, commentId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                created_at: string;
                id: number;
                node_id: string;
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
    patch: (gistId: string, commentId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                created_at: string;
                id: number;
                node_id: string;
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
} : P extends "/gists/{gist_id}/commits" ? {
    get: (gistId: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                change_status: {
                    additions: number;
                    deletions: number;
                    total: number;
                };
                committed_at: string;
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
                version: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/gists/{gist_id}/forks" ? {
    get: (gistId: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                created_at: string;
                id: string;
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
    post: (gistId: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                comments: number;
                comments_url: string;
                commits_url: string;
                created_at: string;
                description: string;
                files: any;
                forks_url: string;
                git_pull_url: string;
                git_push_url: string;
                html_url: string;
                id: string;
                node_id: string;
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
                public: boolean;
                truncated: boolean;
                updated_at: string;
                url: string;
                user: string;
            };
        };
        headers: object;
    }>;
} : P extends "/gists/{gist_id}/star" ? {
    delete: (gistId: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (gistId: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 404;
        };
        headers: object;
    }>;
    put: (gistId: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/gists/{gist_id}/{sha}" ? {
    get: (gistId: string, sha: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                comments: number;
                comments_url: string;
                commits_url: string;
                created_at: string;
                description: string;
                files: any;
                forks: {
                    created_at: string;
                    id: string;
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
                forks_url: string;
                git_pull_url: string;
                git_push_url: string;
                history: {
                    change_status: {
                        additions: number;
                        deletions: number;
                        total: number;
                    };
                    committed_at: string;
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
                    version: string;
                }[];
                html_url: string;
                id: string;
                node_id: string;
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
                public: boolean;
                truncated: boolean;
                updated_at: string;
                url: string;
                user: string;
            };
        };
        headers: object;
    }>;
} : P extends "/gitignore/templates" ? {
    get: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: string[];
        };
        headers: object;
    }>;
} : P extends "/gitignore/templates/{name}" ? {
    get: (name: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                name: string;
                source: string;
            };
        };
        headers: object;
    }>;
} : P extends "/installation/repositories" ? {
    get: (accept: string, perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                repositories: {
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
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/installation/token" ? {
    delete: (accept: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/issues" ? {
    get: (filter?: "assigned" | "created" | "mentioned" | "subscribed" | "all", state?: "open" | "closed" | "all", labels?: string, sort?: "created" | "updated" | "comments", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                }[];
                labels_url: string;
                locked: boolean;
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
                pull_request: {
                    diff_url: string;
                    html_url: string;
                    patch_url: string;
                    url: string;
                };
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
                repository_url: string;
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
} : P extends "/legacy/issues/search/{owner}/{repository}/{state}/{keyword}" ? {
    get: (owner: string, repository: string, state: "open" | "closed", keyword: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                issues: {
                    body: string;
                    comments: number;
                    created_at: string;
                    gravatar_id: string;
                    html_url: string;
                    labels: string[];
                    number: number;
                    position: number;
                    state: string;
                    title: string;
                    updated_at: string;
                    user: string;
                    votes: number;
                }[];
            };
        };
        headers: object;
    }>;
} : P extends "/legacy/repos/search/{keyword}" ? {
    get: (keyword: string, language?: string, startPage?: string, sort?: "stars" | "forks" | "updated", order?: "asc" | "desc", accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                repositories: {
                    created: string;
                    created_at: string;
                    description: string;
                    followers: number;
                    fork: boolean;
                    forks: number;
                    has_downloads: boolean;
                    has_issues: boolean;
                    has_wiki: boolean;
                    homepage: string;
                    language: string;
                    name: string;
                    open_issues: number;
                    owner: string;
                    private: boolean;
                    pushed: string;
                    pushed_at: string;
                    score: number;
                    size: number;
                    type: string;
                    url: string;
                    username: string;
                    watchers: number;
                }[];
            };
        };
        headers: object;
    }>;
} : P extends "/legacy/user/email/{email}" ? {
    get: (email: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                user: {
                    blog: string;
                    company: string;
                    created: string;
                    created_at: string;
                    email: string;
                    followers_count: number;
                    following_count: number;
                    gravatar_id: string;
                    id: number;
                    location: string;
                    login: string;
                    name: string;
                    public_gist_count: number;
                    public_repo_count: number;
                    type: string;
                };
            };
        };
        headers: object;
    }>;
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/events": return { get: (perPage?: number, page?: number, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/feeds": return { get: (accept?: string): Promise<{
                status: 200;
                data: {
                    _links: {
                        current_user: {
                            href: string;
                            type: string;
                        };
                        current_user_actor: {
                            href: string;
                            type: string;
                        };
                        current_user_organization: {
                            href: string;
                            type: string;
                        };
                        current_user_organizations: {
                            href: string;
                            type: string;
                        }[];
                        current_user_public: {
                            href: string;
                            type: string;
                        };
                        security_advisories: {
                            href: string;
                            type: string;
                        };
                        timeline: {
                            href: string;
                            type: string;
                        };
                        user: {
                            href: string;
                            type: string;
                        };
                    };
                    current_user_actor_url: string;
                    current_user_organization_url: string;
                    current_user_organization_urls: string[];
                    current_user_public_url: string;
                    current_user_url: string;
                    security_advisories_url: string;
                    timeline_url: string;
                    user_url: string;
                };
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists": return { get: (since?: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    comments: number;
                    comments_url: string;
                    commits_url: string;
                    created_at: string;
                    description: string;
                    files: any;
                    forks_url: string;
                    git_pull_url: string;
                    git_push_url: string;
                    html_url: string;
                    id: string;
                    node_id: string;
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
                    public: boolean;
                    truncated: boolean;
                    updated_at: string;
                    url: string;
                    user: string;
                }[];
            }> => engine.process(handle("get", p, { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (accept?: string): Promise<{
                status: 201;
                data: {
                    comments: number;
                    comments_url: string;
                    commits_url: string;
                    created_at: string;
                    description: string;
                    files: any;
                    forks: {
                        created_at: string;
                        id: string;
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
                    forks_url: string;
                    git_pull_url: string;
                    git_push_url: string;
                    history: {
                        change_status: {
                            additions: number;
                            deletions: number;
                            total: number;
                        };
                        committed_at: string;
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
                        version: string;
                    }[];
                    html_url: string;
                    id: string;
                    node_id: string;
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
                    public: boolean;
                    truncated: boolean;
                    updated_at: string;
                    url: string;
                    user: string;
                };
            }> => engine.process(handle("post", p, {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/public": return { get: (since?: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    comments: number;
                    comments_url: string;
                    commits_url: string;
                    created_at: string;
                    description: string;
                    files: any;
                    forks_url: string;
                    git_pull_url: string;
                    git_push_url: string;
                    html_url: string;
                    id: string;
                    node_id: string;
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
                    public: boolean;
                    truncated: boolean;
                    updated_at: string;
                    url: string;
                    user: string;
                }[];
            }> => engine.process(handle("get", p, { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/starred": return { get: (since?: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    comments: number;
                    comments_url: string;
                    commits_url: string;
                    created_at: string;
                    description: string;
                    files: any;
                    forks_url: string;
                    git_pull_url: string;
                    git_push_url: string;
                    html_url: string;
                    id: string;
                    node_id: string;
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
                    public: boolean;
                    truncated: boolean;
                    updated_at: string;
                    url: string;
                    user: string;
                }[];
            }> => engine.process(handle("get", p, { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}": return { delete: (gistId: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (gistId: string, accept?: string): Promise<{
                status: 200;
                data: {
                    comments: number;
                    comments_url: string;
                    commits_url: string;
                    created_at: string;
                    description: string;
                    files: any;
                    forks: {
                        created_at: string;
                        id: string;
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
                    forks_url: string;
                    git_pull_url: string;
                    git_push_url: string;
                    history: {
                        change_status: {
                            additions: number;
                            deletions: number;
                            total: number;
                        };
                        committed_at: string;
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
                        version: string;
                    }[];
                    html_url: string;
                    id: string;
                    node_id: string;
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
                    public: boolean;
                    truncated: boolean;
                    updated_at: string;
                    url: string;
                    user: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (gistId: string, accept?: string): Promise<{
                status: 200;
                data: {
                    comments: number;
                    comments_url: string;
                    commits_url: string;
                    created_at: string;
                    description: string;
                    files: any;
                    forks: {
                        created_at: string;
                        id: string;
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
                    forks_url: string;
                    git_pull_url: string;
                    git_push_url: string;
                    history: {
                        change_status: {
                            additions: number;
                            deletions: number;
                            total: number;
                        };
                        committed_at: string;
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
                        version: string;
                    }[];
                    html_url: string;
                    id: string;
                    node_id: string;
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
                    public: boolean;
                    truncated: boolean;
                    updated_at: string;
                    url: string;
                    user: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/comments": return { get: (gistId: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    created_at: string;
                    id: number;
                    node_id: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (gistId: string, accept?: string): Promise<{
                status: 201;
                data: {
                    body: string;
                    created_at: string;
                    id: number;
                    node_id: string;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/comments/{comment_id}": return { delete: (gistId: string, commentId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { gistId, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (gistId: string, commentId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    created_at: string;
                    id: number;
                    node_id: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (gistId: string, commentId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    created_at: string;
                    id: number;
                    node_id: string;
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { gistId, commentId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/commits": return { get: (gistId: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    change_status: {
                        additions: number;
                        deletions: number;
                        total: number;
                    };
                    committed_at: string;
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
                    version: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/forks": return { get: (gistId: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    id: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (gistId: string, accept?: string): Promise<{
                status: 201;
                data: {
                    comments: number;
                    comments_url: string;
                    commits_url: string;
                    created_at: string;
                    description: string;
                    files: any;
                    forks_url: string;
                    git_pull_url: string;
                    git_push_url: string;
                    html_url: string;
                    id: string;
                    node_id: string;
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
                    public: boolean;
                    truncated: boolean;
                    updated_at: string;
                    url: string;
                    user: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/star": return { delete: (gistId: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (gistId: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (gistId: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/{sha}": return { get: (gistId: string, sha: string, accept?: string): Promise<{
                status: 200;
                data: {
                    comments: number;
                    comments_url: string;
                    commits_url: string;
                    created_at: string;
                    description: string;
                    files: any;
                    forks: {
                        created_at: string;
                        id: string;
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
                    forks_url: string;
                    git_pull_url: string;
                    git_push_url: string;
                    history: {
                        change_status: {
                            additions: number;
                            deletions: number;
                            total: number;
                        };
                        committed_at: string;
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
                        version: string;
                    }[];
                    html_url: string;
                    id: string;
                    node_id: string;
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
                    public: boolean;
                    truncated: boolean;
                    updated_at: string;
                    url: string;
                    user: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId, sha }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gitignore/templates": return { get: (accept?: string): Promise<{
                status: 200;
                data: string[];
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gitignore/templates/{name}": return { get: (name: string, accept?: string): Promise<{
                status: 200;
                data: {
                    name: string;
                    source: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { name }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/installation/repositories": return { get: (accept: string, perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    repositories: {
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
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/installation/token": return { delete: (accept: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/issues": return { get: (filter?: "assigned" | "created" | "mentioned" | "subscribed" | "all", state?: "open" | "closed" | "all", labels?: string, sort?: "created" | "updated" | "comments", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
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
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    }[];
                    labels_url: string;
                    locked: boolean;
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
                    pull_request: {
                        diff_url: string;
                        html_url: string;
                        patch_url: string;
                        url: string;
                    };
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
                    repository_url: string;
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
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                }[];
            }> => engine.process(handle("get", p, { filter, state, labels, sort, direction, since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/legacy/issues/search/{owner}/{repository}/{state}/{keyword}": return { get: (owner: string, repository: string, state: "open" | "closed", keyword: string, accept?: string): Promise<{
                status: 200;
                data: {
                    issues: {
                        body: string;
                        comments: number;
                        created_at: string;
                        gravatar_id: string;
                        html_url: string;
                        labels: string[];
                        number: number;
                        position: number;
                        state: string;
                        title: string;
                        updated_at: string;
                        user: string;
                        votes: number;
                    }[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repository, state, keyword }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/legacy/repos/search/{keyword}": return { get: (keyword: string, language?: string, startPage?: string, sort?: "stars" | "forks" | "updated", order?: "asc" | "desc", accept?: string): Promise<{
                status: 200;
                data: {
                    repositories: {
                        created: string;
                        created_at: string;
                        description: string;
                        followers: number;
                        fork: boolean;
                        forks: number;
                        has_downloads: boolean;
                        has_issues: boolean;
                        has_wiki: boolean;
                        homepage: string;
                        language: string;
                        name: string;
                        open_issues: number;
                        owner: string;
                        private: boolean;
                        pushed: string;
                        pushed_at: string;
                        score: number;
                        size: number;
                        type: string;
                        url: string;
                        username: string;
                        watchers: number;
                    }[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { keyword }), { language, startPage, sort, order }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/legacy/user/email/{email}": return { get: (email: string, accept?: string): Promise<{
                status: 200;
                data: {
                    user: {
                        blog: string;
                        company: string;
                        created: string;
                        created_at: string;
                        email: string;
                        followers_count: number;
                        following_count: number;
                        gravatar_id: string;
                        id: number;
                        location: string;
                        login: string;
                        name: string;
                        public_gist_count: number;
                        public_repo_count: number;
                        type: string;
                    };
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { email }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/events": return { get: (perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/feeds": return { get: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        _links: {
                            current_user: {
                                href: string;
                                type: string;
                            };
                            current_user_actor: {
                                href: string;
                                type: string;
                            };
                            current_user_organization: {
                                href: string;
                                type: string;
                            };
                            current_user_organizations: {
                                href: string;
                                type: string;
                            }[];
                            current_user_public: {
                                href: string;
                                type: string;
                            };
                            security_advisories: {
                                href: string;
                                type: string;
                            };
                            timeline: {
                                href: string;
                                type: string;
                            };
                            user: {
                                href: string;
                                type: string;
                            };
                        };
                        current_user_actor_url: string;
                        current_user_organization_url: string;
                        current_user_organization_urls: string[];
                        current_user_public_url: string;
                        current_user_url: string;
                        security_advisories_url: string;
                        timeline_url: string;
                        user_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists": return { get: (since?: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        comments: number;
                        comments_url: string;
                        commits_url: string;
                        created_at: string;
                        description: string;
                        files: any;
                        forks_url: string;
                        git_pull_url: string;
                        git_push_url: string;
                        html_url: string;
                        id: string;
                        node_id: string;
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
                        public: boolean;
                        truncated: boolean;
                        updated_at: string;
                        url: string;
                        user: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        comments: number;
                        comments_url: string;
                        commits_url: string;
                        created_at: string;
                        description: string;
                        files: any;
                        forks: {
                            created_at: string;
                            id: string;
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
                        forks_url: string;
                        git_pull_url: string;
                        git_push_url: string;
                        history: {
                            change_status: {
                                additions: number;
                                deletions: number;
                                total: number;
                            };
                            committed_at: string;
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
                            version: string;
                        }[];
                        html_url: string;
                        id: string;
                        node_id: string;
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
                        public: boolean;
                        truncated: boolean;
                        updated_at: string;
                        url: string;
                        user: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", p, {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/public": return { get: (since?: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        comments: number;
                        comments_url: string;
                        commits_url: string;
                        created_at: string;
                        description: string;
                        files: any;
                        forks_url: string;
                        git_pull_url: string;
                        git_push_url: string;
                        html_url: string;
                        id: string;
                        node_id: string;
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
                        public: boolean;
                        truncated: boolean;
                        updated_at: string;
                        url: string;
                        user: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/starred": return { get: (since?: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        comments: number;
                        comments_url: string;
                        commits_url: string;
                        created_at: string;
                        description: string;
                        files: any;
                        forks_url: string;
                        git_pull_url: string;
                        git_push_url: string;
                        html_url: string;
                        id: string;
                        node_id: string;
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
                        public: boolean;
                        truncated: boolean;
                        updated_at: string;
                        url: string;
                        user: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}": return { delete: (gistId: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (gistId: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        comments: number;
                        comments_url: string;
                        commits_url: string;
                        created_at: string;
                        description: string;
                        files: any;
                        forks: {
                            created_at: string;
                            id: string;
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
                        forks_url: string;
                        git_pull_url: string;
                        git_push_url: string;
                        history: {
                            change_status: {
                                additions: number;
                                deletions: number;
                                total: number;
                            };
                            committed_at: string;
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
                            version: string;
                        }[];
                        html_url: string;
                        id: string;
                        node_id: string;
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
                        public: boolean;
                        truncated: boolean;
                        updated_at: string;
                        url: string;
                        user: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (gistId: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        comments: number;
                        comments_url: string;
                        commits_url: string;
                        created_at: string;
                        description: string;
                        files: any;
                        forks: {
                            created_at: string;
                            id: string;
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
                        forks_url: string;
                        git_pull_url: string;
                        git_push_url: string;
                        history: {
                            change_status: {
                                additions: number;
                                deletions: number;
                                total: number;
                            };
                            committed_at: string;
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
                            version: string;
                        }[];
                        html_url: string;
                        id: string;
                        node_id: string;
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
                        public: boolean;
                        truncated: boolean;
                        updated_at: string;
                        url: string;
                        user: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/comments": return { get: (gistId: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        created_at: string;
                        id: number;
                        node_id: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (gistId: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        body: string;
                        created_at: string;
                        id: number;
                        node_id: string;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/comments/{comment_id}": return { delete: (gistId: string, commentId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { gistId, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (gistId: string, commentId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        created_at: string;
                        id: number;
                        node_id: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (gistId: string, commentId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        created_at: string;
                        id: number;
                        node_id: string;
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { gistId, commentId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/commits": return { get: (gistId: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        change_status: {
                            additions: number;
                            deletions: number;
                            total: number;
                        };
                        committed_at: string;
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
                        version: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/forks": return { get: (gistId: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        created_at: string;
                        id: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (gistId: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        comments: number;
                        comments_url: string;
                        commits_url: string;
                        created_at: string;
                        description: string;
                        files: any;
                        forks_url: string;
                        git_pull_url: string;
                        git_push_url: string;
                        html_url: string;
                        id: string;
                        node_id: string;
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
                        public: boolean;
                        truncated: boolean;
                        updated_at: string;
                        url: string;
                        user: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/star": return { delete: (gistId: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (gistId: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (gistId: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { gistId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gists/{gist_id}/{sha}": return { get: (gistId: string, sha: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        comments: number;
                        comments_url: string;
                        commits_url: string;
                        created_at: string;
                        description: string;
                        files: any;
                        forks: {
                            created_at: string;
                            id: string;
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
                        forks_url: string;
                        git_pull_url: string;
                        git_push_url: string;
                        history: {
                            change_status: {
                                additions: number;
                                deletions: number;
                                total: number;
                            };
                            committed_at: string;
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
                            version: string;
                        }[];
                        html_url: string;
                        id: string;
                        node_id: string;
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
                        public: boolean;
                        truncated: boolean;
                        updated_at: string;
                        url: string;
                        user: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { gistId, sha }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gitignore/templates": return { get: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: string[];
                };
                headers: object;
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/gitignore/templates/{name}": return { get: (name: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        name: string;
                        source: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { name }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/installation/repositories": return { get: (accept: string, perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        repositories: {
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
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/installation/token": return { delete: (accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/issues": return { get: (filter?: "assigned" | "created" | "mentioned" | "subscribed" | "all", state?: "open" | "closed" | "all", labels?: string, sort?: "created" | "updated" | "comments", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                            default: boolean;
                            description: string;
                            id: number;
                            name: string;
                            node_id: string;
                            url: string;
                        }[];
                        labels_url: string;
                        locked: boolean;
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
                        pull_request: {
                            diff_url: string;
                            html_url: string;
                            patch_url: string;
                            url: string;
                        };
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
                        repository_url: string;
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
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { filter, state, labels, sort, direction, since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/legacy/issues/search/{owner}/{repository}/{state}/{keyword}": return { get: (owner: string, repository: string, state: "open" | "closed", keyword: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        issues: {
                            body: string;
                            comments: number;
                            created_at: string;
                            gravatar_id: string;
                            html_url: string;
                            labels: string[];
                            number: number;
                            position: number;
                            state: string;
                            title: string;
                            updated_at: string;
                            user: string;
                            votes: number;
                        }[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repository, state, keyword }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/legacy/repos/search/{keyword}": return { get: (keyword: string, language?: string, startPage?: string, sort?: "stars" | "forks" | "updated", order?: "asc" | "desc", accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        repositories: {
                            created: string;
                            created_at: string;
                            description: string;
                            followers: number;
                            fork: boolean;
                            forks: number;
                            has_downloads: boolean;
                            has_issues: boolean;
                            has_wiki: boolean;
                            homepage: string;
                            language: string;
                            name: string;
                            open_issues: number;
                            owner: string;
                            private: boolean;
                            pushed: string;
                            pushed_at: string;
                            score: number;
                            size: number;
                            type: string;
                            url: string;
                            username: string;
                            watchers: number;
                        }[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { keyword }), { language, startPage, sort, order }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/legacy/user/email/{email}": return { get: (email: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        user: {
                            blog: string;
                            company: string;
                            created: string;
                            created_at: string;
                            email: string;
                            followers_count: number;
                            following_count: number;
                            gravatar_id: string;
                            id: number;
                            location: string;
                            login: string;
                            name: string;
                            public_gist_count: number;
                            public_repo_count: number;
                            type: string;
                        };
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { email }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
