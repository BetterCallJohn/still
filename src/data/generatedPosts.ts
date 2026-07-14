import type { RawPost } from '../types'

// Contenu généré par le workflow multi-agents (rédaction + vérification anti-invention).
// Clé = id du livre (voir bookMeta), valeur = liste de posts.
export const postsByBook: Record<string, RawPost[]> = {
  "working-in-public": [
    {
      "concept": {
        "fr": "Les 4 types de projets open source",
        "en": "The 4 types of open source projects"
      },
      "caption": {
        "fr": "Tous les projets open source ne se ressemblent pas : voici les 4 grandes familles 🧭",
        "en": "Not all open source projects are alike: here are the 4 core types 🧭"
      },
      "tags": [
        "opensource",
        "frameworks",
        "maintainers",
        "community"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Federations, Clubs, Toys, Stadiums",
            "en": "Federations, Clubs, Toys, Stadiums"
          },
          "body": {
            "fr": "Eghbal classe les projets open source selon deux axes : la croissance des utilisateurs et celle des contributeurs.",
            "en": "Eghbal maps open source projects along two axes: user growth and contributor growth."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Federations",
            "en": "Federations"
          },
          "body": {
            "fr": "Beaucoup d'utilisateurs ET beaucoup de contributeurs. Des projets à gouvernance riche, comme Rust ou Node.js.",
            "en": "Many users AND many contributors. Richly governed projects like Rust or Node.js."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Clubs & Toys",
            "en": "Clubs & Toys"
          },
          "body": {
            "fr": "Clubs : peu d'utilisateurs, mais une communauté active entre pairs. Toys : faibles sur les deux axes, souvent des projets personnels.",
            "en": "Clubs: few users, but an active peer community. Toys: low on both axes, often personal projects."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Stadiums",
            "en": "Stadiums"
          },
          "body": {
            "fr": "Beaucoup d'utilisateurs, très peu de contributeurs. Un ou deux mainteneurs face à une foule : le cas le plus fréquent aujourd'hui.",
            "en": "Many users, very few contributors. One or two maintainers facing a crowd: the most common case today."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de parler d'un projet, demande-toi sa forme : les problèmes d'un Stadium n'ont rien à voir avec ceux d'une Federation.",
            "en": "Before discussing a project, ask what shape it has: a Stadium's problems are nothing like a Federation's."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Du commun au stade",
        "en": "From commons to stadiums"
      },
      "caption": {
        "fr": "Et si l'open source n'était pas un village mais une scène avec un seul artiste ? 🎤",
        "en": "What if open source wasn't a village but a stage with a single performer? 🎤"
      },
      "tags": [
        "opensource",
        "maintainers",
        "myth",
        "solo"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le mythe de la communauté",
            "en": "The community myth"
          },
          "body": {
            "fr": "On imagine l'open source comme une foule qui code ensemble. La réalité est souvent bien plus solitaire.",
            "en": "We picture open source as a crowd coding together. The reality is often far more solitary."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La forme dominante",
            "en": "The dominant shape"
          },
          "body": {
            "fr": "La plupart des projets très utilisés reposent sur un seul mainteneur, pas sur une communauté qui se répartit le travail.",
            "en": "Most widely used projects rest on a single maintainer, not a community sharing the load."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'analogie du créateur",
            "en": "The creator analogy"
          },
          "body": {
            "fr": "Le mainteneur moderne ressemble moins à un collectif qu'à un créateur de contenu solo, avec son public et ses fans.",
            "en": "The modern maintainer looks less like a collective and more like a solo content creator, with an audience and fans."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'individu avant le groupe",
            "en": "The individual over the group"
          },
          "body": {
            "fr": "Comme sur les réseaux sociaux, GitHub a fait glisser l'attention des communautés vers les individus.",
            "en": "Like social media, GitHub shifted attention from communities to individuals."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne demande pas « comment mobiliser la communauté ? » mais « comment soutenir la personne qui porte tout ? ».",
            "en": "Don't ask 'how do we mobilize the community?' but 'how do we support the person carrying it all?'"
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'attention, ressource rare",
        "en": "Attention, the scarce resource"
      },
      "caption": {
        "fr": "Le code est infini. L'attention du mainteneur, non. ⏳",
        "en": "Code is infinite. A maintainer's attention isn't. ⏳"
      },
      "tags": [
        "attention",
        "opensource",
        "scarcity",
        "maintainers"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Ce qui coûte vraiment cher",
            "en": "What's really expensive"
          },
          "body": {
            "fr": "La rareté de l'open source ne se joue pas sur le code, mais sur l'attention de celui qui le maintient.",
            "en": "Open source scarcity isn't about the code, but about the attention of the person maintaining it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le code est non rival",
            "en": "Code is non-rivalrous"
          },
          "body": {
            "fr": "On peut copier un logiciel un million de fois sans l'épuiser. Le télécharger ne coûte rien à personne.",
            "en": "You can copy software a million times without depleting it. Downloading it costs no one anything."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'attention est rivale",
            "en": "Attention is rivalrous"
          },
          "body": {
            "fr": "Chaque issue, chaque demande, chaque notification puise dans un stock d'attention limité et non renouvelable à volonté.",
            "en": "Every issue, request and notification draws on a limited stock of attention that can't be renewed at will."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le vrai goulot d'étranglement",
            "en": "The real bottleneck"
          },
          "body": {
            "fr": "Ce n'est pas l'usage du logiciel qui sature un mainteneur, mais le flux de sollicitations qui réclament sa réponse.",
            "en": "It's not usage that overwhelms a maintainer, but the flood of requests demanding a reply."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Soutenir l'open source, c'est protéger l'attention des mainteneurs autant, sinon plus, que financer le code.",
            "en": "Supporting open source means protecting maintainers' attention as much as, if not more than, funding the code."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Créer est facile, maintenir est dur",
        "en": "Creation is cheap, maintenance is hard"
      },
      "caption": {
        "fr": "GitHub a rendu la création gratuite. La maintenance, elle, reste chère 🔧",
        "en": "GitHub made creation free. Maintenance stays expensive 🔧"
      },
      "tags": [
        "maintenance",
        "opensource",
        "cost",
        "software"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le coût caché",
            "en": "The hidden cost"
          },
          "body": {
            "fr": "Publier du code n'a jamais été aussi simple. Le maintenir dans la durée reste le vrai fardeau.",
            "en": "Publishing code has never been easier. Maintaining it over time is the real burden."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La création s'est effondrée",
            "en": "Creation collapsed in cost"
          },
          "body": {
            "fr": "Les plateformes ont réduit à presque rien le coût de démarrer et de partager un projet.",
            "en": "Platforms drove the cost of starting and sharing a project down to almost nothing."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La maintenance persiste",
            "en": "Maintenance persists"
          },
          "body": {
            "fr": "Corriger des bugs, répondre aux issues, gérer les dépendances : ce travail ne disparaît jamais et grandit avec le succès.",
            "en": "Fixing bugs, answering issues, managing dependencies: this work never disappears and grows with success."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le succès aggrave la charge",
            "en": "Success worsens the load"
          },
          "body": {
            "fr": "Plus un projet est adopté, plus il attire de demandes. La popularité augmente le poids porté par le mainteneur.",
            "en": "The more a project is adopted, the more requests it attracts. Popularity increases the maintainer's load."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "On célèbre le lancement, on oublie l'entretien. Or c'est la maintenance qui décide de la survie d'un projet.",
            "en": "We celebrate the launch and forget the upkeep. Yet maintenance is what decides a project's survival."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Toute contribution n'est pas un cadeau",
        "en": "Not every contribution is a gift"
      },
      "caption": {
        "fr": "Une pull request peut aider... ou juste ajouter du travail 📥",
        "en": "A pull request can help... or just add work 📥"
      },
      "tags": [
        "contributions",
        "opensource",
        "maintainers",
        "curation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le coût des contributions",
            "en": "The cost of contributions"
          },
          "body": {
            "fr": "On croit que plus de contributions aide toujours. Pour un mainteneur, ce n'est pas si simple.",
            "en": "We assume more contributions always help. For a maintainer, it's not that simple."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Contribuer crée du travail",
            "en": "Contributing creates work"
          },
          "body": {
            "fr": "Chaque proposition doit être lue, évaluée, testée, puis maintenue ensuite. Le mainteneur en hérite pour longtemps.",
            "en": "Every submission must be read, reviewed, tested and then maintained. The maintainer inherits it for the long run."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une valeur parfois négative",
            "en": "Sometimes negative value"
          },
          "body": {
            "fr": "Une contribution de faible qualité peut coûter plus de temps qu'elle n'en fait gagner : sa valeur nette est négative.",
            "en": "A low-quality contribution can cost more time than it saves: its net value is negative."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Maintenir, c'est trier",
            "en": "Maintaining is curating"
          },
          "body": {
            "fr": "Le rôle central du mainteneur n'est pas de tout accepter, mais de trier et de dire non pour préserver la cohérence.",
            "en": "The maintainer's core role isn't to accept everything, but to filter and say no to preserve coherence."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'open source n'est pas tant un problème de collaboration que de curation. Refuser fait partie du travail.",
            "en": "Open source is less a collaboration problem than a curation one. Saying no is part of the job."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Bien public, pas bien commun",
        "en": "A public good, not a commons"
      },
      "caption": {
        "fr": "L'open source n'est pas une prairie surexploitée. C'est autre chose 🌾",
        "en": "Open source isn't an overgrazed pasture. It's something else 🌾"
      },
      "tags": [
        "publicgood",
        "commons",
        "economics",
        "opensource"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Repenser la métaphore",
            "en": "Rethinking the metaphor"
          },
          "body": {
            "fr": "On parle souvent des « communs » du logiciel. Eghbal montre que ce cadre est trompeur.",
            "en": "We often talk about the software 'commons.' Eghbal shows the framing misleads."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La tragédie des communs",
            "en": "The tragedy of the commons"
          },
          "body": {
            "fr": "Un commun classique s'épuise quand trop de gens y puisent, comme un pâturage partagé.",
            "en": "A classic commons depletes when too many people draw from it, like a shared pasture."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le code ne s'épuise pas",
            "en": "Code doesn't deplete"
          },
          "body": {
            "fr": "Le logiciel est un bien public : non rival et difficile à exclure. L'utiliser ne le réduit pas.",
            "en": "Software is a public good: non-rivalrous and hard to exclude. Using it doesn't diminish it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ce qui s'épuise, c'est l'humain",
            "en": "What depletes is the human"
          },
          "body": {
            "fr": "La ressource rare et surexploitée n'est pas le code, mais l'énergie et l'attention du mainteneur.",
            "en": "The scarce, overused resource isn't the code but the maintainer's energy and attention."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Choisir la bonne métaphore change les solutions : protège les gens, pas seulement le code.",
            "en": "Choosing the right metaphor changes the solutions: protect the people, not just the code."
          }
        }
      ]
    }
  ],
  "high-growth-handbook": [
    {
      "concept": {
        "fr": "Le rôle unique du CEO",
        "en": "The CEO's unique job"
      },
      "caption": {
        "fr": "Ce que personne d'autre ne peut faire à ta place 🎯",
        "en": "The handful of things no one else can do for you 🎯"
      },
      "tags": [
        "CEO",
        "leadership",
        "scaling",
        "startup"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le job du CEO",
            "en": "The CEO's job"
          },
          "body": {
            "fr": "Elad Gil : seules quelques responsabilités ne peuvent jamais être déléguées.",
            "en": "Elad Gil: only a few responsibilities can never be delegated."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Fixer le cap",
            "en": "Set the direction"
          },
          "body": {
            "fr": "Définir la stratégie et la répéter jusqu'à ce que toute l'entreprise la connaisse par cœur.",
            "en": "Define the strategy and repeat it until the whole company knows it by heart."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Recruter l'équipe dirigeante",
            "en": "Hire the exec team"
          },
          "body": {
            "fr": "Attirer, embaucher et retenir les dirigeants : c'est le levier n°1 du CEO en hypercroissance.",
            "en": "Attracting, hiring and retaining executives is the CEO's biggest lever in hypergrowth."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ne jamais manquer de cash",
            "en": "Never run out of cash"
          },
          "body": {
            "fr": "S'assurer qu'il y a toujours de l'argent en banque et lever avant d'en avoir besoin.",
            "en": "Make sure there's always money in the bank, and raise before you need to."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Gardien de la culture",
            "en": "Keeper of the culture"
          },
          "body": {
            "fr": "Le CEO incarne et protège les valeurs ; la culture se dilue vite en croissance rapide.",
            "en": "The CEO embodies and protects the values; culture dilutes fast during rapid growth."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Délègue tout le reste. Protège ces quelques missions que toi seul portes.",
            "en": "Delegate everything else. Protect the few missions only you can carry."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Grandir au rythme de ta boîte",
        "en": "Scaling yourself"
      },
      "caption": {
        "fr": "Le poste le plus dur à faire évoluer, c'est le tien 🌱",
        "en": "The hardest role to scale is your own 🌱"
      },
      "tags": [
        "CEO",
        "founder",
        "delegation",
        "psychology"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Scale toi-même",
            "en": "Scale yourself"
          },
          "body": {
            "fr": "Elad Gil : en hypercroissance, ton rôle se transforme tous les 6 à 12 mois.",
            "en": "Elad Gil: in hypergrowth, your role transforms every 6 to 12 months."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Réinvente ton rôle",
            "en": "Reinvent your role"
          },
          "body": {
            "fr": "Ce qui marchait à 20 personnes te freine à 200. Repense régulièrement l'usage de ton temps.",
            "en": "What worked at 20 people holds you back at 200. Regularly rethink how you spend your time."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Délègue vraiment",
            "en": "Give work away"
          },
          "body": {
            "fr": "Recrute des dirigeants meilleurs que toi sur leur domaine, puis lâche prise sur l'exécution.",
            "en": "Hire executives better than you in their area, then let go of the execution."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Gère ta psychologie",
            "en": "Manage your psychology"
          },
          "body": {
            "fr": "Entoure-toi de pairs, de mentors ou d'un coach : le poste est isolant et éprouvant.",
            "en": "Surround yourself with peers, mentors or a coach: the job is isolating and draining."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ton entreprise ne peut pas croître plus vite que toi. Investis dans ta propre montée en échelle.",
            "en": "Your company can't outgrow you. Invest in scaling yourself."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Recruter des dirigeants",
        "en": "Hiring executives"
      },
      "caption": {
        "fr": "Le mauvais VP peut coûter une année entière 🧭",
        "en": "The wrong VP can cost you a full year 🧭"
      },
      "tags": [
        "hiring",
        "executives",
        "leadership",
        "startup"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Recruter ses execs",
            "en": "Hiring executives"
          },
          "body": {
            "fr": "Elad Gil : embaucher des dirigeants n'a rien à voir avec embaucher des ICs, et c'est bien plus risqué.",
            "en": "Elad Gil: hiring executives is nothing like hiring ICs, and far riskier."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Recrute pour l'échelle d'après",
            "en": "Hire for the next stage"
          },
          "body": {
            "fr": "Cherche quelqu'un qui a opéré à la taille que tu atteindras dans 12-18 mois, pas dans 5 ans.",
            "en": "Look for someone who has operated at the size you'll reach in 12-18 months, not in 5 years."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'expertise fonctionnelle prime",
            "en": "Function over pedigree"
          },
          "body": {
            "fr": "Un beau pedigree ne remplace pas la compétence métier réelle pour le poste précis à pourvoir.",
            "en": "A shiny pedigree doesn't replace real functional skill for the specific role you're filling."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Références en profondeur",
            "en": "Deep reference checks"
          },
          "body": {
            "fr": "Les prises de références détaillées sont l'un des meilleurs prédicteurs : ne les bâcle pas.",
            "en": "Detailed reference checks are among the best predictors: don't cut corners."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Définis le poste, chasse l'expertise à la bonne échelle, et vérifie tout avant de signer.",
            "en": "Define the role, hunt for expertise at the right scale, and verify everything before you sign."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Faut-il un COO ?",
        "en": "Do you need a COO?"
      },
      "caption": {
        "fr": "Un COO ne répare pas un CEO, il le complète 🤝",
        "en": "A COO doesn't fix a CEO, it complements one 🤝"
      },
      "tags": [
        "COO",
        "executives",
        "org",
        "scaling"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Recruter un COO",
            "en": "Hiring a COO"
          },
          "body": {
            "fr": "Elad Gil : le COO est le poste le plus flou, souvent défini par les lacunes du CEO.",
            "en": "Elad Gil: COO is the fuzziest role, often defined by the CEO's gaps."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Combler tes angles morts",
            "en": "Cover your blind spots"
          },
          "body": {
            "fr": "Un bon COO prend en charge ce que le CEO ne veut pas ou ne sait pas faire : ops, ventes, exécution.",
            "en": "A great COO owns what the CEO can't or won't do: ops, sales, execution."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Plusieurs archétypes",
            "en": "Several archetypes"
          },
          "body": {
            "fr": "COO opérationnel, mentor d'un jeune CEO, ou moteur d'expansion : choisis selon ton besoin.",
            "en": "Operational COO, mentor to a young CEO, or expansion driver: pick based on your need."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas obligatoire",
            "en": "Not mandatory"
          },
          "body": {
            "fr": "Toutes les entreprises n'ont pas besoin d'un COO ; certaines préfèrent plusieurs VP autonomes.",
            "en": "Not every company needs a COO; some prefer several strong, independent VPs."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Recrute un COO pour un manque précis, pas par prestige. Le titre doit servir un besoin réel.",
            "en": "Hire a COO for a specific gap, not for prestige. The title must serve a real need."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Réorganiser sans casser",
        "en": "Reorganizing well"
      },
      "caption": {
        "fr": "Réorganise autour de tes meilleurs, pas de l'organigramme 🧩",
        "en": "Reorg around your best people, not the org chart 🧩"
      },
      "tags": [
        "org",
        "reorg",
        "management",
        "scaling"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les réorganisations",
            "en": "Reorganizations"
          },
          "body": {
            "fr": "Elad Gil : en hypercroissance, l'organisation se casse tous les 6-12 mois ; réorganiser fait partie du job.",
            "en": "Elad Gil: in hypergrowth the org breaks every 6-12 months; reorging is part of the job."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Repère les signaux",
            "en": "Spot the signals"
          },
          "body": {
            "fr": "Décisions lentes, sujets qui tombent entre deux équipes, dirigeants débordés : il est temps.",
            "en": "Slow decisions, work falling between teams, overloaded leaders: it's time."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Construis autour des meilleurs",
            "en": "Build around your best"
          },
          "body": {
            "fr": "Organise-toi autour de tes leaders les plus solides plutôt qu'autour d'un schéma théorique.",
            "en": "Structure around your strongest leaders rather than around a theoretical diagram."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Sur-communique et va vite",
            "en": "Over-communicate, move fast"
          },
          "body": {
            "fr": "Explique le pourquoi en boucle et applique le changement rapidement pour limiter l'anxiété.",
            "en": "Explain the why on repeat and roll out the change fast to limit anxiety."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Réorganise rarement, autour des bonnes personnes, et assume-le franchement.",
            "en": "Reorg rarely, around the right people, and own it clearly."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les 3 types d'acquisitions",
        "en": "The 3 types of acquisitions"
      },
      "caption": {
        "fr": "Acheter une boîte, oui, mais pour quoi faire ? 🏗️",
        "en": "Buy a company, sure, but to do what? 🏗️"
      },
      "tags": [
        "M&A",
        "acquisitions",
        "strategy",
        "growth"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Acheter d'autres boîtes",
            "en": "Acquiring companies"
          },
          "body": {
            "fr": "Elad Gil : les acquisitions se rangent en trois grandes catégories, aux logiques différentes.",
            "en": "Elad Gil: acquisitions fall into three broad categories, each with its own logic."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Acqui-hire (talent)",
            "en": "Team buys (acqui-hire)"
          },
          "body": {
            "fr": "Tu achètes avant tout une équipe : l'objectif est le talent, pas le produit.",
            "en": "You're buying a team first: the goal is talent, not the product."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Achat de produit ou techno",
            "en": "Product or tech buys"
          },
          "body": {
            "fr": "Tu acquiers un produit ou une technologie pour accélérer ta feuille de route.",
            "en": "You acquire a product or technology to accelerate your roadmap."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Acquisition stratégique",
            "en": "Strategic acquisitions"
          },
          "body": {
            "fr": "Gros paris qui redéfinissent le marché ou la trajectoire de l'entreprise.",
            "en": "Big bets that reshape the market or the company's trajectory."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'intégration décide",
            "en": "Integration decides"
          },
          "body": {
            "fr": "La plupart des acquisitions échouent à l'intégration, pas à la négociation : planifie-la d'avance.",
            "en": "Most acquisitions fail at integration, not at the deal: plan it in advance."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Clarifie le type d'acquisition et ta thèse avant la moindre discussion de prix.",
            "en": "Clarify the acquisition type and your thesis before any price conversation."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Gérer son board",
        "en": "Managing your board"
      },
      "caption": {
        "fr": "Pas de mauvaise surprise : la règle d'or du board 🪑",
        "en": "No surprises: the golden rule of boards 🪑"
      },
      "tags": [
        "board",
        "investors",
        "governance",
        "CEO"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Gérer son conseil",
            "en": "Managing your board"
          },
          "body": {
            "fr": "Elad Gil : bien géré, le board est un atout ; mal géré, il devient une distraction.",
            "en": "Elad Gil: managed well, the board is an asset; managed badly, it becomes a distraction."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Aucune surprise",
            "en": "No surprises"
          },
          "body": {
            "fr": "Communique les mauvaises nouvelles tôt et directement, jamais à froid en réunion.",
            "en": "Share bad news early and directly, never cold in a meeting."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Sers-toi du board",
            "en": "Put the board to work"
          },
          "body": {
            "fr": "Utilise-le là où il excelle : recrutement de dirigeants, stratégie, mises en relation, levées.",
            "en": "Use it where it excels: exec recruiting, strategy, intros, fundraising."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "C'est toi qui pilotes",
            "en": "You run it"
          },
          "body": {
            "fr": "Le CEO dirige le board, pas l'inverse : prépare, cadre l'ordre du jour, mène la discussion.",
            "en": "The CEO runs the board, not the other way around: prepare, set the agenda, lead the discussion."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Transparence et préparation transforment ton board en accélérateur plutôt qu'en tribunal.",
            "en": "Transparency and preparation turn your board into an accelerator, not a courtroom."
          }
        }
      ]
    }
  ],
  "revolt-of-the-public": [
    {
      "concept": {
        "fr": "La Cinquieme Vague",
        "en": "The Fifth Wave"
      },
      "caption": {
        "fr": "Une vague d'information a tout emporte sur son passage 🌊",
        "en": "A tidal wave of information swept the old order away 🌊"
      },
      "tags": [
        "information tsunami",
        "Fifth Wave",
        "digital disruption",
        "Gurri"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La Cinquieme Vague",
            "en": "The Fifth Wave"
          },
          "body": {
            "fr": "Gurri decrit une explosion d'information sans precedent qui a brise le monopole des elites sur le savoir.",
            "en": "Gurri describes an unprecedented explosion of information that shattered the elite monopoly on knowledge."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'information explose",
            "en": "Information explodes"
          },
          "body": {
            "fr": "La quantite d'information produite s'est multipliee au-dela de tout precedent historique en l'espace de quelques annees.",
            "en": "The sheer volume of information produced multiplied beyond anything in history in the span of a few years."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le monopole brise",
            "en": "The monopoly breaks"
          },
          "body": {
            "fr": "Les institutions tiraient leur pouvoir du controle de l'information. L'abondance a mis fin a ce controle.",
            "en": "Institutions drew their power from controlling information. Abundance ended that control."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "De spectateurs a participants",
            "en": "From spectators to participants"
          },
          "body": {
            "fr": "Le public autrefois silencieux peut desormais produire, partager et contester l'information a grande echelle.",
            "en": "The once-silent public can now produce, share, and contest information at scale."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Quand l'information devient abondante, le pouvoir fonde sur sa rarete s'effondre.",
            "en": "When information becomes abundant, power built on its scarcity collapses."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le Centre et la Frontiere",
        "en": "Center and Border"
      },
      "caption": {
        "fr": "Le combat du siecle : les institutions contre le reseau ⚔️",
        "en": "The fight of the century: institutions versus the network ⚔️"
      },
      "tags": [
        "center vs border",
        "institutions",
        "networks",
        "authority"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le Centre contre la Frontiere",
            "en": "Center vs. Border"
          },
          "body": {
            "fr": "Gurri oppose le Centre, elites et hierarchies, a la Frontiere, foule connectee et amateur.",
            "en": "Gurri sets the Center, elites and hierarchies, against the Border, the connected amateur crowd."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le Centre",
            "en": "The Center"
          },
          "body": {
            "fr": "Institutions etablies, experts et gouvernements. Il aime l'ordre, la hierarchie et le silence du public.",
            "en": "Established institutions, experts, and governments. It loves order, hierarchy, and a silent public."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La Frontiere",
            "en": "The Border"
          },
          "body": {
            "fr": "Public en reseau, amateurs et marginaux. Elle vit du web, se moque des titres et attaque le Centre.",
            "en": "The networked public, amateurs, and outsiders. It lives on the web, scorns credentials, and attacks the Center."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La collision",
            "en": "The collision"
          },
          "body": {
            "fr": "La Frontiere n'a pas besoin de prendre le pouvoir : il lui suffit de discrediter et paralyser le Centre.",
            "en": "The Border need not seize power; it only has to discredit and paralyze the Center."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le conflit n'oppose pas gauche et droite, mais le sommet des hierarchies a leur peripherie connectee.",
            "en": "The conflict is not left versus right, but the top of hierarchies versus their networked periphery."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le Public n'est pas la Masse",
        "en": "The Public Is Not the Mass"
      },
      "caption": {
        "fr": "Il n'y a pas UN public, mais mille publics 🧩",
        "en": "There is no single public, but a thousand publics 🧩"
      },
      "tags": [
        "the public",
        "Gabriel Tarde",
        "Lippmann",
        "networks"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le Public n'est pas la Masse",
            "en": "The Public Is Not the Mass"
          },
          "body": {
            "fr": "En s'appuyant sur Tarde et Lippmann, Gurri montre que le public n'est pas une foule unie mais une multitude dispersee.",
            "en": "Drawing on Tarde and Lippmann, Gurri shows the public is not a unified crowd but a dispersed multitude."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas une foule",
            "en": "Not a crowd"
          },
          "body": {
            "fr": "Une foule est physique et fusionnelle ; un public est disperse, relie par les medias et l'information partagee.",
            "en": "A crowd is physical and fused together; a public is dispersed, linked by media and shared information."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des publics au pluriel",
            "en": "Publics, in the plural"
          },
          "body": {
            "fr": "Le public se cristallise autour d'enjeux precis, formant des groupes intenses mais ephemeres.",
            "en": "The public crystallizes around specific issues, forming intense but short-lived groups."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Il parle enfin",
            "en": "It finally speaks back"
          },
          "body": {
            "fr": "Longtemps reduit au silence par les medias de masse, le public a desormais les outils pour repondre.",
            "en": "Long silenced by mass media, the public now has the tools to answer back."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le public n'agit pas comme un bloc, mais comme des essaims qui se forment autour de causes.",
            "en": "The public acts not as a single bloc, but as swarms that gather around causes."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La Crise de l'Autorite",
        "en": "The Crisis of Authority"
      },
      "caption": {
        "fr": "L'autorite meurt quand l'ecart entre promesse et realite devient visible 📉",
        "en": "Authority dies when the gap between promise and reality becomes visible 📉"
      },
      "tags": [
        "crisis of authority",
        "legitimacy",
        "elites",
        "trust"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La Crise de l'Autorite",
            "en": "The Crisis of Authority"
          },
          "body": {
            "fr": "L'autorite reposait sur une asymetrie d'information ; l'abondance l'a fait fondre.",
            "en": "Authority rested on an information asymmetry; abundance melted it away."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La source de l'autorite",
            "en": "The source of authority"
          },
          "body": {
            "fr": "On croyait les experts parce qu'on ne pouvait pas verifier. Le savoir descendait du sommet.",
            "en": "We believed experts because we could not check them. Knowledge flowed down from the top."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'ecart expose",
            "en": "The gap exposed"
          },
          "body": {
            "fr": "Chaque echec, erreur ou mensonge des elites est desormais documente et diffuse instantanement.",
            "en": "Every failure, error, or lie by elites is now documented and broadcast instantly."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La legitimite s'evapore",
            "en": "Legitimacy evaporates"
          },
          "body": {
            "fr": "Une fois l'ecart entre les pretentions et la realite rendu visible, la confiance s'effondre.",
            "en": "Once the gap between claims and reality is made visible, trust collapses."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'autorite ne se decrete pas : elle depend d'une credibilite que l'information abondante met a nu.",
            "en": "Authority cannot be decreed: it depends on a credibility that abundant information lays bare."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La Revolte de la Negation",
        "en": "The Revolt of Negation"
      },
      "caption": {
        "fr": "Savoir contre quoi on est... sans savoir ce qu'on veut 🚫",
        "en": "Knowing what you're against, without knowing what you want 🚫"
      },
      "tags": [
        "negation",
        "nihilism",
        "protest",
        "Gurri"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La Revolte de la Negation",
            "en": "The Revolt of Negation"
          },
          "body": {
            "fr": "Le public sait ce qu'il rejette, mais ne propose aucun programme pour le remplacer.",
            "en": "The public knows what it rejects, but offers no program to replace it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Contre, toujours contre",
            "en": "Against, always against"
          },
          "body": {
            "fr": "Les mouvements savent denoncer et abattre, mais reculent devant toute proposition constructive.",
            "en": "The movements know how to denounce and tear down, but recoil from any constructive proposal."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Renverser sans remplacer",
            "en": "Topple without replacing"
          },
          "body": {
            "fr": "Ils font tomber gouvernements et dirigeants, puis laissent un vide que personne ne comble.",
            "en": "They bring down governments and leaders, then leave a vacuum no one fills."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le danger du nihilisme",
            "en": "The danger of nihilism"
          },
          "body": {
            "fr": "Cette negation permanente peut glisser vers un rejet de toute autorite et de tout ordre.",
            "en": "This permanent negation can slide into a rejection of all authority and all order."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Detruire la vieille autorite est facile ; le vrai defi, que le public elude, est de construire la suivante.",
            "en": "Destroying the old authority is easy; the real challenge, which the public dodges, is building the next one."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les Revoltes de 2011",
        "en": "The Revolts of 2011"
      },
      "caption": {
        "fr": "Tahrir, Occupy, les indignes : mobiliser des millions, gouverner personne 📱",
        "en": "Tahrir, Occupy, the indignados: mobilize millions, govern no one 📱"
      },
      "tags": [
        "2011 revolts",
        "Tahrir",
        "Occupy",
        "indignados"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les Revoltes de 2011",
            "en": "The Revolts of 2011"
          },
          "body": {
            "fr": "Gurri analyse une vague mondiale de soulevements portes par le public en reseau.",
            "en": "Gurri analyzes a global wave of uprisings driven by the networked public."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une annee charniere",
            "en": "A pivotal year"
          },
          "body": {
            "fr": "Printemps arabe (Tahrir), indignes espagnols (15-M), tentes israeliennes et Occupy Wall Street.",
            "en": "The Arab Spring (Tahrir), Spain's indignados (15-M), Israel's tent protests, and Occupy Wall Street."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La force du reseau",
            "en": "The power of the network"
          },
          "body": {
            "fr": "Sans chefs ni partis, ces mouvements ont rassemble des foules enormes via les reseaux sociaux.",
            "en": "With no leaders or parties, these movements gathered enormous crowds through social media."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'echec commun",
            "en": "The shared failure"
          },
          "body": {
            "fr": "Ils ont ebranle ou renverse les pouvoirs, mais n'ont produit aucune alternative durable.",
            "en": "They shook or toppled those in power, but produced no durable alternative."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "2011 a prouve que le public peut paralyser le Centre sans etre capable de le remplacer.",
            "en": "2011 proved the public can paralyze the Center without being able to replace it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Promesses et Desillusions",
        "en": "Promises and Disillusion"
      },
      "caption": {
        "fr": "Les gouvernements ont promis la lune, puis on a vu la facture 🌙",
        "en": "Governments promised the moon, then we saw the bill 🌙"
      },
      "tags": [
        "government failure",
        "expectations",
        "technocracy",
        "legitimacy"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Promesses et Desillusions",
            "en": "Promises and Disillusion"
          },
          "body": {
            "fr": "Les gouvernements modernes ont fonde leur legitimite sur des promesses qu'ils ne pouvaient tenir.",
            "en": "Modern governments built their legitimacy on promises they could not keep."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le culte de la competence",
            "en": "The cult of competence"
          },
          "body": {
            "fr": "L'Etat moderne s'est presente comme un gestionnaire capable de resoudre tous les problemes.",
            "en": "The modern state presented itself as a manager able to solve every problem."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des attentes demesurees",
            "en": "Runaway expectations"
          },
          "body": {
            "fr": "Plus il promet, plus l'ecart avec les resultats reels devient flagrant et documente.",
            "en": "The more it promises, the more glaring and documented the gap with real results becomes."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La confiance s'effondre",
            "en": "Trust collapses"
          },
          "body": {
            "fr": "Chaque crise visible, financiere, militaire ou naturelle, nourrit le sentiment d'imposture.",
            "en": "Every visible crisis, financial, military, or natural, feeds the sense of a con."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "En promettant trop, les elites ont arme le public contre elles : l'echec ne se cache plus.",
            "en": "By over-promising, elites armed the public against themselves: failure can no longer be hidden."
          }
        }
      ]
    }
  ],
  "scaling-people": [
    {
      "concept": {
        "fr": "Commencer par se connaître",
        "en": "Start with self-awareness"
      },
      "caption": {
        "fr": "Avant de manager les autres, apprends à te lire toi-même 🪞",
        "en": "Before you manage others, learn to read yourself 🪞"
      },
      "tags": [
        "selfawareness",
        "leadership",
        "management",
        "scalingpeople"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Se connaître d'abord",
            "en": "Know yourself first"
          },
          "body": {
            "fr": "Avant de diriger les autres, comprends ton propre style de travail.",
            "en": "Before leading others, understand your own working style."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le socle du management",
            "en": "The foundation of management"
          },
          "body": {
            "fr": "Johnson ouvre le livre sur la conscience de soi : c'est le point de départ de tout leadership efficace.",
            "en": "Johnson opens the book with self-awareness: it's the starting point of all effective leadership."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des outils, pas des étiquettes",
            "en": "Tools, not labels"
          },
          "body": {
            "fr": "Utilise des cadres comme Myers-Briggs ou l'Ennéagramme pour explorer tes tendances, sans t'y enfermer.",
            "en": "Use frameworks like Myers-Briggs or the Enneagram to explore your tendencies, without boxing yourself in."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Nomme tes préférences",
            "en": "Name your preferences"
          },
          "body": {
            "fr": "Repère comment tu prends ton énergie, gères le conflit et décides, pour anticiper tes angles morts.",
            "en": "Spot how you gain energy, handle conflict, and make decisions, to anticipate your blind spots."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Écris ton mode d'emploi",
            "en": "Write your own user manual"
          },
          "body": {
            "fr": "Partage ton style de travail avec ton équipe : moins de malentendus, plus de confiance.",
            "en": "Share your working style with your team: fewer misunderstandings, more trust."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les documents fondateurs",
        "en": "Founding documents"
      },
      "caption": {
        "fr": "Ce qui n'est pas écrit se dilue quand l'équipe grandit ✍️",
        "en": "What isn't written down dilutes as the team grows ✍️"
      },
      "tags": [
        "foundingdocuments",
        "mission",
        "operatingprinciples",
        "companybuilding"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les documents fondateurs",
            "en": "Founding documents"
          },
          "body": {
            "fr": "Toute organisation qui grandit doit écrire ses fondations.",
            "en": "Every growing organization needs to write down its foundations."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Mission et raison d'être",
            "en": "Mission and purpose"
          },
          "body": {
            "fr": "Pourquoi existez-vous ? Une mission claire aligne les décisions quand l'équipe grossit.",
            "en": "Why do you exist? A clear mission aligns decisions as the team grows."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les principes de fonctionnement",
            "en": "Operating principles"
          },
          "body": {
            "fr": "Ils disent comment vous décidez et vous comportez au quotidien, au-delà des slogans.",
            "en": "They state how you decide and behave day to day, beyond slogans."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le système d'exploitation",
            "en": "The operating system"
          },
          "body": {
            "fr": "C'est votre cadence : objectifs, planification et réunions récurrentes qui font tourner l'entreprise.",
            "en": "It's your cadence: goals, planning, and recurring meetings that keep the company running."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Écrivez-les, ne les supposez pas",
            "en": "Write them down, don't assume them"
          },
          "body": {
            "fr": "L'implicite ne passe pas à l'échelle. Documenter, c'est rendre la culture répétable.",
            "en": "The implicit doesn't scale. Documenting makes the culture repeatable."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les bonnes personnes aux bons postes",
        "en": "Right people, right roles"
      },
      "caption": {
        "fr": "Un recrutement se gagne avant l'entretien 🎯",
        "en": "Hiring is won before the interview even starts 🎯"
      },
      "tags": [
        "hiring",
        "recruiting",
        "teambuilding",
        "roles"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les bonnes personnes aux bons postes",
            "en": "The right people in the right roles"
          },
          "body": {
            "fr": "Le recrutement se joue en amont, en définissant le rôle.",
            "en": "Hiring is decided upstream, by defining the role."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Définis le rôle d'abord",
            "en": "Define the role first"
          },
          "body": {
            "fr": "Précise les responsabilités et ce que le succès signifie avant de rencontrer un seul candidat.",
            "en": "Spell out the responsibilities and what success looks like before meeting a single candidate."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Structure tes entretiens",
            "en": "Structure your interviews"
          },
          "body": {
            "fr": "Un plan d'entretien cohérent, avec des rôles assignés, réduit le biais et compare vraiment les candidats.",
            "en": "A consistent interview plan with assigned roles reduces bias and truly compares candidates."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Recrute pour aujourd'hui et demain",
            "en": "Hire for now and next"
          },
          "body": {
            "fr": "Cherche l'adéquation au poste actuel et la capacité à grandir avec l'entreprise.",
            "en": "Look for fit with the current role and the ability to grow with the company."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Un mauvais recrutement coûte cher",
            "en": "A bad hire is expensive"
          },
          "body": {
            "fr": "Investir dans un process rigoureux évite des erreurs bien plus coûteuses à corriger ensuite.",
            "en": "Investing in a rigorous process avoids mistakes that cost far more to fix later."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La semaine idéale",
        "en": "The ideal week"
      },
      "caption": {
        "fr": "Ton agenda révèle tes vraies priorités 🗓️",
        "en": "Your calendar reveals your real priorities 🗓️"
      },
      "tags": [
        "timemanagement",
        "idealweek",
        "priorities",
        "productivity"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La semaine idéale",
            "en": "The ideal week"
          },
          "body": {
            "fr": "Ton calendrier en dit plus long sur tes priorités que tes intentions.",
            "en": "Your calendar says more about your priorities than your intentions do."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Dessine la semaine idéale",
            "en": "Map your ideal week"
          },
          "body": {
            "fr": "Bloque sur un calendrier comment tu voudrais répartir ton temps entre tes vraies priorités.",
            "en": "Block out on a calendar how you'd ideally split your time across your real priorities."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Compare au réel",
            "en": "Compare to reality"
          },
          "body": {
            "fr": "Confronte ce plan à ton agenda réel : l'écart montre où ton temps fuit.",
            "en": "Compare that plan to your actual calendar: the gap shows where your time leaks."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Protège le temps qui compte",
            "en": "Protect the time that matters"
          },
          "body": {
            "fr": "Réserve des plages pour le travail profond, le management et la réflexion, pas seulement les réunions.",
            "en": "Reserve slots for deep work, managing, and thinking, not just meetings."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Le temps est un choix",
            "en": "Time is a choice"
          },
          "body": {
            "fr": "Aligner son agenda sur ses priorités est l'un des leviers les plus concrets du management.",
            "en": "Aligning your calendar with your priorities is one of the most concrete management levers."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Un feedback qui aide vraiment",
        "en": "Feedback that actually helps"
      },
      "caption": {
        "fr": "Direct ET bienveillant, jamais l'un sans l'autre 💬",
        "en": "Direct AND kind, never one without the other 💬"
      },
      "tags": [
        "feedback",
        "coaching",
        "management",
        "growth"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Un feedback qui aide vraiment",
            "en": "Feedback that actually helps"
          },
          "body": {
            "fr": "Direct et bienveillant, pas l'un ou l'autre.",
            "en": "Direct and kind, not one or the other."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Sépare le fait du jugement",
            "en": "Separate observation from judgment"
          },
          "body": {
            "fr": "Décris le comportement observé avant d'en tirer une interprétation.",
            "en": "Describe the behavior you observed before jumping to interpretation."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Sois précis et rapide",
            "en": "Be specific and timely"
          },
          "body": {
            "fr": "Un retour précis, donné près de l'événement, vaut mieux qu'un bilan vague six mois plus tard.",
            "en": "Precise feedback given close to the event beats a vague review six months later."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le feedback va dans les deux sens",
            "en": "Feedback goes both ways"
          },
          "body": {
            "fr": "Demande aussi des retours sur toi : cela rend le feedback normal et sûr dans l'équipe.",
            "en": "Ask for feedback on yourself too: it makes feedback normal and safe on the team."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Le feedback est un acte de soin",
            "en": "Feedback is an act of care"
          },
          "body": {
            "fr": "Ne rien dire, c'est priver quelqu'un d'une chance de progresser.",
            "en": "Withholding it denies someone a chance to grow."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Ton métier change en grandissant",
        "en": "Your job changes as you scale"
      },
      "caption": {
        "fr": "Scaler, c'est construire la machine, pas tout faire soi-même ⚙️",
        "en": "Scaling means building the machine, not doing it all yourself ⚙️"
      },
      "tags": [
        "delegation",
        "scaling",
        "systems",
        "managermultiplier"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Ton métier change en grandissant",
            "en": "Your job changes as you scale"
          },
          "body": {
            "fr": "Passer à l'échelle, c'est construire la machine, pas faire tout le travail.",
            "en": "Scaling means building the machine, not doing all the work."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Du faire au faire-faire",
            "en": "From doing to enabling"
          },
          "body": {
            "fr": "En grandissant, ta valeur vient de ce que ton équipe produit, pas de tes propres livrables.",
            "en": "As you grow, your value comes from what your team produces, not your own output."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Délègue avec du contexte",
            "en": "Delegate with context"
          },
          "body": {
            "fr": "Déléguer n'est pas abandonner : donne le contexte et le résultat attendu, puis laisse faire.",
            "en": "Delegating isn't abandoning: give the context and the desired outcome, then step back."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Construis des systèmes",
            "en": "Build systems"
          },
          "body": {
            "fr": "Crée des processus et des rituels qui tournent sans toi, pour que l'équipe passe à l'échelle.",
            "en": "Create processes and rituals that run without you, so the team can scale."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Scaler les gens, c'est se scaler soi",
            "en": "Scaling people starts with scaling yourself"
          },
          "body": {
            "fr": "L'entreprise grandit à la vitesse où grandissent ses managers.",
            "en": "The company grows as fast as its managers grow."
          }
        }
      ]
    }
  ],
  "an-elegant-puzzle": [
    {
      "concept": {
        "fr": "Dimensionner les équipes",
        "en": "Sizing teams"
      },
      "caption": {
        "fr": "L'unité de base du management, c'est l'équipe, pas l'individu 👥",
        "en": "The atomic unit of management is the team, not the individual 👥"
      },
      "tags": [
        "team size",
        "org design",
        "management",
        "engineering"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "6 à 8, pas plus",
            "en": "Six to eight"
          },
          "body": {
            "fr": "Larson recommande qu'un manager soutienne une équipe de six à huit ingénieurs.",
            "en": "Larson recommends a manager support a team of six to eight engineers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'équipe, pas la personne",
            "en": "Teams, not individuals"
          },
          "body": {
            "fr": "Larson raisonne en équipes stables et bien dimensionnées, briques de base de l'organisation.",
            "en": "Larson treats stable, well-sized teams as the building block of the organization."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Trop petit, ça casse",
            "en": "Too small breaks"
          },
          "body": {
            "fr": "En dessous de quatre ingénieurs, une équipe n'est plus un système résilient : absences et départs la paralysent.",
            "en": "Below four engineers a team stops being a resilient system; absences and departures stall it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Trop grand, ça déborde",
            "en": "Too big overloads"
          },
          "body": {
            "fr": "Au-delà de huit ou neuf, le manager n'a plus le temps de coacher ni de mener un travail de fond.",
            "en": "Beyond eight or nine, the manager loses the time to coach and do meaningful work."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Stabiliser avant tout",
            "en": "Stability first"
          },
          "body": {
            "fr": "Faites grandir les équipes existantes vers 6-8 avant d'en créer de nouvelles, et gardez-les stables.",
            "en": "Grow existing teams toward six to eight before spinning up new ones, and keep them stable."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les quatre états d'une équipe",
        "en": "The four team states"
      },
      "caption": {
        "fr": "Votre équipe est dans l'un de ces quatre états, et chacun a son remède 🔧",
        "en": "Your team is in one of four states, and each has its own fix 🔧"
      },
      "tags": [
        "team health",
        "technical debt",
        "slack",
        "prioritization"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Quatre états",
            "en": "Four states"
          },
          "body": {
            "fr": "Larson décrit quatre états d'équipe : en retard, la tête hors de l'eau, en remboursement de dette, en innovation.",
            "en": "Larson names four team states: falling behind, treading water, repaying debt, innovating."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "En retard",
            "en": "Falling behind"
          },
          "body": {
            "fr": "Le backlog grossit plus vite qu'il ne se vide ; le remède est d'ajouter des ingénieurs.",
            "en": "The backlog grows faster than it shrinks; the fix is to add engineers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La tête hors de l'eau",
            "en": "Treading water"
          },
          "body": {
            "fr": "L'équipe assure le travail critique mais ne rembourse aucune dette ; consolidez l'effort sur moins de chantiers.",
            "en": "The team keeps up with critical work but pays down no debt; consolidate effort onto fewer projects."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Rembourser puis innover",
            "en": "Repay then innovate"
          },
          "body": {
            "fr": "En dégageant du temps (du slack), l'équipe rembourse sa dette technique puis atteint l'état d'innovation.",
            "en": "Given time (slack), the team repays technical debt and reaches the innovating state."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Changez le système",
            "en": "Change the system"
          },
          "body": {
            "fr": "On ne sort pas d'un état par l'héroïsme mais en agissant sur les contraintes : les gens, le temps, le périmètre.",
            "en": "You don't escape a state through heroics but by acting on constraints: people, time, and scope."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les migrations",
        "en": "Migrations"
      },
      "caption": {
        "fr": "La seule vraie façon de dompter la dette technique à l'échelle 🏗️",
        "en": "The only real way to tame technical debt at scale 🏗️"
      },
      "tags": [
        "migrations",
        "technical debt",
        "scaling",
        "infrastructure"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Migrer pour durer",
            "en": "Migrate to last"
          },
          "body": {
            "fr": "À mesure que le code et l'entreprise grandissent, les migrations deviennent le principal levier contre la dette technique.",
            "en": "As code and company grow, migrations become the main lever against technical debt."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Inévitables et fréquentes",
            "en": "Inevitable and frequent"
          },
          "body": {
            "fr": "Chaque abstraction que vous adoptez finira par devoir être remplacée ; les migrations sont récurrentes, pas exceptionnelles.",
            "en": "Every abstraction you adopt will eventually need replacing; migrations are recurring, not exceptional."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le coût de l'échelle",
            "en": "The cost of scale"
          },
          "body": {
            "fr": "Sans migrations, chaque nouveau système s'empile sur les anciens et la complexité croît sans fin.",
            "en": "Without migrations, each new system piles onto the old ones and complexity grows without end."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Finir ce qu'on lance",
            "en": "Finish what you start"
          },
          "body": {
            "fr": "Une migration à moitié faite est pire que pas de migration ; il faut la mener à 100 %.",
            "en": "A half-done migration is worse than none; drive it to 100%."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Le seul mécanisme",
            "en": "The only mechanism"
          },
          "body": {
            "fr": "« Les migrations sont le seul mécanisme permettant de gérer efficacement la dette technique à mesure que votre entreprise et votre code grandissent. »",
            "en": "\"Migrations are the only mechanism to effectively manage technical debt as your company and code grow.\""
          },
          "attribution": {
            "fr": "Will Larson",
            "en": "Will Larson"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Outillez vos migrations",
            "en": "Tool your migrations"
          },
          "body": {
            "fr": "Traitez une migration comme un produit : outillez-la, mesurez son avancement et célébrez la fin.",
            "en": "Treat a migration like a product: tool it, track its progress, and celebrate completion."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Vision et stratégie",
        "en": "Vision & strategy"
      },
      "caption": {
        "fr": "Deux documents, deux rôles : ne les confondez plus 🧭",
        "en": "Two documents, two jobs — stop confusing them 🧭"
      },
      "tags": [
        "strategy",
        "vision",
        "leadership",
        "decision-making"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Vision vs stratégie",
            "en": "Vision vs strategy"
          },
          "body": {
            "fr": "Larson distingue nettement deux outils de direction : la stratégie et la vision.",
            "en": "Larson draws a sharp line between two direction-setting tools: strategy and vision."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La stratégie est concrète",
            "en": "Strategy is concrete"
          },
          "body": {
            "fr": "C'est un document ancré qui nomme les défis du présent et choisit une approche pour les traiter.",
            "en": "It's a grounded document that names today's challenges and picks an approach to address them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La vision est aspirationnelle",
            "en": "Vision is aspirational"
          },
          "body": {
            "fr": "Elle décrit un futur désirable qui permet à des personnes éloignées de prendre des décisions cohérentes entre elles.",
            "en": "It describes a desirable future that lets people who don't work closely together make decisions that fit together."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Écrire depuis les décisions",
            "en": "Write from decisions"
          },
          "body": {
            "fr": "Rédigez une stratégie en observant un ensemble de décisions concrètes et en formalisant la politique qui les sous-tend.",
            "en": "Write a strategy by looking at a set of real decisions and formalizing the policy behind them."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "L'un guide, l'autre inspire",
            "en": "One guides, one inspires"
          },
          "body": {
            "fr": "La stratégie arbitre les compromis d'aujourd'hui ; la vision décrit un futur où ces compromis s'effacent.",
            "en": "Strategy arbitrates today's tradeoffs; vision describes a future where those tradeoffs fade."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Modéliser, documenter, partager",
        "en": "Model, document, share"
      },
      "caption": {
        "fr": "Comment déployer un changement sans l'imposer par décret ✍️",
        "en": "How to roll out change without ruling by decree ✍️"
      },
      "tags": [
        "change management",
        "process",
        "influence",
        "rollout"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Trois temps",
            "en": "Three moves"
          },
          "body": {
            "fr": "Pour diffuser une nouvelle pratique, Larson propose une séquence : modéliser, documenter, partager.",
            "en": "To spread a new practice, Larson offers a sequence: model, document, share."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Modéliser",
            "en": "Model"
          },
          "body": {
            "fr": "Commencez par pratiquer vous-même le changement à petite échelle pour prouver qu'il fonctionne.",
            "en": "Start by practicing the change yourself at small scale to prove it works."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Documenter",
            "en": "Document"
          },
          "body": {
            "fr": "Une fois éprouvé, écrivez-le pour que d'autres puissent le reproduire sans vous.",
            "en": "Once it's proven, write it down so others can reproduce it without you."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Partager",
            "en": "Share"
          },
          "body": {
            "fr": "Élargissez ensuite l'adoption en vous appuyant sur l'exemple et le document, pas sur l'autorité.",
            "en": "Then broaden adoption by leaning on the example and the doc, not on authority."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "L'exemple avant le mandat",
            "en": "Example before mandate"
          },
          "body": {
            "fr": "Le changement durable se prouve d'abord, se codifie ensuite et se diffuse en dernier.",
            "en": "Durable change is proven first, codified second, and broadcast last."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Anatomie d'un bon objectif",
        "en": "Anatomy of a good goal"
      },
      "caption": {
        "fr": "Un objectif crédible, c'est quatre nombres, pas un slogan 🎯",
        "en": "A credible goal is four numbers, not a slogan 🎯"
      },
      "tags": [
        "goals",
        "metrics",
        "planning",
        "measurement"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Quatre nombres",
            "en": "Four numbers"
          },
          "body": {
            "fr": "Larson définit un bon objectif comme la combinaison de quatre nombres.",
            "en": "Larson defines a good goal as a combination of four numbers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Cible et référence",
            "en": "Target and baseline"
          },
          "body": {
            "fr": "La cible dit où vous voulez arriver ; la référence (baseline) dit d'où vous partez aujourd'hui.",
            "en": "The target says where you want to be; the baseline says where you are today."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Tendance",
            "en": "Trend"
          },
          "body": {
            "fr": "La tendance capture la trajectoire actuelle, ce qui se passerait sans aucune intervention.",
            "en": "The trend captures the current trajectory — what would happen with no intervention."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Horizon de temps",
            "en": "Time frame"
          },
          "body": {
            "fr": "L'échéance rend l'objectif mesurable et force l'arbitrage entre les priorités.",
            "en": "The time frame makes the goal measurable and forces tradeoffs between priorities."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Mesurable ou décoratif",
            "en": "Measurable or decorative"
          },
          "body": {
            "fr": "Sans ces quatre nombres, un « objectif » n'est qu'une intention qu'on ne peut ni suivre ni évaluer.",
            "en": "Without these four numbers, a \"goal\" is just an intention you can neither track nor evaluate."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Penser en systèmes",
        "en": "Systems thinking"
      },
      "caption": {
        "fr": "Modélisez votre organisation comme des stocks et des flux 📊",
        "en": "Model your org as stocks and flows 📊"
      },
      "tags": [
        "systems thinking",
        "modeling",
        "stocks and flows",
        "decisions"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Stocks et flux",
            "en": "Stocks and flows"
          },
          "body": {
            "fr": "Larson emprunte à la pensée systémique pour raisonner sur l'organisation en termes de stocks et de flux.",
            "en": "Larson borrows from systems thinking to reason about the org in terms of stocks and flows."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les stocks",
            "en": "Stocks"
          },
          "body": {
            "fr": "Un stock est une quantité accumulée : ingénieurs recrutés, dette technique, files de tickets.",
            "en": "A stock is an accumulated quantity: engineers hired, technical debt, ticket queues."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les flux",
            "en": "Flows"
          },
          "body": {
            "fr": "Les flux entrants et sortants font varier les stocks dans le temps ; c'est de là que naît le comportement.",
            "en": "Inflows and outflows change stocks over time; that's where behavior comes from."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Simuler dans un tableur",
            "en": "Simulate in a spreadsheet"
          },
          "body": {
            "fr": "Larson conseille de modéliser ces dynamiques dans un simple tableur pour tester ses intuitions avant d'agir.",
            "en": "Larson suggests modeling these dynamics in a simple spreadsheet to test your intuition before acting."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "L'intuition ment à l'échelle",
            "en": "Intuition lies at scale"
          },
          "body": {
            "fr": "Les systèmes avec accumulation se comportent de façon contre-intuitive ; un modèle simple bat l'estimation à vue de nez.",
            "en": "Systems with accumulation behave counterintuitively; a simple model beats a gut estimate."
          }
        }
      ]
    }
  ],
  "ask-your-developer": [
    {
      "concept": {
        "fr": "Build vs. Die",
        "en": "Build vs. Die"
      },
      "caption": {
        "fr": "Le débat \"acheter ou construire\" est mort. Aujourd'hui c'est construire ou mourir. 🚀",
        "en": "The \"build or buy\" debate is dead. Today it's build or die. 🚀"
      },
      "tags": [
        "logiciel",
        "disruption",
        "strategie",
        "twilio"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Build vs. Die",
            "en": "Build vs. Die"
          },
          "body": {
            "fr": "Lawson enterre la vieille question \"build vs. buy\" : à l'ère du logiciel, ne pas construire, c'est se faire disrupter.",
            "en": "Lawson buries the old \"build vs. buy\" question: in the software era, not building means getting disrupted."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le vieux réflexe",
            "en": "The old reflex"
          },
          "body": {
            "fr": "Pendant des décennies, on achetait des logiciels sur étagère pour tout ce qui n'était pas \"coeur de métier\".",
            "en": "For decades, companies bought off-the-shelf software for anything that wasn't \"core business.\""
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le logiciel est partout",
            "en": "Software is everywhere"
          },
          "body": {
            "fr": "Mais l'expérience client est désormais faite de logiciel. Ce qui vous différencie ne peut plus être acheté à l'identique par vos concurrents.",
            "en": "But the customer experience is now made of software. What differentiates you can no longer be bought identically by your rivals."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Construire, c'est survivre",
            "en": "Building is surviving"
          },
          "body": {
            "fr": "Les entreprises qui internalisent la construction de logiciel prennent l'avantage ; les autres se font dépasser par des rivaux plus rapides.",
            "en": "Companies that bring software-building in-house pull ahead; the rest get outrun by faster, software-native rivals."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La bascule",
            "en": "The shift"
          },
          "body": {
            "fr": "\"Ce n'est plus build versus buy. C'est build versus die.\"",
            "en": "\"It's no longer build versus buy. It's build versus die.\""
          },
          "attribution": {
            "fr": "Jeff Lawson",
            "en": "Jeff Lawson"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Identifiez ce qui touche vraiment vos clients : là, construisez plutôt que d'acheter. C'est votre différenciation.",
            "en": "Spot what truly touches your customers: build there instead of buying. That's your differentiation."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Demandez à vos développeurs",
        "en": "Ask Your Developer"
      },
      "caption": {
        "fr": "Arrêtez de dicter des solutions. Partagez le problème et écoutez ce que vos devs inventent. 💡",
        "en": "Stop dictating solutions. Share the problem and hear what your developers invent. 💡"
      },
      "tags": [
        "management",
        "developpeurs",
        "innovation",
        "leadership"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Demandez à vos devs",
            "en": "Ask your developers"
          },
          "body": {
            "fr": "Le coeur du livre : donnez le problème à résoudre, pas une liste de fonctionnalités à coder.",
            "en": "The heart of the book: hand over the problem to solve, not a list of features to code."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le problème, pas la solution",
            "en": "The problem, not the solution"
          },
          "body": {
            "fr": "Quand on dicte le \"quoi\", on gaspille la meilleure ressource : la créativité des développeurs pour trouver le \"comment\".",
            "en": "Dictating the \"what\" wastes your best resource: developers' creativity in finding the \"how.\""
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Partagez le contexte",
            "en": "Share the context"
          },
          "body": {
            "fr": "Exposez le client, ses frustrations, l'objectif business. Un dev qui comprend le \"pourquoi\" propose des solutions qu'aucun cahier des charges n'aurait imaginées.",
            "en": "Expose the customer, their frustrations, the business goal. A dev who understands the \"why\" proposes solutions no spec sheet would ever have imagined."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "De l'exécutant au partenaire",
            "en": "From order-taker to partner"
          },
          "body": {
            "fr": "Poser la question transforme les développeurs en résolveurs de problèmes et co-auteurs de la stratégie, pas en simples réalisateurs de tickets.",
            "en": "Asking turns developers into problem-solvers and co-authors of strategy, not mere ticket-fillers."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "À votre prochain projet, remplacez \"construis ceci\" par \"voici notre problème client, comment le résoudrais-tu ?\"",
            "en": "On your next project, swap \"build this\" for \"here's our customer problem, how would you solve it?\""
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Développeurs, pas code monkeys",
        "en": "Developers, not code monkeys"
      },
      "caption": {
        "fr": "Traiter ses devs comme un centre de coûts IT, c'est passer à côté de vos meilleurs bâtisseurs. 🛠️",
        "en": "Treating devs as an IT cost center means missing your best builders. 🛠️"
      },
      "tags": [
        "culture",
        "developpeurs",
        "business",
        "talent"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Bâtisseurs, pas exécutants",
            "en": "Builders, not order-takers"
          },
          "body": {
            "fr": "Lawson dénonce le faux fossé entre les gens du business et les développeurs, qui bride l'innovation.",
            "en": "Lawson calls out the false divide between businesspeople and developers that stifles innovation."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le réflexe centre de coûts",
            "en": "The cost-center reflex"
          },
          "body": {
            "fr": "Trop d'entreprises voient l'informatique comme une dépense à réduire, et les devs comme de simples exécutants de spécifications.",
            "en": "Too many companies see IT as an expense to cut, and developers as mere executors of specifications."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des créatifs qui construisent",
            "en": "Creatives who build"
          },
          "body": {
            "fr": "Les développeurs sont des créateurs : donnez-leur un problème réel et de l'autonomie, ils construisent des choses que personne n'avait commandées.",
            "en": "Developers are creators: give them a real problem and autonomy, and they build things nobody ordered."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Combler le fossé",
            "en": "Bridge the divide"
          },
          "body": {
            "fr": "Rapprocher devs et décideurs, c'est laisser les idées circuler dans les deux sens et transformer la tech en moteur de croissance.",
            "en": "Bringing developers and decision-makers together lets ideas flow both ways and turns tech into a growth engine."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Cessez de voir le code comme un coût. Vos développeurs sont la force qui construit votre avantage compétitif.",
            "en": "Stop seeing code as a cost. Your developers are the force building your competitive edge."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Petites équipes autonomes",
        "en": "Small autonomous teams"
      },
      "caption": {
        "fr": "Chez Twilio, l'innovation passe par de petites équipes qui possèdent vraiment leur produit. 👥",
        "en": "At Twilio, innovation runs on small teams that truly own their product. 👥"
      },
      "tags": [
        "equipes",
        "autonomie",
        "organisation",
        "twilio"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Petites équipes",
            "en": "Small teams"
          },
          "body": {
            "fr": "Lawson défend les petites équipes autonomes comme unité de base de l'innovation.",
            "en": "Lawson champions small, autonomous teams as the basic unit of innovation."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Petite et focalisée",
            "en": "Small and single-threaded"
          },
          "body": {
            "fr": "Une équipe assez petite pour tenir dans une salle, focalisée sur une seule mission claire, décide vite et reste alignée.",
            "en": "A team small enough to fit in one room, focused on one clear mission, decides fast and stays aligned."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Posséder son terrain",
            "en": "Own your patch"
          },
          "body": {
            "fr": "Chaque équipe possède son service de bout en bout : elle construit, déploie et supporte ce qu'elle livre.",
            "en": "Each team owns its service end to end: it builds, ships and supports what it delivers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'autonomie accélère",
            "en": "Autonomy accelerates"
          },
          "body": {
            "fr": "Avec le contexte et la liberté d'agir, les équipes n'attendent pas d'autorisation : elles expérimentent et avancent.",
            "en": "Given context and the freedom to act, teams don't wait for permission: they experiment and move."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Découpez les gros chantiers en petites équipes responsables d'un périmètre clair, du début à la fin.",
            "en": "Break big efforts into small teams that own a clear scope from start to finish."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Baisser le coût d'expérimenter",
        "en": "Lower the cost of experimenting"
      },
      "caption": {
        "fr": "L'innovation, ce n'est pas une grande idée : c'est mille petites expériences bon marché. 🧪",
        "en": "Innovation isn't one big idea: it's a thousand cheap little experiments. 🧪"
      },
      "tags": [
        "experimentation",
        "innovation",
        "iteration",
        "produit"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le coût d'expérimenter",
            "en": "The cost of experimenting"
          },
          "body": {
            "fr": "Pour Lawson, on n'innove pas mieux en misant plus gros, mais en rendant chaque essai moins cher.",
            "en": "For Lawson, you don't innovate by betting bigger, but by making each attempt cheaper."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'innovation est un jeu de nombres",
            "en": "Innovation is a numbers game"
          },
          "body": {
            "fr": "Personne ne sait à l'avance quelle idée marchera. Plus vous pouvez lancer d'expériences, plus vous trouvez de gagnants.",
            "en": "Nobody knows in advance which idea will work. The more experiments you can run, the more winners you find."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le logiciel abaisse la barrière",
            "en": "Software lowers the barrier"
          },
          "body": {
            "fr": "Le logiciel rend l'essai bon marché : construire, mesurer, jeter ce qui ne prend pas coûte une fraction d'autrefois.",
            "en": "Software makes trying cheap: build, measure and discard what doesn't stick at a fraction of the old cost."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Livrer petit, itérer",
            "en": "Ship small, iterate"
          },
          "body": {
            "fr": "Mieux vaut livrer vite une petite version et apprendre du réel que polir un grand plan qui rate le marché.",
            "en": "Better to ship a small version fast and learn from reality than polish a grand plan that misses the market."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Demandez-vous : comment rendre notre prochaine expérience dix fois moins chère à tenter ?",
            "en": "Ask yourself: how do we make our next experiment ten times cheaper to try?"
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les principes Twilio",
        "en": "Twilio's operating principles"
      },
      "caption": {
        "fr": "\"Draw the Owl\" et \"Wear the Customer's Shoes\" : la culture comme code de conduite. 🦉",
        "en": "\"Draw the Owl\" and \"Wear the Customer's Shoes\": culture as a code of conduct. 🦉"
      },
      "tags": [
        "culture",
        "valeurs",
        "twilio",
        "clientdabord"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les principes Twilio",
            "en": "Twilio's principles"
          },
          "body": {
            "fr": "Lawson raconte comment quelques principes maison, le \"Twilio Magic\", guident les décisions au quotidien.",
            "en": "Lawson shares how a few in-house principles, the \"Twilio Magic,\" guide everyday decisions."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Draw the Owl",
            "en": "Draw the Owl"
          },
          "body": {
            "fr": "Personne ne vous donnera le mode d'emploi complet. Prenez les moyens du bord, dessinez le reste, et itérez.",
            "en": "No one hands you the full instructions. Start with what you have, draw the rest, and iterate."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Wear the Customer's Shoes",
            "en": "Wear the Customer's Shoes"
          },
          "body": {
            "fr": "Vivez le problème du point de vue du client : l'empathie concrète oriente les bonnes décisions produit.",
            "en": "Live the problem from the customer's side: concrete empathy steers the right product decisions."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La culture comme boussole",
            "en": "Culture as a compass"
          },
          "body": {
            "fr": "Des principes courts et mémorables permettent aux équipes autonomes de décider seules, dans le bon sens.",
            "en": "Short, memorable principles let autonomous teams decide on their own, in the right direction."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Définissez quelques principes concrets qui aident vos équipes à trancher sans attendre l'aval de la hiérarchie.",
            "en": "Define a few concrete principles that help your teams decide without waiting for approval from above."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'ère des briques logicielles",
        "en": "The building-block era"
      },
      "caption": {
        "fr": "La troisième ère du logiciel selon Lawson : on n'écrit plus tout, on assemble des briques (des API). 🧱",
        "en": "Lawson's third era of software: you no longer write everything, you assemble building blocks (APIs). 🧱"
      },
      "tags": [
        "api",
        "plateforme",
        "aws",
        "architecture"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'ère des briques",
            "en": "The building-block era"
          },
          "body": {
            "fr": "Pour Lawson, on est entré dans l'ère des briques logicielles : on n'écrit plus tout, on assemble des API.",
            "en": "For Lawson, we've entered the era of software building blocks: you no longer write everything, you assemble APIs."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des solutions aux briques",
            "en": "From solutions to blocks"
          },
          "body": {
            "fr": "La grande bascule : au lieu d'acheter des solutions toutes faites, les entreprises assemblent des API en propositions de valeur uniques.",
            "en": "The big shift: instead of buying finished solutions, companies stitch APIs together into unique value propositions."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une chaîne d'approvisionnement numérique",
            "en": "A digital supply chain"
          },
          "body": {
            "fr": "Chaque API est un composant réutilisable. On compose son produit comme une chaîne d'approvisionnement faite de briques logicielles.",
            "en": "Each API is a reusable component. You compose your product like a supply chain made of software building blocks."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Construire pour le monde",
            "en": "Build for the world"
          },
          "body": {
            "fr": "L'expérience d'AWS l'a marqué : des API ouvertes sur lesquelles le monde entier, pas seulement vos équipes, peut bâtir l'avenir.",
            "en": "His time at AWS shaped this: open APIs on which the whole world, not just your teams, can build the future."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Pensez vos capacités comme des API : des briques nettes que vos équipes, et un jour vos clients, peuvent recombiner.",
            "en": "Think of your capabilities as APIs: clean building blocks your teams, and one day your customers, can recombine."
          }
        }
      ]
    }
  ],
  "poor-charlies-almanack": [
    {
      "concept": {
        "fr": "Le treillis de modèles mentaux",
        "en": "The latticework of mental models"
      },
      "caption": {
        "fr": "Un seul outil ne suffit pas pour comprendre le monde 🧠",
        "en": "One tool isn't enough to understand the world 🧠"
      },
      "tags": [
        "modèles mentaux",
        "mental models",
        "pluridisciplinarité",
        "sagesse"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Un treillis de modèles",
            "en": "A latticework of models"
          },
          "body": {
            "fr": "Munger invite à bâtir une grille des grandes idées de toutes les disciplines majeures.",
            "en": "Munger urges you to build a grid of the big ideas from all the major disciplines."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'homme au marteau",
            "en": "The man with a hammer"
          },
          "body": {
            "fr": "Pour qui n'a qu'un marteau, tout ressemble à un clou. Une seule discipline déforme le jugement.",
            "en": "To the man with only a hammer, every problem looks like a nail. A single discipline distorts judgment."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les grandes idées",
            "en": "The big ideas"
          },
          "body": {
            "fr": "Apprends les modèles clés de la physique, la biologie, la psychologie, l'économie, les maths — les principes, pas les détails.",
            "en": "Learn the key models from physics, biology, psychology, economics, math — the principles, not the details."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Où accrocher les faits",
            "en": "Something to hang facts on"
          },
          "body": {
            "fr": "Sans treillis où accrocher l'expérience, la connaissance ne tient pas. Les modèles lui donnent une structure.",
            "en": "Without a lattice to hang experience on, knowledge won't stick. Models give it structure."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Munger",
            "en": "Munger"
          },
          "body": {
            "fr": "« Pour l'homme qui n'a qu'un marteau, chaque problème ressemble à un clou. »",
            "en": "\"To the man with only a hammer, every problem looks like a nail.\""
          },
          "attribution": {
            "fr": "Charlie Munger",
            "en": "Charlie Munger"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Apprends les grands modèles de plusieurs disciplines : ils rendent chaque problème plus lisible.",
            "en": "Learn the big models across several disciplines; they make every problem clearer."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'inversion",
        "en": "Inversion"
      },
      "caption": {
        "fr": "Et si tu résolvais le problème à l'envers ? 🔄",
        "en": "What if you solved the problem backwards? 🔄"
      },
      "tags": [
        "inversion",
        "résolution de problèmes",
        "jacobi",
        "décision"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Inverse, toujours inverse",
            "en": "Invert, always invert"
          },
          "body": {
            "fr": "Beaucoup de problèmes difficiles se résolvent mieux à l'envers qu'à l'endroit.",
            "en": "Many hard problems are best solved backward, not forward."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Emprunté à Jacobi",
            "en": "Borrowed from Jacobi"
          },
          "body": {
            "fr": "Munger reprend le mathématicien Jacobi : « Inverse, toujours inverse. » Retourne la question.",
            "en": "Munger borrows from the mathematician Jacobi: 'Invert, always invert.' Flip the question."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Cherche l'échec",
            "en": "Look for failure"
          },
          "body": {
            "fr": "Au lieu de demander comment réussir, demande ce qui garantirait l'échec — puis évite-le.",
            "en": "Instead of asking how to succeed, ask what would guarantee failure — then avoid it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Éviter la bêtise",
            "en": "Avoiding stupidity"
          },
          "body": {
            "fr": "Munger dit chercher surtout à être « constamment pas stupide » plutôt que très intelligent.",
            "en": "Munger says he mainly tries to be 'consistently not stupid' rather than very intelligent."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Munger",
            "en": "Munger"
          },
          "body": {
            "fr": "« Inverse, toujours inverse. »",
            "en": "\"Invert, always invert.\""
          },
          "attribution": {
            "fr": "Charlie Munger (citant Jacobi)",
            "en": "Charlie Munger (quoting Jacobi)"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Devant un objectif, liste d'abord tout ce qui le ferait échouer, et supprime-le.",
            "en": "For any goal, first list everything that would make it fail, then remove those things."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La psychologie du mauvais jugement",
        "en": "The psychology of human misjudgment"
      },
      "caption": {
        "fr": "Ton cerveau te trompe de façons prévisibles 🎭",
        "en": "Your brain fools you in predictable ways 🎭"
      },
      "tags": [
        "biais cognitifs",
        "psychologie",
        "jugement",
        "munger"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les biais du jugement",
            "en": "The biases of judgment"
          },
          "body": {
            "fr": "Dans sa célèbre conférence, Munger énumère les tendances psychologiques qui faussent nos décisions.",
            "en": "In his famous talk, Munger lists the psychological tendencies that warp our decisions."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Éviter l'incohérence",
            "en": "Inconsistency-avoidance"
          },
          "body": {
            "fr": "L'esprit résiste au changement : premières conclusions et habitudes s'incrustent. Munger parle de tendance à éviter l'incohérence.",
            "en": "The mind resists change: first conclusions and habits stick. Munger calls it inconsistency-avoidance tendency."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le pouvoir de l'envie",
            "en": "The power of envy"
          },
          "body": {
            "fr": "Ce n'est pas tant la cupidité que l'envie qui meut le monde, note Munger — un moteur qu'on avoue rarement.",
            "en": "It's envy, more than greed, that drives the world, Munger notes — a driver people rarely admit."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le déni psychologique",
            "en": "Psychological denial"
          },
          "body": {
            "fr": "Face à une réalité insupportable, l'esprit la déforme jusqu'à la rendre tolérable.",
            "en": "Faced with unbearable reality, the mind distorts it until it becomes bearable."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Munger",
            "en": "Munger"
          },
          "body": {
            "fr": "« L'envie est un péché vraiment stupide : c'est le seul dont on ne peut tirer aucun plaisir. »",
            "en": "\"Envy is a really stupid sin because it's the only one you could never possibly have any fun at.\""
          },
          "attribution": {
            "fr": "Charlie Munger",
            "en": "Charlie Munger"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Apprends la liste des biais pour les repérer chez toi — surtout quand ils se combinent.",
            "en": "Learn the list of biases to spot them in yourself — especially when they combine."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le cercle de compétence",
        "en": "Circle of competence"
      },
      "caption": {
        "fr": "Connais les limites de ce que tu sais 🎯",
        "en": "Know the edges of what you know 🎯"
      },
      "tags": [
        "cercle de compétence",
        "humilité",
        "décision",
        "trop dur"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Reste dans ton cercle",
            "en": "Stay in your circle"
          },
          "body": {
            "fr": "Ce qui compte n'est pas la taille de ton cercle de compétence, mais de connaître ses bords.",
            "en": "What matters isn't how big your circle of competence is, but knowing its edges."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Trois corbeilles",
            "en": "Three baskets"
          },
          "body": {
            "fr": "Munger trie les décisions en trois piles : oui, non, et « trop dur ». La plupart vont dans « trop dur ».",
            "en": "Munger sorts decisions into three baskets: yes, no, and 'too hard.' Most land in 'too hard.'"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Connaître ses limites",
            "en": "Knowing your limits"
          },
          "body": {
            "fr": "Savoir ce qu'on ne sait pas est plus utile que d'être brillant, selon Munger.",
            "en": "Knowing what you don't know is more useful than being brilliant, Munger says."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La pile « trop dur »",
            "en": "The 'too hard' pile"
          },
          "body": {
            "fr": "Aucune honte à écarter un problème hors de sa compétence. La discipline protège du désastre.",
            "en": "No shame in setting aside a problem outside your competence. The discipline protects you from disaster."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Définis honnêtement ton cercle, et refuse tout ce qui tombe dehors.",
            "en": "Define your circle honestly, and pass on anything that falls outside it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'effet Lollapalooza",
        "en": "The Lollapalooza effect"
      },
      "caption": {
        "fr": "Quand plusieurs forces s'additionnent, l'effet explose 💥",
        "en": "When several forces stack, the effect explodes 💥"
      },
      "tags": [
        "lollapalooza",
        "biais combinés",
        "effets de seuil",
        "psychologie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'effet Lollapalooza",
            "en": "The Lollapalooza effect"
          },
          "body": {
            "fr": "Le terme de Munger pour désigner plusieurs biais ou forces qui agissent ensemble dans le même sens.",
            "en": "Munger's term for when several biases or forces act together in the same direction."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Elles se combinent",
            "en": "They combine"
          },
          "body": {
            "fr": "Les tendances psychologiques ne s'additionnent pas seulement : elles se combinent et basculent en résultats extrêmes.",
            "en": "Psychological tendencies don't just add up: they combine and tip into extreme outcomes."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'exemple des enchères",
            "en": "The auction example"
          },
          "body": {
            "fr": "Une vente aux enchères ouverte cumule réciprocité, preuve sociale et biais d'engagement — d'où les surenchères folles.",
            "en": "An open auction stacks reciprocation, social proof and commitment bias — hence the crazy overbidding."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pourquoi ça compte",
            "en": "Why it matters"
          },
          "body": {
            "fr": "Les grands succès comme les grands désastres viennent souvent de plusieurs facteurs convergents, pas d'un seul.",
            "en": "Big successes and big disasters usually come from several converging factors, not just one."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Cherche les situations où les forces se cumulent : c'est là que se jouent les résultats extrêmes.",
            "en": "Look for situations where forces compound — that's where extreme outcomes are decided."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le pouvoir des incitations",
        "en": "The power of incentives"
      },
      "caption": {
        "fr": "Montre-moi l'incitation, je te montrerai le résultat 🎯",
        "en": "Show me the incentive and I'll show you the outcome 🎯"
      },
      "tags": [
        "incitations",
        "comportement",
        "fedex",
        "psychologie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le pouvoir des incitations",
            "en": "The power of incentives"
          },
          "body": {
            "fr": "Munger : ne sous-estime jamais la force des incitations pour expliquer un comportement.",
            "en": "Munger: never underestimate the power of incentives to explain behavior."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'histoire de FedEx",
            "en": "The FedEx story"
          },
          "body": {
            "fr": "Payés à l'heure, les employés traînaient ; payés au poste terminé, ils finissaient vite. L'incitation a tout changé.",
            "en": "Paid by the hour, workers dawdled; paid per completed shift, they finished fast. The incentive fixed it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le biais d'intérêt personnel",
            "en": "Self-interest bias"
          },
          "body": {
            "fr": "Nous rationalisons ce qui nous arrange sans même le voir. D'où l'importance de bien concevoir les incitations.",
            "en": "We rationalize what serves us without even noticing. That's why designing incentives well matters so much."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Sagesse mondaine",
            "en": "Worldly wisdom"
          },
          "body": {
            "fr": "Comprendre les incitations, c'est comprendre pourquoi les gens agissent — bien avant leurs justifications.",
            "en": "Understand the incentives and you understand why people act — long before their stated reasons."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Munger",
            "en": "Munger"
          },
          "body": {
            "fr": "« Montre-moi l'incitation et je te montrerai le résultat. »",
            "en": "\"Show me the incentive and I will show you the outcome.\""
          },
          "attribution": {
            "fr": "Charlie Munger",
            "en": "Charlie Munger"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de juger un comportement, demande : à quoi cette personne est-elle incitée ?",
            "en": "Before judging a behavior, ask: what is this person being incentivized to do?"
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'art d'attendre",
        "en": "The art of waiting"
      },
      "caption": {
        "fr": "Le gros de l'argent se fait en attendant ⏳",
        "en": "The big money is made in the waiting ⏳"
      },
      "tags": [
        "patience",
        "discipline",
        "fat pitch",
        "investissement"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Assieds-toi sur tes mains",
            "en": "Sit on your hands"
          },
          "body": {
            "fr": "Pour Munger, savoir ne rien faire est une compétence rare et précieuse.",
            "en": "For Munger, knowing how to do nothing is a rare and valuable skill."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La balle parfaite",
            "en": "The fat pitch"
          },
          "body": {
            "fr": "Comme au baseball, attends la balle parfaite et frappe fort — ne t'élance pas sur toutes les balles.",
            "en": "Like in baseball, wait for the fat pitch and swing hard — don't swing at everything."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Peu de bonnes décisions",
            "en": "Few big decisions"
          },
          "body": {
            "fr": "La fortune de Berkshire vient d'une poignée de bonnes décisions, pas d'une agitation constante.",
            "en": "Berkshire's fortune came from a handful of good decisions, not constant activity."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La discipline d'attendre",
            "en": "The discipline to wait"
          },
          "body": {
            "fr": "Attendre exige du caractère : rester assis, liquidités en main, sans agir par ennui.",
            "en": "Waiting takes character: sitting still, cash in hand, not acting out of boredom."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Munger",
            "en": "Munger"
          },
          "body": {
            "fr": "« Le gros de l'argent n'est pas dans l'achat ni la vente, mais dans l'attente. »",
            "en": "\"The big money is not in the buying or the selling, but in the waiting.\""
          },
          "attribution": {
            "fr": "Charlie Munger",
            "en": "Charlie Munger"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "N'agis que sur tes meilleures idées ; le reste du temps, attends sans culpabiliser.",
            "en": "Act only on your best ideas; the rest of the time, wait without guilt."
          }
        }
      ]
    }
  ],
  "stubborn-attachments": [
    {
      "concept": {
        "fr": "La Richesse Plus",
        "en": "Wealth Plus"
      },
      "caption": {
        "fr": "Et si le PIB mesurait la mauvaise chose ? 📈",
        "en": "What if GDP is measuring the wrong thing? 📈"
      },
      "tags": [
        "croissance",
        "PIB",
        "bienetre",
        "TylerCowen"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Mesurer ce qui compte vraiment",
            "en": "Measure what really matters"
          },
          "body": {
            "fr": "Le PIB est trop étroit. Cowen propose plutôt de maximiser la « Richesse Plus ».",
            "en": "GDP is too narrow. Cowen proposes maximizing 'Wealth Plus' instead."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Plus que des biens",
            "en": "More than goods"
          },
          "body": {
            "fr": "La Richesse Plus additionne la production économique, mais aussi le temps de loisir, la production domestique et la qualité de l'environnement.",
            "en": "Wealth Plus counts economic output, but also leisure time, household production, and environmental amenities."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'angle mort du PIB",
            "en": "GDP's blind spot"
          },
          "body": {
            "fr": "Maximiser le seul PIB peut nous tromper : on peut « croître » en sacrifiant la nature ou le temps libre.",
            "en": "Maximizing GDP alone can mislead: you can 'grow' by sacrificing nature or free time."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Croissance durable",
            "en": "Sustainable growth"
          },
          "body": {
            "fr": "L'objectif est la croissance durable de la Richesse Plus sur le long terme, pas le rendement du trimestre.",
            "en": "The goal is sustainable long-run growth of Wealth Plus, not this quarter's output."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Pour juger du progrès, compte aussi le loisir, l'environnement et la vie de famille, pas seulement l'argent.",
            "en": "To judge progress, also count leisure, the environment, and home life, not just money."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La croissance composée",
        "en": "Compounding growth"
      },
      "caption": {
        "fr": "1 % de croissance en plus = une autre civilisation en un siècle. ⏳",
        "en": "1% more growth = a different civilization within a century. ⏳"
      },
      "tags": [
        "croissance",
        "composition",
        "longterme",
        "prosperite"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "De petits taux, d'énormes enjeux",
            "en": "Small rates, huge stakes"
          },
          "body": {
            "fr": "Une minuscule différence de taux de croissance se compose jusqu'à transformer une société entière.",
            "en": "A tiny difference in the growth rate compounds until it reshapes a whole society."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le miracle de la durée",
            "en": "The magic of duration"
          },
          "body": {
            "fr": "Sur un siècle, 1 à 2 points de croissance annuelle en plus rendent une société incomparablement plus riche.",
            "en": "Over a century, 1-2 extra points of annual growth make a society vastly richer."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La croissance domine tout",
            "en": "Growth swamps the rest"
          },
          "body": {
            "fr": "Parce que les effets se composent, Cowen affirme que la croissance durable pèse plus, à long terme, que presque toute autre préoccupation politique.",
            "en": "Because effects compound, Cowen argues sustainable growth outweighs almost every other policy concern over time."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le presque-repas gratuit",
            "en": "The near free lunch"
          },
          "body": {
            "fr": "La croissance est ce qui ressemble le plus à un « repas gratuit » moral : elle élève presque tout le monde, y compris les plus pauvres.",
            "en": "Growth is the closest thing to a moral 'free lunch': it lifts nearly everyone, including the poorest."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Privilégie les politiques qui relèvent, même un peu, le taux de croissance durable de long terme.",
            "en": "Favor policies that raise the sustainable long-term growth rate, even a little."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Ne pas actualiser le futur",
        "en": "Don't discount the future"
      },
      "caption": {
        "fr": "Les gens de demain comptent autant que nous. 🌍",
        "en": "Tomorrow's people matter as much as we do. 🌍"
      },
      "tags": [
        "futur",
        "ethique",
        "generations",
        "actualisation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le futur compte aussi",
            "en": "The future counts too"
          },
          "body": {
            "fr": "Le bien-être des personnes de demain vaut autant que le nôtre.",
            "en": "The well-being of future people is worth as much as our own."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Contre l'actualisation du bien-être",
            "en": "Against discounting welfare"
          },
          "body": {
            "fr": "Les économistes actualisent coûts et bénéfices futurs ; Cowen soutient qu'on ne doit pas dévaluer le bien-être humain simplement parce qu'il est futur.",
            "en": "Economists discount future costs and benefits; Cowen argues we must not devalue human welfare just because it lies in the future."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le piège du taux positif",
            "en": "The positive-rate trap"
          },
          "body": {
            "fr": "Un taux d'actualisation positif sur le bien-être impliquerait que les générations lointaines comptent à peine, ce qu'il rejette.",
            "en": "A positive discount rate on well-being would imply distant generations barely matter, which he rejects."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pourquoi la croissance pèse tant",
            "en": "Why growth weighs so much"
          },
          "body": {
            "fr": "Si l'on ne rabaisse pas les vies futures, la croissance devient décisive : elle profite à un nombre immense de personnes à venir.",
            "en": "If we don't discount future lives, growth becomes decisive: it benefits an enormous number of people to come."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Prends le futur lointain au sérieux ; ne réduis pas les vies de demain à presque rien.",
            "en": "Take the distant future seriously; don't shrink tomorrow's lives to almost nothing."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Des droits inviolables",
        "en": "Inviolable rights"
      },
      "caption": {
        "fr": "La croissance, oui — mais pas à n'importe quel prix. 🛑",
        "en": "Growth, yes — but not at any price. 🛑"
      },
      "tags": [
        "droits",
        "ethique",
        "limites",
        "utilitarisme"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La croissance, mais pas à tout prix",
            "en": "Growth, but not at any cost"
          },
          "body": {
            "fr": "Certains droits humains sont des attachements têtus qu'on ne peut pas troquer.",
            "en": "Some human rights are stubborn attachments you cannot trade away."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas un pur utilitariste",
            "en": "Not a pure utilitarian"
          },
          "body": {
            "fr": "Cowen ajoute des droits humains quasi absolus comme contraintes latérales au projet de croissance.",
            "en": "Cowen adds near-absolute human rights as side-constraints on the growth project."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une ligne à ne pas franchir",
            "en": "A line you cannot cross"
          },
          "body": {
            "fr": "On n'a pas le droit de violer des droits fondamentaux, même si cela augmentait la croissance mesurée.",
            "en": "You may not violate basic rights, even if doing so would boost measured growth."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le garde-fou moral",
            "en": "The moral guardrail"
          },
          "body": {
            "fr": "Ces « attachements têtus » empêchent la poursuite de la richesse de devenir monstrueuse.",
            "en": "These 'stubborn attachments' keep the pursuit of wealth from turning monstrous."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Poursuis la croissance sans relâche, mais à l'intérieur de limites morales fermes qui protègent l'individu.",
            "en": "Pursue growth relentlessly, but inside firm moral limits that protect the individual."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Croissance + Droits",
        "en": "Growth Plus Rights"
      },
      "caption": {
        "fr": "Une seule boussole pour trancher les débats. 🧭",
        "en": "A single compass to settle the debates. 🧭"
      },
      "tags": [
        "principe",
        "politique",
        "priorites",
        "croissance"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Une règle pour se guider",
            "en": "One rule to steer by"
          },
          "body": {
            "fr": "Maximiser la croissance durable tout en respectant les droits humains.",
            "en": "Maximize sustainable growth while respecting human rights."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La prescription centrale",
            "en": "The core prescription"
          },
          "body": {
            "fr": "Le cœur du livre : croissance économique durable + respect strict des droits humains.",
            "en": "The heart of the book: sustainable economic growth + strict respect for human rights."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un ordre de priorité clair",
            "en": "A clear ordering"
          },
          "body": {
            "fr": "Ce principe tranche des débats politiques sans fin en donnant une hiérarchie nette des priorités.",
            "en": "This principle cuts through endless policy debate by giving a clear priority ordering."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les arbitrages rétrécissent",
            "en": "Trade-offs shrink"
          },
          "body": {
            "fr": "Beaucoup de « dilemmes » difficiles s'atténuent une fois qu'on s'engage pour la croissance de long terme dans le respect des droits.",
            "en": "Many hard 'dilemmas' shrink once you commit to long-run growth within rights."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Utilise « Croissance + Droits » comme boussole pour choisir tes politiques et tes priorités.",
            "en": "Use 'Growth Plus Rights' as a compass for choosing policies and priorities."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Agir dans l'incertitude",
        "en": "Acting under uncertainty"
      },
      "caption": {
        "fr": "On ne voit pas le futur lointain — et alors ? 🌫️",
        "en": "We can't see the distant future — so what? 🌫️"
      },
      "tags": [
        "incertitude",
        "humilite",
        "nihilisme",
        "decision"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'incertitude ne doit pas paralyser",
            "en": "Uncertainty shouldn't paralyze us"
          },
          "body": {
            "fr": "Nous ne pouvons pas prédire le futur lointain — mais cela ne justifie pas l'inaction.",
            "en": "We can't predict the distant future — but that's no excuse for inaction."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le savoir s'effrite",
            "en": "Knowledge crumbles"
          },
          "body": {
            "fr": "Les conséquences lointaines de nos actes deviennent impossibles à connaître à mesure qu'on s'éloigne dans le temps.",
            "en": "The distant consequences of our actions become impossible to know the further out we look."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un argument pour la croissance",
            "en": "An argument for growth"
          },
          "body": {
            "fr": "Justement, cela pousse vers la croissance générale plutôt que vers des interventions fines et fragiles dont on ne maîtrise pas les effets.",
            "en": "This actually pushes toward broad growth rather than fragile, finely-tuned interventions whose effects we can't foresee."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une foi raisonnée",
            "en": "A reasoned faith"
          },
          "body": {
            "fr": "Cowen défend une foi raisonnée : nous en savons assez pour bien agir et choisir croissance + droits.",
            "en": "Cowen defends a reasoned faith: we know enough to act well and choose growth + rights."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne fais pas de l'incertitude une excuse au nihilisme : engage-toi pour des biens robustes et généraux.",
            "en": "Don't let uncertainty become an excuse for nihilism: commit to robust, general goods."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Croissance et pauvreté",
        "en": "Growth and poverty"
      },
      "caption": {
        "fr": "Le meilleur programme anti-pauvreté ? La croissance durable. 🍞",
        "en": "The best anti-poverty program? Sustainable growth. 🍞"
      },
      "tags": [
        "pauvrete",
        "croissance",
        "longterme",
        "politique"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Ce qui aide le plus les pauvres",
            "en": "What helps the poor most"
          },
          "body": {
            "fr": "Sur la durée, la croissance soutenue est ce qui fait le plus pour les pauvres.",
            "en": "Over time, sustained growth is what does the most for the poor."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Agrandir la tarte",
            "en": "Grow the pie"
          },
          "body": {
            "fr": "La croissance agrandit la richesse disponible pour tous, génération après génération.",
            "en": "Growth enlarges the wealth available to everyone, generation after generation."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Prudence sur les arbitrages",
            "en": "Caution on trade-offs"
          },
          "body": {
            "fr": "Cowen invite à la prudence avant de sacrifier la croissance de long terme à des gains de court terme.",
            "en": "Cowen urges caution before sacrificing long-run growth for short-run gains."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La leçon de l'histoire",
            "en": "The lesson of history"
          },
          "body": {
            "fr": "La croissance soutenue a sorti des milliards de personnes de la pauvreté à travers le monde.",
            "en": "Sustained growth has lifted billions of people out of poverty worldwide."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Se soucier des pauvres, c'est aussi protéger le moteur de la croissance de long terme.",
            "en": "Caring about the poor also means protecting the engine of long-run growth."
          }
        }
      ]
    }
  ],
  "where-is-my-flying-car": [
    {
      "concept": {
        "fr": "La courbe de Henry Adams",
        "en": "The Henry Adams Curve"
      },
      "caption": {
        "fr": "Pendant près de deux siècles, notre énergie par personne a doublé, encore et encore. Puis, vers 1970, tout s'est arrêté. ⚡",
        "en": "For nearly two centuries our energy per person doubled, again and again. Then, around 1970, it just stopped. ⚡"
      },
      "tags": [
        "energy",
        "stagnation",
        "henryadams",
        "progress"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La courbe de Henry Adams",
            "en": "The Henry Adams Curve"
          },
          "body": {
            "fr": "Pendant près de deux siècles, la puissance disponible par habitant a crû de façon régulière — jusqu'à ce qu'elle plafonne.",
            "en": "For nearly two centuries the power available per person grew steadily — until it flatlined."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "≈ 2 % par personne, chaque année",
            "en": "≈2% per person, every year"
          },
          "body": {
            "fr": "De la fin du XVIIIe siècle aux années 1970, l'énergie disponible par habitant a augmenté d'environ 2 % par an — une exponentielle remarquablement régulière.",
            "en": "From the late 18th century to the 1970s, energy available per person rose about 2% per year — a remarkably steady exponential."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "1970 : la rupture",
            "en": "1970: the break"
          },
          "body": {
            "fr": "Vers 1970, les États-Unis sont tombés de la courbe. La consommation d'énergie par personne a cessé de grimper et a stagné.",
            "en": "Around 1970 the U.S. fell off the curve. Energy use per person stopped climbing and plateaued."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas de futur sans puissance",
            "en": "No future without power"
          },
          "body": {
            "fr": "Hall soutient que la voiture volante, comme presque tout le futur promis, supposait cette croissance énergétique qui ne s'est jamais poursuivie.",
            "en": "Hall argues the flying car, like most of the promised future, assumed an energy growth that never continued."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Le vrai mystère est énergétique",
            "en": "The real mystery is energy"
          },
          "body": {
            "fr": "Ce n'est pas la physique qui a bloqué : nous avons cessé de vouloir — et de produire — toujours plus de puissance.",
            "en": "Physics didn't block us: we stopped wanting — and making — ever more power."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La voiture volante était faisable",
        "en": "The flying car was feasible"
      },
      "caption": {
        "fr": "La voiture volante existait déjà — on a juste décidé de ne pas la construire pour tous. 🚗✈️",
        "en": "The flying car already existed — we just chose not to build it for everyone. 🚗✈️"
      },
      "tags": [
        "flyingcar",
        "engineering",
        "aerocar",
        "vtol"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "On savait déjà les construire",
            "en": "We already knew how to build them"
          },
          "body": {
            "fr": "La voiture volante n'était pas un rêve impossible : des prototypes qui roulaient et volaient existaient dès les années 1930-40.",
            "en": "The flying car wasn't an impossible dream: prototypes that drove and flew existed as early as the 1930s-40s."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "De vrais modèles",
            "en": "Real machines"
          },
          "body": {
            "fr": "Hall rappelle que des engins roulants-volants comme l'Aerocar de Molt Taylor volaient et roulaient réellement.",
            "en": "Hall notes that roadable aircraft like Molt Taylor's Aerocar genuinely flew and drove."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un problème d'ingénierie, pas de magie",
            "en": "An engineering problem, not magic"
          },
          "body": {
            "fr": "Le défi n'était pas la physique, mais le coût, la certification et la volonté d'en faire un produit de masse.",
            "en": "The challenge wasn't physics but cost, certification, and the will to make it a mass-market product."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le VTOL comme vraie cible",
            "en": "VTOL as the real target"
          },
          "body": {
            "fr": "Hall soutient que la voiture volante vraiment désirée serait à décollage et atterrissage verticaux, affranchie des pistes comme des routes.",
            "en": "Hall argues the flying car people really wanted would be vertical takeoff and landing, freed from both runways and roads."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Un choix, pas une fatalité",
            "en": "A choice, not a fate"
          },
          "body": {
            "fr": "L'absence de voitures volantes n'est pas un échec de la nature, mais une décision de société.",
            "en": "The missing flying car isn't a failure of nature but a decision by society."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'ergophobie",
        "en": "Ergophobia"
      },
      "caption": {
        "fr": "Et si le vrai frein au progrès était notre peur de l'énergie elle-même ? 😨⚡",
        "en": "What if the real brake on progress is our fear of energy itself? 😨⚡"
      },
      "tags": [
        "energy",
        "culture",
        "degrowth",
        "ergophobia"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'ergophobie",
            "en": "Ergophobia"
          },
          "body": {
            "fr": "Hall diagnostique une peur culturelle de l'énergie et de la puissance qui aurait paralysé le progrès.",
            "en": "Hall diagnoses a cultural fear of energy and power that he says paralyzed progress."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La peur de la puissance",
            "en": "Fear of power"
          },
          "body": {
            "fr": "L'ergophobie, c'est le rejet de l'usage massif d'énergie, devenu suspect voire immoral à partir des années 1970.",
            "en": "Ergophobia is the rejection of large-scale energy use, which became suspect, even immoral, from the 1970s on."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "De l'abondance à la privation",
            "en": "From abundance to restraint"
          },
          "body": {
            "fr": "La culture est passée de « faire plus, avec plus de puissance » à « consommer moins », inversant le moteur du progrès.",
            "en": "Culture shifted from 'do more with more power' to 'use less', reversing the engine of progress."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le coût caché",
            "en": "The hidden cost"
          },
          "body": {
            "fr": "Sans croissance énergétique, les technologies gourmandes — vol individuel, nano-usines — deviennent tout simplement impossibles.",
            "en": "Without energy growth, power-hungry technologies — personal flight, nanofactories — simply become impossible."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Renoncer sans le dire",
            "en": "Giving up silently"
          },
          "body": {
            "fr": "Une civilisation qui prend peur de l'énergie renonce discrètement à son propre futur.",
            "en": "A civilization that grows afraid of energy quietly gives up on its own future."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'effet Machiavel",
        "en": "The Machiavelli Effect"
      },
      "caption": {
        "fr": "L'innovation ne meurt pas toute seule : quelqu'un profite du statu quo. 🏛️",
        "en": "Innovation doesn't die on its own — someone profits from the status quo. 🏛️"
      },
      "tags": [
        "regulation",
        "innovation",
        "machiavelli",
        "stagnation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'effet Machiavel",
            "en": "The Machiavelli Effect"
          },
          "body": {
            "fr": "Pourquoi l'innovation ralentit-elle ? Parce que ceux qui profitent de l'ordre existant combattent tout changement.",
            "en": "Why does innovation slow down? Because those who profit from the existing order fight any change."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La leçon de Machiavel",
            "en": "Machiavelli's lesson"
          },
          "body": {
            "fr": "Hall part de Machiavel : rien n'est plus difficile que d'introduire un nouvel ordre des choses, car les bénéficiaires de l'ancien s'y opposent.",
            "en": "Hall starts from Machiavelli: nothing is harder than introducing a new order of things, because those who benefited from the old one resist it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La bureaucratie comme frein",
            "en": "Bureaucracy as a brake"
          },
          "body": {
            "fr": "La montée des régulations et des intérêts établis après les années 1960 a rendu les projets ambitieux lents et ruineux.",
            "en": "The rise of regulation and entrenched interests after the 1960s made ambitious projects slow and ruinously expensive."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le cliquet réglementaire",
            "en": "The regulatory ratchet"
          },
          "body": {
            "fr": "Les règles s'accumulent sans jamais s'alléger, étranglant peu à peu les technologies physiques.",
            "en": "Rules pile up and never loosen, gradually strangling physical technologies."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Une stagnation prévisible",
            "en": "A predictable stagnation"
          },
          "body": {
            "fr": "Le blocage n'est pas un accident technique : c'est le produit d'incitations qui protègent l'existant.",
            "en": "The blockage isn't a technical accident — it's the product of incentives that protect the incumbent."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le second âge atomique gâché",
        "en": "The wasted second atomic age"
      },
      "caption": {
        "fr": "Le nucléaire n'a pas échoué. On l'a réglementé jusqu'à l'arrêt. ☢️",
        "en": "Nuclear didn't fail. We regulated it to a standstill. ☢️"
      },
      "tags": [
        "nuclear",
        "energy",
        "regulation",
        "LNT"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'énergie qu'on a enterrée",
            "en": "The energy we buried"
          },
          "body": {
            "fr": "Hall soutient que le nucléaire pouvait tenir la promesse d'une énergie quasi illimitée — avant d'être réglementé jusqu'à l'immobilité.",
            "en": "Hall argues nuclear could have delivered near-limitless energy — before being regulated into immobility."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une promesse trahie",
            "en": "A broken promise"
          },
          "body": {
            "fr": "La promesse d'une électricité abondante et bon marché a été brisée, non par la physique, mais par l'escalade des coûts réglementaires.",
            "en": "The promise of cheap, abundant electricity was broken not by physics but by escalating regulatory costs."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le modèle sans seuil (LNT)",
            "en": "The no-threshold model (LNT)"
          },
          "body": {
            "fr": "L'idée qu'aucune dose de radiation n'est sûre a nourri une peur disproportionnée et le principe ALARA, faisant exploser les coûts.",
            "en": "The idea that no radiation dose is safe fed disproportionate fear and the ALARA principle, blowing up costs."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un futur nucléaire",
            "en": "A nuclear future"
          },
          "body": {
            "fr": "Un monde riche en énergie nucléaire rendait crédibles les voitures volantes et les usines atomiquement précises.",
            "en": "A world rich in nuclear energy made flying cars and atomically precise factories credible."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Impossible par décision",
            "en": "Impossible by decision"
          },
          "body": {
            "fr": "Le nucléaire n'a pas échoué techniquement : on l'a rendu artificiellement impossible.",
            "en": "Nuclear didn't fail technically — it was made artificially impossible."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La nanotechnologie",
        "en": "Nanotechnology"
      },
      "caption": {
        "fr": "Et si on pouvait fabriquer presque tout, atome par atome ? 🔬",
        "en": "What if we could build almost anything, atom by atom? 🔬"
      },
      "tags": [
        "nanotech",
        "manufacturing",
        "drexler",
        "future"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Fabriquer atome par atome",
            "en": "Building atom by atom"
          },
          "body": {
            "fr": "Pour Hall, chercheur en nanotechnologie, la vraie révolution manquante est la fabrication atomiquement précise.",
            "en": "For Hall, a nanotechnology researcher, the real missing revolution is atomically precise manufacturing."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La vision de Drexler",
            "en": "Drexler's vision"
          },
          "body": {
            "fr": "Hall reprend l'idée de machines moléculaires capables d'assembler la matière atome par atome, dans la lignée d'Eric Drexler.",
            "en": "Hall builds on the idea of molecular machines assembling matter atom by atom, in the line of Eric Drexler."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Presque tout, à bas coût",
            "en": "Almost anything, cheaply"
          },
          "body": {
            "fr": "Des nano-usines pourraient produire quasiment n'importe quoi à faible coût, y compris les matériaux légers d'une voiture volante.",
            "en": "Nanofactories could produce almost anything cheaply, including the lightweight materials of a flying car."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une promesse repoussée",
            "en": "A deferred promise"
          },
          "body": {
            "fr": "Comme le nucléaire, la nanotech a été freinée par le scepticisme et le manque d'investissement, pas par une impossibilité physique.",
            "en": "Like nuclear, nanotech was held back by skepticism and lack of investment, not by physical impossibility."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Les atomes ont stagné",
            "en": "Atoms stagnated"
          },
          "body": {
            "fr": "Le futur « dur » des atomes a stagné pendant que le futur « mou » des bits avançait seul.",
            "en": "The 'hard' future of atoms stalled while the 'soft' future of bits advanced alone."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Échecs de nerf et d'imagination",
        "en": "Failures of nerve and imagination"
      },
      "caption": {
        "fr": "Prédire l'avenir échoue rarement par manque de technique — plutôt par manque d'audace. 🔮",
        "en": "Predicting the future rarely fails for lack of tech — it fails for lack of nerve. 🔮"
      },
      "tags": [
        "prediction",
        "clarke",
        "imagination",
        "future"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Pourquoi les prophéties ratent",
            "en": "Why prophecies miss"
          },
          "body": {
            "fr": "Hall reprend la classification d'Arthur C. Clarke pour expliquer nos angles morts sur le futur.",
            "en": "Hall borrows Arthur C. Clarke's taxonomy to explain our blind spots about the future."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'échec de nerf",
            "en": "The failure of nerve"
          },
          "body": {
            "fr": "On dispose des faits mais on n'ose pas conclure qu'une chose est possible : c'est un manque de courage intellectuel.",
            "en": "We have the facts but don't dare conclude something is possible: a failure of intellectual courage."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'échec d'imagination",
            "en": "The failure of imagination"
          },
          "body": {
            "fr": "On ne parvient même pas à concevoir la possibilité, faute d'idées ou de cadre mental adéquat.",
            "en": "We can't even conceive of the possibility, lacking the ideas or the mental framework."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Appliqué à la voiture volante",
            "en": "Applied to the flying car"
          },
          "body": {
            "fr": "Notre incapacité à retrouver le futur promis relève surtout d'un manque de nerf : la technique existe, l'audace non.",
            "en": "Our failure to recover the promised future is mostly a failure of nerve: the tech exists, the boldness doesn't."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "L'avenir demande de l'audace",
            "en": "The future takes nerve"
          },
          "body": {
            "fr": "Avant d'être un problème d'ingénierie, l'avenir est un problème d'audace et d'imagination.",
            "en": "Before it's an engineering problem, the future is a problem of nerve and imagination."
          }
        }
      ]
    }
  ],
  "art-of-doing-science": [
    {
      "concept": {
        "fr": "Apprendre à apprendre",
        "en": "Learning to Learn"
      },
      "caption": {
        "fr": "Le savoir se périme, la façon de penser reste. 🧠",
        "en": "Facts go stale; a way of thinking lasts. 🧠"
      },
      "tags": [
        "Hamming",
        "learning",
        "fundamentals",
        "mindset"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Apprendre à apprendre",
            "en": "Learning to Learn"
          },
          "body": {
            "fr": "Hamming n'enseigne pas des faits mais un style de pensée qui survivra à leur obsolescence.",
            "en": "Hamming teaches not facts but a style of thinking that outlasts their obsolescence."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le savoir se périme",
            "en": "Knowledge dates fast"
          },
          "body": {
            "fr": "La connaissance technique croît et vieillit vite : ce qu'on apprend aujourd'hui sera dépassé dans quelques décennies.",
            "en": "Technical knowledge grows and ages fast: what you learn today will be outdated within a few decades."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Viser le style",
            "en": "Aim for style"
          },
          "body": {
            "fr": "Il transmet donc une manière d'aborder les problèmes, pas un catalogue de recettes vouées à vieillir.",
            "en": "So he passes on a way of approaching problems, not a catalog of recipes doomed to age."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Enseigner par l'exemple",
            "en": "Teach by example"
          },
          "body": {
            "fr": "Le cours mêle science, ingénierie et anecdotes vécues pour montrer comment penser, pas seulement quoi savoir.",
            "en": "The course blends science, engineering and lived anecdotes to show how to think, not just what to know."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Investis dans les fondamentaux et dans ta façon d'apprendre : ils se périment moins vite que les détails.",
            "en": "Invest in fundamentals and in how you learn: they age slower than the details."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Travailler sur des problèmes importants",
        "en": "Work on important problems"
      },
      "caption": {
        "fr": "Quels sont les vrais problèmes de ton domaine ? 🎯",
        "en": "What are the real problems in your field? 🎯"
      },
      "tags": [
        "Hamming",
        "research",
        "focus",
        "greatwork"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les problèmes importants",
            "en": "Important problems"
          },
          "body": {
            "fr": "Pour faire un travail important, encore faut-il choisir de s'y attaquer.",
            "en": "To do important work, you first have to choose to tackle it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La question à se poser",
            "en": "The question to ask"
          },
          "body": {
            "fr": "Hamming demandait à ses collègues : quels sont les problèmes importants de votre domaine, et y travaillez-vous ?",
            "en": "Hamming asked colleagues: what are the important problems of your field, and are you working on them?"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les vendredis d'idées",
            "en": "Fridays for big thoughts"
          },
          "body": {
            "fr": "Il réservait ses vendredis après-midi à « penser grand » plutôt qu'à cocher des tâches urgentes.",
            "en": "He set aside Friday afternoons to think big rather than tick off urgent tasks."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Important n'est pas attaquable tout de suite",
            "en": "Important isn't the same as attackable"
          },
          "body": {
            "fr": "Un problème ne vaut le coup que si tu as aussi un angle d'attaque ; sinon, attends le bon moment.",
            "en": "A problem is worth it only if you also have a way in; otherwise you wait for the right moment."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Hamming",
            "en": "Hamming"
          },
          "body": {
            "fr": "Si vous ne travaillez pas sur un problème important, il est peu probable que vous fassiez un travail important.",
            "en": "If you do not work on an important problem, it's unlikely you'll do important work."
          },
          "attribution": {
            "fr": "Richard Hamming",
            "en": "Richard Hamming"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Réserve régulièrement du temps pour identifier et attaquer ce qui compte vraiment.",
            "en": "Regularly carve out time to spot and attack what truly matters."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La porte ouverte",
        "en": "The open door"
      },
      "caption": {
        "fr": "Ouvre ta porte : le long terme te remerciera. 🚪",
        "en": "Open your door: the long run pays you back. 🚪"
      },
      "tags": [
        "Hamming",
        "BellLabs",
        "openness",
        "productivity"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Porte ouverte, porte fermée",
            "en": "Open door, closed door"
          },
          "body": {
            "fr": "Une observation de Hamming à Bell Labs sur le prix de l'isolement.",
            "en": "A Hamming observation at Bell Labs about the price of isolation."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le constat",
            "en": "The pattern"
          },
          "body": {
            "fr": "Ceux qui fermaient leur porte travaillaient un peu plus efficacement au jour le jour.",
            "en": "Those who shut their door worked a bit more efficiently day to day."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Mais dix ans plus tard",
            "en": "But ten years on"
          },
          "body": {
            "fr": "Ceux qui laissaient la porte ouverte finissaient par faire un travail bien plus important.",
            "en": "Those who kept the door open ended up doing far more important work."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pourquoi",
            "en": "Why"
          },
          "body": {
            "fr": "La porte ouverte t'expose aux bonnes questions et aux problèmes qui comptent vraiment pour les autres.",
            "en": "An open door exposes you to the right questions and to problems that actually matter to others."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Un peu d'efficacité sacrifiée à l'ouverture peut rapporter énormément plus tard.",
            "en": "A little efficiency traded for openness can pay off enormously later."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Comprendre, pas calculer",
        "en": "Insight, not numbers"
      },
      "caption": {
        "fr": "À quoi bon des chiffres qu'on ne comprend pas ? 💡",
        "en": "What good are numbers you don't understand? 💡"
      },
      "tags": [
        "Hamming",
        "computing",
        "insight",
        "modeling"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le but du calcul",
            "en": "The point of computing"
          },
          "body": {
            "fr": "Pour Hamming, l'ordinateur ne sert pas à produire des chiffres mais à comprendre.",
            "en": "For Hamming, the computer exists to create understanding, not numbers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le piège des chiffres",
            "en": "The numbers trap"
          },
          "body": {
            "fr": "Empiler des résultats numériques sans saisir ce qu'ils disent ne fait pas avancer.",
            "en": "Piling up numerical output without grasping what it means gets you nowhere."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Modéliser pour voir",
            "en": "Model to see"
          },
          "body": {
            "fr": "Le vrai apport du calcul est de révéler des comportements, des tendances, des structures.",
            "en": "The real value of computing is revealing behavior, trends and structure."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Garde la main sur le sens",
            "en": "Stay in charge of meaning"
          },
          "body": {
            "fr": "Tu dois toujours pouvoir dire pourquoi un résultat est plausible, pas seulement l'afficher.",
            "en": "You should always be able to say why a result is plausible, not just display it."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Hamming",
            "en": "Hamming"
          },
          "body": {
            "fr": "Le but du calcul, c'est la compréhension, pas les chiffres.",
            "en": "The purpose of computing is insight, not numbers."
          },
          "attribution": {
            "fr": "Richard Hamming",
            "en": "Richard Hamming"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de lancer un calcul, demande-toi quelle compréhension tu en attends.",
            "en": "Before you run a computation, ask what understanding you expect from it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Science ou ingénierie",
        "en": "Science vs engineering"
      },
      "caption": {
        "fr": "Deux mondes, deux rapports à l'inconnu. ⚙️",
        "en": "Two worlds, two relationships with the unknown. ⚙️"
      },
      "tags": [
        "Hamming",
        "science",
        "engineering",
        "uncertainty"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Science et ingénierie",
            "en": "Science and engineering"
          },
          "body": {
            "fr": "Le titre du livre oppose deux façons d'agir face à l'inconnu.",
            "en": "The book's title contrasts two ways of acting in the face of the unknown."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "En science",
            "en": "In science"
          },
          "body": {
            "fr": "On explore justement ce qu'on ne comprend pas encore : l'inconnu est le terrain.",
            "en": "You explore exactly what you don't yet understand: the unknown is the whole point."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "En ingénierie",
            "en": "In engineering"
          },
          "body": {
            "fr": "On construit du fiable : agir sans maîtriser ce qu'on fait devient dangereux.",
            "en": "You build things that must work: acting without mastering it becomes dangerous."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Hamming",
            "en": "Hamming"
          },
          "body": {
            "fr": "En science, si vous savez ce que vous faites, vous ne devriez pas le faire. En ingénierie, si vous ne savez pas ce que vous faites, vous ne devriez pas le faire.",
            "en": "In science if you know what you are doing you should not be doing it. In engineering if you do not know what you are doing you should not be doing it."
          },
          "attribution": {
            "fr": "Richard Hamming",
            "en": "Richard Hamming"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Sache si tu explores ou si tu construis : le bon niveau d'incertitude n'est pas le même.",
            "en": "Know whether you're exploring or building: the right level of uncertainty differs."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'espace à n dimensions",
        "en": "n-dimensional space"
      },
      "caption": {
        "fr": "En haute dimension, ton intuition ment. 📐",
        "en": "In high dimensions, your intuition lies. 📐"
      },
      "tags": [
        "Hamming",
        "geometry",
        "dimensions",
        "intuition"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'espace à n dimensions",
            "en": "n-dimensional space"
          },
          "body": {
            "fr": "Hamming montre pourquoi la géométrie de la haute dimension déroute.",
            "en": "Hamming shows why high-dimensional geometry defies intuition."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le volume file vers le bord",
            "en": "Volume flees to the surface"
          },
          "body": {
            "fr": "Dans une sphère de grande dimension, presque tout le volume se concentre près de la surface.",
            "en": "In a high-dimensional sphere, almost all the volume sits near the surface."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Tout devient perpendiculaire",
            "en": "Everything becomes perpendicular"
          },
          "body": {
            "fr": "En haute dimension, deux vecteurs pris au hasard sont presque toujours quasi orthogonaux.",
            "en": "In high dimensions, two random vectors are almost always nearly orthogonal."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pourquoi ça compte",
            "en": "Why it matters"
          },
          "body": {
            "fr": "Ces effets contre-intuitifs gouvernent les données, le codage et l'échantillonnage réels.",
            "en": "These counterintuitive effects govern real data, coding and sampling."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "En grande dimension, remplace l'intuition 3D par le calcul : elle te trahit.",
            "en": "In high dimensions, replace 3D intuition with computation: it will betray you."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'effet des intérêts composés",
        "en": "Knowledge compounds"
      },
      "caption": {
        "fr": "Un peu chaque jour, et ça finit par exploser. 📈",
        "en": "A little each day, and it compounds. 📈"
      },
      "tags": [
        "Hamming",
        "compounding",
        "drive",
        "growth"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le savoir composé",
            "en": "Compound knowledge"
          },
          "body": {
            "fr": "Hamming compare la connaissance et l'effort à des intérêts composés.",
            "en": "Hamming likens knowledge and effort to compound interest."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ça s'accumule",
            "en": "It accumulates"
          },
          "body": {
            "fr": "Ce que tu apprends aujourd'hui aide à apprendre demain : le rendement se cumule.",
            "en": "What you learn today helps you learn tomorrow: the returns stack up."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le rôle de l'engagement",
            "en": "The role of commitment"
          },
          "body": {
            "fr": "Ceux qui accomplissent de grandes choses s'y engagent émotionnellement, pas seulement tâche par tâche.",
            "en": "Those who achieve great things commit to them emotionally, not just task by task."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La constance bat l'à-coup",
            "en": "Consistency beats bursts"
          },
          "body": {
            "fr": "Un effort régulier et dirigé finit par dépasser de loin les poussées ponctuelles.",
            "en": "Steady, directed effort ends up far ahead of sporadic bursts."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Apprends un peu chaque jour dans une direction choisie : le cumul fait la différence.",
            "en": "Learn a little each day in a chosen direction: the compounding is what wins."
          }
        }
      ]
    }
  ],
  "get-together": [
    {
      "concept": {
        "fr": "Avec, pas pour",
        "en": "With, not for"
      },
      "caption": {
        "fr": "La phrase qui résume tout le livre : on ne construit pas une communauté pour les gens, mais avec eux. 🔥",
        "en": "The one line that sums up the whole book: you don't build a community for people, you build it with them. 🔥"
      },
      "tags": [
        "community",
        "GetTogether",
        "belonging",
        "cocreation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Avec, pas pour",
            "en": "With, not for"
          },
          "body": {
            "fr": "La leçon centrale de Get Together : une communauté se bâtit avec vos gens, jamais pour eux.",
            "en": "The core lesson of Get Together: a community is built with your people, never for them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des co-créateurs, pas un public",
            "en": "Co-creators, not an audience"
          },
          "body": {
            "fr": "Vos membres ne sont pas des spectateurs que vous servez : ce sont des participants qui façonnent la communauté.",
            "en": "Your members aren't spectators you serve; they're participants who shape the community."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Demandez, ne devinez pas",
            "en": "Ask, don't guess"
          },
          "body": {
            "fr": "Plutôt que de tout concevoir seul, invitez les gens à construire avec vous.",
            "en": "Instead of designing everything alone, invite people to build it alongside you."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Vos gens = votre atout",
            "en": "Your people are the asset"
          },
          "body": {
            "fr": "L'énergie, les idées et le travail viennent des membres eux-mêmes. C'est là que réside la force.",
            "en": "The energy, ideas and work come from the members themselves. That's where the strength lives."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Facilitateur, pas fournisseur",
            "en": "Facilitator, not provider"
          },
          "body": {
            "fr": "Arrêtez de jouer devant un public. Créez à côté de vos gens, pas à leur place.",
            "en": "Stop performing for an audience. Create alongside your people, not on their behalf."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le feu en trois temps",
        "en": "The fire in three stages"
      },
      "caption": {
        "fr": "Une communauté, c'est comme un feu : on l'allume, on l'entretient, puis on passe le flambeau. 🕯️",
        "en": "A community is like a fire: you spark it, you stoke it, then you pass the torch. 🕯️"
      },
      "tags": [
        "community",
        "GetTogether",
        "framework",
        "leadership"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Allumer, entretenir, transmettre",
            "en": "Spark, stoke, pass"
          },
          "body": {
            "fr": "Get Together décrit la vie d'une communauté comme un feu en trois étapes.",
            "en": "Get Together frames the life of a community as a fire in three stages."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Allumer la flamme",
            "en": "Spark the flame"
          },
          "body": {
            "fr": "Trouvez vos gens et faites quelque chose ensemble pour la première fois.",
            "en": "Find your people and do something together for the very first time."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Entretenir le feu",
            "en": "Stoke the fire"
          },
          "body": {
            "fr": "Approfondissez l'engagement : transformez les visiteurs d'un jour en habitués qui participent.",
            "en": "Deepen engagement: turn one-time attendees into regulars who take part."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Passer le flambeau",
            "en": "Pass the torch"
          },
          "body": {
            "fr": "Partagez la responsabilité pour que la communauté grandisse au-delà de vous.",
            "en": "Share ownership so the community grows beyond you."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Sachez où vous en êtes",
            "en": "Know your stage"
          },
          "body": {
            "fr": "Chaque étape demande un travail différent. Identifiez la vôtre avant d'agir.",
            "en": "Each stage calls for different work. Identify yours before you act."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Trouver vos gens",
        "en": "Find your people"
      },
      "caption": {
        "fr": "Avant de rassembler, il faut savoir précisément qui vous voulez réunir. 🎯",
        "en": "Before you gather anyone, know exactly who you want to bring together. 🎯"
      },
      "tags": [
        "community",
        "GetTogether",
        "purpose",
        "start"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Trouvez vos gens",
            "en": "Find your people"
          },
          "body": {
            "fr": "La première étincelle : identifier clairement qui partage votre élan.",
            "en": "The first spark: clearly identify who shares your drive."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Soyez précis",
            "en": "Get specific"
          },
          "body": {
            "fr": "Un groupe étroit et bien défini vaut mieux qu'un vague « tout le monde ».",
            "en": "A narrow, well-defined group beats a vague 'everyone.'"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un but partagé",
            "en": "A shared purpose"
          },
          "body": {
            "fr": "Les gens se rassemblent autour d'une passion ou d'un objectif commun, pas d'une catégorie démographique.",
            "en": "People unite around a shared passion or goal, not a demographic."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Commencez petit",
            "en": "Start small"
          },
          "body": {
            "fr": "Commencez avec la poignée de gens qui s'en soucient déjà. Pas besoin d'une foule.",
            "en": "Begin with the handful who already care. You don't need a crowd."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Qualité, pas quantité",
            "en": "Quality, not quantity"
          },
          "body": {
            "fr": "Nommez vos gens avec précision : c'est plus puissant que viser large.",
            "en": "Name your people precisely; it's more powerful than aiming wide."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Faire ensemble",
        "en": "Do something together"
      },
      "caption": {
        "fr": "Une communauté ne naît pas d'une identité partagée, mais d'une action partagée. 🤝",
        "en": "Community isn't born from a shared identity but from a shared activity. 🤝"
      },
      "tags": [
        "community",
        "GetTogether",
        "ritual",
        "activity"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Faites quelque chose ensemble",
            "en": "Do something together"
          },
          "body": {
            "fr": "L'étincelle d'une communauté, c'est une activité partagée, pas seulement une appartenance.",
            "en": "The spark of a community is a shared activity, not just belonging."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'action avant l'identité",
            "en": "Activity before identity"
          },
          "body": {
            "fr": "Une communauté s'enflamme quand les gens font quelque chose ensemble, pas seulement quand ils « sont » quelque chose.",
            "en": "A community ignites when people do something together, not just when they 'are' something."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La première fois compte",
            "en": "The first time matters"
          },
          "body": {
            "fr": "Le premier rassemblement, aussi modeste soit-il, est l'étincelle qui lance tout.",
            "en": "The first gathering, however small, is the spark that starts it all."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Répétez, ritualisez",
            "en": "Repeat, make it a ritual"
          },
          "body": {
            "fr": "Transformez l'activité en habitude récurrente pour que les gens reviennent.",
            "en": "Turn the activity into a recurring habit so people come back."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Créez une raison de revenir",
            "en": "Create a reason to return"
          },
          "body": {
            "fr": "Une activité simple et répétable soude un groupe mieux qu'un long discours.",
            "en": "A simple, repeatable activity bonds a group better than any speech."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les passionnés d'abord",
        "en": "The passionate few"
      },
      "caption": {
        "fr": "Ne courez pas après la foule : misez sur les quelques-uns qui s'y investissent vraiment. ✨",
        "en": "Don't chase the crowd; bet on the few who truly invest. ✨"
      },
      "tags": [
        "community",
        "GetTogether",
        "engagement",
        "growth"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les passionnés d'abord",
            "en": "The passionate few first"
          },
          "body": {
            "fr": "Get Together valorise l'intensité de quelques membres plutôt que le volume.",
            "en": "Get Together values the intensity of a few members over sheer volume."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ne visez pas le nombre",
            "en": "Don't chase numbers"
          },
          "body": {
            "fr": "Les indicateurs de vanité et la croissance rapide ne font pas une communauté vivante.",
            "en": "Vanity metrics and fast growth don't make a living community."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Investissez dans les plus engagés",
            "en": "Invest in the most engaged"
          },
          "body": {
            "fr": "Concentrez votre énergie sur les quelques membres qui s'investissent le plus.",
            "en": "Pour your energy into the few members who care most."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ils attirent les autres",
            "en": "They draw others in"
          },
          "body": {
            "fr": "Vos membres les plus passionnés recrutent et accueillent les nouveaux à votre place.",
            "en": "Your most passionate members recruit and welcome newcomers for you."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Profondeur avant portée",
            "en": "Depth before reach"
          },
          "body": {
            "fr": "Servez d'abord ceux qui s'investissent le plus : la croissance suit, portée par eux.",
            "en": "Serve those who show up hardest first; growth follows, carried by them."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Passer le flambeau",
        "en": "Pass the torch"
      },
      "caption": {
        "fr": "Une communauté durable, c'est une communauté qui n'a plus besoin de vous au centre. 🔥➡️",
        "en": "A lasting community is one that no longer needs you at its center. 🔥➡️"
      },
      "tags": [
        "community",
        "GetTogether",
        "ownership",
        "leadership"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Passez le flambeau",
            "en": "Pass the torch"
          },
          "body": {
            "fr": "La dernière étape : donner du pouvoir aux membres pour que la communauté vous dépasse.",
            "en": "The final stage: empower members so the community outgrows you."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Repérez les leaders émergents",
            "en": "Spot emerging leaders"
          },
          "body": {
            "fr": "Certains membres prennent déjà des initiatives. Repérez-les et faites-leur de la place.",
            "en": "Some members are already stepping up. Notice them and make room."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Donnez de vraies responsabilités",
            "en": "Give real responsibility"
          },
          "body": {
            "fr": "Transmettez de l'appropriation, pas seulement des tâches à exécuter.",
            "en": "Hand over ownership, not just tasks to execute."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La communauté vous dépasse",
            "en": "The community outgrows you"
          },
          "body": {
            "fr": "L'objectif est une communauté qui prospère sans le fondateur au centre de tout.",
            "en": "The goal is a community that thrives without the founder at the center of everything."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Cultivez des leaders",
            "en": "Cultivate leaders"
          },
          "body": {
            "fr": "Le succès, c'est de vous rendre remplaçable : partagez le pouvoir tôt.",
            "en": "Success means making yourself replaceable; share power early."
          }
        }
      ]
    }
  ],
  "the-dream-machine": [
    {
      "concept": {
        "fr": "La symbiose homme-machine",
        "en": "Man-Computer Symbiosis"
      },
      "caption": {
        "fr": "Et si l'ordinateur n'etait pas la pour nous remplacer, mais pour penser AVEC nous ? 🧠",
        "en": "What if the computer wasn't built to replace us, but to think WITH us? 🧠"
      },
      "tags": [
        "Licklider",
        "symbiosis",
        "HCI",
        "computing"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La symbiose homme-machine",
            "en": "Man-Computer Symbiosis"
          },
          "body": {
            "fr": "L'idee fondatrice du livre : coupler etroitement le cerveau humain et la machine pour penser mieux qu'aucun des deux ne le pourrait seul.",
            "en": "The book's founding idea: couple the human brain and the machine so tightly that together they think better than either could alone."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un article de 1960",
            "en": "A 1960 paper"
          },
          "body": {
            "fr": "Dans 'Man-Computer Symbiosis', le psychologue J.C.R. Licklider imagine un partenariat en temps reel entre humains et ordinateurs, a une epoque ou la machine sert surtout a calculer par lots.",
            "en": "In 'Man-Computer Symbiosis', psychologist J.C.R. Licklider imagined a real-time partnership between humans and computers, at a time when machines were mainly batch calculators."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas de l'automatisation",
            "en": "Not automation"
          },
          "body": {
            "fr": "Licklider ne veut pas que la machine remplace l'homme. Il veut une cooperation ou chacun fait ce qu'il fait le mieux, en dialogue constant.",
            "en": "Licklider didn't want the machine to replace the human. He wanted cooperation where each does what it does best, in constant dialogue."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des forces complementaires",
            "en": "Complementary strengths"
          },
          "body": {
            "fr": "A l'humain le jugement, l'intuition et la formulation des buts ; a la machine le calcul, la memoire et la vitesse. Ensemble : une nouvelle facon de raisonner.",
            "en": "To the human: judgment, intuition, setting the goals. To the machine: calculation, memory, speed. Together: a new way of reasoning."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ses mots",
            "en": "In his words"
          },
          "body": {
            "fr": "\"L'espoir est que, d'ici peu d'annees, les cerveaux humains et les machines a calculer soient couples tres etroitement, et que ce partenariat pense comme aucun cerveau humain ne l'a jamais fait.\"",
            "en": "\"The hope is that, in not too many years, human brains and computing machines will be coupled together very tightly, and that the resulting partnership will think as no human brain has ever thought.\""
          },
          "attribution": {
            "fr": "J.C.R. Licklider",
            "en": "J.C.R. Licklider"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'informatique interactive que nous vivons aujourd'hui n'est pas nee d'une prouesse technique, mais d'une vision : l'ordinateur comme partenaire de pensee.",
            "en": "The interactive computing we live in today wasn't born from a technical feat but from a vision: the computer as a thinking partner."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le probleme des 85 %",
        "en": "The 85% Problem"
      },
      "caption": {
        "fr": "Il a chronometre sa propre journee de travail. Le resultat a lance une revolution. ⏱️",
        "en": "He timed his own workday. The result sparked a revolution. ⏱️"
      },
      "tags": [
        "Licklider",
        "productivity",
        "thinking",
        "computing"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le probleme des 85 %",
            "en": "The 85% Problem"
          },
          "body": {
            "fr": "Avant de rever d'ordinateurs, Licklider a fait une chose simple : mesurer ou passait vraiment son temps de reflexion.",
            "en": "Before dreaming of computers, Licklider did something simple: measure where his thinking time actually went."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une auto-analyse",
            "en": "A self-study"
          },
          "body": {
            "fr": "Licklider a mene une petite etude de temps et de mouvements sur son propre travail de chercheur pour voir ce qui l'occupait reellement.",
            "en": "Licklider ran a small time-and-motion study on his own research work to see what really occupied him."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le constat qui pique",
            "en": "The stinging finding"
          },
          "body": {
            "fr": "Environ 85 % de son temps 'de reflexion' partait en taches mecaniques : chercher, tracer des courbes, calculer, se mettre en position de penser.",
            "en": "About 85% of his 'thinking' time went to mechanical chores: searching, plotting graphs, calculating, getting into position to think."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La vraie pensee, minoritaire",
            "en": "Real thought, a minority"
          },
          "body": {
            "fr": "Les decisions et les idees, l'essentiel, ne representaient qu'une fraction du temps. Le reste etait de la corvee que la machine pourrait absorber.",
            "en": "Decisions and insights, the essential part, were only a fraction of the time. The rest was drudgery a machine could absorb."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ce chiffre a donne un but concret a la symbiose : liberer l'esprit humain de la mecanique pour lui rendre le temps de penser.",
            "en": "That number gave symbiosis a concrete goal: free the human mind from the mechanics to give it back the time to think."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Du traitement par lots a l'interactif",
        "en": "From Batch to Interactive"
      },
      "caption": {
        "fr": "Autrefois, 'utiliser un ordinateur' voulait dire attendre des heures pour une reponse. 🕰️",
        "en": "Once, 'using a computer' meant waiting hours for an answer. 🕰️"
      },
      "tags": [
        "time-sharing",
        "batch",
        "ProjectMAC",
        "computing"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Du lot a l'interactif",
            "en": "From Batch to Interactive"
          },
          "body": {
            "fr": "La bataille culturelle centrale du livre : rendre l'ordinateur conversationnel, ici et maintenant, plutot que distant et bureaucratique.",
            "en": "The book's central culture war: make the computer conversational, here and now, instead of distant and bureaucratic."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le regne des cartes",
            "en": "The reign of cards"
          },
          "body": {
            "fr": "Dans les annees 1950-60, on soumettait une pile de cartes perforees, puis on attendait des heures, parfois un jour, pour un resultat, souvent une erreur.",
            "en": "In the 1950s-60s you submitted a stack of punch cards, then waited hours, sometimes a day, for a result, often an error."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'idee du temps partage",
            "en": "The time-sharing idea"
          },
          "body": {
            "fr": "Un seul ordinateur puissant sert plusieurs personnes a la fois, en decoupant son temps si vite que chacun a l'illusion de l'avoir pour soi.",
            "en": "One powerful computer serves many people at once, slicing its time so fast that each feels they have it to themselves."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une machine qui repond",
            "en": "A machine that replies"
          },
          "body": {
            "fr": "Avec des systemes comme CTSS et Project MAC au MIT, l'utilisateur tape, la machine repond en secondes. L'informatique devient un dialogue.",
            "en": "With systems like CTSS and Project MAC at MIT, the user types and the machine answers in seconds. Computing becomes a dialogue."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le temps partage a rendu concrete la symbiose de Licklider : sans reponse immediate, pas de pensee 'avec' la machine.",
            "en": "Time-sharing made Licklider's symbiosis real: without an immediate reply, there's no thinking 'with' the machine."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le Reseau Informatique Intergalactique",
        "en": "The Intergalactic Computer Network"
      },
      "caption": {
        "fr": "En 1963, il a envoye un memo a un groupe qu'il appelait, mi-serieux, le 'Reseau Intergalactique'. 🌌",
        "en": "In 1963 he sent a memo to a group he half-jokingly called the 'Intergalactic Network'. 🌌"
      },
      "tags": [
        "ARPANET",
        "network",
        "internet",
        "Licklider"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le Reseau Intergalactique",
            "en": "The Intergalactic Network"
          },
          "body": {
            "fr": "Bien avant Internet, Licklider a couche sur le papier l'idee d'ordinateurs relies et capables de dialoguer entre eux.",
            "en": "Long before the internet, Licklider put on paper the idea of computers linked together and able to talk to one another."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des memos a l'ARPA",
            "en": "Memos at ARPA"
          },
          "body": {
            "fr": "En 1963, devenu directeur d'un bureau de l'ARPA, il adresse ses notes aux 'membres et affilies du Reseau Informatique Intergalactique'.",
            "en": "In 1963, now head of an ARPA office, he addressed his notes to the 'members and affiliates of the Intergalactic Computer Network'."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le probleme concret",
            "en": "The concrete problem"
          },
          "body": {
            "fr": "Ses centres de recherche avaient chacun leur machine, incompatibles entre elles. Comment les faire parler une langue commune et partager ressources et donnees ?",
            "en": "His research centers each had their own machine, mutually incompatible. How to make them speak a common language and share resources and data?"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La graine de l'ARPANET",
            "en": "The seed of ARPANET"
          },
          "body": {
            "fr": "Cette vision de machines interconnectees a inspire l'ARPANET a la fin des annees 1960, l'ancetre direct de l'Internet.",
            "en": "This vision of interconnected machines inspired ARPANET in the late 1960s, the direct ancestor of the internet."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le reseau mondial n'a pas commence par un cable, mais par une intuition posee dans un memo au ton d'astronaute.",
            "en": "The global network didn't start with a cable but with a hunch, written down in a memo with an astronaut's swagger."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Financer des gens, pas des projets",
        "en": "Funding People, Not Projects"
      },
      "caption": {
        "fr": "Il n'a pas invente le PC. Il a finance et relie ceux qui l'ont fait. 🌱",
        "en": "He didn't invent the PC. He funded and connected the people who did. 🌱"
      },
      "tags": [
        "ARPA",
        "IPTO",
        "research",
        "innovation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Financer des gens",
            "en": "Funding People"
          },
          "body": {
            "fr": "Le veritable superpouvoir de Licklider : diriger l'argent de l'ARPA vers des personnes visionnaires plutot que vers des livrables etroits.",
            "en": "Licklider's real superpower: steering ARPA money toward visionary people rather than narrow deliverables."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "A la tete de l'IPTO",
            "en": "Leading IPTO"
          },
          "body": {
            "fr": "En 1962, Licklider prend la direction de l'Information Processing Techniques Office, avec des budgets consequents et une grande liberte d'allocation.",
            "en": "In 1962, Licklider took charge of the Information Processing Techniques Office, with sizable budgets and wide freedom to allocate them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Miser sur les chercheurs",
            "en": "Betting on researchers"
          },
          "body": {
            "fr": "Plutot que d'imposer des specifications, il finance des chercheurs de talent dans les meilleurs labos et les laisse poursuivre des idees ambitieuses.",
            "en": "Rather than dictating specs, he funded talented researchers at top labs and let them chase ambitious ideas."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une communaute reliee",
            "en": "A connected community"
          },
          "body": {
            "fr": "Il a tisse un reseau de centres d'excellence, les 'enfants de Lick', dont sont sortis la souris, les interfaces graphiques et le reseau.",
            "en": "He wove a network of centers of excellence, 'Lick's kids', out of which came the mouse, graphical interfaces and the network."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Une revolution technologique peut naitre d'un choix de financement : parier sur des gens et une vision, et laisser du temps a l'audace.",
            "en": "A technological revolution can come from a funding choice: bet on people and a vision, and give boldness time."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'ordinateur comme moyen de communication",
        "en": "The Computer as a Communication Device"
      },
      "caption": {
        "fr": "En 1968, deux hommes ont predit les communautes en ligne, avant meme l'e-mail grand public. 💬",
        "en": "In 1968, two men predicted online communities, before mainstream email even existed. 💬"
      },
      "tags": [
        "community",
        "network",
        "Licklider",
        "Taylor"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'ordinateur qui relie",
            "en": "The Computer that Connects"
          },
          "body": {
            "fr": "Un tournant du livre : voir la machine non plus comme un outil de calcul, mais comme un moyen de communication entre humains.",
            "en": "A turning point in the book: seeing the machine not as a calculating tool but as a device for human communication."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un article visionnaire",
            "en": "A visionary paper"
          },
          "body": {
            "fr": "En 1968, Licklider et Robert Taylor publient 'The Computer as a Communication Device', qui deplace le regard du calcul vers le lien humain.",
            "en": "In 1968, Licklider and Robert Taylor published 'The Computer as a Communication Device', shifting the focus from calculation to human connection."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des communautes d'interet",
            "en": "Communities of interest"
          },
          "body": {
            "fr": "Ils imaginent des communautes en ligne reunies non par la geographie mais par des interets partages, des annees avant le web.",
            "en": "They imagined online communities held together not by geography but by shared interests, years before the web."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La prediction",
            "en": "The prediction"
          },
          "body": {
            "fr": "\"Dans quelques annees, les hommes pourront communiquer plus efficacement a travers une machine qu'en face a face.\"",
            "en": "\"In a few years, men will be able to communicate more effectively through a machine than face to face.\""
          },
          "attribution": {
            "fr": "J.C.R. Licklider & Robert Taylor",
            "en": "J.C.R. Licklider & Robert Taylor"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Nos reseaux sociaux et forums prolongent une intuition de 1968 : l'ordinateur relie surtout des gens, pas seulement des donnees.",
            "en": "Our social networks and forums extend a 1968 hunch: the computer mainly connects people, not just data."
          }
        }
      ]
    }
  ],
  "making-of-prince-of-persia": [
    {
      "concept": {
        "fr": "Le rotoscoping",
        "en": "Rotoscoping"
      },
      "caption": {
        "fr": "Le secret des mouvements du Prince ? Son propre frère, filmé en train de courir dehors. 🎥",
        "en": "The secret behind the Prince's movements? His own brother, filmed running outdoors. 🎥"
      },
      "tags": [
        "rotoscoping",
        "animation",
        "PrinceOfPersia",
        "gamedev"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Animer à partir du réel",
            "en": "Animating from life"
          },
          "body": {
            "fr": "Pour donner au Prince une démarche crédible, Mechner ne l'a pas dessiné de tête : il l'a filmé.",
            "en": "To give the Prince a believable stride, Mechner didn't draw from imagination — he filmed it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Son frère comme modèle",
            "en": "His brother as the model"
          },
          "body": {
            "fr": "Mechner filme son frère cadet David, vêtu de blanc, en train de courir, sauter et grimper dehors.",
            "en": "Mechner filmed his younger brother David, dressed in white, running, jumping and climbing outdoors."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Image par image",
            "en": "Frame by frame"
          },
          "body": {
            "fr": "Il retrace ensuite chaque image de la pellicule pour transposer le mouvement humain en pixels sur Apple II.",
            "en": "He then traced each frame of the footage, translating real human motion into pixels on the Apple II."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les vieux films de cape et d'épée",
            "en": "Old swashbuckler films"
          },
          "body": {
            "fr": "Pour les duels à l'épée, il s'inspire des classiques du genre, comme les films de Robin des Bois avec Errol Flynn.",
            "en": "For the sword duels he drew on classic swashbucklers, like the Errol Flynn Robin Hood films."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Observer avant de créer",
            "en": "Observe before you create"
          },
          "body": {
            "fr": "Le réalisme ne s'invente pas : il s'observe. Va chercher ta matière dans le monde réel.",
            "en": "Realism isn't invented, it's observed. Go find your raw material in the real world."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Un vrai journal intime",
        "en": "A real diary"
      },
      "caption": {
        "fr": "Ce livre n'est pas un récit lissé : ce sont les vrais journaux d'un créateur qui doute. 📓",
        "en": "This book isn't a polished story — it's the real diaries of a creator full of doubt. 📓"
      },
      "tags": [
        "journal",
        "creativity",
        "vulnerability",
        "memoir"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le carnet, pas la légende",
            "en": "The notebook, not the legend"
          },
          "body": {
            "fr": "Le livre reproduit les journaux que Mechner a tenus pendant les années de création du jeu.",
            "en": "The book reproduces the journals Mechner kept during the years he spent making the game."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Écrit sans savoir la fin",
            "en": "Written without knowing the end"
          },
          "body": {
            "fr": "Au moment où il écrit, il ignore encore que Prince of Persia deviendra un classique. Rien n'est garanti.",
            "en": "As he writes, he has no idea Prince of Persia will become a classic. Nothing is guaranteed."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le doute au quotidien",
            "en": "Doubt, day after day"
          },
          "body": {
            "fr": "Les pages regorgent d'angoisses, de procrastination et de peur que le jeu soit ennuyeux ou ne se vende pas.",
            "en": "The pages are full of anxiety, procrastination and the fear that the game is boring or won't sell."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La vie autour du code",
            "en": "Life around the code"
          },
          "body": {
            "fr": "Ruptures, argent, amis, famille : le journal montre que créer se fait au milieu d'une vie entière.",
            "en": "Breakups, money, friends, family: the diary shows that creating happens in the middle of a whole life."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Le doute est normal",
            "en": "Doubt is normal"
          },
          "body": {
            "fr": "Même derrière un chef-d'œuvre, il y a quelqu'un qui n'était sûr de rien. Avance quand même.",
            "en": "Even behind a masterpiece there's someone who was sure of nothing. Move forward anyway."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'ombre de Karateka",
        "en": "The shadow of Karateka"
      },
      "caption": {
        "fr": "Comment fait-on suite à un premier succès ? Mechner a porté ce poids pendant des années. 🥋",
        "en": "How do you follow up a first hit? Mechner carried that weight for years. 🥋"
      },
      "tags": [
        "Karateka",
        "success",
        "pressure",
        "gamedev"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le piège du premier hit",
            "en": "The first-hit trap"
          },
          "body": {
            "fr": "Avant Prince of Persia, Mechner avait déjà créé un succès : Karateka.",
            "en": "Before Prince of Persia, Mechner had already made a hit: Karateka."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un premier jeu à succès",
            "en": "A hit debut game"
          },
          "body": {
            "fr": "Karateka, sorti chez Broderbund, se vend très bien et fait de lui un jeune développeur reconnu.",
            "en": "Karateka, released by Broderbund, sold very well and made him a recognized young developer."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La barre est déjà haute",
            "en": "The bar is already high"
          },
          "body": {
            "fr": "Le nouveau projet doit surpasser le précédent, ce qui alourdit chaque décision et nourrit l'auto-critique.",
            "en": "The new project has to top the last one, which weighs on every decision and feeds his self-criticism."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Ne pas se comparer à soi",
            "en": "Don't compete with yourself"
          },
          "body": {
            "fr": "Un succès passé peut paralyser. Traite le projet suivant comme neuf, pas comme une revanche.",
            "en": "A past success can paralyze you. Treat the next project as new, not as a rematch."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Deux rêves à la fois",
        "en": "Two dreams at once"
      },
      "caption": {
        "fr": "Faire des jeux ou faire des films ? Mechner a passé des années à ne pas choisir. 🎬",
        "en": "Make games or make movies? Mechner spent years refusing to choose. 🎬"
      },
      "tags": [
        "cinema",
        "ambition",
        "focus",
        "creativity"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le tiraillement du créateur",
            "en": "The creator's tug-of-war"
          },
          "body": {
            "fr": "Pendant qu'il fait le jeu, Mechner rêve aussi de cinéma et d'écriture de scénarios.",
            "en": "While making the game, Mechner also dreams of film and screenwriting."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'appel de Hollywood",
            "en": "The pull of Hollywood"
          },
          "body": {
            "fr": "Le journal le montre passionné de films, écrivant des scénarios et rêvant d'une carrière au cinéma.",
            "en": "The diary shows him obsessed with movies, writing scripts and dreaming of a film career."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le jeu comme cinéma",
            "en": "The game as cinema"
          },
          "body": {
            "fr": "Cet amour du cinéma nourrit le jeu : cadrage, mouvement et mise en scène plus cinématographiques.",
            "en": "That love of film feeds the game itself: more cinematic framing, movement and staging."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le coût de l'hésitation",
            "en": "The cost of hesitation"
          },
          "body": {
            "fr": "Vouloir les deux ralentit le jeu et alimente sa culpabilité de ne pas avancer assez vite.",
            "en": "Wanting both slows the game and fuels his guilt over not moving fast enough."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Tes passions se nourrissent",
            "en": "Your passions feed each other"
          },
          "body": {
            "fr": "Un intérêt parallèle n'est pas qu'une distraction : il peut devenir la signature de ton œuvre.",
            "en": "A side passion isn't only a distraction — it can become the signature of your work."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le long milieu",
        "en": "The long middle"
      },
      "caption": {
        "fr": "Le vrai défi n'était pas de commencer, mais de tenir plusieurs années. ⏳",
        "en": "The real challenge wasn't starting — it was lasting for years. ⏳"
      },
      "tags": [
        "persistence",
        "process",
        "burnout",
        "finishing"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Des années, pas des semaines",
            "en": "Years, not weeks"
          },
          "body": {
            "fr": "Prince of Persia n'est pas né d'un sprint : il s'étale sur des années de travail et de doute.",
            "en": "Prince of Persia wasn't a sprint — it stretched across years of work and doubt."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La procrastination réelle",
            "en": "Real procrastination"
          },
          "body": {
            "fr": "Mechner note ses journées perdues, ses distractions et sa difficulté à se remettre au clavier.",
            "en": "Mechner records his wasted days, his distractions and his struggle to get back to the keyboard."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Avancer par petits bouts",
            "en": "Progress in small pieces"
          },
          "body": {
            "fr": "Le jeu progresse mécanique par mécanique : la course, le saut, l'épée, les pièges, un morceau à la fois.",
            "en": "The game advances mechanic by mechanic: running, jumping, the sword, the traps, one piece at a time."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Douter jusqu'au bout",
            "en": "Doubting to the end"
          },
          "body": {
            "fr": "Même tard dans le projet, il craint encore que le jeu soit ennuyeux ou passe inaperçu.",
            "en": "Even late in the project he still fears the game is boring or will go unnoticed."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Finir est une compétence",
            "en": "Finishing is a skill"
          },
          "body": {
            "fr": "L'inspiration ouvre le projet ; c'est la constance dans le long milieu qui le termine.",
            "en": "Inspiration opens a project; it's consistency through the long middle that finishes it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Créer sous contraintes",
        "en": "Creating under constraints"
      },
      "caption": {
        "fr": "Mémoire minuscule, date limite, éditeur qui attend : la contrainte a façonné le jeu. 💾",
        "en": "Tiny memory, a deadline, a waiting publisher: constraint shaped the game. 💾"
      },
      "tags": [
        "AppleII",
        "constraints",
        "deadline",
        "gamedev"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le poids de la machine",
            "en": "The weight of the machine"
          },
          "body": {
            "fr": "Le jeu doit tenir dans les limites étroites de l'Apple II, avec très peu de mémoire disponible.",
            "en": "The game had to fit within the narrow limits of the Apple II, with very little memory to spare."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Chaque octet compte",
            "en": "Every byte counts"
          },
          "body": {
            "fr": "Animations et niveaux se battent pour la même mémoire ; tout ajout oblige à couper ailleurs.",
            "en": "Animations and levels fight for the same memory; every addition forces a cut somewhere else."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'éditeur qui attend",
            "en": "The waiting publisher"
          },
          "body": {
            "fr": "Broderbund attend le jeu, et la pression de livrer se fait de plus en plus concrète.",
            "en": "Broderbund is waiting for the game, and the pressure to ship grows increasingly concrete."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Couper pour finir",
            "en": "Cutting to finish"
          },
          "body": {
            "fr": "Vers la fin, il faut trancher : simplifier, retirer des idées et faire rentrer le jeu dans le cadre.",
            "en": "Near the end he has to make hard cuts: simplify, drop ideas and fit the game into its limits."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "La contrainte crée la forme",
            "en": "Constraint creates form"
          },
          "body": {
            "fr": "Les limites ne sont pas que des obstacles : elles forcent des choix qui définissent l'œuvre.",
            "en": "Limits aren't only obstacles — they force the choices that define the work."
          }
        }
      ]
    }
  ],
  "the-man-from-the-future": [
    {
      "concept": {
        "fr": "La théorie des jeux",
        "en": "Game Theory"
      },
      "caption": {
        "fr": "Et si les maths pouvaient prédire le poker, la guerre et l'économie ? Von Neumann l'a prouvé. 🎲",
        "en": "What if math could predict poker, war, and the economy? Von Neumann proved it could. 🎲"
      },
      "tags": [
        "gametheory",
        "minimax",
        "vonneumann",
        "strategy"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Il a inventé la théorie des jeux",
            "en": "He Invented Game Theory"
          },
          "body": {
            "fr": "En 1928, Von Neumann transforme le bluff et la rivalité en mathématiques rigoureuses.",
            "en": "In 1928, von Neumann turned bluffing and rivalry into rigorous mathematics."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le théorème du minimax",
            "en": "The Minimax Theorem"
          },
          "body": {
            "fr": "Dans tout jeu à somme nulle à deux joueurs, il existe une stratégie optimale : minimiser sa perte maximale. Von Neumann le démontre à 24 ans.",
            "en": "In any two-player zero-sum game there is an optimal strategy: minimize your maximum possible loss. Von Neumann proved it at 24."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le bluff est rationnel",
            "en": "Bluffing Is Rational"
          },
          "body": {
            "fr": "En modélisant le poker, il montre que bluffer est parfois mathématiquement optimal : non pas un vice, mais une stratégie.",
            "en": "Modeling poker, he showed that bluffing is sometimes mathematically optimal, not a vice but a strategy."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le livre fondateur",
            "en": "The Founding Book"
          },
          "body": {
            "fr": "En 1944, avec l'économiste Oskar Morgenstern, il publie Theory of Games and Economic Behavior, acte de naissance d'une discipline entière.",
            "en": "In 1944, with economist Oskar Morgenstern, he published Theory of Games and Economic Behavior, launching an entire discipline."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The Takeaway"
          },
          "body": {
            "fr": "L'économie, la biologie et la stratégie militaire modernes reposent encore sur cette idée : anticiper le meilleur coup de l'adversaire.",
            "en": "Modern economics, biology, and military strategy still rest on this idea: anticipate your opponent's best move."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'architecture von Neumann",
        "en": "The von Neumann Architecture"
      },
      "caption": {
        "fr": "L'appareil sur lequel tu lis ceci suit un plan vieux de 80 ans : le sien. 💻",
        "en": "The device you're reading this on follows an 80-year-old blueprint: his. 💻"
      },
      "tags": [
        "computing",
        "vonneumann",
        "edvac",
        "storedprogram"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le plan de tous les ordinateurs",
            "en": "The Blueprint of Every Computer"
          },
          "body": {
            "fr": "En 1945, un seul rapport définit la structure que presque toutes les machines suivent encore.",
            "en": "In 1945, a single report defined the structure nearly every machine still follows."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le programme enregistré",
            "en": "The Stored Program"
          },
          "body": {
            "fr": "L'idée clé : stocker les instructions dans la même mémoire que les données. La machine devient reprogrammable sans être recâblée.",
            "en": "The key idea: store instructions in the same memory as the data. The machine becomes reprogrammable without being rewired."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le rapport sur l'EDVAC",
            "en": "The EDVAC Report"
          },
          "body": {
            "fr": "Son First Draft of a Report on the EDVAC circule sous son seul nom, éclipsant Eckert et Mauchly, les ingénieurs de la machine.",
            "en": "His First Draft of a Report on the EDVAC circulated under his name alone, eclipsing Eckert and Mauchly, the machine's engineers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Cinq parties, une logique",
            "en": "Five Parts, One Logic"
          },
          "body": {
            "fr": "Unité de contrôle, unité de calcul, mémoire, entrée, sortie : il décrit l'ordinateur en termes abstraits, avec une notation inspirée des neurones du cerveau.",
            "en": "Control unit, arithmetic unit, memory, input, output: he described the computer in abstract terms, using a notation inspired by the brain's neurons."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The Takeaway"
          },
          "body": {
            "fr": "Séparer le matériel de la logique a rendu l'ordinateur universel. Ce choix de conception structure encore ton téléphone.",
            "en": "Separating hardware from logic made the computer universal. That design choice still shapes your phone."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les automates auto-reproducteurs",
        "en": "Self-Reproducing Automata"
      },
      "caption": {
        "fr": "Une machine peut-elle construire une copie d'elle-même ? Il a prouvé que oui, avant qu'on ne perce l'ADN. 🧬",
        "en": "Can a machine build a copy of itself? He proved it could, before DNA's structure was known. 🧬"
      },
      "tags": [
        "automata",
        "selfreplication",
        "cellularautomata",
        "life"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Des machines qui se copient",
            "en": "Machines That Copy Themselves"
          },
          "body": {
            "fr": "Von Neumann a conçu la logique de l'auto-reproduction, sur papier, dans les années 1940-50.",
            "en": "Von Neumann designed the logic of self-reproduction, on paper, in the 1940s-50s."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le constructeur universel",
            "en": "The Universal Constructor"
          },
          "body": {
            "fr": "Il imagine une machine capable de lire un plan, de se rebâtir, puis de copier le plan pour sa descendance.",
            "en": "He imagined a machine that could read a blueprint, rebuild itself, then copy the blueprint for its offspring."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Il anticipe l'ADN",
            "en": "He Anticipated DNA"
          },
          "body": {
            "fr": "Sa distinction entre l'instruction (le plan) et son exécution préfigure le double rôle de l'ADN, dont Watson et Crick élucident la structure en 1953.",
            "en": "His split between instruction (the blueprint) and its execution foreshadowed the dual role of DNA, whose structure Watson and Crick uncovered in 1953."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les automates cellulaires",
            "en": "Cellular Automata"
          },
          "body": {
            "fr": "Avec Stanislaw Ulam, il pose l'auto-reproduction sur une grille de cellules, ancêtre du Jeu de la vie et des sondes de von Neumann.",
            "en": "With Stanislaw Ulam, he framed self-reproduction on a grid of cells, ancestor of the Game of Life and the von Neumann probe."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The Takeaway"
          },
          "body": {
            "fr": "La vie et les machines partagent une même logique : copier de l'information. Il l'a vu avant que la biologie ne le confirme.",
            "en": "Life and machines share one logic: copying information. He saw it before biology confirmed it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les fondements de la mécanique quantique",
        "en": "The Foundations of Quantum Mechanics"
      },
      "caption": {
        "fr": "Deux théories rivales de l'atome, un seul cadre mathématique pour les unir. ⚛️",
        "en": "Two rival theories of the atom, one mathematical framework to unite them. ⚛️"
      },
      "tags": [
        "quantum",
        "physics",
        "hilbertspace",
        "vonneumann"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Il a mis la quantique en ordre",
            "en": "He Put Quantum Physics in Order"
          },
          "body": {
            "fr": "Encore dans la vingtaine, il donne à la physique quantique sa charpente mathématique rigoureuse.",
            "en": "Still in his twenties, he gave quantum physics its rigorous mathematical backbone."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Deux théories, une seule",
            "en": "Two Theories, Made One"
          },
          "body": {
            "fr": "La mécanique des matrices de Heisenberg et la mécanique ondulatoire de Schrödinger semblaient rivales. Il prouve rigoureusement qu'elles sont une seule et même théorie.",
            "en": "Heisenberg's matrix mechanics and Schrödinger's wave mechanics looked like rivals. He rigorously proved they were one and the same theory."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'espace de Hilbert",
            "en": "Hilbert Space"
          },
          "body": {
            "fr": "Il reformule les deux dans un cadre abstrait unique, l'espace de Hilbert, dans son livre de 1932, Les Fondements mathématiques de la mécanique quantique.",
            "en": "He recast both in a single abstract framework, Hilbert space, in his 1932 book Mathematical Foundations of Quantum Mechanics."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le problème de la mesure",
            "en": "The Measurement Problem"
          },
          "body": {
            "fr": "Il pose formellement la question troublante : pourquoi observer un système quantique semble-t-il le forcer à choisir un état ?",
            "en": "He formally posed the unsettling question: why does observing a quantum system seem to force it to pick a state?"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The Takeaway"
          },
          "body": {
            "fr": "Le langage mathématique de la physique quantique moderne est le sien. Les physiciens l'utilisent encore chaque jour.",
            "en": "The mathematical language of modern quantum physics is his. Physicists still use it every day."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'implosion et les ondes de choc",
        "en": "Implosion and Shock Waves"
      },
      "caption": {
        "fr": "Comment comprimer une sphère de plutonium à la perfection ? Les maths d'un mathématicien ont fait pencher la balance. 💥",
        "en": "How do you crush a sphere of plutonium perfectly? A mathematician's math tipped the balance. 💥"
      },
      "tags": [
        "manhattanproject",
        "implosion",
        "physics",
        "history"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Sa contribution à la bombe",
            "en": "His Part in the Bomb"
          },
          "body": {
            "fr": "À Los Alamos, Von Neumann aide à débloquer le problème qui freinait la bombe au plutonium.",
            "en": "At Los Alamos, von Neumann helped break the problem that was stalling the plutonium bomb."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le défi de l'implosion",
            "en": "The Implosion Challenge"
          },
          "body": {
            "fr": "Pour déclencher la réaction, il fallait comprimer le plutonium de manière parfaitement symétrique, en une fraction de seconde.",
            "en": "To trigger the reaction, the plutonium had to be compressed with near-perfect symmetry, in a split second."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'expert des ondes de choc",
            "en": "The Shock-Wave Expert"
          },
          "body": {
            "fr": "Fort de son expérience des explosifs et des ondes de choc, il montre que l'implosion peut atteindre la compression voulue, donnant sa crédibilité à l'approche des lentilles explosives.",
            "en": "Drawing on his work on explosives and shock waves, he showed implosion could reach the needed compression, lending credibility to the explosive-lens approach."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Calculer l'incalculable",
            "en": "Computing the Uncomputable"
          },
          "body": {
            "fr": "Les équations des ondes de choc étaient trop lourdes à résoudre à la main. Ce besoin a nourri sa passion pour les ordinateurs.",
            "en": "The shock-wave equations were too heavy to solve by hand. That need fed his drive to build computers."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The Takeaway"
          },
          "body": {
            "fr": "La même personne a façonné l'arme la plus destructrice et la machine qui définit notre époque. Ce livre refuse de séparer les deux.",
            "en": "The same person shaped the most destructive weapon and the machine that defines our era. The book refuses to separate the two."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La singularité technologique",
        "en": "The Technological Singularity"
      },
      "caption": {
        "fr": "Le mot que tout le monde emploie aujourd'hui à propos de l'IA ? On le trouve déjà dans une conversation avec lui. 🚀",
        "en": "The word everyone uses about AI today? It first surfaced in a conversation with him. 🚀"
      },
      "tags": [
        "singularity",
        "AI",
        "future",
        "technology"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Aux origines de la singularité",
            "en": "Where the Singularity Began"
          },
          "body": {
            "fr": "Bien avant les débats sur l'IA, Von Neumann pressent un point de bascule dans l'histoire humaine.",
            "en": "Long before today's AI debates, von Neumann sensed a tipping point in human history."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le progrès qui accélère",
            "en": "Accelerating Progress"
          },
          "body": {
            "fr": "Il observe que la technologie change nos vies de plus en plus vite, et se demande où cette accélération peut bien mener.",
            "en": "He observed that technology was changing our lives faster and faster, and wondered where the acceleration could lead."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Une conversation, rapportée par Ulam",
            "en": "A Conversation, Recalled by Ulam"
          },
          "body": {
            "fr": "\"Le progrès sans cesse accéléré de la technologie... donne l'apparence d'approcher d'une singularité essentielle dans l'histoire de l'espèce, au-delà de laquelle les affaires humaines, telles que nous les connaissons, ne pourraient continuer.\"",
            "en": "\"The ever accelerating progress of technology ... gives the appearance of approaching some essential singularity in the history of the race beyond which human affairs, as we know them, could not continue.\""
          },
          "attribution": {
            "fr": "Stanislaw Ulam, rapportant une conversation avec John von Neumann (1958)",
            "en": "Stanislaw Ulam, recalling a conversation with John von Neumann (1958)"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un mot qui a fait fortune",
            "en": "A Word That Took Off"
          },
          "body": {
            "fr": "Ce sens du terme singularité, emprunté aux mathématiques, a plus tard inspiré des penseurs comme Vernor Vinge et Ray Kurzweil.",
            "en": "This sense of the word singularity, borrowed from mathematics, later inspired thinkers like Vernor Vinge and Ray Kurzweil."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The Takeaway"
          },
          "body": {
            "fr": "L'homme du futur du titre : Von Neumann voyait déjà les questions que notre siècle affronte à peine.",
            "en": "The man from the future of the title: von Neumann already saw the questions our century is only now facing."
          }
        }
      ]
    }
  ],
  "pieces-of-the-action": [
    {
      "concept": {
        "fr": "Dix minutes, une page",
        "en": "Ten minutes, one page"
      },
      "caption": {
        "fr": "Comment lancer une révolution scientifique en une seule réunion. 📄",
        "en": "How to launch a scientific revolution in a single meeting. 📄"
      },
      "tags": [
        "decision",
        "leadership",
        "bureaucratie",
        "OSRD"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Dix minutes, une page",
            "en": "Ten minutes, one page"
          },
          "body": {
            "fr": "Comment Bush a fait approuver la mobilisation scientifique américaine en une seule courte audience avec Roosevelt.",
            "en": "How Bush got America's science mobilization approved in one short meeting with Roosevelt."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Droit au sommet",
            "en": "Straight to the top"
          },
          "body": {
            "fr": "En 1940, Bush apporte à Roosevelt un plan tenant sur une seule feuille. Le président l'approuve en moins de dix minutes.",
            "en": "In 1940 Bush brought Roosevelt a plan on a single sheet of paper. The president approved it in under ten minutes."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une page, exprès",
            "en": "One page, on purpose"
          },
          "body": {
            "fr": "Il l'a gardé court volontairement : un décideur saisit et valide vite un plan clair, alors qu'un gros rapport invite au report.",
            "en": "He kept it short deliberately: a decision-maker grasps and approves a clear plan fast, while a thick report invites delay."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Contourner la machine",
            "en": "An end run"
          },
          "body": {
            "fr": "Bush conçoit le NDRC pour qu'il rende compte au président, un contournement assumé des agences qui l'auraient étouffé.",
            "en": "Bush set up the NDRC to report to the president, a deliberate end run around agencies that would have smothered it."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Un plan net et un accès direct à celui qui peut dire oui valent mieux qu'une proposition parfaite perdue dans les circuits.",
            "en": "A crisp plan and a direct line to whoever can say yes beats a perfect proposal lost in the channels."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Contracter, pas nationaliser",
        "en": "Contract, don't conscript"
      },
      "caption": {
        "fr": "La vraie innovation de Bush n'était pas une arme, c'était une structure. 🧪",
        "en": "Bush's real innovation wasn't a weapon, it was a structure. 🧪"
      },
      "tags": [
        "organisation",
        "recherche",
        "OSRD",
        "innovation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Laisser les savants sur place",
            "en": "Leave the scientists where they are"
          },
          "body": {
            "fr": "Comment mobiliser la science d'un pays sans l'absorber dans l'État.",
            "en": "How to mobilize a nation's science without swallowing it into the state."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas de grand labo d'État",
            "en": "No giant government lab"
          },
          "body": {
            "fr": "Au lieu de rassembler les chercheurs dans une nouvelle institution fédérale, l'OSRD signe des contrats avec universités et laboratoires industriels.",
            "en": "Instead of gathering scientists into a new federal institution, OSRD signed contracts with universities and industrial labs."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Préserver l'écosystème",
            "en": "Keep the ecosystem alive"
          },
          "body": {
            "fr": "Les chercheurs restent dans leurs murs, avec leurs équipes et leur culture. L'effort de guerre emprunte leur capacité au lieu de l'absorber.",
            "en": "Researchers stayed in their own institutions, with their teams and culture. The war effort borrowed their capacity instead of absorbing it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Vitesse par la confiance",
            "en": "Speed through trust"
          },
          "body": {
            "fr": "Le contrat permet de démarrer immédiatement et préserve les institutions qui survivront à la guerre.",
            "en": "Contracting let work start immediately and preserved the institutions that would outlast the war."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "On peut mobiliser le talent sans le posséder : s'appuyer sur les forces existantes plutôt que tout reconstruire.",
            "en": "You can mobilize talent without owning it: build on existing strengths instead of rebuilding from scratch."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Choisir puis soutenir",
        "en": "Pick people, then back them"
      },
      "caption": {
        "fr": "Diriger, c'est surtout choisir les bonnes personnes et les couvrir. 🤝",
        "en": "Leading is mostly choosing the right people and covering them. 🤝"
      },
      "tags": [
        "management",
        "delegation",
        "leadership",
        "confiance"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Choisir puis soutenir",
            "en": "Pick people, then back them"
          },
          "body": {
            "fr": "Pour Bush, l'essentiel du métier de dirigeant tenait dans le choix des hommes et la confiance qu'on leur accorde.",
            "en": "For Bush, the core of leadership was choosing the right people and the trust you place in them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une autorité claire",
            "en": "Clear authority"
          },
          "body": {
            "fr": "Bush voulait qu'il n'y ait jamais de doute sur qui décide, ni sur le fait que les décisions seront prises sans traîner.",
            "en": "Bush insisted there be no doubt about where decision-making authority sits, or that decisions will be made promptly."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les couvrir vraiment",
            "en": "Back them fully"
          },
          "body": {
            "fr": "Une fois quelqu'un choisi, il le défendait et le soutenait au lieu de revenir sur chacune de ses décisions.",
            "en": "Once he chose someone, he defended and supported them rather than second-guessing every move."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Laisser la place aux jeunes",
            "en": "Make room for younger talent"
          },
          "body": {
            "fr": "Bush disait vouloir s'effacer devant les plus jeunes et partir dès qu'il ne pourrait plus rivaliser vraiment avec eux.",
            "en": "Bush said he would step aside for younger men and get out once he could no longer genuinely compete with them."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Diriger tient surtout à la sélection et au soutien : bien choisir, déléguer un vrai pouvoir, et rester derrière ses gens.",
            "en": "Leadership is mostly selection and support: pick well, delegate real power, and stand behind your people."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Relier le labo et le front",
        "en": "Close the gap between lab and battlefield"
      },
      "caption": {
        "fr": "Une arme géniale ne sert à rien si le soldat ne peut pas l'utiliser. ⚙️",
        "en": "A brilliant weapon is useless if the soldier can't use it. ⚙️"
      },
      "tags": [
        "science",
        "militaire",
        "collaboration",
        "innovation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Relier le labo et le front",
            "en": "Lab meets battlefield"
          },
          "body": {
            "fr": "Un dispositif ne compte que si ceux qui se battent peuvent réellement s'en servir.",
            "en": "A device only matters if the people fighting can actually use it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Deux mondes étrangers",
            "en": "Two worlds apart"
          },
          "body": {
            "fr": "Les savants ignoraient les réalités militaires ; les officiers se méfiaient des civils \"intellos\". Bush a dépensé beaucoup d'énergie à les rapprocher.",
            "en": "Scientists didn't know military realities; officers distrusted civilian 'longhairs.' Bush spent great effort bringing them together."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Vrais problèmes, vrais retours",
            "en": "Real problems, real feedback"
          },
          "body": {
            "fr": "Le radar ou la fusée de proximité ont marché parce que les chercheurs comprenaient les besoins du terrain et que l'armée a appris à leur faire confiance.",
            "en": "Radar and the proximity fuze worked because researchers understood battlefield needs and the military learned to trust them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Traduction mutuelle",
            "en": "Mutual translation"
          },
          "body": {
            "fr": "Le progrès venait du respect de chaque camp pour l'expertise de l'autre.",
            "en": "Progress came from each side respecting the other's expertise."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'innovation n'atteint le terrain que si concepteurs et utilisateurs se comprennent vraiment.",
            "en": "Innovation reaches the field only when makers and users truly understand each other."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Construit pour disparaître",
        "en": "Build it to die"
      },
      "caption": {
        "fr": "Bush a conçu sa propre agence pour être démantelée. ⏳",
        "en": "Bush designed his own agency to be dismantled. ⏳"
      },
      "tags": [
        "organisation",
        "bureaucratie",
        "pouvoir",
        "renouvellement"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Construit pour disparaître",
            "en": "Build it to die"
          },
          "body": {
            "fr": "Pourquoi Bush voulait que son agence de guerre s'éteigne au lieu de perdurer.",
            "en": "Why Bush wanted his wartime agency to end rather than endure."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Temporaire par principe",
            "en": "Temporary by design"
          },
          "body": {
            "fr": "L'OSRD était pensé pour se dissoudre une fois la guerre finie, et non pour s'installer durablement.",
            "en": "OSRD was meant to wind down once the war ended, not to become a permanent fixture."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les organisations se sclérosent",
            "en": "Organizations ossify"
          },
          "body": {
            "fr": "Bush se méfiait des bureaucraties qui survivent à leur mission et se figent dans l'auto-préservation.",
            "en": "Bush distrusted bureaucracies that outlive their purpose and harden into self-preservation."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La vigueur avant la durée",
            "en": "Vigor over permanence"
          },
          "body": {
            "fr": "Un organisme léger, ciblé et voué à disparaître pouvait agir avec une audace qu'une institution enracinée n'aurait jamais.",
            "en": "A lean, focused, expiring body could act with a boldness an entrenched institution never would."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Parfois, la meilleure chose à bâtir est une chose conçue pour finir avant de pourrir.",
            "en": "Sometimes the best thing to build is something designed to end before it rots."
          }
        }
      ]
    }
  ],
  "the-lean-startup": [
    {
      "concept": {
        "fr": "L'apprentissage validé",
        "en": "Validated Learning"
      },
      "caption": {
        "fr": "Ton vrai produit, c'est ce que tu apprends sur tes clients 🔍",
        "en": "Your real product is what you learn about your customers 🔍"
      },
      "tags": [
        "validatedlearning",
        "leanstartup",
        "ericries",
        "startup"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'apprentissage validé",
            "en": "Validated Learning"
          },
          "body": {
            "fr": "Le progrès d'une startup ne se mesure pas au nombre de fonctionnalités livrées, mais aux vérités apprises sur ses clients.",
            "en": "A startup's progress is measured not in features shipped, but in truths learned about its customers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas juste 'avancer'",
            "en": "Not just 'making progress'"
          },
          "body": {
            "fr": "Ries appelle ça 'réussir son échec' : exécuter à la perfection le plan d'un produit dont personne ne veut. On peut atteindre chaque jalon et échouer quand même.",
            "en": "Ries calls it 'achieving failure': flawlessly executing a plan for a product nobody wants. You can hit every milestone and still fail."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Apprendre, prouvé par la donnée",
            "en": "Learning, proven by data"
          },
          "body": {
            "fr": "L'apprentissage validé n'est pas une justification a posteriori. C'est une démonstration empirique, chiffrée, tirée de vrais clients.",
            "en": "Validated learning isn't after-the-fact rationalization. It's empirical, backed by real data from real customers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Éliminer le gaspillage",
            "en": "Eliminate waste"
          },
          "body": {
            "fr": "Tout effort qui ne sert pas à apprendre ce que veulent les clients est du gaspillage, même s'il produit du code impeccable.",
            "en": "Any effort that doesn't help you learn what customers want is waste, even if it produces flawless code."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La vraie course",
            "en": "The real race"
          },
          "body": {
            "fr": "La seule façon de gagner, c'est d'apprendre plus vite que tout le monde.",
            "en": "The only way to win is to learn faster than anyone else."
          },
          "attribution": {
            "fr": "Eric Ries, The Lean Startup",
            "en": "Eric Ries, The Lean Startup"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant d'ajouter une fonctionnalité, demande-toi : 'Qu'est-ce que ça va m'apprendre ?' Si la réponse est floue, c'est du gaspillage.",
            "en": "Before adding a feature, ask: 'What will this teach me?' If the answer is fuzzy, it's waste."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Construire-Mesurer-Apprendre",
        "en": "Build-Measure-Learn"
      },
      "caption": {
        "fr": "La boucle qui fait tourner toute startup lean 🔁",
        "en": "The loop that powers every lean startup 🔁"
      },
      "tags": [
        "buildmeasurelearn",
        "feedbackloop",
        "leanstartup",
        "mvp"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Construire-Mesurer-Apprendre",
            "en": "Build-Measure-Learn"
          },
          "body": {
            "fr": "La boucle fondamentale d'une startup : transformer des idées en produit, mesurer les réactions des clients, puis apprendre s'il faut pivoter ou persévérer.",
            "en": "A startup's core loop: turn ideas into product, measure how customers respond, then learn whether to pivot or persevere."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Construire",
            "en": "Build"
          },
          "body": {
            "fr": "On transforme des idées en un produit, aussi minimal soit-il, pour pouvoir le mettre entre les mains des clients.",
            "en": "Turn ideas into a product, however minimal, so you can put it in front of customers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Mesurer",
            "en": "Measure"
          },
          "body": {
            "fr": "On observe comment les clients réagissent réellement, avec des données, pas des suppositions.",
            "en": "Observe how customers actually respond, using data, not assumptions."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Apprendre",
            "en": "Learn"
          },
          "body": {
            "fr": "On décide : persévérer ou pivoter. Puis on relance la boucle, plus vite qu'au tour précédent.",
            "en": "Decide: persevere or pivot. Then run the loop again, faster than last time."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Penser à l'envers",
            "en": "Plan it backwards"
          },
          "body": {
            "fr": "On planifie dans l'ordre inverse : d'abord ce qu'on veut apprendre, puis ce qu'il faut mesurer, puis le produit minimal à construire.",
            "en": "Plan in reverse: figure out what you need to learn, then what to measure, then the minimum product to build."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'objectif n'est pas de boucler joliment, mais de minimiser le temps total pour faire un tour complet.",
            "en": "The goal isn't a pretty loop, it's minimizing the total time through one full turn."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le produit minimum viable (MVP)",
        "en": "The Minimum Viable Product (MVP)"
      },
      "caption": {
        "fr": "La version la plus petite qui t'apprend le plus 🧪",
        "en": "The smallest version that teaches you the most 🧪"
      },
      "tags": [
        "mvp",
        "minimumviableproduct",
        "leanstartup",
        "productdev"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le produit minimum viable",
            "en": "The Minimum Viable Product"
          },
          "body": {
            "fr": "La version d'un produit qui permet de boucler une fois Construire-Mesurer-Apprendre avec le minimum d'effort.",
            "en": "The version of a product that lets you run one full Build-Measure-Learn loop with the least effort."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Minimum, pas minable",
            "en": "Minimum, not shoddy"
          },
          "body": {
            "fr": "Le MVP n'est pas le plus petit produit imaginable : c'est le moyen le plus rapide de commencer à apprendre.",
            "en": "The MVP isn't the smallest product imaginable, it's the fastest way to start learning."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Souvent moins que tu ne crois",
            "en": "Often less than you think"
          },
          "body": {
            "fr": "Un MVP peut être une simple vidéo, une page de destination, ou un service fait à la main en coulisses (le MVP 'Magicien d'Oz').",
            "en": "An MVP can be a video, a landing page, or a service run by hand behind the scenes (the 'Wizard of Oz' MVP)."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ose l'imperfection",
            "en": "Embrace looking unfinished"
          },
          "body": {
            "fr": "La peur du jugement pousse à trop peaufiner. Les premiers adeptes préfèrent un produit brut qui résout leur problème maintenant.",
            "en": "Fear of judgment pushes over-polishing. Early adopters prefer a rough product that solves their problem now."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La règle simple",
            "en": "The simple rule"
          },
          "body": {
            "fr": "Retire toute fonctionnalité, tout processus ou effort qui ne contribue pas directement à l'apprentissage que tu recherches.",
            "en": "Remove any feature, process, or effort that doesn't contribute directly to the learning you seek."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Demande-toi : quelle est la plus petite chose que je peux lancer cette semaine pour tester mon pari le plus risqué ?",
            "en": "Ask: what's the smallest thing I can ship this week to test my riskiest assumption?"
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Comptabilité de l'innovation et métriques vaniteuses",
        "en": "Innovation Accounting & Vanity Metrics"
      },
      "caption": {
        "fr": "Les chiffres qui flattent ton ego ne prouvent rien 📊",
        "en": "The numbers that flatter your ego prove nothing 📊"
      },
      "tags": [
        "innovationaccounting",
        "vanitymetrics",
        "leanstartup",
        "metrics"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La comptabilité de l'innovation",
            "en": "Innovation Accounting"
          },
          "body": {
            "fr": "Une façon rigoureuse de mesurer les progrès quand les chiffres classiques, comme le revenu et le profit, sont encore proches de zéro.",
            "en": "A rigorous way to measure progress when the usual numbers, like revenue and profit, are still near zero."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Métriques vaniteuses",
            "en": "Vanity metrics"
          },
          "body": {
            "fr": "Total d'inscrits, vues cumulées, téléchargements bruts : des chiffres qui ne font que monter et ne prouvent rien sur ton modèle.",
            "en": "Total signups, cumulative views, gross downloads: numbers that only ever go up and prove nothing about your model."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Métriques actionnables",
            "en": "Actionable metrics"
          },
          "body": {
            "fr": "Une bonne métrique relie une action précise à un résultat, pour que tu saches quoi faire ensuite.",
            "en": "A good metric ties a specific action to a result, so you know what to do next."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les 3 A",
            "en": "The three A's"
          },
          "body": {
            "fr": "Ries veut des rapports actionnables, accessibles et auditables : reliés à une cause, compris de tous, et fiables.",
            "en": "Ries wants reports that are actionable, accessible, and auditable: tied to a cause, understood by all, and trustworthy."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'analyse par cohortes",
            "en": "Cohort analysis"
          },
          "body": {
            "fr": "Plutôt que des totaux cumulés, on suit le comportement de chaque nouveau groupe de clients pour voir si le produit s'améliore vraiment.",
            "en": "Instead of running totals, track how each fresh group of customers behaves to see if the product is truly improving."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Si une métrique monte quoi qu'il arrive, méfie-toi. Cherche celles qui te disent quoi faire demain.",
            "en": "If a metric goes up no matter what, distrust it. Seek the ones that tell you what to do tomorrow."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Pivoter ou persévérer",
        "en": "Pivot or Persevere"
      },
      "caption": {
        "fr": "Changer de cap sans jeter ce que tu as appris ↩️",
        "en": "Change course without throwing away what you learned ↩️"
      },
      "tags": [
        "pivot",
        "persevere",
        "leanstartup",
        "strategy"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Pivoter ou persévérer",
            "en": "Pivot or Persevere"
          },
          "body": {
            "fr": "La décision la plus difficile d'une startup : garder le cap actuel, ou changer de stratégie tout en gardant un pied dans ce qui marche.",
            "en": "A startup's hardest decision: stay the course, or change strategy while keeping one foot in what works."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un pivot, pas un abandon",
            "en": "A pivot, not a restart"
          },
          "body": {
            "fr": "Un pivot est une correction structurée de trajectoire pour tester une nouvelle hypothèse. On garde ce qu'on a appris et validé.",
            "en": "A pivot is a structured course correction to test a new hypothesis. You keep what you've learned and validated."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Beaucoup de formes",
            "en": "Many kinds"
          },
          "body": {
            "fr": "Ries en liste plusieurs : pivot de zoom avant sur une seule fonctionnalité, de segment de clientèle, de plateforme, d'architecture économique…",
            "en": "Ries lists several: zoom-in on a single feature, customer segment, platform, business architecture, and more."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La 'piste' d'une startup",
            "en": "The startup 'runway'"
          },
          "body": {
            "fr": "Mesure ta piste non pas en mois de trésorerie restante, mais en nombre de pivots que tu peux encore te payer.",
            "en": "Measure your runway not in months of cash left, but in how many pivots you can still afford."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La réunion pivoter-ou-persévérer",
            "en": "The pivot-or-persevere meeting"
          },
          "body": {
            "fr": "Programme-la régulièrement. Sans rendez-vous fixe, on repousse indéfiniment une décision qu'on préfère éviter.",
            "en": "Schedule it regularly. Without a fixed date, teams postpone indefinitely a decision they'd rather avoid."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Si tes chiffres stagnent malgré tes efforts d'optimisation, c'est souvent le signal qu'il faut pivoter.",
            "en": "If your numbers stall despite hard optimization, that's often the signal it's time to pivot."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les Cinq Pourquoi",
        "en": "The Five Whys"
      },
      "caption": {
        "fr": "Chaque panne technique cache un vrai problème humain 🕳️",
        "en": "Every technical breakdown hides a human problem underneath 🕳️"
      },
      "tags": [
        "fivewhys",
        "rootcause",
        "leanstartup",
        "continuousimprovement"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les Cinq Pourquoi",
            "en": "The Five Whys"
          },
          "body": {
            "fr": "Une technique empruntée à Toyota : demander 'pourquoi ?' cinq fois pour remonter du symptôme à la cause racine.",
            "en": "A technique borrowed from Toyota: ask 'why?' five times to trace a symptom back to its root cause."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Du technique à l'humain",
            "en": "From technical to human"
          },
          "body": {
            "fr": "En creusant, un problème 'technique' révèle presque toujours une cause humaine : formation manquante, processus absent.",
            "en": "Dig deep enough and a 'technical' problem almost always reveals a human cause: missing training, no process."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Investir proportionnellement",
            "en": "Invest proportionally"
          },
          "body": {
            "fr": "À chaque niveau de 'pourquoi', on fait un petit investissement correctif proportionnel à la gravité du symptôme.",
            "en": "At each level of 'why,' make a small corrective investment proportional to the symptom's severity."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas les Cinq Coupables",
            "en": "Not the Five Blames"
          },
          "body": {
            "fr": "Le piège : transformer l'exercice en chasse aux responsables. Ries insiste sur la tolérance envers les erreurs commises pour la première fois.",
            "en": "The trap: turning it into a hunt for who to blame. Ries insists on tolerance for first-time mistakes."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Face à une panne, ne colmate pas le symptôme. Remonte cinq fois la chaîne pour corriger la vraie cause.",
            "en": "When something breaks, don't patch the symptom. Trace it back five levels and fix the real cause."
          }
        }
      ]
    }
  ],
  "zero-to-one": [
    {
      "concept": {
        "fr": "La question contraire",
        "en": "The Contrarian Question"
      },
      "caption": {
        "fr": "La question qui ouvre le livre et qui sépare les vrais penseurs des suiveurs 🧭",
        "en": "The question that opens the book and separates real thinkers from followers 🧭"
      },
      "tags": [
        "contrarianism",
        "zerotoone",
        "peterthiel",
        "startupmindset"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La question contraire",
            "en": "The Contrarian Question"
          },
          "body": {
            "fr": "Thiel ouvre le livre par une seule question d'entretien qui, selon lui, sépare les vrais penseurs des suiveurs.",
            "en": "Thiel opens the book with a single interview question that, he argues, separates real thinkers from followers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La question",
            "en": "The question"
          },
          "body": {
            "fr": "\"Sur quelle vérité importante très peu de gens sont-ils d'accord avec vous ?\" Une bonne réponse doit vous laisser presque seul.",
            "en": "\"What important truth do very few people agree with you on?\" A good answer should leave you almost alone."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pourquoi c'est dur",
            "en": "Why it's hard"
          },
          "body": {
            "fr": "La plupart des réponses sont vraies mais connues de tous, ou tout simplement fausses. Trouver une vérité impopulaire et juste demande du courage, que Thiel dit plus rare encore que le génie.",
            "en": "Most answers are true but already known, or simply false. Finding an unpopular yet correct truth takes courage, which Thiel says is even rarer than genius."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La version business",
            "en": "The business version"
          },
          "body": {
            "fr": "Traduite en entreprise : \"Quelle entreprise de valeur personne ne construit ?\" Les grandes opportunités se cachent là où la foule ne regarde pas.",
            "en": "Translated to companies: \"What valuable company is nobody building?\" The great opportunities hide where the crowd isn't looking."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Penser par soi-même",
            "en": "Think for yourself"
          },
          "body": {
            "fr": "\"La chose la plus contraire de toutes n'est pas de s'opposer à la foule, mais de penser par soi-même.\"",
            "en": "\"The most contrarian thing of all is not to oppose the crowd but to think for yourself.\""
          },
          "attribution": {
            "fr": "Peter Thiel, Zero to One",
            "en": "Peter Thiel, Zero to One"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de vous lancer, cherchez votre vérité contraire : l'endroit où vous avez raison alors que presque tout le monde a tort.",
            "en": "Before you build, find your contrarian truth: the place where you're right while almost everyone else is wrong."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Zéro à un",
        "en": "Zero to One"
      },
      "caption": {
        "fr": "Copier ce qui marche mène de 1 à n. Créer du neuf mène de 0 à 1 🚀",
        "en": "Copying what works takes you 1 to n. Creating something new takes you 0 to 1 🚀"
      },
      "tags": [
        "innovation",
        "verticalprogress",
        "technology",
        "startups"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "De zéro à un",
            "en": "Zero to One"
          },
          "body": {
            "fr": "Le cœur du livre : il existe deux façons de progresser, et une seule crée quelque chose de vraiment nouveau.",
            "en": "The book's core idea: there are two kinds of progress, and only one creates something genuinely new."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Progrès horizontal (1 → n)",
            "en": "Horizontal progress (1 → n)"
          },
          "body": {
            "fr": "Copier ce qui fonctionne déjà et l'étendre. C'est la mondialisation : prendre une chose qui marche et la reproduire partout.",
            "en": "Copying things that already work and scaling them. This is globalization: taking something that works and making more of it everywhere."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Progrès vertical (0 → 1)",
            "en": "Vertical progress (0 → 1)"
          },
          "body": {
            "fr": "Faire quelque chose que personne n'a jamais fait. C'est la technologie : passer du néant à l'existence, du 0 au 1.",
            "en": "Doing something no one has ever done. This is technology: going from nothing to something, from 0 to 1."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le rôle des startups",
            "en": "The role of startups"
          },
          "body": {
            "fr": "Les grandes structures peinent à inventer, et les individus isolés y arrivent rarement. La startup est le lieu idéal pour penser du neuf.",
            "en": "Big organizations struggle to invent, and lone individuals rarely manage it. A startup is the ideal place to think up something new."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "N'imitez pas",
            "en": "Don't imitate"
          },
          "body": {
            "fr": "\"Le prochain Bill Gates ne construira pas un système d'exploitation. Les prochains Larry Page ou Sergey Brin ne feront pas un moteur de recherche.\"",
            "en": "\"The next Bill Gates will not build an operating system. The next Larry Page or Sergey Brin won't make a search engine.\""
          },
          "attribution": {
            "fr": "Peter Thiel, Zero to One",
            "en": "Peter Thiel, Zero to One"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne vous demandez pas comment copier les gagnants, mais quelle chose neuve vous seul pouvez apporter au monde.",
            "en": "Don't ask how to copy the winners; ask what new thing only you can bring into the world."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La compétition est pour les perdants",
        "en": "Competition Is for Losers"
      },
      "caption": {
        "fr": "Et si la concurrence n'était pas un signe de valeur, mais de valeur détruite ? 💸",
        "en": "What if competition wasn't a sign of value, but of value destroyed? 💸"
      },
      "tags": [
        "monopoly",
        "competition",
        "profit",
        "strategy"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La compétition est pour les perdants",
            "en": "Competition is for losers"
          },
          "body": {
            "fr": "L'idée la plus provocante du livre : la concurrence parfaite détruit les profits, le monopole les crée.",
            "en": "The book's most provocative claim: perfect competition destroys profits, while monopoly creates them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Deux mondes opposés",
            "en": "Two opposite worlds"
          },
          "body": {
            "fr": "En concurrence parfaite, les marges tendent vers zéro. Un monopole créatif garde ses profits et peut penser à long terme.",
            "en": "Under perfect competition margins trend toward zero. A creative monopoly keeps its profits and can think long term."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Tout le monde ment",
            "en": "Everyone lies"
          },
          "body": {
            "fr": "Les monopoles se cachent en prétendant affronter une rude concurrence. Les entreprises non différenciées, elles, prétendent être uniques. La vérité est inversée.",
            "en": "Monopolies hide by pretending they face fierce competition. Undifferentiated companies pretend to be unique. The truth is the reverse."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le piège de la rivalité",
            "en": "The trap of rivalry"
          },
          "body": {
            "fr": "Se battre pour un marché saturé épuise ressources et attention. La rivalité nous fait surestimer des opportunités déjà mortes.",
            "en": "Fighting over a crowded market drains resources and focus. Rivalry makes us overvalue opportunities that are already dead."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Échapper à la concurrence",
            "en": "Escape competition"
          },
          "body": {
            "fr": "\"Toutes les entreprises qui réussissent sont différentes : chacune obtient un monopole en résolvant un problème unique. Toutes celles qui échouent se ressemblent : elles n'ont pas su échapper à la concurrence.\"",
            "en": "\"All happy companies are different: each one earns a monopoly by solving a unique problem. All failed companies are the same: they failed to escape competition.\""
          },
          "attribution": {
            "fr": "Peter Thiel, Zero to One",
            "en": "Peter Thiel, Zero to One"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Visez à dominer un tout petit marché plutôt qu'à survivre dans un grand. Fuyez la concurrence, ne la recherchez pas.",
            "en": "Aim to dominate a tiny market rather than survive in a huge one. Escape competition rather than seek it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les 4 traits d'un monopole",
        "en": "The 4 Traits of a Monopoly"
      },
      "caption": {
        "fr": "Ce qui rend une entreprise durablement imbattable, en 4 caractéristiques 🏰",
        "en": "What makes a company durably unbeatable, in 4 characteristics 🏰"
      },
      "tags": [
        "moat",
        "monopoly",
        "networkeffects",
        "businessmodel"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Anatomie d'un monopole",
            "en": "Anatomy of a monopoly"
          },
          "body": {
            "fr": "Thiel identifie quatre caractéristiques que partagent les monopoles durables. Rarement toutes présentes, mais il en faut au moins une forte.",
            "en": "Thiel identifies four characteristics that durable monopolies share. You rarely have all four, but you need at least one that's strong."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Technologie propriétaire",
            "en": "Proprietary technology"
          },
          "body": {
            "fr": "Votre produit doit être environ 10 fois meilleur que la meilleure alternative. En dessous, c'est une amélioration marginale, pas un monopole.",
            "en": "Your product should be roughly 10x better than the closest substitute. Below that, it's a marginal improvement, not a monopoly."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Effets de réseau",
            "en": "Network effects"
          },
          "body": {
            "fr": "Le produit gagne en valeur à mesure que plus de gens l'utilisent. Le défi : il doit déjà être précieux pour ses tout premiers utilisateurs.",
            "en": "The product becomes more valuable as more people use it. The catch: it must already be valuable to its very first users."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Économies d'échelle",
            "en": "Economies of scale"
          },
          "body": {
            "fr": "Une bonne entreprise devient meilleure en grandissant : les coûts fixes se répartissent sur plus de ventes. Le logiciel excelle sur ce point.",
            "en": "A great business gets stronger as it grows: fixed costs spread over more sales. Software is especially good at this."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La marque",
            "en": "Branding"
          },
          "body": {
            "fr": "Une marque forte crée un monopole, mais elle doit reposer sur une substance réelle. Une marque sans produit solide n'est qu'un vernis.",
            "en": "A strong brand creates a monopoly, but it must rest on real substance. Branding without a solid product is just a veneer."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Commencez petit et dominez, puis étendez-vous. Bâtissez au moins un de ces avantages avant de rêver d'un grand marché.",
            "en": "Start small and dominate, then scale up. Build at least one of these advantages before dreaming of a huge market."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La loi de puissance",
        "en": "The Power Law"
      },
      "caption": {
        "fr": "Pourquoi un seul bon choix peut peser plus que tous les autres réunis ⚡",
        "en": "Why a single great choice can outweigh all the others combined ⚡"
      },
      "tags": [
        "powerlaw",
        "venturecapital",
        "focus",
        "decisions"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La loi de puissance",
            "en": "The power law"
          },
          "body": {
            "fr": "Les résultats ne se répartissent pas également : une minorité de choix produit l'essentiel de la valeur.",
            "en": "Outcomes aren't evenly distributed: a small minority of choices produces most of the value."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le secret du capital-risque",
            "en": "The secret of venture capital"
          },
          "body": {
            "fr": "Le meilleur investissement d'un fonds rapporte souvent autant, ou plus, que tout le reste du portefeuille réuni.",
            "en": "A fund's single best investment often returns as much as, or more than, the entire rest of the portfolio combined."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas une loterie",
            "en": "Not a lottery"
          },
          "body": {
            "fr": "Puisque quelques paris dominent tout, on ne peut pas diversifier au hasard. Il faut se concentrer sur ce qui peut vraiment devenir énorme.",
            "en": "Since a few bets dominate everything, you can't diversify blindly. You must concentrate on what could truly become enormous."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pour votre vie",
            "en": "For your own life"
          },
          "body": {
            "fr": "La même règle s'applique aux carrières : mieux vaut exceller dans une chose au fort potentiel que garder toutes les options ouvertes.",
            "en": "The same rule applies to careers: better to excel at one thing with real upside than to keep all your options open."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne traitez pas toutes vos options comme équivalentes. Identifiez le petit nombre qui compte vraiment et engagez-vous à fond.",
            "en": "Don't treat all your options as equal. Identify the few that truly matter and commit to them fully."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les secrets",
        "en": "Secrets"
      },
      "caption": {
        "fr": "Chaque grande entreprise repose sur un secret que le monde n'a pas encore vu 🔍",
        "en": "Every great company rests on a secret the world hasn't seen yet 🔍"
      },
      "tags": [
        "secrets",
        "opportunity",
        "contrarian",
        "founders"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Cherchez les secrets",
            "en": "Look for secrets"
          },
          "body": {
            "fr": "Pour Thiel, chaque grande entreprise naît d'un secret : une vérité importante encore invisible pour les autres.",
            "en": "For Thiel, every great company is born from a secret: an important truth that others don't yet see."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Trois types de vérités",
            "en": "Three kinds of truths"
          },
          "body": {
            "fr": "Il y a les évidences que tout le monde connaît, les mystères que personne ne peut résoudre, et entre les deux : les secrets, difficiles mais accessibles.",
            "en": "There are conventions everyone knows, mysteries no one can solve, and in between: secrets, hard but knowable."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pourquoi on n'y croit plus",
            "en": "Why we stopped believing"
          },
          "body": {
            "fr": "Notre époque suppose souvent qu'il n'y a plus rien de neuf à découvrir. Cette croyance décourage précisément ceux qui chercheraient des secrets.",
            "en": "Our era often assumes there's nothing new left to find. That belief discourages the very people who would go looking for secrets."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Où chercher",
            "en": "Where to look"
          },
          "body": {
            "fr": "Explorez les domaines que les autres jugent sans intérêt, interdits ou déjà résolus. C'est là que se cachent les secrets encore ouverts.",
            "en": "Explore fields others find unimportant, off-limits, or already solved. That's where the open secrets are still hiding."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Le fondement d'une entreprise",
            "en": "The basis of a business"
          },
          "body": {
            "fr": "\"Toute grande entreprise se construit autour d'un secret caché de l'extérieur.\"",
            "en": "\"Every great business is built around a secret that's hidden from the outside.\""
          },
          "attribution": {
            "fr": "Peter Thiel, Zero to One",
            "en": "Peter Thiel, Zero to One"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Demandez-vous : quel secret précieux le monde ignore-t-il encore ? Une bonne réponse est la graine d'une grande entreprise.",
            "en": "Ask yourself: what valuable secret does the world still not know? A good answer is the seed of a great company."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'avantage du dernier arrivé",
        "en": "The Last Mover Advantage"
      },
      "caption": {
        "fr": "Être le premier ne suffit pas. Ce qui compte, c'est de durer 🕰️",
        "en": "Being first isn't enough. What matters is lasting 🕰️"
      },
      "tags": [
        "durability",
        "lastmover",
        "longterm",
        "cashflow"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'avantage du dernier arrivé",
            "en": "The last mover advantage"
          },
          "body": {
            "fr": "Contre l'intuition du \"premier arrivé, premier servi\", Thiel soutient qu'il vaut mieux être le dernier grand acteur d'un marché.",
            "en": "Against the intuition of \"first-mover advantage,\" Thiel argues it's better to be the last great mover in a market."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La valeur est dans le futur",
            "en": "Value lives in the future"
          },
          "body": {
            "fr": "La valeur d'une entreprise réside surtout dans les flux de trésorerie lointains. Une croissance rapide mais éphémère vaut peu.",
            "en": "A company's value lies mostly in cash flows far in the future. Fast but short-lived growth is worth little."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Durer, pas juste démarrer",
            "en": "Endure, don't just start"
          },
          "body": {
            "fr": "Être premier n'a de sens que si l'on peut ensuite tenir des années. La vraie question : serez-vous encore là dans une décennie ?",
            "en": "Being first only matters if you can then hold the position for years. The real question: will you still be around in a decade?"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Faire le dernier grand pas",
            "en": "Make the last great development"
          },
          "body": {
            "fr": "Mieux vaut réaliser la dernière grande avancée d'un secteur et récolter des années de profits de monopole que d'ouvrir la voie aux autres.",
            "en": "Better to make the last great development in an industry and enjoy years of monopoly profits than to blaze a trail for others."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne cherchez pas seulement à démarrer vite, mais à construire une position que personne ne pourra vous reprendre.",
            "en": "Don't just aim to start fast; aim to build a position no one can take from you."
          }
        }
      ]
    }
  ],
  "hard-thing-about-hard-things": [
    {
      "concept": {
        "fr": "La Lutte (The Struggle)",
        "en": "The Struggle"
      },
      "caption": {
        "fr": "Le moment où ton rêve vire au cauchemar a un nom, et aucun fondateur n'y échappe. 🌒",
        "en": "The moment your dream turns into a nightmare has a name — and no founder escapes it. 🌒"
      },
      "tags": [
        "startup",
        "resilience",
        "founders",
        "leadership"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La Lutte",
            "en": "The Struggle"
          },
          "body": {
            "fr": "Horowitz a donné un nom au pire moment d'un fondateur : quand tout s'effondre et que tu te demandes pourquoi tu t'es lancé.",
            "en": "Horowitz named a founder's darkest moment: when everything falls apart and you ask yourself why you ever started."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ce que c'est",
            "en": "What it is"
          },
          "body": {
            "fr": "C'est quand ton rêve devient un cauchemar : entouré de gens, tu te sens pourtant totalement seul.",
            "en": "It's when your dream becomes a nightmare: surrounded by people, yet you feel utterly alone."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ce n'est pas un échec",
            "en": "It's not failure"
          },
          "body": {
            "fr": "Presque tous les grands fondateurs traversent La Lutte. La ressentir ne veut pas dire que tu échoues.",
            "en": "Almost every great founder goes through The Struggle. Feeling it doesn't mean you're failing."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Survivre",
            "en": "Surviving it"
          },
          "body": {
            "fr": "Les meilleurs trouvent une voie là où il n'y en a aucune. La règle : ne pas abandonner et tenir assez longtemps pour que la chance tourne.",
            "en": "The best find a way when there is none. The rule: don't quit, and stay in the game long enough for luck to turn."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "",
            "en": ""
          },
          "body": {
            "fr": "\"La Lutte, c'est de là que vient la grandeur.\"",
            "en": "\"The Struggle is where greatness comes from.\""
          },
          "attribution": {
            "fr": "Ben Horowitz",
            "en": "Ben Horowitz"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La Lutte n'est pas le signe que tu as échoué : c'est le prix à payer pour construire quelque chose qui compte.",
            "en": "The Struggle isn't a sign you've failed: it's the price of building something that matters."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "PDG en temps de guerre vs de paix",
        "en": "Wartime vs Peacetime CEO"
      },
      "caption": {
        "fr": "Le même dirigeant, deux modes radicalement opposés. Sais-tu dans lequel tu es ? ⚔️",
        "en": "Same leader, two opposite modes. Do you know which one you're in? ⚔️"
      },
      "tags": [
        "management",
        "ceo",
        "leadership",
        "strategy"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Temps de guerre vs temps de paix",
            "en": "Wartime vs Peacetime CEO"
          },
          "body": {
            "fr": "Horowitz distingue deux styles de direction opposés — et diriger avec le mauvais peut tuer ton entreprise.",
            "en": "Horowitz splits leadership into two opposite modes — and running the wrong one can kill your company."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Temps de paix",
            "en": "Peacetime"
          },
          "body": {
            "fr": "L'entreprise a une avance solide sur un grand marché. On élargit l'opportunité, on suit les process, on cultive la créativité.",
            "en": "The company has a big lead in a large market. You expand the opportunity, follow protocol, and nurture creativity."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Temps de guerre",
            "en": "Wartime"
          },
          "body": {
            "fr": "Une menace existentielle vise le cœur de l'entreprise. Le PDG brise les règles pour survivre et exige une exécution parfaite.",
            "en": "An existential threat aims at the company's core. The CEO breaks the rules to survive and demands flawless execution."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Deux playbooks",
            "en": "Two playbooks"
          },
          "body": {
            "fr": "Les techniques qui marchent en paix peuvent te détruire en guerre. Le même dirigeant doit savoir changer de mode.",
            "en": "The techniques that work in peace can destroy you in war. The same leader must know how to switch modes."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Identifie dans quel mode tu es — et ne dirige jamais une entreprise en guerre avec des tactiques de paix.",
            "en": "Know which mode you're in — and never run a wartime company with peacetime tactics."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Balles de plomb, pas d'argent",
        "en": "Lead bullets, not silver bullets"
      },
      "caption": {
        "fr": "Quand un concurrent te bat sur le produit, il n'y a aucune astuce maligne pour te sauver. 🔩",
        "en": "When a competitor beats you on product, there's no clever trick to save you. 🔩"
      },
      "tags": [
        "product",
        "competition",
        "execution",
        "startup"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Pas de balle d'argent",
            "en": "No silver bullets"
          },
          "body": {
            "fr": "Face à un concurrent qui gagne sur le produit, l'équipe cherche toujours une échappatoire maligne. Horowitz refuse.",
            "en": "When a rival wins on product, the team always looks for a clever escape. Horowitz refuses."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La tentation",
            "en": "The temptation"
          },
          "body": {
            "fr": "Repositionner, vendre autrement, contourner : chercher une solution miracle qui évite le vrai combat.",
            "en": "Reposition, sell differently, go around it: chasing a miracle fix that avoids the real fight."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La réalité",
            "en": "The reality"
          },
          "body": {
            "fr": "Chez Opsware, la seule vraie réponse était de construire un meilleur produit que le concurrent, point.",
            "en": "At Opsware, the only real answer was to build a better product than the competitor, full stop."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le vrai travail",
            "en": "The real work"
          },
          "body": {
            "fr": "Il n'existe aucun raccourci intelligent : il faut surpasser le concurrent sur l'ingénierie et gagner sur le fond.",
            "en": "There's no clever shortcut: you have to out-engineer them and win on substance."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "",
            "en": ""
          },
          "body": {
            "fr": "\"Il n'y a pas de balles d'argent pour ça, seulement des balles de plomb.\"",
            "en": "\"There are no silver bullets for this, only lead bullets.\""
          },
          "attribution": {
            "fr": "Ben Horowitz",
            "en": "Ben Horowitz"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Quand tu es distancé, arrête de chercher des astuces et tire la balle de plomb : améliore le produit.",
            "en": "When you're behind, stop hunting for tricks and fire the lead bullet: make the product better."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les gens, les produits, les profits",
        "en": "People, products, profits"
      },
      "caption": {
        "fr": "L'ordre n'est pas décoratif : c'est ce qui tient une entreprise en temps dur. 🧱",
        "en": "The order isn't decoration: it's what holds a company together when things get hard. 🧱"
      },
      "tags": [
        "culture",
        "people",
        "management",
        "priorities"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Dans cet ordre",
            "en": "In that order"
          },
          "body": {
            "fr": "Horowitz résume ses priorités en trois mots — et l'ordre fait toute la différence.",
            "en": "Horowitz sums up his priorities in three words — and the order changes everything."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les gens d'abord",
            "en": "People first"
          },
          "body": {
            "fr": "Si les gens ne font pas confiance à l'entreprise, rien d'autre ne fonctionne. On s'occupe d'eux en premier.",
            "en": "If people don't trust the company, nothing else works. You take care of them first."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un endroit où travailler",
            "en": "A place worth working"
          },
          "body": {
            "fr": "En temps dur, la différence entre une bonne et une mauvaise entreprise, c'est si elle reste un lieu où l'on veut travailler.",
            "en": "In hard times, the difference between a good and a bad company is whether it stays a place worth working at."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'ordre compte",
            "en": "The order matters"
          },
          "body": {
            "fr": "Produits et profits suivent quand on prend soin des gens, jamais l'inverse.",
            "en": "Products and profits follow when you care for people — never the other way around."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "",
            "en": ""
          },
          "body": {
            "fr": "\"Prenez soin des gens, des produits et des profits — dans cet ordre.\"",
            "en": "\"Take care of the people, the products, and the profits — in that order.\""
          },
          "attribution": {
            "fr": "Ben Horowitz",
            "en": "Ben Horowitz"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La culture et les gens ne sont pas du \"soft\" : c'est la fondation sur laquelle tout le reste tient.",
            "en": "Culture and people aren't soft stuff: they're the foundation everything else stands on."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Gérer sa propre psychologie",
        "en": "Manage your own psychology"
      },
      "caption": {
        "fr": "Le boulot le plus solitaire du monde : voici comment ne pas s'y noyer. 🏎️",
        "en": "The loneliest job in the world — here's how not to drown in it. 🏎️"
      },
      "tags": [
        "mindset",
        "ceo",
        "psychology",
        "focus"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Regarde la route, pas le mur",
            "en": "Focus on the road, not the wall"
          },
          "body": {
            "fr": "Horowitz appelle la maîtrise de sa propre psychologie la compétence la plus difficile d'un PDG.",
            "en": "Horowitz calls managing your own psychology the hardest skill a CEO has to master."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le poids",
            "en": "The weight"
          },
          "body": {
            "fr": "Le PDG porte tout le poids seul ; les erreurs reviennent en boucle à 3h du matin.",
            "en": "The CEO carries the full weight alone; the mistakes replay on a loop at 3am."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le mur",
            "en": "The wall"
          },
          "body": {
            "fr": "On apprend aux pilotes de course à fixer la route, pas le mur : ta voiture va là où tu regardes. Concentre-toi sur là où tu vas.",
            "en": "Race drivers are taught to look at the road, not the wall: the car goes where your eyes go. Focus on where you're headed."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Personne ne s'en soucie",
            "en": "Nobody cares"
          },
          "body": {
            "fr": "Un conseil brutal reçu par Horowitz : personne ne se soucie de tes excuses. Contente-toi de diriger ton entreprise.",
            "en": "Blunt advice Horowitz received: nobody cares about your excuses. Just run your company."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "",
            "en": ""
          },
          "body": {
            "fr": "\"Personne ne s'en soucie. Contente-toi de diriger ton entreprise.\"",
            "en": "\"Nobody cares. Just run your company.\""
          },
          "attribution": {
            "fr": "Ben Horowitz",
            "en": "Ben Horowitz"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Tu ne contrôles pas la peur, mais tu choisis où tu diriges ton attention.",
            "en": "You can't control the fear, but you can choose where you point your attention."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Recruter sur la force, pas l'absence de faiblesse",
        "en": "Hire for strength, not lack of weakness"
      },
      "caption": {
        "fr": "Recruter le candidat avec le moins de défauts te donne quelqu'un d'excellent en rien. 🎯",
        "en": "Hiring the candidate with the fewest flaws gets you someone great at nothing. 🎯"
      },
      "tags": [
        "hiring",
        "recruiting",
        "talent",
        "management"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Force > absence de faiblesse",
            "en": "Strength over no-weakness"
          },
          "body": {
            "fr": "Horowitz met en garde contre le piège du recrutement par comité : chercher le candidat sans défaut.",
            "en": "Horowitz warns against the committee-hiring trap: seeking the flawless candidate."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le piège",
            "en": "The trap"
          },
          "body": {
            "fr": "Un comité élimine tous ceux qui ont un défaut visible — et finit par choisir quelqu'un d'excellent en rien.",
            "en": "A committee eliminates everyone with a visible flaw — and ends up picking someone great at nothing."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ce qui compte",
            "en": "What matters"
          },
          "body": {
            "fr": "Les grands recrutements ont un pic : une force dominante qui colle au poste. Les faiblesses se gèrent.",
            "en": "Great hires have a spike: one dominant strength that fits the role. Weaknesses can be managed."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Sache ce que tu veux",
            "en": "Know what you need"
          },
          "body": {
            "fr": "Définis la seule chose que ce poste doit absolument produire, puis recrute pour cette force-là.",
            "en": "Define the one thing the role must deliver, then hire for exactly that strength."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne recrute pas l'option la moins mauvaise : recrute pour la force dont tu as réellement besoin.",
            "en": "Don't hire the least-bad option: hire for the strength you actually need."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La technique Freaky Friday",
        "en": "The Freaky Friday technique"
      },
      "caption": {
        "fr": "Deux managers s'accusent mutuellement ? Échange leurs postes. 🔄",
        "en": "Two managers blaming each other? Swap their jobs. 🔄"
      },
      "tags": [
        "management",
        "conflict",
        "teams",
        "leadership"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'astuce Freaky Friday",
            "en": "The Freaky Friday trick"
          },
          "body": {
            "fr": "Inspiré du film, Horowitz raconte comment il a réglé un conflit interne impossible.",
            "en": "Inspired by the movie, Horowitz recounts how he solved an impossible internal conflict."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'impasse",
            "en": "The deadlock"
          },
          "body": {
            "fr": "Deux managers, à une interface clé de l'entreprise, s'accusaient mutuellement — et chacun avait des arguments convaincants.",
            "en": "Two managers at a critical company interface each blamed the other — and both made convincing cases."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'échange",
            "en": "The swap"
          },
          "body": {
            "fr": "Comme dans le film où mère et fille échangent leur corps, Horowitz a échangé les postes des deux managers.",
            "en": "Like the film where mother and daughter swap bodies, Horowitz swapped the two managers' jobs."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le résultat",
            "en": "The result"
          },
          "body": {
            "fr": "En quelques jours, chacun a compris le problème de l'autre et réparé l'interface cassée entre leurs équipes.",
            "en": "Within days, each understood the other's problem and fixed the broken interface between their teams."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Parfois, le moyen le plus rapide de résoudre un conflit est de faire vivre à chacun la réalité de l'autre.",
            "en": "Sometimes the fastest way to resolve a conflict is to make each side live the other's reality."
          }
        }
      ]
    }
  ],
  "the-mom-test": [
    {
      "concept": {
        "fr": "Le Mom Test",
        "en": "The Mom Test"
      },
      "caption": {
        "fr": "Meme ta mere ne pourra plus te mentir sur ton idee. 🎯",
        "en": "Even your mom can't lie to you about your idea anymore. 🎯"
      },
      "tags": [
        "momtest",
        "customerdiscovery",
        "startup",
        "validation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le Mom Test",
            "en": "The Mom Test"
          },
          "body": {
            "fr": "Le probleme n'est pas que les gens mentent : c'est que tu poses de mauvaises questions.",
            "en": "The problem isn't that people lie: it's that you ask the wrong questions."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pourquoi ta mere ment",
            "en": "Why your mom lies"
          },
          "body": {
            "fr": "Demande a ta mere si ton idee est bonne : elle dira oui, parce qu'elle t'aime. La plupart des gens font pareil par politesse.",
            "en": "Ask your mom if your idea is good and she'll say yes, because she loves you. Most people do the same out of politeness."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des questions infalsifiables",
            "en": "Questions no one can fake"
          },
          "body": {
            "fr": "Le Mom Test est un ensemble de regles pour formuler des questions auxquelles meme ta mere ne peut pas mentir.",
            "en": "The Mom Test is a set of rules for crafting questions that even your mom can't lie to you about."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "A toi de corriger",
            "en": "Your job to fix it"
          },
          "body": {
            "fr": "Les conversations client sont mauvaises par defaut. La qualite de l'echange est ta responsabilite, pas celle du client.",
            "en": "Customer conversations are bad by default. Their quality is your responsibility, not the customer's."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La definition",
            "en": "The definition"
          },
          "body": {
            "fr": "\"Le Mom Test est un ensemble de regles simples pour poser de bonnes questions, auxquelles meme ta mere ne peut pas te mentir.\"",
            "en": "\"The Mom Test is a set of simple rules for crafting good questions that even your mom can't lie to you about.\""
          },
          "attribution": {
            "fr": "Rob Fitzpatrick, The Mom Test",
            "en": "Rob Fitzpatrick, The Mom Test"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne cherche pas des gens gentils, cherche la verite. Change tes questions, pas tes interlocuteurs.",
            "en": "Don't look for nice people, look for the truth. Change your questions, not the people you talk to."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les 3 regles des bonnes questions",
        "en": "The 3 rules for good questions"
      },
      "caption": {
        "fr": "Parle de leur vie, pas de ton idee. 👂",
        "en": "Talk about their life, not about your idea. 👂"
      },
      "tags": [
        "interview",
        "customerdev",
        "listening",
        "startup"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "3 regles simples",
            "en": "3 simple rules"
          },
          "body": {
            "fr": "Comment mener un entretien sans biaiser les reponses ni vendre ton reve.",
            "en": "How to run an interview without biasing answers or selling your dream."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "1. Leur vie, pas ton idee",
            "en": "1. Their life, not your idea"
          },
          "body": {
            "fr": "Parle de ce qu'ils vivent et de leurs problemes concrets. Des que tu deballes ton idee, ils te mentent pour te plaire.",
            "en": "Talk about their life and real problems. The moment you pitch your idea, they lie to make you feel good."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "2. Le passe, pas le futur",
            "en": "2. The past, not the future"
          },
          "body": {
            "fr": "Demande ce qu'ils ont deja fait, pas ce qu'ils feraient. Tout ce qui concerne le futur est un mensonge trop optimiste.",
            "en": "Ask what they've already done, not what they would do. Anything about the future is an over-optimistic lie."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "3. Parle moins, ecoute plus",
            "en": "3. Talk less, listen more"
          },
          "body": {
            "fr": "Si tu parles plus que ton interlocuteur, tu ne collectes pas de donnees : tu fais un pitch.",
            "en": "If you're talking more than the other person, you're not gathering data: you're pitching."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Un bon entretien ressemble a une discussion sur eux, ou ton idee n'apparait presque jamais.",
            "en": "A good interview feels like a conversation about them, where your idea barely comes up."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les 3 types de mauvaises donnees",
        "en": "The 3 types of bad data"
      },
      "caption": {
        "fr": "Les compliments te tuent a petit feu. ☠️",
        "en": "Compliments are quietly killing your startup. ☠️"
      },
      "tags": [
        "baddata",
        "compliments",
        "feedback",
        "startup"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "3 pieges a eviter",
            "en": "3 traps to avoid"
          },
          "body": {
            "fr": "Meme une bonne conversation peut te noyer sous de fausses bonnes nouvelles.",
            "en": "Even a good conversation can drown you in false good news."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les compliments",
            "en": "Compliments"
          },
          "body": {
            "fr": "\"J'adore, c'est genial\" ne t'apprend rien. Les compliments sont l'or des fous de l'apprentissage client : ils brillent mais ne valent rien.",
            "en": "\"I love it, it's great\" teaches you nothing. Compliments are the fool's gold of customer learning: shiny but worthless."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le flou",
            "en": "Fluff"
          },
          "body": {
            "fr": "Generalites, hypotheses et promesses d'avenir : \"je fais toujours\", \"je ferais\". Ramene la personne a un cas concret et recent.",
            "en": "Generics, hypotheticals and future promises: \"I always\", \"I would\". Anchor them back to a specific, recent case."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les idees",
            "en": "Ideas"
          },
          "body": {
            "fr": "Les clients croulent sous les idees de fonctionnalites. Note l'emotion et le besoin derriere, pas la feature demandee.",
            "en": "Customers overflow with feature ideas. Capture the emotion and need behind them, not the feature they asked for."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Face a un compliment ou une hypothese, ramene la conversation vers les faits : \"raconte-moi la derniere fois que...\".",
            "en": "When you hit a compliment or a hypothetical, deflect toward facts: \"tell me about the last time you...\"."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les opinions ne valent rien",
        "en": "Opinions are worthless"
      },
      "caption": {
        "fr": "Arrete de demander si les gens acheteraient. 🚫",
        "en": "Stop asking whether people would buy. 🚫"
      },
      "tags": [
        "opinions",
        "facts",
        "customerdiscovery",
        "startup"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Faits > opinions",
            "en": "Facts > opinions"
          },
          "body": {
            "fr": "Ce que les gens disent qu'ils feront et ce qu'ils font vraiment sont deux mondes.",
            "en": "What people say they'll do and what they actually do are two different worlds."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le futur est un mensonge",
            "en": "The future is a lie"
          },
          "body": {
            "fr": "\"Est-ce que vous acheteriez ?\" invite a une reponse polie et optimiste. Personne ne connait vraiment son comportement futur.",
            "en": "\"Would you buy this?\" invites a polite, optimistic answer. Nobody truly knows their future behavior."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Creuse le passe",
            "en": "Dig into the past"
          },
          "body": {
            "fr": "Demande ce qu'ils ont fait, combien ils ont depense, quels outils ils ont bricoles. Le passe ne ment pas.",
            "en": "Ask what they did, how much they spent, what workarounds they built. The past doesn't lie."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Le rappel brutal",
            "en": "The blunt reminder"
          },
          "body": {
            "fr": "\"Les opinions ne valent rien.\"",
            "en": "\"Opinions are worthless.\""
          },
          "attribution": {
            "fr": "Rob Fitzpatrick, The Mom Test",
            "en": "Rob Fitzpatrick, The Mom Test"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne demande jamais d'avis sur ton idee. Demande des histoires vecues et laisse les faits parler.",
            "en": "Never ask for opinions on your idea. Ask for lived stories and let the facts speak."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Engagement et progression",
        "en": "Commitment and advancement"
      },
      "caption": {
        "fr": "Un vrai oui coute quelque chose. 💸",
        "en": "A real yes costs something. 💸"
      },
      "tags": [
        "commitment",
        "advancement",
        "sales",
        "validation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le vrai signal",
            "en": "The real signal"
          },
          "body": {
            "fr": "Une reunion \"super\" qui ne mene a rien est un echec deguise.",
            "en": "A \"great\" meeting that leads nowhere is a failure in disguise."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Engagement",
            "en": "Commitment"
          },
          "body": {
            "fr": "L'engagement, c'est quand le client cede quelque chose qui compte : du temps, de la reputation ou de l'argent.",
            "en": "Commitment is when the customer gives up something they value: time, reputation, or money."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Progression",
            "en": "Advancement"
          },
          "body": {
            "fr": "La progression, c'est passer a l'etape suivante concrete du parcours d'achat, pas juste un \"on se recontacte\".",
            "en": "Advancement is moving to the next concrete step of the buying path, not just \"let's stay in touch\"."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les monnaies de l'engagement",
            "en": "The currencies of commitment"
          },
          "body": {
            "fr": "Temps (une vraie plage dans l'agenda), reputation (une intro a son boss), argent (une precommande) : c'est ca qui prouve l'interet.",
            "en": "Time (a real slot on the calendar), reputation (an intro to their boss), money (a pre-order): that's what proves interest."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "A la fin de chaque echange, demande un engagement concret. Un compliment n'est pas une avancee.",
            "en": "End every conversation by asking for a concrete commitment. A compliment is not progress."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Ce n'est pas ton idee, c'est leur probleme",
        "en": "It's not your idea, it's their problem"
      },
      "caption": {
        "fr": "Ils possedent le probleme, tu possedes la solution. 🤝",
        "en": "They own the problem, you own the solution. 🤝"
      },
      "tags": [
        "problemfirst",
        "customerdev",
        "product",
        "startup"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Sors de ton idee",
            "en": "Get out of your idea"
          },
          "body": {
            "fr": "Une bonne conversation client ne parle presque jamais de ton produit.",
            "en": "A good customer conversation is almost never about your product."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ce n'est pas un pitch",
            "en": "It's not a pitch"
          },
          "body": {
            "fr": "Un entretien de decouverte n'est pas une reunion de vente. Si tu parles de ta solution, tu as deja perdu l'info.",
            "en": "A discovery interview is not a sales meeting. If you're talking about your solution, you've already lost the insight."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "A chacun son role",
            "en": "Each has a role"
          },
          "body": {
            "fr": "Le client possede le probleme, toi tu possedes la solution. Ne le laisse pas concevoir ton produit a ta place.",
            "en": "The customer owns the problem, you own the solution. Don't let them design your product for you."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Le partage des roles",
            "en": "The division of roles"
          },
          "body": {
            "fr": "\"Tu n'as pas le droit de leur dire quel est leur probleme, et en retour, ils n'ont pas le droit de te dire quoi construire.\"",
            "en": "\"You aren't allowed to tell them what their problem is, and in return, they aren't allowed to tell you what to build.\""
          },
          "attribution": {
            "fr": "Rob Fitzpatrick, The Mom Test",
            "en": "Rob Fitzpatrick, The Mom Test"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "A retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Cherche a comprendre le probleme en profondeur. La solution, c'est ton travail, pas le leur.",
            "en": "Go deep on understanding the problem. The solution is your job, not theirs."
          }
        }
      ]
    }
  ],
  "founders-at-work": [
    {
      "concept": {
        "fr": "La persévérance avant le génie",
        "en": "Perseverance over genius"
      },
      "caption": {
        "fr": "Après plus de 30 interviews de fondateurs, un seul trait revient partout. 💪",
        "en": "After 30+ founder interviews, one trait shows up everywhere. 💪"
      },
      "tags": [
        "persévérance",
        "startup",
        "mindset",
        "founders"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le trait n°1 des fondateurs",
            "en": "The #1 founder trait"
          },
          "body": {
            "fr": "En interrogeant les fondateurs des plus grandes startups, Jessica Livingston cherchait leur secret. Ce n'était pas l'intelligence.",
            "en": "Interviewing the founders of the biggest startups, Jessica Livingston looked for their secret. It wasn't intelligence."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La détermination l'emporte",
            "en": "Determination wins"
          },
          "body": {
            "fr": "Le fil rouge du livre : les fondateurs qui réussissent ne sont pas les plus brillants, mais ceux qui refusent d'abandonner.",
            "en": "The book's through-line: the founders who succeed aren't the smartest, they're the ones who refuse to quit."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Presque tous ont frôlé la fin",
            "en": "Almost all nearly died"
          },
          "body": {
            "fr": "Récit après récit, ces entreprises devenues légendaires ont frôlé la faillite. Le succès n'a jamais été une ligne droite.",
            "en": "Story after story, these now-legendary companies came close to collapse. Success was never a straight line."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Encaisser l'adversité",
            "en": "Absorbing adversity"
          },
          "body": {
            "fr": "Rejets d'investisseurs, moqueries, pannes techniques : ceux qui ont tenu ont su encaisser sans se laisser définir par les revers.",
            "en": "Investor rejections, ridicule, technical failures: those who lasted absorbed it without letting setbacks define them."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne mise pas tout sur une idée brillante. Développe surtout ta capacité à continuer quand tout s'effondre.",
            "en": "Don't bet everything on a brilliant idea. Above all, build your ability to keep going when everything falls apart."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'idée de départ n'est jamais la bonne",
        "en": "The first idea is never the one"
      },
      "caption": {
        "fr": "PayPal a commencé par... sécuriser des Palm Pilots. 🔄",
        "en": "PayPal started out by... securing Palm Pilots. 🔄"
      },
      "tags": [
        "pivot",
        "adaptabilité",
        "paypal",
        "startup"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le plan va changer",
            "en": "The plan will change"
          },
          "body": {
            "fr": "Dans le livre, presque aucune entreprise ne finit par faire ce qu'elle avait prévu au départ.",
            "en": "In the book, almost no company ends up doing what it originally set out to do."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "PayPal, trois idées en une",
            "en": "PayPal, three ideas in one"
          },
          "body": {
            "fr": "Max Levchin raconte : d'abord de la cryptographie pour appareils portables, puis l'envoi d'argent entre Palm Pilots, enfin les paiements par e-mail.",
            "en": "Max Levchin recounts: first cryptography for handhelds, then beaming money between Palm Pilots, finally email payments."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Suivre ce qui marche",
            "en": "Follow what works"
          },
          "body": {
            "fr": "Le vrai produit est apparu en observant où les utilisateurs se précipitaient, pas en s'accrochant au concept initial.",
            "en": "The real product emerged from watching where users rushed, not from clinging to the original concept."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Rester en mouvement",
            "en": "Stay in motion"
          },
          "body": {
            "fr": "Les fondateurs interrogés traitent leur première idée comme un point de départ, jamais comme une destination.",
            "en": "The founders interviewed treat their first idea as a starting point, never a destination."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Attache-toi au problème et aux utilisateurs, pas à ton plan de départ. Le pivot n'est pas un échec, c'est le métier.",
            "en": "Commit to the problem and the users, not your original plan. Pivoting isn't failure, it's the job."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La boucle virale de Hotmail",
        "en": "Hotmail's viral loop"
      },
      "caption": {
        "fr": "Une seule ligne au bas des e-mails a fait exploser Hotmail. 🚀",
        "en": "One line at the bottom of every email made Hotmail explode. 🚀"
      },
      "tags": [
        "hotmail",
        "croissance",
        "viralité",
        "marketing"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le produit devient sa pub",
            "en": "The product as its own ad"
          },
          "body": {
            "fr": "Sabeer Bhatia raconte comment Hotmail a atteint des millions d'utilisateurs sans budget marketing classique.",
            "en": "Sabeer Bhatia recounts how Hotmail reached millions of users with no classic marketing budget."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'idée de l'investisseur",
            "en": "The investor's idea"
          },
          "body": {
            "fr": "Tim Draper (DFJ) suggère d'ajouter une ligne promotionnelle au bas de chaque e-mail envoyé par un utilisateur.",
            "en": "Tim Draper (DFJ) suggests adding a promotional line to the bottom of every email a user sends."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Chaque e-mail recrute",
            "en": "Every email recruits"
          },
          "body": {
            "fr": "Chaque message envoyé devenait une invitation. Le destinataire s'inscrivait, puis propageait à son tour le lien.",
            "en": "Every message sent became an invitation. The recipient signed up, then spread the link in turn."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le lien en bas de page",
            "en": "The link at the bottom"
          },
          "body": {
            "fr": "Chaque e-mail sortant portait un simple lien invitant à obtenir un e-mail gratuit sur Hotmail. Un ajout minuscule devenu moteur de croissance.",
            "en": "Every outgoing email carried a simple link inviting people to get free email at Hotmail. A tiny addition that became the growth engine."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Intègre la distribution dans le produit lui-même. La meilleure croissance vient de l'usage, pas de la pub achetée.",
            "en": "Build distribution into the product itself. The best growth comes from usage, not bought ads."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Wozniak : construire par passion",
        "en": "Wozniak: building for love"
      },
      "caption": {
        "fr": "Woz distribuait ses plans gratuitement avant même qu'Apple n'existe. 🍎",
        "en": "Woz gave away his designs for free before Apple existed. 🍎"
      },
      "tags": [
        "wozniak",
        "apple",
        "ingénierie",
        "craft"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'ingénieur derrière Apple",
            "en": "The engineer behind Apple"
          },
          "body": {
            "fr": "Steve Wozniak raconte comment il a conçu presque seul les premiers ordinateurs Apple, par pur amour de la technique.",
            "en": "Steve Wozniak recounts designing the first Apple computers almost single-handedly, for the pure love of it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'élégance minimale",
            "en": "Minimal elegance"
          },
          "body": {
            "fr": "Woz cherchait à faire fonctionner ses machines avec le moins de composants possible : la contrainte comme moteur de créativité.",
            "en": "Woz strove to make his machines work with the fewest chips possible: constraint as an engine of creativity."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Partager gratuitement",
            "en": "Sharing for free"
          },
          "body": {
            "fr": "Au Homebrew Computer Club, il distribuait ses schémas gratuitement. L'objectif était de créer, pas de vendre.",
            "en": "At the Homebrew Computer Club he handed out his schematics for free. The goal was to create, not to sell."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le duo créateur-vendeur",
            "en": "The builder-seller duo"
          },
          "body": {
            "fr": "C'est Steve Jobs qui a poussé Woz à transformer cette passion en entreprise. Deux profils complémentaires.",
            "en": "It was Steve Jobs who pushed Woz to turn that passion into a company. Two complementary profiles."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Un savoir-faire technique profond change la donne, surtout associé à un partenaire capable de le porter au marché.",
            "en": "Deep technical craft is a game-changer, especially paired with a partner who can take it to market."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Viaweb et la naissance du logiciel web",
        "en": "Viaweb and the birth of web software"
      },
      "caption": {
        "fr": "Avant le SaaS, il y avait Viaweb. 🌐",
        "en": "Before SaaS, there was Viaweb. 🌐"
      },
      "tags": [
        "viaweb",
        "paulgraham",
        "saas",
        "produit"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le logiciel qui vit sur le serveur",
            "en": "Software that lives on the server"
          },
          "body": {
            "fr": "Paul Graham raconte Viaweb (1995) : l'une des premières applications tournant entièrement dans le navigateur.",
            "en": "Paul Graham recounts Viaweb (1995): one of the first applications running entirely in the browser."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Créer une boutique en ligne",
            "en": "Building an online store"
          },
          "body": {
            "fr": "Les commerçants construisaient leur boutique via le navigateur, sans rien installer. Le logiciel restait chez Viaweb.",
            "en": "Merchants built their store through the browser, installing nothing. The software stayed on Viaweb's servers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Itérer en continu",
            "en": "Iterating continuously"
          },
          "body": {
            "fr": "Logiciel sur le serveur = mises à jour instantanées, aucune version à distribuer, et l'usage réel observable en direct.",
            "en": "Software on the server = instant updates, no versions to ship, and real usage observable live."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'avantage stratégique",
            "en": "The strategic edge"
          },
          "body": {
            "fr": "Corriger un bug ou tester une idée prenait des minutes, pas des mois. Un rythme impossible pour les logiciels en boîte.",
            "en": "Fixing a bug or testing an idea took minutes, not months. A pace impossible for boxed software."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Faire tourner ton logiciel sur le serveur libère une vitesse d'itération que tes concurrents ne pourront pas suivre.",
            "en": "Running your software on the server unlocks an iteration speed your competitors can't match."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le mauvais financement peut te coûter ta boîte",
        "en": "The wrong funding can cost you your company"
      },
      "caption": {
        "fr": "ArsDigita était rentable... jusqu'à ce qu'elle lève des fonds. ⚠️",
        "en": "ArsDigita was profitable... until it raised money. ⚠️"
      },
      "tags": [
        "financement",
        "arsdigita",
        "contrôle",
        "vc"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'argent a un prix caché",
            "en": "Money has a hidden price"
          },
          "body": {
            "fr": "Philip Greenspun raconte comment ArsDigita, entreprise prospère, s'est effondrée après avoir pris des fonds.",
            "en": "Philip Greenspun recounts how ArsDigita, a thriving company, collapsed after taking venture money."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Rentable sans investisseurs",
            "en": "Profitable without investors"
          },
          "body": {
            "fr": "ArsDigita gagnait de l'argent grâce à ses services web. Elle n'avait pas besoin de capital extérieur pour vivre.",
            "en": "ArsDigita made money from its web services. It didn't need outside capital to survive."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Perdre le contrôle",
            "en": "Losing control"
          },
          "body": {
            "fr": "En levant des fonds, les fondateurs ont cédé le pouvoir au conseil. Les nouveaux dirigeants ont mené l'entreprise au déclin.",
            "en": "By raising money, the founders handed power to the board. The new leadership drove the company into decline."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une leçon récurrente",
            "en": "A recurring lesson"
          },
          "body": {
            "fr": "Le livre montre à plusieurs reprises que le financement n'est pas une victoire en soi : les conditions comptent autant que le montant.",
            "en": "The book shows repeatedly that funding isn't a win in itself: the terms matter as much as the amount."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de lever, comprends qui détient vraiment le contrôle. Ne prends de l'argent que si tu en as besoin et que les termes te protègent.",
            "en": "Before you raise, understand who really holds control. Only take money if you need it and the terms protect you."
          }
        }
      ]
    }
  ],
  "shoe-dog": [
    {
      "concept": {
        "fr": "L'idée folle",
        "en": "The Crazy Idea"
      },
      "caption": {
        "fr": "Tout a commencé par un mémoire d'étudiant que personne ne prenait au sérieux. 👟",
        "en": "It all started with a student paper nobody took seriously. 👟"
      },
      "tags": [
        "Nike",
        "startup",
        "vision",
        "Onitsuka"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'idée folle",
            "en": "The Crazy Idea"
          },
          "body": {
            "fr": "À Stanford, Phil Knight rêve d'importer des chaussures de course japonaises. Tout le monde appelle ça une idée folle.",
            "en": "At Stanford, Phil Knight dreams of importing Japanese running shoes. Everyone calls it a crazy idea."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le déclic japonais",
            "en": "The Japanese insight"
          },
          "body": {
            "fr": "Dans un mémoire, il observe que les appareils photo japonais ont détrôné les allemands. Pourquoi pas des chaussures bon marché et bien faites, face à Adidas ?",
            "en": "In a class paper he argues Japanese cameras dethroned German ones, so cheap, well-made Japanese shoes could do the same to Adidas."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Blue Ribbon, née sur-le-champ",
            "en": "Blue Ribbon, born on the spot"
          },
          "body": {
            "fr": "En 1962, face à Onitsuka au Japon, il n'a aucune entreprise. Il invente un nom à l'instant : Blue Ribbon Sports.",
            "en": "In 1962, pitching Onitsuka in Japan, he has no company. He invents a name on the spot: Blue Ribbon Sports."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Vendre depuis son coffre",
            "en": "Selling from a car trunk"
          },
          "body": {
            "fr": "Ses premières Tiger, il les écoule sur les pistes d'athlétisme, depuis le coffre de sa Plymouth Valiant.",
            "en": "He sells his first Tiger shoes trackside, out of the trunk of his Plymouth Valiant."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Ose l'idée folle",
            "en": "Dare the crazy idea"
          },
          "body": {
            "fr": "Une intuition mal vue peut devenir un empire. Commence petit et prouve-la sur le terrain.",
            "en": "A dismissed hunch can become an empire. Start small and prove it in the real world."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Bowerman l'inventeur",
        "en": "Bowerman the tinkerer"
      },
      "caption": {
        "fr": "Il a versé du caoutchouc dans le gaufrier de sa femme. Résultat : une semelle légendaire. 🧇",
        "en": "He poured rubber into his wife's waffle iron. The result: a legendary sole. 🧇"
      },
      "tags": [
        "Nike",
        "innovation",
        "Bowerman",
        "design"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le coach bricoleur",
            "en": "The tinkering coach"
          },
          "body": {
            "fr": "Bill Bowerman, coach de Phil et cofondateur, n'a jamais cessé de modifier les chaussures de ses coureurs.",
            "en": "Bill Bowerman, Phil's coach and co-founder, never stopped fiddling with his runners' shoes."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Obsédé par le poids",
            "en": "Obsessed with weight"
          },
          "body": {
            "fr": "Il traquait chaque gramme : alléger une chaussure, c'est économiser de l'énergie à chaque foulée.",
            "en": "He hunted every gram: a lighter shoe saves energy on every single stride."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le gaufrier",
            "en": "The waffle iron"
          },
          "body": {
            "fr": "Un matin, il coule du caoutchouc dans le gaufrier familial pour créer une semelle à picots, plus accrocheuse.",
            "en": "One morning he pours rubber into the family waffle iron to create a gripping, studded outsole."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ses coureurs comme cobayes",
            "en": "His runners as test subjects"
          },
          "body": {
            "fr": "Ses athlètes servaient de laboratoire vivant à chaque prototype, parfois aux dépens de leurs pieds.",
            "en": "His athletes were the living lab for every prototype, sometimes at the expense of their feet."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Bricole, teste, recommence",
            "en": "Tinker, test, repeat"
          },
          "body": {
            "fr": "L'innovation naît de l'obsession du détail et d'objets du quotidien détournés.",
            "en": "Innovation comes from obsessing over details and repurposing everyday objects."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Grandir sans cash",
        "en": "Growth without cash"
      },
      "caption": {
        "fr": "Nike a frôlé la faillite en grandissant trop vite. Le paradoxe du cash. 💸",
        "en": "Nike nearly went broke by growing too fast. The cash paradox. 💸"
      },
      "tags": [
        "Nike",
        "cashflow",
        "finance",
        "entrepreneuriat"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le paradoxe de la croissance",
            "en": "The growth paradox"
          },
          "body": {
            "fr": "Blue Ribbon doublait ses ventes chaque année... et manquait sans cesse d'argent.",
            "en": "Blue Ribbon doubled its sales every year, and was constantly out of money."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Réinvestir chaque dollar",
            "en": "Reinvest every dollar"
          },
          "body": {
            "fr": "Phil renvoyait tout le cash dans des commandes plus grosses. Croissance rimait avec trésorerie à zéro.",
            "en": "Phil poured every dollar back into bigger orders. Growth meant a bank balance always near zero."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les banquiers paniquent",
            "en": "The bankers panic"
          },
          "body": {
            "fr": "Sa banque détestait cette croissance sans réserves. First National finit par le lâcher.",
            "en": "His bank hated growth with no cushion. First National eventually cut him off."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le sauvetage japonais",
            "en": "The Japanese lifeline"
          },
          "body": {
            "fr": "La maison de commerce Nissho Iwai finança ses commandes et le sauva de l'asphyxie.",
            "en": "The trading house Nissho Iwai financed his orders and kept him from suffocating."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Le cash est roi",
            "en": "Cash is king"
          },
          "body": {
            "fr": "Vendre plus ne suffit pas : sans trésorerie, la meilleure croissance peut te tuer.",
            "en": "Selling more isn't enough. Without cash, even great growth can kill you."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La naissance de Nike",
        "en": "The birth of Nike"
      },
      "caption": {
        "fr": "Un nom venu d'un rêve, un logo payé 35 dollars. 🪽",
        "en": "A name from a dream, a logo that cost 35 dollars. 🪽"
      },
      "tags": [
        "Nike",
        "branding",
        "swoosh",
        "marketing"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Nike & le Swoosh",
            "en": "Nike & the Swoosh"
          },
          "body": {
            "fr": "Le nom et le logo les plus célèbres du sport sont nés presque par hasard.",
            "en": "Sport's most famous name and logo were born almost by accident."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un nom en catastrophe",
            "en": "A name against the clock"
          },
          "body": {
            "fr": "À court de temps, l'équipe hésite. Jeff Johnson dit avoir vu « Nike » en rêve, la déesse grecque de la victoire.",
            "en": "Out of time, the team is stuck. Jeff Johnson says 'Nike' came to him in a dream, the Greek goddess of victory."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Phil n'y croyait pas",
            "en": "Phil wasn't convinced"
          },
          "body": {
            "fr": "Knight préférait d'autres options et tranche à contrecœur, en pariant que le temps l'apprivoiserait.",
            "en": "Knight preferred other options and picks it only reluctantly, betting time would make it fit."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un logo à 35 dollars",
            "en": "A 35-dollar logo"
          },
          "body": {
            "fr": "L'étudiante Carolyn Davidson dessine le Swoosh pour 35 dollars. Phil : « Je ne l'adore pas, mais il finira peut-être par me plaire. »",
            "en": "Student Carolyn Davidson designs the Swoosh for 35 dollars. Phil: 'I don't love it, but maybe it'll grow on me.'"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "L'exécution avant la perfection",
            "en": "Execution over perfection"
          },
          "body": {
            "fr": "Les icônes ne naissent pas parfaites : elles prennent leur sens par ce qu'on construit derrière.",
            "en": "Icons aren't born perfect. They gain meaning from what you build behind them."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La bande d'inadaptés",
        "en": "The band of misfits"
      },
      "caption": {
        "fr": "Nike a été bâtie par des passionnés cabossés. Et des réunions appelées « Buttfaces ». 🤝",
        "en": "Nike was built by flawed, obsessive believers, and meetings called 'Buttfaces.' 🤝"
      },
      "tags": [
        "Nike",
        "team",
        "leadership",
        "culture"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La bande d'inadaptés",
            "en": "The band of misfits"
          },
          "body": {
            "fr": "Phil s'est entouré de passionnés cabossés plutôt que de CV parfaits.",
            "en": "Phil surrounded himself with bruised, passionate people rather than perfect résumés."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Jeff Johnson, l'obsédé",
            "en": "Jeff Johnson, the obsessive"
          },
          "body": {
            "fr": "Premier employé à plein temps, il vivait pour la chaussure et inondait Phil de lettres interminables.",
            "en": "The first full-time employee lived for the shoe and buried Phil in endless letters."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des personnalités abîmées et loyales",
            "en": "Damaged, fiercely loyal characters"
          },
          "body": {
            "fr": "Son cercle rapproché réunissait des profils improbables, soudés par la même foi dans la marque.",
            "en": "His inner circle gathered unlikely figures, bound together by the same belief in the brand."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les « Buttfaces »",
            "en": "The 'Buttfaces'"
          },
          "body": {
            "fr": "Lors de retraites sans filtre, ils s'invectivaient et se déchiraient sur la stratégie, puis avançaient ensemble.",
            "en": "At blunt retreats they cursed and tore into each other over strategy, then moved forward together."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Recrute des convaincus",
            "en": "Hire true believers"
          },
          "body": {
            "fr": "Une culture forte se bâtit sur la passion et la franchise, pas sur des CV parfaits.",
            "en": "Strong culture is built on passion and candor, not flawless CVs."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Ne t'arrête pas",
        "en": "Don't stop"
      },
      "caption": {
        "fr": "Le conseil de Phil Knight à qui poursuit un rêve tient en quelques mots. 🏃",
        "en": "Phil Knight's advice to any dreamer fits in a few words. 🏃"
      },
      "tags": [
        "Nike",
        "persévérance",
        "motivation",
        "rêve"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Ne t'arrête pas",
            "en": "Don't stop"
          },
          "body": {
            "fr": "Derrière Nike, une seule règle : continuer, quoi qu'il arrive.",
            "en": "Behind Nike lies one rule: keep going, no matter what."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le doute permanent",
            "en": "Constant doubt"
          },
          "body": {
            "fr": "Faillites frôlées, procès, bataille avec les douanes... Phil a douté sans cesse, mais n'a jamais lâché.",
            "en": "Near-bankruptcies, lawsuits, a customs battle: Phil doubted constantly but never quit."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le travail comme vocation",
            "en": "Work as a calling"
          },
          "body": {
            "fr": "Il voulait que le travail ressemble à un jeu et à une vocation, pas à une corvée.",
            "en": "He wanted work to feel like play and a calling, not like a chore."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Le mot de Phil",
            "en": "Phil's words"
          },
          "body": {
            "fr": "« Laissez les autres traiter votre idée de folle... continuez, simplement. Ne vous arrêtez pas. »",
            "en": "\"Let everyone else call your idea crazy... just keep going. Don't stop.\""
          },
          "attribution": {
            "fr": "Phil Knight",
            "en": "Phil Knight"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Continue",
            "en": "Keep going"
          },
          "body": {
            "fr": "Peu importe où se trouve « l'arrivée » : tant que tu ne t'arrêtes pas, tu es dans la course.",
            "en": "Never mind where 'there' is. As long as you don't stop, you're still in the race."
          }
        }
      ]
    }
  ],
  "made-in-america": [
    {
      "concept": {
        "fr": "Des associés, pas des employés",
        "en": "Associates, not employees"
      },
      "caption": {
        "fr": "Le vrai secret de Walmart n'était pas le prix, c'était le partage. 🤝",
        "en": "Walmart's real secret wasn't price, it was sharing. 🤝"
      },
      "tags": [
        "Walmart",
        "partenariat",
        "profitsharing",
        "management"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Des associés, pas des employés",
            "en": "Associates, not employees"
          },
          "body": {
            "fr": "Sam Walton a bâti Walmart en traitant son personnel comme des partenaires de l'entreprise.",
            "en": "Sam Walton built Walmart by treating his people as partners in the business."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le mot compte",
            "en": "The word matters"
          },
          "body": {
            "fr": "Chez Walmart, personne n'est un « employé » : tous sont des « associés ». Le vocabulaire changeait la relation.",
            "en": "At Walmart no one is an 'employee'; everyone is an 'associate'. The vocabulary changed the relationship."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Partager les profits",
            "en": "Share the profits"
          },
          "body": {
            "fr": "Participation aux bénéfices, actionnariat, primes : plus Walton partageait, plus l'entreprise prospérait.",
            "en": "Profit sharing, stock ownership, bonuses: the more Walton shared, the more the company prospered."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Son plus grand regret",
            "en": "His biggest regret"
          },
          "body": {
            "fr": "Walton reconnaît avoir attendu trop longtemps avant d'étendre la participation aux salariés horaires.",
            "en": "Walton admits he waited too long before extending profit sharing to hourly workers."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ce qui redescend au client",
            "en": "It flows to the customer"
          },
          "body": {
            "fr": "« La façon dont la direction traite les associés est exactement celle dont les associés traiteront les clients. »",
            "en": "\"The way management treats the associates is exactly how the associates will treat the customers.\""
          },
          "attribution": {
            "fr": "Sam Walton",
            "en": "Sam Walton"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ceux qui partagent le succès s'y investissent. Faites de vos équipes des partenaires, pas des exécutants.",
            "en": "People who share in success invest in it. Make your team partners, not hired hands."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Vendre moins cher pour gagner plus",
        "en": "Sell for less to earn more"
      },
      "caption": {
        "fr": "La marge la plus faible peut rapporter le plus gros profit. 💸",
        "en": "The lowest markup can make the biggest profit. 💸"
      },
      "tags": [
        "prix",
        "volume",
        "EDLP",
        "retail"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Vendre moins cher",
            "en": "Sell for less"
          },
          "body": {
            "fr": "La philosophie fondatrice de Walton : réduire la marge, faire exploser le volume.",
            "en": "Walton's founding philosophy: cut the markup, explode the volume."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La leçon des premiers magasins",
            "en": "The five-and-dime lesson"
          },
          "body": {
            "fr": "Dès ses débuts, Walton découvre qu'un prix plus bas fait vendre tellement plus qu'il rapporte davantage au total.",
            "en": "From his earliest stores, Walton learned a lower price sold so much more that it earned more overall."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Prix bas tous les jours",
            "en": "Everyday low prices"
          },
          "body": {
            "fr": "Pas de soldes ponctuelles suivies de hausses, mais un prix bas permanent auquel le client peut se fier.",
            "en": "Not one-off sales followed by hikes, but a permanently low price the customer can trust."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Rendre l'économie au client",
            "en": "Pass savings on"
          },
          "body": {
            "fr": "Chaque dollar économisé sur les coûts était répercuté en prix plus bas, pas gardé comme marge.",
            "en": "Every dollar saved on costs was passed to the customer as a lower price, not kept as margin."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Le calcul de Walton",
            "en": "Walton's math"
          },
          "body": {
            "fr": "« En le vendant à 1 dollar, j'en écoulais trois fois plus qu'à 1,20 dollar. »",
            "en": "\"By pricing it at $1.00 I could sell three times more of it than by pricing it at $1.20.\""
          },
          "attribution": {
            "fr": "Sam Walton",
            "en": "Sam Walton"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Une petite marge sur un gros volume bat une grosse marge sur peu de ventes. Pensez volume, pas marge.",
            "en": "A small markup on high volume beats a fat markup on few sales. Think volume, not margin."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La stratégie des petites villes",
        "en": "The small-town strategy"
      },
      "caption": {
        "fr": "Il a conquis l'Amérique là où personne ne regardait. 🏘️",
        "en": "He conquered America where no one was looking. 🏘️"
      },
      "tags": [
        "expansion",
        "petitesvilles",
        "strategie",
        "Walmart"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Là où personne n'allait",
            "en": "Where no one else went"
          },
          "body": {
            "fr": "Walton a implanté ses grands magasins discount dans des villes jugées trop petites par la concurrence.",
            "en": "Walton put big discount stores in towns his competitors thought were far too small."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le territoire ignoré",
            "en": "The ignored territory"
          },
          "body": {
            "fr": "Kmart et les autres visaient les villes de plus de 50 000 habitants. Walton visait celles de 5 000.",
            "en": "Kmart and the rest chased towns over 50,000 people. Walton went after towns of 5,000."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un magasin par bourgade",
            "en": "One store per town"
          },
          "body": {
            "fr": "Une petite ville ne pouvait faire vivre qu'un seul grand discounter : le premier arrivé la verrouillait.",
            "en": "A small town could support only one big discounter, so the first to arrive locked it up."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Rayonner depuis l'entrepôt",
            "en": "Fill in from the warehouse"
          },
          "body": {
            "fr": "Walton étendait ses magasins en cercle autour de ses centres de distribution, sans jamais distancer sa logistique.",
            "en": "Walton spread stores in a ring around his distribution centers, never outrunning his own logistics."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le marché que les gros négligent peut devenir votre forteresse. Cherchez les endroits que tout le monde snobe.",
            "en": "The market the giants ignore can become your fortress. Look where everyone else refuses to."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Nager à contre-courant",
        "en": "Swim upstream"
      },
      "caption": {
        "fr": "La sagesse commune est souvent une opportunité déguisée. 🐟",
        "en": "Conventional wisdom is often opportunity in disguise. 🐟"
      },
      "tags": [
        "contrarian",
        "innovation",
        "regles",
        "mindset"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Nager à contre-courant",
            "en": "Swim upstream"
          },
          "body": {
            "fr": "La dixième règle de Walton : ignorer la sagesse conventionnelle et aller dans l'autre sens.",
            "en": "Walton's tenth rule: ignore conventional wisdom and go the other way."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le pari de la campagne",
            "en": "The rural bet"
          },
          "body": {
            "fr": "On lui disait que le discount ne marcherait jamais dans les petites villes. Il a fait exactement l'inverse.",
            "en": "Everyone told him discounting could never work in small towns. He did exactly the opposite."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une chance dans chaque évidence",
            "en": "Opportunity in the obvious"
          },
          "body": {
            "fr": "Pour Walton, si tout le monde fait pareil, il y a de fortes chances de trouver sa place en faisant l'inverse.",
            "en": "For Walton, if everyone is doing it one way, there's a good chance of a niche going the other way."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La règle n°10",
            "en": "Rule #10"
          },
          "body": {
            "fr": "« Nagez à contre-courant. Allez dans l'autre sens. Ignorez la sagesse conventionnelle. »",
            "en": "\"Swim upstream. Go the other way. Ignore the conventional wisdom.\""
          },
          "attribution": {
            "fr": "Sam Walton",
            "en": "Sam Walton"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Prenez l'habitude de demander : et si tout le monde se trompait ? Le troupeau laisse souvent le meilleur terrain libre.",
            "en": "Get in the habit of asking: what if everyone's wrong? The herd often leaves the best ground open."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Emprunter les bonnes idées",
        "en": "Borrow the best ideas"
      },
      "caption": {
        "fr": "Sam Walton copiait sans complexe, et il l'assumait. 📋",
        "en": "Sam Walton copied shamelessly, and admitted it. 📋"
      },
      "tags": [
        "apprentissage",
        "concurrence",
        "humilite",
        "idees"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Copier sans honte",
            "en": "Copy without shame"
          },
          "body": {
            "fr": "Walton a construit Walmart en empruntant les meilleures idées de tous ceux qu'il croisait.",
            "en": "Walton built Walmart by borrowing the best ideas from everyone he came across."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Étudier la concurrence",
            "en": "Study the competition"
          },
          "body": {
            "fr": "Il visitait sans relâche les magasins des rivaux, carnet en main, notant ce qu'ils faisaient de mieux.",
            "en": "He tirelessly visited rivals' stores, notebook in hand, jotting down whatever they did best."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Adopter ce qui marche",
            "en": "Copy what works"
          },
          "body": {
            "fr": "Peu importe la source, concurrent, fournisseur ou petit détaillant : si une idée marchait, il l'adoptait.",
            "en": "Source didn't matter: rival, supplier, or tiny retailer, if an idea worked he adopted it."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "L'aveu de Walton",
            "en": "Walton's admission"
          },
          "body": {
            "fr": "« Presque tout ce que j'ai fait, je l'ai copié sur quelqu'un d'autre. »",
            "en": "\"Most everything I've done I've copied from somebody else.\""
          },
          "attribution": {
            "fr": "Sam Walton",
            "en": "Sam Walton"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'originalité est surestimée. Observez, notez, adaptez : la meilleure idée existe peut-être déjà chez le voisin.",
            "en": "Originality is overrated. Observe, note, adapt: the best idea may already exist next door."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Maîtriser ses dépenses",
        "en": "Control your expenses"
      },
      "caption": {
        "fr": "Le fondateur milliardaire roulait en vieux pick-up. 🚚",
        "en": "The billionaire founder drove an old pickup. 🚚"
      },
      "tags": [
        "frugalite",
        "couts",
        "avantage",
        "discipline"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La discipline des coûts",
            "en": "The discipline of costs"
          },
          "body": {
            "fr": "Pour Walton, contrôler ses dépenses mieux que ses concurrents était l'avantage décisif.",
            "en": "For Walton, controlling expenses better than rivals was the decisive advantage."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Frugal jusqu'au sommet",
            "en": "Frugal to the top"
          },
          "body": {
            "fr": "Devenu l'un des hommes les plus riches, Walton roulait toujours en vieux pick-up et partageait ses chambres d'hôtel en déplacement.",
            "en": "Even as one of the richest men alive, Walton still drove an old pickup and shared hotel rooms on trips."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'avantage se cache dans les frais",
            "en": "The edge hides in overhead"
          },
          "body": {
            "fr": "Des frais généraux bas permettaient de casser les prix : la frugalité n'était pas une manie, mais une arme.",
            "en": "Low overhead let him undercut on price: frugality wasn't a quirk, it was a weapon."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Survivre à ses erreurs",
            "en": "Cover your mistakes"
          },
          "body": {
            "fr": "Walton disait qu'une structure de coûts serrée permet de survivre à des erreurs qui couleraient d'autres entreprises.",
            "en": "Walton said a lean cost structure lets you survive mistakes that would sink others."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La règle des dépenses",
            "en": "The expense rule"
          },
          "body": {
            "fr": "« Contrôlez vos dépenses mieux que la concurrence. C'est là que vous trouverez toujours l'avantage concurrentiel. »",
            "en": "\"Control your expenses better than your competition. This is where you can always find the competitive advantage.\""
          },
          "attribution": {
            "fr": "Sam Walton",
            "en": "Sam Walton"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Chaque dollar non dépensé en interne peut devenir un prix plus bas ou un matelas en cas d'erreur. Restez maigre.",
            "en": "Every dollar not spent internally can become a lower price or a cushion against mistakes. Stay lean."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La réunion du samedi matin",
        "en": "The Saturday morning meeting"
      },
      "caption": {
        "fr": "Travailler dur, oui, mais surtout s'amuser en le faisant. 🎉",
        "en": "Work hard, yes, but have fun doing it. 🎉"
      },
      "tags": [
        "culture",
        "communication",
        "morale",
        "leadership"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "S'amuser en travaillant",
            "en": "Have fun doing it"
          },
          "body": {
            "fr": "Walton mêlait communication obsessionnelle et joie de vivre pour souder toute l'entreprise.",
            "en": "Walton fused obsessive communication with sheer fun to bind the whole company together."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le rendez-vous du samedi",
            "en": "The Saturday ritual"
          },
          "body": {
            "fr": "Chaque samedi matin, dirigeants et cadres se réunissaient tôt pour partager chiffres, idées et problèmes sans filtre.",
            "en": "Every Saturday morning, leaders met early to share numbers, ideas, and problems with no filter."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Tout communiquer",
            "en": "Communicate everything"
          },
          "body": {
            "fr": "Walton partageait les résultats de chaque magasin avec les associés : mieux informés, plus ils s'engagent.",
            "en": "Walton shared each store's numbers with associates: the more they know, the more they care."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le cri de ralliement",
            "en": "The Walmart cheer"
          },
          "body": {
            "fr": "Le fameux « cheer » de Walmart et les cascades de Walton (danser le hula à Wall Street) entretenaient l'énergie collective.",
            "en": "The famous Walmart cheer and Walton's stunts (hula dancing on Wall Street) kept collective energy high."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'information partagée et l'ambiance ne sont pas des extras : elles nourrissent l'engagement. Communiquez et amusez-vous.",
            "en": "Shared information and atmosphere aren't extras: they fuel commitment. Communicate, and have fun."
          }
        }
      ]
    }
  ],
  "pour-your-heart-into-it": [
    {
      "concept": {
        "fr": "L'épiphanie de Milan",
        "en": "The Milan epiphany"
      },
      "caption": {
        "fr": "Un voyage en Italie a tout changé : le café n'est pas un produit, c'est un théâtre. ☕",
        "en": "A trip to Italy changed everything: coffee isn't a product, it's theater. ☕"
      },
      "tags": [
        "Starbucks",
        "Italie",
        "experience",
        "cafe"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'épiphanie de Milan",
            "en": "The Milan epiphany"
          },
          "body": {
            "fr": "En 1983, Schultz découvre les bars à espresso italiens et comprend ce qui manque à l'Amérique.",
            "en": "In 1983, Schultz discovers Italian espresso bars and grasps what America is missing."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le théâtre du barista",
            "en": "The barista's theater"
          },
          "body": {
            "fr": "À Milan, le barista salue les clients par leur nom et prépare l'espresso comme un spectacle. Le rituel compte autant que la boisson.",
            "en": "In Milan, the barista greets customers by name and pulls espresso like a performance. The ritual matters as much as the drink."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Vendre une expérience",
            "en": "Selling an experience"
          },
          "body": {
            "fr": "Schultz réalise que Starbucks vendait des grains à emporter, pas un lieu. Il veut recréer la romance et la communauté du bar italien.",
            "en": "Schultz realizes Starbucks sold beans to take home, not a place. He wants to recreate the romance and community of the Italian bar."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une intuition contestée",
            "en": "A contested hunch"
          },
          "body": {
            "fr": "Les fondateurs de Starbucks refusent l'idée des cafés-boissons. Schultz partira fonder Il Giornale pour la prouver.",
            "en": "Starbucks' founders reject the idea of a coffee-drink bar. Schultz leaves to found Il Giornale and prove it."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Observe ce qui touche les gens ailleurs. Souvent l'innovation n'est pas un nouveau produit, mais une expérience déjà aimée, transposée.",
            "en": "Watch what moves people elsewhere. Often innovation isn't a new product but a beloved experience, transplanted."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le troisième lieu",
        "en": "The third place"
      },
      "caption": {
        "fr": "Ni la maison, ni le bureau : un troisième lieu où l'on se sent chez soi. 🏠",
        "en": "Not home, not work: a third place where you feel you belong. 🏠"
      },
      "tags": [
        "troisiemelieu",
        "communaute",
        "Starbucks",
        "appartenance"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le troisième lieu",
            "en": "The third place"
          },
          "body": {
            "fr": "Schultz veut faire du café un refuge entre la maison et le travail.",
            "en": "Schultz wants the cafe to be a refuge between home and work."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un besoin de lien",
            "en": "A need for connection"
          },
          "body": {
            "fr": "Dans une société pressée et isolée, les gens cherchent un endroit où s'attarder et se croiser. Le comptoir à café peut le devenir.",
            "en": "In a rushed, isolated society, people seek a place to linger and cross paths. The coffee counter can become that."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'ambiance avant la vitesse",
            "en": "Atmosphere over speed"
          },
          "body": {
            "fr": "Musique, fauteuils, odeur du grain fraîchement moulu : chaque détail invite à rester plutôt qu'à filer.",
            "en": "Music, armchairs, the smell of freshly ground beans: every detail invites you to stay rather than rush off."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Vendre du temps, pas que du café",
            "en": "Selling time, not just coffee"
          },
          "body": {
            "fr": "La valeur n'est pas seulement dans la tasse mais dans les minutes qu'on y passe. C'est ce qui fidélise vraiment.",
            "en": "The value isn't only in the cup but in the minutes spent there. That's what truly builds loyalty."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Demande-toi quel rôle social ton produit peut jouer. Un lieu ou un rituel crée un attachement qu'un simple produit n'atteint jamais.",
            "en": "Ask what social role your product can play. A place or ritual builds an attachment a mere product never reaches."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'histoire de son père",
        "en": "His father's story"
      },
      "caption": {
        "fr": "Un père blessé, sans assurance ni dignité : la blessure qui a façonné toute une entreprise. 💔",
        "en": "An injured father, no insurance, no dignity: the wound that shaped a whole company. 💔"
      },
      "tags": [
        "dignite",
        "employes",
        "valeurs",
        "Schultz"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'histoire de son père",
            "en": "His father's story"
          },
          "body": {
            "fr": "L'enfance de Schultz dans les logements sociaux de Brooklyn nourrit sa vision du travail.",
            "en": "Schultz's childhood in Brooklyn's projects fuels his vision of work."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un accident, pas de filet",
            "en": "An accident, no safety net"
          },
          "body": {
            "fr": "Chauffeur-livreur, son père se casse la cheville sur le verglas. Sans assurance ni indemnité, la famille se retrouve sans revenu.",
            "en": "A delivery driver, his father breaks his ankle on the ice. With no insurance and no compensation, the family is left with no income."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un travail sans respect",
            "en": "Work without respect"
          },
          "body": {
            "fr": "Schultz voit son père usé par des emplois ingrats qui ne l'ont jamais traité avec dignité. Cette image ne le quittera pas.",
            "en": "Schultz watches his father worn down by thankless jobs that never treated him with dignity. That image never leaves him."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Bâtir l'entreprise qu'il aurait voulue",
            "en": "Building the company he wished for"
          },
          "body": {
            "fr": "Il jure de créer une entreprise où personne ne serait laissé pour compte comme son père l'a été.",
            "en": "He vows to build a company where no one is left behind the way his father was."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Tes blessures peuvent devenir ta boussole. Ce qui t'a manqué peut définir ce que tu bâtis pour les autres.",
            "en": "Your wounds can become your compass. What you were denied can define what you build for others."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Traiter les gens en partenaires",
        "en": "Treating people as partners"
      },
      "caption": {
        "fr": "Chez Starbucks, on ne dit pas 'employés' mais 'partenaires'. Le mot n'est pas anodin. 🤝",
        "en": "At Starbucks they don't say 'employees' but 'partners'. The word isn't accidental. 🤝"
      },
      "tags": [
        "culture",
        "partenaires",
        "leadership",
        "Starbucks"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Traiter les gens en partenaires",
            "en": "Treating people as partners"
          },
          "body": {
            "fr": "Pour Schultz, la valeur pour l'actionnaire commence par la valeur donnée aux salariés.",
            "en": "For Schultz, value for shareholders starts with value given to workers."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le mot compte",
            "en": "The word matters"
          },
          "body": {
            "fr": "Appeler chacun 'partenaire' plutôt qu'employé change la relation : c'est reconnaître une part de propriété et de responsabilité commune.",
            "en": "Calling everyone a 'partner' rather than an employee changes the relationship: it acknowledges shared ownership and responsibility."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La confiance avant le profit",
            "en": "Trust before profit"
          },
          "body": {
            "fr": "Schultz mise sur l'idée qu'un partenaire fier et bien traité sert mieux le client, et donc l'entreprise.",
            "en": "Schultz bets that a proud, well-treated partner serves the customer better, and so the company."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un but commun",
            "en": "A common purpose"
          },
          "body": {
            "fr": "Schultz est convaincu qu'une équipe unie par un engagement passionné autour d'un but commun peut accomplir l'improbable.",
            "en": "Schultz is convinced that a team united by a passionate commitment to a common purpose can achieve the improbable."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La culture n'est pas un slogan. Elle se prouve par la manière dont tu nommes, traites et associes ceux qui font le travail.",
            "en": "Culture isn't a slogan. It's proven by how you name, treat, and include the people doing the work."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Bean Stock : l'action pour tous",
        "en": "Bean Stock: equity for everyone"
      },
      "caption": {
        "fr": "Et si chaque barista possédait une part de l'entreprise ? Schultz l'a fait. 📈",
        "en": "What if every barista owned a piece of the company? Schultz did it. 📈"
      },
      "tags": [
        "BeanStock",
        "actionnariat",
        "motivation",
        "Starbucks"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Bean Stock : l'action pour tous",
            "en": "Bean Stock: equity for everyone"
          },
          "body": {
            "fr": "En 1991, Starbucks donne des stock-options à l'ensemble de ses partenaires.",
            "en": "In 1991, Starbucks grants stock options to all its partners."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Même les temps partiels",
            "en": "Even part-timers"
          },
          "body": {
            "fr": "Le programme 'Bean Stock' inclut les employés à temps partiel, chose rare pour une entreprise pas encore cotée.",
            "en": "The 'Bean Stock' program includes part-time workers, rare for a company not yet public."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Aligner tout le monde",
            "en": "Aligning everyone"
          },
          "body": {
            "fr": "Si chacun possède une part, la réussite de l'entreprise devient la réussite personnelle de chacun.",
            "en": "If everyone owns a share, the company's success becomes each person's personal success."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "De l'employé au propriétaire",
            "en": "From worker to owner"
          },
          "body": {
            "fr": "Le geste transforme le rapport au travail : on ne sert pas un patron lointain, on construit sa propre valeur.",
            "en": "The move transforms the relationship to work: you're not serving a distant boss, you're building your own stake."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le partage de la richesse créée n'est pas de la charité, c'est de la stratégie : il transforme des salariés en propriétaires engagés.",
            "en": "Sharing created wealth isn't charity, it's strategy: it turns wage-earners into committed owners."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Couvrir les temps partiels",
        "en": "Covering part-timers"
      },
      "caption": {
        "fr": "Une couverture santé dès 20 h par semaine : un choix coûteux, profondément personnel. 🩺",
        "en": "Health coverage from 20 hours a week: a costly, deeply personal choice. 🩺"
      },
      "tags": [
        "sante",
        "employes",
        "valeurs",
        "Starbucks"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Couvrir les temps partiels",
            "en": "Covering part-timers"
          },
          "body": {
            "fr": "Starbucks offre une assurance santé complète même à ceux qui travaillent 20 heures par semaine.",
            "en": "Starbucks offers full health coverage even to those working 20 hours a week."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Contre l'usage",
            "en": "Against the norm"
          },
          "body": {
            "fr": "À l'époque, la plupart des entreprises excluent les temps partiels de toute couverture. Schultz fait l'inverse.",
            "en": "At the time, most companies excluded part-timers from any coverage. Schultz does the opposite."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "En écho à son père",
            "en": "Echoing his father"
          },
          "body": {
            "fr": "Se souvenant de son père blessé et sans assurance, il refuse de laisser ses partenaires dans la même situation.",
            "en": "Remembering his injured, uninsured father, he refuses to leave his partners in the same position."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un investissement, pas une dépense",
            "en": "An investment, not a cost"
          },
          "body": {
            "fr": "Schultz défend que la couverture réduit le turnover et forme une équipe plus fidèle et expérimentée.",
            "en": "Schultz argues coverage cuts turnover and builds a more loyal, experienced team."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Une valeur ne coûte vraiment que lorsqu'elle est inconfortable à tenir. C'est là qu'elle devient crédible.",
            "en": "A value only truly costs something when it's uncomfortable to keep. That's where it becomes credible."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Ne jamais brader la qualité",
        "en": "Never compromise quality"
      },
      "caption": {
        "fr": "Dire non à ce qui rapporte vite pour protéger ce qui compte : le goût. ☕",
        "en": "Saying no to easy money to protect what matters: the taste. ☕"
      },
      "tags": [
        "qualite",
        "authenticite",
        "torréfaction",
        "Starbucks"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Ne jamais brader la qualité",
            "en": "Never compromise quality"
          },
          "body": {
            "fr": "Starbucks bâtit sa marque sur un café torréfié foncé, sans concession.",
            "en": "Starbucks builds its brand on uncompromising dark-roasted coffee."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le goût d'abord",
            "en": "Taste first"
          },
          "body": {
            "fr": "Les fondateurs d'origine avaient une obsession du grain de qualité. Schultz garde cet héritage comme un non-négociable.",
            "en": "The original founders were obsessed with quality beans. Schultz keeps that heritage as a non-negotiable."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Résister aux raccourcis",
            "en": "Resisting shortcuts"
          },
          "body": {
            "fr": "Face à la pression de croître vite, il refuse les compromis qui diluent le produit, même s'ils rapporteraient à court terme.",
            "en": "Under pressure to grow fast, he refuses compromises that dilute the product, even when they'd pay off short-term."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La marque, c'est le produit",
            "en": "The brand is the product"
          },
          "body": {
            "fr": "Pour Schultz, aucune campagne marketing ne peut sauver un café médiocre. La confiance se gagne tasse après tasse.",
            "en": "For Schultz, no marketing campaign can save mediocre coffee. Trust is earned cup after cup."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Croître sans trahir son produit est le vrai test. Ce que tu refuses définit ta marque autant que ce que tu proposes.",
            "en": "Growing without betraying your product is the real test. What you refuse defines your brand as much as what you offer."
          }
        }
      ]
    }
  ],
  "losing-my-virginity": [
    {
      "concept": {
        "fr": "Screw it, let's do it",
        "en": "Screw it, let's do it"
      },
      "caption": {
        "fr": "La devise qui a porté un empire : arrête d'hésiter, lance-toi. 🚀",
        "en": "The motto behind an empire: stop hesitating, just go. 🚀"
      },
      "tags": [
        "prisederisque",
        "action",
        "etatdesprit",
        "entrepreneuriat"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Screw it, let's do it",
            "en": "Screw it, let's do it"
          },
          "body": {
            "fr": "La phrase fétiche de Branson : face au doute, il choisit l'action.",
            "en": "Branson's signature line: when in doubt, he chooses action."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ne pas sur-analyser",
            "en": "Don't over-analyze"
          },
          "body": {
            "fr": "Branson décide souvent à l'instinct plutôt que d'attendre le dossier parfait. L'excès d'analyse tue l'élan.",
            "en": "Branson often decides on instinct rather than waiting for the perfect plan. Over-analysis kills momentum."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le biais de l'action",
            "en": "A bias for action"
          },
          "body": {
            "fr": "Nombre d'aventures Virgin ont commencé par un saut avant qu'il n'ait toutes les réponses.",
            "en": "Many Virgin ventures began with a leap before he had all the answers."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La devise",
            "en": "The motto"
          },
          "body": {
            "fr": "« Screw it, let's do it. »",
            "en": "\"Screw it, let's do it.\""
          },
          "attribution": {
            "fr": "Richard Branson",
            "en": "Richard Branson"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Choisis une décision que tu repousses et fais le premier petit pas aujourd'hui, avant de te sentir « prêt ».",
            "en": "Pick a decision you keep postponing and take the first small step today, before you feel \"ready\"."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Pourquoi « Virgin » ?",
        "en": "Why \"Virgin\"?"
      },
      "caption": {
        "fr": "Le nom d'une des plus grandes marques du monde vient d'un aveu d'inexpérience. 🌱",
        "en": "One of the world's biggest brands is named after an admission of inexperience. 🌱"
      },
      "tags": [
        "marque",
        "debutant",
        "naming",
        "virgin"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'origine du nom Virgin",
            "en": "The origin of the name Virgin"
          },
          "body": {
            "fr": "Branson et sa bande étaient de parfaits novices en affaires : ils l'ont assumé dans leur nom.",
            "en": "Branson and his crew were complete beginners in business, and they owned it in their name."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des débutants complets",
            "en": "Total beginners"
          },
          "body": {
            "fr": "Au moment de vendre des disques par correspondance, une amie suggéra « Virgin », car ils étaient vierges en affaires.",
            "en": "As they set up the record mail-order business, a friend suggested \"Virgin\" because they were virgins at business."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'inexpérience comme atout",
            "en": "Inexperience as an asset"
          },
          "body": {
            "fr": "Ne rien savoir des « règles » du secteur leur permettait de tout questionner et de faire autrement.",
            "en": "Knowing none of the industry's \"rules\" let them question everything and do things differently."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un nom qui provoque",
            "en": "A name that provokes"
          },
          "body": {
            "fr": "Le nom était osé, mémorable et impertinent : exactement l'esprit que Branson voulait donner à la marque.",
            "en": "The name was cheeky, memorable and irreverent, exactly the spirit Branson wanted for the brand."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ton manque d'expérience peut être un avantage : tu vois ce que les initiés ne remettent plus en question.",
            "en": "Your lack of experience can be an edge: you see what insiders have stopped questioning."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Protéger le côté baissier",
        "en": "Protect the downside"
      },
      "caption": {
        "fr": "Branson prend des paris énormes, mais jamais sans filet. 🪂",
        "en": "Branson takes huge bets, but never without a safety net. 🪂"
      },
      "tags": [
        "risque",
        "strategie",
        "downside",
        "decision"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Oser, mais couvrir le risque",
            "en": "Be bold, but cap the risk"
          },
          "body": {
            "fr": "Le secret des paris de Branson : viser gros tout en limitant ce qu'on peut perdre.",
            "en": "The secret behind Branson's bets: aim big while limiting what you can lose."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le pari de l'avion",
            "en": "The airline gamble"
          },
          "body": {
            "fr": "Pour lancer Virgin Atlantic, Branson négocie avec Boeing la possibilité de rendre l'avion au bout d'un an si l'aventure échoue.",
            "en": "To launch Virgin Atlantic, Branson negotiated with Boeing the option to return the plane after a year if the venture failed."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ne jamais tout risquer",
            "en": "Never bet the whole company"
          },
          "body": {
            "fr": "Il structure ses paris pour qu'un échec ne fasse pas couler l'ensemble de Virgin.",
            "en": "He structures his bets so a single failure can't sink the whole of Virgin."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La question clé",
            "en": "The key question"
          },
          "body": {
            "fr": "Avant de se lancer, Branson se demande : « Que se passe-t-il si tout tourne mal ? » et rend ce scénario survivable.",
            "en": "Before diving in, Branson asks \"what if it all goes wrong?\" and makes that scenario survivable."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant un gros pari, définis ta perte maximale acceptable et négocie une porte de sortie.",
            "en": "Before a big bet, define your maximum acceptable loss and negotiate an exit."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La prophétie du directeur",
        "en": "The headmaster's prophecy"
      },
      "caption": {
        "fr": "À 16 ans il quitte l'école ; son directeur lui prédit la prison ou la fortune. 🎓",
        "en": "At 16 he leaves school; his headmaster predicts prison or a fortune. 🎓"
      },
      "tags": [
        "ecole",
        "dyslexie",
        "debut",
        "student"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Quitter l'école pour créer",
            "en": "Leaving school to build"
          },
          "body": {
            "fr": "Branson abandonne les études à 16 ans pour lancer son magazine Student.",
            "en": "Branson dropped out at 16 to launch his magazine, Student."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Nul en classe, pas dans la vie",
            "en": "Poor at school, not at life"
          },
          "body": {
            "fr": "Dyslexique, il souffrait à l'école. Plus tard encore, en réunion, il ne saisissait pas la différence entre bénéfice net et brut.",
            "en": "Dyslexic, he struggled at school. Even later, in a meeting, he didn't grasp the difference between net and gross profit."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Student, sa première entreprise",
            "en": "Student, his first venture"
          },
          "body": {
            "fr": "Adolescent, il monte un magazine national et démarche par téléphone de vraies stars et de vrais annonceurs.",
            "en": "As a teenager he built a national magazine, cold-calling real stars and advertisers by phone."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "L'adieu du directeur",
            "en": "The headmaster's farewell"
          },
          "body": {
            "fr": "« Je prédis que tu finiras soit en prison, soit millionnaire. »",
            "en": "\"I predict that you will either go to prison or become a millionaire.\""
          },
          "attribution": {
            "fr": "Le directeur de Branson, cité dans le livre",
            "en": "Branson's headmaster, as quoted in the book"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Les diplômes ne mesurent pas ton potentiel : identifie ta vraie force et construis autour.",
            "en": "Grades don't measure your potential: find your real strength and build around it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le petit contre les géants",
        "en": "The underdog vs the giants"
      },
      "caption": {
        "fr": "Une compagnie d'un seul avion défie British Airways… et gagne au tribunal. ✈️",
        "en": "A one-plane airline takes on British Airways… and wins in court. ✈️"
      },
      "tags": [
        "underdog",
        "concurrence",
        "virginatlantic",
        "combat"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Défier plus gros que soi",
            "en": "Taking on bigger players"
          },
          "body": {
            "fr": "Virgin Atlantic démarre minuscule face au mastodonte British Airways.",
            "en": "Virgin Atlantic started tiny against the giant British Airways."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Petit mais agile",
            "en": "Small but nimble"
          },
          "body": {
            "fr": "Branson mise sur le service, l'audace et le plaisir pour se démarquer d'un rival bien plus riche.",
            "en": "Branson bet on service, boldness and fun to stand out from a far wealthier rival."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La campagne des « dirty tricks »",
            "en": "The \"dirty tricks\" campaign"
          },
          "body": {
            "fr": "British Airways mène une campagne de dénigrement contre Virgin ; Branson riposte en justice.",
            "en": "British Airways ran a smear campaign against Virgin; Branson fought back in court."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La victoire en diffamation",
            "en": "Winning the libel case"
          },
          "body": {
            "fr": "Il gagne le procès en diffamation et partage les dommages-intérêts avec ses employés : le « BA bonus ».",
            "en": "He won the libel case and shared the damages with his staff, the so-called \"BA bonus\"."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Face à un géant, transforme ta petite taille en agilité et défends ta réputation sans reculer.",
            "en": "Against a giant, turn your small size into agility and defend your reputation without flinching."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'aventure comme carburant",
        "en": "Adventure as fuel"
      },
      "caption": {
        "fr": "Traverser l'Atlantique en ballon, frôler la mort… et nourrir une marque. 🎈",
        "en": "Crossing the Atlantic by balloon, brushing death… and feeding a brand. 🎈"
      },
      "tags": [
        "aventure",
        "ballon",
        "records",
        "vie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Vivre à fond, pas seulement gérer",
            "en": "Live fully, don't just manage"
          },
          "body": {
            "fr": "Pour Branson, les records et les aventures font partie intégrante de sa vie et de Virgin.",
            "en": "For Branson, record attempts and adventures are inseparable from his life and from Virgin."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Traversées en ballon",
            "en": "Balloon crossings"
          },
          "body": {
            "fr": "Il réalise les premières traversées de l'Atlantique puis du Pacifique en montgolfière, au péril de sa vie.",
            "en": "He made the first Atlantic then Pacific hot-air balloon crossings, risking his life."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Frôler la mort",
            "en": "Brushes with death"
          },
          "body": {
            "fr": "Le livre raconte des sauvetages en mer et des atterrissages catastrophiques dont il sort de justesse.",
            "en": "The book recounts sea rescues and crash landings he barely survived."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'aventure sert la marque",
            "en": "Adventure serves the brand"
          },
          "body": {
            "fr": "Ces exploits médiatisés donnent à Virgin une image d'audace impossible à acheter en publicité.",
            "en": "These publicized feats gave Virgin a daring image money couldn't buy in advertising."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne sépare pas ta soif de vivre de ton travail : ce qui te fait vibrer peut aussi te distinguer.",
            "en": "Don't split your appetite for life from your work: what thrills you can also set you apart."
          }
        }
      ]
    }
  ],
  "principles-dalio": [
    {
      "concept": {
        "fr": "Embrasser la réalité",
        "en": "Embrace Reality"
      },
      "caption": {
        "fr": "Dalio ne cherche pas ce qui devrait être vrai, mais ce qui EST vrai. 🔍",
        "en": "Dalio doesn't chase what should be true — only what IS true. 🔍"
      },
      "tags": [
        "hyperrealism",
        "truth",
        "reality",
        "raydalio"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Embrasse la réalité et compose avec elle",
            "en": "Embrace Reality and Deal With It"
          },
          "body": {
            "fr": "Le principe fondateur de Dalio : voir le monde tel qu'il est, pas tel qu'on voudrait qu'il soit.",
            "en": "Dalio's founding principle: see the world as it is, not as you wish it were."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'hyperréalisme",
            "en": "Hyperrealism"
          },
          "body": {
            "fr": "Comprendre et accepter la réalité, plutôt que de la nier, est la base de toute bonne décision.",
            "en": "Understanding and accepting reality, rather than denying it, is the basis of every good decision."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La vérité d'abord",
            "en": "Truth First"
          },
          "body": {
            "fr": "Pour Dalio, une compréhension exacte de la réalité est la fondation de tout bon résultat.",
            "en": "For Dalio, an accurate understanding of reality is the foundation of any good outcome."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le souhait n'est pas le réel",
            "en": "Wishing Isn't Reality"
          },
          "body": {
            "fr": "Sépare ce que tu souhaites être vrai de ce qui est réellement vrai : les deux diffèrent souvent.",
            "en": "Separate what you wish were true from what is actually true — the two are often different."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Sur la vérité",
            "en": "On Truth"
          },
          "body": {
            "fr": "La vérité — plus précisément, une compréhension exacte de la réalité — est la fondation essentielle pour produire de bons résultats.",
            "en": "Truth — more precisely, an accurate understanding of reality — is the essential foundation for producing good outcomes."
          },
          "attribution": {
            "fr": "Ray Dalio, Principles",
            "en": "Ray Dalio, Principles"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant d'agir, demande-toi : est-ce vrai, ou est-ce ce que j'aimerais qui soit vrai ?",
            "en": "Before acting, ask yourself: is this true, or is it what I'd like to be true?"
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Douleur + Réflexion = Progrès",
        "en": "Pain + Reflection = Progress"
      },
      "caption": {
        "fr": "La douleur seule ne t'apprend rien. C'est la réflexion qui la transforme en progrès. 🧠",
        "en": "Pain alone teaches nothing. Reflection is what turns it into progress. 🧠"
      },
      "tags": [
        "growth",
        "reflection",
        "learning",
        "raydalio"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Douleur + Réflexion = Progrès",
            "en": "Pain + Reflection = Progress"
          },
          "body": {
            "fr": "La formule d'apprentissage la plus célèbre de Dalio, forgée dans ses propres échecs.",
            "en": "Dalio's most famous learning formula, forged from his own failures."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La douleur est un signal",
            "en": "Pain Is a Signal"
          },
          "body": {
            "fr": "Chaque erreur douloureuse pointe vers une part de la réalité que tu n'avais pas comprise.",
            "en": "Every painful mistake points to a piece of reality you hadn't understood."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Réfléchir change tout",
            "en": "Reflection Changes Everything"
          },
          "body": {
            "fr": "Sans réflexion, la douleur se répète. Avec elle, elle devient une leçon et un principe.",
            "en": "Without reflection, pain repeats. With it, pain becomes a lesson and a principle."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Accueillir les problèmes",
            "en": "Welcome Problems"
          },
          "body": {
            "fr": "Dalio apprend à voir les moments difficiles comme des énigmes à résoudre, pas comme des menaces.",
            "en": "Dalio learns to see hard moments as puzzles to solve, not as threats."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La formule",
            "en": "The Formula"
          },
          "body": {
            "fr": "Douleur + Réflexion = Progrès.",
            "en": "Pain + Reflection = Progress."
          },
          "attribution": {
            "fr": "Ray Dalio, Principles",
            "en": "Ray Dalio, Principles"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Après chaque échec, prends le temps de réfléchir et d'en tirer un principe réutilisable.",
            "en": "After every failure, take time to reflect and extract a reusable principle."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le processus en 5 étapes",
        "en": "The Five-Step Process"
      },
      "caption": {
        "fr": "La méthode de Dalio pour obtenir ce que tu veux, étape par étape. 🎯",
        "en": "Dalio's method for getting what you want, step by step. 🎯"
      },
      "tags": [
        "goals",
        "process",
        "execution",
        "raydalio"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le processus en 5 étapes",
            "en": "The Five-Step Process"
          },
          "body": {
            "fr": "Dalio résume la réussite en un cycle de cinq étapes à répéter encore et encore.",
            "en": "Dalio distills success into a five-step loop you repeat again and again."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "1. Fixe des objectifs clairs",
            "en": "1. Set Clear Goals"
          },
          "body": {
            "fr": "Choisis ce que tu veux vraiment. Tu peux avoir presque tout, mais pas tout à la fois.",
            "en": "Choose what you truly want. You can have almost anything, but not everything at once."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "2. Identifie les problèmes",
            "en": "2. Identify Problems"
          },
          "body": {
            "fr": "Repère les obstacles entre toi et ton but, et ne les tolère pas.",
            "en": "Spot the obstacles between you and your goal — and don't tolerate them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "3. Diagnostique la racine",
            "en": "3. Diagnose Root Causes"
          },
          "body": {
            "fr": "Ne colmate pas les symptômes : remonte jusqu'à la cause profonde du problème.",
            "en": "Don't patch symptoms — trace the problem back to its root cause."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "4. Conçois, puis exécute",
            "en": "4. Design, Then Do"
          },
          "body": {
            "fr": "Conçois un plan pour lever l'obstacle (étape 4), puis exécute-le avec discipline jusqu'au résultat (étape 5).",
            "en": "Design a plan to remove the obstacle (step 4), then execute it with discipline through to results (step 5)."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ces étapes sont distinctes : ne mélange pas diagnostiquer et concevoir, ni concevoir et faire.",
            "en": "These steps are distinct: don't mix diagnosing with designing, or designing with doing."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Être radicalement ouvert d'esprit",
        "en": "Radical Open-Mindedness"
      },
      "caption": {
        "fr": "Deux barrières t'empêchent de voir la vérité : ton ego et tes angles morts. 👀",
        "en": "Two barriers keep you from the truth: your ego and your blind spots. 👀"
      },
      "tags": [
        "openmindedness",
        "ego",
        "feedback",
        "raydalio"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Être radicalement ouvert d'esprit",
            "en": "Be Radically Open-Minded"
          },
          "body": {
            "fr": "Dalio identifie deux obstacles majeurs à une bonne pensée — et comment les dépasser.",
            "en": "Dalio names two big obstacles to good thinking — and how to get past them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La barrière de l'ego",
            "en": "The Ego Barrier"
          },
          "body": {
            "fr": "Ton besoin inconscient d'avoir raison te fait percevoir la critique comme une attaque.",
            "en": "Your subconscious need to be right makes you treat criticism as an attack."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La barrière de l'angle mort",
            "en": "The Blind Spot Barrier"
          },
          "body": {
            "fr": "Chacun voit le monde de façon limitée ; ce que tu ne peux pas voir, d'autres le voient.",
            "en": "Everyone sees the world in a limited way; what you can't see, others can."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le désaccord réfléchi",
            "en": "Thoughtful Disagreement"
          },
          "body": {
            "fr": "Cherche les gens intelligents qui ne sont pas d'accord avec toi, pour voir à travers leurs yeux.",
            "en": "Seek out smart people who disagree with you, to see through their eyes."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Remplace « J'ai raison » par « Comment saurais-je si j'ai tort ? ».",
            "en": "Replace \"I'm right\" with \"How do I know I'm not wrong?\""
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La méritocratie des idées",
        "en": "The Idea Meritocracy"
      },
      "caption": {
        "fr": "Chez Bridgewater, la meilleure idée l'emporte — pas la personne la plus haut placée. ⚖️",
        "en": "At Bridgewater, the best idea wins — not the most senior person. ⚖️"
      },
      "tags": [
        "ideameritocracy",
        "decisions",
        "transparency",
        "raydalio"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La méritocratie des idées",
            "en": "The Idea Meritocracy"
          },
          "body": {
            "fr": "Le système que Dalio a bâti pour que les meilleures idées l'emportent, d'où qu'elles viennent.",
            "en": "The system Dalio built so the best ideas win, no matter who they come from."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ni autocratie, ni démocratie",
            "en": "Neither Autocracy nor Democracy"
          },
          "body": {
            "fr": "Ce n'est pas le chef qui tranche, ni un vote égalitaire : c'est le mérite des idées qui pèse.",
            "en": "Not the boss deciding, nor one-person-one-vote: it's the merit of ideas that carries weight."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le poids de la crédibilité",
            "en": "Believability Weighting"
          },
          "body": {
            "fr": "L'avis de ceux qui ont un vrai historique de réussite dans le domaine pèse davantage.",
            "en": "Opinions from those with a proven track record in the area count for more."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La transparence radicale",
            "en": "Radical Transparency"
          },
          "body": {
            "fr": "Tout est mis sur la table et souvent enregistré, pour que les désaccords se règlent au grand jour.",
            "en": "Everything is put on the table and often recorded, so disagreements get resolved in the open."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Pour décider en groupe, demande-toi : de qui l'avis est-il le plus crédible sur CE sujet précis ?",
            "en": "To decide as a group, ask: whose opinion is most believable on THIS specific topic?"
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Se regarder comme une machine",
        "en": "See Yourself as a Machine"
      },
      "caption": {
        "fr": "Prends de la hauteur et regarde ta vie comme une machine à améliorer. ⚙️",
        "en": "Step back and look at your life as a machine you can improve. ⚙️"
      },
      "tags": [
        "higherlevel",
        "selfawareness",
        "systems",
        "raydalio"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Regarde-toi comme une machine",
            "en": "See Yourself as a Machine"
          },
          "body": {
            "fr": "Dalio conseille de sortir de soi et d'observer sa situation d'en haut, comme un système.",
            "en": "Dalio advises stepping outside yourself and viewing your situation from above, like a system."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une machine qui produit des résultats",
            "en": "A Machine Producing Outcomes"
          },
          "body": {
            "fr": "Tes objectifs et ta réalité forment une machine : compare le résultat obtenu à celui visé.",
            "en": "Your goals and your reality form a machine: compare the outcome you got to the one you aimed for."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Penser au niveau supérieur",
            "en": "Higher-Level Thinking"
          },
          "body": {
            "fr": "Prends de la hauteur pour te voir toi-même et tes problèmes de façon objective, sans émotion.",
            "en": "Rise above to see yourself and your problems objectively, without emotion."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Concepteur et opérateur",
            "en": "Designer and Operator"
          },
          "body": {
            "fr": "Distingue le « toi » qui conçoit la machine du « toi » qui y travaille, et juge les deux honnêtement.",
            "en": "Separate the \"you\" who designs the machine from the \"you\" who works in it, and judge both honestly."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Quand un résultat déçoit, ne te blâme pas seulement : demande-toi quelle pièce de la machine ajuster.",
            "en": "When an outcome disappoints, don't just blame yourself: ask which part of the machine to adjust."
          }
        }
      ]
    }
  ],
  "carnegie-autobiography": [
    {
      "concept": {
        "fr": "Saisir la première marche",
        "en": "Seizing the first rung"
      },
      "caption": {
        "fr": "De bobineur à 1,20$/semaine à magnat de l'acier : tout commence par saisir la première marche. 🪜",
        "en": "From bobbin boy at $1.20 a week to steel magnate: it all starts with taking the first rung. 🪜"
      },
      "tags": [
        "Carnegie",
        "opportunity",
        "selfmade",
        "career"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Dire oui à la première marche",
            "en": "Say yes to the first rung"
          },
          "body": {
            "fr": "Émigré écossais sans le sou, Carnegie transforme chaque petit emploi en tremplin.",
            "en": "A penniless Scottish emigrant, Carnegie turned every small job into a stepping stone."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Bobineur à 13 ans",
            "en": "Bobbin boy at 13"
          },
          "body": {
            "fr": "Installé à Allegheny, près de Pittsburgh, il gagne 1,20$ par semaine dans une filature de coton. Aucun travail n'est jugé indigne.",
            "en": "Settled in Allegheny, near Pittsburgh, he earns $1.20 a week in a cotton mill. No work is beneath him."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le télégraphe à l'oreille",
            "en": "Telegraphy by ear"
          },
          "body": {
            "fr": "Devenu messager télégraphiste, il s'entraîne à lire les signaux au son, parmi les premiers en Amérique à le faire.",
            "en": "As a telegraph messenger, he trains himself to read the signals by sound, among the first in America to do so."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Thomas Scott le remarque",
            "en": "Thomas Scott notices him"
          },
          "body": {
            "fr": "Sa fiabilité attire Thomas Scott, du Pennsylvania Railroad, qui le prend sous son aile. La compétence ouvre les portes.",
            "en": "His reliability draws Thomas Scott of the Pennsylvania Railroad, who becomes his mentor. Skill opens doors."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Rendez-vous indispensable",
            "en": "Make yourself indispensable"
          },
          "body": {
            "fr": "Faites plus que la tâche demandée. Celui qu'on remarque est celui qui prend l'initiative avant qu'on la lui demande.",
            "en": "Do more than the task asks. The one who gets noticed is the one who takes initiative before being told."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La dette d'un livre emprunté",
        "en": "The debt of a borrowed book"
      },
      "caption": {
        "fr": "Un homme a prêté ses livres à des ouvriers. Carnegie a passé sa vie à rembourser ce cadeau. 📚",
        "en": "One man lent his books to working boys. Carnegie spent his life repaying that gift. 📚"
      },
      "tags": [
        "libraries",
        "education",
        "gratitude",
        "philanthropy"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La bibliothèque qui a tout changé",
            "en": "The library that changed everything"
          },
          "body": {
            "fr": "Jeune ouvrier sans accès aux livres, Carnegie rencontre le colonel Anderson.",
            "en": "A young laborer with no access to books, Carnegie meets Colonel Anderson."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "400 livres, chaque samedi",
            "en": "400 books, every Saturday"
          },
          "body": {
            "fr": "Le colonel James Anderson ouvrait sa bibliothèque privée aux jeunes travailleurs. Carnegie empruntait un livre chaque samedi et dévorait tout.",
            "en": "Colonel James Anderson opened his private library to working boys. Carnegie borrowed a book each Saturday and devoured them all."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une promesse silencieuse",
            "en": "A silent promise"
          },
          "body": {
            "fr": "Il se jura que s'il devenait riche un jour, il offrirait aux autres le même accès au savoir qu'il avait reçu.",
            "en": "He vowed that if he ever grew rich, he would give others the same access to knowledge he had been given."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des milliers de bibliothèques",
            "en": "Thousands of libraries"
          },
          "body": {
            "fr": "Devenu fortuné, il finança des milliers de bibliothèques publiques gratuites. La dette fut remboursée mille fois.",
            "en": "Once wealthy, he funded thousands of free public libraries. The debt was repaid a thousandfold."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "L'accès crée des destins",
            "en": "Access creates futures"
          },
          "body": {
            "fr": "Ce qui vous a été offert gratuitement, offrez-le à votre tour. Le savoir partagé se multiplie.",
            "en": "What was given to you freely, pass on in turn. Shared knowledge multiplies."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'argent qui travaille pour vous",
        "en": "Money that works for you"
      },
      "caption": {
        "fr": "Le jour où Carnegie a touché un revenu sans lever le petit doigt, sa vie a basculé. 🪿",
        "en": "The day Carnegie earned money without lifting a finger, everything changed. 🪿"
      },
      "tags": [
        "investing",
        "capital",
        "wealth",
        "Carnegie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La poule aux œufs d'or",
            "en": "The goose that lays golden eggs"
          },
          "body": {
            "fr": "Carnegie découvre qu'un capital placé peut rapporter pendant qu'il dort.",
            "en": "Carnegie discovers that invested capital can earn while he sleeps."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le premier dividende",
            "en": "The first dividend"
          },
          "body": {
            "fr": "Il achète dix actions de l'Adams Express, sa mère hypothéquant la maison familiale pour réunir les 500$. À l'arrivée de son premier chèque de dividende, une révélation le frappe.",
            "en": "He buys ten shares of Adams Express, his mother mortgaging the family home to raise the $500. When his first dividend check arrives, a revelation strikes him."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le capital ne dort jamais",
            "en": "Capital never sleeps"
          },
          "body": {
            "fr": "Il comprend qu'un revenu peut naître de l'argent placé, et pas seulement du travail de ses mains.",
            "en": "He grasps that income can come from money invested, not only from the labor of his hands."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ses propres mots",
            "en": "In his own words"
          },
          "body": {
            "fr": "« Eurêka ! Voici la poule aux œufs d'or. »",
            "en": "\"Eureka! Here's the goose that lays the golden eggs.\""
          },
          "attribution": {
            "fr": "Andrew Carnegie",
            "en": "Andrew Carnegie"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Faites travailler votre argent",
            "en": "Put your money to work"
          },
          "body": {
            "fr": "Le salaire nourrit ; le capital libère. Placez une part de ce que vous gagnez pour qu'il produise à son tour.",
            "en": "Wages feed you; capital frees you. Set aside part of what you earn so it can produce in turn."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Tous ses œufs dans un panier",
        "en": "All your eggs in one basket"
      },
      "caption": {
        "fr": "Le conseil de Carnegie va à l'inverse de tout ce qu'on vous a appris sur le risque. 🧺",
        "en": "Carnegie's advice is the opposite of everything you've been told about risk. 🧺"
      },
      "tags": [
        "focus",
        "business",
        "strategy",
        "Carnegie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Un seul panier, bien surveillé",
            "en": "One basket, closely watched"
          },
          "body": {
            "fr": "Contre la sagesse commune de diversifier, Carnegie prône la concentration.",
            "en": "Against the common wisdom of diversifying, Carnegie preaches concentration."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ne vous dispersez pas",
            "en": "Don't scatter"
          },
          "body": {
            "fr": "On dit de répartir les risques. Carnegie constate que les grandes fortunes se bâtissent en se concentrant sur une seule chose.",
            "en": "People say to spread your risk. Carnegie observes that great fortunes are built by concentrating on one thing."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Surveillez le panier",
            "en": "Watch the basket"
          },
          "body": {
            "fr": "Concentrer ne suffit pas : il faut veiller intensément sur son unique affaire et la connaître mieux que quiconque.",
            "en": "Concentrating isn't enough: you must watch your one venture closely and know it better than anyone."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ses propres mots",
            "en": "In his own words"
          },
          "body": {
            "fr": "« Mettez tous vos bons œufs dans le même panier, puis surveillez ce panier. »",
            "en": "\"Put all good eggs in one basket, and then watch that basket.\""
          },
          "attribution": {
            "fr": "Andrew Carnegie",
            "en": "Andrew Carnegie"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Concentrez, puis veillez",
            "en": "Concentrate, then watch"
          },
          "body": {
            "fr": "Mieux vaut maîtriser une chose à fond que d'en effleurer dix. Choisissez votre panier et ne le quittez pas des yeux.",
            "en": "Better to master one thing fully than to dabble in ten. Choose your basket and never take your eyes off it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "S'entourer de meilleurs que soi",
        "en": "Surround yourself with better people"
      },
      "caption": {
        "fr": "Le secret de Carnegie n'était pas d'être le plus intelligent de la pièce. 🤝",
        "en": "Carnegie's secret wasn't being the smartest person in the room. 🤝"
      },
      "tags": [
        "leadership",
        "team",
        "delegation",
        "Carnegie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "S'entourer de plus forts que soi",
            "en": "Recruit people better than you"
          },
          "body": {
            "fr": "Carnegie attribuait son succès aux talents qu'il savait réunir autour de lui.",
            "en": "Carnegie credited his success to the talents he knew how to gather around him."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Reconnaître ses limites",
            "en": "Know your limits"
          },
          "body": {
            "fr": "Carnegie ne se prétendait ni le meilleur sidérurgiste ni le meilleur ingénieur. Sa force : repérer le talent chez les autres.",
            "en": "Carnegie never claimed to be the best steelmaker or engineer. His strength was spotting talent in others."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le pouvoir du partenariat",
            "en": "The power of partnership"
          },
          "body": {
            "fr": "Il s'associait aux hommes les plus capables et leur donnait des parts, alignant leurs intérêts sur la réussite commune.",
            "en": "He partnered with the ablest men and gave them shares, aligning their interests with shared success."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "L'épitaphe qu'il s'était choisie",
            "en": "The epitaph he chose for himself"
          },
          "body": {
            "fr": "« Ci-gît un homme qui sut s'attacher le service d'hommes plus habiles que lui-même. »",
            "en": "\"Here lies a man who knew how to enlist in his service better men than himself.\""
          },
          "attribution": {
            "fr": "Andrew Carnegie",
            "en": "Andrew Carnegie"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Entourez-vous mieux",
            "en": "Surround yourself better"
          },
          "body": {
            "fr": "Un leader n'a pas à tout savoir. Recrutez plus fort que vous et donnez-leur les moyens de briller.",
            "en": "A leader needn't know everything. Hire people stronger than you and give them room to shine."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le danger d'adorer l'argent",
        "en": "The danger of worshipping money"
      },
      "caption": {
        "fr": "À 33 ans, déjà riche, Carnegie s'écrit une note d'avertissement à lui-même. 📝",
        "en": "At 33, already rich, Carnegie wrote himself a warning note. 📝"
      },
      "tags": [
        "money",
        "purpose",
        "values",
        "Carnegie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La note qu'il s'écrit à lui-même",
            "en": "The note he wrote to himself"
          },
          "body": {
            "fr": "En 1868, Carnegie couche sur papier une mise en garde contre sa propre fortune.",
            "en": "In 1868, Carnegie put on paper a warning against his own fortune."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un mémo secret",
            "en": "A secret memo"
          },
          "body": {
            "fr": "Gagnant déjà 50 000$ par an, il s'écrit de plafonner ses revenus et de consacrer le surplus au bien des autres.",
            "en": "Already earning $50,000 a year, he writes to cap his income and devote the surplus to the good of others."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'idole avilissante",
            "en": "The debasing idol"
          },
          "body": {
            "fr": "Il prévient qu'il n'est pas d'idole plus dégradante que le culte de l'argent ; s'y vouer trop longtemps corrompt le caractère.",
            "en": "He warns there is no idol more debasing than the worship of money; serving it too long degrades the character."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un plan de sens",
            "en": "A plan for meaning"
          },
          "body": {
            "fr": "Il projette de se retirer des affaires pour se cultiver et servir, refusant de vivre seulement pour amasser.",
            "en": "He plans to retire from business to educate himself and serve, refusing to live merely to accumulate."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "L'argent est un moyen",
            "en": "Money is a means"
          },
          "body": {
            "fr": "Fixez-vous un « assez ». La richesse sans but plus grand qu'elle-même finit par rétrécir celui qui la poursuit.",
            "en": "Set yourself an 'enough.' Wealth with no purpose larger than itself ends up shrinking the one who chases it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Mourir riche est une honte",
        "en": "To die rich is a disgrace"
      },
      "caption": {
        "fr": "Pour Carnegie, laisser une fortune à sa mort était un échec, pas une réussite. 💰",
        "en": "For Carnegie, dying with a fortune was a failure, not a triumph. 💰"
      },
      "tags": [
        "philanthropy",
        "giving",
        "legacy",
        "Carnegie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'évangile de la richesse",
            "en": "The Gospel of Wealth"
          },
          "body": {
            "fr": "Carnegie voit le riche comme un simple gérant de la fortune de la société.",
            "en": "Carnegie sees the rich man as a mere steward of society's wealth."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Dépositaire, pas propriétaire",
            "en": "Trustee, not owner"
          },
          "body": {
            "fr": "Le riche n'est qu'un administrateur du surplus ; son devoir est de l'employer pour le bien commun.",
            "en": "The rich man is only a trustee of the surplus; his duty is to use it for the common good."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Donner de son vivant",
            "en": "Give while you live"
          },
          "body": {
            "fr": "Léguer sa fortune ou la laisser à l'État, c'est se dérober. Il faut la distribuer avec sagesse, soi-même, tant qu'on vit.",
            "en": "To bequeath wealth or leave it to the state is to dodge the duty. Distribute it wisely, yourself, while you live."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Aider à s'aider soi-même",
            "en": "Help people help themselves"
          },
          "body": {
            "fr": "Financer bibliothèques, écoles et universités : donner des échelles pour monter, non l'aumône qui entretient.",
            "en": "Fund libraries, schools, universities: give ladders to climb, not alms that merely sustain."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ses propres mots",
            "en": "In his own words"
          },
          "body": {
            "fr": "« L'homme qui meurt ainsi riche meurt dans la honte. »",
            "en": "\"The man who dies thus rich dies disgraced.\""
          },
          "attribution": {
            "fr": "Andrew Carnegie",
            "en": "Andrew Carnegie"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "La richesse oblige",
            "en": "Wealth obligates"
          },
          "body": {
            "fr": "La vraie réussite n'est pas ce qu'on accumule mais ce qu'on rend. Distribuez de votre vivant, avec discernement.",
            "en": "True success is not what you pile up but what you give back. Distribute in your lifetime, with judgment."
          }
        }
      ]
    }
  ],
  "my-life-and-work": [
    {
      "concept": {
        "fr": "Le service avant le profit",
        "en": "Service before profit"
      },
      "caption": {
        "fr": "Pour Ford, l'argent n'est jamais le but : c'est la récompense du service rendu. 🔧",
        "en": "For Ford, money is never the goal — it's the reward for service rendered. 🔧"
      },
      "tags": [
        "service",
        "profit",
        "ford",
        "business"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le profit suit le service",
            "en": "Profit follows service"
          },
          "body": {
            "fr": "Ford renverse la logique : on ne bâtit pas une entreprise pour gagner de l'argent, on gagne de l'argent en servant bien.",
            "en": "Ford flips the logic: you don't build a business to make money, you make money by serving well."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'argent est un résultat",
            "en": "Money is a result"
          },
          "body": {
            "fr": "Selon Ford, l'argent vient naturellement comme conséquence du service. En faire l'objectif premier, c'est mettre la charrue avant les bœufs.",
            "en": "For Ford, money comes naturally as a result of service. Making it the first aim is putting the cart before the horse."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une pauvre affaire",
            "en": "A poor kind of business"
          },
          "body": {
            "fr": "Une affaire qui ne produit que de l'argent, écrit Ford, est une bien pauvre affaire : elle ne crée aucune valeur durable pour les gens.",
            "en": "A business that makes nothing but money, Ford writes, is a poor kind of business: it creates no lasting value for people."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Donner plus pour un dollar",
            "en": "Give more for a dollar"
          },
          "body": {
            "fr": "Ford valorise celui qui cherche combien il peut donner pour un dollar, plutôt que combien peu il peut donner.",
            "en": "Ford praises the one who asks how much he can give for a dollar, rather than how little he can give."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ce qu'en dit Ford",
            "en": "In Ford's words"
          },
          "body": {
            "fr": "« Une affaire qui ne produit que de l'argent est une bien pauvre affaire. »",
            "en": "\"A business that makes nothing but money is a poor kind of business.\""
          },
          "attribution": {
            "fr": "Henry Ford, My Life and Work",
            "en": "Henry Ford, My Life and Work"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Concentre-toi sur la valeur réelle que tu apportes ; le profit devient la conséquence, pas l'objectif.",
            "en": "Focus on the real value you deliver; profit becomes the consequence, not the objective."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Baisser les prix, élargir le marché",
        "en": "Lower prices, widen the market"
      },
      "caption": {
        "fr": "Ford ne montait pas ses prix quand la demande grimpait : il les baissait. 📉",
        "en": "Ford didn't raise prices when demand climbed — he cut them. 📉"
      },
      "tags": [
        "prix",
        "volume",
        "modelT",
        "strategy"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Baisser le prix, pas le monter",
            "en": "Cut the price, don't raise it"
          },
          "body": {
            "fr": "La stratégie centrale de Ford : réduire le prix, étendre les opérations, améliorer le produit.",
            "en": "Ford's core strategy: reduce the price, extend the operations, improve the product."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le prix crée le marché",
            "en": "Price creates the market"
          },
          "body": {
            "fr": "En abaissant sans cesse le prix de la Model T, Ford met la voiture à la portée de millions de gens, pas d'une élite.",
            "en": "By steadily lowering the Model T's price, Ford put the car within reach of millions, not an elite."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le volume finance la baisse",
            "en": "Volume funds the cut"
          },
          "body": {
            "fr": "Plus il vend, plus il produit à bas coût ; ces économies servent à baisser encore le prix, dans un cercle vertueux.",
            "en": "The more he sells, the cheaper he produces; those savings fund yet another price cut, in a virtuous circle."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Contre l'instinct du marché",
            "en": "Against market instinct"
          },
          "body": {
            "fr": "Ford refuse de profiter d'une forte demande pour gonfler les prix : il fixe le prix bas d'abord et force ensuite les coûts à suivre.",
            "en": "Ford refuses to exploit high demand by inflating prices: he sets the price low first, then forces costs to follow."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Un prix accessible peut être un moteur de croissance : élargis la base plutôt que de presser chaque client.",
            "en": "An accessible price can be a growth engine: widen the base instead of squeezing each customer."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le salaire de 5 dollars par jour",
        "en": "The five-dollar day"
      },
      "caption": {
        "fr": "En 1914, Ford double le salaire de ses ouvriers — et présente cela comme une décision d'affaires. 💵",
        "en": "In 1914 Ford doubled his workers' pay — and called it a business decision. 💵"
      },
      "tags": [
        "salaire",
        "travail",
        "wages",
        "labor"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Payer haut, un calcul",
            "en": "High wages as strategy"
          },
          "body": {
            "fr": "Ford instaure un minimum de 5 dollars par jour, presque le double de la norme, et le présente comme un bon calcul, pas de la charité.",
            "en": "Ford set a five-dollar-a-day minimum, nearly double the norm, and framed it as smart economics, not charity."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des ouvriers, aussi des clients",
            "en": "Workers are customers too"
          },
          "body": {
            "fr": "Ford raisonne que des ouvriers bien payés diffusent du pouvoir d'achat et peuvent acheter les produits qu'ils fabriquent.",
            "en": "Ford reasons that well-paid workers spread buying power and can afford the products they make."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Réduire le gaspillage humain",
            "en": "Cut the human waste"
          },
          "body": {
            "fr": "De bons salaires réduisent le roulement du personnel et l'absentéisme ; former sans cesse de nouveaux ouvriers coûte cher.",
            "en": "Good wages cut staff turnover and absenteeism; constantly training new workers is expensive."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le salaire, une part du produit",
            "en": "Wages as part of the product"
          },
          "body": {
            "fr": "Pour Ford, les hauts salaires font partie du coût sain de l'entreprise : bas prix pour l'acheteur, hauts salaires pour l'ouvrier.",
            "en": "For Ford, high wages are part of a healthy business: low prices for the buyer, high wages for the worker."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Bien payer peut être un investissement rentable, pas une simple dépense, quand cela fidélise et solvabilise.",
            "en": "Paying well can be a profitable investment, not just a cost, when it retains people and creates buyers."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La standardisation et la Model T",
        "en": "Standardization and the Model T"
      },
      "caption": {
        "fr": "Une seule voiture, un seul modèle, une seule couleur — et une révolution industrielle. ⚫",
        "en": "One car, one model, one color — and an industrial revolution. ⚫"
      },
      "tags": [
        "standardisation",
        "modelT",
        "production",
        "focus"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Un seul modèle, poussé à fond",
            "en": "One model, pushed all the way"
          },
          "body": {
            "fr": "Ford choisit de tout concentrer sur une seule voiture standardisée pour la produire mieux et moins cher.",
            "en": "Ford chose to concentrate everything on a single standardized car to build it better and cheaper."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La discipline d'un seul produit",
            "en": "The discipline of one product"
          },
          "body": {
            "fr": "En refusant la multiplication des modèles, Ford simplifie l'usine, l'outillage et les pièces, et réduit drastiquement les coûts.",
            "en": "By refusing to multiply models, Ford simplified the factory, tooling and parts, and slashed costs."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Standardiser sans figer",
            "en": "Standardize without freezing"
          },
          "body": {
            "fr": "Ford défend la standardisation utile : celle qui sert le client au meilleur prix, pas celle qui fige un produit médiocre.",
            "en": "Ford defends useful standardization: the kind that serves the customer at the best price, not the kind that freezes a mediocre product."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La couleur célèbre",
            "en": "The famous color"
          },
          "body": {
            "fr": "« Tout client peut avoir une voiture peinte de la couleur qu'il veut, du moment qu'elle est noire. »",
            "en": "\"Any customer can have a car painted any color that he wants so long as it is black.\""
          },
          "attribution": {
            "fr": "Henry Ford, My Life and Work",
            "en": "Henry Ford, My Life and Work"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Limiter les options peut démultiplier l'efficacité : la simplicité imposée est parfois la vraie performance.",
            "en": "Limiting options can multiply efficiency: enforced simplicity is sometimes the real performance."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La guerre au gaspillage",
        "en": "The war on waste"
      },
      "caption": {
        "fr": "Chez Ford, rien ne se perd : le gaspillage est presque un péché. ♻️",
        "en": "At Ford's, nothing is wasted — waste is almost a sin. ♻️"
      },
      "tags": [
        "gaspillage",
        "efficacite",
        "waste",
        "efficiency"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Traquer chaque gaspillage",
            "en": "Hunt down every waste"
          },
          "body": {
            "fr": "Ford voit le gaspillage de matière, de temps et d'effort comme l'ennemi numéro un de la production.",
            "en": "Ford sees the waste of material, time and effort as the number one enemy of production."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Récupérer la matière",
            "en": "Salvage the material"
          },
          "body": {
            "fr": "Ford récupère et réutilise ferraille, chutes et rebuts ; ce que d'autres jettent devient une source d'économies.",
            "en": "Ford recovers and reuses scrap, offcuts and rejects; what others throw away becomes a source of savings."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le temps perdu est irrécupérable",
            "en": "Lost time can't be salvaged"
          },
          "body": {
            "fr": "Ford souligne que le gaspillage de temps, contrairement à celui de matière, ne laisse aucun résidu à récupérer.",
            "en": "Ford stresses that wasted time, unlike wasted material, leaves nothing to salvage."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Économiser, c'est servir",
            "en": "Saving is serving"
          },
          "body": {
            "fr": "Chaque geste inutile supprimé abaisse le coût, donc le prix : l'anti-gaspillage sert directement le client.",
            "en": "Every useless motion removed lowers cost, thus price: cutting waste directly serves the customer."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Traque le gaspillage sous toutes ses formes, surtout le temps : il ne se rattrape jamais.",
            "en": "Hunt waste in every form, especially time: it can never be recovered."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'indépendance face aux financiers",
        "en": "Independence from financiers"
      },
      "caption": {
        "fr": "Ford voulait devoir sa réussite au travail, pas aux banquiers. 🏦🚫",
        "en": "Ford wanted to owe his success to work, not to bankers. 🏦🚫"
      },
      "tags": [
        "finance",
        "dette",
        "independence",
        "money"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Se financer par le travail",
            "en": "Fund yourself through work"
          },
          "body": {
            "fr": "Ford se méfie de l'argent emprunté et préfère financer l'entreprise par ses propres opérations.",
            "en": "Ford distrusts borrowed money and prefers to fund the business from its own operations."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La dette comme piège",
            "en": "Debt as a trap"
          },
          "body": {
            "fr": "Pour Ford, emprunter pour se dépanner incite à combler les fuites avec de l'argent au lieu de corriger les vrais problèmes.",
            "en": "For Ford, borrowing to get by tempts you to patch leaks with money instead of fixing the real problems."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le financier contre le producteur",
            "en": "Financier versus producer"
          },
          "body": {
            "fr": "Ford oppose le financier, qui pense en argent, au producteur, qui pense en produits et en service au public.",
            "en": "Ford contrasts the financier, who thinks in money, with the producer, who thinks in products and public service."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'argent doit servir le travail",
            "en": "Money must serve work"
          },
          "body": {
            "fr": "L'argent, pour Ford, n'est utile que s'il fait avancer le travail ; il ne doit jamais commander l'entreprise.",
            "en": "Money, for Ford, is useful only if it advances the work; it must never rule the business."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Garde la main sur ton activité : construis-la sur la valeur produite plutôt que sur la dette.",
            "en": "Keep control of your venture: build it on the value you produce rather than on debt."
          }
        }
      ]
    }
  ],
  "walt-disney": [
    {
      "concept": {
        "fr": "Le contrôle, obsession fondatrice",
        "en": "Control, the founding obsession"
      },
      "caption": {
        "fr": "La vraie clé de Walt Disney selon Gabler ? Le besoin de tout maîtriser 🎬",
        "en": "Gabler's real key to Walt Disney? The need to control everything 🎬"
      },
      "tags": [
        "Disney",
        "controle",
        "Gabler",
        "biographie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Tout contrôler",
            "en": "Total control"
          },
          "body": {
            "fr": "La thèse centrale de Gabler : Disney a bâti son empire sur un besoin obsessionnel d'ordre et de maîtrise.",
            "en": "Gabler's central thesis: Disney built his empire on an obsessive need for order and control."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'animation, un monde total",
            "en": "Animation, a total world"
          },
          "body": {
            "fr": "Dans le dessin animé, Walt dictait chaque geste et chaque détail : un univers entièrement obéissant, contrairement au monde réel.",
            "en": "In animation Walt dictated every gesture and detail: a world entirely obedient, unlike the messy real one."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une réponse au désordre",
            "en": "An answer to disorder"
          },
          "body": {
            "fr": "Gabler relie cette pulsion à une vie marquée par l'instabilité financière et les déceptions. Maîtriser l'art, c'était réparer le chaos.",
            "en": "Gabler ties this drive to a life marked by financial instability and disappointment. Controlling art was a way to repair chaos."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "De l'écran au parc",
            "en": "From screen to park"
          },
          "body": {
            "fr": "Cette même pulsion culmine à Disneyland : un monde physique où il pouvait enfin ordonner chaque détail.",
            "en": "The same impulse culminates in Disneyland: a physical world where he could finally order every detail."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Pour comprendre l'œuvre de Disney, lisez-la comme une quête de maîtrise sur un monde jugé désordonné.",
            "en": "To understand Disney's work, read it as a quest to master a world he found disorderly."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La leçon d'Oswald",
        "en": "The Oswald lesson"
      },
      "caption": {
        "fr": "Il a perdu son personnage à succès… et en a tiré Mickey 🐭",
        "en": "He lost his hit character… and turned it into Mickey 🐭"
      },
      "tags": [
        "Mickey",
        "Oswald",
        "propriete",
        "Disney"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Perdre pour apprendre",
            "en": "Losing to learn"
          },
          "body": {
            "fr": "La trahison qui a enseigné à Walt la règle de toute sa carrière : posséder ce que l'on crée.",
            "en": "The betrayal that taught Walt the rule of his whole career: own what you create."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Oswald le lapin chanceux",
            "en": "Oswald the Lucky Rabbit"
          },
          "body": {
            "fr": "Walt crée Oswald, un vrai succès. Mais les droits appartiennent au distributeur, Charles Mintz, et à Universal, pas à lui.",
            "en": "Walt created Oswald, a genuine hit. But the rights belonged to distributor Charles Mintz and Universal, not to him."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La trahison de 1928",
            "en": "The 1928 betrayal"
          },
          "body": {
            "fr": "À New York, Walt découvre que Mintz a débauché ses animateurs et gardé le personnage. Il rentre dépossédé.",
            "en": "In New York, Walt learns Mintz has poached his animators and kept the character. He returns home dispossessed."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Naissance de Mickey",
            "en": "Mickey is born"
          },
          "body": {
            "fr": "En réponse, il invente Mickey Mouse et jure de ne plus jamais travailler sans posséder ses créations.",
            "en": "In response he invents Mickey Mouse and vows never again to work without owning his creations."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Les mots de Walt",
            "en": "Walt's words"
          },
          "body": {
            "fr": "« J'espère seulement que nous n'oublierons jamais une chose : que tout a commencé par une souris. »",
            "en": "\"I only hope that we never lose sight of one thing — that it was all started by a mouse.\""
          },
          "attribution": {
            "fr": "Walt Disney",
            "en": "Walt Disney"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La propriété de ce que vous créez n'est pas un détail juridique : c'est le socle de toute indépendance.",
            "en": "Owning what you create isn't a legal detail: it's the foundation of any independence."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La Folie de Disney",
        "en": "Disney's Folly"
      },
      "caption": {
        "fr": "Il a hypothéqué sa maison pour un long-métrage animé. On l'a pris pour un fou 🍎",
        "en": "He mortgaged his house for an animated feature. They called him crazy 🍎"
      },
      "tags": [
        "BlancheNeige",
        "SnowWhite",
        "risque",
        "animation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Miser le studio",
            "en": "Betting the studio"
          },
          "body": {
            "fr": "Blanche-Neige, le pari fou que le tout-Hollywood surnommait « Disney's Folly ».",
            "en": "Snow White, the reckless bet all of Hollywood nicknamed \"Disney's Folly.\""
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un pari moqué",
            "en": "A mocked gamble"
          },
          "body": {
            "fr": "L'industrie raillait l'idée d'un long-métrage animé : le public ne tiendrait jamais tout un film devant des dessins.",
            "en": "The industry mocked the idea of a feature-length cartoon: audiences would never sit through a whole film of drawings."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Tout y engloutir",
            "en": "Pouring in everything"
          },
          "body": {
            "fr": "Walt hypothèque sa maison et engage toutes les ressources du studio, au bord de la faillite.",
            "en": "Walt mortgaged his house and poured in every studio resource, teetering on bankruptcy."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le triomphe de 1937",
            "en": "The 1937 triumph"
          },
          "body": {
            "fr": "Blanche-Neige devient un immense succès et prouve que l'animation peut porter une vraie émotion sur toute la durée d'un film.",
            "en": "Snow White became a massive hit, proving animation could carry real emotion across a full feature."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Les ruptures naissent souvent d'une conviction assumée contre le consensus général.",
            "en": "Breakthroughs often come from conviction held firmly against the consensus."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La grève de 1941",
        "en": "The 1941 strike"
      },
      "caption": {
        "fr": "Le jour où sa « famille » d'artistes s'est retournée contre lui a changé Walt à jamais.",
        "en": "The day his artist \"family\" turned on him changed Walt forever."
      },
      "tags": [
        "greve",
        "1941",
        "studio",
        "trahison"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le patriarche trahi",
            "en": "The patriarch betrayed"
          },
          "body": {
            "fr": "La grève des animateurs de 1941 : la blessure qui a durci Walt Disney.",
            "en": "The 1941 animators' strike: the wound that hardened Walt Disney."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le père du studio",
            "en": "The studio's father"
          },
          "body": {
            "fr": "Walt se voyait en patriarche bienveillant et son studio comme une famille, une utopie de créateurs.",
            "en": "Walt saw himself as a benevolent patriarch and his studio as a family, a utopia of creators."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La rupture",
            "en": "The rupture"
          },
          "body": {
            "fr": "En 1941, ses animateurs se syndiquent et se mettent en grève. Walt le vit comme une trahison personnelle.",
            "en": "In 1941 his animators unionized and went on strike. Walt experienced it as a personal betrayal."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un homme changé",
            "en": "A changed man"
          },
          "body": {
            "fr": "Gabler décrit un Walt endurci, plus méfiant et plus conservateur après le conflit.",
            "en": "Gabler describes a hardened Walt, more distrustful and more conservative after the conflict."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le mythe de l'entreprise-famille se fissure dès qu'apparaît un rapport de pouvoir réel.",
            "en": "The myth of the company-as-family cracks the moment a real power relation surfaces."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Marceline et Main Street",
        "en": "Marceline and Main Street"
      },
      "caption": {
        "fr": "Main Street n'existe pas : c'est l'enfance idéalisée de Walt, reconstruite en dur 🚂",
        "en": "Main Street isn't real: it's Walt's idealized childhood, rebuilt in brick 🚂"
      },
      "tags": [
        "Marceline",
        "MainStreet",
        "nostalgie",
        "Disneyland"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La nostalgie comme plan",
            "en": "Nostalgia as a blueprint"
          },
          "body": {
            "fr": "Comment quelques années d'enfance dans le Missouri ont façonné toute l'esthétique Disney.",
            "en": "How a few childhood years in Missouri shaped the entire Disney aesthetic."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'enfance idéalisée",
            "en": "The idealized childhood"
          },
          "body": {
            "fr": "Walt passe quelques années formatrices dans une ferme à Marceline, un lieu qu'il idéalisera toute sa vie.",
            "en": "Walt spent a few formative years on a farm in Marceline, a place he idealized all his life."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Reconstruire le passé",
            "en": "Rebuilding the past"
          },
          "body": {
            "fr": "Main Street USA, à Disneyland, recrée une petite ville américaine du début du XXe siècle, telle qu'il la rêvait.",
            "en": "Main Street USA at Disneyland recreates a turn-of-the-century American town just as he dreamed it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Plus beau que vrai",
            "en": "Better than real"
          },
          "body": {
            "fr": "Gabler montre que Disney ne reproduit pas la réalité mais une version nettoyée et embellie du souvenir.",
            "en": "Gabler shows Disney reproduced not reality but a cleaned-up, improved version of memory."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La nostalgie est un carburant créatif puissant, à condition d'assumer qu'elle réécrit le réel.",
            "en": "Nostalgia is powerful creative fuel, as long as you admit it rewrites reality."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Disneyland, monde parfait",
        "en": "Disneyland, a perfect world"
      },
      "caption": {
        "fr": "Disneyland n'est pas un parc : c'est le rêve de Walt de fabriquer un monde entier ✨",
        "en": "Disneyland isn't a park: it's Walt's dream of engineering a whole world ✨"
      },
      "tags": [
        "Disneyland",
        "imagination",
        "immersion",
        "utopie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Fabriquer un monde",
            "en": "Engineering a world"
          },
          "body": {
            "fr": "L'expression ultime du contrôle de Walt : un lieu où rien du monde réel ne vient briser l'illusion.",
            "en": "The ultimate expression of Walt's control: a place where nothing from the real world breaks the illusion."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un monde qu'on ordonne",
            "en": "A world you can order"
          },
          "body": {
            "fr": "Dégoûté par les fêtes foraines sales et bruyantes, Walt veut un environnement propre, sûr et entièrement conçu.",
            "en": "Disgusted by dirty, chaotic amusement parks, Walt wanted a clean, safe, wholly designed environment."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'immersion totale",
            "en": "Total immersion"
          },
          "body": {
            "fr": "Chaque ligne de vue, chaque son, chaque détail est calculé pour qu'aucune intrusion ne rompe le récit.",
            "en": "Every sightline, sound and detail was engineered so no intrusion could break the story."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le triomphe de l'imagination",
            "en": "The triumph of imagination"
          },
          "body": {
            "fr": "Le parc incarne le sous-titre du livre : l'imagination refaçonnant le réel en quelque chose d'ordonné et d'idéal.",
            "en": "The park embodies the book's subtitle: imagination reshaping reality into something ordered and ideal."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La plus grande ambition de Disney n'était pas de raconter une histoire, mais de concevoir le monde entier autour d'elle.",
            "en": "Disney's greatest ambition wasn't to tell a story, but to design the entire world around it."
          }
        }
      ]
    }
  ],
  "kamprad-ikea": [
    {
      "concept": {
        "fr": "L'origine du nom IKEA",
        "en": "Where the name IKEA comes from"
      },
      "caption": {
        "fr": "Quatre lettres, toute une histoire : IKEA, c'est en fait une adresse. 🏡",
        "en": "Four letters, a whole story: IKEA is really an address. 🏡"
      },
      "tags": [
        "IKEA",
        "Kamprad",
        "origines",
        "entrepreneuriat"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "IKEA : que veulent dire ces 4 lettres ?",
            "en": "IKEA: what do those 4 letters mean?"
          },
          "body": {
            "fr": "Le nom n'a rien d'un slogan marketing : c'est un acronyme très personnel d'Ingvar Kamprad.",
            "en": "The name isn't a marketing slogan: it's a deeply personal acronym chosen by Ingvar Kamprad."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "I et K : l'homme",
            "en": "I and K: the man"
          },
          "body": {
            "fr": "I et K sont les initiales du fondateur, Ingvar Kamprad, qui lance l'entreprise en 1943, à seulement 17 ans.",
            "en": "I and K are the initials of the founder, Ingvar Kamprad, who started the company in 1943 at just 17."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "E : la ferme",
            "en": "E: the farm"
          },
          "body": {
            "fr": "E vient d'Elmtaryd, la ferme familiale du Småland où Ingvar a grandi et fait ses premières affaires.",
            "en": "E stands for Elmtaryd, the family farm in Småland where Ingvar grew up and did his first deals."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "A : le village",
            "en": "A: the village"
          },
          "body": {
            "fr": "A vient d'Agunnaryd, la paroisse voisine. Le nom de la marque est littéralement enraciné dans son lieu d'enfance.",
            "en": "A stands for Agunnaryd, the nearby parish. The brand name is literally rooted in his childhood home."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Une identité forte peut naître de ses racines les plus simples : votre nom, votre terre, votre histoire.",
            "en": "A strong identity can grow from the simplest roots: your name, your land, your story."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le Testament d'un marchand de meubles",
        "en": "A Testament of a Furniture Dealer"
      },
      "caption": {
        "fr": "En 1976, Kamprad écrit sa « bible » d'entreprise. Un mot d'ordre : ne rien gaspiller. ✍️",
        "en": "In 1976, Kamprad wrote his company 'bible.' One rule above all: waste nothing. ✍️"
      },
      "tags": [
        "culture",
        "management",
        "frugalité",
        "IKEA"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le manifeste qui guide IKEA",
            "en": "The manifesto that guides IKEA"
          },
          "body": {
            "fr": "Kamprad a couché sa philosophie dans un texte fondateur, « Le Testament d'un marchand de meubles ».",
            "en": "Kamprad put his philosophy into a founding text, 'A Testament of a Furniture Dealer.'"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le gaspillage, un péché",
            "en": "Waste is a sin"
          },
          "body": {
            "fr": "Pour lui, gaspiller des ressources est une faute morale grave. La frugalité n'est pas une contrainte mais une valeur.",
            "en": "For him, wasting resources is a serious moral fault. Frugality isn't a constraint but a value."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Diriger par l'exemple",
            "en": "Lead by example"
          },
          "body": {
            "fr": "Un chef doit montrer le chemin en pratiquant lui-même l'économie et l'humilité qu'il attend des autres.",
            "en": "A leader must show the way by personally living the thrift and humility they expect from others."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ne jamais se croire arrivé",
            "en": "Never feel 'done'"
          },
          "body": {
            "fr": "Le sentiment d'avoir tout accompli est un danger : presque tout reste encore à faire. L'avenir reste l'obsession.",
            "en": "The feeling of having achieved everything is a danger: almost everything still remains to be done. The future stays the obsession."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La règle d'or",
            "en": "The golden rule"
          },
          "body": {
            "fr": "« Gaspiller des ressources est un péché mortel chez IKEA. »",
            "en": "\"Wasting resources is a mortal sin at IKEA.\""
          },
          "attribution": {
            "fr": "Ingvar Kamprad",
            "en": "Ingvar Kamprad"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Mettez votre culture par écrit. Des valeurs claires et vécues au sommet façonnent toute l'organisation.",
            "en": "Put your culture in writing. Clear values, lived at the top, shape the whole organization."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'invention du meuble en kit",
        "en": "The birth of the flat-pack"
      },
      "caption": {
        "fr": "Le kit IKEA est né d'un problème tout bête : une table qui n'entrait pas dans la voiture. 🚗",
        "en": "The IKEA flat-pack was born from a silly problem: a table that wouldn't fit in the car. 🚗"
      },
      "tags": [
        "innovation",
        "flat-pack",
        "logistique",
        "IKEA"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le jour où on a dévissé les pieds d'une table",
            "en": "The day they unscrewed a table's legs"
          },
          "body": {
            "fr": "L'idée qui a fait la fortune d'IKEA est venue d'un geste pratique, pas d'un plan stratégique.",
            "en": "The idea that made IKEA's fortune came from a practical gesture, not a strategic plan."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le problème",
            "en": "The problem"
          },
          "body": {
            "fr": "Le collaborateur Gillis Lundgren voulait rapporter une table, mais elle ne rentrait pas dans le coffre.",
            "en": "Employee Gillis Lundgren wanted to take a table home, but it wouldn't fit in the trunk."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le déclic",
            "en": "The spark"
          },
          "body": {
            "fr": "Il dévisse les pieds pour la faire tenir à plat. Le déclic suit : et si le client montait le meuble lui-même ?",
            "en": "He unscrewed the legs to lay it flat. The realization followed: what if the customer assembled the furniture themselves?"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'effet domino",
            "en": "The domino effect"
          },
          "body": {
            "fr": "Le meuble à plat réduit le transport, le stockage et donc le prix. Ce hasard devient le cœur du modèle IKEA.",
            "en": "Flat-packing cut transport, storage and therefore price. That accident became the core of the IKEA model."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Les meilleures innovations résolvent d'abord un problème concret. Observez les astuces du terrain.",
            "en": "The best innovations first solve a concrete problem. Watch for the workarounds happening on the ground."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le boycott qui a rendu IKEA plus fort",
        "en": "The boycott that made IKEA stronger"
      },
      "caption": {
        "fr": "Les concurrents ont voulu étrangler IKEA. Résultat : ils l'ont poussé à devenir indépendant. 💥",
        "en": "Rivals tried to strangle IKEA. Instead, they pushed it to become independent. 💥"
      },
      "tags": [
        "stratégie",
        "résilience",
        "sourcing",
        "IKEA"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Boycotté, puis renforcé",
            "en": "Boycotted, then reinforced"
          },
          "body": {
            "fr": "Excédée par ses prix cassés, la filière suédoise du meuble a tenté de faire disparaître IKEA. L'inverse s'est produit.",
            "en": "Angered by its low prices, the Swedish furniture industry tried to make IKEA disappear. The opposite happened."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La riposte des concurrents",
            "en": "The rivals' counterattack"
          },
          "body": {
            "fr": "Les fabricants font pression pour bannir IKEA des salons professionnels et couper ses approvisionnements.",
            "en": "Manufacturers pressured to bar IKEA from trade fairs and cut off its supply of furniture."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Concevoir soi-même",
            "en": "Design it yourself"
          },
          "body": {
            "fr": "Privé de fournisseurs, IKEA se met à concevoir ses propres meubles. La contrainte devient un atout de design.",
            "en": "Starved of suppliers, IKEA began designing its own furniture. The constraint became a design advantage."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Cap sur la Pologne",
            "en": "Turning to Poland"
          },
          "body": {
            "fr": "Pour produire malgré le blocus, IKEA va s'approvisionner en Pologne, derrière le rideau de fer, à coûts réduits.",
            "en": "To keep producing despite the blockade, IKEA sourced from Poland, behind the Iron Curtain, at lower cost."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Une attaque frontale peut forcer à s'intégrer et à maîtriser sa chaîne. L'adversité crée parfois l'avantage.",
            "en": "A frontal attack can force you to integrate and control your chain. Adversity sometimes creates the advantage."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le design démocratique et le prix d'abord",
        "en": "Democratic design and price first"
      },
      "caption": {
        "fr": "Chez IKEA, on ne fixe pas le prix à la fin : on part de lui. 🏷️",
        "en": "At IKEA, price isn't decided at the end: it's the starting point. 🏷️"
      },
      "tags": [
        "design",
        "prix",
        "IKEA",
        "innovation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Beau, utile et abordable",
            "en": "Beautiful, useful and affordable"
          },
          "body": {
            "fr": "La mission d'IKEA : un meilleur quotidien pour le plus grand nombre, pas seulement pour ceux qui peuvent payer.",
            "en": "IKEA's mission: a better everyday life for the many people, not only for those who can afford it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le prix comme point de départ",
            "en": "Price as the starting point"
          },
          "body": {
            "fr": "On fixe d'abord un prix bas, puis on conçoit le produit pour l'atteindre sans sacrifier la fonction.",
            "en": "A low price is set first, then the product is designed to hit it without sacrificing function."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Cher n'est pas un exploit",
            "en": "Expensive isn't clever"
          },
          "body": {
            "fr": "N'importe qui peut faire du bon avec un gros budget. Le vrai défi : faire beau et solide pour presque rien.",
            "en": "Anyone can make something good with a big budget. The real challenge: making it beautiful and sturdy for almost nothing."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La vision du coût",
            "en": "The view on cost"
          },
          "body": {
            "fr": "« Les solutions coûteuses à un problème sont généralement l'œuvre de la médiocrité. »",
            "en": "\"Expensive solutions to any kind of problem are usually the work of mediocrity.\""
          },
          "attribution": {
            "fr": "Ingvar Kamprad",
            "en": "Ingvar Kamprad"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Inversez la logique : partez de ce que le client peut payer, et faites-en une contrainte créative.",
            "en": "Flip the logic: start from what the customer can pay, and turn it into a creative constraint."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'esprit du Småland : faire beaucoup avec peu",
        "en": "The Småland spirit: much from little"
      },
      "caption": {
        "fr": "Toute la culture IKEA vient d'une terre pauvre et caillouteuse du sud de la Suède. 🪨",
        "en": "IKEA's whole culture comes from a poor, stony patch of southern Sweden. 🪨"
      },
      "tags": [
        "Småland",
        "culture",
        "frugalité",
        "Kamprad"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Là où tout a commencé",
            "en": "Where it all began"
          },
          "body": {
            "fr": "Kamprad attribue l'ADN d'IKEA au Småland, région rude où l'on apprend à ne rien gâcher.",
            "en": "Kamprad traces IKEA's DNA to Småland, a harsh region where you learn to waste nothing."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une terre exigeante",
            "en": "A demanding land"
          },
          "body": {
            "fr": "Sol pauvre et caillouteux : les habitants du Småland ont dû tirer le maximum de ressources limitées.",
            "en": "Poor, rocky soil forced the people of Småland to squeeze the most out of scarce resources."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le jeune vendeur",
            "en": "The young trader"
          },
          "body": {
            "fr": "Enfant, Ingvar vend allumettes, graines, stylos et poissons. Le sens du commerce et de l'économie vient de là.",
            "en": "As a boy, Ingvar sold matches, seeds, pens and fish. His instinct for trade and thrift started there."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Frugal, même milliardaire",
            "en": "Frugal, even as a billionaire"
          },
          "body": {
            "fr": "Devenu très riche, Kamprad voyage en classe éco et roule dans une vieille voiture : l'exemple avant les discours.",
            "en": "Even when very wealthy, Kamprad flew economy and drove an old car: example before speeches."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La rareté peut devenir un avantage culturel. La frugalité n'est pas de l'avarice, c'est une discipline.",
            "en": "Scarcity can become a cultural advantage. Frugality isn't stinginess, it's a discipline."
          }
        }
      ]
    }
  ],
  "grinding-it-out": [
    {
      "concept": {
        "fr": "Un succès \"du jour au lendemain\" à 52 ans",
        "en": "An \"overnight\" success at 52"
      },
      "caption": {
        "fr": "Représentant de commerce pendant des décennies, il n'a bâti son empire qu'après 50 ans. Le succès n'a pas d'âge limite. 🍔",
        "en": "A traveling salesman for decades, he only built his empire after 50. Success has no age limit. 🍔"
      },
      "tags": [
        "RayKroc",
        "McDonalds",
        "persistance",
        "secondechance"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "\"Overnight success\"... à 52 ans",
            "en": "An \"overnight\" success... at 52"
          },
          "body": {
            "fr": "Ray Kroc n'a pas créé McDonald's dans un garage à 25 ans. Il l'a lancé après une vie entière de représentant.",
            "en": "Ray Kroc didn't launch McDonald's from a garage at 25. He built it after a lifetime as a traveling salesman."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Vendeur de Multimixer",
            "en": "Selling Multimixers"
          },
          "body": {
            "fr": "Avant McDonald's, Kroc parcourait les États-Unis pour vendre le Multimixer, un mélangeur à milkshakes.",
            "en": "Before McDonald's, Kroc crisscrossed the United States selling the Multimixer, a milkshake mixer."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La commande qui intrigue",
            "en": "The order that hooked him"
          },
          "body": {
            "fr": "Un petit stand à San Bernardino avait commandé huit Multimixer, de quoi préparer 40 milkshakes à la fois. Kroc voulut voir pourquoi.",
            "en": "One small stand in San Bernardino had ordered eight Multimixers, enough for 40 shakes at once. Kroc had to see why."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "1954 : le déclic",
            "en": "1954: the turning point"
          },
          "body": {
            "fr": "En découvrant l'efficacité des frères McDonald, il flaira l'occasion de sa vie et proposa d'en faire une chaîne franchisée.",
            "en": "Seeing the McDonald brothers' efficiency, he sensed the chance of a lifetime and offered to franchise it nationwide."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Être là, et agir",
            "en": "Be there, then act"
          },
          "body": {
            "fr": "\"Les deux exigences les plus importantes pour un grand succès : être au bon endroit au bon moment, et agir en conséquence.\"",
            "en": "\"The two most important requirements for major success: being in the right place at the right time, and doing something about it.\""
          },
          "attribution": {
            "fr": "Ray Kroc, Grinding It Out",
            "en": "Ray Kroc, Grinding It Out"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Les années \"perdues\" à vendre du matériel lui ont appris la vente, la logistique et la persévérance. Rien n'est jamais trop tard.",
            "en": "The \"wasted\" years selling equipment taught him sales, logistics and grit. It's never too late to start."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "QSC : Qualité, Service, Propreté",
        "en": "QSC: Quality, Service, Cleanliness"
      },
      "caption": {
        "fr": "Trois lettres devenues la religion de McDonald's. La constance bat le génie. ✨",
        "en": "Three letters that became McDonald's religion. Consistency beats genius. ✨"
      },
      "tags": [
        "QSC",
        "qualite",
        "standards",
        "operations"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "QSC : le credo de Kroc",
            "en": "QSC: Kroc's creed"
          },
          "body": {
            "fr": "Qualité, Service, Propreté. Pour Kroc, ces trois mots valaient plus qu'une recette secrète.",
            "en": "Quality, Service, Cleanliness. To Kroc, these three words mattered more than any secret recipe."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une qualité identique partout",
            "en": "Identical quality everywhere"
          },
          "body": {
            "fr": "Un hamburger devait avoir le même goût à Chicago qu'en Californie. Kroc imposa des standards stricts à chaque franchisé.",
            "en": "A burger had to taste the same in Chicago and in California. Kroc enforced strict standards on every franchisee."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un service rapide et régulier",
            "en": "Fast, reliable service"
          },
          "body": {
            "fr": "Le client devait être servi vite et bien à chaque visite. La régularité créait la confiance et la fidélité.",
            "en": "Customers had to be served quickly and well every single time. Consistency built trust and loyalty."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La propreté obsessionnelle",
            "en": "Obsessive cleanliness"
          },
          "body": {
            "fr": "Kroc lui-même ramassait les papiers autour des restaurants et grattait le chewing-gum. La propreté n'était pas négociable.",
            "en": "Kroc himself picked up litter around the restaurants and scraped off gum. Cleanliness was non-negotiable."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'excellence n'est pas un coup d'éclat mais mille détails répétés. Définissez vos standards et tenez-les sans relâche.",
            "en": "Excellence isn't one bright idea but a thousand repeated details. Define your standards and hold them relentlessly."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Grinding It Out : la persévérance",
        "en": "Grinding It Out: sheer persistence"
      },
      "caption": {
        "fr": "Le titre du livre dit tout : on ne gagne pas d'un coup, on \"broie\" jour après jour. 💪",
        "en": "The book's title says it all: you don't win in one shot, you grind it out day after day. 💪"
      },
      "tags": [
        "persistance",
        "travail",
        "discipline",
        "mindset"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "\"Grinding It Out\"",
            "en": "\"Grinding It Out\""
          },
          "body": {
            "fr": "Le titre même est une philosophie : avancer en broyant, sans coup de chance magique.",
            "en": "The very title is a philosophy: pushing forward by grinding, with no magic lucky break."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le mythe de la chance",
            "en": "The luck myth"
          },
          "body": {
            "fr": "Kroc rejette l'idée du génie chanceux. Son succès vient d'années de porte-à-porte et de labeur ingrat.",
            "en": "Kroc rejects the idea of the lucky genius. His success came from years of door-to-door work and thankless grind."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La persévérance avant le talent",
            "en": "Persistence over talent"
          },
          "body": {
            "fr": "Il aimait rappeler que ni le talent, ni le génie, ni les diplômes ne remplacent la persévérance et la détermination.",
            "en": "He loved to note that neither talent, genius nor education can replace persistence and determination."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La chance se mérite",
            "en": "Luck is earned"
          },
          "body": {
            "fr": "\"La chance est un dividende de la sueur. Plus vous suez, plus vous avez de chance.\"",
            "en": "\"Luck is a dividend of sweat. The more you sweat, the luckier you get.\""
          },
          "attribution": {
            "fr": "Ray Kroc, Grinding It Out",
            "en": "Ray Kroc, Grinding It Out"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le succès ressemble rarement à une étincelle. C'est un long broyage quotidien : montrez-vous, chaque jour, et recommencez.",
            "en": "Success rarely looks like a spark. It's a long daily grind: show up, every day, and do it again."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Pas des hamburgers : de l'immobilier",
        "en": "Not hamburgers: real estate"
      },
      "caption": {
        "fr": "Le vrai modèle économique de McDonald's n'était pas dans l'assiette. 🏠",
        "en": "McDonald's real business model was never on the plate. 🏠"
      },
      "tags": [
        "businessmodel",
        "immobilier",
        "franchise",
        "strategie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le vrai business de McDonald's",
            "en": "McDonald's real business"
          },
          "body": {
            "fr": "Les hamburgers faisaient venir les clients. Mais l'argent, lui, venait d'ailleurs.",
            "en": "The hamburgers brought in customers. But the money came from somewhere else."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le problème des débuts",
            "en": "The early problem"
          },
          "body": {
            "fr": "Les redevances des franchisés étaient trop faibles pour faire vivre l'entreprise. Kroc frôlait l'asphyxie financière.",
            "en": "Franchise fees were too small to sustain the company. Kroc was nearly starved of cash."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'idée de Harry Sonneborn",
            "en": "Harry Sonneborn's idea"
          },
          "body": {
            "fr": "Son bras droit financier proposa de maîtriser les terrains et les baux, puis de les relouer aux franchisés.",
            "en": "His finance man proposed controlling the land and leases, then subleasing to franchisees."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "L'aveu du modèle",
            "en": "The model, confessed"
          },
          "body": {
            "fr": "\"Nous ne sommes pas, techniquement, dans le business du hamburger. Nous sommes dans l'immobilier.\"",
            "en": "\"We are not technically in the hamburger business. We are in the real estate business.\""
          },
          "attribution": {
            "fr": "Harry Sonneborn (rapporté par Ray Kroc)",
            "en": "Harry Sonneborn (recounted by Ray Kroc)"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le produit visible n'est pas toujours la source de profit. Cherchez où se cache la vraie mécanique financière de votre activité.",
            "en": "The visible product isn't always the source of profit. Find where your venture's real financial engine actually hides."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'obsession de la frite parfaite",
        "en": "The obsession with the perfect fry"
      },
      "caption": {
        "fr": "Il traitait une simple frite comme un produit de haute précision. Le détail fait la marque. 🍟",
        "en": "He treated a humble fry as a precision product. Detail makes the brand. 🍟"
      },
      "tags": [
        "details",
        "qualite",
        "produit",
        "McDonalds"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La frite comme œuvre",
            "en": "The fry as a craft"
          },
          "body": {
            "fr": "Pour Kroc, la pomme de terre frite était un point d'honneur, presque une science.",
            "en": "For Kroc, the french fry was a point of pride, almost a science."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un rituel millimétré",
            "en": "A precise ritual"
          },
          "body": {
            "fr": "Type de pomme de terre, taux d'humidité, temps de repos, cuisson : rien n'était laissé au hasard.",
            "en": "Potato variety, moisture level, curing time, frying: nothing was left to chance."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le secret du \"curing\"",
            "en": "The curing secret"
          },
          "body": {
            "fr": "Kroc découvrit que les pommes de terre devaient reposer et sécher avant friture pour donner la texture idéale.",
            "en": "Kroc found that the potatoes had to rest and cure before frying to reach the ideal texture."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La frite, produit signature",
            "en": "The fry as a signature"
          },
          "body": {
            "fr": "Cette rigueur fit de la frite McDonald's un produit signature, souvent aussi célèbre que le hamburger lui-même.",
            "en": "This rigor turned the McDonald's fry into a signature product, often as famous as the burger itself."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Soignez l'élément que les autres jugent trivial. C'est souvent ce détail-là qui devient votre marque de fabrique.",
            "en": "Perfect the element others dismiss as trivial. That detail is often what becomes your trademark."
          }
        }
      ]
    }
  ],
  "the-snowball": [
    {
      "concept": {
        "fr": "L'effet boule de neige",
        "en": "The Snowball Effect"
      },
      "caption": {
        "fr": "Le secret de Buffett tient en une image : de la neige mouillée et une longue colline. ❄️",
        "en": "Buffett's whole secret fits in one image: wet snow and a very long hill. ❄️"
      },
      "tags": [
        "compounding",
        "buffett",
        "patience",
        "investing"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'effet boule de neige",
            "en": "The Snowball Effect"
          },
          "body": {
            "fr": "L'idée qui donne son titre au livre : la vie et l'argent grossissent comme une boule de neige qui roule.",
            "en": "The idea behind the book's title: life and money grow like a snowball rolling downhill."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "De la neige mouillée",
            "en": "Wet snow"
          },
          "body": {
            "fr": "La neige mouillée, ce sont de bons rendements qui collent : chaque gain s'ajoute au précédent au lieu de rester isolé.",
            "en": "Wet snow means returns that stick together: each gain builds on the last instead of standing alone."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une longue colline",
            "en": "A long hill"
          },
          "body": {
            "fr": "La colline, c'est le temps. Plus la pente est longue, plus la boule tourne et grossit. Buffett a commencé enfant.",
            "en": "The hill is time. The longer the slope, the more the ball rolls and grows. Buffett started as a child."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'essentiel se joue tard",
            "en": "Most of it comes late"
          },
          "body": {
            "fr": "La quasi-totalité de sa fortune est arrivée après 50 ans. La boule paraît minuscule longtemps, puis devient énorme.",
            "en": "Almost all his fortune came after age 50. The ball looks tiny for a long time, then turns enormous."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Dans ses mots",
            "en": "In his words"
          },
          "body": {
            "fr": "« La vie est comme une boule de neige. L'important est de trouver de la neige bien mouillée et une très longue colline. »",
            "en": "\"Life is like a snowball. The important thing is finding wet snow and a really long hill.\""
          },
          "attribution": {
            "fr": "Warren Buffett",
            "en": "Warren Buffett"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Commence tôt et laisse rouler. Le temps, pas le coup de génie, fait la taille de la boule.",
            "en": "Start early and let it roll. Time, not a lucky stroke, decides how big the ball gets."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le score intérieur",
        "en": "The Inner Scorecard"
      },
      "caption": {
        "fr": "Te juges-tu à ta propre mesure, ou au regard des autres ? La question centrale de Buffett. 🧭",
        "en": "Do you judge yourself by your own standard, or by what others think? Buffett's core question. 🧭"
      },
      "tags": [
        "integrity",
        "values",
        "buffett",
        "mindset"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le score intérieur",
            "en": "The Inner Scorecard"
          },
          "body": {
            "fr": "Le fil rouge du livre : vivre selon ses propres critères plutôt que selon l'approbation des autres.",
            "en": "The book's guiding thread: live by your own standards instead of chasing others' approval."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Deux tableaux de bord",
            "en": "Two scorecards"
          },
          "body": {
            "fr": "Score intérieur : je me juge à ma propre vérité. Score extérieur : je me juge à ce que pensent les autres.",
            "en": "Inner scorecard: you judge yourself by your own truth. Outer scorecard: you judge by what others think."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'héritage du père",
            "en": "His father's lesson"
          },
          "body": {
            "fr": "Buffett attribue cette boussole à son père Howard, homme intègre qui se moquait du qu'en-dira-t-on.",
            "en": "Buffett credits this compass to his father Howard, a man of integrity who ignored public opinion."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Le test",
            "en": "The test"
          },
          "body": {
            "fr": "« Préférerais-tu être le meilleur amant du monde mais que tout le monde te croie le pire — ou le pire, mais que tout le monde te croie le meilleur ? »",
            "en": "\"Would you rather be the world's greatest lover but have everyone think you're the worst — or the world's worst but have everyone think you're the greatest?\""
          },
          "attribution": {
            "fr": "Warren Buffett",
            "en": "Warren Buffett"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Prends tes décisions selon ton propre tableau de bord. La réputation suit ; elle ne mène pas.",
            "en": "Make your choices by your own scorecard. Reputation follows; it shouldn't lead."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Penser en dollars futurs",
        "en": "Thinking in Future Dollars"
      },
      "caption": {
        "fr": "Enfant, Buffett voyait déjà chaque dollar comme une graine qui vaudrait bien plus un jour. 🌱",
        "en": "As a boy, Buffett already saw every dollar as a seed worth far more one day. 🌱"
      },
      "tags": [
        "compounding",
        "money",
        "discipline",
        "buffett"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Penser en dollars futurs",
            "en": "Thinking in future dollars"
          },
          "body": {
            "fr": "Comment un gamin d'Omaha calculait déjà ce que chaque pièce vaudrait des décennies plus tard.",
            "en": "How an Omaha kid already calculated what every coin would be worth decades later."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un entrepreneur en culotte courte",
            "en": "A boy entrepreneur"
          },
          "body": {
            "fr": "Chewing-gums, Coca revendus à la bouteille, tournées de journaux, flippers installés dans des salons de coiffure : il gagnait déjà de l'argent.",
            "en": "Chewing gum, Coke sold by the bottle, paper routes, pinball machines in barbershops: he was already earning."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Chaque dollar en cache dix",
            "en": "Each dollar hides ten"
          },
          "body": {
            "fr": "Il ne voyait pas un dollar comme un dollar, mais comme ce qu'il deviendrait en composant pendant des années.",
            "en": "He didn't see a dollar as a dollar, but as what it would become compounding over the years."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "D'où sa frugalité",
            "en": "Hence his thrift"
          },
          "body": {
            "fr": "Dépenser, c'était renoncer à cette fortune future. Cette obsession du calcul explique sa légendaire simplicité de vie.",
            "en": "Spending meant giving up that future fortune. This calculating obsession explains his famously simple life."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de dépenser, demande-toi ce que cette somme deviendrait en composant. La frugalité est une décision d'investissement.",
            "en": "Before spending, ask what that sum would become if compounded. Thrift is an investing decision."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le cercle de compétence",
        "en": "The Circle of Competence"
      },
      "caption": {
        "fr": "Peu importe la taille de ton cercle : ce qui compte, c'est d'en connaître les bords. ⭕",
        "en": "The size of your circle doesn't matter; knowing its edges does. ⭕"
      },
      "tags": [
        "competence",
        "focus",
        "buffett",
        "investing"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le cercle de compétence",
            "en": "The circle of competence"
          },
          "body": {
            "fr": "Buffett n'investit que dans ce qu'il comprend vraiment. Tout le reste va dans la pile « trop difficile ».",
            "en": "Buffett invests only in what he truly understands. Everything else goes on the \"too hard\" pile."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Connaître ses bords",
            "en": "Know your edges"
          },
          "body": {
            "fr": "L'important n'est pas l'étendue du cercle, mais de savoir exactement où il s'arrête pour ne pas s'aventurer au-delà.",
            "en": "What matters isn't how wide the circle is, but knowing exactly where it ends so you don't wander past it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La pile « trop difficile »",
            "en": "The \"too hard\" pile"
          },
          "body": {
            "fr": "Face à une affaire qu'il ne cerne pas, Buffett ne se force pas : il la met de côté, sans regret ni orgueil.",
            "en": "Facing a business he can't grasp, Buffett doesn't force it: he sets it aside, with no regret or ego."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La tech qu'il a évitée",
            "en": "The tech he avoided"
          },
          "body": {
            "fr": "Il a longtemps ignoré des secteurs à la mode qu'il ne comprenait pas, préférant rater un gain à subir une perte.",
            "en": "He long skipped fashionable sectors he didn't understand, preferring to miss a gain over taking a loss."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Reste dans ce que tu comprends. Dire « trop difficile » est une force, pas un aveu de faiblesse.",
            "en": "Stay inside what you understand. Saying \"too hard\" is a strength, not an admission of weakness."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La marge de sécurité",
        "en": "The Margin of Safety"
      },
      "caption": {
        "fr": "La leçon de Ben Graham qui a formé Buffett : achète bien en dessous de la valeur. 🛡️",
        "en": "Ben Graham's lesson that shaped Buffett: buy well below value. 🛡️"
      },
      "tags": [
        "value",
        "graham",
        "risk",
        "investing"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La marge de sécurité",
            "en": "The margin of safety"
          },
          "body": {
            "fr": "Le principe hérité de son maître Benjamin Graham à Columbia : acheter un actif pour bien moins que sa valeur.",
            "en": "The principle inherited from his teacher Benjamin Graham at Columbia: buy an asset for far less than it's worth."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un coussin contre l'erreur",
            "en": "A cushion against error"
          },
          "body": {
            "fr": "Payer bien en dessous de la valeur laisse une marge : même si l'on se trompe, la perte reste limitée.",
            "en": "Paying well below value leaves a buffer: even if you're wrong, the loss stays contained."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les « mégots de cigare »",
            "en": "\"Cigar butts\""
          },
          "body": {
            "fr": "Le jeune Buffett rachetait des sociétés délaissées mais bradées, comme un mégot jeté offrant encore une bouffée gratuite.",
            "en": "The young Buffett bought cheap, unloved companies, like a discarded cigar butt still good for one free puff."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Mr. Market",
            "en": "Mr. Market"
          },
          "body": {
            "fr": "Graham imaginait le marché comme un associé lunatique : profite de ses prix absurdes, ne te laisse pas guider par son humeur.",
            "en": "Graham pictured the market as a moody partner: exploit his absurd prices, don't be ruled by his mood."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne confonds pas prix et valeur. Achète avec une marge, et l'erreur devient supportable.",
            "en": "Don't confuse price with value. Buy with a margin, and being wrong becomes survivable."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'influence de Charlie Munger",
        "en": "Charlie Munger's Influence"
      },
      "caption": {
        "fr": "L'homme qui a fait passer Buffett des mégots aux entreprises magnifiques. 🤝",
        "en": "The man who moved Buffett from cigar butts to wonderful businesses. 🤝"
      },
      "tags": [
        "munger",
        "quality",
        "partnership",
        "buffett"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'influence de Munger",
            "en": "Munger's influence"
          },
          "body": {
            "fr": "Comment son associé Charlie Munger a fait évoluer la philosophie d'investissement de Buffett.",
            "en": "How his partner Charlie Munger reshaped Buffett's investing philosophy."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Au-delà du bon marché",
            "en": "Beyond the bargain"
          },
          "body": {
            "fr": "Munger l'a poussé à quitter les affaires médiocres mais bradées pour viser d'excellentes entreprises à prix correct.",
            "en": "Munger pushed him to leave mediocre bargains behind and aim for excellent businesses at fair prices."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "See's Candies",
            "en": "See's Candies"
          },
          "body": {
            "fr": "L'achat de See's Candies illustre ce tournant : payer plus cher pour une marque durable en vaut la peine.",
            "en": "Buying See's Candies marked the turn: paying up for a durable brand can be well worth it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un vrai contrepoids",
            "en": "A real counterweight"
          },
          "body": {
            "fr": "Munger, lecteur vorace et esprit indépendant, contredisait Buffett sans détour, affinant chacune de ses décisions.",
            "en": "Munger, a voracious reader and independent mind, contradicted Buffett bluntly, sharpening every decision."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Entoure-toi de gens qui te contredisent et te font grandir. La qualité vaut souvent mieux que le simple bas prix.",
            "en": "Surround yourself with people who challenge you and help you grow. Quality often beats mere cheapness."
          }
        }
      ]
    }
  ],
  "steve-jobs": [
    {
      "concept": {
        "fr": "Le champ de distorsion de la réalité",
        "en": "The Reality Distortion Field"
      },
      "caption": {
        "fr": "Comment Jobs convainquait ses équipes de faire l'impossible 🌀",
        "en": "How Jobs convinced his teams to do the impossible 🌀"
      },
      "tags": [
        "SteveJobs",
        "leadership",
        "charisme",
        "innovation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le champ de distorsion de la réalité",
            "en": "The Reality Distortion Field"
          },
          "body": {
            "fr": "L'expression, née chez ses propres ingénieurs, décrit le talent de Jobs pour rendre l'impossible soudain possible.",
            "en": "Coined by his own engineers, the phrase captured Jobs' gift for making the impossible suddenly seem possible."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une expression empruntée à Star Trek",
            "en": "A phrase borrowed from Star Trek"
          },
          "body": {
            "fr": "C'est Bud Tribble, ingénieur du Mac, qui forge le terme pour décrire la capacité de Jobs à plier la perception de la réalité de son entourage.",
            "en": "Mac engineer Bud Tribble coined the term to describe how Jobs could bend those around him to his own view of reality."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Charisme, volonté et déni des faits",
            "en": "Charisma, will, and denial of facts"
          },
          "body": {
            "fr": "Par un mélange de conviction, de charme et d'entêtement, il persuadait ses équipes de tenir des délais et des ambitions qu'elles jugeaient irréalisables.",
            "en": "Through conviction, charm and sheer stubbornness, he persuaded teams to hit deadlines and goals they had thought impossible."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un pouvoir à double tranchant",
            "en": "A double-edged power"
          },
          "body": {
            "fr": "Ce déni pouvait pousser ses équipes à se dépasser, mais il l'a aussi conduit à nier les faits sur sa propre santé lorsqu'il a repoussé le traitement de son cancer.",
            "en": "That same denial could drive teams to greatness, but it also led him to reject the facts about his own health when he delayed treating his cancer."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Ce qu'il faut retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "Une conviction absolue peut faire plier la réalité et inspirer l'extraordinaire, mais elle devient dangereuse dès qu'on l'utilise pour se mentir à soi-même.",
            "en": "Absolute conviction can bend reality and inspire the extraordinary, but it turns dangerous the moment you use it to deceive yourself."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le pouvoir de dire non",
        "en": "The power of saying no"
      },
      "caption": {
        "fr": "En 1997, Jobs sauve Apple en supprimant presque tout ✂️",
        "en": "In 1997, Jobs saved Apple by cutting almost everything ✂️"
      },
      "tags": [
        "focus",
        "stratégie",
        "Apple",
        "simplicité"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le pouvoir de dire non",
            "en": "The power of saying no"
          },
          "body": {
            "fr": "De retour chez Apple, Jobs découvre une gamme pléthorique et confuse. Sa première décision : couper.",
            "en": "Returning to Apple, Jobs found a bloated, confusing product line. His first move was to cut."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une grille à quatre cases",
            "en": "A grid of four boxes"
          },
          "body": {
            "fr": "Lors d'une réunion, il dessine un tableau simple : grand public / pro, ordinateur de bureau / portable. Apple ne ferait plus que ces quatre produits.",
            "en": "In a meeting he drew a simple grid: consumer / pro, desktop / portable. Apple would make just those four products."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Tout le reste est abandonné",
            "en": "Everything else was killed"
          },
          "body": {
            "fr": "Il élimine des dizaines de produits, dont le Newton, pour concentrer l'énergie et l'argent sur l'essentiel.",
            "en": "He axed dozens of products, including the Newton, to pour all the energy and money into what mattered."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Sa conviction",
            "en": "His conviction"
          },
          "body": {
            "fr": "« Décider ce qu'on ne fait pas est aussi important que décider ce qu'on fait. »",
            "en": "\"Deciding what not to do is as important as deciding what to do.\""
          },
          "attribution": {
            "fr": "Steve Jobs",
            "en": "Steve Jobs"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Ce qu'il faut retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "La concentration, ce n'est pas dire oui à ce qui compte, mais dire non à des centaines de bonnes idées pour n'en garder qu'une poignée.",
            "en": "Focus isn't saying yes to what matters, it's saying no to hundreds of good ideas to keep only a handful."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Au croisement de la tech et des arts",
        "en": "Where technology meets the arts"
      },
      "caption": {
        "fr": "Le secret d'Apple selon Jobs : se tenir à un carrefour 🎨",
        "en": "Apple's secret, per Jobs: standing at a crossroads 🎨"
      },
      "tags": [
        "design",
        "créativité",
        "Apple",
        "humanités"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Technologie et arts libéraux",
            "en": "Technology and the liberal arts"
          },
          "body": {
            "fr": "Jobs revendiquait qu'Apple vivait à l'intersection de la technologie et des arts libéraux.",
            "en": "Jobs claimed Apple lived at the intersection of technology and the liberal arts."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une image récurrente dans ses keynotes",
            "en": "A recurring image in his keynotes"
          },
          "body": {
            "fr": "Il concluait souvent ses présentations sur un panneau montrant le croisement de deux rues : « Technologie » et « Arts libéraux ».",
            "en": "He often ended presentations on a slide of a street sign at the corner of \"Technology\" and \"Liberal Arts.\""
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le cours de calligraphie de Reed",
            "en": "The calligraphy class at Reed"
          },
          "body": {
            "fr": "Après avoir abandonné ses études, il suit en auditeur libre un cours de calligraphie. Dix ans plus tard, cette sensibilité donnera au Mac ses polices et sa typographie soignée.",
            "en": "After dropping out he dropped in on a calligraphy class; a decade later that sensibility gave the Mac its beautiful fonts and typography."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La beauté comme fonction",
            "en": "Beauty as a function"
          },
          "body": {
            "fr": "Pour lui, un produit n'était jamais seulement de l'ingénierie : le goût, l'émotion et l'esthétique faisaient partie de ce qui le rendait grand.",
            "en": "For him a product was never just engineering: taste, emotion and aesthetics were part of what made it great."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Ce qu'il faut retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "L'innovation la plus forte naît quand on marie la rigueur technique à la sensibilité artistique, au lieu de les opposer.",
            "en": "The strongest innovation comes from marrying technical rigor with artistic sensibility instead of pitting them against each other."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le système fermé et intégré",
        "en": "The closed, integrated system"
      },
      "caption": {
        "fr": "Pourquoi Jobs a toujours refusé d'ouvrir ses produits 🔒",
        "en": "Why Jobs always refused to open up his products 🔒"
      },
      "tags": [
        "Apple",
        "stratégie",
        "design",
        "contrôle"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le tout intégré",
            "en": "The whole widget"
          },
          "body": {
            "fr": "Jobs voulait contrôler l'expérience de bout en bout : matériel et logiciel conçus ensemble.",
            "en": "Jobs wanted to control the experience end to end: hardware and software designed together."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Fermé contre ouvert",
            "en": "Closed versus open"
          },
          "body": {
            "fr": "Là où Bill Gates concédait Windows sous licence à tous les fabricants, Jobs refusait de dissocier son logiciel du matériel Apple.",
            "en": "Where Bill Gates licensed Windows to every maker, Jobs refused to separate his software from Apple hardware."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une expérience sans compromis",
            "en": "An experience without compromise"
          },
          "body": {
            "fr": "Du Mac à l'iPod puis à l'iPhone, cette intégration garantissait, selon lui, une fluidité et une simplicité impossibles autrement.",
            "en": "From Mac to iPod to iPhone, that integration delivered, in his view, a seamlessness and simplicity impossible otherwise."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le prix du contrôle",
            "en": "The cost of control"
          },
          "body": {
            "fr": "Le livre montre le revers : ce contrôle limitait les parts de marché et frustrait ceux qui voulaient bidouiller ou personnaliser.",
            "en": "The book shows the flip side: that control capped market share and frustrated anyone who wanted to tinker or customize."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Ce qu'il faut retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "Maîtriser toute la chaîne peut créer une expérience irréprochable, mais c'est un pari : on échange l'ampleur du marché contre la perfection.",
            "en": "Owning the whole chain can create a flawless experience, but it's a bet: you trade market reach for perfection."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le soin de l'invisible",
        "en": "Caring about the unseen"
      },
      "caption": {
        "fr": "La leçon du père de Jobs qui a façonné Apple 🪵",
        "en": "The lesson from Jobs' father that shaped Apple 🪵"
      },
      "tags": [
        "artisanat",
        "perfectionnisme",
        "design",
        "Apple"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le soin de l'invisible",
            "en": "Caring about the unseen"
          },
          "body": {
            "fr": "Le perfectionnisme de Jobs allait jusqu'aux parties qu'aucun client ne verrait jamais.",
            "en": "Jobs' perfectionism reached the parts no customer would ever see."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La clôture de son père",
            "en": "His father's fence"
          },
          "body": {
            "fr": "Son père adoptif, Paul, lui a appris à soigner l'arrière d'une clôture ou d'un meuble autant que la face visible.",
            "en": "His adoptive father, Paul, taught him to finish the back of a fence or cabinet as carefully as the front."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La leçon transmise",
            "en": "The lesson passed down"
          },
          "body": {
            "fr": "« Il faut que l'arrière de la clôture, que personne ne verra, soit aussi beau que l'avant. »",
            "en": "\"You've got to make the back of the fence, that nobody will see, just as good looking as the front of the fence.\""
          },
          "attribution": {
            "fr": "Paul Jobs, rapporté par Steve Jobs",
            "en": "Paul Jobs, as recounted by Steve Jobs"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'intérieur du Macintosh",
            "en": "The inside of the Macintosh"
          },
          "body": {
            "fr": "Il exigeait que le circuit imprimé du Mac soit élégant, alors même que presque personne n'ouvrirait jamais le boîtier.",
            "en": "He demanded the Mac's internal circuit board look elegant, even though almost no one would ever open the case."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Ce qu'il faut retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "La vraie qualité se mesure au soin qu'on met dans ce que personne ne remarquera. C'est là que naît la fierté du métier.",
            "en": "True quality shows in the care you put into what no one will notice. That's where craftsmanship and pride are born."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La simplicité comme sophistication ultime",
        "en": "Simplicity as ultimate sophistication"
      },
      "caption": {
        "fr": "La devise qui guide Apple depuis 1977 ⚪",
        "en": "The motto that has guided Apple since 1977 ⚪"
      },
      "tags": [
        "simplicité",
        "design",
        "Apple",
        "JonyIve"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La simplicité, sophistication ultime",
            "en": "Simplicity, the ultimate sophistication"
          },
          "body": {
            "fr": "Dès la toute première brochure Apple, la simplicité s'impose comme le fil rouge de la philosophie de Jobs.",
            "en": "From Apple's very first brochure, simplicity ran as the thread through Jobs' philosophy."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La première brochure Apple",
            "en": "Apple's first brochure"
          },
          "body": {
            "fr": "« La simplicité est la sophistication ultime. »",
            "en": "\"Simplicity is the ultimate sophistication.\""
          },
          "attribution": {
            "fr": "Slogan de la première brochure Apple (1977)",
            "en": "Tagline of Apple's first brochure (1977)"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Dompter la complexité, pas l'ignorer",
            "en": "Conquer complexity, don't ignore it"
          },
          "body": {
            "fr": "Avec Jony Ive, Jobs comprend que la vraie simplicité exige de maîtriser en profondeur la complexité, puis de la faire disparaître.",
            "en": "With Jony Ive, Jobs saw that real simplicity means deeply mastering complexity, then making it vanish."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Retirer jusqu'à l'essentiel",
            "en": "Stripping down to the essential"
          },
          "body": {
            "fr": "Souris à un seul bouton, iPod sans interrupteur : Jobs supprimait tout ce qui n'était pas indispensable.",
            "en": "A one-button mouse, an iPod with no on-off switch: Jobs removed anything that wasn't essential."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Ce qu'il faut retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "Simplifier n'est pas appauvrir : c'est le fruit d'un travail acharné pour ne garder que ce qui compte vraiment.",
            "en": "Simplifying isn't stripping value away: it's the hard-won result of keeping only what truly matters."
          }
        }
      ]
    }
  ],
  "elon-musk": [
    {
      "concept": {
        "fr": "L'Algorithme",
        "en": "The Algorithm"
      },
      "caption": {
        "fr": "Les 5 étapes que Musk fait réciter comme un mantra dans chaque usine 🏭",
        "en": "The 5 steps Musk makes every factory recite like a mantra 🏭"
      },
      "tags": [
        "Algorithme",
        "Ingenierie",
        "Production",
        "Musk"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'Algorithme",
            "en": "The Algorithm"
          },
          "body": {
            "fr": "Un processus en 5 étapes que Musk répète comme un mantra chez Tesla et SpaceX pour concevoir plus vite et moins cher.",
            "en": "A five-step process Musk repeats like a mantra at Tesla and SpaceX to build faster and cheaper."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "1. Questionne chaque exigence",
            "en": "1. Question every requirement"
          },
          "body": {
            "fr": "Chaque exigence doit porter le nom de la personne qui l'a posée, jamais celui d'un service. On peut alors la remettre en cause.",
            "en": "Every requirement must carry the name of the person who set it, never a department's. Only then can you challenge it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "2. Supprime des pièces et des étapes",
            "en": "2. Delete parts and steps"
          },
          "body": {
            "fr": "Retire toute pièce ou étape possible. Si tu ne dois pas en rajouter au moins 10% ensuite, tu n'as pas assez supprimé.",
            "en": "Remove any part or process step you can. If you don't have to add back at least 10% later, you didn't delete enough."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "3. Simplifie, puis accélère",
            "en": "3. Simplify, then accelerate"
          },
          "body": {
            "fr": "Optimise seulement après avoir supprimé, puis accélère le rythme. L'erreur classique est d'optimiser une pièce qui n'aurait pas dû exister.",
            "en": "Optimize only after deleting, then speed up the cycle. The classic mistake is optimizing a part that should not exist."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "4. Automatise en dernier",
            "en": "4. Automate last"
          },
          "body": {
            "fr": "L'erreur des usines du Nevada et de Fremont fut d'automatiser d'abord. L'automatisation vient toujours à la fin.",
            "en": "The mistake at the Nevada and Fremont plants was automating first. Automation always comes last."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant d'optimiser ou d'automatiser un problème, demande-toi d'abord s'il doit exister. On simplifie souvent ce qu'il fallait supprimer.",
            "en": "Before optimizing or automating a problem, ask if it should exist at all. We often streamline what we should have deleted."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'Indice d'Idiotie",
        "en": "The Idiot Index"
      },
      "caption": {
        "fr": "La formule brutale que Musk utilise pour repérer une pièce trop chère 💸",
        "en": "The brutal formula Musk uses to spot an overpriced part 💸"
      },
      "tags": [
        "IdiotIndex",
        "Couts",
        "SpaceX",
        "Ingenierie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'Indice d'Idiotie",
            "en": "The Idiot Index"
          },
          "body": {
            "fr": "Un ratio simple que Musk applique à un composant pour révéler à quel point sa conception ou sa fabrication est absurde.",
            "en": "A simple ratio Musk applies to a component to reveal how idiotic its design or manufacturing is."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La formule",
            "en": "The formula"
          },
          "body": {
            "fr": "Coût total de la pièce finie divisé par le coût de sa matière première brute. Plus le chiffre est élevé, plus la conception est absurde.",
            "en": "Total cost of the finished part divided by the cost of its raw material. The higher the number, the more idiotic the design."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un indice élevé = un signal",
            "en": "A high index = a signal"
          },
          "body": {
            "fr": "Si une pièce coûte bien plus que son métal, l'argent part en process, en marge ou en complexité inutile.",
            "en": "If a part costs far more than its metal, money is lost to process, markup or needless complexity."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La réponse : refaire soi-même",
            "en": "The answer: build it yourself"
          },
          "body": {
            "fr": "Chez SpaceX, cette logique pousse à fabriquer en interne des pièces vendues plusieurs fois leur valeur matière par les fournisseurs.",
            "en": "At SpaceX, this logic pushes teams to build in-house parts that suppliers sold at several times their material value."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ramène chaque coût à sa matière première. L'écart mesure l'inefficacité que tu peux attaquer.",
            "en": "Trace every cost back to its raw material. The gap measures the inefficiency you can attack."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Raisonner par principes premiers",
        "en": "First-Principles Thinking"
      },
      "caption": {
        "fr": "Comment Musk a fait fondre le coût d'une fusée en repartant de la physique ⚡",
        "en": "How Musk slashed a rocket's cost by reasoning from physics ⚡"
      },
      "tags": [
        "FirstPrinciples",
        "Physique",
        "Innovation",
        "SpaceX"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les principes premiers",
            "en": "First principles"
          },
          "body": {
            "fr": "La méthode de pensée que Musk emprunte à la physique : partir des vérités fondamentales, pas des analogies.",
            "en": "The thinking method Musk borrows from physics: reason up from fundamental truths, not analogies."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ignorer 'c'est comme ça'",
            "en": "Ignore 'that's how it's done'"
          },
          "body": {
            "fr": "Raisonner par analogie copie l'existant. Raisonner par principes premiers décompose un problème jusqu'à ses lois physiques.",
            "en": "Reasoning by analogy copies the past. First principles break a problem down to its physical laws."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le cas des fusées",
            "en": "The rocket case"
          },
          "body": {
            "fr": "L'industrie tenait le prix des fusées pour acquis. Musk chiffra les matériaux bruts (aluminium, titane, cuivre, fibre de carbone) : à peine ~2% du prix de vente.",
            "en": "The industry took rocket prices as fixed. Musk priced the raw materials (aluminum, titanium, copper, carbon fiber): barely ~2% of the sale price."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La physique comme cadre",
            "en": "Physics as the framework"
          },
          "body": {
            "fr": "Formé à la physique, Musk teste chaque idée contre les lois de la nature avant les habitudes du secteur.",
            "en": "Trained in physics, Musk tests each idea against the laws of nature before industry habits."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Face à un 'impossible', demande : qu'est-ce que la physique interdit vraiment ? Souvent, le reste n'est qu'habitude.",
            "en": "Facing an 'impossible', ask: what does physics actually forbid? Often the rest is just habit."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le mode démon",
        "en": "Demon Mode"
      },
      "caption": {
        "fr": "Isaacson relie la brutalité de Musk aux blessures de son enfance 🌑",
        "en": "Isaacson traces Musk's harshness back to the wounds of his childhood 🌑"
      },
      "tags": [
        "DemonMode",
        "Enfance",
        "Psychologie",
        "Biographie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le mode démon",
            "en": "Demon mode"
          },
          "body": {
            "fr": "Le terme employé par ses proches pour décrire l'état froid et impitoyable dans lequel Musk peut basculer.",
            "en": "The term his inner circle uses for the cold, ruthless state Musk can slip into."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les racines : l'Afrique du Sud",
            "en": "The roots: South Africa"
          },
          "body": {
            "fr": "Isaacson décrit une enfance marquée par la violence de la cour d'école et par un père, Errol, psychologiquement abusif.",
            "en": "Isaacson describes a childhood scarred by schoolyard violence and a psychologically abusive father, Errol."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La douleur comme carburant",
            "en": "Pain as fuel"
          },
          "body": {
            "fr": "Le livre suggère que cette souffrance a forgé une tolérance extrême au risque et à l'inconfort, pour lui comme pour ses équipes.",
            "en": "The book suggests this pain forged an extreme tolerance for risk and discomfort, for him and for his teams."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Les derniers mots du livre",
            "en": "The book's closing lines"
          },
          "body": {
            "fr": "Parfois, les grands innovateurs sont de grands enfants avides de risque qui résistent à l'apprentissage de la propreté. Ils peuvent être imprudents, gênants, parfois même toxiques. Ils peuvent aussi être fous. Assez fous pour croire qu'ils vont changer le monde.",
            "en": "Sometimes great innovators are risk-seeking man-children who resist potty training. They can be reckless, cringeworthy, sometimes even toxic. They can also be crazy. Crazy enough to think they can change the world."
          },
          "attribution": {
            "fr": "Walter Isaacson, Elon Musk",
            "en": "Walter Isaacson, Elon Musk"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le livre ne sépare pas le génie de la blessure : les mêmes démons qui le rendent cruel nourrissent son audace.",
            "en": "The book never separates the genius from the wound: the same demons that make him cruel feed his boldness."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le sentiment d'urgence maniaque",
        "en": "The Maniacal Sense of Urgency"
      },
      "caption": {
        "fr": "Pourquoi Musk fabrique des deadlines impossibles et dort sur le sol de l'usine ⏱️",
        "en": "Why Musk manufactures impossible deadlines and sleeps on the factory floor ⏱️"
      },
      "tags": [
        "Urgence",
        "Surge",
        "Deadlines",
        "Management"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'urgence maniaque",
            "en": "Maniacal urgency"
          },
          "body": {
            "fr": "Un trait récurrent du livre : Musk impose des échéances irréalistes pour forcer l'impossible.",
            "en": "A recurring theme of the book: Musk imposes unrealistic deadlines to force the impossible."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des deadlines artificielles",
            "en": "Artificial deadlines"
          },
          "body": {
            "fr": "Même quand la date est intenable, la pression extrême sert à révéler ce qui est vraiment possible plutôt que confortable.",
            "en": "Even when a date is unmeetable, the extreme pressure exposes what is truly possible rather than comfortable."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La 'surge'",
            "en": "The 'surge'"
          },
          "body": {
            "fr": "Musk débarque, concentre toutes les ressources sur un goulot d'étranglement et dort sur place jusqu'à résolution.",
            "en": "Musk swoops in, pours every resource onto one bottleneck and sleeps on-site until it breaks."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'ultimatum 'hardcore'",
            "en": "The 'hardcore' ultimatum"
          },
          "body": {
            "fr": "Chez Twitter, il exige un engagement 'extrêmement hardcore' : longues heures, haute intensité, ou la porte.",
            "en": "At Twitter he demands an 'extremely hardcore' commitment: long hours, high intensity, or leave."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'urgence de Musk est un outil, pas un accident. Efficace pour percer, brutale pour les humains qui la subissent.",
            "en": "Musk's urgency is a tool, not an accident. Effective for breakthroughs, brutal on the humans under it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La machine qui fabrique la machine",
        "en": "The Machine That Builds the Machine"
      },
      "caption": {
        "fr": "La vraie difficulté n'est pas la voiture, c'est l'usine qui la produit 🔧",
        "en": "The hard part isn't the car, it's the factory that produces it 🔧"
      },
      "tags": [
        "Production",
        "Usine",
        "Tesla",
        "Manufacturing"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'usine est le produit",
            "en": "The factory is the product"
          },
          "body": {
            "fr": "Une conviction centrale de Musk : concevoir l'usine est plus dur, et plus stratégique, que concevoir le produit.",
            "en": "A core Musk conviction: designing the factory is harder, and more strategic, than designing the product."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'enfer de la production",
            "en": "Production hell"
          },
          "body": {
            "fr": "La Model 3 faillit couler Tesla non par sa conception, mais par l'incapacité à la fabriquer en volume.",
            "en": "The Model 3 nearly sank Tesla not from its design, but from the inability to build it at volume."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Trop d'automatisation, trop tôt",
            "en": "Too much automation, too soon"
          },
          "body": {
            "fr": "Musk avait sur-automatisé la ligne du Nevada. Il dut arracher des robots et remettre des humains pour avancer.",
            "en": "Musk over-automated the Nevada line. He had to rip out robots and put humans back to move forward."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'intégration verticale",
            "en": "Vertical integration"
          },
          "body": {
            "fr": "Contrôler la chaîne, des matériaux au logiciel, permet d'appliquer l'Algorithme partout et de casser les coûts.",
            "en": "Controlling the chain, from materials to software, lets him apply the Algorithm everywhere and crush costs."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Un bon prototype ne prouve rien. L'avantage durable naît de la capacité à le produire à grande échelle.",
            "en": "A great prototype proves nothing. Lasting advantage comes from the ability to produce it at scale."
          }
        }
      ]
    }
  ],
  "source-code-gates": [
    {
      "concept": {
        "fr": "Apprendre à penser avec Gami",
        "en": "Learning to think with Gami"
      },
      "caption": {
        "fr": "Sa première prof de stratégie ? Sa grand-mère, un jeu de cartes à la main. 🃏",
        "en": "His first strategy teacher? His grandmother, deck of cards in hand. 🃏"
      },
      "tags": [
        "Gami",
        "cartes",
        "strategie",
        "enfance"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Gami et les cartes",
            "en": "Gami and the cards"
          },
          "body": {
            "fr": "La grand-mère de Bill Gates lui a appris à réfléchir en jouant aux cartes.",
            "en": "Bill Gates's grandmother taught him to think by playing cards."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une adversaire redoutable",
            "en": "A fierce opponent"
          },
          "body": {
            "fr": "Gami ne le laissait jamais gagner : chaque partie était une leçon de concentration.",
            "en": "Gami never let him win: every game was a lesson in focus."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Compter et anticiper",
            "en": "Count and anticipate"
          },
          "body": {
            "fr": "Elle l'obligeait à suivre les cartes, à anticiper les coups et à calculer les probabilités.",
            "en": "She pushed him to track the cards, anticipate moves, and weigh the odds."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le goût de la compétition",
            "en": "The taste for competition"
          },
          "body": {
            "fr": "Ces duels familiaux ont nourri chez lui une envie de gagner qui ne l'a plus quitté.",
            "en": "These family duels fed a will to win that never left him."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "Les jeux de l'enfance peuvent forger une façon de penser : stratégie, patience et effort.",
            "en": "Childhood games can shape how you think: strategy, patience, and effort."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le hasard d'un ordinateur à Lakeside",
        "en": "A lucky computer at Lakeside"
      },
      "caption": {
        "fr": "À 13 ans, un club de mères lui ouvre sans le savoir la porte de sa vie. 💾",
        "en": "At 13, a mothers' club unknowingly opened the door to his life. 💾"
      },
      "tags": [
        "Lakeside",
        "teletype",
        "informatique",
        "1968"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La machine qui a tout changé",
            "en": "The machine that changed everything"
          },
          "body": {
            "fr": "En 1968, l'école Lakeside installe un téléscripteur relié à un ordinateur.",
            "en": "In 1968, Lakeside installed a teletype linked to a computer."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Financé par les mères d'élèves",
            "en": "Funded by the mothers' club"
          },
          "body": {
            "fr": "Le club des mères de Lakeside paie le temps de calcul grâce aux recettes d'une vente de charité.",
            "en": "Lakeside's Mothers' Club paid for computer time with proceeds from a rummage sale."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une révélation immédiate",
            "en": "An instant obsession"
          },
          "body": {
            "fr": "Gates, 13 ans, est happé : il passe tout son temps libre devant la machine.",
            "en": "Gates, 13, was hooked, spending every free hour at the machine."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un accès rare à l'époque",
            "en": "Rare access for the time"
          },
          "body": {
            "fr": "Très peu d'adolescents avaient alors accès à un ordinateur : une chance décisive.",
            "en": "Very few teenagers had computer access then—a decisive stroke of luck."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "Une opportunité rare, saisie à fond, peut décider d'une trajectoire entière.",
            "en": "A rare opportunity, seized fully, can set an entire life's course."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Kent Evans, l'ami perdu",
        "en": "Kent Evans, the friend he lost"
      },
      "caption": {
        "fr": "Avant Paul Allen, il y avait Kent — et une amitié brisée trop tôt. 💔",
        "en": "Before Paul Allen, there was Kent—a friendship cut short. 💔"
      },
      "tags": [
        "KentEvans",
        "amitie",
        "Lakeside",
        "deuil"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'ami d'avant Microsoft",
            "en": "The friend before Microsoft"
          },
          "body": {
            "fr": "Le premier grand partenaire de Bill Gates n'était pas Paul Allen, mais Kent Evans.",
            "en": "Bill Gates's first great partner wasn't Paul Allen—it was Kent Evans."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Deux ambitieux",
            "en": "Two ambitious kids"
          },
          "body": {
            "fr": "Kent et lui rêvaient déjà de créer des entreprises et dévoraient les revues économiques.",
            "en": "Kent and Bill already dreamed of building companies and devoured business magazines."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le projet des emplois du temps",
            "en": "The scheduling project"
          },
          "body": {
            "fr": "Ensemble, ils s'attaquent au système qui répartit les élèves de Lakeside dans les cours.",
            "en": "Together they took on the system that sorted Lakeside's students into classes."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une disparition brutale",
            "en": "A sudden loss"
          },
          "body": {
            "fr": "En 1972, Kent meurt dans un accident de montagne. Gates en reste marqué à vie.",
            "en": "In 1972, Kent died in a mountaineering accident—a loss Gates carried for life."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "Derrière les grandes réussites, il y a des amitiés fondatrices et des absences qui comptent.",
            "en": "Behind great successes lie formative friendships—and absences that still matter."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "« Câblé différemment »",
        "en": "\"Wired differently\""
      },
      "caption": {
        "fr": "Enfant, il se balançait pour se concentrer. Adulte, il en parle sans détour. 🧠",
        "en": "As a boy he rocked to focus. As an adult, he says it plainly. 🧠"
      },
      "tags": [
        "neurodiversite",
        "autisme",
        "introspection",
        "enfance"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Un cerveau à part",
            "en": "A different mind"
          },
          "body": {
            "fr": "Gates revient sur l'enfant qu'il était : intense, focalisé, parfois à côté des codes sociaux.",
            "en": "Gates reflects on his younger self: intense, hyper-focused, sometimes out of step socially."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le diagnostic d'aujourd'hui",
            "en": "Today's diagnosis"
          },
          "body": {
            "fr": "Il écrit qu'enfant aujourd'hui, il serait probablement diagnostiqué sur le spectre autistique.",
            "en": "He writes that as a child today, he'd likely be diagnosed on the autism spectrum."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Se balancer pour penser",
            "en": "Rocking to think"
          },
          "body": {
            "fr": "Petit, il se balançait d'avant en arrière, un mouvement qui l'aidait à se concentrer.",
            "en": "As a boy he rocked back and forth, a motion that helped him concentrate."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une force autant qu'un défi",
            "en": "A strength and a challenge"
          },
          "body": {
            "fr": "Cette hyper-concentration nourrit son obsession du code, même si elle complique le social.",
            "en": "That hyper-focus fueled his obsession with code, even as it made socializing harder."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "Gates présente sa différence non comme un défaut, mais comme une part de ce qui l'a fait lui.",
            "en": "Gates frames his difference not as a flaw but as part of what made him who he is."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Du temps machine contre des bugs",
        "en": "Computer time for finding bugs"
      },
      "caption": {
        "fr": "Comment des ados ont eu un ordinateur quasi gratuit : en le faisant planter. 🐛",
        "en": "How teens got near-free computer time: by crashing the machine. 🐛"
      },
      "tags": [
        "CCubed",
        "bugs",
        "apprentissage",
        "programmation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Payés en temps machine",
            "en": "Paid in computer time"
          },
          "body": {
            "fr": "Une entreprise offre du temps de calcul au groupe de Gates en échange d'un service.",
            "en": "A company gave Gates's group computer time in exchange for a service."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Chasseurs de bugs",
            "en": "Bug hunters"
          },
          "body": {
            "fr": "Leur mission : pousser le système à fond pour trouver les failles et le faire planter.",
            "en": "Their job: hammer the system to find flaws and make it crash."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Apprendre dans les poubelles",
            "en": "Learning from the trash"
          },
          "body": {
            "fr": "Pour comprendre la machine, ils fouillaient les listings jetés par les ingénieurs.",
            "en": "To understand the machine, they dug printouts out of the company's garbage."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des heures presque illimitées",
            "en": "Near-unlimited hours"
          },
          "body": {
            "fr": "Cet accès rare transforme des amateurs curieux en vrais programmeurs.",
            "en": "This rare access turned curious hobbyists into real programmers."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "On apprend un système en le poussant à ses limites, pas en le lisant de loin.",
            "en": "You learn a system by pushing it to its limits, not by reading about it from afar."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Traf-O-Data, l'échec fondateur",
        "en": "Traf-O-Data, the founding failure"
      },
      "caption": {
        "fr": "Avant Microsoft, une start-up ratée qui leur a tout appris. 🚦",
        "en": "Before Microsoft, a failed startup that taught them everything. 🚦"
      },
      "tags": [
        "TrafOData",
        "echec",
        "entrepreneuriat",
        "PaulAllen"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La start-up d'avant Microsoft",
            "en": "The startup before Microsoft"
          },
          "body": {
            "fr": "Gates et Allen fondent Traf-O-Data pour analyser des données de trafic routier.",
            "en": "Gates and Allen founded Traf-O-Data to analyze road-traffic data."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une machine sur mesure",
            "en": "A custom machine"
          },
          "body": {
            "fr": "Ils conçoivent un appareil autour d'un microprocesseur Intel pour lire les bandes de comptage.",
            "en": "They built a device around an Intel microprocessor to read traffic-counter tapes."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un demi-échec commercial",
            "en": "A commercial flop"
          },
          "body": {
            "fr": "Le produit ne décolle pas vraiment, mais l'aventure leur apprend le métier.",
            "en": "The product never really took off, but the venture taught them the trade."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une répétition générale",
            "en": "A dress rehearsal"
          },
          "body": {
            "fr": "Traf-O-Data devient le banc d'essai des compétences qui feront Microsoft.",
            "en": "Traf-O-Data became the testing ground for the skills that would build Microsoft."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "Un échec bien digéré est souvent la meilleure préparation au succès suivant.",
            "en": "A failure well digested is often the best preparation for the next success."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'Altair et la naissance de Microsoft",
        "en": "The Altair and the birth of Microsoft"
      },
      "caption": {
        "fr": "Un magazine, quelques semaines de code, et une entreprise est née. ⚡",
        "en": "One magazine, a few weeks of code, and a company was born. ⚡"
      },
      "tags": [
        "Altair",
        "BASIC",
        "Microsoft",
        "1975"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La couverture qui a tout lancé",
            "en": "The cover that started it all"
          },
          "body": {
            "fr": "En 1975, un magazine présente l'Altair 8800 : Gates et Allen y voient le futur.",
            "en": "In 1975, a magazine unveiled the Altair 8800—Gates and Allen saw the future."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Vendre avant d'avoir codé",
            "en": "Selling before coding"
          },
          "body": {
            "fr": "Ils annoncent au fabricant un BASIC fonctionnel... qu'ils n'ont pas encore écrit.",
            "en": "They told the maker they had a working BASIC—which they hadn't written yet."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Coder sans la machine",
            "en": "Coding without the machine"
          },
          "body": {
            "fr": "Ils écrivent le logiciel en simulant l'Altair sur un autre ordinateur, sans jamais l'avoir touché.",
            "en": "They wrote the software by simulating the Altair on another computer, never having touched it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Maintenant ou jamais",
            "en": "Now or never"
          },
          "body": {
            "fr": "Gates est convaincu que la révolution de l'ordinateur personnel se fera sans eux s'ils tardent.",
            "en": "Gates was sure the personal-computer revolution would happen without them if they waited."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "The takeaway"
          },
          "body": {
            "fr": "Le bon moment ne se répète pas : Microsoft naît d'une urgence saisie à temps.",
            "en": "The right moment doesn't come twice: Microsoft was born from urgency seized in time."
          }
        }
      ]
    }
  ],
  "invent-and-wander": [
    {
      "concept": {
        "fr": "Le principe du Jour 1",
        "en": "The Day 1 Principle"
      },
      "caption": {
        "fr": "Pourquoi Bezos a passé 30 ans à protéger un seul mot : \"Jour 1\" 🌅",
        "en": "Why Bezos spent 30 years protecting a single word: \"Day 1\" 🌅"
      },
      "tags": [
        "Day1",
        "Amazon",
        "Bezos",
        "culture"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "C'est toujours le Jour 1",
            "en": "It's Always Day 1"
          },
          "body": {
            "fr": "Bezos a nommé un bâtiment Amazon \"Day 1\" et a emporté ce nom partout où il est allé. Ce n'est pas un slogan, c'est une défense.",
            "en": "Bezos named an Amazon building \"Day 1\" and took the name with him everywhere. It's not a slogan, it's a defense."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le Jour 2, c'est la mort",
            "en": "Day 2 Is Death"
          },
          "body": {
            "fr": "Le Jour 2, c'est la stase, suivie de l'insignifiance, puis d'un déclin douloureux, puis de la mort. D'où l'obsession de rester au Jour 1.",
            "en": "Day 2 is stasis, followed by irrelevance, then painful decline, then death. Hence the obsession with staying at Day 1."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ce qui protège le Jour 1",
            "en": "What Protects Day 1"
          },
          "body": {
            "fr": "Quatre garde-fous : l'obsession du client, la méfiance envers les indicateurs de substitution, l'adoption des tendances externes et la prise de décision rapide.",
            "en": "Four safeguards: customer obsession, wariness of proxies, embracing external trends, and high-velocity decision-making."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le piège des indicateurs",
            "en": "The Proxy Trap"
          },
          "body": {
            "fr": "Les grandes structures gèrent des processus au lieu de servir des clients. Le processus devient une fin en soi, et on oublie de vérifier le résultat. C'est un symptôme du Jour 2.",
            "en": "Large organizations manage processes instead of serving customers. The process becomes the thing, and you stop checking the outcome. That's a Day 2 symptom."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Dans ses mots",
            "en": "In His Words"
          },
          "body": {
            "fr": "\"Le Jour 2, c'est la stase. Suivie de l'insignifiance. Suivie d'un déclin atroce et douloureux. Suivi de la mort. Et c'est pourquoi c'est toujours le Jour 1.\"",
            "en": "\"Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1.\""
          },
          "attribution": {
            "fr": "Jeff Bezos, lettre aux actionnaires 2016",
            "en": "Jeff Bezos, 2016 shareholder letter"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Traitez chaque jour comme un début. Dès qu'une organisation se croit arrivée, elle commence à mourir. Restez affamé, curieux, orienté client.",
            "en": "Treat every day like a beginning. The moment an organization thinks it has arrived, it starts to die. Stay hungry, curious, customer-focused."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le cadre de minimisation des regrets",
        "en": "The Regret Minimization Framework"
      },
      "caption": {
        "fr": "Le cadre mental que Bezos a utilisé pour quitter Wall Street et parier sur Internet 🧭",
        "en": "The mental framework Bezos used to leave Wall Street and bet on the internet 🧭"
      },
      "tags": [
        "decision",
        "regret",
        "career",
        "Bezos"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Minimiser les regrets",
            "en": "Minimize Regret"
          },
          "body": {
            "fr": "Quitter un poste bien payé à Wall Street pour vendre des livres en ligne ? Bezos s'est appuyé sur un cadre mental pour trancher.",
            "en": "Leave a high-paying Wall Street job to sell books online? Bezos leaned on a mental framework to decide."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Projetez-vous à 80 ans",
            "en": "Project to Age 80"
          },
          "body": {
            "fr": "Imaginez-vous à 80 ans, en train de regarder votre vie en arrière. L'objectif : minimiser le nombre de regrets que vous aurez à cet âge.",
            "en": "Picture yourself at 80, looking back on your life. The goal: minimize the number of regrets you'll have at that age."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "On ne regrette pas d'avoir essayé",
            "en": "You Don't Regret Trying"
          },
          "body": {
            "fr": "Bezos savait qu'à 80 ans il ne regretterait pas d'avoir essayé et échoué. Ce qu'il regretterait, c'est de n'avoir jamais tenté.",
            "en": "Bezos knew that at 80 he wouldn't regret having tried and failed. What he'd regret was never having tried at all."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le regret l'emporte sur le salaire",
            "en": "Regret Beats Salary"
          },
          "body": {
            "fr": "Le bonus de fin d'année pesait dans la balance à court terme. Mais à l'échelle d'une vie, il ne pesait rien face au regret potentiel.",
            "en": "The year-end bonus mattered in the short term. But over a lifetime, it weighed nothing against the potential regret."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Dans ses mots",
            "en": "In His Words"
          },
          "body": {
            "fr": "\"Je savais qu'à quatre-vingts ans je ne regretterais pas d'avoir essayé. Je savais que si j'échouais, je ne le regretterais pas. Mais je savais que la seule chose que je pourrais regretter, c'était de ne jamais avoir tenté.\"",
            "en": "\"I knew that when I was eighty, I was not going to regret having tried this. I knew that if I failed, I wouldn't regret that. But I knew the one thing I might regret is not ever having tried.\""
          },
          "attribution": {
            "fr": "Jeff Bezos",
            "en": "Jeff Bezos"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Face à un grand choix, ne comptez pas les gains immédiats. Demandez-vous ce que votre \"vous\" de 80 ans regretterait le plus.",
            "en": "Facing a big choice, don't tally immediate gains. Ask what your 80-year-old self would regret most."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Portes à sens unique vs portes à double sens",
        "en": "One-Way vs Two-Way Doors"
      },
      "caption": {
        "fr": "Deux types de décisions. La plupart des gens les confondent. ⚡",
        "en": "Two kinds of decisions. Most people confuse them. ⚡"
      },
      "tags": [
        "decisions",
        "speed",
        "leadership",
        "Amazon"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Type 1 ou Type 2 ?",
            "en": "Type 1 or Type 2?"
          },
          "body": {
            "fr": "Bezos classe les décisions en deux catégories. Les traiter de la même façon ralentit une entreprise entière.",
            "en": "Bezos sorts decisions into two buckets. Treating them the same slows an entire company down."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les portes à sens unique",
            "en": "One-Way Doors"
          },
          "body": {
            "fr": "Les décisions de Type 1 sont lourdes de conséquences et quasi irréversibles. Vous ne pouvez pas revenir en arrière. Elles méritent méthode et délibération.",
            "en": "Type 1 decisions are consequential and nearly irreversible. You can't go back. They deserve methodical, deliberate care."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les portes à double sens",
            "en": "Two-Way Doors"
          },
          "body": {
            "fr": "Les décisions de Type 2 sont réversibles. Si le résultat déplaît, on rouvre la porte. Elles doivent être prises vite, par des individus ou de petites équipes.",
            "en": "Type 2 decisions are reversible. If you dislike the result, you reopen the door. They should be made fast, by individuals or small teams."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Décidez à 70 %",
            "en": "Decide at 70%"
          },
          "body": {
            "fr": "Attendre 90 % de l'information, c'est trop lent. Bezos vise environ 70 % des données souhaitées, puis corrige vite si nécessaire.",
            "en": "Waiting for 90% of the information is too slow. Bezos aims for about 70% of the data you wish you had, then course-corrects quickly."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Dans ses mots",
            "en": "In His Words"
          },
          "body": {
            "fr": "\"La plupart des décisions devraient probablement être prises avec environ 70 % de l'information que vous auriez souhaité avoir.\"",
            "en": "\"Most decisions should probably be made with somewhere around 70 percent of the information you wish you had.\""
          },
          "attribution": {
            "fr": "Jeff Bezos, lettre aux actionnaires 2016",
            "en": "Jeff Bezos, 2016 shareholder letter"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de décider, demandez-vous : cette porte se rouvre-t-elle ? Si oui, foncez. Sinon, ralentissez. La vitesse mal placée coûte cher.",
            "en": "Before deciding, ask: does this door reopen? If yes, move fast. If no, slow down. Misplaced speed is expensive."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'obsession du client",
        "en": "Customer Obsession"
      },
      "caption": {
        "fr": "Regarder ses concurrents, ou regarder ses clients ? Le choix change tout. 👀",
        "en": "Watch your competitors, or watch your customers? The choice changes everything. 👀"
      },
      "tags": [
        "customers",
        "strategy",
        "Amazon",
        "focus"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Obsédé par le client",
            "en": "Obsessed With the Customer"
          },
          "body": {
            "fr": "Beaucoup d'entreprises se disent orientées client. Amazon place l'obsession du client au-dessus de tout le reste.",
            "en": "Many companies say they're customer-focused. Amazon puts customer obsession above everything else."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Client, pas concurrent",
            "en": "Customer, Not Competitor"
          },
          "body": {
            "fr": "Être centré sur le concurrent vous fait attendre qu'il bouge. Être centré sur le client vous pousse à agir avant même qu'on vous le demande.",
            "en": "Being competitor-focused makes you wait for a rival to move. Being customer-focused makes you act before anyone even asks."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les clients sont divinement insatisfaits",
            "en": "Customers Are Divinely Discontent"
          },
          "body": {
            "fr": "Leurs attentes ne cessent de monter. Ce qui émerveille aujourd'hui devient la norme demain. Cette insatisfaction vous tire vers le haut.",
            "en": "Their expectations never stop rising. What wows today becomes the baseline tomorrow. That discontent pulls you forward."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'obsession qui fait inventer",
            "en": "Obsession That Invents"
          },
          "body": {
            "fr": "Servir un client qui ne sait pas encore ce qu'il veut oblige à inventer en son nom. Le client devient le moteur de l'innovation.",
            "en": "Serving a customer who doesn't yet know what they want forces you to invent on their behalf. The customer becomes the engine of innovation."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Choisissez qui vous obsède. Suivre le client vous garde en avance ; suivre le concurrent vous garde en retard.",
            "en": "Choose who you obsess over. Following the customer keeps you ahead; following the competitor keeps you behind."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Échec et invention, jumeaux inséparables",
        "en": "Failure and Invention as Twins"
      },
      "caption": {
        "fr": "Pourquoi Bezos parie sur des choses vouées à échouer 🎲",
        "en": "Why Bezos bets on things destined to fail 🎲"
      },
      "tags": [
        "invention",
        "failure",
        "risk",
        "experiments"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Inventer, c'est échouer",
            "en": "To Invent Is to Fail"
          },
          "body": {
            "fr": "Amazon revendique d'être le meilleur endroit au monde pour échouer. Sans échec, pas d'invention.",
            "en": "Amazon claims to be the best place in the world to fail. Without failure, there is no invention."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des jumeaux inséparables",
            "en": "Inseparable Twins"
          },
          "body": {
            "fr": "L'échec et l'invention sont des jumeaux inséparables. Pour inventer, il faut expérimenter, et savoir d'avance que ça marchera, ce n'est pas une expérience.",
            "en": "Failure and invention are inseparable twins. To invent you must experiment, and knowing in advance that it will work isn't an experiment."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le baseball contre les affaires",
            "en": "Baseball vs Business"
          },
          "body": {
            "fr": "Au baseball, un coup de circuit rapporte au plus quatre points. En affaires, la distribution n'est pas plafonnée : une seule tentative peut en rapporter mille. D'où l'intérêt de tenter de grands coups.",
            "en": "In baseball, a home run scores at most four runs. In business the outcome distribution isn't capped: a single swing can score a thousand. That's why it pays to swing big."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des échecs à la bonne échelle",
            "en": "Failures That Scale"
          },
          "body": {
            "fr": "À mesure qu'Amazon grandit, ses échecs doivent grandir aussi. Le Fire Phone a échoué ; les mêmes équipes ont ensuite bâti Alexa et Echo.",
            "en": "As Amazon grows, its failures must grow too. The Fire Phone failed; the same teams then built Alexa and Echo."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Dans ses mots",
            "en": "In His Words"
          },
          "body": {
            "fr": "\"Avec une chance sur dix d'un rendement de cent fois la mise, vous devriez prendre ce pari à chaque fois.\"",
            "en": "\"Given a ten percent chance of a hundred times payoff, you should take that bet every time.\""
          },
          "attribution": {
            "fr": "Jeff Bezos, lettre aux actionnaires 2015",
            "en": "Jeff Bezos, 2015 shareholder letter"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne cherchez pas seulement des paris sûrs. Cherchez des paris où la perte est limitée mais le gain immense, et répétez-les.",
            "en": "Don't only seek safe bets. Seek bets where the loss is capped but the upside is enormous, and repeat them."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'errance comme contrepoids à l'efficacité",
        "en": "Wandering as a Counterbalance"
      },
      "caption": {
        "fr": "L'efficacité seule ne mène pas aux grandes découvertes. Il faut errer. 🧭",
        "en": "Efficiency alone doesn't lead to breakthroughs. You have to wander. 🧭"
      },
      "tags": [
        "wandering",
        "discovery",
        "innovation",
        "intuition"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Inventer en errant",
            "en": "Invent and Wander"
          },
          "body": {
            "fr": "Le titre même du livre porte une idée : les grandes découvertes ne suivent pas une ligne droite.",
            "en": "The book's very title carries an idea: big discoveries don't follow a straight line."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Efficacité contre errance",
            "en": "Efficiency vs Wandering"
          },
          "body": {
            "fr": "L'efficacité optimise ce qu'on connaît déjà. L'errance, guidée par l'intuition et la curiosité, explore ce qu'on ignore encore.",
            "en": "Efficiency optimizes what you already know. Wandering, guided by hunch and curiosity, explores what you don't yet know."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ni aléatoire, ni inutile",
            "en": "Not Random, Not Wasteful"
          },
          "body": {
            "fr": "L'errance n'est pas du hasard. Elle est nourrie par le flair et la conviction que le jeu en vaut la chandelle. C'est un contrepoids nécessaire à l'efficacité.",
            "en": "Wandering isn't random. It's fed by instinct and the belief that the payoff is worthwhile. It's a necessary counterbalance to efficiency."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Dans ses mots",
            "en": "In His Words"
          },
          "body": {
            "fr": "\"En affaires, l'errance n'est pas efficace… mais elle n'est pas non plus aléatoire. Elle est guidée par le flair, l'instinct, l'intuition, la curiosité.\"",
            "en": "\"In business, wandering is not efficient… but it's also not random. It's guided by hunch, gut, intuition, curiosity.\""
          },
          "attribution": {
            "fr": "Jeff Bezos, lettre aux actionnaires 2018",
            "en": "Jeff Bezos, 2018 shareholder letter"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Réservez du temps pour explorer sans objectif immédiat. Les plus grandes trouvailles naissent souvent d'une errance guidée par la curiosité.",
            "en": "Set aside time to explore with no immediate goal. The biggest finds often come from wandering guided by curiosity."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le mémo narratif contre le PowerPoint",
        "en": "Narrative Memos vs PowerPoint"
      },
      "caption": {
        "fr": "Chez Amazon, les réunions commencent par 30 minutes de silence. Voici pourquoi. 📝",
        "en": "At Amazon, meetings start with 30 minutes of silence. Here's why. 📝"
      },
      "tags": [
        "memos",
        "meetings",
        "thinking",
        "clarity"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Six pages, pas de puces",
            "en": "Six Pages, No Bullets"
          },
          "body": {
            "fr": "Amazon a banni le PowerPoint de ses réunions au profit de mémos narratifs de six pages. Un choix radical et délibéré.",
            "en": "Amazon banned PowerPoint from meetings in favor of six-page narrative memos. A radical, deliberate choice."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La lecture silencieuse",
            "en": "The Silent Read"
          },
          "body": {
            "fr": "Chaque réunion s'ouvre par une \"étude en salle\" : tout le monde lit le mémo en silence, souvent une demi-heure, avant toute discussion.",
            "en": "Every meeting opens with a \"study hall\": everyone reads the memo in silence, often for half an hour, before any discussion."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Écrire force à penser",
            "en": "Writing Forces Thinking"
          },
          "body": {
            "fr": "Rédiger de vraies phrases, avec verbes et raisonnements, révèle les failles qu'une liste à puces masque. Le format contraint à la clarté.",
            "en": "Writing full sentences, with verbs and reasoning, exposes the gaps that a bullet list hides. The format forces clarity."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un grand mémo prend des jours",
            "en": "A Great Memo Takes Days"
          },
          "body": {
            "fr": "Bezos rappelle qu'un excellent mémo se réécrit sur une semaine ou plus. On croit à tort qu'il se fait en un jour ; la qualité demande du temps.",
            "en": "Bezos notes a great memo is rewritten over a week or more. People wrongly think it's a one-day job; quality takes time."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Pour clarifier une idée, écrivez-la en prose complète, pas en puces. Si vous ne pouvez pas l'écrire clairement, c'est que vous ne la comprenez pas encore.",
            "en": "To clarify an idea, write it in full prose, not bullets. If you can't write it clearly, you don't yet understand it."
          }
        }
      ]
    }
  ],
  "atomic-habits": [
    {
      "concept": {
        "fr": "Le pouvoir du 1%",
        "en": "The Power of 1%"
      },
      "caption": {
        "fr": "S'améliorer de 1% par jour, ça change tout sur un an. 📈",
        "en": "Getting 1% better every day changes everything over a year. 📈"
      },
      "tags": [
        "habitudes",
        "progres",
        "compound",
        "atomichabits"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "S'améliorer de 1%",
            "en": "Get 1% Better"
          },
          "body": {
            "fr": "Les habitudes sont les intérêts composés du développement personnel : minuscules aujourd'hui, énormes demain.",
            "en": "Habits are the compound interest of self-improvement: tiny today, huge later."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les maths cachées",
            "en": "The Hidden Math"
          },
          "body": {
            "fr": "1% de mieux chaque jour pendant un an te rend environ 37 fois meilleur. 1% de moins te ramène presque à zéro.",
            "en": "1% better every day for a year makes you about 37x better. 1% worse brings you near zero."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Invisible au début",
            "en": "Invisible at First"
          },
          "body": {
            "fr": "Un seul changement semble insignifiant sur le moment. C'est l'accumulation, répétée, qui fait la différence.",
            "en": "A single change feels meaningless in the moment. It's the accumulation, repeated, that matters."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Trajectoire > résultat",
            "en": "Trajectory > Result"
          },
          "body": {
            "fr": "Ce qui compte n'est pas où tu en es aujourd'hui, mais la direction que prennent tes habitudes.",
            "en": "What matters isn't where you are today, but the direction your habits point you."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "En une phrase",
            "en": "In One Line"
          },
          "body": {
            "fr": "« Les habitudes sont les intérêts composés du développement personnel. »",
            "en": "\"Habits are the compound interest of self-improvement.\""
          },
          "attribution": {
            "fr": "James Clear, Atomic Habits",
            "en": "James Clear, Atomic Habits"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne vise pas le bond spectaculaire. Choisis un progrès de 1% que tu peux répéter chaque jour.",
            "en": "Don't chase the dramatic leap. Pick one 1% improvement you can repeat every day."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Systèmes plutôt qu'objectifs",
        "en": "Systems Over Goals"
      },
      "caption": {
        "fr": "Tu ne t'élèves pas au niveau de tes objectifs, tu tombes au niveau de tes systèmes. 🎯",
        "en": "You don't rise to your goals, you fall to your systems. 🎯"
      },
      "tags": [
        "systemes",
        "objectifs",
        "process",
        "atomichabits"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Oublie les objectifs",
            "en": "Forget the Goals"
          },
          "body": {
            "fr": "Les objectifs fixent une direction, mais ce sont les systèmes qui produisent réellement les résultats.",
            "en": "Goals set a direction, but systems are what actually produce results."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Même objectif, deux issues",
            "en": "Same Goal, Two Fates"
          },
          "body": {
            "fr": "Vainqueurs et perdants partagent souvent les mêmes objectifs. Ce qui les sépare, c'est leur système au quotidien.",
            "en": "Winners and losers often share the same goals. What separates them is their daily system."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le piège du résultat",
            "en": "The Results Trap"
          },
          "body": {
            "fr": "Atteindre un objectif ne change ta vie qu'un instant. Sans nouveau système, tu reviens à ton ancien comportement.",
            "en": "Hitting a goal changes your life for a moment. Without a new system, you revert to old behavior."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Aimer le processus",
            "en": "Fall in Love With the Process"
          },
          "body": {
            "fr": "Focalise-toi sur ce que tu fais chaque jour, pas sur la ligne d'arrivée. Le résultat suit le processus.",
            "en": "Focus on what you do each day, not the finish line. The result follows the process."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "En une phrase",
            "en": "In One Line"
          },
          "body": {
            "fr": "« Tu ne t'élèves pas au niveau de tes objectifs. Tu tombes au niveau de tes systèmes. »",
            "en": "\"You do not rise to the level of your goals. You fall to the level of your systems.\""
          },
          "attribution": {
            "fr": "James Clear, Atomic Habits",
            "en": "James Clear, Atomic Habits"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne demande pas « quel objectif ? » mais « quel système répété me mène là ? ».",
            "en": "Don't ask \"what goal?\" but \"what repeatable system gets me there?\""
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Habitudes basées sur l'identité",
        "en": "Identity-Based Habits"
      },
      "caption": {
        "fr": "Ne cherche pas à courir, deviens un coureur. 🏃",
        "en": "Don't try to run, become a runner. 🏃"
      },
      "tags": [
        "identite",
        "habitudes",
        "mindset",
        "atomichabits"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Change ton identité",
            "en": "Change Your Identity"
          },
          "body": {
            "fr": "Les habitudes durables ne viennent pas de ce que tu veux atteindre, mais de qui tu veux devenir.",
            "en": "Lasting habits come not from what you want to achieve, but from who you want to become."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Trois niveaux",
            "en": "Three Layers"
          },
          "body": {
            "fr": "On change à trois niveaux : résultats, processus, identité. Le plus profond et le plus durable, c'est l'identité.",
            "en": "Change happens on three layers: outcomes, processes, identity. The deepest and most durable is identity."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Chaque acte est un vote",
            "en": "Every Action Is a Vote"
          },
          "body": {
            "fr": "Chaque habitude est une preuve du type de personne que tu es. Petit à petit, ces preuves construisent qui tu deviens.",
            "en": "Each habit is evidence of the type of person you are. Bit by bit, that evidence builds who you become."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Inverse le sens",
            "en": "Flip the Direction"
          },
          "body": {
            "fr": "Au lieu de « je veux ce résultat », commence par « je suis ce type de personne » et agis en conséquence.",
            "en": "Instead of \"I want this result,\" start with \"I am this type of person\" and act accordingly."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "En une phrase",
            "en": "In One Line"
          },
          "body": {
            "fr": "« Chaque action que tu poses est un vote pour le type de personne que tu souhaites devenir. »",
            "en": "\"Every action you take is a vote for the type of person you wish to become.\""
          },
          "attribution": {
            "fr": "James Clear, Atomic Habits",
            "en": "James Clear, Atomic Habits"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Décide qui tu veux être, puis prouve-le par de petites victoires répétées.",
            "en": "Decide who you want to be, then prove it with small, repeated wins."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les 4 lois du changement",
        "en": "The 4 Laws of Behavior Change"
      },
      "caption": {
        "fr": "Un cadre en 4 étapes pour créer une bonne habitude (et briser une mauvaise). 🔁",
        "en": "A 4-step framework to build a good habit (and break a bad one). 🔁"
      },
      "tags": [
        "cadre",
        "comportement",
        "habitudes",
        "atomichabits"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les 4 lois",
            "en": "The 4 Laws"
          },
          "body": {
            "fr": "Toute habitude suit une boucle : signal, envie, réponse, récompense. Chaque étape a sa loi.",
            "en": "Every habit follows a loop: cue, craving, response, reward. Each step has its own law."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "1. Rends-la évidente",
            "en": "1. Make It Obvious"
          },
          "body": {
            "fr": "Le signal déclenche l'habitude. Rends-le visible pour la bonne habitude, invisible pour la mauvaise.",
            "en": "The cue triggers the habit. Make it visible for good habits, invisible for bad ones."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "2. Rends-la attirante",
            "en": "2. Make It Attractive"
          },
          "body": {
            "fr": "L'envie est le moteur. Plus une habitude est séduisante, plus tu es motivé à la répéter.",
            "en": "The craving is the motivation. The more appealing a habit, the more you want to repeat it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "3. Rends-la facile",
            "en": "3. Make It Easy"
          },
          "body": {
            "fr": "La réponse, c'est l'action. Réduis les frictions pour les bonnes habitudes, ajoute-en pour les mauvaises.",
            "en": "The response is the action. Reduce friction for good habits, add friction to bad ones."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "4. Rends-la satisfaisante",
            "en": "4. Make It Satisfying"
          },
          "body": {
            "fr": "La récompense scelle l'habitude. Ce qui procure une satisfaction immédiate a tendance à se répéter.",
            "en": "The reward closes the loop. What feels immediately satisfying tends to be repeated."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Pour créer une habitude, applique les 4 lois. Pour la briser, inverse-les.",
            "en": "To build a habit, apply the 4 laws. To break one, invert them."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'empilement d'habitudes",
        "en": "Habit Stacking"
      },
      "caption": {
        "fr": "Accroche une nouvelle habitude à une ancienne, et elle tient. 🔗",
        "en": "Anchor a new habit to an old one, and it sticks. 🔗"
      },
      "tags": [
        "habitstacking",
        "routine",
        "declencheur",
        "atomichabits"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Empile tes habitudes",
            "en": "Stack Your Habits"
          },
          "body": {
            "fr": "La meilleure façon de démarrer une nouvelle habitude, c'est de l'attacher à une habitude déjà bien installée.",
            "en": "The best way to start a new habit is to tie it to one you already do reliably."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La formule",
            "en": "The Formula"
          },
          "body": {
            "fr": "« Après [habitude actuelle], je ferai [nouvelle habitude]. » L'ancienne devient le déclencheur de la nouvelle.",
            "en": "\"After [current habit], I will [new habit].\" The old one becomes the cue for the new one."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pourquoi ça marche",
            "en": "Why It Works"
          },
          "body": {
            "fr": "Tu as déjà des dizaines d'habitudes ancrées. Elles fournissent un signal clair et fiable pour en greffer d'autres.",
            "en": "You already have dozens of ingrained habits. They give a clear, reliable cue to attach new ones to."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un exemple concret",
            "en": "A Concrete Example"
          },
          "body": {
            "fr": "« Après avoir versé mon café du matin, je médite une minute. » Simple, précis, lié à un moment existant.",
            "en": "\"After I pour my morning coffee, I meditate for one minute.\" Simple, specific, tied to an existing moment."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Choisis une habitude quotidienne solide et branche-y ta nouvelle habitude avec la formule « Après… je… ».",
            "en": "Pick a solid daily habit and attach your new one with the \"After... I will...\" formula."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La règle des 2 minutes",
        "en": "The Two-Minute Rule"
      },
      "caption": {
        "fr": "Commence si petit que c'est impossible de dire non. ⏱️",
        "en": "Start so small it's impossible to say no. ⏱️"
      },
      "tags": [
        "motivation",
        "demarrage",
        "habitudes",
        "atomichabits"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Deux minutes suffisent",
            "en": "Two Minutes Is Enough"
          },
          "body": {
            "fr": "Quand tu lances une nouvelle habitude, elle devrait prendre moins de deux minutes à réaliser.",
            "en": "When you start a new habit, it should take less than two minutes to do."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Réduis à la porte d'entrée",
            "en": "Shrink to the Gateway"
          },
          "body": {
            "fr": "« Lire avant de dormir » devient « lire une page ». « Faire du sport » devient « enfiler mes chaussures ».",
            "en": "\"Read before bed\" becomes \"read one page.\" \"Work out\" becomes \"put on my shoes.\""
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Maîtriser l'art d'être présent",
            "en": "Master Showing Up"
          },
          "body": {
            "fr": "Le but n'est pas de tout faire, mais d'ancrer le rituel. Une habitude doit exister avant de pouvoir grandir.",
            "en": "The point isn't to do it all, but to anchor the ritual. A habit must exist before it can improve."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'élan fait le reste",
            "en": "Momentum Does the Rest"
          },
          "body": {
            "fr": "Une fois commencé, il est bien plus facile de continuer. Le plus dur est franchi dès les deux premières minutes.",
            "en": "Once you've started, continuing is far easier. The hardest part is over in the first two minutes."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Rends le début ridiculement facile. Standardise avant d'optimiser.",
            "en": "Make starting ridiculously easy. Standardize before you optimize."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le plateau du potentiel latent",
        "en": "The Plateau of Latent Potential"
      },
      "caption": {
        "fr": "Tes efforts s'accumulent, même quand tu ne vois rien. 🧊",
        "en": "Your efforts accumulate, even when you see nothing. 🧊"
      },
      "tags": [
        "patience",
        "perseverance",
        "progres",
        "atomichabits"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La vallée de la déception",
            "en": "The Valley of Disappointment"
          },
          "body": {
            "fr": "On abandonne souvent nos habitudes parce que les résultats se font attendre plus longtemps qu'on ne le croit.",
            "en": "We often quit habits because results take longer to appear than we expect."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le glaçon qui fond",
            "en": "The Melting Ice Cube"
          },
          "body": {
            "fr": "Un glaçon ne bouge pas de -4 à 0°C, puis fond d'un coup à 0. Le progrès était réel, juste invisible.",
            "en": "An ice cube doesn't move from 25 to 32°F, then melts at 32. The progress was real, just invisible."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'effort n'est pas perdu",
            "en": "Effort Isn't Wasted"
          },
          "body": {
            "fr": "Sur un plateau, le travail n'est pas gaspillé : il est stocké. La percée arrive quand le seuil est atteint.",
            "en": "On a plateau, work isn't wasted, it's stored. The breakthrough comes once the threshold is crossed."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le moment critique",
            "en": "The Critical Moment"
          },
          "body": {
            "fr": "Les résultats les plus puissants sont retardés. C'est précisément là que la plupart des gens lâchent.",
            "en": "The most powerful results are delayed. That's exactly where most people give up."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Juge-toi sur ta constance, pas sur les résultats visibles du jour. Reste en jeu assez longtemps pour percer.",
            "en": "Judge yourself by your consistency, not today's visible results. Stay in the game long enough to break through."
          }
        }
      ]
    }
  ],
  "deep-work": [
    {
      "concept": {
        "fr": "Travail profond vs travail superficiel",
        "en": "Deep work vs shallow work"
      },
      "caption": {
        "fr": "Tout ton travail ne se vaut pas : voici la ligne de partage qui change tout 🧠",
        "en": "Not all work is equal — here's the dividing line that changes everything 🧠"
      },
      "tags": [
        "deepwork",
        "focus",
        "productivite",
        "calnewport"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Profond vs superficiel",
            "en": "Deep vs shallow"
          },
          "body": {
            "fr": "Newport divise tout ton travail en deux catégories. Une seule crée vraiment de la valeur.",
            "en": "Newport splits all your work into two categories. Only one truly creates value."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le travail profond",
            "en": "Deep work"
          },
          "body": {
            "fr": "Des activités menées dans une concentration sans distraction qui poussent tes capacités cognitives à leur limite. C'est là que naît la valeur rare et difficile à reproduire.",
            "en": "Activities performed in distraction-free concentration that push your cognitive abilities to their limit. This is where rare, hard-to-replicate value is created."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le travail superficiel",
            "en": "Shallow work"
          },
          "body": {
            "fr": "Des tâches logistiques peu exigeantes, souvent faites en étant distrait : mails, réunions, notifications. Faciles à reproduire, donc peu valorisées.",
            "en": "Non-demanding, logistical tasks often done while distracted: email, meetings, notifications. Easy to replicate, so poorly rewarded."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'hypothèse de Newport",
            "en": "Newport's hypothesis"
          },
          "body": {
            "fr": "La capacité à travailler en profondeur devient de plus en plus rare, au moment même où elle devient de plus en plus précieuse dans l'économie moderne.",
            "en": "The ability to work deeply is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in the modern economy."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Une superpuissance",
            "en": "A superpower"
          },
          "body": {
            "fr": "« Le travail profond est comme une superpuissance dans notre économie du XXIe siècle de plus en plus compétitive. »",
            "en": "\"Deep work is like a superpower in our increasingly competitive twenty-first-century economy.\""
          },
          "attribution": {
            "fr": "Cal Newport, Deep Work",
            "en": "Cal Newport, Deep Work"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Identifie ce qui, dans ta semaine, relève du profond. C'est ce travail-là qu'il faut protéger et multiplier.",
            "en": "Identify what in your week counts as deep. That is the work to protect and to multiply."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La formule du travail de qualité",
        "en": "The high-quality work formula"
      },
      "caption": {
        "fr": "Pourquoi 4h de vrai focus battent 8h de multitâche ⚡",
        "en": "Why 4 hours of real focus beat 8 hours of multitasking ⚡"
      },
      "tags": [
        "focus",
        "attention",
        "multitasking",
        "deepwork"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Temps × Intensité",
            "en": "Time × Intensity"
          },
          "body": {
            "fr": "Newport résume la qualité du travail par une équation simple — et brutale pour le multitâche.",
            "en": "Newport captures work quality in a simple equation — one that's brutal for multitasking."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La formule",
            "en": "The formula"
          },
          "body": {
            "fr": "Travail de haute qualité = Temps passé × Intensité de la concentration. Baisse l'intensité, et le résultat s'effondre, même avec plus d'heures.",
            "en": "High-quality work = Time spent × Intensity of focus. Lower the intensity and output collapses, even with more hours."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le résidu attentionnel",
            "en": "Attention residue"
          },
          "body": {
            "fr": "Quand tu passes d'une tâche à l'autre, une partie de ton attention reste collée à la précédente. Tu travailles alors avec un cerveau à capacité réduite.",
            "en": "When you switch tasks, part of your attention stays stuck on the previous one. You then work with a reduced-capacity brain."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le coût du \"quick check\"",
            "en": "The cost of a quick check"
          },
          "body": {
            "fr": "Un simple coup d'œil aux mails ravive le résidu et sabote l'intensité. Le vrai focus exige de rester sur une seule chose, longtemps.",
            "en": "A single glance at email revives the residue and sabotages intensity. Real focus demands staying on one thing, for a long time."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne cherche pas plus d'heures, cherche plus d'intensité : des blocs longs, sans changement de contexte.",
            "en": "Don't chase more hours, chase more intensity: long blocks with no context switching."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les 4 philosophies de la profondeur",
        "en": "The 4 depth philosophies"
      },
      "caption": {
        "fr": "Il n'existe pas une seule bonne façon de faire du deep work — choisis la tienne 📅",
        "en": "There's no single right way to do deep work — pick yours 📅"
      },
      "tags": [
        "routine",
        "planning",
        "deepwork",
        "habitudes"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Quatre façons de plonger",
            "en": "Four ways to go deep"
          },
          "body": {
            "fr": "Newport décrit quatre \"philosophies\" pour intégrer le travail profond à ta vie. À toi de choisir.",
            "en": "Newport describes four \"philosophies\" for fitting deep work into your life. Pick the one that fits."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Monastique",
            "en": "Monastic"
          },
          "body": {
            "fr": "Éliminer ou réduire radicalement le superficiel pour se consacrer presque entièrement à la profondeur. Adaptée à ceux dont la valeur vient d'un seul objectif clair.",
            "en": "Radically eliminate or minimize shallow obligations to devote yourself almost entirely to depth. Suited to those whose value comes from one clear pursuit."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Bimodale",
            "en": "Bimodal"
          },
          "body": {
            "fr": "Diviser ton temps en périodes clairement dédiées à la profondeur (jours ou semaines), le reste restant ouvert à tout. Newport cite Carl Jung et sa tour de Bollingen.",
            "en": "Divide your time into stretches clearly devoted to depth (days or weeks), leaving the rest open. Newport cites Carl Jung and his Bollingen tower."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Rythmique",
            "en": "Rhythmic"
          },
          "body": {
            "fr": "Transformer le travail profond en habitude quotidienne à heure fixe. La \"chaîne\" à ne pas briser rend le démarrage automatique.",
            "en": "Turn deep work into a daily habit at a fixed time. The \"don't break the chain\" method makes starting automatic."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Journalistique",
            "en": "Journalistic"
          },
          "body": {
            "fr": "Basculer en profondeur dès qu'un créneau se libère, sans planification fixe. Exigeant : réservé à ceux déjà entraînés à la concentration.",
            "en": "Drop into depth whenever a slot opens, with no fixed schedule. Demanding — reserved for those already trained at focus."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le débutant devrait viser le rythmique : une habitude fixe et quotidienne bat la volonté ponctuelle.",
            "en": "Beginners should aim for rhythmic: a fixed daily habit beats occasional willpower."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Apprendre à s'ennuyer",
        "en": "Embrace boredom"
      },
      "caption": {
        "fr": "Ton téléphone dans la file d'attente entraîne exactement la mauvaise habitude 📵",
        "en": "Reaching for your phone in every queue trains exactly the wrong habit 📵"
      },
      "tags": [
        "ennui",
        "concentration",
        "distraction",
        "meditation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Apprivoiser l'ennui",
            "en": "Embrace boredom"
          },
          "body": {
            "fr": "La concentration est un muscle. Newport montre qu'on l'affaiblit sans le savoir, chaque jour.",
            "en": "Concentration is a muscle. Newport shows we weaken it without realizing, every single day."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Inverse la logique",
            "en": "Flip the logic"
          },
          "body": {
            "fr": "Ne prends pas des pauses de distraction, prends des pauses de concentration. Planifie à l'avance tes créneaux \"internet autorisé\".",
            "en": "Don't take breaks from distraction — take breaks from focus. Schedule in advance the blocks when internet is allowed."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ne cède jamais entre deux",
            "en": "Never cave in between"
          },
          "body": {
            "fr": "Si tu te rues sur ton téléphone à la moindre seconde de vide, tu entraînes ton cerveau à ne jamais tolérer l'absence de stimulation.",
            "en": "If you grab your phone at the first second of emptiness, you train your brain to never tolerate a lack of stimulation."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La méditation productive",
            "en": "Productive meditation"
          },
          "body": {
            "fr": "Occupé physiquement (marche, douche), concentre ton esprit sur un seul problème professionnel. Ramène ton attention dès qu'elle s'égare.",
            "en": "While physically occupied (walking, showering), focus your mind on a single professional problem. Bring attention back whenever it wanders."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Programme tes moments connectés au lieu de tes moments concentrés : tu réhabitues ton cerveau à la profondeur.",
            "en": "Schedule your connected time instead of your focused time — you retrain your brain for depth."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Trier ses outils comme un artisan",
        "en": "The craftsman's tool selection"
      },
      "caption": {
        "fr": "\"Ça pourrait servir\" n'est pas une bonne raison de garder une app 🔧",
        "en": "\"It might be useful\" isn't a good reason to keep an app 🔧"
      },
      "tags": [
        "reseauxsociaux",
        "outils",
        "attention",
        "deepwork"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'approche de l'artisan",
            "en": "The craftsman approach"
          },
          "body": {
            "fr": "Newport propose une méthode radicale pour décider quels outils numériques méritent ton temps.",
            "en": "Newport offers a radical method to decide which digital tools deserve your time."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le piège du \"moindre bénéfice\"",
            "en": "The any-benefit trap"
          },
          "body": {
            "fr": "On justifie un outil dès qu'il offre un bénéfice quelconque. Mais on ignore tout ce qu'il coûte en temps et en attention.",
            "en": "We justify a tool the moment it offers any benefit at all — while ignoring everything it costs in time and attention."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La loi du petit nombre vital",
            "en": "The law of the vital few"
          },
          "body": {
            "fr": "Comme l'artisan choisit ses outils, garde seulement ceux qui servent tes quelques objectifs les plus importants, et écarte le reste.",
            "en": "Like a craftsman choosing tools, keep only those that serve your few most important goals, and drop the rest."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'expérience des 30 jours",
            "en": "The 30-day experiment"
          },
          "body": {
            "fr": "Coupe les réseaux sociaux pendant 30 jours sans l'annoncer. Puis demande-toi : ma vie a-t-elle été notablement meilleure avec eux ? Les gens ont-ils seulement remarqué mon absence ?",
            "en": "Quit social media for 30 days without announcing it. Then ask: would these 30 days have been notably better with them? Did anyone even notice I was gone?"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Un outil doit prouver qu'il sert tes priorités majeures — sinon, il vole l'attention dont ton travail profond a besoin.",
            "en": "A tool must prove it serves your major priorities — otherwise it steals the attention your deep work needs."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Assécher le superficiel",
        "en": "Drain the shallows"
      },
      "caption": {
        "fr": "Planifie chaque minute de ta journée — non pour t'enfermer, mais pour reprendre le contrôle 🗓️",
        "en": "Schedule every minute of your day — not to cage yourself, but to take back control 🗓️"
      },
      "tags": [
        "planning",
        "productivite",
        "email",
        "deepwork"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Assécher le superficiel",
            "en": "Drain the shallows"
          },
          "body": {
            "fr": "Le travail superficiel est inévitable — mais Newport donne des tactiques pour le contenir.",
            "en": "Shallow work is unavoidable — but Newport gives tactics to contain it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Planifie chaque minute",
            "en": "Schedule every minute"
          },
          "body": {
            "fr": "Découpe ta journée en blocs assignés à des tâches précises. L'objectif n'est pas la rigidité, mais l'intention : décider à quoi va ton temps.",
            "en": "Break your day into blocks assigned to specific tasks. The goal isn't rigidity but intention: deciding where your time goes."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Quantifie la profondeur",
            "en": "Quantify the depth"
          },
          "body": {
            "fr": "Pour chaque tâche, demande : combien de mois faudrait-il à un jeune diplômé pour l'apprendre ? Ça révèle vite ce qui est superficiel.",
            "en": "For each task, ask: how many months would it take a smart new graduate to learn it? This quickly reveals what's shallow."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Productivité à horaire fixe",
            "en": "Fixed-schedule productivity"
          },
          "body": {
            "fr": "Fixe une heure de fin ferme (ex. 17h30) et organise-toi en amont. La contrainte t'oblige à refuser le superficiel et à protéger la profondeur.",
            "en": "Set a firm end time (e.g. 5:30pm) and work backward. The constraint forces you to refuse shallow work and protect depth."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Traite le superficiel avec méfiance : donne-lui une limite stricte pour que le profond ait de la place.",
            "en": "Treat shallow work with suspicion: give it a hard limit so deep work has room to breathe."
          }
        }
      ]
    }
  ],
  "seven-habits": [
    {
      "concept": {
        "fr": "Le changement de paradigme",
        "en": "The Paradigm Shift"
      },
      "caption": {
        "fr": "Change ta façon de voir, et tout change. 🔭",
        "en": "Change the way you see, and everything changes. 🔭"
      },
      "tags": [
        "paradigme",
        "perception",
        "Covey",
        "developpementpersonnel"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le changement de paradigme",
            "en": "The Paradigm Shift"
          },
          "body": {
            "fr": "Nos résultats ne dépendent pas seulement de nos actes, mais des « cartes » mentales à travers lesquelles nous voyons le monde.",
            "en": "Our results don't depend only on what we do, but on the mental 'maps' through which we see the world."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Voir – Faire – Obtenir",
            "en": "See – Do – Get"
          },
          "body": {
            "fr": "Covey décrit un cycle : la façon dont on voit (le paradigme) détermine ce qu'on fait, qui détermine ce qu'on obtient. Changer les résultats commence par changer la vision.",
            "en": "Covey describes a cycle: how you see (your paradigm) drives what you do, which drives what you get. Changing results starts with changing how you see."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'éthique du caractère",
            "en": "The Character Ethic"
          },
          "body": {
            "fr": "Il oppose l'« éthique de la personnalité » (techniques, image) à l'« éthique du caractère » (intégrité, principes). Seule la seconde produit une efficacité durable.",
            "en": "He contrasts the 'Personality Ethic' (techniques, image) with the 'Character Ethic' (integrity, principles). Only the latter creates lasting effectiveness."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des principes, pas des astuces",
            "en": "Principles, not tricks"
          },
          "body": {
            "fr": "Les 7 habitudes s'appuient sur des principes intemporels (comme un phare). On ne les négocie pas : on aligne son comportement dessus.",
            "en": "The 7 Habits rest on timeless principles (like a lighthouse). You don't negotiate with them; you align your behavior to them."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de changer un comportement, interroge le paradigme qui le produit. Un petit décalage de perception peut tout réorganiser.",
            "en": "Before changing a behavior, question the paradigm behind it. A small shift in perception can reorganize everything."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le continuum de la maturité",
        "en": "The Maturity Continuum"
      },
      "caption": {
        "fr": "De la dépendance à l'interdépendance : la vraie trajectoire de croissance. 🌱",
        "en": "From dependence to interdependence: the real growth path. 🌱"
      },
      "tags": [
        "maturite",
        "autonomie",
        "interdependance",
        "Covey"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le continuum de la maturité",
            "en": "The Maturity Continuum"
          },
          "body": {
            "fr": "Covey organise les 7 habitudes autour d'un chemin en trois étapes : dépendance, indépendance, interdépendance.",
            "en": "Covey organizes the 7 Habits around a three-stage path: dependence, independence, interdependence."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Dépendance",
            "en": "Dependence"
          },
          "body": {
            "fr": "Le paradigme du « toi » : j'ai besoin des autres pour agir, et je les rends responsables de mes résultats. C'est le point de départ.",
            "en": "The 'you' paradigm: I need others to act, and I hold them responsible for my results. It's the starting point."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Victoire privée → indépendance",
            "en": "Private Victory → independence"
          },
          "body": {
            "fr": "Les habitudes 1, 2 et 3 conduisent à la « victoire privée » : je me prends en main. Le paradigme du « je peux ».",
            "en": "Habits 1, 2 and 3 lead to the 'Private Victory': I take charge of myself. The 'I can' paradigm."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Victoire publique → interdépendance",
            "en": "Public Victory → interdependence"
          },
          "body": {
            "fr": "Les habitudes 4, 5 et 6 mènent à la « victoire publique ». Le paradigme du « nous » : ensemble, on crée plus que seul.",
            "en": "Habits 4, 5 and 6 lead to the 'Public Victory'. The 'we' paradigm: together we create more than alone."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "On ne saute pas les étapes : les victoires privées précèdent les victoires publiques. Maîtrise-toi d'abord, coopère ensuite.",
            "en": "You can't skip steps: private victories precede public victories. Master yourself first, then cooperate."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Habitude 1 — Être proactif",
        "en": "Habit 1 — Be Proactive"
      },
      "caption": {
        "fr": "Entre le stimulus et la réponse, il y a un espace : ton pouvoir de choisir. ⚡",
        "en": "Between stimulus and response there's a space: your power to choose. ⚡"
      },
      "tags": [
        "proactivite",
        "responsabilite",
        "cercleinfluence",
        "Covey"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Être proactif",
            "en": "Be Proactive"
          },
          "body": {
            "fr": "La première habitude : assumer la responsabilité de sa vie plutôt que de subir les circonstances.",
            "en": "The first habit: take responsibility for your life instead of being driven by circumstances."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'espace de choix",
            "en": "The space to choose"
          },
          "body": {
            "fr": "Entre ce qui nous arrive (le stimulus) et notre réaction (la réponse), il existe un espace de liberté. Les proactifs choisissent leur réponse.",
            "en": "Between what happens (stimulus) and how we react (response) lies a space of freedom. Proactive people choose their response."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Cercle d'influence vs cercle de préoccupation",
            "en": "Circle of Influence vs Circle of Concern"
          },
          "body": {
            "fr": "Les réactifs dépensent leur énergie sur ce qu'ils ne contrôlent pas. Les proactifs se concentrent sur leur cercle d'influence — qui, alors, s'élargit.",
            "en": "Reactive people spend energy on what they can't control. Proactive people focus on their Circle of Influence — which then expands."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le langage révèle la posture",
            "en": "Language reveals your stance"
          },
          "body": {
            "fr": "« Je ne peux pas », « il faut que » sont réactifs. « Je choisis », « je préfère » sont proactifs. Change tes mots, change ta position.",
            "en": "'I can't,' 'I have to' are reactive. 'I choose,' 'I prefer' are proactive. Change your words, change your stance."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La citation",
            "en": "The quote"
          },
          "body": {
            "fr": "« Entre le stimulus et la réponse, il y a un espace. Dans cet espace réside notre pouvoir de choisir notre réponse. »",
            "en": "\"Between stimulus and response there is a space. In that space is our power to choose our response.\""
          },
          "attribution": {
            "fr": "Stephen R. Covey",
            "en": "Stephen R. Covey"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Aujourd'hui, repère une chose qui te frustre et pose-toi la question : est-elle dans mon cercle d'influence ? Agis là où tu as prise.",
            "en": "Today, spot one thing that frustrates you and ask: is it within my Circle of Influence? Act where you have leverage."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Habitude 2 — Commencer avec la fin en tête",
        "en": "Habit 2 — Begin With the End in Mind"
      },
      "caption": {
        "fr": "Toute chose est créée deux fois : d'abord dans l'esprit. 🧭",
        "en": "All things are created twice: first in the mind. 🧭"
      },
      "tags": [
        "vision",
        "objectifs",
        "missionpersonnelle",
        "Covey"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Commencer avec la fin en tête",
            "en": "Begin With the End in Mind"
          },
          "body": {
            "fr": "Définir clairement sa destination avant de se mettre en route, pour que chaque pas aille dans la bonne direction.",
            "en": "Define your destination clearly before you set off, so every step moves in the right direction."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La double création",
            "en": "The two creations"
          },
          "body": {
            "fr": "Tout se crée deux fois : une création mentale, puis une création physique. Un plan avant le chantier ; une intention avant l'action.",
            "en": "Everything is created twice: a mental creation, then a physical one. A blueprint before the building; an intention before the action."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'exercice des funérailles",
            "en": "The funeral exercise"
          },
          "body": {
            "fr": "Covey invite à imaginer ce qu'on aimerait entendre à ses propres funérailles. Ces mots révèlent tes véritables valeurs et priorités.",
            "en": "Covey invites you to imagine what you'd want said at your own funeral. Those words reveal your true values and priorities."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Écrire son énoncé de mission",
            "en": "Write a personal mission statement"
          },
          "body": {
            "fr": "Formuler une mission de vie fondée sur des principes te donne un centre stable, indépendant des humeurs et des événements.",
            "en": "Crafting a principle-based mission statement gives you a stable center, independent of moods and events."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de foncer, demande-toi contre quel mur est appuyée l'échelle sur laquelle tu grimpes. Sinon, tu risques d'arriver vite au mauvais endroit.",
            "en": "Before you rush, ask which wall your ladder is leaning against. Otherwise you may climb fast to the wrong place."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Habitude 3 — Donner la priorité aux priorités",
        "en": "Habit 3 — Put First Things First"
      },
      "caption": {
        "fr": "L'important n'est presque jamais urgent. Fais-lui de la place. ⏳",
        "en": "What's important is rarely urgent. Make room for it. ⏳"
      },
      "tags": [
        "priorites",
        "matricedutemps",
        "quadrant2",
        "Covey"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Donner la priorité aux priorités",
            "en": "Put First Things First"
          },
          "body": {
            "fr": "La mise en œuvre concrète de la vision : organiser sa vie autour de ce qui compte vraiment, pas de ce qui crie le plus fort.",
            "en": "The hands-on execution of your vision: organize life around what truly matters, not what shouts loudest."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La matrice du temps",
            "en": "The Time Management Matrix"
          },
          "body": {
            "fr": "Covey classe les activités selon deux axes : urgent / non urgent, important / non important. D'où quatre quadrants.",
            "en": "Covey sorts activities on two axes: urgent / not urgent, important / not important — giving four quadrants."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le pouvoir du quadrant II",
            "en": "The power of Quadrant II"
          },
          "body": {
            "fr": "Le quadrant II — important mais non urgent — contient la prévention, la planification, les relations. C'est là que se joue l'efficacité.",
            "en": "Quadrant II — important but not urgent — holds prevention, planning, relationships. That's where effectiveness lives."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Savoir dire non",
            "en": "Learn to say no"
          },
          "body": {
            "fr": "Pour dire oui au quadrant II, il faut dire non aux urgences sans importance (quadrant III) et aux distractions (quadrant IV).",
            "en": "To say yes to Quadrant II, you must say no to unimportant urgencies (Quadrant III) and distractions (Quadrant IV)."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Planifie ta semaine autour de tes rôles et de tes priorités, pas seulement autour de ta liste de tâches.",
            "en": "Plan your week around your roles and priorities, not just your to-do list."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Habitude 5 — Cherchez d'abord à comprendre",
        "en": "Habit 5 — Seek First to Understand"
      },
      "caption": {
        "fr": "La plupart des gens écoutent pour répondre, pas pour comprendre. 👂",
        "en": "Most people listen to reply, not to understand. 👂"
      },
      "tags": [
        "ecoute",
        "empathie",
        "communication",
        "Covey"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Cherchez d'abord à comprendre, ensuite à être compris",
            "en": "Seek First to Understand, Then to Be Understood"
          },
          "body": {
            "fr": "La clé de toute communication efficace : comprendre l'autre en profondeur avant de vouloir faire passer son propre message.",
            "en": "The key to effective communication: deeply understand the other before trying to get your own point across."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'écoute empathique",
            "en": "Empathic listening"
          },
          "body": {
            "fr": "Écouter avec l'intention de comprendre, pas de répondre. On écoute avec les oreilles, mais aussi avec les yeux et le cœur.",
            "en": "Listen with the intent to understand, not to reply. You listen with your ears, but also with your eyes and heart."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le diagnostic avant l'ordonnance",
            "en": "Diagnose before you prescribe"
          },
          "body": {
            "fr": "Un médecin qui prescrit sans examiner commet une faute. Donner un conseil sans comprendre le problème, c'est pareil.",
            "en": "A doctor who prescribes without examining is negligent. Giving advice before understanding the problem is the same."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les réponses autobiographiques",
            "en": "Autobiographical responses"
          },
          "body": {
            "fr": "On tend à évaluer, sonder, conseiller ou interpréter à partir de sa propre expérience. Ces réflexes bloquent la vraie compréhension.",
            "en": "We tend to evaluate, probe, advise or interpret from our own experience. These reflexes block real understanding."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La citation",
            "en": "The quote"
          },
          "body": {
            "fr": "« La plupart des gens n'écoutent pas dans l'intention de comprendre ; ils écoutent dans l'intention de répondre. »",
            "en": "\"Most people do not listen with the intent to understand; they listen with the intent to reply.\""
          },
          "attribution": {
            "fr": "Stephen R. Covey",
            "en": "Stephen R. Covey"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Dans ta prochaine conversation difficile, reformule ce que dit l'autre jusqu'à ce qu'il se sente compris. Puis expose ton point de vue.",
            "en": "In your next hard conversation, restate the other person's view until they feel understood. Then share yours."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Habitude 7 — Aiguiser sa scie",
        "en": "Habit 7 — Sharpen the Saw"
      },
      "caption": {
        "fr": "Trop occupé à scier pour aiguiser la lame ? C'est là le piège. 🪚",
        "en": "Too busy sawing to sharpen the blade? That's the trap. 🪚"
      },
      "tags": [
        "renouvellement",
        "equilibre",
        "PPC",
        "Covey"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Aiguiser sa scie",
            "en": "Sharpen the Saw"
          },
          "body": {
            "fr": "La septième habitude entoure les six autres : renouveler régulièrement ses ressources pour rester capable d'être efficace.",
            "en": "The seventh habit surrounds the other six: regularly renew your resources so you stay capable of being effective."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le bûcheron qui scie sans relâche",
            "en": "The exhausted sawyer"
          },
          "body": {
            "fr": "Covey évoque l'image d'un bûcheron épuisé qui refuse d'aiguiser sa scie car il est « trop occupé à scier ». Il travaille dur, mais pas efficacement.",
            "en": "Covey pictures an exhausted woodcutter who won't sharpen his saw because he's 'too busy sawing.' He works hard, not smart."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les quatre dimensions",
            "en": "The four dimensions"
          },
          "body": {
            "fr": "Il faut renouveler quatre dimensions : physique (corps), mentale (esprit), sociale/émotionnelle (relations) et spirituelle (valeurs).",
            "en": "You renew four dimensions: physical (body), mental (mind), social/emotional (relationships) and spiritual (values)."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Préserver ton plus grand atout : toi",
            "en": "Preserve your greatest asset: you"
          },
          "body": {
            "fr": "Prendre soin de soi n'est pas égoïste : c'est entretenir l'instrument qui rend tout le reste possible. Un investissement du quadrant II.",
            "en": "Self-care isn't selfish: it maintains the very instrument that makes everything else possible. A Quadrant II investment."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Réserve chaque semaine du temps pour tes quatre dimensions. C'est le renouvellement qui rend les six autres habitudes durables.",
            "en": "Block weekly time for all four dimensions. Renewal is what makes the other six habits sustainable."
          }
        }
      ]
    }
  ],
  "mindset": [
    {
      "concept": {
        "fr": "Les deux états d'esprit",
        "en": "The two mindsets"
      },
      "caption": {
        "fr": "Fixe ou de croissance : et si tout partait de ce que tu crois sur toi ? 🧠",
        "en": "Fixed or growth: what if it all starts with what you believe about yourself? 🧠"
      },
      "tags": [
        "mindset",
        "dweck",
        "croissance",
        "psychologie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Fixe vs croissance",
            "en": "Fixed vs growth"
          },
          "body": {
            "fr": "Dweck montre que deux croyances sur nos capacités façonnent toute notre vie.",
            "en": "Dweck shows that two beliefs about our abilities shape our entire lives."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'état d'esprit fixe",
            "en": "The fixed mindset"
          },
          "body": {
            "fr": "Croire que l'intelligence et le talent sont gravés dans le marbre. On passe son temps à les prouver.",
            "en": "Believing intelligence and talent are set in stone. You spend your time proving them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'état d'esprit de croissance",
            "en": "The growth mindset"
          },
          "body": {
            "fr": "Croire que ses capacités se développent par l'effort et l'apprentissage. On cherche à progresser, pas à impressionner.",
            "en": "Believing abilities grow through effort and learning. You aim to improve, not to impress."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une croyance, pas un trait",
            "en": "A belief, not a trait"
          },
          "body": {
            "fr": "Ce n'est pas ta personnalité : c'est une conviction que tu peux changer, dans un domaine comme dans un autre.",
            "en": "It isn't your personality: it's a conviction you can change, in one area or another."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Repère ton état d'esprit dans une situation qui te bloque, puis choisis d'y voir une occasion de grandir.",
            "en": "Spot your mindset in a situation that blocks you, then choose to see it as a chance to grow."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le pouvoir du 'pas encore'",
        "en": "The power of 'yet'"
      },
      "caption": {
        "fr": "Tu rates ton objectif ? Ajoute juste un mot : pas encore. ✨",
        "en": "Missed your goal? Just add one word: not yet. ✨"
      },
      "tags": [
        "notyet",
        "apprentissage",
        "progres",
        "mindset"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le pouvoir du 'pas encore'",
            "en": "The power of 'yet'"
          },
          "body": {
            "fr": "Dweck raconte une école où l'on ne note pas 'échec' mais 'pas encore'.",
            "en": "Dweck describes a school that grades not 'fail' but 'not yet'."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "'Échec' ferme la porte",
            "en": "'Fail' shuts the door"
          },
          "body": {
            "fr": "Un verdict définitif : tu n'es pas capable, point. L'esprit se met en retrait.",
            "en": "A final verdict: you can't do it, period. The mind pulls back."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "'Pas encore' ouvre un chemin",
            "en": "'Not yet' opens a path"
          },
          "body": {
            "fr": "Tu n'y es pas arrivé aujourd'hui, mais tu es sur une courbe d'apprentissage. Le progrès reste possible.",
            "en": "You didn't get there today, but you're on a learning curve. Progress stays possible."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un mot qui change tout",
            "en": "One word changes everything"
          },
          "body": {
            "fr": "'Pas encore' remplace le jugement par une trajectoire, et redonne du sens à l'effort.",
            "en": "'Not yet' replaces judgment with a trajectory, and gives effort meaning again."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La prochaine fois que tu penses 'je n'y arrive pas', ajoute 'pas encore' et reprends.",
            "en": "Next time you think 'I can't do this', add 'not yet' and keep going."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Féliciter l'effort, pas le talent",
        "en": "Praise effort, not talent"
      },
      "caption": {
        "fr": "Dire 'tu es intelligent' peut faire plus de mal que de bien. 👀",
        "en": "Saying 'you're so smart' can do more harm than good. 👀"
      },
      "tags": [
        "eloge",
        "effort",
        "education",
        "motivation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le bon éloge",
            "en": "The right praise"
          },
          "body": {
            "fr": "Les recherches de Dweck révèlent quel type de compliment nourrit vraiment la progression.",
            "en": "Dweck's research reveals which kind of praise truly fuels progress."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Louer l'intelligence",
            "en": "Praising intelligence"
          },
          "body": {
            "fr": "Dans ses études, les enfants félicités pour leur intelligence évitent ensuite les défis, de peur de perdre l'étiquette.",
            "en": "In her studies, kids praised for being smart later avoided challenges, afraid to lose the label."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Louer le processus",
            "en": "Praising the process"
          },
          "body": {
            "fr": "Ceux félicités pour leur effort et leur stratégie ont choisi des tâches plus difficiles et persévéré davantage.",
            "en": "Those praised for effort and strategy chose harder tasks and persisted more."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'étiquette qui piège",
            "en": "The trap of the label"
          },
          "body": {
            "fr": "Un compliment sur le 'don' pousse à le protéger. Un compliment sur la démarche pousse à progresser.",
            "en": "Praising a 'gift' makes you protect it. Praising the approach makes you improve."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Félicite le travail, les choix et la persévérance, chez les autres comme chez toi.",
            "en": "Praise the work, the choices and the persistence, in others and in yourself."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Voir l'échec autrement",
        "en": "Seeing failure differently"
      },
      "caption": {
        "fr": "L'échec n'est pas ton identité, c'est une information. 🔁",
        "en": "Failure isn't your identity, it's information. 🔁"
      },
      "tags": [
        "echec",
        "resilience",
        "apprentissage",
        "mindset"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'échec : action ou identité ?",
            "en": "Failure: action or identity?"
          },
          "body": {
            "fr": "Chaque état d'esprit interprète l'échec d'une manière radicalement différente.",
            "en": "Each mindset interprets failure in a radically different way."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "En esprit fixe",
            "en": "In a fixed mindset"
          },
          "body": {
            "fr": "Échouer devient 'je suis un raté'. L'événement se transforme en verdict sur soi.",
            "en": "Failing becomes 'I am a failure'. The event turns into a verdict about you."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "En esprit de croissance",
            "en": "In a growth mindset"
          },
          "body": {
            "fr": "Échouer devient 'j'ai raté ce coup-ci'. C'est un problème à affronter et dont apprendre.",
            "en": "Failing becomes 'I failed this time'. It's a problem to face and learn from."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le défi plutôt que la fuite",
            "en": "Challenge over escape"
          },
          "body": {
            "fr": "Pour Dweck, se dépasser et tenir bon même quand ça coince est la marque de l'esprit de croissance.",
            "en": "For Dweck, stretching yourself and holding on even when it's hard is the hallmark of the growth mindset."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Après un revers, demande-toi ce que tu peux en tirer plutôt que ce qu'il dit de toi.",
            "en": "After a setback, ask what you can learn from it rather than what it says about you."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le faux état d'esprit de croissance",
        "en": "The false growth mindset"
      },
      "caption": {
        "fr": "Non, dire 'je suis ouvert' ne suffit pas. Dweck te met en garde. ⚠️",
        "en": "No, saying 'I'm open-minded' isn't enough. Dweck warns you. ⚠️"
      },
      "tags": [
        "nuance",
        "authenticite",
        "developpement",
        "mindset"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le faux esprit de croissance",
            "en": "The false growth mindset"
          },
          "body": {
            "fr": "Dweck avertit : on croit souvent l'avoir alors qu'on ne l'a pas vraiment.",
            "en": "Dweck warns: we often think we have it when we really don't."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le slogan facile",
            "en": "The easy slogan"
          },
          "body": {
            "fr": "Se déclarer 'growth mindset' ou simplement valoriser l'effort ne suffit pas à l'incarner.",
            "en": "Declaring yourself 'growth mindset' or just valuing effort isn't enough to embody it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'effort sans stratégie",
            "en": "Effort without strategy"
          },
          "body": {
            "fr": "Encourager l'effort à vide, sans nouvelles approches ni aide, ne mène pas au progrès.",
            "en": "Cheering effort in a vacuum, with no new approaches or help, doesn't lead to progress."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Nous sommes tous un mélange",
            "en": "We're all a mix"
          },
          "body": {
            "fr": "Personne n'est 100 % croissance : des déclencheurs réveillent notre esprit fixe. Le reconnaître est la vraie étape.",
            "en": "No one is 100% growth: triggers awaken our fixed mindset. Recognizing that is the real step."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Repère tes déclencheurs d'esprit fixe et travaille-les, au lieu de te contenter du slogan.",
            "en": "Spot your fixed-mindset triggers and work on them, instead of settling for the slogan."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Devenir plutôt qu'être",
        "en": "Becoming over being"
      },
      "caption": {
        "fr": "Et si l'important n'était pas qui tu es, mais qui tu deviens ? 🌱",
        "en": "What if what matters isn't who you are, but who you're becoming? 🌱"
      },
      "tags": [
        "croissance",
        "identite",
        "evolution",
        "dweck"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Devenir plutôt qu'être",
            "en": "Becoming over being"
          },
          "body": {
            "fr": "L'idée qui traverse tout le livre : la valeur est dans le mouvement, pas dans l'étiquette.",
            "en": "The idea running through the whole book: value lies in the movement, not the label."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Sortir de la mesure",
            "en": "Beyond measuring up"
          },
          "body": {
            "fr": "L'esprit fixe cherche sans cesse à prouver sa valeur. L'esprit de croissance, lui, cherche à l'étendre.",
            "en": "The fixed mindset constantly tries to prove its worth. The growth mindset tries to expand it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le sens de l'effort",
            "en": "The meaning of effort"
          },
          "body": {
            "fr": "Se dépasser n'est plus un aveu de faiblesse mais le moyen même de se construire.",
            "en": "Stretching yourself is no longer an admission of weakness but the very way you build yourself."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ses mots",
            "en": "In her words"
          },
          "body": {
            "fr": "\"Devenir est meilleur qu'être.\"",
            "en": "\"Becoming is better than being.\""
          },
          "attribution": {
            "fr": "Carol S. Dweck, Mindset",
            "en": "Carol S. Dweck, Mindset"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Mesure-toi à ton toi d'hier, pas à une étiquette figée : c'est là qu'est la croissance.",
            "en": "Measure yourself against yesterday's you, not a fixed label: that's where growth lives."
          }
        }
      ]
    }
  ],
  "mans-search-for-meaning": [
    {
      "concept": {
        "fr": "La logothérapie : la volonté de sens",
        "en": "Logotherapy: the will to meaning"
      },
      "caption": {
        "fr": "Et si notre premier moteur n'était ni le plaisir ni le pouvoir, mais le sens ? 🧭",
        "en": "What if our deepest drive isn't pleasure or power, but meaning? 🧭"
      },
      "tags": [
        "logotherapie",
        "frankl",
        "sens",
        "psychologie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La volonté de sens",
            "en": "The will to meaning"
          },
          "body": {
            "fr": "Frankl fonde la logothérapie sur une idée simple : ce qui nous meut avant tout, c'est la quête de sens.",
            "en": "Frankl builds logotherapy on one idea: what moves us most is the search for meaning."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La troisième école viennoise",
            "en": "The third Viennese school"
          },
          "body": {
            "fr": "Après la volonté de plaisir de Freud et la volonté de puissance d'Adler, Frankl propose une troisième force : la volonté de sens.",
            "en": "After Freud's will to pleasure and Adler's will to power, Frankl adds a third force: the will to meaning."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un sens unique, pas universel",
            "en": "A unique meaning, not a universal one"
          },
          "body": {
            "fr": "Il n'existe pas de sens abstrait de la vie. Le sens est propre à chaque personne et à chaque moment, comme le bon coup à jouer aux échecs.",
            "en": "There is no abstract meaning of life. Meaning is specific to each person and each moment, like the right move in a chess game."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "On ne l'invente pas, on le trouve",
            "en": "You don't invent it, you find it"
          },
          "body": {
            "fr": "Pour Frankl, le sens se découvre dans le monde, pas en soi : c'est la vie qui nous questionne, à nous d'y répondre par nos actes.",
            "en": "For Frankl, meaning is discovered in the world, not inside us: life questions us, and we answer through our actions."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Arrête de demander ce que tu attends de la vie ; demande-toi ce que la vie attend de toi, ici et maintenant.",
            "en": "Stop asking what you expect from life; ask what life expects from you, right here and now."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La dernière des libertés humaines",
        "en": "The last of the human freedoms"
      },
      "caption": {
        "fr": "On peut tout te prendre, sauf une chose. 🔓",
        "en": "Everything can be taken from you but one thing. 🔓"
      },
      "tags": [
        "liberte",
        "attitude",
        "camps",
        "resilience"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Choisir son attitude",
            "en": "Choosing your attitude"
          },
          "body": {
            "fr": "Dans les camps, Frankl observe la seule liberté que personne ne peut confisquer : celle de décider qui l'on reste.",
            "en": "In the camps, Frankl saw the one freedom no one can seize: deciding who you remain."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La réponse intérieure reste libre",
            "en": "The inner response stays free"
          },
          "body": {
            "fr": "Même privés de tout, certains prisonniers donnaient leur dernier morceau de pain. La circonstance ne dictait pas la réponse intérieure.",
            "en": "Even stripped of everything, some prisoners gave away their last piece of bread. Circumstances didn't dictate their inner response."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une décision, pas un décor",
            "en": "A decision, not a setting"
          },
          "body": {
            "fr": "Frankl montre que la façon dont un homme accepte son sort dépend de lui : c'est une conquête intérieure, pas un effet des conditions.",
            "en": "Frankl shows that the way a man accepts his fate is up to him: an inner achievement, not a product of conditions."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ses mots",
            "en": "In his words"
          },
          "body": {
            "fr": "« On peut tout enlever à un homme, sauf une chose : la dernière des libertés humaines, celle de choisir son attitude dans n'importe quelle circonstance. »",
            "en": "\"Everything can be taken from a man but one thing: the last of the human freedoms — to choose one's attitude in any given set of circumstances.\""
          },
          "attribution": {
            "fr": "Viktor E. Frankl",
            "en": "Viktor E. Frankl"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Tu ne contrôles pas toujours ce qui t'arrive, mais toujours la posture que tu choisis d'y opposer.",
            "en": "You can't always control what happens to you, but you always control the stance you take toward it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Trouver un sens à la souffrance",
        "en": "Finding meaning in suffering"
      },
      "caption": {
        "fr": "Quand on ne peut plus changer la situation, il reste une chose à changer. 🌱",
        "en": "When the situation can't change, one thing still can. 🌱"
      },
      "tags": [
        "souffrance",
        "sens",
        "epreuve",
        "croissance"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La souffrance qui a un sens",
            "en": "Suffering that carries meaning"
          },
          "body": {
            "fr": "Frankl ne glorifie pas la douleur, mais montre qu'une souffrance inévitable peut devenir un accomplissement intérieur.",
            "en": "Frankl doesn't glorify pain, but shows that unavoidable suffering can become an inner achievement."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Changer de situation ou se changer soi",
            "en": "Change the situation, or change yourself"
          },
          "body": {
            "fr": "Face à un destin qu'on ne peut modifier, le défi se déplace : il ne s'agit plus d'agir sur le monde, mais de se transformer soi-même.",
            "en": "Facing a fate you cannot alter, the challenge shifts: no longer acting on the world, but transforming yourself."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un « pourquoi » pour tenir",
            "en": "A 'why' to endure"
          },
          "body": {
            "fr": "Frankl cite Nietzsche : celui qui a un pourquoi vivre supporte presque n'importe quel comment. Le sens rend l'épreuve tenable.",
            "en": "Frankl quotes Nietzsche: he who has a why to live can bear almost any how. Meaning makes the ordeal bearable."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ses mots",
            "en": "In his words"
          },
          "body": {
            "fr": "« Quand nous ne pouvons plus changer une situation, nous sommes mis au défi de nous changer nous-mêmes. »",
            "en": "\"When we are no longer able to change a situation, we are challenged to change ourselves.\""
          },
          "attribution": {
            "fr": "Viktor E. Frankl",
            "en": "Viktor E. Frankl"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La souffrance inévitable n'est pas à fuir mais à porter avec dignité : c'est là qu'elle cesse d'être vaine.",
            "en": "Unavoidable suffering isn't to flee but to carry with dignity: that's where it stops being meaningless."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les trois sources de sens",
        "en": "The three sources of meaning"
      },
      "caption": {
        "fr": "Trois portes vers le sens, ouvertes à chacun. 🚪",
        "en": "Three doors to meaning, open to everyone. 🚪"
      },
      "tags": [
        "sens",
        "amour",
        "action",
        "logotherapie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Où trouver du sens",
            "en": "Where to find meaning"
          },
          "body": {
            "fr": "Selon Frankl, on peut découvrir un sens à sa vie de trois manières concrètes.",
            "en": "According to Frankl, we can discover life's meaning in three concrete ways."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "1. Créer ou accomplir",
            "en": "1. Create or accomplish"
          },
          "body": {
            "fr": "En réalisant une œuvre ou en accomplissant un acte : le travail et l'engagement donnent une prise sur l'existence.",
            "en": "By creating a work or doing a deed: labor and commitment give a grip on existence."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "2. Aimer et rencontrer",
            "en": "2. Love and encounter"
          },
          "body": {
            "fr": "En vivant quelque chose ou en rencontrant quelqu'un : l'amour, dit Frankl, permet de voir l'autre dans toute sa singularité.",
            "en": "By experiencing something or encountering someone: love, says Frankl, lets us see another in their full uniqueness."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "3. L'attitude face à l'inévitable",
            "en": "3. The stance toward the unavoidable"
          },
          "body": {
            "fr": "En choisissant sa posture face à une souffrance qu'on ne peut éviter : la voie qui reste ouverte même quand tout le reste est fermé.",
            "en": "By choosing your posture toward suffering you cannot avoid: the path that stays open when all others close."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Créer, aimer, ou tenir avec dignité : aucune vie n'est vide de sens tant qu'une de ces portes reste ouverte.",
            "en": "Create, love, or endure with dignity: no life is empty of meaning while one of these doors stays open."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le vide existentiel",
        "en": "The existential vacuum"
      },
      "caption": {
        "fr": "Ce vide qui remonte souvent le dimanche... 😶‍🌫️",
        "en": "That emptiness that often surfaces on Sundays... 😶‍🌫️"
      },
      "tags": [
        "vide",
        "ennui",
        "sens",
        "modernite"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le vide existentiel",
            "en": "The existential vacuum"
          },
          "body": {
            "fr": "Frankl décrit un mal moderne : le sentiment diffus que la vie n'a plus de sens.",
            "en": "Frankl describes a modern ailment: the vague feeling that life has lost its meaning."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ni instinct ni tradition",
            "en": "Neither instinct nor tradition"
          },
          "body": {
            "fr": "L'humain n'est plus guidé par ses instincts, et les traditions qui le portaient s'effacent : il doit désormais choisir, et parfois ne sait plus quoi.",
            "en": "Humans are no longer guided by instinct, and the traditions that held them fade: now we must choose, and sometimes no longer know what."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La névrose du dimanche",
            "en": "The Sunday neurosis"
          },
          "body": {
            "fr": "Frankl nomme ce vide qui surgit quand l'agitation retombe : l'ennui et l'apathie du dimanche, une fois la semaine à l'arrêt.",
            "en": "Frankl names the void that rises when the rush stops: the boredom and apathy of Sunday, once the busy week goes quiet."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Combler par des substituts",
            "en": "Filling it with substitutes"
          },
          "body": {
            "fr": "Ce vide se masque souvent par la course au pouvoir, à l'argent ou au plaisir, qui étourdissent sans jamais nourrir.",
            "en": "This void is often masked by chasing power, money or pleasure, which numb but never nourish."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'ennui profond n'est pas un défaut à distraire mais un signal : il t'appelle à chercher un sens, pas une occupation.",
            "en": "Deep boredom isn't a flaw to distract away but a signal: it calls you to seek meaning, not busyness."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le sens ne se poursuit pas, il advient",
        "en": "Meaning isn't chased, it ensues"
      },
      "caption": {
        "fr": "Plus tu cours après le bonheur, plus il te fuit. 🎯",
        "en": "The more you chase happiness, the more it escapes you. 🎯"
      },
      "tags": [
        "bonheur",
        "transcendance",
        "sens",
        "succes"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Vise le sens, pas le bonheur",
            "en": "Aim at meaning, not happiness"
          },
          "body": {
            "fr": "Pour Frankl, le bonheur ne se traque pas de front : il naît comme effet secondaire d'une vie tournée vers autre chose que soi.",
            "en": "For Frankl, happiness can't be hunted directly: it arises as a side effect of a life turned toward something beyond the self."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'auto-transcendance",
            "en": "Self-transcendence"
          },
          "body": {
            "fr": "L'humain se réalise en se donnant : à une cause, à une œuvre, à un autre. Plus il s'oublie, plus il devient pleinement lui-même.",
            "en": "A human is fulfilled by giving themselves: to a cause, a work, another person. The more they forget themselves, the more fully themselves they become."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le paradoxe de la poursuite",
            "en": "The paradox of pursuit"
          },
          "body": {
            "fr": "Viser directement le bonheur ou le succès les fait fuir. Ils arrivent d'eux-mêmes quand on se consacre à plus grand que soi.",
            "en": "Aiming straight at happiness or success drives them away. They come on their own when you devote yourself to something greater than you."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ses mots",
            "en": "In his words"
          },
          "body": {
            "fr": "« Le succès, comme le bonheur, ne peut être poursuivi ; il doit s'ensuivre... comme l'effet secondaire non voulu de son dévouement à une cause plus grande que soi. »",
            "en": "\"Success, like happiness, cannot be pursued; it must ensue... as the unintended side effect of one's personal dedication to a cause greater than oneself.\""
          },
          "attribution": {
            "fr": "Viktor E. Frankl",
            "en": "Viktor E. Frankl"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Cesse de courir après le bonheur. Engage-toi pour ce qui te dépasse, et laisse-le advenir de surcroît.",
            "en": "Stop chasing happiness. Commit to what's bigger than you, and let it arrive as a bonus."
          }
        }
      ]
    }
  ],
  "psychology-of-money": [
    {
      "concept": {
        "fr": "Personne n'est fou",
        "en": "No One's Crazy"
      },
      "caption": {
        "fr": "Tes décisions d'argent te semblent logiques. Celles des autres aussi. 🧠",
        "en": "Your money decisions make sense to you. So do everyone else's. 🧠"
      },
      "tags": [
        "psychologie",
        "comportement",
        "experience",
        "biais"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Personne n'est fou",
            "en": "No One's Crazy"
          },
          "body": {
            "fr": "Personne n'est irrationnel avec l'argent : chacun agit selon sa propre expérience du monde.",
            "en": "No one is crazy with money. Everyone acts based on their own unique experience of the world."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ton vécu façonne tout",
            "en": "Your history shapes everything"
          },
          "body": {
            "fr": "Ceux qui ont grandi avec une forte inflation ou un krach investissent tout autrement que ceux qui ne les ont jamais connus.",
            "en": "People who grew up with high inflation or a crash invest very differently from those who never experienced them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une part infime de l'histoire",
            "en": "A tiny slice of history"
          },
          "body": {
            "fr": "Chacun n'a vécu qu'une fraction minuscule de l'histoire économique, mais en tire des convictions énormes.",
            "en": "Each of us has lived through a tiny fraction of economic history, yet we form huge beliefs from it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le loto, un espoir tangible",
            "en": "The lottery as tangible hope"
          },
          "body": {
            "fr": "Housel montre que jouer au loto peut sembler rationnel pour qui n'a jamais entrevu d'autre voie vers l'espoir.",
            "en": "Housel shows that buying lottery tickets can feel rational to someone who has never glimpsed another path to hope."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de juger un choix d'argent, demande quelle histoire l'a produit — la tienne comprise.",
            "en": "Before judging a money choice, ask what story produced it — including your own."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Chance et risque",
        "en": "Luck and Risk"
      },
      "caption": {
        "fr": "Le succès n'est pas que du mérite, et l'échec pas que de la faute. 🎲",
        "en": "Success isn't all effort, and failure isn't all fault. 🎲"
      },
      "tags": [
        "chance",
        "risque",
        "succes",
        "humilite"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Chance et risque sont jumeaux",
            "en": "Luck and risk are siblings"
          },
          "body": {
            "fr": "Toute issue est guidée par des forces qui dépassent l'effort individuel.",
            "en": "Every outcome is guided by forces other than individual effort."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le hasard Bill Gates",
            "en": "The Bill Gates lottery"
          },
          "body": {
            "fr": "Gates a fréquenté l'un des rares lycées au monde équipé d'un ordinateur en 1968 — une chance sur un million.",
            "en": "Gates attended one of the only high schools on earth with a computer in 1968 — a one-in-a-million break."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'ami oublié",
            "en": "The friend history forgot"
          },
          "body": {
            "fr": "Kent Evans, aussi doué que Gates, est mort dans un accident de montagne avant la fin du lycée : même talent, autre issue.",
            "en": "Kent Evans, just as gifted as Gates, died in a mountaineering accident before graduating: same talent, opposite fate."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le miroir du risque",
            "en": "The mirror of risk"
          },
          "body": {
            "fr": "La chance et le risque sont le même phénomène : des résultats venus du hasard plutôt que du choix.",
            "en": "Luck and risk are the same thing: outcomes driven by chance rather than choice."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Admire moins les cas extrêmes, pardonne davantage les échecs, et vise des choix robustes quelle que soit la chance.",
            "en": "Admire extreme cases less, forgive failures more, and aim for choices that hold up regardless of luck."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Assez",
        "en": "Enough"
      },
      "caption": {
        "fr": "Le vrai luxe, c'est de savoir quand tu en as assez. 🛑",
        "en": "The real flex is knowing when you have enough. 🛑"
      },
      "tags": [
        "assez",
        "cupidite",
        "comparaison",
        "limites"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Savoir quand c'est assez",
            "en": "Knowing what is enough"
          },
          "body": {
            "fr": "L'absence de sens du « assez » pousse des gens riches à risquer tout ce qu'ils possèdent.",
            "en": "The lack of a sense of \"enough\" makes wealthy people risk everything they have."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le poteau qui recule",
            "en": "The goalpost that moves"
          },
          "body": {
            "fr": "Si l'appétit grandit toujours plus vite que les gains, on ne rattrape jamais le bonheur qu'on croyait acheter.",
            "en": "If your appetite always grows faster than your gains, you never catch the happiness you thought you'd buy."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Risquer l'essentiel",
            "en": "Risking what matters"
          },
          "body": {
            "fr": "Housel cite Madoff et Rajat Gupta : déjà immensément riches, ils ont tout détruit pour vouloir davantage.",
            "en": "Housel cites Madoff and Rajat Gupta: already immensely rich, they destroyed it all reaching for more."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La ligne à ne pas franchir",
            "en": "The uncrossable line"
          },
          "body": {
            "fr": "Certaines choses — réputation, liberté, famille — ne valent jamais le risque, quel que soit le gain possible.",
            "en": "Some things — reputation, freedom, family — are never worth the risk, no matter the potential gain."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Définis ton « assez » à l'avance ; c'est le seul rempart contre la comparaison sociale infinie.",
            "en": "Define your \"enough\" in advance; it's the only defense against endless social comparison."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La magie des intérêts composés",
        "en": "Confounding Compounding"
      },
      "caption": {
        "fr": "La fortune de Buffett tient moins au rendement qu'au temps. ⏳",
        "en": "Buffett's fortune is less about returns than about time. ⏳"
      },
      "tags": [
        "interetscomposes",
        "temps",
        "patience",
        "investir"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le temps fait la fortune",
            "en": "Time builds the fortune"
          },
          "body": {
            "fr": "Les intérêts composés sont si puissants qu'ils défient l'intuition — leur vrai carburant est la durée.",
            "en": "Compounding is so powerful it defies intuition — its real fuel is duration."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le secret de Buffett",
            "en": "Buffett's real secret"
          },
          "body": {
            "fr": "L'essentiel de la fortune de Warren Buffett a été accumulé après ses 65 ans : il investit depuis l'enfance.",
            "en": "The vast majority of Buffett's net worth was earned after his 65th birthday: he's been investing since childhood."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Bon, longtemps",
            "en": "Good, for a long time"
          },
          "body": {
            "fr": "Le secret n'est pas un rendement spectaculaire, mais un rendement correct maintenu sur des décennies.",
            "en": "The secret isn't earning spectacular returns, but earning decent returns sustained over decades."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'intuition trompeuse",
            "en": "The counterintuitive math"
          },
          "body": {
            "fr": "Notre cerveau raisonne en additions ; la croissance composée, elle, explose de façon exponentielle.",
            "en": "Our brains think in addition, but compounding grows in explosive, exponential leaps."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne cherche pas les plus gros rendements : cherche des rendements corrects que tu peux tenir le plus longtemps possible.",
            "en": "Don't chase the highest returns: seek decent returns you can hold onto for the longest possible time."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La richesse est invisible",
        "en": "Wealth Is What You Don't See"
      },
      "caption": {
        "fr": "Ce que tu vois, c'est la dépense. La richesse, c'est ce qui reste caché. 👀",
        "en": "What you see is the spending. Wealth is what stays hidden. 👀"
      },
      "tags": [
        "richesse",
        "epargne",
        "apparences",
        "consommation"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La richesse ne se voit pas",
            "en": "Wealth is invisible"
          },
          "body": {
            "fr": "La richesse, ce sont les actifs non dépensés — donc précisément ce que personne ne peut voir.",
            "en": "Wealth is the assets not yet spent — which is exactly what no one can see."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Riche n'est pas fortuné",
            "en": "Rich isn't wealthy"
          },
          "body": {
            "fr": "Être riche, c'est un revenu élevé. Être fortuné, c'est un revenu non dépensé, conservé pour plus tard.",
            "en": "Being rich is a high income. Being wealthy is income not spent, kept in reserve for later."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le piège de la vitrine",
            "en": "The showroom trap"
          },
          "body": {
            "fr": "Dépenser pour montrer qu'on a de l'argent est le moyen le plus rapide d'en avoir moins.",
            "en": "Spending money to show people how much money you have is the fastest way to have less of it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'invisible ne s'imite pas",
            "en": "You can't copy what you can't see"
          },
          "body": {
            "fr": "Comme la richesse est cachée, on n'a pas de modèle à imiter — on ne copie que la consommation visible.",
            "en": "Because wealth is hidden, we have no role models to imitate — we only copy visible consumption."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Construis la richesse invisible : l'écart entre ton ego et ton revenu est ton taux d'épargne réel.",
            "en": "Build invisible wealth: the gap between your ego and your income is your real savings rate."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le contrôle du temps",
        "en": "Control Over Your Time"
      },
      "caption": {
        "fr": "Le plus haut dividende de l'argent : faire ce que tu veux, quand tu veux. 🕊️",
        "en": "Money's highest dividend: doing what you want, when you want. 🕊️"
      },
      "tags": [
        "liberte",
        "temps",
        "autonomie",
        "bonheur"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La liberté avant tout",
            "en": "Freedom above all"
          },
          "body": {
            "fr": "Le plus grand rendement de l'argent est sa capacité à te rendre maître de ton temps.",
            "en": "The highest dividend money pays is its ability to give you control over your time."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le vrai luxe",
            "en": "The real luxury"
          },
          "body": {
            "fr": "Pouvoir se réveiller et décider quoi faire de sa journée est la forme de richesse la plus universelle.",
            "en": "Waking up and deciding what to do with your day is the most universal form of wealth."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le paradoxe de la voiture",
            "en": "The man-in-the-car paradox"
          },
          "body": {
            "fr": "En voyant une belle voiture, on n'admire pas le conducteur : on s'imagine soi-même au volant.",
            "en": "When we see someone in a nice car, we rarely admire the driver — we imagine ourselves behind the wheel."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les biens n'achètent pas le respect",
            "en": "Stuff won't buy respect"
          },
          "body": {
            "fr": "On accumule pour être admiré, mais les objets n'apportent ni le respect ni l'estime qu'on recherche vraiment.",
            "en": "We buy things to be admired, but possessions rarely deliver the respect and esteem we're actually after."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Mesure la réussite non en biens, mais en heures dont tu es pleinement maître.",
            "en": "Measure success not in possessions, but in the hours you fully control."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La marge d'erreur",
        "en": "Room for Error"
      },
      "caption": {
        "fr": "Survivre d'abord. Les gros gains vont à ceux qui restent en jeu. 🛡️",
        "en": "Survive first. The big gains go to those who stay in the game. 🛡️"
      },
      "tags": [
        "margederreur",
        "survie",
        "prudence",
        "longterme"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Se laisser une marge",
            "en": "Leave room for error"
          },
          "body": {
            "fr": "La clé n'est pas d'acquérir de l'argent mais de le garder : rester en jeu passe avant tout.",
            "en": "The key isn't getting money but keeping it: surviving comes before everything else."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Survivre pour composer",
            "en": "Survive to compound"
          },
          "body": {
            "fr": "Les intérêts composés n'opèrent que si tu n'es jamais éliminé : la longévité prime sur la performance.",
            "en": "Compounding only works if you never get wiped out: endurance beats brilliance."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La volatilité est un prix",
            "en": "Volatility is a fee"
          },
          "body": {
            "fr": "Housel décrit les baisses de marché comme un droit d'entrée à payer, pas une amende à éviter.",
            "en": "Housel frames market declines as a fee for admission, not a fine to be avoided."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Prévoir l'imprévu",
            "en": "Plan on the plan going wrong"
          },
          "body": {
            "fr": "Le plan le plus important est de prévoir que le plan ne se déroulera pas comme prévu.",
            "en": "The most important part of every plan is planning on your plan not going according to plan."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Bâtis assez de marge — épargne, prudence — pour traverser l'imprévu et rester investi longtemps.",
            "en": "Build enough room — savings, caution — to weather surprises and stay invested for the long haul."
          }
        }
      ]
    }
  ],
  "rich-dad-poor-dad": [
    {
      "concept": {
        "fr": "Les riches ne travaillent pas pour l'argent",
        "en": "The rich don't work for money"
      },
      "caption": {
        "fr": "La première leçon du livre change tout : arrête de courir après le salaire 💸",
        "en": "The book's first lesson changes everything: stop chasing a paycheck 💸"
      },
      "tags": [
        "mindset",
        "argent",
        "liberté",
        "kiyosaki"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les riches ne travaillent pas pour l'argent",
            "en": "The rich don't work for money"
          },
          "body": {
            "fr": "La leçon n°1 de Rich Dad : les riches font travailler l'argent pour eux.",
            "en": "Rich Dad's lesson #1: the rich make money work for them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le piège du salaire",
            "en": "The salary trap"
          },
          "body": {
            "fr": "La plupart des gens échangent leur temps contre un salaire toute leur vie, sans jamais gagner en liberté.",
            "en": "Most people trade their time for a paycheck their whole life, never gaining freedom."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'argent travaille pour toi",
            "en": "Money works for you"
          },
          "body": {
            "fr": "Kiyosaki apprend à investir ses revenus dans des choses qui rapportent, au lieu de dépenser plus dès qu'il gagne plus.",
            "en": "Kiyosaki learns to invest his income into things that pay, instead of spending more each time he earns more."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Peur et désir",
            "en": "Fear and desire"
          },
          "body": {
            "fr": "Le père riche montre que ce sont la peur de manquer et le désir de plus qui gardent les gens prisonniers de leur emploi.",
            "en": "Rich Dad shows that the fear of lacking and the desire for more are what keep people trapped in their jobs."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "En une phrase",
            "en": "In one line"
          },
          "body": {
            "fr": "\"Les pauvres et la classe moyenne travaillent pour l'argent. Les riches font travailler l'argent pour eux.\"",
            "en": "\"The poor and the middle class work for money. The rich have money work for them.\""
          },
          "attribution": {
            "fr": "Robert T. Kiyosaki",
            "en": "Robert T. Kiyosaki"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Cesse de raisonner en salaire. Demande-toi plutôt : comment mon argent peut-il en générer davantage ?",
            "en": "Stop thinking in terms of salary. Ask instead: how can my money generate more money?"
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Actif contre passif",
        "en": "Assets vs liabilities"
      },
      "caption": {
        "fr": "La règle la plus simple du livre, et celle que presque personne n'applique 🧠",
        "en": "The book's simplest rule, and the one almost no one applies 🧠"
      },
      "tags": [
        "actifs",
        "passifs",
        "richesse",
        "cashflow"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Connais la différence : actif ou passif",
            "en": "Know the difference: asset or liability"
          },
          "body": {
            "fr": "Pour Kiyosaki, toute la richesse tient dans cette distinction.",
            "en": "For Kiyosaki, all wealth comes down to this one distinction."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La définition qui compte",
            "en": "The definition that matters"
          },
          "body": {
            "fr": "Un actif met de l'argent dans ta poche. Un passif en sort. C'est aussi simple que ça.",
            "en": "An asset puts money in your pocket. A liability takes money out. It's that simple."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ta maison n'est pas un actif",
            "en": "Your house isn't an asset"
          },
          "body": {
            "fr": "Kiyosaki choque en affirmant que la résidence principale est souvent un passif : elle coûte chaque mois sans rien rapporter.",
            "en": "Kiyosaki shocks readers by saying your home is often a liability: it costs money every month without paying you."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Nourrir la colonne des actifs",
            "en": "Feed the asset column"
          },
          "body": {
            "fr": "Les riches achètent d'abord des actifs (immobilier locatif, actions, entreprises) qui génèrent des revenus.",
            "en": "The rich buy assets first (rental property, stocks, businesses) that generate income."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant chaque achat, demande-toi : est-ce que ça me rapporte ou est-ce que ça me coûte ?",
            "en": "Before every purchase, ask: does this pay me or does this cost me?"
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Occupe-toi de tes affaires",
        "en": "Mind your own business"
      },
      "caption": {
        "fr": "Ton métier n'est pas ton business. Une nuance décisive 👀",
        "en": "Your job isn't your business. A decisive difference 👀"
      },
      "tags": [
        "business",
        "investir",
        "carrière",
        "revenus"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Occupe-toi de tes propres affaires",
            "en": "Mind your own business"
          },
          "body": {
            "fr": "Kiyosaki distingue ton métier de ton véritable business.",
            "en": "Kiyosaki separates your profession from your real business."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Métier vs business",
            "en": "Profession vs business"
          },
          "body": {
            "fr": "Ton métier te paie les factures. Ton business, c'est la colonne des actifs que tu construis à côté.",
            "en": "Your profession pays the bills. Your business is the asset column you build on the side."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'exemple de Ray Kroc",
            "en": "The Ray Kroc example"
          },
          "body": {
            "fr": "Kiyosaki rappelle que McDonald's ne vend pas vraiment des hamburgers : son vrai business, c'est l'immobilier sous ses restaurants.",
            "en": "Kiyosaki notes McDonald's isn't really in the burger business: its true business is the real estate under its restaurants."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Garde ton emploi, bâtis à côté",
            "en": "Keep your job, build alongside"
          },
          "body": {
            "fr": "Pas besoin de tout quitter : utilise ton salaire pour financer patiemment tes actifs.",
            "en": "No need to quit everything: use your salary to patiently fund your assets."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne confonds pas gagner sa vie et bâtir sa richesse. Commence à nourrir ta colonne d'actifs dès aujourd'hui.",
            "en": "Don't confuse earning a living with building wealth. Start feeding your asset column today."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La course des rats",
        "en": "The rat race"
      },
      "caption": {
        "fr": "Plus tu gagnes, plus tu dépenses… et plus tu restes coincé 🐭",
        "en": "The more you earn, the more you spend, and the more stuck you stay 🐭"
      },
      "tags": [
        "ratrace",
        "dettes",
        "habitudes",
        "liberté"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Sortir de la course des rats",
            "en": "Escaping the rat race"
          },
          "body": {
            "fr": "Le cycle qui piège la classe moyenne toute sa vie.",
            "en": "The cycle that traps the middle class for life."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le cercle vicieux",
            "en": "The vicious circle"
          },
          "body": {
            "fr": "On gagne plus, on dépense plus, on s'endette plus. Le salaire augmente, mais la liberté, jamais.",
            "en": "You earn more, spend more, owe more. The paycheck grows but freedom never does."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Piloté par la peur",
            "en": "Driven by fear"
          },
          "body": {
            "fr": "La peur des factures pousse à se lever chaque matin ; le désir de plus fait dépenser la moindre augmentation.",
            "en": "Fear of the bills gets you up each morning; desire for more spends every raise."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La sortie : les actifs",
            "en": "The exit: assets"
          },
          "body": {
            "fr": "On sort de la course quand les revenus de nos actifs couvrent nos dépenses. C'est ça, la liberté financière.",
            "en": "You escape when income from your assets covers your expenses. That is financial freedom."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Une augmentation n'est pas une invitation à dépenser plus, mais à investir plus.",
            "en": "A raise isn't an invitation to spend more, but to invest more."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Travaille pour apprendre",
        "en": "Work to learn, not to earn"
      },
      "caption": {
        "fr": "Choisis ton job pour ce qu'il t'apprend, pas seulement pour ce qu'il paie 📚",
        "en": "Choose your job for what it teaches, not just what it pays 📚"
      },
      "tags": [
        "compétences",
        "carrière",
        "apprentissage",
        "croissance"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Travaille pour apprendre, pas pour gagner",
            "en": "Work to learn, not to earn"
          },
          "body": {
            "fr": "La leçon de Kiyosaki sur le choix d'un métier.",
            "en": "Kiyosaki's lesson on how to choose a job."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Vise les compétences",
            "en": "Aim for skills"
          },
          "body": {
            "fr": "Kiyosaki conseille de chercher les emplois qui apprennent des compétences larges, pas seulement le meilleur salaire.",
            "en": "Kiyosaki advises seeking jobs that teach broad skills, not just the highest pay."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ventes et communication",
            "en": "Sales and communication"
          },
          "body": {
            "fr": "Il insiste sur des compétences clés : vendre, communiquer, comprendre les chiffres et le marketing.",
            "en": "He stresses key skills: selling, communicating, understanding numbers, and marketing."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le spécialiste trop étroit",
            "en": "The narrow specialist"
          },
          "body": {
            "fr": "Se sur-spécialiser peut enfermer : le père riche préfère savoir un peu de tout pour piloter un business.",
            "en": "Over-specializing can trap you: Rich Dad prefers knowing a bit of everything to run a business."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Évalue ton prochain poste à ce qu'il t'enseigne, pas seulement à la fiche de paie.",
            "en": "Judge your next role by what it teaches you, not just the paycheck."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Ce n'est pas combien tu gagnes",
        "en": "It's not how much you make"
      },
      "caption": {
        "fr": "Un salaire élevé ne rend pas riche. L'éducation financière, oui 🧾",
        "en": "A high salary doesn't make you rich. Financial education does 🧾"
      },
      "tags": [
        "éducationfinancière",
        "épargne",
        "littératie",
        "richesse"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Ce qui compte, c'est ce que tu gardes",
            "en": "What matters is what you keep"
          },
          "body": {
            "fr": "L'éducation financière au cœur du message de Kiyosaki.",
            "en": "Financial education at the heart of Kiyosaki's message."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Gagner ne suffit pas",
            "en": "Earning isn't enough"
          },
          "body": {
            "fr": "Beaucoup de gros salaires restent pauvres car ils dépensent tout. Ce qui compte, c'est ce qu'on conserve.",
            "en": "Many high earners stay broke because they spend it all. What counts is what you retain."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'esprit, ton meilleur actif",
            "en": "Your mind, your best asset"
          },
          "body": {
            "fr": "Pour Kiyosaki, l'actif le plus puissant que nous ayons tous, c'est notre esprit et ce qu'on lui apprend.",
            "en": "For Kiyosaki, the most powerful asset we all have is our mind and what we train it to know."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Comptabilité et investissement",
            "en": "Accounting and investing"
          },
          "body": {
            "fr": "Il défend une vraie littératie financière : lire des chiffres, comprendre les impôts, l'investissement et les marchés.",
            "en": "He champions real financial literacy: reading numbers, understanding taxes, investing and markets."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "En une phrase",
            "en": "In one line"
          },
          "body": {
            "fr": "\"Ce n'est pas combien d'argent vous gagnez. C'est combien vous en gardez.\"",
            "en": "\"It's not how much money you make. It's how much money you keep.\""
          },
          "attribution": {
            "fr": "Robert T. Kiyosaki",
            "en": "Robert T. Kiyosaki"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Investis d'abord dans ton éducation financière : c'est le rendement le plus sûr.",
            "en": "Invest in your financial education first: it's the safest return."
          }
        }
      ]
    }
  ],
  "richest-man-in-babylon": [
    {
      "concept": {
        "fr": "Se payer d'abord",
        "en": "Pay Yourself First"
      },
      "caption": {
        "fr": "Le premier remède d'Arkad : garde une part de ce que tu gagnes avant tout le reste 💰",
        "en": "Arkad's first cure: keep a slice of everything you earn before anything else 💰"
      },
      "tags": [
        "epargne",
        "babylone",
        "arkad",
        "richesse"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Une part de ce que tu gagnes est à toi",
            "en": "A part of all you earn is yours"
          },
          "body": {
            "fr": "Arkad, l'homme le plus riche de Babylone, révèle son premier secret : commence par remplir ta bourse.",
            "en": "Arkad, the richest man in Babylon, reveals his first secret: start thy purse to fattening."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Garde un dixième",
            "en": "Keep one-tenth"
          },
          "body": {
            "fr": "Pour chaque dix pièces gagnées, n'en dépense que neuf. La dixième t'appartient et ne doit jamais sortir de ta bourse.",
            "en": "For every ten coins earned, spend only nine. The tenth is yours to keep and must never leave your purse."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Tu ne le remarqueras pas",
            "en": "You won't miss it"
          },
          "body": {
            "fr": "Arkad découvre qu'il vivait aussi bien sans ce dixième mis de côté. L'argent épargné manque bien moins qu'on ne le croit.",
            "en": "Arkad found he lived just as well without that tenth. The money set aside is missed far less than you'd expect."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La graine de la fortune",
            "en": "The seed of wealth"
          },
          "body": {
            "fr": "Cette réserve devient le capital de départ. Sans elle, aucune richesse ne peut jamais commencer à pousser.",
            "en": "This reserve becomes your starting capital. Without it, no fortune can ever begin to grow."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Le principe fondateur",
            "en": "The founding principle"
          },
          "body": {
            "fr": "Une part de tout ce que tu gagnes est à toi et doit te rester.",
            "en": "A part of all you earn is yours to keep."
          },
          "attribution": {
            "fr": "George S. Clason, L'Homme le plus riche de Babylone",
            "en": "George S. Clason, The Richest Man in Babylon"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Épargne au moins 10 % de chaque revenu avant de payer quoi que ce soit d'autre. Ce geste, répété, construit toute fortune.",
            "en": "Save at least 10% of every income before paying anything else. Repeated, that single habit builds every fortune."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les 7 remèdes à une bourse plate",
        "en": "The 7 Cures for a Lean Purse"
      },
      "caption": {
        "fr": "Les 7 leçons qu'Arkad enseigne au roi pour enrichir tout Babylone 📜",
        "en": "The 7 lessons Arkad teaches the king to enrich all of Babylon 📜"
      },
      "tags": [
        "budget",
        "finances",
        "babylone",
        "methode"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Sept remèdes pour une bourse plate",
            "en": "Seven cures for a lean purse"
          },
          "body": {
            "fr": "Le roi charge Arkad d'enseigner la richesse au peuple. Voici son programme en sept étapes.",
            "en": "The king asks Arkad to teach wealth to the people. Here is his seven-step program."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Remplir et contrôler",
            "en": "Fill it and control it"
          },
          "body": {
            "fr": "1. Épargne un dixième de tes gains. 2. Maîtrise tes dépenses : distingue tes besoins de tes désirs, qui sont sans limite.",
            "en": "1. Save one-tenth of what you earn. 2. Control spending: separate needs from desires, which are endless."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Faire travailler l'or",
            "en": "Make gold work"
          },
          "body": {
            "fr": "3. Fais fructifier ton or pour qu'il te rapporte un revenu. 4. Protège-le des pertes en n'investissant que là où le capital est sûr.",
            "en": "3. Make your gold multiply so it earns a steady income. 4. Guard it from loss by investing only where the principal is safe."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Loger, assurer, progresser",
            "en": "Home, future, skill"
          },
          "body": {
            "fr": "5. Fais de ton logement un investissement. 6. Assure un revenu futur pour tes vieux jours et ta famille. 7. Augmente ta capacité à gagner.",
            "en": "5. Make your dwelling a profitable investment. 6. Insure a future income for old age and family. 7. Increase your ability to earn."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La richesse n'est pas un coup de chance mais une méthode : épargner, dépenser avec discernement, investir prudemment et se former.",
            "en": "Wealth is not luck but a method: save, spend wisely, invest cautiously, and keep improving your skills."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les cinq lois de l'or",
        "en": "The Five Laws of Gold"
      },
      "caption": {
        "fr": "Arkad offre à son fils un sac d'or et un sac de sagesse. La sagesse vaut bien plus 🪙",
        "en": "Arkad gives his son a bag of gold and a bag of wisdom. The wisdom is worth far more 🪙"
      },
      "tags": [
        "investir",
        "lois",
        "or",
        "babylone"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Les cinq lois de l'or",
            "en": "The five laws of gold"
          },
          "body": {
            "fr": "Nomasir hérite non pas d'une fortune, mais des règles intemporelles qui permettent de la créer et de la garder.",
            "en": "Nomasir inherits not a fortune, but the timeless rules that let one create and keep it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'or vient et travaille",
            "en": "Gold comes and works"
          },
          "body": {
            "fr": "1. L'or vient volontiers à qui en met au moins un dixième de côté. 2. Il travaille avec ardeur pour qui lui trouve un emploi profitable.",
            "en": "1. Gold comes gladly to whoever saves at least one-tenth. 2. It labors diligently for whoever finds it profitable use."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'or reste au prudent",
            "en": "Gold clings to the cautious"
          },
          "body": {
            "fr": "3. L'or reste fidèle à celui qui l'investit avec le conseil de gens compétents dans sa gestion.",
            "en": "3. Gold clings to the owner who invests it under the advice of those wise in its handling."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'or fuit l'imprudent",
            "en": "Gold flees the reckless"
          },
          "body": {
            "fr": "4. Il s'échappe de qui l'engage dans des affaires qu'il ne comprend pas. 5. Il fuit qui poursuit des gains impossibles et les promesses trop belles.",
            "en": "4. It slips from whoever invests in ventures they don't understand. 5. It flees whoever chases impossible earnings and tempting schemes."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Épargne, fais travailler ton argent, écoute les experts compétents, et fuis ce que tu ne comprends pas ou ce qui promet trop.",
            "en": "Save, put your money to work, heed competent experts, and avoid what you don't understand or what promises too much."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Sortir des dettes : le plan 70/20/10",
        "en": "Escaping Debt: the 70/20/10 Plan"
      },
      "caption": {
        "fr": "Dabasir, l'ancien esclave, prouve qu'on peut rembourser tout en s'enrichissant ⛓️",
        "en": "Dabasir, the former slave, proves you can repay debt and still grow rich ⛓️"
      },
      "tags": [
        "dettes",
        "dabasir",
        "plan",
        "discipline"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le marchand de chameaux de Babylone",
            "en": "The camel trader of Babylon"
          },
          "body": {
            "fr": "Dabasir, criblé de dettes puis réduit en esclavage, se relève grâce à un plan simple gravé sur des tablettes d'argile.",
            "en": "Dabasir, buried in debt then enslaved, rises again through a simple plan carved on clay tablets."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Diviser chaque revenu",
            "en": "Split every income"
          },
          "body": {
            "fr": "Il partage chaque gain : 70 % pour vivre, 20 % pour rembourser ses créanciers, 10 % pour bâtir sa propre fortune.",
            "en": "He splits every earning: 70% to live on, 20% to repay creditors, 10% to build his own wealth."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Affronter ses créanciers",
            "en": "Face your creditors"
          },
          "body": {
            "fr": "Plutôt que de fuir, Dabasir va voir chaque créancier et propose un plan honnête. Sa dette devient une dette d'honneur à honorer.",
            "en": "Rather than flee, Dabasir visits each creditor with an honest plan. His debt becomes a debt of honor to be paid."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Sa devise",
            "en": "His motto"
          },
          "body": {
            "fr": "Là où il y a de la détermination, on peut trouver le chemin.",
            "en": "Where the determination is, the way can be found."
          },
          "attribution": {
            "fr": "George S. Clason, L'Homme le plus riche de Babylone",
            "en": "George S. Clason, The Richest Man in Babylon"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Consacre une part fixe à rembourser tes dettes et une autre à t'enrichir, sans jamais sacrifier l'une à l'autre.",
            "en": "Devote a fixed share to repaying debt and another to building wealth, never sacrificing one for the other."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La chance suit l'action",
        "en": "Luck Follows Action"
      },
      "caption": {
        "fr": "Et si la bonne fortune n'était que l'opportunité saisie à temps ? 🍀",
        "en": "What if good luck is just opportunity seized in time? 🍀"
      },
      "tags": [
        "chance",
        "opportunite",
        "action",
        "babylone"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "À la rencontre de la déesse de la bonne fortune",
            "en": "Meet the goddess of good luck"
          },
          "body": {
            "fr": "Au Temple du Savoir, les hommes de Babylone débattent : comment attirer la bonne fortune ? La réponse surprend par sa simplicité.",
            "en": "At the Temple of Learning, the men of Babylon debate how to attract good luck. The answer surprises with its simplicity."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La chance déteste l'attente",
            "en": "Luck hates delay"
          },
          "body": {
            "fr": "L'occasion refusée ne revient pas. La bonne fortune se détourne de ceux qui remettent au lendemain ce qu'ils pourraient saisir aujourd'hui.",
            "en": "An opportunity refused does not return. Good luck turns away from those who put off until tomorrow what they could seize today."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Saisir sur-le-champ",
            "en": "Act at once"
          },
          "body": {
            "fr": "Ceux qui remettent une bonne affaire à demain laissent filer la chance. Les hommes d'action, eux, sont favorisés par la fortune.",
            "en": "Those who put off a good deal until tomorrow let luck slip away. Men of action, by contrast, are favored by fortune."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La leçon",
            "en": "The lesson"
          },
          "body": {
            "fr": "Les hommes d'action sont favorisés par la déesse de la bonne fortune.",
            "en": "Men of action are favored by the goddess of good luck."
          },
          "attribution": {
            "fr": "George S. Clason, L'Homme le plus riche de Babylone",
            "en": "George S. Clason, The Richest Man in Babylon"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "N'attends pas d'être chanceux : prépare-toi et agis vite quand une bonne opportunité se présente. C'est ainsi qu'on l'attire.",
            "en": "Don't wait to be lucky: prepare, and act fast when a good opportunity appears. That's how you attract it."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Protéger son capital des pertes",
        "en": "Guard Your Capital from Loss"
      },
      "caption": {
        "fr": "Le prêteur d'or Mathon : mieux vaut un peu de prudence qu'un grand regret ⚖️",
        "en": "Mathon the gold lender: better a little caution than a great regret ⚖️"
      },
      "tags": [
        "prudence",
        "mathon",
        "risque",
        "capital"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le prêteur d'or de Babylone",
            "en": "The gold lender of Babylon"
          },
          "body": {
            "fr": "Mathon, qui a prêté à toute la ville, explique comment distinguer un placement sûr d'un piège séduisant.",
            "en": "Mathon, who has lent to the whole city, explains how to tell a safe investment from a tempting trap."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Protéger le principal d'abord",
            "en": "Protect the principal first"
          },
          "body": {
            "fr": "La première règle de l'investissement est la sécurité du capital. Un gain élevé ne vaut rien si tu risques de tout perdre.",
            "en": "The first rule of investing is the safety of the principal. A high return means nothing if you risk losing it all."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Demander conseil aux bonnes personnes",
            "en": "Seek the right counsel"
          },
          "body": {
            "fr": "Consulte ceux qui connaissent réellement le domaine où tu places ton or, pas ceux qui n'y comprennent rien.",
            "en": "Consult those who truly know the field where you place your gold, not those who know nothing of it."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La sagesse de Mathon",
            "en": "Mathon's wisdom"
          },
          "body": {
            "fr": "Mieux vaut un peu de prudence qu'un grand regret.",
            "en": "Better a little caution than a great regret."
          },
          "attribution": {
            "fr": "George S. Clason, L'Homme le plus riche de Babylone",
            "en": "George S. Clason, The Richest Man in Babylon"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de viser le rendement, assure-toi de récupérer ta mise. Investis seulement là où le capital est protégé et bien conseillé.",
            "en": "Before chasing returns, make sure you can get your money back. Invest only where the capital is protected and well advised."
          }
        }
      ]
    }
  ],
  "millionaire-next-door": [
    {
      "concept": {
        "fr": "Le vrai profil du millionnaire",
        "en": "The real millionaire profile"
      },
      "caption": {
        "fr": "Le millionnaire d'a cote ne ressemble pas a ce que tu crois 👀",
        "en": "The millionaire next door looks nothing like you imagine 👀"
      },
      "tags": [
        "millionairenextdoor",
        "richehabitudes",
        "financespersonnelles",
        "patrimoine"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le millionnaire d'a cote",
            "en": "The millionaire next door"
          },
          "body": {
            "fr": "La plupart des vrais millionnaires americains ne roulent pas en voiture de luxe : ils vivent modestement dans ton quartier.",
            "en": "Most real American millionaires don't drive luxury cars: they live modestly right in your neighborhood."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ils vivent en dessous de leurs moyens",
            "en": "They live below their means"
          },
          "body": {
            "fr": "Stanley et Danko decrivent des gens ordinaires : maison modeste, costume bon marche, montre courante. La richesse est invisible.",
            "en": "Stanley and Danko describe ordinary people: modest homes, cheap suits, common watches. Their wealth is invisible."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ils privilegient l'independance",
            "en": "They value independence"
          },
          "body": {
            "fr": "Pour eux, l'independance financiere compte plus que d'afficher un statut social eleve. Ils ne cherchent pas a impressionner.",
            "en": "For them, financial independence matters more than displaying high social status. They don't seek to impress."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ils gerent temps, energie et argent",
            "en": "They manage time, energy and money"
          },
          "body": {
            "fr": "Les auteurs montrent qu'ils allouent leur temps et leur energie de facon efficace, orientee vers la construction du patrimoine.",
            "en": "The authors show they allocate their time and energy efficiently, in ways aimed at building wealth."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "La richesse se cache",
            "en": "Wealth hides"
          },
          "body": {
            "fr": "Cesse de juger la fortune aux signes exterieurs. Le voisin discret peut valoir bien plus que le proprietaire de la belle voiture.",
            "en": "Stop judging wealth by outward signs. The quiet neighbor may be worth far more than the owner of the flashy car."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Richesse n'est pas revenu",
        "en": "Wealth is not income"
      },
      "caption": {
        "fr": "Gros salaire ne veut pas dire riche. Big hat, no cattle 🤠",
        "en": "A big salary doesn't mean rich. Big hat, no cattle 🤠"
      },
      "tags": [
        "richesse",
        "revenu",
        "bighatnocattle",
        "epargne"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Big Hat, No Cattle",
            "en": "Big Hat, No Cattle"
          },
          "body": {
            "fr": "Cette expression texane resume le livre : beaucoup ont l'apparence de la richesse sans en avoir la substance.",
            "en": "This Texan phrase sums up the book: many have the look of wealth without any of the substance."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Revenu vs patrimoine",
            "en": "Income vs net worth"
          },
          "body": {
            "fr": "Depenser tout ce que tu gagnes, meme un gros salaire, ne t'enrichit pas. Cela te fait juste vivre grand train.",
            "en": "Spending everything you earn, even a high salary, doesn't make you wealthy. It just makes you live high."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le piege du statut",
            "en": "The status trap"
          },
          "body": {
            "fr": "Les hauts revenus qui affichent leur reussite (belle maison, voitures) accumulent souvent tres peu de patrimoine reel.",
            "en": "High earners who display success (big house, cars) often accumulate very little actual wealth."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La definition de la richesse",
            "en": "What wealth really is"
          },
          "body": {
            "fr": "La richesse, c'est ce que tu accumules, pas ce que tu depenses.",
            "en": "Wealth is what you accumulate, not what you spend."
          },
          "attribution": {
            "fr": "Thomas J. Stanley",
            "en": "Thomas J. Stanley"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Mesure ce qui compte",
            "en": "Measure what matters"
          },
          "body": {
            "fr": "Suis ton patrimoine net, pas ton salaire. C'est l'ecart entre ce que tu gagnes et ce que tu gardes qui fait la difference.",
            "en": "Track your net worth, not your salary. It's the gap between what you earn and what you keep that matters."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La formule de richesse",
        "en": "The wealth formula"
      },
      "caption": {
        "fr": "Es-tu un PAW ou un UAW ? Voici le calcul 🧮",
        "en": "Are you a PAW or a UAW? Here's the math 🧮"
      },
      "tags": [
        "formulerichesse",
        "PAW",
        "UAW",
        "patrimoinenet"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "PAW ou UAW ?",
            "en": "PAW or UAW?"
          },
          "body": {
            "fr": "Stanley et Danko proposent une formule simple pour savoir si tu accumules bien ou mal le patrimoine.",
            "en": "Stanley and Danko offer a simple formula to tell whether you're accumulating wealth well or poorly."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le patrimoine attendu",
            "en": "Expected net worth"
          },
          "body": {
            "fr": "Multiplie ton age par ton revenu annuel avant impots, puis divise par dix. Voila le patrimoine que tu devrais deja avoir.",
            "en": "Multiply your age by your annual pretax income, then divide by ten. That's the net worth you should already have."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "PAW : bon accumulateur",
            "en": "PAW: strong accumulator"
          },
          "body": {
            "fr": "Un Prodigious Accumulator of Wealth possede au moins le double du patrimoine attendu. C'est l'objectif a viser.",
            "en": "A Prodigious Accumulator of Wealth holds at least twice the expected net worth. That's the target."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "UAW : mauvais accumulateur",
            "en": "UAW: under accumulator"
          },
          "body": {
            "fr": "Un Under Accumulator of Wealth possede la moitie ou moins du patrimoine attendu, malgre parfois un gros revenu.",
            "en": "An Under Accumulator of Wealth holds half or less of the expected net worth, sometimes despite a big income."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Fais le calcul",
            "en": "Run the numbers"
          },
          "body": {
            "fr": "Applique la formule ce soir. Si tu es UAW, l'ecart n'est pas une fatalite : c'est le point de depart de ton plan.",
            "en": "Apply the formula tonight. If you're a UAW, the gap isn't fixed: it's the starting point of your plan."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Bonne defense : la frugalite",
        "en": "Good defense: frugality"
      },
      "caption": {
        "fr": "Les millionnaires gagnent au jeu de la defense, pas de l'attaque 🛡️",
        "en": "Millionaires win on defense, not offense 🛡️"
      },
      "tags": [
        "frugalite",
        "budget",
        "defense",
        "epargne"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Jouer une bonne defense",
            "en": "Playing good defense"
          },
          "body": {
            "fr": "Pour les auteurs, batir un patrimoine tient moins a l'attaque (gagner) qu'a la defense (controler ses depenses).",
            "en": "For the authors, building wealth is less about offense (earning) than defense (controlling spending)."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ils ont un budget",
            "en": "They budget"
          },
          "body": {
            "fr": "La plupart des millionnaires interroges savent combien leur famille depense chaque annee en nourriture, vetements et logement.",
            "en": "Most millionaires surveyed know exactly how much their family spends each year on food, clothing and housing."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Voitures d'occasion",
            "en": "Used cars"
          },
          "body": {
            "fr": "L'etude montre qu'une large part achete des voitures ordinaires, souvent d'occasion, et les garde longtemps.",
            "en": "The study shows a large share buy ordinary cars, often used, and keep them for years."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La regle de base",
            "en": "The core rule"
          },
          "body": {
            "fr": "Les auteurs le repetent tout au long du livre : quel que soit ton revenu, vis toujours en dessous de tes moyens.",
            "en": "The authors repeat it throughout the book: whatever your income, always live below your means."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Controle tes sorties",
            "en": "Control your outflows"
          },
          "body": {
            "fr": "Un bon revenu se dilapide vite sans defense. Etablis un budget et transforme le surplus en investissements.",
            "en": "A good income drains fast without defense. Set a budget and turn the surplus into investments."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le soin economique parental",
        "en": "Economic Outpatient Care"
      },
      "caption": {
        "fr": "Aider financierement tes enfants adultes peut les affaiblir 😬",
        "en": "Financially helping adult kids can actually weaken them 😬"
      },
      "tags": [
        "EOC",
        "heritage",
        "parents",
        "autonomie"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Economic Outpatient Care",
            "en": "Economic Outpatient Care"
          },
          "body": {
            "fr": "Stanley et Danko designent ainsi les cadeaux financiers reguliers des parents aises a leurs enfants adultes.",
            "en": "Stanley and Danko use this term for the ongoing financial gifts wealthy parents give their adult children."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'effet inverse",
            "en": "The reverse effect"
          },
          "body": {
            "fr": "Plus les enfants recoivent d'argent de leurs parents, moins ils tendent a accumuler leur propre patrimoine.",
            "en": "The more cash children receive from their parents, the less they tend to accumulate wealth of their own."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un mode de vie subventionne",
            "en": "A subsidized lifestyle"
          },
          "body": {
            "fr": "Les subsides financent souvent un train de vie superieur au revenu reel, creant une dependance durable.",
            "en": "The subsidies often fund a lifestyle beyond the real income, creating lasting dependence."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Affaiblir le fort",
            "en": "Weakening the strong"
          },
          "body": {
            "fr": "Les auteurs observent que ces aides ont tendance a affaiblir les forts et a fragiliser encore plus les faibles.",
            "en": "The authors observe that such help tends to weaken the strong and further weaken the weak."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Enseigne l'autonomie",
            "en": "Teach self-sufficiency"
          },
          "body": {
            "fr": "Les vrais millionnaires elevent des enfants economiquement autonomes. Transmets des competences plutot que des cheques.",
            "en": "Real millionaires raise economically self-sufficient children. Pass on skills rather than checks."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Choisir la bonne occupation",
        "en": "Choosing the right occupation"
      },
      "caption": {
        "fr": "Les millionnaires ne font pas les metiers glamour que tu imagines 💼",
        "en": "Millionaires don't work the glamorous jobs you'd imagine 💼"
      },
      "tags": [
        "entrepreneuriat",
        "independants",
        "occupation",
        "business"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le bon metier",
            "en": "The right occupation"
          },
          "body": {
            "fr": "Une des sept caracteristiques du livre : les millionnaires ont choisi la bonne occupation, souvent inattendue.",
            "en": "One of the book's seven traits: millionaires chose the right occupation, often an unexpected one."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Beaucoup sont a leur compte",
            "en": "Many are self-employed"
          },
          "body": {
            "fr": "Une grande part des millionnaires sont des entrepreneurs et travailleurs independants, pas des cadres salaries.",
            "en": "A large share of millionaires are entrepreneurs and self-employed business owners, not salaried executives."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des business ordinaires",
            "en": "Ordinary businesses"
          },
          "body": {
            "fr": "Leurs entreprises sont souvent banales : soudure, betonnage, ferraille, nettoyage. Rien de glamour, mais rentable.",
            "en": "Their businesses are often dull: welding, paving, scrap metal, cleaning. Nothing glamorous, but profitable."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Cibler les opportunites",
            "en": "Targeting opportunities"
          },
          "body": {
            "fr": "Les auteurs soulignent leur talent a reperer les besoins du marche que d'autres jugent trop peu prestigieux.",
            "en": "The authors highlight their skill at spotting market needs others dismiss as too unglamorous."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "La discretion paie",
            "en": "Dull can pay"
          },
          "body": {
            "fr": "Ne neglige pas les secteurs peu sexy. La rentabilite et la maitrise comptent plus que le prestige d'un metier.",
            "en": "Don't overlook unglamorous sectors. Profitability and mastery matter more than a job's prestige."
          }
        }
      ]
    }
  ],
  "high-output-management": [
    {
      "concept": {
        "fr": "L'équation de l'output du manager",
        "en": "A manager's output equation"
      },
      "caption": {
        "fr": "Ton vrai résultat, ce n'est pas ce que TU produis, c'est ce que ton équipe produit. 📈",
        "en": "Your real output isn't what YOU produce — it's what your team produces. 📈"
      },
      "tags": [
        "management",
        "leadership",
        "productivity",
        "teams"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Ton output n'est pas le tien",
            "en": "Your output isn't your own"
          },
          "body": {
            "fr": "Grove : l'output d'un manager = l'output de son organisation + celui des organisations voisines qu'il influence.",
            "en": "Grove: a manager's output = the output of their organization + the output of the neighboring organizations they influence."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Redéfinir le résultat",
            "en": "Redefine the result"
          },
          "body": {
            "fr": "On ne juge pas un manager sur son activité personnelle, mais sur les résultats produits par les gens autour de lui.",
            "en": "A manager isn't judged on personal activity, but on the results produced by the people around them."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'influence compte autant",
            "en": "Influence counts too"
          },
          "body": {
            "fr": "Les organisations voisines que vous orientez sans autorité directe font partie de votre output. Le levier ne s'arrête pas à votre équipe.",
            "en": "The neighboring organizations you steer without direct authority are part of your output. Leverage doesn't stop at your own team."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Occupé ≠ productif",
            "en": "Busy ≠ productive"
          },
          "body": {
            "fr": "Passer sa journée en réunions et e-mails n'est pas produire. Seul compte ce que votre organisation livre au bout.",
            "en": "A full day of meetings and email is not output. Only what your organization delivers actually counts."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Mesurez-vous aux résultats de votre équipe, pas à votre effort personnel. C'est ça, l'output d'un manager.",
            "en": "Measure yourself by your team's results, not your personal effort. That's what a manager's output is."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'effet de levier managérial",
        "en": "Managerial leverage"
      },
      "caption": {
        "fr": "Ne fais pas plus d'heures. Fais des activités qui touchent plus de monde. ⚡",
        "en": "Don't work more hours. Do activities that reach more people. ⚡"
      },
      "tags": [
        "leverage",
        "management",
        "efficiency",
        "priorities"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Du levier, pas plus d'heures",
            "en": "Leverage, not more hours"
          },
          "body": {
            "fr": "L'output managérial = la somme de vos activités multipliées par leur levier. Choisissez celles qui portent le plus loin.",
            "en": "Managerial output = the sum of your activities multiplied by their leverage. Choose the ones that carry furthest."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les activités à fort levier",
            "en": "High-leverage activities"
          },
          "body": {
            "fr": "Fort levier = toucher beaucoup de gens, ou avoir une influence large et durable avec peu d'effort (décider tôt, former, fixer un cap).",
            "en": "High leverage = affecting many people, or a broad, lasting influence from little effort (deciding early, training, setting direction)."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le levier peut être négatif",
            "en": "Leverage can go negative"
          },
          "body": {
            "fr": "Micromanager, retarder une décision, ou démotiver par son humeur : ce sont des activités à levier négatif qui détruisent l'output.",
            "en": "Micromanaging, delaying a decision, or demoralizing people with your mood are negative-leverage activities that destroy output."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La formation, levier suprême",
            "en": "Training, the top lever"
          },
          "body": {
            "fr": "« Former est, tout simplement, l'une des activités à plus fort levier qu'un manager puisse mener. »",
            "en": "\"Training is, quite simply, one of the highest-leverage activities a manager can perform.\""
          },
          "attribution": {
            "fr": "Andrew S. Grove",
            "en": "Andrew S. Grove"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant d'agir, demandez : cette activité touche-t-elle le plus de monde possible, pour le plus longtemps ?",
            "en": "Before acting, ask: does this activity reach the most people possible, for the longest time?"
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le one-on-one",
        "en": "The one-on-one"
      },
      "caption": {
        "fr": "90 minutes par mois qui améliorent des semaines de travail. Le 1:1 selon Grove. 🗣️",
        "en": "90 minutes a month that improve weeks of work. The 1:1, Grove-style. 🗣️"
      },
      "tags": [
        "one-on-one",
        "management",
        "coaching",
        "communication"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le 1:1, la réunion la plus rentable",
            "en": "The 1:1, your highest-return meeting"
          },
          "body": {
            "fr": "Pour Grove, l'entretien individuel manager-subordonné est l'un des outils à plus fort levier du manager.",
            "en": "For Grove, the manager-subordinate one-on-one is one of a manager's highest-leverage tools."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "C'est la réunion du subordonné",
            "en": "It's the subordinate's meeting"
          },
          "body": {
            "fr": "Le subordonné prépare et mène l'ordre du jour ; le manager écoute, questionne et enseigne. Le but : partager l'info et se former mutuellement.",
            "en": "The subordinate prepares and drives the agenda; the manager listens, probes and teaches. The goal: share information and coach each other."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Assez long pour aller au fond",
            "en": "Long enough to go deep"
          },
          "body": {
            "fr": "Grove recommande au moins une heure : plus court, et le subordonné se limite aux sujets faciles et rapides.",
            "en": "Grove recommends at least an hour: any shorter and the subordinate sticks to quick, easy topics."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La fréquence s'adapte",
            "en": "Frequency adapts"
          },
          "body": {
            "fr": "Plus le subordonné est expérimenté sur ses tâches, plus les 1:1 peuvent s'espacer. Nouveau ou en difficulté ? Rapprochez-les.",
            "en": "The more experienced the subordinate is at the task, the more spaced out the 1:1s can be. New or struggling? Make them more frequent."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Quelques heures de 1:1 par mois donnent au manager un levier énorme sur des semaines de travail de l'équipe.",
            "en": "A few hours of 1:1s a month give the manager enormous leverage over weeks of the team's work."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La maturité liée à la tâche",
        "en": "Task-relevant maturity"
      },
      "caption": {
        "fr": "Il n'existe pas de « meilleur » style de management. Ça dépend de la tâche. 🎯",
        "en": "There is no single \"best\" management style. It depends on the task. 🎯"
      },
      "tags": [
        "leadership",
        "delegation",
        "management",
        "adaptability"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Pas de style unique",
            "en": "No single best style"
          },
          "body": {
            "fr": "Le bon style de management dépend de la « task-relevant maturity » : la maturité du subordonné SUR CETTE tâche précise.",
            "en": "The right management style depends on task-relevant maturity: the subordinate's maturity ON THIS specific task."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ce n'est pas la personne, c'est la tâche",
            "en": "Not the person, the task"
          },
          "body": {
            "fr": "La TRM = compétence + expérience pour une tâche donnée. Quelqu'un peut être très mûr sur une mission et débutant sur une autre.",
            "en": "TRM = skill + experience for a given task. Someone can be highly mature on one job and a beginner on another."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le style suit la maturité",
            "en": "Style follows maturity"
          },
          "body": {
            "fr": "TRM basse → structuré, orienté tâche. TRM moyenne → soutien, orienté relation. TRM haute → déléguer, implication minimale.",
            "en": "Low TRM → structured, task-oriented. Medium TRM → supportive, relationship-oriented. High TRM → delegate, minimal involvement."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Déléguer trop tôt = abdiquer",
            "en": "Delegating too early = abdicating"
          },
          "body": {
            "fr": "Déléguer à quelqu'un dont la TRM est faible n'est pas de la confiance, c'est de l'abandon de poste.",
            "en": "Delegating to someone with low TRM isn't trust — it's abdication."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avant de choisir votre style, évaluez la maturité de la personne SUR la tâche du moment — pas en général.",
            "en": "Before choosing your style, gauge the person's maturity ON the task at hand — not in general."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les deux types de réunions",
        "en": "The two kinds of meetings"
      },
      "caption": {
        "fr": "La réunion n'est pas l'ennemi. La mauvaise réunion, si. 🗓️",
        "en": "Meetings aren't the enemy. Bad meetings are. 🗓️"
      },
      "tags": [
        "meetings",
        "management",
        "process",
        "decisions"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Deux réunions, deux usages",
            "en": "Two meetings, two uses"
          },
          "body": {
            "fr": "Grove distingue les réunions orientées processus (régulières) des réunions orientées mission (ponctuelles, pour décider).",
            "en": "Grove distinguishes process-oriented meetings (regular) from mission-oriented meetings (one-off, to decide)."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Orientées processus",
            "en": "Process-oriented"
          },
          "body": {
            "fr": "Régulières et planifiées, elles font circuler le savoir : 1:1, réunions d'équipe, revues d'opérations. On sait à l'avance de quoi on parle.",
            "en": "Regular and scheduled, they circulate knowledge: one-on-ones, staff meetings, operation reviews. You know in advance what's covered."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Orientées mission",
            "en": "Mission-oriented"
          },
          "body": {
            "fr": "Ad hoc, elles visent à produire UNE décision précise. Elles doivent rester rares : trop nombreuses, c'est le signe d'un désordre.",
            "en": "Ad hoc, they aim to produce ONE specific decision. They should stay rare: too many is a sign of disorder."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La réunion, un médium de travail",
            "en": "The meeting as a medium"
          },
          "body": {
            "fr": "« Une réunion n'est rien de moins que le médium par lequel le travail managérial s'accomplit. »",
            "en": "\"A meeting is nothing less than the medium through which managerial work is performed.\""
          },
          "attribution": {
            "fr": "Andrew S. Grove",
            "en": "Andrew S. Grove"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ne combattez pas les réunions : rendez-les efficaces. Misez sur le régulier bien mené pour réduire l'urgent.",
            "en": "Don't fight meetings: make them efficient. Lean on well-run regular ones to cut down the emergencies."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le management par objectifs",
        "en": "Management by objectives"
      },
      "caption": {
        "fr": "Deux questions suffisent pour ne jamais dériver. L'ancêtre des OKR. ✅",
        "en": "Two questions keep you from drifting. The ancestor of OKRs. ✅"
      },
      "tags": [
        "objectives",
        "OKR",
        "goals",
        "management"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Deux questions pour ne pas dériver",
            "en": "Two questions to stay on course"
          },
          "body": {
            "fr": "Le système MBO de Grove tient en deux questions : où veux-je aller, et comment saurai-je que j'y arrive ?",
            "en": "Grove's MBO system fits into two questions: where do I want to go, and how will I know I'm getting there?"
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'objectif : la direction",
            "en": "The objective: the direction"
          },
          "body": {
            "fr": "« Où veux-je aller ? » donne l'objectif. Il doit être clair et peu nombreux : trop d'objectifs, et l'on ne se concentre sur aucun.",
            "en": "\"Where do I want to go?\" gives the objective. It must be clear and few: too many objectives and you focus on none."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les jalons : le contrôle",
            "en": "The milestones: the check"
          },
          "body": {
            "fr": "« Comment saurai-je que j'y arrive ? » donne des jalons mesurables pour vérifier l'avancement en cours de route, pas seulement à la fin.",
            "en": "\"How will I know I'm getting there?\" gives measurable milestones to check progress along the way, not just at the end."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Guider sans figer",
            "en": "Guide without freezing"
          },
          "body": {
            "fr": "Le MBO est une boussole pour ajuster en chemin, pas un carcan qui fige tout à l'avance.",
            "en": "MBO is a compass to adjust by along the way, not a straitjacket that freezes everything in advance."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Un objectif clair + quelques repères mesurables : c'est le cadre qui a inspiré les OKR modernes.",
            "en": "A clear objective + a few measurable checkpoints: this is the framework that inspired modern OKRs."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le principe de production",
        "en": "The production principle"
      },
      "caption": {
        "fr": "Grove voit le manager comme une usine à petit-déjeuner. Voici ce que ça change. 🍳",
        "en": "Grove sees the manager as a breakfast factory. Here's what that changes. 🍳"
      },
      "tags": [
        "operations",
        "production",
        "bottleneck",
        "management"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Gérez autour de l'étape limitante",
            "en": "Build around the limiting step"
          },
          "body": {
            "fr": "Grove modélise le travail comme une usine : tout processus a une étape limitante, la plus longue ou la plus coûteuse.",
            "en": "Grove models work as a factory: every process has a limiting step, the longest or most expensive one."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'usine à petit-déjeuner",
            "en": "The breakfast factory"
          },
          "body": {
            "fr": "Servir un petit-déjeuner (œuf, toast, café) illustre tout : l'œuf à la coque est l'étape limitante autour de laquelle on cadence le reste.",
            "en": "Serving breakfast (egg, toast, coffee) illustrates it all: the boiled egg is the limiting step you time everything else around."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Détecter tôt, corriger moins cher",
            "en": "Catch early, fix cheaper"
          },
          "body": {
            "fr": "Un défaut coûte de moins en moins cher à corriger quand on le détecte tôt : rejetez-le au stade matière première plutôt qu'au stade produit fini.",
            "en": "A defect is far cheaper to fix when caught early: reject it at the raw-material stage rather than at the finished-product stage."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Indicateurs et flux",
            "en": "Indicators and flow"
          },
          "body": {
            "fr": "Pilotez le flux avec des indicateurs qui anticipent : projections, alertes qualité, en-cours — pas seulement le résultat final.",
            "en": "Steer the flow with forward-looking indicators: projections, quality alerts, work-in-progress — not just the final result."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Identifiez le goulot, cadencez tout le travail autour, et inspectez au stade le moins coûteux.",
            "en": "Find the bottleneck, pace all the work around it, and inspect at the cheapest possible stage."
          }
        }
      ]
    }
  ],
  "radical-candor": [
    {
      "concept": {
        "fr": "La Franchise Radicale",
        "en": "Radical Candor"
      },
      "caption": {
        "fr": "Se soucier sincèrement ET dire les choses en face : le cœur du management selon Kim Scott. 🎯",
        "en": "Care personally AND say it to their face: the heart of management, per Kim Scott. 🎯"
      },
      "tags": [
        "management",
        "feedback",
        "leadership",
        "communication"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La Franchise Radicale",
            "en": "Radical Candor"
          },
          "body": {
            "fr": "Le meilleur management naît de deux forces réunies : se soucier personnellement des gens et les challenger directement.",
            "en": "Great management comes from two forces at once: caring personally about people and challenging them directly."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Axe 1 : Se soucier personnellement",
            "en": "Axis 1: Care Personally"
          },
          "body": {
            "fr": "Traiter vos collaborateurs comme des êtres humains à part entière, pas comme de simples rouages. C'est la dimension relationnelle.",
            "en": "Treat your people as whole human beings, not just cogs. This is the relationship dimension."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Axe 2 : Challenger directement",
            "en": "Axis 2: Challenge Directly"
          },
          "body": {
            "fr": "Dire ce qui ne va pas, clairement et sans détour. Éviter le conflit n'est pas de la bienveillance, c'est se dérober à son rôle.",
            "en": "Say what's wrong, clearly and without hedging. Avoiding conflict isn't kindness, it's ducking your job."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les deux ensemble",
            "en": "Both at once"
          },
          "body": {
            "fr": "La franchise radicale, c'est le quadrant où l'on se soucie ET où l'on challenge. On peut être exigeant précisément parce qu'on tient à la personne.",
            "en": "Radical Candor is the quadrant where you care AND challenge. You can be demanding precisely because you give a damn."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "La définition de Kim Scott",
            "en": "Kim Scott's definition"
          },
          "body": {
            "fr": "« La franchise radicale, c'est ce qui se produit quand on réunit se soucier personnellement et challenger directement. »",
            "en": "\"Radical Candor is what happens when you put 'Care Personally' and 'Challenge Directly' together.\""
          },
          "attribution": {
            "fr": "Kim Scott, Radical Candor",
            "en": "Kim Scott, Radical Candor"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Montrez que vous tenez à la personne, puis dites-lui la vérité. L'un sans l'autre échoue.",
            "en": "Show that you care, then tell the truth. Either one without the other fails."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "L'Empathie Dévastatrice",
        "en": "Ruinous Empathy"
      },
      "caption": {
        "fr": "Vouloir être gentil et taire la vérité : le piège de management le plus courant. 😬",
        "en": "Wanting to be nice and swallowing the truth: the most common management trap. 😬"
      },
      "tags": [
        "management",
        "feedback",
        "leadership",
        "honesty"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "L'Empathie Dévastatrice",
            "en": "Ruinous Empathy"
          },
          "body": {
            "fr": "Se soucier des gens sans jamais les challenger : c'est là que la plupart des managers échouent.",
            "en": "Caring about people but never challenging them: where most managers go wrong."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le quadrant de la gentillesse mal placée",
            "en": "The misplaced-nice quadrant"
          },
          "body": {
            "fr": "Vous vous souciez de la personne, mais par peur de la blesser vous ne dites pas ce qui ne va pas.",
            "en": "You care about the person, but out of fear of hurting them you don't say what's wrong."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pourquoi c'est dévastateur",
            "en": "Why it's ruinous"
          },
          "body": {
            "fr": "Le collaborateur ne s'améliore pas, le problème s'aggrave, et le silence finit par coûter bien plus cher qu'une vérité dite tôt.",
            "en": "The person never improves, the problem festers, and silence ends up costing far more than an early honest word."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un exemple concret",
            "en": "A concrete example"
          },
          "body": {
            "fr": "Ne pas dire à quelqu'un que son travail n'est pas au niveau, jusqu'au jour où l'on doit le licencier. La « gentillesse » devient cruauté.",
            "en": "Never telling someone their work is subpar, until the day you have to fire them. The 'niceness' becomes cruelty."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Se taire pour éviter un malaise à court terme n'est pas bienveillant. Le vrai respect, c'est d'offrir une vérité utile.",
            "en": "Staying silent to dodge short-term discomfort isn't kind. Real respect is offering the truth someone can use."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Rock stars vs Superstars",
        "en": "Rock Stars vs Superstars"
      },
      "caption": {
        "fr": "Vos meilleurs éléments ne veulent pas tous la même chose. Arrêtez de tous les pousser vers le haut. 🌟",
        "en": "Your best people don't all want the same thing. Stop pushing them all upward. 🌟"
      },
      "tags": [
        "management",
        "talent",
        "teams",
        "growth"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Rock stars vs Superstars",
            "en": "Rock Stars vs Superstars"
          },
          "body": {
            "fr": "Deux types d'excellents collaborateurs, deux trajectoires différentes : ne les managez pas de la même façon.",
            "en": "Two kinds of excellent people, two different trajectories: don't manage them the same way."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les Superstars",
            "en": "Superstars"
          },
          "body": {
            "fr": "Sur une pente de croissance raide : ils veulent de nouveaux défis, plus de responsabilités, évoluer vite. Donnez-leur de l'espace.",
            "en": "On a steep growth trajectory: they want new challenges, more responsibility, fast advancement. Give them room."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les Rock stars",
            "en": "Rock Stars"
          },
          "body": {
            "fr": "Sur une pente douce et stable : excellents dans leur rôle, ils sont le roc de l'équipe. Ne les promouvez pas de force hors de ce qu'ils aiment.",
            "en": "On a gradual, stable trajectory: great in their role, they're the rock of the team. Don't force-promote them out of what they love."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ce n'est pas une hiérarchie",
            "en": "It's not a hierarchy"
          },
          "body": {
            "fr": "« Rock star » n'est pas inférieur à « superstar ». C'est une question de moment de vie et d'aspiration, pas de valeur ou de performance.",
            "en": "'Rock star' isn't lesser than 'superstar'. It's about life stage and ambition, not worth or performance."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Demandez à chacun quelle trajectoire il veut, à ce moment de sa vie. Managez la personne réelle, pas un idéal uniforme.",
            "en": "Ask each person what trajectory they want, right now in their life. Manage the real person, not a one-size ideal."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Sollicitez la critique d'abord",
        "en": "Get Feedback Before Giving It"
      },
      "caption": {
        "fr": "Avant de critiquer votre équipe, demandez-lui de vous critiquer. Le respect commence par soi. 🔄",
        "en": "Before you criticize your team, ask them to criticize you. Respect starts with yourself. 🔄"
      },
      "tags": [
        "feedback",
        "management",
        "trust",
        "leadership"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Sollicitez la critique d'abord",
            "en": "Get Feedback Before Giving It"
          },
          "body": {
            "fr": "Avant de distribuer du feedback, ouvrez la porte : invitez vos équipes à vous challenger en premier.",
            "en": "Before handing out feedback, open the door: invite your team to challenge you first."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Montrez l'exemple",
            "en": "Go first"
          },
          "body": {
            "fr": "Demander « Qu'est-ce que je pourrais mieux faire ? » prouve que la critique n'est pas une punition, mais un outil pour tous.",
            "en": "Asking 'What could I do better?' proves that criticism isn't punishment, it's a tool everyone uses."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Posez une vraie question, puis taisez-vous",
            "en": "Ask, then stay quiet"
          },
          "body": {
            "fr": "Posez une question directe, comptez jusqu'à six en silence, et assumez l'inconfort. Le silence force une réponse honnête.",
            "en": "Ask a sharp question, count to six in silence, and embrace the discomfort. The silence forces an honest answer."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Récompensez la franchise",
            "en": "Reward the candor"
          },
          "body": {
            "fr": "Quand quelqu'un vous critique, changez quelque chose de visible. Sinon on ne vous dira plus jamais rien.",
            "en": "When someone criticizes you, change something visible. Otherwise they'll never speak up again."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Vous ne pouvez pas exiger la franchise sans l'accueillir vous-même en premier. Recevez avant de donner.",
            "en": "You can't demand candor without first welcoming it toward yourself. Receive before you give."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Éloge et critique : le bon dosage",
        "en": "Praise and Criticism Done Right"
      },
      "caption": {
        "fr": "Un bon feedback est humble, utile et immédiat, et se donne en personne. Voici la règle. 🗣️",
        "en": "Good feedback is humble, helpful, immediate and in person. Here's the rule. 🗣️"
      },
      "tags": [
        "feedback",
        "praise",
        "criticism",
        "management"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Éloge et critique : le bon dosage",
            "en": "Praise and Criticism Done Right"
          },
          "body": {
            "fr": "Le « guidance » (le feedback) est le cœur du métier de manager. Encore faut-il savoir le donner.",
            "en": "Guidance (feedback) is the core of a manager's job. But you have to know how to deliver it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Soyez précis et sincère",
            "en": "Be specific and sincere"
          },
          "body": {
            "fr": "Un « bon boulot » vague ne sert à rien. Dites exactement quoi et pourquoi, pour l'éloge comme pour la critique.",
            "en": "A vague 'good job' helps no one. Say exactly what and why, for both praise and criticism."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "En public / en privé",
            "en": "In public / in private"
          },
          "body": {
            "fr": "Félicitez en public, critiquez en privé. La reconnaissance grandit à la lumière, la correction respecte l'intimité.",
            "en": "Praise in public, criticize in private. Recognition grows in the light; correction respects privacy."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ne personnalisez jamais",
            "en": "Don't personalize"
          },
          "body": {
            "fr": "Portez la critique sur le travail et le comportement, jamais sur les traits de la personne. « Ce rapport est confus », pas « tu es brouillon ».",
            "en": "Aim criticism at the work and behavior, never at the person's traits. 'This report is confusing', not 'you're sloppy'."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Un feedback humble, utile, immédiat, en personne, et qui ne juge pas la personne. Vite dit, vite corrigé.",
            "en": "Feedback that's humble, helpful, immediate, in person, and not about the person. Said fast, fixed fast."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La roue du Get Stuff Done",
        "en": "The Get Stuff Done Wheel"
      },
      "caption": {
        "fr": "Les résultats ne se décrètent pas : ils suivent un cycle collaboratif en plusieurs temps. ⚙️",
        "en": "Results aren't decreed, they follow a collaborative cycle with several steps. ⚙️"
      },
      "tags": [
        "execution",
        "teams",
        "management",
        "results"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La roue du « Get Stuff Done »",
            "en": "The Get Stuff Done Wheel"
          },
          "body": {
            "fr": "Pour obtenir des résultats collectifs sans tomber dans l'autoritarisme, Kim Scott décrit un cycle à répéter.",
            "en": "To get collective results without turning autocratic, Kim Scott describes a cycle to repeat."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Écouter et clarifier",
            "en": "Listen and clarify"
          },
          "body": {
            "fr": "Créez une culture où les idées s'expriment, puis aidez à les affiner jusqu'à ce qu'elles soient claires et solides.",
            "en": "Build a culture where ideas get voiced, then help sharpen them until they're clear and robust."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Débattre et décider",
            "en": "Debate and decide"
          },
          "body": {
            "fr": "Confrontez les idées par le débat, sans chercher le consensus mou, puis laissez la décision émerger des faits.",
            "en": "Pressure-test ideas through debate, not mushy consensus, then let the decision emerge from the facts."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Convaincre, exécuter, apprendre",
            "en": "Persuade, execute, learn"
          },
          "body": {
            "fr": "Embarquez ceux qui n'étaient pas dans la décision, exécutez efficacement, puis tirez les leçons avant de relancer la roue.",
            "en": "Bring along those who weren't in the room, execute efficiently, then learn the lessons before spinning the wheel again."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Le manager ne fait pas tout lui-même : il fait tourner ce cycle pour que l'équipe produise de meilleurs résultats.",
            "en": "The manager doesn't do it all alone: they keep this cycle turning so the team produces better results."
          }
        }
      ]
    }
  ],
  "five-dysfunctions": [
    {
      "concept": {
        "fr": "La pyramide des 5 dysfonctions",
        "en": "The 5 Dysfunctions Pyramid"
      },
      "caption": {
        "fr": "Les équipes échouent rarement par manque de talent, mais par manque de fonctionnement. 🧩",
        "en": "Teams rarely fail from lack of talent, but from lack of function. 🧩"
      },
      "tags": [
        "teamwork",
        "leadership",
        "Lencioni",
        "management"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Cinq dysfonctions, un même modèle",
            "en": "Five dysfunctions, one model"
          },
          "body": {
            "fr": "Lencioni empile cinq faiblesses en pyramide : chacune s'appuie sur celle du dessous.",
            "en": "Lencioni stacks five weaknesses into a pyramid: each one rests on the one below."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Une chaîne, pas une liste",
            "en": "A chain, not a list"
          },
          "body": {
            "fr": "Les dysfonctions sont liées : en négliger une seule suffit à faire tomber toute l'équipe.",
            "en": "The dysfunctions are interlinked: neglecting even one can bring the whole team down."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les cinq niveaux",
            "en": "The five levels"
          },
          "body": {
            "fr": "Absence de confiance, peur du conflit, manque d'engagement, évitement de la responsabilité, inattention aux résultats.",
            "en": "Absence of trust, fear of conflict, lack of commitment, avoidance of accountability, inattention to results."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "On construit par le bas",
            "en": "You build from the bottom"
          },
          "body": {
            "fr": "Tout part de la confiance : sans elle, les quatre autres niveaux ne tiennent pas.",
            "en": "It all starts with trust: without it, the other four levels can't hold."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Ramer ensemble",
            "en": "Rowing together"
          },
          "body": {
            "fr": "« Si vous pouviez amener tous les membres d'une organisation à ramer dans la même direction, vous pourriez dominer n'importe quel secteur. »",
            "en": "\"If you could get all the people in an organization rowing in the same direction, you could dominate any industry.\""
          },
          "attribution": {
            "fr": "Patrick Lencioni",
            "en": "Patrick Lencioni"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Diagnostiquer le bon étage",
            "en": "Diagnose the right level"
          },
          "body": {
            "fr": "Avant de corriger un symptôme, identifie à quel niveau de la pyramide ton équipe bloque vraiment.",
            "en": "Before fixing a symptom, pinpoint which level of the pyramid your team is truly stuck on."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Dysfonction 1 : l'absence de confiance",
        "en": "Dysfunction 1: Absence of Trust"
      },
      "caption": {
        "fr": "La vraie confiance, c'est oser dire « je me suis trompé ». 🤝",
        "en": "Real trust is daring to say \"I was wrong.\" 🤝"
      },
      "tags": [
        "trust",
        "vulnerability",
        "teamwork",
        "Lencioni"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La confiance par la vulnérabilité",
            "en": "Vulnerability-based trust"
          },
          "body": {
            "fr": "Pour Lencioni, la confiance ne se limite pas à la fiabilité : c'est se montrer vulnérable devant les autres.",
            "en": "For Lencioni, trust isn't just reliability: it's being vulnerable in front of others."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Baisser sa garde",
            "en": "Drop your guard"
          },
          "body": {
            "fr": "Les membres qui se font confiance admettent leurs erreurs, leurs faiblesses et leurs besoins d'aide sans crainte.",
            "en": "Trusting members admit mistakes, weaknesses and needs for help without fear."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le coût de l'invulnérabilité",
            "en": "The cost of invulnerability"
          },
          "body": {
            "fr": "Sans confiance, chacun dépense de l'énergie à se protéger plutôt qu'à travailler ensemble.",
            "en": "Without trust, everyone spends energy protecting themselves instead of working together."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le rôle du leader",
            "en": "The leader's role"
          },
          "body": {
            "fr": "Le dirigeant doit être le premier à montrer sa vulnérabilité, de manière sincère et non calculée.",
            "en": "The leader must be the first to show vulnerability, in a genuine and uncalculated way."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Commence par toi",
            "en": "Start with yourself"
          },
          "body": {
            "fr": "Reconnais une erreur en réunion cette semaine : tu autorises ton équipe à faire pareil.",
            "en": "Admit one mistake in a meeting this week: you give your team permission to do the same."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Dysfonction 2 : la peur du conflit",
        "en": "Dysfunction 2: Fear of Conflict"
      },
      "caption": {
        "fr": "L'harmonie artificielle coûte plus cher qu'un bon désaccord. 🔥",
        "en": "Artificial harmony costs more than a good disagreement. 🔥"
      },
      "tags": [
        "conflict",
        "debate",
        "teamwork",
        "Lencioni"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le conflit productif",
            "en": "Productive conflict"
          },
          "body": {
            "fr": "Les grandes équipes se disputent sur les idées, sans détours ni rancune personnelle.",
            "en": "Great teams argue over ideas, without detours or personal grudges."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Conflit d'idées, pas de personnes",
            "en": "Ideas, not people"
          },
          "body": {
            "fr": "Lencioni distingue le débat passionné sur les concepts des attaques personnelles destructrices.",
            "en": "Lencioni separates passionate debate over concepts from destructive personal attacks."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'harmonie artificielle",
            "en": "Artificial harmony"
          },
          "body": {
            "fr": "Quand une équipe évite le conflit, elle fabrique un faux consensus et enterre les vrais désaccords.",
            "en": "When a team avoids conflict, it manufactures false consensus and buries real disagreements."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le conflit enterré revient",
            "en": "Buried conflict returns"
          },
          "body": {
            "fr": "Les désaccords tus ne disparaissent pas : ils resurgissent en attaques détournées et en rancœurs.",
            "en": "Silenced disagreements don't vanish: they resurface as back-channel attacks and resentment."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Provoque le débat",
            "en": "Mine for conflict"
          },
          "body": {
            "fr": "Nomme les sujets qu'on évite et invite explicitement les avis opposés avant de décider.",
            "en": "Name the topics people avoid and explicitly invite opposing views before deciding."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Dysfonction 3 : le manque d'engagement",
        "en": "Dysfunction 3: Lack of Commitment"
      },
      "caption": {
        "fr": "On ne s'engage pas sur une décision qu'on n'a pas comprise. 🎯",
        "en": "You can't commit to a decision you never understood. 🎯"
      },
      "tags": [
        "commitment",
        "clarity",
        "decisions",
        "Lencioni"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Clarté et adhésion",
            "en": "Clarity and buy-in"
          },
          "body": {
            "fr": "L'engagement naît de la clarté d'une décision et du sentiment d'avoir été entendu.",
            "en": "Commitment comes from clarity of a decision and the feeling of having been heard."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le consensus n'est pas requis",
            "en": "Consensus isn't required"
          },
          "body": {
            "fr": "Pas besoin d'être tous d'accord : il suffit que chacun ait pu exposer son point de vue.",
            "en": "Everyone need not agree: it's enough that each person got to voice their view."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Être en désaccord et s'engager",
            "en": "Disagree and commit"
          },
          "body": {
            "fr": "Une fois la décision prise, même ceux qui étaient contre la soutiennent pleinement.",
            "en": "Once the decision is made, even those who disagreed back it fully."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'ennemi : l'ambiguïté",
            "en": "The enemy: ambiguity"
          },
          "body": {
            "fr": "L'incertitude paralyse plus que l'erreur : mieux vaut une décision claire qu'une hésitation prolongée.",
            "en": "Ambiguity paralyzes more than being wrong: a clear decision beats prolonged hesitation."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Clôture chaque réunion",
            "en": "Close every meeting"
          },
          "body": {
            "fr": "En fin de réunion, récapitule les décisions et vérifie que tout le monde les comprend de la même façon.",
            "en": "At the end of each meeting, recap decisions and confirm everyone understands them the same way."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Dysfonction 4 : l'évitement de la responsabilité",
        "en": "Dysfunction 4: Avoidance of Accountability"
      },
      "caption": {
        "fr": "Se tenir mutuellement responsables, c'est la vraie preuve de respect. 🪞",
        "en": "Holding each other accountable is the real sign of respect. 🪞"
      },
      "tags": [
        "accountability",
        "peers",
        "standards",
        "Lencioni"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La responsabilité entre pairs",
            "en": "Peer-to-peer accountability"
          },
          "body": {
            "fr": "Dans une bonne équipe, ce sont les collègues, pas seulement le chef, qui se recadrent entre eux.",
            "en": "In a strong team, it's peers, not just the boss, who call each other out."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La pression des pairs",
            "en": "Peer pressure"
          },
          "body": {
            "fr": "L'attente des collègues est un levier plus puissant que la seule autorité du manager.",
            "en": "The expectations of peers are a more powerful lever than the manager's authority alone."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le confort qui coûte cher",
            "en": "Costly comfort"
          },
          "body": {
            "fr": "Éviter une conversation difficile pour préserver la relation dégrade en réalité l'équipe entière.",
            "en": "Dodging a hard conversation to protect a relationship actually degrades the whole team."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des standards partagés",
            "en": "Shared standards"
          },
          "body": {
            "fr": "On ne peut tenir quelqu'un responsable que si les objectifs et les standards sont clairs et connus de tous.",
            "en": "You can only hold someone accountable when goals and standards are clear and public."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Rends les attentes visibles",
            "en": "Make expectations visible"
          },
          "body": {
            "fr": "Affiche les objectifs de l'équipe pour que chacun puisse rappeler les autres à leurs engagements.",
            "en": "Publish team goals so anyone can hold others to their commitments."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Dysfonction 5 : l'inattention aux résultats",
        "en": "Dysfunction 5: Inattention to Results"
      },
      "caption": {
        "fr": "Quand l'ego passe avant le score collectif, l'équipe perd. 🏆",
        "en": "When ego comes before the collective score, the team loses. 🏆"
      },
      "tags": [
        "results",
        "ego",
        "teamwork",
        "Lencioni"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le résultat collectif d'abord",
            "en": "Collective results first"
          },
          "body": {
            "fr": "L'ultime dysfonction : faire passer son statut ou son service avant le résultat de l'équipe.",
            "en": "The ultimate dysfunction: putting your status or department ahead of the team's result."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Ego et statut",
            "en": "Ego and status"
          },
          "body": {
            "fr": "Certains cherchent la reconnaissance individuelle ; d'autres protègent leur silo au détriment du tout.",
            "en": "Some chase individual recognition; others protect their silo at the expense of the whole."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Définir le score",
            "en": "Define the scoreboard"
          },
          "body": {
            "fr": "Une équipe axée résultats se fixe des objectifs communs, clairs et mesurables.",
            "en": "A results-focused team sets shared goals that are clear and measurable."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le sommet de la pyramide",
            "en": "The top of the pyramid"
          },
          "body": {
            "fr": "Les quatre premiers niveaux n'existent que pour servir celui-ci : gagner ensemble.",
            "en": "The first four levels exist only to serve this one: winning together."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "L'avantage ultime",
            "en": "The ultimate advantage"
          },
          "body": {
            "fr": "« C'est le travail d'équipe qui reste l'avantage concurrentiel ultime, parce qu'il est à la fois si puissant et si rare. »",
            "en": "\"Teamwork remains the ultimate competitive advantage, both because it is so powerful and so rare.\""
          },
          "attribution": {
            "fr": "Patrick Lencioni",
            "en": "Patrick Lencioni"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "Un seul tableau de bord",
            "en": "One scoreboard"
          },
          "body": {
            "fr": "Choisis quelques résultats collectifs et fais-en la mesure de succès de tous, pas de chacun.",
            "en": "Pick a few collective results and make them everyone's measure of success, not each person's own."
          }
        }
      ]
    }
  ],
  "measure-what-matters": [
    {
      "concept": {
        "fr": "Les OKR : Objectifs et Résultats Clés",
        "en": "OKRs: Objectives and Key Results"
      },
      "caption": {
        "fr": "Fixer un cap, le mesurer, l'atteindre : la méthode qui a fait décoller Google 🎯",
        "en": "Set a direction, measure it, hit it: the method that scaled Google 🎯"
      },
      "tags": [
        "OKR",
        "objectifs",
        "execution",
        "Doerr"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "C'est quoi un OKR ?",
            "en": "What is an OKR?"
          },
          "body": {
            "fr": "La méthode de fixation d'objectifs que John Doerr a apportée chez Google en 1999.",
            "en": "The goal-setting method John Doerr brought to Google in 1999."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Objectif = le QUOI",
            "en": "Objective = the WHAT"
          },
          "body": {
            "fr": "Ce que vous voulez accomplir. Significatif, concret, orienté action et inspirant.",
            "en": "What you want to accomplish. Significant, concrete, action-oriented and inspiring."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Résultats Clés = le COMMENT",
            "en": "Key Results = the HOW"
          },
          "body": {
            "fr": "Comment vous mesurez la progression vers l'objectif. Chiffrés et vérifiables : on sait sans discuter si c'est atteint.",
            "en": "How you measure progress toward the objective. Numeric and verifiable: no debate about whether it's done."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La formule de Doerr",
            "en": "Doerr's formula"
          },
          "body": {
            "fr": "\"Je vais accomplir ___ mesuré par ___.\" Un objectif, quelques résultats clés qui le prouvent.",
            "en": "\"I will accomplish ___ as measured by ___.\" One objective, a few key results that prove it."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "L'idée ne suffit pas",
            "en": "Ideas aren't enough"
          },
          "body": {
            "fr": "\"Les idées sont faciles. L'exécution, c'est tout.\"",
            "en": "\"Ideas are easy. Execution is everything.\""
          },
          "attribution": {
            "fr": "John Doerr",
            "en": "John Doerr"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Écrivez UN objectif clair, puis 3 résultats clés chiffrés qui prouvent que vous y êtes. Le vague ne se mesure pas.",
            "en": "Write ONE clear objective, then 3 numeric key results that prove you got there. Vague can't be measured."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Superpouvoir n°1 : Focus",
        "en": "Superpower #1: Focus"
      },
      "caption": {
        "fr": "Dire oui à tout, c'est ne s'engager sur rien. Choisissez ce qui compte vraiment ✂️",
        "en": "Saying yes to everything means committing to nothing. Pick what truly matters ✂️"
      },
      "tags": [
        "focus",
        "priorites",
        "OKR",
        "engagement"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Se concentrer et s'engager",
            "en": "Focus and commit"
          },
          "body": {
            "fr": "Le premier des quatre superpouvoirs des OKR selon Doerr : choisir ce qui compte.",
            "en": "The first of Doerr's four OKR superpowers: choosing what counts."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Moins, mais mieux",
            "en": "Less, but better"
          },
          "body": {
            "fr": "Limitez-vous à 3 à 5 objectifs par cycle. Trop d'objectifs dilue l'effort et brouille les priorités.",
            "en": "Cap yourself at 3 to 5 objectives per cycle. Too many goals dilute effort and blur priorities."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Choisir, c'est renoncer",
            "en": "To choose is to give up"
          },
          "body": {
            "fr": "Un OKR dit tout autant ce que vous NE ferez PAS. Nommer les priorités rend les arbitrages explicites pour tous.",
            "en": "An OKR says just as much about what you WON'T do. Naming priorities makes trade-offs explicit for everyone."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le cap vient d'en haut",
            "en": "Direction from the top"
          },
          "body": {
            "fr": "Les dirigeants doivent s'engager publiquement sur les priorités. Sans exemple au sommet, l'organisation ne suit pas.",
            "en": "Leaders must publicly commit to the priorities. Without an example at the top, the organization won't follow."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Demandez-vous : \"Qu'est-ce qui compte le plus dans les 3 prochains mois ?\" Tout le reste attend.",
            "en": "Ask yourself: \"What matters most in the next 3 months?\" Everything else waits."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Superpouvoir n°2 : Alignement transparent",
        "en": "Superpower #2: Transparent alignment"
      },
      "caption": {
        "fr": "Chez Google, les OKR de chacun sont publics, du PDG au stagiaire 🔓",
        "en": "At Google, everyone's OKRs are public, from CEO to intern 🔓"
      },
      "tags": [
        "alignement",
        "transparence",
        "teamwork",
        "OKR"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "S'aligner et se connecter",
            "en": "Align and connect"
          },
          "body": {
            "fr": "Deuxième superpouvoir : rendre les objectifs de chacun visibles pour tous.",
            "en": "The second superpower: making everyone's goals visible to everyone."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La transparence par défaut",
            "en": "Transparency by default"
          },
          "body": {
            "fr": "Les OKR sont ouverts et partagés. Chacun voit à quoi travaillent les autres, ce qui crée la confiance et la cohérence.",
            "en": "OKRs are open and shared. Everyone sees what others are working on, which builds trust and coherence."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas seulement du haut vers le bas",
            "en": "Not just top-down"
          },
          "body": {
            "fr": "Doerr recommande qu'environ la moitié des OKR viennent du terrain. Les objectifs imposés motivent moins que ceux choisis.",
            "en": "Doerr suggests roughly half of OKRs bubble up from the teams. Imposed goals motivate less than chosen ones."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Connecter les efforts",
            "en": "Connect the efforts"
          },
          "body": {
            "fr": "Quand les objectifs sont liés et visibles, les équipes cassent les silos et voient comment leur travail sert le tout.",
            "en": "When goals are linked and visible, teams break silos and see how their work serves the whole."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Publiez vos objectifs là où l'équipe les voit. La transparence transforme des efforts isolés en effort commun.",
            "en": "Post your goals where the team can see them. Transparency turns isolated efforts into a shared one."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Superpouvoir n°3 : Suivre et noter",
        "en": "Superpower #3: Track and grade"
      },
      "caption": {
        "fr": "Un objectif qu'on ne suit pas est un vœu pieux. Notez, ajustez, recommencez 📊",
        "en": "A goal you don't track is just a wish. Score it, adjust, repeat 📊"
      },
      "tags": [
        "suivi",
        "responsabilite",
        "grading",
        "OKR"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Suivre pour la responsabilité",
            "en": "Track for accountability"
          },
          "body": {
            "fr": "Troisième superpouvoir : les OKR se pilotent, se révisent et se notent en continu.",
            "en": "The third superpower: OKRs get monitored, revised and graded continuously."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Des points d'étape réguliers",
            "en": "Regular check-ins"
          },
          "body": {
            "fr": "On ne fixe pas un OKR pour l'oublier. Des revues fréquentes permettent de corriger le tir avant qu'il soit trop tard.",
            "en": "You don't set an OKR and forget it. Frequent reviews let you course-correct before it's too late."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Noter de 0 à 1,0",
            "en": "Score from 0 to 1.0"
          },
          "body": {
            "fr": "À la fin du cycle, chaque résultat clé reçoit une note. Le chiffre force l'honnêteté sur ce qui a marché ou non.",
            "en": "At cycle's end, each key result gets a grade. The number forces honesty about what worked and what didn't."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La note n'est pas une sanction",
            "en": "The grade isn't a punishment"
          },
          "body": {
            "fr": "La note sert à apprendre, pas à juger. On l'accompagne d'une réflexion : que garder, ajuster ou abandonner ?",
            "en": "The score is for learning, not judging. Pair it with reflection: what to keep, adjust or drop?"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Programmez une revue hebdomadaire et une note en fin de cycle. Ce qui est suivi avance ; ce qui est noté s'améliore.",
            "en": "Schedule a weekly review and an end-of-cycle score. What's tracked moves; what's graded improves."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Superpouvoir n°4 : Viser l'exceptionnel",
        "en": "Superpower #4: Stretch for amazing"
      },
      "caption": {
        "fr": "Si vous atteignez 100 % de vos objectifs, ils étaient trop faciles 🚀",
        "en": "If you hit 100% of your goals, they were too easy 🚀"
      },
      "tags": [
        "moonshot",
        "stretch",
        "ambition",
        "OKR"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Viser l'exceptionnel",
            "en": "Stretch for amazing"
          },
          "body": {
            "fr": "Quatrième superpouvoir : les objectifs ambitieux poussent les équipes au-delà de ce qu'elles croyaient possible.",
            "en": "The fourth superpower: ambitious goals push teams beyond what they thought possible."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Engagés vs aspirationnels",
            "en": "Committed vs aspirational"
          },
          "body": {
            "fr": "Les OKR engagés doivent être atteints à 100 %. Les OKR aspirationnels (moonshots) sont volontairement hors de portée facile.",
            "en": "Committed OKRs must reach 100%. Aspirational OKRs (moonshots) are deliberately beyond easy reach."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La zone des 70 %",
            "en": "The 70% zone"
          },
          "body": {
            "fr": "Pour un objectif aspirationnel, atteindre ~70 % est un succès. Un 100 % systématique signale des ambitions trop timides.",
            "en": "For an aspirational goal, hitting ~70% is a win. Always scoring 100% signals your ambitions were too timid."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Penser en 10x",
            "en": "Think 10x"
          },
          "body": {
            "fr": "Doerr et Google valorisent le progrès radical : viser 10 fois mieux plutôt que 10 % de plus ouvre des solutions nouvelles.",
            "en": "Doerr and Google prize radical progress: aiming for 10x better, not 10% more, unlocks entirely new solutions."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Séparez vos \"incontournables\" de vos \"paris ambitieux\". Sur les seconds, échouer à moitié vaut mieux que réussir petit.",
            "en": "Separate your \"must-haves\" from your \"ambitious bets.\" On the latter, falling short big beats succeeding small."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Les CFR : le complément humain des OKR",
        "en": "CFRs: the human companion to OKRs"
      },
      "caption": {
        "fr": "Oubliez l'évaluation annuelle : parlez, donnez du feedback, reconnaissez, en continu 💬",
        "en": "Ditch the annual review: talk, give feedback, recognize, continuously 💬"
      },
      "tags": [
        "CFR",
        "feedback",
        "management",
        "performance"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Conversations, Feedback, Reconnaissance",
            "en": "Conversations, Feedback, Recognition"
          },
          "body": {
            "fr": "Doerr associe aux OKR les CFR : la gestion continue de la performance qui remplace l'évaluation annuelle.",
            "en": "Doerr pairs OKRs with CFRs: continuous performance management that replaces the annual review."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Conversations",
            "en": "Conversations"
          },
          "body": {
            "fr": "Des échanges réguliers et authentiques entre manager et collaborateur, centrés sur la progression, pas sur la note.",
            "en": "Regular, authentic exchanges between manager and employee, focused on progress rather than a rating."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Feedback",
            "en": "Feedback"
          },
          "body": {
            "fr": "Un retour bidirectionnel et fréquent entre pairs et équipes, pour ajuster en temps réel plutôt qu'une fois par an.",
            "en": "Two-way, frequent feedback among peers and teams, to adjust in real time instead of once a year."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Reconnaissance",
            "en": "Recognition"
          },
          "body": {
            "fr": "Célébrer les contributions, grandes et petites. La reconnaissance fondée sur les faits nourrit l'engagement durable.",
            "en": "Celebrate contributions, big and small. Fact-based recognition fuels lasting engagement."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Les OKR fixent le cap, les CFR font avancer les gens. Découplez la conversation de la rémunération pour qu'elle reste honnête.",
            "en": "OKRs set the direction, CFRs move the people. Decouple the conversation from pay so it stays honest."
          }
        }
      ]
    }
  ],
  "good-to-great": [
    {
      "concept": {
        "fr": "Le leadership de niveau 5",
        "en": "Level 5 Leadership"
      },
      "caption": {
        "fr": "Les meilleurs dirigeants ne cherchent pas la lumière, ils la dirigent vers leur entreprise. 🪞",
        "en": "The best leaders don't seek the spotlight, they shine it on the company. 🪞"
      },
      "tags": [
        "Level5",
        "leadership",
        "humility",
        "GoodToGreat"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le leader de niveau 5",
            "en": "The Level 5 Leader"
          },
          "body": {
            "fr": "Collins constate que chaque entreprise passée du bon au grand était dirigée par un leader mêlant une profonde humilité personnelle à une volonté professionnelle féroce.",
            "en": "Collins found that every good-to-great company was led by someone blending deep personal humility with fierce professional will."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Un mélange paradoxal",
            "en": "A paradoxical blend"
          },
          "body": {
            "fr": "Modeste et discret sur lui-même, mais implacable dès qu'il s'agit du succès de l'entreprise. Ni ego démesuré, ni faiblesse.",
            "en": "Modest and self-effacing, yet relentless about the company's success. Neither ego nor weakness."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'ambition dirigée vers l'entreprise",
            "en": "Ambition aimed at the company"
          },
          "body": {
            "fr": "Le leader de niveau 5 canalise son ambition non pas vers lui-même, mais vers un but plus large : bâtir une entreprise durable.",
            "en": "The Level 5 leader channels ambition away from himself and into the larger goal of building a lasting company."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La fenêtre et le miroir",
            "en": "The window and the mirror"
          },
          "body": {
            "fr": "En cas de succès, il regarde par la fenêtre (les autres, la chance). En cas d'échec, il se regarde dans le miroir.",
            "en": "In success, he looks out the window (others, luck). In failure, he looks in the mirror."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Prépare la réussite de ceux qui te succéderont. Le vrai leadership se mesure à ce qui dure sans toi.",
            "en": "Set up your successors to win. Real leadership is measured by what endures without you."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "D'abord qui, ensuite quoi",
        "en": "First Who, Then What"
      },
      "caption": {
        "fr": "Choisis les bonnes personnes avant de choisir la destination. 🚌",
        "en": "Pick the right people before you pick the destination. 🚌"
      },
      "tags": [
        "FirstWhoThenWhat",
        "hiring",
        "team",
        "strategy"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "D'abord qui, ensuite quoi",
            "en": "First Who, Then What"
          },
          "body": {
            "fr": "Les grandes entreprises ne définissent pas d'abord une vision : elles réunissent les bonnes personnes, puis décident ensemble où aller.",
            "en": "Great companies don't set a vision first: they get the right people, then decide together where to go."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La métaphore du bus",
            "en": "The bus metaphor"
          },
          "body": {
            "fr": "Fais monter les bonnes personnes dans le bus, descendre les mauvaises, et place chacun au bon siège. Ensuite seulement, choisis la route.",
            "en": "Get the right people on the bus, the wrong people off, and the right people in the right seats. Only then decide where to drive."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Les personnes ne sont pas l'atout",
            "en": "People aren't the asset"
          },
          "body": {
            "fr": "Ce ne sont pas les gens qui sont votre bien le plus précieux, mais les bonnes personnes. La distinction change tout.",
            "en": "People aren't your most important asset. The right people are. That distinction changes everything."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Le vrai plafond de croissance",
            "en": "The real limit on growth"
          },
          "body": {
            "fr": "Selon Collins, le vrai plafond de croissance n'est ni le marché ni la technologie : c'est la capacité à attirer et retenir assez de bonnes personnes.",
            "en": "For Collins, the real ceiling on growth isn't the market or technology: it's the ability to get and keep enough of the right people."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Avec les bonnes personnes, le problème de la motivation s'efface en grande partie de lui-même. Recrute d'abord pour le caractère.",
            "en": "With the right people, motivation largely takes care of itself. Hire first for character."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le paradoxe de Stockdale",
        "en": "The Stockdale Paradox"
      },
      "caption": {
        "fr": "Garder la foi tout en regardant la réalité en face. 🪖",
        "en": "Keep the faith while facing the brutal truth. 🪖"
      },
      "tags": [
        "StockdaleParadox",
        "brutalfacts",
        "resilience",
        "realism"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Affronter les faits bruts",
            "en": "Confront the brutal facts"
          },
          "body": {
            "fr": "Les grandes entreprises regardent leur réalité en face, aussi dure soit-elle, sans jamais perdre la foi en l'issue finale.",
            "en": "Great companies confront their reality, however harsh, without ever losing faith in the final outcome."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'amiral Stockdale",
            "en": "Admiral Stockdale"
          },
          "body": {
            "fr": "Prisonnier de guerre au Vietnam pendant des années, Stockdale a survécu là où les optimistes naïfs sombraient : ils espéraient être libérés pour Noël, et se retrouvaient brisés à chaque déception.",
            "en": "A prisoner of war in Vietnam for years, Stockdale survived where naive optimists broke: they kept hoping to be out by Christmas, and were crushed each time it didn't happen."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Deux vérités à la fois",
            "en": "Two truths at once"
          },
          "body": {
            "fr": "Ne jamais confondre la foi que l'on finira par l'emporter avec la discipline d'affronter les faits les plus brutaux du présent.",
            "en": "Never confuse faith that you'll prevail in the end with the discipline to confront the most brutal facts of your current reality."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Créer un climat de vérité",
            "en": "Create a climate of truth"
          },
          "body": {
            "fr": "Pose des questions au lieu d'imposer des réponses, débats sans blâmer, et mets en place des mécanismes d'alerte impossibles à ignorer.",
            "en": "Lead with questions not answers, debate without blame, and build red-flag mechanisms that can't be ignored."
          }
        },
        {
          "kind": "quote",
          "title": {
            "fr": "Le paradoxe",
            "en": "The paradox"
          },
          "body": {
            "fr": "« Vous ne devez jamais confondre la foi que vous finirez par l'emporter — que vous ne pouvez jamais vous permettre de perdre — avec la discipline d'affronter les faits les plus brutaux de votre réalité actuelle, quels qu'ils soient. »",
            "en": "\"You must never confuse faith that you will prevail in the end—which you can never afford to lose—with the discipline to confront the most brutal facts of your current reality, whatever they might be.\""
          },
          "attribution": {
            "fr": "Jim Collins, Good to Great",
            "en": "Jim Collins, Good to Great"
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "L'optimisme aveugle tue. Combine un espoir inébranlable et une lucidité totale sur ta situation.",
            "en": "Blind optimism kills. Pair unshakeable hope with total honesty about your situation."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le concept du hérisson",
        "en": "The Hedgehog Concept"
      },
      "caption": {
        "fr": "Une seule grande idée vaut mieux que mille petites. 🦔",
        "en": "One big idea beats a thousand small ones. 🦔"
      },
      "tags": [
        "HedgehogConcept",
        "focus",
        "strategy",
        "threecircles"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le concept du hérisson",
            "en": "The Hedgehog Concept"
          },
          "body": {
            "fr": "Le renard sait mille choses, le hérisson en sait une seule, mais essentielle. Les entreprises qui durent ramènent un monde complexe à une seule idée directrice.",
            "en": "The fox knows many things, the hedgehog one big thing. Enduring companies distill a complex world into one guiding idea."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Cercle 1 : la passion",
            "en": "Circle 1: passion"
          },
          "body": {
            "fr": "Ce qui vous passionne profondément. On ne fabrique pas la passion, on la découvre.",
            "en": "What you are deeply passionate about. You don't manufacture passion, you discover it."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Cercle 2 : l'excellence",
            "en": "Circle 2: excellence"
          },
          "body": {
            "fr": "Ce dans quoi vous pouvez être le meilleur du monde, et tout aussi crucial, ce dans quoi vous ne pouvez pas l'être.",
            "en": "What you can be the best in the world at, and just as crucially, what you cannot be the best at."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Cercle 3 : le moteur économique",
            "en": "Circle 3: the economic engine"
          },
          "body": {
            "fr": "Ce qui alimente votre moteur économique, souvent résumé par un seul dénominateur : le profit par « x ».",
            "en": "What drives your economic engine, often captured by a single denominator: profit per 'x'."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Ton hérisson vit à l'intersection des trois cercles. Tout ce qui est en dehors, tu dois avoir la discipline de le refuser.",
            "en": "Your hedgehog lives where the three circles overlap. Everything outside it, you must have the discipline to say no to."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La culture de la discipline",
        "en": "A Culture of Discipline"
      },
      "caption": {
        "fr": "La discipline libère plus qu'elle n'enferme. 🎯",
        "en": "Discipline frees more than it confines. 🎯"
      },
      "tags": [
        "culture",
        "discipline",
        "freedom",
        "management"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Une culture de discipline",
            "en": "A culture of discipline"
          },
          "body": {
            "fr": "Pas de bureaucratie, mais des gens disciplinés menant une pensée disciplinée vers une action disciplinée.",
            "en": "Not bureaucracy, but disciplined people engaging in disciplined thought and taking disciplined action."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Liberté dans un cadre",
            "en": "Freedom within a framework"
          },
          "body": {
            "fr": "La discipline n'est pas la tyrannie. Elle donne aux bonnes personnes liberté et responsabilité à l'intérieur du concept du hérisson.",
            "en": "Discipline isn't tyranny. It gives the right people freedom and responsibility within the framework of the Hedgehog Concept."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Moins de hiérarchie, moins de bureaucratie",
            "en": "Less hierarchy, less bureaucracy"
          },
          "body": {
            "fr": "Avec des gens disciplinés, la hiérarchie pesante devient inutile. Avec une pensée disciplinée, la bureaucratie s'efface.",
            "en": "With disciplined people, you don't need heavy hierarchy. With disciplined thought, bureaucracy fades away."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La liste des choses à cesser",
            "en": "The stop-doing list"
          },
          "body": {
            "fr": "La discipline, c'est aussi arrêter. Collins recommande une « stop-doing list » aussi importante que ta to-do list.",
            "en": "Discipline also means stopping. Collins urges a 'stop-doing list' as important as your to-do list."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Recrute des gens autodisciplinés, puis retire-toi de leur chemin. La discipline remplace le besoin de contrôle.",
            "en": "Hire self-disciplined people, then get out of their way. Discipline replaces the need for control."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "Le volant d'inertie",
        "en": "The Flywheel"
      },
      "caption": {
        "fr": "Le grand n'arrive jamais d'un seul coup. ⚙️",
        "en": "Greatness never happens in one dramatic move. ⚙️"
      },
      "tags": [
        "Flywheel",
        "momentum",
        "consistency",
        "doomloop"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "Le volant d'inertie",
            "en": "The flywheel"
          },
          "body": {
            "fr": "Aucune transformation ne s'est faite d'un seul coup d'éclat. C'est comme pousser un énorme volant, tour après tour, jusqu'à la percée.",
            "en": "No transformation happened in a single leap. It's like pushing a giant flywheel, turn after turn, until breakthrough."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "L'accumulation avant la percée",
            "en": "Buildup before breakthrough"
          },
          "body": {
            "fr": "Chaque poussée s'ajoute à la précédente. De l'extérieur, on ne voit que le résultat soudain, mais à l'intérieur c'est un processus cumulatif.",
            "en": "Each push builds on the last. From outside you see a sudden result, but inside it's a cumulative process."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Pas d'action miracle",
            "en": "No single defining action"
          },
          "body": {
            "fr": "Il n'y a ni programme unique, ni innovation isolée, ni moment de chance qui explique le succès. C'est décision après décision.",
            "en": "There's no single program, lucky break, or miracle moment behind the success. It's decision after decision."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La boucle de l'échec",
            "en": "The doom loop"
          },
          "body": {
            "fr": "À l'inverse, les entreprises qui échouent changent sans cesse de direction, tuant leur élan par des réorganisations et des lubies successives.",
            "en": "By contrast, failing companies keep changing direction, killing momentum with reorganizations and lurching fads."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "Reste cohérent dans une même direction. C'est la constance, pas les gestes spectaculaires, qui fait tourner le volant.",
            "en": "Stay consistent in one direction. Constancy, not dramatic gestures, keeps the flywheel spinning."
          }
        }
      ]
    },
    {
      "concept": {
        "fr": "La technologie comme accélérateur",
        "en": "Technology as an Accelerator"
      },
      "caption": {
        "fr": "La technologie amplifie l'élan, elle ne le crée pas. 🚀",
        "en": "Technology accelerates momentum, it doesn't create it. 🚀"
      },
      "tags": [
        "technology",
        "accelerator",
        "innovation",
        "strategy"
      ],
      "slides": [
        {
          "kind": "cover",
          "title": {
            "fr": "La techno comme accélérateur",
            "en": "Technology as accelerator"
          },
          "body": {
            "fr": "Les grandes entreprises ne se jettent pas sur la technologie par effet de mode. Elles s'en servent pour accélérer un élan déjà existant.",
            "en": "Great companies don't chase technology as a fad. They use it to accelerate momentum that already exists."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "Jamais un point de départ",
            "en": "Never the starting point"
          },
          "body": {
            "fr": "La technologie ne déclenche jamais une transformation à elle seule. Elle vient après le hérisson, pas avant.",
            "en": "Technology by itself never sparks a transformation. It comes after the Hedgehog, not before."
          }
        },
        {
          "kind": "point",
          "title": {
            "fr": "La bonne question",
            "en": "The right question"
          },
          "body": {
            "fr": "N'adopte une technologie que si elle s'inscrit directement dans ton concept du hérisson. Sinon, tu peux t'en passer.",
            "en": "Adopt a technology only if it fits directly within your Hedgehog Concept. Otherwise, you don't need it."
          }
        },
        {
          "kind": "takeaway",
          "title": {
            "fr": "À retenir",
            "en": "Takeaway"
          },
          "body": {
            "fr": "La technologie est une pédale d'accélérateur, pas un moteur. Ce qui compte, c'est d'abord ce que tu conduis.",
            "en": "Technology is an accelerator pedal, not the engine. What matters is what you're driving in the first place."
          }
        }
      ]
    }
  ]
}
