const API_URL = "http://localhost:3000";


const getUserData = async (id) => {
    try {
        const response = await fetch(`${API_URL}/user/${id}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

const getUserActivity = async (id) => {
    try {
        const response = await fetch(`${API_URL}/user/${id}/activity`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

const getUserAvgSessions = async (id) => {
    try {
        const response = await fetch(`${API_URL}/user/${id}/average-sessions`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

const getUserPerformance = async (id) => {
    try {
        const response = await fetch(`${API_URL}/user/${id}/performance`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export {
    getUserData,
    getUserActivity,
    getUserAvgSessions,
    getUserPerformance
}