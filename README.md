# OCTA Landing

## Getting Started

### How to change the text?

All text content located in the `src/text.config.json` file.

In order to change the text, you need to:

1. Locate the text you'd like to change in the file.
2. Replace the text with the new one.

    <details>
      <summary>Additional info</summary>

      - In order to change headings of the "Bento" component, you need to change keys.

          For example, change "COD" -> "COD Example"

          **Before:**

          ```json
            {
              "bentoBox": {
                "content": {
                  "COD": "Lorem ipsum",
                }
              }
            }
          ```

          **After:**

          ```json
            {
              "bentoBox": {
                "content": {
                  "COD Example": "Lorem ipsum",
                }
              }
            }
          ```

    </details>
3. Commit the changes.

### How to change the images?

In order to change image, you need to:

1. Locate the image in the proper `assets` folder.

    <details>
      <summary>Common locations:</summary>

      - Images for the stickers on the main page are located in `src/screens/LandingView/components/LandingHero/assets/` folder.<br>

      - Images for the "Phone" component are located in `src/screens/LandingView/assets/` folder.

      - Images for the "Bento" component are located in `src/screens/LandingView/components/LandingBentoBox/assets/` folder.

      - Images for the "Mint" page are located in `src/screens/LandingView/components/LandingFeatures/assets/` folder.
    </details>

2. Replace the image with the new one.

    > [!WARNING]
    > Name, extension and aspect ratio of the new image must be the same as the old one.

3. Commit the changes.

### How to change the colors?

All colors located in three files:

- `tailwind.config.js` general color scheme and colors for "Bento" component.
- `src/index.css` default colors, which need to be accessed from the JS code.
- `text.config.json` text and background colors for the "Phone" component.

1. Locate the color you'd like to change in one of the files above.
2. Replace the color with the new one.
3. Commit the changes.
