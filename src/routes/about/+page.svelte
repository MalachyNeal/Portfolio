<script>
    import { asset } from '$app/paths';
    import { PhilosophyCard } from '$lib/components';
</script>


<svelte:head>
    <title>About | Starter Kit</title>
</svelte:head>

<section class="gallery section-gallery">
    <h2>Philosophical Inspirations</h2>
    <div class="grid">
         <p>
            This project was designed as a learning platform and design reference for aspiring front-end developers.
            It introduces foundational concepts in web design, UI/UX principles, accessibility, and mindful development,
            rooted in philosophies of balance, self-discipline, and continuous growth.
        </p>

        <figure>
            <img src={asset("/images/about/bamboo.png")} alt="Tranquil Path through Bamboo Forest" />
            <figcaption>
                A winding path through bamboo — evoking balance, flexibility, and quiet persistence.
            </figcaption>
        </figure>
    </div>
</section>


<style>
    section {
        margin-bottom: var(--space-xl);
        padding: var(--space-lg) var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        animation: fadeIn 0.6s ease-in;
    }

    section h2 {
        font-family: var(--font-heading);
        font-size: var(--font-xl);
        margin-bottom: var(--space-sm);
        text-align: center;
        position: relative;
    }

    section h2::after {
        content: "";
        display: block;
        height: 2px;
        width: 60px;
        margin: var(--space-xs) auto 0 auto;
        background: var(--color-accent);
        border-radius: var(--radius-sm);
    }

    /* Section: Gallery */
    .section-gallery {
        background-image: url("/images/backgrounds/rice-texture.png");
        background-size: 800px;
        background-repeat: repeat;
        background-position: bottom center;
        opacity: 0.95;
    }

    p {
        font-size: var(--font-base);
        color: var(--text-secondary);
        max-width: 700px;
        margin: 0 auto var(--space-md);
        text-align: center;
        line-height: 1.8;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: var(--space-lg);
        max-width: 1100px;
        margin: 0 auto;
    }

    figure {
        margin: 0;
        background: var(--color-background);
        border-radius: var(--radius-sm);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
    }

    figure img {
        width: 100%;
        height: auto;
        display: block;
    }

    figcaption {
        padding: var(--space-sm);
        font-size: var(--font-sm);
        color: var(--text-secondary);
        text-align: center;
        background: var(--color-surface);
        font-style: italic;
    }

    /* Animations */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive tweaks */
    @media (max-width: 768px) 
    {
        .grid {
            grid-template-columns: 1fr;
        }

        section h2 {
            font-size: var(--font-lg);
        }
    }

</style>