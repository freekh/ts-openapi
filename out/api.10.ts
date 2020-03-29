import * as tsgen from "./engine";
export const allPaths = ["/repos/{owner}/{repo}/git/tags/{tag_sha}", "/repos/{owner}/{repo}/git/trees", "/repos/{owner}/{repo}/git/trees/{tree_sha}", "/repos/{owner}/{repo}/hooks", "/repos/{owner}/{repo}/hooks/{hook_id}", "/repos/{owner}/{repo}/hooks/{hook_id}/pings", "/repos/{owner}/{repo}/hooks/{hook_id}/tests", "/repos/{owner}/{repo}/import", "/repos/{owner}/{repo}/import/authors", "/repos/{owner}/{repo}/import/authors/{author_id}", "/repos/{owner}/{repo}/import/large_files", "/repos/{owner}/{repo}/import/lfs", "/repos/{owner}/{repo}/installation", "/repos/{owner}/{repo}/interaction-limits", "/repos/{owner}/{repo}/invitations", "/repos/{owner}/{repo}/invitations/{invitation_id}", "/repos/{owner}/{repo}/issues", "/repos/{owner}/{repo}/issues/comments", "/repos/{owner}/{repo}/issues/comments/{comment_id}", "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"];
export type Paths = "/repos/{owner}/{repo}/git/tags/{tag_sha}" | "/repos/{owner}/{repo}/git/trees" | "/repos/{owner}/{repo}/git/trees/{tree_sha}" | "/repos/{owner}/{repo}/hooks" | "/repos/{owner}/{repo}/hooks/{hook_id}" | "/repos/{owner}/{repo}/hooks/{hook_id}/pings" | "/repos/{owner}/{repo}/hooks/{hook_id}/tests" | "/repos/{owner}/{repo}/import" | "/repos/{owner}/{repo}/import/authors" | "/repos/{owner}/{repo}/import/authors/{author_id}" | "/repos/{owner}/{repo}/import/large_files" | "/repos/{owner}/{repo}/import/lfs" | "/repos/{owner}/{repo}/installation" | "/repos/{owner}/{repo}/interaction-limits" | "/repos/{owner}/{repo}/invitations" | "/repos/{owner}/{repo}/invitations/{invitation_id}" | "/repos/{owner}/{repo}/issues" | "/repos/{owner}/{repo}/issues/comments" | "/repos/{owner}/{repo}/issues/comments/{comment_id}" | "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/repos/{owner}/{repo}/git/tags/{tag_sha}" ? {
    get: (owner: string, repo: string, tagSha: string, accept?: string) => Promise<{
        status: 200;
        data: {
            message: string;
            node_id: string;
            object: {
                sha: string;
                type: string;
                url: string;
            };
            sha: string;
            tag: string;
            tagger: {
                date: string;
                email: string;
                name: string;
            };
            url: string;
            verification: {
                payload: string;
                reason: string;
                signature: string;
                verified: boolean;
            };
        };
    }>;
} : P extends "/repos/{owner}/{repo}/git/trees" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
            sha: string;
            tree: {
                mode: string;
                path: string;
                sha: string;
                size: number;
                type: string;
                url: string;
            }[];
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/git/trees/{tree_sha}" ? {
    get: (owner: string, repo: string, treeSha: string, recursive?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            sha: string;
            tree: {
                mode: string;
                path: string;
                sha: string;
                size: number;
                type: string;
                url: string;
            }[];
            truncated: boolean;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/hooks" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            active: boolean;
            config: {
                content_type: string;
                insecure_ssl: string;
                url: string;
            };
            created_at: string;
            events: string[];
            id: number;
            last_response: {
                code: string;
                message: string;
                status: string;
            };
            name: string;
            ping_url: string;
            test_url: string;
            type: string;
            updated_at: string;
            url: string;
        }[];
    }>;
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
            active: boolean;
            config: {
                content_type: string;
                insecure_ssl: string;
                url: string;
            };
            created_at: string;
            events: string[];
            id: number;
            last_response: {
                code: string;
                message: string;
                status: string;
            };
            name: string;
            ping_url: string;
            test_url: string;
            type: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/hooks/{hook_id}" ? {
    delete: (owner: string, repo: string, hookId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, hookId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            active: boolean;
            config: {
                content_type: string;
                insecure_ssl: string;
                url: string;
            };
            created_at: string;
            events: string[];
            id: number;
            last_response: {
                code: string;
                message: string;
                status: string;
            };
            name: string;
            ping_url: string;
            test_url: string;
            type: string;
            updated_at: string;
            url: string;
        };
    }>;
    patch: (owner: string, repo: string, hookId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            active: boolean;
            config: {
                content_type: string;
                insecure_ssl: string;
                url: string;
            };
            created_at: string;
            events: string[];
            id: number;
            last_response: {
                code: string;
                message: string;
                status: string;
            };
            name: string;
            ping_url: string;
            test_url: string;
            type: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/hooks/{hook_id}/pings" ? {
    post: (owner: string, repo: string, hookId: number, accept?: string) => Promise<{
        status: 204;
    }>;
} : P extends "/repos/{owner}/{repo}/hooks/{hook_id}/tests" ? {
    post: (owner: string, repo: string, hookId: number, accept?: string) => Promise<{
        status: 204;
    }>;
} : P extends "/repos/{owner}/{repo}/import" ? {
    delete: (owner: string, repo: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            authors_count: number;
            authors_url: string;
            has_large_files: boolean;
            html_url: string;
            large_files_count: number;
            large_files_size: number;
            repository_url: string;
            status: string;
            status_text: string;
            url: string;
            use_lfs: string;
            vcs: string;
            vcs_url: string;
        };
    }>;
    patch: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            authors_url: string;
            html_url: string;
            repository_url: string;
            status: string;
            url: string;
            use_lfs: string;
            vcs: string;
            vcs_url: string;
        };
    }>;
    put: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
            authors_count: number;
            authors_url: string;
            commit_count: number;
            has_large_files: boolean;
            html_url: string;
            large_files_count: number;
            large_files_size: number;
            percent: number;
            repository_url: string;
            status: string;
            status_text: string;
            url: string;
            use_lfs: string;
            vcs: string;
            vcs_url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/import/authors" ? {
    get: (owner: string, repo: string, since?: string, accept?: string) => Promise<{
        status: 200;
        data: {
            email: string;
            id: number;
            import_url: string;
            name: string;
            remote_id: string;
            remote_name: string;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/import/authors/{author_id}" ? {
    patch: (owner: string, repo: string, authorId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            email: string;
            id: number;
            import_url: string;
            name: string;
            remote_id: string;
            remote_name: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/import/large_files" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            oid: string;
            path: string;
            ref_name: string;
            size: number;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/import/lfs" ? {
    patch: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            authors_count: number;
            authors_url: string;
            has_large_files: boolean;
            html_url: string;
            large_files_count: number;
            large_files_size: number;
            repository_url: string;
            status: string;
            status_text: string;
            url: string;
            use_lfs: string;
            vcs: string;
            vcs_url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/installation" ? {
    get: (owner: string, repo: string, accept: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/interaction-limits" ? {
    delete: (owner: string, repo: string, accept: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, accept: string) => Promise<{
        status: 200;
        data: {
            expires_at: string;
            limit: string;
            origin: string;
        };
    }>;
    put: (owner: string, repo: string, accept: string) => Promise<{
        status: 200;
        data: {
            expires_at: string;
            limit: string;
            origin: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/invitations" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
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
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/invitations/{invitation_id}" ? {
    delete: (owner: string, repo: string, invitationId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    patch: (owner: string, repo: string, invitationId: number, accept?: string) => Promise<{
        status: 200;
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
} : P extends "/repos/{owner}/{repo}/issues" ? {
    get: (owner: string, repo: string, milestone?: string, state?: "open" | "closed" | "all", assignee?: string, creator?: string, mentioned?: string, labels?: string, sort?: "created" | "updated" | "comments", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
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
            closed_by: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
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
        };
    }>;
} : P extends "/repos/{owner}/{repo}/issues/comments" ? {
    get: (owner: string, repo: string, sort?: "created" | "updated", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            created_at: string;
            html_url: string;
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
} : P extends "/repos/{owner}/{repo}/issues/comments/{comment_id}" ? {
    delete: (owner: string, repo: string, commentId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, commentId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            created_at: string;
            html_url: string;
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
    patch: (owner: string, repo: string, commentId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            body: string;
            created_at: string;
            html_url: string;
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
} : P extends "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions" ? {
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
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/repos/{owner}/{repo}/git/tags/{tag_sha}" ? {
    get: (owner: string, repo: string, tagSha: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                message: string;
                node_id: string;
                object: {
                    sha: string;
                    type: string;
                    url: string;
                };
                sha: string;
                tag: string;
                tagger: {
                    date: string;
                    email: string;
                    name: string;
                };
                url: string;
                verification: {
                    payload: string;
                    reason: string;
                    signature: string;
                    verified: boolean;
                };
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/git/trees" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                sha: string;
                tree: {
                    mode: string;
                    path: string;
                    sha: string;
                    size: number;
                    type: string;
                    url: string;
                }[];
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/git/trees/{tree_sha}" ? {
    get: (owner: string, repo: string, treeSha: string, recursive?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                sha: string;
                tree: {
                    mode: string;
                    path: string;
                    sha: string;
                    size: number;
                    type: string;
                    url: string;
                }[];
                truncated: boolean;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/hooks" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                active: boolean;
                config: {
                    content_type: string;
                    insecure_ssl: string;
                    url: string;
                };
                created_at: string;
                events: string[];
                id: number;
                last_response: {
                    code: string;
                    message: string;
                    status: string;
                };
                name: string;
                ping_url: string;
                test_url: string;
                type: string;
                updated_at: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                active: boolean;
                config: {
                    content_type: string;
                    insecure_ssl: string;
                    url: string;
                };
                created_at: string;
                events: string[];
                id: number;
                last_response: {
                    code: string;
                    message: string;
                    status: string;
                };
                name: string;
                ping_url: string;
                test_url: string;
                type: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/hooks/{hook_id}" ? {
    delete: (owner: string, repo: string, hookId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, hookId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                active: boolean;
                config: {
                    content_type: string;
                    insecure_ssl: string;
                    url: string;
                };
                created_at: string;
                events: string[];
                id: number;
                last_response: {
                    code: string;
                    message: string;
                    status: string;
                };
                name: string;
                ping_url: string;
                test_url: string;
                type: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, hookId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                active: boolean;
                config: {
                    content_type: string;
                    insecure_ssl: string;
                    url: string;
                };
                created_at: string;
                events: string[];
                id: number;
                last_response: {
                    code: string;
                    message: string;
                    status: string;
                };
                name: string;
                ping_url: string;
                test_url: string;
                type: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/hooks/{hook_id}/pings" ? {
    post: (owner: string, repo: string, hookId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/hooks/{hook_id}/tests" ? {
    post: (owner: string, repo: string, hookId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/import" ? {
    delete: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                authors_count: number;
                authors_url: string;
                has_large_files: boolean;
                html_url: string;
                large_files_count: number;
                large_files_size: number;
                repository_url: string;
                status: string;
                status_text: string;
                url: string;
                use_lfs: string;
                vcs: string;
                vcs_url: string;
            };
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                authors_url: string;
                html_url: string;
                repository_url: string;
                status: string;
                url: string;
                use_lfs: string;
                vcs: string;
                vcs_url: string;
            };
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                authors_count: number;
                authors_url: string;
                commit_count: number;
                has_large_files: boolean;
                html_url: string;
                large_files_count: number;
                large_files_size: number;
                percent: number;
                repository_url: string;
                status: string;
                status_text: string;
                url: string;
                use_lfs: string;
                vcs: string;
                vcs_url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/import/authors" ? {
    get: (owner: string, repo: string, since?: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                email: string;
                id: number;
                import_url: string;
                name: string;
                remote_id: string;
                remote_name: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/import/authors/{author_id}" ? {
    patch: (owner: string, repo: string, authorId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                email: string;
                id: number;
                import_url: string;
                name: string;
                remote_id: string;
                remote_name: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/import/large_files" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                oid: string;
                path: string;
                ref_name: string;
                size: number;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/import/lfs" ? {
    patch: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                authors_count: number;
                authors_url: string;
                has_large_files: boolean;
                html_url: string;
                large_files_count: number;
                large_files_size: number;
                repository_url: string;
                status: string;
                status_text: string;
                url: string;
                use_lfs: string;
                vcs: string;
                vcs_url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/installation" ? {
    get: (owner: string, repo: string, accept: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/interaction-limits" ? {
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
            status: 200;
            data: {
                expires_at: string;
                limit: string;
                origin: string;
            };
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                expires_at: string;
                limit: string;
                origin: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/invitations" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
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
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/invitations/{invitation_id}" ? {
    delete: (owner: string, repo: string, invitationId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, invitationId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
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
} : P extends "/repos/{owner}/{repo}/issues" ? {
    get: (owner: string, repo: string, milestone?: string, state?: "open" | "closed" | "all", assignee?: string, creator?: string, mentioned?: string, labels?: string, sort?: "created" | "updated" | "comments", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
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
                closed_by: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
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
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/issues/comments" ? {
    get: (owner: string, repo: string, sort?: "created" | "updated", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                created_at: string;
                html_url: string;
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
} : P extends "/repos/{owner}/{repo}/issues/comments/{comment_id}" ? {
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
                created_at: string;
                html_url: string;
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
    patch: (owner: string, repo: string, commentId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                body: string;
                created_at: string;
                html_url: string;
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
} : P extends "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions" ? {
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
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/repos/{owner}/{repo}/git/tags/{tag_sha}": return { get: (owner: string, repo: string, tagSha: string, accept?: string): Promise<{
                status: 200;
                data: {
                    message: string;
                    node_id: string;
                    object: {
                        sha: string;
                        type: string;
                        url: string;
                    };
                    sha: string;
                    tag: string;
                    tagger: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    url: string;
                    verification: {
                        payload: string;
                        reason: string;
                        signature: string;
                        verified: boolean;
                    };
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, tagSha }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/trees": return { post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
                    sha: string;
                    tree: {
                        mode: string;
                        path: string;
                        sha: string;
                        size: number;
                        type: string;
                        url: string;
                    }[];
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/trees/{tree_sha}": return { get: (owner: string, repo: string, treeSha: string, recursive?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    sha: string;
                    tree: {
                        mode: string;
                        path: string;
                        sha: string;
                        size: number;
                        type: string;
                        url: string;
                    }[];
                    truncated: boolean;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, treeSha }), { recursive }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/hooks": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    active: boolean;
                    config: {
                        content_type: string;
                        insecure_ssl: string;
                        url: string;
                    };
                    created_at: string;
                    events: string[];
                    id: number;
                    last_response: {
                        code: string;
                        message: string;
                        status: string;
                    };
                    name: string;
                    ping_url: string;
                    test_url: string;
                    type: string;
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
                    active: boolean;
                    config: {
                        content_type: string;
                        insecure_ssl: string;
                        url: string;
                    };
                    created_at: string;
                    events: string[];
                    id: number;
                    last_response: {
                        code: string;
                        message: string;
                        status: string;
                    };
                    name: string;
                    ping_url: string;
                    test_url: string;
                    type: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/hooks/{hook_id}": return { delete: (owner: string, repo: string, hookId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, hookId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, hookId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    active: boolean;
                    config: {
                        content_type: string;
                        insecure_ssl: string;
                        url: string;
                    };
                    created_at: string;
                    events: string[];
                    id: number;
                    last_response: {
                        code: string;
                        message: string;
                        status: string;
                    };
                    name: string;
                    ping_url: string;
                    test_url: string;
                    type: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, hookId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, hookId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    active: boolean;
                    config: {
                        content_type: string;
                        insecure_ssl: string;
                        url: string;
                    };
                    created_at: string;
                    events: string[];
                    id: number;
                    last_response: {
                        code: string;
                        message: string;
                        status: string;
                    };
                    name: string;
                    ping_url: string;
                    test_url: string;
                    type: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, hookId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/hooks/{hook_id}/pings": return { post: (owner: string, repo: string, hookId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, hookId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/hooks/{hook_id}/tests": return { post: (owner: string, repo: string, hookId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, hookId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/import": return { delete: (owner: string, repo: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    authors_count: number;
                    authors_url: string;
                    has_large_files: boolean;
                    html_url: string;
                    large_files_count: number;
                    large_files_size: number;
                    repository_url: string;
                    status: string;
                    status_text: string;
                    url: string;
                    use_lfs: string;
                    vcs: string;
                    vcs_url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    authors_url: string;
                    html_url: string;
                    repository_url: string;
                    status: string;
                    url: string;
                    use_lfs: string;
                    vcs: string;
                    vcs_url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
                    authors_count: number;
                    authors_url: string;
                    commit_count: number;
                    has_large_files: boolean;
                    html_url: string;
                    large_files_count: number;
                    large_files_size: number;
                    percent: number;
                    repository_url: string;
                    status: string;
                    status_text: string;
                    url: string;
                    use_lfs: string;
                    vcs: string;
                    vcs_url: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/import/authors": return { get: (owner: string, repo: string, since?: string, accept?: string): Promise<{
                status: 200;
                data: {
                    email: string;
                    id: number;
                    import_url: string;
                    name: string;
                    remote_id: string;
                    remote_name: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { since }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/import/authors/{author_id}": return { patch: (owner: string, repo: string, authorId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    email: string;
                    id: number;
                    import_url: string;
                    name: string;
                    remote_id: string;
                    remote_name: string;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, authorId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/import/large_files": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    oid: string;
                    path: string;
                    ref_name: string;
                    size: number;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/import/lfs": return { patch: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    authors_count: number;
                    authors_url: string;
                    has_large_files: boolean;
                    html_url: string;
                    large_files_count: number;
                    large_files_size: number;
                    repository_url: string;
                    status: string;
                    status_text: string;
                    url: string;
                    use_lfs: string;
                    vcs: string;
                    vcs_url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/installation": return { get: (owner: string, repo: string, accept: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/interaction-limits": return { delete: (owner: string, repo: string, accept: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, accept: string): Promise<{
                status: 200;
                data: {
                    expires_at: string;
                    limit: string;
                    origin: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, accept: string): Promise<{
                status: 200;
                data: {
                    expires_at: string;
                    limit: string;
                    origin: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/invitations": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
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
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/invitations/{invitation_id}": return { delete: (owner: string, repo: string, invitationId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, invitationId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, invitationId: number, accept?: string): Promise<{
                status: 200;
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, invitationId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues": return { get: (owner: string, repo: string, milestone?: string, state?: "open" | "closed" | "all", assignee?: string, creator?: string, mentioned?: string, labels?: string, sort?: "created" | "updated" | "comments", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { milestone, state, assignee, creator, mentioned, labels, sort, direction, since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
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
                    closed_by: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
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
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/comments": return { get: (owner: string, repo: string, sort?: "created" | "updated", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    created_at: string;
                    html_url: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { sort, direction, since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/comments/{comment_id}": return { delete: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    created_at: string;
                    html_url: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    body: string;
                    created_at: string;
                    html_url: string;
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions": return { get: (owner: string, repo: string, commentId: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/repos/{owner}/{repo}/git/tags/{tag_sha}": return { get: (owner: string, repo: string, tagSha: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        message: string;
                        node_id: string;
                        object: {
                            sha: string;
                            type: string;
                            url: string;
                        };
                        sha: string;
                        tag: string;
                        tagger: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        url: string;
                        verification: {
                            payload: string;
                            reason: string;
                            signature: string;
                            verified: boolean;
                        };
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, tagSha }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/trees": return { post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        sha: string;
                        tree: {
                            mode: string;
                            path: string;
                            sha: string;
                            size: number;
                            type: string;
                            url: string;
                        }[];
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/trees/{tree_sha}": return { get: (owner: string, repo: string, treeSha: string, recursive?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        sha: string;
                        tree: {
                            mode: string;
                            path: string;
                            sha: string;
                            size: number;
                            type: string;
                            url: string;
                        }[];
                        truncated: boolean;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, treeSha }), { recursive }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/hooks": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        active: boolean;
                        config: {
                            content_type: string;
                            insecure_ssl: string;
                            url: string;
                        };
                        created_at: string;
                        events: string[];
                        id: number;
                        last_response: {
                            code: string;
                            message: string;
                            status: string;
                        };
                        name: string;
                        ping_url: string;
                        test_url: string;
                        type: string;
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        active: boolean;
                        config: {
                            content_type: string;
                            insecure_ssl: string;
                            url: string;
                        };
                        created_at: string;
                        events: string[];
                        id: number;
                        last_response: {
                            code: string;
                            message: string;
                            status: string;
                        };
                        name: string;
                        ping_url: string;
                        test_url: string;
                        type: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/hooks/{hook_id}": return { delete: (owner: string, repo: string, hookId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, hookId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, hookId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        active: boolean;
                        config: {
                            content_type: string;
                            insecure_ssl: string;
                            url: string;
                        };
                        created_at: string;
                        events: string[];
                        id: number;
                        last_response: {
                            code: string;
                            message: string;
                            status: string;
                        };
                        name: string;
                        ping_url: string;
                        test_url: string;
                        type: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, hookId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, hookId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        active: boolean;
                        config: {
                            content_type: string;
                            insecure_ssl: string;
                            url: string;
                        };
                        created_at: string;
                        events: string[];
                        id: number;
                        last_response: {
                            code: string;
                            message: string;
                            status: string;
                        };
                        name: string;
                        ping_url: string;
                        test_url: string;
                        type: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, hookId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/hooks/{hook_id}/pings": return { post: (owner: string, repo: string, hookId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, hookId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/hooks/{hook_id}/tests": return { post: (owner: string, repo: string, hookId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, hookId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/import": return { delete: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        authors_count: number;
                        authors_url: string;
                        has_large_files: boolean;
                        html_url: string;
                        large_files_count: number;
                        large_files_size: number;
                        repository_url: string;
                        status: string;
                        status_text: string;
                        url: string;
                        use_lfs: string;
                        vcs: string;
                        vcs_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        authors_url: string;
                        html_url: string;
                        repository_url: string;
                        status: string;
                        url: string;
                        use_lfs: string;
                        vcs: string;
                        vcs_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        authors_count: number;
                        authors_url: string;
                        commit_count: number;
                        has_large_files: boolean;
                        html_url: string;
                        large_files_count: number;
                        large_files_size: number;
                        percent: number;
                        repository_url: string;
                        status: string;
                        status_text: string;
                        url: string;
                        use_lfs: string;
                        vcs: string;
                        vcs_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/import/authors": return { get: (owner: string, repo: string, since?: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        email: string;
                        id: number;
                        import_url: string;
                        name: string;
                        remote_id: string;
                        remote_name: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { since }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/import/authors/{author_id}": return { patch: (owner: string, repo: string, authorId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        email: string;
                        id: number;
                        import_url: string;
                        name: string;
                        remote_id: string;
                        remote_name: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, authorId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/import/large_files": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        oid: string;
                        path: string;
                        ref_name: string;
                        size: number;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/import/lfs": return { patch: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        authors_count: number;
                        authors_url: string;
                        has_large_files: boolean;
                        html_url: string;
                        large_files_count: number;
                        large_files_size: number;
                        repository_url: string;
                        status: string;
                        status_text: string;
                        url: string;
                        use_lfs: string;
                        vcs: string;
                        vcs_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/installation": return { get: (owner: string, repo: string, accept: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/interaction-limits": return { delete: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        expires_at: string;
                        limit: string;
                        origin: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        expires_at: string;
                        limit: string;
                        origin: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/invitations": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/invitations/{invitation_id}": return { delete: (owner: string, repo: string, invitationId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, invitationId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, invitationId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, invitationId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues": return { get: (owner: string, repo: string, milestone?: string, state?: "open" | "closed" | "all", assignee?: string, creator?: string, mentioned?: string, labels?: string, sort?: "created" | "updated" | "comments", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { milestone, state, assignee, creator, mentioned, labels, sort, direction, since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
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
                        closed_by: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
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
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/comments": return { get: (owner: string, repo: string, sort?: "created" | "updated", direction?: "asc" | "desc", since?: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        created_at: string;
                        html_url: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { sort, direction, since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/comments/{comment_id}": return { delete: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
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
                        created_at: string;
                        html_url: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, commentId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        body: string;
                        created_at: string;
                        html_url: string;
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, commentId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions": return { get: (owner: string, repo: string, commentId: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
