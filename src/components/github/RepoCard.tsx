import React from "react";
import type { RepoNode } from "./types";
import {
  Card,
  Left,
  Title,
  Desc,
  Meta,
  Lang,
  Stars,
  Actions,
  StarButton,
} from "./styles";

type Props = {
  repo: RepoNode;
  onToggleStar: (repo: RepoNode) => Promise<void>;
};

const RepoCard: React.FC<Props> = ({ repo, onToggleStar }) => {
  return (
    <Card>
      <Left>
        <Title href={repo.url} target="_blank" rel="noreferrer">
          {repo.name}
        </Title>
        {repo.description ? <Desc>{repo.description}</Desc> : null}
        <Meta>
          {repo.primaryLanguage?.name ? (
            <Lang>{repo.primaryLanguage!.name}</Lang>
          ) : null}
          <Stars>⭐ {repo.stargazerCount}</Stars>
        </Meta>
      </Left>

      <Actions>
        <StarButton
          starred={repo.viewerHasStarred}
          onClick={() => onToggleStar(repo)}
        >
          {repo.viewerHasStarred ? "Unstar" : "Star"}
        </StarButton>
      </Actions>
    </Card>
  );
};

export default RepoCard;
