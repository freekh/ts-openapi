import * as tsgen from "./engine";
export const allPaths = ["/legacy/user/search/{keyword}", "/licenses", "/licenses/{license}", "/markdown", "/markdown/raw", "/marketplace_listing/accounts/{account_id}", "/marketplace_listing/plans", "/marketplace_listing/plans/{plan_id}/accounts", "/marketplace_listing/stubbed/accounts/{account_id}", "/marketplace_listing/stubbed/plans", "/marketplace_listing/stubbed/plans/{plan_id}/accounts", "/meta", "/networks/{owner}/{repo}/events", "/notifications", "/notifications/threads/{thread_id}", "/notifications/threads/{thread_id}/subscription", "/organizations", "/orgs/{org}", "/orgs/{org}/blocks", "/orgs/{org}/blocks/{username}"];
export type Paths = "/legacy/user/search/{keyword}" | "/licenses" | "/licenses/{license}" | "/markdown" | "/markdown/raw" | "/marketplace_listing/accounts/{account_id}" | "/marketplace_listing/plans" | "/marketplace_listing/plans/{plan_id}/accounts" | "/marketplace_listing/stubbed/accounts/{account_id}" | "/marketplace_listing/stubbed/plans" | "/marketplace_listing/stubbed/plans/{plan_id}/accounts" | "/meta" | "/networks/{owner}/{repo}/events" | "/notifications" | "/notifications/threads/{thread_id}" | "/notifications/threads/{thread_id}/subscription" | "/organizations" | "/orgs/{org}" | "/orgs/{org}/blocks" | "/orgs/{org}/blocks/{username}";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/legacy/user/search/{keyword}" ? {
    get: (keyword: string, startPage?: string, sort?: "stars" | "forks" | "updated", order?: "asc" | "desc", accept?: string) => Promise<{
        status: 200;
        data: {
            users: {
                created: string;
                created_at: string;
                followers: number;
                followers_count: number;
                fullname: string;
                gravatar_id: string;
                id: string;
                language: string;
                location: string;
                login: string;
                name: string;
                public_repo_count: number;
                repos: number;
                score: number;
                type: string;
                username: string;
            }[];
        };
    }>;
} : P extends "/licenses" ? {
    get: (accept?: string) => Promise<{
        status: 200;
        data: {
            key: string;
            name: string;
            node_id: string;
            spdx_id: string;
            url: string;
        }[];
    }>;
} : P extends "/licenses/{license}" ? {
    get: (license: string, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            conditions: string[];
            description: string;
            featured: boolean;
            html_url: string;
            implementation: string;
            key: string;
            limitations: string[];
            name: string;
            node_id: string;
            permissions: string[];
            spdx_id: string;
            url: string;
        };
    }>;
} : P extends "/markdown" ? {
    post: (accept?: string) => Promise<{
        status: 200;
    }>;
} : P extends "/markdown/raw" ? {
    post: (accept?: string, contentType?: "text/plain; charset=utf-8") => Promise<{
        status: 200;
    }>;
} : P extends "/marketplace_listing/accounts/{account_id}" ? {
    get: (accountId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            email: string;
            id: number;
            login: string;
            marketplace_pending_change: {
                effective_date: string;
                id: number;
                plan: {
                    accounts_url: string;
                    bullets: string[];
                    description: string;
                    has_free_trial: boolean;
                    id: number;
                    monthly_price_in_cents: number;
                    name: string;
                    number: number;
                    price_model: string;
                    state: string;
                    unit_name: string;
                    url: string;
                    yearly_price_in_cents: number;
                };
                unit_count: string;
            };
            marketplace_purchase: {
                billing_cycle: string;
                free_trial_ends_on: string;
                next_billing_date: string;
                on_free_trial: boolean;
                plan: {
                    accounts_url: string;
                    bullets: string[];
                    description: string;
                    has_free_trial: boolean;
                    id: number;
                    monthly_price_in_cents: number;
                    name: string;
                    number: number;
                    price_model: string;
                    state: string;
                    unit_name: string;
                    url: string;
                    yearly_price_in_cents: number;
                };
                unit_count: string;
                updated_at: string;
            };
            organization_billing_email: string;
            type: string;
            url: string;
        };
    }>;
} : P extends "/marketplace_listing/plans" ? {
    get: (perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            accounts_url: string;
            bullets: string[];
            description: string;
            has_free_trial: boolean;
            id: number;
            monthly_price_in_cents: number;
            name: string;
            number: number;
            price_model: string;
            state: string;
            unit_name: string;
            url: string;
            yearly_price_in_cents: number;
        }[];
    }>;
} : P extends "/marketplace_listing/plans/{plan_id}/accounts" ? {
    get: (planId: number, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            email: string;
            id: number;
            login: string;
            marketplace_pending_change: {
                effective_date: string;
                id: number;
                plan: {
                    accounts_url: string;
                    bullets: string[];
                    description: string;
                    has_free_trial: boolean;
                    id: number;
                    monthly_price_in_cents: number;
                    name: string;
                    number: number;
                    price_model: string;
                    state: string;
                    unit_name: string;
                    url: string;
                    yearly_price_in_cents: number;
                };
                unit_count: string;
            };
            marketplace_purchase: {
                billing_cycle: string;
                free_trial_ends_on: string;
                next_billing_date: string;
                on_free_trial: boolean;
                plan: {
                    accounts_url: string;
                    bullets: string[];
                    description: string;
                    has_free_trial: boolean;
                    id: number;
                    monthly_price_in_cents: number;
                    name: string;
                    number: number;
                    price_model: string;
                    state: string;
                    unit_name: string;
                    url: string;
                    yearly_price_in_cents: number;
                };
                unit_count: string;
                updated_at: string;
            };
            organization_billing_email: string;
            type: string;
            url: string;
        }[];
    }>;
} : P extends "/marketplace_listing/stubbed/accounts/{account_id}" ? {
    get: (accountId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            email: string;
            id: number;
            login: string;
            marketplace_pending_change: {
                effective_date: string;
                id: number;
                plan: {
                    accounts_url: string;
                    bullets: string[];
                    description: string;
                    has_free_trial: boolean;
                    id: number;
                    monthly_price_in_cents: number;
                    name: string;
                    number: number;
                    price_model: string;
                    state: string;
                    unit_name: string;
                    url: string;
                    yearly_price_in_cents: number;
                };
                unit_count: string;
            };
            marketplace_purchase: {
                billing_cycle: string;
                free_trial_ends_on: string;
                next_billing_date: string;
                on_free_trial: boolean;
                plan: {
                    accounts_url: string;
                    bullets: string[];
                    description: string;
                    has_free_trial: boolean;
                    id: number;
                    monthly_price_in_cents: number;
                    name: string;
                    number: number;
                    price_model: string;
                    state: string;
                    unit_name: string;
                    url: string;
                    yearly_price_in_cents: number;
                };
                unit_count: string;
                updated_at: string;
            };
            organization_billing_email: string;
            type: string;
            url: string;
        };
    }>;
} : P extends "/marketplace_listing/stubbed/plans" ? {
    get: (perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            accounts_url: string;
            bullets: string[];
            description: string;
            has_free_trial: boolean;
            id: number;
            monthly_price_in_cents: number;
            name: string;
            number: number;
            price_model: string;
            state: string;
            unit_name: string;
            url: string;
            yearly_price_in_cents: number;
        }[];
    }>;
} : P extends "/marketplace_listing/stubbed/plans/{plan_id}/accounts" ? {
    get: (planId: number, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            email: string;
            id: number;
            login: string;
            marketplace_pending_change: {
                effective_date: string;
                id: number;
                plan: {
                    accounts_url: string;
                    bullets: string[];
                    description: string;
                    has_free_trial: boolean;
                    id: number;
                    monthly_price_in_cents: number;
                    name: string;
                    number: number;
                    price_model: string;
                    state: string;
                    unit_name: string;
                    url: string;
                    yearly_price_in_cents: number;
                };
                unit_count: string;
            };
            marketplace_purchase: {
                billing_cycle: string;
                free_trial_ends_on: string;
                next_billing_date: string;
                on_free_trial: boolean;
                plan: {
                    accounts_url: string;
                    bullets: string[];
                    description: string;
                    has_free_trial: boolean;
                    id: number;
                    monthly_price_in_cents: number;
                    name: string;
                    number: number;
                    price_model: string;
                    state: string;
                    unit_name: string;
                    url: string;
                    yearly_price_in_cents: number;
                };
                unit_count: string;
                updated_at: string;
            };
            organization_billing_email: string;
            type: string;
            url: string;
        }[];
    }>;
} : P extends "/meta" ? {
    get: (accept?: string) => Promise<{
        status: 200;
        data: {
            api: string[];
            git: string[];
            hooks: string[];
            importer: string[];
            pages: string[];
            ssh_key_fingerprints: {
                MD5_DSA: string;
                MD5_RSA: string;
                SHA256_DSA: string;
                SHA256_RSA: string;
            };
            verifiable_password_authentication: boolean;
            web: string[];
        };
    }>;
} : P extends "/networks/{owner}/{repo}/events" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 418;
    }>;
} : P extends "/notifications" ? {
    get: (all?: boolean, participating?: boolean, since?: string, before?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            id: string;
            last_read_at: string;
            reason: string;
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
            subject: {
                latest_comment_url: string;
                title: string;
                type: string;
                url: string;
            };
            unread: boolean;
            updated_at: string;
            url: string;
        }[];
    }>;
    put: (accept?: string) => Promise<{
        status: 205;
    }>;
} : P extends "/notifications/threads/{thread_id}" ? {
    get: (threadId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            id: string;
            last_read_at: string;
            reason: string;
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
            subject: {
                latest_comment_url: string;
                title: string;
                type: string;
                url: string;
            };
            unread: boolean;
            updated_at: string;
            url: string;
        };
    }>;
    patch: (threadId: number, accept?: string) => Promise<{
        status: 205;
    }>;
} : P extends "/notifications/threads/{thread_id}/subscription" ? {
    delete: (threadId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (threadId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            ignored: boolean;
            reason: string;
            subscribed: boolean;
            thread_url: string;
            url: string;
        };
    }>;
    put: (threadId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            ignored: boolean;
            reason: string;
            subscribed: boolean;
            thread_url: string;
            url: string;
        };
    }>;
} : P extends "/organizations" ? {
    get: (since?: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
        }[];
    }>;
} : P extends "/orgs/{org}" ? {
    get: (org: string, accept?: string) => Promise<{
        status: 200;
        data: {
            avatar_url: string;
            billing_email: string;
            blog: string;
            collaborators: number;
            company: string;
            created_at: string;
            default_repository_permission: string;
            description: string;
            disk_usage: number;
            email: string;
            events_url: string;
            followers: number;
            following: number;
            has_organization_projects: boolean;
            has_repository_projects: boolean;
            hooks_url: string;
            html_url: string;
            id: number;
            is_verified: boolean;
            issues_url: string;
            location: string;
            login: string;
            members_allowed_repository_creation_type: string;
            members_can_create_internal_repositories: boolean;
            members_can_create_private_repositories: boolean;
            members_can_create_public_repositories: boolean;
            members_can_create_repositories: boolean;
            members_url: string;
            name: string;
            node_id: string;
            owned_private_repos: number;
            plan: {
                name: string;
                private_repos: number;
                space: number;
            };
            private_gists: number;
            public_gists: number;
            public_members_url: string;
            public_repos: number;
            repos_url: string;
            total_private_repos: number;
            two_factor_requirement_enabled: boolean;
            type: string;
            url: string;
        };
    }>;
    patch: (org: string, accept?: string) => Promise<{
        status: 200;
        data: {
            avatar_url: string;
            billing_email: string;
            blog: string;
            collaborators: number;
            company: string;
            created_at: string;
            default_repository_permission: string;
            description: string;
            disk_usage: number;
            email: string;
            events_url: string;
            followers: number;
            following: number;
            has_organization_projects: boolean;
            has_repository_projects: boolean;
            hooks_url: string;
            html_url: string;
            id: number;
            is_verified: boolean;
            issues_url: string;
            location: string;
            login: string;
            members_allowed_repository_creation_type: string;
            members_can_create_internal_repositories: boolean;
            members_can_create_private_repositories: boolean;
            members_can_create_public_repositories: boolean;
            members_can_create_repositories: boolean;
            members_url: string;
            name: string;
            node_id: string;
            owned_private_repos: number;
            plan: {
                name: string;
                private_repos: number;
                space: number;
            };
            private_gists: number;
            public_gists: number;
            public_members_url: string;
            public_repos: number;
            repos_url: string;
            total_private_repos: number;
            two_factor_requirement_enabled: boolean;
            type: string;
            url: string;
        };
    }>;
} : P extends "/orgs/{org}/blocks" ? {
    get: (org: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/blocks/{username}" ? {
    delete: (org: string, username: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (org: string, username: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 404;
    }>;
    put: (org: string, username: string, accept?: string) => Promise<{
        status: 204;
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/legacy/user/search/{keyword}" ? {
    get: (keyword: string, startPage?: string, sort?: "stars" | "forks" | "updated", order?: "asc" | "desc", accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                users: {
                    created: string;
                    created_at: string;
                    followers: number;
                    followers_count: number;
                    fullname: string;
                    gravatar_id: string;
                    id: string;
                    language: string;
                    location: string;
                    login: string;
                    name: string;
                    public_repo_count: number;
                    repos: number;
                    score: number;
                    type: string;
                    username: string;
                }[];
            };
        };
        headers: object;
    }>;
} : P extends "/licenses" ? {
    get: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                key: string;
                name: string;
                node_id: string;
                spdx_id: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/licenses/{license}" ? {
    get: (license: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                conditions: string[];
                description: string;
                featured: boolean;
                html_url: string;
                implementation: string;
                key: string;
                limitations: string[];
                name: string;
                node_id: string;
                permissions: string[];
                spdx_id: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/markdown" ? {
    post: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
        };
        headers: object;
    }>;
} : P extends "/markdown/raw" ? {
    post: (accept?: string, contentType?: "text/plain; charset=utf-8") => Promise<{
        response: Response;
        data: {
            status: 200;
        };
        headers: object;
    }>;
} : P extends "/marketplace_listing/accounts/{account_id}" ? {
    get: (accountId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                email: string;
                id: number;
                login: string;
                marketplace_pending_change: {
                    effective_date: string;
                    id: number;
                    plan: {
                        accounts_url: string;
                        bullets: string[];
                        description: string;
                        has_free_trial: boolean;
                        id: number;
                        monthly_price_in_cents: number;
                        name: string;
                        number: number;
                        price_model: string;
                        state: string;
                        unit_name: string;
                        url: string;
                        yearly_price_in_cents: number;
                    };
                    unit_count: string;
                };
                marketplace_purchase: {
                    billing_cycle: string;
                    free_trial_ends_on: string;
                    next_billing_date: string;
                    on_free_trial: boolean;
                    plan: {
                        accounts_url: string;
                        bullets: string[];
                        description: string;
                        has_free_trial: boolean;
                        id: number;
                        monthly_price_in_cents: number;
                        name: string;
                        number: number;
                        price_model: string;
                        state: string;
                        unit_name: string;
                        url: string;
                        yearly_price_in_cents: number;
                    };
                    unit_count: string;
                    updated_at: string;
                };
                organization_billing_email: string;
                type: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/marketplace_listing/plans" ? {
    get: (perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                accounts_url: string;
                bullets: string[];
                description: string;
                has_free_trial: boolean;
                id: number;
                monthly_price_in_cents: number;
                name: string;
                number: number;
                price_model: string;
                state: string;
                unit_name: string;
                url: string;
                yearly_price_in_cents: number;
            }[];
        };
        headers: object;
    }>;
} : P extends "/marketplace_listing/plans/{plan_id}/accounts" ? {
    get: (planId: number, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                email: string;
                id: number;
                login: string;
                marketplace_pending_change: {
                    effective_date: string;
                    id: number;
                    plan: {
                        accounts_url: string;
                        bullets: string[];
                        description: string;
                        has_free_trial: boolean;
                        id: number;
                        monthly_price_in_cents: number;
                        name: string;
                        number: number;
                        price_model: string;
                        state: string;
                        unit_name: string;
                        url: string;
                        yearly_price_in_cents: number;
                    };
                    unit_count: string;
                };
                marketplace_purchase: {
                    billing_cycle: string;
                    free_trial_ends_on: string;
                    next_billing_date: string;
                    on_free_trial: boolean;
                    plan: {
                        accounts_url: string;
                        bullets: string[];
                        description: string;
                        has_free_trial: boolean;
                        id: number;
                        monthly_price_in_cents: number;
                        name: string;
                        number: number;
                        price_model: string;
                        state: string;
                        unit_name: string;
                        url: string;
                        yearly_price_in_cents: number;
                    };
                    unit_count: string;
                    updated_at: string;
                };
                organization_billing_email: string;
                type: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/marketplace_listing/stubbed/accounts/{account_id}" ? {
    get: (accountId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                email: string;
                id: number;
                login: string;
                marketplace_pending_change: {
                    effective_date: string;
                    id: number;
                    plan: {
                        accounts_url: string;
                        bullets: string[];
                        description: string;
                        has_free_trial: boolean;
                        id: number;
                        monthly_price_in_cents: number;
                        name: string;
                        number: number;
                        price_model: string;
                        state: string;
                        unit_name: string;
                        url: string;
                        yearly_price_in_cents: number;
                    };
                    unit_count: string;
                };
                marketplace_purchase: {
                    billing_cycle: string;
                    free_trial_ends_on: string;
                    next_billing_date: string;
                    on_free_trial: boolean;
                    plan: {
                        accounts_url: string;
                        bullets: string[];
                        description: string;
                        has_free_trial: boolean;
                        id: number;
                        monthly_price_in_cents: number;
                        name: string;
                        number: number;
                        price_model: string;
                        state: string;
                        unit_name: string;
                        url: string;
                        yearly_price_in_cents: number;
                    };
                    unit_count: string;
                    updated_at: string;
                };
                organization_billing_email: string;
                type: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/marketplace_listing/stubbed/plans" ? {
    get: (perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                accounts_url: string;
                bullets: string[];
                description: string;
                has_free_trial: boolean;
                id: number;
                monthly_price_in_cents: number;
                name: string;
                number: number;
                price_model: string;
                state: string;
                unit_name: string;
                url: string;
                yearly_price_in_cents: number;
            }[];
        };
        headers: object;
    }>;
} : P extends "/marketplace_listing/stubbed/plans/{plan_id}/accounts" ? {
    get: (planId: number, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                email: string;
                id: number;
                login: string;
                marketplace_pending_change: {
                    effective_date: string;
                    id: number;
                    plan: {
                        accounts_url: string;
                        bullets: string[];
                        description: string;
                        has_free_trial: boolean;
                        id: number;
                        monthly_price_in_cents: number;
                        name: string;
                        number: number;
                        price_model: string;
                        state: string;
                        unit_name: string;
                        url: string;
                        yearly_price_in_cents: number;
                    };
                    unit_count: string;
                };
                marketplace_purchase: {
                    billing_cycle: string;
                    free_trial_ends_on: string;
                    next_billing_date: string;
                    on_free_trial: boolean;
                    plan: {
                        accounts_url: string;
                        bullets: string[];
                        description: string;
                        has_free_trial: boolean;
                        id: number;
                        monthly_price_in_cents: number;
                        name: string;
                        number: number;
                        price_model: string;
                        state: string;
                        unit_name: string;
                        url: string;
                        yearly_price_in_cents: number;
                    };
                    unit_count: string;
                    updated_at: string;
                };
                organization_billing_email: string;
                type: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/meta" ? {
    get: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                api: string[];
                git: string[];
                hooks: string[];
                importer: string[];
                pages: string[];
                ssh_key_fingerprints: {
                    MD5_DSA: string;
                    MD5_RSA: string;
                    SHA256_DSA: string;
                    SHA256_RSA: string;
                };
                verifiable_password_authentication: boolean;
                web: string[];
            };
        };
        headers: object;
    }>;
} : P extends "/networks/{owner}/{repo}/events" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
} : P extends "/notifications" ? {
    get: (all?: boolean, participating?: boolean, since?: string, before?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                id: string;
                last_read_at: string;
                reason: string;
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
                subject: {
                    latest_comment_url: string;
                    title: string;
                    type: string;
                    url: string;
                };
                unread: boolean;
                updated_at: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
    put: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 205;
        };
        headers: object;
    }>;
} : P extends "/notifications/threads/{thread_id}" ? {
    get: (threadId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                id: string;
                last_read_at: string;
                reason: string;
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
                subject: {
                    latest_comment_url: string;
                    title: string;
                    type: string;
                    url: string;
                };
                unread: boolean;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (threadId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 205;
        };
        headers: object;
    }>;
} : P extends "/notifications/threads/{thread_id}/subscription" ? {
    delete: (threadId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (threadId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                created_at: string;
                ignored: boolean;
                reason: string;
                subscribed: boolean;
                thread_url: string;
                url: string;
            };
        };
        headers: object;
    }>;
    put: (threadId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                created_at: string;
                ignored: boolean;
                reason: string;
                subscribed: boolean;
                thread_url: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/organizations" ? {
    get: (since?: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
            }[];
        };
        headers: object;
    }>;
} : P extends "/orgs/{org}" ? {
    get: (org: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                avatar_url: string;
                billing_email: string;
                blog: string;
                collaborators: number;
                company: string;
                created_at: string;
                default_repository_permission: string;
                description: string;
                disk_usage: number;
                email: string;
                events_url: string;
                followers: number;
                following: number;
                has_organization_projects: boolean;
                has_repository_projects: boolean;
                hooks_url: string;
                html_url: string;
                id: number;
                is_verified: boolean;
                issues_url: string;
                location: string;
                login: string;
                members_allowed_repository_creation_type: string;
                members_can_create_internal_repositories: boolean;
                members_can_create_private_repositories: boolean;
                members_can_create_public_repositories: boolean;
                members_can_create_repositories: boolean;
                members_url: string;
                name: string;
                node_id: string;
                owned_private_repos: number;
                plan: {
                    name: string;
                    private_repos: number;
                    space: number;
                };
                private_gists: number;
                public_gists: number;
                public_members_url: string;
                public_repos: number;
                repos_url: string;
                total_private_repos: number;
                two_factor_requirement_enabled: boolean;
                type: string;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (org: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                avatar_url: string;
                billing_email: string;
                blog: string;
                collaborators: number;
                company: string;
                created_at: string;
                default_repository_permission: string;
                description: string;
                disk_usage: number;
                email: string;
                events_url: string;
                followers: number;
                following: number;
                has_organization_projects: boolean;
                has_repository_projects: boolean;
                hooks_url: string;
                html_url: string;
                id: number;
                is_verified: boolean;
                issues_url: string;
                location: string;
                login: string;
                members_allowed_repository_creation_type: string;
                members_can_create_internal_repositories: boolean;
                members_can_create_private_repositories: boolean;
                members_can_create_public_repositories: boolean;
                members_can_create_repositories: boolean;
                members_url: string;
                name: string;
                node_id: string;
                owned_private_repos: number;
                plan: {
                    name: string;
                    private_repos: number;
                    space: number;
                };
                private_gists: number;
                public_gists: number;
                public_members_url: string;
                public_repos: number;
                repos_url: string;
                total_private_repos: number;
                two_factor_requirement_enabled: boolean;
                type: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/orgs/{org}/blocks" ? {
    get: (org: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/blocks/{username}" ? {
    delete: (org: string, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (org: string, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 404;
        };
        headers: object;
    }>;
    put: (org: string, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/legacy/user/search/{keyword}": return { get: (keyword: string, startPage?: string, sort?: "stars" | "forks" | "updated", order?: "asc" | "desc", accept?: string): Promise<{
                status: 200;
                data: {
                    users: {
                        created: string;
                        created_at: string;
                        followers: number;
                        followers_count: number;
                        fullname: string;
                        gravatar_id: string;
                        id: string;
                        language: string;
                        location: string;
                        login: string;
                        name: string;
                        public_repo_count: number;
                        repos: number;
                        score: number;
                        type: string;
                        username: string;
                    }[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { keyword }), { startPage, sort, order }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/licenses": return { get: (accept?: string): Promise<{
                status: 200;
                data: {
                    key: string;
                    name: string;
                    node_id: string;
                    spdx_id: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/licenses/{license}": return { get: (license: string, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    conditions: string[];
                    description: string;
                    featured: boolean;
                    html_url: string;
                    implementation: string;
                    key: string;
                    limitations: string[];
                    name: string;
                    node_id: string;
                    permissions: string[];
                    spdx_id: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { license }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/markdown": return { post: (accept?: string): Promise<{
                status: 200;
            }> => engine.process(handle("post", p, {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/markdown/raw": return { post: (accept?: string, contentType?: "text/plain; charset=utf-8"): Promise<{
                status: 200;
            }> => engine.process(handle("post", p, {}, { "Content-Type": "application/json", ...{ "accept": accept, "content-type": contentType } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/accounts/{account_id}": return { get: (accountId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    email: string;
                    id: number;
                    login: string;
                    marketplace_pending_change: {
                        effective_date: string;
                        id: number;
                        plan: {
                            accounts_url: string;
                            bullets: string[];
                            description: string;
                            has_free_trial: boolean;
                            id: number;
                            monthly_price_in_cents: number;
                            name: string;
                            number: number;
                            price_model: string;
                            state: string;
                            unit_name: string;
                            url: string;
                            yearly_price_in_cents: number;
                        };
                        unit_count: string;
                    };
                    marketplace_purchase: {
                        billing_cycle: string;
                        free_trial_ends_on: string;
                        next_billing_date: string;
                        on_free_trial: boolean;
                        plan: {
                            accounts_url: string;
                            bullets: string[];
                            description: string;
                            has_free_trial: boolean;
                            id: number;
                            monthly_price_in_cents: number;
                            name: string;
                            number: number;
                            price_model: string;
                            state: string;
                            unit_name: string;
                            url: string;
                            yearly_price_in_cents: number;
                        };
                        unit_count: string;
                        updated_at: string;
                    };
                    organization_billing_email: string;
                    type: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { accountId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/plans": return { get: (perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    accounts_url: string;
                    bullets: string[];
                    description: string;
                    has_free_trial: boolean;
                    id: number;
                    monthly_price_in_cents: number;
                    name: string;
                    number: number;
                    price_model: string;
                    state: string;
                    unit_name: string;
                    url: string;
                    yearly_price_in_cents: number;
                }[];
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/plans/{plan_id}/accounts": return { get: (planId: number, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    email: string;
                    id: number;
                    login: string;
                    marketplace_pending_change: {
                        effective_date: string;
                        id: number;
                        plan: {
                            accounts_url: string;
                            bullets: string[];
                            description: string;
                            has_free_trial: boolean;
                            id: number;
                            monthly_price_in_cents: number;
                            name: string;
                            number: number;
                            price_model: string;
                            state: string;
                            unit_name: string;
                            url: string;
                            yearly_price_in_cents: number;
                        };
                        unit_count: string;
                    };
                    marketplace_purchase: {
                        billing_cycle: string;
                        free_trial_ends_on: string;
                        next_billing_date: string;
                        on_free_trial: boolean;
                        plan: {
                            accounts_url: string;
                            bullets: string[];
                            description: string;
                            has_free_trial: boolean;
                            id: number;
                            monthly_price_in_cents: number;
                            name: string;
                            number: number;
                            price_model: string;
                            state: string;
                            unit_name: string;
                            url: string;
                            yearly_price_in_cents: number;
                        };
                        unit_count: string;
                        updated_at: string;
                    };
                    organization_billing_email: string;
                    type: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { planId }), { sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/stubbed/accounts/{account_id}": return { get: (accountId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    email: string;
                    id: number;
                    login: string;
                    marketplace_pending_change: {
                        effective_date: string;
                        id: number;
                        plan: {
                            accounts_url: string;
                            bullets: string[];
                            description: string;
                            has_free_trial: boolean;
                            id: number;
                            monthly_price_in_cents: number;
                            name: string;
                            number: number;
                            price_model: string;
                            state: string;
                            unit_name: string;
                            url: string;
                            yearly_price_in_cents: number;
                        };
                        unit_count: string;
                    };
                    marketplace_purchase: {
                        billing_cycle: string;
                        free_trial_ends_on: string;
                        next_billing_date: string;
                        on_free_trial: boolean;
                        plan: {
                            accounts_url: string;
                            bullets: string[];
                            description: string;
                            has_free_trial: boolean;
                            id: number;
                            monthly_price_in_cents: number;
                            name: string;
                            number: number;
                            price_model: string;
                            state: string;
                            unit_name: string;
                            url: string;
                            yearly_price_in_cents: number;
                        };
                        unit_count: string;
                        updated_at: string;
                    };
                    organization_billing_email: string;
                    type: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { accountId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/stubbed/plans": return { get: (perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    accounts_url: string;
                    bullets: string[];
                    description: string;
                    has_free_trial: boolean;
                    id: number;
                    monthly_price_in_cents: number;
                    name: string;
                    number: number;
                    price_model: string;
                    state: string;
                    unit_name: string;
                    url: string;
                    yearly_price_in_cents: number;
                }[];
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/stubbed/plans/{plan_id}/accounts": return { get: (planId: number, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    email: string;
                    id: number;
                    login: string;
                    marketplace_pending_change: {
                        effective_date: string;
                        id: number;
                        plan: {
                            accounts_url: string;
                            bullets: string[];
                            description: string;
                            has_free_trial: boolean;
                            id: number;
                            monthly_price_in_cents: number;
                            name: string;
                            number: number;
                            price_model: string;
                            state: string;
                            unit_name: string;
                            url: string;
                            yearly_price_in_cents: number;
                        };
                        unit_count: string;
                    };
                    marketplace_purchase: {
                        billing_cycle: string;
                        free_trial_ends_on: string;
                        next_billing_date: string;
                        on_free_trial: boolean;
                        plan: {
                            accounts_url: string;
                            bullets: string[];
                            description: string;
                            has_free_trial: boolean;
                            id: number;
                            monthly_price_in_cents: number;
                            name: string;
                            number: number;
                            price_model: string;
                            state: string;
                            unit_name: string;
                            url: string;
                            yearly_price_in_cents: number;
                        };
                        unit_count: string;
                        updated_at: string;
                    };
                    organization_billing_email: string;
                    type: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { planId }), { sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/meta": return { get: (accept?: string): Promise<{
                status: 200;
                data: {
                    api: string[];
                    git: string[];
                    hooks: string[];
                    importer: string[];
                    pages: string[];
                    ssh_key_fingerprints: {
                        MD5_DSA: string;
                        MD5_RSA: string;
                        SHA256_DSA: string;
                        SHA256_RSA: string;
                    };
                    verifiable_password_authentication: boolean;
                    web: string[];
                };
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/networks/{owner}/{repo}/events": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/notifications": return { get: (all?: boolean, participating?: boolean, since?: string, before?: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    id: string;
                    last_read_at: string;
                    reason: string;
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
                    subject: {
                        latest_comment_url: string;
                        title: string;
                        type: string;
                        url: string;
                    };
                    unread: boolean;
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", p, { all, participating, since, before, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (accept?: string): Promise<{
                status: 205;
            }> => engine.process(handle("put", p, {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/notifications/threads/{thread_id}": return { get: (threadId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    id: string;
                    last_read_at: string;
                    reason: string;
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
                    subject: {
                        latest_comment_url: string;
                        title: string;
                        type: string;
                        url: string;
                    };
                    unread: boolean;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { threadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (threadId: number, accept?: string): Promise<{
                status: 205;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { threadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/notifications/threads/{thread_id}/subscription": return { delete: (threadId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { threadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (threadId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    ignored: boolean;
                    reason: string;
                    subscribed: boolean;
                    thread_url: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { threadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (threadId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    ignored: boolean;
                    reason: string;
                    subscribed: boolean;
                    thread_url: string;
                    url: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { threadId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/organizations": return { get: (since?: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
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
                }[];
            }> => engine.process(handle("get", p, { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}": return { get: (org: string, accept?: string): Promise<{
                status: 200;
                data: {
                    avatar_url: string;
                    billing_email: string;
                    blog: string;
                    collaborators: number;
                    company: string;
                    created_at: string;
                    default_repository_permission: string;
                    description: string;
                    disk_usage: number;
                    email: string;
                    events_url: string;
                    followers: number;
                    following: number;
                    has_organization_projects: boolean;
                    has_repository_projects: boolean;
                    hooks_url: string;
                    html_url: string;
                    id: number;
                    is_verified: boolean;
                    issues_url: string;
                    location: string;
                    login: string;
                    members_allowed_repository_creation_type: string;
                    members_can_create_internal_repositories: boolean;
                    members_can_create_private_repositories: boolean;
                    members_can_create_public_repositories: boolean;
                    members_can_create_repositories: boolean;
                    members_url: string;
                    name: string;
                    node_id: string;
                    owned_private_repos: number;
                    plan: {
                        name: string;
                        private_repos: number;
                        space: number;
                    };
                    private_gists: number;
                    public_gists: number;
                    public_members_url: string;
                    public_repos: number;
                    repos_url: string;
                    total_private_repos: number;
                    two_factor_requirement_enabled: boolean;
                    type: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (org: string, accept?: string): Promise<{
                status: 200;
                data: {
                    avatar_url: string;
                    billing_email: string;
                    blog: string;
                    collaborators: number;
                    company: string;
                    created_at: string;
                    default_repository_permission: string;
                    description: string;
                    disk_usage: number;
                    email: string;
                    events_url: string;
                    followers: number;
                    following: number;
                    has_organization_projects: boolean;
                    has_repository_projects: boolean;
                    hooks_url: string;
                    html_url: string;
                    id: number;
                    is_verified: boolean;
                    issues_url: string;
                    location: string;
                    login: string;
                    members_allowed_repository_creation_type: string;
                    members_can_create_internal_repositories: boolean;
                    members_can_create_private_repositories: boolean;
                    members_can_create_public_repositories: boolean;
                    members_can_create_repositories: boolean;
                    members_url: string;
                    name: string;
                    node_id: string;
                    owned_private_repos: number;
                    plan: {
                        name: string;
                        private_repos: number;
                        space: number;
                    };
                    private_gists: number;
                    public_gists: number;
                    public_members_url: string;
                    public_repos: number;
                    repos_url: string;
                    total_private_repos: number;
                    two_factor_requirement_enabled: boolean;
                    type: string;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/blocks": return { get: (org: string, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/blocks/{username}": return { delete: (org: string, username: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, username: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, username: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/legacy/user/search/{keyword}": return { get: (keyword: string, startPage?: string, sort?: "stars" | "forks" | "updated", order?: "asc" | "desc", accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        users: {
                            created: string;
                            created_at: string;
                            followers: number;
                            followers_count: number;
                            fullname: string;
                            gravatar_id: string;
                            id: string;
                            language: string;
                            location: string;
                            login: string;
                            name: string;
                            public_repo_count: number;
                            repos: number;
                            score: number;
                            type: string;
                            username: string;
                        }[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { keyword }), { startPage, sort, order }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/licenses": return { get: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        key: string;
                        name: string;
                        node_id: string;
                        spdx_id: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/licenses/{license}": return { get: (license: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        conditions: string[];
                        description: string;
                        featured: boolean;
                        html_url: string;
                        implementation: string;
                        key: string;
                        limitations: string[];
                        name: string;
                        node_id: string;
                        permissions: string[];
                        spdx_id: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { license }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/markdown": return { post: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                };
                headers: object;
            }> => engine.process(handle("post", p, {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/markdown/raw": return { post: (accept?: string, contentType?: "text/plain; charset=utf-8"): Promise<{
                response: Response;
                data: {
                    status: 200;
                };
                headers: object;
            }> => engine.process(handle("post", p, {}, { "Content-Type": "application/json", ...{ "accept": accept, "content-type": contentType } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/accounts/{account_id}": return { get: (accountId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        email: string;
                        id: number;
                        login: string;
                        marketplace_pending_change: {
                            effective_date: string;
                            id: number;
                            plan: {
                                accounts_url: string;
                                bullets: string[];
                                description: string;
                                has_free_trial: boolean;
                                id: number;
                                monthly_price_in_cents: number;
                                name: string;
                                number: number;
                                price_model: string;
                                state: string;
                                unit_name: string;
                                url: string;
                                yearly_price_in_cents: number;
                            };
                            unit_count: string;
                        };
                        marketplace_purchase: {
                            billing_cycle: string;
                            free_trial_ends_on: string;
                            next_billing_date: string;
                            on_free_trial: boolean;
                            plan: {
                                accounts_url: string;
                                bullets: string[];
                                description: string;
                                has_free_trial: boolean;
                                id: number;
                                monthly_price_in_cents: number;
                                name: string;
                                number: number;
                                price_model: string;
                                state: string;
                                unit_name: string;
                                url: string;
                                yearly_price_in_cents: number;
                            };
                            unit_count: string;
                            updated_at: string;
                        };
                        organization_billing_email: string;
                        type: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { accountId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/plans": return { get: (perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        accounts_url: string;
                        bullets: string[];
                        description: string;
                        has_free_trial: boolean;
                        id: number;
                        monthly_price_in_cents: number;
                        name: string;
                        number: number;
                        price_model: string;
                        state: string;
                        unit_name: string;
                        url: string;
                        yearly_price_in_cents: number;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/plans/{plan_id}/accounts": return { get: (planId: number, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        email: string;
                        id: number;
                        login: string;
                        marketplace_pending_change: {
                            effective_date: string;
                            id: number;
                            plan: {
                                accounts_url: string;
                                bullets: string[];
                                description: string;
                                has_free_trial: boolean;
                                id: number;
                                monthly_price_in_cents: number;
                                name: string;
                                number: number;
                                price_model: string;
                                state: string;
                                unit_name: string;
                                url: string;
                                yearly_price_in_cents: number;
                            };
                            unit_count: string;
                        };
                        marketplace_purchase: {
                            billing_cycle: string;
                            free_trial_ends_on: string;
                            next_billing_date: string;
                            on_free_trial: boolean;
                            plan: {
                                accounts_url: string;
                                bullets: string[];
                                description: string;
                                has_free_trial: boolean;
                                id: number;
                                monthly_price_in_cents: number;
                                name: string;
                                number: number;
                                price_model: string;
                                state: string;
                                unit_name: string;
                                url: string;
                                yearly_price_in_cents: number;
                            };
                            unit_count: string;
                            updated_at: string;
                        };
                        organization_billing_email: string;
                        type: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { planId }), { sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/stubbed/accounts/{account_id}": return { get: (accountId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        email: string;
                        id: number;
                        login: string;
                        marketplace_pending_change: {
                            effective_date: string;
                            id: number;
                            plan: {
                                accounts_url: string;
                                bullets: string[];
                                description: string;
                                has_free_trial: boolean;
                                id: number;
                                monthly_price_in_cents: number;
                                name: string;
                                number: number;
                                price_model: string;
                                state: string;
                                unit_name: string;
                                url: string;
                                yearly_price_in_cents: number;
                            };
                            unit_count: string;
                        };
                        marketplace_purchase: {
                            billing_cycle: string;
                            free_trial_ends_on: string;
                            next_billing_date: string;
                            on_free_trial: boolean;
                            plan: {
                                accounts_url: string;
                                bullets: string[];
                                description: string;
                                has_free_trial: boolean;
                                id: number;
                                monthly_price_in_cents: number;
                                name: string;
                                number: number;
                                price_model: string;
                                state: string;
                                unit_name: string;
                                url: string;
                                yearly_price_in_cents: number;
                            };
                            unit_count: string;
                            updated_at: string;
                        };
                        organization_billing_email: string;
                        type: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { accountId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/stubbed/plans": return { get: (perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        accounts_url: string;
                        bullets: string[];
                        description: string;
                        has_free_trial: boolean;
                        id: number;
                        monthly_price_in_cents: number;
                        name: string;
                        number: number;
                        price_model: string;
                        state: string;
                        unit_name: string;
                        url: string;
                        yearly_price_in_cents: number;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/marketplace_listing/stubbed/plans/{plan_id}/accounts": return { get: (planId: number, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        email: string;
                        id: number;
                        login: string;
                        marketplace_pending_change: {
                            effective_date: string;
                            id: number;
                            plan: {
                                accounts_url: string;
                                bullets: string[];
                                description: string;
                                has_free_trial: boolean;
                                id: number;
                                monthly_price_in_cents: number;
                                name: string;
                                number: number;
                                price_model: string;
                                state: string;
                                unit_name: string;
                                url: string;
                                yearly_price_in_cents: number;
                            };
                            unit_count: string;
                        };
                        marketplace_purchase: {
                            billing_cycle: string;
                            free_trial_ends_on: string;
                            next_billing_date: string;
                            on_free_trial: boolean;
                            plan: {
                                accounts_url: string;
                                bullets: string[];
                                description: string;
                                has_free_trial: boolean;
                                id: number;
                                monthly_price_in_cents: number;
                                name: string;
                                number: number;
                                price_model: string;
                                state: string;
                                unit_name: string;
                                url: string;
                                yearly_price_in_cents: number;
                            };
                            unit_count: string;
                            updated_at: string;
                        };
                        organization_billing_email: string;
                        type: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { planId }), { sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/meta": return { get: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        api: string[];
                        git: string[];
                        hooks: string[];
                        importer: string[];
                        pages: string[];
                        ssh_key_fingerprints: {
                            MD5_DSA: string;
                            MD5_RSA: string;
                            SHA256_DSA: string;
                            SHA256_RSA: string;
                        };
                        verifiable_password_authentication: boolean;
                        web: string[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/networks/{owner}/{repo}/events": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/notifications": return { get: (all?: boolean, participating?: boolean, since?: string, before?: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        id: string;
                        last_read_at: string;
                        reason: string;
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
                        subject: {
                            latest_comment_url: string;
                            title: string;
                            type: string;
                            url: string;
                        };
                        unread: boolean;
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { all, participating, since, before, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 205;
                };
                headers: object;
            }> => engine.process(handle("put", p, {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/notifications/threads/{thread_id}": return { get: (threadId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        id: string;
                        last_read_at: string;
                        reason: string;
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
                        subject: {
                            latest_comment_url: string;
                            title: string;
                            type: string;
                            url: string;
                        };
                        unread: boolean;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { threadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (threadId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 205;
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { threadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/notifications/threads/{thread_id}/subscription": return { delete: (threadId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { threadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (threadId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        created_at: string;
                        ignored: boolean;
                        reason: string;
                        subscribed: boolean;
                        thread_url: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { threadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (threadId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        created_at: string;
                        ignored: boolean;
                        reason: string;
                        subscribed: boolean;
                        thread_url: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { threadId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/organizations": return { get: (since?: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}": return { get: (org: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        avatar_url: string;
                        billing_email: string;
                        blog: string;
                        collaborators: number;
                        company: string;
                        created_at: string;
                        default_repository_permission: string;
                        description: string;
                        disk_usage: number;
                        email: string;
                        events_url: string;
                        followers: number;
                        following: number;
                        has_organization_projects: boolean;
                        has_repository_projects: boolean;
                        hooks_url: string;
                        html_url: string;
                        id: number;
                        is_verified: boolean;
                        issues_url: string;
                        location: string;
                        login: string;
                        members_allowed_repository_creation_type: string;
                        members_can_create_internal_repositories: boolean;
                        members_can_create_private_repositories: boolean;
                        members_can_create_public_repositories: boolean;
                        members_can_create_repositories: boolean;
                        members_url: string;
                        name: string;
                        node_id: string;
                        owned_private_repos: number;
                        plan: {
                            name: string;
                            private_repos: number;
                            space: number;
                        };
                        private_gists: number;
                        public_gists: number;
                        public_members_url: string;
                        public_repos: number;
                        repos_url: string;
                        total_private_repos: number;
                        two_factor_requirement_enabled: boolean;
                        type: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (org: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        avatar_url: string;
                        billing_email: string;
                        blog: string;
                        collaborators: number;
                        company: string;
                        created_at: string;
                        default_repository_permission: string;
                        description: string;
                        disk_usage: number;
                        email: string;
                        events_url: string;
                        followers: number;
                        following: number;
                        has_organization_projects: boolean;
                        has_repository_projects: boolean;
                        hooks_url: string;
                        html_url: string;
                        id: number;
                        is_verified: boolean;
                        issues_url: string;
                        location: string;
                        login: string;
                        members_allowed_repository_creation_type: string;
                        members_can_create_internal_repositories: boolean;
                        members_can_create_private_repositories: boolean;
                        members_can_create_public_repositories: boolean;
                        members_can_create_repositories: boolean;
                        members_url: string;
                        name: string;
                        node_id: string;
                        owned_private_repos: number;
                        plan: {
                            name: string;
                            private_repos: number;
                            space: number;
                        };
                        private_gists: number;
                        public_gists: number;
                        public_members_url: string;
                        public_repos: number;
                        repos_url: string;
                        total_private_repos: number;
                        two_factor_requirement_enabled: boolean;
                        type: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/blocks": return { get: (org: string, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/blocks/{username}": return { delete: (org: string, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
