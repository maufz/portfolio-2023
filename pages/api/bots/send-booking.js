import 'dotenv/config';
import generateSlackMessage from '@/utils/booking-bot/slack-message';
import { getTodayProjects, getProjectsByName } from '@/utils/booking-bot/clockify-api';
import { sendSlackMessage } from '@/utils/booking-bot/slack-api';

const sendMessage = async () => {
    const projects = await getTodayProjects();
    const mauroProjects = getProjectsByName(projects, 'Mauro Fernández')
    if (!mauroProjects || mauroProjects.length === 0) return {
        message: "No projects for today"
    };
    const slackBody = generateSlackMessage({
        name: 'Mauro',
        projects: mauroProjects
    })
    const slackResponse = await sendSlackMessage(slackBody);
    return slackResponse;
}

export default async function handler(
  request,
  response,
) {

  const messageResponse = await sendMessage();

  response.status(200).json(messageResponse);
}
