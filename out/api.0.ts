import * as tsgen from "./engine";
export const allPaths = ["/app", "/app-manifests/{code}/conversions", "/app/installations", "/app/installations/{installation_id}", "/app/installations/{installation_id}/access_tokens", "/applications/grants", "/applications/grants/{grant_id}", "/applications/{client_id}/grant", "/applications/{client_id}/grants/{access_token}", "/applications/{client_id}/token", "/applications/{client_id}/tokens/{access_token}", "/apps/{app_slug}", "/authorizations", "/authorizations/clients/{client_id}", "/authorizations/clients/{client_id}/{fingerprint}", "/authorizations/{authorization_id}", "/codes_of_conduct", "/codes_of_conduct/{key}", "/content_references/{content_reference_id}/attachments", "/emojis"];
export type Paths = "/app" | "/app-manifests/{code}/conversions" | "/app/installations" | "/app/installations/{installation_id}" | "/app/installations/{installation_id}/access_tokens" | "/applications/grants" | "/applications/grants/{grant_id}" | "/applications/{client_id}/grant" | "/applications/{client_id}/grants/{access_token}" | "/applications/{client_id}/token" | "/applications/{client_id}/tokens/{access_token}" | "/apps/{app_slug}" | "/authorizations" | "/authorizations/clients/{client_id}" | "/authorizations/clients/{client_id}/{fingerprint}" | "/authorizations/{authorization_id}" | "/codes_of_conduct" | "/codes_of_conduct/{key}" | "/content_references/{content_reference_id}/attachments" | "/emojis";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/app" ? {
    get: (accept: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            description: string;
            events: string[];
            external_url: string;
            html_url: string;
            id: number;
            installations_count: number;
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
    }>;
} : P extends "/app-manifests/{code}/conversions" ? {
    post: (code: string, accept: string) => Promise<{
        status: 200;
        data: {
            client_id: string;
            client_secret: string;
            created_at: string;
            description: string;
            external_url: string;
            html_url: string;
            id: number;
            name: string;
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
            pem: string;
            updated_at: string;
            webhook_secret: string;
        };
    }>;
} : P extends "/app/installations" ? {
    get: (accept: string, perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            access_tokens_url: string;
            account: {
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
            app_id: number;
            events: string[];
            html_url: string;
            id: number;
            permissions: {
                contents: string;
                issues: string;
                metadata: string;
                single_file: string;
            };
            repositories_url: string;
            repository_selection: string;
            single_file_name: string;
            target_id: number;
            target_type: string;
        }[];
    }>;
} : P extends "/app/installations/{installation_id}" ? {
    delete: (installationId: number, accept: string) => Promise<{
        status: 204;
    }>;
    get: (installationId: number, accept: string) => Promise<{
        status: 200;
        data: {
            access_tokens_url: string;
            account: {
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
            app_id: number;
            events: string[];
            html_url: string;
            id: number;
            permissions: {
                contents: string;
                issues: string;
                metadata: string;
                single_file: string;
            };
            repositories_url: string;
            repository_selection: string;
            single_file_name: string;
            target_id: number;
            target_type: string;
        };
    }>;
} : P extends "/app/installations/{installation_id}/access_tokens" ? {
    post: (installationId: number, accept: string) => Promise<{
        status: 201;
        data: {
            expires_at: string;
            permissions: {
                contents: string;
                issues: string;
            };
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
            }[];
            token: string;
        };
    }>;
} : P extends "/applications/grants" ? {
    get: (perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            id: number;
            scopes: string[];
            updated_at: string;
            url: string;
        }[];
    }>;
} : P extends "/applications/grants/{grant_id}" ? {
    delete: (grantId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (grantId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            id: number;
            scopes: string[];
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/applications/{client_id}/grant" ? {
    delete: (clientId: string, accept: string) => Promise<{
        status: 204;
    }>;
} : P extends "/applications/{client_id}/grants/{access_token}" ? {
    delete: (clientId: string, accessToken: string, accept?: string) => Promise<{
        status: 204;
    }>;
} : P extends "/applications/{client_id}/token" ? {
    delete: (clientId: string, accept: string) => Promise<{
        status: 204;
    }>;
    patch: (clientId: string, accept: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
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
    post: (clientId: string, accept: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
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
} : P extends "/applications/{client_id}/tokens/{access_token}" ? {
    delete: (clientId: string, accessToken: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (clientId: string, accessToken: string, accept?: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
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
    post: (clientId: string, accessToken: string, accept?: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
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
} : P extends "/apps/{app_slug}" ? {
    get: (appSlug: string, accept: string) => Promise<{
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
        };
    }>;
} : P extends "/authorizations" ? {
    get: (perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
            updated_at: string;
            url: string;
        }[];
    }>;
    post: (accept?: string) => Promise<{
        status: 201;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/authorizations/clients/{client_id}" ? {
    put: (clientId: string, accept?: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
            updated_at: string;
            url: string;
        };
    } | {
        status: 201;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/authorizations/clients/{client_id}/{fingerprint}" ? {
    put: (clientId: string, fingerprint: string, accept?: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
            updated_at: string;
            url: string;
        };
    } | {
        status: 201;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/authorizations/{authorization_id}" ? {
    delete: (authorizationId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (authorizationId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
            updated_at: string;
            url: string;
        };
    }>;
    patch: (authorizationId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            app: {
                client_id: string;
                name: string;
                url: string;
            };
            created_at: string;
            fingerprint: string;
            hashed_token: string;
            id: number;
            note: string;
            note_url: string;
            scopes: string[];
            token: string;
            token_last_eight: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/codes_of_conduct" ? {
    get: (accept: string) => Promise<{
        status: 200;
        data: {
            key: string;
            name: string;
            url: string;
        }[];
    }>;
} : P extends "/codes_of_conduct/{key}" ? {
    get: (key: string, accept: string) => Promise<{
        status: 200;
        data: {
            body: string;
            key: string;
            name: string;
            url: string;
        };
    }>;
} : P extends "/content_references/{content_reference_id}/attachments" ? {
    post: (contentReferenceId: number, accept: string) => Promise<{
        status: 200;
        data: {
            body: string;
            id: number;
            title: string;
        };
    }>;
} : P extends "/emojis" ? {
    get: (accept?: string) => Promise<{
        status: 200;
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/app" ? {
    get: (accept: string) => Promise<{
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
                installations_count: number;
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
        };
        headers: object;
    }>;
} : P extends "/app-manifests/{code}/conversions" ? {
    post: (code: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                client_id: string;
                client_secret: string;
                created_at: string;
                description: string;
                external_url: string;
                html_url: string;
                id: number;
                name: string;
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
                pem: string;
                updated_at: string;
                webhook_secret: string;
            };
        };
        headers: object;
    }>;
} : P extends "/app/installations" ? {
    get: (accept: string, perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                access_tokens_url: string;
                account: {
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
                app_id: number;
                events: string[];
                html_url: string;
                id: number;
                permissions: {
                    contents: string;
                    issues: string;
                    metadata: string;
                    single_file: string;
                };
                repositories_url: string;
                repository_selection: string;
                single_file_name: string;
                target_id: number;
                target_type: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/app/installations/{installation_id}" ? {
    delete: (installationId: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (installationId: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                access_tokens_url: string;
                account: {
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
                app_id: number;
                events: string[];
                html_url: string;
                id: number;
                permissions: {
                    contents: string;
                    issues: string;
                    metadata: string;
                    single_file: string;
                };
                repositories_url: string;
                repository_selection: string;
                single_file_name: string;
                target_id: number;
                target_type: string;
            };
        };
        headers: object;
    }>;
} : P extends "/app/installations/{installation_id}/access_tokens" ? {
    post: (installationId: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                expires_at: string;
                permissions: {
                    contents: string;
                    issues: string;
                };
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
                }[];
                token: string;
            };
        };
        headers: object;
    }>;
} : P extends "/applications/grants" ? {
    get: (perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                id: number;
                scopes: string[];
                updated_at: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/applications/grants/{grant_id}" ? {
    delete: (grantId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (grantId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                id: number;
                scopes: string[];
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/applications/{client_id}/grant" ? {
    delete: (clientId: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/applications/{client_id}/grants/{access_token}" ? {
    delete: (clientId: string, accessToken: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/applications/{client_id}/token" ? {
    delete: (clientId: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    patch: (clientId: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
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
    post: (clientId: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
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
} : P extends "/applications/{client_id}/tokens/{access_token}" ? {
    delete: (clientId: string, accessToken: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (clientId: string, accessToken: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
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
    post: (clientId: string, accessToken: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
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
} : P extends "/apps/{app_slug}" ? {
    get: (appSlug: string, accept: string) => Promise<{
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
            };
        };
        headers: object;
    }>;
} : P extends "/authorizations" ? {
    get: (perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
                updated_at: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
    post: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/authorizations/clients/{client_id}" ? {
    put: (clientId: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
                updated_at: string;
                url: string;
            };
        } | {
            status: 201;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/authorizations/clients/{client_id}/{fingerprint}" ? {
    put: (clientId: string, fingerprint: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
                updated_at: string;
                url: string;
            };
        } | {
            status: 201;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/authorizations/{authorization_id}" ? {
    delete: (authorizationId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (authorizationId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (authorizationId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                app: {
                    client_id: string;
                    name: string;
                    url: string;
                };
                created_at: string;
                fingerprint: string;
                hashed_token: string;
                id: number;
                note: string;
                note_url: string;
                scopes: string[];
                token: string;
                token_last_eight: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/codes_of_conduct" ? {
    get: (accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                key: string;
                name: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/codes_of_conduct/{key}" ? {
    get: (key: string, accept: string) => Promise<{
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
} : P extends "/content_references/{content_reference_id}/attachments" ? {
    post: (contentReferenceId: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                id: number;
                title: string;
            };
        };
        headers: object;
    }>;
} : P extends "/emojis" ? {
    get: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
        };
        headers: object;
    }>;
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/app": return { get: (accept: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    description: string;
                    events: string[];
                    external_url: string;
                    html_url: string;
                    id: number;
                    installations_count: number;
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
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/app-manifests/{code}/conversions": return { post: (code: string, accept: string): Promise<{
                status: 200;
                data: {
                    client_id: string;
                    client_secret: string;
                    created_at: string;
                    description: string;
                    external_url: string;
                    html_url: string;
                    id: number;
                    name: string;
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
                    pem: string;
                    updated_at: string;
                    webhook_secret: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { code }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/app/installations": return { get: (accept: string, perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    access_tokens_url: string;
                    account: {
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
                    app_id: number;
                    events: string[];
                    html_url: string;
                    id: number;
                    permissions: {
                        contents: string;
                        issues: string;
                        metadata: string;
                        single_file: string;
                    };
                    repositories_url: string;
                    repository_selection: string;
                    single_file_name: string;
                    target_id: number;
                    target_type: string;
                }[];
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/app/installations/{installation_id}": return { delete: (installationId: number, accept: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { installationId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (installationId: number, accept: string): Promise<{
                status: 200;
                data: {
                    access_tokens_url: string;
                    account: {
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
                    app_id: number;
                    events: string[];
                    html_url: string;
                    id: number;
                    permissions: {
                        contents: string;
                        issues: string;
                        metadata: string;
                        single_file: string;
                    };
                    repositories_url: string;
                    repository_selection: string;
                    single_file_name: string;
                    target_id: number;
                    target_type: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { installationId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/app/installations/{installation_id}/access_tokens": return { post: (installationId: number, accept: string): Promise<{
                status: 201;
                data: {
                    expires_at: string;
                    permissions: {
                        contents: string;
                        issues: string;
                    };
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
                    }[];
                    token: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { installationId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/grants": return { get: (perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    id: number;
                    scopes: string[];
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/grants/{grant_id}": return { delete: (grantId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { grantId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (grantId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    id: number;
                    scopes: string[];
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { grantId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/{client_id}/grant": return { delete: (clientId: string, accept: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { clientId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/{client_id}/grants/{access_token}": return { delete: (clientId: string, accessToken: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { clientId, accessToken }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/{client_id}/token": return { delete: (clientId: string, accept: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { clientId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), patch: (clientId: string, accept: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { clientId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), post: (clientId: string, accept: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { clientId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/{client_id}/tokens/{access_token}": return { delete: (clientId: string, accessToken: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { clientId, accessToken }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (clientId: string, accessToken: string, accept?: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { clientId, accessToken }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (clientId: string, accessToken: string, accept?: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { clientId, accessToken }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/apps/{app_slug}": return { get: (appSlug: string, accept: string): Promise<{
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
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { appSlug }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/authorizations": return { get: (perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (accept?: string): Promise<{
                status: 201;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("post", p, {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/authorizations/clients/{client_id}": return { put: (clientId: string, accept?: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
                    updated_at: string;
                    url: string;
                };
            } | {
                status: 201;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { clientId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/authorizations/clients/{client_id}/{fingerprint}": return { put: (clientId: string, fingerprint: string, accept?: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
                    updated_at: string;
                    url: string;
                };
            } | {
                status: 201;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { clientId, fingerprint }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/authorizations/{authorization_id}": return { delete: (authorizationId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { authorizationId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (authorizationId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { authorizationId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (authorizationId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    app: {
                        client_id: string;
                        name: string;
                        url: string;
                    };
                    created_at: string;
                    fingerprint: string;
                    hashed_token: string;
                    id: number;
                    note: string;
                    note_url: string;
                    scopes: string[];
                    token: string;
                    token_last_eight: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { authorizationId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/codes_of_conduct": return { get: (accept: string): Promise<{
                status: 200;
                data: {
                    key: string;
                    name: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/codes_of_conduct/{key}": return { get: (key: string, accept: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    key: string;
                    name: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { key }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/content_references/{content_reference_id}/attachments": return { post: (contentReferenceId: number, accept: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    id: number;
                    title: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { contentReferenceId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/emojis": return { get: (accept?: string): Promise<{
                status: 200;
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/app": return { get: (accept: string): Promise<{
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
                        installations_count: number;
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
                };
                headers: object;
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/app-manifests/{code}/conversions": return { post: (code: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        client_id: string;
                        client_secret: string;
                        created_at: string;
                        description: string;
                        external_url: string;
                        html_url: string;
                        id: number;
                        name: string;
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
                        pem: string;
                        updated_at: string;
                        webhook_secret: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { code }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/app/installations": return { get: (accept: string, perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        access_tokens_url: string;
                        account: {
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
                        app_id: number;
                        events: string[];
                        html_url: string;
                        id: number;
                        permissions: {
                            contents: string;
                            issues: string;
                            metadata: string;
                            single_file: string;
                        };
                        repositories_url: string;
                        repository_selection: string;
                        single_file_name: string;
                        target_id: number;
                        target_type: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/app/installations/{installation_id}": return { delete: (installationId: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { installationId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (installationId: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        access_tokens_url: string;
                        account: {
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
                        app_id: number;
                        events: string[];
                        html_url: string;
                        id: number;
                        permissions: {
                            contents: string;
                            issues: string;
                            metadata: string;
                            single_file: string;
                        };
                        repositories_url: string;
                        repository_selection: string;
                        single_file_name: string;
                        target_id: number;
                        target_type: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { installationId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/app/installations/{installation_id}/access_tokens": return { post: (installationId: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        expires_at: string;
                        permissions: {
                            contents: string;
                            issues: string;
                        };
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
                        }[];
                        token: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { installationId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/grants": return { get: (perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        id: number;
                        scopes: string[];
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/grants/{grant_id}": return { delete: (grantId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { grantId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (grantId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        id: number;
                        scopes: string[];
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { grantId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/{client_id}/grant": return { delete: (clientId: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { clientId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/{client_id}/grants/{access_token}": return { delete: (clientId: string, accessToken: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { clientId, accessToken }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/{client_id}/token": return { delete: (clientId: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { clientId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), patch: (clientId: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { clientId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), post: (clientId: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { clientId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/applications/{client_id}/tokens/{access_token}": return { delete: (clientId: string, accessToken: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { clientId, accessToken }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (clientId: string, accessToken: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { clientId, accessToken }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (clientId: string, accessToken: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { clientId, accessToken }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/apps/{app_slug}": return { get: (appSlug: string, accept: string): Promise<{
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
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { appSlug }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/authorizations": return { get: (perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", p, {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/authorizations/clients/{client_id}": return { put: (clientId: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
                        updated_at: string;
                        url: string;
                    };
                } | {
                    status: 201;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { clientId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/authorizations/clients/{client_id}/{fingerprint}": return { put: (clientId: string, fingerprint: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
                        updated_at: string;
                        url: string;
                    };
                } | {
                    status: 201;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { clientId, fingerprint }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/authorizations/{authorization_id}": return { delete: (authorizationId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { authorizationId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (authorizationId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { authorizationId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (authorizationId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        app: {
                            client_id: string;
                            name: string;
                            url: string;
                        };
                        created_at: string;
                        fingerprint: string;
                        hashed_token: string;
                        id: number;
                        note: string;
                        note_url: string;
                        scopes: string[];
                        token: string;
                        token_last_eight: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { authorizationId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/codes_of_conduct": return { get: (accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        key: string;
                        name: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/codes_of_conduct/{key}": return { get: (key: string, accept: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { key }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/content_references/{content_reference_id}/attachments": return { post: (contentReferenceId: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        id: number;
                        title: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { contentReferenceId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/emojis": return { get: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                };
                headers: object;
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
