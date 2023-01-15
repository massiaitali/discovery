export const ENV_VARS : Record<string, string> = {
    BEARER_TWITTER_TOKEN: import.meta.env.BEARER_TWITTER_TOKEN || Deno.env.get('BEARER_TWITTER_TOKEN')
}