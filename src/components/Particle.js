import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent", // Dark background to enhance technical effects
          },
        },
        particles: {
          number: {
            value: 100, // Moderate number of particles for a cleaner design
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: ["#00FF00", "#008080", "#00CED1"], // Futuristic neon colors
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#000",
            },
            polygon: {
              nb_sides: 6, // Hexagonal shape for a technical, digital feel
            },
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#008080",
            opacity: 0.3,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // Bounce effect for dynamic movement
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble", // "Bubble" effect when hovering over particles
            },
            onclick: {
              enable: true,
              mode: "repulse", // Repulse effect on click to add interactivity
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.4,
              },
            },
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 0.4,
              speed: 3,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
