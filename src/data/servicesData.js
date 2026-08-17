export const partners = [
  {
    id: 'moneris',
    name: 'Moneris',
    tagline: 'Canada’s #1 Payment Processor',
    badge: 'Authorized Canadian Reseller',
    marketShare: 'Over 3.5B transactions processed annually',
    description: 'Founded by RBC & BMO, Moneris provides industry-standard Interac debit settlement, bilingual French/English terminals, and enterprise security for Canadian commerce.',
    color: '#0079C1',
    supportedFeatures: ['Interac Direct Settlement', 'Tap to Pay on iPhone/Android', 'Bilingual Terminals', 'Moneris Online eCommerce API', 'Kount AI Fraud Shield']
  },
  {
    id: 'clover',
    name: 'Clover',
    tagline: 'Leading Smart All-in-One Cloud POS',
    badge: 'Certified Clover Dealer',
    marketShare: 'Over 1M+ active POS installations worldwide',
    description: 'Award-winning Android-based smart POS hardware with dual-screen stations, mobile handhelds, and 500+ business management apps.',
    color: '#22B14C',
    supportedFeatures: ['Dual Touchscreen Hardware', 'Integrated Receipt Printer', 'Clover App Market (500+ Apps)', 'Dining & Table Mapping', 'Cloud Inventory Sync']
  },
  {
    id: 'global-payments',
    name: 'Global Payments',
    tagline: 'Global Enterprise Merchant Solutions',
    badge: 'Official Solutions Partner',
    marketShare: 'Fortune 500 Worldwide Payment Leader',
    description: 'Specializing in high-volume processing, Level 2/3 B2B interchange optimization, Heartland hospitality software, and Telium TETRA security terminals.',
    color: '#004B87',
    supportedFeatures: ['Heartland Restaurant POS & KDS', 'Desk/5000 & Move/5000 Terminals', 'Level 2/3 B2B Interchange+', 'Multi-Currency 140+ FX', 'Next-Day Canadian Funding']
  }
];

export const serviceCategories = [
  'All Solutions',
  'Smart POS Systems',
  'Wireless & Mobile Terminals',
  'Restaurant & Dining POS',
  'Retail & Multi-Store',
  'eCommerce & Virtual Terminal'
];

export const servicesData = [
  {
    id: 'clover-station-duo',
    slug: 'clover-station-duo',
    partner: 'Clover',
    partnerId: 'clover',
    title: 'Clover Station Duo POS',
    tagline: 'The complete dual-screen powerhouse for high-volume retail & restaurants',
    category: 'Smart POS Systems',
    badge: 'Flagship System',
    image: '/images/clover-station-duo.jpg',
    pricing: 'Wholesale Interchange+ / Custom Hardware Bundle',
    shortDesc: 'High-speed countertop POS with a 14" staff display, an 8" customer-facing terminal, high-speed thermal receipt printer, and heavy-duty cash drawer.',
    longDesc: 'The Clover Station Duo is engineered for fast-paced retail stores, busy dining rooms, and service businesses. With its dual-screen configuration, staff manage orders smoothly while customers view their itemized receipt, select tipping options, and pay securely using Apple Pay, Google Pay, Interac debit, or chip credit cards.',
    keyFeatures: [
      {
        title: '14" Merchant HD Touchscreen',
        desc: 'Ultra-responsive full HD display for high-speed order entry, inventory lookup, and shift management.'
      },
      {
        title: '8" Customer-Facing Interactive Screen',
        desc: 'Empower guests to verify items, enter email/SMS for loyalty rewards, and select digital tips privately.'
      },
      {
        title: 'High-Speed Thermal Printer & Cash Drawer',
        desc: 'Includes an all-in-one printer base with auto-cut thermal paper and full-sized steel cash drawer.'
      },
      {
        title: 'Clover App Market Integration',
        desc: 'Connect QuickBooks, Homebase payroll, Mailchimp marketing, and custom menu modifier apps with one click.'
      }
    ],
    hardwareSpecs: {
      merchantScreen: '14.0-inch IPS Full HD Touchscreen (1920x1080)',
      customerScreen: '8.0-inch Interactive Screen with EMV & NFC Contactless Reader',
      connectivity: 'Ethernet (Gigabit), Dual-Band Wi-Fi (802.11 a/b/g/n/ac), 4G LTE Backup',
      printer: 'Integrated High-Speed Thermal Printer (3-inch / 80mm roll)',
      security: 'End-to-End Encryption, PCI PTS 5.x with Clover Security Plus'
    },
    idealFor: ['Busy Retail Boutiques', 'Full-Service Restaurants', 'Supermarkets & Grocers', 'Salons & Spas', 'Franchise Chains'],
    partnerBenefits: [
      'Pre-configured and tested before doorstep delivery in Canada',
      'Dedicated 24/7 Canadian merchant support phone line',
      'Transparent Interchange-Plus wholesale processing rates',
      'Next-day funds settlement directly into any Canadian bank account'
    ],
    faqs: [
      {
        q: 'Can I connect barcode scanners, weight scales, and kitchen printers?',
        a: 'Yes, the Station Duo connectivity hub includes 4 USB ports, cash drawer port, and Ethernet jack for all peripheral accessories.'
      },
      {
        q: 'Does it work if internet connection drops?',
        a: 'Yes, Clover Station Duo includes offline processing capability to keep taking payments without missing a sale.'
      }
    ]
  },
  {
    id: 'clover-flex',
    slug: 'clover-flex',
    partner: 'Clover',
    partnerId: 'clover',
    title: 'Clover Flex Handheld Smart POS',
    tagline: 'Ultra-portable, battery-powered terminal for table-side orders and mobile sales',
    category: 'Wireless & Mobile Terminals',
    badge: 'Best Seller',
    image: '/images/clover-flex.jpg',
    pricing: 'Starting at $29/mo or Outright Purchase',
    shortDesc: 'A complete POS in the palm of your hand with a 5" touchscreen, built-in thermal receipt printer, barcode camera, and all-day battery.',
    longDesc: 'Clover Flex delivers the full power of a countertop POS system in a handheld form factor. Ideal for table-side dining, patio service, line-busting in retail, and on-the-road field services across Canada.',
    keyFeatures: [
      {
        title: 'Full POS Capabilities Anywhere',
        desc: 'Ring up sales, scan items, apply discounts, manage tips, and split bills directly at the table or customer doorstep.'
      },
      {
        title: 'Built-in Printer & Barcode Scanner',
        desc: 'Print receipts on the spot or send via SMS/Email with 1D/2D optical barcode scanning.'
      },
      {
        title: 'All-Day 8+ Hour Battery Life',
        desc: 'Long-lasting lithium battery with fast-charging countertop dock included.'
      },
      {
        title: '4G LTE Cellular & Wi-Fi',
        desc: 'Built-in cellular SIM ensures uninterrupted payments indoors and outdoors across Canada.'
      }
    ],
    hardwareSpecs: {
      merchantScreen: '5.0-inch Gorilla Glass Touch Display (1280x720)',
      customerScreen: 'Handheld orientation with dynamic customer tipping interface',
      connectivity: '4G LTE (Multi-Carrier SIM included), Wi-Fi, Bluetooth 4.2',
      printer: 'Internal high-speed thermal receipt printer',
      security: 'PCI-PTS 5.0 certified, biometric fingerprint sensor, EMV Chip & NFC'
    },
    idealFor: ['Table-Side Dining & Patios', 'Food Trucks & Breweries', 'Curbside Pickup & Delivery', 'Trade Shows & Festivals', 'Contractors & Mobile Services'],
    partnerBenefits: [
      'Free 4G LTE wireless data plan included with merchant processing',
      'Real-time sync with all other Clover stations in your store',
      'No long-term hardware leasing traps or non-cancellable contracts',
      'Free menu and inventory SKU setup by MHPOS technicians'
    ],
    faqs: [
      {
        q: 'Can servers split bills and accept custom tips on Clover Flex?',
        a: 'Yes, servers can split checks by seat or dollar amount, and guests can enter custom percentage or cash tips directly on screen.'
      }
    ]
  },
  {
    id: 'clover-mini',
    slug: 'clover-mini',
    partner: 'Clover',
    partnerId: 'clover',
    title: 'Clover Mini Smart Countertop',
    tagline: 'Compact footprint, full-scale POS functionality for modern checkout counters',
    category: 'Smart POS Systems',
    badge: 'Space Saver',
    image: '/images/clover-mini.jpg',
    pricing: 'Flexible Hardware Bundle / Monthly Tier',
    shortDesc: 'Small in size but mighty in performance. Features an 8-inch HD touchscreen, built-in thermal printer, and full access to the Clover software ecosystem.',
    longDesc: 'When counter space is at a premium, Clover Mini provides high performance without the bulk. It operates as a full standalone register or as a high-speed customer-facing terminal linked to an existing POS setup.',
    keyFeatures: [
      {
        title: 'Space-Saving Ergonomic Footprint',
        desc: 'Brushed aluminum chassis that fits neatly onto tight reception desks, bar tops, and boutique cash wraps.'
      },
      {
        title: 'Integrated Receipt Printer & Scanner',
        desc: 'Fast internal receipt printer with front-facing camera for scanning customer QR codes and barcodes.'
      },
      {
        title: 'Full Employee & Inventory Control',
        desc: 'Track stock counts in real time, clock staff in/out with PINs, and generate daily batch sales reports.'
      },
      {
        title: 'Digital Customer Rewards',
        desc: 'Capture customer loyalty data at checkout for automated SMS promotions and repeat visit incentives.'
      }
    ],
    hardwareSpecs: {
      merchantScreen: '8.0-inch IPS High-Definition Touchscreen',
      customerScreen: 'Dual-pivot stand with customer signature and PIN entry',
      connectivity: 'Ethernet, Dual-Band Wi-Fi, 4G LTE optional, Bluetooth',
      printer: 'Built-in high-speed thermal receipt printer',
      security: 'End-to-end tokenization, EMV chip, Interac Flash, Apple/Google Pay'
    },
    idealFor: ['Quick-Service Cafes & Bakeries', 'Apparel & Gift Boutiques', 'Medical & Dental Clinics', 'Professional Services', 'Bars & Nightclubs'],
    partnerBenefits: [
      'Next-day hardware replacement warranty',
      'Free catalogue upload and menu modifier configuration',
      'Direct integration with Canadian accounting platforms (QuickBooks, Xero)'
    ],
    faqs: [
      {
        q: 'Can Clover Mini connect to my existing cash drawer?',
        a: 'Yes, it connects seamlessly via standard RJ11 cash drawer ports and supports external USB barcode scanners.'
      }
    ]
  },
  {
    id: 'moneris-go-terminal',
    slug: 'moneris-go-terminal',
    partner: 'Moneris',
    partnerId: 'moneris',
    title: 'Moneris Go Smart Payment Terminal',
    tagline: 'Canada’s benchmark Android smart terminal with 4G LTE and instant Interac debit',
    category: 'Wireless & Mobile Terminals',
    badge: 'Canadian Standard',
    image: '/images/moneris-go-terminal.jpg',
    pricing: 'Flat-Rate or Wholesale Interchange-Plus',
    shortDesc: 'A sleek Android-powered touchscreen payment terminal offering sub-second transaction speeds, bilingual UI, all-day battery, and direct Canadian banking integration.',
    longDesc: 'The Moneris Go terminal is purpose-built for Canadian commerce. Powered by Android, it delivers crisp touchscreen interactions, instant Interac Flash and credit approvals in under a second, and seamless digital or paper receipt printing for any retail or hospitality workflow.',
    keyFeatures: [
      {
        title: 'Sub-Second Canadian Interac Processing',
        desc: 'Optimized for Canada’s Interac network with ultra-low latency card taps and PIN entries.'
      },
      {
        title: 'Dual 4G Cellular + Wi-Fi Roaming',
        desc: 'Pre-installed with multi-carrier Canadian SIMs for automatic failover with zero dead zones.'
      },
      {
        title: 'Full Bilingual French & English Compliance',
        desc: 'Meets all Canadian bilingual standards with automatic customer language preference detection.'
      },
      {
        title: 'Moneris Merchant Direct Cloud Portal',
        desc: 'Real-time online portal for instant batch reconciliation, deposit tracking, and monthly statement downloads.'
      }
    ],
    hardwareSpecs: {
      merchantScreen: '5.5-inch IPS Color Touchscreen with anti-glare glass',
      customerScreen: 'Integrated multi-angle display',
      connectivity: 'Dual SIM 4G/LTE (Bell/Rogers), Wi-Fi (Dual Band), Bluetooth',
      printer: 'Integrated ultra-fast thermal printer with drop-in roll loading',
      security: 'PCI PTS 5.x approved, Moneris Vault Tokenization, Interac Certified'
    },
    idealFor: ['Canadian Retail Stores', 'Restaurants & Bars', 'Trades & Contractors', 'Medical & Wellness Practices', 'Franchise Chains'],
    partnerBenefits: [
      'Official Moneris authorized partner pricing with discounted terminal lease options',
      'Dedicated Canadian onboard specialist to set up merchant IDs in 24-48 hours',
      'No cancellation lock-ins with free statement rate analysis',
      'Direct settlement to any Canadian RBC, TD, BMO, CIBC, or Scotiabank account'
    ],
    faqs: [
      {
        q: 'Can Moneris Go integrate with my existing POS cash register?',
        a: 'Yes, Moneris Go can operate standalone or semi-integrated via Moneris Core Cloud APIs.'
      }
    ]
  },
  {
    id: 'moneris-total-commerce',
    slug: 'moneris-total-commerce',
    partner: 'Moneris',
    partnerId: 'moneris',
    title: 'Moneris Total Commerce & Online Gateway',
    tagline: 'Unified in-store and online payment infrastructure with automated Canadian tax compliance',
    category: 'eCommerce & Virtual Terminal',
    badge: 'Omnichannel Cloud',
    image: '/images/moneris-total-commerce.jpg',
    pricing: 'API & Gateway Packages / Low Online Rates',
    shortDesc: 'Connect your physical terminals and your digital storefronts (Shopify, WooCommerce, Magento) under one unified merchant account with consolidated analytics.',
    longDesc: 'Moneris Total Commerce eliminates data silos by connecting in-person terminals and digital storefronts into a single reporting dashboard. Manage online fraud with Kount, process telephone orders with Virtual Terminal, and set up recurring subscription billing with automated card updater technology.',
    keyFeatures: [
      {
        title: 'Plug-and-Play eCommerce Integration',
        desc: 'Pre-built checkout integrations for Shopify, WooCommerce, Adobe Commerce/Magento, and custom REST APIs.'
      },
      {
        title: 'Virtual Terminal for Phone & Mail Orders',
        desc: 'Turn any browser into a secure payment terminal for processing MOTO orders with automated receipt emailing.'
      },
      {
        title: 'Kount AI Anti-Fraud Shield',
        desc: 'Advanced machine learning filters that block fraudulent chargebacks without declining legitimate orders.'
      },
      {
        title: 'Automated Recurring Subscription Engine',
        desc: 'Store customer card profiles securely in a PCI-compliant vault for automated recurring membership billing.'
      }
    ],
    hardwareSpecs: {
      merchantScreen: 'Cloud Web-based Console (Accessible on PC, Mac, iPad, iPhone, Android)',
      customerScreen: 'Hosted Pay Page & Embedded iFrame SDKs with full brand customization',
      connectivity: 'RESTful APIs, Webhooks, SSL 256-bit TLS 1.3 encryption',
      printer: 'Automated PDF invoicing & digital receipt generator',
      security: 'PCI DSS Level 1 Certified, Tokenization Vault, 3D Secure 2.0'
    },
    idealFor: ['eCommerce Storefronts', 'B2B Wholesale Distributors', 'Subscription & SaaS Providers', 'Multi-Store Retailers', 'Gyms & Membership Clubs'],
    partnerBenefits: [
      'Free developer sandbox access with direct integration support',
      'Volume-based processing discounts for high-GMV merchants',
      'Consolidated monthly statements for in-store and online revenue'
    ],
    faqs: [
      {
        q: 'Does it support Canadian multi-provincial tax calculations?',
        a: 'Yes, it natively calculates GST, PST, and HST rules based on customer destination shipping addresses.'
      }
    ]
  },
  {
    id: 'global-payments-terminals',
    slug: 'global-payments-terminals',
    partner: 'Global Payments',
    partnerId: 'global-payments',
    title: 'Global Payments Desk/5000 & Move/5000',
    tagline: 'Engineered for relentless durability, security, and high-volume transaction reliability',
    category: 'Wireless & Mobile Terminals',
    badge: 'Enterprise Hardware',
    image: '/images/global-payments-terminal.jpg',
    pricing: 'Custom Interchange-Plus / Tiered Models',
    shortDesc: 'Workhorse terminals engineered for high-frequency checkout environments. Supports countertop, semi-integrated POS, and wireless roaming modes.',
    longDesc: 'Global Payments provides some of the world’s most resilient payment hardware with the Desk/5000 (countertop) and Move/5000 (wireless) series. Designed to withstand intensive daily use, these terminals support all payment types including contactless, EMV chip, PIN debit, and digital wallets.',
    keyFeatures: [
      {
        title: 'Standalone & Semi-Integrated Flexibility',
        desc: 'Connect directly to your existing cash register or point-of-sale software via Ethernet or IP pairing.'
      },
      {
        title: 'Telium TETRA Operating System',
        desc: 'Bank-grade security architecture designed to prevent malware and protect customer cardholder data.'
      },
      {
        title: 'Rich Multimedia Color Display',
        desc: 'Color touchscreen that supports merchant branding, video prompts, and clear customer feedback.'
      },
      {
        title: 'Comprehensive Global Card Acceptance',
        desc: 'Accept Visa, Mastercard, Interac, American Express, Discover, UnionPay, JCB, and mobile wallets.'
      }
    ],
    hardwareSpecs: {
      merchantScreen: '3.5-inch Color Capacitive Touchscreen (Desk/5000 & Move/5000)',
      customerScreen: 'Dedicated secure PIN pad with ergonomic backlight',
      connectivity: 'Ethernet, Dial backup, Wi-Fi, Bluetooth, 4G LTE',
      printer: 'Integrated high-speed 30 lines/sec thermal printer',
      security: 'PCI-PTS 5.x certified, Heartbleed/DDoS protected architecture'
    },
    idealFor: ['High-Volume Supermarkets', 'Pharmacies & Healthcare', 'Gas Stations & Convenience Stores', 'Hospitality & Bars', 'Auto Dealerships'],
    partnerBenefits: [
      'Rapid terminal replacement with pre-configured IP injection',
      'Direct interchange-plus pricing with transparent billing',
      'No junk fees: zero statement fees, zero batch closure surcharges'
    ],
    faqs: [
      {
        q: 'Can these terminals pair with legacy Windows POS systems?',
        a: 'Yes, Global Payments provides robust DLL and IP-based integration drivers for legacy and modern POS software.'
      }
    ]
  },
  {
    id: 'heartland-restaurant-pos',
    slug: 'heartland-restaurant-pos',
    partner: 'Global Payments',
    partnerId: 'global-payments',
    title: 'Heartland Restaurant POS by Global Payments',
    tagline: 'Complete cloud restaurant management system for quick-service and fine dining',
    category: 'Restaurant & Dining POS',
    badge: 'Hospitality Leader',
    image: '/images/heartland-restaurant-pos.jpg',
    pricing: 'Software Subscriptions from $69/mo',
    shortDesc: 'Designed by hospitality veterans. Features graphical floor plans, kitchen display systems (KDS), commission-free online ordering, and server handhelds.',
    longDesc: 'Heartland Restaurant POS (a Global Payments solution) brings restaurant operations into the modern era. From managing waitlists and table turns to sending orders directly to the kitchen display screen, Heartland streamlines every stage of service while eliminating costly third-party delivery commissions.',
    keyFeatures: [
      {
        title: 'Interactive Floor & Table Mapping',
        desc: 'Visual table management with real-time status indicators (ordered, served, bill requested, cleaned).'
      },
      {
        title: 'Integrated Kitchen Display System (KDS)',
        desc: 'Replace noisy ticket printers with color-coded digital screens for cook times, item routing, and order bumping.'
      },
      {
        title: 'Commission-Free Online Ordering',
        desc: 'Accept direct takeout and delivery orders from your website without paying 20-30% commissions to third-party apps.'
      },
      {
        title: 'QR Code Table Ordering & Pay',
        desc: 'Guests can scan a QR code at their table to view the digital menu, place reorders, and pay their check immediately.'
      }
    ],
    hardwareSpecs: {
      merchantScreen: 'iPad iOS & Commercial Grade Touch Terminals',
      customerScreen: 'Guest-facing payment displays with digital tip matrix',
      connectivity: 'Cloud-synced with offline continuous operations mode',
      printer: 'Kitchen impact printers, thermal receipt printers, KDS hardware',
      security: 'End-to-End Encrypted EMV, PCI DSS Compliant'
    },
    idealFor: ['Full-Service Restaurants', 'Bars & Breweries', 'Quick-Service & Fast Casual', 'Coffee Shops & Bakeries', 'Multi-Unit Restaurant Groups'],
    partnerBenefits: [
      'Full menu building and staff training included free of charge',
      'Local Canadian on-site installation and hardware staging',
      '24/7 dedicated restaurant emergency support line'
    ],
    faqs: [
      {
        q: 'What happens if our restaurant loses internet connection during dinner service?',
        a: 'Heartland continues taking orders and processing cards locally in Offline Mode, automatically syncing once connection resumes.'
      }
    ]
  }
];
