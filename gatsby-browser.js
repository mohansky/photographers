//custom typefaces 
import "@fontsource/fira-sans";

// custom CSS styles 
import "./src/styles/global.scss"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from 'react' 
import SimpleReactLightbox from 'simple-react-lightbox'

export const wrapRootElement = ({ element }) => (
    <SimpleReactLightbox>
      {element}
    </SimpleReactLightbox>
)
