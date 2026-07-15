import type { L } from '../types'

/**
 * Contenu au niveau du LIVRE (pas du concept), bilingue :
 * - `pitch` : la description sous le post — présente le livre pour donner envie.
 * - `blurb` : l’aperçu injecté en slide 2 — donne le contexte du livre.
 */
export interface BookExtra {
  pitch: L
  blurb: L
}

export const bookExtras: Record<string, BookExtra> = {
  "atomic-habits": {
    "pitch": {
      "fr": "Le guide culte pour arrêter de compter sur la motivation et construire des habitudes qui tiennent vraiment. Concret et appuyé sur la science du comportement, il change la façon dont on bâtit sa vie — un petit geste à la fois. ⚛️",
      "en": "The cult guide to stop relying on motivation and build habits that actually stick. Practical and grounded in behavioral science, it changes how you build your life — one small action at a time. ⚛️"
    },
    "blurb": {
      "fr": "Devenu une référence mondiale du développement personnel, Atomic Habits propose un système complet pour transformer ses habitudes. L'idée centrale : ce ne sont pas les objectifs, mais les petites routines quotidiennes, composées dans le temps, qui décident de nos résultats.",
      "en": "Now a global reference in personal growth, Atomic Habits lays out a complete system for transforming your habits. Its core idea: it isn't goals but the small daily routines, compounded over time, that decide your results."
    }
  },
  "working-in-public": {
    "pitch": {
      "fr": "Et si le plus dur, dans l'open source, n'était pas d'écrire du code, mais de survivre à son succès ? Nadia Eghbal plonge dans le quotidien des mainteneurs pour mettre au jour l'économie invisible des logiciels qui font tourner Internet.",
      "en": "What if the hardest part of open source isn't writing code, but surviving its success? Nadia Eghbal digs into the daily lives of maintainers to expose the invisible economy behind the software that quietly runs the internet."
    },
    "blurb": {
      "fr": "Publié chez Stripe Press, Working in Public examine comment se fabriquent et s'entretiennent les logiciels open source, en s'appuyant largement sur l'expérience de GitHub. Sa thèse centrale : l'open source s'est éloigné du modèle communautaire pour se rapprocher de la logique des créateurs, où quelques mainteneurs assument l'essentiel du travail. Le vrai coût n'est pas de produire du code, mais de gérer l'attention, la maintenance et les demandes des utilisateurs à grande échelle.",
      "en": "Published by Stripe Press, Working in Public examines how open source software actually gets built and maintained, drawing heavily on the experience of GitHub. Its central argument: open source has drifted away from the community model toward something closer to solo creators, where a handful of maintainers shoulder most of the work. The real cost isn't producing code, but managing attention, maintenance, and user demands at scale."
    }
  },
  "high-growth-handbook": {
    "pitch": {
      "fr": "Le manuel de référence pour piloter une entreprise en hypercroissance, de la première embauche clé aux milliers de salariés. Nourri d'entretiens avec des fondateurs et des opérateurs qui l'ont vécu, c'est un guide devenu incontournable dans la tech. 🚀",
      "en": "The go-to playbook for steering a company through hyper-growth, from your first key hire to thousands of employees. Built on interviews with founders and operators who've done it, it's become a staple among tech leaders. 🚀"
    },
    "blurb": {
      "fr": "Écrit par l'investisseur et entrepreneur Elad Gil et publié par Stripe Press, High Growth Handbook aborde les défis concrets du passage à l'échelle : l'évolution du rôle du CEO, le recrutement d'une équipe dirigeante, la gestion du board, l'organisation, le marketing ou encore les acquisitions. Le livre alterne conseils pratiques et entretiens avec des fondateurs et opérateurs expérimentés. Son idée centrale : la croissance rapide crée une nouvelle catégorie de problèmes, que l'on surmonte mieux en apprenant de ceux qui les ont déjà affrontés.",
      "en": "Written by investor and entrepreneur Elad Gil and published by Stripe Press, High Growth Handbook tackles the real challenges of scaling: the CEO's evolving role, hiring an executive team, managing the board, org design, marketing, and acquisitions. It blends practical guidance with interviews of seasoned founders and operators. Its core idea: rapid growth creates a whole new class of problems, and navigating them is best learned from the people who've already faced them."
    }
  },
  "revolt-of-the-public": {
    "pitch": {
      "fr": "Un ancien analyste de la CIA décrypte pourquoi, à l'ère d'Internet, un public en colère fait vaciller gouvernements, médias et experts partout dans le monde. Un essai influent pour comprendre le désordre politique de notre époque.",
      "en": "A former CIA analyst explains why, in the internet age, an angry public is shaking governments, media, and experts across the globe. An influential read for making sense of our era's political turmoil."
    },
    "blurb": {
      "fr": "Dans The Revolt of the Public, Martin Gurri analyse comment l'explosion de l'information numérique a brisé le monopole des élites sur le récit public. Sa thèse centrale : des foules connectées et défiantes savent désormais renverser les institutions et l'autorité établie, mais peinent à proposer autre chose à la place. Un essai clé pour comprendre les révoltes contemporaines et la crise de l'autorité du nouveau millénaire.",
      "en": "In The Revolt of the Public, Martin Gurri examines how the flood of digital information shattered the elites' monopoly on the public narrative. His central claim: connected, distrustful crowds can now topple institutions and established authority, yet struggle to offer anything to replace them. A key essay for understanding today's revolts and the crisis of authority in the new millennium."
    }
  },
  "scaling-people": {
    "pitch": {
      "fr": "L'ancienne directrice des opérations de Stripe transforme des années de terrain en un manuel concret pour recruter, encadrer et faire grandir des équipes sans casser ce qui marche. Un guide de référence pour quiconque doit passer de \"faire\" à \"faire faire\".",
      "en": "Stripe's former COO turns years in the trenches into a hands-on manual for hiring, managing, and growing teams without breaking what works. A go-to guide for anyone moving from doing the work to leading the people who do it."
    },
    "blurb": {
      "fr": "Écrit par Claire Hughes Johnson, ancienne directrice des opérations de Stripe et vétérane de Google, Scaling People : Tactics for Management and Company Building est un guide pratique du management et de la construction d'entreprise. Son idée centrale : diriger et faire grandir des équipes est une discipline qui s'apprend, pas un don inné. Le livre propose des cadres, des principes opérationnels et des modèles concrets — de la connaissance de soi au recrutement, au feedback et à la planification — pour bâtir des organisations qui tiennent la montée en échelle.",
      "en": "Written by Claire Hughes Johnson, Stripe's former COO and a Google veteran, Scaling People: Tactics for Management and Company Building is a practical guide to management and company building. Its core idea: leading and growing teams is a discipline you can learn, not an innate gift. The book offers concrete frameworks, operating principles, and templates — from self-awareness to hiring, feedback, and planning — to build organizations that hold up as they scale."
    }
  },
  "an-elegant-puzzle": {
    "pitch": {
      "fr": "Le manuel de survie du manager d'ingénierie : Will Larson y traite chaque casse-tête d'organisation — équipes, dette technique, migrations, croissance — comme un système à comprendre plutôt qu'un feu à éteindre. Précis, honnête et directement applicable au quotidien. 🧩",
      "en": "The engineering manager's survival kit: Will Larson treats every org puzzle — teams, technical debt, migrations, growth — as a system to understand rather than a fire to fight. Precise, honest, and genuinely practical day to day. 🧩"
    },
    "blurb": {
      "fr": "Publié par Stripe Press, An Elegant Puzzle rassemble les leçons de Will Larson, ingénieur devenu dirigeant technique (Stripe, Uber, Digg). Le livre applique la pensée systémique aux défis du management d'ingénierie : dimensionner les équipes, concevoir l'organisation, arbitrer la dette technique ou piloter les migrations. Son idée centrale : ces problèmes complexes se résolvent moins par l'instinct que par des systèmes clairs, des outils réutilisables et de la rigueur.",
      "en": "Published by Stripe Press, An Elegant Puzzle gathers the lessons of Will Larson, an engineer turned engineering leader (Stripe, Uber, Digg). The book applies systems thinking to the challenges of engineering management: sizing teams, designing the organization, weighing technical debt, and steering migrations. Its core idea is that these tangled problems yield less to instinct than to clear systems, reusable tools, and discipline."
    }
  },
  "ask-your-developer": {
    "pitch": {
      "fr": "Le manifeste du cofondateur de Twilio pour cesser de voir les développeurs comme un centre de coûts et en faire le moteur créatif de l'entreprise. À l'ère du logiciel, mieux vaut construire que subir : ceux qui savent bâtir prennent l'avantage.",
      "en": "Twilio's co-founder makes the case for treating developers not as a cost center but as the creative engine of your company. In the software era it's build or die — and the builders win."
    },
    "blurb": {
      "fr": "Écrit par Jeff Lawson, cofondateur et ancien PDG de Twilio, Ask Your Developer explique pourquoi, dans l'économie numérique, toute entreprise devient une entreprise de logiciel. Son idée centrale : les développeurs ne sont pas de simples exécutants mais des résolveurs de problèmes ; en leur confiant les vrais enjeux métier plutôt que des cahiers des charges rigides, on libère l'innovation. Un plaidoyer concret pour bâtir une culture qui s'appuie sur celles et ceux qui savent réellement construire.",
      "en": "Written by Jeff Lawson, co-founder and former CEO of Twilio, Ask Your Developer argues that in the digital economy every company is becoming a software company. Its core idea: developers aren't order-takers but problem-solvers — hand them the real business challenges instead of rigid specs and you unlock innovation. A practical case for building a culture that leans on the people who can actually build."
    }
  },
  "poor-charlies-almanack": {
    "pitch": {
      "fr": "La sagesse de Charlie Munger, associé de longue date de Warren Buffett, réunie en un seul volume : discours, conseils de vie et modèles mentaux pour mieux penser et mieux décider. Un manuel pour affûter son jugement dans tous les domaines.",
      "en": "The collected wisdom of Charlie Munger, Warren Buffett's longtime partner: speeches, life advice, and mental models for thinking clearly and deciding well. A handbook to sharpen your judgment across every field."
    },
    "blurb": {
      "fr": "Titré en clin d'œil au \"Poor Richard's Almanack\" de Benjamin Franklin, cet ouvrage rassemble les discours et réflexions de Charlie Munger, vice-président de Berkshire Hathaway et associé de Warren Buffett. Son idée centrale : la \"sagesse du monde\" s'acquiert en combinant les grandes idées de nombreuses disciplines — un \"treillis de modèles mentaux\" — plutôt qu'en s'enfermant dans une seule spécialité. On y apprend aussi à penser à l'envers (l'inversion) et à traquer ses propres biais.",
      "en": "Titled as a nod to Benjamin Franklin's \"Poor Richard's Almanack,\" this volume gathers the speeches and reflections of Charlie Munger, vice chairman of Berkshire Hathaway and Warren Buffett's partner. Its central idea: \"worldly wisdom\" comes from combining the big ideas of many disciplines — a \"latticework of mental models\" — rather than staying confined to a single specialty. It also teaches thinking backwards (inversion) and hunting down your own biases."
    }
  },
  "stubborn-attachments": {
    "pitch": {
      "fr": "Et si la croissance économique était d'abord une question morale ? Tyler Cowen défend une idée limpide et dérangeante : ce que nous devons à l'avenir se joue dans les décimales du taux de croissance, composées sur des générations. 📈",
      "en": "What if economic growth were first of all a moral question? Tyler Cowen makes a clear and unsettling case: what we owe the future hinges on the decimals of the growth rate, compounded across generations. 📈"
    },
    "blurb": {
      "fr": "Publié par Stripe Press, Stubborn Attachments est le manifeste philosophique de l'économiste Tyler Cowen. Sa thèse : les sociétés devraient viser une croissance économique durable sur le long terme, car un écart minime aujourd'hui, composé dans le temps, transforme radicalement le sort des générations futures. Cet impératif reste encadré par un respect quasi absolu des droits humains et par une réelle prise au sérieux du futur lointain.",
      "en": "Published by Stripe Press, Stubborn Attachments is economist Tyler Cowen's philosophical manifesto. Its thesis: societies should aim for sustainable long-term economic growth, because a tiny difference today, compounded over time, radically reshapes the lives of future generations. That imperative stays bounded by a near-absolute respect for human rights and by taking the distant future seriously."
    }
  },
  "where-is-my-flying-car": {
    "pitch": {
      "fr": "Où sont passées les voitures volantes qu'on nous avait promises ? J. Storrs Hall enquête sur le grand ralentissement technologique de l'après-1970 et soutient que ce futur était à notre portée — avant qu'on renonce à le bâtir.",
      "en": "Where are the flying cars we were promised? J. Storrs Hall investigates the great technological slowdown that set in after 1970 and argues that future was within reach — before we gave up on building it."
    },
    "blurb": {
      "fr": "Publié par Stripe Press, Where Is My Flying Car? part d'une question d'enfance pour disséquer le ralentissement de l'innovation depuis les années 1970. Chercheur en nanotechnologie, J. Storrs Hall y défend une thèse nette : ce n'est pas la physique qui nous a arrêtés, mais l'essoufflement de la croissance de notre consommation d'énergie, doublé d'une frilosité culturelle et réglementaire qui a bridé nos plus grandes ambitions techniques.",
      "en": "Published by Stripe Press, Where Is My Flying Car? uses a childhood question to dissect why innovation slowed after the 1970s. Nanotechnology researcher J. Storrs Hall makes a pointed case: physics didn't stop us — the flattening of our energy-use growth did, together with a cultural and regulatory timidity that throttled our boldest engineering ambitions."
    }
  },
  "art-of-doing-science": {
    "pitch": {
      "fr": "Les leçons d'un pionnier de l'informatique sur ce qui fait vraiment la grande science : moins les formules que la façon de penser. Un livre pour apprendre à apprendre, et rester pertinent quand tout le reste devient obsolète. 🧠",
      "en": "A computing pioneer's lessons on what really makes great science: not the formulas so much as the way of thinking. A book about learning to learn, so you stay relevant long after the facts go stale. 🧠"
    },
    "blurb": {
      "fr": "Tiré d'un cours donné par Richard Hamming, pionnier de l'informatique et lauréat du prix Turing, ce livre transmet moins des connaissances techniques qu'une façon de penser. Son idée centrale : dans un monde qui change vite, l'essentiel n'est pas ce que l'on sait, mais la capacité à apprendre à apprendre — et à viser un travail qui compte vraiment. Réédité par Stripe Press.",
      "en": "Drawn from a course taught by Richard Hamming, computing pioneer and Turing Award winner, this book passes on a style of thinking rather than a set of techniques. Its central idea: in a fast-changing world, what matters isn't what you know but your ability to learn how to learn — and to aim for work that truly matters. Reissued by Stripe Press."
    }
  },
  "get-together": {
    "pitch": {
      "fr": "Le guide de terrain pour bâtir une communauté vivante — pas pour les gens, mais avec eux. Concret et nourri d'exemples réels, il montre comment rassembler, faire grandir et faire durer un groupe qui compte vraiment.",
      "en": "The field guide to building a vibrant community — not for people, but with them. Concrete and packed with real-world examples, it shows how to gather, grow, and sustain a group that genuinely matters."
    },
    "blurb": {
      "fr": "Écrit par les trois fondateurs de People & Company, un cabinet spécialisé dans la construction de communautés, et publié par Stripe Press, Get Together est un manuel pratique pour créer et faire vivre une communauté. Son idée centrale : une communauté forte ne se construit pas seul dans son coin, mais avec ses membres, en partant de la passion partagée plutôt que du nombre. Le livre déroule des principes simples — trouver son peuple, l'inviter à agir, passer le relais — illustrés par des cas concrets.",
      "en": "Written by the three founders of People & Company, a consultancy focused on community building, and published by Stripe Press, Get Together is a hands-on manual for creating and sustaining a community. Its central idea: strong communities aren't built alone, they're built with their members, starting from shared passion rather than sheer numbers. The book lays out simple principles — find your people, invite them to act, hand off the work — grounded in real-world examples."
    }
  },
  "the-dream-machine": {
    "pitch": {
      "fr": "L'histoire méconnue de l'homme qui a imaginé l'ordinateur comme un prolongement de l'esprit humain, bien avant le PC et Internet. Un récit captivant sur la naissance de l'informatique interactive et les visionnaires qui l'ont rendue possible.",
      "en": "The overlooked story of the man who imagined the computer as an extension of the human mind, long before the PC and the internet. A gripping account of how interactive computing was born, and the visionaries who made it real."
    },
    "blurb": {
      "fr": "The Dream Machine retrace la révolution informatique à travers la vie de J.C.R. Licklider, psychologue devenu l'un de ses architectes les plus discrets. Son idée centrale : plutôt que de remplacer l'humain, l'ordinateur devait devenir son partenaire — une « symbiose homme-machine ». En finançant et en inspirant les recherches clés, Licklider a contribué à poser les fondations de l'ordinateur personnel et des réseaux qui allaient tout transformer.",
      "en": "The Dream Machine traces the computing revolution through the life of J.C.R. Licklider, a psychologist who became one of its quietest architects. His central idea: rather than replace people, the computer should become their partner — a \"man-computer symbiosis.\" By funding and inspiring the key research, Licklider helped lay the foundations for personal computing and the networks that would transform everything."
    }
  },
  "making-of-prince-of-persia": {
    "pitch": {
      "fr": "Le journal intime, drôle et sans filtre du jeune développeur qui a créé Prince of Persia dans les années 1980. Entre doute, ambition et lignes de code, on assiste de l'intérieur à la naissance d'un jeu culte — et d'un artiste.",
      "en": "The unfiltered, funny personal journal of the young developer who created Prince of Persia in the 1980s. Between doubt, ambition and lines of code, you witness the birth of a landmark game — and of an artist — from the inside."
    },
    "blurb": {
      "fr": "Réédité par Stripe Press, ce livre rassemble les carnets que Jordan Mechner a tenus pendant les années de création de Prince of Persia. On y suit un jeune homme partagé entre la programmation, le cinéma et l'incertitude, qui met au point son jeu pas à pas. L'idée centrale : derrière une œuvre marquante, il y a surtout de la persévérance, des ratés et une vie ordinaire qui suit son cours.",
      "en": "Reissued by Stripe Press, this book collects the journals Jordan Mechner kept during the years he spent creating Prince of Persia. It follows a young man torn between coding, filmmaking and self-doubt as he builds his game step by step. The core idea: behind a landmark work lies mostly persistence, false starts and an ordinary life quietly moving forward."
    }
  },
  "the-man-from-the-future": {
    "pitch": {
      "fr": "Un seul homme a fondé la théorie des jeux, dessiné l'architecture de l'ordinateur moderne et contribué à la mise au point de la bombe atomique : plongez dans la vie vertigineuse de John von Neumann, un esprit qui semblait penser plus vite que son époque.",
      "en": "One mind founded game theory, drew up the blueprint of the modern computer and helped build the atomic bomb: step into the dizzying life of John von Neumann, a brain that seemed to think faster than its age."
    },
    "blurb": {
      "fr": "Signé par le physicien et journaliste scientifique Ananyo Bhattacharya, The Man from the Future retrace la vie de John von Neumann, polymathe d'origine hongroise à l'intelligence légendaire. Le livre suit le fil de ses idées — fondements mathématiques de la mécanique quantique, théorie des jeux, architecture des ordinateurs, automates auto-reproducteurs — pour montrer comment un seul esprit a façonné une bonne part de notre monde technologique.",
      "en": "Written by physicist and science writer Ananyo Bhattacharya, The Man from the Future tells the life of John von Neumann, the Hungarian-born polymath of legendary intelligence. The book follows the thread of his ideas — the mathematical foundations of quantum mechanics, game theory, computer architecture, self-replicating automata — to show how a single mind shaped much of our technological world."
    }
  },
  "pieces-of-the-action": {
    "pitch": {
      "fr": "Les mémoires de l'homme qui a organisé la science américaine pendant la Seconde Guerre mondiale. Une leçon lucide et durement acquise sur l'art de mener de grands projets à bien au sein des institutions. ⚙️",
      "en": "The memoir of the man who organized American science during World War II. A clear-eyed, hard-won lesson in the art of getting big things done inside institutions. ⚙️"
    },
    "blurb": {
      "fr": "Vannevar Bush a dirigé l'effort scientifique américain durant la Seconde Guerre mondiale, coordonnant chercheurs, militaires et pouvoirs publics à une échelle inédite. Dans ce livre, il revient sur cette expérience pour transmettre ce qu'il a appris sur l'action : comment constituer des équipes, composer avec les institutions et transformer des idées en résultats concrets.",
      "en": "Vannevar Bush led the American scientific effort during World War II, coordinating researchers, the military, and government at an unprecedented scale. Here he looks back on that experience to pass on what he learned about action: how to build teams, work across institutions, and turn ideas into real-world results."
    }
  },
  "the-lean-startup": {
    "pitch": {
      "fr": "Le livre qui a marqué la façon de lancer un projet : arrêter de deviner, tester vite et laisser les clients décider. Une méthode directe et concrète pour bâtir sans gaspiller ni temps ni argent.",
      "en": "The book that reshaped how new ventures get built: stop guessing, test fast, and let real customers decide. A sharp, hands-on method for building without wasting time or money."
    },
    "blurb": {
      "fr": "Devenu une référence de l'entrepreneuriat moderne, The Lean Startup applique l'esprit du \"lean\" à la création de produits en environnement incertain. Eric Ries y défend l'apprentissage validé : construire un produit minimum viable (MVP), mesurer les réactions réelles des utilisateurs, puis apprendre et ajuster. Son moteur, la boucle \"Construire-Mesurer-Apprendre\", aide à savoir quand persévérer et quand pivoter.",
      "en": "A cornerstone of modern entrepreneurship, The Lean Startup brings \"lean\" thinking to building products under deep uncertainty. Eric Ries makes the case for validated learning: ship a minimum viable product (MVP), measure how real users respond, then learn and adjust. Its engine, the Build-Measure-Learn loop, helps founders know when to persevere and when to pivot."
    }
  },
  "zero-to-one": {
    "pitch": {
      "fr": "Le manifeste contrariant de Peter Thiel sur l'innovation : mieux vaut créer quelque chose d'unique que copier ce qui existe déjà. Un livre bref et provocateur qui remet en question les idées reçues sur les startups et la concurrence.",
      "en": "Peter Thiel's contrarian manifesto on innovation: better to build something singular than to copy what already exists. A short, provocative book that challenges the received wisdom about startups and competition."
    },
    "blurb": {
      "fr": "Né du cours donné par Peter Thiel à Stanford en 2012 et co-écrit avec Blake Masters, Zero to One (2014) est devenu une référence de la pensée startup. Son idée centrale : le vrai progrès consiste à passer de 0 à 1, autrement dit à créer du neuf plutôt qu'à imiter ce qui existe déjà (aller de 1 à n). Pour Thiel, cofondateur de PayPal, les entreprises qui comptent ne cherchent pas à battre la concurrence mais à l'éviter, en bâtissant un monopole fondé sur une technologie propriétaire.",
      "en": "Born from Peter Thiel's 2012 Stanford course and co-written with Blake Masters, Zero to One (2014) has become a reference point in startup thinking. Its central idea: real progress means going from 0 to 1 — creating something new rather than imitating what already exists (going from 1 to n). For Thiel, PayPal's co-founder, the companies that matter don't try to beat the competition but to escape it, by building a monopoly grounded in proprietary technology."
    }
  },
  "hard-thing-about-hard-things": {
    "pitch": {
      "fr": "Le manuel de survie des dirigeants, écrit par quelqu'un qui a traversé le pire : licenciements, quasi-faillite, décisions impossibles. Ben Horowitz raconte sans filtre ce que personne ne t'apprend : diriger quand il n'existe aucune bonne réponse.",
      "en": "The survival manual for leaders, written by someone who lived through the worst: layoffs, near-bankruptcy, impossible calls. Ben Horowitz tells it straight — what nobody teaches you about leading when there are no good answers."
    },
    "blurb": {
      "fr": "Cofondateur du fonds de capital-risque Andreessen Horowitz et ancien PDG dans la tech, Ben Horowitz s'appuie sur sa propre expérience à la tête d'entreprises technologiques pour aborder les situations que les manuels de management passent sous silence. Son idée centrale : il existe des recettes pour les problèmes faciles, jamais pour les vrais problèmes difficiles. Diriger dans la tourmente relève moins de la formule que du sang-froid, de l'honnêteté et de la capacité à agir quand tout s'effondre.",
      "en": "Co-founder of the venture capital firm Andreessen Horowitz and a former tech CEO, Ben Horowitz draws on his own experience running technology companies to tackle the situations that management books skip over. His core idea: there are recipes for easy problems, but never for the truly hard ones. Leading through crisis is less about formulas than about nerve, honesty, and the ability to act when everything is falling apart."
    }
  },
  "the-mom-test": {
    "pitch": {
      "fr": "Le petit livre qui apprend à parler à ses clients sans se faire mentir gentiment. Des questions concrètes pour savoir si votre idée tient vraiment la route — avant d'y laisser des mois. 👂",
      "en": "The short book that teaches you to talk to customers without being politely lied to. Concrete questions to find out whether your idea actually holds up — before you sink months into it. 👂"
    },
    "blurb": {
      "fr": "Devenu une référence pour les fondateurs et les créateurs de produits, The Mom Test est un guide pratique de l'entretien client. Son idée centrale : si vous demandez à votre mère si votre idée d'entreprise est bonne, elle vous dira oui — parce que c'est la mauvaise question. La solution n'est pas de reformuler son pitch, mais d'arrêter de vendre son idée : parler de la vie des gens, de leurs vrais problèmes et de ce qu'ils font déjà, pour que la vérité se révèle d'elle-même.",
      "en": "A go-to reference for founders and product builders, The Mom Test is a practical guide to customer interviews. Its core idea: if you ask your mom whether your business is a good idea, she'll say yes — because that's the wrong question. The fix isn't to reword your pitch but to stop selling your idea altogether: talk about people's real lives, their actual problems, and what they already do, so the truth comes out on its own."
    }
  },
  "founders-at-work": {
    "pitch": {
      "fr": "Avant de devenir des géants, PayPal, Apple ou Hotmail n'étaient que des idées fragiles, portées par des gens qui doutaient. Jessica Livingston donne la parole aux fondateurs eux-mêmes, sans filtre, pour raconter les vrais débuts d'une startup.",
      "en": "Before they became giants, PayPal, Apple and Hotmail were just fragile ideas, carried by people who had their doubts. Jessica Livingston lets the founders speak for themselves, unfiltered, to tell what a startup's earliest days really look like."
    },
    "blurb": {
      "fr": "Founders at Work rassemble des entretiens que Jessica Livingston, cofondatrice de Y Combinator, a menés avec les fondateurs de startups tech emblématiques comme Apple, PayPal, Hotmail ou Flickr. L'idée centrale : les débuts sont rarement glorieux, faits de pivots, de refus et d'improvisation. En écoutant ceux qui l'ont vécu, on comprend ce qui distingue vraiment ceux qui persévèrent.",
      "en": "Founders at Work gathers interviews that Jessica Livingston, a co-founder of Y Combinator, conducted with the founders of iconic tech startups such as Apple, PayPal, Hotmail and Flickr. The core idea: beginnings are rarely glamorous, full of pivots, rejections and improvisation. Hearing it from the people who lived through it reveals what truly sets apart those who keep going."
    }
  },
  "shoe-dog": {
    "pitch": {
      "fr": "Le récit intime et sans fard du fondateur de Nike sur les années de galère, de dettes et de doutes qui ont précédé le succès. Une leçon d'audace et de persévérance, racontée avec le souffle d'un roman d'aventure. 👟",
      "en": "Nike's founder tells the raw, personal story of the debt, doubt and scrappy hustle behind the swoosh. A lesson in nerve and perseverance, told with the pace of an adventure novel. 👟"
    },
    "blurb": {
      "fr": "Dans ce mémoire, Phil Knight raconte comment il a lancé Blue Ribbon Sports, devenue Nike, à partir d'une idée un peu folle : importer aux États-Unis des chaussures de course japonaises. Loin du mythe de l'entrepreneur infaillible, il dévoile les crises de trésorerie, les échecs et les paris risqués des débuts. L'idée centrale : bâtir quelque chose de grand tient moins au génie qu'au refus obstiné d'abandonner.",
      "en": "In this memoir, Phil Knight recounts how he built Blue Ribbon Sports — later Nike — from one improbable idea: importing Japanese running shoes into the United States. Far from the myth of the flawless founder, he lays bare the cash crises, failures and risky bets of the early years. The core idea: building something great owes less to genius than to a stubborn refusal to quit."
    }
  },
  "made-in-america": {
    "pitch": {
      "fr": "Le fondateur de Walmart raconte lui-même comment un simple magasin de province est devenu le plus grand distributeur du monde. Un récit direct et sans détour, porté par l'obsession du client et une frugalité légendaire.",
      "en": "Walmart's founder tells, in his own words, how a small-town store grew into the world's largest retailer. A plain-spoken, no-frills story driven by an obsession with the customer and legendary thrift."
    },
    "blurb": {
      "fr": "Écrite peu avant sa mort, l'autobiographie de Sam Walton retrace la naissance et l'ascension de Walmart, du premier magasin à un vaste réseau de points de vente. L'idée centrale : servir le client mieux et moins cher que quiconque, en gardant les coûts au plus bas et en apprenant en permanence de la concurrence comme de ses propres équipes.",
      "en": "Written near the end of his life, Sam Walton's autobiography traces the birth and rise of Walmart, from a single store to a vast network of outlets. Its core idea: serve the customer better and cheaper than anyone, by keeping costs low and constantly learning from competitors and your own people alike."
    }
  },
  "pour-your-heart-into-it": {
    "pitch": {
      "fr": "Celui qui a transformé un modeste torréfacteur de Seattle en géant mondial raconte sans détour comment bâtir une entreprise sans renier ses valeurs. Un récit d'ambition, de doutes et de conviction qui donne envie d'y mettre tout son cœur.",
      "en": "The man who turned a modest Seattle coffee roaster into a global giant tells the unvarnished story of how to build a company without betraying its values. A tale of ambition, doubt and conviction that makes you want to pour your heart into it."
    },
    "blurb": {
      "fr": "Dans cette autobiographie, Howard Schultz retrace l'essor de Starbucks : de son enfance modeste à Brooklyn jusqu'à la transformation d'une poignée de boutiques en une marque mondiale. L'idée centrale : une entreprise peut réussir tout en traitant ses employés avec respect et en restant fidèle à ses valeurs. Un plaidoyer pour un leadership guidé par la passion plutôt que par le seul profit.",
      "en": "In this autobiography, Howard Schultz recounts the rise of Starbucks: from his modest Brooklyn childhood to turning a handful of stores into a global brand. The core idea: a company can succeed while treating its people with respect and staying true to its values. A case for leadership driven by passion rather than profit alone."
    }
  },
  "losing-my-virginity": {
    "pitch": {
      "fr": "L'autobiographie franche et audacieuse du fondateur de Virgin, qui raconte comment il a bâti son groupe en misant sur l'instinct, le culot et le plaisir de dire oui. Le portrait d'un entrepreneur qui aime prendre des risques et apprendre en avançant.",
      "en": "The candid, daring autobiography of Virgin's founder, who recounts how he built his group on instinct, nerve and the sheer fun of saying yes. The portrait of an entrepreneur who loves to take risks and learn as he goes."
    },
    "blurb": {
      "fr": "Dans ce récit, Richard Branson retrace son parcours, du magazine étudiant lancé adolescent jusqu'au groupe Virgin, en passant par la musique, la compagnie aérienne et ses traversées en montgolfière. L'idée centrale : l'entreprise n'a pas à être ennuyeuse ni calculée à l'excès. Pour Branson, on avance en osant, en s'amusant et en apprenant sur le tas, plutôt qu'en attendant de se sentir prêt.",
      "en": "In this memoir, Richard Branson traces his path from the student magazine he launched as a teenager to the Virgin group, taking in music, an airline and his balloon crossings along the way. The core idea: business doesn't have to be dull or overly calculated. For Branson, you move forward by daring, having fun and learning on the job rather than waiting until you feel ready."
    }
  },
  "principles-dalio": {
    "pitch": {
      "fr": "Le fondateur de l'un des plus grands hedge funds au monde ouvre son carnet de règles : comment décider, assumer ses erreurs et regarder la réalité en face. Brut, méthodique et étonnamment personnel. 🧭",
      "en": "The founder of one of the world's largest hedge funds opens his rulebook: how to make decisions, own your mistakes and face reality head-on. Raw, methodical and surprisingly personal. 🧭"
    },
    "blurb": {
      "fr": "Mi-mémoires, mi-manuel, Principles rassemble les règles que Ray Dalio a forgées en bâtissant Bridgewater. Son idée centrale : traiter la vie et le travail comme des machines que l'on peut améliorer, en cultivant la « vérité radicale » et la « transparence radicale » pour mieux décider et apprendre de chaque échec.",
      "en": "Part memoir, part manual, Principles gathers the rules Ray Dalio forged while building Bridgewater. Its core idea: treat life and work as machines that can be improved, cultivating \"radical truth\" and \"radical transparency\" to make better decisions and learn from every failure."
    }
  },
  "carnegie-autobiography": {
    "pitch": {
      "fr": "De l'ouvrier immigré sans le sou au plus riche des magnats de l'acier de son époque : Carnegie raconte son ascension et sa conviction qu'une grande fortune n'a de sens que si elle sert le bien commun. Un récit direct sur l'ambition, le travail et le devoir de donner.",
      "en": "From penniless immigrant laborer to the richest steel magnate of his age: Carnegie tells the story of his rise and his belief that a great fortune only matters if it serves the common good. A candid account of ambition, hard work, and the duty to give back."
    },
    "blurb": {
      "fr": "Écrite par le géant de l'acier américain d'origine écossaise, cette autobiographie retrace un parcours hors norme, d'une enfance pauvre à Dunfermline jusqu'aux sommets de l'industrie aux États-Unis. Au cœur de sa pensée, son « Gospel of Wealth » : celui qui accumule une immense richesse n'en est que le gestionnaire et doit la redistribuer de son vivant pour le progrès de la société.",
      "en": "Written by the Scottish-born titan of American steel, this autobiography traces an extraordinary journey, from a poor childhood in Dunfermline to the heights of U.S. industry. At the heart of his thinking is his \"Gospel of Wealth\": whoever amasses great wealth is merely its steward and should give it away during his lifetime for the good of society."
    }
  },
  "my-life-and-work": {
    "pitch": {
      "fr": "Le récit à la première personne de l'homme qui a rendu l'automobile accessible au plus grand nombre. Ford y raconte le Model T, la chaîne de montage et sa conviction que l'industrie doit d'abord servir, pas seulement enrichir. 🚗",
      "en": "A first-person account from the man who made the automobile affordable to far more people. Ford recounts the Model T, the assembly line, and his conviction that industry should serve people first, not merely turn a profit. 🚗"
    },
    "blurb": {
      "fr": "Publié en 1922, My Life and Work mêle autobiographie et manifeste industriel. Henry Ford y expose la philosophie derrière la production de masse : fabriquer utile, réduire le gaspillage et baisser les prix pour élargir sans cesse le nombre d'acheteurs. Son idée centrale : le vrai but des affaires est le service, et les profits en découlent.",
      "en": "Published in 1922, My Life and Work blends autobiography with industrial manifesto. Henry Ford lays out the thinking behind mass production: build useful things, cut waste, and lower prices to keep widening who can afford them. His central idea: the true aim of business is service, and profit follows from it."
    }
  },
  "walt-disney": {
    "pitch": {
      "fr": "La biographie de référence sur Walt Disney : premier auteur à obtenir un accès sans restriction aux archives Disney, Neal Gabler retrace l'ascension d'un enfant du Midwest devenu l'un des grands architectes de l'imaginaire américain. Un portrait sans complaisance de l'homme derrière la souris.",
      "en": "The definitive Walt Disney biography: the first writer granted unrestricted access to the Disney archives, Neal Gabler traces the rise of a Midwestern boy who became one of the great architects of the American imagination. An unflinching portrait of the man behind the mouse."
    },
    "blurb": {
      "fr": "Fruit de plusieurs années de recherche et d'un accès sans précédent aux archives de la Walt Disney Company, ce livre suit Disney de son enfance modeste dans le Midwest à la naissance d'un empire du divertissement. Son idée centrale : Disney a passé sa vie à vouloir maîtriser et réinventer le réel, transformant son imagination en un monde entier que des millions de personnes habitent encore.",
      "en": "Built on years of research and unprecedented access to the Walt Disney Company archives, this book follows Disney from a modest Midwestern childhood to the making of a global entertainment empire. Its central idea: Disney spent his life striving to control and remake reality, turning his imagination into an entire world that millions of people still inhabit."
    }
  },
  "kamprad-ikea": {
    "pitch": {
      "fr": "L'histoire intime de l'homme derrière IKEA, racontée de l'intérieur. Un récit de frugalité obsessionnelle, de design accessible et de cette volonté de faire mieux avec moins qui a bâti un empire du meuble en kit. 🪑",
      "en": "The inside story of the man behind IKEA, told up close. A tale of obsessive thrift, affordable design, and the drive to do more with less that built a flat-pack empire. 🪑"
    },
    "blurb": {
      "fr": "Écrit par le journaliste Bertil Torekull à partir de longues conversations avec le fondateur Ingvar Kamprad, ce livre retrace la naissance et l'ascension d'IKEA. Son idée centrale : proposer de beaux meubles fonctionnels au plus grand nombre, portée par une culture de simplicité, d'économie et de remise en question permanente.",
      "en": "Written by journalist Bertil Torekull from extensive conversations with founder Ingvar Kamprad, this book traces the birth and rise of IKEA. At its heart lies one idea: bringing well-designed, functional furniture to the many, driven by a culture of simplicity, frugality, and constant self-questioning."
    }
  },
  "grinding-it-out": {
    "pitch": {
      "fr": "Vendeur de mixeurs jusqu'à la cinquantaine, Ray Kroc raconte sans détour comment il a transformé un petit restaurant californien en empire mondial. Un récit brut sur l'obsession, le culot et le refus d'abandonner.",
      "en": "A milkshake-mixer salesman until his fifties, Ray Kroc tells, without varnish, how he turned one small Californian restaurant into a global empire. A raw story of obsession, nerve, and the refusal to quit."
    },
    "blurb": {
      "fr": "Dans cette autobiographie, l'homme qui a bâti McDonald's revient sur sa rencontre avec les frères McDonald et sur la construction de la franchise. Son fil conducteur tient en un mot : la persévérance. C'est le credo « Press On » qu'il a fait sien, selon lequel ni le talent, ni le génie, ni l'éducation ne remplacent la ténacité et le travail acharné.",
      "en": "In this autobiography, the man who built McDonald's looks back on his meeting with the McDonald brothers and the making of the franchise. His guiding thread comes down to one word: persistence. It is the \"Press On\" credo he made his own, the belief that neither talent, genius, nor education can replace sheer tenacity and relentless work."
    }
  },
  "the-snowball": {
    "pitch": {
      "fr": "La biographie de référence sur Warren Buffett, écrite avec un accès sans précédent à l'homme et à ses proches. Une plongée fascinante dans l'esprit de l'un des plus grands investisseurs, où la fortune se construit comme une boule de neige : lentement, puis irrésistiblement.",
      "en": "The definitive Warren Buffett biography, written with unprecedented access to the man himself and those closest to him. A gripping look inside the mind of one of the greatest investors of all time, where wealth builds like a snowball: slowly, then unstoppably."
    },
    "blurb": {
      "fr": "Fruit de centaines d'heures d'entretiens avec Warren Buffett, The Snowball retrace toute sa vie, de l'enfance à Omaha à la construction de Berkshire Hathaway. Le titre vient de sa propre image : la vie est comme une boule de neige, l'essentiel étant de trouver de la neige humide et une très longue pente. L'idée centrale : la patience et les intérêts composés, appliqués sur des décennies, façonnent aussi bien une fortune qu'un caractère.",
      "en": "Drawing on hundreds of hours of interviews with Warren Buffett, The Snowball traces his entire life, from his Omaha childhood to the building of Berkshire Hathaway. The title comes from his own metaphor: life is like a snowball, and what matters is finding wet snow and a really long hill. Its central idea: patience and compounding, applied over decades, shape both a fortune and a character."
    }
  },
  "steve-jobs": {
    "pitch": {
      "fr": "La biographie autorisée qui montre l'homme derrière la légende Apple : génial, exigeant, insupportable et visionnaire. Isaacson ne l'embellit pas, et c'est ce qui rend ce portrait inoubliable.",
      "en": "The authorized biography that reveals the man behind the Apple legend: brilliant, demanding, impossible, visionary. Isaacson doesn't flatter him, and that's what makes the portrait unforgettable."
    },
    "blurb": {
      "fr": "Fruit de plus de quarante entretiens accordés par Steve Jobs lui-même, cette biographie retrace son parcours, d'Apple à Pixar en passant par NeXT. Son idée centrale : le génie de Jobs naît à l'intersection de la technologie et des arts, porté par une exigence sans concession et une personnalité aussi inspirante que difficile.",
      "en": "Built on more than forty interviews granted by Steve Jobs himself, this biography traces his journey through Apple, Pixar and NeXT. Its central idea: Jobs's genius emerged at the crossroads of technology and the arts, driven by an uncompromising perfectionism and a personality as inspiring as it was difficult."
    }
  },
  "elon-musk": {
    "pitch": {
      "fr": "Pendant deux ans, Walter Isaacson a suivi de près l'un des esprits les plus imprévisibles de la tech. Il en tire un portrait sans filtre : celui d'un visionnaire habité par ses démons autant que par ses fusées. Une plongée fascinante dans un cerveau qui repousse les limites — pour le meilleur et pour le pire. 🚀",
      "en": "For two years, Walter Isaacson shadowed one of tech's most unpredictable minds. The result is an unflinching portrait of a visionary driven as much by his demons as by his rockets — a gripping dive into a mind that pushes limits, for better and for worse. 🚀"
    },
    "blurb": {
      "fr": "Fruit d'un accès rare — deux années passées aux côtés de Musk, de sa famille et de ses équipes chez Tesla, SpaceX et Twitter — cette biographie retrace son parcours, d'une enfance sud-africaine douloureuse jusqu'aux frontières de l'espace et de l'intelligence artificielle. L'idée centrale d'Isaacson : les mêmes traits qui rendent Musk brutal, impulsif et souvent insupportable sont indissociables de son audace et de sa soif d'innovation. Un portrait qui refuse de trancher entre le génie et le despote.",
      "en": "Built on rare access — two years alongside Musk, his family, and his teams at Tesla, SpaceX, and Twitter — this biography traces his path from a painful South African childhood to the frontiers of space and artificial intelligence. Isaacson's central idea: the very traits that make Musk brutal, impulsive, and often impossible are inseparable from his daring and his drive to innovate. A portrait that refuses to choose between genius and tyrant."
    }
  },
  "source-code-gates": {
    "pitch": {
      "fr": "Le premier volet des mémoires de Bill Gates, qui revient sur l'enfant curieux et obstiné qu'il était avant Microsoft. Une plongée sincère aux origines d'un esprit qui allait transformer l'informatique : la famille, les amitiés, les premières lignes de code et un deuil de jeunesse qui l'a profondément marqué.",
      "en": "The first volume of Bill Gates' memoirs, looking back at the curious, single-minded kid he was before Microsoft. A candid dive into the origins of a mind that would transform computing: family, friendships, first lines of code, and an early loss that shaped him deeply."
    },
    "blurb": {
      "fr": "Dans Source Code, Bill Gates raconte ses vrais débuts : une enfance à Seattle, une famille exigeante et aimante, ses premières rencontres avec l'ordinateur et l'amitié avec Paul Allen qui mènera à la création de Microsoft. L'idée centrale : montrer, loin de tout mythe fondateur lissé, comment un tempérament singulier, la chance et quelques rencontres décisives ont façonné l'homme avant la réussite.",
      "en": "In Source Code, Bill Gates tells the story of his real beginnings: a Seattle childhood, a demanding and loving family, his first encounters with computers, and the friendship with Paul Allen that would lead to the founding of Microsoft. The central idea: to show, far from any polished founding myth, how an unusual temperament, luck, and a few decisive encounters shaped the man before the success."
    }
  },
  "invent-and-wander": {
    "pitch": {
      "fr": "Les lettres aux actionnaires et écrits de Jeff Bezos réunis en un seul volume : la pensée brute derrière l'obsession du client, les paris de long terme et l'état d'esprit du \"Jour 1\". Une plongée directe dans la tête du fondateur d'Amazon.",
      "en": "Jeff Bezos's shareholder letters and writings gathered in a single volume: the raw thinking behind customer obsession, long-term bets, and the \"Day 1\" mindset. A direct look inside the mind of Amazon's founder."
    },
    "blurb": {
      "fr": "Invent and Wander rassemble les écrits de Jeff Bezos, au premier rang desquels ses célèbres lettres annuelles aux actionnaires d'Amazon, avec une introduction de Walter Isaacson. Le fil conducteur : penser à très long terme, rester obsédé par le client et traiter chaque jour comme un \"Jour 1\", où l'on invente, expérimente et accepte l'échec pour continuer d'avancer.",
      "en": "Invent and Wander collects Jeff Bezos's writings, centered on his famous annual Amazon shareholder letters, with an introduction by Walter Isaacson. The throughline: think in the very long term, stay obsessed with customers, and treat every day as \"Day 1\" — inventing, experimenting, and embracing failure in order to keep moving forward."
    }
  },
  "deep-work": {
    "pitch": {
      "fr": "Dans un monde qui fragmente sans cesse notre attention, Cal Newport défend une compétence devenue rare et précieuse : la concentration profonde. Un manifeste pratique pour produire un travail de qualité et reprendre le pouvoir sur son attention.",
      "en": "In a world that constantly fragments our attention, Cal Newport makes the case for a skill that has become rare and valuable: deep, distraction-free focus. A practical manifesto for doing meaningful work and reclaiming control over your attention."
    },
    "blurb": {
      "fr": "Livre de référence sur la productivité et la concentration, Deep Work distingue le \"travail profond\" — se concentrer sans distraction sur des tâches cognitivement exigeantes — du \"travail superficiel\", ces sollicitations qui remplissent nos journées sans vraiment compter. Son idée centrale : dans une économie saturée de distractions, la capacité à se concentrer en profondeur devient à la fois rare et déterminante, et elle se cultive comme un entraînement.",
      "en": "A well-known book on focus and productivity, Deep Work draws a line between \"deep work\" — concentrating without distraction on cognitively demanding tasks — and \"shallow work,\" the busy noise that fills our days without really mattering. Its central idea: in an economy flooded with distraction, the ability to focus deeply is becoming both rare and decisive, and it can be trained like a skill."
    }
  },
  "seven-habits": {
    "pitch": {
      "fr": "Le classique intemporel qui déplace le regard des techniques rapides vers le caractère et les principes durables. Sept habitudes pour gagner en efficacité, mieux se diriger soi-même et bâtir des relations solides. 🧭",
      "en": "The timeless classic that shifts the focus from quick fixes to lasting character and principles. Seven habits to become more effective, lead yourself better, and build stronger relationships. 🧭"
    },
    "blurb": {
      "fr": "Référence du développement personnel, The 7 Habits of Highly Effective People propose une approche fondée sur des principes plutôt que sur des astuces. Son idée centrale : l'efficacité durable naît d'un travail sur le caractère, qui nous fait passer de la dépendance à l'indépendance, puis à l'interdépendance. De cette base, Covey tire sept habitudes, de la proactivité à la recherche de solutions gagnant-gagnant.",
      "en": "A landmark of personal development, The 7 Habits of Highly Effective People offers an approach grounded in principles rather than quick tricks. Its core idea: lasting effectiveness grows from working on character, moving us from dependence to independence and then to interdependence. From that foundation Covey draws seven habits, from being proactive to seeking win-win solutions."
    }
  },
  "mindset": {
    "pitch": {
      "fr": "Et si tout se jouait dans le regard qu'on porte sur nos propres capacités ? La psychologue Carol Dweck montre que croire qu'on peut progresser change profondément ce que l'on accomplit — à l'école, au travail comme dans nos relations. 🌱",
      "en": "What if it all came down to how you see your own abilities? Psychologist Carol Dweck shows that believing you can grow profoundly changes what you achieve — at school, at work, and in your relationships. 🌱"
    },
    "blurb": {
      "fr": "Fruit de décennies de recherche en psychologie de la motivation, Mindset oppose deux façons de se percevoir : l'état d'esprit « fixe », où le talent serait figé une fois pour toutes, et l'état d'esprit « de développement », où les qualités se cultivent par l'effort, l'apprentissage et la persévérance. L'idée centrale : ce n'est pas le seul talent qui détermine notre réussite, mais la conviction que l'on peut s'améliorer.",
      "en": "Drawing on decades of research in the psychology of motivation, Mindset contrasts two ways of seeing ourselves: the \"fixed\" mindset, in which talent is set once and for all, and the \"growth\" mindset, in which abilities are cultivated through effort, learning and perseverance. The core idea: success isn't determined by talent alone, but by the belief that we can get better."
    }
  },
  "mans-search-for-meaning": {
    "pitch": {
      "fr": "Rescapé des camps nazis, le psychiatre Viktor Frankl raconte comment, même dans le pire, on peut choisir une raison de tenir. Un livre bref et bouleversant qui rappelle que donner du sens à sa vie change tout. 🕯️",
      "en": "A survivor of the Nazi camps, psychiatrist Viktor Frankl shows how, even at the worst, we can choose a reason to keep going. A short, deeply moving book about how finding meaning changes everything. 🕯️"
    },
    "blurb": {
      "fr": "Devenu un classique de la psychologie et du développement personnel, Man's Search for Meaning mêle le témoignage de Frankl sur sa survie dans les camps de concentration et les fondements de la logothérapie, l'approche thérapeutique qu'il a fondée. Son idée centrale : ce qui nous porte n'est pas la recherche du plaisir ou du pouvoir, mais la quête de sens — et cette liberté intérieure de choisir notre attitude face aux circonstances, personne ne peut nous l'enlever.",
      "en": "Now a classic of psychology and personal growth, Man's Search for Meaning weaves Frankl's account of surviving the concentration camps together with the foundations of logotherapy, the therapeutic approach he founded. Its central idea: what drives us is not the pursuit of pleasure or power but the search for meaning — and the inner freedom to choose our attitude toward any circumstance is something no one can take away."
    }
  },
  "psychology-of-money": {
    "pitch": {
      "fr": "Et si bien gérer son argent tenait moins au QI qu'au comportement ? À travers des histoires courtes et frappantes, Morgan Housel montre pourquoi nos émotions pèsent souvent plus que les chiffres — et comment changer notre rapport à l'argent. 💰",
      "en": "What if managing money well had less to do with intelligence than with behavior? Through short, striking stories, Morgan Housel shows why our emotions often matter more than the math — and how to rethink our relationship with money. 💰"
    },
    "blurb": {
      "fr": "Dans une série de chapitres courts et largement indépendants, Morgan Housel explore la façon dont nos émotions, notre histoire personnelle et notre ego façonnent nos décisions financières. Son idée centrale : réussir avec l'argent relève moins du savoir que du comportement. La patience, l'humilité et l'épargne y comptent souvent plus que le talent ou le rendement.",
      "en": "In a series of short, largely standalone chapters, Morgan Housel explores how our emotions, personal history, and ego shape our financial decisions. His central idea: doing well with money is less about what you know than about how you behave. Patience, humility, and saving often matter more than talent or returns."
    }
  },
  "rich-dad-poor-dad": {
    "pitch": {
      "fr": "Le classique qui bouscule notre rapport à l'argent en opposant deux visions : travailler pour l'argent, ou faire travailler l'argent pour soi. Un électrochoc de bon sens sur l'éducation financière que l'école n'enseigne jamais.",
      "en": "The classic that upends how we think about money by pitting two mindsets against each other: working for money, or making money work for you. A common-sense wake-up call about the financial education school never teaches."
    },
    "blurb": {
      "fr": "Best-seller de la finance personnelle, Rich Dad Poor Dad oppose deux figures paternelles aux visions radicalement différentes de l'argent : un père très diplômé mais toujours à court, et le père fortuné de son meilleur ami. L'idée centrale : ce qui compte n'est pas le salaire, mais la littératie financière — savoir distinguer les actifs, qui mettent de l'argent dans votre poche, des passifs, qui l'en sortent.",
      "en": "A personal-finance best-seller, Rich Dad Poor Dad contrasts two father figures with radically different views of money: a highly educated dad who was always short, and his best friend's wealthy father. The central idea: what matters isn't your paycheck but financial literacy — learning to tell assets, which put money in your pocket, from liabilities, which take it out."
    }
  },
  "richest-man-in-babylon": {
    "pitch": {
      "fr": "Des paraboles situées dans la Babylone antique pour apprendre, sans jargon, à garder une part de ce qu'on gagne et à la faire fructifier. Un classique intemporel des finances personnelles, court et limpide.",
      "en": "Simple parables set in ancient Babylon teach — jargon-free — how to keep a share of what you earn and make it grow. A short, clear, timeless classic of personal finance."
    },
    "blurb": {
      "fr": "Paru dans les années 1920, ce court livre de George S. Clason transmet ses leçons de finances personnelles à travers des paraboles situées dans la Babylone antique. Son principe fondateur : « une partie de tout ce que tu gagnes t'appartient » — épargner d'abord au moins un dixième de ses revenus, se libérer des dettes et laisser son argent travailler. Des règles simples et durables plutôt que des recettes miracles.",
      "en": "Published in the 1920s, this short book by George S. Clason delivers its personal-finance lessons through parables set in ancient Babylon. Its founding principle: \"a part of all you earn is yours to keep\" — save at least a tenth of what you make first, get free of debt, and put your money to work. Simple, lasting rules rather than quick fixes."
    }
  },
  "millionaire-next-door": {
    "pitch": {
      "fr": "Et si le vrai millionnaire n'était pas celui qu'on imagine ? Fruit d'une longue enquête sur les Américains fortunés, ce classique démonte le mythe du luxe tapageur et révèle les habitudes discrètes qui construisent vraiment la fortune.",
      "en": "What if the real millionaire is nothing like the one you picture? Built on years of research into wealthy Americans, this classic shatters the myth of flashy luxury and reveals the quiet habits that truly build lasting wealth."
    },
    "blurb": {
      "fr": "Référence des finances personnelles, The Millionaire Next Door s'appuie sur des années de recherche auprès de foyers aisés pour dresser un portrait réaliste des millionnaires américains. L'idée centrale : la plupart vivent en dessous de leurs moyens, épargnent avec discipline et fuient les signes extérieurs de richesse. La leçon des auteurs est simple : la richesse, c'est ce qu'on accumule, pas ce qu'on dépense.",
      "en": "A cornerstone of personal-finance writing, The Millionaire Next Door draws on years of research into affluent households to paint a realistic portrait of America's millionaires. Its central idea: most live below their means, save with discipline, and avoid outward displays of wealth. The authors' lesson is simple: wealth is what you accumulate, not what you spend."
    }
  },
  "high-output-management": {
    "pitch": {
      "fr": "Le manuel de management signé Andrew Grove, l'ingénieur devenu PDG qui a hissé Intel au sommet : direct, concret et centré sur une seule question — comment produire plus de valeur avec son équipe. Un classique lu par des générations de dirigeants, toujours d'une actualité redoutable. ⚙️",
      "en": "The management handbook by Andrew Grove, the engineer-turned-CEO who helped build Intel into a giant: direct, concrete, and built around one question — how to get more real output from your team. A classic read by generations of leaders, and still remarkably relevant. ⚙️"
    },
    "blurb": {
      "fr": "Signé Andrew Grove, ingénieur devenu PDG d'Intel, High Output Management aborde le management comme une discipline de production. Son idée maîtresse : le rendement d'un manager, c'est celui de son équipe et de tous ceux qu'il influence — d'où l'importance de miser sur les activités à fort effet de levier, comme les tête-à-tête, la formation et des objectifs clairs. C'est aussi dans ce livre que Grove détaille le système d'objectifs qui inspirera plus tard les OKR.",
      "en": "Written by Andrew Grove, the engineer who became Intel's CEO, High Output Management treats managing as a discipline of production. Its core idea: a manager's output is the output of their team plus everyone they influence — so the job is to focus on high-leverage activities like one-on-ones, training, and clear objectives. It's also the book where Grove sets out the objective-setting system that would later inspire OKRs."
    }
  },
  "radical-candor": {
    "pitch": {
      "fr": "Le manuel de référence pour dire les choses franchement sans écraser les gens. Kim Scott propose un cadre simple pour devenir un meilleur manager : allier sincérité et bienveillance, au lieu de choisir entre les deux. 🎯",
      "en": "The go-to guide for saying hard things without crushing anyone. Kim Scott lays out a simple framework to become a better boss: pair honesty with genuine care, instead of choosing between the two. 🎯"
    },
    "blurb": {
      "fr": "Écrit par Kim Scott, qui a dirigé des équipes chez Google avant d'enseigner le management à Apple, Radical Candor est devenu une référence du management contemporain. Son idée centrale repose sur deux axes : se soucier sincèrement de ses collaborateurs (Care Personally) tout en osant les challenger sans détour (Challenge Directly). C'est en tenant les deux à la fois qu'on donne un feedback vraiment utile, ni blessant ni complaisant.",
      "en": "Written by Kim Scott, who led teams at Google before teaching management at Apple, Radical Candor has become a staple of contemporary management thinking. Its core idea rests on two axes: caring personally about your people while daring to challenge them directly. Holding both at once is what makes feedback genuinely useful, neither hurtful nor spineless."
    }
  },
  "five-dysfunctions": {
    "pitch": {
      "fr": "Une fable managériale qui se lit comme un roman et démonte, couche par couche, ce qui empêche une équipe de vraiment fonctionner. Lencioni transforme une matière abstraite — la confiance, le conflit, l'engagement — en un modèle limpide, applicable dès le lundi matin.",
      "en": "A leadership fable that reads like a novel and takes apart, layer by layer, what stops a team from truly working. Lencioni turns something abstract — trust, conflict, commitment — into a clear model you can put to work on Monday morning."
    },
    "blurb": {
      "fr": "Devenu un classique du management, The Five Dysfunctions of a Team raconte l'histoire d'une dirigeante qui redresse une équipe de direction dysfonctionnelle, avant d'exposer le modèle qui en découle. L'idée centrale : cinq dysfonctionnements s'empilent comme une pyramide — absence de confiance, peur du conflit, manque d'engagement, fuite des responsabilités, inattention aux résultats. Tout commence par la confiance, et sans elle rien ne tient.",
      "en": "A modern management classic, The Five Dysfunctions of a Team follows a leader who turns around a broken executive team, then lays out the model behind the story. The central idea: five dysfunctions stack up like a pyramid — absence of trust, fear of conflict, lack of commitment, avoidance of accountability, and inattention to results. It all starts with trust, and without it nothing else holds."
    }
  },
  "measure-what-matters": {
    "pitch": {
      "fr": "La méthode des OKR racontée par celui qui l'a apportée à Google : comment transformer des ambitions floues en objectifs clairs et mesurables. Un livre concret, nourri d'exemples réels, pour aligner une équipe et vraiment avancer.",
      "en": "The OKR method told by the man who brought it to Google: how to turn fuzzy ambitions into clear, measurable goals. Concrete and full of real cases, it shows how to focus a team and truly move forward."
    },
    "blurb": {
      "fr": "Investisseur de longue date de la Silicon Valley, John Doerr a découvert les OKR (Objectives and Key Results) auprès d'Andy Grove chez Intel, avant de les transmettre à Google à ses débuts. Le livre en détaille le fonctionnement à travers de nombreuses études de cas. L'idée centrale : associer à chaque objectif ambitieux quelques résultats clés mesurables, afin de concentrer les efforts, aligner les équipes et suivre les progrès qui comptent vraiment.",
      "en": "A longtime Silicon Valley investor, John Doerr discovered OKRs (Objectives and Key Results) from Andy Grove at Intel, then passed them on to Google in its earliest days. The book lays out how they work through a wide range of case studies. The core idea: pair each ambitious objective with a few measurable key results, so teams stay focused, aligned, and able to track the progress that truly matters."
    }
  },
  "good-to-great": {
    "pitch": {
      "fr": "Pourquoi certaines entreprises passent-elles du statut de « bonnes » à celui de vraiment grandes, quand d'autres stagnent ? Fruit d'une longue enquête, ce classique du management identifie les rares leviers qui font la différence — et démonte l'idée que la grandeur serait affaire de chance ou de génie. 🚌",
      "en": "Why do some companies leap from merely good to truly great while others never do? Built on years of research, this management classic pinpoints the rare levers that make the difference — and dismantles the myth that greatness comes down to luck or genius. 🚌"
    },
    "blurb": {
      "fr": "Devenu une référence du management, Good to Great s'appuie sur une vaste étude comparant des entreprises devenues exceptionnelles à des sociétés comparables restées ordinaires. Jim Collins en tire quelques principes clés : le leadership de niveau 5, « d'abord qui, ensuite quoi », le concept du hérisson et l'effet volant d'inertie. L'idée centrale : la grandeur ne tient pas aux circonstances, mais à des choix disciplinés répétés dans la durée.",
      "en": "A management touchstone, Good to Great is built on a wide-ranging study comparing companies that became exceptional with comparable ones that stayed ordinary. Jim Collins distills a handful of core principles: Level 5 leadership, \"first who, then what,\" the Hedgehog Concept, and the flywheel effect. Its central idea: greatness is not a matter of circumstance, but of disciplined choices sustained over time."
    }
  }
}
