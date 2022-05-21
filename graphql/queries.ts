import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query GetSubredditByTopic($topic: String!)   {
    getSubredditListByTopic(topic: $topic) {
      created_at
      id
      topic
    }
  }
`;