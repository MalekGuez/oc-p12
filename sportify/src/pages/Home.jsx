import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Dumbell from "../assets/dumbell.svg";
import Cycle from "../assets/cycle.svg";
import Yoga from "../assets/yogo.svg";
import Swim from "../assets/swim.svg";


import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../assets/data';
import CustomBarChart from '../components/CustomBarChart';

import CardInfo from '../components/CardInfo';
import CustomLineChart from '../components/CustomLineChart';
import CustomRadarChart from '../components/CustomRadarChart';
import CustomPieChart from '../components/CustomPieChart';

const Home = () => {
    const [fetchFromFile, setFetchFromFile] = useState(true);
    const [userFirstName, setUserFirstName] = useState("");

    const [userCalorie, setUserCalorie] = useState("");
    const [userProtein, setUserProtein] = useState("");
    const [userCarbs, setUserCarbs] = useState("");
    const [userFat, setUserFat] = useState("");

    const [userActivity, setUserActivity] = useState();
    const [userAvgSessions, setUserAvgSessions] = useState();
    const [userPerformance, setUserPerformance] = useState();
    const [userPercentage, setUserPercentage] = useState();
    const id = 12;

    const fetchDataFromFile = async () => {
      const firstName = USER_MAIN_DATA.find(user => user.id === id).userInfos.firstName;
      setUserFirstName(firstName);

      const calorieCount = USER_MAIN_DATA.find(user => user.id === id).keyData.calorieCount;
      setUserCalorie(calorieCount);
      const proteinCount = USER_MAIN_DATA.find(user => user.id === id).keyData.proteinCount;
      setUserProtein(proteinCount);
      const carbohydrateCount = USER_MAIN_DATA.find(user => user.id === id).keyData.carbohydrateCount;
      setUserCarbs(carbohydrateCount);
      const lipidCount = USER_MAIN_DATA.find(user => user.id === id).keyData.lipidCount;
      setUserFat(lipidCount);

      const currentUserActivity = USER_ACTIVITY.find(activity => activity.userId === id);
      setUserActivity(currentUserActivity.sessions);

      const currentUserAvgSessions = USER_AVERAGE_SESSIONS.find(activity => activity.userId === id);
      setUserAvgSessions(currentUserAvgSessions.sessions);


      const translationMap = {
        cardio: 'Cardio',
        energy: 'Énergie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité'
    };

    const radarData = USER_PERFORMANCE.find(user => user.id = id).data.map(item => ({
        subject: translationMap[USER_PERFORMANCE.find(user => user.id = id).kind[item.kind]],
      value: item.value
    }));
    setUserPerformance(radarData);

    const percent = USER_MAIN_DATA.find(user => user.id === id).todayScore * 100;
    setUserPercentage(percent);
    };
  
    const fetchDataFromApi = async () => {
      
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (fetchFromFile) {
            const fileData = await fetchDataFromFile();
            
            
          } else {
            const apiData = await fetchDataFromApi();
            
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [fetchFromFile]);
    
    return (
        <div className="sportsee-home">
            <div className="sportsee-home__navigation">
                <div className="sportsee-home__navigation-icon">
                    <img src={Yoga} alt="dumbell" />
                </div>
                <div className="sportsee-home__navigation-icon">
                    <img src={Swim} alt="dumbell" />
                </div>
                <div className="sportsee-home__navigation-icon">
                    <img src={Cycle} alt="dumbell" />
                </div>
                <div className="sportsee-home__navigation-icon">
                    <img src={Dumbell} alt="dumbell" />
                </div>
            
                <p>Copyright, SportSee 2020</p>
            </div>

            <div className="sportsee-home__content">
                <div className="sportsee-home__title">
                    <h1>Bonjour <span>{ userFirstName }</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                

                <div className="sportsee-home__graphs">
                  <div className="sportsee-home__graphs-left">
                    <div className="sportsee-home__graphs-left-full">
                      <CustomBarChart data={userActivity}/>
                    </div>
                    <div className="sportsee-home__graphs-left-small">
                      <CustomLineChart data={userAvgSessions} />
                      <CustomRadarChart data={userPerformance} />
                      <CustomPieChart percentage={userPercentage} />
                    </div>
                  </div>

                  <div className="sportsee-home__graphs-right">
                    <CardInfo iconPath="src/assets/calories-icon.svg" avg={userCalorie+"kCal"} text="Calories" />
                    <CardInfo iconPath="src/assets/protein-icon.svg" avg={userProtein+"g"} text="Protéines" />
                    <CardInfo iconPath="src/assets/carbs-icon.svg" avg={userCarbs+"g"} text="Glucides" />
                    <CardInfo iconPath="src/assets/fat-icon.svg" avg={userFat+"g"} text="Lipides" />
                  </div>                  
                </div>
 
            </div>
        </div>
    );
};

export default Home;