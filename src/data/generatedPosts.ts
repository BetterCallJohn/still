import type { RawPost } from '../types'

// Contenu généré (posts par livre). Rempli à partir du workflow multi-agents.
// Clé = id du livre (voir bookMeta), valeur = liste de posts.
export const postsByBook: Record<string, RawPost[]> = {}
