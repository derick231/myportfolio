import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          delay:0.3 * (index+1),
          scrollTrigger:{
            trigger: card,
            start: 'top bottom-=100'
          }
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section className="app-showcase" id="work" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper ">
              <img
                src="/images/Project1.png"
                alt="TaskManagement"
                className=""
              />
            </div>
            <div className="text-content">
              <h2>
                Powerful Task Management App that helps user organize, track and
                prioritize their work
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with Postgres, React, Express, & Node for a fast
                and user-friendly task management experience.
              </p>
            </div>
          </div>
          {/* right */}
          <div className=" project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="lorem"
                  className="rounded"
                />
              </div>
              <h2>A Blog app - His Ministry</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/project3.png"
                  alt="lorem"
                  className="rounded"
                />
              </div>
              <h2>Smart School Management</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
