const data = [];
const length = 15;

for (let i = 0; i < length; i++) {
    data.push({
        id: `schedule${i}`,
        schedule: {
            date: `6/${i + 1} (월)`,
            time: `8:00 PM ~ 9:00 PM`,
        },
    });
}

const scheduleData = data;

export default scheduleData;