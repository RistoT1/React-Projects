import DecorativeBranch from "../../img/branch.svg";
import ProfilePic from "../../img/myFace.jpg";
import { useAnimations } from "../../hooks/useAnimations";

const skills = ["javascript", "HTML", "CSS", "C#", "SQL", "PHP"];

const About = () => {
  useAnimations();

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Decorative Branch SVG */}
        <div className="branch-svg-container">
          <img src={DecorativeBranch} alt="" />
        </div>
        <div className="about-content">
          {/* LEFT: Text + Skills */}
          <div className="about-text-with-branch">
            {/* Decorative Branch SVG above the text */}
            <div className="branch-svg-container-mobile">
              <img src={DecorativeBranch} alt="" />
            </div>
            <div className="about-text">
              <h2>About</h2>
              <p>
                I’m a second-year student developer who knows the basics well and enjoys writing clean,
                straightforward code. I like working on projects that are practical and solve everyday problems
                without overcomplicating things.
              </p>
              <p>
                My focus is on building functional, reliable applications while keeping things simple and
                user-friendly. I’m still learning and growing, but I’m comfortable with the fundamentals and
                excited to keep improving step by step :)
              </p>
              <p>
                When I’m not coding, I enjoy spending time with friends, going to the gym, and focusing on the
                things that really matter.
                <a href="pages/readmore.html" className="nav-link" style={{ marginLeft: 8 }}>Read more</a>
              </p>
              <div className="skills" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
                {skills.map((skill, idx) => (
                  <span
                    className="skill"
                    key={idx}
                    style={{
                      background: "#f0f0f0",
                      borderRadius: "16px",
                      padding: "6px 14px",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "#333",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {/* Profile image below the text */}
              <div className="profile-image-below-text" style={{ marginTop: 24, display: "none" }}>
                <div className="profile-circle">
                  <img src={ProfilePic} alt="Risto Toivanen" style={{ width: 80, height: 80, borderRadius: "50%" }} />
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT: Profile + Stats */}
          <div className="about-stats" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div className="profile-image" style={{ marginBottom: 16 }}>
              <div className="profile-circle">
                <img src={ProfilePic} alt="Risto Toivanen" style={{ width: 110, height: 110, borderRadius: "50%", border: "3px solid #e0e0e0" }} />
              </div>
            </div>
            <div className="stats-container" style={{ display: "flex", gap: "24px" }}>
              <div className="stat-item" style={{ textAlign: "center" }}>
                <div className="stat-number" style={{ fontSize: "2rem", fontWeight: 700, color: "#2b7cff" }}>3+</div>
                <div className="stat-label" style={{ fontSize: "1rem", color: "#666" }}>years experience</div>
              </div>
              <div className="stat-item" style={{ textAlign: "center" }}>
                <div className="stat-number" style={{ fontSize: "2rem", fontWeight: 700, color: "#2b7cff" }}>15+</div>
                <div className="stat-label" style={{ fontSize: "1rem", color: "#666" }}>projects completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
