/* ========================================
   i18n.js — Traductions FR / EN / NL
   Utilise data-i18n, data-i18n-html,
   data-i18n-placeholder sur les éléments HTML
   ======================================== */

(function () {
  'use strict';

  const translations = {
    fr: {
      'hero.subtitle': 'Nous nous marions',
      'hero.date':     '15 mai 2026',
      'hero.cta':      'Découvrir',

      'details.title':    'La Célébration',
      'details.subtitle': 'Nous vous invitons à célébrer notre union',
      'details.subtitle2': 'voici le programme',
      'details.date':     'Le vendredi 15 mai 2026',
      'details.date2':    'Le samedi 16 mai 2026',

      'civil.title': 'Mariage civil',
      'civil.place': 'Mairie de Bacqueville-en-Caux',
      'civil.desc':  'Nous avons la joie de vous convier pour le mariage civil.',

      'laique.title': 'Cérémonie laïque',
      'laique.place': 'École élémentaire Thomas Pesquet<br>Bacqueville-en-Caux',
      'laique.desc':  'Les "oui" officiels prononcés, place à la cérémonie laïque, voyage entre nos histoires, nos familles et les promesses que nous choisissons d\'honorer.',

      'vin.title': "Vin d'honneur",
      'vin.place': 'École élémentaire Thomas Pesquet<br>Bacqueville-en-Caux',
      'vin.desc':  "Après l'émotion, la joie, on se retrouve pour le vin d'honneur, partageons rires, verres levés et l'envie simple de profiter.",

      'countdown.title':   'Compte à Rebours',
      'countdown.days':    'Jours',
      'countdown.hours':   'Heures',
      'countdown.minutes': 'Minutes',
      'countdown.seconds': 'Secondes',

      'info.title': 'Infos Pratiques',

      'dresscode.title': 'Code vestimentaire',
      'dresscode.desc':  "Faites vous plaisir mais prévoyez une tenue plus décontractée pour le lendemain.",

      'liste.title': 'Liste de Mariage',
      'liste.desc':  'Votre présence est notre plus beau cadeau. Si vous souhaitez contribuer, une urne sera à disposition.',

      'capsule.title': 'Capsule temporelle',
      'capsule.desc1': 'Lors de notre mariage, nous créerons une capsule temporelle que nous ouvrirons lors de notre 5ème anniversaire.',
      'capsule.desc2': 'Toute participation : lettre, photo, objet symbolique, est la bienvenue.',

      'rsvp.title':       'Une question ?',
      'rsvp.intro':       "Une information, une question ? N'hésitez pas à nous contacter.",

      'footer.date': '15 Mai 2026',
    },

    en: {
      'hero.subtitle': "We're getting married",
      'hero.date':     'May 15, 2026',
      'hero.cta':      'Discover',

      'details.title':    'The Celebration',
      'details.subtitle': 'We invite you to celebrate our union',
      'details.subtitle2': 'here is the programme',
      'details.date':     'Friday, May 15, 2026',
      'details.date2':    'Saturday, May 16, 2026',

      'civil.title': 'Civil ceremony',
      'civil.place': 'Town hall — Bacqueville-en-Caux',
      'civil.desc':  'We are delighted to invite you to our civil wedding ceremony.',

      'laique.title': 'Secular ceremony',
      'laique.place': 'Thomas Pesquet primary school<br>Bacqueville-en-Caux',
      'laique.desc':  "With the official \"I do's\" exchanged, we invite you to a secular ceremony — a journey through our stories, our families and the promises we choose to honour.",

      'vin.title': 'Cocktail hour',
      'vin.place': 'Thomas Pesquet primary school<br>Bacqueville-en-Caux',
      'vin.desc':  'After the emotion and joy, we gather for drinks — laughter, raised glasses and the simple pleasure of being together.',

      'countdown.title':   'Countdown',
      'countdown.days':    'Days',
      'countdown.hours':   'Hours',
      'countdown.minutes': 'Minutes',
      'countdown.seconds': 'Seconds',

      'info.title': 'Practical Info',

      'dresscode.title': 'Dress code',
      'dresscode.desc':  "Feel free to dress up, but remember a more relaxed outfit for the day after!",

      'liste.title': 'Wedding List',
      'liste.desc':  'Your presence is our greatest gift. If you wish to contribute, a collection box will be available.',

      'capsule.title': 'Time capsule',
      'capsule.desc1': 'At our wedding, we will create a time capsule to be opened on our 5th anniversary.',
      'capsule.desc2': 'Any contribution — a letter, photo or meaningful object — is welcome.',

      'rsvp.title':       'A question?',
      'rsvp.intro':       "Any information, a question? Don't hesitate to get in touch.",

      'footer.date': 'May 15, 2026',
    },

    nl: {
      'hero.subtitle': 'We gaan trouwen',
      'hero.date':     '15 mei 2026',
      'hero.cta':      'Ontdekken',

      'details.title':    'De Viering',
      'details.subtitle': 'We nodigen u uit om ons huwelijk te vieren',
      'details.subtitle2': 'dit is het programma',
      'details.date':     'Vrijdag 15 mei 2026',
      'details.date2':    'Zaterdag 16 mei 2026',

      'civil.title': 'Burgerlijk huwelijk',
      'civil.place': 'Gemeentehuis — Bacqueville-en-Caux',
      'civil.desc':  'Wij hebben de vreugde u uit te nodigen voor het burgerlijk huwelijk.',

      'laique.title': 'Burgerlijke ceremonie',
      'laique.place': 'Basisschool Thomas Pesquet<br>Bacqueville-en-Caux',
      'laique.desc':  "Na de officiële \"ja's\" volgt de burgerlijke ceremonie — een reis door onze verhalen, onze families en de beloften die we kiezen te eren.",

      'vin.title': 'Receptie',
      'vin.place': 'Basisschool Thomas Pesquet<br>Bacqueville-en-Caux',
      'vin.desc':  'Na de emotie en de vreugde komen we samen voor de receptie — lachen, heffende glazen en het plezier van samen zijn.',

      'countdown.title':   'Aftellen',
      'countdown.days':    'Dagen',
      'countdown.hours':   'Uren',
      'countdown.minutes': 'Minuten',
      'countdown.seconds': 'Seconden',

      'info.title': 'Praktische Info',

      'dresscode.title': 'Kledingadvies',
      'dresscode.desc':  'Voel je vrij om je op te kleden, maar vergeet niet een meer ontspannen outfit voor de dag erna!',

      'liste.title': 'Huwelijkslijst',
      'liste.desc':  'Uw aanwezigheid is ons mooiste cadeau. Als u wilt bijdragen, is er een collectebus beschikbaar.',

      'capsule.title': 'Tijdcapsule',
      'capsule.desc1': 'Op ons huwelijk maken we een tijdcapsule die we openen op ons 5e jubileum.',
      'capsule.desc2': 'Elke bijdrage — een brief, foto of symbolisch object — is van harte welkom.',

      'rsvp.title':       'Een vraag?',
      'rsvp.intro':       'Informatie, een vraag? Aarzel niet om contact met ons op te nemen.',

      'footer.date': '15 Mei 2026',
    },
  };

  function applyLang(lang) {
    const t = translations[lang] || translations.fr;
    document.documentElement.lang = lang;

    // textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // innerHTML (éléments avec <br> ou balises internes)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // placeholder des champs de formulaire
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.dataset.i18nPlaceholder;
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // état actif du bouton
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('lang', lang);
  }

  function init() {
    const saved   = localStorage.getItem('lang');
    const browser = (navigator.language || 'fr').slice(0, 2);
    const lang    = saved || (translations[browser] ? browser : 'fr');
    applyLang(lang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.dataset.lang);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
