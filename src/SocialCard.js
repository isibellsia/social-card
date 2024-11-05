import "./socialCard.css";

const SocialCard = () => {
  return (
    <main>
      <div className="container">
        <section>
          <img
            src="../assets/photo.png"
            alt="myPhoto"
            width={"80px"}
            height={"80px"}
          />
          <h1>Izabel Usheva</h1>
          <span>Sofia, Bulgaria</span>
          <p>"Frontend developer who is in love with React." </p>
        </section>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/izabel-usheva/"
            target="_blank"
            rel="noreferrer"
          >
            Linked In
          </a>
          <a
            href="https://github.com/isibellsia"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a href="/">Resume</a>
        </div>
      </div>
    </main>
  );
};

export default SocialCard;

