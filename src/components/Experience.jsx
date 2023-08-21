import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from 'react-icons/md';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h4 className="vertical-timeline-element-title">
            Ryan International School, Shahjhanpur, UttarPradesh
          </h4>
          <p> High School </p>
          <span>93%</span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={< MdSchool/>}
        >
          <h4 className="vertical-timeline-element-title">
            Ryan International School, Shahjhanpur, UttarPradesh
          </h4>
          <p> Intermediate</p>
          <span>90%</span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h4 className="vertical-timeline-element-title">
            Moradabad Institute of Technology, Moradabad, UttarPradesh
          </h4>

          <h4 className="vertical-timeline-element-subtitle">
            Btech 
          </h4>

          <p> Computer Science</p>
          <span>80%</span>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork  />}
        >
          <h4 className="vertical-timeline-element-title">
          Member of College Alumni Association
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            MIT
          </h4>
          <p>
               Managed the Alumni meets for different sessions.</p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;