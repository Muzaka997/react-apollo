import type { ApolloCache } from "@apollo/client";

export function updateStarInCache(
  cache: ApolloCache,
  starrable: {
    __typename: string;
    id: string;
    viewerHasStarred: boolean;
  } | null,
  delta: number,
) {
  if (!starrable) return;
  const typename = starrable.__typename || "Repository";
  const cacheId = cache.identify({ __typename: typename, id: starrable.id });
  if (!cacheId) return;

  cache.modify({
    id: cacheId,
    fields: {
      viewerHasStarred() {
        return starrable.viewerHasStarred;
      },
      stargazerCount(existing: number = 0) {
        return existing + delta;
      },
    },
  });
}
