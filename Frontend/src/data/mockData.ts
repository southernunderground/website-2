// import { image } from "framer-motion/client";
import { addServiceMetadata } from '../../src/utils/seoMetadata';
import type { ServiceWithMeta } from '../../src/utils/seoMetadata';

type SubServiceGroup = {
  id: string;       
  title: string;    
  features?: string[];
  procedures?: string[];
};

export const services = [
  {
    id: 'directional-drilling',
    name: 'Directional Drilling',
    icon: 'Drill',
    image: '/images/directional.jpg',
    shortDescription: 'Trenchless HDD for conduits and pipelines with minimal surface disruption.',
    detailedDescription:
      'End-to-end HDD including bore path engineering, pilot bores, pre-reaming/sizing, pullback, and verification testing for water, sewer, gas, electrical, and telecom.',
    features: [
      'Road/rail/waterway & wetland crossings',
      'Urban/high-traffic/sensitive corridor installs',
      'Utility locates & potholing to avoid conflicts',
      'Bore path engineering (soils, depth, bend radius)',
      'Pre-reaming & sizing for large-diameter installs',
      'Pullback: HDPE, PVC, steel, fused pipe; cable pulls',
      'Tracer wire, warning tape, protective casing',
      'Pressure, pig/mandrel & CCTV testing',
      'Re-drills/re-alignments & trenchless rehabilitation',
      'Entry/exit pits, backfill/compaction & full restoration'
    ],
    process: [
      'Preconstruction survey, permits & utility locates',
      'Bore path design based on soils/depth/bend radius',
      'Pilot bore with steering & tracking',
      'Pre-reaming to target diameter',
      'Product pullback & connection',
      'Testing, documentation & surface restoration'
    ],
    subServiceGroups: [
      {
        id: 'utility-conduit-pipeline-installation',
        title: 'Utility Conduit & Pipeline Installation',
        features: [
          'Installing water, sewer, gas, and drainage lines via directional drilling',
          'Installing underground electrical conduits and telecom/fiber optic ducts',
          'Installing multiple conduits in a single bore (multi-duct installation)',
          'Installing casing pipes for future utility use'
        ]
      },
      {
        id: 'crossings-specialty-bores',
        title: 'Crossings & Specialty Bores',
        features: [
          'Road, railway, and airport runway crossings without open-cut trenching',
          'Waterway and wetland crossings',
          'Urban, high-traffic, or environmentally sensitive area installations',
          'Long-distance bores for transmission mains or trunk lines'
        ]
      },
      {
        id: 'bore-path-planning-design',
        title: 'Bore Path Planning & Design',
        features: [
          'Utility locates and potholing to avoid conflicts',
          'Bore path engineering based on soil conditions, depth, and bend radius',
          'Pre-reaming and sizing of bore holes for large-diameter installations'
        ]
      },
      {
        id: 'pullback-product-installation',
        title: 'Pullback & Product Installation',
        features: [
          'Pulling in HDPE, PVC, steel, or fused pipelines',
          'Installing jointed pipe via pullback with swab cups or rollers',
          'Cable or conductor pulling through installed conduit'
        ]
      },
      {
        id: 'support-protection-measures',
        title: 'Support & Protection Measures',
        features: [
          'Installing tracer wire and warning tape where applicable',
          'Providing protective casing for utility crossings',
          'Using drilling fluid recycling and containment systems to protect the environment'
        ]
      },
      {
        id: 'testing-verification',
        title: 'Testing & Verification',
        features: [
          'Mandrel or pig testing for conduit clearance',
          'Pressure testing of installed pipelines',
          'CCTV inspection of installed conduits or casings'
        ]
      },
      {
        id: 'repair-replacement-rehabilitation',
        title: 'Repair, Replacement & Rehabilitation',
        features: [
          'Re-drilling or re-aligning failed bores',
          'Replacing damaged or collapsed product installed via HDD',
          'Pipe bursting or sliplining using HDD access points'
        ]
      },
      {
        id: 'site-work-restoration',
        title: 'Site Work & Restoration',
        features: [
          'Entry and exit pit excavation',
          'Backfilling and compaction to specification',
          'Pavement, curb, sidewalk, and landscape restoration'
        ]
      }
    ]
  },

  // 2) Utility Installation
  {
    id: 'utility-installation',
    name: 'Utility Installation',
    icon: 'Layers',
    image: '/images/utility.jpg',
    shortDescription: 'Complete installation of water, gas, and wastewater systems with testing and restoration.',
    detailedDescription:
      'Comprehensive utility construction: potable/raw/reuse water, gas mains/services with cathodic protection, sanitary/storm systems with manholes, lift stations, generators, and controls.',
    features: [
      'Water: mains, services, taps, meters, valves, hydrants',
      'Gas: mains/services, taps, meters/regulators, manifolds',
      'Cathodic protection for steel pipelines',
      'Wastewater: gravity/force mains, low-pressure systems',
      'Manholes, cleanouts, inspection ports',
      'Lift stations, grinder pumps, electrical & controls',
      'Standby generators & automatic transfer switches',
      'Testing: hydrostatic, chlorination, bacteriological, air/vacuum, mandrel, CCTV',
      'Emergency repairs & replacements',
      'Trenching/shoring, backfill/compaction & surface restoration'
    ],
    process: [
      'Design coordination & utility locates',
      'Open-cut or trenchless installation as specified',
      'Set structures, valves/meters/appurtenances',
      'Main/service tie-ins & commissioning',
      'System testing & verification',
      'Pavement/landscape restoration & closeout'
    ],
    subServiceGroups: [
      // Water
      {
        id: 'water-main-line-installation',
        title: 'Water — Main Line Installation',
        features: [
          'Installing new potable (drinking) water mains',
          'Installing raw water mains (for treatment plants)',
          'Installing reclaimed/reuse water mains'
        ]
      },
      {
        id: 'water-service-connections',
        title: 'Water — Service Connections',
        features: [
          'Tapping water mains for new service lines',
          'Installing individual water service laterals from the main to the meter or property line'
        ]
      },
      {
        id: 'water-meter-valve-installations',
        title: 'Water — Meter and Valve Installations',
        features: [
          'Setting water meters (residential, commercial, or industrial)',
          'Installing curb stops, corporation stops, and meter yokes',
          'Installing control valves, air release valves, and pressure reducing valves'
        ]
      },
      {
        id: 'water-fire-protection',
        title: 'Water — Fire Protection Water Lines',
        features: [
          'Installing fire hydrants and hydrant laterals',
          'Fire service lines for sprinkler systems'
        ]
      },
      {
        id: 'water-appurtenances-fittings',
        title: 'Water — Appurtenances and Fittings',
        features: [
          'Thrust blocks and joint restraints',
          'Backflow prevention devices',
          'Valve boxes, meter boxes, and access structures'
        ]
      },
      {
        id: 'water-testing-commissioning',
        title: 'Water — Testing and Commissioning',
        features: [
          'Hydrostatic pressure testing',
          'Chlorination and flushing of new mains',
          'Bacteriological testing prior to service'
        ]
      },
      {
        id: 'water-repairs-replacements',
        title: 'Water — Repairs and Replacements',
        features: [
          'Emergency leak repair on mains or services',
          'Replacement of outdated or damaged lines, meters, or hydrants'
        ]
      },
      {
        id: 'water-associated-site-work',
        title: 'Water — Associated Site Work',
        features: [
          'Trenching and Excavation',
          'Backfilling and Compaction',
          'Pavement and Surface Restoration'
        ]
      },

      // Gas
      {
        id: 'gas-main-service',
        title: 'Gas — Main & Service Line Installation',
        features: [
          'Installing new underground or aboveground natural gas mains',
          'Installing gas service laterals from the main to the meter or building connection',
          'Tapping existing gas mains for new services',
          'Installing cathodic protection for steel pipelines'
        ]
      },
      {
        id: 'gas-meter-regulators',
        title: 'Gas — Meter & Regulator Installations',
        features: [
          'Setting gas meters for residential, commercial, and industrial customers',
          'Installing pressure regulators to adjust delivery pressure',
          'Installing meter manifolds for multi-unit development',
          'Installing risers and transition fittings for above/below ground connections'
        ]
      },
      {
        id: 'gas-valves',
        title: 'Gas — Valve Installation',
        features: [
          'Installing excess flow valves (EFVs)',
          'Installing shut-off valves and curb valves'
        ]
      },
      {
        id: 'gas-testing-commissioning',
        title: 'Gas — Testing & Commissioning',
        features: [
          'Pressure/leak testing to code requirements',
          'Purging lines of air before service start-up',
          'System start-up and verification'
        ]
      },
      {
        id: 'gas-repair-replacement',
        title: 'Gas — Repair & Replacement',
        features: [
          'Leak detection and repair on mains or services',
          'Replacement of damaged or outdated piping',
          'Upgrading service lines for increased capacity'
        ]
      },
      {
        id: 'gas-site-restoration',
        title: 'Gas — Site Restoration',
        features: [
          'Excavation, trenching, and backfilling',
          'Pavement or surface restoration after installation'
        ]
      },

      // Wastewater / Sewer
      {
        id: 'sewer-main-service-installation',
        title: 'Wastewater/Sewer — Main & Service Line Installation',
        features: [
          'Installing sanitary sewer mains (gravity or force mains)',
          'Installing storm sewer mains and drainage systems',
          'Installing low-pressure sewer lines',
          'Connecting building sewer laterals from structure to main or cleanout',
          'Tapping existing sewer mains for new services'
        ]
      },
      {
        id: 'sewer-manholes-access',
        title: 'Wastewater/Sewer — Manholes & Access Points',
        features: [
          'Constructing and setting precast or cast-in-place manholes',
          'Installing cleanouts, lamp holes, and inspection ports',
          'Adjusting manhole frames and covers to grade'
        ]
      },
      {
        id: 'sewer-pumping-lift-stations',
        title: 'Wastewater/Sewer — Pumping & Lift Station Systems',
        features: [
          'Installing wastewater lift stations and force mains',
          'Installing grinder pumps for low-pressure systems',
          'Electrical and control system installations'
        ]
      },
      {
        id: 'sewer-collection-systems',
        title: 'Wastewater/Sewer — Wastewater Collection Systems',
        features: [
          'Installing gravity and force main sewer pipelines connected to lift stations',
          'Integrating manholes, cleanouts, and service laterals for maintenance access',
          'Coordinating collection system design with lift station capacity and hydraulics',
          'Ensuring proper grade, flow, and long-term system performance'
        ]
      },
      {
        id: 'sewer-standby-generators',
        title: 'Wastewater/Sewer — Standby Generator Installation',
        features: [
          'Installing backup power generators for continuous lift station operation during outages',
          'Integrating automatic transfer switches for seamless power transition',
          'Testing and commissioning generators to meet capacity and reliability requirements',
          'Providing concrete pads, enclosures, and fuel systems as needed'
        ]
      },
      {
        id: 'sewer-specialty-methods',
        title: 'Wastewater/Sewer — Specialty Installation Methods',
        features: [
          'Directional drilling, jack-and-bore, or auger drilling under roads, railways, or waterways',
          'Installing casing pipes and carrier pipes',
          'Trenchless rehabilitation methods (lining, sleeving, or pipe bursting)'
        ]
      },
      {
        id: 'sewer-appurtenances-fittings',
        title: 'Wastewater/Sewer — Appurtenances & Fittings',
        features: [
          'Installing drop connections, wyes, tees, and reducers',
          'Installing backflow prevention devices',
          'Installing flow control or monitoring devices'
        ]
      },
      {
        id: 'sewer-testing-commissioning',
        title: 'Wastewater/Sewer — Testing & Commissioning',
        features: [
          'Air testing or vacuum testing sewer mains and manholes',
          'Mandrel testing for deflection in plastic pipe',
          'CCTV inspection of installed lines',
          'Cleaning and preparation for service'
        ]
      },
      {
        id: 'sewer-repair-replacement',
        title: 'Wastewater/Sewer — Repair & Replacement',
        features: [
          'Emergency sewer main or service line repairs',
          'Replacement of deteriorated lines or manholes',
          'Point repairs and rehabilitation work'
        ]
      },
      {
        id: 'sewer-site-work-restoration',
        title: 'Wastewater/Sewer — Site Work & Restoration',
        features: [
          'Trenching, shoring, and excavation safety measures',
          'Backfilling and compaction to specification',
          'Pavement, curb, sidewalk, and landscape restoration'
        ]
      },
      {
        id: 'sewer-pipe-lining',
        title: 'Wastewater/Sewer — Pipe Lining',
        features: [
          'Installing cured-in-place pipe (CIPP) liners to rehabilitate existing sewer lines',
          'Restoring structural integrity without the need for full excavation',
          'Providing a smooth, corrosion-resistant interior surface to improve flow',
          'Extending service life while minimizing disruption to surrounding areas'
        ]
      },
      {
        id: 'sewer-partial-pipe-lining',
        title: 'Wastewater/Sewer — Partial Pipe Lining',
        features: [
          'Targeting and repairing isolated damaged sections of pipe',
          'Installing sectional liners for spot repairs without replacing entire runs',
          'Addressing cracks, root intrusion, or minor structural defects',
          'Maintaining system operation during repair work'
        ]
      },
      {
        id: 'sewer-pipe-bursting',
        title: 'Wastewater/Sewer — Pipe Bursting',
        features: [
          'Breaking and displacing existing pipes while simultaneously installing new pipe',
          'Increasing pipe diameter to improve capacity where required',
          'Suitable for replacing deteriorated or undersized lines with minimal surface disruption',
          'Applicable for a variety of pipe materials, including clay, cast iron, and PVC'
        ]
      }
    ]
  },

  // 3) Drainage
  {
    id: 'drainage',
    name: 'Drainage',
    icon: 'Droplets',
    image: '/images/civil-construction.jpg',
    shortDescription: 'Storm mains/laterals, culverts, inlets/structures, open channels, and hydrologic controls.',
    detailedDescription:
      'Storm drain networks, culverts, junction/box structures, ditches/swales/channels with riprap, retention/detention ponds, trenchless crossings, and system verification.',
    features: [
      'Storm mains/laterals & roadside/cross drains',
      'Culverts (concrete/HDPE/metal)',
      'Catch basins, curb/drop inlets & junction boxes',
      'Manholes & frame/grate adjustments',
      'Open channels: ditches, swales, lining & riprap',
      'Retention/detention ponds & outfalls',
      'Headwalls/wingwalls; flap/check/tide gates',
      'Directional/jack-and-bore crossings & casing',
      'Flow testing, cleaning & CCTV',
      'Emergency repairs & replacements'
    ],
    process: [
      'Survey & hydrology/hydraulics review',
      'Install mains/culverts & structures',
      'Open-channel grading & protection',
      'Fit appurtenances & erosion control',
      'Clean/inspect & verify flow',
      'Pavement/landscape restoration'
    ],
    subServiceGroups: [
      {
        id: 'main-lateral-installation',
        title: 'Main & Lateral Line Installation',
        features: [
          'Installing storm drain mains and laterals',
          'Installing culverts (concrete, HDPE, metal) for roadways and site drainage',
          'Installing roadside and cross-drain pipes',
          'Installing roof drain or area drain connections to storm systems'
        ]
      },
      {
        id: 'inlets-structures-access',
        title: 'Inlets, Structures & Access Points',
        features: [
          'Installing catch basins, drop inlets, and curb inlets',
          'Installing junction boxes and manholes for storm systems',
          'Adjusting inlet and manhole frames and grates to grade'
        ]
      },
      {
        id: 'open-channel-surface-drainage',
        title: 'Open Channel & Surface Drainage',
        features: [
          'Grading and shaping ditches, swales, and channels',
          'Installing riprap or erosion control lining',
          'Constructing retention/detention ponds and outfall structures'
        ]
      },
      {
        id: 'drainage-specialty-methods',
        title: 'Specialty Installation Methods',
        features: [
          'Directional drilling or jack-and-bore under roads, railways, or waterways',
          'Installing casing pipes for protected crossings',
          'Trenchless rehabilitation (lining, pipe bursting, or sliplining)'
        ]
      },
      {
        id: 'drainage-appurtenances-fittings',
        title: 'Appurtenances & Fittings',
        features: [
          'Installing headwalls, wingwalls, and end sections',
          'Installing flap gates, check valves, or tide gates',
          'Installing energy dissipators or stilling basins at outfalls'
        ]
      },
      {
        id: 'drainage-testing-commissioning',
        title: 'Testing & Commissioning',
        features: [
          'Flow testing and verification',
          'Cleaning and inspection of drainage systems prior to service',
          'CCTV inspection of installed systems'
        ]
      },
      {
        id: 'drainage-repair-replacement',
        title: 'Repair & Replacement',
        features: [
          'Emergency storm drain or culvert repairs',
          'Replacement of damaged or collapsed drainage structures or piping',
          'Regrading or restoring eroded drainage features'
        ]
      },
      {
        id: 'drainage-site-work-restoration',
        title: 'Site Work & Restoration',
        features: [
          'Excavation, trenching, and shoring as needed',
          'Backfilling and compaction to specification',
          'Pavement, curb, sidewalk, landscaping, and erosion control restoration'
        ]
      }
    ]
  },

  // 4) Underground Electrical Conduit
  {
    id: 'underground-electrical',
    name: 'Underground Electrical Conduit',
    icon: 'Zap',
    image: '/images/utility.jpg',
    shortDescription: 'Primary/secondary conduits, duct banks, vaults/boxes, and transformer pads with verification testing.',
    detailedDescription:
      'Installation of underground electrical distribution: conduits with concrete encasement, duct banks, handholes/pull boxes, vaults/manholes, transformer and equipment pads, and joint trench configurations.',
    features: [
      'Conduits (PVC/HDPE/steel), risers & transitions',
      'Duct banks & concrete encasement',
      'Handholes, pull boxes, vaults & manholes',
      'Transformer/equipment pads & terminations',
      'Joint trench with other utilities',
      'Warning tape, tracer wire, grounding/bonding',
      'Mandrel testing & pull-string installation',
      'Continuity/grounding tests & documentation',
      'HDD/jack-and-bore crossings & casing',
      'Backfill/compaction & surface restoration'
    ],
    process: [
      'Layout & route selection (trench/HDD/jack-and-bore)',
      'Set access structures & pads',
      'Install conduits/risers & encase as required',
      'Mandrel & pull-string tests',
      'Continuity/grounding verification',
      'Backfill, compaction & restoration'
    ],
    subServiceGroups: [
      {
        id: 'main-service-conduit-installation',
        title: 'Main & Service Conduit Installation',
        features: [
          'Installing primary and secondary electrical conduits (PVC, HDPE, steel)',
          'Installing service laterals from main feeder to buildings, transformers, or panels',
          'Installing duct banks for multi-conduit runs',
          'Installing risers and transitions for above- to below-ground connections'
        ]
      },
      {
        id: 'structures-boxes-access',
        title: 'Structures, Boxes & Access Points',
        features: [
          'Installing handholes, pull boxes, vaults, and manholes for electrical systems',
          'Setting transformer pads and electrical equipment pads',
          'Installing conduit terminations in structures'
        ]
      },
      {
        id: 'electrical-specialty-methods',
        title: 'Specialty Installation Methods',
        features: [
          'Directional drilling, jack-and-bore, or trenchless conduit installation under roads, railways, or waterways',
          'Installing casing pipes and carrier conduits for protected crossings',
          'Conduit encasement in concrete for added protection',
          'Installation in joint trench configurations with other utilities'
        ]
      },
      {
        id: 'cable-protection-appurtenances',
        title: 'Cable Protection & Appurtenances',
        features: [
          'Installing warning tape and tracer wire above conduit runs',
          'Installing grounding and bonding systems',
          'Sealing conduit ends for moisture and pest prevention'
        ]
      },
      {
        id: 'electrical-testing-verification',
        title: 'Testing & Verification',
        features: [
          'Mandrel testing to verify conduit clearance',
          'Pull string installation for cable pulling',
          'Conduit continuity and grounding tests'
        ]
      },
      {
        id: 'electrical-repair-replacement',
        title: 'Repair & Replacement',
        features: [
          'Replacement of damaged or collapsed conduits',
          'Rerouting or extending existing conduit systems',
          'Emergency conduit repair work'
        ]
      },
      {
        id: 'electrical-site-work-restoration',
        title: 'Site Work & Restoration',
        features: [
          'Excavation, trenching, and shoring as required',
          'Backfilling and compaction to specification',
          'Pavement, curb, sidewalk, and landscaping restoration'
        ]
      }
    ]
  },

  // 5) Deep Foundation
  {
    id: 'deep-foundation',
    name: 'Deep Foundation',
    icon: 'Hammer',
    image: '/images/foundation.jpg',
    shortDescription: 'Drilled shafts, piles, and specialty supports with certified testing and QA/QC.',
    detailedDescription:
      'Drilled shafts/caissons, belled shafts and rock sockets, steel/precast/timber piles, ACIP/CFA, and specialty supports (helical, micro-piles, underpinning) with integrity testing.',
    features: [
      'Drilled shafts/caissons; temporary/permanent casing',
      'Belled shafts & rock sockets',
      'Steel H-piles, pipe & sheet piles; precast & timber',
      'Auger cast (ACIP)/continuous flight auger piles',
      'Helical piles, micro-piles & underpinning',
      'Slurry drilling & tremie concrete placement',
      'Static & PDA load testing; CSL/TIP integrity checks',
      'Rebar cages, corrosion protection & base/tip grouting',
      'Repair/rehabilitation & site restoration'
    ],
    process: [
      'Geotechnical review & layout',
      'Drill/drive to design depth',
      'Place reinforcing cages',
      'Concrete/tremie placement & verification',
      'Load/integrity testing & documentation',
      'Spoil management & restoration'
    ],
    subServiceGroups: [
      {
        id: 'drilled-shaft-caisson',
        title: 'Drilled Shaft / Caisson Installation',
        features: [
          'Drilling and installing concrete drilled shafts for bridges, buildings, and heavy structures',
          'Installing belled shafts for increased bearing capacity',
          'Temporary or permanent casing installation for shaft stability',
          'Rock socket drilling for hard strata conditions'
        ]
      },
      {
        id: 'pile-installation',
        title: 'Pile Installation',
        features: [
          'Driving steel H-piles, pipe piles, or sheet piles',
          'Installing precast concrete piles',
          'Installing timber piles for marine or light-load structures',
          'Installing auger cast piles (ACIP) or continuous flight auger piles'
        ]
      },
      {
        id: 'foundation-support-systems',
        title: 'Foundation Support Systems',
        features: [
          'Installing helical piles or screw anchors for foundation stabilization',
          'Installing micro-piles for restricted-access or retrofit work',
          'Underpinning existing foundations for load support or settlement correction'
        ]
      },
      {
        id: 'specialty-excavation-drilling',
        title: 'Specialty Excavation & Drilling',
        features: [
          'Core drilling through rock or obstructions',
          'Slurry drilling and tremie concrete placement in wet conditions',
          'Drilling in limited access or low-headroom environments'
        ]
      },
      {
        id: 'load-testing-verification',
        title: 'Load Testing & Verification',
        features: [
          'Static load testing for piles or shafts',
          'Dynamic pile testing (PDA – Pile Driving Analyzer)',
          'Cross-hole sonic logging (CSL) for shaft integrity',
          'Thermal integrity profiling (TIP)'
        ]
      },
      {
        id: 'foundation-protection-reinforcement',
        title: 'Foundation Protection & Reinforcement',
        features: [
          'Installing reinforcing cages and structural steel within deep foundations',
          'Applying corrosion protection measures for steel piles',
          'Installing base grouting or tip grouting for load enhancement'
        ]
      },
      {
        id: 'foundation-repair-rehabilitation',
        title: 'Repair & Rehabilitation',
        features: [
          'Strengthening or replacing damaged piles or shafts',
          'Jacketing or encasing deteriorated piles',
          'Grouting to fill voids or stabilize soil around deep foundations'
        ]
      },
      {
        id: 'foundation-site-work-restoration',
        title: 'Site Work & Restoration',
        features: [
          'Excavation and spoil management for drilled foundations',
          'Backfilling and compaction to specification',
          'Surface restoration including pavement, curbs, and grading'
        ]
      }
    ]
  },

  // 6) Civil Construction
  {
    id: 'civil-construction',
    name: 'Civil Construction',
    icon: 'Building',
    image: '/images/civil-construction.jpg',
    shortDescription: 'Sitework, roads, structural concrete, drainage, and public infrastructure.',
    detailedDescription:
      'Full-scope civil construction: clearing/demolition, excavation/grading/stabilization, concrete/paving, drainage/erosion control, transportation/public works, and final restoration.',
    features: [
      'Clearing, demolition, excavation, grading & stabilization',
      'Roadway/pavement: subgrade, base, asphalt & concrete',
      'Curbs, gutters, sidewalks, driveways & parking lots',
      'Structural concrete: foundations, walls & flatwork',
      'Drainage/erosion control & stormwater systems',
      'Retention/detention ponds & outfalls',
      'Transportation/public infrastructure & traffic control',
      'Final grading, topsoil, landscaping & sod'
    ],
    process: [
      'Preconstruction, survey & controls',
      'Earthwork & underground coordination',
      'Concrete & paving operations',
      'Drainage/erosion installations',
      'QA/QC & punchlist',
      'Final grading, landscaping & turnover'
    ],
    subServiceGroups: [
      {
        id: 'site-prep-earthwork',
        title: 'Site Preparation & Earthwork',
        features: [
          'Land clearing, grubbing, and demolition of existing structures',
          'Excavation, grading, and site leveling',
          'Soil stabilization and compaction',
          'Importing and exporting fill material'
        ]
      },
      {
        id: 'roadway-pavement-construction',
        title: 'Roadway & Pavement Construction',
        features: [
          'Subgrade preparation and aggregate base installation',
          'Asphalt paving and concrete paving',
          'Curb, gutter, and sidewalk installation',
          'Driveway and parking lot construction'
        ]
      },
      {
        id: 'structural-concrete-foundations',
        title: 'Structural Concrete & Foundations',
        features: [
          'Building and bridge foundations',
          'Retaining walls and headwalls',
          'Deep foundation systems (drilled shafts, piles, caissons)',
          'Slabs, pads, and structural flatwork'
        ]
      },
      {
        id: 'drainage-erosion-control',
        title: 'Drainage & Erosion Control',
        features: [
          'Culverts, swales, and stormwater management systems',
          'Retention and detention ponds',
          'Erosion control matting, riprap, and slope stabilization',
          'Outfall structures and energy dissipators'
        ]
      },
      {
        id: 'transportation-public-infrastructure',
        title: 'Transportation & Public Infrastructure',
        features: [
          'Road, highway, and intersection improvements',
          'Sidewalks, bike paths, and pedestrian facilities',
          'Bridge approaches and abutments',
          'Traffic control devices and striping'
        ]
      },
      {
        id: 'specialty-civil-works',
        title: 'Specialty Civil Works',
        features: [
          'Site concrete for utilities, equipment pads, and bollards',
          'Concrete channels, ditches, and spillways',
          'Industrial site development and heavy civil projects',
          'Marine and waterfront civil structures'
        ]
      },
      {
        id: 'site-restoration-finishing',
        title: 'Site Restoration & Finishing',
        features: [
          'Topsoil placement and fine grading',
          'Landscaping and sod installation',
          'Pavement, curb, and surface restoration after utility work'
        ]
      }
    ]
  },

  // 7) Pipe Fabrication
  {
    id: 'pipe-fabrication',
    name: 'Pipe Fabrication',
    icon: 'Wrench',
    image: '/images/pipe-fabrication.jpg',
    shortDescription: 'Custom cutting, welding, coatings/insulation, QA/NDT, and spool assemblies.',
    detailedDescription:
      'Shop and field fabrication across materials/diameters with certified WPS/PQR, NDT, documentation, and delivery for fast installs.',
    features: [
      'Cutting to length, beveling & surface prep',
      'MIG/TIG/SMAW/FCAW welding; orbital where required',
      'Fittings: elbows, tees, reducers; custom pieces',
      'Spool pieces, racks & modular assemblies',
      'Internal/external coatings & insulation/jacketing',
      'Material receiving, storage & packaging',
      'Dimensional QC & NDT (UT/X-ray) with certs',
      'Repairs, modifications & field support'
    ],
    process: [
      'Material verification & WPS review',
      'Cut/prep & fit-up',
      'Welding & in-process inspection',
      'Dimensional checks & NDT',
      'Coatings/insulation & documentation',
      'Pack-out & delivery to site'
    ],
    subServiceGroups: [
      {
        id: 'pipe-cutting-preparation',
        title: 'Pipe Cutting & Preparation',
        features: [
          'Cutting pipe to specified lengths using saws, torches, or automated cutters',
          'Beveling pipe ends for welding or joint preparation',
          'Cleaning and surface preparation (e.g., grinding, sandblasting)'
        ]
      },
      {
        id: 'welding-joining',
        title: 'Welding & Joining',
        features: [
          'Butt welding of pipe sections (MIG, TIG, SMAW, FCAW)',
          'Socket welding, flange welding, and attachment of fittings',
          'Specialty welding such as orbital welding for stainless steel or critical piping',
          'Weld inspection and non-destructive testing (NDT) such as X-ray or ultrasonic testing'
        ]
      },
      {
        id: 'fittings-assemblies',
        title: 'Fabrication of Fittings & Assemblies',
        features: [
          'Bending pipe to specified radii and angles',
          'Fabricating elbows, tees, reducers, and custom fittings',
          'Assembly of spool pieces and pipe racks',
          'Prefabricating piping assemblies for modular installation'
        ]
      },
      {
        id: 'coating-protection',
        title: 'Coating & Protection',
        features: [
          'Applying internal and external pipe coatings (epoxy, fusion bonded epoxy, polyethylene)',
          'Insulation installation and jacketing',
          'Corrosion protection and cathodic protection application'
        ]
      },
      {
        id: 'material-handling-storage',
        title: 'Material Handling & Storage',
        features: [
          'Receiving and inventory management of raw pipe materials',
          'Proper storage and handling to prevent damage and contamination',
          'Preparation and packaging of fabricated pipe for transport'
        ]
      },
      {
        id: 'quality-control-documentation',
        title: 'Quality Control & Documentation',
        features: [
          'Dimensional checks and verification of pipe assemblies',
          'Documentation of weld procedures, inspection reports, and material certifications',
          'Compliance with project specifications and industry standards (ASME, ASTM, API)'
        ]
      },
      {
        id: 'repair-rework',
        title: 'Repair & Rework',
        features: [
          'Repairing weld defects or damaged pipe sections',
          'Modifying fabricated pipe assemblies to meet changing project needs',
          'Field support for pipe fabrication and installation issues'
        ]
      }
    ]
  },

  // 8) Jack and Bore / Underground Tunneling
  {
    id: 'jack-and-bore',
    name: 'Jack and Bore / Underground Tunneling',
    icon: 'MoveRight',
    image: '/images/jack-and-bore.jpg',
    shortDescription: 'Steel casing jacked under roads/rails with precise grade and carrier pipe pullback.',
    detailedDescription:
      'Pit-excavated jacking operations to install steel casing at line/grade under critical corridors, then pull and seal carrier pipes (water/gas/sewer/electrical).',
    features: [
      'Bore pit excavation, shoring & dewatering',
      'Hydraulic jacking of steel casing pipe',
      'Carrier pipe installation (single/multi-duct)',
      'Alignment & grade control during jacking',
      'Variable soils including rock, clay & sand',
      'Weld/seal inspection & documentation',
      'Pressure/leak testing when applicable',
      'Backfill/compaction & surface restoration'
    ],
    process: [
      'Excavate & shore entry/receiving pits',
      'Set jacking frame & verify alignment/grade',
      'Jack steel casing to design line/grade',
      'Install and secure carrier pipe(s)',
      'Inspect/test and document',
      'Backfill, restore & demobilize'
    ],
    subServiceGroups: [
      {
        id: 'bore-pit-excavation-prep',
        title: 'Bore Pit Excavation & Preparation',
        features: [
          'Excavating entry and receiving pits to specified dimensions',
          'Shoring and bracing pits for safety and stability',
          'Dewatering and site preparation for bore operations'
        ]
      },
      {
        id: 'jacking-pipe-installation',
        title: 'Jacking Pipe Installation',
        features: [
          'Installing steel casing pipes under roads, railways, and other obstructions',
          'Pushing or “jacking” casing pipes through soil using hydraulic jacks',
          'Ensuring precise alignment and grade control during jacking operations'
        ]
      },
      {
        id: 'product-installation-carrier',
        title: 'Product Installation (Carrier Pipe Pullback)',
        features: [
          'Pulling in water, sewer, gas, or electrical carrier pipes inside the jacked casing',
          'Installing multiple carrier pipes in a single casing (multi-duct installations)',
          'Joining and sealing carrier pipes within casing'
        ]
      },
      {
        id: 'specialty-Underground-Tunneling-techniques',
        title: 'Specialty Underground Tunneling Techniques',
        features: [
          'Handling variable soil conditions including rock, clay, and sand',
          'Using pipe bursting or sliplining in conjunction with jack and bore for rehabilitation',
          'Installing casing pipes with reinforced or composite materials as required'
        ]
      },
      {
        id: 'site-equipment-management',
        title: 'Site & Equipment Management',
        features: [
          'Mobilizing and operating jacking rigs, drilling equipment, and support machinery',
          'Monitoring and controlling hydraulic jacks and bore alignment systems',
          'Managing drill mud and spoil removal'
        ]
      },
      {
        id: 'testing-quality-control',
        title: 'Testing & Quality Control',
        features: [
          'Verifying pipe alignment, grade, and structural integrity',
          'Inspecting welds and seals on casing and carrier pipes',
          'Conducting pressure or leak testing where applicable'
        ]
      },
      {
        id: 'site-restoration-cleanup',
        title: 'Site Restoration & Cleanup',
        features: [
          'Backfilling and compacting bore pits after installation',
          'Restoring pavement, sidewalks, and landscaping to original condition',
          'Removing all equipment and debris from the site'
        ]
      }
    ]
  }
];


export const enhancedServices: ServiceWithMeta[] = addServiceMetadata(services);


export const projects = [
  {
    id: 101,
    title: 'Town of Oberlin – Sanitary Sewer System Improvements',
    description:
      'Citywide sanitary sewer assessment and rehabilitation to reduce inflow and infiltration (I&I).',
    category: 'Wastewater/Sewer',
    image: '/project_background/Oberlin.jpg',
    completionDate: '2024-12-15',               
    clientName: 'Town of Oberlin',
    location: 'Oberlin, LA',
    testimonial:
      'Southern Underground executed our system rehab with professionalism and clear communication from start to finish.',
    details: {
      duration: 'Ongoing Program',
      value: '$2.4M',
      scope: [
        'Smoke testing of approximately 100,000 linear feet of sanitary sewer mains and 322 manholes',
        'Television inspection of approximately 100,000 linear feet of sanitary sewer mains',
        'Sewer main and manhole rehabilitation to reduce inflow and infiltration'
      ],
      challenges: 'Wide system coverage and coordination across many segments of the collection network',
      solution: 'Sequenced testing and CCTV, then prioritized rehab for the highest I&I reduction impact'
    }
  },
  {
    id: 102,
    title: 'Iberville Parish Council – Sewer System Improvements',
    description:
      'Investigation and rehabilitation to reduce I&I within the South Plaquemine Sewer Collection System.',
    category: 'Wastewater/Sewer',
    image: '/Utilites/Wastewater Collection and Sewer/down-net_http20250910-102-huufa1.jpg',
    completionDate: '2024-10-30',
    clientName: 'Iberville Parish Council',
    location: 'Plaquemine, LA',
    testimonial:
      'Exceptional field execution and documentation. The team’s approach accelerated decision‑making for rehab work.',
    details: {
      duration: 'Program Phase',
      value: '$2.0M',
      scope: [
        'Smoke testing of approximately 37,000 linear feet of sanitary sewer mains and 121 manholes',
        'Television inspection of approximately 37,000 linear feet of sanitary sewer mains',
        'Sewer main and manhole rehabilitation to reduce inflow and infiltration within the South Plaquemine Sewer Collection System'
      ],
      challenges: 'Maintaining service and access in active neighborhoods',
      solution: 'Block‑by‑block coordination, traffic control, and staged testing to limit disruption'
    }
  },
  {
    id: 103,
    title: 'Baker Water and Gas Distribution System Improvements',
    description:
      'Water and gas distribution improvements including high‑pressure gas pipeline work with enhanced safety protocols.',
    category: 'Water / Gas Distribution',
    image: '/Utilites/Gas System Installation/gas.png',
    completionDate: '2024-08-15',
    clientName: 'City of Baker',
    location: 'Baker, LA',
    testimonial:
      'Safety and quality were clearly the priority. The crews delivered a strong result on a complex scope.',
    details: {
      duration: '6 months',
      value: '$1.9M',
      scope: [
        'High-pressure gas pipeline for petrochemical facility',
        'Specialized safety protocol implementation'
      ],
      challenges: 'Coordinating shutdown windows and maintaining community safety around work zones',
      solution: 'Phased tie‑ins, enhanced safety monitoring, and stakeholder communication'
    }
  }
];

export const teamMembers = [
  {
    id: 1,
    name: 'Luke Bennett',
    position: 'Co-Owner & Managing Partner',
    bio: 'Luke oversees day-to-day office operations, managing internal systems, office personnel, and administrative processes. He plays a key role in project coordination, business planning, and ensuring smooth internal workflow.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'mrodriguez@southernunderground.com',
    linkedIn: '#'
  },
  {
    id: 2,
    name: 'Bryan Hodges',
    position: 'Co-Owner & Managing Partner',
    bio: 'Bryan leads all field operations, overseeing crews, job site performance, and project execution. His focus is on delivering safe, efficient, and high-quality work in the field across every job site.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'sjohnson@southernunderground.com',
    linkedIn: '#'
  },
  {
    id: 3,
    name: 'Brittany Murphy',
    position: 'Operations Manager',
    bio: 'Brittany oversees the internal operations of Southern Underground, managing everything from HR and financial services to compliance, insurance, and business systems. She plays a key role in strategic planning, employee benefits, and overall company administration.',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'bmurphy@southernunderground.com',
    linkedIn: '#'
  },
  {
    id: 4,
    name: 'Philip Green',
    position: 'Project Manager',
    bio: 'Philip oversees project planning, scheduling, and execution from start to finish. He coordinates between office staff, field crews, and clients to ensure each project is delivered on time, within budget, and to the highest standards of quality and safety.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'pgreen@southernunderground.com',
    linkedIn: '#'
  },
  {
    id: 5,
    name: 'Luis Rivera',
    position: 'Estimator & Assistant Project Manager',
    bio: 'Luis is responsible for preparing accurate and competitive project estimates, analyzing plans, and coordinating with vendors and subcontractors. He also supports project management efforts by assisting with scheduling, procurement, and day-to-day coordination to keep projects running efficiently.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'lrivera@southernunderground.com',
    linkedIn: '#'
  },
  {
    id: 6,
    name: 'Arson Kirkland',
    position: 'Superintendent',
    bio: 'Arson oversees on-site project activities, coordinating crews, subcontractors, and resources to ensure projects are completed safely, on time, and to company standards. He acts as the key liaison between field personnel and management, maintaining quality control and resolving site issues promptly.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'akirkland@southernunderground.com',
    linkedIn: '#'
  }
];

export const jobOpenings = [
  {
    id: 1,
    title: {
      en: 'Directional drilling Operator',
      es: 'Operador de Perforación Direccional'
    },
    department: {
      en: 'Field Operations',
      es: 'Operaciones de Campo'
    },
    location: 'Zachary, LA',
    type: {
      en: 'Full-time',
      es: 'Tiempo Completo'
    },
    description: {
      en: 'Experienced directional drilling operator needed for utility installation projects. Must have experience with HDD equipment and GPS guidance systems.',
      es: 'Se necesita operador de perforación direccional con experiencia para proyectos de instalación de servicios públicos. Debe tener experiencia con equipos HDD y sistemas de guía GPS.'
    },
    requirements: {
      en: [
        '3+ years directional drilling experience',
        'Valid CDL license',
        'OSHA 10-Hour certification',
        'Ability to work in various weather conditions',
        'Strong mechanical aptitude'
      ],
      es: [
        '3+ años de experiencia en perforación direccional',
        'Licencia CDL válida',
        'Certificación OSHA de 10 horas',
        'Capacidad para trabajar en diversas condiciones climáticas',
        'Sólida aptitud mecánica'
      ]
    },
    benefits: {
      en: [
        'Competitive salary ($60,000 - $75,000)',
        'Health and dental insurance',
        '401(k) with company match',
        'Paid time off',
        'Professional development opportunities'
      ],
      es: [
        'Salario competitivo ($60,000 - $75,000)',
        'Seguro médico y dental',
        '401(k) con contribución de la empresa',
        'Tiempo libre remunerado',
        'Oportunidades de desarrollo profesional'
      ]
    },
    postDate: '2024-03-01',
    isActive: true
  },
  {
    id: 2,
    title: {
      en: 'Project Manager',
      es: 'Gerente de Proyecto'
    },
    department: {
      en: 'Management',
      es: 'Gestión'
    },
    location: 'Zachary, LA',
    type: {
      en: 'Full-time',
      es: 'Tiempo Completo'
    },
    description: {
      en: 'Seeking experienced project manager to oversee construction projects from planning through completion. PMP certification preferred.',
      es: 'Buscamos gerente de proyecto experimentado para supervisar proyectos de construcción desde la planificación hasta la finalización. Se prefiere certificación PMP.'
    },
    requirements: {
      en: [
        'Bachelor\'s degree in Construction Management or related field',
        '5+ years project management experience',
        'PMP certification preferred',
        'Strong communication and leadership skills',
        'Experience with construction software'
      ],
      es: [
        'Licenciatura en Gestión de la Construcción o campo relacionado',
        '5+ años de experiencia en gestión de proyectos',
        'Certificación PMP preferida',
        'Fuertes habilidades de comunicación y liderazgo',
        'Experiencia con software de construcción'
      ]
    },
    benefits: {
      en: [
        'Competitive salary ($75,000 - $95,000)',
        'Health and dental insurance',
        '401(k) with company match',
        'Company vehicle',
        'Professional development budget'
      ],
      es: [
        'Salario competitivo ($75,000 - $95,000)',
        'Seguro médico y dental',
        '401(k) con contribución de la empresa',
        'Vehículo de la empresa',
        'Presupuesto para desarrollo profesional'
      ]
    },
    postDate: '2024-02-28',
    isActive: true
  },
  {
    id: 3,
    title: {
      en: 'Equipment Technician',
      es: 'Técnico de Equipos'
    },
    department: {
      en: 'Maintenance',
      es: 'Mantenimiento'
    },
    location: 'Zachary, LA',
    type: {
      en: 'Full-time',
      es: 'Tiempo Completo'
    },
    description: {
      en: 'Maintain and repair construction equipment including excavators, drilling machines, and support vehicles.',
      es: 'Mantener y reparar equipos de construcción incluyendo excavadoras, máquinas perforadoras y vehículos de apoyo.'
    },
    requirements: {
      en: [
        'Mechanical or diesel technology degree/certification',
        '3+ years heavy equipment repair experience',
        'Hydraulic systems experience',
        'Valid driver\'s license',
        'Own basic tools'
      ],
      es: [
        'Título/certificación en tecnología mecánica o diésel',
        '3+ años de experiencia en reparación de equipos pesados',
        'Experiencia en sistemas hidráulicos',
        'Licencia de conducir válida',
        'Herramientas básicas propias'
      ]
    },
    benefits: {
      en: [
        'Competitive salary ($50,000 - $65,000)',
        'Health and dental insurance',
        '401(k) with company match',
        'Tool allowance',
        'Overtime opportunities'
      ],
      es: [
        'Salario competitivo ($50,000 - $65,000)',
        'Seguro médico y dental',
        '401(k) con contribución de la empresa',
        'Subsidio para herramientas',
        'Oportunidades de tiempo extra'
      ]
    },
    postDate: '2024-02-25',
    isActive: true
  }
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Underground Utility Installation',
    excerpt: 'Exploring new technologies and methods revolutionizing the underground utility industry.',
    content: 'The underground utility installation industry is experiencing rapid technological advancement...',
    author: 'Michael Rodriguez',
    publishDate: '2024-03-10',
    tags: ['Technology', 'Innovation', 'Utilities'],
    featuredImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: 5
  },
  {
    id: 2,
    title: 'Safety First: Our Zero-Incident Approach',
    excerpt: 'How we maintain the highest safety standards across all our construction projects.',
    content: 'Safety is not just a priority at Southern Underground - it\'s our core value...',
    author: 'Amanda Wilson',
    publishDate: '2024-03-05',
    tags: ['Safety', 'Training', 'Best Practices'],
    featuredImage: '/images//dean-bennett-aBV8pVODWiM-unsplash.jpg',
    readTime: 4
  },
  {
    id: 3,
    title: 'Directional drilling vs. Traditional Trenching',
    excerpt: 'Comparing modern directional drilling techniques with traditional excavation methods.',
    content: 'When it comes to installing underground utilities, there are several methods to consider...',
    author: 'David Thompson',
    publishDate: '2024-02-28',
    tags: ['Directional drilling', 'Construction Methods', 'Efficiency'],
    featuredImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: 6
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Robert Mitchell',
    position: 'City Engineer',
    company: 'City of Baton Rouge',
    content: 'Southern Underground consistently delivers exceptional results. Their attention to detail and commitment to safety makes them our preferred contractor for major utility projects.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Lisa Chen',
    position: 'Development Manager',
    company: 'Magnolia Developments',
    content: 'Working with Southern Underground was a pleasure. They completed our subdivision infrastructure ahead of schedule and maintained excellent communication throughout the project.',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'James Parker',
    position: 'Operations Director',
    company: 'Gulf Coast Industries',
    content: 'The professionalism and expertise demonstrated by Southern Underground on our critical pipeline project was outstanding. They exceeded our expectations in every aspect.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const companyStats = [
  { label: 'Years in Business', value: '9+', icon: 'Calendar' },
  { label: 'Projects Completed', value: '500+', icon: 'CheckCircle' },
  { label: 'Miles of Utilities Installed', value: '1,200+', icon: 'Route' },
  { label: 'Safety Record', value: '99.9%', icon: 'Shield' }
];

export const certifications = [
  // {
  //   name: 'OSHA Compliance',
  //   description: 'Fully compliant with OSHA safety standards and regulations',
  //   icon: 'Shield'
  // },
  // {
  //   name: 'Licensed Contractor',
  //   description: 'Licensed construction contractor in Louisiana and surrounding states',
  //   icon: 'Award'
  // },
  // {
  //   name: 'NUCA Member',
  //   description: 'Member of National Association of Utility Contractors',
  //   icon: 'Users'
  // },
  // {
  //   name: 'Environmental Certified',
  //   description: 'Certified for environmental compliance and protection',
  //   icon: 'Leaf'
  // }
];