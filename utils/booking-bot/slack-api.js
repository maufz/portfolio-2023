const slackApiKey = process.env.SLACK_API_KEY;
const myUser = process.env.MAURO_SLACK_ID;

export const sendSlackMessage = async (slackBody) => {
  const slackPost = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      body: JSON.stringify({
          channel: myUser,
           ...slackBody,
      }),
      headers: {
          'Authorization': `Bearer ${slackApiKey}`,
          'Content-Type': 'application/json'
      },
  });
  const slackResponse = await slackPost.json();
  console.log('Tried to send message:', new Date().toISOString());
  return slackResponse;
}
