import type { L } from '../types'

/**
 * Contenu au niveau du LIVRE (pas du concept), bilingue :
 * - `pitch`  : la description sous le post — présente le livre pour donner envie.
 * - `blurb`  : l'aperçu injecté en slide 2 — donne le contexte du livre.
 *
 * Rempli livre par livre. Un livre sans entrée garde le comportement d'origine.
 */
export interface BookExtra {
  pitch: L
  blurb: L
}

export const bookExtras: Record<string, BookExtra> = {
  'atomic-habits': {
    pitch: {
      fr: "Le guide culte pour arrêter de compter sur la motivation et construire des habitudes qui tiennent vraiment. Concret et appuyé sur la science du comportement, il change la façon dont on bâtit sa vie — un petit geste à la fois. ⚛️",
      en: 'The cult guide to stop relying on motivation and build habits that actually stick. Practical and grounded in behavioral science, it changes how you build your life — one small action at a time. ⚛️',
    },
    blurb: {
      fr: "Devenu une référence mondiale du développement personnel, Atomic Habits propose un système complet pour transformer ses habitudes. L'idée centrale : ce ne sont pas les objectifs, mais les petites routines quotidiennes, composées dans le temps, qui décident de nos résultats.",
      en: 'Now a global reference in personal growth, Atomic Habits lays out a complete system for transforming your habits. Its core idea: it isn\'t goals but the small daily routines, compounded over time, that decide your results.',
    },
  },
}
