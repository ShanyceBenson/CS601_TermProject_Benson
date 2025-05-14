import "./Interests.css";

function Interests() {
  const interest = [
    {
      icon: "📺",
      title: "TV Binger Extraordinaire",
      descripption:
        "There’s nothing like a good plot twist and weekly cliffhanger to keep me hooked. I never miss an episode of Tracker, Will Trent, The Rookie, 911, or Found—these shows are my go-to escape and weekly ritual.",
    },
    {
      icon: "🎮",
      title: "Gamer Mode: On",
      descripption:
        "Whether I am strategizing in Marvel Rivals, surviving in Dead by Daylight, or going full-send in Call of Duty, gaming is where I sharpen my focus and unwind. Right now, I’m all about Marvel Rivals—it’s fast-paced, chaotic fun with just the right amount of challenge.",
    },
    {
      icon: "🎧",
      title: "Murder Podcast Addict",
      descripption:
        'True crime, but make it personal. I love tuning into Murder With My Husband, Sistas Who Kill, and Crime Junkies—each episode is a mix of mystery, suspense, and those "wait, WHAT?!" moments I live for.',
    },
    {
      icon: "🚴‍♀️",
      title: "Trail Explorer on Two Wheels",
      descripption: "Biking around Seoul has become one of my favorite ways to get moving and clear my mind. The city’s scenic trails are perfect for a solo ride or a chill adventure with friends.",
    },
    {
      icon: "🎳",
      title: "Bowling Buddy",
      descripption:
        "Bowling isn’t just a hobby—it’s a whole vibe. I compete in tournaments and even designed my own custom bowling shoes (because style matters when you’re aiming for a strike). Whether I’m practicing my hook or hyping up teammates, I bring passion and precision to every game.",
    },
    {
      icon: "🥾",
      title: "Hiking + Walking Enthusiast",
      descripption:
        "Seoul’s walking and hiking trails are my happy place. Long walks help me reset, recharge, and sometimes even brainstorm my next big idea.",
    },
    {
      icon: "⚾",
      title: "Live Sports Fan",
      descripption:
        "There’s nothing like the excitement of a live baseball game! I love cheering on the LG Twins and Doosan Bears—the energy in those stadiums is unmatched.",
    },
  ];

  return (
    <div className="interests-container">
      <h1>My Interests</h1>
      <div className="interests-grid">
        {interest.map((item, index) => (
          <div key={index} className="interest-card">
            <div className="icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.descripption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interests;
