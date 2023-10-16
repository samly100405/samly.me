/* eslint-disable react/prop-types */
import "./InfoSection.css";
import CppLogo from "../resources/pictures/cpp-logo.png";
import AlgsLogo from "../resources/pictures/algs4partI-logo.png";
import ScrimbaLogo from "../resources/pictures/scrimba-logo.png";
import OdinProjectLogo from "../resources/pictures/odin-project-logo.png";
import GDSCLogo from "../resources/pictures/gdsc-logo.png"
import SEALogo from "../resources/pictures/sea-logo.png"
import VSALogo from "../resources/pictures/vsa-logo.webp"

function InfoSection() {
  return (
    <div className="info-section">
      <div className="info-title">
        <h1>Education</h1>
      </div>
      <div className="info-item-container">
        <InfoItem
          title="Cal Poly Pomona - B.S. Computer Science 2026"
          url="https://www.cpp.edu/index.shtml"
          image={CppLogo}
        />
        <InfoItem
          title="Princeton University (Coursera) - Alorgithms, Parth I"
          url="https://www.coursera.org/learn/algorithms-part1"
          image={AlgsLogo}
        />
        <InfoItem
          title="Scrimba - Learn React"
          url="https://scrimba.com/learn/learnreact"
          image={ScrimbaLogo}
        />
        <InfoItem
          title="The Odin Project - Foundations"
          url="https://www.theodinproject.com/about"
          image={OdinProjectLogo}
        />
      </div>
      <div className="info-title">
        <h1>Clubs and Activities</h1>
      </div>
      <div className="info-item-container">
        <InfoItem
          title="Google Student Developer Club"
          url="https://gdsc.community.dev/california-state-polytechnic-university/"
          image={GDSCLogo}
        />  
        <InfoItem
          title="Software Engineering Association"
          url="https://www.cppsea.com/"
          image={SEALogo}
        /> 
        <InfoItem
          title="Vietnamese Student Association"
          url="https://www.instagram.com/cpp.vsa/"
          image={VSALogo}
        /> 
      </div>
    </div>
  );
}

function InfoItem({ title, desc, image, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="info-item">
        <img src={image} alt="image" />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </a>
  );
}
export default InfoSection;