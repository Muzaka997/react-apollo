import React from "react";
import { useQuery, useMutation } from "@apollo/client/react";
import { GET_VIEWER_REPOS } from "./queries";
import { ADD_STAR, REMOVE_STAR } from "./mutations";
import { updateStarInCache } from "./cache";
import type {
  GetViewerReposData,
  AddStarResult,
  AddStarVars,
  RemoveStarResult,
  RemoveStarVars,
  RepoNode,
} from "./types";
import RepoCard from "./RepoCard";
import { Grid } from "./styles";

const GitHubViewer: React.FC = () => {
  const { data, loading, error } =
    useQuery<GetViewerReposData>(GET_VIEWER_REPOS);

  const [addStar] = useMutation<AddStarResult, AddStarVars>(ADD_STAR, {
    optimisticResponse: ({ repoId }: AddStarVars) => ({
      addStar: {
        __typename: "AddStarPayload",
        starrable: {
          __typename: "Repository",
          id: repoId,
          viewerHasStarred: true,
        },
      },
    }),
    update(cache, result) {
      const starrable = result.data?.addStar?.starrable || null;
      updateStarInCache(cache, starrable, 1);
    },
  });

  const [removeStar] = useMutation<RemoveStarResult, RemoveStarVars>(
    REMOVE_STAR,
    {
      optimisticResponse: ({ repoId }: RemoveStarVars) => ({
        removeStar: {
          __typename: "RemoveStarPayload",
          starrable: {
            __typename: "Repository",
            id: repoId,
            viewerHasStarred: false,
          },
        },
      }),
      update(cache, result) {
        const starrable = result.data?.removeStar?.starrable || null;
        updateStarInCache(cache, starrable, -1);
      },
    },
  );

  if (loading) return <p>Loading GitHub data…</p>;
  if (error) return <p>Error: {error.message}</p>;

  const viewer = data?.viewer;

  return (
    <div style={{ marginTop: 20 }}>
      <h2>
        GitHub: {viewer?.login} {viewer?.name ? `(${viewer.name})` : ""}
      </h2>

      <Grid>
        {viewer?.repositories.nodes.map((repo: RepoNode) => (
          <RepoCard
            key={repo.id}
            repo={repo}
            onToggleStar={async (r) => {
              try {
                if (r.viewerHasStarred) {
                  await removeStar({ variables: { repoId: r.id } });
                } else {
                  await addStar({ variables: { repoId: r.id } });
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } catch (e: any) {
                console.error(e);
                alert(e.message || "Mutation failed");
              }
            }}
          />
        ))}
      </Grid>
    </div>
  );
};

export default GitHubViewer;
