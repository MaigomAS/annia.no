import type { ChallengeCategory } from '../data/challenges'

export type Locale = 'es' | 'en'

export type LocalizedString = Record<Locale, string>

export type LocalizedChallenge = {
  id: string
  title: LocalizedString
  category: ChallengeCategory
  status: 'Scoping' | 'Partnering' | 'Pilot active'
  region: LocalizedString
  timeframe: LocalizedString
  image: string
  summary: LocalizedString
  outcomes: LocalizedString[]
}

export type LocalizedEcosystemNode = {
  label: LocalizedString
  description: LocalizedString
  iconKey: 'people' | 'institutions' | 'territories' | 'talent' | 'capital' | 'innovation'
  x: string
  y: string
}

export type LocalizedInsight = {
  title: LocalizedString
  eyebrow: LocalizedString
  image: string
  excerpt: LocalizedString
  readTime: LocalizedString
}

export type LocalizedPartner = {
  name: string
  type: LocalizedString
  logo: string
  description: LocalizedString
}

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
}

export const defaultLocale: Locale = 'es'

export const categoryLabels: Record<ChallengeCategory | 'All', LocalizedString> = {
  All: { es: 'Todo', en: 'All' },
  Sustainability: { es: 'Sostenibilidad', en: 'Sustainability' },
  Industry: { es: 'Industria', en: 'Industry' },
  Territory: { es: 'Territorio', en: 'Territory' },
  Technology: { es: 'Tecnología', en: 'Technology' },
  Capital: { es: 'Capital', en: 'Capital' },
  Talent: { es: 'Talento', en: 'Talent' },
}

export const statusLabels: Record<LocalizedChallenge['status'], LocalizedString> = {
  Scoping: { es: 'En definición', en: 'Scoping' },
  Partnering: { es: 'Buscando aliados', en: 'Partnering' },
  'Pilot active': { es: 'Piloto activo', en: 'Pilot active' },
}

export const navigation = [
  { to: '/', label: { es: 'Plataforma', en: 'Platform' } },
  { to: '/spring-challenges', label: { es: 'Retos Spring', en: 'Spring Challenges' } },
  { to: '/ecosystem', label: { es: 'Ecosistema', en: 'Ecosystem' } },
  { to: '/insights', label: { es: 'Inteligencia', en: 'Insights' } },
  { to: '/contact', label: { es: 'Contacto', en: 'Contact' } },
]

export const copy = {
  nav: {
    aria: { es: 'Navegación principal', en: 'Primary navigation' },
    home: { es: 'Inicio de ANNIA', en: 'ANNIA home' },
    partnerCta: { es: 'Aplicar como aliado', en: 'Apply as Partner' },
    languageLabel: { es: 'Idioma', en: 'Language' },
    autoLabel: { es: 'Detección inteligente', en: 'Smart detection' },
  },
  hero: {
    eyebrow: { es: 'Infraestructura estratégica de colaboración', en: 'Strategic collaboration infrastructure' },
    title: { es: 'Conectando sistemas. Acelerando el cambio real.', en: 'Connecting systems. Accelerating real change.' },
    description: {
      es: 'ANNIA es una infraestructura estratégica de colaboración que vincula personas, instituciones y territorios para impulsar innovación aplicada, sostenibilidad y transformación sistémica.',
      en: 'ANNIA is a strategic collaboration infrastructure linking people, institutions and territories to drive applied innovation, sustainability and systemic transformation.',
    },
    primaryCta: { es: 'Explorar el ecosistema', en: 'Explore the ecosystem' },
    secondaryCta: { es: 'Ver Retos Spring', en: 'View Spring Challenges' },
    panelTitle: { es: 'Capa operativa ANNIA', en: 'ANNIA operating layer' },
    live: { es: 'Vista en vivo', en: 'Live preview' },
    metrics: [
      { value: '18', label: { es: 'Pilotos activos', en: 'Active pilots' } },
      { value: '7', label: { es: 'Países', en: 'Countries' } },
      { value: '42', label: { es: 'Aliados', en: 'Partners' } },
    ],
    signals: [
      { label: { es: 'Corredor industrial circular', en: 'Circular industry corridor' }, icon: 'Network' },
      { label: { es: 'Laboratorio de resiliencia territorial', en: 'Territorial resilience lab' }, icon: 'Globe2' },
      { label: { es: 'Revisión de ruta de capital', en: 'Capital pathway review' }, icon: 'Activity' },
    ],
    matching: { es: 'Conectando', en: 'Matching' },
  },
  home: {
    what: {
      eyebrow: { es: 'Qué es ANNIA', en: 'What is ANNIA' },
      title: { es: 'Una capa seria de coordinación para el cambio sistémico.', en: 'A serious coordination layer for systemic change.' },
      description: {
        es: 'ANNIA conecta actores, inteligencia y rutas operativas necesarias para mover la sostenibilidad y la transformación industrial de la intención a la ejecución.',
        en: 'ANNIA connects the actors, intelligence and operational pathways needed to move sustainability and industrial transformation from intent to execution.',
      },
    },
    features: [
      {
        title: { es: 'Plataforma estratégica de ecosistema', en: 'Strategic ecosystem platform' },
        description: {
          es: 'Una interfaz común para que instituciones, territorios, empresas, talento y capital coordinen misiones compartidas.',
          en: 'A common interface for institutions, territories, companies, talent and capital to coordinate around shared missions.',
        },
      },
      {
        title: { es: 'Diplomacia nórdica de innovación', en: 'Nordic innovation diplomacy' },
        description: {
          es: 'Un modelo confiable de convocatoria para alianzas transfronterizas, alineación público-privada y colaboración aplicada.',
          en: 'A trusted convening model for cross-border partnerships, public-private alignment and applied collaboration.',
        },
      },
      {
        title: { es: 'Laboratorio ejecutivo de sistemas', en: 'Executive systems lab' },
        description: {
          es: 'Pilotos estructurados, informes de decisión y productos de inteligencia diseñados para líderes que construyen infraestructura de futuro.',
          en: 'Structured pilots, decision briefs and insight products designed for leaders building future infrastructure.',
        },
      },
    ],
    imageCard: {
      eyebrow: { es: 'Dirección de plataforma', en: 'Platform direction' },
      title: { es: 'Inteligencia humana, industrial y territorial en un solo entorno operativo.', en: 'Human, industrial and territorial intelligence in one operating environment.' },
    },
    operate: {
      eyebrow: { es: 'Cómo operamos', en: 'How we operate' },
      title: { es: 'De la señal estratégica al piloto aplicado.', en: 'From strategic signal to applied pilot.' },
      description: {
        es: 'ANNIA está diseñada como infraestructura: suficientemente repetible para escalar y suficientemente específica para sistemas reales complejos.',
        en: 'ANNIA is designed as infrastructure: repeatable enough to scale, bespoke enough for complex real-world systems.',
      },
      cards: [
        { title: { es: 'Detectar demanda estratégica', en: 'Sense strategic demand' }, description: { es: 'Identificar retos institucionales, territoriales e industriales reales con relevancia ejecutiva.', en: 'Identify real institutional, territorial and industry challenges with executive-level relevance.' } },
        { title: { es: 'Componer coaliciones piloto', en: 'Compose pilot coalitions' }, description: { es: 'Reunir decisores, talento, operadores y capital alrededor de briefs operativos compartidos.', en: 'Bring together decision-makers, talent, operators and capital around shared operating briefs.' } },
        { title: { es: 'Validar rutas', en: 'Validate pathways' }, description: { es: 'Convertir exploración en pilotos, compras, casos de inversión y modelos de gobernanza.', en: 'Convert exploration into pilots, procurement routes, investment cases and governance models.' } },
      ],
      timeline: [
        { es: 'Definición del reto', en: 'Challenge framing' },
        { es: 'Conexión de aliados', en: 'Partner matching' },
        { es: 'Sprint piloto', en: 'Pilot sprint' },
        { es: 'Ruta de capital', en: 'Capital pathway' },
        { es: 'Decisión de escala', en: 'Scale decision' },
      ],
    },
    spring: {
      eyebrow: { es: 'Retos Spring', en: 'Spring Challenges' },
      title: { es: 'Pilotos de innovación aplicada para retos del mundo real', en: 'Applied Innovation Pilots for Real-World Challenges' },
      description: {
        es: 'Los Retos Spring son el primer mecanismo de activación de ANNIA: pilotos colaborativos donde empresas, instituciones y talento internacional exploran soluciones concretas para sostenibilidad, industria y transformación territorial.',
        en: 'Spring Challenges are ANNIA’s first activation mechanism: collaborative innovation pilots where companies, institutions and international talent explore concrete solutions for sustainability, industry and territorial transformation.',
      },
    },
    explorer: {
      eyebrow: { es: 'Explorador de ecosistema', en: 'Ecosystem Explorer' },
      title: { es: 'Un mapa vivo de personas, instituciones, territorios, talento, capital e innovación aplicada.', en: 'A living map of people, institutions, territories, talent, capital and applied innovation.' },
    },
    preview: {
      eyebrow: { es: 'Vista de plataforma', en: 'Platform preview' },
      title: { es: 'Señales operativas, no ruido de marketing.', en: 'Operational signals, not marketing noise.' },
      description: {
        es: 'La interfaz está preparada para tableros de aliados, envío de retos, perfiles de talento, mercados de oportunidades y flujos de matchmaking.',
        en: 'The interface is prepared for partner dashboards, challenge submissions, talent profiles, opportunity marketplaces and matchmaking workflows.',
      },
    },
    partners: {
      eyebrow: { es: 'Instituciones y aliados', en: 'Institutions and partners' },
      title: { es: 'Construida para coaliciones creíbles.', en: 'Built for credible coalitions.' },
    },
    collaboration: {
      eyebrow: { es: 'Iniciar una colaboración', en: 'Start a collaboration' },
      title: { es: 'Trae un reto serio al entorno operativo de ANNIA.', en: 'Bring a serious challenge into the ANNIA operating environment.' },
      description: {
        es: 'Aplica como aliado, envía un reto o únete a la red de talento para los próximos Retos Spring.',
        en: 'Apply as a partner, submit a challenge, or join the talent network for upcoming Spring Challenges.',
      },
      apply: { es: 'Aplicar como aliado', en: 'Apply as Partner' },
      submit: { es: 'Enviar un reto', en: 'Submit a Challenge' },
      join: { es: 'Unirse a la red de talento', en: 'Join Talent Network' },
    },
  },
  springPage: {
    header: {
      eyebrow: { es: 'Retos Spring', en: 'Spring Challenges' },
      title: { es: 'Pilotos de innovación aplicada para retos del mundo real', en: 'Applied Innovation Pilots for Real-World Challenges' },
      description: {
        es: 'Un portafolio estructurado de pilotos de sostenibilidad, industria y territorio para instituciones y empresas que necesitan rutas reales de implementación — no eventos aislados.',
        en: 'A structured portfolio of sustainability, industry and territorial pilots designed for institutions and companies that need real implementation pathways — not one-off events.',
      },
    },
    filterAria: { es: 'Filtrar retos por categoría', en: 'Filter challenges by category' },
    submitTitle: { es: 'Envía un reto estratégico para la próxima cohorte.', en: 'Submit a strategic challenge for the next cohort.' },
    submitDescription: {
      es: 'ANNIA ayuda a dar forma a briefs de reto, coaliciones de aliados, equipos de talento y hojas de ruta piloto con gobernanza y rutas de capital creíbles.',
      en: 'ANNIA helps shape challenge briefs, partner coalitions, talent teams and pilot roadmaps with credible governance and capital pathways.',
    },
  },
  ecosystemPage: {
    eyebrow: { es: 'Ecosistema', en: 'Ecosystem' },
    title: { es: 'Una iniciativa de infraestructura futura para colaboración estratégica.', en: 'A future infrastructure initiative for strategic collaboration.' },
    description: {
      es: 'ANNIA organiza inteligencia de ecosistema alrededor de actores, territorios, capacidades, oportunidades y misiones de innovación aplicada.',
      en: 'ANNIA organizes ecosystem intelligence around actors, territories, capabilities, opportunities and applied innovation missions.',
    },
  },
  insightsPage: {
    eyebrow: { es: 'Inteligencia', en: 'Insights' },
    title: { es: 'Reportes e inteligencia de campo para transformación estratégica.', en: 'Reports and field intelligence for strategic transformation.' },
    description: {
      es: 'Vista previa de briefs y reportes que más adelante se conectarán con tableros de aliados, mercados de oportunidades y productos de inteligencia de ecosistema.',
      en: 'Preview briefs and reports that will later connect to partner dashboards, opportunity marketplaces and ecosystem intelligence products.',
    },
  },
  contactPage: {
    eyebrow: { es: 'Contacto', en: 'Contact' },
    title: { es: 'Aplica, envía o únete a la red.', en: 'Apply, submit or join the network.' },
    description: {
      es: 'Usa esta interfaz estática para expresar interés. Los flujos backend para cuentas, envíos, tableros y matchmaking quedan preparados como trabajo futuro de plataforma.',
      en: 'Use this static interface to express interest. Backend workflows for accounts, submissions, dashboards and matchmaking are prepared as future platform work.',
    },
    name: { es: 'Nombre', en: 'Name' },
    namePlaceholder: { es: 'Tu nombre', en: 'Your name' },
    email: { es: 'Correo electrónico', en: 'Email' },
    intent: { es: 'Quiero', en: 'I want to' },
    message: { es: 'Mensaje', en: 'Message' },
    messagePlaceholder: {
      es: 'Cuéntanos sobre el contexto estratégico, reto o interés de colaboración.',
      en: 'Tell us about the strategic context, challenge or collaboration interest.',
    },
    send: { es: 'Enviar interés', en: 'Send interest' },
    newsletter: { es: 'Newsletter y actualizaciones ejecutivas', en: 'Newsletter and executive updates' },
    emailPlaceholder: { es: 'Dirección de correo', en: 'Email address' },
    subscribe: { es: 'Suscribirse', en: 'Subscribe' },
    options: [
      { es: 'Aplicar como aliado', en: 'Apply as Partner' },
      { es: 'Enviar un reto', en: 'Submit a Challenge' },
      { es: 'Unirse a la red de talento', en: 'Join Talent Network' },
      { es: 'Solicitar un briefing ejecutivo', en: 'Request an executive briefing' },
    ],
  },
  notFound: {
    title: { es: 'Página no encontrada', en: 'Page not found' },
    description: { es: 'Vuelve a la vista general de la plataforma ANNIA.', en: 'Return to the ANNIA platform overview.' },
    cta: { es: 'Ir al inicio', en: 'Go home' },
  },
  footer: {
    description: {
      es: 'Una infraestructura nórdica de colaboración estratégica para innovación aplicada, sostenibilidad y transformación territorial.',
      en: 'A Nordic strategic collaboration infrastructure for applied innovation, sustainability and territorial transformation.',
    },
    platform: { es: 'Plataforma', en: 'Platform' },
    activation: { es: 'Activación', en: 'Activation' },
    ecosystem: { es: 'Explorador de ecosistema', en: 'Ecosystem Explorer' },
    copyright: { es: '© 2026 ANNIA. Plataforma estratégica de ecosistema en desarrollo.', en: '© 2026 ANNIA. Strategic ecosystem platform in development.' },
  },
}

export const localizedChallenges: LocalizedChallenge[] = [
  {
    id: 'circular-nordic-industry',
    title: { es: 'Corredores de industria circular nórdica', en: 'Circular Nordic Industry Corridors' },
    category: 'Industry',
    status: 'Partnering',
    region: { es: 'Noruega · Suecia · Dinamarca', en: 'Norway · Sweden · Denmark' },
    timeframe: { es: 'Sprint piloto de 12 semanas', en: '12-week pilot sprint' },
    image: '/assets/challenges/circular-industry.svg',
    summary: {
      es: 'Mapear flujos secundarios industriales, necesidades de proveedores y rutas de política pública hacia pilotos ejecutables de economía circular.',
      en: 'Map industrial side streams, supplier needs and policy pathways into executable circular economy pilots.',
    },
    outcomes: [
      { es: 'Inteligencia de flujos materiales', en: 'Material flow intelligence' },
      { es: 'Tesis de piloto con aliados', en: 'Partner pilot thesis' },
      { es: 'Hoja de ruta lista para inversión', en: 'Investment-ready roadmap' },
    ],
  },
  {
    id: 'territorial-resilience',
    title: { es: 'Laboratorios de resiliencia territorial', en: 'Territorial Resilience Labs' },
    category: 'Territory',
    status: 'Scoping',
    region: { es: 'Municipios costeros nórdicos', en: 'Nordic coastal municipalities' },
    timeframe: { es: 'Cohorte de primavera', en: 'Spring cohort' },
    image: '/assets/challenges/territorial-resilience.svg',
    summary: {
      es: 'Conectar municipios, investigadores y talento para prototipar soluciones de adaptación en territorios vulnerables al clima.',
      en: 'Connect municipalities, researchers and talent to prototype adaptation solutions for climate-vulnerable territories.',
    },
    outcomes: [
      { es: 'Dossier del reto', en: 'Challenge dossier' },
      { es: 'Diseño de piloto público-privado', en: 'Public-private pilot design' },
      { es: 'Marco de medición de impacto', en: 'Impact measurement frame' },
    ],
  },
  {
    id: 'blue-energy',
    title: { es: 'Puertos de transición de energía azul', en: 'Blue Energy Transition Ports' },
    category: 'Sustainability',
    status: 'Pilot active',
    region: { es: 'Red portuaria del Atlántico Norte', en: 'North Atlantic port network' },
    timeframe: { es: 'Validación de 90 días', en: '90-day validation' },
    image: '/assets/challenges/blue-energy.svg',
    summary: {
      es: 'Impulsar la descarbonización portuaria mediante agregación de demanda, conexión tecnológica y financiación compartida de transición.',
      en: 'Advance port decarbonisation through demand aggregation, technology matching and shared transition finance.',
    },
    outcomes: [
      { es: 'Lista corta tecnológica', en: 'Technology shortlist' },
      { es: 'Ruta de capital', en: 'Capital pathway' },
      { es: 'Clúster transfronterizo de aliados', en: 'Cross-border partner cluster' },
    ],
  },
  {
    id: 'ai-territorial-intelligence',
    title: { es: 'Capa de inteligencia territorial con IA', en: 'AI Territorial Intelligence Layer' },
    category: 'Technology',
    status: 'Scoping',
    region: { es: 'Regiones europeas', en: 'European regions' },
    timeframe: { es: 'Ruta de descubrimiento', en: 'Discovery track' },
    image: '/assets/ecosystem/explorer.svg',
    summary: {
      es: 'Crear una capa de apoyo a decisiones para mapeo de ecosistema, descubrimiento de oportunidades y ajuste reto-mercado.',
      en: 'Create a decision-support layer for ecosystem mapping, opportunity discovery and challenge-market fit.',
    },
    outcomes: [
      { es: 'Modelo de datos', en: 'Data model' },
      { es: 'Principios de gobernanza', en: 'Governance principles' },
      { es: 'Tablero prototipo', en: 'Prototype dashboard' },
    ],
  },
  {
    id: 'transition-capital',
    title: { es: 'Rutas de capital para transición', en: 'Transition Capital Pathways' },
    category: 'Capital',
    status: 'Partnering',
    region: { es: 'Red nórdica de inversión', en: 'Nordic investment network' },
    timeframe: { es: 'Mesa redonda de aliados', en: 'Partner roundtable' },
    image: '/assets/insights/report-3.svg',
    summary: {
      es: 'Traducir pilotos aplicados en rutas creíbles de financiación combinada, compras públicas y oportunidades de venture.',
      en: 'Translate applied pilots into credible blended-finance, procurement and venture pathways.',
    },
    outcomes: [
      { es: 'Revisión de preparación de capital', en: 'Capital readiness review' },
      { es: 'Briefing para inversionistas', en: 'Investor briefing' },
      { es: 'Mapa de financiación del piloto', en: 'Pilot financing map' },
    ],
  },
  {
    id: 'talent-residency',
    title: { es: 'Residencia internacional de talento', en: 'International Talent Residency' },
    category: 'Talent',
    status: 'Scoping',
    region: { es: 'Nórdicos + talento global', en: 'Nordics + global talent' },
    timeframe: { es: 'Diseño de cohorte', en: 'Cohort design' },
    image: '/assets/hero/fjord-network.svg',
    summary: {
      es: 'Conectar talento internacional de alta señal con retos institucionales y proyectos aplicados de transformación.',
      en: 'Match high-signal international talent with institutional challenges and applied transformation projects.',
    },
    outcomes: [
      { es: 'Perfiles de talento', en: 'Talent profiles' },
      { es: 'Red de mentores', en: 'Mentor network' },
      { es: 'Matchmaking reto-equipo', en: 'Challenge-team matchmaking' },
    ],
  },
]

export const localizedEcosystemNodes: LocalizedEcosystemNode[] = [
  { label: { es: 'Personas', en: 'People' }, description: { es: 'Fundadores, operadores, investigadores y líderes cívicos.', en: 'Founders, operators, researchers and civic leaders.' }, iconKey: 'people', x: '12%', y: '24%' },
  { label: { es: 'Instituciones', en: 'Institutions' }, description: { es: 'Organismos públicos, universidades y organizaciones ancla.', en: 'Public bodies, universities and anchor organizations.' }, iconKey: 'institutions', x: '68%', y: '16%' },
  { label: { es: 'Territorios', en: 'Territories' }, description: { es: 'Regiones y lugares con agendas concretas de transición.', en: 'Regions and places with concrete transition agendas.' }, iconKey: 'territories', x: '78%', y: '62%' },
  { label: { es: 'Talento', en: 'Talent' }, description: { es: 'Talento internacional activado alrededor de misiones reales.', en: 'International talent activated around real missions.' }, iconKey: 'talent', x: '22%', y: '70%' },
  { label: { es: 'Capital', en: 'Capital' }, description: { es: 'Financiación, compras y rutas de inversión.', en: 'Funding, procurement and investment pathways.' }, iconKey: 'capital', x: '46%', y: '82%' },
  { label: { es: 'Innovación aplicada', en: 'Applied Innovation' }, description: { es: 'Pilotos, prototipos y modelos operativos.', en: 'Pilots, prototypes and operating models.' }, iconKey: 'innovation', x: '46%', y: '40%' },
]

export const localizedInsights: LocalizedInsight[] = [
  {
    title: { es: 'Infraestructura estratégica de colaboración: un modelo operativo nórdico', en: 'Strategic Collaboration Infrastructure: a Nordic operating model' },
    eyebrow: { es: 'Brief de plataforma', en: 'Platform brief' },
    image: '/assets/insights/report-1.svg',
    excerpt: {
      es: 'Un marco práctico para coordinar instituciones, capital, talento y territorios alrededor de transformación aplicada.',
      en: 'A practical frame for coordinating institutions, capital, talent and territories around applied transformation.',
    },
    readTime: { es: '8 min de lectura', en: '8 min read' },
  },
  {
    title: { es: 'Inteligencia territorial para pilotos de sostenibilidad', en: 'Territorial intelligence for sustainability pilots' },
    eyebrow: { es: 'Nota de campo', en: 'Field note' },
    image: '/assets/insights/report-2.svg',
    excerpt: {
      es: 'Cómo la definición del reto, el mapeo de ecosistemas y las señales de demanda pueden reducir la fragmentación de pilotos.',
      en: 'How challenge definition, ecosystem mapping and demand signals can reduce pilot fragmentation.',
    },
    readTime: { es: '6 min de lectura', en: '6 min read' },
  },
  {
    title: { es: 'De pilotos a rutas de capital', en: 'From pilots to capital pathways' },
    eyebrow: { es: 'Vista previa de reporte', en: 'Report preview' },
    image: '/assets/insights/report-3.svg',
    excerpt: {
      es: 'Diseñar pilotos de innovación aplicada que puedan convertirse en compras, inversión y oportunidades de escala.',
      en: 'Designing applied innovation pilots that can become procurement, investment and scale opportunities.',
    },
    readTime: { es: '10 min de lectura', en: '10 min read' },
  },
]

export const localizedPartners: LocalizedPartner[] = [
  {
    name: 'Nordic Council Studio',
    type: { es: 'Aliado institucional', en: 'Institutional partner' },
    logo: '/assets/logos/nordic-council.svg',
    description: {
      es: 'Convocatoria de política pública y diseño de colaboración transfronteriza para sistemas nórdicos resilientes.',
      en: 'Policy convening and cross-border collaboration design for resilient Nordic systems.',
    },
  },
  {
    name: 'Fjord Labs',
    type: { es: 'Investigación aplicada', en: 'Applied research' },
    logo: '/assets/logos/fjord-labs.svg',
    description: {
      es: 'Investigación de sistemas, validación de campo y metodología de innovación para equipos piloto.',
      en: 'Systems research, field validation and innovation methodology for pilot teams.',
    },
  },
  {
    name: 'Arctic University Network',
    type: { es: 'Aliado de talento', en: 'Talent partner' },
    logo: '/assets/logos/arctic-university.svg',
    description: {
      es: 'Investigadores internacionales y talento de posgrado alineados con necesidades de transformación territorial.',
      en: 'International researchers and graduate talent aligned to territorial transformation needs.',
    },
  },
  {
    name: 'Green Capital Port',
    type: { es: 'Clúster industrial', en: 'Industry cluster' },
    logo: '/assets/logos/green-capital-port.svg',
    description: {
      es: 'Operadores industriales y autoridades portuarias construyendo pilotos creíbles de transición.',
      en: 'Industrial operators and port authorities building credible transition pilots.',
    },
  },
]

export const localizedStats = [
  { value: '18', label: { es: 'oportunidades piloto activas', en: 'active pilot opportunities' } },
  { value: '7', label: { es: 'países en la red temprana', en: 'countries in early network' } },
  { value: '42', label: { es: 'aliados institucionales e industriales', en: 'institutional and industry partners' } },
  { value: '120+', label: { es: 'perfiles de talento en pipeline', en: 'talent profiles in pipeline' } },
]
