import { tweetsByIds } from './../http/endpoints.js'
import { ENV_VARS } from './../../private/index.js';

import type { Tweet } from './../components/Tweets/tweets.type'

const token = ENV_VARS.BEARER_TWITTER_TOKEN;


export const getTweets = async (ids: String[]) => {
    const response = await fetch(tweetsByIds(ids), {
        method: 'GET',
        headers: {'authorization': `Bearer ${token}`}
    });
    
    const json : Record<string, Tweet[]> = await response.json();
    return json.data || [];
}