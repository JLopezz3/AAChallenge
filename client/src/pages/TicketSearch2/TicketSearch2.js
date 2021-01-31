import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TicketSearch2({ allflight }) {
  return (
    <div>
      <VerticalTimeline layout={"1-column-left"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="Feb 1, 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Departing: HOU at 17:50
          </h3>
          <h3 className="vertical-timeline-element-subtitle">
            {" "}
            Arriving: MIA at 19:00
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="Jan 31, 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Departing: MIA at 17:50
          </h3>
          <h3 className="vertical-timeline-element-subtitle">
            {" "}
            Arriving: HOU at 19:00
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="Feb 1, 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Departing: HOU at 17:50
          </h3>
          <h3 className="vertical-timeline-element-subtitle">
            {" "}
            Arriving: MIA at 19:00
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="Jan 31, 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Departing: LAX at 9:50
          </h3>
          <h3 className="vertical-timeline-element-subtitle">
            {" "}
            Arriving: JFK at 11:00
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="Jan 31, 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Departing: JFK at 9:50
          </h3>
          <h3 className="vertical-timeline-element-subtitle">
            {" "}
            Arriving: LAX at 11:00
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="Feb 1, 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Departing: LAX at 9:50
          </h3>
          <h3 className="vertical-timeline-element-subtitle">
            {" "}
            Arriving: JFK at 11:00
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="Jan 31, 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Departing: ORD at 14:30
          </h3>
          <h3 className="vertical-timeline-element-subtitle">
            {" "}
            Arriving: OKC at 16:00
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="Feb 1, 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Departing: OKC at 14:30
          </h3>
          <h3 className="vertical-timeline-element-subtitle">
            {" "}
            Arriving: ORD at 16:00
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
