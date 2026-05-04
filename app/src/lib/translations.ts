export type Lang = "fr" | "en";

export const translations = {
  fr: {
    // Navigation
    navShop: "Boutique",
    navAbout: "À Propos",
    navTraining: "Formations",
    navFAQ: "FAQ",
    navBlackFriday: "Black Friday",
    navContact: "Contact",
    navAdmin: "Admin",
    cart: "Panier",
    cartEmpty: "Votre panier est vide",
    cartTotal: "Total",
    cartCheckout: "Commander via WhatsApp",
    cartRemove: "Retirer",
    quantity: "Quantité",

    // Hero
    heroSlogan: "Chic Design, le souci de transformer votre intérieur en excellence",
    heroCtaShop: "Découvrir la Collection",
    heroCtaAbout: "Notre Histoire",
    heroScroll: "Scroll",

    // About
    aboutLabel: "CRÉÉ EN 2020 — YAOUNDÉ",
    aboutHeading: "Sculpter l'espace avec résine \u0026 Gysme",
    aboutBody:
      "Nous croyons que votre intérieur doit raconter une histoire. Chaque pièce est moulée, coulée et finie à la main dans notre atelier. Nous ne vendons pas simplement des objets ; nous vendons le silence, la texture et la lumière. Chaque création Chic Design est une œuvre unique, adaptée à vos goûts et à votre univers.",
    aboutCta: "LIRE NOTRE HISTOIRE",

    // Products
    productsTitle: "LA COLLECTION",
    productsSubtitle: "Découvrez nos créations artisanales uniques",
    addToCart: "Ajouter",
    orderWhatsApp: "Commander",
    categoryResin: "Résine",
    categoryGypsum: "Gysme",
    categoryAll: "Tous",

    // Training
    trainingTitle: "FORMATIONS ARTISANALES",
    trainingSubtitle: "Apprenez l'art de la résine et du Gysme",
    basicTitle: "FORMATION BASIQUE",
    basicPrice: "75 000",
    basicDuration: "1 Semaine",
    basicDesc:
      "Introduction au coulage de résine et au moulage en plâtre. Parfaite pour les débutants. Vous apprendrez les bases des pigments, des moules et des finitions.",
    basicCta: "S'INSCRIRE",
    advancedTitle: "MASTERCLASS AVANCÉE",
    advancedPrice: "100 000",
    advancedDuration: "1 Semaine",
    advancedDesc:
      "Incrustation complexe, maîtrise des pigments et création d'objets de grande taille. Pour ceux qui veulent exceller.",
    advancedCta: "S'INSCRIRE",

    // FAQ
    faqTitle: "FOIRE AUX QUESTIONS",
    faqSubtitle: "Tout ce que vous devez savoir",
    faq: [
      {
        q: "Comment passer une commande sur le site ?",
        a: "Pour commander une création Chic Design : 1. Sélectionnez votre article. 2. Cliquez sur 'Commander'. 3. Vous serez automatiquement redirigé vers WhatsApp avec votre sélection. 4. Envoyez votre demande en précisant les détails de personnalisation. Notre équipe vous accompagne ensuite pour finaliser votre commande avec élégance et précision.",
      },
      {
        q: "Puis-je commander sans passer par le site ?",
        a: "Oui, vous pouvez commander directement via : WhatsApp, Instagram, TikTok, ou notre groupe WhatsApp.",
      },
      {
        q: "Vos créations sont-elles personnalisables ?",
        a: "Absolument. Chaque pièce Chic Design est conçue comme une œuvre unique, adaptée à vos goûts et à votre univers.",
      },
      {
        q: "Quels éléments puis-je personnaliser ?",
        a: "Couleurs et finitions, noms, prénoms ou dates, incrustations (fleurs, paillettes, effets artistiques), formats et dimensions. Nous donnons vie à vos idées avec une touche de raffinement.",
      },
      {
        q: "Comment fonctionne le paiement ?",
        a: "Le paiement est structuré comme suit : 75% à la commande pour validation et lancement de la production, 25% restants à la livraison ou au retrait.",
      },
      {
        q: "Pourquoi un acompte est-il demandé ?",
        a: "Chaque création étant réalisée avec soin, l'acompte garantit la mobilisation des matériaux et le démarrage du travail artisanal.",
      },
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "MTN Mobile Money et Orange Money.",
      },
      {
        q: "Quel est le délai de fabrication ?",
        a: "Pour les objets en résine : 3 jours. Au-delà de 3 jours pour les grandes quantités. Pour les objets en Gysme : 5 jours. Au-delà de 5 jours pour les grandes quantités. Après validation de votre commande.",
      },
      {
        q: "Où livrez-vous ?",
        a: "Chic Design livre exclusivement au Cameroun.",
      },
      {
        q: "Quels sont les jours de livraison ?",
        a: "Les livraisons sont effectuées uniquement le samedi, afin de garantir une organisation optimale et un service de qualité.",
      },
      {
        q: "Puis-je récupérer ma commande moi-même ?",
        a: "Oui. Vous avez la possibilité de récupérer votre commande dans notre atelier situé dans le quartier Tsinga à Yaoundé. Les détails vous sont communiqués après validation.",
      },
      {
        q: "Quels types de produits proposez-vous ?",
        a: "Vases décoratifs, plateaux design, bijoux en résine, cadres photos, tableaux artistiques, statuettes, pots de fleurs, stylos, agendas, vides poches, horloges, porte-clés, boîtes, tables, sols en résine, et objets décoratifs personnalisés.",
      },
      {
        q: "Proposez-vous des travaux professionnels en résine ?",
        a: "Oui. Nous réalisons également des revêtements de sols en résine, avec une finition esthétique, moderne et durable.",
      },
      {
        q: "Vos produits sont-ils durables ?",
        a: "Oui. La durée de vie des objets en Gysme est d'au moins 10 ans s'ils sont bien entretenus. La durée de vie des objets en résine est indéfinie.",
      },
      {
        q: "Les objets sont-ils fragiles ?",
        a: "Nos pièces sont solides, mais restent des objets décoratifs. Une manipulation soigneuse est recommandée car les objets en Gysme sont cassables.",
      },
      {
        q: "Comment entretenir les créations ?",
        a: "Nettoyer avec un chiffon doux. Éviter les produits chimiques agressifs. Éviter l'exposition prolongée à l'eau pour le Gysme.",
      },
      {
        q: "Puis-je annuler ma commande ?",
        a: "Les commandes personnalisées ne peuvent pas être annulées après validation.",
      },
      {
        q: "Les produits sont-ils remboursables ?",
        a: "Les créations personnalisées ne sont pas remboursables, sauf en cas de défaut avéré.",
      },
      {
        q: "Que faire en cas de problème ?",
        a: "Contactez-nous rapidement avec une photo du produit concerné. Nous traiterons votre demande avec la plus grande attention.",
      },
      {
        q: "Vos produits conviennent-ils pour des cadeaux ?",
        a: "Parfaitement. Nos créations sont idéales pour événements spéciaux, cadeaux personnalisés et décoration intérieure haut de gamme.",
      },
      {
        q: "Acceptez-vous les commandes en grande quantité ?",
        a: "Oui, pour événements, entreprises ou projets spécifiques. Nous proposons des solutions adaptées à vos besoins.",
      },
    ],

    // Black Friday
    bfTitle: "BLACK FRIDAY CHAQUE VENDREDI CHEZ NOUS",
    bfSubtitle: "Bienvenue dans un univers où l'art et la créativité se rencontrent à prix exceptionnel !",
    bfDesc1:
      "Chaque vendredi, nous transformons votre expérience shopping en une véritable opportunité unique : c'est notre Black Friday hebdomadaire. Une journée spéciale dédiée à tous les amoureux de décoration, d'objets faits main et de créations originales.",
    bfDesc2:
      "Tous nos articles fabriqués à base de Gysme et de résine sont proposés au prix unique et incroyable de 5 000 FCFA seulement.",
    bfDesc3:
      "Que ce soit pour embellir votre maison, offrir un cadeau spécial ou simplement vous faire plaisir, c'est le moment idéal pour découvrir des pièces artisanales uniques, soigneusement conçues avec passion et créativité.",
    bfDesc4:
      "Chaque objet raconte une histoire, chaque détail est travaillé à la main pour vous offrir une qualité et un design authentique.",
    bfDesc5:
      "Mais attention : cette offre n'est disponible que chaque vendredi, alors ne manquez pas cette journée exceptionnelle !",
    bfDesc6:
      "Rendez-vous chaque semaine pour profiter de votre Black Friday artisanal et donner vie à votre intérieur avec style et originalité.",
    bfCta: "PROFITER DE L'OFFRE",
    bfBadge: "TOUS LES ARTICLES À 5 000 FCFA",

    // Contact / WhatsApp Form
    contactTitle: "Contactez-Nous",
    contactSubtitle: "Une question ? Une commande ? Parlons-en sur WhatsApp.",
    contactName: "Votre Nom",
    contactPurpose: "Objet",
    contactPurposeOrder: "Commande",
    contactPurposeQuestion: "Question",
    contactPurposeCustom: "Personnalisation",
    contactPurposeOther: "Autre",
    contactMessage: "Votre Message",
    contactSend: "Envoyer sur WhatsApp",
    contactPhone: "Téléphone",

    // Footer
    footerLinks: "Liens",
    footerShop: "Boutique",
    footerSupport: "Support",
    footerSocials: "Réseaux",
    footerRights: "Tous droits réservés. Chic Design.",
    footerPayment: "Paiement : MTN Mobile Money | Orange Money",
    footerDelivery: "Livraison le samedi — Cameroun uniquement",

    // Admin
    adminTitle: "Gestion des Produits",
    adminPassword: "Mot de passe",
    adminLogin: "Accéder",
    adminWrongPassword: "Mot de passe incorrect",
    adminAddProduct: "Ajouter un Produit",
    adminEditProduct: "Modifier",
    adminDeleteProduct: "Supprimer",
    adminSave: "Sauvegarder",
    adminCancel: "Annuler",
    adminProductName: "Nom (FR)",
    adminProductNameEn: "Nom (EN)",
    adminProductPrice: "Prix (XAF)",
    adminProductCategory: "Catégorie",
    adminProductImage: "Image URL",
    adminProductStock: "Stock",
    adminProductDesc: "Description (FR)",
    adminProductDescEn: "Description (EN)",

    // Misc
    language: "Langue",
    darkMode: "Mode Sombre",
    lightMode: "Mode Clair",
    close: "Fermer",
    loading: "Chargement...",
    xaf: "FCFA",
  },
  en: {
    // Navigation
    navShop: "Shop",
    navAbout: "About",
    navTraining: "Training",
    navFAQ: "FAQ",
    navBlackFriday: "Black Friday",
    navContact: "Contact",
    navAdmin: "Admin",
    cart: "Cart",
    cartEmpty: "Your cart is empty",
    cartTotal: "Total",
    cartCheckout: "Order via WhatsApp",
    cartRemove: "Remove",
    quantity: "Quantity",

    // Hero
    heroSlogan: "Chic Design, dedicated to transforming your interior into excellence",
    heroCtaShop: "Shop Collection",
    heroCtaAbout: "Our Story",
    heroScroll: "Scroll",

    // About
    aboutLabel: "EST. 2020 — YAOUNDÉ",
    aboutHeading: "Sculpting spaces with resin \u0026 gypsum",
    aboutBody:
      "We believe your interior should tell a story. Every piece is molded, cast, and finished by hand in our atelier. We don't just sell objects; we sell silence, texture, and light. Each Chic Design creation is a unique piece, adapted to your tastes and your world.",
    aboutCta: "READ OUR STORY",

    // Products
    productsTitle: "THE COLLECTION",
    productsSubtitle: "Discover our unique handmade creations",
    addToCart: "Add",
    orderWhatsApp: "Order",
    categoryResin: "Resin",
    categoryGypsum: "Gypsum",
    categoryAll: "All",

    // Training
    trainingTitle: "ARTISAN TRAINING",
    trainingSubtitle: "Learn the art of resin and gypsum",
    basicTitle: "BASIC TRAINING",
    basicPrice: "75,000",
    basicDuration: "1 Week",
    basicDesc:
      "Introduction to resin casting and gypsum molding. Perfect for beginners. You will learn the basics of pigments, molds, and finishes.",
    basicCta: "REGISTER NOW",
    advancedTitle: "ADVANCED MASTERCLASS",
    advancedPrice: "100,000",
    advancedDuration: "1 Week",
    advancedDesc:
      "Complex embedding, pigment mastery, and large-scale object creation. For those who want to excel.",
    advancedCta: "REGISTER NOW",

    // FAQ
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    faqSubtitle: "Everything you need to know",
    faq: [
      {
        q: "How do I place an order on the site?",
        a: "To order a Chic Design creation: 1. Select your item. 2. Click 'Order'. 3. You will be automatically redirected to WhatsApp with your selection. 4. Send your request specifying customization details. Our team will then guide you to finalize your order with elegance and precision.",
      },
      {
        q: "Can I order without using the site?",
        a: "Yes, you can order directly via: WhatsApp, Instagram, TikTok, or our WhatsApp Group.",
      },
      {
        q: "Are your creations customizable?",
        a: "Absolutely. Each Chic Design piece is conceived as a unique work, adapted to your tastes and your universe.",
      },
      {
        q: "What elements can I customize?",
        a: "Colors and finishes, names or dates, inlays (flowers, glitter, artistic effects), formats and dimensions. We bring your ideas to life with a touch of refinement.",
      },
      {
        q: "How does payment work?",
        a: "Payment is structured as follows: 75% at order for validation and production launch, 25% remaining at delivery or pickup.",
      },
      {
        q: "Why is a deposit required?",
        a: "Since each creation is made with care, the deposit guarantees the mobilization of materials and the start of artisanal work.",
      },
      {
        q: "What payment methods do you accept?",
        a: "MTN Mobile Money and Orange Money.",
      },
      {
        q: "What is the production timeline?",
        a: "For resin objects: 3 days. Beyond 3 days for large quantities. For gypsum objects: 5 days. Beyond 5 days for large quantities. After order validation.",
      },
      {
        q: "Where do you deliver?",
        a: "Chic Design delivers exclusively in Cameroon.",
      },
      {
        q: "What are the delivery days?",
        a: "Deliveries are made only on Saturdays, to ensure optimal organization and quality service.",
      },
      {
        q: "Can I pick up my order myself?",
        a: "Yes. You can pick up your order at our workshop located in the Tsinga neighborhood of Yaoundé. Details are communicated after validation.",
      },
      {
        q: "What types of products do you offer?",
        a: "Decorative vases, designer trays, resin jewelry, photo frames, artistic paintings, statuettes, flower pots, pens, agendas, catch-alls, clocks, keychains, boxes, tables, resin floors, and personalized decorative objects.",
      },
      {
        q: "Do you offer professional resin work?",
        a: "Yes. We also carry out resin floor coverings, with an aesthetic, modern and durable finish.",
      },
      {
        q: "Are your products durable?",
        a: "Yes. Gypsum objects last at least 10 years if well maintained. Resin objects have an indefinite lifespan.",
      },
      {
        q: "Are the objects fragile?",
        a: "Our pieces are solid, but remain decorative objects. Careful handling is recommended as gypsum objects are breakable.",
      },
      {
        q: "How do I maintain the creations?",
        a: "Clean with a soft cloth. Avoid aggressive chemicals. Avoid prolonged exposure to water for gypsum.",
      },
      {
        q: "Can I cancel my order?",
        a: "Personalized orders cannot be canceled after validation.",
      },
      {
        q: "Are products refundable?",
        a: "Personalized creations are not refundable, except in case of proven defect.",
      },
      {
        q: "What to do in case of a problem?",
        a: "Contact us quickly with a photo of the product concerned. We will treat your request with the greatest attention.",
      },
      {
        q: "Are your products suitable for gifts?",
        a: "Perfectly. Our creations are ideal for special events, personalized gifts, and high-end interior decoration.",
      },
      {
        q: "Do you accept large quantity orders?",
        a: "Yes, for events, companies, or specific projects. We offer solutions adapted to your needs.",
      },
    ],

    // Black Friday
    bfTitle: "BLACK FRIDAY EVERY FRIDAY AT OUR STORE",
    bfSubtitle: "Welcome to a universe where art and creativity meet at exceptional prices!",
    bfDesc1:
      "Every Friday, we transform your shopping experience into a truly unique opportunity: it's our weekly Black Friday. A special day dedicated to all lovers of decoration, handmade objects, and original creations.",
    bfDesc2:
      "All our items made from gypsum and resin are offered at the unique and incredible price of only 5,000 FCFA.",
    bfDesc3:
      "Whether to beautify your home, offer a special gift, or simply treat yourself, it's the ideal time to discover unique handmade pieces, carefully designed with passion and creativity.",
    bfDesc4:
      "Each object tells a story, each detail is handcrafted to offer you authentic quality and design.",
    bfDesc5:
      "But beware: this offer is only available every Friday, so don't miss this exceptional day!",
    bfDesc6:
      "Join us every week to enjoy your artisanal Black Friday and bring your interior to life with style and originality.",
    bfCta: "SHOP THE DEAL",
    bfBadge: "ALL ITEMS AT 5,000 FCFA",

    // Contact / WhatsApp Form
    contactTitle: "Contact Us",
    contactSubtitle: "A question? An order? Let's talk on WhatsApp.",
    contactName: "Your Name",
    contactPurpose: "Purpose",
    contactPurposeOrder: "Order",
    contactPurposeQuestion: "Question",
    contactPurposeCustom: "Customization",
    contactPurposeOther: "Other",
    contactMessage: "Your Message",
    contactSend: "Send on WhatsApp",
    contactPhone: "Phone",

    // Footer
    footerLinks: "Links",
    footerShop: "Shop",
    footerSupport: "Support",
    footerSocials: "Socials",
    footerRights: "All rights reserved. Chic Design.",
    footerPayment: "Payment: MTN Mobile Money | Orange Money",
    footerDelivery: "Saturday delivery — Cameroon only",

    // Admin
    adminTitle: "Product Management",
    adminPassword: "Password",
    adminLogin: "Access",
    adminWrongPassword: "Incorrect password",
    adminAddProduct: "Add Product",
    adminEditProduct: "Edit",
    adminDeleteProduct: "Delete",
    adminSave: "Save",
    adminCancel: "Cancel",
    adminProductName: "Name (FR)",
    adminProductNameEn: "Name (EN)",
    adminProductPrice: "Price (XAF)",
    adminProductCategory: "Category",
    adminProductImage: "Image URL",
    adminProductStock: "Stock",
    adminProductDesc: "Description (FR)",
    adminProductDescEn: "Description (EN)",

    // Misc
    language: "Language",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    close: "Close",
    loading: "Loading...",
    xaf: "XAF",
  },
} as const;

export type Translations = typeof translations;

export function t(key: keyof Translations["fr"], lang: Lang): string {
  const val = translations[lang][key];
  return typeof val === "string" ? val : "";
}
