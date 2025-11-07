'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import * as Icons from 'lucide-react';
const services = [
  {
    id: 'directional-drilling',
    name: 'Directional Drilling',
    icon: 'Drill',
    category: 'Trenchless',


    shortDescription: 'Precision underground installations without surface disruption',
    detailedDescription:
      'Trenchless HDD installs conduits and pipelines beneath roads, railways, waterways, and sensitive areas—minimizing disruption while meeting strict alignment and depth tolerances.',
    services: [
      {
        title: 'Utility Conduit & Pipeline Installation',
        features: [
          'Installing water, sewer, gas, and drainage lines via directional drilling',
          'Installing underground electrical conduits and telecom/fiber optic ducts',
          'Installing multiple conduits in a single bore (multi-duct installation)',
          'Installing casing pipes for future utility use',
        ],
      },
      {
        title: 'Crossings & Specialty Bores',
        features: [
          'Road, railway, and airport runway crossings without open-cut trenching',
          'Waterway and wetland crossings',
          'Urban, high-traffic, or environmentally sensitive area installations',
          'Long-distance bores for transmission mains or trunk lines',
        ],
      },
      {
        title: 'Bore Path Planning & Design',
        features: [
          'Utility locates and potholing to avoid conflicts',
          'Bore path engineering based on soil conditions, depth, and bend radius',
          'Pre-reaming and sizing of bore holes for large-diameter installations',
        ],
      },
      {
        title: 'Pullback & Product Installation',
        features: [
          'Pulling in HDPE, PVC, steel, or fused pipelines',
          'Installing jointed pipe via pullback with swab cups or rollers',
          'Cable or conductor pulling through installed conduit',
        ],
      },
      {
        title: 'Support & Protection Measures',
        features: [
          'Installing tracer wire and warning tape where applicable',
          'Providing protective casing for utility crossings',
          'Using drilling fluid recycling and containment systems to protect the environment',
        ],
      },
      {
        title: 'Testing & Verification',
        features: [
          'Mandrel or pig testing for conduit clearance',
          'Pressure testing of installed pipelines',
          'CCTV inspection of installed conduits or casings',
        ],
      },
      {
        title: 'Repair, Replacement & Rehabilitation',
        features: [
          'Re-drilling or re-aligning failed bores',
          'Replacing damaged or collapsed product installed via HDD',
          'Pipe bursting or sliplining using HDD access points',
        ],
      },
      {
        title: 'Site Work & Restoration',
        features: [
          'Entry and exit pit excavation',
          'Backfilling and compaction to specification',
          'Pavement, curb, sidewalk, and landscape restoration',
        ],
      },
    ],
    popular: true,
  },
  {
    id: 'utility-installation',
    name: 'Utility Installation',
    icon: 'Layers',
    category: 'Utilities',


    shortDescription: 'Complete water, gas, and wastewater system installations',
    detailedDescription:
      'End-to-end installation for water, gas, and wastewater systems including appurtenances, testing/commissioning, and restoration.',
    services: [
      {
        title: 'Water System Installation',
        features: [
          'Installing new potable, raw, and reclaimed water mains',
          'Tapping water mains for new service lines',
          'Installing individual water service laterals from main to meter',
          'Setting water meters (residential, commercial, industrial)',
          'Installing curb stops, corporation stops, and meter yokes',
          'Installing control valves, air release valves, and pressure reducing valves',
          'Installing fire hydrants and hydrant laterals',
          'Fire service lines for sprinkler systems',
          'Thrust blocks and joint restraints',
          'Backflow prevention devices',
          'Hydrostatic pressure testing and chlorination',
          'Bacteriological testing prior to service',
        ],
      },
      {
        title: 'Gas System Installation',
        features: [
          'Installing new underground or aboveground natural gas mains',
          'Installing gas service laterals from main to meter or building connection',
          'Tapping existing gas mains for new services',
          'Installing cathodic protection for steel pipelines',
          'Setting gas meters for residential, commercial, and industrial customers',
          'Installing pressure regulators to adjust delivery pressure',
          'Installing meter manifolds for multi-unit development',
          'Installing risers and transition fittings for above/below ground connections',
          'Installing excess flow valves (EFVs) and shut-off valves',
          'Pressure/leak testing to code requirements',
          'Purging lines of air before service start-up',
        ],
      },
      {
        title: 'Wastewater/Sewer Systems',
        features: [
          'Installing sanitary sewer mains (gravity or force mains)',
          'Installing storm sewer mains and drainage systems',
          'Installing low-pressure sewer lines',
          'Connecting building sewer laterals from structure to main',
          'Constructing and setting precast or cast-in-place manholes',
          'Installing cleanouts, lamp holes, and inspection ports',
          'Installing wastewater lift stations and force mains',
          'Installing grinder pumps for low-pressure systems',
          'Installing drop connections, wyes, tees, and reducers',
          'Air testing or vacuum testing sewer mains and manholes',
          'CCTV inspection of installed lines',
        ],
      },
      {
        title: 'Wastewater Collection & Lift Systems',
        features: [
          'Installing gravity and force main sewer pipelines connected to lift stations',
          'Integrating manholes, cleanouts, and service laterals for maintenance access',
          'Coordinating collection system design with lift station capacity and hydraulics',
          'Installing backup power generators for continuous lift station operation',
          'Integrating automatic transfer switches for seamless power transition',
          'Testing and commissioning generators to meet capacity requirements',
        ],
      },
      {
        title: 'Pipe Rehabilitation Services',
        features: [
          'Installing cured-in-place pipe (CIPP) liners to rehabilitate existing sewer lines',
          'Installing sectional liners for spot repairs without replacing entire runs',
          'Breaking and displacing existing pipes while installing new pipe',
          'Increasing pipe diameter to improve capacity where required',
          'Addressing cracks, root intrusion, or minor structural defects',
        ],
      },
    ],
    popular: true,
  },
  {
    id: 'underground-electrical',
    name: 'Underground Electrical Conduit',
    icon: 'Zap',
    category: 'Electrical',


    shortDescription: 'Primary/secondary conduit systems and electrical infrastructure',
    detailedDescription:
      'Primary/secondary conduit systems, duct banks, handholes/pull boxes, vaults and transformer pads with trenchless crossings where required.',
    services: [
      {
        title: 'Main & Service Conduit Installation',
        features: [
          'Installing primary and secondary electrical conduits (PVC, HDPE, steel)',
          'Installing service laterals from main feeder to buildings, transformers, or panels',
          'Installing duct banks for multi-conduit runs',
          'Installing risers and transitions for above- to below-ground connections',
        ],
      },
      {
        title: 'Structures, Boxes & Access Points',
        features: [
          'Installing handholes, pull boxes, vaults, and manholes for electrical systems',
          'Setting transformer pads and electrical equipment pads',
          'Installing conduit terminations in structures',
        ],
      },
      {
        title: 'Specialty Installation Methods',
        features: [
          'Directional boring, jack-and-bore, or trenchless conduit installation',
          'Installing casing pipes and carrier conduits for protected crossings',
          'Conduit encasement in concrete for added protection',
          'Installation in joint trench configurations with other utilities',
        ],
      },
      {
        title: 'Cable Protection & Appurtenances',
        features: [
          'Installing warning tape and tracer wire above conduit runs',
          'Installing grounding and bonding systems',
          'Sealing conduit ends for moisture and pest prevention',
        ],
      },
      {
        title: 'Testing & Verification',
        features: [
          'Mandrel testing to verify conduit clearance',
          'Pull string installation for cable pulling',
          'Conduit continuity and grounding tests',
        ],
      },
      {
        title: 'Repair & Replacement',
        features: [
          'Replacement of damaged or collapsed conduits',
          'Rerouting or extending existing conduit systems',
          'Emergency conduit repair work',
        ],
      },
      {
        title: 'Site Work & Restoration',
        features: [
          'Excavation, trenching, and shoring as required',
          'Backfilling and compaction to specification',
          'Pavement, curb, sidewalk, and landscaping restoration',
        ],
      },
    ],
  },
  {
    id: 'deep-foundation',
    name: 'Deep Foundation',
    icon: 'Hammer',
    category: 'Foundation',


    shortDescription: 'Drilled shafts, piles and specialty supports for heavy structures',
    detailedDescription:
      'Drilled shafts, piles and specialty supports for bridges, buildings and heavy structures—delivered with certified testing and QA/QC.',
    services: [
      {
        title: 'Drilled Shaft / Caisson Installation',
        features: [
          'Drilling and installing concrete drilled shafts for bridges, buildings, and heavy structures',
          'Installing belled shafts for increased bearing capacity',
          'Temporary or permanent casing installation for shaft stability',
          'Rock socket drilling for hard strata conditions',
        ],
      },
      {
        title: 'Pile Installation',
        features: [
          'Driving steel H-piles, pipe piles, or sheet piles',
          'Installing precast concrete piles',
          'Installing timber piles for marine or light-load structures',
          'Installing auger cast piles (ACIP) or continuous flight auger piles',
        ],
      },
      {
        title: 'Foundation Support Systems',
        features: [
          'Installing helical piles or screw anchors for foundation stabilization',
          'Installing micro-piles for restricted-access or retrofit work',
          'Underpinning existing foundations for load support or settlement correction',
        ],
      },
      {
        title: 'Specialty Excavation & Drilling',
        features: [
          'Core drilling through rock or obstructions',
          'Slurry drilling and tremie concrete placement in wet conditions',
          'Drilling in limited access or low-headroom environments',
        ],
      },
      {
        title: 'Load Testing & Verification',
        features: [
          'Static load testing for piles or shafts',
          'Dynamic pile testing (PDA – Pile Driving Analyzer)',
          'Cross-hole sonic logging (CSL) for shaft integrity',
          'Thermal integrity profiling (TIP)',
        ],
      },
      {
        title: 'Foundation Protection & Reinforcement',
        features: [
          'Installing reinforcing cages and structural steel within deep foundations',
          'Applying corrosion protection measures for steel piles',
          'Installing base grouting or tip grouting for load enhancement',
        ],
      },
      {
        title: 'Repair & Rehabilitation',
        features: [
          'Strengthening or replacing damaged piles or shafts',
          'Jacketing or encasing deteriorated piles',
          'Grouting to fill voids or stabilize soil around deep foundations',
        ],
      },
      {
        title: 'Site Work & Restoration',
        features: [
          'Excavation and spoil management for drilled foundations',
          'Backfilling and compaction to specification',
          'Surface restoration including pavement, curbs, and grading',
        ],
      },
    ],
  },
  {
    id: 'civil-construction',
    name: 'Civil Construction',
    icon: 'Building',
    category: 'Civil',


    shortDescription: 'Full-scope sitework, roads, and structural concrete',
    detailedDescription:
      'Full-scope sitework, roads, structural concrete, drainage, and public infrastructure with strict schedule and safety control.',
    services: [
      {
        title: 'Site Preparation & Earthwork',
        features: [
          'Land clearing, grubbing, and demolition of existing structures',
          'Excavation, grading, and site leveling',
          'Soil stabilization and compaction',
          'Importing and exporting fill material',
        ],
      },
      {
        title: 'Roadway & Pavement Construction',
        features: [
          'Subgrade preparation and aggregate base installation',
          'Asphalt paving and concrete paving',
          'Curb, gutter, and sidewalk installation',
          'Driveway and parking lot construction',
        ],
      },
      {
        title: 'Structural Concrete & Foundations',
        features: [
          'Building and bridge foundations',
          'Retaining walls and headwalls',
          'Deep foundation systems (drilled shafts, piles, caissons)',
          'Slabs, pads, and structural flatwork',
        ],
      },
      {
        title: 'Drainage & Erosion Control',
        features: [
          'Culverts, swales, and stormwater management systems',
          'Retention and detention ponds',
          'Erosion control matting, riprap, and slope stabilization',
          'Outfall structures and energy dissipators',
        ],
      },
      {
        title: 'Transportation & Public Infrastructure',
        features: [
          'Road, highway, and intersection improvements',
          'Sidewalks, bike paths, and pedestrian facilities',
          'Bridge approaches and abutments',
          'Traffic control devices and striping',
        ],
      },
      {
        title: 'Specialty Civil Works',
        features: [
          'Site concrete for utilities, equipment pads, and bollards',
          'Concrete channels, ditches, and spillways',
          'Industrial site development and heavy civil projects',
          'Marine and waterfront civil structures',
        ],
      },
      {
        title: 'Site Restoration & Finishing',
        features: [
          'Topsoil placement and fine grading',
          'Landscaping and sod installation',
          'Pavement, curb, and surface restoration after utility work',
        ],
      },
    ],
    popular: true,
  },
  {
    id: 'drainage',
    name: 'Drainage',
    icon: 'Droplets',
    category: 'Utilities',


    shortDescription: 'Storm drain systems and water management solutions',
    detailedDescription:
      'Storm drain mains/laterals, culverts, inlets/structures, open channels and hydrologic controls—installed, inspected and restored.',
    services: [
      {
        title: 'Main & Lateral Line Installation',
        features: [
          'Installing storm drain mains and laterals',
          'Installing culverts (concrete, HDPE, metal) for roadways and site drainage',
          'Installing roadside and cross-drain pipes',
          'Installing roof drain or area drain connections to storm systems',
        ],
      },
      {
        title: 'Inlets, Structures & Access Points',
        features: [
          'Installing catch basins, drop inlets, and curb inlets',
          'Installing junction boxes and manholes for storm systems',
          'Adjusting inlet and manhole frames and grates to grade',
        ],
      },
      {
        title: 'Open Channel & Surface Drainage',
        features: [
          'Grading and shaping ditches, swales, and channels',
          'Installing riprap or erosion control lining',
          'Constructing retention/detention ponds and outfall structures',
        ],
      },
      {
        title: 'Specialty Installation Methods',
        features: [
          'Directional boring or jack-and-bore under roads, railways, or waterways',
          'Installing casing pipes for protected crossings',
          'Trenchless rehabilitation (lining, pipe bursting, or sliplining)',
        ],
      },
      {
        title: 'Appurtenances & Fittings',
        features: [
          'Installing headwalls, wingwalls, and end sections',
          'Installing flap gates, check valves, or tide gates',
          'Installing energy dissipators or stilling basins at outfalls',
        ],
      },
      {
        title: 'Testing & Commissioning',
        features: [
          'Flow testing and verification',
          'Cleaning and inspection of drainage systems prior to service',
          'CCTV inspection of installed systems',
        ],
      },
      {
        title: 'Repair & Replacement',
        features: [
          'Emergency storm drain or culvert repairs',
          'Replacement of damaged or collapsed drainage structures or piping',
          'Regrading or restoring eroded drainage features',
        ],
      },
      {
        title: 'Site Work & Restoration',
        features: [
          'Excavation, trenching, and shoring as needed',
          'Backfilling and compaction to specification',
          'Pavement, curb, sidewalk, landscaping, and erosion control restoration',
        ],
      },
    ],
  },
  {
    id: 'pipe-fabrication',
    name: 'Pipe Fabrication',
    icon: 'Wrench',
    category: 'Fabrication',


    shortDescription: 'Custom cutting, welding, fitting, and coating services',
    detailedDescription:
      'Custom cutting, welding, fitting, coating and assembly with documentation, NDT and field support.',
    services: [
      {
        title: 'Specialized Gas Services',
        features: [
          'Metering Stations',
          'Purchase Point Stations',
          'Hot Taps on Steel and Poly',
          'Regulator Stations',
          'Line Stops',
        ],
      },
      {
        title: 'Pipe Cutting & Preparation',
        features: [
          'Cutting pipe to specified lengths using saws, torches, or automated cutters',
          'Beveling pipe ends for welding or joint preparation',
          'Cleaning and surface preparation (grinding, sandblasting)',
        ],
      },
      {
        title: 'Welding & Joining',
        features: [
          'Butt welding of pipe sections (MIG, TIG, SMAW, FCAW)',
          'Socket welding, flange welding, and attachment of fittings',
          'Specialty welding such as orbital welding for stainless steel or critical piping',
          'Weld inspection and non-destructive testing (NDT) such as X-ray or ultrasonic testing',
        ],
      },
      {
        title: 'Fabrication of Fittings & Assemblies',
        features: [
          'Bending pipe to specified radii and angles',
          'Fabricating elbows, tees, reducers, and custom fittings',
          'Assembly of spool pieces and pipe racks',
          'Prefabricating piping assemblies for modular installation',
        ],
      },
      {
        title: 'Coating & Protection',
        features: [
          'Applying internal and external pipe coatings (epoxy, fusion bonded epoxy, polyethylene)',
          'Insulation installation and jacketing',
          'Corrosion protection and cathodic protection application',
        ],
      },
      {
        title: 'Quality Control & Documentation',
        features: [
          'Dimensional checks and verification of pipe assemblies',
          'Documentation of weld procedures, inspection reports, and material certifications',
          'Compliance with project specifications and industry standards (ASME, ASTM, API)',
        ],
      },
      {
        title: 'Repair & Rework',
        features: [
          'Repairing weld defects or damaged pipe sections',
          'Modifying fabricated pipe assemblies to meet changing project needs',
          'Field support for pipe fabrication and installation issues',
        ],
      },
    ],
  },
  {
    id: 'Underground Tunneling', // This should match the ID exactly
    name: 'Underground Tunneling',
    icon: 'MoveRight',
    category: 'Trenchless',


    shortDescription: 'Steel casing jacked beneath roads and obstructions',
    detailedDescription:
      'Steel casing jacked beneath roads/rails/obstructions with precise grade control and carrier pipe pullback.',
    services: [
      {
        title: 'Bore Pit Excavation & Preparation',
        features: [
          'Excavating entry and receiving pits to specified dimensions',
          'Shoring and bracing pits for safety and stability',
          'Dewatering and site preparation for bore operations',
        ],
      },
      {
        title: 'Jacking Pipe Installation',
        features: [
          'Installing steel casing pipes under roads, railways, and other obstructions',
          'Pushing or "jacking" casing pipes through soil using hydraulic jacks',
          'Ensuring precise alignment and grade control during jacking operations',
        ],
      },
      {
        title: 'Product Installation (Carrier Pipe Pullback)',
        features: [
          'Pulling in water, sewer, gas, or electrical carrier pipes inside the jacked casing',
          'Installing multiple carrier pipes in a single casing (multi-duct installations)',
          'Joining and sealing carrier pipes within casing',
        ],
      },
      {
        title: 'Specialty Jack and Bore Techniques',
        features: [
          'Handling variable soil conditions including rock, clay, and sand',
          'Using pipe bursting or sliplining in conjunction with jack and bore for rehabilitation',
          'Installing casing pipes with reinforced or composite materials as required',
        ],
      },
      {
        title: 'Site & Equipment Management',
        features: [
          'Mobilizing and operating jacking rigs, drilling equipment, and support machinery',
          'Monitoring and controlling hydraulic jacks and bore alignment systems',
          'Managing drill mud and spoil removal',
        ],
      },
      {
        title: 'Testing & Quality Control',
        features: [
          'Verifying pipe alignment, grade, and structural integrity',
          'Inspecting welds and seals on casing and carrier pipes',
          'Conducting pressure or leak testing where applicable',
        ],
      },
      {
        title: 'Site Restoration & Cleanup',
        features: [
          'Backfilling and compacting bore pits after installation',
          'Restoring pavement, sidewalks, and landscaping to original condition',
          'Removing all equipment and debris from the site',
        ],
      },
    ],
  },
] as const;


// Mapping service IDs to their directory names
const getServiceDirectory = (serviceId: string): string => {
  const directoryMap: Record<string, string> = {
    'directional-drilling': 'Directional Drilling',
    'civil-construction': 'Civil Construction',
    'deep-foundation': 'Deep Foundation',
    'drainage': 'Drainage',
    'Underground Tunneling': 'Jack&Bore-Tunneling', // Fixed the directory name to match exactly
    'utility-installation': 'Utilites',
    'underground-electrical': 'Utilites', // Maps to utilities since they're related
    'pipe-fabrication': 'Civil Construction', // Fallback to civil construction
  };
  return directoryMap[serviceId] || 'Civil Construction'; // Default fallback
};

// Function to get images for a specific service
const getServiceImages = async (serviceId: string): Promise<string[]> => {
  const directory = getServiceDirectory(serviceId);

  try {
    // For now, we'll define known images for each service
    // In a real-world scenario, you might want to dynamically fetch this list
    const imageMap: Record<string, string[]> = {
      'Directional Drilling': [
        'down-net_http20250912-127-gh773e.jpg',
        // 'down-net_http20250912-137-1r4lb3.jpg',
        // 'down-net_http20250912-144-eyooq1.jpg',
        'down-net_http20250912-161-5whxnz.jpg',
        'down-net_http20250912-165-x4wftm.jpg',
        'down-net_http20250912-175-8ut3xj.jpg',
        'down-net_http20250912-175-rzog2v.jpg',
        // 'down-net_http20250912-190-z59lu.jpg',
        // 'down-net_http20250912-198-fkd4q2.jpg',
        'down-net_http20250912-205-iteedj.jpg',
      ],
      'Civil Construction': [
        'down-net_http20250911-109-uhtwxe.jpg',
        'down-net_http20250911-122-4kanyl.jpg',
        // 'down-net_http20250911-160-ou0v6t.jpg',
        'down-net_http20250911-162-v6ta0w.jpg',
        'down-net_http20250911-179-fh5cfp.jpg',
        'down-net_http20250911-207-l0qx25.jpg',
        // 'down-net_http20250911-246-1gmpof.jpg',
        'down-net_http20250911-96-11t083.jpg',
        'down-net_http20250912-125-o2zd82.jpg',
        'down-net_http20250912-236-n4pumu.jpg',
      ],
      'Deep Foundation': [
        'IMG_0415.jpg',
        'IMG_0434.jpg',
        'IMG_4328.JPG',
        'IMG_4360.JPG',
        'IMG_4365.JPG',
        'IMG_4385.JPG',
        'IMG_4394.JPG',
        'IMG_4410.JPG',
        'thumbnail_IMG_2473.jpg',
        'thumbnail_IMG_7665.jpg',
      ],
      'Drainage': [
        'down-net_http20250911-137-o2qt0c.jpg',
        'down-net_http20250911-148-7a561.jpg',
        'down-net_http20250911-163-4onhln.jpg',
        'down-net_http20250911-171-nayggv.jpg',
        'down-net_http20250911-91-8744ar.jpg',
      ],
      'Jack&Bore-Tunneling': [
        'down-net_http20250912-105-8ak2go.jpg',
        'down-net_http20250912-105-l563tg.jpg',
        'down-net_http20250912-107-1dvg26.jpg',
        'down-net_http20250912-116-kqu90f.jpg',
        'down-net_http20250912-126-k3qg8w.jpg',
        // 'down-net_http20250912-130-mbgxq6.jpg',
        // 'down-net_http20250912-145-wp33ip.jpg',
        'down-net_http20250912-147-q42v8p.jpg',
        'down-net_http20250912-169-j491tb.jpg',
        'down-net_http20250912-175-jij4mo.jpg',
      ],
      'Utilites': [
        // 'Water System Installation/down-net_http20250911-125-y4rprp.jpg',
        'Water System Installation/down-net_http20250911-135-69fimn.jpg',
        'Water System Installation/down-net_http20250911-152-i74o87.jpg',
        'Water System Installation/down-net_http20250911-162-zrc1k3.jpg',
        'Water System Installation/down-net_http20250911-165-nh5ffb.jpg',
        // 'Gas System Installation/down-net_http20250912-105-dh3cqs.jpg',
        'Gas System Installation/down-net_http20250912-125-hkgir.jpg',
        'Gas System Installation/down-net_http20250912-209-dxghan.jpg',
        'Gas System Installation/down-net_http20250912-267-o6u13q.jpg',
        'Water System Installation/down-net_http20250911-235-ah34n3.jpg',
      ],
      'Logos': [],
    };

    const images = imageMap[directory] || [];
    // Fixed image path generation - handle spaces in directory and file names properly
    // Also corrected the path to not include '/public' since Vite serves static assets from the root
    return images.map(img => {
      if (img.includes('/')) {
        const [subDir, fileName] = img.split('/');
        return `/${directory}/${encodeURIComponent(subDir)}/${encodeURIComponent(fileName)}`;
      }
      // For simple paths
      return `/${directory}/${encodeURIComponent(img)}`;
    });
  } catch (error) {
    console.warn(`Failed to load images for service: ${serviceId}`, error);
    return [];
  }
};

type IconType = React.ComponentType<{ className?: string }>;
const getIcon = (name?: string): IconType => {
  if (!name) return Icons.Wrench as IconType;
  const maybe = (Icons as unknown as Record<string, IconType>)[name];
  return (maybe as IconType) || (Icons.Wrench as IconType);
};

const groupKey = (serviceId: string, title: string) =>
  `${serviceId}__${title.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;

/* ============================
   Page Component (Tabs layout)
   ============================ */
const Services: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize activeId from URL or default to first service
  const [activeId, setActiveId] = useState<string>(() => {
    const params = new URLSearchParams(location.search);
    const fromHash = location.hash ? location.hash.replace('#', '') : '';
    const targetService = params.get('service') || fromHash;
    
    if (targetService) {
      const match = services.find(s => s.id === targetService);
      if (match) return match.id;
    }
    return services[0]?.id ?? '';
  });

  // keep the URL in sync when the user clicks a tab
  useEffect(() => {
    navigate(`/services?service=${activeId}`, { replace: true });
  }, [activeId, navigate]);

  // allow deep-linking: read ?service=... and ?group=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fromHash = location.hash ? location.hash.replace('#', '') : '';
    const targetService = params.get('service') || fromHash;

    if (targetService) {
      const match = services.find(s => s.id === targetService);
      if (match && match.id !== activeId) {
        setActiveId(match.id);
        // optional: scroll the tab rail into view
        document.getElementById(`tab-${match.id}`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });

        // optional: open a particular accordion card (desktop opens the whole row)
        const groupParam = params.get('group'); // you pass the slug we generate below
        if (groupParam && match.services?.length) {
          const idx = match.services.findIndex(g => groupKey(match.id, g.title) === groupParam);
          if (idx >= 0) {
            if (window.matchMedia('(min-width: 768px)').matches) {
              setOpenRow(Math.floor(idx / 2));     // open both cards in that row on md+
              setOpenCardKey(null);
            } else {
              setOpenCardKey(groupKey(match.id, match.services[idx].title)); // open single card on mobile
              setOpenRow(null);
            }
          }
        }
      }
    }
  }, [location.search, location.hash]); // re-run when URL changes

  // Image carousel state
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [serviceImages, setServiceImages] = useState<string[]>([]);
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Touch scroll state for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Row/card expansion state
  const [openRow, setOpenRow] = useState<number | null>(null);          // md+ : which row is open (both cards)
  const [openCardKey, setOpenCardKey] = useState<string | null>(null);  // <md : which single card is open
  const [isMdUp, setIsMdUp] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
  );

  // Refs need to be declared before useEffect hooks that use them
  const railRef = useRef<HTMLDivElement | null>(null);
  const imageScrollRef = useRef<HTMLDivElement | null>(null);

  const activeService = useMemo(
    () => services.find((s) => s.id === activeId) ?? services[0],
    [activeId]
  );

  // Manual navigation functions - works for both desktop and mobile
  const handleManualNavigation = (direction: 'left' | 'right') => {
    const container = imageScrollRef.current;
    if (!container) return;
    
    // Calculate scroll amount based on screen size
    const isMobile = window.innerWidth < 768;
    const scrollAmount = isMobile ? window.innerWidth * 0.8 : 320; // 80% of screen width on mobile, fixed on desktop
    
    setIsManualNavigation(true);

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    // Resume automatic scrolling after a delay
    setTimeout(() => {
      setIsManualNavigation(false);
    }, 3000); // 3 seconds delay before resuming auto-scroll
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    // Handle mobile single image navigation
    if (isLeftSwipe) {
      // Move to next image
      setCurrentImageIndex(prev => (prev + 1) % serviceImages.length);
    }
    
    if (isRightSwipe) {
      // Move to previous image
      setCurrentImageIndex(prev => (prev - 1 + serviceImages.length) % serviceImages.length);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // when switching tabs, close anything open
  useEffect(() => {
    setOpenRow(null);
    setOpenCardKey(null);
  }, [activeId]);

  // Load images for the active service
  useEffect(() => {
    const loadImages = async () => {
      setIsLoadingImages(true);
      try {
        const images = await getServiceImages(activeId);
        setServiceImages(images);
      } catch (error) {
        console.error('Failed to load service images:', error);
        setServiceImages([]);
      } finally {
        setIsLoadingImages(false);
      }
    };

    loadImages();
    // Reset scroll position when switching services
    setScrollPosition(0);
    // Reset current image index when switching services
    setCurrentImageIndex(0);
  }, [activeId]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Handle browser navigation with Cmd+Left/Right (Mac) or Ctrl+Left/Right (Windows)
      if ((event.metaKey || event.ctrlKey) && event.key === 'ArrowLeft') {
        event.preventDefault();
        // Go back in browser history
        window.history.back();
        return;
      }
      
      if ((event.metaKey || event.ctrlKey) && event.key === 'ArrowRight') {
        event.preventDefault();
        // Go forward in browser history
        window.history.forward();
        return;
      }

      // Handle image navigation with arrow keys (only when not using modifier keys)
      if (serviceImages.length === 0) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handleManualNavigation('left');
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleManualNavigation('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [serviceImages.length]);

  // keep responsive state in sync
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = () => setIsMdUp(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Auto-scroll images - modified for mobile single image display
  useEffect(() => {
    if (serviceImages.length === 0) return;

    // For mobile, change image every 6 seconds
    if (!isMdUp) {
      const interval = setInterval(() => {
        // Only auto-change if not manually navigating and not hovered
        if (!isManualNavigation && !isHovered) {
          setCurrentImageIndex(prev => (prev + 1) % serviceImages.length);
        }
      }, 6000); // 6 seconds (matching the user's updated value)

      return () => {
        clearInterval(interval);
      };
    }
    // For desktop, keep the existing scrolling behavior
    else {
      const container = imageScrollRef.current;
      if (!container) return;

      // Increased scroll speed to make it more noticeable
      let scrollPosition = 0;
      const scrollSpeed = 2; // Increased from 1 to 2 pixels per interval
      const scrollInterval = 20; // Decreased from 30 to 20 milliseconds for faster scrolling
      
      const interval = setInterval(() => {
        // Only auto-scroll if not manually navigating and not hovered (for desktop)
        if (!isManualNavigation && !isHovered) {
          scrollPosition += scrollSpeed;
          container.scrollLeft = scrollPosition;
          
          // Reset to beginning when we've scrolled to the end
          if (scrollPosition >= container.scrollWidth - container.clientWidth - 10) {
            scrollPosition = 0;
            container.scrollLeft = 0;
          }
        }
      }, scrollInterval);

      return () => {
        clearInterval(interval);
      };
    }
  }, [serviceImages.length, isManualNavigation, isHovered, isMdUp]);

  // auto-scroll tab rail on mobile so active tab stays in view
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) return;

    const activeIndex = services.findIndex((s) => s.id === activeId);
    if (activeIndex < 0) return;

    const perView = 3; // approximate; we'll center-ish the selection
    const itemWidth = rail.clientWidth / perView;
    rail.scrollTo({ left: Math.max(0, activeIndex * itemWidth - itemWidth), behavior: 'smooth' });
  }, [activeId]);

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero (kept consistent with your Services hero style) */}
      <section className="relative py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          // style={{ backgroundImage: "url('/images/christopher-burns-8KfCR12oeUM-unsplash.jpg')" }}
          style={{ backgroundImage: "url('/Deep Foundation/IMG_4394.JPG')" }}
        >

          {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-300/90 via-primary-800/80 to-secondary-900/90" /> */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/85 via-primary-600/75 to-secondary-600/80 dark:from-gray-200/80 dark:via-gray-400/90 dark:to-gray-700/90" />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white ">
            Expert Construction Solutions
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            From precision trenchless technology to comprehensive civil works—delivered safely, on time, and on budget.
          </p>
        </div>
      </section>

      {/* Tabs + panel */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab rail */}
          <div role="tablist" aria-label="Services" className="relative">
            <div
              ref={railRef}
              className="flex gap-6 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center pb-4 -mx-4 px-4"
            >
              {services.map((s) => {
                const Icon = getIcon(s.icon);
                const active = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={active}
                    aria-controls={`panel-${s.id}`}
                    id={`tab-${s.id}`}
                    onClick={() => setActiveId(s.id)}
                    className={`group relative shrink-0 whitespace-nowrap px-3 py-2 text-base font-semibold transition-colors
                      ${active ? 'text-primary-700 dark:text-primary-300' : 'text-gray-700 dark:text-gray-200'}
                    `}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span
                        className={`w-7 h-7 rounded-md grid place-items-center ${active ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                      >
                        <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-gray-700 dark:text-gray-200'}`} />
                      </span>
                      {s.name}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-primary-600 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active service panel */}
          {activeService && (
            <div
              role="tabpanel"
              id={`panel-${activeService.id}`}
              aria-labelledby={`tab-${activeService.id}`}
              className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Header strip */}
              <div className="bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 rounded-xl grid place-items-center shadow-lg">
                      {React.createElement(getIcon(activeService.icon), { className: 'w-8 h-8 text-white' })}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {activeService.name}
                      </h2>
                      <p className="mt-2 text-gray-700 dark:text-gray-300 w-full">
                        {activeService.detailedDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Offered (accordions) */}
              {activeService.services?.length ? (
                <div className="p-6 lg:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {activeService.services.map((group, idx) => {
                      const k = groupKey(activeService.id, group.title);
                      const rowIdx = Math.floor(idx / 2); // 2 columns per row on md+
                      const isOpen = isMdUp ? openRow === rowIdx : openCardKey === k;

                      const handleClick = () => {
                        if (isMdUp) {
                          setOpenRow((prev) => (prev === rowIdx ? null : rowIdx)); // open/close both cards in row
                          setOpenCardKey(null);
                        } else {
                          setOpenCardKey((prev) => (prev === k ? null : k)); // mobile: single card
                          setOpenRow(null);
                        }
                      };

                      return (
                        <div key={k} className="bg-gray-50 dark:bg-gray-700 rounded-xl h-full flex flex-col">
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={handleClick}
                            className="w-full flex items-center justify-between text-left p-5"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 min-h-[28px]">
                              {group.title}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 flex-1">
                              <ul className="space-y-2">
                                {group.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>

        {/* Infinite Scrolling Thumb Strip */}
        {serviceImages.length > 0 && (
          <div className="mt-8">
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Left Navigation Button - hidden on mobile */}
              <button
                onClick={() => handleManualNavigation('left')}
                className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
                aria-label="Previous images"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Right Navigation Button - hidden on mobile */}
              <button
                onClick={() => handleManualNavigation('right')}
                className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
                aria-label="Next images"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Auto-scroll indicator - visible on all devices */}
              <div className="absolute top-2 right-2 z-20 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                {!isMdUp ? 'Auto-rotating' : 'Auto-scrolling'}
              </div>

              {/* Mobile single image display */}
              {!isMdUp && (
                <div className="flex flex-col items-center">
                  {/* Navigation buttons for mobile */}
                  <div className="relative w-full">
                    {/* Left Navigation Button */}
                    <button
                      onClick={() => {
                        setCurrentImageIndex(prev => (prev - 1 + serviceImages.length) % serviceImages.length);
                        setIsManualNavigation(true);
                        setTimeout(() => setIsManualNavigation(false), 3000);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    {/* Image container with fade transition */}
                    <div className="w-full h-[300px] rounded-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10 shadow-sm relative">
                      {serviceImages.map((imageSrc, index) => (
                        <img
                          key={`${imageSrc}-${index}`}
                          src={imageSrc}
                          alt={`${activeService.name} project ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-500 ease-in-out ${
                            index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                          }`}
                          onError={(e) => {
                            // Fallback to a default image if service image fails to load
                            const target = e.target as HTMLImageElement;
                            // Try a secondary fallback image
                            target.src = '/images/christopher-burns-8KfCR12oeUM-unsplash.jpg';
                            // If that also fails, show a placeholder
                            target.onerror = () => {
                              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjE2MCIgeT0iMTYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTkiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                            };
                          }}
                        />
                      ))}
                    </div>

                    {/* Right Navigation Button */}
                    <button
                      onClick={() => {
                        setCurrentImageIndex(prev => (prev + 1) % serviceImages.length);
                        setIsManualNavigation(true);
                        setTimeout(() => setIsManualNavigation(false), 3000);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Image counter for mobile */}
                  <div className="text-center mt-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {currentImageIndex + 1} / {serviceImages.length}
                    </span>
                  </div>
                </div>
              )}

              {/* Desktop horizontal scroll container - like service tabs */}
              {isMdUp && (
                <div 
                  ref={imageScrollRef} 
                  className="flex gap-4 overflow-x-auto no-scrollbar md:overflow-hidden md:gap-4 -mx-4 px-4 md:mx-0 md:px-0"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Images - simple horizontal scroll like service tabs */}
                  {serviceImages.map((imageSrc, i) => (
                    <div key={i} className="min-w-[80vw] md:min-w-[20rem] lg:min-w-[24rem] group flex-shrink-0">
                      <div className="w-full h-[300px] md:h-48 lg:h-56 xl:h-64 rounded-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10 group-hover:ring-2 group-hover:ring-blue-500/20 transition-all duration-300 group-hover:scale-[1.02] shadow-sm hover:shadow-md">
                        <img
                          src={imageSrc}
                          alt={`${activeService.name} project ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-contain md:object-cover object-center"
                          onError={(e) => {
                            // Fallback to a default image if service image fails to load
                            const target = e.target as HTMLImageElement;
                            // Try a secondary fallback image
                            target.src = '/images/christopher-burns-8KfCR12oeUM-unsplash.jpg';
                            // If that also fails, show a placeholder
                            target.onerror = () => {
                              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjE2MCIgeT0iMTYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTkiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                            };
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Gradient overlays for smooth edges - hidden on mobile */}
              <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-10 hidden md:block"></div>
              <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10 hidden md:block"></div>
            </div>

            {/* Pause indicator when hovered or manually navigating */}
            {(isHovered || isManualNavigation) && (
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {isManualNavigation
                    ? 'Manual navigation • Auto-scroll resumes in 3 seconds'
                    : 'Hover to pause • Move away to resume'
                  }
                </span>
              </div>
            )}

            {/* Service name indicator */}
            <div className="text-center mt-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {activeService.name} Project Gallery ({serviceImages.length} images)
              </span>
            </div>

            {/* Navigation instructions */}
            <div className="text-center mt-1">
              <span className="text-xs text-gray-400 dark:text-gray-500 block md:hidden">
                Swipe left or right to navigate
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 hidden md:block">
                Use arrow buttons or ←/→ keys to navigate manually
              </span>
            </div>
          </div>
        )}

        {/* Loading state for images */}
        {isLoadingImages && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-primary-600 rounded-full animate-spin"></div>
              Loading {activeService.name} images...
            </div>
          </div>
        )}

        {/* No images available state */}
        {!isLoadingImages && serviceImages.length === 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              No images available for {activeService.name} at the moment.
            </p>
          </div>
        )}
      </section>

    </div>
  );
};

export default Services;
