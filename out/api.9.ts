import * as tsgen from "./engine";
export const allPaths = ["/repos/{owner}/{repo}/contents/{path}", "/repos/{owner}/{repo}/contributors", "/repos/{owner}/{repo}/deployments", "/repos/{owner}/{repo}/deployments/{deployment_id}", "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}", "/repos/{owner}/{repo}/dispatches", "/repos/{owner}/{repo}/downloads", "/repos/{owner}/{repo}/downloads/{download_id}", "/repos/{owner}/{repo}/events", "/repos/{owner}/{repo}/forks", "/repos/{owner}/{repo}/git/blobs", "/repos/{owner}/{repo}/git/blobs/{file_sha}", "/repos/{owner}/{repo}/git/commits", "/repos/{owner}/{repo}/git/commits/{commit_sha}", "/repos/{owner}/{repo}/git/matching-refs/{ref}", "/repos/{owner}/{repo}/git/ref/{ref}", "/repos/{owner}/{repo}/git/refs", "/repos/{owner}/{repo}/git/refs/{ref}", "/repos/{owner}/{repo}/git/tags"];
export type Paths = "/repos/{owner}/{repo}/contents/{path}" | "/repos/{owner}/{repo}/contributors" | "/repos/{owner}/{repo}/deployments" | "/repos/{owner}/{repo}/deployments/{deployment_id}" | "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses" | "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}" | "/repos/{owner}/{repo}/dispatches" | "/repos/{owner}/{repo}/downloads" | "/repos/{owner}/{repo}/downloads/{download_id}" | "/repos/{owner}/{repo}/events" | "/repos/{owner}/{repo}/forks" | "/repos/{owner}/{repo}/git/blobs" | "/repos/{owner}/{repo}/git/blobs/{file_sha}" | "/repos/{owner}/{repo}/git/commits" | "/repos/{owner}/{repo}/git/commits/{commit_sha}" | "/repos/{owner}/{repo}/git/matching-refs/{ref}" | "/repos/{owner}/{repo}/git/ref/{ref}" | "/repos/{owner}/{repo}/git/refs" | "/repos/{owner}/{repo}/git/refs/{ref}" | "/repos/{owner}/{repo}/git/tags";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/repos/{owner}/{repo}/contents/{path}" ? {
    delete: (owner: string, repo: string, path: string, accept?: string) => Promise<{
        status: 200;
        data: {
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
                html_url: string;
                message: string;
                node_id: string;
                parents: {
                    html_url: string;
                    sha: string;
                    url: string;
                }[];
                sha: string;
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
            content: string;
        };
    }>;
    get: (owner: string, repo: string, path: string, ref?: string, accept?: string) => Promise<{
        status: 200;
        data: {
            _links: {
                git: string;
                html: string;
                self: string;
            };
            content: string;
            download_url: string;
            encoding: string;
            git_url: string;
            html_url: string;
            name: string;
            path: string;
            sha: string;
            size: number;
            type: string;
            url: string;
        };
    }>;
    put: (owner: string, repo: string, path: string, accept?: string) => Promise<{
        status: 200;
        data: {
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
                html_url: string;
                message: string;
                node_id: string;
                parents: {
                    html_url: string;
                    sha: string;
                    url: string;
                }[];
                sha: string;
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
            content: {
                _links: {
                    git: string;
                    html: string;
                    self: string;
                };
                download_url: string;
                git_url: string;
                html_url: string;
                name: string;
                path: string;
                sha: string;
                size: number;
                type: string;
                url: string;
            };
        };
    } | {
        status: 201;
        data: {
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
                html_url: string;
                message: string;
                node_id: string;
                parents: {
                    html_url: string;
                    sha: string;
                    url: string;
                }[];
                sha: string;
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
            content: {
                _links: {
                    git: string;
                    html: string;
                    self: string;
                };
                download_url: string;
                git_url: string;
                html_url: string;
                name: string;
                path: string;
                sha: string;
                size: number;
                type: string;
                url: string;
            };
        };
    }>;
} : P extends "/repos/{owner}/{repo}/contributors" ? {
    get: (owner: string, repo: string, anon?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            avatar_url: string;
            contributions: number;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            html_url: string;
            id: number;
            login: string;
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
    } | {
        status: 204;
    }>;
} : P extends "/repos/{owner}/{repo}/deployments" ? {
    get: (owner: string, repo: string, sha?: string, ref?: string, task?: string, environment?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
            environment: string;
            id: number;
            node_id: string;
            original_environment: string;
            payload: {
                deploy: string;
            };
            production_environment: boolean;
            ref: string;
            repository_url: string;
            sha: string;
            statuses_url: string;
            task: string;
            transient_environment: boolean;
            updated_at: string;
            url: string;
        }[];
    }>;
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
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
            environment: string;
            id: number;
            node_id: string;
            original_environment: string;
            payload: {
                deploy: string;
            };
            production_environment: boolean;
            ref: string;
            repository_url: string;
            sha: string;
            statuses_url: string;
            task: string;
            transient_environment: boolean;
            updated_at: string;
            url: string;
        };
    } | {
        status: 202;
        data: {
            message: string;
        };
    } | {
        status: 409;
        error: {
            message: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/deployments/{deployment_id}" ? {
    delete: (owner: string, repo: string, deploymentId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, deploymentId: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
            environment: string;
            id: number;
            node_id: string;
            original_environment: string;
            payload: {
                deploy: string;
            };
            production_environment: boolean;
            ref: string;
            repository_url: string;
            sha: string;
            statuses_url: string;
            task: string;
            transient_environment: boolean;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses" ? {
    get: (owner: string, repo: string, deploymentId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
            deployment_url: string;
            description: string;
            environment: string;
            environment_url: string;
            id: number;
            log_url: string;
            node_id: string;
            repository_url: string;
            state: string;
            target_url: string;
            updated_at: string;
            url: string;
        }[];
    }>;
    post: (owner: string, repo: string, deploymentId: number, accept?: string) => Promise<{
        status: 201;
        data: {
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
            deployment_url: string;
            description: string;
            environment: string;
            environment_url: string;
            id: number;
            log_url: string;
            node_id: string;
            repository_url: string;
            state: string;
            target_url: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}" ? {
    get: (owner: string, repo: string, deploymentId: number, statusId: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
            deployment_url: string;
            description: string;
            environment: string;
            environment_url: string;
            id: number;
            log_url: string;
            node_id: string;
            repository_url: string;
            state: string;
            target_url: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/dispatches" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 204;
    }>;
} : P extends "/repos/{owner}/{repo}/downloads" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            content_type: string;
            description: string;
            download_count: number;
            html_url: string;
            id: number;
            name: string;
            size: number;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/downloads/{download_id}" ? {
    delete: (owner: string, repo: string, downloadId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, downloadId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            content_type: string;
            description: string;
            download_count: number;
            html_url: string;
            id: number;
            name: string;
            size: number;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/events" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 418;
    }>;
} : P extends "/repos/{owner}/{repo}/forks" ? {
    get: (owner: string, repo: string, sort?: "newest" | "oldest" | "stargazers", perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/git/blobs" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
            sha: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/git/blobs/{file_sha}" ? {
    get: (owner: string, repo: string, fileSha: string, accept?: string) => Promise<{
        status: 200;
        data: {
            content: string;
            encoding: string;
            sha: string;
            size: number;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/git/commits" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
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
            node_id: string;
            parents: {
                sha: string;
                url: string;
            }[];
            sha: string;
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
    }>;
} : P extends "/repos/{owner}/{repo}/git/commits/{commit_sha}" ? {
    get: (owner: string, repo: string, commitSha: string, accept?: string) => Promise<{
        status: 200;
        data: {
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
            parents: {
                sha: string;
                url: string;
            }[];
            sha: string;
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
    }>;
} : P extends "/repos/{owner}/{repo}/git/matching-refs/{ref}" ? {
    get: (owner: string, repo: string, ref: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            node_id: string;
            object: {
                sha: string;
                type: string;
                url: string;
            };
            ref: string;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/git/ref/{ref}" ? {
    get: (owner: string, repo: string, ref: string, accept?: string) => Promise<{
        status: 200;
        data: {
            node_id: string;
            object: {
                sha: string;
                type: string;
                url: string;
            };
            ref: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/git/refs" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
            node_id: string;
            object: {
                sha: string;
                type: string;
                url: string;
            };
            ref: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/git/refs/{ref}" ? {
    delete: (owner: string, repo: string, ref: string, accept?: string) => Promise<{
        status: 204;
    }>;
    patch: (owner: string, repo: string, ref: string, accept?: string) => Promise<{
        status: 200;
        data: {
            node_id: string;
            object: {
                sha: string;
                type: string;
                url: string;
            };
            ref: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/git/tags" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
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
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/repos/{owner}/{repo}/contents/{path}" ? {
    delete: (owner: string, repo: string, path: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
                    html_url: string;
                    message: string;
                    node_id: string;
                    parents: {
                        html_url: string;
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
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
                content: string;
            };
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, path: string, ref?: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                _links: {
                    git: string;
                    html: string;
                    self: string;
                };
                content: string;
                download_url: string;
                encoding: string;
                git_url: string;
                html_url: string;
                name: string;
                path: string;
                sha: string;
                size: number;
                type: string;
                url: string;
            };
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, path: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
                    html_url: string;
                    message: string;
                    node_id: string;
                    parents: {
                        html_url: string;
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
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
                content: {
                    _links: {
                        git: string;
                        html: string;
                        self: string;
                    };
                    download_url: string;
                    git_url: string;
                    html_url: string;
                    name: string;
                    path: string;
                    sha: string;
                    size: number;
                    type: string;
                    url: string;
                };
            };
        } | {
            status: 201;
            data: {
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
                    html_url: string;
                    message: string;
                    node_id: string;
                    parents: {
                        html_url: string;
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
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
                content: {
                    _links: {
                        git: string;
                        html: string;
                        self: string;
                    };
                    download_url: string;
                    git_url: string;
                    html_url: string;
                    name: string;
                    path: string;
                    sha: string;
                    size: number;
                    type: string;
                    url: string;
                };
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/contributors" ? {
    get: (owner: string, repo: string, anon?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                avatar_url: string;
                contributions: number;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
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
        } | {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/deployments" ? {
    get: (owner: string, repo: string, sha?: string, ref?: string, task?: string, environment?: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
                environment: string;
                id: number;
                node_id: string;
                original_environment: string;
                payload: {
                    deploy: string;
                };
                production_environment: boolean;
                ref: string;
                repository_url: string;
                sha: string;
                statuses_url: string;
                task: string;
                transient_environment: boolean;
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
                environment: string;
                id: number;
                node_id: string;
                original_environment: string;
                payload: {
                    deploy: string;
                };
                production_environment: boolean;
                ref: string;
                repository_url: string;
                sha: string;
                statuses_url: string;
                task: string;
                transient_environment: boolean;
                updated_at: string;
                url: string;
            };
        } | {
            status: 202;
            data: {
                message: string;
            };
        } | {
            status: 409;
            error: {
                message: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/deployments/{deployment_id}" ? {
    delete: (owner: string, repo: string, deploymentId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, deploymentId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
                environment: string;
                id: number;
                node_id: string;
                original_environment: string;
                payload: {
                    deploy: string;
                };
                production_environment: boolean;
                ref: string;
                repository_url: string;
                sha: string;
                statuses_url: string;
                task: string;
                transient_environment: boolean;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses" ? {
    get: (owner: string, repo: string, deploymentId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
                deployment_url: string;
                description: string;
                environment: string;
                environment_url: string;
                id: number;
                log_url: string;
                node_id: string;
                repository_url: string;
                state: string;
                target_url: string;
                updated_at: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, deploymentId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
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
                deployment_url: string;
                description: string;
                environment: string;
                environment_url: string;
                id: number;
                log_url: string;
                node_id: string;
                repository_url: string;
                state: string;
                target_url: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}" ? {
    get: (owner: string, repo: string, deploymentId: number, statusId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
                deployment_url: string;
                description: string;
                environment: string;
                environment_url: string;
                id: number;
                log_url: string;
                node_id: string;
                repository_url: string;
                state: string;
                target_url: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/dispatches" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/downloads" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                content_type: string;
                description: string;
                download_count: number;
                html_url: string;
                id: number;
                name: string;
                size: number;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/downloads/{download_id}" ? {
    delete: (owner: string, repo: string, downloadId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, downloadId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                content_type: string;
                description: string;
                download_count: number;
                html_url: string;
                id: number;
                name: string;
                size: number;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/events" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 418;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/forks" ? {
    get: (owner: string, repo: string, sort?: "newest" | "oldest" | "stargazers", perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/git/blobs" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                sha: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/git/blobs/{file_sha}" ? {
    get: (owner: string, repo: string, fileSha: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                content: string;
                encoding: string;
                sha: string;
                size: number;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/git/commits" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
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
                node_id: string;
                parents: {
                    sha: string;
                    url: string;
                }[];
                sha: string;
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
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/git/commits/{commit_sha}" ? {
    get: (owner: string, repo: string, commitSha: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
                parents: {
                    sha: string;
                    url: string;
                }[];
                sha: string;
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
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/git/matching-refs/{ref}" ? {
    get: (owner: string, repo: string, ref: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                node_id: string;
                object: {
                    sha: string;
                    type: string;
                    url: string;
                };
                ref: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/git/ref/{ref}" ? {
    get: (owner: string, repo: string, ref: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                node_id: string;
                object: {
                    sha: string;
                    type: string;
                    url: string;
                };
                ref: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/git/refs" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                node_id: string;
                object: {
                    sha: string;
                    type: string;
                    url: string;
                };
                ref: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/git/refs/{ref}" ? {
    delete: (owner: string, repo: string, ref: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, ref: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                node_id: string;
                object: {
                    sha: string;
                    type: string;
                    url: string;
                };
                ref: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/git/tags" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
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
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/repos/{owner}/{repo}/contents/{path}": return { delete: (owner: string, repo: string, path: string, accept?: string): Promise<{
                status: 200;
                data: {
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
                        html_url: string;
                        message: string;
                        node_id: string;
                        parents: {
                            html_url: string;
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
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
                    content: string;
                };
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, path }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), get: (owner: string, repo: string, path: string, ref?: string, accept?: string): Promise<{
                status: 200;
                data: {
                    _links: {
                        git: string;
                        html: string;
                        self: string;
                    };
                    content: string;
                    download_url: string;
                    encoding: string;
                    git_url: string;
                    html_url: string;
                    name: string;
                    path: string;
                    sha: string;
                    size: number;
                    type: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, path }), { ref }, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, path: string, accept?: string): Promise<{
                status: 200;
                data: {
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
                        html_url: string;
                        message: string;
                        node_id: string;
                        parents: {
                            html_url: string;
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
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
                    content: {
                        _links: {
                            git: string;
                            html: string;
                            self: string;
                        };
                        download_url: string;
                        git_url: string;
                        html_url: string;
                        name: string;
                        path: string;
                        sha: string;
                        size: number;
                        type: string;
                        url: string;
                    };
                };
            } | {
                status: 201;
                data: {
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
                        html_url: string;
                        message: string;
                        node_id: string;
                        parents: {
                            html_url: string;
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
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
                    content: {
                        _links: {
                            git: string;
                            html: string;
                            self: string;
                        };
                        download_url: string;
                        git_url: string;
                        html_url: string;
                        name: string;
                        path: string;
                        sha: string;
                        size: number;
                        type: string;
                        url: string;
                    };
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, path }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/contributors": return { get: (owner: string, repo: string, anon?: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    avatar_url: string;
                    contributions: number;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
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
            } | {
                status: 204;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { anon, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/deployments": return { get: (owner: string, repo: string, sha?: string, ref?: string, task?: string, environment?: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
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
                    environment: string;
                    id: number;
                    node_id: string;
                    original_environment: string;
                    payload: {
                        deploy: string;
                    };
                    production_environment: boolean;
                    ref: string;
                    repository_url: string;
                    sha: string;
                    statuses_url: string;
                    task: string;
                    transient_environment: boolean;
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { sha, ref, task, environment, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
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
                    environment: string;
                    id: number;
                    node_id: string;
                    original_environment: string;
                    payload: {
                        deploy: string;
                    };
                    production_environment: boolean;
                    ref: string;
                    repository_url: string;
                    sha: string;
                    statuses_url: string;
                    task: string;
                    transient_environment: boolean;
                    updated_at: string;
                    url: string;
                };
            } | {
                status: 202;
                data: {
                    message: string;
                };
            } | {
                status: 409;
                error: {
                    message: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/deployments/{deployment_id}": return { delete: (owner: string, repo: string, deploymentId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, deploymentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, deploymentId: number, accept?: string): Promise<{
                status: 200;
                data: {
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
                    environment: string;
                    id: number;
                    node_id: string;
                    original_environment: string;
                    payload: {
                        deploy: string;
                    };
                    production_environment: boolean;
                    ref: string;
                    repository_url: string;
                    sha: string;
                    statuses_url: string;
                    task: string;
                    transient_environment: boolean;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, deploymentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses": return { get: (owner: string, repo: string, deploymentId: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
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
                    deployment_url: string;
                    description: string;
                    environment: string;
                    environment_url: string;
                    id: number;
                    log_url: string;
                    node_id: string;
                    repository_url: string;
                    state: string;
                    target_url: string;
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, deploymentId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, deploymentId: number, accept?: string): Promise<{
                status: 201;
                data: {
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
                    deployment_url: string;
                    description: string;
                    environment: string;
                    environment_url: string;
                    id: number;
                    log_url: string;
                    node_id: string;
                    repository_url: string;
                    state: string;
                    target_url: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, deploymentId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}": return { get: (owner: string, repo: string, deploymentId: number, statusId: number, accept?: string): Promise<{
                status: 200;
                data: {
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
                    deployment_url: string;
                    description: string;
                    environment: string;
                    environment_url: string;
                    id: number;
                    log_url: string;
                    node_id: string;
                    repository_url: string;
                    state: string;
                    target_url: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, deploymentId, statusId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/dispatches": return { post: (owner: string, repo: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/downloads": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    content_type: string;
                    description: string;
                    download_count: number;
                    html_url: string;
                    id: number;
                    name: string;
                    size: number;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/downloads/{download_id}": return { delete: (owner: string, repo: string, downloadId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, downloadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, downloadId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    content_type: string;
                    description: string;
                    download_count: number;
                    html_url: string;
                    id: number;
                    name: string;
                    size: number;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, downloadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/events": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 418;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/forks": return { get: (owner: string, repo: string, sort?: "newest" | "oldest" | "stargazers", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { sort, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
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
        case "/repos/{owner}/{repo}/git/blobs": return { post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
                    sha: string;
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/blobs/{file_sha}": return { get: (owner: string, repo: string, fileSha: string, accept?: string): Promise<{
                status: 200;
                data: {
                    content: string;
                    encoding: string;
                    sha: string;
                    size: number;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, fileSha }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/commits": return { post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
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
                    node_id: string;
                    parents: {
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/commits/{commit_sha}": return { get: (owner: string, repo: string, commitSha: string, accept?: string): Promise<{
                status: 200;
                data: {
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
                    parents: {
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commitSha }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/matching-refs/{ref}": return { get: (owner: string, repo: string, ref: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    node_id: string;
                    object: {
                        sha: string;
                        type: string;
                        url: string;
                    };
                    ref: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/ref/{ref}": return { get: (owner: string, repo: string, ref: string, accept?: string): Promise<{
                status: 200;
                data: {
                    node_id: string;
                    object: {
                        sha: string;
                        type: string;
                        url: string;
                    };
                    ref: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/refs": return { post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
                    node_id: string;
                    object: {
                        sha: string;
                        type: string;
                        url: string;
                    };
                    ref: string;
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/refs/{ref}": return { delete: (owner: string, repo: string, ref: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, ref }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, ref: string, accept?: string): Promise<{
                status: 200;
                data: {
                    node_id: string;
                    object: {
                        sha: string;
                        type: string;
                        url: string;
                    };
                    ref: string;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, ref }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/tags": return { post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/repos/{owner}/{repo}/contents/{path}": return { delete: (owner: string, repo: string, path: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                            html_url: string;
                            message: string;
                            node_id: string;
                            parents: {
                                html_url: string;
                                sha: string;
                                url: string;
                            }[];
                            sha: string;
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
                        content: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, path }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), get: (owner: string, repo: string, path: string, ref?: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        _links: {
                            git: string;
                            html: string;
                            self: string;
                        };
                        content: string;
                        download_url: string;
                        encoding: string;
                        git_url: string;
                        html_url: string;
                        name: string;
                        path: string;
                        sha: string;
                        size: number;
                        type: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, path }), { ref }, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, path: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                            html_url: string;
                            message: string;
                            node_id: string;
                            parents: {
                                html_url: string;
                                sha: string;
                                url: string;
                            }[];
                            sha: string;
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
                        content: {
                            _links: {
                                git: string;
                                html: string;
                                self: string;
                            };
                            download_url: string;
                            git_url: string;
                            html_url: string;
                            name: string;
                            path: string;
                            sha: string;
                            size: number;
                            type: string;
                            url: string;
                        };
                    };
                } | {
                    status: 201;
                    data: {
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
                            html_url: string;
                            message: string;
                            node_id: string;
                            parents: {
                                html_url: string;
                                sha: string;
                                url: string;
                            }[];
                            sha: string;
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
                        content: {
                            _links: {
                                git: string;
                                html: string;
                                self: string;
                            };
                            download_url: string;
                            git_url: string;
                            html_url: string;
                            name: string;
                            path: string;
                            sha: string;
                            size: number;
                            type: string;
                            url: string;
                        };
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, path }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/contributors": return { get: (owner: string, repo: string, anon?: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        avatar_url: string;
                        contributions: number;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
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
                } | {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { anon, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/deployments": return { get: (owner: string, repo: string, sha?: string, ref?: string, task?: string, environment?: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                        environment: string;
                        id: number;
                        node_id: string;
                        original_environment: string;
                        payload: {
                            deploy: string;
                        };
                        production_environment: boolean;
                        ref: string;
                        repository_url: string;
                        sha: string;
                        statuses_url: string;
                        task: string;
                        transient_environment: boolean;
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { sha, ref, task, environment, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
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
                        environment: string;
                        id: number;
                        node_id: string;
                        original_environment: string;
                        payload: {
                            deploy: string;
                        };
                        production_environment: boolean;
                        ref: string;
                        repository_url: string;
                        sha: string;
                        statuses_url: string;
                        task: string;
                        transient_environment: boolean;
                        updated_at: string;
                        url: string;
                    };
                } | {
                    status: 202;
                    data: {
                        message: string;
                    };
                } | {
                    status: 409;
                    error: {
                        message: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/deployments/{deployment_id}": return { delete: (owner: string, repo: string, deploymentId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, deploymentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, deploymentId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                        environment: string;
                        id: number;
                        node_id: string;
                        original_environment: string;
                        payload: {
                            deploy: string;
                        };
                        production_environment: boolean;
                        ref: string;
                        repository_url: string;
                        sha: string;
                        statuses_url: string;
                        task: string;
                        transient_environment: boolean;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, deploymentId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses": return { get: (owner: string, repo: string, deploymentId: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                        deployment_url: string;
                        description: string;
                        environment: string;
                        environment_url: string;
                        id: number;
                        log_url: string;
                        node_id: string;
                        repository_url: string;
                        state: string;
                        target_url: string;
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, deploymentId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, deploymentId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
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
                        deployment_url: string;
                        description: string;
                        environment: string;
                        environment_url: string;
                        id: number;
                        log_url: string;
                        node_id: string;
                        repository_url: string;
                        state: string;
                        target_url: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, deploymentId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}": return { get: (owner: string, repo: string, deploymentId: number, statusId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                        deployment_url: string;
                        description: string;
                        environment: string;
                        environment_url: string;
                        id: number;
                        log_url: string;
                        node_id: string;
                        repository_url: string;
                        state: string;
                        target_url: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, deploymentId, statusId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/dispatches": return { post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/downloads": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        content_type: string;
                        description: string;
                        download_count: number;
                        html_url: string;
                        id: number;
                        name: string;
                        size: number;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/downloads/{download_id}": return { delete: (owner: string, repo: string, downloadId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, downloadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, downloadId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        content_type: string;
                        description: string;
                        download_count: number;
                        html_url: string;
                        id: number;
                        name: string;
                        size: number;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, downloadId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/events": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 418;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/forks": return { get: (owner: string, repo: string, sort?: "newest" | "oldest" | "stargazers", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { sort, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
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
        case "/repos/{owner}/{repo}/git/blobs": return { post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        sha: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/blobs/{file_sha}": return { get: (owner: string, repo: string, fileSha: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        content: string;
                        encoding: string;
                        sha: string;
                        size: number;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, fileSha }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/commits": return { post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
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
                        node_id: string;
                        parents: {
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
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
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/commits/{commit_sha}": return { get: (owner: string, repo: string, commitSha: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                        parents: {
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
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
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, commitSha }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/matching-refs/{ref}": return { get: (owner: string, repo: string, ref: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        node_id: string;
                        object: {
                            sha: string;
                            type: string;
                            url: string;
                        };
                        ref: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/ref/{ref}": return { get: (owner: string, repo: string, ref: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        node_id: string;
                        object: {
                            sha: string;
                            type: string;
                            url: string;
                        };
                        ref: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, ref }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/refs": return { post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        node_id: string;
                        object: {
                            sha: string;
                            type: string;
                            url: string;
                        };
                        ref: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/refs/{ref}": return { delete: (owner: string, repo: string, ref: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, ref }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, ref: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        node_id: string;
                        object: {
                            sha: string;
                            type: string;
                            url: string;
                        };
                        ref: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, ref }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/git/tags": return { post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
