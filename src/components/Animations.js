import gsap from "gsap";

// STAGGER HOME PAGE TEXT
export const staggerHomeText = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    delay: 0.2,
    duration: 0.6,
    autoAlpha: 0,
    y: "100%",
    ease: "power4.out",
    stagger: {
      each: 0.2
    }
  });
};

// STAGGER ABOUT PAGE TEXT
export const staggerAboutText = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    duration: 1.5,
    autoAlpha: 0,
    y: "100%",
    ease: "power4.out",
    stagger: {
      each: 0.2
    }
  });
};

// STAGGER CONTACT PAGE TEXT
export const staggerContactText = (node1, node2, node3, node4, node5, node6) => {
  gsap.from([node1, node2, node3, node4, node5, node6], {
    duration: 2,
    autoAlpha: 0,
    y: "100%",
    ease: "power4.out",
    stagger: {
      each: 0.4
    }
  });
};

// SHRINK TEXT
export const shrinkText = (node) => {
  gsap.to(node, {
    duration: 1,
    delay: 1,
    fontSize: 30,
    ease: "power4.out"
  });
};