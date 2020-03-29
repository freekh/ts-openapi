import * as tsgen from "./engine";
export const allPaths = ["/users/{username}/following", "/users/{username}/following/{target_user}", "/users/{username}/gists", "/users/{username}/gpg_keys", "/users/{username}/hovercard", "/users/{username}/installation", "/users/{username}/keys", "/users/{username}/orgs", "/users/{username}/projects", "/users/{username}/received_events", "/users/{username}/received_events/public", "/users/{username}/repos", "/users/{username}/starred", "/users/{username}/subscriptions"];
export type Paths = "/users/{username}/following" | "/users/{username}/following/{target_user}" | "/users/{username}/gists" | "/users/{username}/gpg_keys" | "/users/{username}/hovercard" | "/users/{username}/installation" | "/users/{username}/keys" | "/users/{username}/orgs" | "/users/{username}/projects" | "/users/{username}/received_events" | "/users/{username}/received_events/public" | "/users/{username}/repos" | "/users/{username}/starred" | "/users/{username}/subscriptions";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/users/{username}/following" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/users/{username}/following/{target_user}" ? {
    get: (username: string, targetUser: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 404;
    }>;
} : P extends "/users/{username}/gists" ? {
    get: (username: string, since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/users/{username}/gpg_keys" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            can_certify: boolean;
            can_encrypt_comms: boolean;
            can_encrypt_storage: boolean;
            can_sign: boolean;
            created_at: string;
            emails: {
                email: string;
                verified: boolean;
            }[];
            expires_at: string;
            id: number;
            key_id: string;
            primary_key_id: string;
            public_key: string;
            subkeys: {
                can_certify: boolean;
                can_encrypt_comms: boolean;
                can_encrypt_storage: boolean;
                can_sign: boolean;
                created_at: string;
                emails: any[];
                expires_at: string;
                id: number;
                key_id: string;
                primary_key_id: number;
                public_key: string;
                subkeys: any[];
            }[];
        }[];
    }>;
} : P extends "/users/{username}/hovercard" ? {
    get: (username: string, subjectType?: "organization" | "repository" | "issue" | "pull_request", subjectId?: string, accept?: string) => Promise<{
        status: 200;
        data: {
            contexts: {
                message: string;
                octicon: string;
            }[];
        };
    }>;
} : P extends "/users/{username}/installation" ? {
    get: (username: string, accept: string) => Promise<{
        status: 200;
        data: {
            access_tokens_url: string;
            account: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            app_id: number;
            created_at: string;
            events: string[];
            html_url: string;
            id: number;
            permissions: {
                checks: string;
                contents: string;
                metadata: string;
            };
            repositories_url: string;
            repository_selection: string;
            single_file_name: string;
            target_id: number;
            target_type: string;
            updated_at: string;
        };
    }>;
} : P extends "/users/{username}/keys" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            id: number;
            key: string;
        }[];
    }>;
} : P extends "/users/{username}/orgs" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/users/{username}/projects" ? {
    get: (username: string, accept: string, state?: "open" | "closed" | "all", perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            body: string;
            columns_url: string;
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
            html_url: string;
            id: number;
            name: string;
            node_id: string;
            number: number;
            owner_url: string;
            state: string;
            updated_at: string;
            url: string;
        }[];
    }>;
} : P extends "/users/{username}/received_events" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 418;
    }>;
} : P extends "/users/{username}/received_events/public" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 418;
    }>;
} : P extends "/users/{username}/repos" ? {
    get: (username: string, type?: "all" | "owner" | "member", sort?: "created" | "updated" | "pushed" | "full_name", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 418;
    }>;
} : P extends "/users/{username}/starred" ? {
    get: (username: string, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
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
        }[];
    }>;
} : P extends "/users/{username}/subscriptions" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
            license: {
                key: string;
                name: string;
                node_id: string;
                spdx_id: string;
                url: string;
            };
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
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/users/{username}/following" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/users/{username}/following/{target_user}" ? {
    get: (username: string, targetUser: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 404;
        };
        headers: object;
    }>;
} : P extends "/users/{username}/gists" ? {
    get: (username: string, since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/users/{username}/gpg_keys" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                can_certify: boolean;
                can_encrypt_comms: boolean;
                can_encrypt_storage: boolean;
                can_sign: boolean;
                created_at: string;
                emails: {
                    email: string;
                    verified: boolean;
                }[];
                expires_at: string;
                id: number;
                key_id: string;
                primary_key_id: string;
                public_key: string;
                subkeys: {
                    can_certify: boolean;
                    can_encrypt_comms: boolean;
                    can_encrypt_storage: boolean;
                    can_sign: boolean;
                    created_at: string;
                    emails: any[];
                    expires_at: string;
                    id: number;
                    key_id: string;
                    primary_key_id: number;
                    public_key: string;
                    subkeys: any[];
                }[];
            }[];
        };
        headers: object;
    }>;
} : P extends "/users/{username}/hovercard" ? {
    get: (username: string, subjectType?: "organization" | "repository" | "issue" | "pull_request", subjectId?: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                contexts: {
                    message: string;
                    octicon: string;
                }[];
            };
        };
        headers: object;
    }>;
} : P extends "/users/{username}/installation" ? {
    get: (username: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                access_tokens_url: string;
                account: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                app_id: number;
                created_at: string;
                events: string[];
                html_url: string;
                id: number;
                permissions: {
                    checks: string;
                    contents: string;
                    metadata: string;
                };
                repositories_url: string;
                repository_selection: string;
                single_file_name: string;
                target_id: number;
                target_type: string;
                updated_at: string;
            };
        };
        headers: object;
    }>;
} : P extends "/users/{username}/keys" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                id: number;
                key: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/users/{username}/orgs" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/users/{username}/projects" ? {
    get: (username: string, accept: string, state?: "open" | "closed" | "all", perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                columns_url: string;
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
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                number: number;
                owner_url: string;
                state: string;
                updated_at: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/users/{username}/received_events" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
} : P extends "/users/{username}/received_events/public" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
} : P extends "/users/{username}/repos" ? {
    get: (username: string, type?: "all" | "owner" | "member", sort?: "created" | "updated" | "pushed" | "full_name", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
} : P extends "/users/{username}/starred" ? {
    get: (username: string, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
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
            }[];
        };
        headers: object;
    }>;
} : P extends "/users/{username}/subscriptions" ? {
    get: (username: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
                license: {
                    key: string;
                    name: string;
                    node_id: string;
                    spdx_id: string;
                    url: string;
                };
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
        };
        headers: object;
    }>;
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/users/{username}/following": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/following/{target_user}": return { get: (username: string, targetUser: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username, targetUser }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/gists": return { get: (username: string, since?: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/gpg_keys": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    can_certify: boolean;
                    can_encrypt_comms: boolean;
                    can_encrypt_storage: boolean;
                    can_sign: boolean;
                    created_at: string;
                    emails: {
                        email: string;
                        verified: boolean;
                    }[];
                    expires_at: string;
                    id: number;
                    key_id: string;
                    primary_key_id: string;
                    public_key: string;
                    subkeys: {
                        can_certify: boolean;
                        can_encrypt_comms: boolean;
                        can_encrypt_storage: boolean;
                        can_sign: boolean;
                        created_at: string;
                        emails: any[];
                        expires_at: string;
                        id: number;
                        key_id: string;
                        primary_key_id: number;
                        public_key: string;
                        subkeys: any[];
                    }[];
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/hovercard": return { get: (username: string, subjectType?: "organization" | "repository" | "issue" | "pull_request", subjectId?: string, accept?: string): Promise<{
                status: 200;
                data: {
                    contexts: {
                        message: string;
                        octicon: string;
                    }[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { subjectType, subjectId }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/installation": return { get: (username: string, accept: string): Promise<{
                status: 200;
                data: {
                    access_tokens_url: string;
                    account: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    app_id: number;
                    created_at: string;
                    events: string[];
                    html_url: string;
                    id: number;
                    permissions: {
                        checks: string;
                        contents: string;
                        metadata: string;
                    };
                    repositories_url: string;
                    repository_selection: string;
                    single_file_name: string;
                    target_id: number;
                    target_type: string;
                    updated_at: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/keys": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    id: number;
                    key: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/orgs": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/projects": return { get: (username: string, accept: string, state?: "open" | "closed" | "all", perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    body: string;
                    columns_url: string;
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
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    number: number;
                    owner_url: string;
                    state: string;
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { state, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/received_events": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/received_events/public": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/repos": return { get: (username: string, type?: "all" | "owner" | "member", sort?: "created" | "updated" | "pushed" | "full_name", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { type, sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/starred": return { get: (username: string, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
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
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/subscriptions": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
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
                    license: {
                        key: string;
                        name: string;
                        node_id: string;
                        spdx_id: string;
                        url: string;
                    };
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/users/{username}/following": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/following/{target_user}": return { get: (username: string, targetUser: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username, targetUser }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/gists": return { get: (username: string, since?: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/gpg_keys": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        can_certify: boolean;
                        can_encrypt_comms: boolean;
                        can_encrypt_storage: boolean;
                        can_sign: boolean;
                        created_at: string;
                        emails: {
                            email: string;
                            verified: boolean;
                        }[];
                        expires_at: string;
                        id: number;
                        key_id: string;
                        primary_key_id: string;
                        public_key: string;
                        subkeys: {
                            can_certify: boolean;
                            can_encrypt_comms: boolean;
                            can_encrypt_storage: boolean;
                            can_sign: boolean;
                            created_at: string;
                            emails: any[];
                            expires_at: string;
                            id: number;
                            key_id: string;
                            primary_key_id: number;
                            public_key: string;
                            subkeys: any[];
                        }[];
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/hovercard": return { get: (username: string, subjectType?: "organization" | "repository" | "issue" | "pull_request", subjectId?: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        contexts: {
                            message: string;
                            octicon: string;
                        }[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { subjectType, subjectId }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/installation": return { get: (username: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        access_tokens_url: string;
                        account: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        app_id: number;
                        created_at: string;
                        events: string[];
                        html_url: string;
                        id: number;
                        permissions: {
                            checks: string;
                            contents: string;
                            metadata: string;
                        };
                        repositories_url: string;
                        repository_selection: string;
                        single_file_name: string;
                        target_id: number;
                        target_type: string;
                        updated_at: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/keys": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        id: number;
                        key: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/orgs": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/projects": return { get: (username: string, accept: string, state?: "open" | "closed" | "all", perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        columns_url: string;
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
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        number: number;
                        owner_url: string;
                        state: string;
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { state, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/received_events": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/received_events/public": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/repos": return { get: (username: string, type?: "all" | "owner" | "member", sort?: "created" | "updated" | "pushed" | "full_name", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { type, sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/starred": return { get: (username: string, sort?: "created" | "updated", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/users/{username}/subscriptions": return { get: (username: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                        license: {
                            key: string;
                            name: string;
                            node_id: string;
                            spdx_id: string;
                            url: string;
                        };
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
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { username }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
