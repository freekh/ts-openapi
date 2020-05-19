import * as tsgen from "./engine";
export const allPaths = ["/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals", "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events", "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch", "/repos/{owner}/{repo}/readme", "/repos/{owner}/{repo}/releases", "/repos/{owner}/{repo}/releases/assets/{asset_id}", "/repos/{owner}/{repo}/releases/latest", "/repos/{owner}/{repo}/releases/tags/{tag}", "/repos/{owner}/{repo}/releases/{release_id}", "/repos/{owner}/{repo}/releases/{release_id}/assets", "/repos/{owner}/{repo}/stargazers", "/repos/{owner}/{repo}/stats/code_frequency", "/repos/{owner}/{repo}/stats/commit_activity", "/repos/{owner}/{repo}/stats/contributors", "/repos/{owner}/{repo}/stats/participation", "/repos/{owner}/{repo}/stats/punch_card", "/repos/{owner}/{repo}/statuses/{sha}", "/repos/{owner}/{repo}/subscribers", "/repos/{owner}/{repo}/subscription"];
export type Paths = "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments" | "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals" | "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events" | "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch" | "/repos/{owner}/{repo}/readme" | "/repos/{owner}/{repo}/releases" | "/repos/{owner}/{repo}/releases/assets/{asset_id}" | "/repos/{owner}/{repo}/releases/latest" | "/repos/{owner}/{repo}/releases/tags/{tag}" | "/repos/{owner}/{repo}/releases/{release_id}" | "/repos/{owner}/{repo}/releases/{release_id}/assets" | "/repos/{owner}/{repo}/stargazers" | "/repos/{owner}/{repo}/stats/code_frequency" | "/repos/{owner}/{repo}/stats/commit_activity" | "/repos/{owner}/{repo}/stats/contributors" | "/repos/{owner}/{repo}/stats/participation" | "/repos/{owner}/{repo}/stats/punch_card" | "/repos/{owner}/{repo}/statuses/{sha}" | "/repos/{owner}/{repo}/subscribers" | "/repos/{owner}/{repo}/subscription";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments" ? {
    get: (owner: string, repo: string, pullNumber: number, reviewId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            _links: {
                html: {
                    href: string;
                };
                pull_request: {
                    href: string;
                };
                self: {
                    href: string;
                };
            };
            author_association: string;
            body: string;
            commit_id: string;
            created_at: string;
            diff_hunk: string;
            html_url: string;
            id: number;
            in_reply_to_id: number;
            node_id: string;
            original_commit_id: string;
            original_position: number;
            path: string;
            position: number;
            pull_request_review_id: number;
            pull_request_url: string;
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
} : P extends "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals" ? {
    put: (owner: string, repo: string, pullNumber: number, reviewId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            _links: {
                html: {
                    href: string;
                };
                pull_request: {
                    href: string;
                };
            };
            body: string;
            commit_id: string;
            html_url: string;
            id: number;
            node_id: string;
            pull_request_url: string;
            state: string;
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
} : P extends "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events" ? {
    post: (owner: string, repo: string, pullNumber: number, reviewId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            _links: {
                html: {
                    href: string;
                };
                pull_request: {
                    href: string;
                };
            };
            body: string;
            commit_id: string;
            html_url: string;
            id: number;
            node_id: string;
            pull_request_url: string;
            state: string;
            submitted_at: string;
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
} : P extends "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch" ? {
    put: (owner: string, repo: string, pullNumber: number, accept: string) => Promise<{
        status: 202;
        data: {
            message: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/readme" ? {
    get: (owner: string, repo: string, ref?: string, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/releases" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            assets: {
                browser_download_url: string;
                content_type: string;
                created_at: string;
                download_count: number;
                id: number;
                label: string;
                name: string;
                node_id: string;
                size: number;
                state: string;
                updated_at: string;
                uploader: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                url: string;
            }[];
            assets_url: string;
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
            body: string;
            created_at: string;
            draft: boolean;
            html_url: string;
            id: number;
            name: string;
            node_id: string;
            prerelease: boolean;
            published_at: string;
            tag_name: string;
            tarball_url: string;
            target_commitish: string;
            upload_url: string;
            url: string;
            zipball_url: string;
        }[];
    }>;
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
            assets: any[];
            assets_url: string;
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
            body: string;
            created_at: string;
            draft: boolean;
            html_url: string;
            id: number;
            name: string;
            node_id: string;
            prerelease: boolean;
            published_at: string;
            tag_name: string;
            tarball_url: string;
            target_commitish: string;
            upload_url: string;
            url: string;
            zipball_url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/releases/assets/{asset_id}" ? {
    delete: (owner: string, repo: string, assetId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, assetId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            browser_download_url: string;
            content_type: string;
            created_at: string;
            download_count: number;
            id: number;
            label: string;
            name: string;
            node_id: string;
            size: number;
            state: string;
            updated_at: string;
            uploader: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            url: string;
        };
    }>;
    patch: (owner: string, repo: string, assetId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            browser_download_url: string;
            content_type: string;
            created_at: string;
            download_count: number;
            id: number;
            label: string;
            name: string;
            node_id: string;
            size: number;
            state: string;
            updated_at: string;
            uploader: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/releases/latest" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            assets: {
                browser_download_url: string;
                content_type: string;
                created_at: string;
                download_count: number;
                id: number;
                label: string;
                name: string;
                node_id: string;
                size: number;
                state: string;
                updated_at: string;
                uploader: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                url: string;
            }[];
            assets_url: string;
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
            body: string;
            created_at: string;
            draft: boolean;
            html_url: string;
            id: number;
            name: string;
            node_id: string;
            prerelease: boolean;
            published_at: string;
            tag_name: string;
            tarball_url: string;
            target_commitish: string;
            upload_url: string;
            url: string;
            zipball_url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/releases/tags/{tag}" ? {
    get: (owner: string, repo: string, tag: string, accept?: string) => Promise<{
        status: 200;
        data: {
            assets: {
                browser_download_url: string;
                content_type: string;
                created_at: string;
                download_count: number;
                id: number;
                label: string;
                name: string;
                node_id: string;
                size: number;
                state: string;
                updated_at: string;
                uploader: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                url: string;
            }[];
            assets_url: string;
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
            body: string;
            created_at: string;
            draft: boolean;
            html_url: string;
            id: number;
            name: string;
            node_id: string;
            prerelease: boolean;
            published_at: string;
            tag_name: string;
            tarball_url: string;
            target_commitish: string;
            upload_url: string;
            url: string;
            zipball_url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/releases/{release_id}" ? {
    delete: (owner: string, repo: string, releaseId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, releaseId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            assets: {
                browser_download_url: string;
                content_type: string;
                created_at: string;
                download_count: number;
                id: number;
                label: string;
                name: string;
                node_id: string;
                size: number;
                state: string;
                updated_at: string;
                uploader: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                url: string;
            }[];
            assets_url: string;
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
            body: string;
            created_at: string;
            draft: boolean;
            html_url: string;
            id: number;
            name: string;
            node_id: string;
            prerelease: boolean;
            published_at: string;
            tag_name: string;
            tarball_url: string;
            target_commitish: string;
            upload_url: string;
            url: string;
            zipball_url: string;
        };
    }>;
    patch: (owner: string, repo: string, releaseId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            assets: {
                browser_download_url: string;
                content_type: string;
                created_at: string;
                download_count: number;
                id: number;
                label: string;
                name: string;
                node_id: string;
                size: number;
                state: string;
                updated_at: string;
                uploader: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                url: string;
            }[];
            assets_url: string;
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
            body: string;
            created_at: string;
            draft: boolean;
            html_url: string;
            id: number;
            name: string;
            node_id: string;
            prerelease: boolean;
            published_at: string;
            tag_name: string;
            tarball_url: string;
            target_commitish: string;
            upload_url: string;
            url: string;
            zipball_url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/releases/{release_id}/assets" ? {
    get: (owner: string, repo: string, releaseId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            browser_download_url: string;
            content_type: string;
            created_at: string;
            download_count: number;
            id: number;
            label: string;
            name: string;
            node_id: string;
            size: number;
            state: string;
            updated_at: string;
            uploader: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            url: string;
        }[];
    }>;
    post: (owner: string, repo: string, releaseId: number, contentLength: string, contentType: string, name?: string, label?: string, accept?: string) => Promise<{
        status: 201;
        data: {
            browser_download_url: string;
            content_type: string;
            created_at: string;
            download_count: number;
            id: number;
            label: string;
            name: string;
            node_id: string;
            size: number;
            state: string;
            updated_at: string;
            uploader: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/stargazers" ? {
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
} : P extends "/repos/{owner}/{repo}/stats/code_frequency" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: number[][];
    }>;
} : P extends "/repos/{owner}/{repo}/stats/commit_activity" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            days: number[];
            total: number;
            week: number;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/stats/contributors" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
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
            total: number;
            weeks: {
                a: number;
                c: number;
                d: number;
                w: string;
            }[];
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/stats/participation" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            all: number[];
            owner: number[];
        };
    }>;
} : P extends "/repos/{owner}/{repo}/stats/punch_card" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: number[][];
    }>;
} : P extends "/repos/{owner}/{repo}/statuses/{sha}" ? {
    post: (owner: string, repo: string, sha: string, accept?: string) => Promise<{
        status: 201;
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
        };
    }>;
} : P extends "/repos/{owner}/{repo}/subscribers" ? {
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
} : P extends "/repos/{owner}/{repo}/subscription" ? {
    delete: (owner: string, repo: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            ignored: boolean;
            reason: string;
            repository_url: string;
            subscribed: boolean;
            url: string;
        };
    } | {
        status: 404;
    }>;
    put: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            ignored: boolean;
            reason: string;
            repository_url: string;
            subscribed: boolean;
            url: string;
        };
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments" ? {
    get: (owner: string, repo: string, pullNumber: number, reviewId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                _links: {
                    html: {
                        href: string;
                    };
                    pull_request: {
                        href: string;
                    };
                    self: {
                        href: string;
                    };
                };
                author_association: string;
                body: string;
                commit_id: string;
                created_at: string;
                diff_hunk: string;
                html_url: string;
                id: number;
                in_reply_to_id: number;
                node_id: string;
                original_commit_id: string;
                original_position: number;
                path: string;
                position: number;
                pull_request_review_id: number;
                pull_request_url: string;
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
} : P extends "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals" ? {
    put: (owner: string, repo: string, pullNumber: number, reviewId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                _links: {
                    html: {
                        href: string;
                    };
                    pull_request: {
                        href: string;
                    };
                };
                body: string;
                commit_id: string;
                html_url: string;
                id: number;
                node_id: string;
                pull_request_url: string;
                state: string;
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
} : P extends "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events" ? {
    post: (owner: string, repo: string, pullNumber: number, reviewId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                _links: {
                    html: {
                        href: string;
                    };
                    pull_request: {
                        href: string;
                    };
                };
                body: string;
                commit_id: string;
                html_url: string;
                id: number;
                node_id: string;
                pull_request_url: string;
                state: string;
                submitted_at: string;
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
} : P extends "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch" ? {
    put: (owner: string, repo: string, pullNumber: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 202;
            data: {
                message: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/readme" ? {
    get: (owner: string, repo: string, ref?: string, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/releases" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                assets: {
                    browser_download_url: string;
                    content_type: string;
                    created_at: string;
                    download_count: number;
                    id: number;
                    label: string;
                    name: string;
                    node_id: string;
                    size: number;
                    state: string;
                    updated_at: string;
                    uploader: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    url: string;
                }[];
                assets_url: string;
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
                body: string;
                created_at: string;
                draft: boolean;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                prerelease: boolean;
                published_at: string;
                tag_name: string;
                tarball_url: string;
                target_commitish: string;
                upload_url: string;
                url: string;
                zipball_url: string;
            }[];
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                assets: any[];
                assets_url: string;
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
                body: string;
                created_at: string;
                draft: boolean;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                prerelease: boolean;
                published_at: string;
                tag_name: string;
                tarball_url: string;
                target_commitish: string;
                upload_url: string;
                url: string;
                zipball_url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/releases/assets/{asset_id}" ? {
    delete: (owner: string, repo: string, assetId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, assetId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                browser_download_url: string;
                content_type: string;
                created_at: string;
                download_count: number;
                id: number;
                label: string;
                name: string;
                node_id: string;
                size: number;
                state: string;
                updated_at: string;
                uploader: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, assetId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                browser_download_url: string;
                content_type: string;
                created_at: string;
                download_count: number;
                id: number;
                label: string;
                name: string;
                node_id: string;
                size: number;
                state: string;
                updated_at: string;
                uploader: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/releases/latest" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                assets: {
                    browser_download_url: string;
                    content_type: string;
                    created_at: string;
                    download_count: number;
                    id: number;
                    label: string;
                    name: string;
                    node_id: string;
                    size: number;
                    state: string;
                    updated_at: string;
                    uploader: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    url: string;
                }[];
                assets_url: string;
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
                body: string;
                created_at: string;
                draft: boolean;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                prerelease: boolean;
                published_at: string;
                tag_name: string;
                tarball_url: string;
                target_commitish: string;
                upload_url: string;
                url: string;
                zipball_url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/releases/tags/{tag}" ? {
    get: (owner: string, repo: string, tag: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                assets: {
                    browser_download_url: string;
                    content_type: string;
                    created_at: string;
                    download_count: number;
                    id: number;
                    label: string;
                    name: string;
                    node_id: string;
                    size: number;
                    state: string;
                    updated_at: string;
                    uploader: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    url: string;
                }[];
                assets_url: string;
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
                body: string;
                created_at: string;
                draft: boolean;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                prerelease: boolean;
                published_at: string;
                tag_name: string;
                tarball_url: string;
                target_commitish: string;
                upload_url: string;
                url: string;
                zipball_url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/releases/{release_id}" ? {
    delete: (owner: string, repo: string, releaseId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, releaseId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                assets: {
                    browser_download_url: string;
                    content_type: string;
                    created_at: string;
                    download_count: number;
                    id: number;
                    label: string;
                    name: string;
                    node_id: string;
                    size: number;
                    state: string;
                    updated_at: string;
                    uploader: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    url: string;
                }[];
                assets_url: string;
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
                body: string;
                created_at: string;
                draft: boolean;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                prerelease: boolean;
                published_at: string;
                tag_name: string;
                tarball_url: string;
                target_commitish: string;
                upload_url: string;
                url: string;
                zipball_url: string;
            };
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, releaseId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                assets: {
                    browser_download_url: string;
                    content_type: string;
                    created_at: string;
                    download_count: number;
                    id: number;
                    label: string;
                    name: string;
                    node_id: string;
                    size: number;
                    state: string;
                    updated_at: string;
                    uploader: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    url: string;
                }[];
                assets_url: string;
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
                body: string;
                created_at: string;
                draft: boolean;
                html_url: string;
                id: number;
                name: string;
                node_id: string;
                prerelease: boolean;
                published_at: string;
                tag_name: string;
                tarball_url: string;
                target_commitish: string;
                upload_url: string;
                url: string;
                zipball_url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/releases/{release_id}/assets" ? {
    get: (owner: string, repo: string, releaseId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                browser_download_url: string;
                content_type: string;
                created_at: string;
                download_count: number;
                id: number;
                label: string;
                name: string;
                node_id: string;
                size: number;
                state: string;
                updated_at: string;
                uploader: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                url: string;
            }[];
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, releaseId: number, contentLength: string, contentType: string, name?: string, label?: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                browser_download_url: string;
                content_type: string;
                created_at: string;
                download_count: number;
                id: number;
                label: string;
                name: string;
                node_id: string;
                size: number;
                state: string;
                updated_at: string;
                uploader: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/stargazers" ? {
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
} : P extends "/repos/{owner}/{repo}/stats/code_frequency" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: number[][];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/stats/commit_activity" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                days: number[];
                total: number;
                week: number;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/stats/contributors" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
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
                total: number;
                weeks: {
                    a: number;
                    c: number;
                    d: number;
                    w: string;
                }[];
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/stats/participation" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                all: number[];
                owner: number[];
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/stats/punch_card" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: number[][];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/statuses/{sha}" ? {
    post: (owner: string, repo: string, sha: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
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
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/subscribers" ? {
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
} : P extends "/repos/{owner}/{repo}/subscription" ? {
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
                created_at: string;
                ignored: boolean;
                reason: string;
                repository_url: string;
                subscribed: boolean;
                url: string;
            };
        } | {
            status: 404;
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                created_at: string;
                ignored: boolean;
                reason: string;
                repository_url: string;
                subscribed: boolean;
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
        case "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments": return { get: (owner: string, repo: string, pullNumber: number, reviewId: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    _links: {
                        html: {
                            href: string;
                        };
                        pull_request: {
                            href: string;
                        };
                        self: {
                            href: string;
                        };
                    };
                    author_association: string;
                    body: string;
                    commit_id: string;
                    created_at: string;
                    diff_hunk: string;
                    html_url: string;
                    id: number;
                    in_reply_to_id: number;
                    node_id: string;
                    original_commit_id: string;
                    original_position: number;
                    path: string;
                    position: number;
                    pull_request_review_id: number;
                    pull_request_url: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, pullNumber, reviewId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals": return { put: (owner: string, repo: string, pullNumber: number, reviewId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    _links: {
                        html: {
                            href: string;
                        };
                        pull_request: {
                            href: string;
                        };
                    };
                    body: string;
                    commit_id: string;
                    html_url: string;
                    id: number;
                    node_id: string;
                    pull_request_url: string;
                    state: string;
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
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, pullNumber, reviewId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events": return { post: (owner: string, repo: string, pullNumber: number, reviewId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    _links: {
                        html: {
                            href: string;
                        };
                        pull_request: {
                            href: string;
                        };
                    };
                    body: string;
                    commit_id: string;
                    html_url: string;
                    id: number;
                    node_id: string;
                    pull_request_url: string;
                    state: string;
                    submitted_at: string;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, pullNumber, reviewId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch": return { put: (owner: string, repo: string, pullNumber: number, accept: string): Promise<{
                status: 202;
                data: {
                    message: string;
                    url: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, pullNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/readme": return { get: (owner: string, repo: string, ref?: string, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { ref }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    assets: {
                        browser_download_url: string;
                        content_type: string;
                        created_at: string;
                        download_count: number;
                        id: number;
                        label: string;
                        name: string;
                        node_id: string;
                        size: number;
                        state: string;
                        updated_at: string;
                        uploader: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        url: string;
                    }[];
                    assets_url: string;
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
                    body: string;
                    created_at: string;
                    draft: boolean;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    prerelease: boolean;
                    published_at: string;
                    tag_name: string;
                    tarball_url: string;
                    target_commitish: string;
                    upload_url: string;
                    url: string;
                    zipball_url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
                    assets: any[];
                    assets_url: string;
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
                    body: string;
                    created_at: string;
                    draft: boolean;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    prerelease: boolean;
                    published_at: string;
                    tag_name: string;
                    tarball_url: string;
                    target_commitish: string;
                    upload_url: string;
                    url: string;
                    zipball_url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases/assets/{asset_id}": return { delete: (owner: string, repo: string, assetId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, assetId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, assetId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    browser_download_url: string;
                    content_type: string;
                    created_at: string;
                    download_count: number;
                    id: number;
                    label: string;
                    name: string;
                    node_id: string;
                    size: number;
                    state: string;
                    updated_at: string;
                    uploader: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, assetId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, assetId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    browser_download_url: string;
                    content_type: string;
                    created_at: string;
                    download_count: number;
                    id: number;
                    label: string;
                    name: string;
                    node_id: string;
                    size: number;
                    state: string;
                    updated_at: string;
                    uploader: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, assetId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases/latest": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    assets: {
                        browser_download_url: string;
                        content_type: string;
                        created_at: string;
                        download_count: number;
                        id: number;
                        label: string;
                        name: string;
                        node_id: string;
                        size: number;
                        state: string;
                        updated_at: string;
                        uploader: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        url: string;
                    }[];
                    assets_url: string;
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
                    body: string;
                    created_at: string;
                    draft: boolean;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    prerelease: boolean;
                    published_at: string;
                    tag_name: string;
                    tarball_url: string;
                    target_commitish: string;
                    upload_url: string;
                    url: string;
                    zipball_url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases/tags/{tag}": return { get: (owner: string, repo: string, tag: string, accept?: string): Promise<{
                status: 200;
                data: {
                    assets: {
                        browser_download_url: string;
                        content_type: string;
                        created_at: string;
                        download_count: number;
                        id: number;
                        label: string;
                        name: string;
                        node_id: string;
                        size: number;
                        state: string;
                        updated_at: string;
                        uploader: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        url: string;
                    }[];
                    assets_url: string;
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
                    body: string;
                    created_at: string;
                    draft: boolean;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    prerelease: boolean;
                    published_at: string;
                    tag_name: string;
                    tarball_url: string;
                    target_commitish: string;
                    upload_url: string;
                    url: string;
                    zipball_url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, tag }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases/{release_id}": return { delete: (owner: string, repo: string, releaseId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, releaseId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, releaseId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    assets: {
                        browser_download_url: string;
                        content_type: string;
                        created_at: string;
                        download_count: number;
                        id: number;
                        label: string;
                        name: string;
                        node_id: string;
                        size: number;
                        state: string;
                        updated_at: string;
                        uploader: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        url: string;
                    }[];
                    assets_url: string;
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
                    body: string;
                    created_at: string;
                    draft: boolean;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    prerelease: boolean;
                    published_at: string;
                    tag_name: string;
                    tarball_url: string;
                    target_commitish: string;
                    upload_url: string;
                    url: string;
                    zipball_url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, releaseId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, releaseId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    assets: {
                        browser_download_url: string;
                        content_type: string;
                        created_at: string;
                        download_count: number;
                        id: number;
                        label: string;
                        name: string;
                        node_id: string;
                        size: number;
                        state: string;
                        updated_at: string;
                        uploader: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        url: string;
                    }[];
                    assets_url: string;
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
                    body: string;
                    created_at: string;
                    draft: boolean;
                    html_url: string;
                    id: number;
                    name: string;
                    node_id: string;
                    prerelease: boolean;
                    published_at: string;
                    tag_name: string;
                    tarball_url: string;
                    target_commitish: string;
                    upload_url: string;
                    url: string;
                    zipball_url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, releaseId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases/{release_id}/assets": return { get: (owner: string, repo: string, releaseId: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    browser_download_url: string;
                    content_type: string;
                    created_at: string;
                    download_count: number;
                    id: number;
                    label: string;
                    name: string;
                    node_id: string;
                    size: number;
                    state: string;
                    updated_at: string;
                    uploader: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, releaseId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, releaseId: number, contentLength: string, contentType: string, name?: string, label?: string, accept?: string): Promise<{
                status: 201;
                data: {
                    browser_download_url: string;
                    content_type: string;
                    created_at: string;
                    download_count: number;
                    id: number;
                    label: string;
                    name: string;
                    node_id: string;
                    size: number;
                    state: string;
                    updated_at: string;
                    uploader: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, releaseId }), { name, label }, { "Content-Type": "*/*", ...{ "accept": accept, "content-length": contentLength, "content-type": contentType } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/stargazers": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
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
        case "/repos/{owner}/{repo}/stats/code_frequency": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: number[][];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/stats/commit_activity": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    days: number[];
                    total: number;
                    week: number;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/stats/contributors": return { get: (owner: string, repo: string, accept?: string): Promise<{
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
                    total: number;
                    weeks: {
                        a: number;
                        c: number;
                        d: number;
                        w: string;
                    }[];
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/stats/participation": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    all: number[];
                    owner: number[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/stats/punch_card": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: number[][];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/statuses/{sha}": return { post: (owner: string, repo: string, sha: string, accept?: string): Promise<{
                status: 201;
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
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, sha }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/subscribers": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
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
        case "/repos/{owner}/{repo}/subscription": return { delete: (owner: string, repo: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    ignored: boolean;
                    reason: string;
                    repository_url: string;
                    subscribed: boolean;
                    url: string;
                };
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    ignored: boolean;
                    reason: string;
                    repository_url: string;
                    subscribed: boolean;
                    url: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments": return { get: (owner: string, repo: string, pullNumber: number, reviewId: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        _links: {
                            html: {
                                href: string;
                            };
                            pull_request: {
                                href: string;
                            };
                            self: {
                                href: string;
                            };
                        };
                        author_association: string;
                        body: string;
                        commit_id: string;
                        created_at: string;
                        diff_hunk: string;
                        html_url: string;
                        id: number;
                        in_reply_to_id: number;
                        node_id: string;
                        original_commit_id: string;
                        original_position: number;
                        path: string;
                        position: number;
                        pull_request_review_id: number;
                        pull_request_url: string;
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, pullNumber, reviewId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals": return { put: (owner: string, repo: string, pullNumber: number, reviewId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        _links: {
                            html: {
                                href: string;
                            };
                            pull_request: {
                                href: string;
                            };
                        };
                        body: string;
                        commit_id: string;
                        html_url: string;
                        id: number;
                        node_id: string;
                        pull_request_url: string;
                        state: string;
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
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, pullNumber, reviewId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events": return { post: (owner: string, repo: string, pullNumber: number, reviewId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        _links: {
                            html: {
                                href: string;
                            };
                            pull_request: {
                                href: string;
                            };
                        };
                        body: string;
                        commit_id: string;
                        html_url: string;
                        id: number;
                        node_id: string;
                        pull_request_url: string;
                        state: string;
                        submitted_at: string;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, pullNumber, reviewId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch": return { put: (owner: string, repo: string, pullNumber: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 202;
                    data: {
                        message: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, pullNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/readme": return { get: (owner: string, repo: string, ref?: string, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { ref }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        assets: {
                            browser_download_url: string;
                            content_type: string;
                            created_at: string;
                            download_count: number;
                            id: number;
                            label: string;
                            name: string;
                            node_id: string;
                            size: number;
                            state: string;
                            updated_at: string;
                            uploader: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            url: string;
                        }[];
                        assets_url: string;
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
                        body: string;
                        created_at: string;
                        draft: boolean;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        prerelease: boolean;
                        published_at: string;
                        tag_name: string;
                        tarball_url: string;
                        target_commitish: string;
                        upload_url: string;
                        url: string;
                        zipball_url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        assets: any[];
                        assets_url: string;
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
                        body: string;
                        created_at: string;
                        draft: boolean;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        prerelease: boolean;
                        published_at: string;
                        tag_name: string;
                        tarball_url: string;
                        target_commitish: string;
                        upload_url: string;
                        url: string;
                        zipball_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases/assets/{asset_id}": return { delete: (owner: string, repo: string, assetId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, assetId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, assetId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        browser_download_url: string;
                        content_type: string;
                        created_at: string;
                        download_count: number;
                        id: number;
                        label: string;
                        name: string;
                        node_id: string;
                        size: number;
                        state: string;
                        updated_at: string;
                        uploader: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, assetId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, assetId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        browser_download_url: string;
                        content_type: string;
                        created_at: string;
                        download_count: number;
                        id: number;
                        label: string;
                        name: string;
                        node_id: string;
                        size: number;
                        state: string;
                        updated_at: string;
                        uploader: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, assetId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases/latest": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        assets: {
                            browser_download_url: string;
                            content_type: string;
                            created_at: string;
                            download_count: number;
                            id: number;
                            label: string;
                            name: string;
                            node_id: string;
                            size: number;
                            state: string;
                            updated_at: string;
                            uploader: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            url: string;
                        }[];
                        assets_url: string;
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
                        body: string;
                        created_at: string;
                        draft: boolean;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        prerelease: boolean;
                        published_at: string;
                        tag_name: string;
                        tarball_url: string;
                        target_commitish: string;
                        upload_url: string;
                        url: string;
                        zipball_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases/tags/{tag}": return { get: (owner: string, repo: string, tag: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        assets: {
                            browser_download_url: string;
                            content_type: string;
                            created_at: string;
                            download_count: number;
                            id: number;
                            label: string;
                            name: string;
                            node_id: string;
                            size: number;
                            state: string;
                            updated_at: string;
                            uploader: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            url: string;
                        }[];
                        assets_url: string;
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
                        body: string;
                        created_at: string;
                        draft: boolean;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        prerelease: boolean;
                        published_at: string;
                        tag_name: string;
                        tarball_url: string;
                        target_commitish: string;
                        upload_url: string;
                        url: string;
                        zipball_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, tag }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases/{release_id}": return { delete: (owner: string, repo: string, releaseId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, releaseId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, releaseId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        assets: {
                            browser_download_url: string;
                            content_type: string;
                            created_at: string;
                            download_count: number;
                            id: number;
                            label: string;
                            name: string;
                            node_id: string;
                            size: number;
                            state: string;
                            updated_at: string;
                            uploader: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            url: string;
                        }[];
                        assets_url: string;
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
                        body: string;
                        created_at: string;
                        draft: boolean;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        prerelease: boolean;
                        published_at: string;
                        tag_name: string;
                        tarball_url: string;
                        target_commitish: string;
                        upload_url: string;
                        url: string;
                        zipball_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, releaseId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, releaseId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        assets: {
                            browser_download_url: string;
                            content_type: string;
                            created_at: string;
                            download_count: number;
                            id: number;
                            label: string;
                            name: string;
                            node_id: string;
                            size: number;
                            state: string;
                            updated_at: string;
                            uploader: {
                                avatar_url: string;
                                events_url: string;
                                followers_url: string;
                                following_url: string;
                                gists_url: string;
                                gravatar_id: string;
                                html_url: string;
                                id: number;
                                login: string;
                                node_id: string;
                                organizations_url: string;
                                received_events_url: string;
                                repos_url: string;
                                site_admin: boolean;
                                starred_url: string;
                                subscriptions_url: string;
                                type: string;
                                url: string;
                            };
                            url: string;
                        }[];
                        assets_url: string;
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
                        body: string;
                        created_at: string;
                        draft: boolean;
                        html_url: string;
                        id: number;
                        name: string;
                        node_id: string;
                        prerelease: boolean;
                        published_at: string;
                        tag_name: string;
                        tarball_url: string;
                        target_commitish: string;
                        upload_url: string;
                        url: string;
                        zipball_url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, releaseId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/releases/{release_id}/assets": return { get: (owner: string, repo: string, releaseId: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        browser_download_url: string;
                        content_type: string;
                        created_at: string;
                        download_count: number;
                        id: number;
                        label: string;
                        name: string;
                        node_id: string;
                        size: number;
                        state: string;
                        updated_at: string;
                        uploader: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, releaseId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, releaseId: number, contentLength: string, contentType: string, name?: string, label?: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        browser_download_url: string;
                        content_type: string;
                        created_at: string;
                        download_count: number;
                        id: number;
                        label: string;
                        name: string;
                        node_id: string;
                        size: number;
                        state: string;
                        updated_at: string;
                        uploader: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, releaseId }), { name, label }, { "Content-Type": "*/*", ...{ "accept": accept, "content-length": contentLength, "content-type": contentType } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/stargazers": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
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
        case "/repos/{owner}/{repo}/stats/code_frequency": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: number[][];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/stats/commit_activity": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        days: number[];
                        total: number;
                        week: number;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/stats/contributors": return { get: (owner: string, repo: string, accept?: string): Promise<{
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
                        total: number;
                        weeks: {
                            a: number;
                            c: number;
                            d: number;
                            w: string;
                        }[];
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/stats/participation": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        all: number[];
                        owner: number[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/stats/punch_card": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: number[][];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/statuses/{sha}": return { post: (owner: string, repo: string, sha: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
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
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, sha }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/subscribers": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
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
        case "/repos/{owner}/{repo}/subscription": return { delete: (owner: string, repo: string, accept?: string): Promise<{
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
                        created_at: string;
                        ignored: boolean;
                        reason: string;
                        repository_url: string;
                        subscribed: boolean;
                        url: string;
                    };
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        created_at: string;
                        ignored: boolean;
                        reason: string;
                        repository_url: string;
                        subscribed: boolean;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
