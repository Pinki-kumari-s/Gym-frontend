import React from 'react';

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>
          Our expert-designed workout sessions target strength, endurance, and flexibility. Whether you're a beginner or a seasoned athlete, these sessions are crafted to push your limits and elevate your fitness journey.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our high-intensity bootcamps designed for rapid transformation. From fat-burning HIIT to muscle-building circuits, our bootcamps offer focused and effective group training experiences.
        </p>

        <div className="bootcamps">
          <div>
            <h4>Fat Burn & HIIT Blast</h4>
            <p>
              Burn maximum calories with our High-Intensity Interval Training sessions. Perfect for those aiming to lose fat quickly while improving cardiovascular fitness.
            </p>
          </div>

          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Build lean muscle and increase overall strength with guided weight training and core-focused routines. Great for beginners and advanced lifters alike.
            </p>
          </div>

          <div>
            <h4>Functional Training Bootcamp</h4>
            <p>
              Improve your agility, balance, and mobility through full-body functional workouts. This bootcamp mimics real-life movements to boost daily performance.
            </p>
          </div>

          <div>
            <h4>Cardio Kickboxing & Endurance</h4>
            <p>
              Power through a fun and fierce session of kickboxing drills combined with stamina-boosting cardio. A great way to relieve stress while staying in shape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
