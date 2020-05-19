import * as tsgen from "./engine";
export const allPaths = ["/orgs/{org}/outside_collaborators", "/orgs/{org}/outside_collaborators/{username}", "/orgs/{org}/projects", "/orgs/{org}/public_members", "/orgs/{org}/public_members/{username}", "/orgs/{org}/repos", "/orgs/{org}/team-sync/groups", "/orgs/{org}/teams", "/orgs/{org}/teams/{team_slug}", "/orgs/{org}/teams/{team_slug}/discussions", "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "/orgs/{org}/teams/{team_slug}/invitations", "/orgs/{org}/teams/{team_slug}/members", "/orgs/{org}/teams/{team_slug}/memberships/{username}", "/orgs/{org}/teams/{team_slug}/projects", "/orgs/{org}/teams/{team_slug}/projects/{project_id}"];
export type Paths = "/orgs/{org}/outside_collaborators" | "/orgs/{org}/outside_collaborators/{username}" | "/orgs/{org}/projects" | "/orgs/{org}/public_members" | "/orgs/{org}/public_members/{username}" | "/orgs/{org}/repos" | "/orgs/{org}/team-sync/groups" | "/orgs/{org}/teams" | "/orgs/{org}/teams/{team_slug}" | "/orgs/{org}/teams/{team_slug}/discussions" | "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}" | "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments" | "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}" | "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions" | "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions" | "/orgs/{org}/teams/{team_slug}/invitations" | "/orgs/{org}/teams/{team_slug}/members" | "/orgs/{org}/teams/{team_slug}/memberships/{username}" | "/orgs/{org}/teams/{team_slug}/projects" | "/orgs/{org}/teams/{team_slug}/projects/{project_id}";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/orgs/{org}/outside_collaborators" ? {
    get: (org: string, filter?: "2fa_disabled" | "all", perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/outside_collaborators/{username}" ? {
    delete: (org: string, username: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 422;
        error: {
            documentation_url: string;
            message: string;
        };
    }>;
    put: (org: string, username: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 403;
        error: {
            documentation_url: string;
            message: string;
        };
    }>;
} : P extends "/orgs/{org}/projects" ? {
    get: (org: string, accept: string, state?: "open" | "closed" | "all", perPage?: number, page?: number) => Promise<{
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
    post: (org: string, accept: string) => Promise<{
        status: 201;
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
        };
    }>;
} : P extends "/orgs/{org}/public_members" ? {
    get: (org: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/public_members/{username}" ? {
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
} : P extends "/orgs/{org}/repos" ? {
    get: (org: string, type?: "all" | "public" | "private" | "forks" | "sources" | "member" | "internal", sort?: "created" | "updated" | "pushed" | "full_name", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (org: string, accept?: string) => Promise<{
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
            template_repository: string;
            topics: string[];
            trees_url: string;
            updated_at: string;
            url: string;
            visibility: string;
            watchers_count: number;
        };
    }>;
} : P extends "/orgs/{org}/team-sync/groups" ? {
    get: (org: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            groups: {
                group_description: string;
                group_id: string;
                group_name: string;
            }[];
        };
    }>;
} : P extends "/orgs/{org}/teams" ? {
    get: (org: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (org: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}" ? {
    delete: (org: string, teamSlug: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (org: string, teamSlug: string, accept?: string) => Promise<{
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
    patch: (org: string, teamSlug: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions" ? {
    get: (org: string, teamSlug: string, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (org: string, teamSlug: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}" ? {
    delete: (org: string, teamSlug: string, discussionNumber: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (org: string, teamSlug: string, discussionNumber: number, accept?: string) => Promise<{
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
    patch: (org: string, teamSlug: string, discussionNumber: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments" ? {
    get: (org: string, teamSlug: string, discussionNumber: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (org: string, teamSlug: string, discussionNumber: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}" ? {
    delete: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
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
    patch: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions" ? {
    get: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
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
    post: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions" ? {
    get: (org: string, teamSlug: string, discussionNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
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
    post: (org: string, teamSlug: string, discussionNumber: number, accept: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/invitations" ? {
    get: (org: string, teamSlug: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/members" ? {
    get: (org: string, teamSlug: string, role?: "member" | "maintainer" | "all", perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/memberships/{username}" ? {
    delete: (org: string, teamSlug: string, username: string, accept?: string) => Promise<{
        status: 204;
    } | {
        status: 403;
    }>;
    get: (org: string, teamSlug: string, username: string, accept?: string) => Promise<{
        status: 200;
        data: {
            role: string;
            state: string;
            url: string;
        };
    } | {
        status: 404;
    }>;
    put: (org: string, teamSlug: string, username: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/projects" ? {
    get: (org: string, teamSlug: string, accept: string, perPage?: number, page?: number) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/projects/{project_id}" ? {
    delete: (org: string, teamSlug: string, projectId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (org: string, teamSlug: string, projectId: number, accept: string) => Promise<{
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
    put: (org: string, teamSlug: string, projectId: number, accept: string) => Promise<{
        status: 204;
    } | {
        status: 403;
        error: {
            documentation_url: string;
            message: string;
        };
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/orgs/{org}/outside_collaborators" ? {
    get: (org: string, filter?: "2fa_disabled" | "all", perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/outside_collaborators/{username}" ? {
    delete: (org: string, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 422;
            error: {
                documentation_url: string;
                message: string;
            };
        };
        headers: object;
    }>;
    put: (org: string, username: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/projects" ? {
    get: (org: string, accept: string, state?: "open" | "closed" | "all", perPage?: number, page?: number) => Promise<{
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
    post: (org: string, accept: string) => Promise<{
        response: Response;
        data: {
            status: 201;
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
            };
        };
        headers: object;
    }>;
} : P extends "/orgs/{org}/public_members" ? {
    get: (org: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/public_members/{username}" ? {
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
} : P extends "/orgs/{org}/repos" ? {
    get: (org: string, type?: "all" | "public" | "private" | "forks" | "sources" | "member" | "internal", sort?: "created" | "updated" | "pushed" | "full_name", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (org: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/team-sync/groups" ? {
    get: (org: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams" ? {
    get: (org: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (org: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}" ? {
    delete: (org: string, teamSlug: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (org: string, teamSlug: string, accept?: string) => Promise<{
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
    patch: (org: string, teamSlug: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions" ? {
    get: (org: string, teamSlug: string, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (org: string, teamSlug: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}" ? {
    delete: (org: string, teamSlug: string, discussionNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (org: string, teamSlug: string, discussionNumber: number, accept?: string) => Promise<{
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
    patch: (org: string, teamSlug: string, discussionNumber: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments" ? {
    get: (org: string, teamSlug: string, discussionNumber: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (org: string, teamSlug: string, discussionNumber: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}" ? {
    delete: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
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
    patch: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions" ? {
    get: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
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
    post: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions" ? {
    get: (org: string, teamSlug: string, discussionNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
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
    post: (org: string, teamSlug: string, discussionNumber: number, accept: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/invitations" ? {
    get: (org: string, teamSlug: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/members" ? {
    get: (org: string, teamSlug: string, role?: "member" | "maintainer" | "all", perPage?: number, page?: number, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/memberships/{username}" ? {
    delete: (org: string, teamSlug: string, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        } | {
            status: 403;
        };
        headers: object;
    }>;
    get: (org: string, teamSlug: string, username: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                role: string;
                state: string;
                url: string;
            };
        } | {
            status: 404;
        };
        headers: object;
    }>;
    put: (org: string, teamSlug: string, username: string, accept?: string) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/projects" ? {
    get: (org: string, teamSlug: string, accept: string, perPage?: number, page?: number) => Promise<{
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
} : P extends "/orgs/{org}/teams/{team_slug}/projects/{project_id}" ? {
    delete: (org: string, teamSlug: string, projectId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (org: string, teamSlug: string, projectId: number, accept: string) => Promise<{
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
    put: (org: string, teamSlug: string, projectId: number, accept: string) => Promise<{
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
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/orgs/{org}/outside_collaborators": return { get: (org: string, filter?: "2fa_disabled" | "all", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { filter, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/outside_collaborators/{username}": return { delete: (org: string, username: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 422;
                error: {
                    documentation_url: string;
                    message: string;
                };
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, username: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 403;
                error: {
                    documentation_url: string;
                    message: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/projects": return { get: (org: string, accept: string, state?: "open" | "closed" | "all", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { state, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, accept: string): Promise<{
                status: 201;
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
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/public_members": return { get: (org: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/public_members/{username}": return { delete: (org: string, username: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, username: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, username: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/repos": return { get: (org: string, type?: "all" | "public" | "private" | "forks" | "sources" | "member" | "internal", sort?: "created" | "updated" | "pushed" | "full_name", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { type, sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, accept?: string): Promise<{
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
                    template_repository: string;
                    topics: string[];
                    trees_url: string;
                    updated_at: string;
                    url: string;
                    visibility: string;
                    watchers_count: number;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/team-sync/groups": return { get: (org: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    groups: {
                        group_description: string;
                        group_id: string;
                        group_name: string;
                    }[];
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams": return { get: (org: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}": return { delete: (org: string, teamSlug: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, teamSlug }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, teamSlug: string, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (org: string, teamSlug: string, accept?: string): Promise<{
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { org, teamSlug }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions": return { get: (org: string, teamSlug: string, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug }), { direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, teamSlug: string, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org, teamSlug }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}": return { delete: (org: string, teamSlug: string, discussionNumber: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, teamSlug: string, discussionNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (org: string, teamSlug: string, discussionNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments": return { get: (org: string, teamSlug: string, discussionNumber: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), { direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, teamSlug: string, discussionNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}": return { delete: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, teamSlug, discussionNumber, commentNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, discussionNumber, commentNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { org, teamSlug, discussionNumber, commentNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions": return { get: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, discussionNumber, commentNumber }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org, teamSlug, discussionNumber, commentNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions": return { get: (org: string, teamSlug: string, discussionNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, teamSlug: string, discussionNumber: number, accept: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/invitations": return { get: (org: string, teamSlug: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/members": return { get: (org: string, teamSlug: string, role?: "member" | "maintainer" | "all", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug }), { role, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/memberships/{username}": return { delete: (org: string, teamSlug: string, username: string, accept?: string): Promise<{
                status: 204;
            } | {
                status: 403;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, teamSlug, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, teamSlug: string, username: string, accept?: string): Promise<{
                status: 200;
                data: {
                    role: string;
                    state: string;
                    url: string;
                };
            } | {
                status: 404;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, teamSlug: string, username: string, accept?: string): Promise<{
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
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, teamSlug, username }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/projects": return { get: (org: string, teamSlug: string, accept: string, perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/projects/{project_id}": return { delete: (org: string, teamSlug: string, projectId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, teamSlug, projectId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, teamSlug: string, projectId: number, accept: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, projectId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, teamSlug: string, projectId: number, accept: string): Promise<{
                status: 204;
            } | {
                status: 403;
                error: {
                    documentation_url: string;
                    message: string;
                };
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, teamSlug, projectId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/orgs/{org}/outside_collaborators": return { get: (org: string, filter?: "2fa_disabled" | "all", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { filter, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/outside_collaborators/{username}": return { delete: (org: string, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 422;
                    error: {
                        documentation_url: string;
                        message: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, username: string, accept?: string): Promise<{
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
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/projects": return { get: (org: string, accept: string, state?: "open" | "closed" | "all", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { state, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, accept: string): Promise<{
                response: Response;
                data: {
                    status: 201;
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
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/public_members": return { get: (org: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/public_members/{username}": return { delete: (org: string, username: string, accept?: string): Promise<{
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
        case "/orgs/{org}/repos": return { get: (org: string, type?: "all" | "public" | "private" | "forks" | "sources" | "member" | "internal", sort?: "created" | "updated" | "pushed" | "full_name", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { type, sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/team-sync/groups": return { get: (org: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams": return { get: (org: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}": return { delete: (org: string, teamSlug: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, teamSlug }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, teamSlug: string, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (org: string, teamSlug: string, accept?: string): Promise<{
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { org, teamSlug }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions": return { get: (org: string, teamSlug: string, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug }), { direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, teamSlug: string, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org, teamSlug }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}": return { delete: (org: string, teamSlug: string, discussionNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, teamSlug: string, discussionNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (org: string, teamSlug: string, discussionNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments": return { get: (org: string, teamSlug: string, discussionNumber: number, direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), { direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, teamSlug: string, discussionNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}": return { delete: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, teamSlug, discussionNumber, commentNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, discussionNumber, commentNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { org, teamSlug, discussionNumber, commentNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions": return { get: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, discussionNumber, commentNumber }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, teamSlug: string, discussionNumber: number, commentNumber: number, accept: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org, teamSlug, discussionNumber, commentNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions": return { get: (org: string, teamSlug: string, discussionNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (org: string, teamSlug: string, discussionNumber: number, accept: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { org, teamSlug, discussionNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/invitations": return { get: (org: string, teamSlug: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/members": return { get: (org: string, teamSlug: string, role?: "member" | "maintainer" | "all", perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug }), { role, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/memberships/{username}": return { delete: (org: string, teamSlug: string, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                } | {
                    status: 403;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, teamSlug, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, teamSlug: string, username: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        role: string;
                        state: string;
                        url: string;
                    };
                } | {
                    status: 404;
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, username }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, teamSlug: string, username: string, accept?: string): Promise<{
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
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, teamSlug, username }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/projects": return { get: (org: string, teamSlug: string, accept: string, perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/orgs/{org}/teams/{team_slug}/projects/{project_id}": return { delete: (org: string, teamSlug: string, projectId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { org, teamSlug, projectId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (org: string, teamSlug: string, projectId: number, accept: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { org, teamSlug, projectId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (org: string, teamSlug: string, projectId: number, accept: string): Promise<{
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
            }> => engine.process(handle("put", tsgen.pathReplace(p, { org, teamSlug, projectId }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
