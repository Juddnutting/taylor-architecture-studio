export interface Project {
  title: string;
  slug: string;
  location: string;
  type: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  role: string;
  builder: string;
  heroImage: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    title: "Miami Way Remodel",
    slug: "miami-way-remodel",
    location: "South Boulder, CO",
    type: "Remodel & Addition",
    shortDescription:
      "A complete transformation of a conventional South Boulder ranch into a contemporary, light-filled home for a family of four.",
    longDescription: `This undertaking involved completely transforming a conventional South Boulder ranch residence. The team expanded the existing 1,000-square-foot main level and added nearly 1,000 additional square feet above, producing a contemporary, luminous home suitable for a family of four.

The ground floor redesign created an expansive layout merging kitchen, dining, and living zones alongside a compact office, all featuring abundant natural illumination from expansive windows facing the reimagined backyard. The upper level incorporated three sizable bedrooms featuring cathedral-style ceilings, establishing an airy atmosphere throughout the residence.`,
    tags: ["Remodel", "Addition", "Residential"],
    role: "Project Architect (while at Lodestone Design Group)",
    builder: "Adam Parker, Living Stones Construction Management",
    heroImage: "/images/projects/miami-way/01.jpg",
    galleryImages: [
      "/images/projects/miami-way/01.jpg",
      "/images/projects/miami-way/02.jpg",
      "/images/projects/miami-way/03.jpg",
      "/images/projects/miami-way/04.jpg",
      "/images/projects/miami-way/05.jpg",
      "/images/projects/miami-way/06.jpg",
    ],
  },
  {
    title: "Folsom Street Remodel",
    slug: "folsom-street-remodel",
    location: "Boulder, CO",
    type: "Remodel & Addition",
    shortDescription:
      "From cramped and dark to open and luminous — a 1976 Boulder home reimagined with soaring vaulted ceilings, a new primary suite, and a completely transformed main level.",
    longDescription: `This residential transformation nearly doubled a 1976 home's size, converting a dark, rectangular structure into a bright, contemporary residence. The addition increased the plate height on the main level, introducing soaring vaulted ceilings throughout the upper level.

Key improvements included a new primary suite wing and two-car garage, an open kitchen, living, and dining configuration, an additional powder bath, and enhanced natural lighting throughout.`,
    tags: ["Remodel", "Addition", "Residential"],
    role: "Project Architect (while at Lodestone Design Group)",
    builder: "KBC Remodel",
    heroImage: "/images/projects/folsom-street/modern-farmhouse.png",
    galleryImages: [
      "/images/projects/folsom-street/01.jpg",
      "/images/projects/folsom-street/02.jpg",
      "/images/projects/folsom-street/03.jpg",
      "/images/projects/folsom-street/04.jpg",
      "/images/projects/folsom-street/05.jpg",
      "/images/projects/folsom-street/06.jpg",
    ],
  },
  {
    title: "966 Arapahoe",
    slug: "966-arapahoe-marshall-fire-rebuild",
    location: "Louisville, CO",
    type: "Marshall Fire Rebuild",
    shortDescription:
      "A Marshall Fire rebuild designed with care and artistry — a home that has become a true gathering place for family and friends.",
    longDescription: `After losing their residence in the Marshall Fire, these homeowners worked with Nicole to design a home that would provide a safe refuge and loving space to bring their family back together.

As the owners shared in their own words:

"After the Marshall Fire, Nicole worked with care to help us design a home that would provide a safe refuge and loving space to bring us together. She certainly achieved our vision with artistry and skill! Our loved ones gravitate to this house to cook a hot meal or sit and visit. There is space for work, hobbies, and rest all efficiently planned. Nicole worked with our builder and structural engineer to balance costs and function. Most importantly, she truly listened and cared about our project. I highly recommend Taylor Architecture Studios to help you plan a home that you will cherish forever!"

The design prioritizes open gathering spaces, natural light, and functional areas that support daily life and connection — built with both care and craft.`,
    tags: ["Marshall Fire Rebuild", "New Construction", "Residential"],
    role: "Project Architect (while at Lodestone Design Group)",
    builder: "Gen3 Homes, LLC",
    heroImage: "/images/projects/966-arapahoe/01.jpg",
    galleryImages: [
      "/images/projects/966-arapahoe/01.jpg",
      "/images/projects/966-arapahoe/02.jpg",
      "/images/projects/966-arapahoe/03.jpg",
      "/images/projects/966-arapahoe/04.jpg",
      "/images/projects/966-arapahoe/05.jpg",
      "/images/projects/966-arapahoe/06.jpg",
    ],
  },
  {
    title: "1009 Arapahoe",
    slug: "1009-arapahoe-marshall-fire-rebuild",
    location: "Louisville, CO",
    type: "Marshall Fire Rebuild",
    shortDescription:
      "A modern farmhouse rebuild designed to support recovery following the Marshall Fire, prioritizing both form and function with an open floorplan and generous light.",
    longDescription: `This Marshall Fire rebuild was designed to support the homeowner's recovery, drawing from modern farmhouse aesthetics while prioritizing both form and function with an open floorplan and generous light.

The design creates a home that feels both comforting and forward-looking — honoring what was lost while building something beautiful for the future.`,
    tags: ["Marshall Fire Rebuild", "Modern Farmhouse", "New Construction"],
    role: "Project Architect (while at Lodestone Design Group)",
    builder: "Gen3 Homes, LLC",
    heroImage: "/images/projects/1009-arapahoe/01.jpg",
    galleryImages: [
      "/images/projects/1009-arapahoe/01.jpg",
      "/images/projects/1009-arapahoe/02.jpg",
      "/images/projects/1009-arapahoe/03.jpg",
      "/images/projects/1009-arapahoe/04.jpg",
      "/images/projects/1009-arapahoe/05.jpg",
      "/images/projects/1009-arapahoe/06.jpg",
    ],
  },
  {
    title: "1007 Arapahoe",
    slug: "1007-arapahoe-marshall-fire-rebuild",
    location: "Louisville, CO",
    type: "Marshall Fire Rebuild",
    shortDescription:
      "Simple, yet beautiful and cost-efficient — this fire rebuild enhanced the original floor plan with an open layout and main floor master bedroom.",
    longDescription: `Simple, yet beautiful and cost-efficient was the goal of this fire rebuild. The design took advantage of the rebuild opportunity to enhance the original floor plan, introducing an open layout with a main floor master bedroom adjoining an expanded mud room and laundry area.

The result is a home that feels both fresh and familiar — modern in its openness and flow, but grounded in the practical needs of everyday family life.`,
    tags: ["Marshall Fire Rebuild", "New Construction", "Residential"],
    role: "Project Architect (while at Lodestone Design Group)",
    builder: "Gen3 Homes, LLC",
    heroImage: "/images/projects/1007-arapahoe/01.jpg",
    galleryImages: [
      "/images/projects/1007-arapahoe/01.jpg",
      "/images/projects/1007-arapahoe/02.jpg",
      "/images/projects/1007-arapahoe/03.jpg",
      "/images/projects/1007-arapahoe/04.jpg",
      "/images/projects/1007-arapahoe/05.jpg",
      "/images/projects/1007-arapahoe/06.jpg",
    ],
  },
  {
    title: "815 Mulberry",
    slug: "815-mulberry-marshall-fire-rebuild",
    location: "Louisville, CO",
    type: "Marshall Fire Rebuild",
    shortDescription:
      "A polished, modern rebuild that simplified the original floorplan with minimal second story to achieve a refined, low-profile aesthetic.",
    longDescription: `Rebuilding after the Marshall Fire, these homeowners were seeking to simplify their floorplan. With minimal second story program requirements, the design minimized the appearance of height and achieved a polished and modern aesthetic.

The project focused on streamlining the residential layout while maintaining contemporary design principles. By reducing upper-level square footage, the architects achieved visual restraint without compromising functionality.`,
    tags: ["Marshall Fire Rebuild", "Modern", "New Construction"],
    role: "Project Architect (while at Lodestone Design Group)",
    builder: "Gen3 Homes, LLC",
    heroImage: "/images/projects/815-mulberry/01.jpg",
    galleryImages: [
      "/images/projects/815-mulberry/01.jpg",
      "/images/projects/815-mulberry/02.jpg",
      "/images/projects/815-mulberry/03.jpg",
      "/images/projects/815-mulberry/04.jpg",
      "/images/projects/815-mulberry/05.jpg",
      "/images/projects/815-mulberry/06.jpg",
    ],
  },
  {
    title: "965 Arapahoe",
    slug: "965-arapahoe-marshall-fire-rebuild",
    location: "Louisville, CO",
    type: "Marshall Fire Rebuild",
    shortDescription:
      "One of the first homes completed in Louisville after the Marshall Fire — a thoughtful, efficient design that got this family back home quickly without compromising quality.",
    longDescription: `Speed and efficiency were the priorities for this rebuild. The team modified a base plan to include an additional garage space and dedicated back office tailored to the clients' daily needs.

The result stands as one of the first completed homes in the neighborhood — a testament to what's possible when budget discipline and thoughtful design work hand in hand. Getting families home fast, without cutting corners, was the mission.`,
    tags: ["Marshall Fire Rebuild", "New Construction", "Residential"],
    role: "Project Architect (while at Lodestone Design Group)",
    builder: "Gen3 Homes, LLC",
    heroImage: "/images/projects/965-arapahoe/01.jpg",
    galleryImages: [
      "/images/projects/965-arapahoe/01.jpg",
      "/images/projects/965-arapahoe/02.jpg",
      "/images/projects/965-arapahoe/03.jpg",
      "/images/projects/965-arapahoe/04.jpg",
      "/images/projects/965-arapahoe/05.jpg",
      "/images/projects/965-arapahoe/06.jpg",
    ],
  },
  {
    title: "967 Arapahoe",
    slug: "967-arapahoe-marshall-fire-rebuild",
    location: "Louisville, CO",
    type: "Marshall Fire Rebuild",
    shortDescription:
      "A rapid Marshall Fire rebuild adapting a base plan to this specific site, among the first residents to return home after the disaster.",
    longDescription: `This reconstruction project adapted a previously developed base plan to suit this specific site, with the primary objective being rapid occupancy following the Marshall Fire.

These homeowners were among the first residents to return to their homes after the disaster — a meaningful milestone in the Louisville community's recovery.`,
    tags: ["Marshall Fire Rebuild", "New Construction", "Residential"],
    role: "Project Architect (while at Lodestone Design Group)",
    builder: "Gen3 Homes, LLC",
    heroImage: "/images/projects/967-arapahoe/01.jpg",
    galleryImages: [
      "/images/projects/967-arapahoe/01.jpg",
      "/images/projects/967-arapahoe/02.jpg",
      "/images/projects/967-arapahoe/03.jpg",
      "/images/projects/967-arapahoe/04.jpg",
      "/images/projects/967-arapahoe/05.jpg",
      "/images/projects/967-arapahoe/06.jpg",
    ],
  },
  {
    title: "110 W. Emma Unit A",
    slug: "110-w-emma-unit-a-lafayette",
    location: "Lafayette, CO",
    type: "New Construction",
    shortDescription:
      "A twin home in downtown Lafayette balancing aesthetics, efficiency, and historic district overlay facade requirements.",
    longDescription: `Centrally located in downtown Lafayette, CO, this set of twin homes was a fun puzzle to solve. Working closely with the City of Lafayette, along with Gen3 Homes, the team strove to balance aesthetics, efficiency, and historic district overlay facade requirements to develop these elevated homes.

The result is a pair of residences that feel at home in Lafayette's historic core while offering modern floor plans, finishes, and energy performance.`,
    tags: ["New Construction", "Twin Home", "Historic District"],
    role: "Project Architect (while at Lodestone Design Group)",
    builder: "Gen3 Homes, LLC",
    heroImage: "/images/projects/110-emma-a/01.jpg",
    galleryImages: [
      "/images/projects/110-emma-a/01.jpg",
      "/images/projects/110-emma-a/02.jpg",
      "/images/projects/110-emma-a/03.jpg",
      "/images/projects/110-emma-a/04.jpg",
      "/images/projects/110-emma-a/05.jpg",
      "/images/projects/110-emma-a/06.jpg",
    ],
  },
  {
    title: "110 W. Emma Unit B",
    slug: "110-w-emma-unit-b-lafayette",
    location: "Lafayette, CO",
    type: "New Construction",
    shortDescription:
      "The companion twin home in downtown Lafayette's historic district — elevated design meeting neighborhood character.",
    longDescription: `Located in downtown Lafayette, CO, this twin home project was designed alongside its companion Unit A. Working closely with the City of Lafayette, along with Gen3 Homes, the team strove to balance aesthetics, efficiency, and historic district overlay facade requirements to develop these elevated homes.

Each unit maintains its own identity while sharing a cohesive architectural language that respects the historic neighborhood context.`,
    tags: ["New Construction", "Twin Home", "Historic District"],
    role: "Project Designer (while at Lodestone Design Group)",
    builder: "Gen3 Homes, LLC",
    heroImage: "/images/projects/110-emma-b/01.jpg",
    galleryImages: [
      "/images/projects/110-emma-b/01.jpg",
      "/images/projects/110-emma-b/02.jpg",
      "/images/projects/110-emma-b/03.jpg",
      "/images/projects/110-emma-b/04.jpg",
      "/images/projects/110-emma-b/05.jpg",
      "/images/projects/110-emma-b/06.jpg",
    ],
  },
  {
    title: "537 & 539 LaFarge",
    slug: "537-539-lafarge-louisville",
    location: "Louisville, CO",
    type: "New Construction",
    shortDescription:
      "Two single-family homes in downtown Louisville, thoughtfully redesigned from a duplex concept to integrate with the neighborhood's historic character.",
    longDescription: `This project originally aimed to construct a duplex in downtown Louisville but was redesigned into two separate single-family homes following community feedback. The designers partnered with Gen3 Homes to create new, efficient, and beautiful homes that integrate thoughtfully with the neighborhood's historic character.

The result is a pair of residences that honor Louisville's established streetscape while delivering modern livability and craftsmanship.`,
    tags: ["New Construction", "Single Family", "Infill"],
    role: "Project Designer (while at Lodestone Design Group)",
    builder: "Gen3 Homes, LLC",
    heroImage: "/images/projects/537-539-lafarge/01.jpg",
    galleryImages: [
      "/images/projects/537-539-lafarge/01.jpg",
      "/images/projects/537-539-lafarge/02.jpg",
      "/images/projects/537-539-lafarge/03.jpg",
      "/images/projects/537-539-lafarge/04.jpg",
      "/images/projects/537-539-lafarge/05.jpg",
      "/images/projects/537-539-lafarge/06.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count: number = 3): Project[] {
  return projects.slice(0, count);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
