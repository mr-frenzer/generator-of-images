document.addEventListener('DOMContentLoaded', () => {
    const topicInput = document.getElementById('topic');
    const styleInput = document.getElementById('style');
    const colorInput = document.getElementById('color');
    const additionalInput = document.getElementById('additional');
    const generateBtn = document.getElementById('generateBtn');
    const generateRandomBtn = document.getElementById('generateRandomBtn');
    const promptOutput = document.getElementById('promptOutput');
    const bingButton = document.getElementById('bingButton');

    const prettyQualities = ["beautiful", "stunning", "lovely", "charming", "delightful", "elegant", "graceful", "picturesque", "vibrant", "radiant", "gorgeous", "exquisite", "serene", "ethereal", "sublime", "captivating", "alluring", "enchanting", "divine", "heavenly"];
    const creativeElements = [
        "imaginative", "unique", "original", "innovative", "dreamlike", "whimsical", "fantasy-like", "surreal", "abstract", "conceptual",
        "visionary", "artistic", "expressive", "poetic", "metaphorical", "symbolic", "narrative", "mythical", "legendary", "fanciful",
        "quirky", "unconventional", "experimental", "avant-garde", "modern", "contemporary", "futuristic", "retro-futuristic", "steampunk", "cyberpunk",
        "biomorphic", "geometric", "organic", "fluid", "dynamic", "static", "minimalist", "maximalist", "ornate", "intricate",
        "detailed", "textured", "layered", "polished", "raw", "gritty", "smooth", "glossy", "matte", "iridescent",
        "luminescent", "glowing", "shimmering", "sparkling", "dazzling", "vivid", "intense", "muted", "soft", "bold",
        "playful", "joyful", "melancholic", "nostalgic", "mysterious", "enigmatic", "ethereal", "celestial", "cosmic", "galactic",
        "botanical", "zoological", "architectural", "scenic", "panoramic", "close-up", "wide-angle", "birds-eye view", "worms-eye view", "still life",
        "portrait", "landscape", "seascape", "cityscape", "nightscape", "dawn scene", "dusk scene", "golden hour", "blue hour", "cinematic",
        "photorealistic", "hyperrealistic", "stylized", "illustrated", "painted", "sculpted", "drawn", "etched", "engraved", "digitally rendered"
    ];
    const randomTopics = [
        "a serene landscape with rolling hills", "a futuristic cityscape at night", "a magical creature in an enchanted forest", "an abstract art piece with flowing lines", "a cozy cottage nestled in a snowy landscape", "a vibrant marketplace bustling with activity",
        "a majestic lion overlooking the savanna", "a playful group of otters in a river", "a lone astronaut on a distant planet", "a hidden portal to another dimension", "a steampunk airship soaring through the clouds", "a bioluminescent underwater world",
        "a field of wildflowers in full bloom", "an ancient temple overgrown with vines", "a crystal cave filled with shimmering light", "a giant tree with a house built in its branches", "a flock of colorful birds taking flight", "a mystical library with floating books",
        "a robot tending a garden", "a group of children playing in a sunlit meadow", "a peaceful tea ceremony in a traditional setting", "a lively jazz band performing on stage", "a detailed map of a forgotten land", "a collection of antique scientific instruments",
        "a close-up of a dewdrop on a spiderweb", "a panoramic view from a mountain summit", "a swirling galaxy filled with stars", "a single lighthouse standing against a stormy sea", "a hot air balloon rising above a patchwork of fields", "a glasshouse filled with exotic plants",
        "a stone bridge arching over a clear stream", "a waterfall cascading into a turquoise pool", "a desert oasis teeming with life", "an ice cave with intricate formations", "a volcanic eruption spewing lava and ash", "a field of sunflowers stretching to the horizon",
        "a vineyard at sunset with rows of grapevines", "a fishing village with colorful boats docked in the harbor", "a medieval castle silhouetted against the moon", "a modern art museum with striking sculptures", "a botanical garden showcasing rare flowers", "a wildlife sanctuary protecting endangered animals",
        "a coral reef teeming with marine life", "a sandy beach with palm trees swaying in the breeze", "a snowy forest with tracks of wild animals", "a foggy moor with ancient standing stones", "a lush rainforest with exotic birds and insects", "a bamboo forest with dappled sunlight",
        "a wheat field swaying in the wind", "a lavender field in Provence", "a tulip field in the Netherlands", "a cherry blossom festival in Japan", "a rice paddy reflecting the sky", "a salt flat stretching to infinity", "a tundra landscape with grazing reindeer",
        "a canyon carved by a winding river", "a mesa rising from the desert floor", "a glacier slowly carving through a valley", "a geyser erupting with hot water", "a cave system with underground rivers", "a sinkhole revealing a hidden world", "a cloud city floating in the sky",
        "a subterranean civilization beneath the earth", "a time portal flickering with energy", "a dreamlike landscape with floating islands", "a world made of candy and sweets", "a city built on the back of a giant creature", "a society living in harmony with nature",
        "a celebration with colorful lanterns and decorations", "a parade with elaborate floats and costumes", "a festival with traditional music and dance", "a gathering around a crackling bonfire", "a quiet moment of reflection in nature", "a sense of adventure in an unknown place",
        "a feeling of nostalgia for a bygone era", "a burst of joy and laughter", "a moment of quiet contemplation", "a sense of mystery and intrigue", "a feeling of peace and tranquility", "a spark of inspiration", "a touch of magic in the ordinary", "a glimpse into the future",
        "a whisper from the past", "an echo of a forgotten song", "a dance of light and shadow", "a symphony of colors", "a tapestry of textures", "a balance of chaos and order", "a study in contrasts", "a celebration of life", "a journey of discovery", "a moment of connection"
    ];
    const randomStyles = ["watercolor", "oil painting", "sketch", "pixel art", "photorealistic", "abstract"];
    const randomColors = ["pastel shades", "vibrant colors", "monochromatic", "earth tones", "neon hues"];
    const randomAdditionals = [
        "under a soft glow", "with intricate details", "in a dreamlike setting", "with a sense of wonder", "bathed in sunlight", "casting long shadows", "with a shallow depth of field", "with a bokeh effect", "in sharp focus", "with a blurred background",
        "during a gentle rain", "amidst a swirling mist", "under a clear blue sky", "at the break of dawn", "in the twilight hours", "illuminated by moonlight", "with stars twinkling above", "surrounded by lush foliage", "on a windswept plain", "nestled in the mountains",
        "reflecting in a still lake", "with ripples on the water", "frozen in time", "in motion blur", "with a sense of speed", "exuding tranquility", "full of energy", "bursting with color", "in shades of gray", "with a vintage feel",
        "incorporating geometric patterns", "featuring organic shapes", "with a touch of whimsy", "hinting at a hidden story", "evoking a sense of peace", "inspiring curiosity", "with a touch of magic", "in a state of flux", "showing a moment of stillness",
        "with textures that invite touch", "using light and shadow dramatically", "with a focus on form", "celebrating color", "exploring negative space", "with a strong sense of perspective", "leading the eye through the scene", "creating a sense of depth", "with subtle nuances", "making a bold statement",
        "in a miniature scale", "on a grand scale", "as seen through a keyhole", "from an unusual angle", "with a distorted perspective", "in a mirror reflection", "as a silhouette", "with a glowing aura", "emitting a soft light", "with a crackled texture",
        "adorned with delicate ornaments", "featuring bold brushstrokes", "created with meticulous precision", "showing signs of age", "in pristine condition", "with a raw and unfinished look", "polished to perfection", "etched with fine lines", "painted with vibrant hues", "sculpted from a rare material",
        "as if captured on film", "reminiscent of a classic painting", "with a modern twist", "inspired by ancient mythology", "drawing from futuristic concepts", "blending different styles", "pushing the boundaries of imagination", "a testament to creativity", "a visual symphony", "a feast for the eyes"
    ];

    generateBtn.addEventListener('click', () => {
        const topic = topicInput.value.trim();
        const style = styleInput.value.trim();
        const color = colorInput.value.trim();
        const additional = additionalInput.value.trim();

        if (!topic) {
            promptOutput.textContent = "Please enter a topic for your image.";
            return;
        }

        const randomPretty = prettyQualities[Math.floor(Math.random() * prettyQualities.length)];
        const randomCreative = creativeElements[Math.floor(Math.random() * creativeElements.length)];

        let prompt = `${randomPretty} and ${randomCreative} image of ${topic}`;

        if (style) {
            prompt += ` in the style of ${style}`;
        }

        if (color) {
            prompt += ` with ${color} colors`;
        }

        if (additional) {
            prompt += `, ${additional}`;
        }

        promptOutput.textContent = prompt;
    });

    generateRandomBtn.addEventListener('click', () => {
        console.log("Random button clicked!"); // Debugging log

        const randomPrettyIndex = Math.floor(Math.random() * prettyQualities.length);
        const randomCreativeIndex = Math.floor(Math.random() * creativeElements.length);
        const randomTopicIndex = Math.floor(Math.random() * randomTopics.length);
        const randomStyleIndex = Math.floor(Math.random() * randomStyles.length);
        const randomColorIndex = Math.floor(Math.random() * randomColors.length);
        const randomIndexAdditional = Math.floor(Math.random() * randomAdditionals.length);

        const randomPretty = prettyQualities[randomPrettyIndex];
        const randomCreative = creativeElements[randomCreativeIndex];
        const randomTopic = randomTopics[randomTopicIndex];
        const randomStyle = randomStyles[randomStyleIndex];
        const randomColor = randomColors[randomColorIndex];
        const randomAdditional = randomAdditionals[randomIndexAdditional];

        console.log("Random Pretty:", randomPretty);
        console.log("Random Creative:", randomCreative);
        console.log("Random Topic:", randomTopic);
        console.log("Random Style:", randomStyle);
        console.log("Random Color:", randomColor);
        console.log("Random Additional:", randomAdditional);

        let prompt = `${randomPretty} and ${randomCreative} image of ${randomTopic}`;

        if (Math.random() > 0.5) {
            prompt += ` in the style of ${randomStyle}`;
        }

        if (Math.random() > 0.5) {
            prompt += ` with ${randomColor} colors`;
        }

        if (Math.random() > 0.5) {
            prompt += `, ${randomAdditional}`;
        }

        promptOutput.textContent = prompt;
        console.log("Generated Random Prompt:", prompt); // Debugging log
    });

    bingButton.addEventListener('click', () => {
        window.open('https://www.bing.com/images/create', '_blank');
    });
});