/**
 * Better Call Hana - Global Universal Internationalization (i18n) Engine
 * Supported Languages: English ('en' - default), Spanish ('es'), French ('fr'), German ('de').
 * 
 * Works universally across all pages (Home, Services, Modals, Navigation, Footer).
 * Automatically reads and writes to localStorage.getItem('selectedLanguage').
 */

(function() {
  'use strict';

  var STORAGE_KEY = 'selectedLanguage';
  var BACKUP_KEY = 'bch_selected_lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de'];

  var translations = {
    en: {
      // Header & Navigation
      'nav.process': 'Process',
      'nav.services': 'Services',
      'nav.liveDemo': 'Live Demo',
      'nav.impact': 'Impact',
      'nav.contact': 'Contact',
      'nav.bookDemo': 'Book Demo',
      'nav.navigation': 'Navigation',
      'nav.bookDiscovery': 'Book Discovery Demo',
      'nav.footerNote': 'Better Call Hana © 2026 • 24/7 AI Voice Reception',
      'nav.langSelect': 'Language',

      // Hero (Home)
      'hero.badge': 'Gold Standard AI Reception',
      'hero.title1': 'Never Miss a Call',
      'hero.title2': 'Ever Again',
      'hero.description': 'The intelligent voice receptionist that answers every call, triages client requests, and books appointments 24/7.',
      'hero.cta': 'Book Free Demo',
      'hero.feature1': 'Instant Setup',
      'hero.feature2': '24/7 Availability',
      'hero.feature3': '100% Capture',

      // How It Works (Home)
      'how.badge': 'The Architecture',
      'how.title': 'How Hana Powers Your Front Desk',
      'how.description': 'Deploying our enterprise-grade voice AI is seamless. Hana integrates directly with your existing phone systems and calendar in under 48 hours.',
      'how.step1.badge': 'Smart Routing',
      'how.step1.title': 'Call Ingestion & Identification',
      'how.step1.desc': 'Hana answers immediately on ring one, identifies the caller, checks CRM history, and initiates context-aware voice conversation in natural human tone.',
      'how.step2.badge': 'Conversational AI',
      'how.step2.title': 'Intent Triage & Knowledge Base',
      'how.step2.desc': 'Using custom-trained neural models, Hana accurately answers complex FAQs, screens emergency requests, and guides callers through qualification questions.',
      'how.step3.badge': 'Automation',
      'how.step3.title': 'Instant Booking & Live Dispatch',
      'how.step3.desc': 'Appointments are booked directly into your Google/Outlook calendar. Urgent escalations are patched through to on-call staff with full audio summaries.',
      'how.dock.badge': 'The Always-On Advantage',
      'how.dock.v1': '24/7/365 Always Awake',
      'how.dock.v2': 'Zero Lag Response',
      'how.dock.v3': 'Zero Staff Burnout',
      'how.dock.v4': 'Enterprise Compliance',
      'how.dock.sub': 'Unmatched 24/7 reliability for your front desk & client workflows',

      // Video / Live Demo CTA (Home)
      'video.badge': 'Live Demo Experience',
      'video.title1': 'Hear ',
      'video.title2': 'Hana',
      'video.title3': 'Own the Call',
      'video.description': 'Step into a new era of administrative excellence. Listen to Hana masterfully navigate complex triaging workflows and secure high-value bookings with absolute professional precision.',
      'video.buttonMain': 'Listen to Audio Demo',
      'video.buttonSub': 'Neural Voice Experience',

      // Impact / ROI Section (Home)
      'impact.badge': 'Financial Analysis',
      'impact.title': 'See the Impact on Your Business',
      'impact.description': 'Missed calls aren\'t just missed conversations—they are direct leaks in patient retention and clinic revenue.',
      'impact.card1.badge': 'Traditional Front Desk',
      'impact.card1.title': 'The Cost of Waiting',
      'impact.card1.item1.title': '~30 Missed Calls / Week',
      'impact.card1.item1.desc': 'Clients hang up after 4 rings and call your competitor',
      'impact.card1.item2.title': 'Human Capacity Limitations',
      'impact.card1.item2.desc': 'Front desk staff get overwhelmed, need sick days, and take vacations',
      'impact.card1.lossLabel': 'Estimated Monthly Loss',
      'impact.card2.badge': 'The Hana Standard',
      'impact.card2.title': 'Maximum Efficiency',
      'impact.card2.item1.title': '100% Call Response Rate',
      'impact.card2.item1.desc': 'Every single call answered instantly on ring one',
      'impact.card2.item2.title': 'Indestructible Reliability',
      'impact.card2.item2.desc': 'Zero sick days, zero staff burnout, zero vacations',
      'impact.card2.item3.title': 'Instant 24/7 Availability',
      'impact.card2.item3.desc': 'After-hours, weekends, and holidays fully covered',
      'impact.card2.capturedLabel': 'Revenue Captured',
      'impact.growthLabel': 'Total Potential Business Growth',
      'impact.cta': 'Calculate Your ROI',

      // Contact (Home)
      'contact.badge': 'Instant Setup & Guarantee',
      'contact.title1': 'Ready to be the 24/7 business that ',
      'contact.title2': 'never misses a call',
      'contact.description': 'Book your live strategy session today. See a custom demo of Hana in action and discover how much revenue you can recover. Backed by our 7-Day Performance Guarantee.',
      'contact.testCta': 'Test Hana Now',
      'contact.bookCta': 'Book Setup Call',
      'contact.phone': 'Experience Hana Live: +1 (310) 906-2504',

      // Services Hero (Services Page)
      'servicesHero.title1': 'Your Digital Front Door ',
      'servicesHero.title2': 'Perfected',
      'servicesHero.description': 'We build high-performance, bespoke websites for professional businesses that demand a premium online presence.',
      'servicesHero.cta': 'Request a Web Audit',
      'servicesHero.trust1': 'Core Web Vitals 100%',
      'servicesHero.trust2': 'Custom Architectural Code',
      'servicesHero.trust3': 'Conversion-First UX',

      // Services Why Us (Services Page)
      'servicesWhy.title': 'Beautiful design is useless if it ',
      'servicesWhy.highlight': 'doesn\'t convert.',
      'servicesWhy.description': 'Most business websites are built like digital brochures—static, outdated, and slow. In today\'s market, your website is your best salesperson. We design ultra-fast, mobile-optimized, and conversion-focused websites that turn casual visitors into booked clients.',
      'servicesWhy.card1.badge': '100% Score',
      'servicesWhy.card1.title': 'Sub-Second Speed & SSR Architecture',
      'servicesWhy.card1.desc': 'Engineered with modern server-side rendering and edge optimization. Faster load times directly reduce bounce rates and capture customer attention instantly.',
      'servicesWhy.card1.footer': 'Optimized Core Web Vitals & Next.js SSR',
      'servicesWhy.card2.badge': '+340% Lift',
      'servicesWhy.card2.title': 'Zero-Friction Conversion Funnels',
      'servicesWhy.card2.desc': 'Strategic layout hierarchies, compelling call-to-actions, and friction-free booking experiences turn passive traffic into qualified inbound inquiries.',
      'servicesWhy.card2.stat': 'Visitor-to-Lead Ratio',
      'servicesWhy.card2.statVal': 'Consistently Upward',
      'servicesWhy.card2.footer': 'Direct Calendar & High-Impact Lead Routing',

      // Services Core Features (Services Page)
      'servicesCore.title': 'Crafted for Impact. ',
      'servicesCore.highlight': 'Built to Scale.',
      'servicesCore.description': 'Every layer of your web experience is calibrated for speed, aesthetics, and measurable client acquisition.',
      'servicesCore.c1.badge': 'Tailored Aesthetics',
      'servicesCore.c1.title': 'Custom UI/UX Design',
      'servicesCore.c1.desc': 'We don\'t use generic templates. Every site is custom-crafted to reflect the gold standard of your specific brand, ensuring a seamless experience for your clients.',
      'servicesCore.c1.h1': 'Bespoke brand design system',
      'servicesCore.c1.h2': 'Intuitive client journey architecture',
      'servicesCore.c1.h3': 'Fluid motion & micro-interactions',
      'servicesCore.c1.h4': 'Responsive pixel-perfect layouts',
      'servicesCore.c2.badge': 'Sub-Second Latency',
      'servicesCore.c2.title': 'Speed & Performance',
      'servicesCore.c2.desc': 'A slow site kills trust. We engineer lightweight, lightning-fast digital environments that rank higher on search engines and keep visitors engaged.',
      'servicesCore.c2.h1': 'Modern SSR & edge caching',
      'servicesCore.c2.h2': '100/100 Core Web Vitals',
      'servicesCore.c2.h3': 'Lightweight media & asset pipelines',
      'servicesCore.c2.h4': 'Top-tier technical search ranking',
      'servicesCore.c3.badge': 'Revenue Growth',
      'servicesCore.c3.title': 'Conversion Optimization',
      'servicesCore.c3.desc': 'Traffic means nothing without action. We strategically design layouts, buttons, and booking flows to maximize your lead generation and sales.',
      'servicesCore.c3.h1': 'Frictionless appointment booking',
      'servicesCore.c3.h2': 'High-intent CTA placement',
      'servicesCore.c3.h3': 'Psychological visual hierarchy',
      'servicesCore.c3.h4': 'Clear client conversion paths',

      // Services Cross-Sell Banner (Services Page)
      'servicesCross.badge': 'AI Voice Reception Synergy',
      'servicesCross.title': 'Future-Proof Your Business.',
      'servicesCross.description': 'Need more than just a website? Ask about our proprietary AI integration. We can embed premium AI receptionists directly into your business, fully automating your front desk.',
      'servicesCross.card1.title': 'Autonomous Voice Agents',
      'servicesCross.card1.desc': 'Transform missed calls into secured revenue with 24/7 intelligent voice reception, real-time qualification, and automated CRM sync.',
      'servicesCross.card1.btn': 'Learn About AI Integration',
      'servicesCross.card2.title': 'Custom Voice Architecture',
      'servicesCross.card2.desc': 'Collaborate 1-on-1 with our engineers to design bespoke conversation flows, custom knowledge bases, and multi-channel routing.',
      'servicesCross.card2.btn': 'Book AI Consultation',

      // Modals & Dialogs
      'bookingModal.title': 'Start Scaling Today',
      'bookingModal.description': 'Hana is ready to handle your front desk. Experience the AI now or book your custom setup call.',
      'bookingModal.testHana': 'Test Hana Now',
      'bookingModal.testHanaSub': '+1 (310) 906-2504',
      'bookingModal.bookCall': 'Book Setup Call',
      'bookingModal.bookCallSub': 'Select a 15-Min Time Slot',
      'bookingModal.directLine': 'Direct Line',
      'bookingModal.contactDirect': 'Contact Direct',
      'bookingModal.guarantee': '7-Day Performance Guarantee Included',

      'videoModal.title': 'Hana Voice Demo',
      'videoModal.live': 'LIVE',
      'videoModal.paused': 'PAUSED',
      'videoModal.play': 'Play',
      'videoModal.pause': 'Pause',
      'videoModal.callLive': 'Call Live',
      'videoModal.restart': 'Restart',
      'videoModal.mute': 'Mute',
      'videoModal.unmute': 'Unmute',

      'auditModal.title': 'Book Your Strategy Session',
      'auditModal.description': 'Select a dedicated time on our calendar for a 1-on-1 bespoke web architecture and conversion teardown.',
      'auditModal.badge1': '15–20 Minutes',
      'auditModal.badge2': 'Google Meet / Screen Share',
      'auditModal.badge3': 'Live Conversion Teardown',
      'auditModal.selectTime': 'Select a Time',
      'auditModal.perk1': 'Instant Google Calendar confirmation & invite',
      'auditModal.perk2': '100% confidential with zero sales obligation',

      'roiModal.title': 'ROI Calculator',
      'roiModal.description': 'Estimate the hidden revenue leaking from missed calls.',
      'roiModal.missedCallsLabel': 'Estimated Missed Calls / Week',
      'roiModal.missedCallsPlaceholder': 'e.g. 25',
      'roiModal.avgValueLabel': 'Avg. Revenue Per Client / Session ($)',
      'roiModal.avgValuePlaceholder': 'e.g. 180',
      'roiModal.lossTitle': 'Projected Revenue Loss',
      'roiModal.monthlyLoss': 'Monthly Loss',
      'roiModal.yearlyLoss': 'Yearly Loss',
      'roiModal.recoverBtn': 'Recover This Revenue with Hana',

      // Footer
      'footer.tagline': 'The premium AI voice solution for professional businesses.',
      'footer.services': 'Web Services',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',

      // Legal - Privacy Policy Page
      'privacy.title': 'Privacy Policy',
      'privacy.lastUpdated': 'Last Updated: May 2026',
      'privacy.s1.title': '1. Our Commitment to Your Privacy',
      'privacy.s1.desc': 'At Better Call Hana, we believe that AI should be a tool that empowers your business while respecting the absolute privacy of your data. Our role is to facilitate your front desk operations and help you scale efficiently, ensuring that your patient interactions are handled with the highest level of confidentiality.',
      'privacy.s2.title': '2. Data Ownership & Usage',
      'privacy.s2.desc': 'Your data is yours. We act as a service provider to facilitate your business needs. Any information collected during calls—including voice recordings, transcripts, and patient details—is used exclusively to provide the services you have requested, such as booking appointments and providing call summaries.',
      'privacy.s3.title': '3. No Training on Your Data',
      'privacy.s3.desc': "We do not use your practice's specific call data, transcripts, or patient information to train our general AI models. Your business interactions remain isolated and private to your account. We use pre-trained, secure AI technology to provide our services without compromising your data privacy.",
      'privacy.s4.title': '4. Information Security',
      'privacy.s4.desc': 'We utilize advanced security protocols, including end-to-end encryption and secure cloud infrastructure, to protect your information. Our systems are designed to ensure that only authorized users within your organization can access the data Hana processes for you.',
      'privacy.s5.title': '5. Facilitation, Not Surveillance',
      'privacy.s5.desc': 'Our objective is solely to help you get your work done and grow your company. We do not sell your data, nor do we access your information for any purpose other than providing the AI voice receptionist service you’ve entrusted us with.',
      'privacy.s6.title': '6. Contact & Transparency',
      'privacy.s6.desc': 'If you have any questions regarding how we handle your data, please contact us through the main page. We are committed to transparency and maintaining your trust as we help modernize your front desk.',

      // Legal - Terms of Service Page
      'terms.title': 'Terms of Service',
      'terms.lastUpdated': 'Last Updated: May 2026',
      'terms.s1.title': '1. Agreement to Terms',
      'terms.s1.desc': 'By using Better Call Hana, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. Our goal is to provide a seamless AI integration for your professional practice.',
      'terms.s2.title': '2. Service Description',
      'terms.s2.desc': 'Better Call Hana provides an AI-powered voice receptionist designed to answer calls, answer questions, and book appointments for professional businesses. We act as an extension of your front desk, active 24/7.',
      'terms.s3.title': '3. Use of AI Technology',
      'terms.s3.desc': 'You acknowledge that Hana is an artificial intelligence. While we strive for high accuracy and professionality, we do not guarantee that the service will be error-free at all times. Users are responsible for reviewing appointment bookings in their own systems.',
      'terms.s4.title': '4. Trial Period',
      'terms.s4.desc': 'We offer a 7-day free trial to experience the impact on your business. Following the trial period, subscription fees will apply as agreed upon during the premium sign-up process.',
      'terms.s5.title': '5. Limitation of Liability',
      'terms.s5.desc': 'Better Call Hana shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the service. We provide the tools for growth, but final business decisions remain with the owner.',
      'terms.s6.title': '6. Modifications',
      'terms.s6.desc': 'We reserve the right to modify these terms at any time. Your continued use of the service constitutes acceptance of updated terms. We are committed to transparency as our technology evolves.'
    },

    es: {
      // Header & Navigation
      'nav.process': 'Proceso',
      'nav.services': 'Servicios',
      'nav.liveDemo': 'Demo en Vivo',
      'nav.impact': 'Impacto',
      'nav.contact': 'Contacto',
      'nav.bookDemo': 'Reservar Demo',
      'nav.navigation': 'Navegación',
      'nav.bookDiscovery': 'Reservar Demo de Descubrimiento',
      'nav.footerNote': 'Better Call Hana © 2026 • Recepción de Voz con IA 24/7',
      'nav.langSelect': 'Idioma',

      // Hero (Home)
      'hero.badge': 'El Estándar de Oro en Recepción IA',
      'hero.title1': 'Nunca Pierda una Llamada',
      'hero.title2': 'Nunca Más',
      'hero.description': 'La recepcionista de voz inteligente que atiende cada llamada, clasifica solicitudes y agenda citas las 24 horas, los 7 días de la semana.',
      'hero.cta': 'Reservar Demo Gratis',
      'hero.feature1': 'Configuración Instantánea',
      'hero.feature2': 'Disponibilidad 24/7',
      'hero.feature3': '100% de Captura',

      // How It Works (Home)
      'how.badge': 'La Arquitectura',
      'how.title': 'Cómo Hana Impulsa su Recepción',
      'how.description': 'Implementar nuestra IA de voz empresarial es fluido. Hana se integra directamente con sus líneas telefónicas y calendario en menos de 48 horas.',
      'how.step1.badge': 'Enrutamiento Inteligente',
      'how.step1.title': 'Recepción e Identificación de Llamadas',
      'how.step1.desc': 'Hana responde de inmediato al primer tono, identifica a la persona, consulta el historial de CRM e inicia una conversación natural y empática.',
      'how.step2.badge': 'IA Conversacional',
      'how.step2.title': 'Clasificación de Intención y Base de Datos',
      'how.step2.desc': 'Con modelos neuronales entrenados a medida, responde preguntas frecuentes complejas, filtra emergencias y guía a los clientes.',
      'how.step3.badge': 'Automatización',
      'how.step3.title': 'Reserva Instantánea y Despacho en Vivo',
      'how.step3.desc': 'Las citas se agendan directamente en su calendario Google u Outlook. Las emergencias se transfieren de inmediato al personal de turno.',
      'how.dock.badge': 'La Ventaja Siempre Activa',
      'how.dock.v1': '24/7/365 Siempre Despierta',
      'how.dock.v2': 'Respuesta Sin Retardo',
      'how.dock.v3': 'Cero Fatiga de Personal',
      'how.dock.v4': 'Cumplimiento Empresarial',
      'how.dock.sub': 'Fiabilidad inigualable 24/7 para su recepción y flujo de clientes',

      // Video / Live Demo CTA (Home)
      'video.badge': 'Experiencia de Demo en Vivo',
      'video.title1': 'Escuche a ',
      'video.title2': 'Hana',
      'video.title3': 'Dominar la Llamada',
      'video.description': 'Entre en una nueva era de excelencia administrativa. Escuche a Hana gestionar magistralmente flujos complejos de triaje y asegurar reservas de alto valor con absoluta precisión profesional.',
      'video.buttonMain': 'Escuchar Demo de Audio',
      'video.buttonSub': 'Experiencia de Voz Neuronal',

      // Impact / ROI Section (Home)
      'impact.badge': 'Análisis Financiero',
      'impact.title': 'Vea el Impacto en su Negocio',
      'impact.description': 'Las llamadas perdidas no son solo conversaciones perdidas: son fugas directas en la retención de pacientes e ingresos de la clínica.',
      'impact.card1.badge': 'Recepción Tradicional',
      'impact.card1.title': 'El Costo de Esperar',
      'impact.card1.item1.title': '~30 Llamadas Perdidas / Semana',
      'impact.card1.item1.desc': 'Los clientes cuelgan al cuarto tono y llaman a su competencia',
      'impact.card1.item2.title': 'Límites de Capacidad Humana',
      'impact.card1.item2.desc': 'El personal se satura, enferma y toma vacaciones',
      'impact.card1.lossLabel': 'Pérdida Mensual Estimada',
      'impact.card2.badge': 'El Estándar Hana',
      'impact.card2.title': 'Máxima Eficiencia',
      'impact.card2.item1.title': '100% Tasa de Respuesta',
      'impact.card2.item1.desc': 'Cada llamada es atendida al primer tono sin demora',
      'impact.card2.item2.title': 'Confiabilidad Total',
      'impact.card2.item2.desc': 'Cero días por enfermedad, cero agotamiento, cero pausas',
      'impact.card2.item3.title': 'Disponibilidad Instantánea 24/7',
      'impact.card2.item3.desc': 'Noches, fines de semana y festivos cubiertos al 100%',
      'impact.card2.capturedLabel': 'Ingresos Capturados',
      'impact.growthLabel': 'Crecimiento Comercial Potencial',
      'impact.cta': 'Calcular su ROI',

      // Contact (Home)
      'contact.badge': 'Configuración Inmediata y Garantía',
      'contact.title1': '¿Listo para ser la empresa 24/7 que ',
      'contact.title2': 'nunca pierde una llamada',
      'contact.description': 'Reserve su sesión estratégica hoy. Vea a Hana en acción y descubra cuánto dinero puede recuperar. Respaldado por nuestra Garantía de Rendimiento de 7 Días.',
      'contact.testCta': 'Probar a Hana Ahora',
      'contact.bookCta': 'Reservar Llamada de Configuración',
      'contact.phone': 'Pruebe a Hana en Vivo: +1 (310) 906-2504',

      // Services Hero (Services Page)
      'servicesHero.title1': 'Su Entrada Digital ',
      'servicesHero.title2': 'Perfeccionada',
      'servicesHero.description': 'Creamos sitios web a medida y de alto rendimiento para empresas profesionales que exigen una presencia online de primer nivel.',
      'servicesHero.cta': 'Solicitar Auditoría Web',
      'servicesHero.trust1': 'Core Web Vitals 100%',
      'servicesHero.trust2': 'Código Arquitectónico a Medida',
      'servicesHero.trust3': 'UX Centrado en Conversión',

      // Services Why Us (Services Page)
      'servicesWhy.title': 'El diseño hermoso es inútil si ',
      'servicesWhy.highlight': 'no convierte.',
      'servicesWhy.description': 'La mayoría de sitios web se construyen como folletos digitales: estáticos, obsoletos y lentos. Su sitio web debe ser su mejor vendedor. Diseñamos webs ultrarrápidas y optimizadas para móviles que convierten visitantes en clientes reservados.',
      'servicesWhy.card1.badge': 'Puntuación 100%',
      'servicesWhy.card1.title': 'Velocidad Sub-Segundo y Arquitectura SSR',
      'servicesWhy.card1.desc': 'Diseñado con renderizado en servidor moderno y optimización en el borde. Menor tiempo de carga reduce el rebote y capta clientes al instante.',
      'servicesWhy.card1.footer': 'Core Web Vitals optimizados y Next.js SSR',
      'servicesWhy.card2.badge': '+340% Incremento',
      'servicesWhy.card2.title': 'Embudos de Conversión Sin Fricción',
      'servicesWhy.card2.desc': 'Jerarquías estratégicas, llamadas a la acción directas y reservas sin fricción convierten el tráfico pasivo en consultas cualificadas.',
      'servicesWhy.card2.stat': 'Proporción Visitante a Lead',
      'servicesWhy.card2.statVal': 'En Aumento Continuo',
      'servicesWhy.card2.footer': 'Calendario directo y enrutamiento de alta conversión',

      // Services Core Features (Services Page)
      'servicesCore.title': 'Diseñado para Impactar. ',
      'servicesCore.highlight': 'Construido para Escalar.',
      'servicesCore.description': 'Cada detalle de su experiencia web está calibrado para velocidad, estética y adquisición medible de clientes.',
      'servicesCore.c1.badge': 'Estética a Medida',
      'servicesCore.c1.title': 'Diseño UI/UX Personalizado',
      'servicesCore.c1.desc': 'No usamos plantillas genéricas. Cada sitio se elabora a medida para reflejar el estándar de oro de su marca.',
      'servicesCore.c1.h1': 'Sistema de diseño de marca a medida',
      'servicesCore.c1.h2': 'Arquitectura intuitiva del recorrido del cliente',
      'servicesCore.c1.h3': 'Animaciones y microinteracciones fluidas',
      'servicesCore.c1.h4': 'Diseños adaptables y perfectos al píxel',
      'servicesCore.c2.badge': 'Latencia Sub-Segundo',
      'servicesCore.c2.title': 'Velocidad y Rendimiento',
      'servicesCore.c2.desc': 'Un sitio lento destruye la confianza. Desarrollamos entornos ultrarrápidos que posicionan mejor y retienen visitas.',
      'servicesCore.c2.h1': 'SSR moderno y caché en el borde',
      'servicesCore.c2.h2': '100/100 Core Web Vitals',
      'servicesCore.c2.h3': 'Optimización de recursos y multimedia ligera',
      'servicesCore.c2.h4': 'Excelente posicionamiento técnico SEO',
      'servicesCore.c3.badge': 'Crecimiento de Ingresos',
      'servicesCore.c3.title': 'Optimización de Conversión',
      'servicesCore.c3.desc': 'El tráfico no sirve de nada sin acción. Diseñamos estratégicamente la estructura y los flujos de reserva para maximizar sus ventas.',
      'servicesCore.c3.h1': 'Reserva de citas sin fricción',
      'servicesCore.c3.h2': 'Ubicación estratégica de llamadas a la acción',
      'servicesCore.c3.h3': 'Jerarquía visual psicológica',
      'servicesCore.c3.h4': 'Rutas claras de conversión del cliente',

      // Services Cross-Sell Banner (Services Page)
      'servicesCross.badge': 'Sinergia de Recepción por Voz IA',
      'servicesCross.title': 'Prepare su Negocio para el Futuro.',
      'servicesCross.description': '¿Necesita más que un sitio web? Pregunte por nuestra integración de IA patentada. Podemos integrar recepcionistas de IA en su negocio para automatizar su recepción.',
      'servicesCross.card1.title': 'Agentes de Voz Autónomos',
      'servicesCross.card1.desc': 'Transforme llamadas perdidas en ingresos asegurados con recepción de voz inteligente 24/7, calificación en tiempo real y sincronización con CRM.',
      'servicesCross.card1.btn': 'Conocer la Integración de IA',
      'servicesCross.card2.title': 'Arquitectura de Voz Personalizada',
      'servicesCross.card2.desc': 'Colabore directamente con nuestros ingenieros para diseñar flujos de conversación a medida, bases de conocimiento y enrutamiento.',
      'servicesCross.card2.btn': 'Reservar Consulta de IA',

      // Modals & Dialogs
      'bookingModal.title': 'Comience a Escalar Hoy',
      'bookingModal.description': 'Hana está lista para atender su recepción. Pruebe la IA ahora o reserve su llamada de configuración.',
      'bookingModal.testHana': 'Probar a Hana Ahora',
      'bookingModal.testHanaSub': '+1 (310) 906-2504',
      'bookingModal.bookCall': 'Reservar Llamada de Configuración',
      'bookingModal.bookCallSub': 'Seleccione un Turno de 15 Min',
      'bookingModal.directLine': 'Línea Directa',
      'bookingModal.contactDirect': 'Contacto Directo',
      'bookingModal.guarantee': 'Garantía de Rendimiento de 7 Días Incluida',

      'videoModal.title': 'Demostración de Voz de Hana',
      'videoModal.live': 'EN VIVO',
      'videoModal.paused': 'PAUSADO',
      'videoModal.play': 'Reproducir',
      'videoModal.pause': 'Pausar',
      'videoModal.callLive': 'Llamar en Vivo',
      'videoModal.restart': 'Reiniciar',
      'videoModal.mute': 'Silenciar',
      'videoModal.unmute': 'Activar sonido',

      'auditModal.title': 'Reserve su Sesión Estratégica',
      'auditModal.description': 'Seleccione un horario en nuestro calendario para un análisis 1 a 1 de su arquitectura web y conversión.',
      'auditModal.badge1': '15–20 Minutos',
      'auditModal.badge2': 'Google Meet / Pantalla Compartida',
      'auditModal.badge3': 'Análisis de Conversión en Vivo',
      'auditModal.selectTime': 'Seleccionar Horario',
      'auditModal.perk1': 'Confirmación instantánea en Google Calendar',
      'auditModal.perk2': '100% confidencial y sin compromiso de compra',

      'roiModal.title': 'Calculadora de ROI',
      'roiModal.description': 'Estime los ingresos ocultos que pierde por llamadas no atendidas.',
      'roiModal.missedCallsLabel': 'Llamadas Perdidas Estimadas / Semana',
      'roiModal.missedCallsPlaceholder': 'ej. 25',
      'roiModal.avgValueLabel': 'Ingreso Promedio por Cliente / Sesión ($)',
      'roiModal.avgValuePlaceholder': 'ej. 180',
      'roiModal.lossTitle': 'Pérdida de Ingresos Proyectada',
      'roiModal.monthlyLoss': 'Pérdida Mensual',
      'roiModal.yearlyLoss': 'Pérdida Anual',
      'roiModal.recoverBtn': 'Recuperar Estos Ingresos con Hana',

      // Footer
      'footer.tagline': 'La solución de voz con IA premium para empresas profesionales.',
      'footer.services': 'Servicios Web',
      'footer.privacy': 'Política de Privacidad',
      'footer.terms': 'Términos de Servicio',

      // Legal - Privacy Policy Page
      'privacy.title': 'Política de Privacidad',
      'privacy.lastUpdated': 'Última Actualización: Mayo 2026',
      'privacy.s1.title': '1. Nuestro Compromiso con su Privacidad',
      'privacy.s1.desc': 'En Better Call Hana, creemos que la IA debe ser una herramienta que potencie su negocio respetando la privacidad absoluta de sus datos. Nuestra función es facilitar las operaciones de su recepción y ayudarle a escalar eficientemente, garantizando que las interacciones con sus pacientes se gestionen con el más alto nivel de confidencialidad.',
      'privacy.s2.title': '2. Propiedad y Uso de los Datos',
      'privacy.s2.desc': 'Sus datos le pertenecen. Actuamos como un proveedor de servicios para facilitar las necesidades de su negocio. Cualquier información recopilada durante las llamadas —incluidas grabaciones de voz, transcripciones y datos de pacientes— se utiliza exclusivamente para prestar los servicios solicitados, como agendar citas y generar resúmenes de llamadas.',
      'privacy.s3.title': '3. Sin Entrenamiento con sus Datos',
      'privacy.s3.desc': 'No utilizamos los datos de llamadas, transcripciones o información de pacientes de su consulta para entrenar nuestros modelos generales de IA. Las interacciones de su empresa permanecen aisladas y privadas en su cuenta. Empleamos tecnología de IA segura y preentrenada sin comprometer su privacidad.',
      'privacy.s4.title': '4. Seguridad de la Información',
      'privacy.s4.desc': 'Implementamos protocolos de seguridad avanzados, incluyendo cifrado de extremo a extremo e infraestructura en la nube protegida, para salvaguardar su información. Nuestros sistemas garantizan que solo los usuarios autorizados de su organización puedan acceder a los datos que Hana procesa.',
      'privacy.s5.title': '5. Facilitación, no Vigilancia',
      'privacy.s5.desc': 'Nuestro único objetivo es ayudarle a realizar su trabajo y hacer crecer su empresa. No vendemos sus datos ni accedemos a su información con ningún fin que no sea prestar el servicio de recepcionista de voz con IA que nos ha confiado.',
      'privacy.s6.title': '6. Contacto y Transparencia',
      'privacy.s6.desc': 'Si tiene alguna pregunta sobre cómo gestionamos sus datos, contáctenos a través de la página principal. Estamos comprometidos con la transparencia y con preservar su confianza mientras modernizamos su recepción.',

      // Legal - Terms of Service Page
      'terms.title': 'Términos del Servicio',
      'terms.lastUpdated': 'Última Actualización: Mayo 2026',
      'terms.s1.title': '1. Aceptación de los Términos',
      'terms.s1.desc': 'Al utilizar Better Call Hana, usted acepta quedar vinculado por estos Términos del Servicio. Si no está de acuerdo, por favor no utilice nuestros servicios. Nuestro objetivo es ofrecer una integración de IA fluida para su práctica profesional.',
      'terms.s2.title': '2. Descripción del Servicio',
      'terms.s2.desc': 'Better Call Hana ofrece un recepcionista de voz con IA diseñado para responder llamadas, contestar dudas y programar citas para empresas y profesionales. Actuamos como una extensión de su recepción, activos 24/7.',
      'terms.s3.title': '3. Uso de Tecnología de IA',
      'terms.s3.desc': 'Usted reconoce que Hana es una inteligencia artificial. Aunque buscamos la máxima precisión y profesionalismo, no garantizamos que el servicio esté libre de errores en todo momento. Los usuarios son responsables de verificar las reservas de citas en sus propios sistemas.',
      'terms.s4.title': '4. Período de Prueba',
      'terms.s4.desc': 'Ofrecemos una prueba gratuita de 7 días para experimentar el impacto en su negocio. Tras el período de prueba, se aplicarán las tarifas de suscripción acordadas durante el registro premium.',
      'terms.s5.title': '5. Limitación de Responsabilidad',
      'terms.s5.desc': 'Better Call Hana no será responsable de ningún daño indirecto, incidental o consecuente que surja del uso del servicio. Proporcionamos las herramientas para el crecimiento, pero las decisiones comerciales finales corresponden al titular del negocio.',
      'terms.s6.title': '6. Modificaciones',
      'terms.s6.desc': 'Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado del servicio constituye la aceptación de los términos actualizados. Estamos comprometidos con la transparencia a medida que evoluciona nuestra tecnología.'
    },

    fr: {
      // Header & Navigation
      'nav.process': 'Processus',
      'nav.services': 'Services',
      'nav.liveDemo': 'Démo en Direct',
      'nav.impact': 'Impact',
      'nav.contact': 'Contact',
      'nav.bookDemo': 'Réserver Démo',
      'nav.navigation': 'Navigation',
      'nav.bookDiscovery': 'Réserver une Démo Découverte',
      'nav.footerNote': 'Better Call Hana © 2026 • Réception Vocale par IA 24h/24',
      'nav.langSelect': 'Langue',

      // Hero (Home)
      'hero.badge': "L'Excellence de la Réception IA",
      'hero.title1': 'Ne Manquez Plus Aucun Appel',
      'hero.title2': 'À Tout Jamais',
      'hero.description': 'La réceptionniste vocale intelligente qui répond à chaque appel, qualifie les demandes et planifie vos rendez-vous 24h/24 et 7j/7.',
      'hero.cta': 'Réserver Démo Gratuite',
      'hero.feature1': 'Installation Rapide',
      'hero.feature2': 'Disponibilité 24/7',
      'hero.feature3': '100% de Prise en Charge',

      // How It Works (Home)
      'how.badge': 'Architecture',
      'how.title': 'Comment Hana Transforme Votre Accueil',
      'how.description': 'Le déploiement de notre IA vocale est rapide et sans friction. Hana se connecte à vos lignes téléphoniques et votre agenda en moins de 48h.',
      'how.step1.badge': 'Routage Intelligent',
      'how.step1.title': 'Prise en Charge et Identification',
      'how.step1.desc': 'Hana décroche immédiatement dès la première sonnerie, identifie l’interlocuteur et engage une conversation fluide et chaleureuse.',
      'how.step2.badge': 'IA Conversationnelle',
      'how.step2.title': 'Qualification et Base de Connaissances',
      'how.step2.desc': 'Grâce à des modèles neuronaux entraînés sur mesure, elle répond avec précision aux questions fréquentes et filtre les urgences.',
      'how.step3.badge': 'Automatisation',
      'how.step3.title': 'Prise de Rendez-vous & Transfert',
      'how.step3.desc': 'Les créneaux sont insérés directement dans Google Calendar ou Outlook. Les urgences sont redirigées instantanément vers votre équipe.',
      'how.dock.badge': 'L\'Avantage Permanent',
      'how.dock.v1': '24/7/365 Toujours Active',
      'how.dock.v2': 'Réponse Sans Latence',
      'how.dock.v3': 'Zéro Épuisement d\'Équipe',
      'how.dock.v4': 'Conformité Entreprise',
      'how.dock.sub': 'Fiabilité absolue 24h/24 pour votre accueil téléphonique et vos clients',

      // Video / Live Demo CTA (Home)
      'video.badge': 'Expérience de Démo en Direct',
      'video.title1': 'Écoutez ',
      'video.title2': 'Hana',
      'video.title3': "Maîtriser l'Appel",
      'video.description': "Entrez dans une nouvelle ère d'excellence administrative. Écoutez Hana diriger magistralement des flux de tri complexes et sécuriser des réservations à haute valeur avec une précision professionnelle absolue.",
      'video.buttonMain': 'Écouter la Démo Audio',
      'video.buttonSub': 'Expérience de Voix Neuronale',

      // Impact / ROI Section (Home)
      'impact.badge': 'Bilan Chiffré',
      'impact.title': 'Un Impact Mesurable sur Votre Activité',
      'impact.description': 'Découvrez comment une réception vocale automatisée élimine les pertes de revenus, réduit vos charges et offre un service client irréprochable.',
      'impact.card1.badge': 'Accueil Traditionnel',
      'impact.card1.title': 'Le Coût de l’Attente',
      'impact.card1.item1.title': '~30 Appels Manqués / Semaine',
      'impact.card1.item1.desc': 'Les prospects raccrochent après 4 sonneries et appellent vos concurrents',
      'impact.card1.item2.title': 'Limites de Capacité Humaine',
      'impact.card1.item2.desc': 'Le personnel est surchargé, tombe malade ou prend des congés',
      'impact.card1.lossLabel': 'Perte Mensuelle Estimée',
      'impact.card2.badge': 'Le Standard Hana',
      'impact.card2.title': 'Efficacité Maximale',
      'impact.card2.item1.title': '100% de Taux de Réponse',
      'impact.card2.item1.desc': 'Chaque appel est décroché instantanément dès la 1ère sonnerie',
      'impact.card2.item2.title': 'Fiabilité Infaillible',
      'impact.card2.item2.desc': 'Zéro arrêt maladie, zéro burn-out, zéro interruption',
      'impact.card2.item3.title': 'Disponibilité Totale 24h/24',
      'impact.card2.item3.desc': 'Soirs, week-ends et jours fériés pris en charge en continu',
      'impact.card2.capturedLabel': 'Chiffre d’Affaires Préservé',
      'impact.growthLabel': 'Potentiel de Croissance Globale',
      'impact.cta': 'Calculer Mon ROI',

      // Contact (Home)
      'contact.badge': 'Installation Immédiate & Garantie',
      'contact.title1': 'Prêt à devenir l’entreprise 24/7 qui ',
      'contact.title2': 'ne manque aucun appel',
      'contact.description': 'Planifiez votre session stratégique dès aujourd’hui. Découvrez Hana en direct et évaluez votre potentiel de croissance. Garanti 7 jours satisfait ou remboursé.',
      'contact.testCta': 'Tester Hana Maintenant',
      'contact.bookCta': 'Planifier l’Installation',
      'contact.phone': 'Ligne Démo en Direct : +1 (310) 906-2504',

      // Services Hero (Services Page)
      'servicesHero.title1': 'Votre Vitrine Digitale ',
      'servicesHero.title2': 'Perfectionnée',
      'servicesHero.description': 'Nous concevons des sites web ultra-performants et sur-mesure pour les entreprises professionnelles qui exigent une présence en ligne irréprochable.',
      'servicesHero.cta': 'Demander un Audit Web',
      'servicesHero.trust1': 'Core Web Vitals 100%',
      'servicesHero.trust2': 'Code Architectural Sur-Mesure',
      'servicesHero.trust3': 'UX Orientée Conversion',

      // Services Why Us (Services Page)
      'servicesWhy.title': 'Un beau design est inutile s\'il ',
      'servicesWhy.highlight': 'ne convertit pas.',
      'servicesWhy.description': 'La plupart des sites web sont conçus comme de simples brochures numériques : statiques et lents. Votre site doit être votre meilleur commercial. Nous créons des sites ultra-rapides et optimisés pour mobile qui convertissent vos visiteurs en clients confirmés.',
      'servicesWhy.card1.badge': 'Score 100%',
      'servicesWhy.card1.title': 'Vitesse Éclair & Architecture SSR',
      'servicesWhy.card1.desc': 'Développé avec un rendu serveur moderne et une optimisation edge. Des temps de chargement ultra-courts réduisent le taux de rebond et captent l\'attention.',
      'servicesWhy.card1.footer': 'Core Web Vitals optimisés & Next.js SSR',
      'servicesWhy.card2.badge': '+340% de Gain',
      'servicesWhy.card2.title': 'Tunnels de Conversion Sans Friction',
      'servicesWhy.card2.desc': 'Hiérarchies stratégiques, appels à l\'action percutants et réservation fluide transforment le trafic passif en demandes qualifiées.',
      'servicesWhy.card2.stat': 'Ratio Visiteurs / Prospects',
      'servicesWhy.card2.statVal': 'En Hausse Constante',
      'servicesWhy.card2.footer': 'Prise de rendez-vous directe & routage qualifié',

      // Services Core Features (Services Page)
      'servicesCore.title': 'Conçu pour l\'Impact. ',
      'servicesCore.highlight': 'Taillé pour Grandir.',
      'servicesCore.description': 'Chaque élément de votre site est pensé pour la rapidité, l\'élégance et l\'acquisition mesurable de nouveaux clients.',
      'servicesCore.c1.badge': 'Esthétique Sur-Mesure',
      'servicesCore.c1.title': 'Design UI/UX Personnalisé',
      'servicesCore.c1.desc': 'Aucun modèle préfabriqué. Chaque site est conçu sur-mesure pour refléter l\'excellence de votre marque.',
      'servicesCore.c1.h1': 'Design system de marque sur-mesure',
      'servicesCore.c1.h2': 'Architecture de parcours client intuitive',
      'servicesCore.c1.h3': 'Micro-interactions et animations fluides',
      'servicesCore.c1.h4': 'Mises en page responsives au pixel près',
      'servicesCore.c2.badge': 'Latence Inférieure à la Seconde',
      'servicesCore.c2.title': 'Vitesse & Performance',
      'servicesCore.c2.desc': 'Un site lent détruit la confiance. Nous créons des environnements numériques ultra-rapides qui boostent le référencement et retiennent vos prospects.',
      'servicesCore.c2.h1': 'SSR moderne et mise en cache edge',
      'servicesCore.c2.h2': '100/100 Core Web Vitals',
      'servicesCore.c2.h3': 'Médias et assets ultra-légers',
      'servicesCore.c2.h4': 'Référencement technique d\'élite',
      'servicesCore.c3.badge': 'Croissance du CA',
      'servicesCore.c3.title': 'Optimisation de la Conversion',
      'servicesCore.c3.desc': 'Le trafic ne sert à rien sans action concrète. Nous organisons les structures et les boutons d\'action pour maximiser vos prises de contact.',
      'servicesCore.c3.h1': 'Prise de rendez-vous sans friction',
      'servicesCore.c3.h2': 'Placement stratégique des CTA',
      'servicesCore.c3.h3': 'Hiérarchie visuelle psychologique',
      'servicesCore.c3.h4': 'Parcours de conversion clairs et directs',

      // Services Cross-Sell Banner (Services Page)
      'servicesCross.badge': 'Synergie Accueil Téléphonique IA',
      'servicesCross.title': 'Préparez Votre Entreprise pour l\'Avenir.',
      'servicesCross.description': 'Besoin de plus qu\'un simple site internet ? Découvrez notre intégration d\'IA exclusive. Nous intégrons des réceptionnistes IA au cœur de votre activité pour automatiser votre accueil.',
      'servicesCross.card1.title': 'Agents Vocaux Autonomes',
      'servicesCross.card1.desc': 'Transformez vos appels manqués en chiffre d\'affaires garanti grâce à un accueil vocal intelligent 24/7, une qualification instantanée et la synchronisation CRM.',
      'servicesCross.card1.btn': 'Découvrir l\'Intégration IA',
      'servicesCross.card2.title': 'Architecture Vocale Personnalisée',
      'servicesCross.card2.desc': 'Travaillez avec nos ingénieurs pour élaborer des scénarios d\'échange sur-mesure, des bases de connaissances dédiées et un routage précis.',
      'servicesCross.card2.btn': 'Réserver une Consultation IA',

      // Modals & Dialogs
      'bookingModal.title': 'Commencez à Vous Développer Dès Aujourd\'hui',
      'bookingModal.description': 'Hana est prête à gérer votre standard. Testez l\'IA immédiatement ou planifiez votre appel d\'installation.',
      'bookingModal.testHana': 'Tester Hana Maintenant',
      'bookingModal.testHanaSub': '+1 (310) 906-2504',
      'bookingModal.bookCall': 'Planifier l’Installation',
      'bookingModal.bookCallSub': 'Choisissez un créneau de 15 min',
      'bookingModal.directLine': 'Ligne Directe',
      'bookingModal.contactDirect': 'Contact Direct',
      'bookingModal.guarantee': 'Garantie de Performance de 7 Jours Incluse',

      'videoModal.title': 'Démo Vocale Hana',
      'videoModal.live': 'EN DIRECT',
      'videoModal.paused': 'EN PAUSE',
      'videoModal.play': 'Lecture',
      'videoModal.pause': 'Pause',
      'videoModal.callLive': 'Appeler en Direct',
      'videoModal.restart': 'Redémarrer',
      'videoModal.mute': 'Couper le son',
      'videoModal.unmute': 'Activer le son',

      'auditModal.title': 'Réservez Votre Session Stratégique',
      'auditModal.description': 'Choisissez un créneau dans notre calendrier pour une analyse sur-mesure de votre architecture web et de votre conversion.',
      'auditModal.badge1': '15–20 Minutes',
      'auditModal.badge2': 'Google Meet / Partage d’Écran',
      'auditModal.badge3': 'Audit de Conversion en Direct',
      'auditModal.selectTime': 'Choisir un Créneau',
      'auditModal.perk1': 'Confirmation instantanée Google Calendar',
      'auditModal.perk2': '100% confidentiel et sans engagement commercial',

      'roiModal.title': 'Calculateur de ROI',
      'roiModal.description': 'Estimez les revenus perdus à cause des appels téléphoniques non décrochés.',
      'roiModal.missedCallsLabel': 'Appels Manqués Estimés / Semaine',
      'roiModal.missedCallsPlaceholder': 'ex. 25',
      'roiModal.avgValueLabel': 'Valeur Moyenne par Client / Prestation ($)',
      'roiModal.avgValuePlaceholder': 'ex. 180',
      'roiModal.lossTitle': 'Perte de Chiffre d\'Affaires Estimée',
      'roiModal.monthlyLoss': 'Perte Mensuelle',
      'roiModal.yearlyLoss': 'Perte Annuelle',
      'roiModal.recoverBtn': 'Récupérer Ces Revenus avec Hana',

      // Footer
      'footer.tagline': 'La solution vocale par IA premium pour les professionnels exigeants.',
      'footer.services': 'Services Web',
      'footer.privacy': 'Politique de Confidentialité',
      'footer.terms': 'Conditions d’Utilisation',

      // Legal - Privacy Policy Page
      'privacy.title': 'Politique de Confidentialité',
      'privacy.lastUpdated': 'Dernière Mise à Jour : Mai 2026',
      'privacy.s1.title': '1. Notre Engagement envers Votre Confidentialité',
      'privacy.s1.desc': "Chez Better Call Hana, nous pensons que l'IA doit être un outil au service de votre activité tout en respectant la confidentialité absolue de vos données. Notre mission est de fluidifier l'accueil téléphonique de votre cabinet et de vous aider à vous développer efficacement, en veillant à ce que les échanges avec vos patients soient traités avec la plus grande discrétion.",
      'privacy.s2.title': '2. Propriété et Utilisation des Données',
      'privacy.s2.desc': "Vos données vous appartiennent. Nous agissons en tant que prestataire pour répondre aux besoins de votre entreprise. Toutes les informations collectées lors des appels — y compris les enregistrements vocaux, les transcriptions et les données patients — sont exclusivement utilisées pour fournir les services demandés, tels que la prise de rendez-vous et la synthèse des appels.",
      'privacy.s3.title': '3. Aucun Entraînement sur Vos Données',
      'privacy.s3.desc': "Nous n'utilisons pas les données d'appels, transcriptions ou informations patients de votre cabinet pour entraîner nos modèles d'IA généraux. Vos interactions professionnelles restent isolées et strictement privées sur votre compte. Nous utilisons une technologie d'IA pré-entraînée et sécurisée sans compromettre votre vie privée.",
      'privacy.s4.title': '4. Sécurité des Informations',
      'privacy.s4.desc': "Nous déployons des protocoles de sécurité avancés, comprenant le chiffrement de bout en bout et une infrastructure cloud hautement sécurisée, pour protéger vos informations. Nos systèmes garantissent que seuls les membres autorisés de votre équipe peuvent accéder aux données traitées par Hana.",
      'privacy.s5.title': '5. Facilitation, Pas de Surveillance',
      'privacy.s5.desc': "Notre objectif unique est de vous aider à travailler sereinement et à développer votre entreprise. Nous ne vendons pas vos données et nous n'accédons à vos informations pour aucun autre motif que la fourniture du service de réceptionniste IA que vous nous avez confié.",
      'privacy.s6.title': '6. Contact et Transparence',
      'privacy.s6.desc': "Si vous avez la moindre question concernant le traitement de vos données, veuillez nous contacter via la page principale. Nous nous engageons à une totale transparence pour préserver votre confiance au quotidien.",

      // Legal - Terms of Service Page
      'terms.title': "Conditions Générales d'Utilisation",
      'terms.lastUpdated': 'Dernière Mise à Jour : Mai 2026',
      'terms.s1.title': '1. Acceptation des Conditions',
      'terms.s1.desc': "En utilisant Better Call Hana, vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation. Si vous n'êtes pas d'accord, veuillez ne pas utiliser nos services. Notre objectif est d'offrir une intégration d'IA transparente à votre pratique professionnelle.",
      'terms.s2.title': '2. Description du Service',
      'terms.s2.desc': "Better Call Hana propose un réceptionniste vocal propulsé par l'IA, conçu pour répondre aux appels, renseigner vos clients et planifier des rendez-vous pour les professionnels. Nous agissons comme l'extension de votre accueil téléphonique, 24h/24 et 7j/7.",
      'terms.s3.title': "3. Utilisation de la Technologie IA",
      'terms.s3.desc': "Vous reconnaissez que Hana est une intelligence artificielle. Bien que nous visions une précision et un professionnalisme exemplaires, nous ne garantissons pas une absence totale d'erreurs en toute circonstance. Les utilisateurs sont responsables de vérifier les prises de rendez-vous dans leurs propres outils.",
      'terms.s4.title': "4. Période d'Essai",
      'terms.s4.desc': "Nous proposons un essai gratuit de 7 jours pour mesurer l'impact direct sur votre activité. À l'issue de cette période, les frais d'abonnement convenus lors de l'inscription premium s'appliqueront.",
      'terms.s5.title': '5. Limitation de Responsabilité',
      'terms.s5.desc': "Better Call Hana ne saurait être tenu responsable des dommages indirects, accessoires ou consécutifs résultant de l'utilisation du service. Nous fournissons les leviers de votre croissance, mais les décisions finales de gestion vous incombent.",
      'terms.s6.title': '6. Modifications',
      'terms.s6.desc': "Nous nous réservons le droit de modifier ces conditions à tout moment. Votre utilisation continue du service vaut acceptation des conditions mises à jour. Nous demeurons engagés dans une démarche de transparence continue."
    },

    de: {
      // Header & Navigation
      'nav.process': 'Ablauf',
      'nav.services': 'Leistungen',
      'nav.liveDemo': 'Live-Demo',
      'nav.impact': 'Wirkung',
      'nav.contact': 'Kontakt',
      'nav.bookDemo': 'Demo Buchen',
      'nav.navigation': 'Navigation',
      'nav.bookDiscovery': 'Discovery-Demo Buchen',
      'nav.footerNote': 'Better Call Hana © 2026 • 24/7 KI-Telefonempfang',
      'nav.langSelect': 'Sprache',

      // Hero (Home)
      'hero.badge': 'Der Goldstandard für KI-Telefonempfang',
      'hero.title1': 'Verpassen Sie Nie Wieder',
      'hero.title2': 'Einen Anruf',
      'hero.description': 'Die intelligente KI-Telefonistin, die jeden Anruf entgegennimmt, Kundenanfragen vorqualifiziert und Termine rund um die Uhr bucht.',
      'hero.cta': 'Kostenlose Demo Buchen',
      'hero.feature1': 'Sofortige Einrichtung',
      'hero.feature2': '24/7 Erreichbarkeit',
      'hero.feature3': '100% Annahmequote',

      // How It Works (Home)
      'how.badge': 'Die Architektur',
      'how.title': 'So Revolutioniert Hana Ihren Empfang',
      'how.description': 'Die Integration unserer KI ist einfach und schnell. Hana verbindet sich in unter 48 Stunden nahtlos mit Ihrer Telefonanlage und Ihrem Kalender.',
      'how.step1.badge': 'Intelligentes Routing',
      'how.step1.title': 'Anrufannahme & Identifikation',
      'how.step1.desc': 'Hana nimmt beim ersten Klingeln sofort ab, identifiziert den Anrufer und führt ein natürliches, professionelles Gespräch.',
      'how.step2.badge': 'Konversations-KI',
      'how.step2.title': 'Anliegen-Erkennung & Wissensbasis',
      'how.step2.desc': 'Mithilfe trainierter Sprachmodelle beantwortet sie komplexe FAQs, filtert Notfälle und qualifiziert Anfragen präzise.',
      'how.step3.badge': 'Automatisierung',
      'how.step3.title': 'Terminbuchung & Live-Weiterleitung',
      'how.step3.desc': 'Termine werden direkt in Google- oder Outlook-Kalender gebucht. Dringliche Fälle werden sofort an den Bereitschaftsdienst weitergeleitet.',
      'how.dock.badge': 'Der Immer-Erreichbar-Vorteil',
      'how.dock.v1': '24/7/365 Immer Bereit',
      'how.dock.v2': 'Verzögerungsfreie Antwort',
      'how.dock.v3': 'Keine Mitarbeiterüberlastung',
      'how.dock.v4': 'Enterprise Compliance',
      'how.dock.sub': 'Unübertroffene 24/7-Zuverlässigkeit für Ihren Empfang und Kundenkontakt',

      // Video / Live Demo CTA (Home)
      'video.badge': 'Live-Demo-Erlebnis',
      'video.title1': 'Hören Sie, wie ',
      'video.title2': 'Hana',
      'video.title3': 'das Gespräch Beherrscht',
      'video.description': 'Treten Sie ein in eine neue Ära administrativer Spitzenleistung. Hören Sie, wie Hana komplexe Triage-Abläufe meisterhaft steuert und wertvolle Buchungen mit absoluter professioneller Präzision sichert.',
      'video.buttonMain': 'Audio-Demo Anhören',
      'video.buttonSub': 'Neuronales Spracherlebnis',

      // Impact / ROI Section (Home)
      'impact.badge': 'Finanzanalyse',
      'impact.title': 'Sehen Sie die Wirkung auf Ihr Geschäft',
      'impact.description': 'Verpasste Anrufe sind nicht nur verpasste Gespräche – sie bedeuten direkten Verlust von Kunden und Umsatz.',
      'impact.card1.badge': 'Klassischer Empfang',
      'impact.card1.title': 'Die Kosten des Verpassens',
      'impact.card1.item1.title': '~30 Verpasste Anrufe / Woche',
      'impact.card1.item1.desc': 'Kunden legen nach viermaligem Klingeln auf und rufen die Konkurrenz an',
      'impact.card1.item2.title': 'Menschliche Kapazitätsgrenzen',
      'impact.card1.item2.desc': 'Mitarbeiter sind überlastet, werden krank oder haben Urlaub',
      'impact.card1.lossLabel': 'Geschätzter Monatsverlust',
      'impact.card2.badge': 'Der Hana Standard',
      'impact.card2.title': 'Maximale Effizienz',
      'impact.card2.item1.title': '100% Erreichbarkeit',
      'impact.card2.item1.desc': 'Jeder einzelne Anruf wird sofort beim 1. Klingeln entgegengenommen',
      'impact.card2.item2.title': 'Absolute Zuverlässigkeit',
      'impact.card2.item2.desc': 'Keine Krankheitstage, keine Ausfälle, keine Urlaubszeiten',
      'impact.card2.item3.title': '24/7 Rund-um-die-Uhr',
      'impact.card2.item3.desc': 'Feierabende, Wochenenden und Feiertage vollständig abgedeckt',
      'impact.card2.capturedLabel': 'Gesicherter Umsatz',
      'impact.growthLabel': 'Gesamtes Potenzial für Unternehmenswachstum',
      'impact.cta': 'Meinen ROI Berechnen',

      // Contact (Home)
      'contact.badge': 'Schnelle Einrichtung & Garantie',
      'contact.title1': 'Bereit für das 24/7-Unternehmen, das ',
      'contact.title2': 'keinen Anruf verpasst',
      'contact.description': 'Buchen Sie noch heute Ihr Strategiegespräch. Sehen Sie Hana in Aktion und sichern Sie sich unsere 7-Tage-Zufriedenheitsgarantie.',
      'contact.testCta': 'Hana Jetzt Testen',
      'contact.bookCta': 'Setup-Gespräch Buchen',
      'contact.phone': 'Hana Live Erleben: +1 (310) 906-2504',

      // Services Hero (Services Page)
      'servicesHero.title1': 'Ihr Digitales Aushängeschild ',
      'servicesHero.title2': 'Perfektioniert',
      'servicesHero.description': 'Wir entwickeln hochperformante, maßgeschneiderte Websites für anspruchsvolle Unternehmen mit höchstem Qualitätsanspruch.',
      'servicesHero.cta': 'Website-Audit Anfordern',
      'servicesHero.trust1': 'Core Web Vitals 100%',
      'servicesHero.trust2': 'Maßgeschneiderter Code',
      'servicesHero.trust3': 'Conversion-Fokussierte UX',

      // Services Why Us (Services Page)
      'servicesWhy.title': 'Schönes Design ist nutzlos, wenn es ',
      'servicesWhy.highlight': 'nicht konvertiert.',
      'servicesWhy.description': 'Die meisten Unternehmenswebsites sind bloße digitale Broschüren – statisch, veraltet und langsam. Ihre Website sollte Ihr bester Vertriebsmitarbeiter sein. Wir entwickeln blitzschnelle Websites, die Besucher gezielt in gebuchte Kunden verwandeln.',
      'servicesWhy.card1.badge': '100% Score',
      'servicesWhy.card1.title': 'Ladezeiten unter 1 Sekunde & SSR',
      'servicesWhy.card1.desc': 'Entwickelt mit moderner Server-Side-Rendering-Technologie. Schnelle Ladezeiten minimieren Absprungraten und fesseln Kunden sofort.',
      'servicesWhy.card1.footer': 'Optimierte Core Web Vitals & Next.js SSR',
      'servicesWhy.card2.badge': '+340% Zuwachs',
      'servicesWhy.card2.title': 'Reibungslose Conversion-Funnels',
      'servicesWhy.card2.desc': 'Strategische Layouts, klare Handlungsaufforderungen und mühelose Buchungsprozesse wandeln passiven Traffic in qualifizierte Anfragen um.',
      'servicesWhy.card2.stat': 'Besucher-zu-Lead-Verhältnis',
      'servicesWhy.card2.statVal': 'Konstant Steigend',
      'servicesWhy.card2.footer': 'Direkte Kalenderanbindung & qualifizierte Weiterleitung',

      // Services Core Features (Services Page)
      'servicesCore.title': 'Entwickelt für Wirkung. ',
      'servicesCore.highlight': 'Gebaut für Wachstum.',
      'servicesCore.description': 'Jede Ebene Ihrer Webpräsenz ist auf Geschwindigkeit, Ästhetik und messbare Kundengewinnung kalibriert.',
      'servicesCore.c1.badge': 'Maßgeschneiderte Ästhetik',
      'servicesCore.c1.title': 'Individuelles UI/UX-Design',
      'servicesCore.c1.desc': 'Keine Standard-Templates. Jede Website wird maßgefertigt, um die Exzellenz Ihrer Marke widerzuspiegeln.',
      'servicesCore.c1.h1': 'Individuelles Marken-Designsystem',
      'servicesCore.c1.h2': 'Intuitive Customer-Journey-Architektur',
      'servicesCore.c1.h3': 'Flüssige Mikro-Interaktionen',
      'servicesCore.c1.h4': 'Pixelgenaue responsive Layouts',
      'servicesCore.c2.badge': 'Niedrigste Latenz',
      'servicesCore.c2.title': 'Geschwindigkeit & Performance',
      'servicesCore.c2.desc': 'Eine langsame Website zerstört Vertrauen. Wir entwickeln leichtgewichtige, ultraschnelle Plattformen für top Suchmaschinen-Rankings.',
      'servicesCore.c2.h1': 'Modernes SSR & Edge Caching',
      'servicesCore.c2.h2': '100/100 Core Web Vitals',
      'servicesCore.c2.h3': 'Optimierte Medien-Pipelines',
      'servicesCore.c2.h4': 'Spitzenklasse bei technischem SEO',
      'servicesCore.c3.badge': 'Umsatzwachstum',
      'servicesCore.c3.title': 'Conversion-Optimierung',
      'servicesCore.c3.desc': 'Traffic ohne Handlung ist wertlos. Wir platzieren Buttons und Buchungsabläufe strategisch, um Ihre Lead-Generierung zu maximieren.',
      'servicesCore.c3.h1': 'Reibungslose Terminbuchung',
      'servicesCore.c3.h2': 'Platzierung kaufbereiter CTAs',
      'servicesCore.c3.h3': 'Psychologische visuelle Hierarchie',
      'servicesCore.c3.h4': 'Klare Pfade zur Kundenkonvertierung',

      // Services Cross-Sell Banner (Services Page)
      'servicesCross.badge': 'KI-Telefonempfang Synergie',
      'servicesCross.title': 'Machen Sie Ihr Unternehmen Zukunftssicher.',
      'servicesCross.description': 'Benötigen Sie mehr als eine Website? Fragen Sie nach unserer KI-Integration. Wir binden KI-Telefonassistenten direkt in Ihren Betrieb ein, um Ihren Empfang zu automatisieren.',
      'servicesCross.card1.title': 'Autonome Sprachassistenten',
      'servicesCross.card1.desc': 'Verwandeln Sie verpasste Anrufe in gesicherten Umsatz – mit 24/7 intelligentem Sprachservice, Echtzeit-Qualifizierung und CRM-Sync.',
      'servicesCross.card1.btn': 'KI-Integration Entdecken',
      'servicesCross.card2.title': 'Maßgeschneiderte Spracharchitektur',
      'servicesCross.card2.desc': 'Entwerfen Sie mit unseren Ingenieuren individuelle Gesprächsabläufe, spezifische Wissensdatenbanken und Anrufweiterleitungen.',
      'servicesCross.card2.btn': 'KI-Beratung Buchen',

      // Modals & Dialogs
      'bookingModal.title': 'Starten Sie Ihr Wachstum Noch Heute',
      'bookingModal.description': 'Hana ist bereit für Ihren Empfang. Testen Sie die KI jetzt oder buchen Sie Ihr individuelles Setup-Gespräch.',
      'bookingModal.testHana': 'Hana Jetzt Testen',
      'bookingModal.testHanaSub': '+1 (310) 906-2504',
      'bookingModal.bookCall': 'Setup-Gespräch Buchen',
      'bookingModal.bookCallSub': '15-Minuten-Termin auswählen',
      'bookingModal.directLine': 'Direktleitung',
      'bookingModal.contactDirect': 'Direktkontakt',
      'bookingModal.guarantee': 'Inklusive 7-Tage-Zufriedenheitsgarantie',

      'videoModal.title': 'Hana Sprach-Demo',
      'videoModal.live': 'LIVE',
      'videoModal.paused': 'PAUSE',
      'videoModal.play': 'Abspielen',
      'videoModal.pause': 'Pause',
      'videoModal.callLive': 'Live Anrufen',
      'videoModal.restart': 'Neu starten',
      'videoModal.mute': 'Stummschalten',
      'videoModal.unmute': 'Ton einschalten',

      'auditModal.title': 'Strategiegespräch Buchen',
      'auditModal.description': 'Wählen Sie einen Termin in unserem Kalender für eine 1-zu-1-Analyse Ihrer Web-Architektur und Conversion-Chancen.',
      'auditModal.badge1': '15–20 Minuten',
      'auditModal.badge2': 'Google Meet / Bildschirmübertragung',
      'auditModal.badge3': 'Live Conversion-Analyse',
      'auditModal.selectTime': 'Termin Wählen',
      'auditModal.perk1': 'Sofortige Google Calendar Bestätigung & Einladung',
      'auditModal.perk2': '100% vertraulich und ohne Kaufverpflichtung',

      'roiModal.title': 'ROI-Rechner',
      'roiModal.description': 'Berechnen Sie den verpassten Umsatz durch unbeantwortete Anrufe.',
      'roiModal.missedCallsLabel': 'Geschätzte Verpasste Anrufe / Woche',
      'roiModal.missedCallsPlaceholder': 'z.B. 25',
      'roiModal.avgValueLabel': 'Durchschnittlicher Umsatz pro Kunde / Auftrag ($)',
      'roiModal.avgValuePlaceholder': 'z.B. 180',
      'roiModal.lossTitle': 'Prognostizierter Umsatzverlust',
      'roiModal.monthlyLoss': 'Monatlicher Verlust',
      'roiModal.yearlyLoss': 'Jährlicher Verlust',
      'roiModal.recoverBtn': 'Diesen Umsatz mit Hana Sichern',

      // Footer
      'footer.tagline': 'Die erstklassige KI-Sprachlösung für zukunftsorientierte Unternehmen.',
      'footer.services': 'Web-Services',
      'footer.privacy': 'Datenschutzerklärung',
      'footer.terms': 'Nutzungsbedingungen',

      // Legal - Privacy Policy Page
      'privacy.title': 'Datenschutzerklärung',
      'privacy.lastUpdated': 'Zuletzt aktualisiert: Mai 2026',
      'privacy.s1.title': '1. Unser Bekenntnis zu Ihrem Datenschutz',
      'privacy.s1.desc': 'Bei Better Call Hana sind wir überzeugt, dass KI ein Werkzeug sein muss, das Ihr Unternehmen stärkt und gleichzeitig die absolute Privatsphäre Ihrer Daten wahrt. Unsere Aufgabe ist es, Ihren Empfang zu entlasten und Ihnen ein effizientes Wachstum zu ermöglichen – mit höchster Vertraulichkeit bei allen Patientenkontakten.',
      'privacy.s2.title': '2. Dateneigentum & Nutzung',
      'privacy.s2.desc': 'Ihre Daten gehören ausschließlich Ihnen. Wir agieren als Dienstleister zur Unterstützung Ihrer betrieblichen Anforderungen. Alle bei Anrufen erfassten Informationen – einschließlich Sprachaufnahmen, Transkripten und Patientendaten – werden ausschließlich zur Erbringung der von Ihnen gewünschten Dienste (z. B. Terminbuchungen und Gesprächszusammenfassungen) verwendet.',
      'privacy.s3.title': '3. Kein KI-Training mit Ihren Daten',
      'privacy.s3.desc': 'Wir nutzen die spezifischen Anrufdaten, Transkripte oder Patienteninformationen Ihrer Praxis nicht, um unsere allgemeinen KI-Modelle zu trainieren. Ihre geschäftlichen Interaktionen bleiben isoliert und streng vertraulich in Ihrem Konto. Wir setzen vortrainierte, sichere KI-Technologie ein, ohne Ihren Datenschutz zu gefährden.',
      'privacy.s4.title': '4. Informationssicherheit',
      'privacy.s4.desc': 'Wir setzen modernste Sicherheitsprotokolle ein, darunter Ende-zu-Ende-Verschlüsselung und geschützte Cloud-Infrastrukturen. Unsere Systeme stellen sicher, dass nur autorisierte Personen Ihrer Organisation Zugriff auf die von Hana verarbeiteten Daten haben.',
      'privacy.s5.title': '5. Unterstützung statt Überwachung',
      'privacy.s5.desc': 'Unser einziges Ziel ist es, Ihnen die Arbeit zu erleichtern und Ihr Unternehmen voranzubringen. Wir verkaufen Ihre Daten nicht und greifen auf Ihre Informationen nur zu dem Zweck zu, den Ihnen anvertrauten KI-Telefonempfangsdienst bereitzustellen.',
      'privacy.s6.title': '6. Kontakt & Transparenz',
      'privacy.s6.desc': 'Wenn Sie Fragen zum Umgang mit Ihren Daten haben, kontaktieren Sie uns bitte über die Hauptseite. Wir stehen für vollständige Transparenz und den Schutz Ihres Vertrauens bei der Modernisierung Ihres Empfangs.',

      // Legal - Terms of Service Page
      'terms.title': 'Nutzungsbedingungen',
      'terms.lastUpdated': 'Zuletzt aktualisiert: Mai 2026',
      'terms.s1.title': '1. Zustimmung zu den Bedingungen',
      'terms.s1.desc': 'Durch die Nutzung von Better Call Hana erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie nicht einverstanden sind, sehen Sie bitte von einer Nutzung ab. Unser Ziel ist eine reibungslose KI-Integration für Ihre professionelle Praxis.',
      'terms.s2.title': '2. Leistungsbeschreibung',
      'terms.s2.desc': 'Better Call Hana stellt eine KI-gestützte Telefonrezeptionistin bereit, die Anrufe entgegennimmt, Fragen beantwortet und Termine für professionelle Unternehmen bucht. Wir fungieren als 24/7 aktive Erweiterung Ihres Front-Office.',
      'terms.s3.title': '3. Einsatz von KI-Technologie',
      'terms.s3.desc': 'Sie erkennen an, dass es sich bei Hana um eine künstliche Intelligenz handelt. Trotz unseres Strebens nach höchster Präzision und Professionalität garantieren wir keine ständige Fehlerfreiheit. Nutzer sind dafür verantwortlich, Terminbuchungen in ihren eigenen Systemen zu prüfen.',
      'terms.s4.title': '4. Testphase',
      'terms.s4.desc': 'Wir bieten eine 7-tägige kostenlose Testphase an, um den Mehrwert für Ihr Unternehmen unverbindlich zu erleben. Nach Ablauf der Testphase fallen die beim Premium-Abschluss vereinbarten Abonnementgebühren an.',
      'terms.s5.title': '5. Haftungsbeschränkung',
      'terms.s5.desc': 'Better Call Hana haftet nicht für indirekte, zufällige oder Folgeschäden, die aus der Nutzung des Dienstes entstehen. Wir stellen die Werkzeuge für Ihr Wachstum bereit; die letztendlichen Geschäftsentscheidungen verbleiben beim Inhaber.',
      'terms.s6.title': '6. Änderungen der Bedingungen',
      'terms.s6.desc': 'Wir behalten uns das Recht vor, diese Bedingungen jederzeit anzupassen. Ihre fortgesetzte Nutzung des Dienstes gilt als Annahme der aktualisierten Bestimmungen. Wir verpflichten uns zu dauerhafter Transparenz.'
    }
  };

  /**
   * Get current selected language from localStorage or default to English
   */
  function getSelectedLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(BACKUP_KEY);
      if (saved && SUPPORTED_LANGUAGES.indexOf(saved) !== -1) {
        return saved;
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
    return DEFAULT_LANG;
  }

  // Cached collections to prevent expensive repeated document.querySelectorAll
  var cachedElements = null;
  var cachedPlaceholders = null;
  var cachedTitles = null;

  function refreshElementCache() {
    cachedElements = [];
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      if (key) {
        cachedElements.push({
          el: el,
          key: key,
          isInput: (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')
        });
      }
    }

    cachedPlaceholders = [];
    var pEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var p = 0; p < pEls.length; p++) {
      var pEl = pEls[p];
      var pKey = pEl.getAttribute('data-i18n-placeholder');
      if (pKey) {
        cachedPlaceholders.push({ el: pEl, key: pKey });
      }
    }

    cachedTitles = [];
    var tEls = document.querySelectorAll('[data-i18n-title]');
    for (var t = 0; t < tEls.length; t++) {
      var tEl = tEls[t];
      var tKey = tEl.getAttribute('data-i18n-title');
      if (tKey) {
        cachedTitles.push({ el: tEl, key: tKey });
      }
    }
  }

  var currentAppliedLang = null;
  var observer = null;
  var isObserving = false;

  function pauseObserver() {
    if (observer && isObserving) {
      observer.disconnect();
      isObserving = false;
    }
  }

  function resumeObserver() {
    if (observer && !isObserving && document.body) {
      try {
        observer.observe(document.body, { childList: true, subtree: true });
        isObserving = true;
      } catch (e) {}
    }
  }

  /**
   * Fast, efficient translation without main thread blocking
   */
  function translatePage(lang) {
    if (!lang || SUPPORTED_LANGUAGES.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }

    var dict = translations[lang] || translations[DEFAULT_LANG];

    // Disconnect observer before making DOM modifications to prevent recursion loops
    pauseObserver();

    // Set document lang
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
      document.documentElement.dir = 'ltr';
    }

    // Initialize or validate cached elements
    if (!cachedElements || cachedElements.length === 0) {
      refreshElementCache();
    }

    // 1. Update text nodes efficiently (only write if text changed to avoid layout reflows)
    if (cachedElements) {
      for (var i = 0; i < cachedElements.length; i++) {
        var item = cachedElements[i];
        var el = item.el;
        var targetText = dict[item.key];
        if (targetText && el.isConnected) {
          if (item.isInput) {
            if (el.hasAttribute('placeholder') && !el.hasAttribute('data-i18n-placeholder')) {
              if (el.placeholder !== targetText) {
                el.placeholder = targetText;
              }
            }
          } else {
            if (el.textContent !== targetText) {
              el.textContent = targetText;
            }
          }
        }
      }
    }

    // 2. Update placeholders
    if (cachedPlaceholders) {
      for (var p = 0; p < cachedPlaceholders.length; p++) {
        var pItem = cachedPlaceholders[p];
        var pTarget = dict[pItem.key];
        if (pTarget && pItem.el.isConnected && pItem.el.placeholder !== pTarget) {
          pItem.el.placeholder = pTarget;
        }
      }
    }

    // 3. Update titles
    if (cachedTitles) {
      for (var t = 0; t < cachedTitles.length; t++) {
        var tItem = cachedTitles[t];
        var tTarget = dict[tItem.key];
        if (tTarget && tItem.el.isConnected && tItem.el.title !== tTarget) {
          tItem.el.title = tTarget;
        }
      }
    }

    // Reconnect observer after DOM modifications are finished
    resumeObserver();

    // Only dispatch custom event if language actually changed
    if (currentAppliedLang !== lang) {
      currentAppliedLang = lang;
      try {
        var event = new CustomEvent('languageChanged', { detail: { language: lang, dictionary: dict } });
        window.dispatchEvent(event);
      } catch (e) {}
    }
  }

  /**
   * Set language globally and save to localStorage
   */
  function setLanguage(lang) {
    if (!lang || SUPPORTED_LANGUAGES.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(BACKUP_KEY, lang);
    } catch (e) {}

    translatePage(lang);
  }

  // Expose global API on window
  var updateLanguage = function(lang) {
    var targetLang = lang || getSelectedLanguage();
    translatePage(targetLang);
  };

  window.updateLanguage = updateLanguage;

  window.BetterCallHanaI18n = {
    translations: translations,
    supportedLanguages: SUPPORTED_LANGUAGES,
    getLanguage: getSelectedLanguage,
    setLanguage: setLanguage,
    translatePage: translatePage,
    updateLanguage: updateLanguage,
    refreshCache: refreshElementCache
  };

  // Run initial translation when idle or ready
  var runInitialTranslate = function() {
    refreshElementCache();
    var initialLang = getSelectedLanguage();
    translatePage(initialLang);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runInitialTranslate, { passive: true, once: true });
  } else {
    runInitialTranslate();
  }

  // Observe dynamically mounted dialogs with throttled idle execution
  if (typeof MutationObserver !== 'undefined') {
    var observerTimeout = null;
    observer = new MutationObserver(function(mutations) {
      var hasRelevantNodes = false;
      for (var m = 0; m < mutations.length; m++) {
        if (mutations[m].addedNodes && mutations[m].addedNodes.length > 0) {
          hasRelevantNodes = true;
          break;
        }
      }
      if (hasRelevantNodes) {
        if (observerTimeout) clearTimeout(observerTimeout);
        observerTimeout = setTimeout(function() {
          var currentLang = getSelectedLanguage();
          if (currentLang && currentLang !== DEFAULT_LANG) {
            refreshElementCache();
            translatePage(currentLang);
          }
        }, 400);
      }
    });

    resumeObserver();
    if (!isObserving) {
      document.addEventListener('DOMContentLoaded', function() {
        resumeObserver();
      }, { passive: true, once: true });
    }
  }

})();
