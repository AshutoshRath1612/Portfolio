import React from "react";
import "./Education.css";
import ITER from "../../assets/images/iter.jpg"
import DPS from "../../assets/images/dps.jpg"
import Xavier from "../../assets/images/xavier.jpg"

const Education = React.forwardRef((props, ref) => {
  const toWebsite = (url) => {
    window.open(url, "_blank");
  }
  return (
    <div ref={ref}>
      <div className="educationContainer">
        <div className="title">
          <i className="fas fa-graduation-cap" style={{color:'#3b0a34'}}></i>
          <h1 className="educationTitle" style={{color:'#3b0a34'}}>Education</h1>
        </div>
        <div className="education">
          <div className="educationCard">
          <img src={ITER} alt="ITER" onClick={()=>toWebsite("https://www.soa.ac.in/iter")}/>
          <div className="educationContent">
            <div className="educationDegree">Bachelor Of Technology In Computer Science</div>
            <a href="https://www.soa.ac.in/iter" target="_blank">
            <div className="educationInstitute">Institute of Technical Education and Research, Bhubaneswar</div>
            </a>
            <div className="educationYear">2020 - 2024 | Completed</div>
          </div>
          </div>
          <div className="educationCard">
          <img src={DPS} alt="DPS"  onClick={()=>toWebsite("https://dpsdhenkanal.ac.in/")}/>
          <div className="educationContent">
            <h2 className="educationDegree">Senior Secondary</h2>
            <a href="https://dpsdhenkanal.ac.in/" target="_blank">
            <p className="educationInstitute">
              Delhi Public School, Dhenkanal
            </p>
            </a>
            <p className="educationYear">2018 - 2020 | Completed</p>
          </div>
          </div>
          <div className="educationCard">
          <img src={Xavier} alt="Xavier"  onClick={()=>toWebsite("https://stxaviersdhenkanal.org/")}/>
          <div className="educationContent">
            <h2 className="educationDegree">Secondary</h2>
            <a href="https://stxaviersdhenkanal.org/" target="_blank">
            <p className="educationInstitute">
              ST.Xavier&apos;s High School, Dhenkanal
            </p>
            </a>
            <p className="educationYear">2009-2018 | Completed</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
});
Education.displayName = "Education";

export default Education;
