import React from "react";
import "./about.css";

function About() {
  return (
    <div className="container aboutCont">
      <p className="para">
        <b>NT News</b> फैक्ट चेक, टीवी टुडे नेटवर्क लिमिटेड लिमिटेड का हिस्सा
        है. फैक्ट चेक सेक्शन <b>NT News</b> वेबसाइट का हिस्सा है. लेकिन इस
        सेक्शन का प्रबंधन अलग और स्वतंत्र तरीके से इंडिया टुडे- <b>NT News</b>{" "}
        की संपादकीय टीम द्वारा किया जाता है.
      </p>

        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/2552/2552801.png" alt="" />
          <h2>Abhishek Kolapkar</h2>
          <p className="title">Founder of NT News</p>
          <p>lorem ipsum ipsum lorem lorem ipsum ipsum lorem.</p>
        </div>
    </div>
  );
}

export default About;
