import * as tsgen from "./engine";
export const allPaths = ["/repos/{owner}/{repo}/issues/events", "/repos/{owner}/{repo}/issues/events/{event_id}", "/repos/{owner}/{repo}/issues/{issue_number}", "/repos/{owner}/{repo}/issues/{issue_number}/assignees", "/repos/{owner}/{repo}/issues/{issue_number}/comments", "/repos/{owner}/{repo}/issues/{issue_number}/events", "/repos/{owner}/{repo}/issues/{issue_number}/labels", "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}", "/repos/{owner}/{repo}/issues/{issue_number}/lock", "/repos/{owner}/{repo}/issues/{issue_number}/reactions", "/repos/{owner}/{repo}/issues/{issue_number}/timeline", "/repos/{owner}/{repo}/keys", "/repos/{owner}/{repo}/keys/{key_id}", "/repos/{owner}/{repo}/labels", "/repos/{owner}/{repo}/labels/{name}", "/repos/{owner}/{repo}/languages", "/repos/{owner}/{repo}/license", "/repos/{owner}/{repo}/merges", "/repos/{owner}/{repo}/milestones", "/repos/{owner}/{repo}/milestones/{milestone_number}"];
export type Paths = "/repos/{owner}/{repo}/issues/events" | "/repos/{owner}/{repo}/issues/events/{event_id}" | "/repos/{owner}/{repo}/issues/{issue_number}" | "/repos/{owner}/{repo}/issues/{issue_number}/assignees" | "/repos/{owner}/{repo}/issues/{issue_number}/comments" | "/repos/{owner}/{repo}/issues/{issue_number}/events" | "/repos/{owner}/{repo}/issues/{issue_number}/labels" | "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}" | "/repos/{owner}/{repo}/issues/{issue_number}/lock" | "/repos/{owner}/{repo}/issues/{issue_number}/reactions" | "/repos/{owner}/{repo}/issues/{issue_number}/timeline" | "/repos/{owner}/{repo}/keys" | "/repos/{owner}/{repo}/keys/{key_id}" | "/repos/{owner}/{repo}/labels" | "/repos/{owner}/{repo}/labels/{name}" | "/repos/{owner}/{repo}/languages" | "/repos/{owner}/{repo}/license" | "/repos/{owner}/{repo}/merges" | "/repos/{owner}/{repo}/milestones" | "/repos/{owner}/{repo}/milestones/{milestone_number}";
export function isPath(p: string): p is Paths { return allPaths.indexOf(p) !== -1; }
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/repos/{owner}/{repo}/issues/events" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            actor: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            commit_id: string;
            commit_url: string;
            created_at: string;
            event: string;
            id: number;
            issue: {
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
            };
            node_id: string;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/issues/events/{event_id}" ? {
    get: (owner: string, repo: string, eventId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            actor: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            commit_id: string;
            commit_url: string;
            created_at: string;
            event: string;
            id: number;
            issue: {
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
            };
            node_id: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}" ? {
    get: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
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
    patch: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/assignees" ? {
    delete: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
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
        };
    }>;
    post: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/comments" ? {
    get: (owner: string, repo: string, issueNumber: number, since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        status: 201;
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
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/events" ? {
    get: (owner: string, repo: string, issueNumber: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            actor: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            commit_id: string;
            commit_url: string;
            created_at: string;
            event: string;
            id: number;
            node_id: string;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/labels" ? {
    delete: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, issueNumber: number, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            color: string;
            default: boolean;
            description: string;
            id: number;
            name: string;
            node_id: string;
            url: string;
        }[];
    }>;
    post: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        status: 200;
        data: {
            color: string;
            default: boolean;
            description: string;
            id: number;
            name: string;
            node_id: string;
            url: string;
        }[];
    }>;
    put: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        status: 200;
        data: {
            color: string;
            default: boolean;
            description: string;
            id: number;
            name: string;
            node_id: string;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}" ? {
    delete: (owner: string, repo: string, issueNumber: number, name: string, accept?: string) => Promise<{
        status: 200;
        data: {
            color: string;
            default: boolean;
            description: string;
            id: number;
            name: string;
            node_id: string;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/lock" ? {
    delete: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        status: 204;
    }>;
    put: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        status: 204;
    }>;
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/reactions" ? {
    get: (owner: string, repo: string, issueNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
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
    post: (owner: string, repo: string, issueNumber: number, accept: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/timeline" ? {
    get: (owner: string, repo: string, issueNumber: number, accept: string, perPage?: number, page?: number) => Promise<{
        status: 200;
        data: {
            actor: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            commit_id: string;
            commit_url: string;
            created_at: string;
            event: string;
            id: number;
            node_id: string;
            url: string;
        }[];
    }>;
} : P extends "/repos/{owner}/{repo}/keys" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            id: number;
            key: string;
            read_only: boolean;
            title: string;
            url: string;
            verified: boolean;
        }[];
    }>;
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
            created_at: string;
            id: number;
            key: string;
            read_only: boolean;
            title: string;
            url: string;
            verified: boolean;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/keys/{key_id}" ? {
    delete: (owner: string, repo: string, keyId: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, keyId: number, accept?: string) => Promise<{
        status: 200;
        data: {
            created_at: string;
            id: number;
            key: string;
            read_only: boolean;
            title: string;
            url: string;
            verified: boolean;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/labels" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
            color: string;
            default: boolean;
            description: string;
            id: number;
            name: string;
            node_id: string;
            url: string;
        }[];
    }>;
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
            color: string;
            default: boolean;
            description: string;
            id: number;
            name: string;
            node_id: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/labels/{name}" ? {
    delete: (owner: string, repo: string, name: string, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, name: string, accept?: string) => Promise<{
        status: 200;
        data: {
            color: string;
            default: boolean;
            description: string;
            id: number;
            name: string;
            node_id: string;
            url: string;
        };
    }>;
    patch: (owner: string, repo: string, name: string, accept?: string) => Promise<{
        status: 200;
        data: {
            color: string;
            default: boolean;
            description: string;
            id: number;
            name: string;
            node_id: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/languages" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        status: 200;
        data: {
            C: number;
            Python: number;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/license" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
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
            license: {
                key: string;
                name: string;
                node_id: string;
                spdx_id: string;
                url: string;
            };
            name: string;
            path: string;
            sha: string;
            size: number;
            type: string;
            url: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/merges" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
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
            comments_url: string;
            commit: {
                author: {
                    date: string;
                    email: string;
                    name: string;
                };
                comment_count: number;
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
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                login: string;
                node_id: string;
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
            node_id: string;
            parents: {
                sha: string;
                url: string;
            }[];
            sha: string;
            url: string;
        };
    } | {
        status: 404;
        error: {
            message: string;
        };
    } | {
        status: 409;
        error: {
            message: string;
        };
    }>;
} : P extends "/repos/{owner}/{repo}/milestones" ? {
    get: (owner: string, repo: string, state?: "open" | "closed" | "all", sort?: "due_on" | "completeness", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
        }[];
    }>;
    post: (owner: string, repo: string, accept?: string) => Promise<{
        status: 201;
        data: {
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
    }>;
} : P extends "/repos/{owner}/{repo}/milestones/{milestone_number}" ? {
    delete: (owner: string, repo: string, milestoneNumber: number, accept?: string) => Promise<{
        status: 204;
    }>;
    get: (owner: string, repo: string, milestoneNumber: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
    }>;
    patch: (owner: string, repo: string, milestoneNumber: number, accept?: string) => Promise<{
        status: 200;
        data: {
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
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/repos/{owner}/{repo}/issues/events" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                actor: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                commit_id: string;
                commit_url: string;
                created_at: string;
                event: string;
                id: number;
                issue: {
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
                };
                node_id: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/issues/events/{event_id}" ? {
    get: (owner: string, repo: string, eventId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                actor: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                commit_id: string;
                commit_url: string;
                created_at: string;
                event: string;
                id: number;
                issue: {
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
                };
                node_id: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}" ? {
    get: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
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
    patch: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/assignees" ? {
    delete: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
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
            };
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/comments" ? {
    get: (owner: string, repo: string, issueNumber: number, since?: string, perPage?: number, page?: number, accept?: string) => Promise<{
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
    post: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
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
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/events" ? {
    get: (owner: string, repo: string, issueNumber: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                actor: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                commit_id: string;
                commit_url: string;
                created_at: string;
                event: string;
                id: number;
                node_id: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/labels" ? {
    delete: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, issueNumber: number, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}" ? {
    delete: (owner: string, repo: string, issueNumber: number, name: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/lock" ? {
    delete: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    put: (owner: string, repo: string, issueNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/reactions" ? {
    get: (owner: string, repo: string, issueNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number) => Promise<{
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
    post: (owner: string, repo: string, issueNumber: number, accept: string) => Promise<{
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
} : P extends "/repos/{owner}/{repo}/issues/{issue_number}/timeline" ? {
    get: (owner: string, repo: string, issueNumber: number, accept: string, perPage?: number, page?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                actor: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                commit_id: string;
                commit_url: string;
                created_at: string;
                event: string;
                id: number;
                node_id: string;
                url: string;
            }[];
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/keys" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                created_at: string;
                id: number;
                key: string;
                read_only: boolean;
                title: string;
                url: string;
                verified: boolean;
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
                id: number;
                key: string;
                read_only: boolean;
                title: string;
                url: string;
                verified: boolean;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/keys/{key_id}" ? {
    delete: (owner: string, repo: string, keyId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, keyId: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                created_at: string;
                id: number;
                key: string;
                read_only: boolean;
                title: string;
                url: string;
                verified: boolean;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/labels" ? {
    get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
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
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/labels/{name}" ? {
    delete: (owner: string, repo: string, name: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, name: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                url: string;
            };
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, name: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                color: string;
                default: boolean;
                description: string;
                id: number;
                name: string;
                node_id: string;
                url: string;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/languages" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                C: number;
                Python: number;
            };
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/license" ? {
    get: (owner: string, repo: string, accept?: string) => Promise<{
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
                license: {
                    key: string;
                    name: string;
                    node_id: string;
                    spdx_id: string;
                    url: string;
                };
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
} : P extends "/repos/{owner}/{repo}/merges" ? {
    post: (owner: string, repo: string, accept?: string) => Promise<{
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
                comments_url: string;
                commit: {
                    author: {
                        date: string;
                        email: string;
                        name: string;
                    };
                    comment_count: number;
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
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    login: string;
                    node_id: string;
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
                node_id: string;
                parents: {
                    sha: string;
                    url: string;
                }[];
                sha: string;
                url: string;
            };
        } | {
            status: 404;
            error: {
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
} : P extends "/repos/{owner}/{repo}/milestones" ? {
    get: (owner: string, repo: string, state?: "open" | "closed" | "all", sort?: "due_on" | "completeness", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
            }[];
        };
        headers: object;
    }>;
    post: (owner: string, repo: string, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 201;
            data: {
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
        };
        headers: object;
    }>;
} : P extends "/repos/{owner}/{repo}/milestones/{milestone_number}" ? {
    delete: (owner: string, repo: string, milestoneNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 204;
        };
        headers: object;
    }>;
    get: (owner: string, repo: string, milestoneNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
        };
        headers: object;
    }>;
    patch: (owner: string, repo: string, milestoneNumber: number, accept?: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
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
        };
        headers: object;
    }>;
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/repos/{owner}/{repo}/issues/events": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    actor: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    commit_id: string;
                    commit_url: string;
                    created_at: string;
                    event: string;
                    id: number;
                    issue: {
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
                    };
                    node_id: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/events/{event_id}": return { get: (owner: string, repo: string, eventId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    actor: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    commit_id: string;
                    commit_url: string;
                    created_at: string;
                    event: string;
                    id: number;
                    issue: {
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
                    };
                    node_id: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, eventId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}": return { get: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/assignees": return { delete: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
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
                };
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), post: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/comments": return { get: (owner: string, repo: string, issueNumber: number, since?: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                status: 201;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/events": return { get: (owner: string, repo: string, issueNumber: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    actor: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    commit_id: string;
                    commit_url: string;
                    created_at: string;
                    event: string;
                    id: number;
                    node_id: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/labels": return { delete: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, issueNumber: number, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    color: string;
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                status: 200;
                data: {
                    color: string;
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                }[];
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                status: 200;
                data: {
                    color: string;
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                }[];
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}": return { delete: (owner: string, repo: string, issueNumber: number, name: string, accept?: string): Promise<{
                status: 200;
                data: {
                    color: string;
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                }[];
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, issueNumber, name }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/lock": return { delete: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/reactions": return { get: (owner: string, repo: string, issueNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, issueNumber: number, accept: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/timeline": return { get: (owner: string, repo: string, issueNumber: number, accept: string, perPage?: number, page?: number): Promise<{
                status: 200;
                data: {
                    actor: {
                        avatar_url: string;
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
                        organizations_url: string;
                        received_events_url: string;
                        repos_url: string;
                        site_admin: boolean;
                        starred_url: string;
                        subscriptions_url: string;
                        type: string;
                        url: string;
                    };
                    commit_id: string;
                    commit_url: string;
                    created_at: string;
                    event: string;
                    id: number;
                    node_id: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/keys": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    id: number;
                    key: string;
                    read_only: boolean;
                    title: string;
                    url: string;
                    verified: boolean;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
                    created_at: string;
                    id: number;
                    key: string;
                    read_only: boolean;
                    title: string;
                    url: string;
                    verified: boolean;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/keys/{key_id}": return { delete: (owner: string, repo: string, keyId: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, keyId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, keyId: number, accept?: string): Promise<{
                status: 200;
                data: {
                    created_at: string;
                    id: number;
                    key: string;
                    read_only: boolean;
                    title: string;
                    url: string;
                    verified: boolean;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, keyId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/labels": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
                    color: string;
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
                    color: string;
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/labels/{name}": return { delete: (owner: string, repo: string, name: string, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, name }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, name: string, accept?: string): Promise<{
                status: 200;
                data: {
                    color: string;
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, name }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, name: string, accept?: string): Promise<{
                status: 200;
                data: {
                    color: string;
                    default: boolean;
                    description: string;
                    id: number;
                    name: string;
                    node_id: string;
                    url: string;
                };
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, name }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/languages": return { get: (owner: string, repo: string, accept?: string): Promise<{
                status: 200;
                data: {
                    C: number;
                    Python: number;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/license": return { get: (owner: string, repo: string, accept?: string): Promise<{
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
                    license: {
                        key: string;
                        name: string;
                        node_id: string;
                        spdx_id: string;
                        url: string;
                    };
                    name: string;
                    path: string;
                    sha: string;
                    size: number;
                    type: string;
                    url: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/merges": return { post: (owner: string, repo: string, accept?: string): Promise<{
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
                    comments_url: string;
                    commit: {
                        author: {
                            date: string;
                            email: string;
                            name: string;
                        };
                        comment_count: number;
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
                        events_url: string;
                        followers_url: string;
                        following_url: string;
                        gists_url: string;
                        gravatar_id: string;
                        html_url: string;
                        id: number;
                        login: string;
                        node_id: string;
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
                    node_id: string;
                    parents: {
                        sha: string;
                        url: string;
                    }[];
                    sha: string;
                    url: string;
                };
            } | {
                status: 404;
                error: {
                    message: string;
                };
            } | {
                status: 409;
                error: {
                    message: string;
                };
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/milestones": return { get: (owner: string, repo: string, state?: "open" | "closed" | "all", sort?: "due_on" | "completeness", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
                status: 200;
                data: {
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
                }[];
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { state, sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                status: 201;
                data: {
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/milestones/{milestone_number}": return { delete: (owner: string, repo: string, milestoneNumber: number, accept?: string): Promise<{
                status: 204;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, milestoneNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, milestoneNumber: number, accept?: string): Promise<{
                status: 200;
                data: {
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, milestoneNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, milestoneNumber: number, accept?: string): Promise<{
                status: 200;
                data: {
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, milestoneNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/repos/{owner}/{repo}/issues/events": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        actor: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        commit_id: string;
                        commit_url: string;
                        created_at: string;
                        event: string;
                        id: number;
                        issue: {
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
                        };
                        node_id: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/events/{event_id}": return { get: (owner: string, repo: string, eventId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        actor: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        commit_id: string;
                        commit_url: string;
                        created_at: string;
                        event: string;
                        id: number;
                        issue: {
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
                        };
                        node_id: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, eventId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}": return { get: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/assignees": return { delete: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
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
                    };
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), post: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/comments": return { get: (owner: string, repo: string, issueNumber: number, since?: string, perPage?: number, page?: number, accept?: string): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), { since, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/events": return { get: (owner: string, repo: string, issueNumber: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        actor: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        commit_id: string;
                        commit_url: string;
                        created_at: string;
                        event: string;
                        id: number;
                        node_id: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/labels": return { delete: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, issueNumber: number, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })), put: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}": return { delete: (owner: string, repo: string, issueNumber: number, name: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, issueNumber, name }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/lock": return { delete: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), put: (owner: string, repo: string, issueNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("put", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/reactions": return { get: (owner: string, repo: string, issueNumber: number, accept: string, content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes", perPage?: number, page?: number): Promise<{
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
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), { content, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, issueNumber: number, accept: string): Promise<{
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
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo, issueNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/issues/{issue_number}/timeline": return { get: (owner: string, repo: string, issueNumber: number, accept: string, perPage?: number, page?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        actor: {
                            avatar_url: string;
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
                            organizations_url: string;
                            received_events_url: string;
                            repos_url: string;
                            site_admin: boolean;
                            starred_url: string;
                            subscriptions_url: string;
                            type: string;
                            url: string;
                        };
                        commit_id: string;
                        commit_url: string;
                        created_at: string;
                        event: string;
                        id: number;
                        node_id: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, issueNumber }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/keys": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        created_at: string;
                        id: number;
                        key: string;
                        read_only: boolean;
                        title: string;
                        url: string;
                        verified: boolean;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        created_at: string;
                        id: number;
                        key: string;
                        read_only: boolean;
                        title: string;
                        url: string;
                        verified: boolean;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/keys/{key_id}": return { delete: (owner: string, repo: string, keyId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, keyId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, keyId: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        created_at: string;
                        id: number;
                        key: string;
                        read_only: boolean;
                        title: string;
                        url: string;
                        verified: boolean;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, keyId }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/labels": return { get: (owner: string, repo: string, perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/labels/{name}": return { delete: (owner: string, repo: string, name: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, name }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, name: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, name }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, name: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        color: string;
                        default: boolean;
                        description: string;
                        id: number;
                        name: string;
                        node_id: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, name }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/languages": return { get: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        C: number;
                        Python: number;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/license": return { get: (owner: string, repo: string, accept?: string): Promise<{
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
                        license: {
                            key: string;
                            name: string;
                            node_id: string;
                            spdx_id: string;
                            url: string;
                        };
                        name: string;
                        path: string;
                        sha: string;
                        size: number;
                        type: string;
                        url: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/merges": return { post: (owner: string, repo: string, accept?: string): Promise<{
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
                        comments_url: string;
                        commit: {
                            author: {
                                date: string;
                                email: string;
                                name: string;
                            };
                            comment_count: number;
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
                            events_url: string;
                            followers_url: string;
                            following_url: string;
                            gists_url: string;
                            gravatar_id: string;
                            html_url: string;
                            id: number;
                            login: string;
                            node_id: string;
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
                        node_id: string;
                        parents: {
                            sha: string;
                            url: string;
                        }[];
                        sha: string;
                        url: string;
                    };
                } | {
                    status: 404;
                    error: {
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
        case "/repos/{owner}/{repo}/milestones": return { get: (owner: string, repo: string, state?: "open" | "closed" | "all", sort?: "due_on" | "completeness", direction?: "asc" | "desc", perPage?: number, page?: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                    }[];
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo }), { state, sort, direction, perPage, page }, { "Content-Type": "*/*", ...{ "accept": accept } })), post: (owner: string, repo: string, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 201;
                    data: {
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
                };
                headers: object;
            }> => engine.process(handle("post", tsgen.pathReplace(p, { owner, repo }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        case "/repos/{owner}/{repo}/milestones/{milestone_number}": return { delete: (owner: string, repo: string, milestoneNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 204;
                };
                headers: object;
            }> => engine.process(handle("delete", tsgen.pathReplace(p, { owner, repo, milestoneNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), get: (owner: string, repo: string, milestoneNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { owner, repo, milestoneNumber }), {}, { "Content-Type": "*/*", ...{ "accept": accept } })), patch: (owner: string, repo: string, milestoneNumber: number, accept?: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
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
                };
                headers: object;
            }> => engine.process(handle("patch", tsgen.pathReplace(p, { owner, repo, milestoneNumber }), {}, { "Content-Type": "application/json", ...{ "accept": accept } })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
