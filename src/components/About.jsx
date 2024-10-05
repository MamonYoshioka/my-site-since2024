import './css/About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>ここでは、自身が実務で扱っている保有技術を紹介します。</p>
      
      <h2>Technologies We Use</h2>
      <ul className="tech-list">
        <li>Ruby on Rails</li>
        <li>JavaScript</li>
        <li>Laravel</li>
      </ul>
    </div>
  );
};

export default About;
