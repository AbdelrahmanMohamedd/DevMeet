import React from "react";
import { useTranslation } from 'react-i18next';
let Team = (props) => {
     let [t,i18n]= useTranslation();
  return (
    <div id="team" className="txtCenter">
      <div className="Maincontainer">
        <div className="colMD8 colmdofst2 section-title">
          <h2 className="font-h2">{t("Meet the Team")}</h2>
          <p className="parag" >{t("We are Students @ITP - Information Technology Institute")} </p>
          <h4 className="font-h4" >{t("Full Stack Web Develeopment using MEARN track")}</h4>
        </div>
        <div id="myrow">  

                <div className="colmd3 colsm6 team"> 
                  <div className="thumbnail"> 
                    <img src="images/TeamMembers/Omar.jfif" alt="." className="team-img" style={{height:'250px' , width:'auto'}}/>
                    <div className="caption">
                      <h4 className="font-h4" >{t("Omar Khaled")}</h4>
                      <p className="parag" >{t("MEARN stack Developer")}</p>
                    </div>
                  </div>
                </div>
                <div  className="colmd3 colsm6 team"> 
                  <div className="thumbnail"> 
                    <img src="images/TeamMembers/Basmala.jfif" alt="." className="team-img" style={{height:'250px' , width:'auto'}}/>
                    <div className="caption">
                      <h4 className="font-h4" >{t("Basmala Mamdouh")}</h4>
                      <p className="parag" >{t("MEARN stack Developer")}</p>
                    </div>
                  </div>
                </div>
                <div  className="colmd3 colsm6 team"> 
                  <div className="thumbnail"> 
                    <img src="images/TeamMembers/Abdelrahman.PNG" alt="." className="team-img" style={{height:'250px' , width:'auto'}}/>
                    <div className="caption">
                      <h4 className="font-h4" >{t("Abdelrahman Mohamed")}</h4>
                      <p className="parag" >{t("MEARN stack Developer")}</p>
                    </div>
                  </div>
                </div>
                <div  className="colmd3 colsm6 team"> 
                  <div className="thumbnail"> 
                    <img src="images/TeamMembers/Eman.jpeg" alt="." className="team-img" style={{height:'250px' , width:'auto'}}/>
                    <div className="caption">
                      <h4 className="font-h4" >{t("Eman Mohamed")}</h4>
                      <p className="parag" >{t("MEARN stack Developer")}</p>
                    </div>
                  </div>
                </div>
                <div  className="colmd3 colsm6 team"> 
                  <div className="thumbnail"> 
                    <img src="images/TeamMembers/Taha.jpeg" alt="." className="team-img" style={{height:'250px' , width:'auto'}}/>
                    <div className="caption">
                      <h4 className="font-h4" >{t("Mohamed Taha")}</h4>
                      <p className="parag" >{t("MEARN stack Developer")}</p>
                    </div>
                  </div>
                </div>


        </div>
      </div>
    </div>
  );
};


export default Team ;