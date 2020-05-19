import * as tsgen from "./engine";
export const allPaths = ["/repos/{owner}/{repo}/assignees/{assignee}", "/repos/{owner}/{repo}/automated-security-fixes", "/repos/{owner}/{repo}/branches", "/repos/{owner}/{repo}/branches/{branch}", "/repos/{owner}/{repo}/branches/{branch}/protection", "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "/repos/{owner}/{repo}/check-runs", "/repos/{owner}/{repo}/check-runs/{check_run_id}", "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", "/repos/{owner}/{repo}/check-suites", "/repos/{owner}/{repo}/check-suites/preferences", "/repos/{owner}/{repo}/check-suites/{check_suite_id}"];
export type Paths = "/repos/{owner}/{repo}/assignees/{assignee}" | "/repos/{owner}/{repo}/automated-security-fixes" | "/repos/{owner}/{repo}/branches" | "/repos/{owner}/{repo}/branches/{branch}" | "/repos/{owner}/{repo}/branches/{branch}/protection" | "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins" | "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews" | "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures" | "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks" | "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts" | "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions" | "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps" | "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams" | "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users" | "/repos/{owner}/{repo}/check-runs" | "/repos/{owner}/{repo}/check-runs/{check_run_id}" | "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations" | "/repos/{owner}/{repo}/check-suites" | "/repos/{owner}/{repo}/check-suites/preferences" | "/repos/{owner}/{repo}/check-suites/{check_suite_id}";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/repos/{owner}/{repo}/assignees/{assignee}" ? {
    get: (owner: string, repo: string, assignee: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 404;
    }>;
} : P extends "/repos/{owner}/{repo}/automated-security-fixes" ? {
    delete: (owner: string, repo: string, accept: string) => Promise<{
        status: 204;
    }>;
    put: (owner: string, repo: string, accept: string) => Promise<{
        status: 204;
    }>;
} : P extends "/repos/{owner}/{repo}/branches" ? {
    get: (owner: string, repo: string, protected?: boolean, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            commit: {
                sha: string;
                url: string;
            };
            name: string;
            protected: boolean;
            protection: {
                enabled: boolean;
                required_status_checks: {
                    contexts: string[];
                    enforcement_level: string;
                };
            };
            protection_url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}" ? {
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
            _links: {
                html: string;
                self: string;
            };
            commit: {
                author: {
                    avatar_url: string;
                    gravatar_id: string;
                    id: number;
                    login: string;
                    url: string;
                };
                commit: {
                    author: {
                        date: string;
                        email: string;
                        name: string;
                    };
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
                    gravatar_id: string;
                    id: number;
                    login: string;
                    url: string;
                };
                node_id: string;
                parents: {
                    sha: string;
                    url: string;
                }[];
                sha: string;
                url: string;
            };
            name: string;
            protected: boolean;
            protection: {
                enabled: boolean;
                required_status_checks: {
                    contexts: string[];
                    enforcement_level: string;
                };
            };
            protection_url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
            allow_deletions: {
                enabled: boolean;
            };
            allow_force_pushes: {
                enabled: boolean;
            };
            enforce_admins: {
                enabled: boolean;
                url: string;
            };
            required_linear_history: {
                enabled: boolean;
            };
            required_pull_request_reviews: {
                dismiss_stale_reviews: boolean;
                dismissal_restrictions: {
                    teams: {
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
                    teams_url: string;
                    url: string;
                    users: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
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
                    users_url: string;
                };
                require_code_owner_reviews: boolean;
                required_approving_review_count: number;
                url: string;
            };
            required_status_checks: {
                contexts: string[];
                contexts_url: string;
                strict: boolean;
                url: string;
            };
            restrictions: {
                apps: {
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
                }[];
                apps_url: string;
                teams: {
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
                teams_url: string;
                url: string;
                users: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
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
                users_url: string;
            };
            url: string;
        };
    }>;
    put: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
            allow_deletions: {
                enabled: boolean;
            };
            allow_force_pushes: {
                enabled: boolean;
            };
            enforce_admins: {
                enabled: boolean;
                url: string;
            };
            required_linear_history: {
                enabled: boolean;
            };
            required_pull_request_reviews: {
                dismiss_stale_reviews: boolean;
                dismissal_restrictions: {
                    teams: {
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
                    teams_url: string;
                    url: string;
                    users: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
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
                    users_url: string;
                };
                require_code_owner_reviews: boolean;
                required_approving_review_count: number;
                url: string;
            };
            required_status_checks: {
                contexts: string[];
                contexts_url: string;
                strict: boolean;
                url: string;
            };
            restrictions: {
                apps: {
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
                }[];
                apps_url: string;
                teams: {
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
                teams_url: string;
                url: string;
                users: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
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
                users_url: string;
            };
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 418;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
            enabled: boolean;
            url: string;
        };
    }>;
    post: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
            enabled: boolean;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 418;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
            dismiss_stale_reviews: boolean;
            dismissal_restrictions: {
                teams: {
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
                teams_url: string;
                url: string;
                users: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
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
                users_url: string;
            };
            require_code_owner_reviews: boolean;
            required_approving_review_count: number;
            url: string;
        };
    }>;
    patch: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
            dismiss_stale_reviews: boolean;
            dismissal_restrictions: {
                teams: {
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
                teams_url: string;
                url: string;
                users: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
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
                users_url: string;
            };
            require_code_owner_reviews: boolean;
            required_approving_review_count: number;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures" ? {
    delete: (owner: string, repo: string, branch: string, accept: string) => Promise<{
        status: 418;
    }>;
    get: (owner: string, repo: string, branch: string, accept: string) => Promise<{
        status: 200;
        data: {
            enabled: boolean;
            url: string;
        };
    }>;
    post: (owner: string, repo: string, branch: string, accept: string) => Promise<{
        status: 200;
        data: {
            enabled: boolean;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 418;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
            contexts: string[];
            contexts_url: string;
            strict: boolean;
            url: string;
        };
    }>;
    patch: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
            contexts: string[];
            contexts_url: string;
            strict: boolean;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: string[];
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: string[];
    }>;
    post: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: string[];
    }>;
    put: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: string[];
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 418;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
            apps: {
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
            }[];
            apps_url: string;
            teams: {
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
            teams_url: string;
            url: string;
            users: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
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
            users_url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
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
        }[];
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
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
        }[];
    }>;
    post: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
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
        }[];
    }>;
    put: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        status: 200;
        data: {
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
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    post: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    put: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    post: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    put: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/check-runs" ? {
    post: (owner: string, repo: string, accept: string) => Promise<{
        status: 201;
        data: {
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
        };
    }>;
} : P extends "/repos/{owner}/{repo}/check-runs/{check_run_id}" ? {
    get: (owner: string, repo: string, checkRunId: number, accept: string) => Promise<{
        status: 200;
        data: {
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
        };
    }>;
    patch: (owner: string, repo: string, checkRunId: number, accept: string) => Promise<{
        status: 200;
        data: {
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
        };
    }>;
} : P extends "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations" ? {
    get: (owner: string, repo: string, checkRunId: number, accept: string, perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            annotation_level: string;
            end_column: number;
            end_line: number;
            message: string;
            path: string;
            raw_details: string;
            start_column: number;
            start_line: number;
            title: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/check-suites" ? {
    post: (owner: string, repo: string, accept: string) => Promise<{
        status: 201;
        data: {
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
        };
    }>;
} : P extends "/repos/{owner}/{repo}/check-suites/preferences" ? {
    patch: (owner: string, repo: string, accept: string) => Promise<{
        status: 200;
        data: {
            preferences: {
                auto_trigger_checks: {
                    app_id: number;
                    setting: boolean;
                }[];
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
        };
    }>;
} : P extends "/repos/{owner}/{repo}/check-suites/{check_suite_id}" ? {
    get: (owner: string, repo: string, checkSuiteId: number, accept: string) => Promise<{
        status: 200;
        data: {
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
        };
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/repos/{owner}/{repo}/assignees/{assignee}" ? {
    get: (owner: string, repo: string, assignee: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 404;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/automated-security-fixes" ? {
    delete: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 204;
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
} : P extends "/repos/{owner}/{repo}/branches" ? {
    get: (owner: string, repo: string, protected?: boolean, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                commit: {
                    sha: string;
                    url: string;
                };
                name: string;
                protected: boolean;
                protection: {
                    enabled: boolean;
                    required_status_checks: {
                        contexts: string[];
                        enforcement_level: string;
                    };
                };
                protection_url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}" ? {
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                _links: {
                    html: string;
                    self: string;
                };
                commit: {
                    author: {
                        avatar_url: string;
                        gravatar_id: string;
                        id: number;
                        login: string;
                        url: string;
                    };
                    commit: {
                        author: {
                            date: string;
                            email: string;
                            name: string;
                        };
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
                        gravatar_id: string;
                        id: number;
                        login: string;
                        url: string;
                    };
                    node_id: string;
                    parents: {
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
                    url: string;
                };
                name: string;
                protected: boolean;
                protection: {
                    enabled: boolean;
                    required_status_checks: {
                        contexts: string[];
                        enforcement_level: string;
                    };
                };
                protection_url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                allow_deletions: {
                    enabled: boolean;
                };
                allow_force_pushes: {
                    enabled: boolean;
                };
                enforce_admins: {
                    enabled: boolean;
                    url: string;
                };
                required_linear_history: {
                    enabled: boolean;
                };
                required_pull_request_reviews: {
                    dismiss_stale_reviews: boolean;
                    dismissal_restrictions: {
                        teams: {
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
                        teams_url: string;
                        url: string;
                        users: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
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
                        users_url: string;
                    };
                    require_code_owner_reviews: boolean;
                    required_approving_review_count: number;
                    url: string;
                };
                required_status_checks: {
                    contexts: string[];
                    contexts_url: string;
                    strict: boolean;
                    url: string;
                };
                restrictions: {
                    apps: {
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
                    }[];
                    apps_url: string;
                    teams: {
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
                    teams_url: string;
                    url: string;
                    users: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
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
                    users_url: string;
                };
                url: string;
            };
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                allow_deletions: {
                    enabled: boolean;
                };
                allow_force_pushes: {
                    enabled: boolean;
                };
                enforce_admins: {
                    enabled: boolean;
                    url: string;
                };
                required_linear_history: {
                    enabled: boolean;
                };
                required_pull_request_reviews: {
                    dismiss_stale_reviews: boolean;
                    dismissal_restrictions: {
                        teams: {
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
                        teams_url: string;
                        url: string;
                        users: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
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
                        users_url: string;
                    };
                    require_code_owner_reviews: boolean;
                    required_approving_review_count: number;
                    url: string;
                };
                required_status_checks: {
                    contexts: string[];
                    contexts_url: string;
                    strict: boolean;
                    url: string;
                };
                restrictions: {
                    apps: {
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
                    }[];
                    apps_url: string;
                    teams: {
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
                    teams_url: string;
                    url: string;
                    users: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
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
                    users_url: string;
                };
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                enabled: boolean;
                url: string;
            };
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                enabled: boolean;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                dismiss_stale_reviews: boolean;
                dismissal_restrictions: {
                    teams: {
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
                    teams_url: string;
                    url: string;
                    users: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
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
                    users_url: string;
                };
                require_code_owner_reviews: boolean;
                required_approving_review_count: number;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                dismiss_stale_reviews: boolean;
                dismissal_restrictions: {
                    teams: {
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
                    teams_url: string;
                    url: string;
                    users: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
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
                    users_url: string;
                };
                require_code_owner_reviews: boolean;
                required_approving_review_count: number;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures" ? {
    delete: (owner: string, repo: string, branch: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, branch: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                enabled: boolean;
                url: string;
            };
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, branch: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                enabled: boolean;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                contexts: string[];
                contexts_url: string;
                strict: boolean;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                contexts: string[];
                contexts_url: string;
                strict: boolean;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: string[];
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: string[];
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: string[];
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: string[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                apps: {
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
                }[];
                apps_url: string;
                teams: {
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
                teams_url: string;
                url: string;
                users: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
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
                users_url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
            }[];
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
            }[];
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
            }[];
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    post: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    put: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users" ? {
    delete: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    get: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    post: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
    put: (owner: string, repo: string, branch: string, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/check-runs" ? {
    post: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
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
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/check-runs/{check_run_id}" ? {
    get: (owner: string, repo: string, checkRunId: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
            };
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, checkRunId: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations" ? {
    get: (owner: string, repo: string, checkRunId: number, accept: string, perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                annotation_level: string;
                end_column: number;
                end_line: number;
                message: string;
                path: string;
                raw_details: string;
                start_column: number;
                start_line: number;
                title: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/check-suites" ? {
    post: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
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
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/check-suites/preferences" ? {
    patch: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                preferences: {
                    auto_trigger_checks: {
                        app_id: number;
                        setting: boolean;
                    }[];
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
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/check-suites/{check_suite_id}" ? {
    get: (owner: string, repo: string, checkSuiteId: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
            };
        };
        headers: object;
    }>;
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/repos/{owner}/{repo}/assignees/{assignee}": return { get: (owner: string, repo: string, assignee: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, assignee }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/automated-security-fixes": return { delete: (owner: string, repo: string, accept: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, accept: string): Promise<{
                status: 204;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches": return { get: (owner: string, repo: string, protected?: boolean, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    commit: {
                        sha: string;
                        url: string;
                    };
                    name: string;
                    protected: boolean;
                    protection: {
                        enabled: boolean;
                        required_status_checks: {
                            contexts: string[];
                            enforcement_level: string;
                        };
                    };
                    protection_url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { protected, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}": return { get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
                    _links: {
                        html: string;
                        self: string;
                    };
                    commit: {
                        author: {
                            avatar_url: string;
                            gravatar_id: string;
                            id: number;
                            login: string;
                            url: string;
                        };
                        commit: {
                            author: {
                                date: string;
                                email: string;
                                name: string;
                            };
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
                            gravatar_id: string;
                            id: number;
                            login: string;
                            url: string;
                        };
                        node_id: string;
                        parents: {
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
                        url: string;
                    };
                    name: string;
                    protected: boolean;
                    protection: {
                        enabled: boolean;
                        required_status_checks: {
                            contexts: string[];
                            enforcement_level: string;
                        };
                    };
                    protection_url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
                    allow_deletions: {
                        enabled: boolean;
                    };
                    allow_force_pushes: {
                        enabled: boolean;
                    };
                    enforce_admins: {
                        enabled: boolean;
                        url: string;
                    };
                    required_linear_history: {
                        enabled: boolean;
                    };
                    required_pull_request_reviews: {
                        dismiss_stale_reviews: boolean;
                        dismissal_restrictions: {
                            teams: {
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
                            teams_url: string;
                            url: string;
                            users: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
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
                            users_url: string;
                        };
                        require_code_owner_reviews: boolean;
                        required_approving_review_count: number;
                        url: string;
                    };
                    required_status_checks: {
                        contexts: string[];
                        contexts_url: string;
                        strict: boolean;
                        url: string;
                    };
                    restrictions: {
                        apps: {
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
                        }[];
                        apps_url: string;
                        teams: {
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
                        teams_url: string;
                        url: string;
                        users: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
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
                        users_url: string;
                    };
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
                    allow_deletions: {
                        enabled: boolean;
                    };
                    allow_force_pushes: {
                        enabled: boolean;
                    };
                    enforce_admins: {
                        enabled: boolean;
                        url: string;
                    };
                    required_linear_history: {
                        enabled: boolean;
                    };
                    required_pull_request_reviews: {
                        dismiss_stale_reviews: boolean;
                        dismissal_restrictions: {
                            teams: {
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
                            teams_url: string;
                            url: string;
                            users: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
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
                            users_url: string;
                        };
                        require_code_owner_reviews: boolean;
                        required_approving_review_count: number;
                        url: string;
                    };
                    required_status_checks: {
                        contexts: string[];
                        contexts_url: string;
                        strict: boolean;
                        url: string;
                    };
                    restrictions: {
                        apps: {
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
                        }[];
                        apps_url: string;
                        teams: {
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
                        teams_url: string;
                        url: string;
                        users: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
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
                        users_url: string;
                    };
                    url: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
                    enabled: boolean;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
                    enabled: boolean;
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
                    dismiss_stale_reviews: boolean;
                    dismissal_restrictions: {
                        teams: {
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
                        teams_url: string;
                        url: string;
                        users: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
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
                        users_url: string;
                    };
                    require_code_owner_reviews: boolean;
                    required_approving_review_count: number;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
                    dismiss_stale_reviews: boolean;
                    dismissal_restrictions: {
                        teams: {
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
                        teams_url: string;
                        url: string;
                        users: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
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
                        users_url: string;
                    };
                    require_code_owner_reviews: boolean;
                    required_approving_review_count: number;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures": return { delete: (owner: string, repo: string, branch: string, accept: string): Promise<{
                status: 418;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept: string): Promise<{
                status: 200;
                data: {
                    enabled: boolean;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept: string): Promise<{
                status: 200;
                data: {
                    enabled: boolean;
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
                    contexts: string[];
                    contexts_url: string;
                    strict: boolean;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
                    contexts: string[];
                    contexts_url: string;
                    strict: boolean;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: string[];
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: string[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: string[];
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: string[];
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
                    apps: {
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
                    }[];
                    apps_url: string;
                    teams: {
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
                    teams_url: string;
                    url: string;
                    users: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
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
                    users_url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
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
                }[];
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
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
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
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
                }[];
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                status: 200;
                data: {
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
                }[];
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-runs": return { post: (owner: string, repo: string, accept: string): Promise<{
                status: 201;
                data: {
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
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-runs/{check_run_id}": return { get: (owner: string, repo: string, checkRunId: number, accept: string): Promise<{
                status: 200;
                data: {
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
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, checkRunId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, checkRunId: number, accept: string): Promise<{
                status: 200;
                data: {
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
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, checkRunId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations": return { get: (owner: string, repo: string, checkRunId: number, accept: string, perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    annotation_level: string;
                    end_column: number;
                    end_line: number;
                    message: string;
                    path: string;
                    raw_details: string;
                    start_column: number;
                    start_line: number;
                    title: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, checkRunId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-suites": return { post: (owner: string, repo: string, accept: string): Promise<{
                status: 201;
                data: {
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
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-suites/preferences": return { patch: (owner: string, repo: string, accept: string): Promise<{
                status: 200;
                data: {
                    preferences: {
                        auto_trigger_checks: {
                            app_id: number;
                            setting: boolean;
                        }[];
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
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-suites/{check_suite_id}": return { get: (owner: string, repo: string, checkSuiteId: number, accept: string): Promise<{
                status: 200;
                data: {
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
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, checkSuiteId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/repos/{owner}/{repo}/assignees/{assignee}": return { get: (owner: string, repo: string, assignee: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, assignee }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/automated-security-fixes": return { delete: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches": return { get: (owner: string, repo: string, protected?: boolean, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        commit: {
                            sha: string;
                            url: string;
                        };
                        name: string;
                        protected: boolean;
                        protection: {
                            enabled: boolean;
                            required_status_checks: {
                                contexts: string[];
                                enforcement_level: string;
                            };
                        };
                        protection_url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { protected, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}": return { get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        _links: {
                            html: string;
                            self: string;
                        };
                        commit: {
                            author: {
                                avatar_url: string;
                                gravatar_id: string;
                                id: number;
                                login: string;
                                url: string;
                            };
                            commit: {
                                author: {
                                    date: string;
                                    email: string;
                                    name: string;
                                };
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
                                gravatar_id: string;
                                id: number;
                                login: string;
                                url: string;
                            };
                            node_id: string;
                            parents: {
                                sha: string;
                                url: string;
                            }[];
                            sha: string;
                            url: string;
                        };
                        name: string;
                        protected: boolean;
                        protection: {
                            enabled: boolean;
                            required_status_checks: {
                                contexts: string[];
                                enforcement_level: string;
                            };
                        };
                        protection_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        allow_deletions: {
                            enabled: boolean;
                        };
                        allow_force_pushes: {
                            enabled: boolean;
                        };
                        enforce_admins: {
                            enabled: boolean;
                            url: string;
                        };
                        required_linear_history: {
                            enabled: boolean;
                        };
                        required_pull_request_reviews: {
                            dismiss_stale_reviews: boolean;
                            dismissal_restrictions: {
                                teams: {
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
                                teams_url: string;
                                url: string;
                                users: {
                                    avatar_url: string;
                                    events_url: string;
                                    followers_url: string;
                                    following_url: string;
                                    gists_url: string;
                                    gravatar_id: string;
                                    html_url: string;
                                    id: number;
                                    login: string;
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
                                users_url: string;
                            };
                            require_code_owner_reviews: boolean;
                            required_approving_review_count: number;
                            url: string;
                        };
                        required_status_checks: {
                            contexts: string[];
                            contexts_url: string;
                            strict: boolean;
                            url: string;
                        };
                        restrictions: {
                            apps: {
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
                            }[];
                            apps_url: string;
                            teams: {
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
                            teams_url: string;
                            url: string;
                            users: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
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
                            users_url: string;
                        };
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        allow_deletions: {
                            enabled: boolean;
                        };
                        allow_force_pushes: {
                            enabled: boolean;
                        };
                        enforce_admins: {
                            enabled: boolean;
                            url: string;
                        };
                        required_linear_history: {
                            enabled: boolean;
                        };
                        required_pull_request_reviews: {
                            dismiss_stale_reviews: boolean;
                            dismissal_restrictions: {
                                teams: {
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
                                teams_url: string;
                                url: string;
                                users: {
                                    avatar_url: string;
                                    events_url: string;
                                    followers_url: string;
                                    following_url: string;
                                    gists_url: string;
                                    gravatar_id: string;
                                    html_url: string;
                                    id: number;
                                    login: string;
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
                                users_url: string;
                            };
                            require_code_owner_reviews: boolean;
                            required_approving_review_count: number;
                            url: string;
                        };
                        required_status_checks: {
                            contexts: string[];
                            contexts_url: string;
                            strict: boolean;
                            url: string;
                        };
                        restrictions: {
                            apps: {
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
                            }[];
                            apps_url: string;
                            teams: {
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
                            teams_url: string;
                            url: string;
                            users: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
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
                            users_url: string;
                        };
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        enabled: boolean;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        enabled: boolean;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        dismiss_stale_reviews: boolean;
                        dismissal_restrictions: {
                            teams: {
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
                            teams_url: string;
                            url: string;
                            users: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
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
                            users_url: string;
                        };
                        require_code_owner_reviews: boolean;
                        required_approving_review_count: number;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        dismiss_stale_reviews: boolean;
                        dismissal_restrictions: {
                            teams: {
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
                            teams_url: string;
                            url: string;
                            users: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
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
                            users_url: string;
                        };
                        require_code_owner_reviews: boolean;
                        required_approving_review_count: number;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures": return { delete: (owner: string, repo: string, branch: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        enabled: boolean;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        enabled: boolean;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        contexts: string[];
                        contexts_url: string;
                        strict: boolean;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        contexts: string[];
                        contexts_url: string;
                        strict: boolean;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: string[];
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: string[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: string[];
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: string[];
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        apps: {
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
                        }[];
                        apps_url: string;
                        teams: {
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
                        teams_url: string;
                        url: string;
                        users: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
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
                        users_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, branch: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users": return { delete: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), get: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, branch: string, accept?: string): Promise<{
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
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, branch }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-runs": return { post: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
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
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-runs/{check_run_id}": return { get: (owner: string, repo: string, checkRunId: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, checkRunId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, checkRunId: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, checkRunId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations": return { get: (owner: string, repo: string, checkRunId: number, accept: string, perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        annotation_level: string;
                        end_column: number;
                        end_line: number;
                        message: string;
                        path: string;
                        raw_details: string;
                        start_column: number;
                        start_line: number;
                        title: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, checkRunId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-suites": return { post: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
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
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-suites/preferences": return { patch: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        preferences: {
                            auto_trigger_checks: {
                                app_id: number;
                                setting: boolean;
                            }[];
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
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/check-suites/{check_suite_id}": return { get: (owner: string, repo: string, checkSuiteId: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, checkSuiteId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
