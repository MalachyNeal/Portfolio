import { writable, derived } from 'svelte/store';

/**
 * Catalogue of resources promoting healthy, mindful, and disciplined living.
 * Each item is structured for use with Card and Modal components.
 */
const initialCatalogue = [
    {
        id: "1",
        title: "Morning Stretch Ritual",
        description: "A gentle full-body stretch routine rooted in yoga and shinobi practices to awaken body and mind.",
        category: "movement",
        tags: ["mindfulness", "morning", "mobility"],
        featured: false,
        image: "/images/catalogue/item-1.png"
    },
    {
        id: "2",
        title: "Digital Declutter",
        description: "A mindful practice of clearing digital clutter from your phone, desktop, and online space.",
        category: "focus",
        tags: ["focus", "discipline", "organisation"],
        featured: false,
        image: "/images/catalogue/item-2.png"
    },
];


// Writable store
export const catalogue = writable(initialCatalogue);


// Derived store: unique categories
export const categories = derived(catalogue, $catalogue => {
    const set = new Set($catalogue.map(item => item.category));
    return Array.from(set).sort();
});


// Derived store: unique tags (flattened and sorted)
export const tags = derived(catalogue, $catalogue => {
    const allTags = $catalogue.flatMap(item => item.tags || []);
    const tagSet = new Set(allTags.map(tag => tag.trim().toLowerCase()));
    return Array.from(tagSet).sort();
});
