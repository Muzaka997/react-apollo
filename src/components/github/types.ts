export interface RepoNode {
  __typename: "Repository";
  id: string;
  name: string;
  description?: string | null;
  primaryLanguage?: { name: string } | null;
  url: string;
  viewerHasStarred: boolean;
  stargazerCount: number;
}

export interface ReposConnection {
  nodes: RepoNode[];
}

export interface Viewer {
  login: string;
  name?: string | null;
  repositories: ReposConnection;
}

export interface GetViewerReposData {
  viewer: Viewer;
}

export interface AddStarVars {
  repoId: string;
}

export interface RemoveStarVars {
  repoId: string;
}

export interface AddStarResult {
  addStar: {
    starrable: {
      __typename: string;
      id: string;
      viewerHasStarred: boolean;
    } | null;
  } | null;
}

export interface RemoveStarResult {
  removeStar: {
    starrable: {
      __typename: string;
      id: string;
      viewerHasStarred: boolean;
    } | null;
  } | null;
}
