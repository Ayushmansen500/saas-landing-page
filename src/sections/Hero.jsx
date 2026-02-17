import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container relative grid grid-cols-2 gap-20 max-lg:grid-cols-1">
          
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-512">
            <div className="caption small-2 uppercase text-p3">
              Crack High Package DevOps Jobs
            </div>

            <h1 className="mb-6 h1 text-p4 uppercase max-lg:h2 max-md:text-5xl">
              Transform Your Career in 55 Days
            </h1>

            <p className="max-w-440 mb-14 body-1 text-p5">
              Master <strong>AWS, Azure, GCP, DevOps & AI</strong> with
              <strong> 100% live, interactive training</strong>. Get
              industry-ready skills, real-world projects, and guidance to crack
              <strong> 15–40+ LPA</strong> roles at top MNCs.
            </p>

            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">
                Start Your 55-Day Journey
              </Button>
            </LinkScroll>

            {/* TRUST STATS */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-md:grid-cols-1">
             
            </div>
          </div>

          {/* RIGHT CONTENT (FILLED SPACE) */}
          <div className="relative z-10 flex items-center justify-center max-lg:hidden">
            
            {/* Glow background */}
            <div
              style={{
                position: "absolute",
                inset: "-80px",
                background:
                  "radial-gradient(circle at center, rgba(46,242,255,0.18), transparent 65%)",
                filter: "blur(60px)",
                zIndex: -1,
              }}
            />

            {/* Card Stack */}
            <div className="grid gap-6 w-full max-w-md">
              
              <div className="rounded-2xl border border-s4/40 bg-s1/80 p-6 backdrop-blur-xl">
                <h4 className="text-xl font-semibold text-p4 mb-2">
                  Real-World DevOps Projects
                </h4>
                <p className="text-sm text-p5">
                  CI/CD pipelines, Kubernetes deployments, monitoring stacks,
                  cloud automation, and production-grade architectures.
                </p>
              </div>

              <div className="rounded-2xl border border-s4/40 bg-s1/80 p-6 backdrop-blur-xl">
                <h4 className="text-xl font-semibold text-p4 mb-2">
                  Multi-Cloud Mastery
                </h4>
                <p className="text-sm text-p5">
                  AWS, Azure, and GCP compared side-by-side with real hiring
                  scenarios and interview-ready use cases.
                </p>
              </div>

              <div className="rounded-2xl border border-s4/40 bg-s1/80 p-6 backdrop-blur-xl">
                <h4 className="text-xl font-semibold text-p4 mb-2">
                  Mentorship & Placement Prep
                </h4>
                <p className="text-sm text-p5">
                  Resume reviews, mock interviews, system design sessions, and
                  insider guidance from working DevOps engineers.
                </p>
              </div>

            </div>
          </div>

        </div>
      </Element>
    </section>
  );
};

export default Hero;
