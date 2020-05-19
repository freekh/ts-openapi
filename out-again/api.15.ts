import * as tsgen from "./engine";
export const allPaths = ["/search/users", "/teams/{team_id}", "/teams/{team_id}/discussions", "/teams/{team_id}/discussions/{discussion_number}", "/teams/{team_id}/discussions/{discussion_number}/comments", "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", "/teams/{team_id}/discussions/{discussion_number}/reactions", "/teams/{team_id}/invitations", "/teams/{team_id}/members", "/teams/{team_id}/members/{username}", "/teams/{team_id}/memberships/{username}", "/teams/{team_id}/projects", "/teams/{team_id}/projects/{project_id}", "/teams/{team_id}/repos", "/teams/{team_id}/repos/{owner}/{repo}", "/teams/{team_id}/team-sync/group-mappings", "/teams/{team_id}/teams", "/user", "/user/blocks"];
export type Paths = "/search/users" | "/teams/{team_id}" | "/teams/{team_id}/discussions" | "/teams/{team_id}/discussions/{discussion_number}" | "/teams/{team_id}/discussions/{discussion_number}/comments" | "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}" | "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions" | "/teams/{team_id}/discussions/{discussion_number}/reactions" | "/teams/{team_id}/invitations" | "/teams/{team_id}/members" | "/teams/{team_id}/members/{username}" | "/teams/{team_id}/memberships/{username}" | "/teams/{team_id}/projects" | "/teams/{team_id}/projects/{project_id}" | "/teams/{team_id}/repos" | "/teams/{team_id}/repos/{owner}/{repo}" | "/teams/{team_id}/team-sync/group-mappings" | "/teams/{team_id}/teams" | "/user" | "/user/blocks";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/search/users" ? {
    get: (q: string, sort?: "followers" | "repositories" | "joined", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            incomplete_results: boolean;
            items: {
                avatar_url: string;
                followers_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                score: number;
                subscriptions_url: string;
                type: string;
                url: string;
            }[];
            total_count: number;
        };
    }>;
} : P extends "/teams/{team_id}" ? {
    delete: (teamId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (teamId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            description: string;
            html_url: string;
            id: number;
            members_count: number;
            members_url: string;
            name: string;
            node_id: string;
            organization: {
                avatar_url: string;
                blog: string;
                company: string;
                created_at: string;
                description: string;
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
                members_url: string;
                name: string;
                node_id: string;
                public_gists: number;
                public_members_url: string;
                public_repos: number;
                repos_url: string;
                type: string;
                url: string;
            };
            parent: string;
            permission: string;
            privacy: string;
            repos_count: number;
            repositories_url: string;
            slug: string;
            updated_at: string;
            url: string;
        };
    }>;
    patch: (teamId: number, accept?: string) => Promise<{
        status: 201;
        data: {
            created_at: string;
            description: string;
            html_url: string;
            id: number;
            members_count: number;
            members_url: string;
            name: string;
            node_id: string;
            organization: {
                avatar_url: string;
                blog: string;
                company: string;
                created_at: string;
                description: string;
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
                members_url: string;
                name: string;
                node_id: string;
                public_gists: number;
                public_members_url: string;
                public_repos: number;
                repos_url: string;
                type: string;
                url: string;
            };
            parent: string;
            permission: string;
            privacy: string;
            repos_count: number;
            repositories_url: string;
            slug: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/teams/{team_id}/discussions" ? {
    get: (teamId: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
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
            body: string;
            body_html: string;
            body_version: string;
            comments_count: number;
            comments_url: string;
            created_at: string;
            html_url: string;
            last_edited_at: string;
            node_id: string;
            number: number;
            pinned: boolean;
            private: boolean;
            reactions: {
                +1: number;
                -1: number;
                confused: number;
                heart: number;
                hooray: number;
                laugh: number;
                total_count: number;
                url: string;
            };
            team_url: string;
            title: string;
            updated_at: string;
            url: string;
        }[];
    }>;
    post: (teamId: number, accept?: string) => Promise<{
        status: 201;
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
            body: string;
            body_html: string;
            body_version: string;
            comments_count: number;
            comments_url: string;
            created_at: string;
            html_url: string;
            last_edited_at: string;
            node_id: string;
            number: number;
            pinned: boolean;
            private: boolean;
            reactions: {
                +1: number;
                -1: number;
                confused: number;
                heart: number;
                hooray: number;
                laugh: number;
                total_count: number;
                url: string;
            };
            team_url: string;
            title: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/teams/{team_id}/discussions/{discussion_number}" ? {
    delete: (teamId: number, discussionNumber: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (teamId: number, discussionNumber: number, accept?: string) => Promise<{
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
            body: string;
            body_html: string;
            body_version: string;
            comments_count: number;
            comments_url: string;
            created_at: string;
            html_url: string;
            last_edited_at: string;
            node_id: string;
            number: number;
            pinned: boolean;
            private: boolean;
            reactions: {
                +1: number;
                -1: number;
                confused: number;
                heart: number;
                hooray: number;
                laugh: number;
                total_count: number;
                url: string;
            };
            team_url: string;
            title: string;
            updated_at: string;
            url: string;
        };
    }>;
    patch: (teamId: number, discussionNumber: number, accept?: string) => Promise<{
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
            body: string;
            body_html: string;
            body_version: string;
            comments_count: number;
            comments_url: string;
            created_at: string;
            html_url: string;
            last_edited_at: string;
            node_id: string;
            number: number;
            pinned: boolean;
            private: boolean;
            reactions: {
                +1: number;
                -1: number;
                confused: number;
                heart: number;
                hooray: number;
                laugh: number;
                total_count: number;
                url: string;
            };
            team_url: string;
            title: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/teams/{team_id}/discussions/{discussion_number}/comments" ? {
    get: (teamId: number, discussionNumber: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
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
            body: string;
            body_html: string;
            body_version: string;
            created_at: string;
            discussion_url: string;
            html_url: string;
            last_edited_at: string;
            node_id: string;
            number: number;
            reactions: {
                +1: number;
                -1: number;
                confused: number;
                heart: number;
                hooray: number;
                laugh: number;
                total_count: number;
                url: string;
            };
            updated_at: string;
            url: string;
        }[];
    }>;
    post: (teamId: number, discussionNumber: number, accept?: string) => Promise<{
        status: 201;
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
            body: string;
            body_html: string;
            body_version: string;
            created_at: string;
            discussion_url: string;
            html_url: string;
            last_edited_at: string;
            node_id: string;
            number: number;
            reactions: {
                +1: number;
                -1: number;
                confused: number;
                heart: number;
                hooray: number;
                laugh: number;
                total_count: number;
                url: string;
            };
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}" ? {
    delete: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
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
            body: string;
            body_html: string;
            body_version: string;
            created_at: string;
            discussion_url: string;
            html_url: string;
            last_edited_at: string;
            node_id: string;
            number: number;
            reactions: {
                +1: number;
                -1: number;
                confused: number;
                heart: number;
                hooray: number;
                laugh: number;
                total_count: number;
                url: string;
            };
            updated_at: string;
            url: string;
        };
    }>;
    patch: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
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
            body: string;
            body_html: string;
            body_version: string;
            created_at: string;
            discussion_url: string;
            html_url: string;
            last_edited_at: string;
            node_id: string;
            number: number;
            reactions: {
                +1: number;
                -1: number;
                confused: number;
                heart: number;
                hooray: number;
                laugh: number;
                total_count: number;
                url: string;
            };
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions" ? {
    get: (teamId: number, discussionNumber: number, commentNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
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
    post: (teamId: number, discussionNumber: number, commentNumber: number, accept: string) => Promise<{
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
} : P extends "/teams/{team_id}/discussions/{discussion_number}/reactions" ? {
    get: (teamId: number, discussionNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
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
    post: (teamId: number, discussionNumber: number, accept: string) => Promise<{
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
} : P extends "/teams/{team_id}/invitations" ? {
    get: (teamId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            email: string;
            id: number;
            invitation_team_url: string;
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
            login: string;
            role: string;
            team_count: number;
        }[];
    }>;
} : P extends "/teams/{team_id}/members" ? {
    get: (teamId: number, role?: "member" | "maintainer" | "all", perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/teams/{team_id}/members/{username}" ? {
    delete: (teamId: number, username: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 404;
    }>;
    get: (teamId: number, username: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 404;
    }>;
    put: (teamId: number, username: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 404;
    } | {
        status: 422;
        error: {
            errors: {
                code: string;
                field: string;
                resource: string;
            }[];
            message: string;
        };
    }>;
} : P extends "/teams/{team_id}/memberships/{username}" ? {
    delete: (teamId: number, username: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 403;
    }>;
    get: (teamId: number, username: string, accept?: string) => Promise<{
        status: 200;
        data: {
            role: string;
            state: string;
            url: string;
        };
    }>;
    put: (teamId: number, username: string, accept?: string) => Promise<{
        status: 200;
        data: {
            role: string;
            state: string;
            url: string;
        };
    } | {
        status: 403;
    } | {
        status: 422;
        error: {
            errors: {
                code: string;
                field: string;
                resource: string;
            }[];
            message: string;
        };
    }>;
} : P extends "/teams/{team_id}/projects" ? {
    get: (teamId: number, accept: string, perPage?: number, page?: number) => Promise<{
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
            organization_permission: string;
            owner_url: string;
            permissions: {
                admin: boolean;
                read: boolean;
                write: boolean;
            };
            private: boolean;
            state: string;
            updated_at: string;
            url: string;
        }[];
    }>;
} : P extends "/teams/{team_id}/projects/{project_id}" ? {
    delete: (teamId: number, projectId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (teamId: number, projectId: number, accept: string) => Promise<{
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
            organization_permission: string;
            owner_url: string;
            permissions: {
                admin: boolean;
                read: boolean;
                write: boolean;
            };
            private: boolean;
            state: string;
            updated_at: string;
            url: string;
        };
    } | {
        status: 404;
    }>;
    put: (teamId: number, projectId: number, accept: string) => Promise<{
        status: 204;
    } | {
        status: 403;
        error: {
            documentation_url: string;
            message: string;
        };
    }>;
} : P extends "/teams/{team_id}/repos" ? {
    get: (teamId: number, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/teams/{team_id}/repos/{owner}/{repo}" ? {
    delete: (teamId: number, owner: string, repo: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (teamId: number, owner: string, repo: string, accept?: string) => Promise<{
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
        };
    } | {
        status: 204;
    } | {
        status: 404;
    }>;
    put: (teamId: number, owner: string, repo: string, accept?: string) => Promise<{
        status: 204;
    }>;
} : P extends "/teams/{team_id}/team-sync/group-mappings" ? {
    get: (teamId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            groups: {
                group_description: string;
                group_id: string;
                group_name: string;
            }[];
        };
    }>;
    patch: (teamId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            groups: {
                group_description: string;
                group_id: string;
                group_name: string;
            }[];
        };
    }>;
} : P extends "/teams/{team_id}/teams" ? {
    get: (teamId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            description: string;
            id: number;
            members_url: string;
            name: string;
            node_id: string;
            parent: {
                description: string;
                html_url: string;
                id: number;
                members_url: string;
                name: string;
                node_id: string;
                permission: string;
                privacy: string;
                repositories_url: string;
                slug: string;
                url: string;
            };
            permission: string;
            privacy: string;
            repositories_url: string;
            slug: string;
            url: string;
        }[];
    }>;
} : P extends "/user" ? {
    get: (accept?: string) => Promise<{
        status: 200;
        data: {
            avatar_url: string;
            bio: string;
            blog: string;
            collaborators: number;
            company: string;
            created_at: string;
            disk_usage: number;
            email: string;
            events_url: string;
            followers: number;
            followers_url: string;
            following: number;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            hireable: boolean;
            html_url: string;
            id: number;
            location: string;
            login: string;
            name: string;
            node_id: string;
            organizations_url: string;
            owned_private_repos: number;
            plan: {
                collaborators: number;
                name: string;
                private_repos: number;
                space: number;
            };
            private_gists: number;
            public_gists: number;
            public_repos: number;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            total_private_repos: number;
            two_factor_authentication: boolean;
            type: string;
            updated_at: string;
            url: string;
        };
    }>;
    patch: (accept?: string) => Promise<{
        status: 200;
        data: {
            avatar_url: string;
            bio: string;
            blog: string;
            collaborators: number;
            company: string;
            created_at: string;
            disk_usage: number;
            email: string;
            events_url: string;
            followers: number;
            followers_url: string;
            following: number;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            hireable: boolean;
            html_url: string;
            id: number;
            location: string;
            login: string;
            name: string;
            node_id: string;
            organizations_url: string;
            owned_private_repos: number;
            plan: {
                collaborators: number;
                name: string;
                private_repos: number;
                space: number;
            };
            private_gists: number;
            public_gists: number;
            public_repos: number;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            total_private_repos: number;
            two_factor_authentication: boolean;
            type: string;
            updated_at: string;
            url: string;
        };
    }>;
} : P extends "/user/blocks" ? {
    get: (accept?: string) => Promise<{
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
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/search/users" ? {
    get: (q: string, sort?: "followers" | "repositories" | "joined", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                incomplete_results: boolean;
                items: {
                    avatar_url: string;
                    followers_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    score: number;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                }[];
                total_count: number;
            };
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}" ? {
    delete: (teamId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (teamId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                created_at: string;
                description: string;
                html_url: string;
                id: number;
                members_count: number;
                members_url: string;
                name: string;
                node_id: string;
                organization: {
                    avatar_url: string;
                    blog: string;
                    company: string;
                    created_at: string;
                    description: string;
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
                    members_url: string;
                    name: string;
                    node_id: string;
                    public_gists: number;
                    public_members_url: string;
                    public_repos: number;
                    repos_url: string;
                    type: string;
                    url: string;
                };
                parent: string;
                permission: string;
                privacy: string;
                repos_count: number;
                repositories_url: string;
                slug: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (teamId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
                created_at: string;
                description: string;
                html_url: string;
                id: number;
                members_count: number;
                members_url: string;
                name: string;
                node_id: string;
                organization: {
                    avatar_url: string;
                    blog: string;
                    company: string;
                    created_at: string;
                    description: string;
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
                    members_url: string;
                    name: string;
                    node_id: string;
                    public_gists: number;
                    public_members_url: string;
                    public_repos: number;
                    repos_url: string;
                    type: string;
                    url: string;
                };
                parent: string;
                permission: string;
                privacy: string;
                repos_count: number;
                repositories_url: string;
                slug: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/discussions" ? {
    get: (teamId: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
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
                body: string;
                body_html: string;
                body_version: string;
                comments_count: number;
                comments_url: string;
                created_at: string;
                html_url: string;
                last_edited_at: string;
                node_id: string;
                number: number;
                pinned: boolean;
                private: boolean;
                reactions: {
                    +1: number;
                    -1: number;
                    confused: number;
                    heart: number;
                    hooray: number;
                    laugh: number;
                    total_count: number;
                    url: string;
                };
                team_url: string;
                title: string;
                updated_at: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
    post: (teamId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
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
                body: string;
                body_html: string;
                body_version: string;
                comments_count: number;
                comments_url: string;
                created_at: string;
                html_url: string;
                last_edited_at: string;
                node_id: string;
                number: number;
                pinned: boolean;
                private: boolean;
                reactions: {
                    +1: number;
                    -1: number;
                    confused: number;
                    heart: number;
                    hooray: number;
                    laugh: number;
                    total_count: number;
                    url: string;
                };
                team_url: string;
                title: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/discussions/{discussion_number}" ? {
    delete: (teamId: number, discussionNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (teamId: number, discussionNumber: number, accept?: string) => Promise<{
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
                body: string;
                body_html: string;
                body_version: string;
                comments_count: number;
                comments_url: string;
                created_at: string;
                html_url: string;
                last_edited_at: string;
                node_id: string;
                number: number;
                pinned: boolean;
                private: boolean;
                reactions: {
                    +1: number;
                    -1: number;
                    confused: number;
                    heart: number;
                    hooray: number;
                    laugh: number;
                    total_count: number;
                    url: string;
                };
                team_url: string;
                title: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (teamId: number, discussionNumber: number, accept?: string) => Promise<{
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
                body: string;
                body_html: string;
                body_version: string;
                comments_count: number;
                comments_url: string;
                created_at: string;
                html_url: string;
                last_edited_at: string;
                node_id: string;
                number: number;
                pinned: boolean;
                private: boolean;
                reactions: {
                    +1: number;
                    -1: number;
                    confused: number;
                    heart: number;
                    hooray: number;
                    laugh: number;
                    total_count: number;
                    url: string;
                };
                team_url: string;
                title: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/discussions/{discussion_number}/comments" ? {
    get: (teamId: number, discussionNumber: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
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
                body: string;
                body_html: string;
                body_version: string;
                created_at: string;
                discussion_url: string;
                html_url: string;
                last_edited_at: string;
                node_id: string;
                number: number;
                reactions: {
                    +1: number;
                    -1: number;
                    confused: number;
                    heart: number;
                    hooray: number;
                    laugh: number;
                    total_count: number;
                    url: string;
                };
                updated_at: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
    post: (teamId: number, discussionNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
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
                body: string;
                body_html: string;
                body_version: string;
                created_at: string;
                discussion_url: string;
                html_url: string;
                last_edited_at: string;
                node_id: string;
                number: number;
                reactions: {
                    +1: number;
                    -1: number;
                    confused: number;
                    heart: number;
                    hooray: number;
                    laugh: number;
                    total_count: number;
                    url: string;
                };
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}" ? {
    delete: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
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
                body: string;
                body_html: string;
                body_version: string;
                created_at: string;
                discussion_url: string;
                html_url: string;
                last_edited_at: string;
                node_id: string;
                number: number;
                reactions: {
                    +1: number;
                    -1: number;
                    confused: number;
                    heart: number;
                    hooray: number;
                    laugh: number;
                    total_count: number;
                    url: string;
                };
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
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
                body: string;
                body_html: string;
                body_version: string;
                created_at: string;
                discussion_url: string;
                html_url: string;
                last_edited_at: string;
                node_id: string;
                number: number;
                reactions: {
                    +1: number;
                    -1: number;
                    confused: number;
                    heart: number;
                    hooray: number;
                    laugh: number;
                    total_count: number;
                    url: string;
                };
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions" ? {
    get: (teamId: number, discussionNumber: number, commentNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
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
    post: (teamId: number, discussionNumber: number, commentNumber: number, accept: string) => Promise<{
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
} : P extends "/teams/{team_id}/discussions/{discussion_number}/reactions" ? {
    get: (teamId: number, discussionNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
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
    post: (teamId: number, discussionNumber: number, accept: string) => Promise<{
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
} : P extends "/teams/{team_id}/invitations" ? {
    get: (teamId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                created_at: string;
                email: string;
                id: number;
                invitation_team_url: string;
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
                login: string;
                role: string;
                team_count: number;
            }[];
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/members" ? {
    get: (teamId: number, role?: "member" | "maintainer" | "all", perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/teams/{team_id}/members/{username}" ? {
    delete: (teamId: number, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 404;
        };
        headers: object;
    }>;
    get: (teamId: number, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 404;
        };
        headers: object;
    }>;
    put: (teamId: number, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 404;
        } | {
            status: 422;
            error: {
                errors: {
                    code: string;
                    field: string;
                    resource: string;
                }[];
                message: string;
            };
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/memberships/{username}" ? {
    delete: (teamId: number, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 403;
        };
        headers: object;
    }>;
    get: (teamId: number, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                role: string;
                state: string;
                url: string;
            };
        };
        headers: object;
    }>;
    put: (teamId: number, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                role: string;
                state: string;
                url: string;
            };
        } | {
            status: 403;
        } | {
            status: 422;
            error: {
                errors: {
                    code: string;
                    field: string;
                    resource: string;
                }[];
                message: string;
            };
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/projects" ? {
    get: (teamId: number, accept: string, perPage?: number, page?: number) => Promise<{
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
                organization_permission: string;
                owner_url: string;
                permissions: {
                    admin: boolean;
                    read: boolean;
                    write: boolean;
                };
                private: boolean;
                state: string;
                updated_at: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/projects/{project_id}" ? {
    delete: (teamId: number, projectId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (teamId: number, projectId: number, accept: string) => Promise<{
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
                organization_permission: string;
                owner_url: string;
                permissions: {
                    admin: boolean;
                    read: boolean;
                    write: boolean;
                };
                private: boolean;
                state: string;
                updated_at: string;
                url: string;
            };
        } | {
            status: 404;
        };
        headers: object;
    }>;
    put: (teamId: number, projectId: number, accept: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 403;
            error: {
                documentation_url: string;
                message: string;
            };
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/repos" ? {
    get: (teamId: number, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/teams/{team_id}/repos/{owner}/{repo}" ? {
    delete: (teamId: number, owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (teamId: number, owner: string, repo: string, accept?: string) => Promise<{
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
            };
        } | {
            status: 204;
        } | {
            status: 404;
        };
        headers: object;
    }>;
    put: (teamId: number, owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/team-sync/group-mappings" ? {
    get: (teamId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                groups: {
                    group_description: string;
                    group_id: string;
                    group_name: string;
                }[];
            };
        };
        headers: object;
    }>;
    patch: (teamId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                groups: {
                    group_description: string;
                    group_id: string;
                    group_name: string;
                }[];
            };
        };
        headers: object;
    }>;
} : P extends "/teams/{team_id}/teams" ? {
    get: (teamId: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                description: string;
                id: number;
                members_url: string;
                name: string;
                node_id: string;
                parent: {
                    description: string;
                    html_url: string;
                    id: number;
                    members_url: string;
                    name: string;
                    node_id: string;
                    permission: string;
                    privacy: string;
                    repositories_url: string;
                    slug: string;
                    url: string;
                };
                permission: string;
                privacy: string;
                repositories_url: string;
                slug: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/user" ? {
    get: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                avatar_url: string;
                bio: string;
                blog: string;
                collaborators: number;
                company: string;
                created_at: string;
                disk_usage: number;
                email: string;
                events_url: string;
                followers: number;
                followers_url: string;
                following: number;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                hireable: boolean;
                html_url: string;
                id: number;
                location: string;
                login: string;
                name: string;
                node_id: string;
                organizations_url: string;
                owned_private_repos: number;
                plan: {
                    collaborators: number;
                    name: string;
                    private_repos: number;
                    space: number;
                };
                private_gists: number;
                public_gists: number;
                public_repos: number;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                total_private_repos: number;
                two_factor_authentication: boolean;
                type: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                avatar_url: string;
                bio: string;
                blog: string;
                collaborators: number;
                company: string;
                created_at: string;
                disk_usage: number;
                email: string;
                events_url: string;
                followers: number;
                followers_url: string;
                following: number;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                hireable: boolean;
                html_url: string;
                id: number;
                location: string;
                login: string;
                name: string;
                node_id: string;
                organizations_url: string;
                owned_private_repos: number;
                plan: {
                    collaborators: number;
                    name: string;
                    private_repos: number;
                    space: number;
                };
                private_gists: number;
                public_gists: number;
                public_repos: number;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                total_private_repos: number;
                two_factor_authentication: boolean;
                type: string;
                updated_at: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/user/blocks" ? {
    get: (accept?: string) => Promise<{
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
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/search/users": return { get: (q: string, sort?: "followers" | "repositories" | "joined", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    incomplete_results: boolean;
                    items: {
                        avatar_url: string;
                        followers_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        score: number;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    }[];
                    total_count: number;
                };
            }> => engine.process(handle("get", p, { q, sort, order, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}": return { delete: (teamId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    description: string;
                    html_url: string;
                    id: number;
                    members_count: number;
                    members_url: string;
                    name: string;
                    node_id: string;
                    organization: {
                        avatar_url: string;
                        blog: string;
                        company: string;
                        created_at: string;
                        description: string;
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
                        members_url: string;
                        name: string;
                        node_id: string;
                        public_gists: number;
                        public_members_url: string;
                        public_repos: number;
                        repos_url: string;
                        type: string;
                        url: string;
                    };
                    parent: string;
                    permission: string;
                    privacy: string;
                    repos_count: number;
                    repositories_url: string;
                    slug: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (teamId: number, accept?: string): Promise<{
                status: 201;
                data: {
                    created_at: string;
                    description: string;
                    html_url: string;
                    id: number;
                    members_count: number;
                    members_url: string;
                    name: string;
                    node_id: string;
                    organization: {
                        avatar_url: string;
                        blog: string;
                        company: string;
                        created_at: string;
                        description: string;
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
                        members_url: string;
                        name: string;
                        node_id: string;
                        public_gists: number;
                        public_members_url: string;
                        public_repos: number;
                        repos_url: string;
                        type: string;
                        url: string;
                    };
                    parent: string;
                    permission: string;
                    privacy: string;
                    repos_count: number;
                    repositories_url: string;
                    slug: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions": return { get: (teamId: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
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
                    body: string;
                    body_html: string;
                    body_version: string;
                    comments_count: number;
                    comments_url: string;
                    created_at: string;
                    html_url: string;
                    last_edited_at: string;
                    node_id: string;
                    number: number;
                    pinned: boolean;
                    private: boolean;
                    reactions: {
                        +1: number;
                        -1: number;
                        confused: number;
                        heart: number;
                        hooray: number;
                        laugh: number;
                        total_count: number;
                        url: string;
                    };
                    team_url: string;
                    title: string;
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (teamId: number, accept?: string): Promise<{
                status: 201;
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
                    body: string;
                    body_html: string;
                    body_version: string;
                    comments_count: number;
                    comments_url: string;
                    created_at: string;
                    html_url: string;
                    last_edited_at: string;
                    node_id: string;
                    number: number;
                    pinned: boolean;
                    private: boolean;
                    reactions: {
                        +1: number;
                        -1: number;
                        confused: number;
                        heart: number;
                        hooray: number;
                        laugh: number;
                        total_count: number;
                        url: string;
                    };
                    team_url: string;
                    title: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions/{discussion_number}": return { delete: (teamId: number, discussionNumber: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, discussionNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, discussionNumber: number, accept?: string): Promise<{
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
                    body: string;
                    body_html: string;
                    body_version: string;
                    comments_count: number;
                    comments_url: string;
                    created_at: string;
                    html_url: string;
                    last_edited_at: string;
                    node_id: string;
                    number: number;
                    pinned: boolean;
                    private: boolean;
                    reactions: {
                        +1: number;
                        -1: number;
                        confused: number;
                        heart: number;
                        hooray: number;
                        laugh: number;
                        total_count: number;
                        url: string;
                    };
                    team_url: string;
                    title: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, discussionNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (teamId: number, discussionNumber: number, accept?: string): Promise<{
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
                    body: string;
                    body_html: string;
                    body_version: string;
                    comments_count: number;
                    comments_url: string;
                    created_at: string;
                    html_url: string;
                    last_edited_at: string;
                    node_id: string;
                    number: number;
                    pinned: boolean;
                    private: boolean;
                    reactions: {
                        +1: number;
                        -1: number;
                        confused: number;
                        heart: number;
                        hooray: number;
                        laugh: number;
                        total_count: number;
                        url: string;
                    };
                    team_url: string;
                    title: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { teamId, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions/{discussion_number}/comments": return { get: (teamId: number, discussionNumber: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
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
                    body: string;
                    body_html: string;
                    body_version: string;
                    created_at: string;
                    discussion_url: string;
                    html_url: string;
                    last_edited_at: string;
                    node_id: string;
                    number: number;
                    reactions: {
                        +1: number;
                        -1: number;
                        confused: number;
                        heart: number;
                        hooray: number;
                        laugh: number;
                        total_count: number;
                        url: string;
                    };
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, discussionNumber }), { direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (teamId: number, discussionNumber: number, accept?: string): Promise<{
                status: 201;
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
                    body: string;
                    body_html: string;
                    body_version: string;
                    created_at: string;
                    discussion_url: string;
                    html_url: string;
                    last_edited_at: string;
                    node_id: string;
                    number: number;
                    reactions: {
                        +1: number;
                        -1: number;
                        confused: number;
                        heart: number;
                        hooray: number;
                        laugh: number;
                        total_count: number;
                        url: string;
                    };
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { teamId, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}": return { delete: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, discussionNumber, commentNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
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
                    body: string;
                    body_html: string;
                    body_version: string;
                    created_at: string;
                    discussion_url: string;
                    html_url: string;
                    last_edited_at: string;
                    node_id: string;
                    number: number;
                    reactions: {
                        +1: number;
                        -1: number;
                        confused: number;
                        heart: number;
                        hooray: number;
                        laugh: number;
                        total_count: number;
                        url: string;
                    };
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, discussionNumber, commentNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
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
                    body: string;
                    body_html: string;
                    body_version: string;
                    created_at: string;
                    discussion_url: string;
                    html_url: string;
                    last_edited_at: string;
                    node_id: string;
                    number: number;
                    reactions: {
                        +1: number;
                        -1: number;
                        confused: number;
                        heart: number;
                        hooray: number;
                        laugh: number;
                        total_count: number;
                        url: string;
                    };
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { teamId, discussionNumber, commentNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions": return { get: (teamId: number, discussionNumber: number, commentNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, discussionNumber, commentNumber }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (teamId: number, discussionNumber: number, commentNumber: number, accept: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { teamId, discussionNumber, commentNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions/{discussion_number}/reactions": return { get: (teamId: number, discussionNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, discussionNumber }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (teamId: number, discussionNumber: number, accept: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { teamId, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/invitations": return { get: (teamId: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    email: string;
                    id: number;
                    invitation_team_url: string;
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
                    login: string;
                    role: string;
                    team_count: number;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/members": return { get: (teamId: number, role?: "member" | "maintainer" | "all", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { role, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/members/{username}": return { delete: (teamId: number, username: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 404;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, username: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (teamId: number, username: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 404;
            } | {
                status: 422;
                error: {
                    errors: {
                        code: string;
                        field: string;
                        resource: string;
                    }[];
                    message: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/memberships/{username}": return { delete: (teamId: number, username: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 403;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, username: string, accept?: string): Promise<{
                status: 200;
                data: {
                    role: string;
                    state: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (teamId: number, username: string, accept?: string): Promise<{
                status: 200;
                data: {
                    role: string;
                    state: string;
                    url: string;
                };
            } | {
                status: 403;
            } | {
                status: 422;
                error: {
                    errors: {
                        code: string;
                        field: string;
                        resource: string;
                    }[];
                    message: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/projects": return { get: (teamId: number, accept: string, perPage?: number, page?: number): Promise<{
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
                    organization_permission: string;
                    owner_url: string;
                    permissions: {
                        admin: boolean;
                        read: boolean;
                        write: boolean;
                    };
                    private: boolean;
                    state: string;
                    updated_at: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/projects/{project_id}": return { delete: (teamId: number, projectId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, projectId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, projectId: number, accept: string): Promise<{
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
                    organization_permission: string;
                    owner_url: string;
                    permissions: {
                        admin: boolean;
                        read: boolean;
                        write: boolean;
                    };
                    private: boolean;
                    state: string;
                    updated_at: string;
                    url: string;
                };
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, projectId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (teamId: number, projectId: number, accept: string): Promise<{
                status: 204;
            } | {
                status: 403;
                error: {
                    documentation_url: string;
                    message: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { teamId, projectId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/repos": return { get: (teamId: number, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/repos/{owner}/{repo}": return { delete: (teamId: number, owner: string, repo: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, owner: string, repo: string, accept?: string): Promise<{
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
                };
            } | {
                status: 204;
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (teamId: number, owner: string, repo: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { teamId, owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/team-sync/group-mappings": return { get: (teamId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    groups: {
                        group_description: string;
                        group_id: string;
                        group_name: string;
                    }[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (teamId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    groups: {
                        group_description: string;
                        group_id: string;
                        group_name: string;
                    }[];
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/teams": return { get: (teamId: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    description: string;
                    id: number;
                    members_url: string;
                    name: string;
                    node_id: string;
                    parent: {
                        description: string;
                        html_url: string;
                        id: number;
                        members_url: string;
                        name: string;
                        node_id: string;
                        permission: string;
                        privacy: string;
                        repositories_url: string;
                        slug: string;
                        url: string;
                    };
                    permission: string;
                    privacy: string;
                    repositories_url: string;
                    slug: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/user": return { get: (accept?: string): Promise<{
                status: 200;
                data: {
                    avatar_url: string;
                    bio: string;
                    blog: string;
                    collaborators: number;
                    company: string;
                    created_at: string;
                    disk_usage: number;
                    email: string;
                    events_url: string;
                    followers: number;
                    followers_url: string;
                    following: number;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    hireable: boolean;
                    html_url: string;
                    id: number;
                    location: string;
                    login: string;
                    name: string;
                    node_id: string;
                    organizations_url: string;
                    owned_private_repos: number;
                    plan: {
                        collaborators: number;
                        name: string;
                        private_repos: number;
                        space: number;
                    };
                    private_gists: number;
                    public_gists: number;
                    public_repos: number;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    total_private_repos: number;
                    two_factor_authentication: boolean;
                    type: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (accept?: string): Promise<{
                status: 200;
                data: {
                    avatar_url: string;
                    bio: string;
                    blog: string;
                    collaborators: number;
                    company: string;
                    created_at: string;
                    disk_usage: number;
                    email: string;
                    events_url: string;
                    followers: number;
                    followers_url: string;
                    following: number;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    hireable: boolean;
                    html_url: string;
                    id: number;
                    location: string;
                    login: string;
                    name: string;
                    node_id: string;
                    organizations_url: string;
                    owned_private_repos: number;
                    plan: {
                        collaborators: number;
                        name: string;
                        private_repos: number;
                        space: number;
                    };
                    private_gists: number;
                    public_gists: number;
                    public_repos: number;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    total_private_repos: number;
                    two_factor_authentication: boolean;
                    type: string;
                    updated_at: string;
                    url: string;
                };
            }> => engine.process(handle("patch", p, {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/user/blocks": return { get: (accept?: string): Promise<{
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
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/search/users": return { get: (q: string, sort?: "followers" | "repositories" | "joined", order?: "desc" | "asc", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        incomplete_results: boolean;
                        items: {
                            avatar_url: string;
                            followers_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            score: number;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        }[];
                        total_count: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, { q, sort, order, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}": return { delete: (teamId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        created_at: string;
                        description: string;
                        html_url: string;
                        id: number;
                        members_count: number;
                        members_url: string;
                        name: string;
                        node_id: string;
                        organization: {
                            avatar_url: string;
                            blog: string;
                            company: string;
                            created_at: string;
                            description: string;
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
                            members_url: string;
                            name: string;
                            node_id: string;
                            public_gists: number;
                            public_members_url: string;
                            public_repos: number;
                            repos_url: string;
                            type: string;
                            url: string;
                        };
                        parent: string;
                        permission: string;
                        privacy: string;
                        repos_count: number;
                        repositories_url: string;
                        slug: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (teamId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        created_at: string;
                        description: string;
                        html_url: string;
                        id: number;
                        members_count: number;
                        members_url: string;
                        name: string;
                        node_id: string;
                        organization: {
                            avatar_url: string;
                            blog: string;
                            company: string;
                            created_at: string;
                            description: string;
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
                            members_url: string;
                            name: string;
                            node_id: string;
                            public_gists: number;
                            public_members_url: string;
                            public_repos: number;
                            repos_url: string;
                            type: string;
                            url: string;
                        };
                        parent: string;
                        permission: string;
                        privacy: string;
                        repos_count: number;
                        repositories_url: string;
                        slug: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions": return { get: (teamId: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
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
                        body: string;
                        body_html: string;
                        body_version: string;
                        comments_count: number;
                        comments_url: string;
                        created_at: string;
                        html_url: string;
                        last_edited_at: string;
                        node_id: string;
                        number: number;
                        pinned: boolean;
                        private: boolean;
                        reactions: {
                            +1: number;
                            -1: number;
                            confused: number;
                            heart: number;
                            hooray: number;
                            laugh: number;
                            total_count: number;
                            url: string;
                        };
                        team_url: string;
                        title: string;
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (teamId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
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
                        body: string;
                        body_html: string;
                        body_version: string;
                        comments_count: number;
                        comments_url: string;
                        created_at: string;
                        html_url: string;
                        last_edited_at: string;
                        node_id: string;
                        number: number;
                        pinned: boolean;
                        private: boolean;
                        reactions: {
                            +1: number;
                            -1: number;
                            confused: number;
                            heart: number;
                            hooray: number;
                            laugh: number;
                            total_count: number;
                            url: string;
                        };
                        team_url: string;
                        title: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions/{discussion_number}": return { delete: (teamId: number, discussionNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, discussionNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, discussionNumber: number, accept?: string): Promise<{
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
                        body: string;
                        body_html: string;
                        body_version: string;
                        comments_count: number;
                        comments_url: string;
                        created_at: string;
                        html_url: string;
                        last_edited_at: string;
                        node_id: string;
                        number: number;
                        pinned: boolean;
                        private: boolean;
                        reactions: {
                            +1: number;
                            -1: number;
                            confused: number;
                            heart: number;
                            hooray: number;
                            laugh: number;
                            total_count: number;
                            url: string;
                        };
                        team_url: string;
                        title: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, discussionNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (teamId: number, discussionNumber: number, accept?: string): Promise<{
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
                        body: string;
                        body_html: string;
                        body_version: string;
                        comments_count: number;
                        comments_url: string;
                        created_at: string;
                        html_url: string;
                        last_edited_at: string;
                        node_id: string;
                        number: number;
                        pinned: boolean;
                        private: boolean;
                        reactions: {
                            +1: number;
                            -1: number;
                            confused: number;
                            heart: number;
                            hooray: number;
                            laugh: number;
                            total_count: number;
                            url: string;
                        };
                        team_url: string;
                        title: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { teamId, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions/{discussion_number}/comments": return { get: (teamId: number, discussionNumber: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
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
                        body: string;
                        body_html: string;
                        body_version: string;
                        created_at: string;
                        discussion_url: string;
                        html_url: string;
                        last_edited_at: string;
                        node_id: string;
                        number: number;
                        reactions: {
                            +1: number;
                            -1: number;
                            confused: number;
                            heart: number;
                            hooray: number;
                            laugh: number;
                            total_count: number;
                            url: string;
                        };
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, discussionNumber }), { direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (teamId: number, discussionNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
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
                        body: string;
                        body_html: string;
                        body_version: string;
                        created_at: string;
                        discussion_url: string;
                        html_url: string;
                        last_edited_at: string;
                        node_id: string;
                        number: number;
                        reactions: {
                            +1: number;
                            -1: number;
                            confused: number;
                            heart: number;
                            hooray: number;
                            laugh: number;
                            total_count: number;
                            url: string;
                        };
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { teamId, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}": return { delete: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, discussionNumber, commentNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
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
                        body: string;
                        body_html: string;
                        body_version: string;
                        created_at: string;
                        discussion_url: string;
                        html_url: string;
                        last_edited_at: string;
                        node_id: string;
                        number: number;
                        reactions: {
                            +1: number;
                            -1: number;
                            confused: number;
                            heart: number;
                            hooray: number;
                            laugh: number;
                            total_count: number;
                            url: string;
                        };
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, discussionNumber, commentNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (teamId: number, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
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
                        body: string;
                        body_html: string;
                        body_version: string;
                        created_at: string;
                        discussion_url: string;
                        html_url: string;
                        last_edited_at: string;
                        node_id: string;
                        number: number;
                        reactions: {
                            +1: number;
                            -1: number;
                            confused: number;
                            heart: number;
                            hooray: number;
                            laugh: number;
                            total_count: number;
                            url: string;
                        };
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { teamId, discussionNumber, commentNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions": return { get: (teamId: number, discussionNumber: number, commentNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, discussionNumber, commentNumber }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (teamId: number, discussionNumber: number, commentNumber: number, accept: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { teamId, discussionNumber, commentNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/discussions/{discussion_number}/reactions": return { get: (teamId: number, discussionNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, discussionNumber }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (teamId: number, discussionNumber: number, accept: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { teamId, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/invitations": return { get: (teamId: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        created_at: string;
                        email: string;
                        id: number;
                        invitation_team_url: string;
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
                        login: string;
                        role: string;
                        team_count: number;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/members": return { get: (teamId: number, role?: "member" | "maintainer" | "all", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { role, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/members/{username}": return { delete: (teamId: number, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (teamId: number, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 404;
                } | {
                    status: 422;
                    error: {
                        errors: {
                            code: string;
                            field: string;
                            resource: string;
                        }[];
                        message: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/memberships/{username}": return { delete: (teamId: number, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 403;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        role: string;
                        state: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (teamId: number, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        role: string;
                        state: string;
                        url: string;
                    };
                } | {
                    status: 403;
                } | {
                    status: 422;
                    error: {
                        errors: {
                            code: string;
                            field: string;
                            resource: string;
                        }[];
                        message: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { teamId, username }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/projects": return { get: (teamId: number, accept: string, perPage?: number, page?: number): Promise<{
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
                        organization_permission: string;
                        owner_url: string;
                        permissions: {
                            admin: boolean;
                            read: boolean;
                            write: boolean;
                        };
                        private: boolean;
                        state: string;
                        updated_at: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/projects/{project_id}": return { delete: (teamId: number, projectId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, projectId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, projectId: number, accept: string): Promise<{
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
                        organization_permission: string;
                        owner_url: string;
                        permissions: {
                            admin: boolean;
                            read: boolean;
                            write: boolean;
                        };
                        private: boolean;
                        state: string;
                        updated_at: string;
                        url: string;
                    };
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, projectId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (teamId: number, projectId: number, accept: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 403;
                    error: {
                        documentation_url: string;
                        message: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { teamId, projectId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/repos": return { get: (teamId: number, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/repos/{owner}/{repo}": return { delete: (teamId: number, owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { teamId, owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (teamId: number, owner: string, repo: string, accept?: string): Promise<{
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
                    };
                } | {
                    status: 204;
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId, owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (teamId: number, owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { teamId, owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/team-sync/group-mappings": return { get: (teamId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        groups: {
                            group_description: string;
                            group_id: string;
                            group_name: string;
                        }[];
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (teamId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        groups: {
                            group_description: string;
                            group_id: string;
                            group_name: string;
                        }[];
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { teamId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/teams/{team_id}/teams": return { get: (teamId: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        description: string;
                        id: number;
                        members_url: string;
                        name: string;
                        node_id: string;
                        parent: {
                            description: string;
                            html_url: string;
                            id: number;
                            members_url: string;
                            name: string;
                            node_id: string;
                            permission: string;
                            privacy: string;
                            repositories_url: string;
                            slug: string;
                            url: string;
                        };
                        permission: string;
                        privacy: string;
                        repositories_url: string;
                        slug: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { teamId }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/user": return { get: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        avatar_url: string;
                        bio: string;
                        blog: string;
                        collaborators: number;
                        company: string;
                        created_at: string;
                        disk_usage: number;
                        email: string;
                        events_url: string;
                        followers: number;
                        followers_url: string;
                        following: number;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        hireable: boolean;
                        html_url: string;
                        id: number;
                        location: string;
                        login: string;
                        name: string;
                        node_id: string;
                        organizations_url: string;
                        owned_private_repos: number;
                        plan: {
                            collaborators: number;
                            name: string;
                            private_repos: number;
                            space: number;
                        };
                        private_gists: number;
                        public_gists: number;
                        public_repos: number;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        total_private_repos: number;
                        two_factor_authentication: boolean;
                        type: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        avatar_url: string;
                        bio: string;
                        blog: string;
                        collaborators: number;
                        company: string;
                        created_at: string;
                        disk_usage: number;
                        email: string;
                        events_url: string;
                        followers: number;
                        followers_url: string;
                        following: number;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        hireable: boolean;
                        html_url: string;
                        id: number;
                        location: string;
                        login: string;
                        name: string;
                        node_id: string;
                        organizations_url: string;
                        owned_private_repos: number;
                        plan: {
                            collaborators: number;
                            name: string;
                            private_repos: number;
                            space: number;
                        };
                        private_gists: number;
                        public_gists: number;
                        public_repos: number;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        total_private_repos: number;
                        two_factor_authentication: boolean;
                        type: string;
                        updated_at: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", p, {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/user/blocks": return { get: (accept?: string): Promise<{
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
            }> => engine.process(handle("get", p, {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
