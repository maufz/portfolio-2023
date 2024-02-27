const projectSlackSection = (project) => {

    return {
        "type": "rich_text",
        "elements": [
            {
                "type": "rich_text_quote",
                "elements": [
                    {
                        "type": "text",
                        "text": project.projectName,
                        "style": {
                            "bold": true
                        }
                    },
                    {
                        "type": "text",
                        "text": `\n${project.hoursPerDay} horas asignadas\nNota: `
                    },
                    {
                        "type": "text",
                        "text": project.note ?? 'Sin nota',
                        "style": {
                            "italic": true
                        }
                    }
                ]
            },
            {
                "type": "rich_text_section",
                "elements": []
            }
        ]
    }
}

const generateAllProjectsMsg = (projects) => {
    if (!projects) return;
    const blocks = projects.map(project => {
        return projectSlackSection(project);
    });
    return blocks;
}


const generateSlackMessage = ({ name = 'Mauro', projects = [] }) => {
    return {
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `Buen día ${name} :wave:\n\nEste es el booking para hoy:`
                }
            },
            ...generateAllProjectsMsg(projects),
            {
                "type": "divider"
            },
            {
                "type": "context",
                "elements": [
                    {
                        "type": "plain_text",
                        "text": "Hecho por Mauro Fernández",
                        "emoji": true
                    }
                ]
            }
        ]
    }
}

export default generateSlackMessage;
