import React, { useEffect, useState } from "react";
import johnImg from "../../assets/images/john.png";
import journeyImg from "../../assets/images/journey.png";
import catchImg from "../../assets/images/catch.png";
import taleImg from "../../assets/images/tale.png";
import Button from "../button";
import tokens from "../../json/colors";

// Story data array containing image, title, and description
const data = [
  {
    img: johnImg,
    name: "John’s Story",
    desc: "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
  },
  {
    img: journeyImg,
    name: "The Journey",
    desc: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
  },
  {
    img: catchImg,
    name: "Catch Day",
    desc: "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
  },
  {
    img: taleImg,
    name: "Trout Tales",
    desc: "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
  },
];

const Story = () => {
  // State to determine if the screen is mobile-sized
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Styling objects
  const btnStyle = {
    background: tokens.colors.neutral[10],
    color: { ...tokens.type.body.small },
  };
  const headingStyle = {
    ...tokens.type.accent,
    lineHeight: tokens.lineheights.loose,
    marginBottom: "0",
  };
  const descStyle = isMobile
    ? { ...tokens.type.body.default, color: tokens.colors.neutral[60] }
    : { ...tokens.type.body.small };
  const headStyle = isMobile
    ? {
        ...tokens.type.heading.default,
        marginBottom: "22px",
      }
    : {
        ...tokens.type.heading.medium,
        marginBottom: "22px",
      };
  const resBtnStyle = {
    border: "1px solid",
    borderColor: tokens.colors.neutral[40],
    background: tokens.colors.neutral[0],
    color: tokens.colors.neutral[90],
  };
  const hrStyle = {
    color: tokens.colors.neutral[20],
  };

  return (
    <section className="member-stories">
      <div className="container">
        <p style={headStyle}>Member stories</p>
        <hr style={hrStyle} />
        <div className={`row ${isMobile ? "gy-3" : "gy-5"}`}>
          {data.map((story, index) => (
            <div className="col-md-6 stories" key={index}>
              {/* Web version */}
              <div className="web">
                <img src={story.img} alt={story.name} />
                <div className="content-body">
                  <div>
                    <p className="heading" style={headingStyle}>
                      {story.name}
                    </p>
                    <p className="desc" style={descStyle}>
                      {story.desc}
                    </p>
                  </div>
                  <Button props={{ style: btnStyle }} className="w-max-content read-more">
                    Read more
                  </Button>
                </div>
              </div>
              {/* Mobile version */}
              <div className="mobile">
                <p className="heading" style={headingStyle}>{story.name}</p>
                <div className="content-body">
                  <div>
                    <img src={story.img} alt={story.name} />
                    <Button props={{ style: resBtnStyle }} className="w-max-content read-more">
                      Read more
                    </Button>
                  </div>
                  <p className="desc" style={descStyle}>{story.desc}</p>
                </div>
              </div>
              <hr style={hrStyle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
