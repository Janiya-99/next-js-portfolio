# Image provenance and generation prompts

The owner explicitly supplied the portrait references and asked to use `images/profile.jpg`, allowing image generation/editing where needed. The original files were not modified. No API/CLI fallback was used: both edited compositions were made using the **built-in image generation tool** and optimized to WebP for this project.

## Saved assets

- `public/images/janith-hero.webp` — wide edited hero based on `images/profile.jpg` (1672 × 941).
- `public/images/janith-working.webp` — edited desk/laptop portrait based on `images/profile.jpg` (1122 × 1402).
- `public/images/janith-portrait.webp` — the owner's separately attached studio portrait, compressed without changing the image composition (1122 × 1402).
- `public/social-preview.png` — browser capture of the implemented homepage, not a separate generated design.

## Hero prompt

Use case: identity-preserve. Asset type: photorealistic wide website hero background, landscape 16:9. Edit the supplied photo into a premium dark editorial portfolio portrait. Preserve this exact man's identity, face, curly hair, beard, skin tone, black t-shirt, sunglasses resting on his head, and relaxed seated pose on wooden stairs. Reframe him on the RIGHT THIRD of a wide cinematic composition: head centered near x=76%, face near y=30%, upper body and bent knee visible. Extend the natural wooden staircase and softly blurred indoor plants behind him. The LEFT HALF must be almost black, very softly textured, unobstructed negative space for white website text; no other person, no bright objects there. Warm subtle amber daylight on his face and natural wood with deep charcoal-black shadows. Realistic, sophisticated natural photography, shallow depth of field, no plastic skin. Keep him recognizably identical to the source. No text, no lettering, no UI, no logos, no watermark. The resulting image itself must be one continuous edge-to-edge photograph, not a website mockup.

## About-preview prompt

Use case: identity-preserve. Asset type: editorial About section portrait for a software engineer's personal portfolio. Create a photorealistic portrait of the EXACT man in the reference image, preserving his face, beard, curly hair, skin tone, black t-shirt, and sunglasses atop his head. He is seated at a natural wooden desk, looking down thoughtfully at an open dark laptop as he works. Same recognizable identity, natural posture, no beautification or changed facial features. Composition portrait 4:5, waist-up, man on right-center, laptop lower-left foreground, plain dark ceramic mug on the desk with NO text, softly blurred plants and warm wooden interior behind him. Premium natural editorial photography, subtly warm amber side light, deep charcoal shadows, low-key dark moody color grade matching an elegant black and warm gold portfolio. Subject's face still clearly readable. No branding, no text, no logos, no writing anywhere, no watermark, no website UI, no extra people.
