import { useEffect, useRef, useState } from "react";
import "./TimelineItem.css";

type TimelineItemProps = {
  title: string;
  company: string;
  location: string;
  date: string;
  details: string[];
}

function TimelineItem({ title, company, location, date, details }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  console.log('Visible:', isVisible);

  return (
    <div ref={ref} className={`timeline-item ${isVisible ? "visible" : ""}`}>
      <div className="timeline-dot" />
      <div className="timeline-content">
        <h3 className="timeline-title">{title}</h3>
        <p><strong>{company}</strong> - {location}</p>
        <div className="timeline-date">{date}</div>
        <ul className="timeline-details">
          {details.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
