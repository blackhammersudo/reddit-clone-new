import React from "react";
import './Left.css'

const Left = () => {
  const subList = [
    "askreddit",
    "Worldnews",
    "videos",
    "todayilearned",
    "pics",
    "Gaming",
    "Movies",
    "news",
    "gifs",
    "aww",
    "modlyinteresting",
    "televison",
    "jokes",
    "science",
    "soccer",
    "internetisbeautiful",
    "detaisbeautiful",
  ];

  return (
    <div className="leftnavlink">
      <ul className="sidenav_sub">
        {subList.map((subList) => (
          <li className="l" key={subList}>
            <a href={`/r/${subList}`} className="l">
              {subList}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Left;
